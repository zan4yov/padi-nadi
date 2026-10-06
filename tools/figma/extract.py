# Extract exact specs + assets from a Figma SVG export.
#   python extract.py <file.svg> spec <SectionGroupId>
#   python extract.py <file.svg> images <SectionGroupId> <outdir>
#   python extract.py <file.svg> icons  <SectionGroupId> <outdir>
import sys, re, os, base64, hashlib
import xml.etree.ElementTree as ET

NS = '{http://www.w3.org/2000/svg}'
XL = '{http://www.w3.org/1999/xlink}'


def load(path):
    return ET.parse(path).getroot()


def find_group(root, gid):
    for g in root.iter(NS + 'g'):
        if g.get('id') == gid:
            return g
    raise SystemExit('group not found: ' + gid)


def translate_of(el):
    t = el.get('transform') or ''
    m = re.search(r'translate\(([-\d.]+)[ ,]+([-\d.]+)\)', t)
    return (float(m.group(1)), float(m.group(2))) if m else (0.0, 0.0)


def build_image_maps(root):
    """pattern id -> data uri, and image id -> (name, data uri)"""
    imgs = {}
    for im in root.iter(NS + 'image'):
        imgs[im.get('id')] = (im.get('data-name') or 'image', im.get(XL + 'href') or '')
    pats = {}
    for p in root.iter(NS + 'pattern'):
        for u in p.iter(NS + 'use'):
            ref = (u.get(XL + 'href') or '').lstrip('#')
            if ref in imgs:
                pats[p.get('id')] = imgs[ref]
    return pats


def path_bbox(d):
    """Rough bbox from the numeric pairs in a path's data."""
    nums = [float(n) for n in re.findall(r'-?\d+\.?\d*(?:e-?\d+)?', d)]
    xs = nums[0::2] or [0.0]
    ys = nums[1::2] or [0.0]
    return (min(xs), max(xs)), (min(ys), max(ys))


def num(v, nd=2):
    try:
        f = float(v)
    except (TypeError, ValueError):
        return v
    return int(f) if abs(f - round(f)) < 1e-6 else round(f, nd)


def walk(el, ox, oy, depth, out, pats, mode, acc):
    for c in el:
        tag = c.tag.replace(NS, '')
        tx, ty = translate_of(c)
        x, y = ox + tx, oy + ty
        gid = c.get('id') or ''
        if tag == 'g':
            if mode == 'spec' and gid:
                out.append('  ' * depth + '[' + gid + ']')
            walk(c, x, y, depth + 1, out, pats, mode, acc)
        elif tag == 'text':
            fill = c.get('fill') or ''
            fs = num(c.get('font-size'))
            fw = c.get('font-weight') or ''
            ls = c.get('letter-spacing') or ''
            lines = []
            for ts in c.iter(NS + 'tspan'):
                lines.append('%s@%s,%s' % ((ts.text or '').strip(), num(ts.get('x')), num(ts.get('y'))))
            if mode == 'spec':
                out.append('  ' * depth + 'TEXT %s %s %s ls=%s | %s' % (fs, fw, fill, ls or '0', ' // '.join(lines)))
        elif tag == 'rect':
            f = c.get('fill') or ''
            w, h = num(c.get('width')), num(c.get('height'))
            rx = c.get('rx')
            m = re.match(r'url\(#(.+)\)', f or '')
            if m and m.group(1) in pats:
                name, uri = pats[m.group(1)]
                acc.setdefault('images', []).append((gid or name, x, y, w, h, uri))
                if mode == 'spec':
                    out.append('  ' * depth + 'IMG  %s,%s %sx%s %s' % (num(x), num(y), w, h, gid))
            elif mode == 'spec':
                out.append('  ' * depth + 'RECT %s,%s %sx%s r=%s fill=%s' % (num(x), num(y), w, h, rx or 0, f))
        elif tag == 'path':
            d = c.get('d') or ''
            f = c.get('fill') or ''
            st = c.get('stroke') or ''
            m = re.match(r'url\(#(.+)\)', f or '')
            if m and m.group(1) in pats:
                name, uri = pats[m.group(1)]
                xs, ys = path_bbox(d)
                acc.setdefault('images', []).append(
                    (gid or name, x + xs[0], y + ys[0], xs[1] - xs[0], ys[1] - ys[0], uri))
                if mode == 'spec':
                    out.append('  ' * depth + 'IMG  %s,%s %sx%s %s' % (
                        num(x + xs[0]), num(y + ys[0]), num(xs[1] - xs[0]), num(ys[1] - ys[0]), gid))
                continue
            acc.setdefault('paths', []).append((gid, x, y, d, f, st, c.get('stroke-width')))
            if mode == 'spec' and depth <= 6:
                out.append('  ' * depth + 'PATH fill=%s stroke=%s w=%s d=%s' % (f or '-', st or '-', c.get('stroke-width') or '-', d[:60]))


def main():
    path, mode, gid = sys.argv[1], sys.argv[2], sys.argv[3]
    root = load(path)
    pats = build_image_maps(root)
    g = find_group(root, gid)
    ox, oy = translate_of(g)
    out, acc = [], {}
    walk(g, ox, oy, 0, out, pats, mode, acc)

    if mode == 'spec':
        print('\n'.join(out))
        return

    outdir = sys.argv[4]
    os.makedirs(outdir, exist_ok=True)
    if mode == 'images':
        for name, x, y, w, h, uri in acc.get('images', []):
            m = re.match(r'data:image/(\w+);base64,(.*)', uri, re.S)
            if not m:
                continue
            ext = {'jpeg': 'jpg'}.get(m.group(1), m.group(1))
            raw = base64.b64decode(m.group(2))
            slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:48] or 'image'
            fn = os.path.join(outdir, '%s.%s' % (slug, ext))
            n = 2
            while os.path.exists(fn) and open(fn, 'rb').read() != raw:
                fn = os.path.join(outdir, '%s-%d.%s' % (slug, n, ext)); n += 1
            open(fn, 'wb').write(raw)
            print('%8d  %-44s %sx%s at %s,%s' % (len(raw), os.path.basename(fn), w, h, num(x), num(y)))


main()
