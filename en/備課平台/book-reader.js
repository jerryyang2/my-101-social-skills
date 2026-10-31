(() => {
  'use strict';

  const navigation = document.createElement('nav');
  navigation.className = 'book-reader-nav';
  navigation.setAttribute('aria-label', "Book Navigation");
  navigation.innerHTML = "<a href=\"#toc-1\">Contents</a><a href=\"#book-cover\">Back to Top</a>";
  document.body.appendChild(navigation);

  const toolbar = document.querySelector('.reader-toolbar');
  function updateScrollOffset() {
    const height = toolbar && getComputedStyle(toolbar).display !== 'none' ? toolbar.getBoundingClientRect().height + 32 : 16;
    document.documentElement.style.setProperty('--book-reader-offset', `${Math.ceil(height)}px`);
  }
  if (toolbar) new ResizeObserver(updateScrollOffset).observe(toolbar);
  window.addEventListener('resize', updateScrollOffset);
  updateScrollOffset();
})();
