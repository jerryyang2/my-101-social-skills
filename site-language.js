(() => {
  'use strict';
  const root = new URL('.', document.currentScript.src);
  const key = 'social_skills_language';
  const pageURL = new URL(location.href);
  const sourcePath = decodeURIComponent(pageURL.pathname.slice(root.pathname.length));
  const current = sourcePath.startsWith('en/') ? 'en' : 'zh-Hant';
  const requested = pageURL.searchParams.get('lang');
  let remembered = null;
  let storageAvailable = true;
  try { remembered = localStorage.getItem(key); } catch (_) { storageAvailable = false; }
  const valid = value => value === 'en' || value === 'zh-Hant';
  const language = valid(requested) ? requested : valid(remembered) ? remembered : 'zh-Hant';
  if (valid(requested)) {
    try { localStorage.setItem(key, language); } catch (_) { storageAvailable = false; }
  }
  function editionURL(url, next) {
    const relative = decodeURIComponent(url.pathname.slice(root.pathname.length)).replace(/^en\//, '');
    url.pathname = root.pathname + (next === 'en' ? 'en/' : '') + relative;
    if (storageAvailable) url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    return url;
  }
  // File previews and print renderers use the edition encoded in their file path.
  if (/^https?:$/.test(location.protocol) && current !== language) {
    location.replace(editionURL(pageURL, language));
    return;
  }
  document.documentElement.lang = current;
  window.SiteLanguage = {
    language: current,
    englishVoice(gender = 'female') {
      const voices = window.speechSynthesis?.getVoices().filter(v => /^en[-_]/i.test(v.lang)) || [];
      const matches = gender === 'male' ? /daniel|alex|aaron|fred|david|george|\bmale\b/i : /samantha|victoria|karen|susan|zira|female/i;
      return voices.find(v => matches.test(v.name)) || voices.find(v => /^en[-_]US$/i.test(v.lang)) || voices[0] || null;
    }
  };
  function contextURL() {
    const url = new URL(location.href);
    if (document.body.classList.contains('social-classroom')) {
      if (typeof currentBriefing !== 'undefined' && currentBriefing?.id) url.searchParams.set('id', currentBriefing.id);
      if (typeof currentSlideIndex === 'number') url.searchParams.set('slide', currentSlideIndex);
    } else if (document.body.classList.contains('social-garden') && typeof getActiveBriefing === 'function') {
      const lesson = getActiveBriefing();
      if (lesson?.id) url.searchParams.set('id', lesson.id);
    }
    const chapters = [...document.querySelectorAll('[id^="lesson-"]')];
    const chapter = chapters.filter(el => el.getBoundingClientRect().top <= 160).pop();
    if (chapter) url.hash = chapter.id;
    return url;
  }
  function mount() {
    if (document.getElementById('siteLanguageSelect')) return;
    const label = document.createElement('label');
    label.className = 'site-language-switch';
    const text = document.createElement('span');
    text.textContent = current === 'en' ? 'Language' : '語言';
    const select = document.createElement('select');
    select.id = 'siteLanguageSelect';
    select.setAttribute('aria-label', current === 'en' ? 'Website language' : '網站語言');
    for (const [value, name] of [['en', 'English'], ['zh-Hant', '繁體中文']]) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = name;
      select.appendChild(option);
    }
    select.value = current;
    select.addEventListener('change', () => {
      const next = select.value;
      if (!valid(next)) return;
      try { localStorage.setItem(key, next); } catch (_) { storageAvailable = false; }
      window.speechSynthesis?.cancel();
      location.assign(editionURL(contextURL(), next));
    });
    label.append(text, select);
    const classroom = document.querySelector('.classroom-header');
    const brand = document.querySelector('.header-container > .brand');
    const island = document.querySelector('.game-topbar .brand-section');
    const secondary = document.querySelector('.screen-toolbar .toolbar-right, .manual-nav, .reader-toolbar, .book-reader-nav');
    if (classroom) classroom.insertBefore(label, classroom.querySelector('.classroom-controls'));
    else if (brand) {
      const row = document.createElement('div'); row.className = 'site-brand-row';
      brand.replaceWith(row); row.append(brand, label);
    } else if (island) island.append(label);
    else if (secondary) secondary.append(label);
    else { const bar=document.createElement('div'); bar.className='site-language-bar'; bar.append(label); document.body.prepend(bar); }
    // Without storage permission, carry the choice through ordinary site links.
    if (!storageAvailable) document.addEventListener('click', event => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      const url = new URL(link.href);
      if (url.origin === location.origin && url.pathname.startsWith(root.pathname) && /\.html$/.test(url.pathname)) {
        url.searchParams.set('lang', current); link.href = url;
      }
    }, {capture: true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => queueMicrotask(mount));
  else mount();
})();
