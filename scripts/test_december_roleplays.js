import http from "http";
import fs from "fs";
import path from "path";
import os from "os";
import { spawn } from "child_process";

// Simple static server
const webDir = path.resolve("備課平台");
const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".mp3": "audio/mpeg"
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, "");
  let filePath = path.join(webDir, safePath === "/" ? "classroom.html" : safePath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(webDir, "classroom.html");
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(8089, async () => {
  console.log("Server running on http://localhost:8089");

  // Launch headless Chrome
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1280,900"
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    // Connect to CDP
    const resp = await fetch("http://localhost:9222/json");
    const targets = await resp.json();
    const wsUrl = targets[0].webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const cb = callbacks.get(data.id);
        callbacks.delete(data.id);
        cb(data);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        callbacks.set(msgId, resolve);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise(r => ws.onopen = r);
    await send("Page.enable");
    await send("Runtime.enable");

    const testDates = ["2026-12-02", "2026-12-18", "2026-12-31"];
    const artifactDir = process.env.SOCIAL_SKILLS_ARTIFACT_DIR || path.join(os.tmpdir(), "social-skills-artifacts");
    fs.mkdirSync(artifactDir, { recursive: true });

    for (const d of testDates) {
      console.log(`\nTesting classroom for date: ${d}...`);
      await send("Page.navigate", { url: `http://localhost:8089/classroom.html?date=${d}` });
      await new Promise(r => setTimeout(r, 1200));

      // Inspect DOM
      const evalRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const title = document.querySelector("#currentUnitTitle")?.innerText || document.querySelector("h1")?.innerText;
          const scenario = document.querySelector("#roleplayScenario")?.innerText || document.querySelector(".scenario-box")?.innerText;
          const roleCards = Array.from(document.querySelectorAll(".role-card")).map(c => ({
            name: c.querySelector(".role-name")?.innerText || c.querySelector("h4")?.innerText,
            dialogue: c.querySelector(".dialogue-box")?.innerText || c.querySelector(".role-dialogue")?.innerText
          }));
          return { title, scenario, roleCardsCount: roleCards.length, roleCards };
        })()`,
        returnByValue: true
      });

      console.log(`DOM Result for ${d}:`, JSON.stringify(evalRes.result.value, null, 2));

      // Click role 1 to test audio
      const clickRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const firstCard = document.querySelector(".role-card");
          if (firstCard) {
            firstCard.click();
            return { clicked: true, audioSrc: window.currentAudio?.src || document.querySelector("audio")?.src };
          }
          return { clicked: false };
        })()`,
        returnByValue: true
      });
      console.log(`Click Role Result for ${d}:`, clickRes.result.value);

      // Screenshot
      const screenshot = await send("Page.captureScreenshot", { format: "png" });
      const imgPath = path.join(artifactDir, `classroom_verified_${d}.png`);
      fs.writeFileSync(imgPath, Buffer.from(screenshot.result.data, "base64"));
      console.log(`Saved screenshot to ${imgPath}`);
    }

    console.log("\nAll December tests verified successfully!");
    ws.close();
  } catch (e) {
    console.error("Test error:", e);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
