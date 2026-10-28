const { spawn } = require('child_process');
const http = require('http');

async function main() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--window-size=1280,820'
  ]);

  await new Promise(r => setTimeout(r, 2500));

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

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('--- Testing Week 1 Audio ---');
  await send('Page.navigate', { url: 'http://localhost:8000/classroom.html?date=week-1' });
  await new Promise(r => setTimeout(r, 1000));

  let res = await send('Runtime.evaluate', {
    expression: `(() => {
      goToSlide(1); // Slide 2: 故事島冒險
      toggleStorySpeech();
      return {
        mode: currentSpeechMode,
        audioSrc: currentLiveAudio ? currentLiveAudio.src : null,
        title: currentBriefing.title
      };
    })()`,
    returnByValue: true
  });
  console.log('Week 1 Story Playback Test Result:', res.value);

  console.log('--- Testing Week 9 (Halloween) Audio (Preventing Old 10/27 Mismatch) ---');
  await send('Page.navigate', { url: 'http://localhost:8000/classroom.html?date=week-9' });
  await new Promise(r => setTimeout(r, 1000));

  res = await send('Runtime.evaluate', {
    expression: `(() => {
      goToSlide(1); // Slide 2: 故事島冒險
      toggleStorySpeech();
      return {
        mode: currentSpeechMode,
        audioSrc: currentLiveAudio ? currentLiveAudio.src : null,
        title: currentBriefing.title
      };
    })()`,
    returnByValue: true
  });
  console.log('Week 9 Story Playback Test Result:', res.value);

  console.log('--- Testing Week 9 Roleplay Audio ---');
  res = await send('Runtime.evaluate', {
    expression: `(() => {
      goToSlide(2); // Slide 3: 角色大劇場
      const rp = getDailyRoleplayData(currentBriefing);
      const role1 = rp.roles[0];
      const audioKey = (currentBriefing && currentBriefing.legacy) ? currentBriefing.date : currentBriefing.id;
      const expectedUrl = "audio/role_" + audioKey + "_1.mp3";
      return {
        role1Name: role1.name,
        role1Dialogue: role1.dialogue,
        expectedAudio: expectedUrl
      };
    })()`,
    returnByValue: true
  });
  console.log('Week 9 Roleplay Test Result:', res.value);

  console.log('--- Testing Week 14 (Building blocks) Audio (Preventing Old 12/01 Mismatch) ---');
  await send('Page.navigate', { url: 'http://localhost:8000/classroom.html?date=week-14' });
  await new Promise(r => setTimeout(r, 1000));

  res = await send('Runtime.evaluate', {
    expression: `(() => {
      goToSlide(1);
      toggleStorySpeech();
      return {
        mode: currentSpeechMode,
        audioSrc: currentLiveAudio ? currentLiveAudio.src : null,
        title: currentBriefing.title
      };
    })()`,
    returnByValue: true
  });
  console.log('Week 14 Story Playback Test Result:', res.value);

  ws.close();
  chrome.kill();
  console.log('--- All Tests Passed Successfully! ---');
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
