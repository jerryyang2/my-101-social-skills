(() => {
  'use strict';

  const friends = [...document.querySelectorAll('[data-companion]')];
  const greetingHint = document.getElementById('gardenGreetingHint');

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
      document.querySelectorAll('.emotion-btn').forEach(option => {
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
    courseList.querySelectorAll('.date-card').forEach(card => {
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
})();
