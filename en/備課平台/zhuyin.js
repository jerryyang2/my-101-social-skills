let isZhuyinEnabled = false;
function toggleZhuyin() {}
function updateZhuyinButton() { const b=document.getElementById("zhuyinToggleBtn"); if(b)b.hidden=true; }
function toZhuyinHtml(text) { return String(text || "").replace(/\n/g,"<br>"); }
