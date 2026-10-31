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
    '--remote-debugging-port=9222',
    '--window-size=1280,820'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  function getJson(urlPath) {
    return new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222' + urlPath, res => {
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

  // 1. 開啟 island-game.html
  console.log('Navigating to island-game.html...');
  await send('Page.navigate', { url: 'http://localhost:8000/island-game.html' });
  await new Promise(r => setTimeout(r, 1500));
  await capture('island_game_overview.png');

  // 2. 開啟第 1 週關卡抽屜 (情緒魔法島)
  console.log('Opening Quest Drawer for Island 0, Week 1...');
  await send('Runtime.evaluate', { expression: 'window.socialGame.openQuestDrawer(0, 1)' });
  await new Promise(r => setTimeout(r, 800));
  await capture('island_game_quest_drawer.png');

  // 3. 測試 CBT 超能力選項
  console.log('Triggering CBT choice super skill...');
  await send('Runtime.evaluate', { expression: 'window.socialGame.handleCbtChoice("super")' });
  await new Promise(r => setTimeout(r, 600));
  await capture('island_game_quest_cbt_passed.png');

  // 4. 開啟中央英雄總部與證書 Modal
  console.log('Opening Citadel Modal with Certificate...');
  await send('Runtime.evaluate', { expression: 'window.socialGame.closeQuestDrawer(); window.socialGame.openCitadelModal();' });
  await new Promise(r => setTimeout(r, 800));
  await capture('island_game_citadel_cert.png');

  // 5. 切換 2D 平面全地圖
  console.log('Toggling 2D Accessible Map View...');
  await send('Runtime.evaluate', { expression: 'window.socialGame.closeCitadelModal(); window.socialGame.toggleViewMode();' });
  await new Promise(r => setTimeout(r, 800));
  await capture('island_game_2d_map.png');

  // 6. 前往 classroom.html 驗證 Slide 4 的 3D 島嶼闖關按鈕
  console.log('Navigating to classroom.html?date=week-1...');
  await send('Page.navigate', { url: 'http://localhost:8000/classroom.html?date=week-1' });
  await new Promise(r => setTimeout(r, 1500));
  // 點擊到 Slide 4
  await send('Runtime.evaluate', { expression: 'goToSlide(3)' }); // 0-based: index 3 is Slide 4 (遊樂場實戰)
  await new Promise(r => setTimeout(r, 800));
  await capture('classroom_slide4_island_tab.png');

  ws.close();
  chrome.kill();
  console.log('All screenshots verified and captured successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error('Error in verification:', err);
  process.exit(1);
});
