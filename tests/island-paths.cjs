const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..', '備課平台');
const context = { window: {}, console };
vm.runInNewContext(fs.readFileSync(path.join(root, 'three.min.js'), 'utf8'), context);
for (const file of ['island-paths.js', 'island-scene-art.js']) vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
const three = context.THREE;
const center = new three.Group(); center.userData.topY = 2.35;
const stones = [];
const islands = Array.from({ length: 4 }, (_, index) => {
  const angle = index * Math.PI / 2 - Math.PI / 4;
  const island = new three.Group();
  island.position.set(Math.cos(angle) * 25, 0, Math.sin(angle) * 25);
  island.rotation.y = -angle + Math.PI / 2;
  island.userData = { islandIndex: index, topY: 2.05 };
  for (let child = 0; child < 8; child++) island.add(new three.Mesh(new three.BoxGeometry(1, 1, 1), new three.MeshLambertMaterial()));
  for (let week = 0; week < 13; week++) {
    const subAngle = angle + week / 13 * Math.PI * 1.6 - Math.PI * 0.8;
    const stone = new three.Group();
    stone.position.set(island.position.x + Math.cos(subAngle) * 8.5, 0, island.position.z + Math.sin(subAngle) * 8.5);
    stone.userData = { parentIslandIndex: index, weekNumber: index * 13 + week + 1 };
    for (let child = 0; child < 2; child++) stone.add(new three.Mesh(new three.SphereGeometry(1), new three.MeshLambertMaterial({ color: index === 0 && week === 0 && child === 1 ? 0xfbbf24 : 0xffffff })));
    stones.push(stone);
  }
  return island;
});
const scene = new three.Scene();
const art = context.window.SocialIslandArt.build(three, scene, islands, center, stones);
const network = art.paths;
assert.equal(network.loops.length, 7);
assert.equal(art.residents.length, 4);
assert.equal(art.walkers.length, 14);
assert.equal(art.teamwork.position.x, -29);
assert.equal(art.teamwork.userData.islandIndex, undefined);
assert.equal(stones[0].children[1].material.color.getHex(), 0xfbbf24);
stones[1].children[1].material.color.setHex(0xfbbf24);
assert.equal(stones[2].children[1].material.color.getHex(), 0xf4eccf);
assert.equal(scene.getObjectByName('walkable-paths').children.length, 4);
function supported(route) {
  for (let segment = 1; segment < route.length; segment++) {
    const first = route[segment - 1], second = route[segment];
    for (let ratio = 0; ratio <= 1; ratio += 0.1) {
      const point = { x: first.x + (second.x - first.x) * ratio, z: first.z + (second.z - first.z) * ratio };
      assert.ok(network.nearest(point).gap < 0.00001, 'Route left a rendered path');
    }
  }
}
const destinations = [center, ...islands, art.icebreaker, art.teamwork, ...stones].map(island => network.destination(island.position));
let routes = 0;
for (const origin of destinations.slice(0, 7)) {
  for (const destination of destinations) { supported(network.route(origin, destination)); routes++; }
}
const crossIsland = network.route(destinations[1], destinations[2]);
assert.ok(crossIsland.some(point => Math.hypot(point.x, point.z) < 3.01), 'Cross-island routes must use central bridges');
let position = crossIsland[0]; const queue = crossIsland.slice();
while (queue.length) {
  const next = context.window.SocialIslandPaths.advance(position, queue, 0.13);
  assert.ok(Math.hypot(next.position.x - position.x, next.position.z - position.z) <= 0.130001);
  assert.ok(network.nearest(next.position).gap < 0.00001);
  assert.ok(Math.abs(network.nearest(next.position).y - next.position.y) < 0.00001);
  position = next.position;
}
assert.ok(Math.hypot(position.x - destinations[2].x, position.z - destinations[2].z) < 0.00001);
const recovered = network.nearest({ x: 12, z: 3 });
assert.ok(recovered.gap > 0);
assert.ok(network.nearest(recovered).gap < 0.00001);
assert.ok(Number.isFinite(network.nearest({ x: Infinity, z: NaN }).y));
art.animate(2, new three.Vector3(0, 20, 40));
const firstPositions = art.walkers.map(walker => walker.person.position.clone());
art.animate(12, new three.Vector3(0, 20, 40));
assert.ok(art.walkers.some((walker, index) => walker.person.position.distanceTo(firstPositions[index]) > 0.5));
for (const walker of art.walkers) assert.ok(network.nearest(walker.person.position).gap < 0.00001);
const paused = art.walkers.map(walker => walker.person.position.clone());
art.animate(12, new three.Vector3(0, 20, 40));
assert.ok(art.walkers.every((walker, index) => walker.person.position.distanceTo(paused[index]) < 0.000001));
const acorn = require(path.join(__dirname, '..', 'localization/node_modules/acorn'));
const source = fs.readFileSync(path.join(root, 'island-game.js'), 'utf8');
const functions = new Map();
function collect(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'FunctionDeclaration') functions.set(node.id.name, source.slice(node.start, node.end));
  Object.values(node).forEach(value => Array.isArray(value) ? value.forEach(collect) : collect(value));
}
collect(acorn.parse(source, { ecmaVersion: 'latest' }));
const game = { sceneArt: art, state: { playerPos: destinations[1], playerTargetPos: {}, walkTime: 0 }, playerRoute: [], playerGroup: new three.Group(), playerLegL: new three.Group(), playerLegR: new three.Group(), window: context.window, sfx: { playStep() {} }, Math };
vm.createContext(game);
for (const name of ['walkToAndTrigger', 'stepPlayer', 'updatePlayerWalking']) vm.runInContext(functions.get(name), game);
let canceled = 0, arrived = 0;
game.walkToAndTrigger(islands[1].position.x, islands[1].position.z, () => canceled++);
game.updatePlayerWalking(0.03);
const interrupted = { ...game.state.playerPos };
game.walkToAndTrigger(art.teamwork.position.x, art.teamwork.position.z, () => arrived++);
assert.ok(Math.hypot(game.playerRoute[0].x - interrupted.x, game.playerRoute[0].z - interrupted.z) < 0.00001);
for (let frame = 0; frame < 2000; frame++) game.updatePlayerWalking(0.025);
assert.equal(canceled, 0); assert.equal(arrived, 1);
assert.equal(game.state.isWalking, false);
assert.ok(Math.abs(game.playerGroup.position.y - game.state.playerPos.y) < 0.00001);
game.walkToAndTrigger(art.teamwork.position.x, art.teamwork.position.z, () => arrived++);
assert.equal(arrived, 2);
for (let index = 0; index < 100; index++) {
  game.stepPlayer(Math.sin(index) * 1.4, Math.cos(index) * 1.4);
  supported(game.playerRoute);
  game.updatePlayerWalking(0.05);
  assert.ok(network.nearest(game.state.playerPos).gap < 0.00001);
}
const elements = new Map();
function element() { return { children: [], dataset: {}, open: false, append(...children) { this.children.push(...children); }, appendChild(child) { this.children.push(child); }, replaceChildren() { this.children = []; }, addEventListener(name, callback) { this[name] = callback; }, showModal() { this.open = true; }, close() { this.open = false; } }; }
const calls = [];
const hubs = { document: { body: { classList: { add() {} } }, getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); }, createElement: element }, allWeeks: Array.from({ length: 52 }, (_, index) => ({ lessonNumber: index + 1, title: 'Lesson ' + (index + 1) })), ISLAND_THEMES: [[1,13],[14,26],[27,39],[40,52]].map(weeksRange => ({ weeksRange })), openQuestDrawer: (...args) => calls.push(args) };
vm.createContext(hubs);
for (const name of ['openIslandHub', 'openIcebreaker', 'openTeamwork']) vm.runInContext(functions.get(name), hubs);
hubs.openIcebreaker(); elements.get('icebreakerTasks').children.forEach(button => button.click());
hubs.openTeamwork(); elements.get('teamworkTasks').children.forEach(button => button.click());
assert.deepEqual(calls, [[0,1],[0,2],[0,12],[3,51],[1,14],[1,24],[3,40],[3,41]]);
console.log(`PASS: ${routes} supported routes; all 52 weeks + six islands; interrupted movement/arrival once; manual steps; ground heights; 14 path-bound walkers/pause; four instanced road batches; both hubs retain eight original quest routes.`);
