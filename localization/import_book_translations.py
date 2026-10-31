"""Merge paragraph-aligned translations reviewed through the public book UI.

Captures are local working files, never part of the published website. Matching
requires the same chapter ID, element structure and source text; unmatched text
is left for the catalog/overrides rather than paired by approximation.
"""
from pathlib import Path
import argparse
import json
import re
from lxml import html, etree
from build_english import HERE, ROOT, PROTECTED

def normalized(value):return re.sub(r'\s+',' ',value).strip()
def clean_names(value):
    for pattern,name in [(r'\bXiao\s*-?\s*Yu\b','Yu'),(r'\bXiao\s*-?\s*Jun\b','Jun'),(r'\bXiao\s*-?\s*He\b','He'),(r'\bXiao\s*-?\s*Jia\b','Jia')]:
        value=re.sub(pattern,name,value,flags=re.I)
    return value

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--source',required=True);parser.add_argument('--captures',required=True);args=parser.parse_args()
    catalog=json.loads((HERE/'catalog.json').read_text())
    keys={}
    for key in catalog: keys.setdefault(normalized(key),[]).append(key)
    path=HERE/'paragraphs.en.json';out=json.loads(path.read_text()) if path.exists() else {}
    source=html.fromstring((ROOT/args.source).read_text())
    count=0
    def pair(a,b):
        nonlocal count
        if not a or not b:return
        b=clean_names(b)
        ap=PROTECTED.split(a);bp=PROTECTED.split(b)
        av=[s for i,s in enumerate(ap) if not i%2 and s.strip()]
        bv=[s for i,s in enumerate(bp) if not i%2 and s.strip()]
        if len(av)!=len(bv):
            if len(av)==1:bv=[' '.join(bv)]
            else:return
        for aa,bb in zip(av,bv):
            if re.search('[\u3400-\u9fff]',bb):continue
            for key in keys.get(normalized(aa),[]):
                out[key]=normalized(bb);count+=1
    def traverse(a,b):
        pair(a.text,b.text)
        aa=[x for x in a if isinstance(x.tag,str)];bb=[x for x in b if isinstance(x.tag,str)]
        if len(aa)!=len(bb) or [x.tag for x in aa]!=[x.tag for x in bb]:return
        for left,right in zip(aa,bb):
            traverse(left,right);pair(left.tail,right.tail)
    for capture in sorted(Path(args.captures).glob('lesson-*.html')):
        if '[Truncated]' in capture.read_text():raise ValueError('Truncated capture: '+capture.name)
        chapter=html.fromstring(capture.read_text());etree.strip_tags(chapter,'font')
        original=source.xpath('//*[@id=$chapter]',chapter=chapter.get('id'))
        if len(original)!=1:raise ValueError('Missing unique chapter '+capture.stem)
        traverse(original[0],chapter)
    path.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
    print(f'{count} matched source segments; {len(out)} catalog entries have aligned paragraph translations.')

if __name__=='__main__':main()
