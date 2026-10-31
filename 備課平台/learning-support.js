/* Classroom participation and teacher observations. All records stay on this device. */
(function (root) {
  'use strict';
  const KEY = 'social_learning_observations_v1';
  const levels = ['independent', 'visual', 'verbal', 'model', 'notyet', 'no_opportunity'];
  const labels = ['獨立完成', '圖卡提示後完成', '口語提示後完成', '示範／共同完成', '尚未完成', '沒有機會／選擇休息'];
  const learners = [{id:'yu',name:'宇 🦁'},{id:'he',name:'和 🐼'},{id:'jia',name:'嘉 🦊'},{id:'jun',name:'畯 🐻'}];
  function summarize(rows) {
    const valid = rows.filter(r => levels.includes(r.level) && r.level !== 'no_opportunity');
    const independent = valid.filter(r => r.level === 'independent').length;
    const supported = valid.filter(r => ['visual','verbal','model'].includes(r.level)).length;
    return { opportunities:valid.length, independent, supported, notyet:valid.length-independent-supported,
      excluded:rows.filter(r=>r.level==='no_opportunity').length,
      independentRate:valid.length ? Math.round(independent/valid.length*100) : null };
  }
  function validRecord(r) {
    return r && typeof r.id==='string' && r.id.length<100 && typeof r.lesson==='string' && r.lesson.length<100 &&
      learners.some(s=>s.id===r.learner) && levels.includes(r.level) &&
      ['rehearsal','class','home'].includes(r.context) && /^\d{4}-\d{2}-\d{2}$/.test(r.date) &&
      ['target','note'].every(k=>typeof r[k]==='string' && r[k].length<=500) && (r.targetKey===undefined || (typeof r.targetKey==='string' && r.targetKey.length<=600));
  }
  function mergeRecords(current, incoming) {
    if (!Array.isArray(incoming) || incoming.length>10000 || !incoming.every(validRecord)) throw new Error('invalid');
    const map=new Map(current.map(r=>[r.id,r]));
    incoming.forEach(r=>{ if(!map.has(r.id)) map.set(r.id, r); });
    if(map.size>10000) throw new Error('limit');
    return [...map.values()];
  }
  function csvCell(value) { const raw=String(value);const safe=/^\s*[=+@-]/.test(raw)?"'"+raw:raw;return '"'+safe.replace(/"/g,'""')+'"'; }
  const api={summarize,validRecord,mergeRecords,csvCell};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  if(typeof document==='undefined') return;
  root.LearningSupport=api;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let storageFailed=false;
  function read() { try {const data=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(data)?data.filter(validRecord):[];}catch(e){storageFailed=true;return [];} }
  function save(rows) { try {localStorage.setItem(KEY,JSON.stringify(rows));return true;}catch(e){storageFailed=true;return false;} }
  function dateToday(){ const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
  function lesson(){return typeof root.getActiveBriefing==='function' ? root.getActiveBriefing() : root.currentBriefing||null;}
  function currentLesson(){try { if(typeof currentBriefing!=='undefined' && currentBriefing) return currentBriefing; if(typeof currentSheetId!=='undefined' && typeof dailyWorksheets!=='undefined') return dailyWorksheets[currentSheetId]; }catch(e){} return lesson();}
  let returnFocus=null;
  function showDialog(id, title, body) {
    returnFocus=document.activeElement;
    let dialog=document.getElementById(id);
    if(!dialog){dialog=document.createElement('dialog');dialog.id=id;dialog.className='learning-dialog';document.body.append(dialog);dialog.addEventListener('close',()=>returnFocus?.focus());}
    dialog.innerHTML=`<header><h2 id="${id}Title">${title}</h2><button type="button" data-close aria-label="關閉視窗">✕</button></header><div class="learning-dialog-body">${body}</div>`;
    dialog.setAttribute('aria-labelledby',id+'Title');
    dialog.querySelector('[data-close]').onclick=()=>dialog.close();
    if(!dialog.open) dialog.showModal();
    return dialog;
  }
  function status(text){const el=document.getElementById('observationStatus');if(el)el.textContent=text;}
  function rowsFor(brief, learner, date) {return read().filter(r=>r.lesson===brief.id && (!learner||r.learner===learner) && (!date||r.date===date));}
  api.getRecords=(id,learner)=>read().filter(r=>r.lesson===id && (!learner||r.learner===learner));
  api.openObservations=function(){
    const b=currentLesson();if(!b)return;
    const target=(b.visualCard?.steps?.[1]?.text||b.section3?.steps?.[1]?.text||b.summary||b.title).slice(0,500);
    const d=showDialog('observationDialog','教學觀察與生活追蹤',`
      <p class="learning-hint">每次只記一個可觀察的行動。演練、普通班與家庭的資料分開看；星星與答題次數不代替觀察。</p>
      <p><strong>${esc(b.title)}</strong></p>
      <form id="observationForm">
        <div class="learning-fields"><label>日期<input id="observationDate" type="date" value="${dateToday()}" required></label>
        <label>學生代號<select id="observationLearner">${learners.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</select></label>
        <label>觀察情境<select id="observationContext"><option value="rehearsal">課堂演練</option><option value="class">普通班／校園</option><option value="home">家庭回饋</option></select></label></div>
        <label class="learning-label">本次觀察的行動<input id="observationTarget" maxlength="500" required value="${esc(target)}"></label>
        <label class="learning-label">提示與完成情形<select id="observationLevel" required><option value="">請選擇觀察結果</option>${levels.map((v,i)=>`<option value="${v}">${labels[i]}</option>`).join('')}</select></label>
        <label class="learning-label">簡短紀錄<textarea id="observationNote" maxlength="500" rows="2" placeholder="例如：在桌遊換局時，指著圖卡提出加入；或這次先觀察。請用代號，不填姓名與診斷。"></textarea></label>
        <button type="submit">儲存這一次觀察</button>
      </form>
      <p id="observationStatus" role="status">${storageFailed?'目前無法讀取瀏覽器儲存空間，請先另存紀錄。':'資料只存在這個瀏覽器，不會上傳。'}</p>
      <section id="observationSummary" aria-label="分情境觀察摘要"></section>
      <details><summary>查看本課紀錄與備份</summary><div id="observationHistory"></div>
        <div class="learning-actions"><button type="button" id="exportObservations">備份全部觀察 JSON</button><button type="button" id="exportObservationCsv">匯出觀察 CSV</button><label class="learning-import">合併觀察備份<input id="importObservations" type="file" accept=".json,application/json"></label></div>
        <p class="learning-hint">備份含代號與觀察內容，請保存在教師自己的位置。合併只加入新的紀錄，不覆寫現有紀錄。這份備份不包含星星與群島進度。</p>
      </details>`);
    function refresh(){
      const id=d.querySelector('#observationLearner').value;
      const rows=rowsFor(b,id);
      const activeTarget=d.querySelector('#observationTarget').value.trim();
      const activeKey=activeTarget===target?b.id+':step-2':'custom:'+activeTarget;
      d.querySelector('#observationSummary').innerHTML=['rehearsal','class','home'].map((ctx,i)=>{
        const subset=rows.filter(r=>r.context===ctx && (r.targetKey?r.targetKey===activeKey:r.target===activeTarget));const s=summarize(subset);
        return `<div class="learning-summary"><strong>${['課堂演練','普通班／校園','家庭回饋'][i]}</strong><span>有效機會 ${s.opportunities} 次；獨立 ${s.independent} 次；協助完成 ${s.supported} 次；尚未完成 ${s.notyet} 次</span><span>獨立完成比例：${s.independentRate===null?'尚無資料':s.independentRate+'%'}；沒有機會／休息 ${s.excluded} 次不列入分母</span></div>`;
      }).join('')+'<p class="learning-hint">比例是本課累計摘要。比較前請確認目標、情境與提示條件相同；不同目標不合併判定達標。</p>';
      d.querySelector('#observationHistory').innerHTML=rows.length?rows.slice(-40).reverse().map(r=>`<article class="learning-record"><strong>${esc(r.date)} · ${labels[levels.indexOf(r.level)]}</strong><p>${esc(r.target)}</p><p>${esc(r.note)}</p><button type="button" data-delete="${esc(r.id)}">刪除這筆誤記</button></article>`).join(''):'<p>本課尚無這位學生的觀察。</p>';
      d.querySelectorAll('[data-delete]').forEach(btn=>btn.onclick=()=>{if(confirm('刪除這筆誤記？刪除前可先備份。')){if(save(read().filter(r=>r.id!==btn.dataset.delete))){refresh();status('已刪除這筆紀錄。');}else status('未能儲存，請先匯出備份。');}});
    }
    d.querySelector('#observationLearner').onchange=refresh;
    d.querySelector('#observationTarget').onchange=refresh;
    d.querySelector('form').onsubmit=e=>{
      e.preventDefault();const el=id=>d.querySelector('#'+id).value;
      const row={id:root.crypto?.randomUUID?.()||Date.now()+'-'+Math.random().toString(36).slice(2),lesson:b.id,learner:el('observationLearner'),date:el('observationDate'),context:el('observationContext'),target:el('observationTarget').trim(),level:el('observationLevel'),note:el('observationNote').trim()};
      if(!validRecord(row)||!row.target){status('請填寫有效日期與本次觀察的行動。');return;}
      const existing=read();if(existing.length>=10000){status('觀察已達一萬筆，請先匯出整理。');return;}
      row.targetKey=row.target===target?b.id+':step-2':'custom:'+row.target;
      if(save([...existing,row])){d.querySelector('#observationNote').value='';refresh();status('已儲存這一次觀察。');}else status('儲存空間不足或停用，這筆尚未儲存，請先另存內容。');
    };
    function download(data,name,type){const a=document.createElement('a');const url=URL.createObjectURL(new Blob([data],{type}));a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
    d.querySelector('#exportObservations').onclick=()=>download(JSON.stringify({format:'social-learning-observations',version:1,records:read()},null,2),'social-learning-observations.json','application/json');
    d.querySelector('#exportObservationCsv').onclick=()=>{
      const heading=['日期','課程代號','學生代號','情境','目標行動','提示與完成情形','紀錄'];
      const csv=[heading,...read().map(r=>[r.date,r.lesson,r.learner,r.context,r.target,labels[levels.indexOf(r.level)],r.note])].map(r=>r.map(csvCell).join(',')).join('\r\n');
      download('\ufeff'+csv,'social-learning-observations.csv','text/csv;charset=utf-8');
    };
    d.querySelector('#importObservations').onchange=async e=>{
      const f=e.target.files[0];if(!f)return;
      try{if(f.size>8000000)throw new Error('size');const data=JSON.parse(await f.text());if(data.format!=='social-learning-observations'||data.version!==1)throw new Error('format');const merged=mergeRecords(read(),data.records);if(!save(merged))throw new Error('storage');refresh();status('已合併備份；重複的紀錄沒有再次加入。');}catch(err){status('無法匯入：請選擇本站匯出的有效觀察備份，原有資料未被覆寫。');}e.target.value='';
    };
    refresh();
  };
  api.openParticipation=function(){
    const d=showDialog('participationDialog','我想這樣參與',`<p>可以用說的、指圖或動作表達。老師會先聽聽你的需要。</p><div class="participation-grid">${['🙋 我需要幫忙','🔁 請再說一次','👀 我想先看一次','🌿 我想休息一下','💬 我有別的想法','🤝 我準備好了'].map(t=>`<button type="button" data-message="${t}">${t}</button>`).join('')}</div><p id="participationMessage" role="status">選擇一張卡片，讓老師知道。</p><p class="learning-hint">先確認學生需要，再一起決定支持方式；休息與拒絕不扣星。</p><button type="button" data-quiet-mode>低刺激：開啟</button>`);
    d.querySelector('[data-quiet-mode]').onclick=api.toggleQuiet;applyQuiet();
    d.querySelectorAll('[data-message]').forEach(btn=>btn.onclick=()=>{d.querySelector('#participationMessage').textContent=btn.dataset.message;d.querySelectorAll('[data-message]').forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));});
  };
  api.quiet=()=>{try{return localStorage.getItem('social_quiet_mode')!=='false';}catch(e){return true;}};
  api.toggleQuiet=function(){const value=!api.quiet();try{localStorage.setItem('social_quiet_mode',String(value));}catch(e){}applyQuiet();};
  function applyQuiet(){document.documentElement.classList.toggle('quiet-classroom',api.quiet());document.querySelectorAll('[data-quiet-mode]').forEach(b=>{b.setAttribute('aria-pressed',String(api.quiet()));b.textContent=api.quiet()?'低刺激：開啟':'低刺激：關閉';});}
  document.addEventListener('DOMContentLoaded',()=>{
    const mobileToggle=document.getElementById('mobileToolsToggle');
    if(mobileToggle){mobileToggle.onclick=()=>{const open=mobileToggle.getAttribute('aria-expanded')!=='true';mobileToggle.setAttribute('aria-expanded',String(open));document.getElementById('classroomTeachingTools').classList.toggle('mobile-tools-open',open);};}
    const host=document.querySelector('#starWidget')?.parentElement||document.querySelector('.header-actions.main-menu')||document.querySelector('.toolbar-right');
    if(host){const b=document.createElement('button');b.type='button';b.className='learning-launch';b.textContent='教學觀察';if(host.matches('.main-menu')){b.classList.add('btn');b.innerHTML='<svg class="tool-icon" viewBox="0 0 48 48" aria-hidden="true"><use href="assets/tool-icons.svg#copy"></use></svg><span>教學觀察</span>';}b.onclick=api.openObservations;host.insertBefore(b,host.querySelector('[onclick*="openCommunication"]')||host.firstChild);}
    const tools=document.createElement('div');tools.className='learning-support-bar';
    tools.innerHTML='<button type="button" id="participationLaunch">我想這樣參與</button><button type="button" data-quiet-mode aria-pressed="true">低刺激：開啟</button>';
    document.body.append(tools);tools.querySelector('#participationLaunch').onclick=api.openParticipation;tools.querySelector('[data-quiet-mode]').onclick=api.toggleQuiet;applyQuiet();
  });
  root.addEventListener('storage',e=>{if(e.key==='social_quiet_mode')applyQuiet();});
})(typeof window==='undefined'?{}:window);
