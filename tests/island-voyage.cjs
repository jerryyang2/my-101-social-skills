const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const acorn = require('../localization/node_modules/acorn');
const root = path.join(__dirname, '..', '備課平台');
const world = {window: {}};
vm.createContext(world);
for (const name of ['three.min.js', 'island-paths.js', 'island-encounters.js', 'island-scene-art.js', 'island-explorer.js']) vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), world);
const source = fs.readFileSync(path.join(root, 'island-game.js'), 'utf8');
let themes;
const wanted = new Set(['createNaturalShore', 'makeChubbySculptedIsland', 'beginPlayerFollow', 'setCameraPreset', 'resetArchipelagoView', 'walkToAndTrigger', 'stepPlayer', 'openQuestDrawer', 'selectWeek', 'travelToLessonIsland', 'cancelJourney', 'showJourneyStatus', 'updatePlayerWalking']);
function visit(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'FunctionDeclaration' && wanted.has(node.id.name)) vm.runInContext(source.slice(node.start, node.end), world);
  if (node.type === 'VariableDeclarator' && node.id.name === 'ISLAND_THEMES') themes = vm.runInContext(source.slice(node.init.start, node.init.end), world);
  Object.values(node).forEach(v => Array.isArray(v) ? v.forEach(visit) : visit(v));
}
visit(acorn.parse(source, {ecmaVersion:'latest'}));
const T = world.THREE;
const make = (seed, color) => world.makeChubbySculptedIsland(world.createNaturalShore(seed), 1.9, color, 0xc6ae88);
const center = make(8, 0xd9cfab);
const islands = themes.map((theme, index) => {
  const island = make(index + 1, theme.landColor);
  const angle = index / 4 * Math.PI * 2 - Math.PI / 4;
  island.position.set(Math.cos(angle)*25,0,Math.sin(angle)*25);
  island.userData.islandIndex = index;
  return island;
});
const art = world.window.SocialIslandArt.build(T,new T.Scene(),islands,center,[],make);
assert.deepEqual(Array.from(themes.flatMap(theme=>Array.from(theme.weeks))).sort((a,b)=>a-b),Array.from({length:52},(_,i)=>i+1),'All 52 weeks remain assigned to theme menus');
assert.ok(!source.includes('subIslandMeshes'),'No per-week islands are created or interacted with in the 3D scene');
assert.equal(art.paths.edges.filter(e=>e.kind==='bridge').length,6,'Only the six inter-island links are bridges');
for (const island of [...islands,art.icebreaker,art.teamwork]) {
  const destination = art.paths.destination(island.position);
  const route = art.paths.route(center.position, destination);
  assert.ok(route.length > 1);
  for (let i=1;i<route.length;i++) {
    const a=route[i-1],b=route[i];
    for(let t=0;t<=1;t+=.2) assert.ok(art.paths.nearest({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t}).gap<1e-6,'Travel must remain on the rendered paths');
  }
}
for(const island of [...islands,art.icebreaker,art.teamwork]) {
  const terrain=island.userData.voyageTerrain?island:island.children.find(c=>c.userData.voyageTerrain);
  assert.ok(terrain);
  const layers = terrain.children.filter(child=>child.isMesh);
  assert.equal(layers.length,3);
  layers.forEach(layer=>assert.ok(layer.geometry.attributes.position.count>0));
}
// Exercise the real movement/camera transitions, including cancellation on overview.
Object.assign(world, {camera:{aspect:1.5}, state:{viewMode:'3d',cameraFollow:false,playerPos:art.paths.destination(center.position)}, sceneArt:art, cameraMode:'bird', overviewActive:true, cameraGoal:new T.Vector3(), playerRoute:[], synchronizeCameraControls(){}, closeQuestDrawer(){}});
world.walkToAndTrigger(islands[0].position.x,islands[0].position.z,()=>{});
assert.equal(world.state.cameraFollow,true,'Following starts on departure, before arrival');
assert.equal(world.overviewActive,false);
assert.equal(world.targetDist,38);
world.resetArchipelagoView();
assert.equal(world.state.cameraFollow,false);
assert.equal(world.overviewActive,true);
assert.equal(world.playerRoute.length,0,'Overview cancels the remaining walk');
assert.equal(world.state.onArriveCallback,null,'A canceled trip cannot later open a quest');
for(const [x,z] of [[1,0],[-1,0],[0,1],[0,-1]]) {world.stepPlayer(x,z);if(world.state.cameraFollow)break;}
assert.equal(world.state.cameraFollow,true,'Manual movement also starts following');
world.resetArchipelagoView();
world.state.viewMode='2d';world.beginPlayerFollow();assert.equal(world.state.cameraFollow,false,'Flat map never starts a 3D follow camera');
const distances=[.4,.7,1,1.8,3].map(world.window.SocialIslandExplorer.overviewDistance);
assert.ok(distances.every(x=>Number.isFinite(x)&&x>=86&&x<=180));
console.log('PASS: six natural islands; 52 weeks retained in menus without 3D week markers; all routes supported; six connecting bridges; responsive overview; departure/manual follow and cancellable overview.');

// A lesson opens its matching question while routing from the existing position.
const status={hidden:true,textContent:''};const overlay={classList:{add(){}}};let rendered=0,saved=0;
Object.assign(world,{ISLAND_THEMES:themes,islandMeshes:islands,lessonJourney:null,pendingNeighbour:-1,playerArmR:null,sceneryTime:0,playerGroup:new T.Group(),playerLegL:null,playerLegR:null,sfx:{playClick(){},playStep(){}},document:{body:{classList:{add(){}}},getElementById:id=>id==='islandJourneyStatus'?status:overlay},renderQuestDrawerContent(){rendered++},saveLocalProgress(){saved++}});
world.window.socialGame={cancelJourney:world.cancelJourney};
world.state.viewMode='3d';world.state.walkTime=0;
for(let week=1;week<=52;week++) {
  const index=themes.findIndex(theme=>theme.weeks.includes(week));
  world.state.playerPos=art.paths.destination(islands[(index+1)%4].position);
  const origin={...world.state.playerPos};world.openQuestDrawer(index,week);
  assert.deepEqual({...world.state.playerPos},origin,'Opening a lesson must never teleport');
  assert.equal(world.state.activeWeekNumber,week);assert.equal(world.state.activeIslandIndex,index);
  assert.ok(world.playerRoute.length>1,'A different island starts a real route');
  for(let frame=0;frame<2000 && world.playerRoute.length;frame++)world.updatePlayerWalking(.025);
  const target=art.paths.destination(islands[index].position);
  assert.ok(Math.hypot(world.state.playerPos.x-target.x,world.state.playerPos.z-target.z)<1e-6);
  assert.ok(status.textContent.includes(String(week)));assert.equal(status.hidden,false);
}
world.openQuestDrawer(0,7);world.selectWeek(17);
for(let frame=0;frame<2000 && world.playerRoute.length;frame++)world.updatePlayerWalking(.025);
assert.equal(world.state.activeWeekNumber,17);assert.equal(world.state.activeIslandIndex,2);
world.resetArchipelagoView();assert.equal(status.hidden,true);assert.equal(world.lessonJourney,null);
world.state.viewMode='2d';const before={...world.state.playerPos};world.openQuestDrawer(1,1);
assert.deepEqual({...world.state.playerPos},before);assert.equal(world.playerRoute.length,0);assert.equal(status.hidden,true);
const validWeek=world.state.activeWeekNumber;world.openQuestDrawer(1,17);assert.equal(world.state.activeWeekNumber,validWeek,'Mismatched week/island cannot replace the lesson');
// Neighbours only greet at ground-level proximity; repeated greetings are limited.
const encounters=world.window.SocialIslandEncounters;
assert.equal(new Set(Array.from(encounters.profiles,p=>p.role)).size,14);
assert.ok(encounters.profiles.every(p=>p.intro&&p.reply&&p.answer&&p.uniform));
const gate=encounters.createGate();const local=[{person:{position:{x:1,y:2,z:0}}}];
assert.equal(gate.pick({x:0,y:2,z:0},local,0),-1);
assert.equal(gate.pick({x:0,y:2,z:0},local,1),0);
assert.equal(gate.pick({x:0,y:2,z:0},local,22),-1);
assert.equal(gate.pick({x:0,y:6,z:0},local,62),-1);
assert.equal(gate.pick({x:20,y:2,z:0},local,62),-1);
assert.equal(gate.pick({x:0,y:2,z:0},local,62),0);
const walker=art.walkers[0];art.animate(20,new T.Vector3());const resting=walker.person.position.clone();walker.greetingUntil=25;walker.greetingTarget={x:0,z:0};art.animate(22,new T.Vector3());
assert.ok(walker.person.position.distanceTo(resting)<1e-6,'Greeting neighbours stand and wave');
art.animate(22,new T.Vector3());assert.ok(walker.person.position.distanceTo(resting)<1e-6,'Paused scenery does not advance neighbours');
art.animate(25.1,new T.Vector3());assert.ok(art.paths.nearest(walker.person.position).gap<1e-6);
console.log('PASS: 52 matching lesson journeys without teleporting; rapid retargeting; overview cancellation; 2D fallback; 14 distinct occupations; proximity, height and cooldown; waving/pause/path support.');
