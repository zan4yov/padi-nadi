# python shapes.py <svg> <groupId> [minsize]
import sys, re, xml.etree.ElementTree as ET
from pathbox import bbox
NS='{http://www.w3.org/2000/svg}'
f,gid=sys.argv[1],sys.argv[2]
mn=float(sys.argv[3]) if len(sys.argv)>3 else 30
r=ET.parse(f).getroot()
def tr(e):
    m=re.search(r'translate\(([-\d.]+)[ ,]+([-\d.]+)\)', e.get('transform') or '')
    return (float(m.group(1)),float(m.group(2))) if m else (0.,0.)
def n(v): 
    return int(v) if abs(v-round(v))<1e-6 else round(v,2)
target=[g for g in r.iter(NS+'g') if g.get('id')==gid][0]
rows=[]
def walk(e,ox,oy):
    for c in e:
        t=c.tag.replace(NS,''); dx,dy=tr(c); x,y=ox+dx,oy+dy
        if t=='g': walk(c,x,y)
        elif t=='rect':
            w,h=float(c.get('width')),float(c.get('height'))
            if max(w,h)>=mn: rows.append(('RECT',x,y,w,h,c.get('fill') or '-','-','-',c.get('rx') or 0))
        elif t=='path':
            x0,y0,x1,y1=bbox(c.get('d') or '')
            w,h=x1-x0,y1-y0
            if max(w,h)>=mn: rows.append(('PATH',x+x0,y+y0,w,h,c.get('fill') or '-',c.get('stroke') or '-',c.get('stroke-width') or '-',0))
walk(target,*tr(target))
for k,x,y,w,h,fi,st,sw,rx in rows:
    print('%-4s %7s,%-9s %7s x %-8s fill=%-9s stroke=%-8s sw=%-5s rx=%s'%(k,n(x),n(y),n(w),n(h),fi,st,sw,rx))
