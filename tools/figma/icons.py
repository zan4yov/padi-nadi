# python icons.py <svg> <groupId> <outdir>  -> writes deduped icon SVGs, prints placement map
import sys, re, os, hashlib, xml.etree.ElementTree as ET
from pathbox import bbox
NS='{http://www.w3.org/2000/svg}'
f,gid,out=sys.argv[1],sys.argv[2],sys.argv[3]
os.makedirs(out,exist_ok=True)
r=ET.parse(f).getroot()
def tr(e):
    m=re.search(r'translate\(([-\d.]+)[ ,]+([-\d.]+)\)', e.get('transform') or '')
    return (float(m.group(1)),float(m.group(2))) if m else (0.,0.)
def n(v): return int(v) if abs(v-round(v))<1e-6 else round(v,2)
target=[g for g in r.iter(NS+'g') if g.get('id')==gid][0]
found=[]
def collect(e,ox,oy,inicon):
    gi=e.get('id') or ''
    isicon = inicon or re.match(r'^Icon(_\d+)?$', gi)
    paths=[]
    def gather(node,ax,ay):
        for c in node:
            t=c.tag.replace(NS,''); dx,dy=tr(c); x,y=ax+dx,ay+dy
            if t=='g': gather(c,x,y)
            elif t=='path' and not (c.get('fill') or '').startswith('url'):
                paths.append((c,x,y))
    if isicon and not inicon:
        gather(e,ox,oy)
        if paths: found.append((ox,oy,paths))
        return
    for c in e:
        if c.tag==NS+'g':
            dx,dy=tr(c); collect(c,ox+dx,oy+dy,isicon)
collect(target,*tr(target),False)
seen={}
for ox,oy,paths in found:
    xs=[];ys=[]
    for p,px,py in paths:
        x0,y0,x1,y1=bbox(p.get('d') or '')
        xs+= [px+x0,px+x1]; ys+=[py+y0,py+y1]
    if not xs: continue
    sw=max([float(p.get('stroke-width') or 0) for p,_,_ in paths] or [0])
    pad=sw/2
    x0,y0,x1,y1=min(xs)-pad,min(ys)-pad,max(xs)+pad,max(ys)+pad
    w,h=x1-x0,y1-y0
    body=''
    for p,px,py in paths:
        a=dict(p.attrib); a.pop('id',None)
        a['transform']='translate(%s %s)'%(n(px-x0),n(py-y0))
        body+='<path '+' '.join('%s="%s"'%(k,v) for k,v in a.items())+'/>'
    svg='<svg xmlns="http://www.w3.org/2000/svg" width="%s" height="%s" viewBox="0 0 %s %s" fill="none">%s</svg>'%(n(w),n(h),n(w),n(h),body)
    key=hashlib.md5(re.sub(r'translate\([^)]*\)','',svg).encode()).hexdigest()[:8]
    fn='icon-%s.svg'%key
    if key not in seen:
        open(os.path.join(out,fn),'w',encoding='utf-8').write(svg); seen[key]=fn
    print('%8s,%-9s %5sx%-5s %s'%(n(x0),n(y0),n(w),n(h),fn))
