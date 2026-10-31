(() => {
  'use strict';

  function build(three, scene, islands, center, steppingStones) {
    const materials = new Map();
    const geometries = {
      box: new three.BoxGeometry(1, 1, 1),
      sphere: new three.SphereGeometry(1, 10, 8),
      cylinder: new three.CylinderGeometry(1, 1, 1, 10),
      cone: new three.ConeGeometry(1, 1, 4),
      leaf: new three.SphereGeometry(1, 7, 5),
      smile: new three.TorusGeometry(0.12, 0.025, 5, 12, Math.PI)
    };
    const residents = [];
    const animated = [];
    const landColors = [0xe6b39d, 0x9acbd0, 0xa9c98f, 0xbeb6d5];
    const roofColors = [0xb56e54, 0x477d8c, 0x597e58, 0x796a94];
    function material(color) {
      if (!materials.has(color)) materials.set(color, new three.MeshLambertMaterial({ color }));
      return materials.get(color);
    }
    function piece(parent, kind, color, size, position) {
      const mesh = new three.Mesh(geometries[kind], material(color));
      mesh.scale.set(...size);
      mesh.position.set(...position);
      parent.add(mesh);
      return mesh;
    }
    function group(parent, position, scale = 1) {
      const result = new three.Group();
      result.position.set(...position);
      result.scale.setScalar(scale);
      parent.add(result);
      return result;
    }
    function tree(parent, position, scale = 1) {
      const plant = group(parent, position, scale);
      piece(plant, 'cylinder', 0x8f7250, [0.13, 1.5, 0.13], [0, 0.75, 0]);
      piece(plant, 'leaf', 0x718e62, [0.65, 0.85, 0.65], [0, 1.75, 0]);
      piece(plant, 'leaf', 0x99ad75, [0.42, 0.6, 0.42], [0.35, 1.5, 0.1]);
    }
    function house(parent, position, color, scale = 1) {
      const home = group(parent, position, scale);
      piece(home, 'box', 0xffefd1, [1.8, 1.45, 1.5], [0, 0.72, 0]);
      const roof = piece(home, 'cone', color, [1.6, 0.95, 1.35], [0, 1.87, 0]);
      roof.rotation.y = Math.PI / 4;
      piece(home, 'box', 0x795e45, [0.4, 0.85, 0.08], [0, 0.43, 0.78]);
      [-0.58, 0.58].forEach(offset => {
        piece(home, 'box', 0x457e89, [0.34, 0.38, 0.08], [offset, 0.95, 0.79]);
        piece(home, 'box', 0x457e89, [0.34, 0.38, 0.08], [offset, 0.95, -0.79]);
        piece(home, 'box', 0xffe3ad, [0.4, 0.06, 0.12], [offset, 0.72, 0.8]);
      });
      [-0.94, 0.94].forEach(offset => piece(home, 'box', 0x457e89, [0.08, 0.4, 0.36], [offset, 0.9, 0]));
      piece(home, 'box', 0xecd8ae, [2.0, 0.12, 1.8], [0, 0.04, 0.05]);
      piece(home, 'box', 0xb88f6e, [0.22, 0.7, 0.25], [0.5, 2.1, -0.3]);
      return home;
    }
    function flowers(parent, position, color) {
      const bed = group(parent, position);
      piece(bed, 'box', 0xd9c3a0, [1.0, 0.18, 0.45], [0, 0.09, 0]);
      [-0.3, 0, 0.3].forEach(offset => {
        piece(bed, 'cylinder', 0x688659, [0.025, 0.32, 0.025], [offset, 0.3, 0]);
        piece(bed, 'sphere', color, [0.14, 0.1, 0.14], [offset, 0.48, 0]);
        piece(bed, 'sphere', 0xffde8d, [0.05, 0.05, 0.05], [offset, 0.57, 0]);
      });
    }
    function animal(parent, position, kind, islandIndex) {
      const friend = group(parent, position, 1.12);
      const fur = [0xd5a04f, 0xae805c, 0xf8f0d9, 0xde9053][kind];
      piece(friend, 'sphere', fur, [0.58, 0.74, 0.4], [0, 0.82, 0]);
      piece(friend, 'sphere', kind === 0 ? 0x9a633d : fur, [0.8, 0.77, 0.34], [0, 1.76, 0]);
      piece(friend, 'sphere', fur, [0.62, 0.63, 0.4], [0, 1.78, 0.12]);
      [-1, 1].forEach(side => {
        if (kind === 3) {
          piece(friend, 'cone', fur, [0.3, 0.65, 0.22], [side * 0.44, 2.35, 0]);
          piece(friend, 'cone', 0xf4c5a4, [0.17, 0.4, 0.13], [side * 0.44, 2.37, 0.14]);
        } else {
          piece(friend, 'sphere', kind === 2 ? 0x405b51 : fur, [0.25, 0.27, 0.2], [side * 0.48, 2.23, 0]);
        }
        if (kind === 2) piece(friend, 'sphere', 0x405b51, [0.2, 0.27, 0.12], [side * 0.24, 1.87, 0.44]);
        piece(friend, 'sphere', 0x354c46, [0.065, 0.08, 0.06], [side * 0.22, 1.9, 0.5]);
        piece(friend, 'sphere', kind === 2 ? 0x405b51 : fur, [0.19, 0.33, 0.18], [side * 0.58, 0.9, 0.04]);
        piece(friend, 'sphere', kind === 2 ? 0x405b51 : fur, [0.26, 0.18, 0.3], [side * 0.27, 0.2, 0.12]);
      });
      piece(friend, 'sphere', 0xffefcf, [0.34, 0.25, 0.16], [0, 1.56, 0.48]);
      piece(friend, 'sphere', 0x594b3d, [0.1, 0.075, 0.06], [0, 1.67, 0.64]);
      const smile = piece(friend, 'smile', 0x594b3d, [1, 1, 1], [0, 1.58, 0.64]);
      smile.rotation.z = Math.PI;
      piece(friend, 'box', roofColors[kind], [0.55, 0.25, 0.12], [0, 1.15, 0.41]);
      friend.userData.residentIndex = islandIndex;
      residents.push(friend);
      animated.push({ object: friend, type: 'friend', phase: kind, base: friend.position.y });
      return friend;
    }
    islands.forEach((island, index) => {
      const top = island.userData.topY;
      island.scale.set(1.4, 1, 1.4);
      island.children.slice(0, 2).forEach((mesh, layer) => { mesh.material = material(layer ? landColors[index] : 0xd6bd92); });
      island.children.slice(2, 8).forEach(puff => { puff.material = material(0xcbd8c4); puff.scale.set(1, 0.5, 1); });
      const village = group(island, [0, top, 0]);
      piece(village, 'cylinder', 0xf3dfb5, [1.55, 0.06, 1.35], [0, 0.035, 2.0]);
      house(village, [-1.65, 0, -1.35], roofColors[index], 0.72);
      flowers(village, [-1.8, 0, -0.4], [0xdd8b74, 0x81b8c6, 0xf0bf68, 0xb99cc3][index]);
      const friend = animal(village, [0.2, 0, 2.15], index, index);
      friend.rotation.y = 0.25;
      tree(village, [2.7, 0, -0.3], 0.7);
      const bench = group(village, [1.9, 0, 1.2], 0.65);
      piece(bench, 'box', 0xb28b5c, [1.4, 0.15, 0.5], [0, 0.45, 0]);
      piece(bench, 'box', 0xd3b27b, [1.4, 0.4, 0.12], [0, 0.85, -0.23]);
      [-0.5, 0.5].forEach(offset => piece(bench, 'box', 0x6d7969, [0.12, 0.4, 0.4], [offset, 0.2, 0]));
      for (let paving = 0; paving < 4; paving++) piece(village, 'cylinder', 0xf2deb8, [0.25, 0.045, 0.2], [-0.2 + paving * 0.55, 0.06, 0.8]);
    });
    steppingStones.forEach(stone => {
      const passed = stone.children[1].material.color.getHex() === 0xfbbf24;
      stone.children[0].material = material(0xd7c6a3);
      stone.children[1].material = material(passed ? 0xfbbf24 : 0xf4eccf).clone();
      stone.children[1].scale.y = 0.35;
    });
    center.children.forEach(child => {
      if (!child.isMesh || !child.material.color) return;
      const color = child.material.color.getHex();
      if ([0x8b5cf6, 0xa855f7, 0x6366f1].includes(color)) child.material = material(0x698d96);
      if (color === 0x4f46e5) child.material = material(0xb27b57);
      if (color === 0xfff08a || color === 0xffe066) child.material = material(0xf0d494);
    });
    const harbor = group(center, [0, center.userData.topY, 0]);
    house(harbor, [-2.0, 0, 0.8], 0x527e85, 0.65);
    flowers(harbor, [-2.1, 0, 1.6], 0xe6a077);
    tree(harbor, [2.5, 0, 0.9], 0.8);
    const lighthouse = group(harbor, [0, 0, -2.2], 0.8);
    piece(lighthouse, 'cylinder', 0xffefd0, [0.45, 3.3, 0.45], [0, 1.65, 0]);
    piece(lighthouse, 'cylinder', 0x678b92, [0.53, 0.5, 0.53], [0, 2.8, 0]);
    piece(lighthouse, 'cylinder', 0xffd682, [0.34, 0.45, 0.34], [0, 3.5, 0]);
    piece(lighthouse, 'cone', 0xac7254, [0.68, 0.65, 0.68], [0, 3.95, 0]);
    for (let flag = 0; flag < 7; flag++) {
      const decoration = piece(harbor, 'cone', roofColors[flag % 4], [0.15, 0.3, 0.05], [-1.9 + flag * 0.62, 2.7 - Math.sin(flag / 6 * Math.PI) * 0.5, 2]);
      decoration.rotation.z = Math.PI;
    }
    const boat = group(scene, [11, 0.2, 26], 1.4);
    piece(boat, 'sphere', 0xa97650, [1.35, 0.3, 0.55], [0, 0, 0]);
    piece(boat, 'cylinder', 0x806746, [0.04, 2.6, 0.04], [0, 1.3, 0]);
    const sail = piece(boat, 'cone', 0xffefca, [0.8, 1.65, 0.04], [0.35, 1.6, 0]);
    sail.rotation.z = -0.22;
    animated.push({ object: boat, type: 'boat', base: 0.2, phase: 1 });
    for (let buoy = 0; buoy < 6; buoy++) {
      const angle = buoy / 6 * Math.PI * 2;
      const marker = group(scene, [Math.cos(angle) * 40, 0.15, Math.sin(angle) * 40]);
      piece(marker, 'sphere', 0x9ba783, [0.7, 0.22, 0.5], [0, 0, 0]);
      piece(marker, 'sphere', 0xf4dfba, [0.3, 0.3, 0.25], [0.15, 0.2, 0]);
    }
    const icebreaker = group(scene, [0, 0, 29]);
    icebreaker.name = 'icebreaker-island';
    icebreaker.userData.topY = 2.05;
    piece(icebreaker, 'cylinder', 0xd7c6a3, [5.8, 1.45, 5.8], [0, 0.9, 0]);
    piece(icebreaker, 'cylinder', 0xb9dce4, [6.1, 0.65, 6.1], [0, 1.7, 0]);
    piece(icebreaker, 'cylinder', 0xffedc0, [3.8, 0.08, 3.8], [0, 2.07, 0]);
    house(icebreaker, [-2.5, 2.05, -1.8], 0x447d94, 0.95);
    flowers(icebreaker, [-2.6, 2.05, -0.9], 0xe19b79);
    tree(icebreaker, [3.6, 2.05, -1.8], 0.95);
    const welcome = group(icebreaker, [0.6, 2.05, 0.5]);
    piece(welcome, 'sphere', 0x799c6a, [1.0, 0.65, 1.05], [0, 0.65, 0]);
    piece(welcome, 'sphere', 0xb6ce8e, [0.65, 0.5, 0.55], [0, 0.9, 0.8]);
    [-1, 1].forEach(side => {
      piece(welcome, 'sphere', 0x304f47, [0.07, 0.09, 0.06], [side * 0.24, 1.05, 1.27]);
      piece(welcome, 'sphere', 0xb6ce8e, [0.35, 0.2, 0.45], [side * 0.8, 0.2, 0.4]);
      piece(welcome, 'sphere', 0xb6ce8e, [0.3, 0.2, 0.4], [side * 0.7, 0.2, -0.6]);
    });
    const turtleSmile = piece(welcome, 'smile', 0x304f47, [1.4, 1.4, 1.4], [0, 0.8, 1.3]);
    turtleSmile.rotation.z = Math.PI;
    animated.push({ object: welcome, type: 'friend', base: 2.05, phase: 4 });
    const booth = group(icebreaker, [0, 2.05, -2.9]);
    [-3.7, 3.7].forEach(offset => piece(booth, 'cylinder', 0x92764f, [0.09, 3.5, 0.09], [offset, 1.75, 0]));
    piece(booth, 'box', 0x92764f, [7.5, 0.07, 0.07], [0, 3.45, 0]);
    for (let banner = 0; banner < 9; banner++) {
      const pennant = piece(booth, 'cone', [0xe6ad58, 0xd58c79, 0x83b5c1, 0x9eb67d][banner % 4], [0.27, 0.55, 0.07], [-3.25 + banner * 0.81, 3.1, 0]);
      pennant.rotation.z = Math.PI;
    }
    for (let seat = 0; seat < 4; seat++) {
      const angle = seat / 4 * Math.PI * 2 + 0.35;
      piece(icebreaker, 'cylinder', [0xe6ad58, 0xd58c79, 0x83b5c1, 0x9eb67d][seat], [0.45, 0.4, 0.45], [Math.cos(angle) * 3.0, 2.28, Math.sin(angle) * 3.0]);
    }
    const dice = piece(icebreaker, 'box', 0xfff5db, [0.9, 0.9, 0.9], [3, 2.5, 1.5]);
    dice.rotation.y = 0.3;
    [-0.2, 0.2].forEach(offset => piece(dice, 'sphere', 0x47768b, [0.08, 0.08, 0.03], [offset, offset, 0.46]));
    const teamwork = group(scene, [-29, 0, 0]);
    teamwork.name = 'teamwork-island';
    teamwork.userData.topY = 2.05;
    piece(teamwork, 'cylinder', 0xd7c6a3, [5.8, 1.45, 5.8], [0, 0.9, 0]);
    piece(teamwork, 'cylinder', 0xb3cb91, [6.1, 0.65, 6.1], [0, 1.7, 0]);
    piece(teamwork, 'cylinder', 0xf8e8bd, [3.7, 0.08, 3.7], [0, 2.07, 0]);
    house(teamwork, [-2.5, 2.05, -1.8], 0x668350, 0.85);
    tree(teamwork, [3.2, 2.05, -2], 0.8);
    flowers(teamwork, [-3.2, 2.05, 0], 0xe8b554);
    const project = group(teamwork, [0.3, 2.05, 0.2]);
    [[-0.65, 0.4, 0, 0xd88c70], [0.65, 0.4, 0, 0x709ca9], [0, 1.2, 0, 0xe0b85d]].forEach(([horizontal, vertical, depth, color]) => {
      piece(project, 'box', color, [1.05, 0.8, 1.05], [horizontal, vertical, depth]);
      piece(project, 'cylinder', color, [0.2, 0.15, 0.2], [horizontal, vertical + 0.47, depth]);
    });
    [-2, 2.3].forEach((offset, index) => {
      const banner = group(teamwork, [offset, 2.05, 2.4]);
      piece(banner, 'cylinder', 0x8b7554, [0.06, 2.0, 0.06], [0, 1, 0]);
      piece(banner, 'box', index ? 0x709ca9 : 0xe0b85d, [0.8, 0.65, 0.04], [0.4, 1.65, 0]);
    });
    const paths = window.SocialIslandPaths.build(islands, center, steppingStones, [icebreaker, teamwork]);
    const boards = new Map();
    function board(color, size, position, rotation) {
      if (!boards.has(color)) boards.set(color, []);
      boards.get(color).push({ size, position, rotation });
    }
    paths.edges.forEach(edge => {
      const first = paths.nodes[edge.first], second = paths.nodes[edge.second];
      const direction = new three.Vector3(second.x - first.x, second.y - first.y, second.z - first.z);
      const rotation = new three.Quaternion().setFromUnitVectors(new three.Vector3(0, 0, 1), direction.clone().normalize());
      if (edge.kind === 'path') {
        board(0xf4deb1, [0.92, 0.09, edge.length + 0.12], [(first.x + second.x) / 2, (first.y + second.y) / 2 - 0.045, (first.z + second.z) / 2], rotation);
      } else {
        const count = Math.ceil(edge.length / 0.48);
        const side = new three.Vector3(direction.z, 0, -direction.x).normalize();
        for (let plank = 0; plank < count; plank++) {
          const ratio = (plank + 0.5) / count;
          board(plank % 2 ? 0xd1b181 : 0xc6a170, [1.25, 0.12, direction.length() / count + 0.015], [first.x + direction.x * ratio, first.y + direction.y * ratio - 0.06, first.z + direction.z * ratio], rotation);
        }
        [-0.67, 0.67].forEach(offset => {
          board(0x937956, [0.055, 0.07, direction.length()], [(first.x + second.x) / 2 + side.x * offset, (first.y + second.y) / 2 + 0.55, (first.z + second.z) / 2 + side.z * offset], rotation);
          for (let post = 0; post <= Math.ceil(edge.length / 3); post++) {
            const ratio = post / Math.ceil(edge.length / 3);
            board(0x937956, [0.07, 0.65, 0.07], [first.x + direction.x * ratio + side.x * offset, first.y + direction.y * ratio + 0.25, first.z + direction.z * ratio + side.z * offset], new three.Quaternion());
          }
        });
      }
    });
    const walkwayGroup = group(scene, [0, 0, 0]);
    walkwayGroup.name = 'walkable-paths';
    boards.forEach((instances, color) => {
      const mesh = new three.InstancedMesh(geometries.box, material(color), instances.length);
      const transform = new three.Object3D();
      instances.forEach((instance, index) => {
        transform.position.set(...instance.position);
        transform.scale.set(...instance.size);
        transform.quaternion.copy(instance.rotation);
        transform.updateMatrix();
        mesh.setMatrixAt(index, transform.matrix);
      });
      walkwayGroup.add(mesh);
    });
    const walkers = [];
    function pedestrian(index) {
      const person = group(scene, [0, 0, 0], 1.05);
      person.name = `strolling-resident-${index}`;
      const shirt = [0xc97a60, 0x527f92, 0xd8a43e, 0x718f5f, 0x9380ac, 0x4d8f8c][index % 6];
      const skin = [0xefc39b, 0xc99570, 0xa97453][index % 3];
      piece(person, 'sphere', skin, [0.29, 0.32, 0.28], [0, 1.25, 0]);
      piece(person, 'sphere', 0x5f4d42, [0.3, 0.18, 0.29], [0, 1.45, -0.035]);
      piece(person, 'cylinder', shirt, [0.3, 0.62, 0.3], [0, 0.78, 0]);
      const legs = [-1, 1].map(side => {
        const leg = group(person, [side * 0.14, 0.48, 0]);
        piece(leg, 'box', 0x465d67, [0.18, 0.4, 0.2], [0, -0.2, 0]);
        piece(leg, 'sphere', 0xfff0ce, [0.12, 0.09, 0.19], [0, -0.4, 0.04]);
        piece(person, 'sphere', skin, [0.1, 0.27, 0.1], [side * 0.36, 0.75, 0]);
        piece(person, 'sphere', 0x3d4843, [0.035, 0.045, 0.025], [side * 0.1, 1.27, 0.265]);
        return leg;
      });
      return { person, legs };
    }
    for (let index = 0; index < 14; index++) {
      const model = pedestrian(index);
      const loop = paths.loops[index % paths.loops.length];
      const origin = paths.nodes[loop[index % loop.length]];
      const destination = index < 7 ? paths.nodes[loop[(index + Math.floor(loop.length / 2)) % loop.length]] : paths.nodes[paths.loops[(index + 1) % paths.loops.length][0]];
      const forward = paths.route(origin, destination);
      const patrol = [...forward, ...forward.slice(0, -1).reverse()];
      const length = patrol.reduce((total, point, pointIndex) => pointIndex ? total + Math.hypot(point.x - patrol[pointIndex - 1].x, point.z - patrol[pointIndex - 1].z) : total, 0);
      walkers.push({ ...model, patrol, length, speed: 0.7 + index % 4 * 0.13, offset: index / 14 });
    }
    const waves = new three.Group();
    for (let wave = 0; wave < 40; wave++) {
      const angle = wave * 2.39996;
      const radius = 10 + Math.sqrt(wave) * 6;
      piece(waves, 'box', 0xb5d9d3, [0.9 + wave % 3 * 0.4, 0.02, 0.065], [Math.cos(angle) * radius, 0.02, Math.sin(angle) * radius]);
    }
    scene.add(waves);
    return {
      residents,
      icebreaker,
      teamwork,
      paths,
      walkers,
      animate(time, cameraPosition) {
        walkers.forEach(walker => {
          let remaining = (time * walker.speed + walker.offset * walker.length) % walker.length;
          for (let segment = 1; segment < walker.patrol.length; segment++) {
            const first = walker.patrol[segment - 1], second = walker.patrol[segment];
            const length = Math.hypot(second.x - first.x, second.z - first.z);
            if (remaining > length) { remaining -= length; continue; }
            const ratio = length ? remaining / length : 0;
            walker.person.position.set(first.x + (second.x - first.x) * ratio, first.y + (second.y - first.y) * ratio + 0.02, first.z + (second.z - first.z) * ratio);
            walker.person.rotation.y = Math.atan2(second.x - first.x, second.z - first.z);
            walker.legs[0].rotation.x = Math.sin(time * walker.speed * 8) * 0.4;
            walker.legs[1].rotation.x = -walker.legs[0].rotation.x;
            break;
          }
        });
        animated.forEach(item => {
          item.object.position.y = item.base + Math.sin(time * 0.8 + item.phase) * (item.type === 'boat' ? 0.1 : 0.035);
          if (item.type === 'boat') item.object.rotation.z = Math.sin(time * 0.7) * 0.05;
          else if (cameraPosition) {
            const worldPosition = item.object.getWorldPosition(new three.Vector3());
            item.object.lookAt(cameraPosition.x, worldPosition.y, cameraPosition.z);
          }
        });
      }
    };
  }
  window.SocialIslandArt = { build };
})();
