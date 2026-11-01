const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const acorn = require('../localization/node_modules/acorn');
const root = path.join(__dirname, '..', '備課平台');
// A minimal DOM keeps these tests focused on the actual conversation transitions.
class Element {
  constructor(tag='div') { this.tagName=tag; this.children=[]; this.hidden=false; this.className=''; this.textContent=''; this.scrollTop=0; }
  append(...nodes) { this.children.push(...nodes); }
  appendChild(node) { this.append(node); }
  replaceChildren() { this.children=[]; }
  get scrollHeight() { return this.children.length*100; }
  contains(node) { return this===node || this.children.some(child=>child.contains(node)); }
  querySelectorAll(selector) { return this.children.flatMap(child=>[...(child.className.split(' ').includes(selector.slice(1))?[child]:[]),...child.querySelectorAll(selector)]); }
  querySelector(selector) { return this.querySelectorAll(selector)[0]; }
  focus() { document.activeElement=this; }
}
const ids=Object.fromEntries(['encounterLog','encounterChoices','encounterRetry','encounterReply'].map(id=>[id,new Element()]));
ids.encounterChoices.append(ids.encounterReply);
const document={activeElement:null,getElementById:id=>ids[id],createElement:tag=>new Element(tag)};
let spoken='';
const world={window:{},document,state:{heroName:'訪客 1'},currentEncounter:-1,encounterReplied:false,sceneryTime:12,speakText:text=>{spoken=text;}};
vm.createContext(world);
vm.runInContext(fs.readFileSync(path.join(root,'island-encounters.js'),'utf8'),world);
const source=fs.readFileSync(path.join(root,'island-game.js'),'utf8');
const wanted=new Set(['appendEncounterLine','resetEncounterConversation','replyEncounter','retryEncounter','speakEncounter']);
function visit(node) {
  if(!node||typeof node!=='object')return;
  if(node.type==='FunctionDeclaration'&&wanted.has(node.id.name))vm.runInContext(source.slice(node.start,node.end),world);
  Object.values(node).forEach(value=>Array.isArray(value)?value.forEach(visit):visit(value));
}
visit(acorn.parse(source,{ecmaVersion:'latest'}));
const transcript=()=>ids.encounterLog.children.map(line=>[line.children[0].textContent,line.children[1].textContent]);
const profiles=world.window.SocialIslandEncounters.profiles;
for(let index=0;index<profiles.length;index++) {
  const profile=profiles[index],speaker=`${profile.role} · ${profile.name}`;
  world.currentEncounter=index;world.resetEncounterConversation(profile);
  assert.deepEqual(transcript(),[[speaker,profile.intro]],'Greeting must remain the first line');
  assert.equal(ids.encounterChoices.hidden,false);assert.equal(ids.encounterRetry.hidden,true);
  ids.encounterReply.focus();world.replyEncounter(false);
  const expected=[[speaker,profile.intro],['訪客 1',profile.reply],[speaker,profile.answer]];
  assert.deepEqual(transcript(),expected,'NPC → visitor → NPC must remain chronological');
  assert.equal(ids.encounterChoices.hidden,true);assert.equal(document.activeElement,ids.encounterRetry,'Focus moves out of the hidden choices');
  world.replyEncounter(false);world.replyEncounter(true);assert.deepEqual(transcript(),expected,'Repeated activation cannot duplicate the reply');
  world.speakEncounter();assert.equal(spoken,expected.map(([name,text])=>name+'。'+text).join('\n'),'Read aloud follows the visible conversation');
  world.retryEncounter();assert.equal(transcript().length,1);assert.equal(document.activeElement,ids.encounterReply);
  world.replyEncounter(true);
  assert.deepEqual(transcript(),[[speaker,profile.intro],['訪客 1','👋 我揮手，向你打招呼。'],[speaker,'你好！謝謝你的招呼，祝你今天玩得開心！']],'Waving receives a greeting rather than an answer to an unasked question');
}
world.state.heroName='<img src=x onerror=alert(1)>';world.resetEncounterConversation(profiles[0]);world.replyEncounter(false);
assert.equal(transcript()[1][0],world.state.heroName);assert.equal(ids.encounterLog.children[1].children.length,2,'Visitor names are plain text');
world.currentEncounter=-1;const before=transcript();world.replyEncounter(false);world.retryEncounter();assert.deepEqual(transcript(),before);
console.log('PASS: all 14 occupations retain chronological greetings/replies; single response, retry, waving, focus transfer, plain text names and matching read-aloud order.');
