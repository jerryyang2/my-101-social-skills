(() => {
  'use strict';

  // 只在正式 GitHub Pages 網站收集資料
  if (location.hostname !== 'jerryyang2.github.io') return;

  const googleTagId = 'GTM-MQQCK9V3';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const googleTag = document.createElement('script');
  googleTag.async = true;
  googleTag.src =
    'https://www.googletagmanager.com/gtm.js?id=' +
    encodeURIComponent(googleTagId);
  googleTag.dataset.socialSkillsGoogleTag = 'true';
  (document.head || document.documentElement).appendChild(googleTag);

  window.gtag('js', new Date());

  const knownInteractions = {
    classWorksheetBtn: 'open_worksheet',
    classPrepLink: 'return_to_planner',
    classroomBrandLink: 'return_to_planner',
    dateDropdown: 'lesson_selector',
    nextBtn: 'next_classroom_step',
    participationLaunch: 'participation_support',
    prevBtn: 'previous_classroom_step',
    questionTtsBtn: 'read_question',
    siteLanguageSelect: 'language_selector',
    starToggleBtn: 'star_feedback',
    storyTtsBtn: 'read_story'
  };

  function safeToken(value, fallback) {
    const token = String(value || '')
      .trim()
      .replace(/[^a-zA-Z0-9_-]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 80);

    return token || fallback;
  }

  function interactionName(element) {
    if (element.id && knownInteractions[element.id]) {
      return knownInteractions[element.id];
    }

    if (element.id) {
      return safeToken(element.id, element.tagName.toLowerCase());
    }

    const className = [...element.classList]
      .slice(0, 2)
      .join('_');

    return safeToken(
      className,
      element.tagName.toLowerCase()
    );
  }

  function sendEvent(name, parameters = {}) {
    window.gtag('event', name, {
      page_path: location.pathname,
      site_language:
        document.documentElement.lang || 'zh-Hant',
      ...parameters
    });
  }

  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;

    const element = event.target.closest(
      'a[href], button, [role="button"], ' +
      'input[type="button"], input[type="submit"]'
    );

    if (
      !element ||
      element.closest('[data-analytics-ignore]')
    ) {
      return;
    }

    const name = interactionName(element);

    if (element.matches('a[href]')) {
      const destination = new URL(
        element.href,
        location.href
      );

      const internal =
        destination.origin === location.origin;

      const lessonId =
        destination.searchParams.get('id');

      const parameters = {
        interaction_name: name,
        destination_host: destination.hostname,
        destination_path: destination.pathname,
        destination_section: safeToken(
          destination.hash.slice(1),
          'none'
        )
      };

      if (
        lessonId &&
        /^[a-zA-Z0-9_-]{1,80}$/.test(lessonId)
      ) {
        parameters.destination_lesson_id =
          lessonId;
      }

      sendEvent(
        internal
          ? 'navigation_click'
          : 'outbound_navigation',
        parameters
      );

      return;
    }

    sendEvent('tool_click', {
      interaction_name: name
    });
  }, { capture: true });

  document.addEventListener('change', event => {
    if (
      !(event.target instanceof HTMLSelectElement)
    ) {
      return;
    }

    const select = event.target;

    if (select.id === 'siteLanguageSelect') {
      sendEvent('language_change', {
        selected_language: safeToken(
          select.value,
          'unknown'
        )
      });
      return;
    }

    if (
      select.id === 'dateDropdown' &&
      /^[a-zA-Z0-9_-]{1,80}$/.test(select.value)
    ) {
      sendEvent('lesson_select', {
        lesson_id: select.value
      });
      return;
    }

    sendEvent('selection_change', {
      interaction_name: interactionName(select),
      selected_index: select.selectedIndex
    });
  });

  const lessonId =
    new URL(location.href).searchParams.get('id');

  if (
    lessonId &&
    /^[a-zA-Z0-9_-]{1,80}$/.test(lessonId)
  ) {
    sendEvent('lesson_open', {
      lesson_id: lessonId
    });
  }
})();
