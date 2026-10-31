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
  const consolePanel = document.querySelector('.explorer-console');
  if (window.matchMedia('(max-width: 700px)').matches) consolePanel.open = false;
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
  const overlays=['questDrawerOverlay','passportModalOverlay','saveCodeModalOverlay','modalCitadelOverlay'].map(id=>document.getElementById(id)).filter(Boolean);
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
