(function () {
  'use strict';

  class DrawingHistory {
    constructor() {
      this.marks = [];
      this.past = [];
      this.future = [];
    }
    save(marks) {
      this.past.push(this.marks);
      if (this.past.length > 40) this.past.shift();
      this.marks = marks.slice(-300);
      this.future = [];
    }
    undo() {
      if (!this.past.length) return false;
      this.future.push(this.marks);
      this.marks = this.past.pop();
      return true;
    }
    redo() {
      if (!this.future.length) return false;
      this.past.push(this.marks);
      this.marks = this.future.pop();
      return true;
    }
    nextNumber() {
      return this.marks.reduce((max, mark) => mark.tool === 'number' ? Math.max(max, mark.number) : max, 0) + 1;
    }
  }
  function segmentDistance(point, start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = dx * dx + dy * dy;
    const projectionRatio = length ? Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / length)) : 0;
    return Math.hypot(point.x - start.x - projectionRatio * dx, point.y - start.y - projectionRatio * dy);
  }
  function hitsMark(mark, point) {
    const tolerance = Math.max(10, mark.width / 2 + 5);
    if (mark.tool === 'pen' || mark.tool === 'highlight') {
      if (mark.points.length === 1) return segmentDistance(point, mark.points[0], mark.points[0]) <= tolerance;
      return mark.points.some((pathPoint, pointIndex) => pointIndex > 0 && segmentDistance(point, mark.points[pointIndex - 1], pathPoint) <= tolerance);
    }
    if (mark.tool === 'number') return Math.hypot(point.x - mark.x, point.y - mark.y) <= mark.radius + 5;
    if (mark.tool === 'text') {
      const width = Array.from(mark.text).reduce((sum, char) => sum + (/[^\x00-\x7f]/.test(char) ? 1 : 0.62), 0) * mark.fontSize;
      return point.x >= mark.x - 5 && point.x <= mark.x + width + 5 && point.y >= mark.y - mark.fontSize && point.y <= mark.y + 8;
    }
    if (mark.tool === 'arrow') return segmentDistance(point, mark.start, mark.end) <= tolerance + 4;
    const left = Math.min(mark.start.x, mark.end.x);
    const right = Math.max(mark.start.x, mark.end.x);
    const top = Math.min(mark.start.y, mark.end.y);
    const bottom = Math.max(mark.start.y, mark.end.y);
    if (mark.tool === 'ellipse') {
      const rx = (right - left) / 2;
      const ry = (bottom - top) / 2;
      if (rx < 1 || ry < 1) return segmentDistance(point, mark.start, mark.end) <= tolerance;
      const distance = Math.hypot((point.x - (left + right) / 2) / rx, (point.y - (top + bottom) / 2) / ry);
      return Math.abs(distance - 1) * Math.min(rx, ry) <= tolerance;
    }
    return point.x >= left - tolerance && point.x <= right + tolerance && point.y >= top - tolerance && point.y <= bottom + tolerance && Math.min(Math.abs(point.x - left), Math.abs(point.x - right), Math.abs(point.y - top), Math.abs(point.y - bottom)) <= tolerance;
  }
  class Countdown {
    constructor(minutes = 5) { this.setMinutes(minutes); }
    setMinutes(minutes) {
      if (!Number.isInteger(minutes) || minutes < 1 || minutes > 40) throw new RangeError('請輸入 1–40 的整數分鐘。');
      this.minutes = minutes;
      this.reset();
    }
    reset() { this.remainingMs = this.minutes * 60000; this.deadline = null; }
    get running() { return this.deadline !== null; }
    remaining(now) { return this.running ? Math.max(0, this.deadline - now) : this.remainingMs; }
    start(now) {
      if (this.running) return;
      if (this.remainingMs <= 0) this.reset();
      this.deadline = now + this.remainingMs;
    }
    pause(now) { this.remainingMs = this.remaining(now); this.deadline = null; }
  }
  function timerText(milliseconds) {
    const seconds = Math.ceil(Math.max(0, milliseconds) / 1000);
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }
  function hourglassSand(remaining, total) {
    const fraction = total > 0 ? Math.max(0, Math.min(1, remaining / total)) : 0;
    const width = 20 * Math.sqrt(fraction);
    const upper = 50 - 30 * Math.sqrt(fraction);
    const lower = 62 + 30 * Math.sqrt(fraction);
    return {
      topPoints: `${38 - width},${upper} ${38 + width},${upper} 38,50`,
      bottomPoints: `18,92 58,92 ${38 + width},${lower} ${38 - width},${lower}`,
      streamEnd: lower
    };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {
    DrawingHistory,
    hitsMark,
    segmentDistance,
    Countdown,
    timerText,
    hourglassSand
  };
  if (typeof document === 'undefined') return;
  const handIconURL = new URL('./pointing-hand.svg?v=social-cursor-20261031', document.currentScript.src).href;
  const helperIconURL = new URL('./social-helper.svg?v=20261031-circle', document.currentScript.src).href;
  function createCountdownWidget() {
    const root = document.createElement('section');
    root.id = 'mft-countdown';
    root.className = 'mft-countdown';
    root.setAttribute('aria-label', '浮動倒數計時器');
    root.hidden = true;
    root.innerHTML = `<header class="mft-countdown-header">
      <button type="button" class="mft-countdown-drag" aria-label="移動倒數計時器" title="拖曳移動；方向鍵微調">✥ 倒數計時器</button>
      <button type="button" data-timer-action="close" aria-label="收起並暫停倒數計時器">×</button>
    </header>
    <div class="mft-countdown-body">
      <div class="mft-countdown-visual">
        <svg class="mft-countdown-hourglass" viewBox="0 0 76 112" aria-hidden="true">
          <path d="M14 16H62L38 54ZM38 58 62 96H14Z" fill="#e8f3f4"/>
          <polygon class="mft-hourglass-upper" fill="#dfa331"/>
          <polygon class="mft-hourglass-lower" fill="#dfa331"/>
          <path d="M14 16H62L38 54v4L62 96H14L38 58v-4Z" fill="none" stroke="#57818a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M11 14v84m54-84v84" stroke="#b18547" stroke-width="4" stroke-linecap="round"/>
          <path d="M9 12H67M9 100H67" stroke="#825d32" stroke-width="8" stroke-linecap="round"/>
          <path d="M19 23v10m0 46v7" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          <line class="mft-hourglass-stream" x1="38" y1="50" x2="38" y2="92" stroke="#d49422" stroke-width="2" hidden/>
        </svg>
        <div class="mft-countdown-clock" role="timer" aria-live="off">05:00</div>
      </div>
      <label class="mft-countdown-minutes">設定 <input type="number" min="1" max="40" step="1" value="5" aria-label="倒數分鐘數，1 至 40 分鐘"> 分鐘</label>
      <div class="mft-countdown-actions"><button type="button" data-timer-action="toggle">開始</button><button type="button" data-timer-action="reset">重設</button></div>
      <p class="mft-countdown-status" role="status">準備開始</p>
    </div>`;
    document.body.append(root);
    const clock = root.querySelector('.mft-countdown-clock');
    const upperSand = root.querySelector('.mft-hourglass-upper');
    const lowerSand = root.querySelector('.mft-hourglass-lower');
    const sandStream = root.querySelector('.mft-hourglass-stream');
    const input = root.querySelector('input');
    const toggle = root.querySelector('[data-timer-action=toggle]');
    const status = root.querySelector('.mft-countdown-status');
    const handle = root.querySelector('.mft-countdown-drag');
    const countdown = new Countdown();
    let interval = null;
    let drag = null;
    let previousFocus = null;
    let position = { x: innerWidth - 360, y: 110 };
    function clamp() {
      const bounds = root.getBoundingClientRect();
      position.x = Math.max(8, Math.min(position.x, innerWidth - bounds.width - 8));
      position.y = Math.max(8, Math.min(position.y, innerHeight - bounds.height - 8));
      root.style.left = `${position.x}px`;
      root.style.top = `${position.y}px`;
    }
    function stopInterval() { clearInterval(interval); interval = null; }
    function paint() {
      const remaining = countdown.remaining(performance.now());
      if (countdown.running && remaining === 0) { countdown.pause(performance.now()); stopInterval(); }
      clock.textContent = timerText(remaining);
      const sand = hourglassSand(remaining, countdown.minutes * 60000);
      upperSand.setAttribute('points', sand.topPoints);
      lowerSand.setAttribute('points', sand.bottomPoints);
      sandStream.setAttribute('y2', sand.streamEnd);
      sandStream.toggleAttribute('hidden', !countdown.running);
      clock.setAttribute('aria-label', `剩餘 ${Math.floor(Math.ceil(remaining / 1000) / 60)} 分 ${Math.ceil(remaining / 1000) % 60} 秒`);
      toggle.textContent = countdown.running ? '暫停' : remaining === countdown.minutes * 60000 || remaining === 0 ? '開始' : '繼續';
      root.dataset.finished = String(remaining === 0);
      const message = remaining === 0 ? '時間到' : countdown.running ? '計時中' : remaining === countdown.minutes * 60000 ? '準備開始' : '已暫停';
      if (status.textContent !== message) status.textContent = message;
    }
    function applyMinutes() {
      const minutes = input.valueAsNumber;
      const valid = Number.isInteger(minutes) && minutes >= 1 && minutes <= 40;
      input.setCustomValidity(valid ? '' : '請輸入 1–40 的整數分鐘。');
      if (!valid) { input.reportValidity(); return false; }
      if (minutes !== countdown.minutes) { stopInterval(); countdown.setMinutes(minutes); paint(); }
      return true;
    }
    function startOrPause() {
      if (countdown.running) { countdown.pause(performance.now()); stopInterval(); }
      else {
        if (!applyMinutes()) return;
        countdown.start(performance.now()); interval = setInterval(paint, 200);
      }
      paint();
    }
    function finishDrag(event) {
      if (drag?.pointerId !== event.pointerId) return;
      drag = null;
      if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId);
    }
    function synchronize() {
      const full = document.fullscreenElement;
      const unavailable = full?.tagName === 'IFRAME' || (window.self !== window.top && !full);
      (full && !unavailable ? full : document.body).append(root);
      root.classList.toggle('mft-unavailable', unavailable);
      if (!root.hidden) clamp();
    }
    root.addEventListener('click', event => {
      const action = event.target.closest('[data-timer-action]')?.dataset.timerAction;
      if (action === 'toggle') startOrPause();
      if (action === 'reset') { stopInterval(); countdown.reset(); paint(); }
      if (action === 'close') {
        countdown.pause(performance.now()); stopInterval(); paint(); root.hidden = true;
        const returnFocus = previousFocus?.getClientRects().length ? previousFocus : document.querySelector('#social-floating-tools .mft-launcher');
        returnFocus?.focus({ preventScroll: true });
      }
    });
    input.addEventListener('input', () => input.setCustomValidity(''));
    input.addEventListener('change', applyMinutes);
    handle.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.isPrimary === false || drag) return;
      event.preventDefault();
      drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, position: { ...position } };
      handle.setPointerCapture(event.pointerId);
      handle.focus({ preventScroll: true });
    });
    handle.addEventListener('pointermove', event => {
      if (drag?.pointerId !== event.pointerId) return;
      event.preventDefault();
      position = { x: drag.position.x + event.clientX - drag.x, y: drag.position.y + event.clientY - drag.y };
      clamp();
    });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => handle.addEventListener(type, finishDrag));
    root.addEventListener('keydown', event => {
      event.stopPropagation();
      if (event.key === 'Escape') { root.querySelector('[data-timer-action=close]').click(); event.preventDefault(); }
      if (event.key === 'Enter' && event.target === input) { startOrPause(); event.preventDefault(); }
      if (event.target !== handle || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
      event.preventDefault();
      const distance = event.shiftKey ? 20 : 5;
      position.x += event.key === 'ArrowRight' ? distance : event.key === 'ArrowLeft' ? -distance : 0;
      position.y += event.key === 'ArrowDown' ? distance : event.key === 'ArrowUp' ? -distance : 0;
      clamp();
    });
    window.addEventListener('resize', () => { if (!root.hidden) clamp(); });
    window.addEventListener('pagehide', stopInterval);
    window.addEventListener('pageshow', () => {
      if (countdown.running && interval === null) {
        paint();
        if (countdown.running) interval = setInterval(paint, 200);
      }
    });
    document.addEventListener('visibilitychange', () => { if (countdown.running) paint(); });
    document.addEventListener('fullscreenchange', synchronize);
    return { open() { previousFocus = document.activeElement; root.hidden = false; synchronize(); paint(); handle.focus({ preventScroll: true }); } };
  }
  function init() {
    if (document.getElementById('social-floating-tools')) return;
    const NS = 'http://www.w3.org/2000/svg';
    const icons = {
      pen: '<path d="m15 4 5 5M4 16 15 5a3.5 3.5 0 0 1 5 5L9 21H4z"/>',
      magnify: '<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M6 10h8M10 6v8"/>',
      highlight: '<path d="m14 3 7 7-9 9-7-7zM5 12l-3 7 3 3 7-3M2 22h9"/>',
      text: '<path d="M4 5h16M12 5v15M8 20h8"/>',
      rect: '<rect x="3" y="4" width="18" height="16" rx="2"/>',
      ellipse: '<ellipse cx="12" cy="12" rx="9" ry="8"/>',
      arrow: '<path d="M3 20 20 3M9 3h11v11"/>',
      number: '<circle cx="12" cy="12" r="9"/><path d="m10 9 2-2v10M9 17h6"/>',
      move: '<path d="M12 2v20M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M6 8l-4 4 4 4M18 8l4 4-4 4"/>',
      undo: '<path d="m8 4-5 5 5 5M3 9h10a7 7 0 0 1 0 14"/>',
      redo: '<path d="m16 4 5 5-5 5M21 9H11a7 7 0 0 0 0 14"/>',
      eraser: '<path d="m10 3 11 11-7 7H7L1 15zM5 11l10 10M14 21h8"/>',
      clear: '<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7"/>',
      settings: '<path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
      horizontal: '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M8 7v10M15 7v10"/>',
      vertical: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M7 8h10M7 15h10"/>',
      collapse: '<path d="m6 9 6 6 6-6"/>',
      close: '<path d="m6 6 12 12M6 18 18 6"/>'
    };
    const icon = name => name === 'cursor' ? `<img class="mft-cursor-icon" src="${handIconURL}" alt="" aria-hidden="true" draggable="false" width="22" height="22">` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
    const tools = [['cursor', '游標'], ['pen', '畫筆'], ['highlight', '螢光筆'], ['text', '文字'], ['rect', '方框'], ['ellipse', '圓框'], ['arrow', '箭頭'], ['number', '步驟'], ['magnify', '放大鏡']];
    const colors = [['#ef4444', '紅色'], ['#2563eb', '藍色'], ['#16a34a', '綠色'], ['#f59e0b', '橙黃色'], ['#9333ea', '紫色'], ['#1e293b', '深墨色']];
    const host = document.createElement('aside');
    host.id = 'social-floating-tools';
    host.className = 'mft-ui';
    let orientation = 'horizontal';
    try {
      if (localStorage.getItem('social-floating-orientation') === 'vertical') orientation = 'vertical';
    } catch (unusedValue) {}
    host.dataset.orientation = orientation;
    host.setAttribute('aria-label', '社交課小幫手');
    host.innerHTML = `
      <button type="button" class="mft-launcher" aria-label="開啟社交課小幫手" aria-expanded="false" aria-controls="mft-panel" title="點一下開啟社交課小幫手；拖曳移動，方向鍵微調位置">
        <span class="mft-launch-icon"><img class="mft-helper-icon" src="${helperIconURL}" alt="" aria-hidden="true" draggable="false" width="40" height="40"></span>
      </button>
      <section id="mft-panel" class="mft-panel" aria-label="課堂畫記工具列" hidden>
        <header class="mft-header">
          <span class="mft-brand-mark" title="社交課小幫手"><img src="${helperIconURL}" alt="" draggable="false" width="26" height="26"><span>社交課</span></span>
          <button type="button" class="mft-move" data-action="move" aria-label="移動畫記工具列" title="拖曳移動；方向鍵微調位置，Home 回到右下角">${icon('move')}</button>
          <button type="button" class="mft-orientation" data-action="orientation"></button>
        </header>
        <div class="mft-body">
          <div class="mft-tool-grid" role="group" aria-label="畫記工具">
            ${tools.map(([key, label]) => `<button type="button" class="mft-tool" data-tool="${key}" aria-pressed="${key === 'cursor'}" title="${key === 'cursor' ? '操作網頁、切換單元及捲動' : label}">${icon(key)}<span>${label}</span>${key === 'number' ? '<b class="mft-next-number">1</b>' : ''}</button>`).join('')}
            <button type="button" class="mft-tool mft-countdown-toggle" data-action="countdown" aria-label="開啟倒數計時器" aria-controls="mft-countdown"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="14" r="8" fill="#fff0bd"/><path d="M9 2h6m-3 0v4m6 1 2-2M12 9v5l3 2"/></svg><span>計時器</span></button>
          </div>
          <button type="button" class="mft-options-toggle" data-action="settings" aria-label="工具設定：顏色、粗細與放大鏡" aria-expanded="false" aria-controls="mft-options">${icon('settings')}<span>設定</span></button>
          <div class="mft-actions" role="group" aria-label="畫記管理">
            <button type="button" data-action="undo" title="復原（Ctrl／⌘ Z）" disabled>${icon('undo')}復原</button>
            <button type="button" data-action="redo" title="重做（Ctrl／⌘ Shift Z）" disabled>${icon('redo')}重做</button>
            <button type="button" data-tool="eraser" aria-pressed="false" title="點選或劃過畫記可整筆擦除">${icon('eraser')}橡皮擦</button>
            <button type="button" data-action="clear" class="mft-clear" title="清除此頁畫記；仍可復原" disabled>${icon('clear')}清除</button>
          </div>
        </div>
        <button type="button" class="mft-icon-button mft-collapse" data-action="collapse" aria-label="收合畫記工具列" title="收合並回到游標模式">${icon('collapse')}</button>
      </section>
      <section id="mft-options" class="mft-options" aria-label="畫記工具設定" hidden>
        <div class="mft-options-header"><strong>社交課工具設定</strong><button type="button" data-action="close-settings" aria-label="關閉工具設定">${icon('close')}</button></div>
          <div class="mft-lens-settings" hidden><div class="mft-zoom-settings">
            <label>倍率 <input type="range" min="1.5" max="4" value="2" step="0.5" aria-label="放大倍率" aria-valuetext="2 倍"><output aria-live="polite">2×</output></label>
          </div>
            <div class="mft-size-settings"><label>範圍 <input type="range" min="70" max="200" value="100" step="10" aria-label="放大鏡範圍" aria-valuetext="100%"><output aria-live="polite">100%</output></label></div>
          </div>
          <div class="mft-settings">
            <div class="mft-colors" role="group" aria-label="畫記顏色">
              ${colors.map(([value, label]) => `<button type="button" class="mft-swatch" data-color="${value}" style="--swatch:${value}" aria-label="${label}" aria-pressed="${value === '#2563eb'}" title="${label}"></button>`).join('')}
            </div>
            <label class="mft-width">粗細 <input type="range" min="2" max="12" value="4" step="1" aria-label="畫筆粗細"><output>4</output></label>
          </div>
          <footer class="mft-footer"><span class="mft-mode">游標可操作網頁</span><span class="mft-count">此頁 0 筆</span></footer>
          <p class="mft-note">Esc 回到游標 · 各課程／步驟分開畫記 · 重新整理後清除</p>
      </section>`;
    const overlay = document.createElementNS(NS, 'svg');
    overlay.classList.add('mft-overlay');
    overlay.setAttribute('aria-label', '課堂畫記圖層');
    const layer = document.createElementNS(NS, 'g');
    overlay.appendChild(layer);
    const toast = document.createElement('div');
    toast.className = 'mft-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.hidden = true;
    document.body.append(overlay, host, toast);
    let tool = 'cursor';
    let color = '#2563eb';
    let width = 4;
    let opened = false;
    let gesture = null;
    let editor = null;
    let drag = null;
    let sequence = 0;
    let context = '';
    let scheduled = false;
    let toastTimer;
    let compactPosition = null;
    let suppressLauncherClickUntil = 0;
    let countdownWidget = null;
    const pages = new Map();
    let history = new DrawingHistory();
    const panel = host.querySelector('.mft-panel');
    const launcher = host.querySelector('.mft-launcher');
    const modeLabel = host.querySelector('.mft-mode');
    const moveButton = host.querySelector('.mft-move');
    const orientationButton = host.querySelector('.mft-orientation');
    const options = host.querySelector('.mft-options');
    const optionsButton = host.querySelector('.mft-options-toggle');
    const scrollPoint = () => {
      const content = document.querySelector('.social-classroom .slide-content');
      if (content) return {
        x: window.scrollX + content.scrollLeft,
        y: window.scrollY + content.scrollTop
      };
      const full = document.fullscreenElement;
      return full && full !== document.documentElement && full !== document.body ? {
        x: full.scrollLeft,
        y: full.scrollTop
      } : {
        x: window.scrollX,
        y: window.scrollY
      };
    };
    const point = event => {
      const scroll = scrollPoint();
      return {
        x: event.clientX + scroll.x,
        y: event.clientY + scroll.y
      };
    };
    function notify(message) {
      clearTimeout(toastTimer);
      toast.textContent = message;
      toast.hidden = false;
      toastTimer = setTimeout(() => {
        toast.hidden = true;
      }, 3200);
    }
    function svg(tag, attrs, text) {
      const node = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function renderMark(mark) {
      const group = svg('g', {
        'data-mark-id': mark.id
      });
      const stroke = {
        fill: 'none',
        stroke: mark.color,
        'stroke-width': mark.width,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      };
      if (mark.tool === 'pen' || mark.tool === 'highlight') {
        const pathData = mark.points.map((pathPoint, pointIndex) => `${pointIndex ? 'L' : 'M'}${pathPoint.x},${pathPoint.y}`).join(' ');
        group.append(svg('path', {
          ...stroke,
          d: mark.points.length === 1 ? `${pathData}l0.01,0` : pathData,
          'stroke-opacity': mark.tool === 'highlight' ? 0.3 : 1
        }));
      } else if (mark.tool === 'number') {
        group.append(svg('circle', {
          cx: mark.x,
          cy: mark.y,
          r: mark.radius,
          fill: mark.color,
          stroke: '#fff',
          'stroke-width': 2
        }));
        group.append(svg('text', {
          x: mark.x,
          y: mark.y,
          fill: '#fff',
          'font-size': mark.radius * 1.2,
          'text-anchor': 'middle',
          'dominant-baseline': 'central',
          'font-family': 'system-ui, sans-serif',
          'font-weight': 800
        }, mark.number));
      } else if (mark.tool === 'text') {
        group.append(svg('text', {
          x: mark.x,
          y: mark.y,
          fill: mark.color,
          'font-size': mark.fontSize,
          'font-family': 'system-ui, sans-serif',
          'font-weight': 700,
          'paint-order': 'stroke',
          stroke: '#fff',
          'stroke-width': 2
        }, mark.text));
      } else {
        const {
          start,
          end
        } = mark;
        const horizontalPosition = Math.min(start.x, end.x),
          verticalPosition = Math.min(start.y, end.y);
        const shapeWidth = Math.abs(end.x - start.x),
          shapeHeight = Math.abs(end.y - start.y);
        if (mark.tool === 'rect') group.append(svg('rect', {
          ...stroke,
          x: horizontalPosition,
          y: verticalPosition,
          width: shapeWidth,
          height: shapeHeight,
          rx: 3
        }));
        if (mark.tool === 'ellipse') group.append(svg('ellipse', {
          ...stroke,
          cx: horizontalPosition + shapeWidth / 2,
          cy: verticalPosition + shapeHeight / 2,
          rx: shapeWidth / 2,
          ry: shapeHeight / 2
        }));
        if (mark.tool === 'arrow') {
          const angle = Math.atan2(end.y - start.y, end.x - start.x);
          const head = Math.max(14, mark.width * 3.5);
          const arrowHeadStart = {
            x: end.x - head * Math.cos(angle - Math.PI / 6),
            y: end.y - head * Math.sin(angle - Math.PI / 6)
          };
          const arrowHeadEnd = {
            x: end.x - head * Math.cos(angle + Math.PI / 6),
            y: end.y - head * Math.sin(angle + Math.PI / 6)
          };
          group.append(svg('path', {
            ...stroke,
            d: `M${start.x},${start.y}L${end.x},${end.y}M${arrowHeadStart.x},${arrowHeadStart.y}L${end.x},${end.y}L${arrowHeadEnd.x},${arrowHeadEnd.y}`
          }));
        }
      }
      return group;
    }
    function updatePosition() {
      const content = document.querySelector('.social-classroom .slide-content');
      if (content) {
        const bounds = content.getBoundingClientRect();
        overlay.style.clipPath = `inset(${Math.max(0, bounds.top)}px ${Math.max(0, innerWidth - bounds.right)}px ${Math.max(0, innerHeight - bounds.bottom)}px ${Math.max(0, bounds.left)}px)`;
      }
      const scroll = scrollPoint();
      layer.setAttribute('transform', `translate(${-scroll.x},${-scroll.y})`);
    }
    function render(draft) {
      layer.replaceChildren(...(draft || history.marks).map(renderMark));
      updatePosition();
      host.querySelector('[data-action="undo"]').disabled = !history.past.length;
      host.querySelector('[data-action="redo"]').disabled = !history.future.length;
      host.querySelector('[data-action="clear"]').disabled = !history.marks.length;
      host.querySelector('.mft-count').textContent = `此頁 ${history.marks.length} 筆`;
      host.querySelector('.mft-next-number').textContent = history.nextNumber();
    }
    function closeEditor() {
      if (!editor) return;
      editor.remove();
      editor = null;
    }
    function cancelGesture() {
      gesture = null;
      render();
    }
    function updatePointerStyle() {
      document.documentElement.classList.toggle('mft-hand-mode', opened && tool === 'cursor' && !host.classList.contains('mft-unavailable'));
    }
    function setTool(next) {
      cancelGesture();
      closeEditor();
      tool = next;
      updatePointerStyle();
      overlay.dataset.tool = tool;
      overlay.classList.toggle('mft-drawing', tool !== 'cursor' && tool !== 'magnify');
      window.SocialMagnifier?.setActive(tool === 'magnify');
      host.querySelector('.mft-lens-settings').hidden = tool !== 'magnify';
      host.querySelector('.mft-settings').hidden = tool === 'magnify';
      setOptionsOpen(tool === 'magnify');
      host.querySelectorAll('[data-tool]').forEach(button => button.setAttribute('aria-pressed', button.dataset.tool === tool));
      const label = [...tools, ['eraser', '橡皮擦']].find(([key]) => key === tool)[1];
      modeLabel.textContent = tool === 'cursor' ? '游標可操作網頁' : tool === 'magnify' ? '放大鏡 · 移動或觸控定位 · Esc 關閉' : tool === 'eraser' ? '劃過畫記即可整筆擦除' : `${label}模式 · Esc 回到游標`;
    }
    function positionOptions() {
      if (options.hidden) return;
      const bar = panel.getBoundingClientRect();
      const sideSpace = Math.max(bar.left - 16, window.innerWidth - bar.right - 16);
      options.style.width = `${orientation === 'vertical' ? Math.min(288, Math.max(196, sideSpace)) : 288}px`;
      const box = options.getBoundingClientRect();
      let horizontalPosition = bar.left,
        verticalPosition = bar.bottom + 8;
      if (orientation === 'vertical') {
        horizontalPosition = bar.right + 8;
        verticalPosition = bar.top;
        if (horizontalPosition + box.width > window.innerWidth - 8) horizontalPosition = bar.left - box.width - 8;
      } else if (verticalPosition + box.height > window.innerHeight - 8) verticalPosition = bar.top - box.height - 8;
      options.style.left = `${Math.max(8, Math.min(horizontalPosition, window.innerWidth - box.width - 8))}px`;
      options.style.top = `${Math.max(8, Math.min(verticalPosition, window.innerHeight - box.height - 8))}px`;
    }
    function setOptionsOpen(open) {
      options.hidden = !open;
      optionsButton.setAttribute('aria-expanded', String(open));
      if (open) positionOptions();
    }
    function clampPosition(horizontalPosition, verticalPosition) {
      const bounds = host.getBoundingClientRect();
      host.style.right = 'auto';
      host.style.bottom = 'auto';
      host.style.left = `${Math.max(8, Math.min(horizontalPosition, window.innerWidth - bounds.width - 8))}px`;
      host.style.top = `${Math.max(8, Math.min(verticalPosition, window.innerHeight - bounds.height - 8))}px`;
      positionOptions();
    }
    function setOrientation(next, save = true) {
      const bounds = host.getBoundingClientRect();
      orientation = next === 'vertical' ? 'vertical' : 'horizontal';
      host.dataset.orientation = orientation;
      const target = orientation === 'horizontal' ? '直向' : '橫向';
      orientationButton.innerHTML = `${icon(orientation === 'horizontal' ? 'vertical' : 'horizontal')}<span>${target}</span>`;
      orientationButton.setAttribute('aria-label', `切換為${target}工具列`);
      orientationButton.title = `切換為${target}工具列`;
      if (save) {
        try {
          localStorage.setItem('social-floating-orientation', orientation);
        } catch (unusedValue) {}
      }
      if (opened) clampPosition(bounds.left, bounds.top);
    }
    function toggle(open) {
      const bounds = host.getBoundingClientRect();
      if (open && !opened) compactPosition = {
        x: bounds.left,
        y: bounds.top
      };
      opened = open;
      launcher.hidden = open;
      panel.hidden = !open;
      launcher.setAttribute('aria-expanded', String(open));
      updatePointerStyle();
      setOptionsOpen(false);
      if (!open) setTool('cursor');
      const position = open ? {
        x: bounds.left,
        y: bounds.top
      } : compactPosition || {
        x: bounds.left,
        y: bounds.top
      };
      clampPosition(position.x, position.y);
    }
    function updateSizeLimit() {
      const input = host.querySelector('.mft-size-settings input');
      input.max = Math.max(70, Math.min(200, Math.floor((Math.min(window.innerWidth, window.innerHeight) - 24) / 20) * 10));
      const size = window.SocialMagnifier?.setSize(Number(input.value) * 2) || Number(input.value) * 2;
      host.querySelector('.mft-size-settings output').value = `${size / 2}%`;
      input.setAttribute('aria-valuetext', `${size / 2}%`);
    }
    function contextKey() {
      const lesson = document.querySelector('#dateDropdown, #sheetDateSelector, #mainDateDropdown')?.value || '';
      const stage = document.querySelector('#slideDots [aria-current="step"]')?.getAttribute('aria-label') || '';
      const game = document.querySelector('.game-master-wrapper > div:first-child .c-btn-accent')?.textContent.trim() || '';
      const student = document.querySelector('.student-chip.active')?.textContent.trim() || '';
      const island = document.querySelector('#drawerTitle')?.textContent.trim() || '';
      return JSON.stringify([location.pathname, lesson, stage, game, student, island, window.innerWidth, Boolean(document.fullscreenElement), document.body.classList.contains('lesson-focus'), document.documentElement.style.fontSize]);
    }
    function syncContext() {
      scheduled = false;
      const next = contextKey();
      if (next === context) return;
      cancelGesture();
      closeEditor();
      context = next;
      if (!pages.has(next)) {
        if (pages.size >= 40) pages.delete(pages.keys().next().value);
        pages.set(next, new DrawingHistory());
      }
      history = pages.get(next);
      setTool('cursor');
      render();
    }
    function scheduleContext() {
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(syncContext);
    }
    function addText(event) {
      closeEditor();
      const origin = point(event);
      const form = document.createElement('form');
      form.className = 'mft-editor';
      form.setAttribute('aria-label', '輸入畫記文字');
      form.innerHTML = '<label>寫下課堂提示<input aria-label="畫記文字" maxlength="80" placeholder="例如：先深呼吸，再開口" autocomplete="off"></label><div><button type="submit">放到畫面</button><button type="button" data-cancel>取消</button></div>';
      const parent = document.fullscreenElement || document.body;
      parent.appendChild(form);
      editor = form;
      form.style.left = `${Math.max(8, Math.min(event.clientX, window.innerWidth - 292))}px`;
      form.style.top = `${Math.max(8, Math.min(event.clientY, window.innerHeight - 170))}px`;
      form.querySelector('[data-cancel]').addEventListener('click', closeEditor);
      form.addEventListener('submit', submitEvent => {
        submitEvent.preventDefault();
        const text = form.querySelector('input').value.trim();
        if (!text) return;
        history.save([...history.marks, {
          id: ++sequence,
          tool: 'text',
          color,
          width,
          x: origin.x,
          y: origin.y,
          fontSize: 22 + width * 1.5,
          text
        }]);
        closeEditor();
        render();
      });
      form.querySelector('input').focus();
    }
    function eraseAt(position) {
      let index = -1;
      for (let pointIndex = gesture.draft.length - 1; pointIndex >= 0; pointIndex--) {
        if (hitsMark(gesture.draft[pointIndex], position)) {
          index = pointIndex;
          break;
        }
      }
      if (index >= 0) {
        gesture.draft = gesture.draft.filter((unusedValue, pointIndex) => pointIndex !== index);
        render(gesture.draft);
      }
    }
    overlay.addEventListener('pointerdown', event => {
      if (tool === 'cursor' || event.button !== 0 || !event.isPrimary) return;
      event.preventDefault();
      if (tool === 'text') {
        addText(event);
        return;
      }
      const origin = point(event);
      if (tool === 'number') {
        history.save([...history.marks, {
          id: ++sequence,
          tool,
          color,
          width,
          x: origin.x,
          y: origin.y,
          radius: 14 + width,
          number: history.nextNumber()
        }]);
        render();
        return;
      }
      overlay.setPointerCapture(event.pointerId);
      if (tool === 'eraser') {
        gesture = {
          pointerId: event.pointerId,
          draft: history.marks.slice(),
          tool
        };
        eraseAt(origin);
      } else {
        gesture = {
          pointerId: event.pointerId,
          tool,
          mark: {
            id: ++sequence,
            tool,
            color,
            width: tool === 'highlight' ? width * 5 : width,
            start: origin,
            end: origin,
            points: [origin]
          }
        };
        render([...history.marks, gesture.mark]);
      }
    });
    overlay.addEventListener('pointermove', event => {
      if (!gesture || gesture.pointerId !== event.pointerId) return;
      const position = point(event);
      if (gesture.tool === 'eraser') {
        eraseAt(position);
        return;
      }
      const mark = gesture.mark;
      mark.end = position;
      if (mark.tool === 'pen' || mark.tool === 'highlight') {
        const last = mark.points[mark.points.length - 1];
        if (Math.hypot(last.x - position.x, last.y - position.y) < 1) return;
        if (mark.points.length < 4000) mark.points.push(position);
      }
      render([...history.marks, mark]);
    });
    overlay.addEventListener('pointerup', event => {
      if (!gesture || gesture.pointerId !== event.pointerId) return;
      if (gesture.tool === 'eraser') {
        if (gesture.draft.length !== history.marks.length) history.save(gesture.draft);
      } else {
        const mark = gesture.mark;
        mark.end = point(event);
        if (['pen', 'highlight'].includes(mark.tool) || Math.hypot(mark.end.x - mark.start.x, mark.end.y - mark.start.y) > 4) history.save([...history.marks, mark]);
      }
      gesture = null;
      render();
    });
    overlay.addEventListener('pointercancel', cancelGesture);
    launcher.addEventListener('click', event => {
      if (event.detail && performance.now() < suppressLauncherClickUntil) {
        event.preventDefault();
        return;
      }
      toggle(true);
    });
    host.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.tool) {
        setTool(button.dataset.tool);
        return;
      }
      if (button.dataset.color) {
        color = button.dataset.color;
        host.querySelectorAll('[data-color]').forEach(swatch => swatch.setAttribute('aria-pressed', swatch.dataset.color === color));
      }
      switch (button.dataset.action) {
        case 'countdown':
          setTool('cursor');
          setOptionsOpen(false);
          if (!countdownWidget) countdownWidget = createCountdownWidget();
          countdownWidget.open();
          break;
        case 'collapse':
          toggle(false);
          launcher.focus();
          break;
        case 'orientation':
          setOptionsOpen(false);
          setOrientation(orientation === 'horizontal' ? 'vertical' : 'horizontal');
          break;
        case 'settings':
          setOptionsOpen(options.hidden);
          break;
        case 'close-settings':
          setOptionsOpen(false);
          optionsButton.focus();
          break;
        case 'undo':
          cancelGesture();
          history.undo();
          render();
          break;
        case 'redo':
          cancelGesture();
          history.redo();
          render();
          break;
        case 'clear':
          cancelGesture();
          history.save([]);
          render();
          notify('此頁畫記已清除，可按「復原」找回。');
          break;
      }
    });
    host.querySelector('.mft-zoom-settings input').addEventListener('input', event => {
      const value = window.SocialMagnifier.setZoom(event.target.value);
      event.target.value = value;
      event.target.setAttribute('aria-valuetext', `${value} 倍`);
      host.querySelector('.mft-zoom-settings output').value = `${value}×`;
    });
    host.querySelector('.mft-size-settings input').addEventListener('input', event => {
      const size = window.SocialMagnifier.setSize(Number(event.target.value) * 2);
      event.target.value = size / 2;
      event.target.setAttribute('aria-valuetext', `${size / 2}%`);
      host.querySelector('.mft-size-settings output').value = `${size / 2}%`;
    });
    host.querySelector('.mft-width input').addEventListener('input', event => {
      width = Number(event.target.value);
      host.querySelector('.mft-width output').value = width;
    });
    function bindDrag(handle, compact) {
      handle.addEventListener('pointerdown', event => {
        if (event.button !== 0 || !event.isPrimary) return;
        const bounds = host.getBoundingClientRect();
        drag = {
          id: event.pointerId,
          handle,
          compact,
          moved: false,
          startX: event.clientX,
          startY: event.clientY,
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top
        };
        handle.setPointerCapture(event.pointerId);
      });
      handle.addEventListener('pointermove', event => {
        if (drag?.id !== event.pointerId || drag.handle !== handle) return;
        if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 6) return;
        drag.moved = true;
        event.preventDefault();
        host.classList.add('mft-dragging');
        clampPosition(event.clientX - drag.x, event.clientY - drag.y);
      });
      function finish(event) {
        if (drag?.id !== event.pointerId || drag.handle !== handle) return;
        if (drag.moved) {
          const bounds = host.getBoundingClientRect();
          compactPosition = {
            x: bounds.left,
            y: bounds.top
          };
          if (compact && event.type === 'pointerup') suppressLauncherClickUntil = performance.now() + 500;
        }
        drag = null;
        host.classList.remove('mft-dragging');
      }
      handle.addEventListener('pointerup', finish);
      handle.addEventListener('pointercancel', finish);
      handle.addEventListener('lostpointercapture', finish);
      handle.addEventListener('keydown', event => {
        if (event.key === 'Home') {
          host.style.left = '';
          host.style.top = '';
          host.style.right = '';
          host.style.bottom = '';
          const style = getComputedStyle(host);
          compactPosition = {
            x: window.innerWidth - 56 - parseFloat(style.right),
            y: window.innerHeight - 56 - parseFloat(style.bottom)
          };
          const bounds = host.getBoundingClientRect();
          clampPosition(bounds.left, bounds.top);
          positionOptions();
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        const directions = {
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0],
          ArrowUp: [0, -1],
          ArrowDown: [0, 1]
        };
        if (!directions[event.key]) return;
        const bounds = host.getBoundingClientRect();
        const [horizontalPosition, verticalPosition] = directions[event.key];
        clampPosition(bounds.left + horizontalPosition * (event.shiftKey ? 20 : 5), bounds.top + verticalPosition * (event.shiftKey ? 20 : 5));
        const moved = host.getBoundingClientRect();
        compactPosition = {
          x: moved.left,
          y: moved.top
        };
        event.preventDefault();
        event.stopPropagation();
      });
    }
    bindDrag(launcher, true);
    bindDrag(moveButton, false);
    document.addEventListener('keydown', event => {
      if (!opened || event.isComposing) return;
      if (event.key === 'Escape' && (tool !== 'cursor' || editor)) {
        setTool('cursor');
        setOptionsOpen(false);
        if (event.target.closest('.mft-options')) host.querySelector('[data-tool="cursor"]').focus();
        event.preventDefault();
        return;
      }
      if (event.key === 'Escape' && !options.hidden) {
        setOptionsOpen(false);
        optionsButton.focus();
        event.preventDefault();
        return;
      }
      if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        cancelGesture();
        if (event.shiftKey) history.redo();else history.undo();
        render();
      }
    });
    window.addEventListener('scroll', updatePosition, {
      passive: true,
      capture: true
    });
    window.addEventListener('resize', () => {
      const bounds = host.getBoundingClientRect();
      if (host.style.left) clampPosition(bounds.left, bounds.top);
      closeEditor();
      updateSizeLimit();
      positionOptions();
      if (compactPosition) compactPosition = {
        x: Math.max(8, Math.min(compactPosition.x, innerWidth - 64)),
        y: Math.max(8, Math.min(compactPosition.y, innerHeight - 64))
      };
      scheduleContext();
    });
    function fullscreen() {
      const full = document.fullscreenElement;
      const replaced = full?.tagName === 'IFRAME';
      const parent = full && !replaced ? full : document.body;
      parent.append(overlay, host, toast);
      const embedded = window.self !== window.top && !full;
      host.classList.toggle('mft-unavailable', replaced || embedded);
      overlay.classList.toggle('mft-unavailable', replaced || embedded);
      setTool('cursor');
      scheduleContext();
    }
    document.addEventListener('fullscreenchange', fullscreen);
    document.addEventListener('change', scheduleContext);
    document.addEventListener('click', event => {
      if (!event.target.closest('.mft-ui')) setOptionsOpen(false);
      if (!event.target.closest('.mft-ui, .mft-editor, .mft-overlay')) scheduleContext();
    });
    const observed = document.getElementById('main-content-area') || document.body;
    new MutationObserver(records => {
      if (records.some(record => !record.target.closest?.('.mft-ui, .mft-editor, .mft-overlay, .mft-toast'))) scheduleContext();
    }).observe(observed, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'src']
    });
    setOrientation(orientation, false);
    updateSizeLimit();
    fullscreen();
    window.SocialFloatingTools = {
      open: () => toggle(true),
      close: () => toggle(false)
    };
    toggle(true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);else init();
})();
