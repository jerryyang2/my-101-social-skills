(() => {
  'use strict';

  const header = document.querySelector('.game-topbar');
  let previousHeight = 0;
  function updateHeaderHeight() {
    const height = Math.ceil(header.getBoundingClientRect().height);
    if (height === previousHeight) return;
    previousHeight = height;
    document.documentElement.style.setProperty('--island-header-height', `${height}px`);
    window.dispatchEvent(new Event('resize'));
  }
  new ResizeObserver(updateHeaderHeight).observe(header);
  updateHeaderHeight();

  const settings = header.querySelector('.game-settings');
  const settingsToggle = settings.querySelector('summary');
  document.addEventListener('click', event => {
    if (!settings.contains(event.target)) settings.open = false;
  });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && settings.open) {
      settings.open = false;
      settingsToggle.focus();
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key !== 'Escape') {
      event.stopPropagation();
    }
  });
  document.getElementById('btnToggleView').addEventListener('click', () => {
    settings.open = false;
    settingsToggle.focus();
  });
})();
