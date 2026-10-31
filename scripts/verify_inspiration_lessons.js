const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ARTIFACT_DIR = process.env.SOCIAL_SKILLS_ARTIFACT_DIR || path.join(os.tmpdir(), 'social-skills-artifacts');
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

async function main() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9223',
    '--window-size=1280,820'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  function getJson(urlPath) {
    return new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9223' + urlPath, res => {
        let raw = '';
        res.on('data', c => raw += c);
        res.on('end', () => resolve(JSON.parse(raw)));
      }).on('error', reject);
    });
  }

  const targets = await getJson('/json');
  const target = targets.find(t => t.type === 'page') || targets[0];
  console.log('Using target:', target.title, target.webSocketDebuggerUrl);

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  async function capture(filename) {
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    console.log(`Saved screenshot: ${filename} (${Math.round(data.length * 0.75 / 1024)} KB)`);
  }

  await send('Page.enable');
  await send('Runtime.enable');

  // 1. 開啟 index.html 並選取第 53 課靈感庫專題
  console.log('Navigating to index.html?id=b-idea-53...');
  await send('Page.navigate', { url: 'http://localhost:8000/index.html?id=b-idea-53' });
  await new Promise(r => setTimeout(r, 1500));
  await send('Runtime.evaluate', { expression: `
    const card = document.querySelector(".date-card.active");
    if (card) {
      card.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  ` });
  await new Promise(r => setTimeout(r, 500));
  await capture('index_idea_lesson53_verified.png');

  // 2. 開啟 classroom.html?id=b-idea-53
  console.log('Navigating to classroom.html?id=b-idea-53...');
  await send('Page.navigate', { url: 'http://localhost:8000/classroom.html?id=b-idea-53' });
  await new Promise(r => setTimeout(r, 1200));
  await capture('classroom_idea_lesson53_slide1_verified.png');

  // 3. 切換至 Slide 3 (角色大劇場)
  console.log('Switching to Slide 3 (Roleplay)...');
  await send('Runtime.evaluate', { expression: 'window.goToSlide(2)' });
  await new Promise(r => setTimeout(r, 800));
  await capture('classroom_idea_lesson53_roleplay_verified.png');

  // 4. 開啟 worksheet.html?id=b-idea-53
  console.log('Navigating to worksheet.html?id=b-idea-53...');
  await send('Page.navigate', { url: 'http://localhost:8000/worksheet.html?id=b-idea-53' });
  await new Promise(r => setTimeout(r, 1200));
  await capture('worksheet_idea_lesson53_verified.png');

  ws.close();
  chrome.kill();
  console.log('Verification completed successfully!');
}

main().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
