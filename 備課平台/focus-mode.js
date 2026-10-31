(() => {
  'use strict';

  function initializeFocusMode() {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'focus-toggle';
    toggle.setAttribute('aria-pressed', 'false');
    document.body.appendChild(toggle);
    let simulated = false;
    let pending = false;
    let previousFocus = null;
    let previousScroll = null;

    function fullscreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }

    function synchronize() {
      const active = Boolean(fullscreenElement() || simulated);
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
