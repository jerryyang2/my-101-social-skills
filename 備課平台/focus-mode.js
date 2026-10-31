(() => {
  'use strict';

  function initializeFocusMode() {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'focus-toggle';
    toggle.setAttribute('aria-pressed', 'false');
    document.body.appendChild(toggle);
    const fontControls = document.createElement('div');
    fontControls.className = 'focus-font-controls';
    fontControls.setAttribute('role', 'group');
    fontControls.setAttribute('aria-label', '字級調整');
    fontControls.hidden = true;
    fontControls.innerHTML = '<button type="button" data-size="smaller" aria-label="縮小字級">A−</button><button type="button" data-size="reset" aria-label="還原字級" title="還原字級" aria-live="polite">100%</button><button type="button" data-size="larger" aria-label="放大字級">A＋</button>';
    document.body.appendChild(fontControls);
    const smaller = fontControls.querySelector('[data-size="smaller"]');
    const larger = fontControls.querySelector('[data-size="larger"]');
    const reset = fontControls.querySelector('[data-size="reset"]');
    let fontScale = 100;
    let rootFontSize = null;
    let previousFontSize = '';
    let simulated = false;
    let pending = false;
    let previousFocus = null;
    let previousScroll = null;

    function fullscreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }

    function synchronize() {
      const active = Boolean(fullscreenElement() || simulated);
      if (active && rootFontSize === null) {
        previousFontSize = document.documentElement.style.fontSize;
        rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      } else if (!active && rootFontSize !== null) {
        document.documentElement.style.fontSize = previousFontSize;
        rootFontSize = null;
      }
      fontControls.hidden = !active;
      applyFontScale();
      document.body.classList.toggle('lesson-focus', active);
      document.documentElement.classList.toggle('focus-fallback', simulated);
      toggle.textContent = active ? '⤡ 離開全螢幕' : '⛶ 全螢幕';
      toggle.title = active ? '離開全螢幕（Esc）' : '全螢幕・專心上課';
      toggle.setAttribute('aria-label', toggle.title);
      toggle.setAttribute('aria-pressed', String(active));
      if (!active && previousScroll) {
        window.scrollTo(previousScroll.left, previousScroll.top);
        previousScroll = null;
        if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
        previousFocus = null;
      }
      window.dispatchEvent(new Event('resize'));
    }

    function applyFontScale() {
      if (rootFontSize !== null) document.documentElement.style.fontSize = `${rootFontSize * fontScale / 100}px`;
      smaller.disabled = fontScale <= 80;
      larger.disabled = fontScale >= 180;
      reset.textContent = `${fontScale}%`;
      reset.setAttribute('aria-label', `還原字級，目前 ${fontScale}%`);
    }

    function resizeText(nextScale) {
      fontScale = Math.max(80, Math.min(180, nextScale));
      applyFontScale();
      window.dispatchEvent(new Event('resize'));
    }

    smaller.addEventListener('click', () => resizeText(fontScale - 10));
    larger.addEventListener('click', () => resizeText(fontScale + 10));
    reset.addEventListener('click', () => resizeText(100));
    fontControls.addEventListener('keydown', event => {
      if (event.key !== 'Escape') event.stopPropagation();
    });

    async function toggleFocus() {
      if (pending) return;
      pending = true;
      try {
        if (fullscreenElement()) {
          const exit = document.exitFullscreen || document.webkitExitFullscreen;
          await exit.call(document);
        } else if (simulated) {
          simulated = false;
        } else {
          previousFocus = document.activeElement;
          previousScroll = { left: window.scrollX, top: window.scrollY };
          const root = document.documentElement;
          const request = root.requestFullscreen || root.webkitRequestFullscreen;
          try {
            if (!request) throw new Error('Fullscreen unavailable');
            await request.call(root);
          } catch {
            simulated = true;
          }
        }
      } finally {
        synchronize();
        pending = false;
      }
    }

    toggle.addEventListener('click', toggleFocus);
    toggle.addEventListener('keydown', event => {
      if (event.key !== 'Escape') event.stopPropagation();
    });
    document.addEventListener('fullscreenchange', synchronize);
    document.addEventListener('webkitfullscreenchange', synchronize);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && simulated) {
        simulated = false;
        synchronize();
      }
    });
    window.SocialFocus = { toggle: toggleFocus };
    synchronize();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFocusMode);
  } else {
    initializeFocusMode();
  }
})();
