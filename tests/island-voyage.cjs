const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const acorn = require('../localization/node_modules/acorn');
const root = path.join(__dirname, '..', '備課平台');
const world = {window: {}};
vm.createContext(world);
for (const name of ['three.min.js', 'island-paths.js', 'island-scene-art.js', 'island-explorer.js']) vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), world);
const source = fs.readFileSync(path.join(root, 'island-game.js'), 'utf8');
let themes;
const wanted = new Set(['createNaturalShore', 'makeChubbySculptedIsland']);
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
const stones = themes.flatMap((theme, parentIslandIndex) => theme.weeks.map((weekNumber, subIndex) => {
  const stone = new T.Group();
  const angle = parentIslandIndex / 4 * Math.PI * 2 - Math.PI / 4 + subIndex / theme.weeks.length * Math.PI * 1.6 - Math.PI * .8;
  const island = islands[parentIslandIndex];
  stone.position.set(island.position.x+Math.cos(angle)*4.8,island.userData.topY-.06,island.position.z+Math.sin(angle)*4.8);
  stone.userData = {parentIslandIndex,weekNumber,walkY:island.userData.topY+.24};
  for (let i=0;i<2;i++) stone.add(new T.Mesh(new T.SphereGeometry(1),new T.MeshLambertMaterial({color:0xffffff})));
  return stone;
}));
const art = world.window.SocialIslandArt.build(T,new T.Scene(),islands,center,stones,make);
assert.equal(stones.length,52);
assert.equal(art.paths.edges.filter(e=>e.kind==='bridge').length,6,'Only the six inter-island links are bridges');
for (const stone of stones) {
  const destination = art.paths.destination(stone.position);
  assert.ok(Math.abs(destination.y-stone.userData.walkY)<1e-7,'Week trail must stay at the island walking height');
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
const distances=[.4,.7,1,1.8,3].map(world.window.SocialIslandExplorer.overviewDistance);
assert.ok(distances.every(x=>Number.isFinite(x)&&x>=86&&x<=180));
console.log('PASS: six natural islands; 52 trail destinations retain walking heights; all routes supported; six connecting bridges; responsive overview framing.');
