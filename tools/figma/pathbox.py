# Accurate bounding boxes for SVG path data (M/L/H/V/C/S/Q/Z, absolute + relative).
import re

TOK = re.compile(r'([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:[eE][-+]?\d+)?)')
ARGS = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6, 'S': 4, 'Q': 4, 'T': 2, 'A': 7, 'Z': 0}


def bbox(d):
    toks = []
    for m in TOK.finditer(d):
        toks.append(m.group(1) if m.group(1) else float(m.group(2)))
    xs, ys = [], []
    cx = cy = sx = sy = 0.0
    i = 0
    cmd = None
    while i < len(toks):
        if isinstance(toks[i], str):
            cmd = toks[i]
            i += 1
            if cmd in 'Zz':
                cx, cy = sx, sy
                continue
        if cmd is None:
            i += 1
            continue
        up = cmd.upper()
        rel = cmd.islower()
        n = ARGS[up]
        if i + n > len(toks):
            break
        a = toks[i:i + n]
        i += n
        if up == 'H':
            nx = cx + a[0] if rel else a[0]
            ny = cy
            pts = [(nx, ny)]
        elif up == 'V':
            nx = cx
            ny = cy + a[0] if rel else a[0]
            pts = [(nx, ny)]
        elif up == 'A':
            nx = cx + a[5] if rel else a[5]
            ny = cy + a[6] if rel else a[6]
            pts = [(nx, ny)]
        else:
            pts = []
            for k in range(0, n, 2):
                px = cx + a[k] if rel else a[k]
                py = cy + a[k + 1] if rel else a[k + 1]
                pts.append((px, py))
            nx, ny = pts[-1]
        for px, py in pts:
            xs.append(px)
            ys.append(py)
        if up == 'M':
            sx, sy = nx, ny
            cmd = 'l' if rel else 'L'
        cx, cy = nx, ny
    if not xs:
        return 0.0, 0.0, 0.0, 0.0
    return min(xs), min(ys), max(xs), max(ys)
