/**
 * OO國小學習教室 · 社交小超人群島大冒險 (IsleForge 3D 概念 特教 RPG 冒險遊戲)
 * 核心引擎：Three.js + Web Audio API + Web Speech API + 3D 角色即時行走
 * 100% 離線免安裝、無外部相依、支援跨載具/電子白板/平板與無障礙 2D 平面切換
 */

(function (window) {
  'use strict';

  // ==========================================
  // 1. RPG 冒險者與全域狀態管理 (State)
  // ==========================================
  const HERO_LOOKS = {
    dino: { name: "Sprout little green dinosaur", avatar: '🦖', bodyColor: 0x22c55e, capColor: 0x16a34a },
    lion: { name: "Courage Red Mane Lion", avatar: '🦁', bodyColor: 0xef4444, capColor: 0xb91c1c },
    unicorn: { name: "Smart Blue Seahorse", avatar: '🦄', bodyColor: 0x3b82f6, capColor: 0x1d4ed8 },
    rocket: { name: "Charge Purple Rocket", avatar: '🚀', bodyColor: 0x8b5cf6, capColor: 0x6d28d9 }
  };

  const LEVELS = [
    { lv: 1, title: "Social trainee", reqExp: 0 },
    { lv: 2, title: "Beginners with super powers", reqExp: 60 },
    { lv: 3, title: "Communication expert", reqExp: 150 },
    { lv: 4, title: "Emotional Adjustment Navigator", reqExp: 270 },
    { lv: 5, title: "Legendary Social Guardian", reqExp: 420 }
  ];

  const state = {
    theme: 'cream', // 'cream' | 'sea' | 'night'
    soundEnabled: true,
    ttsSpeed: 0.8,
    viewMode: '3d', // '3d' | '2d'
    cameraFollow: false,

    // 冒險者角色
    heroName: "Yu",
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
      console.warn("Unable to read local progress", e);
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
      window.SocialIslandVisitors.save(d, state.playerPos);
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
      name: "❤️ Calm-Down Island",
      shortName: "Calm-Down Island",
      subtitle: "Volcanoes don’t explode! Take a deep breath in and out, hug yourself and feel good 🐢",
      color: "#ef4444",
      accent: "#f59e0b",
      landColor: 0xffa8b5,
      cliffColor: 0xfed7aa,
      mascot: "🦁 Yushishi",
      mascotRole: "Exploration team leader",
      mascotDesc: "A little hero with autism (ASD) learns to feel the body alarm, heartbeat thermometer and turtle deep breathing on the three-dimensional love island",
      weeksRange: [1, 13],
      monster: "💥 Angry Fire Monster and Anxious Thundercloud",
      minigameType: "breathe"
    },
    {
      id: 1,
      name: "💬 Let's Talk Island",
      shortName: "Let's Talk Island",
      subtitle: "Eyes on you! Launch my message super power rocket, the sound is just right 🚀",
      color: "#3b82f6",
      accent: "#06b6d4",
      landColor: 0x7dd3fc,
      cliffColor: 0xcfd8dc,
      mascot: "🐻 Bear bear",
      mascotRole: "Vibrant little hero",
      mascotDesc: "The little hero with emotional behavior (EBD) traits learns to pick up the talking wand, launch my message rocket and adjust the volume on the three-dimensional dialogue bubble island",
      weeksRange: [14, 26],
      monster: "🗯️ Handy little monsters and interfering elves",
      minigameType: "imsg"
    },
    {
      id: 2,
      name: "🍀 Let's Play Island",
      shortName: "Let’s play the island together",
      subtitle: "Can you let me play for a while? Stand in line and take turns smiling and giving high fives to good friends 🌈",
      color: "#10b981",
      accent: "#ec4899",
      landColor: 0x86efac,
      cliffColor: 0xd7ccc8,
      mascot: "🐼 And panda",
      mascotRole: "Gentle pilot",
      mascotDesc: "Little heroes with autism and learning disabilities (ASD/LD) walked across the high-five rainbow bridge on the three-dimensional lucky four-leaf clover island, taking turns waiting and sharing toys",
      weeksRange: [27, 39],
      monster: "🚫 The toy king who dominates and the mist that ignores people",
      minigameType: "highfive"
    },
    {
      id: 3,
      name: "⚙️ Try-Again Island",
      shortName: "Never mind the island",
      subtitle: "Don’t go berserk if you lose! My brain turns around and changes my tactics. It’s okay to say I’m sorry. 🧩",
      color: "#8b5cf6",
      accent: "#eab308",
      landColor: 0xd8b4fe,
      cliffColor: 0xd1c4e9,
      mascot: "🦊 Chia Fox",
      mascotRole: "Thinking Think Tank Officer",
      mascotDesc: "The little hero with autism (ASD) turns the elastic thinking gear on the three-dimensional childlike gear island, writes a letter of apology and repair, and does not run away when he loses",
      weeksRange: [40, 52],
      monster: "💢 I can’t afford to lose to the violent dragon and the rigid horn.",
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
        title: `Week ${i} Social Super Power Exploration`,
        superSkill: `Lesson ${i} Super Power Moves`,
        summary: `Learn to apply special education social superpowers in everyday school settings.`
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

  // Web Speech API 特教語音朗讀 (含台灣繁體中文優化與表情符號過濾)
  let cachedTwVoice = null;
  function getTaiwanVoice() {
    return window.SiteLanguage.englishVoice();
    if (cachedTwVoice) return cachedTwVoice;
    if (!('speechSynthesis' in window) || !window.speechSynthesis.getVoices) return null;
    const voices = window.speechSynthesis.getVoices();
    cachedTwVoice = voices.find(v => v.lang === 'zh-TW' || v.lang === 'zh_TW' || v.lang.startsWith('zh-TW'))
      || voices.find(v => v.lang.startsWith('zh'));
    return cachedTwVoice;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedTwVoice = null;
      getTaiwanVoice();
    };
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // 濾除各類 Emoji 圖示與特殊標記，保留純淨自然之特教朗讀語音
    const cleanText = text
      .replace(/[\p{Extended_Pictographic}\uFE0F\u200D🦁🐻🐼🦊💥🌟⚠️👉🌱🎈🎒🦕🦖🦄🚀🌈💖🐰⭐🎪🐱]/gu, '')
      .replace(/[★☆✦✧·—]/g, '')
      .trim();
    if (!cleanText) return;
    const ut = new SpeechSynthesisUtterance(cleanText);
    ut.lang = 'en-US';
    const voice = getTaiwanVoice();
    if (voice) ut.voice = voice;
    ut.rate = state.ttsSpeed || 0.88;
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
  let balloons = [];
  let labels = [];

  // 3D 角色模型群組
  let playerGroup = null;
  let playerLegL = null;
  let playerLegR = null;
  let playerBodyMesh = null;
  let playerCapMesh = null;
  let playerRoute = [];

  const stage = document.getElementById('stage');
  const canvas = document.getElementById('threeCanvas');
  const labelLayer = document.getElementById('labelLayer');

  // 視角控制變數
  let yaw = 0.5, pitch = 0.72, dist = 55;
  let targetYaw = yaw, targetPitch = pitch, targetDist = dist;
  let cameraTarget = window.THREE ? new THREE.Vector3(0, 1.8, 0) : null;
  let cameraGoal = cameraTarget?.clone();
  let sceneArt = null;
  let cameraMode = 'bird';
  let overviewActive = true;
  let motionPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let sceneryTime = 0;
  let previousFrameTime = 0;
  let webglAvailable = false;

  function initThree() {
    if (!window.THREE) {
      toggleViewMode();
      return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, stage.clientWidth / stage.clientHeight, 0.1, 600);
    camera.position.set(0, 35, 55);
    camera.lookAt(0, 0, 0);

    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      toggleViewMode();
      return;
    }
    webglAvailable = true;
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    hemiLight = new THREE.HemisphereLight(0xffffff, 0x94a3b8, 0.7);
    scene.add(hemiLight);

    sunLight = new THREE.DirectionalLight(0xffedd5, 0.88);
    sunLight.position.set(28, 48, 32);
    scene.add(sunLight);

    // 大海
    const seaGeo = new THREE.CircleGeometry(260, 64);
    const seaMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.88 });
    seaMesh = new THREE.Mesh(seaGeo, seaMat);
    seaMesh.rotation.x = -Math.PI / 2;
    seaMesh.position.y = -0.2;
    scene.add(seaMesh);

    // 建造群島
    buildArchipelago();
    sceneArt = window.SocialIslandArt.build(THREE, scene, islandMeshes, centerMesh, subIslandMeshes);
    add3DLabel("🧊 Icebreaker Island", sceneArt.icebreaker, false, null, () => visitIcebreaker());
    labels[labels.length - 1].el.classList.add('icebreaker-label');
    add3DLabel("🤝 Teamwork Island", sceneArt.teamwork, false, null, () => visitTeamwork());
    labels[labels.length - 1].el.classList.add('teamwork-label');

    // 建造 3D 冒險者角色
    buildPlayerCharacter();

    // 建造空中巡航熱氣球嘉年華
    buildBalloons();

    // 綁定操作事件
    bindControls();

    // 視窗 resize
    window.addEventListener('resize', onWindowResize);

    // 套用初始主題色彩
    applyThemeColors(state.theme);

    // 更新頂部 HUD
    updateHudDisplay();
    resetArchipelagoView();
    yaw = targetYaw;
    pitch = targetPitch;
    dist = targetDist;

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
    state.playerPos = sceneArt.paths.nearest(window.SocialIslandVisitors.active().position);
    state.playerTargetPos = { ...state.playerPos };
    playerGroup.position.set(state.playerPos.x, state.playerPos.y, state.playerPos.z);

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
    add3DLabel("⭐ Star Castle", centerGroup, true, -1);

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
      add3DLabel(`${theme.name}`, mainIsland, false, idx);

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

  // ==========================================
  // 6. 空中巡航熱氣球嘉年華 (Whimsical Hot Air Balloons)
  // ==========================================
  const BALLOON_STYLES = [
    { name: "🌈 Rainbow Macaron Balls", toast: "🎈 The rainbow hot air balloon sways gently in the breeze!" },
    { name: "🐻 Warm and cute bear shaped ball", toast: "🐻 The cute bear hot air balloon blinked!" },
    { name: "💖 Fantasy pink love ball", toast: "💖 The dreamy love hot air balloon gives you a warm hug!" },
    { name: "🐰 Cute long-eared rabbit ball", toast: "🐰 The cute long-eared bunny hot air balloon moves its long ears!" },
    { name: "⭐ Bright lucky gold planet", toast: "⭐ The Shining Gold Star hot air balloon sparkles in the sky!" },
    { name: "🎪 Happy Circus Striped Ball", toast: "🎪 Circus striped hot air balloon flag fluttering in the wind!" },
    { name: "🐱 Naughty meow cat ear balls", toast: "🐱 The naughty Meow Hot Air Balloon shook its little golden bell!" }
  ];

  function createHotAirBalloon(type) {
    const balloonGroup = new THREE.Group();

    // 1. 編織藤籃吊籃 (Wicker Basket)
    const basketY = 0;
    const basket = makeBox(0.8, 0.65, 0.8, 0xb45309, 0, basketY, 0);
    const rim = makeBox(0.88, 0.1, 0.88, 0x78350f, 0, basketY + 0.3, 0);
    balloonGroup.add(basket, rim);

    // 可愛沙包配重 (Sandbags)
    const bagMat = new THREE.MeshLambertMaterial({ color: 0xfef3c7 });
    [
      { x: -0.42, z: -0.25 }, { x: 0.42, z: 0.25 }
    ].forEach(pos => {
      const bag = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 6), bagMat);
      bag.position.set(pos.x, basketY + 0.1, pos.z);
      balloonGroup.add(bag);
    });

    // 2. 懸吊細繩索 (4 Corner Rigging Cables)
    const ropeMat = new THREE.MeshBasicMaterial({ color: 0x64748b });
    const ropeH = 0.95;
    const ropeR = 0.02;
    const ropeGeo = new THREE.CylinderGeometry(ropeR, ropeR, ropeH, 4);
    const ropeOffsets = [
      { x: -0.34, z: -0.34 }, { x: 0.34, z: -0.34 },
      { x: -0.34, z: 0.34 },  { x: 0.34, z: 0.34 }
    ];
    ropeOffsets.forEach(pt => {
      const rope = new THREE.Mesh(ropeGeo, ropeMat);
      rope.position.set(pt.x, basketY + 0.35 + ropeH / 2, pt.z);
      balloonGroup.add(rope);
    });

    // 3. 暖光燃燒器 (Burner)
    const burner = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.12, 8),
      new THREE.MeshLambertMaterial({ color: 0xf59e0b, emissive: 0xd97706 })
    );
    burner.position.y = basketY + 0.35 + ropeH - 0.05;
    balloonGroup.add(burner);

    // 4. 氣球本體群組 (Balloon Envelope)
    const envY = basketY + 0.35 + ropeH + 1.25;
    const envGroup = new THREE.Group();
    envGroup.position.y = envY;

    // 頸部過渡漏斗 (Neck Funnel)
    const neckMat = new THREE.MeshLambertMaterial({ color: 0x475569 });
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.38, 0.65, 16), neckMat);
    neck.position.y = -0.85;
    envGroup.add(neck);

    // 依 type 打造 7 種不同造型氣球
    if (type === 0) {
      // 🌈 0. 彩虹馬卡龍多層條紋球 (Rainbow Macaron Balloon)
      const colors = [0xf43f5e, 0xfb923c, 0xfacc15, 0x10b981, 0x0ea5e9, 0xa855f7];
      const sliceH = 0.44;
      const n = colors.length;
      for (let i = 0; i < n; i++) {
        const t1 = (i + 0.5) / n;
        const t2 = (i + 1.5) / n;
        const r1 = Math.sin(t1 * Math.PI) * 1.55;
        const r2 = (i === n - 1) ? 0.3 : Math.sin(t2 * Math.PI) * 1.55;
        const slice = new THREE.Mesh(
          new THREE.CylinderGeometry(r2, r1, sliceH, 18),
          new THREE.MeshLambertMaterial({ color: colors[i], flatShading: true })
        );
        slice.position.y = -0.5 + i * sliceH;
        envGroup.add(slice);
      }
      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), new THREE.MeshLambertMaterial({ color: 0xfbbf24 }));
      finial.position.y = -0.5 + n * sliceH + 0.15;
      envGroup.add(finial);

    } else if (type === 1) {
      // 🐻 1. 暖萌小熊造型氣球 (Cozy Teddy Bear Balloon)
      const bearColor = 0xd97706; // 焦糖棕
      const earColor = 0xfef08a;  // 鵝黃內耳
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 18, 14),
        new THREE.MeshLambertMaterial({ color: bearColor, flatShading: true })
      );
      envGroup.add(body);

      // 兩隻圓滾滾小熊耳朵
      [-1.15, 1.15].forEach(x => {
        const earOuter = new THREE.Mesh(new THREE.SphereGeometry(0.52, 12, 10), new THREE.MeshLambertMaterial({ color: bearColor }));
        earOuter.position.set(x, 1.25, 0);
        const earInner = new THREE.Mesh(new THREE.SphereGeometry(0.33, 10, 8), new THREE.MeshLambertMaterial({ color: earColor }));
        earInner.position.set(x, 1.25, 0.2);
        envGroup.add(earOuter, earInner);
      });

      // 立體奶油色小熊嘴吻與黑鼻頭
      const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.48, 12, 10), new THREE.MeshLambertMaterial({ color: 0xfef3c7 }));
      muzzle.position.set(0, -0.15, 1.25);
      muzzle.scale.set(1.2, 0.85, 0.8);
      const nose = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshLambertMaterial({ color: 0x1e293b }));
      nose.position.set(0, 0.05, 1.6);
      envGroup.add(muzzle, nose);

    } else if (type === 2) {
      // 💖 2. 夢幻粉紅愛心球 (Sweet Pastel Heart Balloon)
      const heartShape = createHeartShape(0.11);
      const heartExtrude = new THREE.ExtrudeGeometry(heartShape, {
        depth: 1.3,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.35,
        bevelThickness: 0.35
      });
      heartExtrude.center();
      const heartMesh = new THREE.Mesh(
        heartExtrude,
        new THREE.MeshLambertMaterial({ color: 0xf472b6, flatShading: true })
      );
      heartMesh.position.y = 0.2;
      envGroup.add(heartMesh);

      // 白色珍珠腰帶
      const ribbon = new THREE.Mesh(
        new THREE.TorusGeometry(1.3, 0.1, 8, 24),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
      );
      ribbon.rotation.x = Math.PI / 2;
      ribbon.position.y = 0.0;
      envGroup.add(ribbon);

    } else if (type === 3) {
      // 🐰 3. 萌萌長耳白兔球 (Sweet Bunny Balloon)
      const bunnyColor = 0xf8fafc; // 雪白
      const innerColor = 0xfb7185; // 粉嫩內耳
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(1.48, 18, 14),
        new THREE.MeshLambertMaterial({ color: bunnyColor, flatShading: true })
      );
      envGroup.add(body);

      // 兩隻長長豎起兔耳朵 (向外微傾)
      [-0.65, 0.65].forEach((x, i) => {
        const sign = i === 0 ? -1 : 1;
        const earGeo = new THREE.CylinderGeometry(0.18, 0.28, 1.4, 12);
        const earMesh = new THREE.Mesh(earGeo, new THREE.MeshLambertMaterial({ color: bunnyColor }));
        earMesh.position.set(x, 1.8, 0);
        earMesh.rotation.z = sign * 0.18;
        const innerGeo = new THREE.CylinderGeometry(0.09, 0.16, 1.2, 10);
        const innerMesh = new THREE.Mesh(innerGeo, new THREE.MeshLambertMaterial({ color: innerColor }));
        innerMesh.position.set(x, 1.8, 0.12);
        innerMesh.rotation.z = sign * 0.18;
        envGroup.add(earMesh, innerMesh);
      });

      // 吊籃旁懸掛的小胡蘿蔔
      const carrot = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.55, 8),
        new THREE.MeshLambertMaterial({ color: 0xf97316 })
      );
      carrot.position.set(0.42, -1.8, 0.2);
      carrot.rotation.z = -Math.PI / 4;
      envGroup.add(carrot);

    } else if (type === 4) {
      // ⭐ 4. 璀璨幸運金星造型球 (Lucky Golden Star Balloon)
      const starShape = createStarShape(5, 1.85, 1.05);
      const starExtrude = new THREE.ExtrudeGeometry(starShape, {
        depth: 1.1,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.28,
        bevelThickness: 0.28
      });
      starExtrude.center();
      const starMesh = new THREE.Mesh(
        starExtrude,
        new THREE.MeshPhongMaterial({ color: 0xfbbf24, shininess: 80, flatShading: true })
      );
      starMesh.position.y = 0.2;
      envGroup.add(starMesh);

      // 頂部小水晶星光
      const miniStar = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.35, 0),
        new THREE.MeshPhongMaterial({ color: 0xfef08a, emissive: 0xf59e0b, shininess: 100 })
      );
      miniStar.position.y = 1.9;
      envGroup.add(miniStar);

    } else if (type === 5) {
      // 🎪 5. 歡樂馬戲團條紋球 (Carnival Stripes Balloon)
      const segments = 12;
      const radius = 1.5;
      for (let s = 0; s < segments; s++) {
        const col = (s % 2 === 0) ? 0xef4444 : 0xffffff;
        const phiStart = (s / segments) * Math.PI * 2;
        const phiLength = (1 / segments) * Math.PI * 2;
        const slice = new THREE.Mesh(
          new THREE.SphereGeometry(radius, 8, 12, phiStart, phiLength),
          new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide, flatShading: true })
        );
        envGroup.add(slice);
      }
      // 頂部旗桿與小三角旗
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6), new THREE.MeshLambertMaterial({ color: 0xf59e0b }));
      pole.position.y = radius + 0.45;
      const flag = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.45, 3), new THREE.MeshLambertMaterial({ color: 0x3b82f6 }));
      flag.position.set(0.18, radius + 0.65, 0);
      flag.rotation.z = Math.PI / 2;
      envGroup.add(pole, flag);

    } else {
      // 🐱 6. 淘氣喵喵貓耳造型球 (Playful Kitty Balloon)
      const catColor = 0x60a5fa; // 柔和天空藍
      const catInner = 0xf472b6; // 粉紅內耳
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(1.48, 18, 14),
        new THREE.MeshLambertMaterial({ color: catColor, flatShading: true })
      );
      envGroup.add(body);

      // 兩隻立體俏皮三角貓耳
      [-0.85, 0.85].forEach((x, i) => {
        const earOuter = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.68, 4), new THREE.MeshLambertMaterial({ color: catColor }));
        earOuter.position.set(x, 1.35, 0.2);
        earOuter.rotation.y = Math.PI / 4;
        earOuter.rotation.z = (i === 0 ? 1 : -1) * 0.2;

        const earIn = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.48, 4), new THREE.MeshLambertMaterial({ color: catInner }));
        earIn.position.set(x, 1.35, 0.32);
        earIn.rotation.y = Math.PI / 4;
        earIn.rotation.z = (i === 0 ? 1 : -1) * 0.2;

        envGroup.add(earOuter, earIn);
      });

      // 吊籃前的金色小鈴鐺
      const bell = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 8, 8),
        new THREE.MeshLambertMaterial({ color: 0xfbbf24, emissive: 0xb45309 })
      );
      bell.position.set(0, -0.15, 0.48);
      envGroup.add(bell);
    }

    balloonGroup.add(envGroup);
    balloonGroup.userData.toast = BALLOON_STYLES[type].toast;
    balloonGroup.userData.name = BALLOON_STYLES[type].name;
    return balloonGroup;
  }

  function buildBalloons() {
    balloons = [];
    const numBalloons = BALLOON_STYLES.length; // 7 顆不同造型
    // 環繞群島四大海域廣闊空域 (半徑 31 ~ 35，高度 Y: 9 ~ 12.5，開闊錯落不遮擋島嶼)
    const deg2rad = Math.PI / 180;
    const configs = [
      { radius: 32, baseY: 10.5, angle: 10 * deg2rad },    // 🌈 0. 東側海域 (愛心島與對話島之間)
      { radius: 35, baseY: 12.0, angle: 55 * deg2rad },    // 🐻 1. 東南外海
      { radius: 32, baseY: 9.5,  angle: 98 * deg2rad },    // 💖 2. 南側海域 (對話島與四葉草島之間)
      { radius: 34, baseY: 12.5, angle: 152 * deg2rad },   // 🐰 3. 西南外海
      { radius: 32, baseY: 10.0, angle: 195 * deg2rad },   // ⭐ 4. 西側海域 (四葉草島與齒輪島之間)
      { radius: 35, baseY: 11.5, angle: 245 * deg2rad },   // 🎪 5. 西北外海
      { radius: 31, baseY: 9.0,  angle: 290 * deg2rad }    // 🐱 6. 北側海域 (齒輪島與愛心島之間)
    ];

    for (let i = 0; i < numBalloons; i++) {
      const balloon = createHotAirBalloon(i);
      const cfg = configs[i];

      balloon.position.set(
        Math.cos(cfg.angle) * cfg.radius,
        cfg.baseY,
        Math.sin(cfg.angle) * cfg.radius
      );

      // 動畫參數
      balloon.userData.angle = cfg.angle;
      balloon.userData.radius = cfg.radius;
      balloon.userData.baseY = cfg.baseY;
      balloon.userData.speed = 0.0005 + (i % 3) * 0.00015; // 順時針徐徐巡遊
      balloon.userData.phase = i * 1.25; // 錯開起伏週期
      balloon.userData.rotSpeed = 0.005 + (i % 2) * 0.003; // 緩慢自轉

      scene.add(balloon);
      balloons.push(balloon);
    }
  }

  // 3D 浮動標籤圖層
  function add3DLabel(text, obj, isCenter, islandIdx, onActivate) {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `island-3d-label ${isCenter ? 'center' : ''}`;
    el.innerHTML = text;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      if (onActivate) { onActivate(); return; }
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
    labels.push({ el, obj, anchors: null });
  }

  function updateLabels() {
    if (document.body.classList.contains('modal-open')) {
      labels.forEach(item => { item.el.style.display = 'none'; });
      return;
    }

    const w = stage.clientWidth, h = stage.clientHeight;
    const tempV = new THREE.Vector3();

    labels.forEach(item => {
      if (!item.anchors) {
        item.anchors = [];
        item.obj.children.slice(0, 2).forEach(mesh => {
          const vertices = mesh.geometry.attributes.position;
          for (let index = 0; index < vertices.count; index++) item.anchors.push(new THREE.Vector3().fromBufferAttribute(vertices, index).applyMatrix4(mesh.matrixWorld));
        });
      }
      item.obj.getWorldPosition(tempV);
      tempV.project(camera);

      if (tempV.z > 1 || tempV.z < -1 || Math.abs(tempV.x) > 1.1 || Math.abs(tempV.y) > 1.1) {
        item.el.style.display = 'none';
        return;
      }
      item.el.style.display = 'flex';
      const x = (tempV.x * 0.5 + 0.5) * w;
      let bottom = -Infinity;
      item.anchors.forEach(point => {
        tempV.copy(point).project(camera);
        if (tempV.z >= -1 && tempV.z <= 1) bottom = Math.max(bottom, (-tempV.y * 0.5 + 0.5) * h);
      });
      const y = bottom + 6;
      if (!Number.isFinite(y) || y < 0 || y + item.el.offsetHeight > h) { item.el.style.display = 'none'; return; }
      item.el.style.left = `${x}px`;
      item.el.style.top = `${y}px`;
    });
  }

  // 3D 冒險者行走邏輯
  function walkToAndTrigger(tx, tz, onArrive) {
    if (!sceneArt?.paths) { if (typeof onArrive === 'function') onArrive(); return; }
    const target = sceneArt.paths.destination({ x: tx, z: tz });
    playerRoute = sceneArt.paths.route(state.playerPos, target);
    state.playerTargetPos = { ...playerRoute[playerRoute.length - 1] };
    if (Math.hypot(state.playerTargetPos.x - state.playerPos.x, state.playerTargetPos.z - state.playerPos.z) <= 0.01) {
      playerRoute = [];
      state.onArriveCallback = null;
      if (typeof onArrive === 'function') onArrive();
      return;
    }
    state.onArriveCallback = onArrive;
  }

  function stepPlayer(horizontal, depth) {
    if (!sceneArt?.paths) return;
    const target = { x: state.playerPos.x + horizontal, z: state.playerPos.z + depth };
    const route = sceneArt.paths.route(state.playerPos, target);
    const length = route.reduce((total, point, index) => index ? total + Math.hypot(point.x - route[index - 1].x, point.z - route[index - 1].z) : total, 0);
    if (length > Math.hypot(horizontal, depth) * 1.6) return;
    playerRoute = route;
    state.playerTargetPos = { ...route[route.length - 1] };
    state.onArriveCallback = null;
  }

  function updatePlayerWalking(elapsed) {
    if (!playerGroup) return;
    const movement = window.SocialIslandPaths.advance(state.playerPos, playerRoute, elapsed * 8);
    state.playerPos = movement.position;
    state.isWalking = movement.traveled > 0;
    if (movement.angle !== null) state.playerAngle = movement.angle;
    if (state.isWalking) state.walkTime += elapsed * 9;
    const stride = state.isWalking ? Math.sin(state.walkTime) : 0;
    if (playerLegL && playerLegR) {
      playerLegL.rotation.x = stride * 0.45;
      playerLegR.rotation.x = -stride * 0.45;
    }
    playerGroup.position.set(state.playerPos.x, state.playerPos.y + Math.abs(stride) * 0.06, state.playerPos.z);
    playerGroup.rotation.y = state.playerAngle;
    if (state.isWalking && Math.random() < elapsed * 2) sfx.playStep();
    if (movement.arrived && typeof state.onArriveCallback === 'function') {
      const callback = state.onArriveCallback;
      state.onArriveCallback = null;
      callback();
    }
  }

  // 視角控制器與 Raycaster 點擊
  function bindControls() {
    const gestures = window.SocialIslandExplorer.gestures({
      start() {
        const snapshot = camera.clone();
        snapshot.updateMatrixWorld();
        return { yaw: targetYaw, pitch: targetPitch, origin: cameraGoal.clone(), camera: snapshot, rotate: state.cameraFollow };
      },
      zoom: factor => zoomCamera(factor),
      drag(start, delta, event) {
        overviewActive = false;
        if (start.context.rotate) {
          targetYaw = start.context.yaw - delta.x * 0.007;
          targetPitch = Math.min(Math.PI / 2 - 0.025, Math.max(0.04, start.context.pitch + delta.y * 0.005));
          cameraMode = 'custom';
          synchronizeCameraControls();
        } else {
          const rect = canvas.getBoundingClientRect();
          const point = (clientX, clientY) => new THREE.Vector2((clientX - rect.left) / rect.width * 2 - 1, 1 - (clientY - rect.top) / rect.height * 2);
          cameraGoal.copy(window.SocialIslandExplorer.panTarget(THREE, start.context.camera, start.context.origin, point(start.x, start.y), point(event.clientX, event.clientY)));
        }
      }
    });
    canvas.addEventListener('pointerdown', event => {
      if (gestures.down(event)) {
        canvas.focus({ preventScroll: true });
        canvas.setPointerCapture(event.pointerId);
      }
    });
    canvas.addEventListener('pointermove', e => {
      gestures.move(e);
      // 懸停回饋：滑鼠移至熱氣球或可互動島嶼時切換指標光標
      const rect = stage.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / stage.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / stage.clientHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const isHoverBalloon = balloons && raycaster.intersectObjects(balloons, true).length > 0;
      const isHoverCenter = centerMesh && raycaster.intersectObject(centerMesh, true).length > 0;
      const isHoverSub = subIslandMeshes && raycaster.intersectObjects(subIslandMeshes, true).length > 0;
      const isHoverIsland = islandMeshes && raycaster.intersectObjects(islandMeshes, true).length > 0;
      const isHoverResident = sceneArt && raycaster.intersectObjects(sceneArt.residents, true).length > 0;
      const isHoverIcebreaker = sceneArt && raycaster.intersectObject(sceneArt.icebreaker, true).length > 0;
      const isHoverTeamwork = sceneArt && raycaster.intersectObject(sceneArt.teamwork, true).length > 0;
      canvas.style.cursor = (isHoverTeamwork || isHoverIcebreaker || isHoverResident || isHoverBalloon || isHoverCenter || isHoverSub || isHoverIsland) ? 'pointer' : 'grab';
    });

    canvas.addEventListener('pointercancel', event => gestures.up(event, true));
    canvas.addEventListener('lostpointercapture', event => gestures.up(event, true));
    window.addEventListener('blur', () => gestures.clear());

    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const pixels = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? stage.clientHeight : 1);
      zoomCamera(Math.exp(Math.max(-0.5, Math.min(0.5, pixels * (e.ctrlKey ? 0.01 : 0.0015)))));
    }, { passive: false });

    // 點擊 3D 物件導航
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    canvas.addEventListener('pointerup', e => {
      if (!gestures.up(e)) return;
      const rect = stage.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / stage.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / stage.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (sceneArt && raycaster.intersectObject(sceneArt.teamwork, true).length) {
        visitTeamwork();
        return;
      }
      if (sceneArt && raycaster.intersectObject(sceneArt.icebreaker, true).length) {
        visitIcebreaker();
        return;
      }
      const residentHits = sceneArt ? raycaster.intersectObjects(sceneArt.residents, true) : [];
      if (residentHits.length) {
        let resident = residentHits[0].object;
        while (resident.parent && resident.userData.residentIndex === undefined) resident = resident.parent;
        meetResident(resident.userData.residentIndex);
        return;
      }

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

      // 檢查是否點擊空中熱氣球 (互動小彩蛋：升降彈跳＋柔和音效＋文字提示＋語音朗讀)
      if (balloons && balloons.length > 0) {
        const balloonIntersects = raycaster.intersectObjects(balloons, true);
        if (balloonIntersects.length > 0) {
          sfx.playChime();
          let root = balloonIntersects[0].object;
          while (root.parent && !balloons.includes(root)) root = root.parent;
          if (balloons.includes(root)) {
            const curY = root.userData.baseY;
            root.userData.baseY += 1.8;
            setTimeout(() => { root.userData.baseY = curY; }, 420);
            const toastMsg = root.userData.toast || "🎈 Hot air balloon says hello!";
            showToast(toastMsg, 3200);
            speakText(toastMsg); // 特教語音朗讀熱氣球彩蛋
            return;
          }
        }
      }
    });

    // 鍵盤 WASD / 方向鍵行走控制
    window.addEventListener('keydown', e => {
      if (document.body.classList.contains('modal-open') || e.target.closest('.mft-ui, .mft-editor, button, input, textarea, select, summary, a, [contenteditable="true"]')) return;
      const speed = 1.4;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        stepPlayer(0, -speed);
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        stepPlayer(0, speed);
      } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        stepPlayer(-speed, 0);
      } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        stepPlayer(speed, 0);
      }
      if (/^(ArrowUp|ArrowDown|ArrowLeft|ArrowRight|[wasd])$/i.test(e.key)) e.preventDefault();
    });

    // 虛擬 D-pad 控制
    const dpad = document.getElementById('virtualDpad');
    if (dpad) {
      dpad.querySelectorAll('.dpad-btn').forEach(btn => {
        const step = () => {
          const dir = btn.dataset.dir;
          const speed = 2.0;
          if (dir === 'up') stepPlayer(0, -speed);
          if (dir === 'down') stepPlayer(0, speed);
          if (dir === 'left') stepPlayer(-speed, 0);
          if (dir === 'right') stepPlayer(speed, 0);
          if (dir === 'center') walkToAndTrigger(0, 0);
        };
        btn.addEventListener('click', step);
      });
    }
  }

  function onWindowResize() {
    if (!stage || !camera || !renderer) return;
    const w = stage.clientWidth, h = stage.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    if (overviewActive) targetDist = window.SocialIslandExplorer.overviewDistance(camera.aspect);
  }

  // 主題光影切換
  function applyThemeColors(themeKey) {
    state.theme = themeKey;
    document.body.classList.remove('theme-cream', 'theme-sea', 'theme-night');
    document.body.classList.add(`theme-${themeKey}`);

    // 更新頂部按鈕狀態
    document.querySelectorAll('.btn-theme-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeKey);
      btn.setAttribute('aria-pressed', String(btn.dataset.theme === themeKey));
    });

    if (!scene || !seaMesh) return;

    if (themeKey === 'cream') {
      scene.background = new THREE.Color(0xc8e5df);
      scene.fog = new THREE.Fog(0xc8e5df, 210, 400);
      seaMesh.material.color.setHex(0x76b0b1);
      hemiLight.intensity = 0.7;
      sunLight.intensity = 0.88;
      sunLight.color.setHex(0xffedd5);
    } else if (themeKey === 'sea') {
      scene.background = new THREE.Color(0xdcebee);
      scene.fog = new THREE.Fog(0xdcebee, 210, 400);
      seaMesh.material.color.setHex(0x719da8);
      hemiLight.intensity = 0.65;
      sunLight.intensity = 0.8;
      sunLight.color.setHex(0xfef08a);
    } else if (themeKey === 'night') {
      scene.background = new THREE.Color(0x0f172a);
      scene.fog = new THREE.Fog(0x0f172a, 210, 400);
      seaMesh.material.color.setHex(0x1e293b);
      hemiLight.intensity = 0.4;
      sunLight.intensity = 0.5;
      sunLight.color.setHex(0x93c5fd);
    }
  }

  // 渲染動畫迴圈
  function renderLoop(frameTime = 0) {
    requestAnimationFrame(renderLoop);
    const elapsed = Math.max(0, Math.min(0.05, (frameTime - previousFrameTime) / 1000));
    previousFrameTime = frameTime;
    if (!motionPaused) sceneryTime += elapsed;

    // 1. 冒險者行走插值與步伐動畫
    updatePlayerWalking(elapsed);

    // 2. 視角旋轉平滑插值
    yaw += (targetYaw - yaw) * 0.08;
    pitch += (targetPitch - pitch) * 0.08;
    dist += (targetDist - dist) * 0.08;

    // 鏡頭跟隨模式 (Follow Mode)
    if (state.cameraFollow && playerGroup) {
      cameraTarget.x += (playerGroup.position.x - cameraTarget.x) * 0.06;
      cameraTarget.z += (playerGroup.position.z - cameraTarget.z) * 0.06;
    } else {
      cameraTarget.x += (cameraGoal.x - cameraTarget.x) * 0.06;
      cameraTarget.z += (cameraGoal.z - cameraTarget.z) * 0.06;
    }
    cameraTarget.y += (cameraGoal.y - cameraTarget.y) * 0.06;

    camera.position.x = cameraTarget.x + Math.sin(yaw) * Math.cos(pitch) * dist;
    camera.position.y = cameraTarget.y + Math.sin(pitch) * dist;
    camera.position.z = cameraTarget.z + Math.cos(yaw) * Math.cos(pitch) * dist;
    camera.lookAt(cameraTarget);

    // 3. 裝飾地標旋轉
    rotatingDecorations.forEach(m => {
      if (!motionPaused) m.rotation.y += 0.016;
    });

    // 4. 空中巡航熱氣球軌道漫遊與微風浮沉擺動
    const time = sceneryTime * 1.6;
    sceneArt?.animate(sceneryTime, camera.position);
    balloons.forEach(b => {
      if (!motionPaused) b.userData.angle += b.userData.speed;
      b.position.x = Math.cos(b.userData.angle) * b.userData.radius;
      b.position.z = Math.sin(b.userData.angle) * b.userData.radius;

      // 溫柔浮沉微風擺盪
      b.position.y = b.userData.baseY + Math.sin(time * 1.2 + b.userData.phase) * 0.65;
      b.rotation.z = Math.sin(time * 0.9 + b.userData.phase) * 0.04;
      b.rotation.x = Math.cos(time * 0.8 + b.userData.phase) * 0.03;
      if (!motionPaused) b.rotation.y += b.userData.rotSpeed;
    });

    // 5. 海浪與小踏石浮島微幅起伏 (Bobbing Waves & Stepping Stones)
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
    overviewActive = false;
    state.cameraFollow = true;
    cameraMode = 'bird';
    cameraGoal.y = 1.8;
    synchronizeCameraControls();

    const [startW] = ISLAND_THEMES[idx].weeksRange;
    openQuestDrawer(idx, startW);

    const angle = (idx / 4) * Math.PI * 2 - Math.PI / 4;
    targetYaw = -angle + Math.PI / 2;
    targetPitch = 0.65;
    targetDist = 38;

  }

  function resetArchipelagoView() {
    overviewActive = true;
    state.cameraFollow = false;
    cameraMode = 'bird';
    targetYaw = 0.4;
    targetPitch = 0.85;
    targetDist = window.SocialIslandExplorer.overviewDistance(camera?.aspect || 1);
    cameraGoal?.set(-3, 1.8, 3);
    synchronizeCameraControls();
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
    const visitorName = document.getElementById('activeVisitorName');
    if (visitorName) visitorName.textContent = state.heroName;
    if (lvEl) lvEl.textContent = `Lv.${lvInfo.level} ${lvInfo.title}`;
    if (expFill) expFill.style.width = `${lvInfo.progress}%`;
    if (expText) expText.textContent = `${state.exp} / ${lvInfo.nextBase} EXP`;
    if (starsEl) starsEl.textContent = `${state.stars} stars`;

    // 計算島章獲取數
    const stampCount = state.islandStamps.filter(Boolean).length;
    if (stampEl) stampEl.textContent = `Stamps ${stampCount} / 4`;

    updatePassportModal();
  }

  function addExp(pts) {
    const prevLv = getLevelInfo(state.exp).level;
    state.exp += pts;
    const newLvInfo = getLevelInfo(state.exp);
    updateHudDisplay();
    saveLocalProgress();

    showToast(`✨ Gain +${pts} EXP!`);

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

    sub.textContent = `Congratulations on being promoted to Lv.${lvInfo.level} ${lvInfo.title}!`;
    banner.classList.add('active');
    setTimeout(() => {
      banner.classList.remove('active');
    }, 3200);
  }

  let toastTimer = null;
  function showToast(msg, duration = 2800) {
    const toast = document.getElementById('toastMsg');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, duration);
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
    if (drawerTitle) drawerTitle.textContent = `Week ${wNum}: ${weekData.title || "Special education social superpower"}`;

    // 週次切換標籤條 (Carousel)
    if (carouselBox) {
      let chipsHtml = '';
      const [startW, endW] = t.weeksRange;
      for (let i = startW; i <= endW; i++) {
        const isAct = i === wNum;
        const isPass = state.passedWeeks.has(i);
        chipsHtml += `
          <button class="week-chip ${isAct ? 'active' : ''} ${isPass ? 'passed' : ''}" onclick="window.socialGame.selectWeek(${i})">
            Week ${i}
          </button>
        `;
      }
      carouselBox.innerHTML = chipsHtml;
    }

    // NPC 守護夥伴引言
    let npcQuote = `I am ${t.mascot} (${t.mascotRole})! Today we hit the island and get ready for the ${wNum} week test! When encountering difficulties, remember to cast [${weekData.superSkill || "Calm super power"}]!`;
    if (weekData.story && weekData.story.question) {
      npcQuote = weekData.story.question;
    }

    // CBT 認知抉擇題目
    const dt = weekData.decisionTree || {
      impulsive: {
        title: "💥 Impulsive temper tantrums / Refusal to cooperate",
        desc: "Yelling loudly, pushing people, or sulking and turning around and running away",
        consequence: "❌ The classmates were scared away and their brains were on fire! First step on the brake and take three deep breaths!"
      },
      super_skill: {
        title: `🌟 Use superpowers: ${weekData.superSkill || "Take a deep breath calmly and say it carefully"}`,
        desc: `Take a deep breath, apply the brakes, and use your superpowers to express and act politely`,
        consequence: "🎉 Great! Everyone understands your thoughts, solve the problem smoothly, and get Superboy stars!"
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
                🔊 Voice reading
              </button>
            </div>
            <p class="npc-speech">${npcQuote}</p>
          </div>
        </div>

        <!-- 考驗一：CBT 衝動怪獸 vs 社交超能力 -->
        <div class="cbt-choice-section">
          <div class="cbt-choice-title">
            <span>⚔️ Test 1: Defeat the concept monster (${t.monster})</span>
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
          <div class="minigame-title">🎮 Test 2: ${getMinigameTitle(t.minigameType)}</div>
          <div id="minigameDynamicArea">
            ${renderMinigameArea(t.minigameType)}
          </div>
        </div>
      `;
    }
  }

  function getMinigameTitle(type) {
    if (type === 'breathe') return "Turtle Deep Breathing Cooling Device (Adjusting Emotions)";
    if (type === 'imsg') return "My message rocket assembly launch pad (clear expression)";
    if (type === 'highfive') return "Eye contact and high fives (peer friendliness)";
    return "Another Thought Elastic Gear (Frustration Strain)";
  }

  function renderMinigameArea(type) {
    if (type === 'breathe') {
      return `
        <div class="turtle-breathe-box">
          <div class="breathe-circle" id="breatheBall">🐢</div>
          <div class="breathe-prompt" id="breathePrompt">Click to start taking deep breaths with the turtle</div>
          <button class="c-game-btn btn-primary" onclick="window.socialGame.startBreatheGame()">
            💨 Start taking deep breaths
          </button>
        </div>
      `;
    } else if (type === 'imsg') {
      return `
        <div class="imsg-puzzle-box">
          <p style="font-size:0.85rem; color:#64748b; margin-bottom:4px;">Please click in order to assemble the three-section rocket of "My Message":</p>
          <div class="imsg-slot" id="imsgSlot1" onclick="window.socialGame.clickImsg(1)">1️⃣ I feel... (state your feelings: I am sad/anxious)</div>
          <div class="imsg-slot" id="imsgSlot2" onclick="window.socialGame.clickImsg(2)">2️⃣ Because... (specify the reason: the building block was knocked down)</div>
          <div class="imsg-slot" id="imsgSlot3" onclick="window.socialGame.clickImsg(3)">3️⃣ I hope... (make a specific request: please spell it out with me)</div>
          <button class="c-game-btn btn-primary" id="imsgLaunchBtn" style="margin-top:8px;" onclick="window.socialGame.launchImsgRocket()">
            🚀 Fire my message rocket!
          </button>
        </div>
      `;
    } else if (type === 'highfive') {
      return `
        <div class="highfive-game-box">
          <p style="font-size:0.85rem; color:#64748b;">Look the other person in the eye, extend your palm and give them a friendly high five!</p>
          <div class="highfive-hand-btn" id="highfiveHand" onclick="window.socialGame.doHighfive()">
            ✋
          </div>
          <div id="highfivePrompt" style="font-size:0.95rem; font-weight:800; color:#d97706;">
            Click your palm to complete the friendly high five!
          </div>
        </div>
      `;
    } else {
      return `
        <div class="gear-game-box">
          <p style="font-size:0.85rem; color:#64748b;">Turn the elastic thinking gear and look at things from a positive perspective!</p>
          <div class="gear-icon" id="gearIcon">⚙️</div>
          <div id="gearPrompt" style="font-size:0.95rem; font-weight:800; color:#7c3aed;">
            "Turn the gears and think differently!"
          </div>
          <button class="c-game-btn btn-primary" onclick="window.socialGame.spinGear()">
            🔄 Rotating elastic gear
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
      resBox.innerHTML = `⚠️ <b>Concept monster appears!</b><br>${dt.impulsive ? dt.impulsive.consequence : "Your impulsive brain is on fire! Next time, try stepping on the brakes and taking three deep breaths!"}`;
      speakText("If your impulsive brain is on fire, first step on the brakes and take three deep breaths!");
    } else {
      sfx.playChime();
      resBox.className = 'cbt-result-box super-active';
      resBox.innerHTML = `🌟 <b>Successful use of superpower! The concept monster retreats!</b><br>${dt.super_skill ? dt.super_skill.consequence : "Great! Everyone understands your thoughts and solves the problem smoothly!"}`;
      speakText("Great! Successfully display your social superpower!");
      addExp(15);
      markWeekPassed(wNum);
    }
  }

  function startBreatheGame() {
    const ball = document.getElementById('breatheBall');
    const prompt = document.getElementById('breathePrompt');
    if (!ball || !prompt) return;

    sfx.playClick();
    prompt.textContent = "🌬️ Inhale slowly... (1, 2, 3, 4)";
    ball.classList.add('inhale');
    ball.classList.remove('exhale');

    setTimeout(() => {
      prompt.textContent = "🤫 Hold your breath for 4 seconds...feel calm";
      setTimeout(() => {
        prompt.textContent = "💨 Exhale slowly...exhale the anger (1, 2, 3, 4)";
        ball.classList.remove('inhale');
        ball.classList.add('exhale');
        setTimeout(() => {
          prompt.textContent = "🎉 Deep breathing and breath adjustment completed! The heartbeat slows down and the brain calms down!";
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
    showToast("🚀 My message is that the three-stage rocket was ignited and launched successfully!+20 EXP!");
    addExp(20);
    markWeekPassed(state.activeWeekNumber);
  }

  function doHighfive() {
    const hand = document.getElementById('highfiveHand');
    const prompt = document.getElementById('highfivePrompt');
    if (!hand || !prompt) return;
    sfx.playFanfare();
    hand.style.transform = 'scale(1.2) rotate(15deg)';
    prompt.textContent = "🌟 Bang! Great success! Give your peers the best friendly support!";
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
      "💡\"Although it's a pity to lose, I learned new skills this time and will fight again next time!\"",
      "💡\"It doesn't matter if your plans change, you can see new scenery if you change the road!\"",
      "💡\"I'm very angry now. Let's take a drink of water and pause for a while.\""
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
      showToast(`🎉 Week ${wNum} passed successfully! Get 3 social stars and EXP!`);

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
      showToast(`🏆 Congratulations on collecting the [${ISLAND_THEMES[islandIdx].name}] exclusive certification island stamp!`);
      updateHudDisplay();
      saveLocalProgress();
    }
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
    if (pName) pName.textContent = `${state.heroName}`;
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
          status.textContent = "Certified ✓";
        } else {
          seal.classList.remove('unlocked');
          status.textContent = "Not unlocked";
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
      showToast("📋 The connection code has been successfully copied to the clipboard!");
    }).catch(() => {
      input.select();
      document.execCommand('copy');
      showToast("📋 The connection code has been copied!");
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
      showToast("🎉 The connection code is read successfully! Progress has been fully restored!");
      closeSaveCodeModal();
    } catch (e) {
      sfx.playBuzz();
      alert("⚠️ The format of the connection code is wrong, please confirm whether it is copied completely!");
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
    showToast(`🚀 The social superman [${state.heroName}] sets off for an island adventure!`);
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

    if (countEl) countEl.textContent = `${passedCount} / 52 levels`;
    if (starsEl) starsEl.textContent = `${state.stars} ⭐`;
    if (pctEl) pctEl.textContent = `${progressPct}%`;
    if (nameInput) nameInput.value = `${state.heroName}`;

    const certDate = document.getElementById('certIssueDate');
    if (certDate) {
      const today = new Date();
      certDate.textContent = `${today.getFullYear()} year ${today.getMonth() + 1} month ${today.getDate()} day`;
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
    showToast("🏆 Cheers to Social Superboy! OO Elementary School Learning Classroom is proud of you!");
  }

  // ==========================================
  // 11. 2D 平面全地圖與無障礙導覽模式
  // ==========================================
  function toggleViewMode() {
    const map2D = document.getElementById('map2DView');
    const btn = document.getElementById('btnToggleView');
    if (state.viewMode === '2d' && !webglAvailable) return;
    if (state.viewMode === '3d') {
      state.viewMode = '2d';
      if (map2D) map2D.classList.add('active');
      if (btn) btn.textContent = "🌐 Back to 3D Exploration";
      render2DMapView();
    } else {
      state.viewMode = '3d';
      if (map2D) map2D.classList.remove('active');
      if (btn) btn.textContent = "🗺️ Switch 2D map";
    }
    document.body.dataset.mapView = state.viewMode;
    document.querySelectorAll('[data-map-toggle]').forEach(control => {
      control.textContent = state.viewMode === '2d' ? "Back to 3D" : "Flat map";
      control.disabled = !webglAvailable && state.viewMode === '2d';
    });
    if (!webglAvailable && btn) btn.disabled = true;
  }

  function render2DMapView() {
    const container = document.getElementById('map2DView');
    if (!container) return;

    let html = `
      <div style="text-align:center; margin-bottom:24px;">
        <h2 style="font-size:1.6rem; font-weight:900; color:#1e293b; margin-bottom:6px;">🗺️ 52-week social superman adventure full map</h2>
        <p style="color:#64748b; font-size:0.9rem;">Provide barrier-free intuitive guidance for school children with visual vestibular sensitivity or who need plane inspection. Click on any week to start the challenge immediately</p>
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
          <button type="button" class="week-2d-item ${isPass ? 'passed' : ''}" onclick="window.socialGame.openQuestDrawer(${idx}, ${w})">
            <span>Week ${w}: ${weekData.title || ''}</span>
            <span>${isPass ? '⭐' : '⚪'}</span>
          </button>
        `;
      }

      html += `
        <div class="island-2d-card">
          <div class="card-2d-header">
            <div class="card-2d-icon">${t.name.split(' ')[0]}</div>
            <div class="card-2d-title">
              <h3>${t.name}</h3>
              <span>${t.subtitle} · Guardian partner: ${t.mascot}</span>
            </div>
          </div>
          <div class="weeks-2d-list">
            ${weeksListHtml}
          </div>
        </div>
      `;
    });

    html += `
      <section class="island-2d-card icebreaker-map-card">
        <h3>🧊 Icebreaker Island</h3>
        <p>Warm up and say hello to a new friend.</p>
        <button type="button" onclick="window.socialGame.openIcebreaker()">Choose a warm-up quest →</button>
      </section>
      <section class="island-2d-card teamwork-map-card">
        <h3>🤝 Teamwork Island</h3>
        <p>Share the jobs and finish our mission together.</p>
        <button type="button" onclick="window.socialGame.openTeamwork()">Choose a teamwork quest →</button>
      </section>
    </div>`;
    container.innerHTML = html;
  }

  function visitIcebreaker() {
    if (!sceneArt || state.viewMode === '2d') { openIcebreaker(); return; }
    const destination = sceneArt.icebreaker.position;
    walkToAndTrigger(destination.x, destination.z, () => {
      overviewActive = false;
      state.cameraFollow = true;
      cameraMode = 'bird';
      targetYaw = 0.3;
      targetPitch = 0.75;
      targetDist = 32;
      cameraGoal.y = 1.8;
      synchronizeCameraControls();
      openIcebreaker();
    });
  }

  function openIcebreaker() {
    openIslandHub('icebreaker', [1, 2, 12, 51]);
  }

  function visitTeamwork() {
    if (!sceneArt || state.viewMode === '2d') { openTeamwork(); return; }
    const destination = sceneArt.teamwork.position;
    walkToAndTrigger(destination.x, destination.z, () => {
      overviewActive = false;
      state.cameraFollow = true;
      cameraMode = 'bird';
      targetYaw = 0.3;
      targetPitch = 0.75;
      targetDist = 32;
      cameraGoal.y = 1.8;
      synchronizeCameraControls();
      openTeamwork();
    });
  }

  function openTeamwork() {
    openIslandHub('teamwork', [14, 24, 40, 41]);
  }

  function openIslandHub(kind, weeks) {
    const list = document.getElementById(`${kind}Tasks`);
    list.replaceChildren();
    weeks.forEach(week => {
      const lesson = allWeeks.find(item => item.lessonNumber === week) || allWeeks[week - 1];
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset[`${kind}Week`] = String(week);
      const number = document.createElement('span');
      number.textContent = `Week ${week}`;
      const title = document.createElement('strong');
      title.textContent = lesson.title;
      button.append(number, title);
      button.addEventListener('click', () => {
        document.getElementById(`${kind}Dialog`).close();
        const index = ISLAND_THEMES.findIndex(theme => week >= theme.weeksRange[0] && week <= theme.weeksRange[1]);
        openQuestDrawer(index, week);
      });
      list.appendChild(button);
    });
    document.body.classList.add('modal-open');
    const dialog = document.getElementById(`${kind}Dialog`);
    if (!dialog.open) dialog.showModal();
  }

  // 鏡頭跟隨開關
  function toggleFollowCamera() {
    state.cameraFollow = !state.cameraFollow;
    overviewActive = false;
    if (state.cameraFollow) setCameraPreset(cameraMode === 'top' ? 'top' : 'bird');
    else if (cameraTarget) cameraGoal.copy(cameraTarget);
    const btn = document.getElementById('btnToggleFollow');
    if (btn) {
      btn.textContent = state.cameraFollow ? "🎥 Camera following: on" : "🎥 Camera Follow: Off";
      btn.setAttribute('aria-pressed', String(state.cameraFollow));
    }
    showToast(state.cameraFollow ? "🎥 The camera automatically follows the 3D adventurer" : "🎥 Lens free panorama mode");
    synchronizeCameraControls();
  }

  function synchronizeCameraControls() {
    document.querySelectorAll('[data-camera-preset]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.cameraPreset === cameraMode)));
    document.querySelectorAll('[data-camera-follow]').forEach(button => {
      button.setAttribute('aria-pressed', String(state.cameraFollow));
      button.textContent = state.cameraFollow ? "Follow visitor: on" : "Follow visitor: off";
    });
    const follow = document.getElementById('btnToggleFollow');
    if (follow) {
      follow.setAttribute('aria-pressed', String(state.cameraFollow));
      follow.textContent = state.cameraFollow ? "🎥 Camera following: on" : "🎥 Camera Follow: Off";
    }
    const hint = document.getElementById('cameraGestureHint');
    if (hint) hint.textContent = state.cameraFollow ? "Drag to rotate · pinch to zoom" : "Drag to pan · pinch to zoom";
    document.querySelectorAll('[data-motion-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(motionPaused));
      button.textContent = motionPaused ? "Resume scenery" : "Pause scenery";
    });
  }

  function setCameraPreset(mode) {
    if (!camera || !['bird', 'top', 'eye'].includes(mode)) return;
    if (mode === 'eye') { state.cameraFollow = true; overviewActive = false; }
    const preset = window.SocialIslandExplorer.preset(mode, state.cameraFollow, camera.aspect);
    cameraMode = mode;
    targetYaw = preset.yaw;
    targetPitch = preset.pitch;
    targetDist = preset.distance;
    cameraGoal.y = preset.height;
    synchronizeCameraControls();
  }

  function zoomCamera(factor) {
    overviewActive = false;
    targetDist = window.SocialIslandExplorer.zoom(targetDist, factor);
  }

  function toggleMotion() {
    motionPaused = !motionPaused;
    synchronizeCameraControls();
  }

  function meetResident(index) {
    const theme = ISLAND_THEMES[index];
    if (!theme) return;
    const dialog = document.getElementById('residentDialog');
    document.getElementById('residentName').textContent = theme.mascot;
    document.getElementById('residentPortrait').setAttribute('href', `assets/companions.svg#${['lion', 'bear', 'panda', 'fox'][index]}`);
    document.getElementById('residentIsland').textContent = theme.name;
    document.getElementById('residentGreeting').textContent = theme.subtitle;
    document.getElementById('residentQuest').onclick = () => {
      dialog.close();
      openQuestDrawer(index, theme.weeksRange[0]);
    };
    document.body.classList.add('modal-open');
    dialog.showModal();
  }

  function openVisitors() {
    const visitors = window.SocialIslandVisitors;
    const select = document.getElementById('visitorSelect');
    select.replaceChildren();
    visitors.list().forEach(visitor => {
      const option = document.createElement('option');
      option.value = visitor.id;
      option.textContent = visitor.name;
      option.selected = visitor.id === visitors.active().id;
      select.appendChild(option);
    });
    document.getElementById('visitorName').value = '';
    document.getElementById('visitorMessage').textContent = visitors.persistent() ? '' : "Visitor storage is unavailable. Allow browser storage and try again.";
    document.querySelectorAll('[data-visitor-action]').forEach(button => { button.disabled = !visitors.persistent(); });
    document.body.classList.add('modal-open');
    document.getElementById('visitorDialog').showModal();
  }

  function changeVisitor(create) {
    const visitors = window.SocialIslandVisitors;
    saveLocalProgress();
    if (!visitors.persistent()) return;
    const result = create ? visitors.add(document.getElementById('visitorName').value) : visitors.switchTo(document.getElementById('visitorSelect').value);
    if (!result) {
      document.getElementById('visitorMessage').textContent = "Choose a unique nickname. You can create up to 60 visitors.";
      return;
    }
    if (!visitors.persistent()) {
      document.getElementById('visitorMessage').textContent = "Visitor storage is unavailable. Allow browser storage and try again.";
      return;
    }
    window.removeEventListener('pagehide', saveLocalProgress);
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.location.reload();
  }

  // 音效開關
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('btnToggleSound');
    if (btn) {
      btn.textContent = state.soundEnabled ? "🔊 Sound Effect: On" : "🔇 Sound Effect: Off";
      btn.setAttribute('aria-pressed', String(state.soundEnabled));
    }
    showToast(state.soundEnabled ? "🔊 Soft sound effect is on" : "🔇 Sound effects muted");
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
    resetArchipelagoView,
    setCameraPreset,
    zoomCamera,
    toggleMotion,
    meetResident,
    openVisitors,
    changeVisitor,
    visitIcebreaker,
    openIcebreaker,
    visitTeamwork,
    openTeamwork
  };

  // DOM 載入後啟動
  window.addEventListener('DOMContentLoaded', () => {
    initThree();
    document.getElementById('activeVisitorName').textContent = state.heroName;
    document.querySelectorAll('.explorer-dialog').forEach(dialog => {
      dialog.addEventListener('close', () => {
        document.body.classList.toggle('modal-open', Boolean(document.querySelector('.quest-drawer-overlay.active, .modal-overlay.active, dialog[open]')));
      });
    });
    window.addEventListener('pagehide', saveLocalProgress);
    if (window.location.hash === '#teamwork') {
      openTeamwork();
    } else if (window.location.hash === '#icebreaker') {
      openIcebreaker();
    } else if (window.location.hash === '#passport') {
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
