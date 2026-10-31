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
  const menus = [...header.querySelectorAll('details')];
  document.addEventListener('click', event => {
    menus.forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  });
  header.addEventListener('keydown', event => {
    const openMenu = menus.find(menu => menu.open);
    if (event.key === 'Escape' && openMenu) {
      openMenu.open = false;
      openMenu.querySelector('summary').focus();
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key !== 'Escape') {
      event.stopPropagation();
    }
  });
  document.getElementById('btnToggleView').addEventListener('click', () => {
    settings.open = false;
    settings.querySelector('summary').focus();
  });
})();
