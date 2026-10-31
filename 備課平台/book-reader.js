(() => {
  'use strict';

  const navigation = document.createElement('nav');
  navigation.className = 'book-reader-nav';
  navigation.setAttribute('aria-label', '電子書導覽');
  navigation.innerHTML = '<a href="#toc-1">目錄</a><a href="#book-cover">回頂部</a>';
  document.body.appendChild(navigation);

  const notice = document.createElement('p');
  notice.className = 'book-reader-notice';
  notice.setAttribute('role', 'status');
  notice.setAttribute('aria-live', 'polite');
  notice.hidden = true;
  document.body.appendChild(notice);
  let noticeTimer;

  function showReadingNotice() {
    clearTimeout(noticeTimer);
    notice.textContent = '這份教材僅供線上閱讀，未提供列印或另存功能。';
    notice.hidden = false;
    noticeTimer = setTimeout(() => { notice.hidden = true; }, 3000);
  }

  document.addEventListener('contextmenu', event => {
    event.preventDefault();
    showReadingNotice();
  }, { capture: true });

  document.addEventListener('keydown', event => {
    if (!(event.ctrlKey || event.metaKey) || !['p', 's'].includes(event.key.toLowerCase())) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showReadingNotice();
  }, { capture: true });

  const toolbar = document.querySelector('.reader-toolbar');
  function updateScrollOffset() {
    const height = toolbar && getComputedStyle(toolbar).display !== 'none' ? toolbar.getBoundingClientRect().height + 32 : 16;
    document.documentElement.style.setProperty('--book-reader-offset', `${Math.ceil(height)}px`);
  }
  if (toolbar) new ResizeObserver(updateScrollOffset).observe(toolbar);
  window.addEventListener('resize', updateScrollOffset);
  updateScrollOffset();
})();
