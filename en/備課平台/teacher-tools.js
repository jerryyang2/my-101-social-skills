// teacher-tools.js
// 特教教師實務專業工具箱 (Special Education Teacher Practical Toolkit)
// 1. 🚨 急性情緒冷靜通道 (Emergency Calm Corner & Sensory De-escalation Toolkit)
// 2. 📝 親師聯絡單 & IEP 紀錄一鍵生成器 (Parent Note & IEP Progress Slip Generator)
// 3. ⚡ 課前 60 秒極速備課卡 (Quick 60s Briefing Card & Materials Checklist)
// 4. 🖥️ 白板大字版招式投影 (Whiteboard High-Contrast Giant Projection Card)

(function(window) {
  'use strict';

  function breathingState(elapsed) {
    const elapsedSeconds = Math.max(0, elapsed) / 1000;
    const cycleTime = elapsedSeconds % 19;
    const phase = cycleTime < 4 ? 0 : cycleTime < 11 ? 1 : 2;
    const duration = [4, 7, 8][phase];
    const progress = (cycleTime - [0, 4, 11][phase]) / duration;
    return { phase, remaining: Math.ceil(duration * (1 - progress)), scale: phase === 0 ? .6 + .4 * progress : phase === 1 ? 1 : 1 - .4 * progress, cycles: Math.floor(elapsedSeconds / 19) };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { breathingState };
  if (typeof document === 'undefined') return;

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
    switchCalmTab('breathe');
    document.getElementById('calmTabBtn-breathe').focus();
  };

  window.closeCalmCornerModal = function() {
    const modal = document.getElementById('calmCornerModal');
    if (modal) modal.style.display = 'none';
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
      const state = breathingState(now - startedAt);
      const phaseKey = state.cycles * 3 + state.phase;
      const phase = phases[state.phase];
      bubble.style.transform = `scale(${state.scale})`;
      if (phaseKey !== previousPhase) {
        bubble.className = `breathing-bubble ${phase.name}`;
        text.innerHTML = `<svg class="breathing-phase-icon" viewBox="0 0 48 48" aria-hidden="true">${phase.icon}</svg><span>${phase.label}</span>`;
        subText.innerText = phase.hint;
        if (previousPhase !== -1) {
          if (state.phase === 2) CalmAudio.playBowl();
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
        CalmAudio.playBowl();
        alert("🕊️ Cooling off time reached! You have successfully calmed your brain, take three deep breaths and prepare to return to class!");
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
    if (checkedCount === 5) {
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
              <h2 id="calmCornerTitle">Calm Corner · Sensory Support</h2>
              <p class="calm-heading-subtitle">Breathing · Visual timer · Grounding · Gentle rain sounds</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCalmCornerModal()" title="Close">✕</button>
        </div>

        <div class="calm-tabs-nav" role="group" aria-label="Select calming exercises and background sounds">
          <button id="calmTabBtn-breathe" class="calm-tab-btn active" aria-pressed="true" onclick="switchCalmTab('breathe')"><span aria-hidden="true">🌊</span><span class="calm-button-label">4-7-8 Breathing</span></button>
          <button id="calmTabBtn-timer" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('timer')"><span aria-hidden="true">⏳</span><span class="calm-button-label">Visual Timer</span></button>
          <button id="calmTabBtn-grounding" class="calm-tab-btn" aria-pressed="false" onclick="switchCalmTab('grounding')"><span aria-hidden="true">🖐️</span><span class="calm-button-label">5-4-3-2-1 Grounding</span></button>
          <button id="calmRainToggleBtn" class="calm-tab-btn rain-btn" aria-pressed="false" onclick="toggleCalmRain()"><span aria-hidden="true">🌧️</span><span class="calm-button-label">Play Rain Sounds</span></button>
        </div>

        <div class="calm-modal-body">
          <!-- Tab 1: 4-7-8 呼吸光環 -->
          <div id="calmTabPane-breathe" class="calm-tab-pane">
            <div class="breathing-arena">
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
              💡 <strong>Turtle Pause:</strong>Fast heartbeat or tight fists? Pause, breathe, count to ten, then speak calmly.
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
              <span>🖐️ Grounding: Notice what's around you.</span>
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
    updateCommunicationContent();
    modal.style.display = 'flex';
  };

  window.closeCommunicationModal = function() {
    const modal = document.getElementById('communicationModal');
    if (modal) modal.style.display = 'none';
  };

  function updateCommunicationContent() {
    const b = getCurrentLessonBriefing();
    const ln = b.lessonNumber || 1;
    const title = b.title || "";
    const cleanTitle = title.replace(/^【.*?】[——\-：:\s]*/, '');
    const superSkill = (b.visualCard && b.visualCard.title) || b.superSkill || cleanTitle;
    const regTip = b.regularClassTip || "Prompt formulas and publicly acknowledge student progress.";
    const homeAction = (b.homeTask && b.homeTask.action) || "Demonstrate today’s superpower to your family!";
    const iepGoal = b.iepGoal || "Able to make corresponding social behaviors within 30 seconds under visual prompts, with an achievement rate of more than 80%.";

    // 1. LINE / 聯絡簿文字版
    const lineText = `[OO Elementary School Learning Classroom · This week’s special education social superpower contact note]
Dear parents and class tutors:
This week the children were in the learning classroom for Week ${ln} Social Skills Lesson:
🌟 This week’s theme: [${cleanTitle}]
🎯 Core superpower: ${superSkill}
🏫 Ordinary class teacher integration formula: ${regTip}
🏠 This week’s family life check-in: ${homeAction}
💡 Parent-teacher reminder: Special education children need repeated practice and specific praise across situations. If the child takes the initiative to use this super power in class or at home, parents are asked to stamp their approval in the contact book. The child can return to the special education class next week to exchange for honorary stars! Thank you for your attentive company!`;

    const textEl = document.getElementById('commLineText');
    if (textEl) textEl.value = lineText;

    // 2. IEP 質性評量記錄草稿
    const iepRecord = `[Special Education Individualized Education Plan (IEP) Learning Goal Achievement Record]
• Assessment Unit: Week ${ln} · ${b.unit || "Social skills"} (${cleanTitle})
• Expected goal: ${iepGoal}
• Classroom implementation: Through 40 minutes of 5-step structured teaching, social story introduction, 3-step action formula drills and four-character live theater, students can understand the cause and effect of situations and try to make positive corresponding behaviors under visual prompts.
• Generalized assessment: General class tutors have been provided with key tips (${regTip}) for class reminders, and shared learning tasks for family life (${homeAction}) have been distributed for parents to sign to confirm the effectiveness of life practice, and continuous tracking of behavioral maintenance.`;

    const iepEl = document.getElementById('commIepText');
    if (iepEl) iepEl.value = iepRecord;

    // 3. 4合1 列印小條容器
    const slipsContainer = document.getElementById('commSlipsGrid');
    if (slipsContainer) {
      const singleSlipHtml = `
        <div class="print-slip-card">
          <div class="slip-header">
            <span>🌱 OO Elementary School Special Education Learning Classroom · Social Super Power Contact Card</span>
            <span class="slip-week">Week ${ln}</span>
          </div>
          <div class="slip-title">🎯 Today’s superpower: ${cleanTitle}</div>
          <div class="slip-body">
            <div><strong>🌟 Core moves formula:</strong>${superSkill}</div>
            <div><strong>🏫 The instructor’s original class reminds:</strong>${regTip}</div>
            <div class="slip-home-box">
              <strong>🏠 Family life check-in:</strong>${homeAction}
              <div class="slip-parent-sign">Parent’s seal/signature: [　　]</div>
            </div>
          </div>
          <div class="slip-footer">
            <span>✨ Complete the check-in next week to redeem special education honorary stars!</span>
            <span>💮 Teacher signature: [ ]</span>
          </div>
        </div>
      `;
      slipsContainer.innerHTML = singleSlipHtml.repeat(4);
    }
  }

  window.copyCommLineText = function() {
    const el = document.getElementById('commLineText');
    if (!el) return;
    navigator.clipboard.writeText(el.value).then(() => {
      alert("📋 The parent/tutor contact book text has been copied successfully! You can post it directly to the LINE tutor group or contact book!");
    });
  };

  window.copyCommIepText = function() {
    const el = document.getElementById('commIepText');
    if (!el) return;
    navigator.clipboard.writeText(el.value).then(() => {
      alert("📋 The draft IEP qualitative assessment record has been copied! It can be posted directly into the special education bulletin website or semester IEP meeting minutes!");
    });
  };

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
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">Family Notes & IEP Drafts</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#e0e7ff;">LINE/Contact Book Good Reading Edition · 4-in-1 paper-saving printing order · IEP Special Education Reporting Network Evaluation Draft</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCommunicationModal()" title="Close">✕</button>
        </div>

        <div class="comm-modal-body">
          <!-- 左欄：LINE文字與IEP草稿 -->
          <div class="comm-col-left">
            <div class="comm-section-title">
              <span>💬 1. Contact book/LINE teacher notification text (one-click copy)</span>
              <button class="btn btn-sm btn-primary" onclick="copyCommLineText()">📋 Copy Text</button>
            </div>
            <textarea id="commLineText" class="comm-textarea" rows="8" readonly></textarea>

            <div class="comm-section-title" style="margin-top:16px;">
              <span>📋 2. IEP final qualitative assessment record draft (Special Education Reporting Network format)</span>
              <button class="btn btn-sm btn-outline" onclick="copyCommIepText()">📋 Copy Record</button>
            </div>
            <textarea id="commIepText" class="comm-textarea" rows="7" readonly></textarea>
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
          <span style="font-size:0.85rem; color:#64748b;">💡 Practical Tips: When special education students return to their original classes, they most need consistent instructions from their instructors and affirmation from their families. The 4-in-1 small order can be directly posted on the last page of the student’s contact book!</span>
          <button class="btn btn-outline" onclick="closeCommunicationModal()">Done</button>
        </div>
      </div>
    `;
    document.body.appendChild(div);
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
  };

  window.closeQuickBriefingModal = function() {
    const modal = document.getElementById('quickBriefingModal');
    if (modal) modal.style.display = 'none';
  };

  function updateQuickBriefingContent() {
    const b = getCurrentLessonBriefing();
    const ln = b.lessonNumber || 1;
    const title = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, '');
    const superSkill = (b.visualCard && b.visualCard.title) || b.superSkill || title;
    const steps = (b.visualCard && b.visualCard.steps) || [];

    document.getElementById('qbLessonTitle').innerText = `Week ${ln} · ${title}`;
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
              <label class="qb-check-item"><input type="checkbox" checked> 4 character headgear/bracelet (Shiyu/Xiong Fei/Maohe/Hujia)</label>
              <label class="qb-check-item"><input type="checkbox" checked> Colored worksheets (1 A4/B4 per student)</label>
              <label class="qb-check-item"><input type="checkbox" checked> Calm corner visual hourglass and deep breathing chart in place</label>
              <label class="qb-check-item"><input type="checkbox" checked> Reward Star Token Seal and Ink Pad</label>
              <label class="qb-check-item"><input type="checkbox" checked> Large screen projection is turned on / electronic whiteboard is ready</label>
            </div>
          </div>

          <!-- 特教三大障礙防雷預警 -->
          <div class="qb-section">
            <div class="qb-sec-title">🛡️ Three special education obstacle classroom support guides (classroom pit avoidance):</div>
            <div class="qb-scaffold-row">
              <div class="qb-sc-box asd">
                <div class="qb-sc-title">🔹 Autism (ASD) Yu/Jia</div>
                <div class="qb-sc-desc" id="qbAsdTip">Forecast link switching in advance, do not suddenly change the order of activities; give a fixed location.</div>
              </div>
              <div class="qb-sc-box ebd">
                <div class="qb-sc-title">🔹 Emotional Disorders (EBD)</div>
                <div class="qb-sc-desc" id="qbEbdTip">Get vaccinated before losing the competition, and be prepared to brake and calm down at any time.</div>
              </div>
              <div class="qb-sc-box ld">
                <div class="qb-sc-title">🔹 Learning Disability (LD) Kowa</div>
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
  };

  window.closeWhiteboardModal = function() {
    const modal = document.getElementById('whiteboardModal');
    if (modal) modal.style.display = 'none';
  };

  function updateWhiteboardContent() {
    const b = getCurrentLessonBriefing();
    const ln = b.lessonNumber || 1;
    const title = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, '');
    const superSkill = (b.visualCard && b.visualCard.title) || b.superSkill || title;
    const steps = (b.visualCard && b.visualCard.steps) || [];

    document.getElementById('wbTopTitle').innerText = `🏫 Social Skills · Week ${ln}`;
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
          👀 Students look up at the blackboard! Do the action formula correctly and you will get 1 super power star for every correct action!⭐
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
