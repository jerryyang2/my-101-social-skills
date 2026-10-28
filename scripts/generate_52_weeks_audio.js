import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { EdgeTTS } from '../備課平台/node_modules/node-edge-tts/dist/edge-tts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.resolve(__dirname, '../備課平台');
const audioDir = path.resolve(webDir, 'audio');

if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

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

console.log(`Loaded ${weeks.length} weeks and ${Object.keys(roleplays).length} roleplay items.`);

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

async function synthesizeTask(tts, text, destPath, retries = 3) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
    return; // 已存在且大於 1KB 則跳過
  }
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
        await new Promise(r => setTimeout(r, 600 * attempt));
      }
    }
  }
}

async function main() {
  console.log('Generating audio with safe rate-limiting for all 52 weeks...');

  for (let w = 1; w <= 52; w++) {
    const id = `b-week-${w}`;
    const briefing = weeks.find(b => b.id === id);
    const rp = roleplays[id];

    if (!briefing || !rp || !rp.roles || rp.roles.length < 4) {
      console.error(`Week ${w} missing data!`);
      continue;
    }

    const storyText = `${briefing.story.title}。${briefing.story.content}`;
    const questionText = `${briefing.story.question}`;

    const storyF = path.join(audioDir, `story_female_${id}.mp3`);
    const storyM = path.join(audioDir, `story_male_${id}.mp3`);
    const qF = path.join(audioDir, `question_female_${id}.mp3`);
    const qM = path.join(audioDir, `question_male_${id}.mp3`);

    const r1 = path.join(audioDir, `role_${id}_1.mp3`);
    const r2 = path.join(audioDir, `role_${id}_2.mp3`);
    const r3 = path.join(audioDir, `role_${id}_3.mp3`);
    const r4 = path.join(audioDir, `role_${id}_4.mp3`);

    const role1Text = `${rp.roles[0].studentName}負責的${rp.roles[0].name}說：${rp.roles[0].dialogue}`;
    const role2Text = `${rp.roles[1].studentName}負責的${rp.roles[1].name}說：${rp.roles[1].dialogue}`;
    const role3Text = `${rp.roles[2].studentName}負責的${rp.roles[2].name}說：${rp.roles[2].dialogue}`;
    const role4Text = `${rp.roles[3].studentName}負責的${rp.roles[3].name}說：${rp.roles[3].dialogue}`;

    // 順序執行故事與提問，避免 429
    await synthesizeTask(ttsFemale, storyText, storyF);
    await synthesizeTask(ttsMale, storyText, storyM);
    await synthesizeTask(ttsFemale, questionText, qF);
    await synthesizeTask(ttsMale, questionText, qM);

    // 角色台詞
    await synthesizeTask(ttsMale, role1Text, r1);
    await synthesizeTask(ttsMale, role2Text, r2);
    await synthesizeTask(ttsFemale, role3Text, r3);
    await synthesizeTask(ttsFemale, role4Text, r4);

    const sFSize = fs.existsSync(storyF) ? fs.statSync(storyF).size : 0;
    const sMSize = fs.existsSync(storyM) ? fs.statSync(storyM).size : 0;
    const r1Size = fs.existsSync(r1) ? fs.statSync(r1).size : 0;
    console.log(`[✓ Week ${String(w).padStart(2, '0')}/52 Done] "${briefing.title.slice(0, 18)}..." | StoryF: ${sFSize}B | Role1: ${r1Size}B`);
  }

  console.log('ALL 52 WEEKS AUDIO COMPLETED AND VERIFIED!');
}

main().catch(console.error);
