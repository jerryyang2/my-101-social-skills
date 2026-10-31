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
      title: "Getting to know new classmates and establishing a sense of security",
      unit: "Ice-breaking and routine establishment at the beginning of school",
      summary: "Say hello loudly, look at the other person's eyebrows and smile.",
      iepGoal: "Able to make corresponding social behaviors within 30 seconds under visual prompts, with an achievement rate of more than 80%.",
      regularClassTip: "Prompt formulas and publicly acknowledge student progress.",
      homeTask: { action: "Demonstrate today’s superpower to your family!", checkText: "Parent signature" },
      visualCard: { title: "Vitality greeting super power", steps: [{ num: 1, text: "Stop and look at each other" }, { num: 2, text: "Say good morning with a loud smile" }] }
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
      rainBtn.querySelector('.calm-button-label').textContent = "Play Rain Sounds";
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
      { name: 'inhale', label: "Breathe in slowly", hint: "Imagine smelling a flower. Let your tummy rise.", icon: '<path d="M24 25v19m0-7 11-6m-11 1-10-5" stroke="#287b54" stroke-width="4" fill="none"/><path d="M24 8c-12-11-18 6-9 11-8 10 5 19 12 10 11 6 19-8 10-15 1-10-10-13-13-6Z" fill="#f4abc5" stroke="#b95783" stroke-width="2"/><circle cx="25" cy="19" r="6" fill="#ffdc75" stroke="#9d7427" stroke-width="2"/>' },
      { name: 'hold', label: "Hold gently", hint: "Like a turtle in its shell, pause gently.", icon: '<circle cx="24" cy="24" r="20" fill="#fff0b8" stroke="#ac7d20" stroke-width="2"/><rect x="15" y="13" width="6" height="22" rx="2" fill="#89621b"/><rect x="27" y="13" width="6" height="22" rx="2" fill="#89621b"/>' },
      { name: 'exhale', label: "Breathe out slowly", hint: "Blow out gently, like a birthday candle. Relax your shoulders.", icon: '<circle cx="24" cy="24" r="21" fill="#e1f1ff"/><path d="M5 18h26c10 0 9-13 1-10m-25 17h31m-29 7h20c11 0 11 13 2 10" fill="none" stroke="#2879a6" stroke-width="4" stroke-linecap="round"/>' }
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
        subText.innerText = breathingMode === "natural" ? "Follow your own comfortable breathing. Matching the seconds is optional; stop whenever needed." : phase.hint;
        if (previousPhase !== -1) {
          if (state.phase === 2 && !window.LearningSupport?.quiet()) CalmAudio.playBowl();
          else CalmAudio.playChime();
        }
        previousPhase = phaseKey;
      }
      if (state.remaining !== previousSeconds) {
        seconds.textContent = state.remaining;
        countdown.setAttribute('aria-label', `${phase.label}, ${state.remaining} seconds left`);
        previousSeconds = state.remaining;
      }
      if (breathingCycleCount !== initialCount + state.cycles) {
        breathingCycleCount = initialCount + state.cycles;
        if (countEl) countEl.innerText = `${breathingCycleCount} breathing cycles`;
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
    document.getElementById('pauseBreathBtn').textContent = "Pause halo";
    startBreathingCycle();
  };
  window.toggleBreathingPractice = function() {
    if(breathingTimer) { stopBreathingCycle(); document.getElementById('pauseBreathBtn').textContent = "Resume halo"; }
    else { startBreathingCycle(); document.getElementById('pauseBreathBtn').textContent = "Pause halo"; }
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
    if (btn) btn.innerText = "⏸️ Pause Timer";

    if (sensoryInterval) clearInterval(sensoryInterval);
    sensoryInterval = setInterval(() => {
      if (sensorySecondsLeft > 0) {
        sensorySecondsLeft--;
        updateSensoryTimerDisplay();
      } else {
        pauseSensoryTimer();
        document.getElementById('sensoryTimerText').textContent = "Time is up. You can continue resting.";
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
    if (btn) btn.innerText = "▶️ Start Timer";
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
      statusText.innerText = `Progress: ${checkedCount} / 5`;
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
        btn.querySelector('.calm-button-label').textContent = isPlaying ? "Stop Rain Sounds" : "Play Rain Sounds";
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
              <h2 id="calmCornerTitle">Calm Corner - Rest and Expressing Needs</h2>
              <p class="calm-heading-subtitle">Choose a suitable practice or simply rest. Completing everything is not required.</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCalmCornerModal()" title="Close">✕</button>
        </div>

        <div class="calm-tabs-nav" role="group" aria-label="Select calming exercises and background sounds">
          <button id="calmTabBtn-breathe" class="calm-tab-btn active" aria-pressed="true" onclick="switchCalmTab('breathe')"><span aria-hidden="true">🌊</span><span class="calm-button-label">Breathing and rest</span></button>
          <button id="calmTabBtn-timer" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('timer')"><span aria-hidden="true">⏳</span><span class="calm-button-label">Visual Timer</span></button>
          <button id="calmTabBtn-grounding" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('grounding')"><span aria-hidden="true">🖐️</span><span class="calm-button-label">5-4-3-2-1 Grounding</span></button>
          <button id="calmRainToggleBtn" class="calm-tab-btn rain-btn" aria-pressed="false" onclick="toggleCalmRain()"><span aria-hidden="true">🌧️</span><span class="calm-button-label">Play Rain Sounds</span></button>
        </div>

        <div class="calm-modal-body">
          <!-- Tab 1: 4-7-8 呼吸光環 -->
          <div id="calmTabPane-breathe" class="calm-tab-pane">
            <div class="calm-breath-controls">
              <button type="button" id="naturalBreathBtn" aria-pressed="true" onclick="setBreathingMode('natural')">Natural breathing</button>
              <button type="button" id="timedBreathBtn" aria-pressed="false" onclick="setBreathingMode('478')">4-7-8 (optional)</button>
              <button type="button" id="pauseBreathBtn" onclick="toggleBreathingPractice()">Pause halo</button>
            </div><div class="breathing-arena">
              <div class="breathing-bubble-container">
                <div id="breathingBubble" class="breathing-bubble inhale" aria-hidden="true">
                  <div class="bubble-inner-glow"></div>
                  <span class="breathing-turtle">🐢</span>
                </div>
              </div>
              <div class="breathing-text-area">
                <div class="breathing-instruction-row">
                  <div id="breathingInstruction" class="breathing-main-text" role="status" aria-live="polite">Breathe in slowly</div>
                  <div id="breathingCountdown" class="breathing-countdown" role="timer" aria-live="off"><strong id="breathingSeconds">4</strong><span>seconds</span></div>
                </div>
                <div id="breathingSubInstruction" class="breathing-sub-text">Imagine smelling a flower. Let your tummy rise.</div>
                <div id="breathingCycleCounter" class="breathing-cycle-pill">0 deep breaths completed</div>
              </div>
            </div>
            <div class="calm-tip-bar">
              🌿 You may watch the halo or simply rest. Do not force breath holding; stop and tell the teacher if uncomfortable.
            </div>
          </div>

          <!-- Tab 2: 視覺沙漏計時器 -->
          <div id="calmTabPane-timer" class="calm-tab-pane" style="display:none;">
            <div class="sensory-timer-card">
              <div class="timer-duration-pills">
                <button class="timer-pill" data-minutes="1" aria-pressed="false" onclick="setSensoryTimerDuration(1)">⏱️ 1 min · Quick pause</button>
                <button class="timer-pill active" data-minutes="3" aria-pressed="true" onclick="setSensoryTimerDuration(3)">⏱️ 3 min · Calm break</button>
                <button class="timer-pill" data-minutes="5" aria-pressed="false" onclick="setSensoryTimerDuration(5)">⏱️ 5 min · Longer break</button>
              </div>
              <div class="timer-display-huge" id="sensoryTimerText">03:00</div>
              <div class="sensory-progress-track">
                <div class="sensory-progress-fill" id="sensoryTimerFill" style="width:0%;"></div>
              </div>
              <div class="sensory-timer-actions">
                <button id="sensoryTimerToggleBtn" class="btn btn-primary" onclick="toggleSensoryTimer()">▶️ Start Timer</button>
                <button class="btn btn-outline" onclick="resetSensoryTimer()">🔄 Reset</button>
                <button class="btn btn-outline" onclick="CalmAudio.playBowl()">🔔 Play Chime</button>
              </div>
            </div>
          </div>

          <!-- Tab 3: 5-4-3-2-1 著陸法 -->
          <div id="calmTabPane-grounding" class="calm-tab-pane" style="display:none;">
            <div class="grounding-heading">
              <span>🖐️ Choose comfortable sensory practices. You can skip any you dislike.</span>
              <span id="groundingStatusText" style="color:#0284c7;">Progress: 0 / 5</span>
            </div>
            <div class="grounding-list">
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(5)">
                <span class="grounding-check" id="groundingCheck-5"></span>
                <span><strong>👁️ 5 things you can see:</strong>Find five blue or round objects.</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(4)">
                <span class="grounding-check" id="groundingCheck-4"></span>
                <span><strong>🖐️ 4 things you can feel:</strong>Touch four different surfaces.</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(3)">
                <span class="grounding-check" id="groundingCheck-3"></span>
                <span><strong>👂 3 things you can hear:</strong>Listen for three sounds.</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(2)">
                <span class="grounding-check" id="groundingCheck-2"></span>
                <span><strong>👃 2 things you can smell:</strong>Notice two gentle scents.</span>
              </button>
              <button type="button" class="grounding-item-box" aria-pressed="false" onclick="toggleGroundingCheck(1)">
                <span class="grounding-check" id="groundingCheck-1"></span>
                <span><strong>👅 1 slow breath:</strong>Feel your tummy rise and fall.</span>
              </button>
            </div>
          </div>

        </div>

        <div class="teacher-modal-footer">
          <span class="calm-footer-note">🛡️ Support first: Help the student feel calm before discussing the problem.</span>
          <button class="btn btn-outline" onclick="closeCalmCornerModal()">Back to Class</button>
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
    const levelNames = { independent:"Completed independently", visual:"Completed after a visual prompt", verbal:"Completed after a verbal prompt", model:"Completed after modelling / together", notyet:"Not completed yet", no_opportunity:"No opportunity / chose a break" };
    const contexts = { rehearsal:"Classroom rehearsal", class:"General classroom / school", home:"Home feedback" };
    const observations = records.length ? records.map(r => `• ${contexts[r.context]}：${r.target}；${levelNames[r.level]}。${r.note}`).join('\n') : "No observations have been entered for today. Add what actually happened; mastery is not determined yet.";
    const home = b.homeTask?.action || "Agree on a daily-life practice the learner wants to try. Report no opportunity too.";
    document.getElementById('commLineText').value = `[Social skills family communication draft]
Date: ${date}   Learner code: ${learner}
Lesson: ${b.title}
Practice focus: ${b.visualCard?.steps?.map(x=>x.text).join(' → ') || b.summary || ''}
Observations today:
${observations}
Suggested daily-life practice: ${home}
Please report: opportunity to try / no opportunity yet / support needed. Speech, pointing, gestures, observing first and taking a break are all welcome.`;
    document.getElementById('commIepText').value = `[IEP teaching observation draft - teacher review required before official use]
Date: ${date}   Learner code: ${learner}
Lesson: ${b.title}
Draft goal: ${b.iepGoal || b.superSkill || b.title}
Teaching plan: Stories, modelling, role play and worksheets may be used. The teacher should enter what actually took place.
Actual observations today:
${observations}
Generalization: Include only feedback actually received from school or home. If none has been received, record follow-up needed rather than assuming mastery.
Next adjustments: ______ (prompts, activities or environmental support)`;
    const slips = document.getElementById('commSlipsGrid');
    slips.innerHTML = `<div class="print-slip-card"><div class="slip-header">Social Skills Daily Life Practice Suggestion</div><div class="slip-title">${escapeText(b.title)}</div><div class="slip-body"><p>${escapeText(home)}</p><p>Feedback: □ Had an opportunity □ No opportunity yet □ More support requested</p><p>The learner’s response or needs: ________</p></div><div class="slip-footer">A signature does not establish mastery. The teacher can follow up on prompts and actual performance.</div></div>`.repeat(4);
    document.querySelectorAll('[onclick^="copyComm"]').forEach(button=>button.disabled=false);
    document.getElementById('commCopyStatus').textContent = records.length ? "Observations for the selected date and learner are included. Please review the wording." : "If no observations are available, leave the draft to be completed. Do not automatically describe teaching or mastery as established.";
  }
  window.refreshCommunicationDraft = updateCommunicationContent;
  async function copyCommText(id) {
    const el = document.getElementById(id);
    try { await navigator.clipboard.writeText(el.value); document.getElementById('commCopyStatus').textContent = "Draft copied. Review it before adding it to an official record."; }
    catch(e) { el.focus(); el.select(); document.getElementById('commCopyStatus').textContent = "Automatic copying is unavailable. The text is selected for manual copying."; }
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
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">Family Communication and IEP Observation Drafts</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#e0e7ff;">Based on actual observations. Teachers can edit and review before use.</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCommunicationModal()" title="Close">✕</button>
        </div>

        <div class="comm-draft-controls">
          <label>Learner code<select id="commLearner"><option value="yu">Yu 🦁</option><option value="he">He 🐼</option><option value="jia">Jia 🦊</option><option value="jun">Jun 🐻</option></select></label>
          <label>Observation date<input id="commDate" type="date"></label>
          <button type="button" onclick="refreshCommunicationDraft()">Regenerate from the selected records</button>
          <button type="button" onclick="closeCommunicationModal(); LearningSupport.openObservations()">Enter teaching observations</button>
        </div><p id="commCopyStatus" role="status"></p>
        <div class="comm-modal-body">
          <!-- 左欄：LINE文字與IEP草稿 -->
          <div class="comm-col-left">
            <div class="comm-section-title">
              <span>💬 1. Contact book/LINE teacher notification text (one-click copy)</span>
              <button class="btn btn-sm btn-primary" onclick="copyCommLineText()">📋 Copy Text</button>
            </div>
            <textarea id="commLineText" aria-label="Editable family communication draft" class="comm-textarea" rows="8"></textarea>

            <div class="comm-section-title" style="margin-top:16px;">
              <span>📋 2. IEP observation draft for today (teacher review required)</span>
              <button class="btn btn-sm btn-outline" onclick="copyCommIepText()">📋 Copy Record</button>
            </div>
            <textarea id="commIepText" aria-label="Editable IEP observation draft" class="comm-textarea" rows="7"></textarea>
          </div>

          <!-- 右欄：4合1 列印小單預覽 -->
          <div class="comm-col-right">
            <div class="comm-section-title">
              <span>🖨️ 3. A4 4-in-1 physical contact slip (print 4 sheets on one page, cut and use, super paper saving)</span>
            </div>
            <div class="slips-preview-container" id="commSlipsGrid">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>

        <div class="teacher-modal-footer">
          <span style="font-size:0.85rem; color:#64748b;">Check the learner code, date, prompts and actual observations before copying.</span>
          <button class="btn btn-outline" onclick="printCommSlips()">Print four family slips per page</button><button class="btn btn-outline" onclick="closeCommunicationModal()">Done</button>
        </div>
      </div>
    `;
    document.body.appendChild(div);
    div.querySelectorAll('#commLearner,#commDate').forEach(control=>control.addEventListener('change',()=>{
      document.getElementById('commCopyStatus').textContent="The selection has changed. Regenerate the draft before copying.";
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

    document.getElementById('qbLessonTitle').innerText = b.custom?title:b.legacy?`Lesson ${ln} · ${title}`:`Week ${ln} · ${title}`;
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

    document.getElementById('qbAsdTip').innerText = b.scaffolds ? b.scaffolds.asd : "Provide structured visual steps and transformation reciprocals.";
    document.getElementById('qbEbdTip').innerText = b.scaffolds ? b.scaffolds.ebd : "Agree on the brain braking cooling off angle and token rewards.";
    document.getElementById('qbLdTip').innerText = b.scaffolds ? b.scaffolds.ld : "The whole process does not require heavy writing, and is mainly based on oral language and movement evaluation.";
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
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">Quick lesson preparation notes in 60 seconds before class · Instantly grasp the key points of teaching</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#fef3c7;" id="qbLessonTitle">Week 1·Meeting new classmates</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeQuickBriefingModal()" title="Close">✕</button>
        </div>

        <div class="qb-modal-body">
          <!-- 核心口訣卡 -->
          <div class="qb-highlight-card">
            <div style="font-weight:900; color:#92400e; font-size:0.95rem; margin-bottom:4px;">🎯 Our core moves:</div>
            <div style="font-size:1.25rem; font-weight:900; color:#b45309;" id="qbSkillTitle">Vitality greeting super power</div>
            <div class="qb-steps-row" id="qbStepsList">
              <!-- Rendered -->
            </div>
          </div>

          <!-- 課前道具檢核表 -->
          <div class="qb-section">
            <div class="qb-sec-title">🎒 Check the necessary teaching aids and props in the classroom (check before the bell rings):</div>
            <div class="qb-check-grid">
              <label class="qb-check-item"><input type="checkbox"> 4 character headgear/bracelet (Shiyu/Xiong Fei/Maohe/Hujia)</label>
              <label class="qb-check-item"><input type="checkbox"> Colored worksheets (1 A4/B4 per student)</label>
              <label class="qb-check-item"><input type="checkbox"> Calm corner visual hourglass and deep breathing chart in place</label>
              <label class="qb-check-item"><input type="checkbox"> Reward Star Token Seal and Ink Pad</label>
              <label class="qb-check-item"><input type="checkbox"> Large screen projection is turned on / electronic whiteboard is ready</label>
            </div>
          </div>

          <!-- 特教三大障礙防雷預警 -->
          <div class="qb-section">
            <div class="qb-sec-title">🛡️ Choose Supports to Match the Learner’s Needs:</div>
            <div class="qb-scaffold-row">
              <div class="qb-sc-box asd">
                <div class="qb-sc-title">🔹 Visual and communication support</div>
                <div class="qb-sc-desc" id="qbAsdTip">Forecast link switching in advance, do not suddenly change the order of activities; give a fixed location.</div>
              </div>
              <div class="qb-sc-box ebd">
                <div class="qb-sc-title">🔹 Emotional and sensory support</div>
                <div class="qb-sc-desc" id="qbEbdTip">Get vaccinated before losing the competition, and be prepared to brake and calm down at any time.</div>
              </div>
              <div class="qb-sc-box ld">
                <div class="qb-sc-title">🔹 Understanding and practical support</div>
                <div class="qb-sc-desc" id="qbLdTip">No need for paper and pen to copy, the whole process is mainly based on oral language and intuitive action answers.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="teacher-modal-footer">
          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary" onclick="closeQuickBriefingModal(); openWhiteboardModal();">🖥️ Turn on whiteboard large font move projection</button>
            <button class="btn btn-outline" onclick="closeQuickBriefingModal()">I got it, let’s start class!</button>
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

    document.getElementById('wbTopTitle').innerText = b.custom?title:b.legacy?`🏫 Social Skills Visual Step Card · Lesson ${ln}`:`🏫 Social Skills · Week ${ln}`;
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
          <span id="wbTopTitle" style="font-size:1.2rem; font-weight:900; color:#1e3a8a;">🏫 Social Super Power Visual Move Card</span>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-sm btn-primary" onclick="closeWhiteboardModal()">✕ Close Skill Whiteboard</button>
          </div>
        </div>
        <div class="whiteboard-content-area">
          <div class="wb-hero-skill" id="wbSkillName">Vitality greeting super power</div>
          <div class="wb-steps-grid" id="wbStepsGrid">
            <!-- Steps -->
          </div>
        </div>
        <div class="whiteboard-bottom-reminder">
          👀 Speak, point to pictures or watch a model first. Practise together, then receive specific teacher feedback.
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
