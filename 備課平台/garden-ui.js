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
  }

  friends.forEach(friend => {
    friend.addEventListener('click', () => greetFriend(friend.dataset.companion));
  });

  document.querySelectorAll('.emotion-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.emotion-weather-station').dataset.emotion = button.dataset.emotion;
      document.querySelectorAll('.emotion-btn').forEach(option => {
        option.setAttribute('aria-pressed', String(option === button));
      });
    });
  });

  document.querySelectorAll('.pill').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(option => {
        option.setAttribute('aria-pressed', String(option === button));
      });
    });
  });

  const coursePicker = document.querySelector('.course-picker');
  const compactLayout = window.matchMedia('(max-width: 960px)');
  function updateCoursePicker() {
    coursePicker.open = !compactLayout.matches;
  }
  compactLayout.addEventListener('change', updateCoursePicker);
  updateCoursePicker();

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
  function labelCourses() {
    let section = 'weekly';
    [...courseList.children].forEach(card => {
      if (card.classList.contains('curriculum-group-header')) {
        section = card.classList.contains('legacy') ? 'inspiration' : 'weekly';
        return;
      }
      if (!card.classList.contains('date-card')) return;
      card.dataset.courseSection = section;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'group');
      card.setAttribute('aria-label', card.querySelector('.date-card-title').textContent);
      card.querySelector('.sidebar-date-checkbox').setAttribute('aria-label', `標記課程完成：${card.querySelector('.date-card-title').textContent}`);
    });
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
