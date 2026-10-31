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
  { id: "yu", name: "宇", emoji: "🦁", classKey: "s-yu", cardKey: "card-yu", color: "#3b82f6" },
  { id: "he", name: "和", emoji: "🐼", classKey: "s-he", cardKey: "card-he", color: "#10b981" },
  { id: "jia", name: "嘉", emoji: "🦊", classKey: "s-jia", cardKey: "card-jia", color: "#f59e0b" },
  { id: "jun", name: "畯", emoji: "🐻", classKey: "s-jun", cardKey: "card-jun", color: "#8b5cf6" }
];

function classroomCompanion(studentName) {
  const companions = { "宇": "lion", "畯": "bear", "和": "panda", "嘉": "fox" };
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
      showClassroomToast("🖥️ 已進入獨立全頁投影模式！點擊右上方圖示或按 F 可切換全螢幕。");
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
  if (totalBadge) totalBadge.innerText = `共 ${total} 顆`;

  if (!widget) return;
  document.getElementById("starToggleBtn").setAttribute("aria-expanded", String(!isStarBarCollapsed));
  if (isStarBarCollapsed) {
    widget.classList.add("collapsed");
    if (icon) icon.innerText = "▼ 展開";
  } else {
    widget.classList.remove("collapsed");
    if (icon) icon.innerText = "▲ 收合";
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
        showClassroomToast("☁️ 已即時同步最新學生星星分數！");
      }
    }
    updateCloudStatusBadge("☁️ 雲端已連線");
  } catch (err) {
    console.warn("Cloud stars sync error:", err);
    updateCloudStatusBadge("⚠️ 離線暫存");
  }
}

// 推送最新星星分數至雲端資料庫
function syncPushCloudStars() {
  clearTimeout(pushDebounceTimer);
  updateCloudStatusBadge("☁️ 同步中...");
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
        updateCloudStatusBadge("☁️ 雲端已連線");
      }
    } catch (e) {
      console.warn("Cloud push error, cached locally:", e);
      updateCloudStatusBadge("⚠️ 離線暫存");
    }
  }, 250);
}

// 更新雲端狀態標籤顯示
function updateCloudStatusBadge(text) {
  const badge = document.getElementById("cloudSyncBadge");
  if (!badge) return;
  badge.innerText = text;
  if (text.includes("離線")) {
    badge.style.background = "#fff1f2";
    badge.style.color = "#9f1239";
    badge.style.borderColor = "#fecdd3";
  } else if (text.includes("同步中")) {
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
        <button class="pill-btn pill-btn-minus" onclick="minusStudentStar('${s.id}')" title="為【${s.name}】扣除 1 顆星星">−</button>
        <span class="pill-stars" id="pillStars_${s.id}">⭐ ${studentStars[s.id] || 0}</span>
        <button class="pill-btn pill-btn-plus" onclick="addStudentStar('${s.id}')" title="為【${s.name}】增加 1 顆星星">+</button>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="students-bar-header">
      <div style="display:flex; align-items:center; gap:6px;">
        <span>🏫 OO國小學習教室</span>
        <span class="cloud-sync-badge" id="cloudSyncBadge" title="所有裝置自動即時雲端同步">☁️ 雲端連線</span>
      </div>
      <button class="star-panel-close-btn" onclick="toggleStarBar(event)" title="收合集點面板">✕ 完成收合</button>
    </div>
    <div class="students-bar-list">
      ${studentRows}
    </div>
    <div class="students-bar-footer">
      <button class="star-panel-btn-all" onclick="addStar()" title="全員（宇、和、嘉、畯）各獎勵 1 顆星星">🎉 全員各 +1 ⭐</button>
      <button class="star-panel-btn-reset" onclick="resetStudentStars()" title="將四位同學星星全部歸零">🔄 歸零</button>
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
        第 ${b.lessonNumber} 週 · ${formatCleanLessonTitle(b)} (${b.date})
      </option>
    `).join("");
    html += `</optgroup>`;
  }
  if (legacyWeeks.length > 0) {
    html += `<optgroup label="💡 特教備課靈感庫專題（第 53-101 課 · 共 49 堂）">`;
    html += legacyWeeks.map(b => `
      <option value="${b.id}" ${b.id === currentBriefing.id ? "selected" : ""}>
        第 ${b.lessonNumber} 課 [靈感庫] · ${b.title}
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
  { step: 1, name: "故事島冒險", time: "00-08分", icon: "📖" },
  { step: 2, name: "超能力招式", time: "08-16分", icon: "💡" },
  { step: 3, name: "角色大劇場", time: "16-26分", icon: "🎭" },
  { step: 4, name: "遊樂場實戰", time: "26-36分", icon: "🎮" },
  { step: 5, name: "榮譽頒獎台", time: "36-40分", icon: "🏆" }
];

// 渲染投影片
function renderSlide() {
  if (!currentBriefing) return;

  // 更新頂部資訊
  if (currentBriefing.legacy) {
    document.getElementById("lessonDayBadge").innerText = `💡 靈感專題 · 第 ${currentBriefing.lessonNumber} 課`;
  } else {
    document.getElementById("lessonDayBadge").innerText = `第 ${currentBriefing.lessonNumber} 週 · ${currentBriefing.date} (${currentBriefing.dayOfWeek})`;
  }
  document.getElementById("lessonTitleText").innerText = `${currentBriefing.unit} · ${formatCleanLessonTitle(currentBriefing)}`;
  document.getElementById("lessonTitleText").title = document.getElementById("lessonTitleText").innerText;

  // 渲染步驟指示圓點
  const dotsContainer = document.getElementById("slideDots");
  dotsContainer.innerHTML = slideStages.map((s, idx) => `
    <button type="button" class="step-dot ${idx === currentSlideIndex ? "active" : ""}" onclick="goToSlide(${idx})" ${idx === currentSlideIndex ? 'aria-current="step"' : ''} aria-label="第 ${s.step} 步：${s.name}，${s.time}">
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
    if (btn) btn.innerHTML = "🔊 依序示範 4 角色台詞";
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
  if (audioKey && (mode === "story" || mode === "question")) {
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

  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "雲哲", "雲希", "雲揚", "康康", "志偉", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
  const FEMALE_KEYWORDS = ["hsiaochen", "hsiaohan", "曉臻", "曉涵", "meijia", "美佳", "tingting", "婷婷", "sinji", "善怡", "sandy", "shelley", "flo", "grandma", "yaoyao", "yating", "雅婷", "hanhan", "涵涵", "female", "woman", "girl"];

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
      if (nameLower.includes("yunjhe") || nameLower.includes("雲哲")) score += 400; // 微軟最優質台灣男聲
      if (nameLower.includes("eddy")) score += 350; // Apple 最佳台灣男童/男孩聲
      if (nameLower.includes("rocko") || nameLower.includes("reed")) score += 300;
      if (nameLower.includes("yunxi") || nameLower.includes("kangkang")) score += 250;
    } else {
      if (nameLower.includes("hsiaochen") || nameLower.includes("曉臻")) score += 400; // 微軟最優質課本女聲
      if (nameLower.includes("hsiaohan") || nameLower.includes("曉涵")) score += 350;
      if (nameLower.includes("meijia") || nameLower.includes("美佳")) score += 300; // Apple 最佳台灣女聲
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
  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "雲哲", "雲希", "雲揚", "康康", "志偉", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
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
    showClassroomToast(`⚡ 語音速度已切換為 ${speed}x`);
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
    showClassroomToast(`🔤 課堂字級已切換為 ${Math.round(currentFontScale * 100)}%`);
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
      showClassroomToast("👦 已切換為：陽光活力男聲！");
    } else {
      showClassroomToast("🌸 已切換為：國語課本配音（溫柔女聲）！");
    }
  }
};

function speakSentenceQueue(text, mode, onComplete) {
  if (!window.speechSynthesis) {
    alert("您的瀏覽器尚未支援語音朗讀功能，建議使用最新版 Chrome、Edge 或 Safari 瀏覽器。");
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
  const rawParts = cleanText.split(/([。！？\n]+)/);
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
    utterance.lang = "zh-TW";
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
      console.warn("TTS 朗讀句子遇到狀況:", e);
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
      storyBtn.innerHTML = "⏹️ 停止朗讀故事";
      storyBtn.classList.add("speaking");
      storyBtn.style.background = "#fee2e2";
      storyBtn.style.color = "#991b1b";
    } else {
      storyBtn.innerHTML = "🔊 朗讀故事全文";
      storyBtn.classList.remove("speaking");
      storyBtn.style.background = "#fef08a";
      storyBtn.style.color = "#854d0e";
    }
  }

  if (questionBtn) {
    if (currentSpeechMode === "question") {
      questionBtn.innerHTML = "⏹️ 停止朗讀題目";
      questionBtn.classList.add("speaking");
      questionBtn.style.background = "#fee2e2";
      questionBtn.style.color = "#991b1b";
    } else {
      questionBtn.innerHTML = "🔊 朗讀提問";
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
    question: "如果你遇到這樣的情況，你的大腦會怎麼想？"
  };

  const formattedTitle = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.title) : story.title;
  const formattedContent = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.content) : story.content;
  const formattedQuestion = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.question) : story.question;

  container.innerHTML = `
    <div class="story-wrapper" id="storyCardWrapper">
      
      <!-- Top Action Bar -->
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; border-bottom:3px dashed #fed7aa; padding-bottom:12px; flex-wrap:wrap; gap:10px;">
        <span class="story-badge">📖 今日校園冒險情境故事</span>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <select id="voiceGenderSelector" onchange="changeVoiceGender(this.value)" style="padding:6px 12px; border-radius:10px; border:2px solid #fed7aa; font-size:0.9rem; font-weight:800; color:#78350f; background:#fff7ed; cursor:pointer;" title="切換國語課本配音風格">
            <option value="female" ${localStorage.getItem("preferred_tts_gender") !== "male" ? "selected" : ""}>🌸 國語課本配音（溫柔女聲）</option>
            <option value="male" ${localStorage.getItem("preferred_tts_gender") === "male" ? "selected" : ""}>👦 陽光活力男聲</option>
          </select>
          <button class="tts-btn" id="storyTtsBtn" onclick="toggleStorySpeech()" title="點擊直接朗讀故事全文（再次點擊暫停）">
            🔊 朗讀故事全文
          </button>
        </div>
      </div>

      <!-- Story Title -->
      <h2 class="story-title" onclick="toggleStorySpeech()" style="cursor:pointer;" title="點擊標題也可以直接朗讀故事喔！">
        ${formattedTitle}
      </h2>

      <!-- Story Body -->
      <div class="story-body" onclick="toggleStorySpeech()" style="cursor:pointer;" title="點擊故事文字也可以直接播放或暫停朗讀喔！">
        ${formattedContent}
      </div>

      <!-- Helper Tip -->
      <div style="font-size:0.88rem; color:#94a3b8; font-weight:800; display:flex; align-items:center; gap:6px; margin-top:-6px;">
        <span>💡 朗讀小提示：點擊右上角「朗讀故事全文」按鈕，或「直接點擊故事文字」，都可以隨時開始朗讀或暫停喔！</span>
      </div>

      <!-- Question Box -->
      <div class="story-question-box">
        <div class="story-question-icon">🤔</div>
        <div style="flex:1;">
          <div class="story-question-title">全班動動腦 · 課堂引導提問</div>
          <div class="story-question-text" onclick="speakQuestion()" style="cursor:pointer;" title="點擊題目文字也可以直接朗讀喔！">
            ${formattedQuestion}
          </div>
        </div>
        <button class="c-btn" id="questionTtsBtn" style="padding:8px 18px; font-size:0.95rem; background:#ecfdf5; border-color:#6ee7b7; color:#065f46; font-weight:900; white-space:nowrap;" onclick="speakQuestion()" title="點擊朗讀課堂引導題目">
          🔊 朗讀提問
        </button>
      </div>
    </div>

    <div style="margin-top:20px;">
      <button class="c-btn c-btn-primary" style="font-size:1.15rem; padding:12px 28px; box-shadow:0 4px 14px rgba(13,148,136,0.3);" onclick="nextSlide()">
        出發！學習今日超能力技巧 →
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
    <p class="slide-subtitle">${typeof toZhuyinHtml === "function" ? toZhuyinHtml("記住這三個超能力動作，你就是社交小達人！") : "記住這三個超能力動作，你就是社交小達人！"}</p>
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
        🎭 進入角色大劇場！ ›
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
    scenario: `在「${briefing.title}」的情境中，四位同學合作完成挑戰！`,
    roles: [
      { roleId: 1, name: "主角挑戰者", studentName: "宇", studentEmoji: "🦁", studentColor: "#3b82f6", action: "雙手自然垂放，看著對方的眼睛，深呼吸並清楚說出想法。", dialogue: "大家請看我！我有做好深呼吸，並且好好說出想法！", tip: "給予宇明確的視覺指令，肯定其開口表達的勇氣。" },
      { roleId: 2, name: "合作互動者", studentName: "畯", studentEmoji: "🐻", studentColor: "#8b5cf6", action: "克制急躁衝動，耐心聽完對方的陳述，給予溫和友善的具體回應。", dialogue: "我會配合大家的步調，一起遵守規則，不推擠不生氣！", tip: "引導畯練習傾聽與等待，以正向語言代替衝動。" },
      { roleId: 3, name: "暖心支持夥伴", studentName: "和", studentEmoji: "🐼", studentColor: "#10b981", action: "站在一旁提供所需圖卡或道具，點頭微笑，給予夥伴眼神打氣。", dialogue: "你們兩個配合得真好！有不懂的地方我隨時幫忙，我們一起完成！", tip: "引導和發揮安定同儕的後盾力量。" },
      { roleId: 4, name: "秩序引導者", studentName: "嘉", studentEmoji: "🦊", studentColor: "#f59e0b", action: "高舉今日挑戰達標牌，帶領全體同學大聲拍手三次，並在榮譽榜貼上金星。", dialogue: "太棒了！今天大家都有做到超能力動作，全員挑戰成功！", tip: "引導嘉練習正向肯定與主持回饋，凝聚向心力。" }
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
            <span class="rp-badge">🎭 今日四角色小劇場演練</span>
            <span style="font-size:0.9rem; font-weight:800; color:#64748b;">（宇🦁、畯🐻、和🐼、嘉🦊 全員任務）</span>
          </div>
          <div class="rp-scenario-text">
            <strong>🎬 今日情境：</strong>${formattedScenario}
          </div>
        </div>

        <!-- Theater Control Buttons -->
        <div class="rp-controls-bar">
          <button class="c-btn" id="playAllRolesBtn" onclick="speakAllRolesDialogue()" style="background:#fef08a; border-color:#eab308; color:#854d0e; font-weight:900;" title="點擊讓電腦依序示範 4 個角色的完整台詞">
            🔊 依序示範 4 角色台詞
          </button>
          <button class="c-btn" onclick="awardAllRoleplayStars()" style="background:#dcfce7; border-color:#22c55e; color:#15803d; font-weight:900;" title="為四位同學各頒發 1 顆榮譽星星">
            ⭐ 演練大成功！全員 +1 星
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
                  🎬 角色要做的事（動作與神情）：
                </div>
                <div class="rp-action-desc">
                  ${typeof toZhuyinHtml === "function" ? toZhuyinHtml(r.action) : r.action}
                </div>
              </div>

              <!-- Dialogue Box -->
              <div class="rp-section-box rp-dialogue-box">
                <div class="rp-label rp-dialogue-label">
                  💬 對話台詞（請大聲唸出）：
                </div>
                <div class="rp-speech-bubble" onclick="speakSingleRoleDialogue('${r.dialogue.replace(/'/g, "\\'")}', this)" style="cursor:pointer;" title="點擊這段文字也可以直接朗讀喔！">
                  ${typeof toZhuyinHtml === "function" ? toZhuyinHtml(r.dialogue) : r.dialogue}
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:6px;">
                  <button class="role-tts-btn" onclick="speakSingleRoleDialogue('${r.dialogue.replace(/'/g, "\\'")}', this, ${r.roleId || 1})">
                    🔊 示範這句台詞
                  </button>
                </div>
              </div>

              <!-- Special Education Tip -->
              <div class="rp-tip-box">
                💡 <strong>特教提示：</strong>${r.tip}
              </div>

            </div>

          </div>
        `).join("")}
      </div>

      <!-- Bottom Next Step Button -->
      <div style="display:flex; justify-content:center; margin-top:16px;">
        <button class="c-btn c-btn-primary" style="font-size:1.15rem; padding:12px 32px; font-weight:900;" onclick="nextSlide()">
          🎮 劇場演練完成，進入實戰遊戲！ ›
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
    btnElement.innerHTML = "⏹️ 正在示範中...";
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

  if (audioKey && roleId) {
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
    if (btn) btn.innerHTML = "🔊 依序示範 4 角色台詞";
    document.querySelectorAll(".rp-card").forEach(c => c.classList.remove("rp-card-speaking"));
    return;
  }

  stopSpeech();
  const rp = getDailyRoleplayData(currentBriefing);
  const btn = document.getElementById("playAllRolesBtn");
  if (btn) btn.innerHTML = "⏹️ 停止示範朗讀";
  isPlayingAllRoles = true;

  let currentRoleIdx = 0;

  function speakNextRole() {
    if (!isPlayingAllRoles) return;
    if (currentRoleIdx >= rp.roles.length) {
      isPlayingAllRoles = false;
      if (btn) btn.innerHTML = "🔊 依序示範 4 角色台詞";
      document.querySelectorAll(".rp-card").forEach(c => c.classList.remove("rp-card-speaking"));
      sfx.playChime();
      showClassroomToast("🎉 4 角色台詞示範完畢！換小朋友們上台演出囉！");
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

    const prefix = `${role.studentName}負責的${role.name}說：`;
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
  showClassroomToast("🌟 太棒了！四位角色大明星各獲得 1 顆榮譽星星！");
}

let currentGameTab = "decision"; // "decision" | "special"

window.switchGameTab = function(tab) {
  currentGameTab = tab;
  const contentArea = document.getElementById("slideMainContent");
  if (contentArea) renderSlideGame(contentArea);
};

// Slide 4: 課堂互動遊戲 (整合行為因果決策樹與主題專屬遊戲)
function renderSlideGame(container) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-master-wrapper";
  wrapper.style.cssText = "width:100%; display:flex; flex-direction:column; align-items:center;";

  wrapper.innerHTML = `
    <div style="display:flex; justify-content:center; gap:12px; margin-bottom:18px; flex-wrap:wrap;">
      <button class="c-btn ${currentGameTab === 'decision' ? 'c-btn-accent' : ''}" style="font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(0,0,0,0.08);" onclick="switchGameTab('decision')">
        🧭 社交情境行為抉擇分岔路 (CBT 決策樹)
      </button>
      <button class="c-btn ${currentGameTab === 'special' ? 'c-btn-accent' : ''}" style="font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(0,0,0,0.08);" onclick="switchGameTab('special')">
        🎮 主題技能專屬互動遊戲
      </button>
      <a class="c-btn" href="island-game.html" target="_blank" style="background:linear-gradient(135deg, #06b6d4, #0284c7); color:#fff; font-weight:900; font-size:1rem; padding:8px 22px; box-shadow:0 3px 8px rgba(6,182,212,0.25); text-decoration:none; display:inline-flex; align-items:center; gap:6px;" title="開啟 3D 社交群島冒險遊戲（IsleForge 概念，登陸本課專屬主題島與打倒觀念怪獸）">
        🏝️ 登陸 3D 冒險島
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
    prompt: `在「${currentBriefing.title}」的情境考驗中，如果是你，你會選擇哪一條行為路線？`,
    impulsive: {
      title: "💥 衝動發脾氣 / 拒絕配合",
      desc: "直接大聲吼叫、動手推人或生悶氣轉頭跑開",
      consequence: "❌ 行為後果：同學被嚇哭了、活動被迫暫停，大家心情都很糟，自己被扣除星星……好懊悔！",
      feedback: "⚠️ 衝動大腦噴火了！下次請試著踩住煞車、做三次深呼吸！"
    },
    super_skill: {
      title: `🌟 施展超能力：${currentBriefing.superSkill || '冷靜深呼吸，好好說出來'}`,
      desc: `大腦深呼吸踩煞車，運用「${currentBriefing.superSkill || '超能力'}」有禮貌地表達與行動`,
      consequence: "🎉 圓滿大成功！同儕看見你的成熟與尊重，全班熱烈為你拍手歡呼，全員獲得 1 顆金色榮譽星星！",
      feedback: "🏆 太棒了！理性大腦大獲全勝，成功掌握社交超能力！"
    }
  };

  box.innerHTML = `
    <h3 style="font-size:1.35rem; font-weight:900; color:#1e3a8a; margin-top:0;">🧭 社交情境行為抉擇分岔路 (Choice & Consequence)</h3>
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
          點擊體驗此行為後果 ➔
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
          點擊施展此社交超能力 ➔
        </div>
      </div>

    </div>

    <!-- Feedback Banner Area -->
    <div id="decisionFeedbackBox" style="width:100%; min-height:64px; border-radius:14px; padding:16px 20px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:1.1rem; font-weight:800; background:#f8fafc; border:2px dashed #cbd5e1; color:#64748b; transition:all 0.3s;">
      👉 請在上方點選卡片，觀察兩種不同行為帶來的連鎖反應！
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
        <div style="font-size:1.15rem; margin-bottom:4px;">${dt.impulsive ? dt.impulsive.consequence : "❌ 衝動行為導致朋友害怕難過，大家都受傷了！"}</div>
        <div style="font-size:0.95rem; opacity:0.85;">${dt.impulsive ? dt.impulsive.feedback : "⚠️ 請做三次深呼吸，踩住煞車！"}</div>
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
        <div style="font-size:1.25rem; margin-bottom:4px;">${dt.super_skill ? dt.super_skill.consequence : "🎉 施展超能力！大家開心為你鼓掌！"}</div>
        <div style="font-size:1rem; opacity:0.9;">${dt.super_skill ? dt.super_skill.feedback : "🏆 成功踩住煞車，全員獲得 1 顆星星！"}</div>
      </div>
    `;
    awardAllRoleplayStars();
  }
};

function buildSpecificThemedGame(gameWrapper) {
  if (currentBriefing.title.includes("情緒溫度計") || currentBriefing.title.includes("身體紅綠燈")) {
    buildThermometerGame(gameWrapper);
  } else if (currentBriefing.title.includes("烏龜") || currentBriefing.title.includes("深呼吸") || currentBriefing.title.includes("急救箱") || currentBriefing.title.includes("收心")) {
    buildBreathingGame(gameWrapper);
  } else if (currentBriefing.title.includes("眼神") || currentBriefing.title.includes("雷達") || currentBriefing.title.includes("放大鏡") || currentBriefing.title.includes("時光機") || currentBriefing.title.includes("紅花")) {
    buildRadarGame(gameWrapper);
  } else if (currentBriefing.title.includes("接力棒") || currentBriefing.title.includes("不搶話") || currentBriefing.title.includes("借用") || currentBriefing.title.includes("借物") || currentBriefing.title.includes("舉手") || currentBriefing.title.includes("悄悄話")) {
    buildTalkingStickGame(gameWrapper);
  } else if (currentBriefing.title.includes("音量") || currentBriefing.title.includes("鐘聲")) {
    buildVolumeGame(gameWrapper);
  } else if (currentBriefing.title.includes("我訊息") || currentBriefing.title.includes("感謝") || currentBriefing.title.includes("卡片") || currentBriefing.title.includes("願望")) {
    buildIMessageGame(gameWrapper);
  } else if (currentBriefing.title.includes("輸得起") || currentBriefing.title.includes("桌遊") || currentBriefing.title.includes("合作") || currentBriefing.title.includes("讚美") || currentBriefing.title.includes("原諒") || currentBriefing.title.includes("存錢筒") || currentBriefing.title.includes("授勳") || currentBriefing.title.includes("法官") || currentBriefing.title.includes("跨年") || currentBriefing.title.includes("派對") || currentBriefing.title.includes("最後一名") || currentBriefing.title.includes("大腦升級") || currentBriefing.title.includes("湯圓") || currentBriefing.title.includes("聖誕樹")) {
    buildHighFiveGame(gameWrapper);
  } else if (currentBriefing.title.includes("加入遊戲") || currentBriefing.title.includes("積木") || currentBriefing.title.includes("午餐") || currentBriefing.title.includes("排隊")) {
    buildJoinGameSimulator(gameWrapper);
  } else if (currentBriefing.title.includes("拒絕") || currentBriefing.title.includes("道歉") || currentBriefing.title.includes("不強求") || currentBriefing.title.includes("勇敢說不") || currentBriefing.title.includes("不公平") || currentBriefing.title.includes("我還在學") || currentBriefing.title.includes("變動") || currentBriefing.title.includes("禮物")) {
    buildRefusalGame(gameWrapper);
  } else {
    buildEmergencyGame(gameWrapper);
  }
}

// 遊戲 1: 互動情緒溫度計
function buildThermometerGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0f766e;">🌡️ 互動式情緒溫度計</h3>
    <p style="color:#64748b; font-size:0.95rem;">點擊不同的溫度等級，看小熊的心情與身體警報！</p>
    <div class="thermo-stage">
      <div class="thermo-tube">
        <div class="thermo-fluid" id="thermoFluid"></div>
      </div>
      <div class="avatar-display" id="avatarEmoji">😊</div>
      <div class="thermo-levels">
        <button class="thermo-btn" onclick="setThermo(1, '😊', '1分：平靜像吹微風，很放鬆')">🟢 1分：微風平靜</button>
        <button class="thermo-btn" onclick="setThermo(2, '🙂', '2分：有一點點奇怪，但還可以')">🟡 2分：小困惑</button>
        <button class="thermo-btn" onclick="setThermo(3, '😐', '3分：握拳、心跳變快，準備深呼吸')">🟠 3分：握拳警報！</button>
        <button class="thermo-btn" onclick="setThermo(4, '😠', '4分：很想大叫，快找冷靜角！')">🔴 4分：快要生氣</button>
        <button class="thermo-btn" onclick="setThermo(5, '🌋', '5分：火山大爆發，需要安靜抱抱')">💥 5分：火山大爆發</button>
      </div>
    </div>
    <div id="thermoFeedback" style="font-size:1.1rem; font-weight:700; color:#0f766e; min-height:30px;">
      請點選右邊溫度等級
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
    <h3 style="font-size:1.4rem; font-weight:800; color:#0d9488;">🐢 烏龜深呼吸引導器</h3>
    <p style="color:#64748b; font-size:0.95rem;">跟著圓圈放大吸氣、慢慢吐氣，幫大腦降溫！</p>
    <div class="breathing-box">
      <div class="breathe-circle" id="breatheCircle">
        <span id="breatheText">準備</span>
      </div>
      <button class="c-btn c-btn-primary" style="font-size:1.1rem; padding:10px 24px;" id="startBreatheBtn" onclick="toggleBreathing()">
        ▶️ 開始深呼吸循環
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
    text.innerText = "準備";
    btn.innerText = "▶️ 開始深呼吸循環";
    return;
  }

  isBreathing = true;
  btn.innerText = "⏹️ 結束呼吸";
  runBreatheCycle();
};

function runBreatheCycle() {
  if (!isBreathing) return;
  const circle = document.getElementById("breatheCircle");
  const text = document.getElementById("breatheText");

  // 吸氣 3秒
  sfx.playChime();
  circle.className = "breathe-circle expanding";
  text.innerText = "吸氣…… (1, 2, 3)";

  setTimeout(() => {
    if (!isBreathing) return;
    // 屏息 2秒
    text.innerText = "停住…… (放鬆)";
    setTimeout(() => {
      if (!isBreathing) return;
      // 吐氣 5秒
      circle.className = "breathe-circle shrinking";
      text.innerText = "慢慢吐氣…… 吹走蒲公英";
      setTimeout(() => {
        if (isBreathing) runBreatheCycle();
      }, 5000);
    }, 2000);
  }, 3000);
}

// 遊戲 3: 眼神雷達對焦
function buildRadarGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0284c7;">🎯 眼神雷達對焦挑戰</h3>
    <p style="color:#64748b; font-size:0.95rem;">不用盯著眼珠！點擊並注視同學眉心的小貼紙 3 秒鐘！</p>
    <div class="radar-screen">
      <div style="font-size:4.5rem; position:absolute; top:40px;">👦</div>
      <div class="radar-target" id="radarTarget" onclick="lockRadar()">
        ⭐
      </div>
    </div>
    <div id="radarStatus" style="font-size:1.1rem; font-weight:700; color:#0284c7;">
      點擊上方額頭眉心貼紙進行對焦
    </div>
  `;
}

window.lockRadar = function() {
  const target = document.getElementById("radarTarget");
  const status = document.getElementById("radarStatus");
  target.classList.add("locked");
  status.innerText = "⏳ 雷達充電中……維持注視眉心！";
  sfx.playPop();

  setTimeout(() => {
    target.classList.remove("locked");
    status.innerText = "🎉 嗶嗶！對焦成功！眼神很有禮貌！";
    sfx.playFanfare();
    addStar();
  }, 2500);
};

// 遊戲 4: 溝通接力棒
function buildTalkingStickGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0d9488;">🎤 溝通接力棒傳遞器</h3>
    <p style="color:#64748b; font-size:0.95rem;">點擊同學傳遞接力棒！拿到的人發言，其他人仔細聽！</p>
    <div class="talking-stage">
      <div class="player-seat holding" id="seat1" onclick="passStick(1)">
        <div class="stick-icon">🎤</div>
        <div style="font-weight:800;">【小明】正在說話</div>
      </div>
      <div class="player-seat" id="seat2" onclick="passStick(2)">
        <div class="stick-icon">👂</div>
        <div style="font-weight:800;">【小華】專心聽</div>
      </div>
      <div class="player-seat" id="seat3" onclick="passStick(3)">
        <div class="stick-icon">👂</div>
        <div style="font-weight:800;">【小美】專心聽</div>
      </div>
    </div>
    <div id="stickStatus" style="font-size:1.1rem; font-weight:700; color:#0d9488; margin-top:10px;">
      現在只有小明可以開口，其他人雙手放膝蓋！
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
      seat.querySelector("div:last-child").innerText = `【同學${i}】正在說話`;
    } else {
      seat.className = "player-seat";
      seat.querySelector(".stick-icon").innerText = "👂";
      seat.querySelector("div:last-child").innerText = `【同學${i}】專心聽`;
    }
  }
  document.getElementById("stickStatus").innerText = `棒子傳給了同學 ${seatNum}！全場安靜等待。`;
};

// 遊戲 5: 音量控制尺
function buildVolumeGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#3b82f6;">📢 音量切換大挑戰</h3>
    <p style="color:#64748b; font-size:0.95rem;">題目：<strong>「在圖書館找管理員借書」</strong>，應該使用幾號音量？</p>
    <div class="volume-track">
      <div class="volume-card" onclick="checkVolume(1)">
        <div style="font-size:2rem;">🐜</div>
        <div style="font-weight:800;">1號：悄悄話</div>
      </div>
      <div class="volume-card" onclick="checkVolume(2)">
        <div style="font-size:2rem;">🐱</div>
        <div style="font-weight:800;">2號：同桌聽</div>
      </div>
      <div class="volume-card" onclick="checkVolume(3)">
        <div style="font-size:2rem;">🐶</div>
        <div style="font-weight:800;">3號：全班發表</div>
      </div>
      <div class="volume-card" onclick="checkVolume(4)">
        <div style="font-size:2rem;">🦖</div>
        <div style="font-weight:800;">4號：操場大聲</div>
      </div>
    </div>
    <div id="volumeFeedback" style="font-size:1.1rem; font-weight:700; min-height:30px; margin-top:10px;">
      請選擇一個適當號碼
    </div>
  `;
}

window.checkVolume = function(num) {
  const fb = document.getElementById("volumeFeedback");
  if (num === 1 || num === 2) {
    sfx.playFanfare();
    fb.innerHTML = `🎉 答對了！在圖書館要用 ${num} 號安靜音量，不會吵到其他人！`;
    fb.style.color = "#10b981";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = `⚠️ ${num} 號太吵囉！圖書館會嚇到人，請再試試看！`;
    fb.style.color = "#ef4444";
  }
};

// 遊戲 8: 輸得起 High-Five 擊掌
function buildHighFiveGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#ca8a04;">✋ 輸得起大英雄·擊掌挑戰</h3>
    <p style="color:#64748b; font-size:0.95rem;">這局桌遊小明輸了，請點擊大金手跟他擊掌鼓勵！</p>
    <div style="cursor:pointer; font-size:6rem; transition:transform 0.2s;" onclick="highFive(this)">
      🖐️
    </div>
    <div id="hfText" style="font-size:1.3rem; font-weight:800; color:#ca8a04;">
      點擊上方手掌，跟贏家說：「這局好精采！」
    </div>
  `;
}

window.highFive = function(el) {
  el.style.transform = "scale(1.3) rotate(-10deg)";
  setTimeout(() => el.style.transform = "scale(1)", 200);
  sfx.playFanfare();
  document.getElementById("hfText").innerHTML = "🎉 擊掌成功！「這局好精采！下次我再挑戰你！」有風度加 100 分！";
  addStar();
};

// 遊戲 9: 魔法「我訊息」拼圖
function buildIMessageGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#1e40af;">🧩 魔法「我訊息」拼裝三積木</h3>
    <p style="color:#64748b; font-size:0.95rem;">點擊下方三塊積木，組合成有禮貌的魔法句子！</p>
    <div class="puzzle-board">
      <div class="puzzle-block block-blue" id="blk1" onclick="pickBlock(1)">【當你】拿走我的鉛筆</div>
      <div class="puzzle-block block-yellow" id="blk2" onclick="pickBlock(2)">【我覺得】很著急生氣</div>
      <div class="puzzle-block block-green" id="blk3" onclick="pickBlock(3)">【請你】先問我再拿</div>
    </div>
    <div id="puzzleResult" style="margin-top:16px; font-size:1.2rem; font-weight:800; color:#1e40af; background:white; padding:12px 20px; border-radius:12px; width:100%; max-width:650px;">
      👉 句子組合：請依序點選三個積木
    </div>
  `;
}

let picked = [];
window.pickBlock = function(idx) {
  sfx.playPop();
  if (!picked.includes(idx)) picked.push(idx);
  const texts = ["", "【當你】拿走我的筆", "【我覺得】很著急", "【請你】先問我"];
  const res = document.getElementById("puzzleResult");
  res.innerText = "👉 魔法咒語：" + picked.map(i => texts[i]).join(" ＋ ");

  if (picked.length === 3) {
    sfx.playFanfare();
    res.innerHTML = "🎉 組合成功！同學笑著說：『對不起，我下次會先問你！』衝突和平化解！";
    res.style.color = "#10b981";
    addStar();
  }
};

// 其他通用備援遊戲（加入遊戲模擬器）
function buildJoinGameSimulator(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#0f766e;">🤝 加入遊戲三步驟模擬器</h3>
    <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:550px; margin-top:12px;">
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(1, this)">1. 站在旁邊看同學玩什麼（不硬衝）</button>
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(2, this)">2. 等到遊戲暫停或換局的空檔</button>
      <button class="c-btn" style="padding:14px; font-size:1rem; text-align:left;" onclick="stepJoin(3, this)">3. 笑笑問：「請問我可以一起玩嗎？」</button>
    </div>
    <div id="joinStatus" style="font-size:1.1rem; font-weight:700; color:#0f766e; margin-top:14px;">請依序點選步驟</div>
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
      document.getElementById("joinStatus").innerText = "🎉 太棒了！同學說：「好啊，下一輪換你！」成功加入同儕遊戲！";
      addStar();
    }
  }
};

function buildRefusalGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#b45309;">🌱 面對拒絕·好氣度大考驗</h3>
    <p style="color:#64748b; font-size:0.95rem;">同學說：「現在球拍只有兩副，不行耶。」你該怎麼說？</p>
    <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:550px;">
      <button class="c-btn" onclick="checkRefusal(false, this)">😡 大叫：「你們都很討厭！」搶走球拍</button>
      <button class="c-btn" onclick="checkRefusal(true, this)">😊 微笑說：「好，那我等下一輪！」轉身去找別的玩</button>
      <button class="c-btn" onclick="checkRefusal(false, this)">😭 趴在地上哭</button>
    </div>
    <div id="refusalFb" style="font-size:1.1rem; font-weight:700; margin-top:12px;">請點選最好的回答</div>
  `;
}

window.checkRefusal = function(correct, btn) {
  const fb = document.getElementById("refusalFb");
  if (correct) {
    sfx.playFanfare();
    fb.innerHTML = "🎉 滿分！你展現了心理彈性大英雄的風度！同學覺得你超成熟！";
    fb.style.color = "#10b981";
    btn.style.background = "#dcfce7";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = "⚠️ 這樣做會讓大家更不想跟你玩喔，再選一次！";
    fb.style.color = "#ef4444";
  }
};

function buildEmergencyGame(box) {
  box.innerHTML = `
    <h3 style="font-size:1.4rem; font-weight:800; color:#b91c1c;">🆘 緊急求助 vs 愛告狀 分類大考驗</h3>
    <p style="color:#64748b; font-size:0.95rem;">情境：<strong>「同學跑步摔倒，膝蓋流血一直哭」</strong>，該怎麼做？</p>
    <div style="display:flex; gap:16px;">
      <button class="c-btn" style="padding:16px 24px; font-size:1.1rem;" onclick="checkEmer(false)">自己解決不用理他</button>
      <button class="c-btn c-btn-primary" style="padding:16px 24px; font-size:1.1rem;" onclick="checkEmer(true)">立刻找老師或護理師！</button>
    </div>
    <div id="emerFb" style="font-size:1.1rem; font-weight:700; margin-top:12px;">請點選你的選擇</div>
  `;
}

window.checkEmer = function(correct) {
  const fb = document.getElementById("emerFb");
  if (correct) {
    sfx.playFanfare();
    fb.innerHTML = "🎉 答對了！有受傷或危險，必須立刻向師長求助，這不是告狀，是保護大家！";
    fb.style.color = "#10b981";
    addStar();
  } else {
    sfx.playPop();
    fb.innerHTML = "⚠️ 有人流血受傷很危險，一定要告訴老師！";
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
        <button class="btn-minus-star" style="background:#fee2e2; border-color:#fca5a5; color:#991b1b; font-weight:800;" onclick="minusStudentStar('${s.id}')" title="扣除 1 顆星星">−1 扣點</button>
        <button class="btn-add-star" onclick="addStudentStar('${s.id}')" title="獎勵 1 顆星星">+1 加點</button>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <h2 class="slide-title" style="color:#ca8a04;">🏆 課堂榮譽榜·星星集點板</h2>
    <p class="slide-subtitle">只要做到今天的超能力動作，老師就能幫【宇、和、嘉、畯】蓋星星章！</p>
    
    <!-- 4 Student Scoreboard -->
    <div class="student-scoreboard">
      ${cardsHtml}
    </div>

    <!-- Management Tools -->
    <div style="display:flex; justify-content:center; gap:16px; margin-top:20px; flex-wrap:wrap;">
      <a class="c-btn" href="worksheet.html?id=${currentBriefing.id}" target="_blank" style="background:#fef08a; border-color:#eab308; color:#854d0e; font-weight:900;">
        📄 開啟今日彩色圖文學習單
      </a>
      <button class="c-btn" style="background:#fef2f2; border-color:#fecaca; color:#991b1b;" onclick="resetStudentStars()">
        🎁 獎勵兌換完畢（星星歸零）
      </button>
      <a class="c-btn" href="index.html" data-return-to-prep>
        📋 返回備課平台首頁
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
  if (confirm("確定要將【宇、和、嘉、畯】四位同學的星星全部歸零（換取實體獎勵）嗎？")) {
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
    showClassroomToast("🖥️ 已切換為滿版投影模式！點擊右上角按鈕或按 Esc 可退出。");
  }
  return isSim;
}

// 更新按鈕圖示與標題
function updateFullscreenBtnUI(isFs) {
  const btn = document.querySelector(".c-icon-btn[aria-label='全螢幕']");
  if (!btn) return;
  if (isFs) {
    btn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
      </svg>
    `;
    btn.title = "退出全螢幕投影模式 (Esc)";
  } else {
    btn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
      </svg>
    `;
    btn.title = "切換全螢幕投影模式";
  }
}

// 全螢幕切換主函式
window.toggleFullscreen = function() {
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
    showClassroomToast("📺 已在獨立新分頁開啟全螢幕投影模式（消除協作平台邊框）！");
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
          console.warn("原生全螢幕要求受阻 (可能是 iframe 限制)，切換備援機制:", err);
          if (inIframe) {
            const standaloneUrl = getStandaloneClassroomUrl({ fs: "1" });
            window.open(standaloneUrl, "_blank");
            showClassroomToast("📺 已在獨立新分頁開啟全螢幕投影模式！");
          }
          toggleSimulatedFullscreen();
        });
      }
    } catch (err) {
      console.warn("呼叫全螢幕 API 異常，切換擬真滿版:", err);
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
