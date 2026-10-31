(() => {
  'use strict';

  const distance = (first, second) => Math.hypot(first.x - second.x, first.z - second.z);
  const interpolate = (first, second, ratio) => ({
    x: first.x + (second.x - first.x) * ratio,
    y: first.y + (second.y - first.y) * ratio,
    z: first.z + (second.z - first.z) * ratio
  });

  function build(islands, center, stones, extraIslands) {
    const nodes = [];
    const edges = [];
    const loops = [];
    const destinations = [];
    const addNode = point => { nodes.push(point); return nodes.length - 1; };
    const connect = (first, second, kind) => edges.push({ first, second, kind, length: distance(nodes[first], nodes[second]) });
    const angleOf = (point, origin) => Math.atan2(point.z - origin.z, point.x - origin.x);
    const normalize = angle => (angle + Math.PI * 4) % (Math.PI * 2);
    function ring(island, radius, angles) {
      const unique = [...new Set(angles.map(angle => normalize(angle).toFixed(8)))].map(Number).sort((first, second) => first - second);
      const loop = unique.map(angle => addNode({ x: island.position.x + Math.cos(angle) * radius, y: island.userData.topY + 0.24, z: island.position.z + Math.sin(angle) * radius }));
      loop.forEach((node, index) => connect(node, loop[(index + 1) % loop.length], 'path'));
      loops.push(loop);
      return angle => loop.reduce((best, node) => distance(nodes[node], { x: island.position.x + Math.cos(angle) * radius, z: island.position.z + Math.sin(angle) * radius }) < distance(nodes[best], { x: island.position.x + Math.cos(angle) * radius, z: island.position.z + Math.sin(angle) * radius }) ? node : best, loop[0]);
    }
    const compass = Array.from({ length: 16 }, (_, index) => index / 16 * Math.PI * 2);
    const hub = ring(center, 2.9, compass);
    destinations.push({ input: center.position, node: hub(Math.PI / 2) });
    [...islands, ...extraIslands].forEach(island => {
      const weeks = stones.filter(stone => stone.userData.parentIslandIndex === island.userData.islandIndex && island.userData.islandIndex !== undefined);
      const inward = angleOf(center.position, island.position);
      const angles = [...compass, inward, ...weeks.map(stone => angleOf(stone.position, island.position))];
      const perimeter = ring(island, island.userData.islandIndex === undefined ? 4.8 : 4.2, angles);
      connect(hub(angleOf(island.position, center.position)), perimeter(inward), 'bridge');
      destinations.push({ input: island.position, node: perimeter(inward + Math.PI * 0.75) });
      weeks.forEach(stone => {
        const node = addNode({ x: stone.position.x, y: 1.02, z: stone.position.z });
        connect(perimeter(angleOf(stone.position, island.position)), node, 'bridge');
        destinations.push({ input: stone.position, node });
      });
    });
    const adjacency = nodes.map(() => []);
    edges.forEach(edge => {
      adjacency[edge.first].push({ node: edge.second, length: edge.length });
      adjacency[edge.second].push({ node: edge.first, length: edge.length });
    });
    function nearest(position) {
      const point = Number.isFinite(position?.x) && Number.isFinite(position?.z) ? position : nodes[0];
      let best = null;
      edges.forEach((edge, index) => {
        const first = nodes[edge.first], second = nodes[edge.second];
        const ratio = Math.max(0, Math.min(1, ((point.x - first.x) * (second.x - first.x) + (point.z - first.z) * (second.z - first.z)) / edge.length ** 2));
        const projected = interpolate(first, second, ratio);
        const gap = distance(point, projected);
        if (!best || gap < best.gap) best = { ...projected, edge: index, ratio, gap };
      });
      return best;
    }
    function destination(position) {
      const exact = destinations.find(item => distance(item.input, position) < 0.1);
      return exact ? nodes[exact.node] : position;
    }
    function route(from, to) {
      const start = nearest(from), end = nearest(to);
      if (start.edge === end.edge) return [start, end];
      const startEdge = edges[start.edge], endEdge = edges[end.edge];
      const costs = nodes.map(() => Infinity);
      const previous = nodes.map(() => null);
      costs[startEdge.first] = start.ratio * startEdge.length;
      costs[startEdge.second] = (1 - start.ratio) * startEdge.length;
      const pending = new Set(nodes.map((point, index) => index));
      while (pending.size) {
        const current = [...pending].reduce((best, node) => costs[node] < costs[best] ? node : best);
        pending.delete(current);
        if (!Number.isFinite(costs[current])) break;
        adjacency[current].forEach(next => {
          if (costs[current] + next.length < costs[next.node]) {
            costs[next.node] = costs[current] + next.length;
            previous[next.node] = current;
          }
        });
      }
      let current = costs[endEdge.first] + end.ratio * endEdge.length < costs[endEdge.second] + (1 - end.ratio) * endEdge.length ? endEdge.first : endEdge.second;
      const path = [];
      while (current !== null) { path.unshift(nodes[current]); current = previous[current]; }
      return [start, ...path, end];
    }
    return { nodes, edges, loops, nearest, destination, route };
  }

  function advance(position, route, budget) {
    let point = { ...position }, angle = null, traveled = 0;
    while (route.length) {
      const next = route[0];
      const length = distance(point, next);
      if (length < 0.00001) { point = { ...next }; route.shift(); continue; }
      if (budget <= 0) break;
      const step = Math.min(length, budget);
      angle = Math.atan2(next.x - point.x, next.z - point.z);
      point = interpolate(point, next, step / length);
      budget -= step;
      traveled += step;
      if (step === length) route.shift();
    }
    return { position: point, angle, traveled, arrived: route.length === 0 };
  }

  window.SocialIslandPaths = { build, advance };
})();
