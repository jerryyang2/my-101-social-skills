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
  const layoutToggle = document.getElementById('islandLayoutToggle');
  function setIslandLayout(layout, focusDirectory = false) {
    const guide = layout === 'guide';
    document.body.dataset.islandLayout = guide ? 'guide' : 'play';
    layoutToggle.textContent = guide ? '回到滿版群島' : '選島導覽';
    layoutToggle.setAttribute('aria-expanded', String(guide));
    window.dispatchEvent(new Event('resize'));
    if (guide && focusDirectory) {
      const directory = document.getElementById('islandDirectory');
      directory.scrollIntoView({ block: 'start' });
      directory.querySelector('button')?.focus({ preventScroll: true });
    } else if (!guide) window.scrollTo(0, 0);
  }
  layoutToggle.addEventListener('click', () => setIslandLayout(document.body.dataset.islandLayout === 'play' ? 'guide' : 'play', true));
  window.SocialIslandLayout = { set: setIslandLayout };
  function showLinkedDirectory() {
    if (location.hash === '#islandDirectory') setIslandLayout('guide', true);
  }
  window.addEventListener('hashchange', showLinkedDirectory);
  window.addEventListener('DOMContentLoaded', showLinkedDirectory);
  const consolePanel = document.querySelector('.explorer-console');
  if (window.matchMedia('(max-width: 700px)').matches) consolePanel.open = false;
  const questPanel = document.getElementById('questDrawerOverlay');
  let questOpen = false, questReturnFocus = null, previousConsoleOpen = consolePanel.open;
  function synchronizeQuestPanel() {
    const open = questPanel.classList.contains('active');
    if (open === questOpen) return;
    questOpen = open;
    if (open) {
      questReturnFocus = document.activeElement;
      previousConsoleOpen = consolePanel.open;
      consolePanel.open = false;
      const heading = document.getElementById('drawerTitle');
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    } else {
      consolePanel.open = previousConsoleOpen;
      if (questPanel.contains(document.activeElement)) {
        const target = questReturnFocus?.isConnected && questReturnFocus.getClientRects().length ? questReturnFocus : document.getElementById('threeCanvas');
        target.focus({ preventScroll: true });
      }
    }
    window.dispatchEvent(new Event('resize'));
  }
  new MutationObserver(synchronizeQuestPanel).observe(questPanel, {attributes:true,attributeFilter:['class']});
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && questOpen && !document.querySelector('dialog[open], .modal-overlay.active')) {
      event.preventDefault();
      window.socialGame.closeQuestDrawer();
    }
  });
  document.getElementById('explorerMovement').appendChild(document.getElementById('virtualDpad'));
  new ResizeObserver(() => window.dispatchEvent(new Event('resize'))).observe(document.getElementById('stage'));

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

// Keep keyboard focus inside the open island dialog and restore its entry point.
(() => {
  const overlays=['passportModalOverlay','saveCodeModalOverlay','modalCitadelOverlay'].map(id=>document.getElementById(id)).filter(Boolean);
  const originalInert=new Map();let active=null,returnFocus=null;
  const controls=el=>[...el.querySelectorAll('button,input,select,textarea,a[href],summary,[tabindex]')].filter(x=>!x.disabled&&x.tabIndex>=0&&x.getClientRects().length);
  function update(){
    const next=overlays.filter(x=>x.classList.contains('active')).at(-1)||null;
    if(next===active)return;
    if(!active&&next){returnFocus=document.activeElement;[...document.body.children].forEach(x=>originalInert.set(x,x.inert));}
    active=next;
    if(active){
      const content=active.firstElementChild;content.setAttribute('role','dialog');content.setAttribute('aria-modal','true');
      const heading=content.querySelector('h2,h3');if(heading){heading.id||=active.id+'Title';content.setAttribute('aria-labelledby',heading.id);}
      originalInert.forEach((value,node)=>node.inert=node===active?false:true);
      document.body.classList.add('island-dialog-open');controls(content)[0]?.focus();
    }else{
      originalInert.forEach((value,node)=>node.inert=value);originalInert.clear();
      document.body.classList.remove('island-dialog-open');returnFocus?.focus();returnFocus=null;
    }
  }
  const observer=new MutationObserver(update);overlays.forEach(x=>observer.observe(x,{attributes:true,attributeFilter:['class']}));
  document.addEventListener('keydown',e=>{
    if(!active)return;
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();active.querySelector('.drawer-close-btn')?.click();}
    else if(e.key==='Tab'){
      const items=controls(active),first=items[0],last=items.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
    }
  },true);
  update();
})();
