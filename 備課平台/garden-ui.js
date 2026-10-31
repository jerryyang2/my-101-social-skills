(() => {
  'use strict';

  const friends = [...document.querySelectorAll('[data-companion]')];
  const greetingHint = document.getElementById('gardenGreetingHint');
  const header = document.querySelector('.app-header');
  function updateHeaderHeight() {
    document.documentElement.style.setProperty('--app-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  }
  new ResizeObserver(updateHeaderHeight).observe(header);
  updateHeaderHeight();

  function greetFriend(companionId) {
    greetingHint.hidden = true;
    friends.forEach(friend => {
      const selected = friend.dataset.companion === companionId;
      friend.setAttribute('aria-pressed', String(selected));
      document.getElementById(`bubble-${friend.dataset.companion}`).hidden = !selected;
    });
    const dialogue = document.getElementById(`bubble-${companionId}`).textContent.trim();
    if (window.speechSynthesis && typeof window.speakIndexQueue === 'function') {
      window.speakIndexQueue(dialogue, 'greeting');
    }
  }

  friends.forEach(friend => {
    friend.addEventListener('click', () => greetFriend(friend.dataset.companion));
  });
  window.addEventListener('pagehide', () => window.stopIndexSpeech?.());

  document.querySelectorAll('.emotion-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.emotion-weather-station').dataset.emotion = button.dataset.emotion;
      document.querySelectorAll('.emotion-btn').forEach(option => {
        option.setAttribute('aria-pressed', String(option === button));
      });
    });
  });

  const teacherMenus = [...document.querySelectorAll('.teacher-menu')];
  document.addEventListener('click', event => {
    teacherMenus.forEach(menu => {
      if (!menu.contains(event.target) || event.target.closest('.teacher-menu-panel button, .teacher-menu-panel a')) {
        menu.open = false;
      }
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    teacherMenus.forEach(menu => {
      if (!menu.open) return;
      menu.open = false;
      menu.querySelector('summary').focus();
    });
  });

  const courseList = document.getElementById('dateList');
  document.getElementById('searchInput').addEventListener('input', () => { courseList.scrollTop = 0; });
  function labelCourses() {
    let section = 'weekly';
    [...courseList.children].forEach(card => {
      if (card.classList.contains('curriculum-group-header')) {
        section = card.classList.contains('legacy') ? 'inspiration' : 'weekly';
        card.setAttribute('role', 'heading');
        card.setAttribute('aria-level', '3');
        return;
      }
      if (!card.classList.contains('date-card')) return;
      card.dataset.courseSection = section;
      card.setAttribute('role', 'group');
      const title = card.querySelector('.date-card-title');
      const courseTitle = title.querySelector('.course-link-label')?.textContent || title.textContent;
      card.setAttribute('aria-label', courseTitle);
      card.querySelector('.sidebar-date-checkbox').setAttribute('aria-label', `標記課程完成：${courseTitle}`);
      if (!title.querySelector('button')) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'course-open-button';
        button.setAttribute('aria-label', `開啟教案：${courseTitle}`);
        const label = document.createElement('span');
        label.className = 'course-link-label';
        label.textContent = courseTitle;
        const arrow = document.createElement('span');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        button.append(label, arrow);
        title.replaceChildren(button);
      }
    });
    const count = courseList.querySelectorAll('.date-card').length;
    const searching = document.getElementById('searchInput').value.trim();
    document.getElementById('course-search-status').textContent = searching ? `找到 ${count} 堂課` : `共 ${count} 堂課`;
  }
  courseList.addEventListener('keydown', event => {
    if (!event.target.matches('.date-card') || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    event.target.click();
  });
  new MutationObserver(labelCourses).observe(courseList, { childList: true });
  labelCourses();

  const studentBank = document.getElementById('indexStudentsBar');
  const companionIcons = { yu: 'lion', jun: 'bear', he: 'panda', jia: 'fox' };
  function labelStudentAvatars() {
    studentBank.querySelectorAll('.chest-avatar').forEach(avatar => {
      const companionId = avatar.getAttribute('onclick').match(/highFiveMascot\('([a-z]+)'\)/)?.[1];
      if (!companionIcons[companionId]) return;
      avatar.dataset.companionAvatar = companionId;
      avatar.setAttribute('role', 'button');
      avatar.setAttribute('tabindex', '0');
      avatar.setAttribute('aria-label', avatar.title);
      avatar.innerHTML = `<svg viewBox="0 0 120 150" aria-hidden="true"><use href="assets/companions.svg?v=20261031-color#${companionIcons[companionId]}"></use></svg>`;
    });
  }
  studentBank.addEventListener('keydown', event => {
    if (!event.target.matches('[data-companion-avatar]') || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    event.target.click();
  });
  new MutationObserver(labelStudentAvatars).observe(studentBank, { childList: true });
  labelStudentAvatars();
})();
