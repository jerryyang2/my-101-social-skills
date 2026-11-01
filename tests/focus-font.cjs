const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const acorn = require('../localization/node_modules/acorn');
const source=fs.readFileSync(require('node:path').join(__dirname,'../備課平台/focus-mode.js'),'utf8');
const functions={};
function visit(node) {
  if(!node||typeof node!=='object')return;
  if(node.type==='FunctionDeclaration'&&['applyFontScale','resizeText'].includes(node.id.name))functions[node.id.name]=source.slice(node.start,node.end);
  Object.values(node).forEach(value=>Array.isArray(value)?value.forEach(visit):visit(value));
}
visit(acorn.parse(source,{ecmaVersion:'latest'}));
const makeDocument=(base=16,inline='')=>({documentElement:{style:{fontSize:inline}},defaultView:{getComputedStyle:()=>({fontSize:base+'px'})}});
const original=makeDocument(16);const frame={contentDocument:original};
const blocked={get contentDocument(){throw new Error('cross origin');}};
const reset={setAttribute(name,value){this[name]=value;}};
const world={document:{documentElement:{style:{}},querySelectorAll:()=>[frame,blocked]},window:{dispatchEvent(){}},Event:class{},rootFontSize:16,fontScale:100,embeddedFontSizes:new WeakMap(),smaller:{},larger:{},reset};
vm.createContext(world);Object.values(functions).forEach(text=>vm.runInContext(text,world));
world.applyFontScale();assert.equal(original.documentElement.style.fontSize,'16px');
world.resizeText(110);assert.equal(original.documentElement.style.fontSize,'17.6px');
world.resizeText(120);assert.equal(original.documentElement.style.fontSize,'19.2px','Repeated changes must not compound');
world.resizeText(999);assert.equal(world.fontScale,180);assert.equal(world.larger.disabled,true);
world.resizeText(0);assert.equal(world.fontScale,80);assert.equal(world.smaller.disabled,true);
world.resizeText(100);assert.equal(original.documentElement.style.fontSize,'16px');
world.rootFontSize=null;world.applyFontScale();assert.equal(original.documentElement.style.fontSize,'','Leaving focus restores the original inline value');
// A newly loaded worksheet receives the current scale using its own base size.
world.rootFontSize=16;world.resizeText(140);frame.contentDocument=makeDocument(20,'20px');world.applyFontScale();
assert.equal(frame.contentDocument.documentElement.style.fontSize,'28px');
world.resizeText(130);assert.equal(frame.contentDocument.documentElement.style.fontSize,'26px');
world.rootFontSize=null;world.applyFontScale();assert.equal(frame.contentDocument.documentElement.style.fontSize,'20px');
frame.contentDocument=null;assert.doesNotThrow(()=>world.applyFontScale());
console.log('PASS: embedded worksheet scaling, no compounded growth, 80–180% bounds, reset, restored inline styles, replacement documents, loading and inaccessible frames.');
