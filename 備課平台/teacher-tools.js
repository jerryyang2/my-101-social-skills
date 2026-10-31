// teacher-tools.js
// 特教教師實務專業工具箱 (Special Education Teacher Practical Toolkit)
// 1. 🚨 急性情緒冷靜通道 (Emergency Calm Corner & Sensory De-escalation Toolkit)
// 2. 📝 親師聯絡單 & IEP 紀錄一鍵生成器 (Parent Note & IEP Progress Slip Generator)
// 3. ⚡ 課前 60 秒極速備課卡 (Quick 60s Briefing Card & Materials Checklist)
// 4. 🖥️ 白板大字版招式投影 (Whiteboard High-Contrast Giant Projection Card)

(function(window) {
  'use strict';

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

  // 取得當前課程資料
  function getCurrentLessonBriefing() {
    if (typeof window.getActiveBriefing === 'function') {
      const b = window.getActiveBriefing();
      if (b) return b;
    }
    if (typeof currentBriefing !== 'undefined' && currentBriefing) {
      return currentBriefing;
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
    modal.style.display = 'flex';
    switchCalmTab('breathe');
    startBreathingCycle();
  };

  window.closeCalmCornerModal = function() {
    const modal = document.getElementById('calmCornerModal');
    if (modal) modal.style.display = 'none';
    stopBreathingCycle();
    pauseSensoryTimer();
    CalmAudio.stopRain();
    const rainBtn = document.getElementById('calmRainToggleBtn');
    if (rainBtn) {
      rainBtn.classList.remove('active');
      rainBtn.innerHTML = '🌧️ 播放細雨白噪音';
    }
  };

  // 切換冷靜功能分頁
  window.switchCalmTab = function(tabName) {
    const tabs = ['breathe', 'timer', 'grounding'];
    tabs.forEach(t => {
      const btn = document.getElementById(`calmTabBtn-${t}`);
      const pane = document.getElementById(`calmTabPane-${t}`);
      if (btn) btn.classList.toggle('active', t === tabName);
      if (pane) pane.style.display = (t === tabName) ? 'block' : 'none';
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

    let phase = 0; // 0: 吸氣(4s), 1: 憋氣(7s), 2: 呼氣(8s)
    let timeLeft = 4;

    function tick() {
      if (phase === 0) {
        bubble.className = 'breathing-bubble inhale';
        text.innerText = `👃 深吸氣 (${timeLeft}秒)`;
        subText.innerText = '像是慢慢聞一朵香香的花，肚子鼓起來……';
      } else if (phase === 1) {
        bubble.className = 'breathing-bubble hold';
        text.innerText = `🛑 屏住呼吸 (${timeLeft}秒)`;
        subText.innerText = '小烏龜縮進殼裡，大腦踩住煞車……';
      } else if (phase === 2) {
        bubble.className = 'breathing-bubble exhale';
        text.innerText = `💨 緩慢吐氣 (${timeLeft}秒)`;
        subText.innerText = '像是在輕輕吹熄生日蠟燭，肩膀放輕鬆……';
      }

      timeLeft--;

      if (timeLeft < 0) {
        phase = (phase + 1) % 3;
        if (phase === 0) {
          timeLeft = 4;
          breathingCycleCount++;
          if (countEl) countEl.innerText = `已完成 ${breathingCycleCount} 次深呼吸`;
          CalmAudio.playChime();
        } else if (phase === 1) {
          timeLeft = 7;
          CalmAudio.playChime();
        } else if (phase === 2) {
          timeLeft = 8;
          CalmAudio.playBowl();
        }
      }
    }

    tick();
    breathingTimer = setInterval(tick, 1000);
  }

  function stopBreathingCycle() {
    if (breathingTimer) {
      clearInterval(breathingTimer);
      breathingTimer = null;
    }
  }

  // 視覺沙漏計時器控制 (1 / 3 / 5 分鐘)
  window.setSensoryTimerDuration = function(minutes) {
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
        CalmAudio.playBowl();
        alert('🕊️ 冷靜時間達成！你已經成功讓大腦沉靜下來，深呼吸三次準備回到課堂！');
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
    CalmAudio.playChime();

    // 檢查是否全部完成
    const all = document.querySelectorAll('.grounding-item-box .grounding-check');
    const checkedCount = document.querySelectorAll('.grounding-item-box .grounding-check.checked').length;
    const statusText = document.getElementById('groundingStatusText');
    if (statusText) {
      statusText.innerText = `完成進度：${checkedCount} / 5 項著陸挑戰`;
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
        btn.innerHTML = isPlaying ? '🌧️ 停止細雨白噪音 (播放中)' : '🌧️ 播放細雨白噪音';
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
      <div class="teacher-modal-content calm-corner-modal">
        <div class="teacher-modal-header" style="background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.8rem;">🧘</span>
            <div>
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">特教即時冷靜通道 · 感官舒緩與情緒急救</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#ccfbf1;">4-7-8 調息光環 · 沉浸視覺沙漏 · 5-4-3-2-1 著陸法 · 零刺激白噪音</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCalmCornerModal()" title="關閉">✕</button>
        </div>

        <div class="calm-tabs-nav">
          <button id="calmTabBtn-breathe" class="calm-tab-btn active" onclick="switchCalmTab('breathe')">🌊 4-7-8 調息光環</button>
          <button id="calmTabBtn-timer" class="calm-tab-btn" onclick="switchCalmTab('timer')">⏳ 沉浸視覺沙漏</button>
          <button id="calmTabBtn-grounding" class="calm-tab-btn" onclick="switchCalmTab('grounding')">🖐️ 5-4-3-2-1 著陸法</button>
          <button id="calmRainToggleBtn" class="calm-tab-btn rain-btn" onclick="toggleCalmRain()">🌧️ 播放細雨白噪音</button>
        </div>

        <div class="calm-modal-body">
          <!-- Tab 1: 4-7-8 呼吸光環 -->
          <div id="calmTabPane-breathe" class="calm-tab-pane">
            <div class="breathing-arena">
              <div class="breathing-bubble-container">
                <div id="breathingBubble" class="breathing-bubble inhale">
                  <div class="bubble-inner-glow"></div>
                  <span style="font-size:2.8rem; z-index:2;">🐢</span>
                </div>
              </div>
              <div class="breathing-text-area">
                <div id="breathingInstruction" class="breathing-main-text">👃 深吸氣 (4秒)</div>
                <div id="breathingSubInstruction" class="breathing-sub-text">像是慢慢聞一朵香香的花，肚子鼓起來……</div>
                <div id="breathingCycleCounter" class="breathing-cycle-pill">已完成 0 次深呼吸</div>
              </div>
            </div>
            <div class="calm-tip-bar">
              💡 <strong>大腦烏龜煞車口訣：</strong>「心跳快、握拳頭，縮進殼裡深呼吸，數到十，大腦冷靜慢慢說！」
            </div>
          </div>

          <!-- Tab 2: 視覺沙漏計時器 -->
          <div id="calmTabPane-timer" class="calm-tab-pane" style="display:none;">
            <div class="sensory-timer-card">
              <div class="timer-duration-pills">
                <button class="timer-pill" onclick="setSensoryTimerDuration(1)">⏱️ 1 分鐘 (快速調息)</button>
                <button class="timer-pill active" onclick="setSensoryTimerDuration(3)">⏱️ 3 分鐘 (常規冷靜)</button>
                <button class="timer-pill" onclick="setSensoryTimerDuration(5)">⏱️ 5 分鐘 (深度著陸)</button>
              </div>
              <div class="timer-display-huge" id="sensoryTimerText">03:00</div>
              <div class="sensory-progress-track">
                <div class="sensory-progress-fill" id="sensoryTimerFill" style="width:0%;"></div>
              </div>
              <div style="display:flex; justify-content:center; gap:12px; margin-top:20px;">
                <button id="sensoryTimerToggleBtn" class="btn btn-primary" onclick="toggleSensoryTimer()" style="font-size:1.05rem; padding:10px 24px;">▶️ 開始冷靜倒數</button>
                <button class="btn btn-outline" onclick="resetSensoryTimer()">🔄 重設</button>
                <button class="btn btn-outline" onclick="CalmAudio.playBowl()">🔔 鳴響頌缽</button>
              </div>
            </div>
          </div>

          <!-- Tab 3: 5-4-3-2-1 著陸法 -->
          <div id="calmTabPane-grounding" class="calm-tab-pane" style="display:none;">
            <div style="margin-bottom:12px; font-weight:800; color:#0f766e; display:flex; justify-content:space-between;">
              <span>🖐️ 五感著陸急救術（幫助學童從急性恐慌/失控回歸當下現實）：</span>
              <span id="groundingStatusText" style="color:#0284c7;">完成進度：0 / 5 項</span>
            </div>
            <div class="grounding-list">
              <div class="grounding-item-box" onclick="toggleGroundingCheck(5)">
                <div class="grounding-check" id="groundingCheck-5"></div>
                <div><strong>👁️ 5 樣看得到的東西：</strong>找到教室裡 5 個藍色或圓圓的物品，用手比一比。</div>
              </div>
              <div class="grounding-item-box" onclick="toggleGroundingCheck(4)">
                <div class="grounding-check" id="groundingCheck-4"></div>
                <div><strong>🖐️ 4 種摸得到的觸感：</strong>摸摸桌子、自己的衣服、水壺或椅背，感覺是平滑還是粗糙。</div>
              </div>
              <div class="grounding-item-box" onclick="toggleGroundingCheck(3)">
                <div class="grounding-check" id="groundingCheck-3"></div>
                <div><strong>👂 3 種聽得到的聲音：</strong>閉上眼睛聽聽看，電風扇轉動聲、窗外鳥鳴或老師說話聲。</div>
              </div>
              <div class="grounding-item-box" onclick="toggleGroundingCheck(2)">
                <div class="grounding-check" id="groundingCheck-2"></div>
                <div><strong>👃 2 種聞得到的氣味：</strong>聞聞自己的手帕、書本或空氣中乾淨的味道。</div>
              </div>
              <div class="grounding-item-box" onclick="toggleGroundingCheck(1)">
                <div class="grounding-check" id="groundingCheck-1"></div>
                <div><strong>👅 1 次深深的呼吸：</strong>把手放在肚皮上，感受吸氣時肚子圓滾滾，呼氣時慢慢放鬆。</div>
              </div>
            </div>
          </div>

        </div>

        <div class="teacher-modal-footer">
          <span style="font-size:0.85rem; color:#64748b;">🛡️ 特教心法：學生情緒失控時，先處理情緒、再處理問題；先冷靜降溫、不說教評判。</span>
          <button class="btn btn-outline" onclick="closeCalmCornerModal()">完成並返回課堂</button>
        </div>
      </div>
    `;
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
    const regTip = b.regularClassTip || "提示口訣並公開肯定學生進步。";
    const homeAction = (b.homeTask && b.homeTask.action) || "向家人示範今日超能力！";
    const iepGoal = b.iepGoal || "能在視覺提示下30秒內做出相應社交行為，達成率80%以上。";

    // 1. LINE / 聯絡簿文字版
    const lineText = `【OO國小學習教室 · 本週特教社交超能力聯絡條】
親愛的家長與班級導師您好：
本週孩子在學習教室進行了第 ${ln} 週社交技巧課程：
🌟 本週主題：【${cleanTitle}】
🎯 核心超能力：${superSkill}
🏫 普通班導師融合口訣：${regTip}
🏠 本週家庭生活小打卡：${homeAction}
💡 親師同心提醒：特教學童需要跨情境反覆演練與具體讚美，若孩子在班級或家中主動使用這項超能力，請家長在聯絡簿蓋章肯定，孩子下週可回特教班兌換榮譽星星喔！感謝您的用心陪伴！`;

    const textEl = document.getElementById('commLineText');
    if (textEl) textEl.value = lineText;

    // 2. IEP 質性評量記錄草稿
    const iepRecord = `【特殊教育個別化教育計畫 (IEP) 學習目標達成紀錄】
• 評量單元：第 ${ln} 週 · ${b.unit || '社交技巧'}（${cleanTitle}）
• 預期目標：${iepGoal}
• 課堂實施：透過 40 分鐘 5 步走結構化教學、社會故事導讀、3步驟動作口訣演練及四角色實景劇場，學生能在視覺提示下理解情境因果並嘗試做出正向對應行為。
• 類化評估：已提供普通班導師關鍵口訣（${regTip}）進行班級提示，並派發家庭生活共學任務（${homeAction}）由家長簽章確認生活實踐成效，持續追蹤行為維持度。`;

    const iepEl = document.getElementById('commIepText');
    if (iepEl) iepEl.value = iepRecord;

    // 3. 4合1 列印小條容器
    const slipsContainer = document.getElementById('commSlipsGrid');
    if (slipsContainer) {
      const singleSlipHtml = `
        <div class="print-slip-card">
          <div class="slip-header">
            <span>🌱 OO國小特教學習教室 · 社交超能力聯絡卡</span>
            <span class="slip-week">第 ${ln} 週</span>
          </div>
          <div class="slip-title">🎯 今日超能力：${cleanTitle}</div>
          <div class="slip-body">
            <div><strong>🌟 核心招式口訣：</strong>${superSkill}</div>
            <div><strong>🏫 導師原班提醒：</strong>${regTip}</div>
            <div class="slip-home-box">
              <strong>🏠 家庭生活共學打卡：</strong>${homeAction}
              <div class="slip-parent-sign">家長蓋章/簽名：［　　　　　］</div>
            </div>
          </div>
          <div class="slip-footer">
            <span>✨ 完成打卡下週可兌換特教榮譽星星！</span>
            <span>💮 教師簽章：［　　　］</span>
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
      alert('📋 家長/導師聯絡簿文字已成功複製！可直接貼至 LINE 親師群組或聯絡簿！');
    });
  };

  window.copyCommIepText = function() {
    const el = document.getElementById('commIepText');
    if (!el) return;
    navigator.clipboard.writeText(el.value).then(() => {
      alert('📋 IEP 質性評量記錄草稿已複製！可直接貼入特教通報網或學期 IEP 會議紀錄！');
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
              <h2 style="margin:0; font-size:1.35rem; color:#ffffff;">親師聯絡小條 & IEP 評量紀錄 一鍵生成</h2>
              <p style="margin:2px 0 0 0; font-size:0.85rem; color:#e0e7ff;">LINE/聯絡簿好讀版 · 4合1省紙列印小單 · IEP 特教通報網評量草稿</p>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeCommunicationModal()" title="關閉">✕</button>
        </div>

        <div class="comm-modal-body">
          <!-- 左欄：LINE文字與IEP草稿 -->
          <div class="comm-col-left">
            <div class="comm-section-title">
              <span>💬 1. 聯絡簿 / LINE 親師通知文字（一鍵複製）</span>
              <button class="btn btn-sm btn-primary" onclick="copyCommLineText()">📋 複製文字</button>
            </div>
            <textarea id="commLineText" class="comm-textarea" rows="8" readonly></textarea>

            <div class="comm-section-title" style="margin-top:16px;">
              <span>📋 2. IEP 期末質性評量記錄草稿（特教通報網格式）</span>
              <button class="btn btn-sm btn-outline" onclick="copyCommIepText()">📋 複製紀錄</button>
            </div>
            <textarea id="commIepText" class="comm-textarea" rows="7" readonly></textarea>
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
          <span style="font-size:0.85rem; color:#64748b;">💡 實務技巧：特教生回原班最需要導師的一致口訣與家庭肯定，4合1小單可直接貼在學生聯絡簿末頁！</span>
          <button class="btn btn-outline" onclick="closeCommunicationModal()">完成</button>
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

    document.getElementById('qbLessonTitle').innerText = `第 ${ln} 週 · ${title}`;
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
              <label class="qb-check-item"><input type="checkbox" checked> 4 角色頭飾/手環 (獅宇/熊畯/貓和/狐嘉)</label>
              <label class="qb-check-item"><input type="checkbox" checked> 彩色學習單 (每生 1 張 A4/B4)</label>
              <label class="qb-check-item"><input type="checkbox" checked> 冷靜角視覺沙漏與深呼吸圖卡就位</label>
              <label class="qb-check-item"><input type="checkbox" checked> 獎勵星星代幣印章與印台</label>
              <label class="qb-check-item"><input type="checkbox" checked> 大螢幕已開啟投影 / 電子白板就緒</label>
            </div>
          </div>

          <!-- 特教三大障礙防雷預警 -->
          <div class="qb-section">
            <div class="qb-sec-title">🛡️ 三大特教障礙防雷指南（課堂避坑）：</div>
            <div class="qb-scaffold-row">
              <div class="qb-sc-box asd">
                <div class="qb-sc-title">🔹 自閉症 (ASD) 小宇/小嘉</div>
                <div class="qb-sc-desc" id="qbAsdTip">提前預告環節切換，勿突然更改活動順序；給予定點位置。</div>
              </div>
              <div class="qb-sc-box ebd">
                <div class="qb-sc-title">🔹 情緒障礙 (EBD) 小畯</div>
                <div class="qb-sc-desc" id="qbEbdTip">競賽失利前先打預防針，隨時準備大腦煞車冷靜角。</div>
              </div>
              <div class="qb-sc-box ld">
                <div class="qb-sc-title">🔹 學習障礙 (LD) 小和</div>
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

    document.getElementById('wbTopTitle').innerText = `🏫 社交超能力視覺招式卡 · 第 ${ln} 週`;
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
          👀 同學們抬頭看黑板！把動作口訣做正確，每做對一次可獲得 1 顆超能力星星！⭐
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

})(window);
