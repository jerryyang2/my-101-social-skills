import { EdgeTTS } from "node-edge-tts";
import fs from "fs";
import path from "path";

// Mock minimal browser environment to parse app.js
global.localStorage = { getItem: () => null, setItem: () => {} };
global.window = { addEventListener: () => {} };
global.document = { addEventListener: () => {}, getElementById: () => null, querySelectorAll: () => [] };

const appJsCode = fs.readFileSync(path.resolve("app.js"), "utf-8");
const getBriefings = new Function(appJsCode + "; return defaultBriefings;");
const briefings = getBriefings();

const audioDir = path.resolve("audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const maleTts = new EdgeTTS({
  voice: "zh-TW-YunJheNeural",
  lang: "zh-TW",
  outputFormat: "audio-24khz-48kbitrate-mono-mp3"
});

const femaleTts = new EdgeTTS({
  voice: "zh-TW-HsiaoChenNeural",
  lang: "zh-TW",
  outputFormat: "audio-24khz-48kbitrate-mono-mp3",
  rate: "-4%"
});

function clean(text) {
  return (text || "")
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[『』「」"]/g, "")
    .replace(/——+/g, "，")
    .replace(/\.{3,}/g, "。")
    .replace(/…+/g, "。")
    .trim();
}

async function generateForBriefing(b, idx) {
  const date = b.date;
  const story = b.story || { title: b.title, content: b.summary, question: "你會怎麼做？" };
  const storyText = clean(`${story.title}。${story.content}`);
  const questionText = clean(story.question || "");

  const tasks = [
    { file: `story_male_${date}.mp3`, tts: maleTts, text: storyText },
    { file: `story_female_${date}.mp3`, tts: femaleTts, text: storyText },
    { file: `question_male_${date}.mp3`, tts: maleTts, text: questionText },
    { file: `question_female_${date}.mp3`, tts: femaleTts, text: questionText }
  ];

  for (const t of tasks) {
    const dest = path.join(audioDir, t.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      // Already generated
      continue;
    }
    if (!t.text) continue;
    try {
      await t.tts.ttsPromise(t.text, dest);
    } catch (err) {
      console.warn(`Failed ${t.file}: ${err.message}`);
    }
  }

  console.log(`[${idx + 1}/${briefings.length}] Finished audio for ${date}`);
}

async function main() {
  console.log(`Starting audio generation for ${briefings.length} briefings...`);
  const startTime = Date.now();

  // Process sequentially or 2 at a time to prevent socket exhaustion
  for (let i = 0; i < briefings.length; i++) {
    await generateForBriefing(briefings[i], i);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`All audio generated successfully in ${duration}s! Total files in audio/: ${fs.readdirSync(audioDir).length}`);
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
