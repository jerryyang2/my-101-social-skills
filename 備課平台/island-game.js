/**
 * 社交小超人群島大冒險 (IsleForge 3D Island Game) 核心引擎
 * 採用 Three.js + Web Audio API + Web Speech API
 * 100% 免安裝純前端、支援離線與無障礙 2D 平面切換
 */

(function () {
  'use strict';

  // --- 全域狀態 ---
  const state = {
    theme: 'cream', // 'cream' | 'sea' | 'night'
    soundEnabled: true,
    ttsSpeed: 0.8,
    viewMode: '3d', // '3d' | '2d'
    activeIslandIndex: 0,
    activeWeekNumber: 1,
    passedWeeks: new Set(),
    studentStars: 0,
    cameraTarget: null,
    isTransitioning: false
  };

  // 讀取本地通關紀錄
  try {
    const saved = localStorage.getItem('social_island_progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.passed)) state.passedWeeks = new Set(parsed.passed);
      if (typeof parsed.stars === 'number') state.studentStars = parsed.stars;
    }
  } catch (e) { console.warn('無法讀取本機進度', e); }

  function saveProgress() {
    try {
      localStorage.setItem('social_island_progress', JSON.stringify({
        passed: Array.from(state.passedWeeks),
        stars: state.studentStars
      }));
    } catch (e) { }
  }

  // --- 4 大主題島嶼與守護角色資料 ---
  const ISLAND_THEMES = [
    {
      id: 1,
      name: "🌋 情緒魔法島",
      subtitle: "自我察覺與情緒調適",
      color: "#ef4444",
      accent: "#f59e0b",
      landColor: "#86efac",
      mascot: "🦁 宇獅獅",
      mascotDesc: "自閉症特質小英雄，在島上學習感受自己的心跳、情緒溫度計與烏龜深呼吸",
      weeksRange: [1, 13],
      monster: "💥 暴怒火怪與焦慮雷雲",
      minigameType: "breathe"
    },
    {
      id: 2,
      name: "📢 清晰溝通島",
      subtitle: "專注傾聽與我訊息表達",
      color: "#3b82f6",
      accent: "#06b6d4",
      landColor: "#7dd3fc",
      mascot: "🐻 畯熊熊",
      mascotDesc: "情緒行為特質小英雄，在島上學習拿起說話魔杖、發射我訊息火箭與調控音量",
      weeksRange: [14, 26],
      monster: "🗯️ 動手動腳小怪獸與插嘴精靈",
      minigameType: "imsg"
    },
    {
      id: 3,
      name: "🤝 同儕友誼島",
      subtitle: "友善互動與團體合作",
      color: "#10b981",
      accent: "#ec4899",
      landColor: "#a7f3d0",
      mascot: "🐼 和貓熊",
      mascotDesc: "自閉症伴學障小英雄，在島上學習走過擊掌彩虹橋、輪流等待摩天輪與分享玩具",
      weeksRange: [27, 39],
      monster: "🚫 霸佔玩具大王與不理人迷霧",
      minigameType: "highfive"
    },
    {
      id: 4,
      name: "🛡️ 彈性解決島",
      subtitle: "挫折修復與彈性應變",
      color: "#8b5cf6",
      accent: "#eab308",
      landColor: "#c4b5fd",
      mascot: "🦊 嘉狐狸",
      mascotDesc: "自閉症(ASD)小英雄，在島上學習轉動彈性思考齒輪、寫下道歉修復信與輸了不暴走",
      weeksRange: [40, 52],
      monster: "💢 輸不起暴走龍與死板牛角尖",
      minigameType: "gear"
    }
  ];

  // 取得 52 週課程資料
  let allWeeks = [];
  if (typeof defaultBriefings !== 'undefined' && Array.isArray(defaultBriefings)) {
    allWeeks = defaultBriefings.filter(b => b.id && b.id.startsWith('b-week-'));
  }
  // 若未載入 app.js 則安全預設
  if (allWeeks.length === 0) {
    for (let i = 1; i <= 52; i++) {
      allWeeks.push({
        id: `b-week-${i}`,
        lessonNumber: i,
        title: `第 ${i} 週社交超能力探索`,
        superSkill: `第 ${i} 課超能力技能`,
        summary: `學習在日常校園中應用特教社交超能力。`
      });
    }
  }

  // --- Web Audio API 柔和音效引擎 ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const sfx = {
    playChime() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.45);
      });
    },
    playBuzz() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(120, now + 0.12);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    },
    playClick() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    },
    playFanfare() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const chord = [392.00, 523.25, 659.25, 783.99, 1046.50];
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.85);
      });
    }
  };

  // --- Web Speech API 特教語音朗讀 ---
  function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[🦁🐻🐼🦊💥🌟⚠️👉🌱🎈🎒]/g, '').trim();
    if (!cleanText) return;
    const ut = new SpeechSynthesisUtterance(cleanText);
    ut.lang = 'zh-TW';
    ut.rate = state.ttsSpeed || 0.8;
    ut.pitch = 1.05;
    window.speechSynthesis.speak(ut);
  }

  // --- Three.js 3D 群島生成引擎 ---
  let scene, camera, renderer, seaMesh, hemiLight, sunLight;
  let islandMeshes = [];
  let subIslandMeshes = [];
  let centerMesh = null;
  let rotatingDecorations = [];
  let clouds = [];
  let labels = [];

  const stage = document.getElementById('stage');
  const canvas = document.getElementById('threeCanvas');
  const labelLayer = document.getElementById('labelLayer');

  // 視角控制變數
  let yaw = 0.5, pitch = 0.75, dist = 58;
  let targetYaw = yaw, targetPitch = pitch, targetDist = dist;
  let isPointerDown = false;
  let pointerStart = { x: 0, y: 0, yaw: 0, pitch: 0 };

  function initThree() {
    if (!window.THREE) {
      console.error('Three.js 未載入');
      return;
    }

    // 建立場景與攝影機
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, stage.clientWidth / stage.clientHeight, 0.1, 500);
    camera.position.set(0, 35, 55);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 環境光與直射陽光
    hemiLight = new THREE.HemisphereLight(0xffffff, 0x94a3b8, 0.65);
    scene.add(hemiLight);

    sunLight = new THREE.DirectionalLight(0xffedd5, 0.85);
    sunLight.position.set(25, 45, 30);
    scene.add(sunLight);

    // 大海
    const seaGeo = new THREE.CircleGeometry(90, 64);
    const seaMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.88 });
    seaMesh = new THREE.Mesh(seaGeo, seaMat);
    seaMesh.rotation.x = -Math.PI / 2;
    seaMesh.position.y = -0.2;
    scene.add(seaMesh);

    // 建立群島
    buildArchipelago();

    // 建立浮雲
    buildClouds();

    // 綁定視角拖曳與縮放事件
    bindControls();

    // 監聽視窗尺寸改變
    window.addEventListener('resize', onWindowResize);

    // 套用初始主題色彩
    applyThemeColors(state.theme);

    // 啟動渲染動畫循環
    requestAnimationFrame(renderLoop);
  }

  // 輔助幾何積木
  function makeBox(w, h, d, color, x = 0, y = 0, z = 0) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshLambertMaterial({ color, flatShading: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y + h / 2, z);
    return mesh;
  }

  function makeHexIsland(radius, height, topColor, cliffColor = 0xd8c39a) {
    const group = new THREE.Group();
    // 懸崖底座 (六角柱)
    const cliffGeo = new THREE.CylinderGeometry(radius * 1.05, radius * 0.85, height, 6);
    const cliffMat = new THREE.MeshLambertMaterial({ color: cliffColor, flatShading: true });
    const cliff = new THREE.Mesh(cliffGeo, cliffMat);
    cliff.position.y = height * 0.45;
    group.add(cliff);

    // 頂部草地
    const topGeo = new THREE.CylinderGeometry(radius, radius * 1.05, height * 0.28, 6);
    const topMat = new THREE.MeshLambertMaterial({ color: topColor, flatShading: true });
    const top = new THREE.Mesh(topGeo, topMat);
    top.position.y = height * 0.86;
    group.add(top);

    group.userData.topY = height;
    return group;
  }

  function makeTree(scale = 1) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * scale, 0.15 * scale, 0.6 * scale, 5),
      new THREE.MeshLambertMaterial({ color: 0x8a5a2b, flatShading: true })
    );
    trunk.position.y = 0.3 * scale;
    g.add(trunk);

    const foliage = new THREE.Mesh(
      new THREE.ConeGeometry(0.55 * scale, 1.2 * scale, 6),
      new THREE.MeshLambertMaterial({ color: 0x22c55e, flatShading: true })
    );
    foliage.position.y = 0.9 * scale;
    g.add(foliage);
    return g;
  }

  // 建造群島
  function buildArchipelago() {
    // 1. 中央英雄總部島 (Hero's Citadel)
    const centerGroup = makeHexIsland(5.5, 2.2, 0xe0e7ff, 0x94a3b8);
    centerGroup.position.set(0, 0, 0);

    // 中央紀念塔與金星
    const citadelTower = makeBox(1.8, 3.2, 1.8, 0x6366f1, 0, centerGroup.userData.topY, 0);
    centerGroup.add(citadelTower);

    // 漂浮旋轉金星水晶
    const starGeo = new THREE.OctahedronGeometry(1.2, 0);
    const starMat = new THREE.MeshPhongMaterial({ color: 0xfbbf24, shininess: 90, flatShading: true });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    starMesh.position.set(0, centerGroup.userData.topY + 4.2, 0);
    centerGroup.add(starMesh);
    rotatingDecorations.push(starMesh);

    scene.add(centerGroup);
    centerMesh = centerGroup;
    add3DLabel('⭐ 英雄總部', centerGroup, 7.5, true, -1);

    // 2. 四大主題島嶼 (周圍環形排列)
    const islandRadius = 24;
    ISLAND_THEMES.forEach((theme, idx) => {
      const angle = (idx / 4) * Math.PI * 2 - Math.PI / 4;
      const posX = Math.cos(angle) * islandRadius;
      const posZ = Math.sin(angle) * islandRadius;

      const mainIsland = makeHexIsland(4.5, 1.8, theme.landColor);
      mainIsland.position.set(posX, 0, posZ);
      mainIsland.userData.islandIndex = idx;

      // 專屬地標
      if (idx === 0) {
        // 情緒島：燈塔火山
        const beacon = makeBox(1.4, 2.5, 1.4, 0xef4444, 0, mainIsland.userData.topY, 0);
        const topFire = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.2, 6), new THREE.MeshLambertMaterial({ color: 0xf59e0b }));
        topFire.position.set(0, mainIsland.userData.topY + 3.1, 0);
        mainIsland.add(beacon, topFire);
      } else if (idx === 1) {
        // 溝通島：雷達高塔
        const pole = makeBox(0.4, 3.5, 0.4, 0x3b82f6, 0, mainIsland.userData.topY, 0);
        const dish = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.15, 6, 16), new THREE.MeshLambertMaterial({ color: 0x06b6d4 }));
        dish.position.set(0, mainIsland.userData.topY + 3.2, 0);
        dish.rotation.x = Math.PI / 3;
        mainIsland.add(pole, dish);
        rotatingDecorations.push(dish);
      } else if (idx === 2) {
        // 友誼島：彩虹拱門
        const arch = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.25, 8, 24, Math.PI), new THREE.MeshLambertMaterial({ color: 0xec4899 }));
        arch.position.set(0, mainIsland.userData.topY + 1.2, 0);
        mainIsland.add(arch);
      } else {
        // 彈性島：思考齒輪風車
        const windmill = makeBox(1.2, 2.8, 1.2, 0x8b5cf6, 0, mainIsland.userData.topY, 0);
        const gear = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.2, 6, 12), new THREE.MeshLambertMaterial({ color: 0xeab308 }));
        gear.position.set(0, mainIsland.userData.topY + 2.4, 0.7);
        mainIsland.add(windmill, gear);
        rotatingDecorations.push(gear);
      }

      // 裝飾樹木
      for (let t = 0; t < 3; t++) {
        const tree = makeTree(0.9);
        const tAngle = (t / 3) * Math.PI * 2;
        tree.position.set(Math.cos(tAngle) * 2.8, mainIsland.userData.topY, Math.sin(tAngle) * 2.8);
        mainIsland.add(tree);
      }

      scene.add(mainIsland);
      islandMeshes.push(mainIsland);
      add3DLabel(`${theme.name}`, mainIsland, 5.5, false, idx);

      // 連接中央島的木橋
      const bridgeLen = islandRadius - 9.5;
      const bridge = makeBox(1.2, 0.18, bridgeLen, 0xb45309, 0, 0.6, 0);
      bridge.position.set(posX / 2, 0.6, posZ / 2);
      bridge.rotation.y = -angle + Math.PI / 2;
      scene.add(bridge);

      // 環繞主島的 13 顆小週次階梯島 (代表該島的 13 堂課)
      const [startW, endW] = theme.weeksRange;
      const subRadius = 7.5;
      for (let w = startW; w <= endW; w++) {
        const subIndex = w - startW;
        const subAngle = angle + (subIndex / 13) * Math.PI * 1.6 - Math.PI * 0.8;
        const subX = posX + Math.cos(subAngle) * subRadius;
        const subZ = posZ + Math.sin(subAngle) * subRadius;

        const subIsland = makeHexIsland(1.0, 0.8, state.passedWeeks.has(w) ? 0xfbbf24 : 0xffffff);
        subIsland.position.set(subX, 0, subZ);
        subIsland.userData.weekNumber = w;
        subIsland.userData.parentIslandIndex = idx;

        // 週次小旗幟
        const flag = makeBox(0.08, 0.9, 0.08, 0x475569, 0, subIsland.userData.topY, 0);
        const banner = makeBox(0.35, 0.22, 0.04, state.passedWeeks.has(w) ? 0xf59e0b : 0x3b82f6, 0.18, subIsland.userData.topY + 0.7, 0);
        subIsland.add(flag, banner);

        scene.add(subIsland);
        subIslandMeshes.push(subIsland);
      }
    });
  }

  // 建立低多邊形浮雲
  function buildClouds() {
    for (let c = 0; c < 6; c++) {
      const cloud = new THREE.Group();
      const numPuffs = 4 + Math.floor(Math.random() * 3);
      for (let p = 0; p < numPuffs; p++) {
        const puff = new THREE.Mesh(
          new THREE.DodecahedronGeometry(1.2 + Math.random() * 0.8, 1),
          new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, flatShading: true })
        );
        puff.position.set((p - 2) * 1.2, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.8);
        cloud.add(puff);
      }
      const cloudAngle = (c / 6) * Math.PI * 2;
      const cloudDist = 32 + Math.random() * 12;
      cloud.position.set(Math.cos(cloudAngle) * cloudDist, 18 + Math.random() * 6, Math.sin(cloudAngle) * cloudDist);
      cloud.userData.speed = 0.0008 + Math.random() * 0.0006;
      cloud.userData.radius = cloudDist;
      cloud.userData.angle = cloudAngle;
      scene.add(cloud);
      clouds.push(cloud);
    }
  }

  // 3D 浮動標籤圖層
  function add3DLabel(text, obj, yOffset, isCenter, islandIdx) {
    const el = document.createElement('div');
    el.className = `island-3d-label ${isCenter ? 'center' : ''}`;
    el.innerHTML = text;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      if (isCenter) {
        openCitadelModal();
      } else {
        focusIsland(islandIdx);
      }
    });
    labelLayer.appendChild(el);
    labels.push({ el, obj, yOffset });
  }

  function updateLabels() {
    const w = stage.clientWidth, h = stage.clientHeight;
    const tempV = new THREE.Vector3();

    labels.forEach(item => {
      item.obj.getWorldPosition(tempV);
      tempV.y += item.yOffset;
      tempV.project(camera);

      // 若在攝影機背面則隱藏
      if (tempV.z > 1) {
        item.el.style.display = 'none';
        return;
      }
      item.el.style.display = 'flex';
      const x = (tempV.x * 0.5 + 0.5) * w;
      const y = (-(tempV.y * 0.5) + 0.5) * h;
      item.el.style.left = `${x}px`;
      item.el.style.top = `${y}px`;
    });
  }

  // 聚焦島嶼視角
  function focusIsland(idx) {
    state.activeIslandIndex = idx;
    const targetIsland = islandMeshes[idx];
    if (!targetIsland) return;

    const [startW] = ISLAND_THEMES[idx].weeksRange;
    openQuestDrawer(idx, startW);

    // 滑順飛向島嶼
    const angle = (idx / 4) * Math.PI * 2 - Math.PI / 4;
    targetYaw = -angle + Math.PI / 2;
    targetPitch = 0.65;
    targetDist = 38;

    updateHudCard(idx);
  }

  function resetArchipelagoView() {
    targetYaw = 0.5;
    targetPitch = 0.75;
    targetDist = 58;
    closeQuestDrawer();
  }

  // 綁定視角拖曳與縮放
  function bindControls() {
    stage.addEventListener('pointerdown', e => {
      isPointerDown = true;
      pointerStart.x = e.clientX;
      pointerStart.y = e.clientY;
      pointerStart.yaw = targetYaw;
      pointerStart.pitch = targetPitch;
      stage.setPointerCapture(e.pointerId);
    });

    stage.addEventListener('pointermove', e => {
      if (!isPointerDown) return;
      const dx = e.clientX - pointerStart.x;
      const dy = e.clientY - pointerStart.y;
      targetYaw = pointerStart.yaw - dx * 0.007;
      targetPitch = Math.min(1.3, Math.max(0.3, pointerStart.pitch + dy * 0.005));
    });

    const onPointerUp = () => { isPointerDown = false; };
    stage.addEventListener('pointerup', onPointerUp);
    stage.addEventListener('pointercancel', onPointerUp);

    stage.addEventListener('wheel', e => {
      e.preventDefault();
      targetDist = Math.min(80, Math.max(22, targetDist + e.deltaY * 0.04));
    }, { passive: false });

    // 支援 3D 物件 Raycaster 點擊
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    stage.addEventListener('click', e => {
      const rect = stage.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / stage.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / stage.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // 檢查是否點擊主題島
      const islandIntersects = raycaster.intersectObjects(islandMeshes, true);
      if (islandIntersects.length > 0) {
        let root = islandIntersects[0].object;
        while (root.parent && root.userData.islandIndex === undefined) root = root.parent;
        if (root.userData.islandIndex !== undefined) {
          sfx.playClick();
          focusIsland(root.userData.islandIndex);
          return;
        }
      }

      // 檢查是否點擊中央島
      if (centerMesh) {
        const centerIntersects = raycaster.intersectObject(centerMesh, true);
        if (centerIntersects.length > 0) {
          sfx.playClick();
          openCitadelModal();
          return;
        }
      }

      // 檢查是否點擊週次小島
      const subIntersects = raycaster.intersectObjects(subIslandMeshes, true);
      if (subIntersects.length > 0) {
        let root = subIntersects[0].object;
        while (root.parent && root.userData.weekNumber === undefined) root = root.parent;
        if (root.userData.weekNumber !== undefined) {
          sfx.playClick();
          const w = root.userData.weekNumber;
          const pIdx = root.userData.parentIslandIndex;
          openQuestDrawer(pIdx, w);
          return;
        }
      }
    });
  }

  function onWindowResize() {
    if (!stage || !camera || !renderer) return;
    const w = stage.clientWidth, h = stage.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  // 主題光影切換
  function applyThemeColors(themeKey) {
    state.theme = themeKey;
    document.body.className = `theme-${themeKey}`;

    if (!scene || !seaMesh) return;

    if (themeKey === 'cream') {
      scene.background = new THREE.Color(0xf6f0e4);
      scene.fog = new THREE.Fog(0xf6f0e4, 50, 110);
      seaMesh.material.color.setHex(0x38bdf8);
      hemiLight.intensity = 0.65;
      sunLight.intensity = 0.85;
      sunLight.color.setHex(0xffedd5);
    } else if (themeKey === 'sea') {
      scene.background = new THREE.Color(0xdcebee);
      scene.fog = new THREE.Fog(0xdcebee, 50, 110);
      seaMesh.material.color.setHex(0x0284c7);
      hemiLight.intensity = 0.6;
      sunLight.intensity = 0.75;
      sunLight.color.setHex(0xfef08a);
    } else if (themeKey === 'night') {
      scene.background = new THREE.Color(0x0f172a);
      scene.fog = new THREE.Fog(0x0f172a, 40, 95);
      seaMesh.material.color.setHex(0x1e293b);
      hemiLight.intensity = 0.35;
      sunLight.intensity = 0.45;
      sunLight.color.setHex(0x93c5fd);
    }
  }

  // 渲染迴圈
  function renderLoop() {
    requestAnimationFrame(renderLoop);

    // 視角平滑插值
    yaw += (targetYaw - yaw) * 0.08;
    pitch += (targetPitch - pitch) * 0.08;
    dist += (targetDist - dist) * 0.08;

    // 自動慢速旋轉 (無使用者操作時)
    if (!isPointerDown) {
      targetYaw += 0.0004;
    }

    camera.position.x = Math.sin(yaw) * Math.cos(pitch) * dist;
    camera.position.y = Math.sin(pitch) * dist;
    camera.position.z = Math.cos(yaw) * Math.cos(pitch) * dist;
    camera.lookAt(0, 0, 0);

    // 裝飾旋轉
    rotatingDecorations.forEach(m => {
      m.rotation.y += 0.015;
    });

    // 雲朵飄移
    clouds.forEach(c => {
      c.userData.angle += c.userData.speed;
      c.position.x = Math.cos(c.userData.angle) * c.userData.radius;
      c.position.z = Math.sin(c.userData.angle) * c.userData.radius;
    });

    // 海浪微妙呼吸起伏
    const time = Date.now() * 0.0015;
    seaMesh.position.y = -0.2 + Math.sin(time) * 0.08;

    renderer.render(scene, camera);
    updateLabels();
  }

  // --- HUD 卡片更新 ---
  function updateHudCard(idx) {
    const t = ISLAND_THEMES[idx];
    const box = document.getElementById('hudCurrentIsland');
    if (!box) return;
    box.innerHTML = `
      <div class="hud-island-title">
        <h2>${t.name}</h2>
        <span class="hud-mascot-pill">守護夥伴：${t.mascot}</span>
      </div>
      <p class="hud-island-desc">${t.mascotDesc}</p>
      <div class="hud-actions">
        <button class="c-game-btn btn-primary" onclick="window.socialGame.openQuestDrawer(${idx}, ${t.weeksRange[0]})">
          ⚔️ 登陸探險 (${t.weeksRange[0]}~${t.weeksRange[1]} 週)
        </button>
        <button class="c-game-btn" onclick="window.socialGame.resetArchipelagoView()">
          🌐 群島全覽
        </button>
      </div>
    `;
  }

  // --- 關卡抽屜與闖關邏輯 ---
  function openQuestDrawer(islandIdx, weekNumber) {
    state.activeIslandIndex = islandIdx;
    state.activeWeekNumber = weekNumber || ISLAND_THEMES[islandIdx].weeksRange[0];

    const overlay = document.getElementById('questDrawerOverlay');
    if (!overlay) return;
    overlay.classList.add('active');

    renderQuestDrawerContent();
  }

  function closeQuestDrawer() {
    const overlay = document.getElementById('questDrawerOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  function renderQuestDrawerContent() {
    const t = ISLAND_THEMES[state.activeIslandIndex];
    const wNum = state.activeWeekNumber;
    const weekData = allWeeks.find(b => b.lessonNumber === wNum) || allWeeks[wNum - 1] || {};

    const drawerBadge = document.getElementById('drawerIslandBadge');
    const drawerTitle = document.getElementById('drawerTitle');
    const carouselBox = document.getElementById('weeksCarousel');
    const bodyBox = document.getElementById('drawerDynamicBody');

    if (drawerBadge) drawerBadge.textContent = t.name;
    if (drawerTitle) drawerTitle.textContent = `第 ${wNum} 週：${weekData.title || '特教社交超能力'}`;

    // 週次切換標籤條 (Carousel)
    if (carouselBox) {
      let chipsHtml = '';
      const [startW, endW] = t.weeksRange;
      for (let i = startW; i <= endW; i++) {
        const isAct = i === wNum;
        const isPass = state.passedWeeks.has(i);
        chipsHtml += `
          <button class="week-chip ${isAct ? 'active' : ''} ${isPass ? 'passed' : ''}" onclick="window.socialGame.selectWeek(${i})">
            第 ${i} 週
          </button>
        `;
      }
      carouselBox.innerHTML = chipsHtml;
    }

    // 守護夥伴對白
    const roleplay = (typeof roleplayDatabase !== 'undefined' && roleplayDatabase[weekData.id]) ? roleplayDatabase[weekData.id] : null;
    let npcQuote = `我是${t.mascot}！今天我們來到這座島，準備迎接新的考驗！當你遇到困難時，記得施展社交超能力喔！`;
    if (weekData.story && weekData.story.question) {
      npcQuote = weekData.story.question;
    }

    // 關卡本體內容 (CBT 抉擇 + 主題小遊戲)
    const dt = weekData.decisionTree || {
      impulsive: {
        title: "💥 衝動發脾氣 / 拒絕配合",
        desc: "大聲吼叫、動手推人或生悶氣轉頭跑開",
        consequence: "❌ 同學被嚇跑了，自己被扣除星星！衝動大腦噴火了，先踩住煞車！"
      },
      super_skill: {
        title: `🌟 施展超能力：${weekData.superSkill || '冷靜深呼吸，好好說出來'}`,
        desc: `深吸一口氣踩煞車，運用超能力有禮貌地表達與行動`,
        consequence: "🎉 太棒了！大家都了解你的想法，順利解決問題，獲得小超人星星！"
      }
    };

    if (bodyBox) {
      bodyBox.innerHTML = `
        <!-- NPC 守護夥伴引言 -->
        <div class="npc-dialog-card">
          <div class="npc-avatar">${t.mascot.split(' ')[0]}</div>
          <div class="npc-content">
            <div class="npc-name-tag">
              <span>${t.mascot}</span>
              <button class="tts-inline-btn" onclick="window.socialGame.speak('${npcQuote.replace(/'/g, "\\'")}')">
                🔊 語音朗讀
              </button>
            </div>
            <p class="npc-speech">${npcQuote}</p>
          </div>
        </div>

        <!-- 挑戰一：CBT 衝動怪獸 vs 社交超能力 -->
        <div class="cbt-choice-section">
          <div class="cbt-choice-title">
            <span>⚔️ 第一道考驗：打倒觀念怪獸（${t.monster}）</span>
          </div>
          <div class="cbt-choice-grid">
            <div class="cbt-card card-impulsive" onclick="window.socialGame.handleCbtChoice('impulsive')">
              <div class="cbt-card-header">${dt.impulsive.title}</div>
              <div class="cbt-card-desc">${dt.impulsive.desc}</div>
            </div>
            <div class="cbt-card card-superskill" onclick="window.socialGame.handleCbtChoice('super')">
              <div class="cbt-card-header">${dt.super_skill.title}</div>
              <div class="cbt-card-desc">${dt.super_skill.desc}</div>
            </div>
          </div>
          <div id="cbtResultBox" class="cbt-result-box"></div>
        </div>

        <!-- 挑戰二：主題趣味小挑戰 -->
        <div class="minigame-container">
          <div class="minigame-title">🎮 第二道考驗：${getMinigameTitle(t.minigameType)}</div>
          <div id="minigameDynamicArea">
            ${renderMinigameArea(t.minigameType)}
          </div>
        </div>
      `;
    }
  }

  function getMinigameTitle(type) {
    if (type === 'breathe') return '烏龜深呼吸冷卻儀（調適情緒）';
    if (type === 'imsg') return '我訊息火箭組裝發射台（清晰表達）';
    if (type === 'highfive') return '擊掌默契大考驗（同儕友善）';
    return '換個想法彈性齒輪（挫折應變）';
  }

  function renderMinigameArea(type) {
    if (type === 'breathe') {
      return `
        <div class="turtle-breathe-box">
          <div class="breathe-circle" id="breatheBall">🐢</div>
          <div class="breathe-prompt" id="breathePrompt">點擊開始跟著烏龜深呼吸</div>
          <button class="c-game-btn btn-primary" onclick="window.socialGame.startBreatheGame()">
            💨 開始深呼吸調息
          </button>
        </div>
      `;
    } else if (type === 'imsg') {
      return `
        <div class="imsg-puzzle-box">
          <p style="font-size:0.85rem; color:#64748b; margin-bottom:4px;">請依序點選組裝「我訊息」三節火箭：</p>
          <div class="imsg-slot" id="imsgSlot1" onclick="window.socialGame.clickImsg(1)">1️⃣ 我覺得……（說出感受：我很難過/著急）</div>
          <div class="imsg-slot" id="imsgSlot2" onclick="window.socialGame.clickImsg(2)">2️⃣ 因為……（具體說明原因：積木被撞倒了）</div>
          <div class="imsg-slot" id="imsgSlot3" onclick="window.socialGame.clickImsg(3)">3️⃣ 我希望……（提出具體請求：請跟我一起拼好）</div>
          <button class="c-game-btn btn-primary" id="imsgLaunchBtn" style="margin-top:8px;" onclick="window.socialGame.launchImsgRocket()">
            🚀 發射我訊息火箭！
          </button>
        </div>
      `;
    } else if (type === 'highfive') {
      return `
        <div class="highfive-game-box">
          <p style="font-size:0.85rem; color:#64748b;">看著對方的眼睛，伸出手掌擊掌！</p>
          <div class="highfive-hand-btn" id="highfiveHand" onclick="window.socialGame.doHighfive()">
            ✋
          </div>
          <div id="highfivePrompt" style="font-size:0.95rem; font-weight:800; color:#d97706;">
            點擊手掌完成友善擊掌！
          </div>
        </div>
      `;
    } else {
      return `
        <div class="gear-game-box">
          <p style="font-size:0.85rem; color:#64748b;">轉動彈性思考齒輪，把「輸了就全毀了」換成新想法！</p>
          <div class="gear-icon" id="gearIcon">⚙️</div>
          <div id="gearPrompt" style="font-size:0.95rem; font-weight:800; color:#7c3aed;">
            「轉動齒輪，換個想法！」
          </div>
          <button class="c-game-btn btn-primary" onclick="window.socialGame.spinGear()">
            🔄 轉動彈性齒輪
          </button>
        </div>
      `;
    }
  }

  // --- 小遊戲互動事件 ---
  function handleCbtChoice(type) {
    const resBox = document.getElementById('cbtResultBox');
    const wNum = state.activeWeekNumber;
    const weekData = allWeeks.find(b => b.lessonNumber === wNum) || allWeeks[wNum - 1] || {};
    const dt = weekData.decisionTree || {};

    if (!resBox) return;

    if (type === 'impulsive') {
      sfx.playBuzz();
      resBox.className = 'cbt-result-box impulsive-active';
      resBox.innerHTML = `⚠️ <b>觀念怪獸出現了！</b><br>${dt.impulsive ? dt.impulsive.consequence : '衝動大腦噴火了！下次請試著踩住煞車、做三次深呼吸！'}`;
      speakText('衝動大腦噴火了，先踩住煞車，做三次深呼吸！');
    } else {
      sfx.playChime();
      resBox.className = 'cbt-result-box super-active';
      resBox.innerHTML = `🌟 <b>施展超能力成功！觀念怪獸退散！</b><br>${dt.super_skill ? dt.super_skill.consequence : '太棒了！大家都了解你的想法，順利解決問題！'}`;
      speakText('太棒了！施展社交超能力成功！');
      markWeekPassed(wNum);
    }
  }

  function startBreatheGame() {
    const ball = document.getElementById('breatheBall');
    const prompt = document.getElementById('breathePrompt');
    if (!ball || !prompt) return;

    sfx.playClick();
    prompt.textContent = '🌬️ 慢慢吸氣……（1、2、3、4）';
    ball.classList.add('inhale');
    ball.classList.remove('exhale');

    setTimeout(() => {
      prompt.textContent = '🤫 閉氣 4 秒……感受平靜';
      setTimeout(() => {
        prompt.textContent = '💨 慢慢吐氣……把火氣吐出去（1、2、3、4）';
        ball.classList.remove('inhale');
        ball.classList.add('exhale');
        setTimeout(() => {
          prompt.textContent = '🎉 深呼吸調息完成！心跳變慢，大腦冷靜下來了！';
          sfx.playChime();
          markWeekPassed(state.activeWeekNumber);
        }, 3000);
      }, 3000);
    }, 3000);
  }

  let imsgProgress = 0;
  function clickImsg(slotIdx) {
    const slot = document.getElementById(`imsgSlot${slotIdx}`);
    if (!slot) return;
    sfx.playClick();
    slot.classList.toggle('selected');
    imsgProgress++;
  }

  function launchImsgRocket() {
    const s1 = document.getElementById('imsgSlot1');
    const s2 = document.getElementById('imsgSlot2');
    const s3 = document.getElementById('imsgSlot3');
    if (s1 && s2 && s3) {
      s1.classList.add('selected');
      s2.classList.add('selected');
      s3.classList.add('selected');
    }
    sfx.playFanfare();
    alert('🚀 我訊息三節火箭點火成功！成功把溫和堅定的想法傳遞給對方！');
    markWeekPassed(state.activeWeekNumber);
  }

  function doHighfive() {
    const hand = document.getElementById('highfiveHand');
    const prompt = document.getElementById('highfivePrompt');
    if (!hand || !prompt) return;
    sfx.playFanfare();
    hand.style.transform = 'scale(1.2) rotate(15deg)';
    prompt.textContent = '🌟 啪！默契大成功！給同儕最棒的友善支持！';
    setTimeout(() => { hand.style.transform = 'scale(1)'; }, 300);
    markWeekPassed(state.activeWeekNumber);
  }

  let gearDeg = 0;
  function spinGear() {
    const gear = document.getElementById('gearIcon');
    const prompt = document.getElementById('gearPrompt');
    if (!gear || !prompt) return;
    sfx.playChime();
    gearDeg += 360;
    gear.style.transform = `rotate(${gearDeg}deg)`;
    const thoughts = [
      '💡「雖然輸了很可惜，但這次學到新技巧，下次再戰！」',
      '💡「計畫改變沒關係，換條路走也能看到新風景！」',
      '💡「我現在很生氣，先喝口水暫停一下再說。」'
    ];
    prompt.textContent = thoughts[Math.floor(Math.random() * thoughts.length)];
    markWeekPassed(state.activeWeekNumber);
  }

  // 通關標記與加星
  function markWeekPassed(wNum) {
    if (!state.passedWeeks.has(wNum)) {
      state.passedWeeks.add(wNum);
      state.studentStars += 3;
      saveProgress();
      sfx.playFanfare();

      // 更新週次標籤
      const chips = document.querySelectorAll('.week-chip');
      chips.forEach((c, idx) => {
        const [startW] = ISLAND_THEMES[state.activeIslandIndex].weeksRange;
        if (startW + idx === wNum) c.classList.add('passed');
      });

      // 更新 3D 週次小島外觀 (翻成金色)
      const subMesh = subIslandMeshes.find(m => m.userData.weekNumber === wNum);
      if (subMesh && subMesh.children[1]) {
        subMesh.children[1].material.color.setHex(0xfbbf24);
      }
    }
  }

  // --- 中央英豪總部與證書 Modal ---
  function openCitadelModal() {
    const modal = document.getElementById('modalCitadelOverlay');
    if (!modal) return;
    sfx.playChime();
    modal.classList.add('active');

    // 更新進度數據
    const passedCount = state.passedWeeks.size;
    const progressPct = Math.round((passedCount / 52) * 100);

    const countEl = document.getElementById('citadelPassedCount');
    const starsEl = document.getElementById('citadelTotalStars');
    const pctEl = document.getElementById('citadelProgressPct');

    if (countEl) countEl.textContent = `${passedCount} / 52 關`;
    if (starsEl) starsEl.textContent = `${state.studentStars} ⭐`;
    if (pctEl) pctEl.textContent = `${progressPct}%`;

    const certDate = document.getElementById('certIssueDate');
    if (certDate) {
      const today = new Date();
      certDate.textContent = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;
    }
  }

  function closeCitadelModal() {
    const modal = document.getElementById('modalCitadelOverlay');
    if (modal) modal.classList.remove('active');
  }

  // 列印 / 匯出證書
  function printCertificate() {
    window.print();
  }

  // 匯出造島工坊草稿 JSON
  function exportIsleForgeDraft() {
    const url = 'isleforge-project.json';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'isleforge-social-hero.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    alert('📥 已下載造島工坊相容專案草稿包！可至 https://isleforge-tw.netlify.app 一鍵匯入！');
  }

  // 2D 平面全地圖切換
  function toggleViewMode() {
    const map2D = document.getElementById('map2DView');
    const btn = document.getElementById('btnToggleView');
    if (state.viewMode === '3d') {
      state.viewMode = '2d';
      if (map2D) map2D.classList.add('active');
      if (btn) btn.innerHTML = '🌐 3D 視角';
      render2DMapView();
    } else {
      state.viewMode = '3d';
      if (map2D) map2D.classList.remove('active');
      if (btn) btn.innerHTML = '🗺️ 2D 全地圖';
    }
  }

  function render2DMapView() {
    const container = document.getElementById('map2DView');
    if (!container) return;

    let html = `
      <div style="text-align:center; margin-bottom:24px;">
        <h2 style="font-size:1.6rem; font-weight:900; color:#1e293b; margin-bottom:6px;">🗺️ 52 週社交小超人冒險全地圖</h2>
        <p style="color:#64748b; font-size:0.9rem;">針對視覺前庭敏感之學童提供無障礙直覺導覽，點選任一週次立即開啟挑戰</p>
      </div>
      <div class="islands-2d-grid">
    `;

    ISLAND_THEMES.forEach((t, idx) => {
      const [startW, endW] = t.weeksRange;
      let weeksListHtml = '';
      for (let w = startW; w <= endW; w++) {
        const weekData = allWeeks.find(b => b.lessonNumber === w) || allWeeks[w - 1] || {};
        const isPass = state.passedWeeks.has(w);
        weeksListHtml += `
          <div class="week-2d-item ${isPass ? 'passed' : ''}" onclick="window.socialGame.openQuestDrawer(${idx}, ${w})">
            <span>第 ${w} 週：${weekData.title || ''}</span>
            <span>${isPass ? '⭐' : '⚪'}</span>
          </div>
        `;
      }

      html += `
        <div class="island-2d-card">
          <div class="card-2d-header">
            <div class="card-2d-icon">${t.name.split(' ')[0]}</div>
            <div class="card-2d-title">
              <h3>${t.name}</h3>
              <span>${t.subtitle} · 守護夥伴：${t.mascot}</span>
            </div>
          </div>
          <div class="weeks-2d-list">
            ${weeksListHtml}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // --- 暴露對外 API 供 HTML 呼叫 ---
  window.socialGame = {
    init: initThree,
    focusIsland,
    resetArchipelagoView,
    openQuestDrawer,
    closeQuestDrawer,
    selectWeek(wNum) {
      state.activeWeekNumber = wNum;
      renderQuestDrawerContent();
    },
    handleCbtChoice,
    startBreatheGame,
    clickImsg,
    launchImsgRocket,
    doHighfive,
    spinGear,
    speak: speakText,
    setTtsSpeed(val) { state.ttsSpeed = parseFloat(val); },
    toggleSound() {
      state.soundEnabled = !state.soundEnabled;
      const btn = document.getElementById('btnToggleSound');
      if (btn) btn.innerHTML = state.soundEnabled ? '🔊 音效：開' : '🔇 音效：關';
      if (state.soundEnabled) sfx.playClick();
    },
    setTheme: applyThemeColors,
    openCitadelModal,
    closeCitadelModal,
    printCertificate,
    exportIsleForgeDraft,
    toggleViewMode
  };

  // 當 DOM 載入後自動啟動
  document.addEventListener('DOMContentLoaded', () => {
    initThree();
    updateHudCard(0);
  });

})();
