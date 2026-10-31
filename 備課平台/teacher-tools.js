// teacher-tools.js
// 特教教師實務專業工具箱 (Special Education Teacher Practical Toolkit)
// 1. 🚨 急性情緒冷靜通道 (Emergency Calm Corner & Sensory De-escalation Toolkit)
// 2. 📝 親師聯絡單 & IEP 紀錄一鍵生成器 (Parent Note & IEP Progress Slip Generator)
// 3. ⚡ 課前 60 秒極速備課卡 (Quick 60s Briefing Card & Materials Checklist)
// 4. 🖥️ 白板大字版招式投影 (Whiteboard High-Contrast Giant Projection Card)

(function(window) {
  'use strict';

  function breathingState(elapsed, mode = "478") {
    const elapsedSeconds = Math.max(0, elapsed) / 1000;
    const natural = mode === "natural";
    const cycleTime = elapsedSeconds % (natural ? 7 : 19);
    const phase = natural ? (cycleTime < 3 ? 0 : 2) : cycleTime < 4 ? 0 : cycleTime < 11 ? 1 : 2;
    const duration = (natural ? [3, 0, 4] : [4, 7, 8])[phase];
    const progress = (cycleTime - (natural ? [0, 3, 3] : [0, 4, 11])[phase]) / duration;
    return { phase, remaining: Math.ceil(duration * (1 - progress)), scale: phase === 0 ? .6 + .4 * progress : phase === 1 ? 1 : 1 - .4 * progress, cycles: Math.floor(elapsedSeconds / (natural ? 7 : 19)) };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { breathingState };
  if (typeof document === 'undefined') return;

  const teacherFocus = new WeakMap();
  function focusTeacherDialog(modal) {
    if (!teacherFocus.has(modal)) teacherFocus.set(modal, document.activeElement);
    const content = modal.querySelector('.teacher-modal-content,.whiteboard-modal-fullscreen') || modal;
    content.setAttribute('role','dialog'); content.setAttribute('aria-modal','true');
    const heading = content.querySelector('h2,#wbTopTitle');
    if(heading){heading.id ||= modal.id+'Title';content.setAttribute('aria-labelledby',heading.id);}
    document.body.classList.add('teacher-dialog-open');
    content.querySelector('button,input,select,textarea')?.focus();
  }
  function restoreTeacherFocus(modal) {
    document.body.classList.remove('teacher-dialog-open');
    teacherFocus.get(modal)?.focus(); teacherFocus.delete(modal);
  }
  document.addEventListener('keydown', e => {
    const modal = [...document.querySelectorAll('.teacher-modal-overlay')].find(x=>x.style.display==='flex');
    if(!modal || modal.id==='calmCornerModal') return;
    if(e.key==='Escape'){e.preventDefault();modal.querySelector('.modal-close-btn,button[onclick="closeWhiteboardModal()"]')?.click();}
    if(e.key==='Tab'){
      const controls=[...modal.querySelectorAll('button,input,select,textarea,a[href]')].filter(x=>!x.disabled && x.getClientRects().length);
      const first=controls[0],last=controls.at(-1);
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}
    }
  });

  // ==================== 1. Web Audio 舒緩音訊引擎 ====================
  const CalmAudio = {
    ctx: null,
    rainNode: null,
    rainGain: null,
    isRainPlaying: false,

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    // 播放 528Hz 舒緩音叉/頌缽調息音
    playBowl() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const overtone = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, now); // 432 Hz
        overtone.type = 'sine';
        overtone.frequency.setValueAtTime(864, now); // 八度泛音

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        osc.connect(gain);
        overtone.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        overtone.start(now);
        osc.stop(now + 3.5);
        overtone.stop(now + 3.5);
      } catch (e) {
        console.warn('Audio play error:', e);
      }
    },

    // 播放溫柔換氣提示音
    playChime() {
      if (window.LearningSupport?.quiet()) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.8);
      } catch (e) {}
    },

    // 合成舒緩自然細雨聲 (White Noise Filtered)
    toggleRain(callback) {
      this.init();
      if (!this.ctx) return;

      if (this.isRainPlaying) {
        this.stopRain();
        if (callback) callback(false);
      } else {
        this.startRain();
        if (callback) callback(true);
      }
    },

    startRain() {
      try {
        if (this.isRainPlaying) return;
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime); // 柔和低通

        this.rainGain = this.ctx.createGain();
        this.rainGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(this.rainGain);
        this.rainGain.connect(this.ctx.destination);

        whiteNoise.start(0);
        this.rainNode = whiteNoise;
        this.isRainPlaying = true;
      } catch (e) {
        console.warn('Rain audio error:', e);
      }
    },

    stopRain() {
      if (this.rainNode) {
        try {
          this.rainNode.stop();
          this.rainNode.disconnect();
        } catch (e) {}
        this.rainNode = null;
      }
      this.isRainPlaying = false;
    }
  };

  // ==================== 2. 冷靜通道核心邏輯 (Calm Corner Logic) ====================
  let breathingTimer = null;
  let breathingMode = "natural";
  let sensoryInterval = null;
  let sensorySecondsLeft = 180;
  let sensoryTotalSeconds = 180;
  let sensoryRunning = false;
  let breathingCycleCount = 0;
  let calmReturnFocus = null;

  // 取得當前課程資料
  function getCurrentLessonBriefing() {
    // 課堂投影以正在播放的課程為準，避免讀到備課頁的預設選課。
    if (typeof currentBriefing !== 'undefined' && currentBriefing) {
      return currentBriefing;
    }
    if (typeof window.getActiveBriefing === 'function') {
      const b = window.getActiveBriefing();
      if (b) return b;
    }
    if (window.currentBriefing) return window.currentBriefing;
    if (window.currentLesson) return window.currentLesson;
    if (typeof defaultBriefings !== 'undefined' && defaultBriefings.length > 0) {
      return defaultBriefings[0];
    }
    return {
      lessonNumber: 1,
      title: "認識新同學與建立安全感",
      unit: "開學破冰與常規建立",
      summary: "大聲打招呼，看著對方眉心微笑。",
      iepGoal: "能在視覺提示下30秒內做出相應社交行為，達成率80%以上。",
      regularClassTip: "提示口訣並公開肯定學生進步。",
      homeTask: { action: "向家人示範今日超能力！", checkText: "家長簽名" },
      visualCard: { title: "元氣問候超能力", steps: [{ num: 1, text: "停下腳步看著對方" }, { num: 2, text: "大聲微笑說早安" }] }
    };
  }

  // 開啟冷靜通道模態框
  window.openCalmCornerModal = function() {
    CalmAudio.init();
    let modal = document.getElementById('calmCornerModal');
    if (!modal) {
      createCalmCornerModalDOM();
      modal = document.getElementById('calmCornerModal');
    }
    calmReturnFocus = document.activeElement;
    document.body.classList.add('calm-corner-open');
    modal.style.display = 'flex';
    focusTeacherDialog(modal);
    switchCalmTab('breathe');
    document.getElementById('calmTabBtn-breathe').focus();
  };

  window.closeCalmCornerModal = function() {
    const modal = document.getElementById('calmCornerModal');
    if (modal) { modal.style.display = 'none'; restoreTeacherFocus(modal); }
    document.body.classList.remove('calm-corner-open');
    calmReturnFocus?.focus();
    stopBreathingCycle();
    pauseSensoryTimer();
    CalmAudio.stopRain();
    const rainBtn = document.getElementById('calmRainToggleBtn');
    if (rainBtn) {
      rainBtn.classList.remove('active');
      rainBtn.querySelector('.calm-button-label').textContent = '播放細雨白噪音';
      rainBtn.setAttribute('aria-pressed', 'false');
    }
  };

  // 切換冷靜功能分頁
  window.switchCalmTab = function(tabName) {
    const tabs = ['breathe', 'timer', 'grounding'];
    tabs.forEach(t => {
      const btn = document.getElementById(`calmTabBtn-${t}`);
      const pane = document.getElementById(`calmTabPane-${t}`);
      if (btn) {
        btn.classList.toggle('active', t === tabName);
        btn.setAttribute('aria-pressed', String(t === tabName));
      }
      if (pane) pane.style.display = (t === tabName) ? '' : 'none';
    });

    if (tabName === 'breathe') {
      startBreathingCycle();
    } else {
      stopBreathingCycle();
    }
  };

  // 4-7-8 呼吸光環控制 (吸氣 4s -> 停息 7s -> 呼氣 8s)
  function startBreathingCycle() {
    stopBreathingCycle();
    const bubble = document.getElementById('breathingBubble');
    const text = document.getElementById('breathingInstruction');
    const subText = document.getElementById('breathingSubInstruction');
    const countEl = document.getElementById('breathingCycleCounter');
    if (!bubble || !text) return;

    const seconds = document.getElementById('breathingSeconds');
    const countdown = document.getElementById('breathingCountdown');
    const phases = [
      { name: 'inhale', label: '慢慢吸氣', hint: '像是慢慢聞一朵香香的花，肚子鼓起來……', icon: '<path d="M24 25v19m0-7 11-6m-11 1-10-5" stroke="#287b54" stroke-width="4" fill="none"/><path d="M24 8c-12-11-18 6-9 11-8 10 5 19 12 10 11 6 19-8 10-15 1-10-10-13-13-6Z" fill="#f4abc5" stroke="#b95783" stroke-width="2"/><circle cx="25" cy="19" r="6" fill="#ffdc75" stroke="#9d7427" stroke-width="2"/>' },
      { name: 'hold', label: '屏住呼吸', hint: '小烏龜縮進殼裡，大腦踩住煞車……', icon: '<circle cx="24" cy="24" r="20" fill="#fff0b8" stroke="#ac7d20" stroke-width="2"/><rect x="15" y="13" width="6" height="22" rx="2" fill="#89621b"/><rect x="27" y="13" width="6" height="22" rx="2" fill="#89621b"/>' },
      { name: 'exhale', label: '慢慢吐氣', hint: '像是在輕輕吹熄生日蠟燭，肩膀放輕鬆……', icon: '<circle cx="24" cy="24" r="21" fill="#e1f1ff"/><path d="M5 18h26c10 0 9-13 1-10m-25 17h31m-29 7h20c11 0 11 13 2 10" fill="none" stroke="#2879a6" stroke-width="4" stroke-linecap="round"/>' }
    ];
    const startedAt = performance.now();
    const initialCount = breathingCycleCount;
    let previousPhase = -1;
    let previousSeconds = -1;
    function tick(now) {
      const state = breathingState(now - startedAt, breathingMode);
      const phaseKey = state.cycles * 3 + state.phase;
      const phase = phases[state.phase];
      bubble.style.transform = `scale(${state.scale})`;
      if (phaseKey !== previousPhase) {
        bubble.className = `breathing-bubble ${phase.name}`;
        text.innerHTML = `<svg class="breathing-phase-icon" viewBox="0 0 48 48" aria-hidden="true">${phase.icon}</svg><span>${phase.label}</span>`;
        subText.innerText = breathingMode === "natural" ? "照自己舒服的節奏，不必配合秒數，想停就停。" : phase.hint;
        if (previousPhase !== -1) {
          if (state.phase === 2 && !window.LearningSupport?.quiet()) CalmAudio.playBowl();
          else CalmAudio.playChime();
        }
        previousPhase = phaseKey;
      }
      if (state.remaining !== previousSeconds) {
        seconds.textContent = state.remaining;
        countdown.setAttribute('aria-label', `${phase.label}，剩餘 ${state.remaining} 秒`);
        previousSeconds = state.remaining;
      }
      if (breathingCycleCount !== initialCount + state.cycles) {
        breathingCycleCount = initialCount + state.cycles;
        if (countEl) countEl.innerText = `已完成 ${breathingCycleCount} 次深呼吸`;
      }
      breathingTimer = requestAnimationFrame(tick);
    }
    tick(startedAt);
  }

  function stopBreathingCycle() {
    if (breathingTimer) {
      cancelAnimationFrame(breathingTimer);
      breathingTimer = null;
    }
  }

  window.setBreathingMode = function(mode) {
    breathingMode = mode === '478' ? '478' : 'natural';
    document.getElementById('naturalBreathBtn').setAttribute('aria-pressed', String(breathingMode === 'natural'));
    document.getElementById('timedBreathBtn').setAttribute('aria-pressed', String(breathingMode === '478'));
    document.getElementById('pauseBreathBtn').textContent = '暫停光環';
    startBreathingCycle();
  };
  window.toggleBreathingPractice = function() {
    if(breathingTimer) { stopBreathingCycle(); document.getElementById('pauseBreathBtn').textContent = '繼續光環'; }
    else { startBreathingCycle(); document.getElementById('pauseBreathBtn').textContent = '暫停光環'; }
  };

  // 視覺沙漏計時器控制 (1 / 3 / 5 分鐘)
  window.setSensoryTimerDuration = function(minutes) {
    pauseSensoryTimer();
    document.querySelectorAll('.timer-pill').forEach(btn => {
      const selected = Number(btn.dataset.minutes) === minutes;
      btn.classList.toggle('active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    sensoryTotalSeconds = minutes * 60;
    sensorySecondsLeft = sensoryTotalSeconds;
    sensoryRunning = false;
    updateSensoryTimerDisplay();
  };

  window.toggleSensoryTimer = function() {
    if (sensoryRunning) {
      pauseSensoryTimer();
    } else {
      startSensoryTimer();
    }
  };

  function startSensoryTimer() {
    if (sensorySecondsLeft <= 0) sensorySecondsLeft = sensoryTotalSeconds;
    sensoryRunning = true;
    const btn = document.getElementById('sensoryTimerToggleBtn');
    if (btn) btn.innerText = '⏸️ 暫停計時';

    if (sensoryInterval) clearInterval(sensoryInterval);
    sensoryInterval = setInterval(() => {
      if (sensorySecondsLeft > 0) {
        sensorySecondsLeft--;
        updateSensoryTimerDisplay();
      } else {
        pauseSensoryTimer();
        document.getElementById('sensoryTimerText').textContent = '時間到了，可繼續休息';
      }
    }, 1000);
  }

  function pauseSensoryTimer() {
    sensoryRunning = false;
    if (sensoryInterval) {
      clearInterval(sensoryInterval);
      sensoryInterval = null;
    }
    const btn = document.getElementById('sensoryTimerToggleBtn');
    if (btn) btn.innerText = '▶️ 開始冷靜倒數';
  }

  window.resetSensoryTimer = function() {
    pauseSensoryTimer();
    sensorySecondsLeft = sensoryTotalSeconds;
    updateSensoryTimerDisplay();
  };

  function updateSensoryTimerDisplay() {
    const min = Math.floor(sensorySecondsLeft / 60);
    const sec = sensorySecondsLeft % 60;
    const timeStr = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    const display = document.getElementById('sensoryTimerText');
    if (display) display.innerText = timeStr;

    const fill = document.getElementById('sensoryTimerFill');
    if (fill) {
      const pct = ((sensoryTotalSeconds - sensorySecondsLeft) / sensoryTotalSeconds) * 100;
      fill.style.width = `${pct}%`;
    }
  }

  // 5-4-3-2-1 五感著陸法檢查
  window.toggleGroundingCheck = function(index) {
    const checkEl = document.getElementById(`groundingCheck-${index}`);
    if (!checkEl) return;
    const isChecked = checkEl.classList.toggle('checked');
    checkEl.closest('button').setAttribute('aria-pressed', String(isChecked));
    CalmAudio.playChime();

    // 檢查是否全部完成
    const all = document.querySelectorAll('.grounding-item-box .grounding-check');
    const checkedCount = document.querySelectorAll('.grounding-item-box .grounding-check.checked').length;
    const statusText = document.getElementById('groundingStatusText');
    if (statusText) {
      statusText.innerText = `完成進度：${checkedCount} / 5 項著陸挑戰`;
    }
    if (checkedCount === 5 && !window.LearningSupport?.quiet()) {
      CalmAudio.playBowl();
      if (typeof window.triggerConfetti === 'function') {
        window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 30);
      }
    }
  };

  window.toggleCalmRain = function() {
    CalmAudio.toggleRain((isPlaying) => {
      const btn = document.getElementById('calmRainToggleBtn');
      if (btn) {
        btn.classList.toggle('active', isPlaying);
        btn.querySelector('.calm-button-label').textContent = isPlaying ? '停止細雨白噪音' : '播放細雨白噪音';
        btn.setAttribute('aria-pressed', String(isPlaying));
      }
    });
  };

  // 建立冷靜通道 DOM
  function createCalmCornerModalDOM() {
    if (document.getElementById('calmCornerModal')) return;
    const div = document.createElement('div');
    div.id = 'calmCornerModal';
    div.className = 'teacher-modal-overlay';
    div.innerHTML = `
      <div class="teacher-modal-content calm-corner-modal" role="dialog" aria-modal="true" aria-labelledby="calmCornerTitle">
        <div class="teacher-modal-header" style="background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);">
          <div class="calm-heading">
            <span class="calm-heading-icon" aria-hidden="true">🧘</span>
            <div>
              <h2 id="calmCornerTitle">冷靜通道 · 休息與表達需要</h2>
              <p class="calm-heading-subtitle">可選擇適合的練習或只休息；不需要全部完成</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCalmCornerModal()" title="關閉">✕</button>
        </div>

        <div class="calm-tabs-nav" role="group" aria-label="選擇冷靜練習與背景聲音">
          <button id="calmTabBtn-breathe" class="calm-tab-btn active" aria-pressed="true" onclick="switchCalmTab('breathe')"><span aria-hidden="true">🌊</span><span class="calm-button-label">呼吸與休息</span></button>
          <button id="calmTabBtn-timer" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('timer')"><span aria-hidden="true">⏳</span><span class="calm-button-label">沉浸視覺沙漏</span></button>
          <button id="calmTabBtn-grounding" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('grounding')"><span aria-hidden="true">🖐️</span><span class="calm-button-label">5-4-3-2-1 著陸法</span></button>
          <button id="calmRainToggleBtn" class="calm-tab-btn rain-btn" aria-pressed="false" onclick="toggleCalmRain()"><span aria-hidden="true">🌧️</span><span class="calm-button-label">播放細雨白噪音</span></button>
        </div>

        <div class="calm-modal-body">
          <!-- Tab 1: 4-7-8 呼吸光環 -->
          <div id="calmTabPane-breathe" class="calm-tab-pane">
            <div class="calm-breath-controls">
              <button type="button" id="naturalBreathBtn" aria-pressed="true" onclick="setBreathingMode('natural')">自然呼吸</button>
              <button type="button" id="timedBreathBtn" aria-pressed="false" onclick="setBreathingMode('478')">4-7-8（選用）</button>
              <button type="button" id="pauseBreathBtn" onclick="toggleBreathingPractice()">暫停光環</button>
            </div><div class="breathing-arena">
              <div class="breathing-bubble-container">
                <div id="breathingBubble" class="breathing-bubble inhale" aria-hidden="true">
                  <div class="bubble-inner-glow"></div>
                  <span class="breathing-turtle">🐢</span>
                </div>
              </div>
              <div class="breathing-text-area">
                <div class="breathing-instruction-row">
                  <div id="breathingInstruction" class="breathing-main-text" role="status" aria-live="polite">慢慢吸氣</div>
                  <div id="breathingCountdown" class="breathing-countdown" role="timer" aria-live="off"><strong id="breathingSeconds">4</strong><span>秒</span></div>
                </div>
                <div id="breathingSubInstruction" class="breathing-sub-text">像是慢慢聞一朵香香的花，肚子鼓起來……</div>
                <div id="breathingCycleCounter" class="breathing-cycle-pill">已完成 0 次深呼吸</div>
              </div>
            </div>
            <div class="calm-tip-bar">
              🌿 可只看光環或休息，不勉強屏息；不舒服就停止並告訴老師。
            </div>
          </div>

          <!-- Tab 2: 視覺沙漏計時器 -->
          <div id="calmTabPane-timer" class="calm-tab-pane" style="display:none;">
            <div class="sensory-timer-card">
              <div class="timer-duration-pills">
                <button class="timer-pill" data-minutes="1" aria-pressed="false" onclick="setSensoryTimerDuration(1)">⏱️ 1 分鐘 (快速調息)</button>
                <button class="timer-pill active" data-minutes="3" aria-pressed="true" onclick="setSensoryTimerDuration(3)">⏱️ 3 分鐘 (常規冷靜)</button>
                <button class="timer-pill" data-minutes="5" aria-pressed="false" onclick="setSensoryTimerDuration(5)">⏱️ 5 分鐘 (深度著陸)</button>
              </div>
              <div class="timer-display-huge" id="sensoryTimerText">03:00</div>
              <div class="sensory-progress-track">
                <div class="sensory-progress-fill" id="sensoryTimerFill" style="width:0%;"></div>
              </div>
              <div class="sensory-timer-actions">
                <button id="sensoryTimerToggleBtn" class="btn btn-primary" onclick="toggleSensoryTimer()">▶️ 開始冷靜倒數</button>
                <button class="btn btn-outline" onclick="resetSensoryTimer()">🔄 重設</button>
                <button class="btn btn-outline" onclick="CalmAudio.playBowl()">🔔 鳴響頌缽</button>
              </div>
            </div>
          </div>

          <!-- Tab 3: 5-4-3-2-1 著陸法 -->
          <div id="calmTabPane-grounding" class="calm-tab-pane" style="display:none;">
            <div class="grounding-heading">
              <span>🖐️ 選擇舒服的感官練習；不喜歡的可以跳過：</span>
              <span id="groundingStatusText" style="color:#0284c7;">完成進度：0 / 5 項</span>
            </div>
            <div class="grounding-list">
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(5)">
                <span class="grounding-check" id="groundingCheck-5"></span>
                <span><strong>👁️ 5 樣看得到的東西：</strong>找 5 個藍色或圓圓的物品，指給老師看。</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(4)">
                <span class="grounding-check" id="groundingCheck-4"></span>
                <span><strong>🖐️ 4 種摸得到的觸感：</strong>摸桌子、衣服、水壺和椅背，感受觸感。</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(3)">
                <span class="grounding-check" id="groundingCheck-3"></span>
                <span><strong>👂 3 種聽得到的聲音：</strong>聽聽風扇、鳥鳴或老師說話的聲音。</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(2)">
                <span class="grounding-check" id="groundingCheck-2"></span>
                <span><strong>👃 2 種聞得到的氣味：</strong>聞聞手帕、書本或空氣的味道。</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(1)">
                <span class="grounding-check" id="groundingCheck-1"></span>
                <span><strong>👅 1 次深深的呼吸：</strong>手放肚皮，吸氣時鼓起，呼氣時放鬆。</span>
              </button>
            </div>
          </div>

        </div>

        <div class="teacher-modal-footer">
          <span class="calm-footer-note">🛡️ 特教心法：學生情緒失控時，先處理情緒、再處理問題；先冷靜降溫、不說教評判。</span>
          <button class="btn btn-outline" onclick="closeCalmCornerModal()">完成並返回課堂</button>
        </div>
      </div>
    `;
    div.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closeCalmCornerModal();
      } else if (event.key === 'Tab') {
        const buttons = [...div.querySelectorAll('button')].filter(button => button.getClientRects().length);
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    });
    document.body.appendChild(div);
  }


  // ==================== 3. 親師聯絡單 & IEP 紀錄一鍵生成器 ====================
  window.openCommunicationModal = function() {
    let modal = document.getElementById('communicationModal');
    if (!modal) {
      createCommunicationModalDOM();
      modal = document.getElementById('communicationModal');
    }
    document.getElementById('commDate').value = new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().split('T')[0];
    updateCommunicationContent();
    modal.style.display = 'flex';
    focusTeacherDialog(modal);
  };

  window.closeCommunicationModal = function() {
    const modal = document.getElementById('communicationModal');
    if (modal) { modal.style.display = 'none'; restoreTeacherFocus(modal); }
  };

  function escapeText(value) { return String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function updateCommunicationContent() {
    const b = getCurrentLessonBriefing();
    const learner = document.getElementById('commLearner').value;
    const date = document.getElementById('commDate').value;
    const records = (window.LearningSupport?.getRecords(b.id, learner) || []).filter(r => r.date === date);
    const levelNames = { independent:'獨立完成', visual:'圖卡提示後完成', verbal:'口語提示後完成', model:'示範／共同完成', notyet:'尚未完成', no_opportunity:'沒有機會／選擇休息' };
    const contexts = { rehearsal:'課堂演練', class:'普通班／校園', home:'家庭回饋' };
    const observations = records.length ? records.map(r => `• ${contexts[r.context]}：${r.target}；${levelNames[r.level]}。${r.note}`).join('\n') : '尚未填寫本日觀察，請依實際授課情形補寫；目前不判定已達標。';
    const home = b.homeTask?.action || '和孩子約定一個願意嘗試的生活練習；沒有機會也可回報。';
    document.getElementById('commLineText').value = `【社交技巧親師聯絡草稿】
日期：${date}　學生代號：${learner}
課程主題：${b.title}
練習重點：${b.visualCard?.steps?.map(x=>x.text).join(' → ') || b.summary || ''}
本日觀察：
${observations}
生活練習建議：${home}
請回饋：有機會嘗試／尚無機會／需要哪些協助。可用口語、指圖或動作表達，也可先觀察或休息。`;
    document.getElementById('commIepText').value = `【IEP 教學觀察草稿，送入正式紀錄前請教師覆核】
日期：${date}　學生代號：${learner}
課程：${b.title}
目標草稿：${b.iepGoal || b.superSkill || b.title}
教學規劃：可選用故事、技巧示範、角色演練及學習單；實際實施項目請教師補寫。
本日實際紀錄：
${observations}
生活類化：只列已收回的普通班／家庭回饋；沒有回饋時記為待追蹤，不推定已學會。
後續調整：＿＿＿＿（提示、活動或環境支持）`;
    const slips = document.getElementById('commSlipsGrid');
    slips.innerHTML = `<div class="print-slip-card"><div class="slip-header">社交技巧生活練習建議</div><div class="slip-title">${escapeText(b.title)}</div><div class="slip-body"><p>${escapeText(home)}</p><p>回饋：□ 有機會嘗試　□ 尚無機會　□ 希望再協助</p><p>孩子的回應或需要：＿＿＿＿＿＿＿＿</p></div><div class="slip-footer">不以簽章判定學生達標；教師可再追蹤提示與實際表現。</div></div>`.repeat(4);
    document.querySelectorAll('[onclick^="copyComm"]').forEach(button=>button.disabled=false);
    document.getElementById('commCopyStatus').textContent = records.length ? '已帶入所選日期與學生代號的觀察；請再覆核文字。' : '沒有觀察時保留待填，不自動寫成已實施或已達標。';
  }
  window.refreshCommunicationDraft = updateCommunicationContent;
  async function copyCommText(id) {
    const el = document.getElementById(id);
    try { await navigator.clipboard.writeText(el.value); document.getElementById('commCopyStatus').textContent = '已複製草稿，貼入正式紀錄前請再覆核。'; }
    catch(e) { el.focus(); el.select(); document.getElementById('commCopyStatus').textContent = '無法自動複製，文字已選取，請手動複製。'; }
  }
  window.copyCommLineText = () => copyCommText('commLineText');
  window.copyCommIepText = () => copyCommText('commIepText');

  window.printCommSlips = function() {
    document.body.classList.add('printing-slips-only');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-slips-only');
    }, 1200);
  };

  window.printWhiteboardCard = function() {
    document.body.classList.add('printing-whiteboard-only');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-whiteboard-only');
    }, 1200);
  };

  if (typeof window.addEventListener === 'function') {
    window.addEventListener('afterprint', () => {
      document.body.classList.remove('printing-slips-only');
      document.body.classList.remove('printing-whiteboard-only');
    });
  }

  function createCommunicationModalDOM() {
    if (document.getElementById('communicationModal')) return;
    const div = document.createElement('div');
    div.id = 'communicationModal';
    div.className = 'teacher-modal-overlay';
    div.innerHTML = `
      <div class="teacher-modal-content comm-modal">
        <div class="teacher-modal-header" style="background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.8rem;">📝</span>
            <div>
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">親師聯絡與 IEP 觀察草稿</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#e0e7ff;">依實際觀察整理；教師可編輯並覆核後使用</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCommunicationModal()" title="關閉">✕</button>
        </div>

        <div class="comm-draft-controls">
          <label>學生代號<select id="commLearner"><option value="yu">宇 🦁</option><option value="he">和 🐼</option><option value="jia">嘉 🦊</option><option value="jun">畯 🐻</option></select></label>
          <label>觀察日期<input id="commDate" type="date"></label>
          <button type="button" onclick="refreshCommunicationDraft()">依所選資料重新產生草稿</button>
          <button type="button" onclick="closeCommunicationModal(); LearningSupport.openObservations()">填寫教學觀察</button>
        </div><p id="commCopyStatus" role="status"></p>
        <div class="comm-modal-body">
          <!-- 左欄：LINE文字與IEP草稿 -->
          <div class="comm-col-left">
            <div class="comm-section-title">
              <span>💬 1. 聯絡簿 / LINE 親師通知文字（一鍵複製）</span>
              <button class="btn btn-sm btn-primary" onclick="copyCommLineText()">📋 複製文字</button>
            </div>
            <textarea id="commLineText" aria-label="可編輯的親師聯絡草稿" class="comm-textarea" rows="8"></textarea>

            <div class="comm-section-title" style="margin-top:16px;">
              <span>📋 2. IEP 本日觀察草稿（教師覆核後使用）</span>
              <button class="btn btn-sm btn-outline" onclick="copyCommIepText()">📋 複製紀錄</button>
            </div>
            <textarea id="commIepText" aria-label="可編輯的 IEP 觀察草稿" class="comm-textarea" rows="7"></textarea>
          </div>

          <!-- 右欄：4合1 列印小單預覽 -->
          <div class="comm-col-right">
            <div class="comm-section-title">
              <span>🖨️ 3. A4 4合1 實體聯絡單小條（一頁印4張，裁切即用超省紙）</span>
            </div>
            <div class="slips-preview-container" id="commSlipsGrid">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>

        <div class="teacher-modal-footer">
          <span style="font-size:0.85rem; color:#64748b;">請先核對學生代號、日期、提示程度與實際觀察，再複製使用。</span>
          <button class="btn btn-outline" onclick="printCommSlips()">列印4合1聯絡單</button><button class="btn btn-outline" onclick="closeCommunicationModal()">完成</button>
        </div>
      </div>
    `;
    document.body.appendChild(div);
    div.querySelectorAll('#commLearner,#commDate').forEach(control=>control.addEventListener('change',()=>{
      document.getElementById('commCopyStatus').textContent='所選資料已變更，請重新產生草稿後再複製。';
      div.querySelectorAll('[onclick^="copyComm"]').forEach(button=>button.disabled=true);
    }));
  }


  // ==================== 4. 課前 60 秒極速備課卡 & 白板大字版 ====================
  window.openQuickBriefingModal = function() {
    let modal = document.getElementById('quickBriefingModal');
    if (!modal) {
      createQuickBriefingModalDOM();
      modal = document.getElementById('quickBriefingModal');
    }
    updateQuickBriefingContent();
    modal.style.display = 'flex';
    focusTeacherDialog(modal);
  };

  window.closeQuickBriefingModal = function() {
    const modal = document.getElementById('quickBriefingModal');
    if (modal) { modal.style.display = 'none'; restoreTeacherFocus(modal); }
  };

  function updateQuickBriefingContent() {
    const b = getCurrentLessonBriefing();
    const ln = b.lessonNumber || 1;
    const checklist=document.getElementById('quickBriefingModal');
    if(checklist.dataset.lesson!==b.id){checklist.querySelectorAll('.qb-check-item input').forEach(x=>x.checked=false);checklist.dataset.lesson=b.id;}
    const title = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, '');
    const superSkill = (b.visualCard && b.visualCard.title) || b.superSkill || title;
    const steps = (b.visualCard && b.visualCard.steps) || [];

    document.getElementById('qbLessonTitle').innerText = b.custom?title:b.legacy?`第 ${ln} 課 · ${title}`:`第 ${ln} 週 · ${title}`;
    document.getElementById('qbSkillTitle').innerText = superSkill;

    const stepsEl = document.getElementById('qbStepsList');
    if (stepsEl) {
      stepsEl.innerHTML = steps.map(s => `
        <div class="qb-step-item">
          <span class="qb-step-num">${s.num}</span>
          <span class="qb-step-text">${s.text}</span>
        </div>
      `).join('');
    }

    document.getElementById('qbAsdTip').innerText = b.scaffolds ? b.scaffolds.asd : "提供結構化視覺步驟與轉換倒數。";
    document.getElementById('qbEbdTip').innerText = b.scaffolds ? b.scaffolds.ebd : "約定大腦煞車冷靜角與代幣獎勵。";
    document.getElementById('qbLdTip').innerText = b.scaffolds ? b.scaffolds.ld : "全流程免繁重書寫，以口語與動作評量為主。";
  }

  function createQuickBriefingModalDOM() {
    if (document.getElementById('quickBriefingModal')) return;
    const div = document.createElement('div');
    div.id = 'quickBriefingModal';
    div.className = 'teacher-modal-overlay';
    div.innerHTML = `
      <div class="teacher-modal-content qb-modal">
        <div class="teacher-modal-header" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%);">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.8rem;">⚡</span>
            <div>
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">課前 60 秒極速備課便籤 · 教學重點即時掌握</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#fef3c7;" id="qbLessonTitle">第 1 週 · 認識新同學</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeQuickBriefingModal()" title="關閉">✕</button>
        </div>

        <div class="qb-modal-body">
          <!-- 核心口訣卡 -->
          <div class="qb-highlight-card">
            <div style="font-weight:900; color:#92400e; font-size:0.95rem; margin-bottom:4px;">🎯 本堂核心招式：</div>
            <div style="font-size:1.25rem; font-weight:900; color:#b45309;" id="qbSkillTitle">元氣問候超能力</div>
            <div class="qb-steps-row" id="qbStepsList">
              <!-- Rendered -->
            </div>
          </div>

          <!-- 課前道具檢核表 -->
          <div class="qb-section">
            <div class="qb-sec-title">🎒 課堂必備教具道具檢核（上課鐘響前勾選）：</div>
            <div class="qb-check-grid">
              <label class="qb-check-item"><input type="checkbox"> 4 角色頭飾/手環 (獅宇/熊畯/貓和/狐嘉)</label>
              <label class="qb-check-item"><input type="checkbox"> 彩色學習單 (每生 1 張 A4/B4)</label>
              <label class="qb-check-item"><input type="checkbox"> 冷靜角視覺沙漏與深呼吸圖卡就位</label>
              <label class="qb-check-item"><input type="checkbox"> 獎勵星星代幣印章與印台</label>
              <label class="qb-check-item"><input type="checkbox"> 大螢幕已開啟投影 / 電子白板就緒</label>
            </div>
          </div>

          <!-- 特教三大障礙防雷預警 -->
          <div class="qb-section">
            <div class="qb-sec-title">🛡️ 依學生需要選用的教學支援：</div>
            <div class="qb-scaffold-row">
              <div class="qb-sc-box asd">
                <div class="qb-sc-title">🔹 視覺與溝通支援</div>
                <div class="qb-sc-desc" id="qbAsdTip">提前預告環節切換，勿突然更改活動順序；給予定點位置。</div>
              </div>
              <div class="qb-sc-box ebd">
                <div class="qb-sc-title">🔹 情緒與感官支援</div>
                <div class="qb-sc-desc" id="qbEbdTip">競賽失利前先打預防針，隨時準備大腦煞車冷靜角。</div>
              </div>
              <div class="qb-sc-box ld">
                <div class="qb-sc-title">🔹 理解與操作支援</div>
                <div class="qb-sc-desc" id="qbLdTip">免紙筆抄寫，全流程以口語和動作直覺作答為主。</div>
              </div>
            </div>
          </div>
        </div>

        <div class="teacher-modal-footer">
          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary" onclick="closeQuickBriefingModal(); openWhiteboardModal();">🖥️ 開啟白板大字版招式投影</button>
            <button class="btn btn-outline" onclick="closeQuickBriefingModal()">我知道了，開始上課！</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
  }


  // ==================== 5. 白板大字版招式投影 (Whiteboard High-Contrast Mode) ====================
  window.openWhiteboardModal = function() {
    let modal = document.getElementById('whiteboardModal');
    if (!modal) {
      createWhiteboardModalDOM();
      modal = document.getElementById('whiteboardModal');
    }
    updateWhiteboardContent();
    modal.style.display = 'flex';
    focusTeacherDialog(modal);
  };

  window.closeWhiteboardModal = function() {
    const modal = document.getElementById('whiteboardModal');
    if (modal) { modal.style.display = 'none'; restoreTeacherFocus(modal); }
  };

  function updateWhiteboardContent() {
    const b = getCurrentLessonBriefing();
    const ln = b.lessonNumber || 1;
    const title = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, '');
    const superSkill = (b.visualCard && b.visualCard.title) || b.superSkill || title;
    const steps = (b.visualCard && b.visualCard.steps) || [];

    document.getElementById('wbTopTitle').innerText = b.custom?title:b.legacy?`🏫 社交超能力視覺招式卡 · 第 ${ln} 課`:`🏫 社交超能力視覺招式卡 · 第 ${ln} 週`;
    document.getElementById('wbSkillName').innerText = superSkill;

    const grid = document.getElementById('wbStepsGrid');
    if (grid) {
      grid.innerHTML = steps.map(s => `
        <div class="wb-step-card">
          <div class="wb-step-number">${s.num}</div>
          <div class="wb-step-text-huge">${s.text}</div>
        </div>
      `).join('');
    }
  }

  function createWhiteboardModalDOM() {
    if (document.getElementById('whiteboardModal')) return;
    const div = document.createElement('div');
    div.id = 'whiteboardModal';
    div.className = 'teacher-modal-overlay whiteboard-overlay';
    div.innerHTML = `
      <div class="whiteboard-modal-fullscreen">
        <div class="whiteboard-topbar">
          <span id="wbTopTitle" style="font-size:1.2rem; font-weight:900; color:#1e3a8a;">🏫 社交超能力視覺招式卡</span>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-sm btn-primary" onclick="closeWhiteboardModal()">✕ 退出大字白板</button>
          </div>
        </div>
        <div class="whiteboard-content-area">
          <div class="wb-hero-skill" id="wbSkillName">元氣問候超能力</div>
          <div class="wb-steps-grid" id="wbStepsGrid">
            <!-- Steps -->
          </div>
        </div>
        <div class="whiteboard-bottom-reminder">
          👀 可以說、指圖或先看示範。一起練習，再由老師給具體回饋。
        </div>
      </div>
    `;
    document.body.appendChild(div);
  }

  // ==================== 6. 四位學生即時加星音效反饋 ====================
  window.awardLiveStar = function(studentId, studentName) {
    if (typeof window.addIndexChestStar === 'function') {
      window.addIndexChestStar(studentId);
    } else {
      const stars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');
      stars[studentId] = (stars[studentId] || 0) + 1;
      localStorage.setItem("student_stars", JSON.stringify(stars));
    }
    CalmAudio.playChime();
    if (typeof window.triggerConfetti === 'function') {
      window.triggerConfetti(event ? event.clientX : null, event ? event.clientY : null, 25);
    }
  };

  // 自動依據 URL hash 呼叫冷靜通道
  window.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#calm') {
      setTimeout(function() {
        if (typeof window.openCalmCornerModal === 'function') {
          window.openCalmCornerModal();
        }
      }, 350);
    }
  });

  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#calm') {
      if (typeof window.openCalmCornerModal === 'function') {
        window.openCalmCornerModal();
      }
    }
  });

})(typeof window === 'undefined' ? {} : window);
