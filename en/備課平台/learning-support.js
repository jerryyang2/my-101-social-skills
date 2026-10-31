/* Classroom participation and teacher observations. All records stay on this device. */
(function (root) {
  'use strict';
  const KEY = 'social_learning_observations_v1';
  const levels = ['independent', 'visual', 'verbal', 'model', 'notyet', 'no_opportunity'];
  const labels = ["Completed independently", "Completed after a visual prompt", "Completed after a verbal prompt", "Completed after modelling / together", "Not completed yet", "No opportunity / chose a break"];
  const learners = [{id:'yu',name:"Yu 🦁"},{id:'he',name:"He 🐼"},{id:'jia',name:"Jia 🦊"},{id:'jun',name:"Jun 🐻"}];
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
    dialog.innerHTML=`<header><h2 id="${id}Title">${title}</h2><button type="button" data-close aria-label="Close window">✕</button></header><div class="learning-dialog-body">${body}</div>`;
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
    const d=showDialog('observationDialog',"Teaching Observations and Daily Life Follow Up",`
      <p class="learning-hint">Record one observable action at a time. View rehearsal, school and home data separately. Stars and answer counts do not replace observations.</p>
      <p><strong>${esc(b.title)}</strong></p>
      <form id="observationForm">
        <div class="learning-fields"><label>Date<input id="observationDate" type="date" value="${dateToday()}" required></label>
        <label>Learner code<select id="observationLearner">${learners.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</select></label>
        <label>Observation setting<select id="observationContext"><option value="rehearsal">Classroom rehearsal</option><option value="class">General classroom / school</option><option value="home">Home feedback</option></select></label></div>
        <label class="learning-label">Action being observed<input id="observationTarget" maxlength="500" required value="${esc(target)}"></label>
        <label class="learning-label">Prompts and outcome<select id="observationLevel" required><option value="">Choose the observed outcome</option>${levels.map((v,i)=>`<option value="${v}">${labels[i]}</option>`).join('')}</select></label>
        <label class="learning-label">Brief note<textarea id="observationNote" maxlength="500" rows="2" placeholder="Example: Used a card to ask to join at a board-game break, or watched first. Use codes, not names or diagnoses."></textarea></label>
        <button type="submit">Save this observation</button>
      </form>
      <p id="observationStatus" role="status">${storageFailed?"Browser storage could not be read. Save a separate copy of the records first.":"Data stays in this browser and is not uploaded."}</p>
      <section id="observationSummary" aria-label="Observations by setting"></section>
      <details><summary>View lesson records and backups</summary><div id="observationHistory"></div>
        <div class="learning-actions"><button type="button" id="exportObservations">Back up all observations as JSON</button><button type="button" id="exportObservationCsv">Export observations as CSV</button><label class="learning-import">Merge an observation backup<input id="importObservations" type="file" accept=".json,application/json"></label></div>
        <p class="learning-hint">The backup contains learner codes and observation notes. Keep it in a teacher-controlled location. Merging adds new records without replacing existing ones. This backup does not include stars or island progress.</p>
      </details>`);
    function refresh(){
      const id=d.querySelector('#observationLearner').value;
      const rows=rowsFor(b,id);
      const activeTarget=d.querySelector('#observationTarget').value.trim();
      const activeKey=activeTarget===target?b.id+':step-2':'custom:'+activeTarget;
      d.querySelector('#observationSummary').innerHTML=['rehearsal','class','home'].map((ctx,i)=>{
        const subset=rows.filter(r=>r.context===ctx && (r.targetKey?r.targetKey===activeKey:r.target===activeTarget));const s=summarize(subset);
        return `<div class="learning-summary"><strong>${["Classroom rehearsal","General classroom / school","Home feedback"][i]}</strong><span>Opportunities: ${s.opportunities}; independent: ${s.independent}; completed with support: ${s.supported}; not yet: ${s.notyet}</span><span>Independent completion: ${s.independentRate===null?"No data yet":s.independentRate+'%'}; ${s.excluded} entries with no opportunity or a break are excluded from the denominator.</span></div>`;
      }).join('')+"<p class=\"learning-hint\">This summary covers the currently specified action in this lesson. Compare only the same goal, context and support conditions. Different goals are not combined to judge mastery.</p>";
      d.querySelector('#observationHistory').innerHTML=rows.length?rows.slice(-40).reverse().map(r=>`<article class="learning-record"><strong>${esc(r.date)} · ${labels[levels.indexOf(r.level)]}</strong><p>${esc(r.target)}</p><p>${esc(r.note)}</p><button type="button" data-delete="${esc(r.id)}">Delete this mistaken entry</button></article>`).join(''):"<p>No observations for this learner in this lesson yet.</p>";
      d.querySelectorAll('[data-delete]').forEach(btn=>btn.onclick=()=>{if(confirm("Delete this mistaken entry? You can back up first.")){if(save(read().filter(r=>r.id!==btn.dataset.delete))){refresh();status("The entry has been deleted.");}else status("Could not save. Export a backup first.");}});
    }
    d.querySelector('#observationLearner').onchange=refresh;
    d.querySelector('#observationTarget').onchange=refresh;
    d.querySelector('form').onsubmit=e=>{
      e.preventDefault();const el=id=>d.querySelector('#'+id).value;
      const row={id:root.crypto?.randomUUID?.()||Date.now()+'-'+Math.random().toString(36).slice(2),lesson:b.id,learner:el('observationLearner'),date:el('observationDate'),context:el('observationContext'),target:el('observationTarget').trim(),level:el('observationLevel'),note:el('observationNote').trim()};
      if(!validRecord(row)||!row.target){status("Enter a valid date and the action being observed.");return;}
      const existing=read();if(existing.length>=10000){status("Observations have reached 10,000 entries. Export and organise them before adding more.");return;}
      row.targetKey=row.target===target?b.id+':step-2':'custom:'+row.target;
      if(save([...existing,row])){d.querySelector('#observationNote').value='';refresh();status("This observation has been saved.");}else status("Storage is full or disabled. This entry has not been saved; save its contents elsewhere first.");
    };
    function download(data,name,type){const a=document.createElement('a');const url=URL.createObjectURL(new Blob([data],{type}));a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
    d.querySelector('#exportObservations').onclick=()=>download(JSON.stringify({format:'social-learning-observations',version:1,records:read()},null,2),'social-learning-observations.json','application/json');
    d.querySelector('#exportObservationCsv').onclick=()=>{
      const heading=["Date","Lesson code","Learner code","Setting","Target action","Prompts and outcome","Note"];
      const csv=[heading,...read().map(r=>[r.date,r.lesson,r.learner,r.context,r.target,labels[levels.indexOf(r.level)],r.note])].map(r=>r.map(csvCell).join(',')).join('\r\n');
      download('\ufeff'+csv,'social-learning-observations.csv','text/csv;charset=utf-8');
    };
    d.querySelector('#importObservations').onchange=async e=>{
      const f=e.target.files[0];if(!f)return;
      try{if(f.size>8000000)throw new Error('size');const data=JSON.parse(await f.text());if(data.format!=='social-learning-observations'||data.version!==1)throw new Error('format');const merged=mergeRecords(read(),data.records);if(!save(merged))throw new Error('storage');refresh();status("Backup merged. Duplicate records were not added again.");}catch(err){status("Cannot import. Select a valid observation backup exported by this site. Existing data has not been overwritten.");}e.target.value='';
    };
    refresh();
  };
  api.openParticipation=function(){
    const d=showDialog('participationDialog',"How I Want to Participate",`<p>Use speech, pointing or gestures. The teacher will listen to what you need.</p><div class="participation-grid">${["🙋 I need help","🔁 Please say that again","👀 I would like to watch first","🌿 I would like a break","💬 I have another idea","🤝 I am ready"].map(t=>`<button type="button" data-message="${t}">${t}</button>`).join('')}</div><p id="participationMessage" role="status">Choose a card to let the teacher know.</p><p class="learning-hint">Check the learner’s needs before agreeing on support. Breaks and refusal do not cost stars.</p><button type="button" data-quiet-mode>Low stimulation: on</button>`);
    d.querySelector('[data-quiet-mode]').onclick=api.toggleQuiet;applyQuiet();
    d.querySelectorAll('[data-message]').forEach(btn=>btn.onclick=()=>{d.querySelector('#participationMessage').textContent=btn.dataset.message;d.querySelectorAll('[data-message]').forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));});
  };
  api.quiet=()=>{try{return localStorage.getItem('social_quiet_mode')!=='false';}catch(e){return true;}};
  api.toggleQuiet=function(){const value=!api.quiet();try{localStorage.setItem('social_quiet_mode',String(value));}catch(e){}applyQuiet();};
  function applyQuiet(){document.documentElement.classList.toggle('quiet-classroom',api.quiet());document.querySelectorAll('[data-quiet-mode]').forEach(b=>{b.setAttribute('aria-pressed',String(api.quiet()));b.textContent=api.quiet()?"Low stimulation: on":"Low stimulation: off";});}
  document.addEventListener('DOMContentLoaded',()=>{
    const mobileToggle=document.getElementById('mobileToolsToggle');
    if(mobileToggle){mobileToggle.onclick=()=>{const open=mobileToggle.getAttribute('aria-expanded')!=='true';mobileToggle.setAttribute('aria-expanded',String(open));document.getElementById('classroomTeachingTools').classList.toggle('mobile-tools-open',open);};}
    const host=document.querySelector('#starWidget')?.parentElement||document.querySelector('.header-actions.main-menu')||document.querySelector('.toolbar-right');
    if(host){const b=document.createElement('button');b.type='button';b.className='learning-launch';b.textContent="Teaching Observations";if(host.matches('.main-menu')){b.classList.add('btn');b.innerHTML="<svg class=\"tool-icon\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><use href=\"assets/tool-icons.svg#copy\"></use></svg><span>Teaching Observations</span>";}b.onclick=api.openObservations;host.insertBefore(b,host.querySelector('[onclick*="openCommunication"]')||host.firstChild);}
    const tools=document.createElement('div');tools.className='learning-support-bar';
    tools.innerHTML="<button type=\"button\" id=\"participationLaunch\">How I Want to Participate</button><button type=\"button\" data-quiet-mode aria-pressed=\"true\">Low stimulation: on</button>";
    document.body.append(tools);tools.querySelector('#participationLaunch').onclick=api.openParticipation;tools.querySelector('[data-quiet-mode]').onclick=api.toggleQuiet;applyQuiet();
  });
  root.addEventListener('storage',e=>{if(e.key==='social_quiet_mode')applyQuiet();});
})(typeof window==='undefined'?{}:window);
