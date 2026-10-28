import { EdgeTTS } from "node-edge-tts";
import fs from "fs";
import path from "path";

global.window = {};
const roleplayJs = fs.readFileSync(path.resolve("備課平台/roleplay-data.js"), "utf-8");
new Function(roleplayJs)();
const dailyRoleplays = global.window.dailyRoleplays;

const audioDir = path.resolve("備課平台/audio");
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
// 宇 (🦁): 自然朝氣小英雄 (男童)
const ttsRole1 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+0Hz", rate: "+1%" });
// 畯 (🐻): 穩重有魄力小戰士 (男童低音)
const ttsRole2 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "-3Hz", rate: "+0%" });
// 和 (🐼): 溫和暖心小夥伴 (男童高音)
const ttsRole3 = new EdgeTTS({ voice: "zh-TW-YunJheNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+3Hz", rate: "-2%" });
// 嘉 (🦊): 清晰溫柔小裁判 (女童)
const ttsRole4 = new EdgeTTS({ voice: "zh-TW-HsiaoChenNeural", lang: "zh-TW", outputFormat: "audio-24khz-48kbitrate-mono-mp3", pitch: "+0Hz", rate: "+0%" });

const ttsMap = [ttsRole1, ttsRole2, ttsRole3, ttsRole4];

const updatedDates = [
  // 19 days in Dec
  "2026-12-02", "2026-12-03", "2026-12-04", "2026-12-08",
  "2026-12-11", "2026-12-14", "2026-12-15", "2026-12-16",
  "2026-12-17", "2026-12-18", "2026-12-21", "2026-12-22",
  "2026-12-23", "2026-12-24", "2026-12-25", "2026-12-28",
  "2026-12-29", "2026-12-30", "2026-12-31",
  // 11 days in Nov
  "2026-11-10", "2026-11-11", "2026-11-12", "2026-11-13",
  "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-25",
  "2026-11-26", "2026-11-27", "2026-11-30"
];

async function regenerate() {
  console.log(`Regenerating audio for ${updatedDates.length} updated dates (${updatedDates.length * 4} files)...`);
  let successCount = 0;

  for (let i = 0; i < updatedDates.length; i++) {
    const date = updatedDates[i];
    const key = `b-${date}`;
    const rp = dailyRoleplays[key];
    if (!rp) {
      console.warn(`Missing key ${key}`);
      continue;
    }

    for (let rIdx = 0; rIdx < rp.roles.length; rIdx++) {
      const role = rp.roles[rIdx];
      const roleId = role.roleId || (rIdx + 1);
      const dest = path.join(audioDir, `role_${date}_${roleId}.mp3`);

      const tts = ttsMap[rIdx % 4];
      const speechText = clean(`${role.studentName}負責的${role.name}說：${role.dialogue}`);

      let success = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          // Remove old file first to ensure fresh generation
          if (fs.existsSync(dest)) {
            fs.unlinkSync(dest);
          }
          await tts.ttsPromise(speechText, dest);
          if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
            success = true;
            successCount++;
            break;
          }
        } catch (e) {
          if (attempt === 3) console.warn(`Failed [${date}] role ${roleId}: ${e.message}`);
          await new Promise(res => setTimeout(res, 500));
        }
      }
    }

    if ((i + 1) % 5 === 0 || i === updatedDates.length - 1) {
      console.log(`[${i + 1}/${updatedDates.length}] Completed audio regeneration up to ${date} (Total audio files generated: ${successCount})`);
    }
  }

  console.log(`Done! Successfully regenerated ${successCount} roleplay audio files.`);
}

regenerate().then(() => process.exit(0)).catch(e => {
  console.error("Fatal:", e);
  process.exit(1);
});
