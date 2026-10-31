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
})();
