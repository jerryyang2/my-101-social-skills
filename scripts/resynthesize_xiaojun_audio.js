import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { EdgeTTS } from '../備課平台/node_modules/node-edge-tts/dist/edge-tts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.resolve(__dirname, '../備課平台');
const audioDir = path.resolve(webDir, 'audio');

// 讀取 app.js 中的 defaultBriefings
const appContent = fs.readFileSync(path.join(webDir, 'app.js'), 'utf8');
const match = appContent.match(/const defaultBriefings = (\[[\s\S]*?\]);\s*\/\//);
if (!match) {
  console.error('Cannot find defaultBriefings in app.js');
  process.exit(1);
}
const briefings = JSON.parse(match[1]);
const weeks = briefings.filter(b => b.id && b.id.startsWith('b-week-'));

// 讀取 roleplay-data.js 中的 dailyRoleplays
const rpContent = fs.readFileSync(path.join(webDir, 'roleplay-data.js'), 'utf8');
const rpMatch = rpContent.match(/window\.dailyRoleplays\s*=\s*(\{[\s\S]*?\});/);
if (!rpMatch) {
  console.error('Cannot find dailyRoleplays in roleplay-data.js');
  process.exit(1);
}
const roleplays = eval('(' + rpMatch[1] + ')');

const ttsFemale = new EdgeTTS({
  voice: 'zh-TW-HsiaoChenNeural',
  lang: 'zh-TW',
  outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
});

const ttsMale = new EdgeTTS({
  voice: 'zh-TW-YunJheNeural',
  lang: 'zh-TW',
  outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
});

function cleanForTts(text) {
  return String(text || '')
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[『』「」"]/g, '')
    .replace(/——+/g, '，')
    .replace(/\.{3,}/g, '。')
    .replace(/…+/g, '。')
    .trim();
}

async function synthesize(tts, text, destPath, retries = 3) {
  const clean = cleanForTts(text);
  if (!clean) return;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await tts.ttsPromise(clean, destPath);
      return;
    } catch (err) {
      if (attempt === retries) {
        console.error(`[Error] ${path.basename(destPath)} failed after ${retries} attempts:`, err.message);
      } else {
        await new Promise(r => setTimeout(r, 800 * attempt));
      }
    }
  }
}

async function main() {
  console.log('Re-synthesizing audio files containing 小畯...');

  let count = 0;
  for (let w = 1; w <= 52; w++) {
    const id = `b-week-${w}`;
    const briefing = weeks.find(b => b.id === id);
    const rp = roleplays[id];
    if (!briefing || !rp || !rp.roles) continue;

    const storyText = `${briefing.story.title}。${briefing.story.content}`;
    if (storyText.includes('小畯')) {
      const storyF = path.join(audioDir, `story_female_${id}.mp3`);
      const storyM = path.join(audioDir, `story_male_${id}.mp3`);
      console.log(`[Week ${w}] Re-synthesizing story (female & male)...`);
      await synthesize(ttsFemale, storyText, storyF);
      await new Promise(r => setTimeout(r, 200));
      await synthesize(ttsMale, storyText, storyM);
      await new Promise(r => setTimeout(r, 200));
      count += 2;
    }

    const questionText = `${briefing.story.question}`;
    if (questionText.includes('小畯')) {
      const qF = path.join(audioDir, `question_female_${id}.mp3`);
      const qM = path.join(audioDir, `question_male_${id}.mp3`);
      console.log(`[Week ${w}] Re-synthesizing question (female & male)...`);
      await synthesize(ttsFemale, questionText, qF);
      await new Promise(r => setTimeout(r, 200));
      await synthesize(ttsMale, questionText, qM);
      await new Promise(r => setTimeout(r, 200));
      count += 2;
    }

    for (let r = 0; r < 4; r++) {
      const role = rp.roles[r];
      const roleText = `${role.dialogue}`;
      if (roleText.includes('小畯')) {
        const roleFile = path.join(audioDir, `role_${id}_${r+1}.mp3`);
        const tts = (r === 0 || r === 1) ? ttsMale : ttsFemale;
        console.log(`[Week ${w}] Re-synthesizing role ${r+1} (${role.studentName})...`);
        await synthesize(tts, roleText, roleFile);
        await new Promise(r => setTimeout(r, 200));
        count += 1;
      }
    }
  }

  console.log(`Done! Successfully re-synthesized ${count} audio files.`);
}

main().catch(console.error);
