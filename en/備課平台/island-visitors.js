(() => {
  'use strict';

  const storageKey = 'social-island-visitors-v1';
  const legacyKey = 'isleforge_hero_rpg_save';
  const looks = ['dino', 'lion', 'unicorn', 'rocket'];
  const cleanName = value => Array.from(String(value || '').normalize('NFC').replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f]/g, '').trim()).slice(0, 16).join('');
  const bounded = (value, fallback, maximum) => Number.isFinite(value) ? Math.max(0, Math.min(maximum, value)) : fallback;
  function cleanProgress(value = {}) {
    return {
      name: cleanName(value.name) || "Visitor 1",
      look: looks.includes(value.look) ? value.look : 'dino',
      exp: bounded(value.exp, 25, 1000000),
      stars: bounded(value.stars, 0, 1000000),
      passed: [...new Set(Array.isArray(value.passed) ? value.passed.filter(week => Number.isInteger(week) && week >= 1 && week <= 52) : [])],
      stamps: Array.from({ length: 4 }, (_, index) => Boolean(value.stamps && value.stamps[index]))
    };
  }
  function cleanPosition(value) {
    return value && Number.isFinite(value.x) && Number.isFinite(value.z)
      ? { x: Math.max(-45, Math.min(45, value.x)), z: Math.max(-45, Math.min(45, value.z)) }
      : { x: 0, z: 2.8 };
  }
  const identifier = () => window.crypto?.randomUUID?.() || `visitor-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  let store = { activeId: '', visitors: [] };
  let pageVisitorId = '';
  let persistent = true;
  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(store));
      const selected = store.visitors.find(visitor => visitor.id === store.activeId) || active();
      localStorage.setItem(legacyKey, JSON.stringify(selected.progress));
      persistent = true;
    } catch {
      persistent = false;
    }
  }
  function active() {
    return store.visitors.find(visitor => visitor.id === (pageVisitorId || store.activeId)) || store.visitors[0];
  }
  function refresh() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && Array.isArray(saved.visitors)) {
        const identifiers = new Set();
        const visitors = saved.visitors.slice(0, 60).filter(visitor => {
          if (!visitor || typeof visitor.id !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(visitor.id) || identifiers.has(visitor.id)) return false;
          identifiers.add(visitor.id);
          return true;
        }).map(visitor => ({ id: visitor.id, progress: cleanProgress(visitor.progress || {}), position: cleanPosition(visitor.position) }));
        if (visitors.length) store = { visitors, activeId: visitors.some(visitor => visitor.id === saved.activeId) ? saved.activeId : visitors[0].id };
      }
    } catch {
      persistent = false;
    }
  }
  function initialize() {
    let legacy = {};
    try { legacy = JSON.parse(localStorage.getItem(legacyKey) || '{}') || {}; } catch { persistent = false; }
    refresh();
    if (!store.visitors.length) {
      store.visitors.push({ id: identifier(), progress: cleanProgress(legacy), position: cleanPosition(null) });
    }
    store.activeId = active().id;
    pageVisitorId = store.activeId;
    persist();
  }
  initialize();
  window.SocialIslandVisitors = {
    active: () => structuredClone(active()),
    list() {
      refresh();
      return store.visitors.map(visitor => ({ id: visitor.id, name: visitor.progress.name, look: visitor.progress.look }));
    },
    persistent: () => persistent,
    save(progress, position) {
      refresh();
      active().progress = cleanProgress(progress);
      active().position = cleanPosition(position);
      persist();
    },
    add(name) {
      refresh();
      const cleaned = cleanName(name);
      if (!cleaned || store.visitors.length >= 60 || store.visitors.some(visitor => visitor.progress.name === cleaned)) return null;
      const visitor = { id: identifier(), progress: cleanProgress({ name: cleaned, look: looks[store.visitors.length % looks.length] }), position: cleanPosition(null) };
      store.visitors.push(visitor);
      store.activeId = visitor.id;
      pageVisitorId = visitor.id;
      persist();
      return structuredClone(visitor);
    },
    switchTo(id) {
      refresh();
      if (!store.visitors.some(visitor => visitor.id === id)) return null;
      store.activeId = id;
      pageVisitorId = id;
      persist();
      return structuredClone(active());
    },
    cleanName
  };
})();
