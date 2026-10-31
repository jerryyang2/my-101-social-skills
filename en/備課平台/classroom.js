// 音效合成器 (使用 Web Audio API，無需外掛音效檔，100% 離線可用)
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }
  playPop() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playChime() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.09 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.09);
      osc.stop(this.ctx.currentTime + i * 0.09 + 0.4);
    });
  }
  playFanfare() {
    this.init();
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.5);
    });
  }
  playDeduct() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
}
const sfx = new SoundFX();

// 課堂四位學生專屬設定（宇、和、嘉、畯）
const targetStudents = [
  { id: "yu", name: "Yu", emoji: "🦁", classKey: "s-yu", cardKey: "card-yu", color: "#3b82f6" },
  { id: "he", name: "He", emoji: "🐼", classKey: "s-he", cardKey: "card-he", color: "#10b981" },
  { id: "jia", name: "Jia", emoji: "🦊", classKey: "s-jia", cardKey: "card-jia", color: "#f59e0b" },
  { id: "jun", name: "Jun", emoji: "🐻", classKey: "s-jun", cardKey: "card-jun", color: "#8b5cf6" }
];

function classroomCompanion(studentName) {
  const companions = { "Yu": "lion", "Jun": "bear", "He": "panda", "Jia": "fox" };
  const companion = companions[studentName];
  if (!companion) return "";
  return `<svg class="classroom-companion" viewBox="0 0 120 150" aria-hidden="true"><use href="assets/companions.svg?v=20261031-color#${companion}"></use></svg>`;
}

let studentStars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');

// 課堂互動核心狀態
let allBriefings = [];
let currentBriefing = null;
let currentSlideIndex = 0;

// 呼吸動畫定時器
let breatheInterval = null;

// 初始化載入
function initClassroom() {
  loadBriefings();
  setupUrlParam();
  setupHeader();
  if (typeof updateZhuyinButton === "function") updateZhuyinButton();
  updateStarBarState();
  renderSlide();
  setupKeyboard();
  // 啟動雲端跨裝置即時同步
  fetchCloudStars(true);
}

// 載入晨報資料（同步包含 localStorage 新增的項目）
function loadBriefings() {
  const custom = JSON.parse(localStorage.getItem("custom_briefings") || "[]");
  // 引用在 app.js 中宣告的 defaultBriefings，若獨立開啟則載入內建清單
  if (typeof defaultBriefings !== "undefined") {
    allBriefings = [...custom, ...defaultBriefings];
  } else {
    // 備援資料（若未引入 app.js）
    allBriefings = custom;
  }
}

// 根據 URL 參數定位所選日期與指定步驟
function setupUrlParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get("id") || urlParams.get("date");
  currentBriefing = allBriefings.find(b => b.id === targetId || b.date === targetId) || allBriefings[0];
  const slideParam = parseInt(urlParams.get("slide"));
  if (!isNaN(slideParam) && slideParam >= 0 && slideParam < slideStages.length) {
    currentSlideIndex = slideParam;
  }
  if (urlParams.get("fs") === "1") {
    setTimeout(() => {
      showClassroomToast("🖥️ Independent full-page projection mode has been entered! Click the upper right icon or press F to switch to full screen.");
    }, 600);
  }
  if (urlParams.get("stars") === "1" || urlParams.get("stars") === "open") {
    isStarBarCollapsed = false;
  }
}

// 學生星星列收合狀態（記住老師的偏好設定，預設收合）
let isStarBarCollapsed = localStorage.getItem("classroom_stars_collapsed") !== "false";

// 切換收合 / 展開（上下垂直展開，不影響左側工具列按鈕；純手動切換，等老師加扣完再按收合，絕不自動收合）
function toggleStarBar(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  sfx.playPop();
  isStarBarCollapsed = !isStarBarCollapsed;
  localStorage.setItem("classroom_stars_collapsed", isStarBarCollapsed ? "true" : "false");
  updateStarBarState();
}

// 更新星星列收合與總和狀態
function updateStarBarState() {
  const widget = document.getElementById("starWidget");
  const icon = document.getElementById("starToggleIcon");
  const totalBadge = document.getElementById("classStarTotalBadge");

  // 計算四位學生（宇、和、嘉、畯）的星星總和
  const total = Object.values(studentStars).reduce((sum, val) => sum + (val || 0), 0);
  if (totalBadge) totalBadge.innerText = `${total} stars`;

  if (!widget) return;
  document.getElementById("starToggleBtn").setAttribute("aria-expanded", String(!isStarBarCollapsed));
  if (isStarBarCollapsed) {
    widget.classList.add("collapsed");
    if (icon) icon.innerText = "▼ Expand";
  } else {
    widget.classList.remove("collapsed");
    if (icon) icon.innerText = "▲Collapse";
  }
}

// 僅更新星星數值與文字（就地更新 DOM，不重新繪製整組面板，維持展開狀態不收合）
function updateTopStudentBarValues() {
  targetStudents.forEach(s => {
    const el = document.getElementById(`pillStars_${s.id}`);
    if (el) el.innerText = `⭐ ${studentStars[s.id] || 0}`;
    const scoreSlideEl = document.getElementById(`score_${s.id}`);
    if (scoreSlideEl) scoreSlideEl.innerText = studentStars[s.id] || 0;
  });
  updateStarBarState();
}

// 儲存並更新學生星星顯示（同步更新本地與雲端資料庫，保持面板展開不收合）
function saveStudentStars() {
  localStorage.setItem("student_stars", JSON.stringify(studentStars));
  updateTopStudentBarValues();
  syncPushCloudStars();
}

// 雲端跨裝置即時同步設定 (Netlify Blobs Cloud Storage)
const CLOUD_STARS_API = "https://sage-faloodeh-6874cf.netlify.app/api/stars";
let pushDebounceTimer = null;

// 背景抓取雲端最新星星分數
async function fetchCloudStars(silent = true) {
  try {
    const res = await fetch(`${CLOUD_STARS_API}?_t=${Date.now()}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" }
    });
    if (!res.ok) return;
    const remote = await res.json();
    if (!remote || typeof remote !== "object") return;

    let hasDiff = false;
    targetStudents.forEach(s => {
      const remoteVal = Math.max(0, parseInt(remote[s.id], 10) || 0);
      if (studentStars[s.id] !== remoteVal) {
        studentStars[s.id] = remoteVal;
        hasDiff = true;
      }
    });

    if (hasDiff) {
      localStorage.setItem("student_stars", JSON.stringify(studentStars));
      updateTopStudentBarValues();
      if (!silent) {
        showClassroomToast("☁️ The latest student star scores have been synchronized instantly!");
      }
    }
    updateCloudStatusBadge("☁️ Cloud is connected");
  } catch (err) {
    console.warn("Cloud stars sync error:", err);
    updateCloudStatusBadge("⚠️ Offline temporary storage");
  }
}

// 推送最新星星分數至雲端資料庫
function syncPushCloudStars() {
  clearTimeout(pushDebounceTimer);
  updateCloudStatusBadge("☁️ Synchronizing...");
  pushDebounceTimer = setTimeout(async () => {
    try {
      const payload = {
        yu: studentStars.yu || 0,
        he: studentStars.he || 0,
        jia: studentStars.jia || 0,
        jun: studentStars.jun || 0
      };
      const res = await fetch(CLOUD_STARS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        updateCloudStatusBadge("☁️ Cloud is connected");
      }
    } catch (e) {
      console.warn("Cloud push error, cached locally:", e);
      updateCloudStatusBadge("⚠️ Offline temporary storage");
    }
  }, 250);
}

// 更新雲端狀態標籤顯示
function updateCloudStatusBadge(text) {
  const badge = document.getElementById("cloudSyncBadge");
  if (!badge) return;
  badge.innerText = text;
  if (text.includes("Offline")) {
    badge.style.background = "#fff1f2";
    badge.style.color = "#9f1239";
    badge.style.borderColor = "#fecdd3";
  } else if (text.includes("Synchronizing")) {
    badge.style.background = "#eff6ff";
    badge.style.color = "#1e40af";
    badge.style.borderColor = "#bfdbfe";
  } else {
    badge.style.background = "#ecfdf5";
    badge.style.color = "#065f46";
    badge.style.borderColor = "#a7f3d0";
  }
}

// 每 4 秒自動背景輪詢雲端最新星星（跨裝置無縫同步）
setInterval(() => fetchCloudStars(true), 4000);

// 當視窗重新獲得焦點或由背景切回時立即同步
window.addEventListener("focus", () => fetchCloudStars(true));
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) fetchCloudStars(true);
});

function renderTopStudentBar() {
  const container = document.getElementById("topStudentsBar");
  if (!container) return;

  const studentRows = targetStudents.map(s => `
    <div class="student-pill" style="border-left: 5px solid ${s.color};">
      <div class="student-pill-left">
        <span class="pill-avatar">${classroomCompanion(s.name)}</span>
        <span class="pill-name-tag">${s.name}</span>
      </div>
      <div class="student-pill-right">
        <button class="pill-btn pill-btn-minus" onclick="minusStudentStar('${s.id}')" title="Deduct 1 star for [${s.name}]">−</button>
        <span class="pill-stars" id="pillStars_${s.id}">⭐ ${studentStars[s.id] || 0}</span>
        <button class="pill-btn pill-btn-plus" onclick="addStudentStar('${s.id}')" title="Add 1 star to [${s.name}]">+</button>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="students-bar-header">
      <div style="display:flex; align-items:center; gap:6px;">
        <span>🏫 OO Elementary School · Learning Support Classroom</span>
        <span class="cloud-sync-badge" id="cloudSyncBadge" title="Automatic instant cloud synchronization of all devices">☁️ Cloud connection</span>
      </div>
      <button class="star-panel-close-btn" onclick="toggleStarBar(event)" title="Collect collection point panel">✕ Completion of collapse</button>
    </div>
    <div class="students-bar-list">
      ${studentRows}
    </div>
    <div class="students-bar-footer">
      <button class="star-panel-btn-all" onclick="addStar()" title="All members (Yu, He, Jia, and Zhen) will be awarded 1 star each">🎉 +1 for all ⭐</button>
      <button class="star-panel-btn-reset" onclick="resetStudentStars()" title="Return all four classmates’ stars to zero">🔄 Return to zero</button>
    </div>
  `;
  updateStarBarState();
}

// 更新外部連結（獨立全頁視窗與今日學習單）
function updateActionLinks() {
  if (!currentBriefing) return;
  document.querySelectorAll("#classPrepLink, #classroomBrandLink, [data-return-to-prep]").forEach(link => {
    link.href = `index.html?id=${encodeURIComponent(currentBriefing.id)}`;
  });
  const openExternalBtn = document.getElementById("openExternalBtn");
  if (openExternalBtn) {
    openExternalBtn.href = `classroom.html?id=${encodeURIComponent(currentBriefing.id)}&slide=${currentSlideIndex}`;
  }
  const sheetBtn = document.getElementById("classWorksheetBtn");
  if (sheetBtn) {
    sheetBtn.href = `worksheet.html?id=${encodeURIComponent(currentBriefing.id)}`;
  }
}

// 乾淨格式化課堂標題（保留節日名稱，去除重複內容）
function formatCleanLessonTitle(b) {
  if (!b) return "";
  const fest = b.festival ? `【${b.festival}】` : "";
  let cleanTitle = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, "");
  if (b.festival && cleanTitle.startsWith(b.festival)) {
    cleanTitle = cleanTitle.substring(b.festival.length).replace(/^[與和的大作戰——\-：:\s]+/, "");
  }
  return `${fest}${cleanTitle}`;
}

// 設定頂部列與日期下拉選單
function setupHeader() {
  renderTopStudentBar();
  const select = document.getElementById("dateDropdown");
  const newWeeks = allBriefings.filter(b => !b.legacy);
  const legacyWeeks = allBriefings.filter(b => b.legacy);

  let html = "";
  if (newWeeks.length > 0) {
    html += `<optgroup label="🌟 52 週社交技巧與溝通訓練新課綱（每週一課）">`;
    html += newWeeks.map(b => `
      <option value="${b.id}" ${b.id === currentBriefing.id ? "selected" : ""}>
        Week ${b.lessonNumber} · ${formatCleanLessonTitle(b)} (${b.date})
      </option>
    `).join("");
    html += `</optgroup>`;
  }
  if (legacyWeeks.length > 0) {
    html += `<optgroup label="💡 特教備課靈感庫專題（第 53-101 課 · 共 49 堂）">`;
    html += legacyWeeks.map(b => `
      <option value="${b.id}" ${b.id === currentBriefing.id ? "selected" : ""}>
        Lesson ${b.lessonNumber} [Inspiration Library] · ${b.title}
      </option>
    `).join("");
    html += `</optgroup>`;
  }
  select.innerHTML = html;

  updateActionLinks();

  select.onchange = (e) => {
    stopSpeech();
    currentBriefing = allBriefings.find(b => b.id === e.target.value);
    currentSlideIndex = 0;
    updateActionLinks();
    renderSlide();
  };
}

// 投影片步驟清單定義 (兒童遊戲島 5 步走 · 包含四角色情境小劇場)
const slideStages = [
  { step: 1, name: "Story Island", time: "00–08 min", icon: "📖" },
  { step: 2, name: "Super Skills", time: "08–16 min", icon: "💡" },
  { step: 3, name: "Role-Play Theater", time: "16–26 min", icon: "🎭" },
  { step: 4, name: "Practice Playground", time: "26–36 min", icon: "🎮" },
  { step: 5, name: "Celebration Stage", time: "36–40 min", icon: "🏆" }
];

// 渲染投影片
function renderSlide() {
  if (!currentBriefing) return;

  // 更新頂部資訊
  if (currentBriefing.legacy) {
    document.getElementById("lessonDayBadge").innerText = `💡 Inspiration Topic · Lesson ${currentBriefing.lessonNumber}`;
  } else {
    document.getElementById("lessonDayBadge").innerText = `Week ${currentBriefing.lessonNumber} · ${currentBriefing.date} (${currentBriefing.dayOfWeek})`;
  }
  document.getElementById("lessonTitleText").innerText = `${currentBriefing.unit} · ${formatCleanLessonTitle(currentBriefing)}`;
  document.getElementById("lessonTitleText").title = document.getElementById("lessonTitleText").innerText;

  // 渲染步驟指示圓點
  const dotsContainer = document.getElementById("slideDots");
  dotsContainer.innerHTML = slideStages.map((s, idx) => `
    <button type="button" class="step-dot ${idx === currentSlideIndex ? "active" : ""}" onclick="goToSlide(${idx})" ${idx === currentSlideIndex ? 'aria-current="step"' : ''} aria-label="Step ${s.step}: ${s.name}, ${s.time}">
      <span class="step-number" aria-hidden="true">${s.step}</span><span class="step-label">${s.name}<small>${s.time}</small></span>
    </button>
  `).join("");

  // 渲染時間標籤
  document.getElementById("slideTimeTag").innerText = slideStages[currentSlideIndex].time;

  // 渲染投影片主體內容
  const contentArea = document.getElementById("slideMainContent");
  contentArea.innerHTML = "";
  contentArea.scrollTop = 0; // 重設滾動條至最頂端，避免換頁時頂部標題被截斷

  if (currentSlideIndex === 0) {
    // Slide 1: 故事與動機
    renderSlideMotivation(contentArea);
  } else if (currentSlideIndex === 1) {
    // Slide 2: 技巧拆解與視覺圖卡
    renderSlideSkill(contentArea);
  } else if (currentSlideIndex === 2) {
    // Slide 3: 角色大劇場（專為 4 位特教學童量身打造之實戰情境劇本，明確動作與台詞）
    renderSlideRolePlay(contentArea);
  } else if (currentSlideIndex === 3) {
    // Slide 4: 課堂互動遊戲 (Mini-Game)
    renderSlideGame(contentArea);
  } else if (currentSlideIndex === 4) {
    // Slide 5: 榮譽榜與集點
    renderSlideReward(contentArea);
    if (typeof AudioEffects !== 'undefined') AudioEffects.playCelebration();
    if (typeof triggerConfetti === 'function') triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 75);
  }

  // 更新前後按鈕狀態
  document.getElementById("prevBtn").style.opacity = currentSlideIndex === 0 ? "0.3" : "1";
  document.getElementById("nextBtn").style.opacity = currentSlideIndex === slideStages.length - 1 ? "0.3" : "1";

  // 同步更新獨立全頁與學習單連結
  updateActionLinks();
}

// 語音朗讀系統 (支援微軟廣播級神經網路臺灣配音：陽光活力男聲「雲哲」/ 溫柔課本女聲「曉臻」+ Web Speech API 雙重引擎)
window._activeUtterances = [];
let currentSpeechMode = null; // 'story' | 'question' | null
let currentLiveAudio = null;
let currentSpeechSessionId = 0;
let activeSpeechTimer = null;
const audioBlobCache = new Map();

function stopSpeech() {
  currentSpeechSessionId++;
  if (activeSpeechTimer) {
    clearTimeout(activeSpeechTimer);
    activeSpeechTimer = null;
  }
  if (currentLiveAudio) {
    try {
      currentLiveAudio.pause();
      currentLiveAudio.currentTime = 0;
    } catch (e) {}
    currentLiveAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  window._activeUtterances = [];
  if (typeof isPlayingAllRoles !== "undefined" && isPlayingAllRoles) {
    isPlayingAllRoles = false;
    const btn = document.getElementById("playAllRolesBtn");
    if (btn) btn.innerHTML = "🔊 Demonstrate 4 character lines in sequence";
    document.querySelectorAll(".rp-card").forEach(c => c.classList.remove("rp-card-speaking"));
  }
  currentSpeechMode = null;
  updateTtsButtons();
}

// 預先載入發音人清單
if (typeof window !== "undefined" && window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

// 智慧真人配音與語音播放系統（保證全瀏覽器包含 Chrome / Safari / Edge 皆能使用真正的陽光活力男孩與溫柔女聲）
async function playUniversalSpeech(text, mode, onComplete) {
  stopSpeech();

  let cleanText = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[『』「」"]/g, "")
    .replace(/——+/g, "，")
    .replace(/\.{3,}/g, "。")
    .replace(/…+/g, "。")
    .trim();

  if (!cleanText) return;

  currentSpeechMode = mode;
  updateTtsButtons();

  const preferredGender = localStorage.getItem("preferred_tts_gender") || "female";
  const audioKey = currentBriefing ? currentBriefing.id : "";

  // 1. 第一優先：播放預先錄製之頂級神經網路真人廣播配音（雲哲男孩 / 曉臻女聲）
  //    零延遲、不佔伺服器運算、保證在所有裝置（包含任何版本的 Chrome）皆能 100% 播放純正男聲與女聲
  if (false && audioKey && (mode === "story" || mode === "question")) {
    const staticAudioUrl = `audio/${mode}_${preferredGender}_${audioKey}.mp3`;
    let fallbackHandled = false;
    const fallbackToWebSpeech = () => {
      if (fallbackHandled) return;
      fallbackHandled = true;
      currentLiveAudio = null;
      speakSentenceQueue(cleanText, mode, onComplete);
    };

    try {
      const audio = new Audio();
      try { audio.playbackRate = ttsSpeedRate; } catch (e) {}
      currentLiveAudio = audio;

      audio.onended = () => {
        currentSpeechMode = null;
        currentLiveAudio = null;
        updateTtsButtons();
        if (onComplete) onComplete();
      };

      audio.onerror = () => {
        fallbackToWebSpeech();
      };

      audio.src = staticAudioUrl;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          updateTtsButtons();
        }).catch(() => {
          fallbackToWebSpeech();
        });
      }
      return;
    } catch (e) {
      console.warn("Static audio play error, falling back to Web Speech:", e);
      fallbackToWebSpeech();
      return;
    }
  }

  // 2. 自訂題目或離線備援：瀏覽器語音
  speakSentenceQueue(cleanText, mode, onComplete);
}

// 智慧挑選最逼真、最像國語課本配音員的神經網路語音
function getBestTextbookVoice(preferredGender = "female") {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "Yunzhe", "Yunxi", "Yun Yang", "Kangkang", "Zhiwei", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
  const FEMALE_KEYWORDS = ["hsiaochen", "hsiaohan", "Xiaozhen", "Xiaohan", "meijia", "Meijia", "tingting", "Tingting", "sinji", "Shanyi", "sandy", "shelley", "flo", "grandma", "yaoyao", "yating", "Yating", "hanhan", "Hanhan", "female", "woman", "girl"];

  let bestVoice = null;
  let highestScore = -999999;

  for (const v of voices) {
    let score = 0;
    const nameLower = (v.name || "").toLowerCase();
    const langLower = (v.lang || "").toLowerCase().replace("_", "-");

    // 必須是中文語系
    if (!langLower.startsWith("zh")) continue;

    const isMatchMale = MALE_KEYWORDS.some(k => nameLower.includes(k));
    const isMatchFemale = FEMALE_KEYWORDS.some(k => nameLower.includes(k));

    // 1. 性別硬核權重：切換到男聲時，男聲 +1000 分，女聲 -1000 分；切換到女聲時相反
    if (preferredGender === "male") {
      if (isMatchMale) score += 1000;
      if (isMatchFemale) score -= 1000;
    } else {
      if (isMatchFemale) score += 1000;
      if (isMatchMale) score -= 1000;
    }

    // 2. 繁體中文（台灣）優先
    if (langLower === "zh-tw" || langLower === "cmn-hant-tw") {
      score += 200;
    } else if (nameLower.includes("taiwan") || langLower.includes("tw")) {
      score += 150;
    } else if (langLower === "zh-hk") {
      score += 20;
    } else if (langLower === "zh-cn") {
      score += 10;
    }

    // 3. 微軟自然神經網路語音加權 (Natural / Online / Neural)
    if (nameLower.includes("natural") || nameLower.includes("neural") || nameLower.includes("online")) {
      score += 300;
    }

    // 4. 具體品牌與角色語音加權
    if (preferredGender === "male") {
      if (nameLower.includes("yunjhe") || nameLower.includes("Yunzhe")) score += 400; // 微軟最優質台灣男聲
      if (nameLower.includes("eddy")) score += 350; // Apple 最佳台灣男童/男孩聲
      if (nameLower.includes("rocko") || nameLower.includes("reed")) score += 300;
      if (nameLower.includes("yunxi") || nameLower.includes("kangkang")) score += 250;
    } else {
      if (nameLower.includes("hsiaochen") || nameLower.includes("Xiaozhen")) score += 400; // 微軟最優質課本女聲
      if (nameLower.includes("hsiaohan") || nameLower.includes("Xiaohan")) score += 350;
      if (nameLower.includes("meijia") || nameLower.includes("Meijia")) score += 300; // Apple 最佳台灣女聲
    }

    // 5. 系統增強型語音 (Apple Enhanced / Premium)
    if (nameLower.includes("enhanced") || nameLower.includes("premium")) {
      score += 100;
    }

    if (score > highestScore) {
      highestScore = score;
      bestVoice = v;
    }
  }

  return bestVoice;
}

// 智慧聲學參數調校（確保男聲有朝氣男孩聲線，絕不與女聲混淆）
function getTtsAcousticConfig(preferredGender, selectedVoice) {
  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "Yunzhe", "Yunxi", "Yun Yang", "Kangkang", "Zhiwei", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
  const voiceName = (selectedVoice && selectedVoice.name) ? selectedVoice.name.toLowerCase() : "";
  const isRealMale = MALE_KEYWORDS.some(k => voiceName.includes(k));

  let ttsSpeed = parseFloat(localStorage.getItem("tts_speed_rate") || "1.0");

  if (preferredGender === "male") {
    if (isRealMale) {
      // 系統有原生男聲（如微軟雲哲、Apple Eddy、Rocko 等）
      return {
        rate: 0.98 * ttsSpeed,
        pitch: 0.92, // 自然陽光男聲
        isMale: true
      };
    } else {
      // 系統無原生男聲時（如 Chrome 內建 Google 國語或美佳），採用聲學共振頻率降調（降低 24%）
      // 讓基礎女聲波形直接轉化為充滿朝氣的陽光男孩聲線！
      return {
        rate: 0.98 * ttsSpeed,
        pitch: 0.76, // 強效降調：女聲瞬間轉換成活力男孩！
        isMale: true
      };
    }
  } else {
    // 溫柔親切的國語課本配音（女聲）
    const isNeural = voiceName.includes("natural") || voiceName.includes("neural") || voiceName.includes("online");
    return {
      rate: (isNeural ? 0.94 : 0.92) * ttsSpeed,
      pitch: 1.08, // 溫柔清亮的故事媽媽音調
      isMale: false
    };
  }
}

let ttsSpeedRate = parseFloat(localStorage.getItem("tts_speed_rate") || "1.0");

window.changeTtsSpeed = function(speed) {
  ttsSpeedRate = parseFloat(speed);
  localStorage.setItem("tts_speed_rate", speed);
  if (currentLiveAudio) {
    try {
      currentLiveAudio.playbackRate = ttsSpeedRate;
    } catch (e) {}
  }
  if (typeof showClassroomToast === "function") {
    showClassroomToast(`⚡ Voice speed switched to ${speed}x`);
  }
};

let currentFontScale = 1.0;
window.toggleSlideFontSize = function() {
  const scales = [1.0, 1.15, 1.3];
  const idx = scales.indexOf(currentFontScale);
  currentFontScale = scales[(idx + 1) % scales.length];
  const main = document.getElementById("slideMainContent");
  if (main) {
    main.style.fontSize = `${currentFontScale}em`;
  }
  if (typeof showClassroomToast === "function") {
    showClassroomToast(`🔤 Classroom font level has been switched to ${Math.round(currentFontScale * 100)}%`);
  }
};

window.changeVoiceGender = function(gender) {
  localStorage.setItem("preferred_tts_gender", gender);
  if (currentSpeechMode) {
    stopSpeech();
  }
  // 同步所有下拉選單
  const sel1 = document.getElementById("voiceGenderSelector");
  if (sel1) sel1.value = gender;
  const sel2 = document.getElementById("indexVoiceGenderSelector");
  if (sel2) sel2.value = gender;

  if (typeof showClassroomToast === "function") {
    if (gender === "male") {
      showClassroomToast("👦 Switched to: sunny and energetic male voice!");
    } else {
      showClassroomToast("🌸 Switched to: Read-aloud voice (gentle female voice)!");
    }
  }
};

function speakSentenceQueue(text, mode, onComplete) {
  if (!window.speechSynthesis) {
    alert("Your browser does not yet support the speech reading function. It is recommended to use the latest version of Chrome, Edge or Safari browser.");
    return;
  }

  // 停止先前的朗讀並更新 session ID，確保絕不重複朗讀
  if (activeSpeechTimer) {
    clearTimeout(activeSpeechTimer);
    activeSpeechTimer = null;
  }
  const sessionId = ++currentSpeechSessionId;
  window.speechSynthesis.cancel();
  window._activeUtterances = [];

  // 清洗文字：移除表情符號、HTML標籤、破折號，讓語音流暢自然
  let cleanText = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[『』「」"]/g, "")
    .replace(/——+/g, "，")
    .replace(/\.{3,}/g, "。")
    .replace(/…+/g, "。")
    .trim();

  if (!cleanText) return;

  // 切分成自然句子，避免 Chrome 15 秒長音逾時中斷 Bug
  const rawParts = cleanText.split(/([.!?。！？\n]+)/);
  const sentences = [];
  for (let i = 0; i < rawParts.length; i += 2) {
    const s = (rawParts[i] + (rawParts[i + 1] || "")).trim();
    if (s && s !== "。" && s !== "！" && s !== "？") {
      sentences.push(s);
    }
  }

  if (sentences.length === 0) return;

  currentSpeechMode = mode;
  updateTtsButtons();

  // 優先挑選最像國語課本配音員之台灣語音
  const preferredGender = localStorage.getItem("preferred_tts_gender") || "female";
  const twVoice = getBestTextbookVoice(preferredGender);
  const acoustic = getTtsAcousticConfig(preferredGender, twVoice);

  let currentIndex = 0;

  function speakNext() {
    if (sessionId !== currentSpeechSessionId || currentSpeechMode !== mode) return;

    if (currentIndex >= sentences.length) {
      currentSpeechMode = null;
      updateTtsButtons();
      if (onComplete) onComplete();
      return;
    }

    const s = sentences[currentIndex];
    const utterance = new SpeechSynthesisUtterance(s);
    utterance.lang = "en-US";
    utterance.rate = acoustic.rate;
    utterance.pitch = acoustic.pitch;
    if (twVoice) utterance.voice = twVoice;

    // 將 utterance 存入全域陣列，防止被 JavaScript V8 垃圾回收中途截斷
    window._activeUtterances.push(utterance);

    utterance.onend = () => {
      if (sessionId !== currentSpeechSessionId) return;
      currentIndex++;
      // 自然換氣呼吸微停頓（180 毫秒），模擬真人換氣，絕不機械式連珠炮
      activeSpeechTimer = setTimeout(speakNext, 180);
    };

    utterance.onerror = (e) => {
      if (sessionId !== currentSpeechSessionId) return;
      console.warn("TTS reading sentences encounter situations:", e);
      currentIndex++;
      if (currentIndex < sentences.length) {
        activeSpeechTimer = setTimeout(speakNext, 180);
      } else {
        currentSpeechMode = null;
        updateTtsButtons();
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  // 延遲 50ms 執行，避免 Chrome cancel() 與 speak() 衝突
  activeSpeechTimer = setTimeout(speakNext, 50);
}

// 朗讀故事全文（開關切換）
function toggleStorySpeech() {
  if (currentSpeechMode === "story") {
    stopSpeech();
  } else {
    const story = currentBriefing.story;
    if (!story) return;
    const fullText = `${story.title}。${story.content}`;
    playUniversalSpeech(fullText, "story");
  }
}

// 朗讀課堂引導提問（開關切換）
function speakQuestion() {
  if (currentSpeechMode === "question") {
    stopSpeech();
  } else {
    const story = currentBriefing.story;
    if (!story || !story.question) return;
    playUniversalSpeech(story.question, "question");
  }
}

// 向後相容 speakText 呼叫
function speakText(text, onComplete) {
  playUniversalSpeech(text, "custom", onComplete);
}

// 更新朗讀按鈕視覺狀態
function updateTtsButtons() {
  const storyBtn = document.getElementById("storyTtsBtn");
  const questionBtn = document.getElementById("questionTtsBtn");
  const storyWrapper = document.getElementById("storyCardWrapper");

  if (storyBtn) {
    if (currentSpeechMode === "story") {
      storyBtn.innerHTML = "⏹️ Stop reading story";
      storyBtn.classList.add("speaking");
      storyBtn.style.background = "#fee2e2";
      storyBtn.style.color = "#991b1b";
    } else {
      storyBtn.innerHTML = "🔊 Read the Story";
      storyBtn.classList.remove("speaking");
      storyBtn.style.background = "#fef08a";
      storyBtn.style.color = "#854d0e";
    }
  }

  if (questionBtn) {
    if (currentSpeechMode === "question") {
      questionBtn.innerHTML = "⏹️ Stop reading the question aloud";
      questionBtn.classList.add("speaking");
      questionBtn.style.background = "#fee2e2";
      questionBtn.style.color = "#991b1b";
    } else {
      questionBtn.innerHTML = "🔊 Read the Question";
      questionBtn.classList.remove("speaking");
      questionBtn.style.background = "#ecfdf5";
      questionBtn.style.color = "#065f46";
    }
  }

  if (storyWrapper) {
    if (currentSpeechMode === "story") {
      storyWrapper.classList.add("story-speaking-glow");
    } else {
      storyWrapper.classList.remove("story-speaking-glow");
    }
  }
}

// Slide 1: 引起動機 (豐富生動情境長故事 · 故事與題目皆支援語音朗讀與點選直接朗讀)
function renderSlideMotivation(container) {
  stopSpeech();
  const story = currentBriefing.story || {
    title: `🎭 ${currentBriefing.title}`,
    content: (currentBriefing.timeline[0] && currentBriefing.timeline[0].desc) || currentBriefing.summary,
    question: "What would your brain think if you encountered this situation?"
  };

  const formattedTitle = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.title) : story.title;
  const formattedContent = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.content) : story.content;
  const formattedQuestion = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.question) : story.question;

  container.innerHTML = `
    <div class="story-wrapper" id="storyCardWrapper">

      <!-- Top Action Bar -->
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; border-bottom:3px dashed #fed7aa; padding-bottom:12px; flex-wrap:wrap; gap:10px;">
        <span class="story-badge">📖 Today's School Story</span>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <select id="voiceGenderSelector" onchange="changeVoiceGender(this.value)" style="padding:6px 12px; border-radius:10px; border:2px solid #fed7aa; font-size:0.9rem; font-weight:800; color:#78350f; background:#fff7ed; cursor:pointer;" title="Choose a reading voice">
            <option value="female" ${localStorage.getItem("preferred_tts_gender") !== "male" ? "selected" : ""}>🌸 Gentle female voice</option>
            <option value="male" ${localStorage.getItem("preferred_tts_gender") === "male" ? "selected" : ""}>👦 Friendly male voice</option>
          </select>
          <button class="tts-btn" id="storyTtsBtn" onclick="toggleStorySpeech()" title="Click to read the full text of the story directly (click again to pause)">
            🔊 Read the Story
          </button>
        </div>
      </div>

      <!-- Story Title -->
      <h2 class="story-title" onclick="toggleStorySpeech()" style="cursor:pointer;" title="You can also read the story directly by clicking on the title!">
        ${formattedTitle}
      </h2>

      <!-- Story Body -->
      <div class="story-body" onclick="toggleStorySpeech()" style="cursor:pointer;" title="Click the story text to start or pause reading.">
        ${formattedContent}
      </div>

      <!-- Helper Tip -->
      <div style="font-size:0.88rem; color:#94a3b8; font-weight:800; display:flex; align-items:center; gap:6px; margin-top:-6px;">
        <span>💡 Tips for reading aloud: Click the "Read the full text of the story" button in the upper right corner, or "Click directly on the text of the story" to start reading or pause it at any time!</span>
      </div>

      <!-- Question Box -->
      <div class="story-question-box">
        <div class="story-question-icon">🤔</div>
        <div style="flex:1;">
          <div class="story-question-title">The whole class uses their brains and asks questions in class guidance</div>
          <div class="story-question-text" onclick="speakQuestion()" style="cursor:pointer;" title="Click on the title text to read it directly!">
            ${formattedQuestion}
          </div>
        </div>
        <button class="c-btn" id="questionTtsBtn" style="padding:8px 18px; font-size:0.95rem; background:#ecfdf5; border-color:#6ee7b7; color:#065f46; font-weight:900; white-space:nowrap;" onclick="speakQuestion()" title="Click to read the classroom guidance question aloud">
          🔊 Read the Question
        </button>
      </div>
    </div>

    <div style="margin-top:20px;">
      <button class="c-btn c-btn-primary" style="font-size:1.15rem; padding:12px 28px; box-shadow:0 4px 14px rgba(13,148,136,0.3);" onclick="nextSlide()">
        Let’s go! Learn today’s superpower tips →
      </button>
    </div>
  `;
}

// Slide 2: 技巧與視覺圖卡 (支援注音標註)
function renderSlideSkill(container) {
  const card = currentBriefing.visualCard;
  const formattedTitle = typeof toZhuyinHtml === "function" ? toZhuyinHtml(card.title) : card.title;

  container.innerHTML = `
    <h2 class="slide-title" style="color:var(--primary);">${formattedTitle}</h2>
    <p class="slide-subtitle">${typeof toZhuyinHtml === "function" ? toZhuyinHtml("Remember these three superpower moves, and you will be a social master!") : "Remember these three superpower moves, and you will be a social master!"}</p>
    <div class="visual-steps-grid" style="width:100%; max-width:850px; margin:12px auto;">
      ${card.steps.map(s => `
        <div class="visual-step" style="padding:16px 14px;">
          <div class="step-num" style="width:38px; height:38px; font-size:1.1rem;">${s.num}</div>
          <div class="step-text" style="font-size:1.25rem; margin-top:8px; line-height:2;">
            ${typeof toZhuyinHtml === "function" ? toZhuyinHtml(s.text) : s.text}
          </div>
        </div>
      `).join("")}
    </div>
    <div style="margin-top:14px;">
      <button class="c-btn c-btn-accent" style="font-size:1.05rem; padding:10px 22px;" onclick="nextSlide()">
        🎭 Enter the character theater! ›
      </button>
    </div>
  `;
}

// 取得當日 4 角色扮演劇本
function getDailyRoleplayData(briefing) {
  if (typeof dailyRoleplays !== "undefined" && dailyRoleplays[briefing.id]) {
    return dailyRoleplays[briefing.id];
  }
  // 備援方案
  return {
    id: briefing.id,
    scenario: `In the "${briefing.title}" situation, four students cooperated to complete the challenge!`,
    roles: [
      { roleId: 1, name: "Protagonist Challenger", studentName: "Yu", studentEmoji: "🦁", studentColor: "#3b82f6", action: "Let your hands hang naturally, look into the other person's eyes, take a deep breath and express your thoughts clearly.", dialogue: "Everyone please look at me! I took a deep breath and spoke my mind!", tip: "Give Yu clear visual instructions and affirm his courage to speak out." },
      { roleId: 2, name: "Collaborative Interactors", studentName: "Jun", studentEmoji: "🐻", studentColor: "#8b5cf6", action: "Restrain impatience, listen patiently to the other party's statement, and give a gentle and friendly concrete response.", dialogue: "I will cooperate with everyone and abide by the rules together. I will not push or get angry!", tip: "Guide people to practice listening and waiting, and replace impulse with positive words." },
      { roleId: 3, name: "Warm and supportive partners", studentName: "He", studentEmoji: "🐼", studentColor: "#10b981", action: "Stand aside and provide the required pictures or props, nod and smile, and give encouragement to your partners.", dialogue: "You two work together so well! If there is anything you don’t understand, I’ll help you anytime and we’ll finish it together!", tip: "Help He exert the backing force to stabilize peers." },
      { roleId: 4, name: "Order leader", studentName: "Jia", studentEmoji: "🦊", studentColor: "#f59e0b", action: "Hold high the today's challenge sign, lead all the students to clap loudly three times, and put a gold star on the honor roll.", dialogue: "Great! Everyone has done some superpower moves today, and everyone has successfully challenged!", tip: "Guide Jia to practice positive affirmation and host feedback to gather centripetal force." }
    ]
  };
}

// Slide 3: 角色大劇場（專為 4 位特教學童量身打造之實戰情境劇本，明確動作與台詞）
function renderSlideRolePlay(container) {
  stopSpeech();
  const rp = getDailyRoleplayData(currentBriefing);

  const formattedScenario = typeof toZhuyinHtml === "function" ? toZhuyinHtml(rp.scenario) : rp.scenario;

  container.innerHTML = `
    <div class="roleplay-theater-wrapper">

      <!-- Top Theater Action Banner -->
      <div class="rp-header-banner">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
            <span class="rp-badge">🎭 Today’s four-character small theater drill</span>
            <span style="font-size:0.9rem; font-weight:800; color:#64748b;">(Yu🦁, Jun🐻, He🐼, Jia🦊 Everyone has a role)</span>
          </div>
          <div class="rp-scenario-text">
            <strong>🎬 Today’s situation:</strong>${formattedScenario}
          </div>
        </div>

        <!-- Theater Control Buttons -->
        <div class="rp-controls-bar">
          <button class="c-btn" id="playAllRolesBtn" onclick="speakAllRolesDialogue()" style="background:#fef08a; border-color:#eab308; color:#854d0e; font-weight:900;" title="Click to let the computer demonstrate the complete lines of the 4 characters in sequence">
            🔊 Demonstrate 4 character lines in sequence
          </button>
          <button class="c-btn" onclick="awardAllRoleplayStars()" style="background:#dcfce7; border-color:#22c55e; color:#15803d; font-weight:900;" title="Award 1 honorary star to each of the four students">
            ⭐ The drill was a great success! +1 star for all
          </button>
        </div>
      </div>

      <!-- 4 Role Cards Grid -->
      <div class="rp-grid">
        ${rp.roles.map(r => `
          <div class="rp-card" id="rpCard-${r.roleId}" style="border-top-color:${r.studentColor};">

            <!-- Card Header: Student & Role Name -->
            <div class="rp-card-header" style="background:${r.studentColor}15; border-bottom:1.5px solid ${r.studentColor}40;">
              <div class="rp-student-tag" style="background:${r.studentColor}; color:#ffffff;">
                ${classroomCompanion(r.studentName)} ${r.studentName}
              </div>
              <div class="rp-role-title" style="color:#0f172a;">
                ${r.name}
              </div>
            </div>

            <!-- Card Body -->
            <div class="rp-card-body">

              <!-- Action & Expression Instruction -->
              <div class="rp-section-box rp-action-box">
                <div class="rp-label rp-action-label">
                  🎬 What the character has to do (actions and expressions):
                </div>
                <div class="rp-action-desc">
                  ${typeof toZhuyinHtml === "function" ? toZhuyinHtml(r.action) : r.action}
                </div>
              </div>

              <!-- Dialogue Box -->
              <div class="rp-section-box rp-dialogue-box">
                <div class="rp-label rp-dialogue-label">
                  💬 Dialogue lines (please read them out loud):
                </div>
                <div class="rp-speech-bubble" onclick="speakSingleRoleDialogue('${r.dialogue.replace(/'/g, "\\'")}', this)" style="cursor:pointer;" title="Click this text to read it directly!">
                  ${typeof toZhuyinHtml === "function" ? toZhuyinHtml(r.dialogue) : r.dialogue}
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:6px;">
                  <button class="role-tts-btn" onclick="speakSingleRoleDialogue('${r.dialogue.replace(/'/g, "\\'")}', this, ${r.roleId || 1})">
                    🔊 Demonstrate this line
                  </button>
                </div>
              </div>

              <!-- Special Education Tip -->
              <div class="rp-tip-box">
                💡 <strong>Special education tips:</strong>${r.tip}
              </div>

            </div>

          </div>
        `).join("")}
      </div>

      <!-- Bottom Next Step Button -->
      <div style="display:flex; justify-content:center; margin-top:16px;">
        <button class="c-btn c-btn-primary" style="font-size:1.15rem; padding:12px 32px; font-weight:900;" onclick="nextSlide()">
          🎮 The theater drill is completed, let’s enter the actual game!›
        </button>
      </div>

    </div>
  `;
}

// 角色扮演單一角色台詞朗讀
async function speakSingleRoleDialogue(text, btnElement, roleId = 1) {
  stopSpeech();

  const originalText = btnElement ? btnElement.innerHTML : "";
  if (btnElement) {
    btnElement.innerHTML = "⏹️ Demonstration in progress...";
    btnElement.style.background = "#fee2e2";
    btnElement.style.color = "#991b1b";
  }

  const resetBtn = () => {
    if (btnElement) {
      btnElement.innerHTML = originalText;
      btnElement.style.background = "";
      btnElement.style.color = "";
    }
  };

  const audioKey = currentBriefing ? currentBriefing.id : "";

  if (false && audioKey && roleId) {
    const audioUrl = `audio/role_${audioKey}_${roleId}.mp3`;
    let fallbackHandled = false;
    const fallbackToWebSpeech = () => {
      if (fallbackHandled) return;
      fallbackHandled = true;
      currentLiveAudio = null;
      speakSentenceQueue(text, "role_single", resetBtn);
    };

    try {
      const audio = new Audio();
      try { audio.playbackRate = ttsSpeedRate; } catch (e) {}
      currentLiveAudio = audio;
      audio.onended = () => {
        currentLiveAudio = null;
        resetBtn();
      };
      audio.onerror = () => {
        fallbackToWebSpeech();
      };
      audio.src = audioUrl;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          fallbackToWebSpeech();
        });
      }
      return;
    } catch (e) {
      fallbackToWebSpeech();
      return;
    }
  }

  speakSentenceQueue(text, "role_single", resetBtn);
}

// 依序示範 4 角色完整台詞（全場示範模式）
let isPlayingAllRoles = false;
function speakAllRolesDialogue() {
  if (isPlayingAllRoles) {
    stopSpeech();
    isPlayingAllRoles = false;
    const btn = document.getElementById("playAllRolesBtn");
    if (btn) btn.innerHTML = "🔊 Demonstrate 4 character lines in sequence";
    document.querySelectorAll(".rp-card").forEach(c => c.classList.remove("rp-card-speaking"));
    return;
  }

  stopSpeech();
  const rp = getDailyRoleplayData(currentBriefing);
  const btn = document.getElementById("playAllRolesBtn");
  if (btn) btn.innerHTML = "⏹️ Stop demonstration reading";
  isPlayingAllRoles = true;

  let currentRoleIdx = 0;

  function speakNextRole() {
    if (!isPlayingAllRoles) return;
    if (currentRoleIdx >= rp.roles.length) {
      isPlayingAllRoles = false;
      if (btn) btn.innerHTML = "🔊 Demonstrate 4 character lines in sequence";
      document.querySelectorAll(".rp-card").forEach(c => c.classList.remove("rp-card-speaking"));
      sfx.playChime();
      showClassroomToast("🎉 4 The character lines demonstration is completed! It’s time for the children to perform on stage!");
      return;
    }

    const role = rp.roles[currentRoleIdx];
    document.querySelectorAll(".rp-card").forEach((c, idx) => {
      if (idx === currentRoleIdx) {
        c.classList.add("rp-card-speaking");
        c.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        c.classList.remove("rp-card-speaking");
      }
    });

    const prefix = `${role.studentName} responsible ${role.name} said:`;
    const fullSpeech = `${prefix}，${role.dialogue}`;
    const roleId = role.roleId || (currentRoleIdx + 1);
    const audioKey = currentBriefing ? currentBriefing.id : "";
    const audioUrl = `audio/role_${audioKey}_${roleId}.mp3`;

    const onNext = () => {
      currentRoleIdx++;
      setTimeout(speakNextRole, 450);
    };

    let fallbackHandled = false;
    const fallbackToWebSpeech = () => {
      if (fallbackHandled) return;
      fallbackHandled = true;
      currentLiveAudio = null;
      speakSentenceQueue(fullSpeech, "role_sequence", onNext);
    };
    fallbackToWebSpeech();
    return;

    try {
      const audio = new Audio();
      try { audio.playbackRate = ttsSpeedRate; } catch (e) {}
      currentLiveAudio = audio;
      audio.onended = () => {
        currentLiveAudio = null;
        onNext();
      };
      audio.onerror = () => {
        fallbackToWebSpeech();
      };
      audio.src = audioUrl;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          fallbackToWebSpeech();
        });
      }
    } catch (e) {
      fallbackToWebSpeech();
    }
  }

  speakNextRole();
}

// 演練完成：全員加一顆星
function awardAllRoleplayStars() {
  sfx.playFanfare();
  targetStudents.forEach(s => {
    studentStars[s.id] = (studentStars[s.id] || 0) + 1;
  });
  saveStudentStars();
  showClassroomToast("🌟 Great! Four character stars each receive 1 honorary star!");
}

let currentGameTab = "decision"; // "decision" | "special"

window.switchGameTab = function(tab) {
  currentGameTab = tab;
  renderSlide();
};

// Slide 4: 課堂互動遊戲 (整合行為因果決策樹與主題專屬遊戲)
function renderSlideGame(container) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-master-wrapper";
  wrapper.style.cssText = "width:100%; display:flex; flex-direction:column; align-items:center;";

  wrapper.innerHTML = `
    <div style="display:flex; justify-content:center; gap:12px; margin-bottom:18px; flex-wrap:wrap;">
      <button class="c-btn ${currentGameTab === 'decision' ? 'c-btn-accent' : ''}" style="font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(0,0,0,0.08);" onclick="switchGameTab('decision')">
        🧭 Social Situation Behavioral Decision Bifurcation Road (CBT Decision Tree)
      </button>
      <button class="c-btn ${currentGameTab === 'special' ? 'c-btn-accent' : ''}" style="font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(0,0,0,0.08);" onclick="switchGameTab('special')">
        🎮 Theme skill exclusive interactive game
      </button>
      <a class="c-btn" href="island-game.html" target="_blank" style="background:linear-gradient(135deg, #06b6d4, #0284c7); color:#fff; font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(6,182,212,0.25); text-decoration:none; display:inline-flex; align-items:center; gap:6px;" title="Start the 3D social island adventure game (IsleForge concept, log in to the exclusive theme island for this lesson and defeat the concept monster)">
        🏝️ Landing in 3D MapleStory
      </a>
    </div>
    <div class="game-container" id="gameInnerContainer" style="width:100%; max-width:880px;"></div>
  `;

  container.appendChild(wrapper);

  const innerBox = wrapper.querySelector("#gameInnerContainer");
  if (currentGameTab === "decision") {
    buildDecisionTreeGame(innerBox);
  } else {
    buildSpecificThemedGame(innerBox);
  }
}

// 決策樹遊戲：行為因果抉擇模擬 (CBT / PBS 正向行為支持)
function buildDecisionTreeGame(box) {
  const dt = currentBriefing.decisionTree || {
    prompt: `In the situational test of "${currentBriefing.title}", if it were you, which behavioral route would you choose?`,
    impulsive: {
      title: "💥 Impulsive temper tantrums / Refusal to cooperate",
      desc: "Shouting loudly, pushing people, or sulking and running away.",
      consequence: "❌ Consequences of the behavior: The classmate was frightened to tears, the activity was forced to stop, everyone was in a bad mood, and I lost a star... I feel so regretful!",
      feedback: "⚠️ Your impulsive brain is on fire! Next time, try stepping on the brakes and taking three deep breaths!"
    },
    super_skill: {
      title: `🌟 Use superpowers: ${currentBriefing.superSkill || "Take a deep breath calmly and say it carefully"}`,
      desc: `The brain takes a deep breath and applies the brakes, and uses "${currentBriefing.superSkill || "Super powers"}" to express and act politely`,
      consequence: "🎉 A resounding success! Your peers witnessed your maturity and respect, and the whole class applauded and cheered for you. Every student received a gold star of honor!",
      feedback: "🏆 Fantastic! The rational mind triumphs, successfully mastering social superpowers!"
    }
  };

  box.innerHTML = `
    <h3 style="font-size:1.35rem; font-weight:900; color:#1e3a8a; margin-top:0;">🧭 Social Situation Behavioral Choice Bifurcation (Choice & Consequence)</h3>
    <p style="color:#475569; font-size:1.02rem; margin-bottom:18px;">
      ${dt.prompt}
    </p>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; width:100%; margin-bottom:18px;">

      <!-- Option A: Impulsive -->
      <div id="decisionCardImpulsive" role="button" tabindex="0" onclick="triggerDecision('impulsive')" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); this.click(); }" style="border-radius:16px; padding:20px; cursor:pointer; transition:all 0.25s; box-shadow:0 4px 12px rgba(239,68,68,0.08); text-align:left;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="font-size:1.8rem;">💥</span>
          <strong style="font-size:1.15rem; color:#b91c1c;">${dt.impulsive.title}</strong>
        </div>
        <p style="font-size:0.95rem; color:#475569; margin:0 0 12px 0;">${dt.impulsive.desc}</p>
        <div style="background:#fef2f2; border-radius:10px; padding:8px 12px; font-size:0.88rem; color:#991b1b; font-weight:700;">
          Click to experience the consequences of this behavior ➔
        </div>
      </div>

      <!-- Option B: Super Skill -->
      <div id="decisionCardSuper" role="button" tabindex="0" onclick="triggerDecision('super')" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); this.click(); }" style="border-radius:16px; padding:20px; cursor:pointer; transition:all 0.25s; box-shadow:0 4px 12px rgba(16,185,129,0.08); text-align:left;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="font-size:1.8rem;">🌟</span>
          <strong style="font-size:1.15rem; color:#047857;">${dt.super_skill.title}</strong>
        </div>
        <p style="font-size:0.95rem; color:#475569; margin:0 0 12px 0;">${dt.super_skill.desc}</p>
        <div style="background:#f0fdf4; border-radius:10px; padding:8px 12px; font-size:0.88rem; color:#166534; font-weight:700;">
          Click to unleash this social superpower ➔
        </div>
      </div>

    </div>

    <!-- Feedback Banner Area -->
    <div id="decisionFeedbackBox" style="width:100%; min-height:64px; border-radius:14px; padding:16px 20px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:1.1rem; font-weight:800; background:#f8fafc; border:2px dashed #cbd5e1; color:#64748b; transition:all 0.3s;">
      👉 Please click on the card above to observe the chain reaction caused by two different behaviors!
    </div>
  `;
}

window.triggerDecision = function(type) {
  const dt = currentBriefing.decisionTree || {};
  const fb = document.getElementById("decisionFeedbackBox");
  const cImp = document.getElementById("decisionCardImpulsive");
  const cSup = document.getElementById("decisionCardSuper");

  if (!fb || !cImp || !cSup) return;

  if (type === "impulsive") {
    sfx.playPop();
    cImp.style.transform = "scale(1.02)";
    cImp.style.borderColor = "#ef4444";
    cImp.style.background = "#fef2f2";
    cSup.style.opacity = "0.6";
    cSup.style.transform = "scale(0.98)";

    fb.style.background = "#fee2e2";
    fb.style.borderColor = "#ef4444";
    fb.style.color = "#991b1b";
    fb.innerHTML = `
      <div>
        <div style="font-size:1.15rem; margin-bottom:4px;">${dt.impulsive ? dt.impulsive.consequence : "❌ Impulsive behavior makes friends afraid and sad, and everyone is hurt!"}</div>
        <div style="font-size:0.95rem; opacity:0.85;">${dt.impulsive ? dt.impulsive.feedback : "⚠️ Please take three deep breaths and press the brake!"}</div>
      </div>
    `;
  } else {
    sfx.playFanfare();
    sfx.playChime();
    cSup.style.transform = "scale(1.04)";
    cSup.style.borderColor = "#10b981";
    cSup.style.background = "#f0fdf4";
    cImp.style.opacity = "0.6";
    cImp.style.transform = "scale(0.98)";

    fb.style.background = "#dcfce7";
    fb.style.borderColor = "#10b981";
    fb.style.color = "#166534";
    fb.innerHTML = `
      <div>
        <div style="font-size:1.25rem; margin-bottom:4px;">${dt.super_skill ? dt.super_skill.consequence : "🎉 Use your superpower! Everyone is happy to applaud you!"}</div>
        <div style="font-size:1rem; opacity:0.9;">${dt.super_skill ? dt.super_skill.feedback : "🏆 Successfully apply the brake, and everyone will receive 1 star!"}</div>
      </div>
    `;
    awardAllRoleplayStars();
  }
};

function buildSpecificThemedGame(gameWrapper) {
  if (currentBriefing.title.includes("Emotional Thermometer") || currentBriefing.title.includes("Body traffic light")) {
    buildThermometerGame(gameWrapper);
  } else if (currentBriefing.title.includes("turtle") || currentBriefing.title.includes("Take a deep breath") || currentBriefing.title.includes("First aid kit") || currentBriefing.title.includes("Take heart")) {
    buildBreathingGame(gameWrapper);
  } else if (currentBriefing.title.includes("Eyes") || currentBriefing.title.includes("Radar") || currentBriefing.title.includes("Zoom") || currentBriefing.title.includes("Time machine") || currentBriefing.title.includes("Safflower")) {
    buildRadarGame(gameWrapper);
  } else if (currentBriefing.title.includes("Baton") || currentBriefing.title.includes("Don’t rush to talk") || currentBriefing.title.includes("Borrow") || currentBriefing.title.includes("Borrowing things") || currentBriefing.title.includes("Raise hands") || currentBriefing.title.includes("Whisper")) {
    buildTalkingStickGame(gameWrapper);
  } else if (currentBriefing.title.includes("Volume") || currentBriefing.title.includes("Bells")) {
    buildVolumeGame(gameWrapper);
  } else if (currentBriefing.title.includes("My message") || currentBriefing.title.includes("Thanks") || currentBriefing.title.includes("Card") || currentBriefing.title.includes("Desire")) {
    buildIMessageGame(gameWrapper);
  } else if (currentBriefing.title.includes("Can afford to lose") || currentBriefing.title.includes("Board games") || currentBriefing.title.includes("Cooperation") || currentBriefing.title.includes("Praise") || currentBriefing.title.includes("Forgive") || currentBriefing.title.includes("Money box") || currentBriefing.title.includes("Award of honor") || currentBriefing.title.includes("Judge") || currentBriefing.title.includes("New Year's Eve") || currentBriefing.title.includes("Party") || currentBriefing.title.includes("Last place") || currentBriefing.title.includes("Brain upgrade") || currentBriefing.title.includes("Glutinous rice balls") || currentBriefing.title.includes("Christmas tree")) {
    buildHighFiveGame(gameWrapper);
  } else if (currentBriefing.title.includes("Join the game") || currentBriefing.title.includes("Building blocks") || currentBriefing.title.includes("Lunch") || currentBriefing.title.includes("Queuing")) {
    buildJoinGameSimulator(gameWrapper);
  } else if (currentBriefing.title.includes("Reject") || currentBriefing.title.includes("Apology") || currentBriefing.title.includes("Don’t force it") || currentBriefing.title.includes("Say no bravely") || currentBriefing.title.includes("Unfair") || currentBriefing.title.includes("I'm still learning") || currentBriefing.title.includes("Changes") || currentBriefing.title.includes("Gift")) {
    buildRefusalGame(gameWrapper);
  } else {
    buildEmergencyGame(gameWrapper);
  }
}

// 遊戲 1: 互動情緒溫度計
function buildThermometerGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0f766e;">🌡️ Interactive Emotional Thermometer</h3>
    <p style="color:#64748b; font-size:0.95rem;">Click on different temperature levels to see the bear's mood and body alarms!</p>
    <div class="thermo-stage">
      <div class="thermo-tube">
        <div class="thermo-fluid" id="thermoFluid"></div>
      </div>
      <div class="avatar-display" id="avatarEmoji">😊</div>
      <div class="thermo-levels">
        <button class="thermo-btn" onclick="setThermo(1, '😊', '1分：平靜像吹微風，很放鬆')">🟢 1 point: calm breeze</button>
        <button class="thermo-btn" onclick="setThermo(2, '🙂', '2分：有一點點奇怪，但還可以')">🟡 2 points: Little confusion</button>
        <button class="thermo-btn" onclick="setThermo(3, '😐', '3分：握拳、心跳變快，準備深呼吸')">🟠 3 points: Fist alert!</button>
        <button class="thermo-btn" onclick="setThermo(4, '😠', '4分：很想大叫，快找冷靜角！')">🔴 4 points: almost angry</button>
        <button class="thermo-btn" onclick="setThermo(5, '🌋', '5分：火山大爆發，需要安靜抱抱')">💥 5 points: volcanic eruption</button>
      </div>
    </div>
    <div id="thermoFeedback" style="font-size:1.1rem; font-weight:700; color:#0f766e; min-height:30px;">
      Please click on the temperature level on the right
    </div>
  `;
}

window.setThermo = function(level, emoji, text) {
  sfx.playPop();
  document.getElementById("thermoFluid").style.height = `${level * 20}%`;
  document.getElementById("avatarEmoji").innerText = emoji;
  document.getElementById("thermoFeedback").innerText = text;
  const colors = ["#10b981", "#84cc16", "#eab308", "#f97316", "#ef4444"];
  document.getElementById("thermoFluid").style.background = colors[level - 1];
  if (level === 3) sfx.playChime();
};

// 遊戲 2: 烏龜縮殼深呼吸
function buildBreathingGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0d9488;">🐢 Turtle deep breathing guide</h3>
    <p style="color:#64748b; font-size:0.95rem;">Follow the circle to enlarge, inhale and exhale slowly to help cool down the brain!</p>
    <div class="breathing-box">
      <div class="breathe-circle" id="breatheCircle">
        <span id="breatheText">Preparation</span>
      </div>
      <button class="c-btn c-btn-primary" style="font-size:1.1rem; padding:10px 24px;" id="startBreatheBtn" onclick="toggleBreathing()">
        ▶️ Start deep breathing cycle
      </button>
    </div>
  `;
}

let isBreathing = false;
window.toggleBreathing = function() {
  const circle = document.getElementById("breatheCircle");
  const text = document.getElementById("breatheText");
  const btn = document.getElementById("startBreatheBtn");

  if (isBreathing) {
    clearInterval(breatheInterval);
    isBreathing = false;
    circle.className = "breathe-circle";
    text.innerText = "Preparation";
    btn.innerText = "▶️ Start deep breathing cycle";
    return;
  }

  isBreathing = true;
  btn.innerText = "⏹️ End breath";
  runBreatheCycle();
};

function runBreatheCycle() {
  if (!isBreathing) return;
  const circle = document.getElementById("breatheCircle");
  const text = document.getElementById("breatheText");

  // 吸氣 3秒
  sfx.playChime();
  circle.className = "breathe-circle expanding";
  text.innerText = "Inhale... (1, 2, 3)";

  setTimeout(() => {
    if (!isBreathing) return;
    // 屏息 2秒
    text.innerText = "Stop... (relax)";
    setTimeout(() => {
      if (!isBreathing) return;
      // 吐氣 5秒
      circle.className = "breathe-circle shrinking";
      text.innerText = "Exhale slowly... blow away the dandelions";
      setTimeout(() => {
        if (isBreathing) runBreatheCycle();
      }, 5000);
    }, 2000);
  }, 3000);
}

// 遊戲 3: 眼神雷達對焦
function buildRadarGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0284c7;">🎯 Eye Radar Focus Challenge</h3>
    <p style="color:#64748b; font-size:0.95rem;">No need to stare! Click and look at the small sticker between the classmate’s eyebrows for 3 seconds!</p>
    <div class="radar-screen">
      <div style="font-size:4.5rem; position:absolute; top:40px;">👦</div>
      <div class="radar-target" id="radarTarget" onclick="lockRadar()">
        ⭐
      </div>
    </div>
    <div id="radarStatus" style="font-size:1.1rem; font-weight:700; color:#0284c7;">
      Click on the forehead and eyebrow sticker above to focus
    </div>
  `;
}

window.lockRadar = function() {
  const target = document.getElementById("radarTarget");
  const status = document.getElementById("radarStatus");
  target.classList.add("locked");
  status.innerText = "⏳ The radar is charging...keep looking at the center of your eyebrows!";
  sfx.playPop();

  setTimeout(() => {
    target.classList.remove("locked");
    status.innerText = "🎉 Beep! Focus successful! The eyes are very polite!";
    sfx.playFanfare();
    addStar();
  }, 2500);
};

// 遊戲 4: 溝通接力棒
function buildTalkingStickGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0d9488;">🎤 Communication baton passer</h3>
    <p style="color:#64748b; font-size:0.95rem;">Click to pass the baton to classmates! The person who got it speaks, and the others listen carefully!</p>
    <div class="talking-stage">
      <div class="player-seat holding" id="seat1" onclick="passStick(1)">
        <div class="stick-icon">🎤</div>
        <div style="font-weight:800;">[Xiao Ming] is talking</div>
      </div>
      <div class="player-seat" id="seat2" onclick="passStick(2)">
        <div class="stick-icon">👂</div>
        <div style="font-weight:800;">[Xiaohua] Listen attentively</div>
      </div>
      <div class="player-seat" id="seat3" onclick="passStick(3)">
        <div class="stick-icon">👂</div>
        <div style="font-weight:800;">[Xiaomei] Listen attentively</div>
      </div>
    </div>
    <div id="stickStatus" style="font-size:1.1rem; font-weight:700; color:#0d9488; margin-top:10px;">
      Now only Xiao Ming can speak, the others put their hands on their knees!
    </div>
  `;
}

window.passStick = function(seatNum) {
  sfx.playPop();
  for (let i = 1; i <= 3; i++) {
    const seat = document.getElementById(`seat${i}`);
    if (i === seatNum) {
      seat.className = "player-seat holding";
      seat.querySelector(".stick-icon").innerText = "🎤";
      seat.querySelector("div:last-child").innerText = `[Classmate${i}] is talking`;
    } else {
      seat.className = "player-seat";
      seat.querySelector(".stick-icon").innerText = "👂";
      seat.querySelector("div:last-child").innerText = `[Classmate${i}] Listen attentively`;
    }
  }
  document.getElementById("stickStatus").innerText = `The stick was passed to classmate ${seatNum}! The whole audience waited quietly.`;
};

// 遊戲 5: 音量控制尺
function buildVolumeGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#3b82f6;">📢 Volume switching challenge</h3>
    <p style="color:#64748b; font-size:0.95rem;">Title:<strong>"Look for the administrator to borrow books in the library"</strong>, what volume level should be used?</p>
    <div class="volume-track">
      <div class="volume-card" onclick="checkVolume(1)">
        <div style="font-size:2rem;">🐜</div>
        <div style="font-weight:800;">No. 1: Whisper</div>
      </div>
      <div class="volume-card" onclick="checkVolume(2)">
        <div style="font-size:2rem;">🐱</div>
        <div style="font-weight:800;">No. 2: Listen at the same table</div>
      </div>
      <div class="volume-card" onclick="checkVolume(3)">
        <div style="font-size:2rem;">🐶</div>
        <div style="font-weight:800;">No. 3: Whole class presentation</div>
      </div>
      <div class="volume-card" onclick="checkVolume(4)">
        <div style="font-size:2rem;">🦖</div>
        <div style="font-weight:800;">No. 4: Loud in the playground</div>
      </div>
    </div>
    <div id="volumeFeedback" style="font-size:1.1rem; font-weight:700; min-height:30px; margin-top:10px;">
      Please select an appropriate number
    </div>
  `;
}

window.checkVolume = function(num) {
  const fb = document.getElementById("volumeFeedback");
  if (num === 1 || num === 2) {
    sfx.playFanfare();
    fb.innerHTML = `🎉 Correct answer! Use the ${num} number to quiet the volume in the library so you won’t disturb other people!`;
    fb.style.color = "#10b981";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = `⚠️ Number ${num} is too noisy! The library can scare people, please try again!`;
    fb.style.color = "#ef4444";
  }
};

// 遊戲 8: 輸得起 High-Five 擊掌
function buildHighFiveGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#ca8a04;">✋ A great hero who can afford to lose·High-five challenge</h3>
    <p style="color:#64748b; font-size:0.95rem;">Xiao Ming lost this board game, please click on the big golden hand to give him a high five to encourage him!</p>
    <div style="cursor:pointer; font-size:6rem; transition:transform 0.2s;" onclick="highFive(this)">
      🖐️
    </div>
    <div id="hfText" style="font-size:1.3rem; font-weight:800; color:#ca8a04;">
      Click the upper palm and say to the winner: "This round is so exciting!"
    </div>
  `;
}

window.highFive = function(el) {
  el.style.transform = "scale(1.3) rotate(-10deg)";
  setTimeout(() => el.style.transform = "scale(1)", 200);
  sfx.playFanfare();
  document.getElementById("hfText").innerHTML = "🎉 High five success! \"This round is so exciting! I'll challenge you next time!\" 100 points for being elegant!";
  addStar();
};

// 遊戲 9: 魔法「我訊息」拼圖
function buildIMessageGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#1e40af;">🧩 Magic "I Message" assembly three building blocks</h3>
    <p style="color:#64748b; font-size:0.95rem;">Click on the three blocks below to combine them into polite magic sentences!</p>
    <div class="puzzle-board">
      <div class="puzzle-block block-blue" id="blk1" onclick="pickBlock(1)">[When you] take away my pencil
[Pain Point 1] Lack of systematic and consistent complete curriculum for the entire school year:
[Pain Point 3] The results of special education classes are difficult to generalize to ordinary classes and families (Generalization fault):
[Pain Point 2] Abstract cognitive preaching makes it difficult for special education children to establish causal connections:</div>
      <div class="puzzle-block block-yellow" id="blk2" onclick="pickBlock(2)">[I feel] very anxious and angry</div>
      <div class="puzzle-block block-green" id="blk3" onclick="pickBlock(3)">[Please] Ask me first and then take it</div>
    </div>
    <div id="puzzleResult" style="margin-top:16px; font-size:1.2rem; font-weight:800; color:#1e40af; background:white; padding:12px 20px; border-radius:12px; width:100%; max-width:650px;">
      👉 Sentence combination: Please click three building blocks in order
    </div>
  `;
}

let picked = [];
window.pickBlock = function(idx) {
  sfx.playPop();
  if (!picked.includes(idx)) picked.push(idx);
  const texts = ["", "[When you] take away my pen", "[I feel] very anxious", "[Please] Ask me first"];
  const res = document.getElementById("puzzleResult");
  res.innerText = "👉 Magic spell:" + picked.map(i => texts[i]).join(" ＋ ");

  if (picked.length === 3) {
    sfx.playFanfare();
    res.innerHTML = "🎉 Combination successful! The classmate smiled and said: \"Sorry, I will ask you first next time!\"”Conflicts are resolved peacefully!";
    res.style.color = "#10b981";
    addStar();
  }
};

// 其他通用備援遊戲（加入遊戲模擬器）
function buildJoinGameSimulator(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0f766e;">🤝 Join the game three-step simulator</h3>
    <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:550px; margin-top:12px;">
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(1, this)">1. Stand aside and watch what your classmates are playing (no rushing)</button>
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(2, this)">2. Wait until the game is paused or the game is changed.</button>
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(3, this)">3. Xiaoxiao asked: "Can I play together?"</button>
    </div>
    <div id="joinStatus" style="font-size:1.1rem; font-weight:700; color:#0f766e; margin-top:14px;">Please click on the steps in order</div>
  `;
}

let joinSteps = 0;
window.stepJoin = function(s, btn) {
  if (s === joinSteps + 1) {
    joinSteps++;
    sfx.playPop();
    btn.style.background = "#ccfbf1";
    btn.style.borderColor = "#0d9488";
    if (joinSteps === 3) {
      sfx.playFanfare();
      document.getElementById("joinStatus").innerText = "🎉 Great! The classmate said: \"Okay, it will be your turn next time!\" Successfully joined the peer game!";
      addStar();
    }
  }
};

function buildRefusalGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#b45309;">🌱 Facing rejection·The big test of good temper</h3>
    <p style="color:#64748b; font-size:0.95rem;">A classmate said: "Now there are only two pairs of rackets, so that's no good." What should you say?</p>
    <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:550px;">
      <button class="c-btn" onclick="checkRefusal(false, this)">😡 Shouted: "You are all annoying!" and took the racket away</button>
      <button class="c-btn" onclick="checkRefusal(true, this)">😊 Smile and say: "Okay, then I'll wait for the next round!" Turn around and find other things to play</button>
      <button class="c-btn" onclick="checkRefusal(false, this)">😭 Lying on the ground crying</button>
    </div>
    <div id="refusalFb" style="font-size:1.1rem; font-weight:700; margin-top:12px;">Please click on the best answer</div>
  `;
}

window.checkRefusal = function(correct, btn) {
  const fb = document.getElementById("refusalFb");
  if (correct) {
    sfx.playFanfare();
    fb.innerHTML = "🎉 Full marks! You have shown the grace of a mentally resilient hero! Your classmates think you are super mature!";
    fb.style.color = "#10b981";
    btn.style.background = "#dcfce7";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = "⚠️ Doing this will make everyone less interested in playing with you. Choose again!";
    fb.style.color = "#ef4444";
  }
};

function buildEmergencyGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#b91c1c;">🆘 Emergency vs Complaint Classification Test</h3>
    <p style="color:#64748b; font-size:0.95rem;">Situation:<strong>"My classmate fell down while running, his knees were bleeding and he kept crying."</strong>, what to do?</p>
    <div style="display:flex; gap:16px;">
      <button class="c-btn" style="padding:16px 24px; font-size:1.1rem;" onclick="checkEmer(false)">Solve it yourself and ignore him</button>
      <button class="c-btn c-btn-primary" style="padding:16px 24px; font-size:1.1rem;" onclick="checkEmer(true)">Find a teacher or nurse immediately!</button>
    </div>
    <div id="emerFb" style="font-size:1.1rem; font-weight:700; margin-top:12px;">Please click your choice</div>
  `;
}

window.checkEmer = function(correct) {
  const fb = document.getElementById("emerFb");
  if (correct) {
    sfx.playFanfare();
    fb.innerHTML = "🎉 Correct answer! If you are injured or in danger, you must seek help from your teacher immediately. This is not a complaint, it is to protect everyone!";
    fb.style.color = "#10b981";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = "⚠️ It is dangerous if someone is bleeding and injured. Be sure to tell the teacher!";
    fb.style.color = "#ef4444";
  }
};

// Slide 4: 榮譽榜與獎勵 (專屬四位學生代幣板：宇、和、嘉、畯 · 高對比清楚姓名)
function renderSlideReward(container) {
  const cardsHtml = targetStudents.map(s => `
    <div class="student-score-card" data-companion="${s.id}">
      <div class="card-name-plate">${classroomCompanion(s.name)} ${s.name}</div>
      <div class="card-star-display">
        <span>⭐</span>
        <span id="score_${s.id}">${studentStars[s.id] || 0}</span>
      </div>
      <div class="card-actions">
        <button class="btn-minus-star" style="background:#fee2e2; border-color:#fca5a5; color:#991b1b; font-weight:800;" onclick="minusStudentStar('${s.id}')" title="Deduct 1 star">−1 deduction point</button>
        <button class="btn-add-star" onclick="addStudentStar('${s.id}')" title="Award 1 star">+1 to add points</button>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <h2 class="slide-title" style="color:#ca8a04;">🏆 Classroom Honor Roll·Star Points Board</h2>
    <p class="slide-subtitle">As long as you do today's superpower action, the teacher can give [Yu, He, Jia, and Zhen] a star stamp!</p>

    <!-- 4 Student Scoreboard -->
    <div class="student-scoreboard">
      ${cardsHtml}
    </div>

    <!-- Management Tools -->
    <div style="display:flex; justify-content:center; gap:16px; margin-top:20px; flex-wrap:wrap;">
      <a class="c-btn" href="worksheet.html?id=${currentBriefing.id}" target="_blank" style="background:#fef08a; border-color:#eab308; color:#854d0e; font-weight:900;">
        📄 Open today’s color graphic worksheet
      </a>
      <button class="c-btn" style="background:#fef2f2; border-color:#fecaca; color:#991b1b;" onclick="resetStudentStars()">
        🎁 Reward redemption completed (stars return to zero)
      </button>
      <a class="c-btn" href="index.html" data-return-to-prep>
        📋 Return to the homepage of the lesson preparation platform
      </a>
    </div>
  `;
}

// 為指定學生加星星
window.addStudentStar = function(id) {
  sfx.playChime();
  studentStars[id] = (studentStars[id] || 0) + 1;
  saveStudentStars();
  if (typeof triggerConfetti === 'function') triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 25);
  const el = document.getElementById(`score_${id}`);
  if (el) {
    el.innerText = studentStars[id];
    el.parentElement.style.transform = "scale(1.2)";
    setTimeout(() => el.parentElement.style.transform = "scale(1)", 200);
  }
};

// 為指定學生扣回星星
window.minusStudentStar = function(id) {
  if ((studentStars[id] || 0) > 0) {
    sfx.playDeduct();
    studentStars[id]--;
    saveStudentStars();
    const el = document.getElementById(`score_${id}`);
    if (el) {
      el.innerText = studentStars[id];
      el.parentElement.style.transform = "scale(0.85)";
      setTimeout(() => el.parentElement.style.transform = "scale(1)", 200);
    }
  } else {
    sfx.playPop();
  }
};

// 星星全部歸零
window.resetStudentStars = function() {
  if (confirm("Are you sure you want to return all the stars of the four classmates [Yu, He, Jia, and Zhen] to zero (in exchange for physical rewards)?")) {
    sfx.playPop();
    studentStars = { yu: 0, he: 0, jia: 0, jun: 0 };
    saveStudentStars();
    const el = document.getElementById("slideMainContent");
    if (el && currentSlideIndex === 4) {
      renderSlideReward(el);
    }
  }
};

// 遊戲通關獎勵：全員（宇、和、嘉、畯）各加 1 顆星！
window.addStar = function() {
  targetStudents.forEach(s => {
    studentStars[s.id] = (studentStars[s.id] || 0) + 1;
  });
  saveStudentStars();
};

// 換頁控制
window.nextSlide = function() {
  stopSpeech();
  if (currentSlideIndex < slideStages.length - 1) {
    sfx.playPop();
    currentSlideIndex++;
    renderSlide();
  }
};

window.prevSlide = function() {
  stopSpeech();
  if (currentSlideIndex > 0) {
    sfx.playPop();
    currentSlideIndex--;
    renderSlide();
  }
};

window.goToSlide = function(idx) {
  stopSpeech();
  sfx.playPop();
  currentSlideIndex = idx;
  renderSlide();
};

// ==========================================
// 跨瀏覽器與跨平台全螢幕與投影模式管理器
// ==========================================

function getFullscreenElement() {
  return document.fullscreenElement ||
         document.webkitFullscreenElement ||
         document.mozFullScreenElement ||
         document.msFullscreenElement || null;
}

function isFullscreenEnabled() {
  return Boolean(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  );
}

function isEmbeddedInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

// 建立帶有當前課堂進度的完整網址
function getStandaloneClassroomUrl(extraParams = {}) {
  const currentId = currentBriefing ? currentBriefing.id : "";
  const url = new URL("classroom.html", window.location.href);
  if (currentId) url.searchParams.set("id", currentId);
  url.searchParams.set("slide", currentSlideIndex);
  for (const [key, val] of Object.entries(extraParams)) {
    url.searchParams.set(key, val);
  }
  return url.toString();
}

// 浮動提示訊息（Toast）
function showClassroomToast(msg, duration = 3500) {
  let toast = document.getElementById("classroomToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "classroomToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 23, 42, 0.92);
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 999px;
      font-size: 1rem;
      font-weight: 800;
      z-index: 1000000;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
      backdrop-filter: blur(8px);
      border: 1.5px solid rgba(255,255,255,0.2);
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(10px)";
  }, duration);
}

// 切換擬真滿版全螢幕模式（適用於 iPad、Safari 或不支援全螢幕 API 之情境）
function toggleSimulatedFullscreen() {
  const isSim = document.body.classList.toggle("simulated-fullscreen");
  updateFullscreenBtnUI(isSim);
  if (isSim) {
    showClassroomToast("🖥️ Switched to full projection mode! Click the upper right button or press Esc to exit.");
  }
  return isSim;
}

// 更新按鈕圖示與標題
function updateFullscreenBtnUI(isFs) {
  const btn = document.querySelector(".c-icon-btn[aria-label='Full screen']");
  if (!btn) return;
  if (isFs) {
    btn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
      </svg>
    `;
    btn.title = "Exit full screen projection mode (Esc)";
  } else {
    btn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
      </svg>
    `;
    btn.title = "Toggle full-screen presentation";
  }
}

// 全螢幕切換主函式
window.toggleFullscreen = function() {
  if (window.SocialFocus) return window.SocialFocus.toggle();
  const inIframe = isEmbeddedInIframe();
  const fsEnabled = isFullscreenEnabled();
  const currentFs = getFullscreenElement() || document.body.classList.contains("simulated-fullscreen");

  // 若目前已在全螢幕或擬真全螢幕中，則執行退出
  if (currentFs) {
    if (document.body.classList.contains("simulated-fullscreen")) {
      document.body.classList.remove("simulated-fullscreen");
      updateFullscreenBtnUI(false);
      return;
    }
    const exitFs = document.exitFullscreen ||
                   document.webkitExitFullscreen ||
                   document.mozCancelFullScreen ||
                   document.msExitFullscreen;
    if (exitFs) {
      exitFs.call(document).catch(() => {
        document.body.classList.remove("simulated-fullscreen");
        updateFullscreenBtnUI(false);
      });
    } else {
      document.body.classList.remove("simulated-fullscreen");
      updateFullscreenBtnUI(false);
    }
    return;
  }

  // 情境 1：若在 Google 協作平台嵌入（iframe 且沒有 allowfullscreen 權限）
  // 瀏覽器安全機制會強制封鎖 requestFullscreen，此時直接在新分頁開啟獨立大螢幕投影，並同步展開擬真全螢幕
  if (inIframe && !fsEnabled) {
    const standaloneUrl = getStandaloneClassroomUrl({ fs: "1" });
    window.open(standaloneUrl, "_blank");
    showClassroomToast("📺 Full-screen projection mode has been enabled in a new independent tab (eliminating the borders of the collaboration platform)!");
    toggleSimulatedFullscreen();
    return;
  }

  // 情境 2：嘗試原生瀏覽器全螢幕 (支援 WebKit / Mozilla / MS 前綴)
  const docEl = document.documentElement;
  const requestFs = docEl.requestFullscreen ||
                    docEl.webkitRequestFullscreen ||
                    docEl.mozRequestFullScreen ||
                    docEl.msRequestFullscreen;

  if (requestFs) {
    try {
      const p = requestFs.call(docEl);
      if (p && p.catch) {
        p.catch(err => {
          console.warn("The native full-screen requirement is blocked (possibly due to iframe restrictions), switch to the backup mechanism:", err);
          if (inIframe) {
            const standaloneUrl = getStandaloneClassroomUrl({ fs: "1" });
            window.open(standaloneUrl, "_blank");
            showClassroomToast("📺 Full screen projection mode has been enabled in a new independent tab!");
          }
          toggleSimulatedFullscreen();
        });
      }
    } catch (err) {
      console.warn("Call full screen API exception, switch to full screen version:", err);
      toggleSimulatedFullscreen();
    }
  } else {
    // iPadOS / iOS Safari 不支援 HTML 全螢幕 API，直接啟用擬真滿版
    toggleSimulatedFullscreen();
  }
};

// 監聽原生全螢幕狀態變化 (跨瀏覽器事件)
["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(evtName => {
  document.addEventListener(evtName, () => {
    const isFs = Boolean(getFullscreenElement());
    updateFullscreenBtnUI(isFs);
    if (!isFs && document.body.classList.contains("simulated-fullscreen")) {
      document.body.classList.remove("simulated-fullscreen");
    }
  });
});

// 鍵盤左右鍵 / 空白鍵換頁與快速鍵
function setupKeyboard() {
  document.addEventListener("keydown", (e) => {
    if (e.target.closest('.mft-ui, .mft-editor')) return;
    if (e.target.closest('[role="dialog"], .teacher-modal-overlay, [contenteditable="true"]')) return;
    if (e.key === " " && e.target.closest('button, a, summary, [role="button"]')) return;
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT")) {
      return;
    }
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "f" || e.key === "F") {
      window.toggleFullscreen();
    } else if (e.key === "Escape" && document.body.classList.contains("simulated-fullscreen")) {
      document.body.classList.remove("simulated-fullscreen");
      updateFullscreenBtnUI(false);
    }
  });
}

// 頁面初始化
document.addEventListener("DOMContentLoaded", initClassroom);

// The English edition uses English browser voices, never Mandarin recordings.
getBestTextbookVoice = preferredGender => window.SiteLanguage.englishVoice(preferredGender);
