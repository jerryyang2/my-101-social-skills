/**
 * 大埤國小學習教室 · 社交小超人群島大冒險 (IsleForge 3D 概念 特教 RPG 冒險遊戲)
 * 核心引擎：Three.js + Web Audio API + Web Speech API + 3D 角色即時行走
 * 100% 離線免安裝、無外部相依、支援跨載具/電子白板/平板與無障礙 2D 平面切換
 */

(function (window) {
  'use strict';

  // ==========================================
  // 1. RPG 冒險者與全域狀態管理 (State)
  // ==========================================
  const HERO_LOOKS = {
    dino: { name: '新芽小綠恐龍', avatar: '🦖', bodyColor: 0x22c55e, capColor: 0x16a34a },
    lion: { name: '勇氣紅鬃獅', avatar: '🦁', bodyColor: 0xef4444, capColor: 0xb91c1c },
    unicorn: { name: '智慧藍海馬', avatar: '🦄', bodyColor: 0x3b82f6, capColor: 0x1d4ed8 },
    rocket: { name: '衝鋒紫火箭', avatar: '🚀', bodyColor: 0x8b5cf6, capColor: 0x6d28d9 }
  };

  const LEVELS = [
    { lv: 1, title: '社交見習生', reqExp: 0 },
    { lv: 2, title: '超能力初心者', reqExp: 60 },
    { lv: 3, title: '溝通小達人', reqExp: 150 },
    { lv: 4, title: '情緒調適領航員', reqExp: 270 },
    { lv: 5, title: '傳奇社交守護者', reqExp: 420 }
  ];

  const state = {
    theme: 'cream', // 'cream' | 'sea' | 'night'
    soundEnabled: true,
    ttsSpeed: 0.8,
    viewMode: '3d', // '3d' | '2d'
    cameraFollow: true,
    
    // 冒險者角色
    heroName: '小宇',
    heroLook: 'dino',
    exp: 25,
    stars: 0,
    passedWeeks: new Set(),
    islandStamps: [false, false, false, false], // 4 大島章
    
    // 遊戲運行中視角與位置
    activeIslandIndex: 0,
    activeWeekNumber: 1,
    playerPos: { x: 0, z: 0 },
    playerTargetPos: { x: 0, z: 0 },
    playerAngle: 0,
    isWalking: false,
    walkTime: 0
  };

  // 讀取本地進度
  function loadLocalProgress() {
    try {
      const saved = localStorage.getItem('isleforge_hero_rpg_save');
      if (saved) {
        const d = JSON.parse(saved);
        if (d.name) state.heroName = d.name;
        if (d.look && HERO_LOOKS[d.look]) state.heroLook = d.look;
        if (typeof d.exp === 'number') state.exp = d.exp;
        if (typeof d.stars === 'number') state.stars = d.stars;
        if (Array.isArray(d.passed)) state.passedWeeks = new Set(d.passed);
        if (Array.isArray(d.stamps)) state.islandStamps = d.stamps;
      }
    } catch (e) {
      console.warn('無法讀取本地進度', e);
    }
  }

  function saveLocalProgress() {
    try {
      const d = {
        name: state.heroName,
        look: state.heroLook,
        exp: state.exp,
        stars: state.stars,
        passed: Array.from(state.passedWeeks),
        stamps: state.islandStamps
      };
      localStorage.setItem('isleforge_hero_rpg_save', JSON.stringify(d));
    } catch (e) {}
  }

  loadLocalProgress();

  // 計算等級與進度百分比
  function getLevelInfo(exp) {
    let curLv = LEVELS[0];
    let nextLv = LEVELS[1];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (exp >= LEVELS[i].reqExp) {
        curLv = LEVELS[i];
        nextLv = LEVELS[i + 1] || null;
        break;
      }
    }
    const curBase = curLv.reqExp;
    const nextBase = nextLv ? nextLv.reqExp : curLv.reqExp + 100;
    const progress = Math.min(100, Math.max(0, Math.round(((exp - curBase) / (nextBase - curBase)) * 100)));
    return {
      level: curLv.lv,
      title: curLv.title,
      progress,
      curBase,
      nextBase,
      isMax: !nextLv
    };
  }

  // ==========================================
  // 2. 4 大主題島嶼與 52 週課程資料定義
  // ==========================================
  const ISLAND_THEMES = [
    {
      id: 0,
      name: "❤️ 氣噗噗降溫島",
      shortName: "氣噗噗島",
      subtitle: "火山不爆炸！深呼吸吸吐氣，抱抱自己心情好 🐢",
      color: "#ef4444",
      accent: "#f59e0b",
      landColor: 0xffa8b5,
      cliffColor: 0xfed7aa,
      mascot: "🦁 宇獅獅",
      mascotRole: "探索小隊長",
      mascotDesc: "自閉症(ASD)特質小英雄，在立體愛心島上學習感受身體警報器、心跳溫度計與烏龜深呼吸",
      weeksRange: [1, 13],
      monster: "💥 暴怒火怪與焦慮雷雲",
      minigameType: "breathe"
    },
    {
      id: 1,
      name: "💬 我想跟你說島",
      shortName: "跟你說島",
      subtitle: "眼睛看著你！發射我訊息超能力火箭，聲音剛剛好 🚀",
      color: "#3b82f6",
      accent: "#06b6d4",
      landColor: 0x7dd3fc,
      cliffColor: 0xcfd8dc,
      mascot: "🐻 畯熊熊",
      mascotRole: "活力小英雄",
      mascotDesc: "情緒行為(EBD)特質小英雄，在立體對話泡泡島上學習拿起說話魔杖、發射我訊息火箭與調控音量",
      weeksRange: [14, 26],
      monster: "🗯️ 動手動腳小怪獸與插嘴精靈",
      minigameType: "imsg"
    },
    {
      id: 2,
      name: "🍀 我們一起玩島",
      shortName: "一起玩島",
      subtitle: "借我玩一下好嗎？排隊輪流笑咪咪，擊掌好朋友 🌈",
      color: "#10b981",
      accent: "#ec4899",
      landColor: 0x86efac,
      cliffColor: 0xd7ccc8,
      mascot: "🐼 和貓熊",
      mascotRole: "溫柔引航員",
      mascotDesc: "自閉症伴學障(ASD/LD)小英雄，在立體幸運四葉草島上走過擊掌彩虹橋、輪流等待與分享玩具",
      weeksRange: [27, 39],
      monster: "🚫 霸佔玩具大王與不理人迷霧",
      minigameType: "highfive"
    },
    {
      id: 3,
      name: "⚙️ 輸了沒關係島",
      shortName: "沒關係島",
      subtitle: "輸了不暴走！大腦轉個彎換招式，說聲對不起沒關係 🧩",
      color: "#8b5cf6",
      accent: "#eab308",
      landColor: 0xd8b4fe,
      cliffColor: 0xd1c4e9,
      mascot: "🦊 嘉狐狸",
      mascotRole: "思考智囊官",
      mascotDesc: "自閉症(ASD)小英雄，在立體童趣齒輪島上轉動彈性思考齒輪、寫下道歉修復信與輸了不暴走",
      weeksRange: [40, 52],
      monster: "💢 輸不起暴走龍與死板牛角尖",
      minigameType: "gear"
    }
  ];

  // 取得 52 週課程資料（從 app.js 的 defaultBriefings 動態取得）
  let allWeeks = [];
  if (typeof defaultBriefings !== 'undefined' && Array.isArray(defaultBriefings)) {
    allWeeks = defaultBriefings.filter(b => b.id && b.id.startsWith('b-week-'));
  }
  if (allWeeks.length === 0) {
    for (let i = 1; i <= 52; i++) {
      allWeeks.push({
        id: `b-week-${i}`,
        lessonNumber: i,
        title: `第 ${i} 週社交超能力探索`,
        superSkill: `第 ${i} 課超能力招式`,
        summary: `學習在日常校園中應用特教社交超能力。`
      });
    }
  }

  // ==========================================
  // 3. Web Audio 柔和合成音效引擎 (純離線)
  // ==========================================
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
    playStep() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
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
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    },
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
        gain.gain.setValueAtTime(0.1, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    },
    playFanfare() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.14, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.55);
      });
    },
    playLevelUp() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [392.0, 523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.16, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.65);
      });
    },
    playStamp() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    },
    playBuzz() {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    }
  };

  // Web Speech API 特教語音朗讀
  function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[🦁🐻🐼🦊💥🌟⚠️👉🌱🎈🎒🦕🦖🦄🚀]/g, '').trim();
    if (!cleanText) return;
    const ut = new SpeechSynthesisUtterance(cleanText);
    ut.lang = 'zh-TW';
    ut.rate = state.ttsSpeed || 0.8;
    ut.pitch = 1.05;
    window.speechSynthesis.speak(ut);
  }

  // ==========================================
  // 4. Three.js 3D 群島與角色生成引擎
  // ==========================================
  let scene, camera, renderer, seaMesh, hemiLight, sunLight;
  let islandMeshes = [];
  let subIslandMeshes = [];
  let centerMesh = null;
  let rotatingDecorations = [];
  let clouds = [];
  let labels = [];
  
  // 3D 角色模型群組
  let playerGroup = null;
  let playerLegL = null;
  let playerLegR = null;
  let playerBodyMesh = null;
  let playerCapMesh = null;

  const stage = document.getElementById('stage');
  const canvas = document.getElementById('threeCanvas');
  const labelLayer = document.getElementById('labelLayer');

  // 視角控制變數
  let yaw = 0.5, pitch = 0.72, dist = 55;
  let targetYaw = yaw, targetPitch = pitch, targetDist = dist;
  let isPointerDown = false;
  let pointerStart = { x: 0, y: 0, yaw: 0, pitch: 0 };
  let cameraTarget = new THREE.Vector3(0, 0, 0);

  function initThree() {
    if (!window.THREE) {
      console.error('Three.js 未載入');
      return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, stage.clientWidth / stage.clientHeight, 0.1, 600);
    camera.position.set(0, 35, 55);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    hemiLight = new THREE.HemisphereLight(0xffffff, 0x94a3b8, 0.7);
    scene.add(hemiLight);

    sunLight = new THREE.DirectionalLight(0xffedd5, 0.88);
    sunLight.position.set(28, 48, 32);
    scene.add(sunLight);

    // 大海
    const seaGeo = new THREE.CircleGeometry(110, 64);
    const seaMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.88 });
    seaMesh = new THREE.Mesh(seaGeo, seaMat);
    seaMesh.rotation.x = -Math.PI / 2;
    seaMesh.position.y = -0.2;
    scene.add(seaMesh);

    // 建造群島
    buildArchipelago();

    // 建造 3D 冒險者角色
    buildPlayerCharacter();

    // 建造浮雲
    buildClouds();

    // 綁定操作事件
    bindControls();

    // 視窗 resize
    window.addEventListener('resize', onWindowResize);

    // 套用初始主題色彩
    applyThemeColors(state.theme);

    // 更新頂部 HUD
    updateHudDisplay();

    // 啟動渲染迴圈
    requestAnimationFrame(renderLoop);
  }

  // 幾何輔助積木
  function makeBox(w, h, d, color, x = 0, y = 0, z = 0) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y + h / 2, z);
    return mesh;
  }

  // ==========================================
  // 立體童趣造島造型形狀生成器 (Unique 3D Organic Beveled Shapes)
  // ==========================================

  // 1. 胖胖五角大金星 (中央閃亮亮星星城堡，象徵最高榮譽大星光)
  function createStarShape(pts = 5, outerR = 6.2, innerR = 3.8) {
    const shape = new THREE.Shape();
    for (let i = 0; i < pts * 2; i++) {
      const t = (i / (pts * 2)) * Math.PI * 2 - Math.PI / 2;
      const r = (i % 2 === 0) ? outerR : innerR;
      const x = Math.cos(t) * r;
      const y = Math.sin(t) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  // 2. 圓滾滾立體愛心 (❤️ 氣噗噗降溫島，象徵抱抱自己平息心跳)
  function createHeartShape(scale = 0.29) {
    const shape = new THREE.Shape();
    const n = 36;
    for (let i = 0; i <= n; i++) {
      const t = (i / n) * Math.PI * 2;
      const x = (16 * Math.pow(Math.sin(t), 3)) * scale;
      const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  // 3. 圓角對話泡泡框 (💬 我想跟你說島，象徵勇敢發聲與傾聽)
  function createBubbleShape(w = 4.2, h = 3.2, r = 1.4) {
    const shape = new THREE.Shape();
    shape.moveTo(-w + r, -h);
    shape.lineTo(w * 0.1, -h);
    shape.lineTo(w * 0.45, -h - 1.3); // 可愛對話小尾巴
    shape.lineTo(w * 0.35, -h);
    shape.lineTo(w - r, -h);
    shape.quadraticCurveTo(w, -h, w, -h + r);
    shape.lineTo(w, h - r);
    shape.quadraticCurveTo(w, h, w - r, h);
    shape.lineTo(-w + r, h);
    shape.quadraticCurveTo(-w, h, -w, h - r);
    shape.lineTo(-w, -h + r);
    shape.quadraticCurveTo(-w, -h, -w + r, -h);
    shape.closePath();
    return shape;
  }

  // 4. 幸運四葉草花朵 (🍀 我們一起玩島，象徵一人一片友善分享)
  function createCloverShape(baseR = 3.8, petalDepth = 0.32) {
    const shape = new THREE.Shape();
    const n = 48;
    for (let i = 0; i <= n; i++) {
      const t = (i / n) * Math.PI * 2;
      const radius = baseR * (1 + petalDepth * Math.cos(4 * t));
      const x = Math.cos(t) * radius;
      const y = Math.sin(t) * radius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  // 5. 童趣魔術齒輪 (⚙️ 輸了沒關係島，象徵大腦轉彎彈性變通)
  function createGearShape(teeth = 6, outerR = 4.8, innerR = 3.6) {
    const shape = new THREE.Shape();
    const n = teeth * 4;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      const isOuter = (i % 4 === 1 || i % 4 === 2);
      const r = isOuter ? outerR : innerR;
      const x = Math.cos(t) * r;
      const y = Math.sin(t) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  // 建造雙層糖霜童話雕塑島 (Chubby Beveled Dual-Tier Island)
  function makeChubbySculptedIsland(shape, height = 2.0, topColor = 0x86efac, cliffColor = 0xfed7aa, scale = 1) {
    const group = new THREE.Group();

    // 1. 下層戚風餅乾懸崖基座 (Biscuit Cliff Pedestal)
    const cliffGeo = new THREE.ExtrudeGeometry(shape, {
      depth: height * 0.72,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.28,
      bevelThickness: 0.35
    });
    const cliffMat = new THREE.MeshLambertMaterial({ color: cliffColor });
    const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
    cliffMesh.rotation.x = -Math.PI / 2;
    cliffMesh.position.y = 0.25;
    cliffMesh.scale.set(scale * 0.96, scale * 0.96, 1);
    group.add(cliffMesh);

    // 2. 上層糖霜草皮帽子 (Top Frosting / Grass Cap)
    const topGeo = new THREE.ExtrudeGeometry(shape, {
      depth: height * 0.36,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.35,
      bevelThickness: 0.35
    });
    const topMat = new THREE.MeshLambertMaterial({ color: topColor });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.rotation.x = -Math.PI / 2;
    topMesh.position.y = height * 0.65;
    topMesh.scale.set(scale, scale, 1);
    group.add(topMesh);

    // 3. 圍繞底座的浮空綿密小雲朵 (Floating Cloud Puffs)
    const numClouds = 6;
    for (let i = 0; i < numClouds; i++) {
      const ang = (i / numClouds) * Math.PI * 2;
      const r = 4.4 * scale;
      const puffGeo = new THREE.SphereGeometry(0.55 + Math.random() * 0.2, 8, 8);
      const puffMat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.88 });
      const puff = new THREE.Mesh(puffGeo, puffMat);
      puff.position.set(Math.cos(ang) * r, 0.4 + (i % 2) * 0.25, Math.sin(ang) * r);
      group.add(puff);
    }

    group.userData.topY = height + 0.15;
    return group;
  }

  // 建造 13 顆小週次圓潤布丁踏石島 (Chubby Sub-Island)
  function makeChubbySubIsland(topColor = 0xffffff, cliffColor = 0xfed7aa) {
    const g = new THREE.Group();
    // 胖胖布丁基座
    const baseGeo = new THREE.CylinderGeometry(1.15, 0.95, 0.65, 12);
    const baseMat = new THREE.MeshLambertMaterial({ color: cliffColor });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.32;
    g.add(base);

    // 頂部圓圓奶油蓋
    const capGeo = new THREE.SphereGeometry(1.15, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const capMat = new THREE.MeshLambertMaterial({ color: topColor });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 0.55;
    g.add(cap);

    g.userData.topY = 0.85;
    return g;
  }

  // 棒棒糖糖果樹
  function makeLollipopTree(scale = 1, color = 0x22c55e) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * scale, 0.16 * scale, 0.7 * scale, 6),
      new THREE.MeshLambertMaterial({ color: 0x8a5a2b })
    );
    trunk.position.y = 0.35 * scale;
    g.add(trunk);

    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.65 * scale, 8, 8),
      new THREE.MeshLambertMaterial({ color })
    );
    puff.position.y = 1.0 * scale;
    g.add(puff);
    return g;
  }

  function makeTree(scale = 1) {
    return makeLollipopTree(scale, 0x22c55e);
  }

  // 建造 3D 低多邊形冒險者小英雄
  function buildPlayerCharacter() {
    playerGroup = new THREE.Group();
    const look = HERO_LOOKS[state.heroLook] || HERO_LOOKS.dino;

    // 雙腿
    const legGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.45, 6);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x334155, flatShading: true });
    
    playerLegL = new THREE.Mesh(legGeo, legMat);
    playerLegL.position.set(-0.16, 0.22, 0);
    playerGroup.add(playerLegL);

    playerLegR = new THREE.Mesh(legGeo, legMat);
    playerLegR.position.set(0.16, 0.22, 0);
    playerGroup.add(playerLegR);

    // 身體軀幹 (探險服裝)
    const bodyGeo = new THREE.CylinderGeometry(0.28, 0.24, 0.65, 6);
    const bodyMat = new THREE.MeshLambertMaterial({ color: look.bodyColor, flatShading: true });
    playerBodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    playerBodyMesh.position.y = 0.72;
    playerGroup.add(playerBodyMesh);

    // 後背包
    const bagGeo = new THREE.BoxGeometry(0.3, 0.38, 0.2);
    const bagMat = new THREE.MeshLambertMaterial({ color: 0xb45309, flatShading: true });
    const bag = new THREE.Mesh(bagGeo, bagMat);
    bag.position.set(0, 0.75, -0.22);
    playerGroup.add(bag);

    // 頭部
    const headGeo = new THREE.SphereGeometry(0.32, 8, 8);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xfed7aa, flatShading: true });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.25;
    playerGroup.add(head);

    // 冒險探險帽 / 徽章
    const capGeo = new THREE.ConeGeometry(0.38, 0.35, 6);
    const capMat = new THREE.MeshLambertMaterial({ color: look.capColor, flatShading: true });
    playerCapMesh = new THREE.Mesh(capGeo, capMat);
    playerCapMesh.position.y = 1.52;
    playerGroup.add(playerCapMesh);

    // 腳下微縮光環陰影
    const shadowGeo = new THREE.CircleGeometry(0.42, 12);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    playerGroup.add(shadow);

    // 初始位置放置於中央總部廣場大門前
    playerGroup.position.set(0, 2.2, 2.8);
    playerGroup.rotation.y = Math.PI; // 面向群島
    playerGroup.scale.set(1.35, 1.35, 1.35); // 角色視覺清晰化
    state.playerPos = { x: 0, z: 2.8 };
    state.playerTargetPos = { x: 0, z: 2.8 };

    scene.add(playerGroup);
  }

  // 更新角色外觀造型色彩
  function updatePlayerLook(lookKey) {
    state.heroLook = lookKey;
    const look = HERO_LOOKS[lookKey] || HERO_LOOKS.dino;
    if (playerBodyMesh) playerBodyMesh.material.color.setHex(look.bodyColor);
    if (playerCapMesh) playerCapMesh.material.color.setHex(look.capColor);
    const avatarEl = document.getElementById('hudAvatar');
    if (avatarEl) avatarEl.textContent = look.avatar;
    saveLocalProgress();
  }

  // 建造群島全景 (立體童話微縮模型島嶼)
  function buildArchipelago() {
    // 1. 中央閃亮亮星星城堡 (Star Castle)
    const centerGroup = makeChubbySculptedIsland(createStarShape(5, 6.2, 3.8), 2.2, 0xfef08a, 0x94a3b8, 1.0);
    centerGroup.position.set(0, 0, 0);

    // 城堡主塔樓與童話尖頂
    const citadelTower = makeBox(2.2, 3.6, 2.2, 0x6366f1, 0, centerGroup.userData.topY, 0);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.6, 4), new THREE.MeshLambertMaterial({ color: 0x4f46e5 }));
    roof.position.set(0, centerGroup.userData.topY + 4.4, 0);
    roof.rotation.y = Math.PI / 4;
    centerGroup.add(citadelTower, roof);

    // 4 座小夥伴色彩衛兵尖塔 (紅 🦁、橘 🐻、綠 🐼、紫 🦊)
    const turretColors = [0xef4444, 0xf97316, 0x10b981, 0x8b5cf6];
    const turretOffsets = [
      { x: -1.4, z: -1.4 }, { x: 1.4, z: -1.4 },
      { x: -1.4, z: 1.4 },  { x: 1.4, z: 1.4 }
    ];
    turretOffsets.forEach((t, i) => {
      const turret = makeBox(0.65, 2.8, 0.65, 0xffffff, t.x, centerGroup.userData.topY, t.z);
      const spire = new THREE.Mesh(new THREE.ConeGeometry(0.48, 1.0, 6), new THREE.MeshLambertMaterial({ color: turretColors[i] }));
      spire.position.set(t.x, centerGroup.userData.topY + 3.3, t.z);
      centerGroup.add(turret, spire);
    });

    // 漂浮旋轉金色星星水晶
    const starGeo = new THREE.OctahedronGeometry(1.3, 0);
    const starMat = new THREE.MeshPhongMaterial({ color: 0xfbbf24, shininess: 90, flatShading: true });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    starMesh.position.set(0, centerGroup.userData.topY + 6.0, 0);
    centerGroup.add(starMesh);
    rotatingDecorations.push(starMesh);

    scene.add(centerGroup);
    centerMesh = centerGroup;
    add3DLabel('⭐ 星星城堡', centerGroup, 8.5, true, -1);

    // 2. 四大主題島嶼 (立體專屬外型：愛心、對話泡泡、四葉草、魔法齒輪)
    const islandRadius = 25;
    ISLAND_THEMES.forEach((theme, idx) => {
      const angle = (idx / 4) * Math.PI * 2 - Math.PI / 4;
      const posX = Math.cos(angle) * islandRadius;
      const posZ = Math.sin(angle) * islandRadius;

      let shape;
      if (idx === 0) shape = createHeartShape(0.28);
      else if (idx === 1) shape = createBubbleShape(4.2, 3.2, 1.4);
      else if (idx === 2) shape = createCloverShape(3.8, 0.32);
      else shape = createGearShape(6, 4.8, 3.6);

      const mainIsland = makeChubbySculptedIsland(shape, 1.9, theme.landColor, theme.cliffColor, 1.0);
      mainIsland.position.set(posX, 0, posZ);
      mainIsland.rotation.y = -angle + Math.PI / 2;
      mainIsland.userData.islandIndex = idx;
      mainIsland.userData.islandCenter = { x: posX, z: posZ };

      // 各島特色 3D 童趣地標
      if (idx === 0) {
        // ❤️ 氣噗噗降溫島：草莓布丁火山 + 浮空愛心煙霧
        const volcano = new THREE.Mesh(
          new THREE.CylinderGeometry(0.85, 1.5, 1.8, 8),
          new THREE.MeshLambertMaterial({ color: 0xf43f5e })
        );
        volcano.position.set(0, mainIsland.userData.topY + 0.9, 0);
        const crater = new THREE.Mesh(
          new THREE.CylinderGeometry(0.55, 0.45, 0.35, 8),
          new THREE.MeshLambertMaterial({ color: 0x9f1239 })
        );
        crater.position.set(0, mainIsland.userData.topY + 1.8, 0);
        mainIsland.add(volcano, crater);

        // 浮空愛心微粒
        for (let h = 0; h < 3; h++) {
          const heartParticle = new THREE.Mesh(
            new THREE.SphereGeometry(0.32, 8, 8),
            new THREE.MeshLambertMaterial({ color: 0xfb7185, transparent: true, opacity: 0.9 })
          );
          heartParticle.position.set(Math.sin(h * 2) * 0.4, mainIsland.userData.topY + 2.3 + h * 0.7, Math.cos(h * 2) * 0.4);
          mainIsland.add(heartParticle);
          rotatingDecorations.push(heartParticle);
        }

        // 棒棒糖草莓樹
        const treeA = makeLollipopTree(0.85, 0xfb7185);
        treeA.position.set(2.4, mainIsland.userData.topY, 1.6);
        const treeB = makeLollipopTree(0.75, 0x4ade80);
        treeB.position.set(-2.4, mainIsland.userData.topY, 1.6);
        mainIsland.add(treeA, treeB);

      } else if (idx === 1) {
        // 💬 我想跟你說島：留聲大廣播音響 + 我訊息火箭
        const pole = makeBox(0.4, 3.8, 0.4, 0x3b82f6, 0, mainIsland.userData.topY, 0);
        const megaphone = new THREE.Mesh(
          new THREE.ConeGeometry(0.9, 1.5, 8),
          new THREE.MeshLambertMaterial({ color: 0x06b6d4 })
        );
        megaphone.position.set(0, mainIsland.userData.topY + 3.4, 0.5);
        megaphone.rotation.x = Math.PI / 2;
        mainIsland.add(pole, megaphone);
        rotatingDecorations.push(megaphone);

        // 我訊息小火箭
        const rocketGroup = new THREE.Group();
        const rBody = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.2, 8), new THREE.MeshLambertMaterial({ color: 0xffffff }));
        const rNose = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.6, 8), new THREE.MeshLambertMaterial({ color: 0xef4444 }));
        rNose.position.y = 0.9;
        const rFin = makeBox(0.9, 0.35, 0.08, 0x3b82f6, 0, 0.1, 0);
        rocketGroup.add(rBody, rNose, rFin);
        rocketGroup.position.set(2.2, mainIsland.userData.topY, -1.5);
        mainIsland.add(rocketGroup);

        const treeA = makeLollipopTree(0.85, 0x38bdf8);
        treeA.position.set(-2.4, mainIsland.userData.topY, -1.2);
        const treeB = makeLollipopTree(0.75, 0x818cf8);
        treeB.position.set(2.2, mainIsland.userData.topY, 1.6);
        mainIsland.add(treeA, treeB);

      } else if (idx === 2) {
        // 🍀 我們一起玩島：立體粉紅彩虹拱門 + 分享野餐墊
        const rainbow = new THREE.Mesh(
          new THREE.TorusGeometry(2.0, 0.32, 8, 24, Math.PI),
          new THREE.MeshLambertMaterial({ color: 0xf472b6 })
        );
        rainbow.position.set(0, mainIsland.userData.topY + 1.4, 0);
        rainbow.rotation.y = Math.PI / 4;
        mainIsland.add(rainbow);

        // 野餐分享墊
        const mat = new THREE.Mesh(
          new THREE.CylinderGeometry(1.2, 1.2, 0.1, 12),
          new THREE.MeshLambertMaterial({ color: 0xfef08a })
        );
        mat.position.set(-1.8, mainIsland.userData.topY + 0.05, 1.6);
        mainIsland.add(mat);

        const treeA = makeLollipopTree(0.85, 0x34d399);
        treeA.position.set(2.2, mainIsland.userData.topY, -1.8);
        const treeB = makeLollipopTree(0.75, 0x10b981);
        treeB.position.set(-2.2, mainIsland.userData.topY, -1.8);
        mainIsland.add(treeA, treeB);

      } else {
        // ⚙️ 輸了沒關係島：魔術積木風車 + 彈性拼圖積木
        const windmill = makeBox(1.3, 3.0, 1.3, 0x8b5cf6, 0, mainIsland.userData.topY, 0);
        const bladesGroup = new THREE.Group();
        for (let b = 0; b < 4; b++) {
          const blade = makeBox(0.28, 1.4, 0.08, (b % 2 === 0) ? 0xeab308 : 0xec4899, 0, 0.7, 0);
          blade.rotation.z = (b / 4) * Math.PI * 2;
          bladesGroup.add(blade);
        }
        bladesGroup.position.set(0, mainIsland.userData.topY + 2.7, 0.75);
        mainIsland.add(windmill, bladesGroup);
        rotatingDecorations.push(bladesGroup);

        // 巨型積木拼圖塊
        const puzzleA = makeBox(0.9, 0.7, 0.9, 0xf97316, 2.0, mainIsland.userData.topY, -1.5);
        const puzzleB = makeBox(0.9, 0.5, 0.9, 0xa855f7, 2.6, mainIsland.userData.topY, -1.2);
        mainIsland.add(puzzleA, puzzleB);

        const treeA = makeLollipopTree(0.85, 0xc084fc);
        treeA.position.set(-2.2, mainIsland.userData.topY, 1.8);
        const treeB = makeLollipopTree(0.75, 0xfacc15);
        treeB.position.set(-2.4, mainIsland.userData.topY, -1.8);
        mainIsland.add(treeA, treeB);
      }

      scene.add(mainIsland);
      islandMeshes.push(mainIsland);
      add3DLabel(`${theme.name}`, mainIsland, 6.2, false, idx);

      // 連接中央島的童話彩色浮橋
      const bridgeLen = islandRadius - 10.2;
      const bridge = makeBox(1.3, 0.18, bridgeLen, 0xd97706, 0, 0.6, 0);
      bridge.position.set(posX / 2, 0.6, posZ / 2);
      bridge.rotation.y = -angle + Math.PI / 2;
      scene.add(bridge);

      // 環繞主島的 13 顆小週次圓潤布丁踏石島 (代表該島的 13 堂課)
      const [startW, endW] = theme.weeksRange;
      const subRadius = 8.5;
      for (let w = startW; w <= endW; w++) {
        const subIndex = w - startW;
        const subAngle = angle + (subIndex / 13) * Math.PI * 1.6 - Math.PI * 0.8;
        const subX = posX + Math.cos(subAngle) * subRadius;
        const subZ = posZ + Math.sin(subAngle) * subRadius;

        const isPassed = state.passedWeeks.has(w);
        const subIsland = makeChubbySubIsland(isPassed ? 0xfbbf24 : 0xffffff, 0xfed7aa);
        subIsland.position.set(subX, 0, subZ);
        subIsland.userData.weekNumber = w;
        subIsland.userData.parentIslandIndex = idx;
        subIsland.userData.subCenter = { x: subX, z: subZ };

        // 週次小旗幟 / 通關小金星
        if (isPassed) {
          const starIcon = new THREE.Mesh(
            new THREE.OctahedronGeometry(0.38, 0),
            new THREE.MeshPhongMaterial({ color: 0xf59e0b, shininess: 80, flatShading: true })
          );
          starIcon.position.set(0, subIsland.userData.topY + 0.45, 0);
          subIsland.add(starIcon);
          rotatingDecorations.push(starIcon);
        } else {
          const flag = makeBox(0.08, 0.85, 0.08, 0x475569, 0, subIsland.userData.topY, 0);
          const banner = makeBox(0.35, 0.22, 0.04, 0x3b82f6, 0.18, subIsland.userData.topY + 0.65, 0);
          subIsland.add(flag, banner);
        }

        scene.add(subIsland);
        subIslandMeshes.push(subIsland);
      }
    });
  }

  // 浮雲生成
  function buildClouds() {
    for (let c = 0; c < 7; c++) {
      const cloud = new THREE.Group();
      const numPuffs = 4 + Math.floor(Math.random() * 3);
      for (let p = 0; p < numPuffs; p++) {
        const puff = new THREE.Mesh(
          new THREE.DodecahedronGeometry(1.3 + Math.random() * 0.8, 1),
          new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.88, flatShading: true })
        );
        puff.position.set((p - 2) * 1.3, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.8);
        cloud.add(puff);
      }
      const cloudAngle = (c / 7) * Math.PI * 2;
      const cloudDist = 34 + Math.random() * 14;
      cloud.position.set(Math.cos(cloudAngle) * cloudDist, 20 + Math.random() * 6, Math.sin(cloudAngle) * cloudDist);
      cloud.userData.speed = 0.0007 + Math.random() * 0.0005;
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
        walkToAndTrigger(0, 0, () => openCitadelModal());
      } else {
        const targetIsland = islandMeshes[islandIdx];
        if (targetIsland) {
          walkToAndTrigger(targetIsland.position.x, targetIsland.position.z, () => focusIsland(islandIdx));
        }
      }
    });
    labelLayer.appendChild(el);
    labels.push({ el, obj, yOffset });
  }

  function updateLabels() {
    if (document.body.classList.contains('modal-open')) {
      labels.forEach(item => { item.el.style.display = 'none'; });
      return;
    }

    const w = stage.clientWidth, h = stage.clientHeight;
    const tempV = new THREE.Vector3();

    labels.forEach(item => {
      item.obj.getWorldPosition(tempV);
      tempV.y += item.yOffset;
      tempV.project(camera);

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

  // 3D 冒險者行走邏輯
  function walkToAndTrigger(tx, tz, onArrive) {
    state.playerTargetPos.x = tx;
    state.playerTargetPos.z = tz;
    state.onArriveCallback = onArrive;
  }

  // 視角控制器與 Raycaster 點擊
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
      targetPitch = Math.min(1.3, Math.max(0.25, pointerStart.pitch + dy * 0.005));
    });

    const onPointerUp = () => { isPointerDown = false; };
    stage.addEventListener('pointerup', onPointerUp);
    stage.addEventListener('pointercancel', onPointerUp);

    stage.addEventListener('wheel', e => {
      e.preventDefault();
      targetDist = Math.min(85, Math.max(20, targetDist + e.deltaY * 0.04));
    }, { passive: false });

    // 點擊 3D 物件導航
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
          const idx = root.userData.islandIndex;
          sfx.playClick();
          walkToAndTrigger(root.position.x, root.position.z, () => focusIsland(idx));
          return;
        }
      }

      // 檢查是否點擊中央島
      if (centerMesh) {
        const centerIntersects = raycaster.intersectObject(centerMesh, true);
        if (centerIntersects.length > 0) {
          sfx.playClick();
          walkToAndTrigger(0, 2.8, () => openCitadelModal());
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
          walkToAndTrigger(root.position.x, root.position.z, () => openQuestDrawer(pIdx, w));
          return;
        }
      }
    });

    // 鍵盤 WASD / 方向鍵行走控制
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const speed = 1.4;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        state.playerTargetPos.z -= speed;
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        state.playerTargetPos.z += speed;
      } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        state.playerTargetPos.x -= speed;
      } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        state.playerTargetPos.x += speed;
      }
    });

    // 虛擬 D-pad 控制
    const dpad = document.getElementById('virtualDpad');
    if (dpad) {
      dpad.querySelectorAll('.dpad-btn').forEach(btn => {
        const step = () => {
          const dir = btn.dataset.dir;
          const speed = 2.0;
          if (dir === 'up') state.playerTargetPos.z -= speed;
          if (dir === 'down') state.playerTargetPos.z += speed;
          if (dir === 'left') state.playerTargetPos.x -= speed;
          if (dir === 'right') state.playerTargetPos.x += speed;
          if (dir === 'center') { state.playerTargetPos.x = 0; state.playerTargetPos.z = 0; }
        };
        btn.addEventListener('pointerdown', step);
      });
    }
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

    // 更新頂部按鈕狀態
    document.querySelectorAll('.btn-theme-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeKey);
    });

    if (!scene || !seaMesh) return;

    if (themeKey === 'cream') {
      scene.background = new THREE.Color(0xf6f0e4);
      scene.fog = new THREE.Fog(0xf6f0e4, 55, 120);
      seaMesh.material.color.setHex(0x38bdf8);
      hemiLight.intensity = 0.7;
      sunLight.intensity = 0.88;
      sunLight.color.setHex(0xffedd5);
    } else if (themeKey === 'sea') {
      scene.background = new THREE.Color(0xdcebee);
      scene.fog = new THREE.Fog(0xdcebee, 55, 120);
      seaMesh.material.color.setHex(0x0284c7);
      hemiLight.intensity = 0.65;
      sunLight.intensity = 0.8;
      sunLight.color.setHex(0xfef08a);
    } else if (themeKey === 'night') {
      scene.background = new THREE.Color(0x0f172a);
      scene.fog = new THREE.Fog(0x0f172a, 40, 100);
      seaMesh.material.color.setHex(0x1e293b);
      hemiLight.intensity = 0.4;
      sunLight.intensity = 0.5;
      sunLight.color.setHex(0x93c5fd);
    }
  }

  // 渲染動畫迴圈
  function renderLoop() {
    requestAnimationFrame(renderLoop);

    // 1. 冒險者行走插值與步伐動畫
    if (playerGroup) {
      const dx = state.playerTargetPos.x - state.playerPos.x;
      const dz = state.playerTargetPos.z - state.playerPos.z;
      const distToTarget = Math.sqrt(dx * dx + dz * dz);

      if (distToTarget > 0.15) {
        state.isWalking = true;
        state.walkTime += 0.18;
        const moveSpeed = Math.min(0.22, distToTarget * 0.1);
        state.playerPos.x += (dx / distToTarget) * moveSpeed;
        state.playerPos.z += (dz / distToTarget) * moveSpeed;
        state.playerAngle = Math.atan2(dx, dz);

        // 步伐擺動
        if (playerLegL && playerLegR) {
          playerLegL.rotation.x = Math.sin(state.walkTime * 5) * 0.45;
          playerLegR.rotation.x = -Math.sin(state.walkTime * 5) * 0.45;
        }
        playerGroup.position.y = 2.2 + Math.abs(Math.sin(state.walkTime * 5)) * 0.12;

        if (Math.random() < 0.08) sfx.playStep();
      } else {
        if (state.isWalking) {
          state.isWalking = false;
          if (playerLegL && playerLegR) {
            playerLegL.rotation.x = 0;
            playerLegR.rotation.x = 0;
          }
          playerGroup.position.y = 2.2;
          if (typeof state.onArriveCallback === 'function') {
            const cb = state.onArriveCallback;
            state.onArriveCallback = null;
            cb();
          }
        }
      }

      playerGroup.position.x = state.playerPos.x;
      playerGroup.position.z = state.playerPos.z;
      playerGroup.rotation.y = state.playerAngle;
    }

    // 2. 視角旋轉平滑插值
    yaw += (targetYaw - yaw) * 0.08;
    pitch += (targetPitch - pitch) * 0.08;
    dist += (targetDist - dist) * 0.08;

    // 鏡頭跟隨模式 (Follow Mode)
    if (state.cameraFollow && playerGroup) {
      cameraTarget.x += (playerGroup.position.x - cameraTarget.x) * 0.06;
      cameraTarget.z += (playerGroup.position.z - cameraTarget.z) * 0.06;
    } else {
      cameraTarget.x += (0 - cameraTarget.x) * 0.06;
      cameraTarget.z += (0 - cameraTarget.z) * 0.06;
    }

    camera.position.x = cameraTarget.x + Math.sin(yaw) * Math.cos(pitch) * dist;
    camera.position.y = Math.sin(pitch) * dist;
    camera.position.z = cameraTarget.z + Math.cos(yaw) * Math.cos(pitch) * dist;
    camera.lookAt(cameraTarget.x, 1.8, cameraTarget.z);

    // 3. 裝飾地標旋轉
    rotatingDecorations.forEach(m => {
      m.rotation.y += 0.016;
    });

    // 4. 浮雲飄移
    clouds.forEach(c => {
      c.userData.angle += c.userData.speed;
      c.position.x = Math.cos(c.userData.angle) * c.userData.radius;
      c.position.z = Math.sin(c.userData.angle) * c.userData.radius;
    });

    // 5. 海浪與小踏石浮島微幅起伏 (Bobbing Waves & Stepping Stones)
    const time = Date.now() * 0.0016;
    seaMesh.position.y = -0.2 + Math.sin(time) * 0.08;
    subIslandMeshes.forEach((sub, i) => {
      sub.position.y = Math.sin(time * 2 + i * 0.45) * 0.06;
    });

    renderer.render(scene, camera);
    updateLabels();
  }

  // 聚焦島嶼
  function focusIsland(idx) {
    state.activeIslandIndex = idx;
    const targetIsland = islandMeshes[idx];
    if (!targetIsland) return;

    const [startW] = ISLAND_THEMES[idx].weeksRange;
    openQuestDrawer(idx, startW);

    const angle = (idx / 4) * Math.PI * 2 - Math.PI / 4;
    targetYaw = -angle + Math.PI / 2;
    targetPitch = 0.65;
    targetDist = 38;

    updateHudCard(idx);
  }

  function resetArchipelagoView() {
    targetYaw = 0.5;
    targetPitch = 0.72;
    targetDist = 55;
    closeQuestDrawer();
  }

  // ==========================================
  // 5. RPG 頂部 HUD 與升級狀態展示
  // ==========================================
  function updateHudDisplay() {
    const lvInfo = getLevelInfo(state.exp);
    const heroLook = HERO_LOOKS[state.heroLook] || HERO_LOOKS.dino;

    const avatarEl = document.getElementById('hudAvatar');
    const nameEl = document.getElementById('hudHeroName');
    const lvEl = document.getElementById('hudHeroLv');
    const expFill = document.getElementById('hudExpFill');
    const expText = document.getElementById('hudExpText');
    const starsEl = document.getElementById('hudTotalStars');
    const stampEl = document.getElementById('hudStampCount');

    if (avatarEl) avatarEl.textContent = heroLook.avatar;
    if (nameEl) nameEl.textContent = state.heroName;
    if (lvEl) lvEl.textContent = `Lv.${lvInfo.level} ${lvInfo.title}`;
    if (expFill) expFill.style.width = `${lvInfo.progress}%`;
    if (expText) expText.textContent = `${state.exp} / ${lvInfo.nextBase} EXP`;
    if (starsEl) starsEl.textContent = `${state.stars} 顆`;
    
    // 計算島章獲取數
    const stampCount = state.islandStamps.filter(Boolean).length;
    if (stampEl) stampEl.textContent = `島章 ${stampCount} / 4`;

    updatePassportModal();
  }

  function addExp(pts) {
    const prevLv = getLevelInfo(state.exp).level;
    state.exp += pts;
    const newLvInfo = getLevelInfo(state.exp);
    updateHudDisplay();
    saveLocalProgress();

    showToast(`✨ 獲得 +${pts} EXP！`);

    // 觸發升級特效
    if (newLvInfo.level > prevLv) {
      triggerLevelUpBanner(newLvInfo);
    }
  }

  function addStars(num) {
    state.stars += num;
    updateHudDisplay();
    saveLocalProgress();
  }

  function triggerLevelUpBanner(lvInfo) {
    sfx.playLevelUp();
    triggerConfetti();
    const banner = document.getElementById('levelupBanner');
    const sub = document.getElementById('levelupSub');
    if (!banner || !sub) return;

    sub.textContent = `恭喜晉升為 Lv.${lvInfo.level} ${lvInfo.title}！`;
    banner.classList.add('active');
    setTimeout(() => {
      banner.classList.remove('active');
    }, 3200);
  }

  function showToast(msg) {
    const toast = document.getElementById('toastMsg');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2400);
  }

  // ==========================================
  // 6. 關卡抽屜與闖關邏輯 (Quest Drawer)
  // ==========================================
  function openQuestDrawer(islandIdx, weekNumber) {
    document.body.classList.add('modal-open');
    state.activeIslandIndex = islandIdx;
    state.activeWeekNumber = weekNumber || ISLAND_THEMES[islandIdx].weeksRange[0];

    const overlay = document.getElementById('questDrawerOverlay');
    if (!overlay) return;
    overlay.classList.add('active');

    renderQuestDrawerContent();
  }

  function closeQuestDrawer() {
    document.body.classList.remove('modal-open');
    const overlay = document.getElementById('questDrawerOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  function selectWeek(wNum) {
    state.activeWeekNumber = wNum;
    sfx.playClick();
    renderQuestDrawerContent();

    // 讓 3D 冒險者走向該週次小島
    const subMesh = subIslandMeshes.find(m => m.userData.weekNumber === wNum);
    if (subMesh) {
      walkToAndTrigger(subMesh.position.x, subMesh.position.z);
    }
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

    // NPC 守護夥伴引言
    let npcQuote = `我是${t.mascot}（${t.mascotRole}）！今天我們來到這座島，準備迎接第 ${wNum} 週考驗！遇到困難時，記得施展【${weekData.superSkill || '冷靜超能力'}】！`;
    if (weekData.story && weekData.story.question) {
      npcQuote = weekData.story.question;
    }

    // CBT 認知抉擇題目
    const dt = weekData.decisionTree || {
      impulsive: {
        title: "💥 衝動發脾氣 / 拒絕配合",
        desc: "大聲吼叫、動手推人或生悶氣轉頭跑開",
        consequence: "❌ 同學被嚇跑了，大腦噴火啦！先踩住煞車、做三次深呼吸！"
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
              <span>${t.mascot} · ${t.mascotRole}</span>
              <button class="tts-inline-btn" onclick="window.socialGame.speak('${npcQuote.replace(/'/g, "\\'")}')">
                🔊 語音朗讀
              </button>
            </div>
            <p class="npc-speech">${npcQuote}</p>
          </div>
        </div>

        <!-- 考驗一：CBT 衝動怪獸 vs 社交超能力 -->
        <div class="cbt-choice-section">
          <div class="cbt-choice-title">
            <span>⚔️ 考驗一：打倒觀念怪獸（${t.monster}）</span>
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

        <!-- 考驗二：主題趣味小挑戰 -->
        <div class="minigame-container">
          <div class="minigame-title">🎮 考驗二：${getMinigameTitle(t.minigameType)}</div>
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
    if (type === 'highfive') return '眼神接觸擊掌默契（同儕友善）';
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
          <p style="font-size:0.85rem; color:#64748b;">看著對方的眼睛，伸出手掌友善擊掌！</p>
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
          <p style="font-size:0.85rem; color:#64748b;">轉動彈性思考齒輪，換個正向角度看事情！</p>
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

  // --- 互動事件處理 ---
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
      addExp(15);
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
          addExp(20);
          markWeekPassed(state.activeWeekNumber);
        }, 2800);
      }, 2800);
    }, 2800);
  }

  function clickImsg(slotIdx) {
    const slot = document.getElementById(`imsgSlot${slotIdx}`);
    if (!slot) return;
    sfx.playClick();
    slot.classList.toggle('selected');
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
    showToast('🚀 我訊息三節火箭點火發射成功！+20 EXP！');
    addExp(20);
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
    addExp(20);
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
    addExp(20);
    markWeekPassed(state.activeWeekNumber);
  }

  // 通關標記、加星與島章解鎖檢查
  function markWeekPassed(wNum) {
    if (!state.passedWeeks.has(wNum)) {
      state.passedWeeks.add(wNum);
      addStars(3);
      sfx.playFanfare();
      showToast(`🎉 第 ${wNum} 週通關成功！獲得 3 顆社交星與 EXP！`);

      // 檢查是否達成該島全部週次通關 -> 頒發主題島章！
      checkIslandStampUnlocked(state.activeIslandIndex);

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

      saveLocalProgress();
    }
  }

  function checkIslandStampUnlocked(islandIdx) {
    const [startW, endW] = ISLAND_THEMES[islandIdx].weeksRange;
    let allPassed = true;
    for (let w = startW; w <= endW; w++) {
      if (!state.passedWeeks.has(w)) {
        allPassed = false;
        break;
      }
    }

    if (allPassed && !state.islandStamps[islandIdx]) {
      state.islandStamps[islandIdx] = true;
      sfx.playStamp();
      triggerConfetti();
      showToast(`🏆 恭喜集得【${ISLAND_THEMES[islandIdx].name}】專屬認證島章！`);
      updateHudDisplay();
      saveLocalProgress();
    }
  }

  // 更新底部 HUD 卡片
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

  // ==========================================
  // 7. 冒險者護照與四大主題島章 (Passport)
  // ==========================================
  function openPassportModal() {
    document.body.classList.add('modal-open');
    updatePassportModal();
    sfx.playClick();
    const modal = document.getElementById('passportModalOverlay');
    if (modal) modal.classList.add('active');
  }

  function closePassportModal() {
    document.body.classList.remove('modal-open');
    const modal = document.getElementById('passportModalOverlay');
    if (modal) modal.classList.remove('active');
  }

  function updatePassportModal() {
    const lvInfo = getLevelInfo(state.exp);
    const heroLook = HERO_LOOKS[state.heroLook] || HERO_LOOKS.dino;

    const pAvatar = document.getElementById('passAvatar');
    const pLevel = document.getElementById('passLevel');
    const pName = document.getElementById('passHeroName');
    const pTitle = document.getElementById('passHeroTitle');
    const pExp = document.getElementById('passHeroExp');
    const pStars = document.getElementById('passHeroStars');

    if (pAvatar) pAvatar.textContent = heroLook.avatar;
    if (pLevel) pLevel.textContent = `Lv.${lvInfo.level}`;
    if (pName) pName.textContent = `${state.heroName} 同學`;
    if (pTitle) pTitle.textContent = lvInfo.title;
    if (pExp) pExp.textContent = `${state.exp} EXP`;
    if (pStars) pStars.textContent = `${state.stars} ⭐`;

    // 更新四大島章印記
    state.islandStamps.forEach((unlocked, idx) => {
      const seal = document.querySelector(`#stampSlot-${idx} .stamp-seal`);
      const status = document.getElementById(`stampStatus-${idx}`);
      if (seal && status) {
        if (unlocked) {
          seal.classList.add('unlocked');
          status.textContent = '已認證 ✓';
        } else {
          seal.classList.remove('unlocked');
          status.textContent = '未解鎖';
        }
      }
    });
  }

  // ==========================================
  // 8. 接關碼存檔與讀檔系統 (Save Code System)
  // ==========================================
  function generateSaveCode() {
    const d = {
      n: state.heroName,
      l: state.heroLook,
      e: state.exp,
      s: state.stars,
      p: Array.from(state.passedWeeks),
      st: state.islandStamps
    };
    try {
      const str = JSON.stringify(d);
      return 'HERO-' + btoa(encodeURIComponent(str)).replace(/=/g, '');
    } catch (e) {
      return `HERO-${state.heroName}-${state.exp}`;
    }
  }

  function openSaveCodeModal() {
    document.body.classList.add('modal-open');
    sfx.playClick();
    const modal = document.getElementById('saveCodeModalOverlay');
    const input = document.getElementById('mySaveCodeInput');
    if (input) input.value = generateSaveCode();
    if (modal) modal.classList.add('active');
  }

  function closeSaveCodeModal() {
    document.body.classList.remove('modal-open');
    const modal = document.getElementById('saveCodeModalOverlay');
    if (modal) modal.classList.remove('active');
  }

  function copySaveCode() {
    const input = document.getElementById('mySaveCodeInput');
    if (!input) return;
    navigator.clipboard.writeText(input.value).then(() => {
      sfx.playChime();
      showToast('📋 接關碼已成功複製到剪貼簿！');
    }).catch(() => {
      input.select();
      document.execCommand('copy');
      showToast('📋 接關碼已複製！');
    });
  }

  function loadSaveCode() {
    const input = document.getElementById('loadSaveCodeInput');
    if (!input || !input.value.trim()) return;
    let code = input.value.trim();
    if (code.startsWith('HERO-')) code = code.slice(5);

    try {
      const jsonStr = decodeURIComponent(atob(code));
      const d = JSON.parse(jsonStr);
      if (d.n) state.heroName = d.n;
      if (d.l) state.heroLook = d.l;
      if (typeof d.e === 'number') state.exp = d.e;
      if (typeof d.s === 'number') state.stars = d.s;
      if (Array.isArray(d.p)) state.passedWeeks = new Set(d.p);
      if (Array.isArray(d.st)) state.islandStamps = d.st;

      updatePlayerLook(state.heroLook);
      updateHudDisplay();
      saveLocalProgress();
      sfx.playFanfare();
      showToast('🎉 接關碼讀取成功！進度已完整恢復！');
      closeSaveCodeModal();
    } catch (e) {
      sfx.playBuzz();
      alert('⚠️ 接關碼格式有誤，請確認是否完整複製！');
    }
  }

  // ==========================================
  // 9. 冒險者自訂與初次登入 Dialog
  // ==========================================
  function openStartDialog() {
    document.body.classList.add('modal-open');
    sfx.playClick();
    const dlg = document.getElementById('startDialog');
    const nameInput = document.getElementById('heroNameInput');
    if (nameInput) nameInput.value = state.heroName;
    if (dlg) dlg.showModal();
  }

  function closeStartDialog() {
    document.body.classList.remove('modal-open');
    const dlg = document.getElementById('startDialog');
    if (dlg) dlg.close();
  }

  function setPresetHero(name, lookKey) {
    const nameInput = document.getElementById('heroNameInput');
    if (nameInput) nameInput.value = name;
    selectHeroLook(lookKey);
  }

  function selectHeroLook(lookKey) {
    document.querySelectorAll('.look-card').forEach(card => {
      const match = card.dataset.look === lookKey;
      card.classList.toggle('active', match);
      const radio = card.querySelector('input');
      if (radio) radio.checked = match;
    });
  }

  // 綁定造型卡片點擊
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.look-card').forEach(card => {
      card.addEventListener('click', () => {
        selectHeroLook(card.dataset.look);
      });
    });
  });

  function submitStartHero() {
    const nameInput = document.getElementById('heroNameInput');
    const checkedRadio = document.querySelector('input[name="heroLook"]:checked');
    if (nameInput && nameInput.value.trim()) {
      state.heroName = nameInput.value.trim();
    }
    if (checkedRadio) {
      updatePlayerLook(checkedRadio.value);
    }
    updateHudDisplay();
    sfx.playFanfare();
    showToast(`🚀 社交小超人【${state.heroName}】出發登島冒險！`);
    closeStartDialog();
  }

  // ==========================================
  // 10. 中央閃亮亮星星城堡與數位榮譽證書
  // ==========================================
  function openCitadelModal() {
    document.body.classList.add('modal-open');
    sfx.playChime();
    const modal = document.getElementById('modalCitadelOverlay');
    if (!modal) return;
    modal.classList.add('active');

    const passedCount = state.passedWeeks.size;
    const progressPct = Math.round((passedCount / 52) * 100);

    const countEl = document.getElementById('citadelPassedCount');
    const starsEl = document.getElementById('citadelTotalStars');
    const pctEl = document.getElementById('citadelProgressPct');
    const nameInput = document.getElementById('certStudentName');

    if (countEl) countEl.textContent = `${passedCount} / 52 關`;
    if (starsEl) starsEl.textContent = `${state.stars} ⭐`;
    if (pctEl) pctEl.textContent = `${progressPct}%`;
    if (nameInput) nameInput.value = `${state.heroName} 同學`;

    const certDate = document.getElementById('certIssueDate');
    if (certDate) {
      const today = new Date();
      certDate.textContent = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;
    }
  }

  function closeCitadelModal() {
    document.body.classList.remove('modal-open');
    const modal = document.getElementById('modalCitadelOverlay');
    if (modal) modal.classList.remove('active');
  }

  function celebrateHero() {
    sfx.playFanfare();
    triggerConfetti();
    showToast('🏆 為社交小超人歡呼！大埤國小學習教室以你為榮！');
  }

  // ==========================================
  // 11. 2D 平面全地圖與無障礙導覽模式
  // ==========================================
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
        <p style="color:#64748b; font-size:0.9rem;">針對視覺前庭敏感或需要平面檢閱之學童提供無障礙直覺導覽，點選任一週次立即開啟挑戰</p>
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

  // 鏡頭跟隨開關
  function toggleFollowCamera() {
    state.cameraFollow = !state.cameraFollow;
    const btn = document.getElementById('btnToggleFollow');
    if (btn) {
      btn.innerHTML = state.cameraFollow ? '🎥 跟隨：開' : '🎥 跟隨：關';
    }
    showToast(state.cameraFollow ? '🎥 鏡頭自動跟隨 3D 冒險者' : '🎥 鏡頭自由全景模式');
  }

  // 音效開關
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('btnToggleSound');
    if (btn) {
      btn.innerHTML = state.soundEnabled ? '🔊 音效：開' : '🔇 音效：關';
    }
    showToast(state.soundEnabled ? '🔊 柔和音效已開啟' : '🔇 音效已靜音');
  }

  // ==========================================
  // 12. 全螢幕金彩帶慶祝特效 (Confetti Engine)
  // ==========================================
  function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#06b6d4'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 120,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    let frame = 0;
    function renderConfetti() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // 重力
        p.rotation += p.rotSpeed;

        if (p.y < canvas.height + 20) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      if (alive && frame < 180) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    renderConfetti();
  }

  // ==========================================
  // 13. 公開 API 導出至 window.socialGame
  // ==========================================
  window.socialGame = {
    setTheme: applyThemeColors,
    toggleSound,
    toggleFollowCamera,
    toggleViewMode,
    openQuestDrawer,
    closeQuestDrawer,
    selectWeek,
    speak: speakText,
    handleCbtChoice,
    startBreatheGame,
    clickImsg,
    launchImsgRocket,
    doHighfive,
    spinGear,
    openPassportModal,
    closePassportModal,
    openSaveCodeModal,
    closeSaveCodeModal,
    copySaveCode,
    loadSaveCode,
    openStartDialog,
    closeStartDialog,
    setPresetHero,
    submitStartHero,
    openCitadelModal,
    closeCitadelModal,
    celebrateHero,
    resetArchipelagoView
  };

  // DOM 載入後啟動
  window.addEventListener('DOMContentLoaded', () => {
    initThree();
    if (window.location.hash === '#passport') {
      openPassportModal();
    } else if (window.location.hash === '#citadel') {
      openCitadelModal();
    } else if (window.location.hash === '#savecode') {
      openSaveCodeModal();
    } else if (window.location.hash === '#start') {
      openStartDialog();
    } else if (window.location.hash.startsWith('#quest')) {
      const parts = window.location.hash.split('-');
      const islandIdx = parseInt(parts[1], 10) || 0;
      const weekNum = parseInt(parts[2], 10) || 1;
      openQuestDrawer(islandIdx, weekNum);
    }
  });

})(window);
