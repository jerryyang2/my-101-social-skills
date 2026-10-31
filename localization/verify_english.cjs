const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),acorn=require('acorn');
const root=path.resolve(__dirname,'..');
function read(file){return fs.readFileSync(path.join(root,file),'utf8')}
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)])}
for(const f of walk(path.join(root,'en')).filter(f=>f.endsWith('.js')))acorn.parse(fs.readFileSync(f,'utf8'),{ecmaVersion:'latest',allowReturnOutsideFunction:true});
function data(file,name){let src=read(file);const ast=acorn.parse(src,{ecmaVersion:'latest'});let node=ast.body.find(n=>n.type==='VariableDeclaration'&&n.declarations.some(d=>d.id.name===name));if(node){let d=node.declarations.find(d=>d.id.name===name);return vm.runInNewContext('('+src.slice(d.init.start,d.init.end)+')')}let ctx={window:{}};vm.runInNewContext(src,ctx);return ctx.window[name]}
let checked=0;
function same(a,b,key=''){
 if(a===null||typeof a!=='object'){
  assert.equal(typeof a,typeof b,'Type changed: '+key);
  if(typeof a!=='string'||['id','code','date','type','classKey','cardKey','roleId','characterId','correct','answer','correctIndex','answerIndex'].includes(key)||!/[\u3400-\u9fff]/.test(a))assert.deepEqual(a,b,'Data changed: '+key);
  checked++;return;
 }
 assert.ok(b&&typeof b==='object');
 const keys=Object.keys(a);assert.equal(keys.length,Object.keys(b).length,'Object length changed: '+key);
 for(const k of keys){const enKey=({'宇':'Yu','畯':'Jun','和':'He','嘉':'Jia'})[k]||k;assert.ok(enKey in b,'Missing key: '+k);same(a[k],b[enKey],k)}
}
for(const [f,n] of [['app.js','defaultBriefings'],['worksheets-data.js','dailyWorksheets'],['roleplay-data.js','dailyRoleplays']]){const a=data('備課平台/'+f,n),b=data('en/備課平台/'+f,n);assert.equal(Object.keys(a).length,101);same(a,b)}
const boot=read('site-language.js');
function localeTest(url,saved,blocked=false){let redirected=null;const document={currentScript:{src:'https://example.test/project/site-language.js'},documentElement:{},readyState:'loading',addEventListener(){}};let storage={getItem(){if(blocked)throw Error('blocked');return saved},setItem(){if(blocked)throw Error('blocked')}};const ctx={URL,document,location:{href:url,protocol:'https:',replace:u=>redirected=String(u)},localStorage:storage,window:{}};vm.runInNewContext(boot,ctx);return{redirected,lang:document.documentElement.lang}}
assert.equal(localeTest('https://example.test/project/index.html',null).lang,'zh-Hant');
assert.equal(localeTest('https://example.test/project/備課平台/classroom.html?id=b-week-12&slide=3#focus','en').redirected,'https://example.test/project/en/%E5%82%99%E8%AA%B2%E5%B9%B3%E5%8F%B0/classroom.html?id=b-week-12&slide=3#focus');
assert.equal(localeTest('https://example.test/project/en/index.html','zh-Hant').redirected,'https://example.test/project/index.html');
assert.equal(localeTest('https://example.test/project/index.html','zh-Hant').lang,'zh-Hant');
assert.equal(localeTest('https://example.test/project/en/index.html','invalid').redirected,'https://example.test/project/index.html');
assert.equal(localeTest('https://example.test/project/index.html?lang=zh-Hant','en').lang,'zh-Hant');
assert.ok(localeTest('https://example.test/project/en/index.html',null,true).redirected.endsWith('index.html?lang=zh-Hant'));
console.log('PASS: English JS syntax, 101 lessons × 3 databases, '+checked+' data fields, locale default/persistence/query/context/storage fallback.');
