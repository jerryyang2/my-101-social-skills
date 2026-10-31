"""Compile a complete English static edition from reviewed local translations.

The Chinese edition remains the source. No translation service runs in visitors'
browsers. Rebuild after changing Chinese source files; missing translations fail.
"""
from pathlib import Path
from html import escape, unescape
from html.parser import HTMLParser
import argparse
import hashlib
import json
import os
import re
import subprocess
from urllib.parse import urlsplit, urlunsplit, unquote

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
EN = ROOT / 'en'
CJK = re.compile(r'[\u3400-\u9fff]')
PROTECTED = re.compile(r'(特社\d+-[IVX]+-\d+|[\U0001f000-\U0001faff\u2600-\u27bf\ufe0f\u200d]+)')
ATTRS = {'title', 'alt', 'placeholder', 'aria-label', 'aria-description', 'data-tooltip', 'value', 'content'}
catalog = set()
translations = {}
collecting = False

def polish(value, source):
    for old,new in [
        ('actual combat','practice'),('Actual combat','Practice'),
        ('lightning protection','classroom support'),('Lightning protection','Classroom support'),
        ('study sheets','worksheets'),('study sheet','worksheet'),
        ('Study sheets','Worksheets'),('Study sheet','Worksheet'),
        ('super power moves','super skills'),('Super power moves','Super Skills'),
        ('four-life','four-learner'),('All staff tasks','Everyone has a role'),
        ('Mandarin textbook dubbing','Read-aloud voice')]:
        value=value.replace(old,new)
    if source.startswith('引導畯'):value=value.replace('Guide the body','Help Jun').replace('Guiding the body','Help Jun')
    if source.startswith('引導和'):value=re.sub(r'^Guide and\b','Help He',value)
    value=re.sub(r'\b(104|106) pages\b',r'\1 sections',value,flags=re.I)
    value=value.replace('『','“').replace('』','”').replace('「','“').replace('」','”')
    value=re.sub(r'(?<=[!?])(?=[A-Za-z])',' ',value)
    value=re.sub(r'(?<=[a-z])\.(?=[A-Z])','. ',value)
    return value

def unit(value):
    if not CJK.search(value):
        return value
    match = re.match(r'^(\s*)(.*?)(\s*)$', value, re.S)
    left, key, right = match.groups()
    catalog.add(key)
    if collecting:
        return value
    if key not in translations:
        raise ValueError('Missing English translation: ' + key[:160])
    return left + polish(translations[key],key) + right

def text(value):
    # Keep emoji icons and official Taiwan curriculum codes intact.
    pieces = PROTECTED.split(value)
    return ''.join(part if i % 2 else unit(part) for i, part in enumerate(pieces))

def attributes(raw):
    def replace(m):
        name, quote, value = m.groups()
        if name.lower() not in ATTRS:
            return m.group()
        return name + '=' + quote + escape(text(unescape(value)), quote=True) + quote
    return re.sub(r'([\w:-]+)\s*=\s*([\'"])(.*?)\2', replace, raw, flags=re.S)

def fragment(value):
    if re.match(r'^[.#\[][^\s<>]*\[', value) or value.startswith('[aria-'):
        return re.sub(r'(aria-label=[\'"])(.*?)([\'"])', lambda m:m[1]+text(m[2])+m[3], value)
    # JS templates are tokenized before this step, so expressions cannot be
    # mistaken for HTML tags, even when expressions contain comparisons.
    parts = re.split(r'(<(?:/?[A-Za-z!][^>]*|__VAR\d+__[^>]*)>)', value)
    return ''.join(attributes(p) if i % 2 else text(p) for i, p in enumerate(parts))

def js_nodes(source):
    result = subprocess.run(['node', str(HERE/'js-nodes.cjs')], input=source,
        text=True, capture_output=True)
    if result.returncode:raise ValueError('Cannot parse JS: '+source[:400]+'\n'+result.stderr[:500])
    # Acorn reports UTF-16 offsets, Python slices Unicode code points.
    offsets = {}
    u16 = 0
    for i, char in enumerate(source):
        offsets[u16] = i
        u16 += 2 if ord(char) > 0xffff else 1
    offsets[u16] = len(source)
    nodes = json.loads(result.stdout)
    for n in nodes:
        n['start'], n['end'] = offsets[n['start']], offsets[n['end']]
        if n['kind'] == 'template':
            n['expressions'] = [[offsets[a], offsets[b]] for a,b in n['expressions']]
    return nodes

def javascript(source):
    nodes = js_nodes(source)
    def render(a, b):
        candidates = sorted((n for n in nodes if a <= n['start'] and n['end'] <= b), key=lambda n:(n['start'], -n['end']))
        result, cursor = [], a
        for n in candidates:
            if n['start'] < cursor:
                continue
            result.append(source[cursor:n['start']])
            if n['kind'] == 'string':
                value = n['value']
                if CJK.search(value):
                    replacement = fragment(value)
                    result.append(json.dumps(replacement, ensure_ascii=False))
                else:
                    result.append(source[n['start']:n['end']])
            else:
                combined = ''.join(q + (f'__VAR{i}__' if i < len(n['expressions']) else '') for i,q in enumerate(n['quasis']))
                value = fragment(combined)
                if sorted(re.findall(r'__VAR\d+__', value)) != [f'__VAR{i}__' for i in sorted(range(len(n['expressions'])), key=lambda i:f'__VAR{i}__')]:
                    raise ValueError('Translation changed template variables: ' + combined[:120])
                escaped = value.replace('\\','\\\\').replace('`','\\`').replace('${','\\${')
                for i, (ea,eb) in enumerate(n['expressions']):
                    escaped = escaped.replace(f'__VAR{i}__', '${'+render(ea,eb)+'}')
                result.append('`'+escaped+'`')
            cursor = n['end']
        result.append(source[cursor:b])
        return ''.join(result)
    return render(0, len(source))

def sources():
    html = sorted([ROOT/'index.html', *(ROOT/'備課平台').glob('*.html')])
    js = sorted(p for p in (ROOT/'備課平台').rglob('*.js')
        if 'node_modules' not in p.parts and p.name not in ('three.min.js', 'zhuyin.js')
        and 'netlify' not in p.parts)
    svg = sorted(ROOT.glob('**/*.svg'))
    svg = [p for p in svg if not set(p.relative_to(ROOT).parts) & {'node_modules', 'en', 'Codex', '.git'}]
    return html, js, svg

def resource_url(value, source, target):
    if not value or value.startswith(('#','data:','http:','https:','//','mailto:','javascript:')):
        return value
    split = urlsplit(value)
    origin = (source.parent / unquote(split.path)).resolve()
    try:
        relative = origin.relative_to(ROOT)
    except ValueError:
        return value
    # Translated pages, first-party scripts and vector labels have mirrors.
    localized = origin.suffix in ('.html', '.svg') or (origin.suffix == '.js' and origin.name not in ('three.min.js', 'site-language.js'))
    destination = EN / relative if localized else origin
    query=split.query
    if localized and destination.suffix=='.js' and destination.exists() and not collecting:
        query='v='+hashlib.sha256(destination.read_bytes()).hexdigest()[:12]
    return urlunsplit(('', '', Path(os.path.relpath(destination, target.parent)).as_posix(), query, split.fragment))

class Page(HTMLParser):
    def __init__(self, source, target):
        super().__init__(convert_charrefs=False)
        self.source, self.target, self.output, self.stack = source, target, [], []
    def handle_decl(self, data): self.output.append('<!'+data+'>')
    def handle_comment(self, data): self.output.append('<!--'+data+'-->')
    def handle_entityref(self, name): self.output.append('&'+name+';')
    def handle_charref(self, name): self.output.append('&#'+name+';')
    def handle_starttag(self, tag, attrs):
        raw = attributes(self.get_starttag_text())
        if tag not in ('script', 'style'):
            def event(m):
                name, quote, value = m.groups()
                return name+'='+quote+escape(javascript(unescape(value)),quote=True)+quote
            raw=re.sub(r'\b(on[a-z]+)=([\'"])(.*?)\2',event,raw,flags=re.S) if re.search(r'\bon[a-z]+=[\"][^<>]*[\u3400-\u9fff]',raw) else raw
        if tag == 'html':
            raw = re.sub(r'lang=[\'"][^\'"]+[\'"]','lang="en" data-site-language="en"',raw)
        if tag in ('script','link','img','use','a','iframe','source'):
            def path(m):
                k,q,v=m.groups()
                if k in ('href','src'):
                    v=resource_url(unescape(v),self.source,self.target)
                return k+'='+q+escape(v,quote=True)+q
            raw=re.sub(r'(href|src)=([\'"])(.*?)\2',path,raw)
        self.output.append(raw)
        if tag not in ('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'):
            self.stack.append(tag)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag,attrs)
        if self.stack and self.stack[-1]==tag:self.stack.pop()
    def handle_endtag(self, tag):
        self.output.append('</'+tag+'>')
        if tag in self.stack:
            self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
    def handle_data(self, data):
        if self.stack and self.stack[-1]=='script':
            self.output.append(javascript(data) if data.strip() else data)
        elif self.stack and self.stack[-1]=='style': self.output.append(data)
        else: self.output.append(escape(text(data),quote=False))

def english_speech(source, name):
    if name=='island-game.js':
        return source.replace("ut.lang = 'zh-TW'","ut.lang = 'en-US'").replace('function getTaiwanVoice() {','function getTaiwanVoice() {\n    return window.SiteLanguage.englishVoice();')
    if name not in ('app.js','classroom.js'):
        return source
    source=source.replace('utterance.lang = "zh-TW"', 'utterance.lang = "en-US"')
    source=source.replace('cleanText.split(/([。！？\\n]+)/)', 'cleanText.split(/([.!?。！？\\n]+)/)')
    source=source.replace('if (audioKey && (mode === "story" || mode === "question"))', 'if (false && audioKey && (mode === "story" || mode === "question"))')
    source=source.replace('if (audioKey && roleId)', 'if (false && audioKey && roleId)')
    if name=='classroom.js':
        marker='speakSentenceQueue(fullSpeech, "role_sequence", onNext);\n    };'
        if marker not in source: raise ValueError('English role speech integration needs review')
        source=source.replace(marker,marker+'\n    fallbackToWebSpeech();\n    return;')
    source+='\n// The English edition uses English browser voices, never Mandarin recordings.\ngetBestTextbookVoice = preferredGender => window.SiteLanguage.englishVoice(preferredGender);\n'
    return source

def inject_language(content,path):
    # Early bootstrap prevents a flash of the other language on first visit.
    content=re.sub(r'\s*<(?:script|link)[^>]*(?:src|href)=[\'"][^\'"]*site-language\.(?:js|css)[^\'"]*[\'"][^>]*>(?:</script>)?', '',content)
    prefix=Path(os.path.relpath(ROOT,path.parent)).as_posix()
    prefix='' if prefix=='.' else prefix+'/'
    js_version=hashlib.sha256((ROOT/'site-language.js').read_bytes()).hexdigest()[:12]
    css_version=hashlib.sha256((ROOT/'site-language.css').read_bytes()).hexdigest()[:12]
    assets=f'\n  <script src="{prefix}site-language.js?v={js_version}"></script>'
    content=content.replace('</head>',f'  <link rel="stylesheet" href="{prefix}site-language.css?v={css_version}">\n</head>',1)
    # Run after the document charset, before scripts/styles which render content.
    match=re.search(r'<meta[^>]*charset[^>]*>',content,re.I)
    if match:return content[:match.end()]+assets+content[match.end():]
    return content.replace('<head>','<head>'+assets,1)

def main():
    global collecting, translations
    parser=argparse.ArgumentParser();parser.add_argument('--catalog',action='store_true');parser.add_argument('--install',action='store_true');args=parser.parse_args()
    collecting=args.catalog
    if not collecting:
        translations=json.loads((HERE/'strings.en.json').read_text())
        translations.update(json.loads((HERE/'paragraphs.en.json').read_text()) if (HERE/'paragraphs.en.json').exists() else {})
        translations.update(json.loads((HERE/'overrides.en.json').read_text()) if (HERE/'overrides.en.json').exists() else {})
    html_files, js_files, svg_files=sources()
    if args.install and not collecting:
        for source in html_files:
            old=source.read_text();new=inject_language(old,source)
            if old!=new:source.write_text(new)
    for source in js_files:
        target=EN/source.relative_to(ROOT)
        content=english_speech(javascript(source.read_text()),source.name)
        if not collecting:
            target.parent.mkdir(parents=True,exist_ok=True);target.write_text(re.sub(r'[ \t]+$','',content,flags=re.M))
    for source in html_files:
        target=EN/source.relative_to(ROOT)
        page=Page(source,target);page.feed(source.read_text());content=inject_language(''.join(page.output),target)
        if not collecting:
            target.parent.mkdir(parents=True,exist_ok=True);target.write_text(re.sub(r'[ \t]+$','',content,flags=re.M))
    for source in svg_files:
        content=fragment(source.read_text())
        if not collecting:
            target=EN/source.relative_to(ROOT)
            target.parent.mkdir(parents=True,exist_ok=True);target.write_text(re.sub(r'[ \t]+$','',content,flags=re.M))
    if collecting:
        (HERE/'catalog.json').write_text(json.dumps(sorted(catalog),ensure_ascii=False,indent=2)+'\n')
        print(f'Collected {len(catalog)} unique translation units ({sum(map(len,catalog)):,} source characters).')
    else:
        # English needs no Chinese phonetic font; keep the existing formatter API.
        (EN/'備課平台/zhuyin.js').write_text('let isZhuyinEnabled = false;\nfunction toggleZhuyin() {}\nfunction updateZhuyinButton() { const b=document.getElementById("zhuyinToggleBtn"); if(b)b.hidden=true; }\nfunction toZhuyinHtml(text) { return String(text || "").replace(/\\n/g,"<br>"); }\n')
        manifest={p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in html_files+js_files+svg_files}
        inputs=[ROOT/'site-language.js',ROOT/'site-language.css',*(p for p in HERE.iterdir() if p.suffix in ('.py','.cjs','.json') and p.name!='build-manifest.json')]
        input_hashes={p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(inputs)}
        output_hashes={p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(EN.rglob('*')) if p.is_file()}
        (HERE/'build-manifest.json').write_text(json.dumps({'source_files':manifest,'build_inputs':input_hashes,'english_outputs':output_hashes,'translation_units':len(catalog)},ensure_ascii=False,indent=2)+'\n')
        print(f'Built {len(html_files)} English pages with {len(js_files)} scripts and {len(translations)} translations.')

if __name__=='__main__': main()
