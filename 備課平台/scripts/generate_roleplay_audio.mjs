import { EdgeTTS } from "node-edge-tts";
import fs from "fs";
import path from "path";

global.window = {};
const roleplayJs = fs.readFileSync(path.resolve("roleplay-data.js"), "utf-8");
new Function(roleplayJs)();
const dailyRoleplays = global.window.dailyRoleplays;

const audioDir = path.resolve("audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

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

// 4 位角色的聲線配置：
// 宇 (🦁): 自然朝氣小英雄
const ttsRole1 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+0Hz", rate: "+1%" });
// 畯 (🐻): 穩重有魄力小戰士
const ttsRole2 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "-3Hz", rate: "+0%" });
// 和 (🐼): 溫和暖心小夥伴
const ttsRole3 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+3Hz", rate: "-2%" });
// 嘉 (🦊): 清晰溫柔小裁判
const ttsRole4 = new EdgeTTS({ voice: "zh-TW-HsiaoChenNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+0Hz", rate: "+0%" });

const ttsMap = [ttsRole1, ttsRole2, ttsRole3, ttsRole4];

async function generateAllRoleplays() {
  const keys = Object.keys(dailyRoleplays);
  console.log(`Starting roleplay audio generation for ${keys.length} dates (196 audio files)...`);
  let count = 0;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const rp = dailyRoleplays[key];
    const date = rp.date;

    for (let rIdx = 0; rIdx < rp.roles.length; rIdx++) {
      const role = rp.roles[rIdx];
      const roleId = role.roleId || (rIdx + 1);
      const dest = path.join(audioDir, `role_${date}_${roleId}.mp3`);

      if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
        continue;
      }

      const tts = ttsMap[rIdx % 4];
      const speechText = clean(`${role.studentName}負責的${role.name}說：${role.dialogue}`);

      let success = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          await tts.ttsPromise(speechText, dest);
          if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
            success = true;
            break;
          }
        } catch (e) {
          if (attempt === 3) console.warn(`Failed role ${dest}: ${e.message}`);
          await new Promise(res => setTimeout(res, 500));
        }
      }
      count++;
    }

    if ((i + 1) % 5 === 0 || i === keys.length - 1) {
      console.log(`[${i + 1}/${keys.length}] Processed dates up to ${date}`);
    }
  }

  console.log(`Finished generating roleplay audio! Total roleplay files generated/checked.`);
}

generateAllRoleplays().then(() => process.exit(0)).catch(e => {
  console.error("Fatal:", e);
  process.exit(1);
});
