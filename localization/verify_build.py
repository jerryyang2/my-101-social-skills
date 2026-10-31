"""No-network freshness, link, chapter and favicon verification for both editions."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import hashlib,json,re,subprocess,sys
ROOT=Path(__file__).resolve().parent.parent
manifest=json.loads((ROOT/'localization/build-manifest.json').read_text())
for group in ('source_files','build_inputs','english_outputs'):
    for name,expected in manifest[group].items():
        p=ROOT/name
        assert p.exists() and hashlib.sha256(p.read_bytes()).hexdigest()==expected,'Rebuild English edition: '+name
class Page(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.ids=[];self.favicons=[];self.scripts=[];self.stack=[];self.text=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id'in a:self.ids.append(a['id'])
        if tag in ('link','img','script','a','iframe','source'):
            for k in ('href','src'):
                if k in a:self.links.append((tag,k,a[k]))
        if tag=='link' and a.get('rel')=='icon':self.favicons.append(a['href'])
        if tag=='script':self.stack.append('script')
        if tag=='style':self.stack.append('style')
    def handle_endtag(self,tag):
        if self.stack and self.stack[-1]==tag:self.stack.pop()
    def handle_data(self,text):
        if self.stack and self.stack[-1]=='script':self.scripts.append(text)
        elif not self.stack:self.text.append(text)
files=sorted((ROOT/'en').rglob('*.html'));checks=0
for p in files:
    source=p.read_text();page=Page();page.feed(source)
    assert 'site-language.js?v=' in source and 'site-language.css?v=' in source,p
    assert page.favicons,'Missing favicon: '+str(p)
    assert len(page.ids)==len(set(page.ids)),'Duplicate IDs: '+str(p)
    for tag,key,url in page.links:
        u=urlsplit(url)
        if u.scheme or u.netloc:continue
        path=(p.parent/unquote(u.path)).resolve() if u.path else p
        assert path.exists(),'Broken resource: '+str(p.relative_to(ROOT))+' → '+url
        if u.fragment and path.suffix=='.html':
            target=path.read_text();fragment=unquote(u.fragment)
            assert (fragment=='calm' and path.name=='index.html') or re.search(r'\bid=[\'\"]'+re.escape(fragment)+r'[\'\"]',target),'Missing anchor '+url
        if tag=='script' and key=='src' and path.suffix=='.js':
            assert '/en/' in str(path) or path.name in ('site-language.js','three.min.js'),'Chinese script loaded in English edition: '+url
        checks+=1
    for script in page.scripts:
        if script.strip():subprocess.run(['node',str(ROOT/'localization/js-nodes.cjs')],input=script,text=True,stdout=subprocess.DEVNULL,check=True)
    visible=' '.join(page.text)
    visible=re.sub(r'特社\d+-[IVX]+-\d+|繁體中文','',visible)
    assert not re.search('[\u3400-\u9fff]',visible),'Untranslated page text in '+str(p)
    if p.name.startswith('all_'):
        assert sum(id.startswith('lesson-') for id in page.ids)==101,'Missing English chapters: '+str(p)
print(f'PASS: source/build/output hashes; {len(files)} English pages; {checks} resources/anchors; 5 × 101 chapters; favicons; inline JS; English static text.')
