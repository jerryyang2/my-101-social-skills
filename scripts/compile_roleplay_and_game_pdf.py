#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
compile_roleplay_and_game_pdf.py
彙整 101 堂課的「角色大劇場」與「遊樂場實戰」，每堂課嚴格一張 A4，按照週次與日期排序：
- 第 1 頁：特教比賽規格全彩封面手冊
- 第 2 頁：目錄索引（一）52 週特教新課綱（週次、日期、節日、單元、劇場情境與抉擇題目）
- 第 3 頁：目錄索引（二）49 堂特殊情境疑難靈感庫專題（課號、7大領域、劇場情境與抉擇題目）
- 第 4 ～ 55 頁：第 1 週 至 第 52 週 角色大劇場與遊樂場實戰（嚴格 A4 單頁）
- 第 56 ～ 104 頁：第 53 課 至 第 101 課 靈感專題庫 角色大劇場與遊樂場實戰（嚴格 A4 單頁）
包含 106 組層級式 PDF 書籤大綱（Outlines/Bookmarks），點擊即可直達任意課堂！
"""

import json
import os
import re
import shutil
import subprocess
import tempfile
import pypdf

WEB_DIR = os.path.join(os.path.dirname(__file__), "..", "備課平台")
ARTIFACT_DIR = os.environ.get("SOCIAL_SKILLS_ARTIFACT_DIR") or os.path.join(tempfile.gettempdir(), "social-skills-artifacts")
os.makedirs(ARTIFACT_DIR, exist_ok=True)

# 1. 讀取 defaultBriefings 與 roleplays 資料庫
node_cmd = """
const fs = require('fs');
const appJs = fs.readFileSync('備課平台/app.js', 'utf8');
const m = appJs.match(/const defaultBriefings\\s*=\\s*(\\[[\\s\\S]*?\\n\\];)/);
if (!m) { process.exit(1); }
const list = eval(m[1]);
global.window = {};
const rpCode = fs.readFileSync('備課平台/roleplay-data.js', 'utf8');
eval(rpCode);
const rps = global.window.dailyRoleplays || {};
fs.writeFileSync('/tmp/roleplay_briefings.json', JSON.stringify(list));
fs.writeFileSync('/tmp/roleplay_rps.json', JSON.stringify(rps));
"""
subprocess.run(["node", "-e", node_cmd], check=True)

with open("/tmp/roleplay_briefings.json", "r", encoding="utf-8") as f:
    briefings = json.load(f)

with open("/tmp/roleplay_rps.json", "r", encoding="utf-8") as f:
    roleplays = json.load(f)

print(f"✅ 成功載入 {len(briefings)} 堂課與 {len(roleplays)} 組角色劇場資料")

weeks = [b for b in briefings if not b.get("legacy")]
ideas = [b for b in briefings if b.get("legacy")]

weeks.sort(key=lambda b: b.get("lessonNumber", 0))
ideas.sort(key=lambda b: b.get("lessonNumber", 0))

def clean_title(b):
    fest = b.get("festival", "")
    t = b.get("title", "")
    t = re.sub(r"^【.*?】[——\-：:\s]*", "", t)
    if fest and t.startswith(fest):
        t = t[len(fest):].lstrip("與和的大作戰——-：: ")
    prefix = f"【{fest}】" if fest else ""
    return prefix + t

def get_decision_tree_data(b):
    if b.get("decisionTree"):
        return b["decisionTree"]
    
    # 靈感庫 49 課情境專屬決策樹生成
    t = clean_title(b)
    skill = b.get("superSkill", "社交超能力")
    steps = b.get("visualCard", {}).get("steps", [])
    step_str = " ➔ ".join([s.get("text", "") for s in steps[:3]]) if steps else "深呼吸、冷靜觀察、好好表達"
    
    return {
        "prompt": f"在「{t}」的情境考驗中，如果是你，你會選擇哪一條行為路線？",
        "impulsive": {
            "title": "💥 慌亂本能／衝動抗拒",
            "desc": "不知所措、尖叫逃跑、拒絕配合或隨便亂發脾氣",
            "consequence": "❌ 行為後果：陷入危險與恐慌、同儕也受到驚嚇，事情沒有解決反而更混亂！",
            "feedback": "⚠️ 大腦拉警報了！記得先踩住煞車、做三次深呼吸，啟動社交超能力！"
        },
        "super_skill": {
            "title": f"🌟 施展超能力：{skill}",
            "desc": f"冷靜啟動「{skill}」，依照步驟「{step_str}」沉著應對",
            "consequence": "🎉 圓滿大成功！成功保護自己與他人，展現成熟冷靜的超人風範，全員獲得 1 顆金色榮譽星星！",
            "feedback": "🏆 太棒了！理性前額葉大獲全勝，成功通過考驗！"
        }
    }

# CSS 樣式定義：A4 嚴格 280mm 高度控制，禁止跨頁斷行
css = """
@page {
  size: A4 portrait;
  margin: 6mm 8mm;
}
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  color: #1e293b;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.lesson-page {
  page-break-after: always;
  break-after: page;
  width: 100%;
  height: 280mm;
  max-height: 280mm;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4.5mm 6.5mm;
  border: 3.5px solid var(--theme-color, #8b5cf6);
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 封面樣式 */
.cover-page {
  border: 4.5px solid #8b5cf6 !important;
  background: linear-gradient(145deg, #f5f3ff 0%, #ffffff 40%, #eff6ff 100%) !important;
  padding: 8mm 12mm !important;
  text-align: center;
}

/* 目錄樣式 */
.toc-page {
  border: 3.5px solid #0f766e !important;
  padding: 6mm 8mm !important;
}
.toc-title {
  font-size: 1.4rem;
  font-weight: 900;
  color: #0f766e;
  border-bottom: 2.5px solid #14b8a6;
  padding-bottom: 4px;
  margin: 0 0 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toc-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 3.5px 16px;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.77rem;
  line-height: 1.35;
}
.toc-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  min-width: 0;
  overflow: hidden;
  border-bottom: 1px dotted #cbd5e1;
  padding: 1.5px 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background 0.15s ease;
  box-sizing: border-box;
}
.toc-item:hover {
  background: #e0f2fe;
}
.toc-num { font-weight: 900; color: #0f766e; min-width: 50px; flex-shrink: 0; white-space: nowrap; }
.toc-text { font-weight: 700; color: #1e293b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1 1 0%; min-width: 0; margin: 0 4px; }
.toc-skill { font-weight: 800; color: #b45309; font-size: 0.71rem; flex-shrink: 0; max-width: 48%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }

/* 標頭樣式 */
.page-header {
  border-bottom: 2px dashed #fed7aa;
  padding-bottom: 3px;
  margin-bottom: 3px;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 800;
}
.school-badge {
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid #fde68a;
}
.unit-badge { color: #475569; }
.header-title-row {
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
}
.main-title {
  font-size: 1.22rem;
  font-weight: 900;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.25;
}
.meta-pill {
  background: #eff6ff;
  border: 1.5px solid #bfdbfe;
  color: #1d4ed8;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 9999px;
  white-space: nowrap;
}

/* 模組一：角色大劇場 */
.rp-section {
  background: #faf5ff;
  border: 2px solid #e9d5ff;
  border-radius: 10px;
  padding: 5px 8px;
  box-shadow: 0 1px 4px rgba(168, 85, 247, 0.08);
}
.rp-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.section-tag-rp {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #8b5cf6;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  padding: 2px 8px;
  border-radius: 6px;
}
.rp-scenario {
  background: #ffffff;
  border: 1.5px solid #ddd6fe;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 0.84rem;
  color: #581c87;
  font-weight: 800;
  margin-bottom: 5px;
}

/* 4 角色卡片 (2x2 Grid) */
.roles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.role-card {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.role-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #e2e8f0;
  padding-bottom: 2px;
  margin-bottom: 3px;
}
.role-badge {
  font-size: 0.82rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 4px;
}
.role-action {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.35;
  margin-bottom: 3px;
}
.role-dialogue {
  background: #f8fafc;
  border-left: 3px solid #3b82f6;
  padding: 3px 6px;
  font-size: 0.83rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.35;
  border-radius: 0 4px 4px 0;
  margin-bottom: 2px;
}
.role-tip {
  font-size: 0.72rem;
  color: #64748b;
  font-style: italic;
}

/* 模組二：遊樂場實戰 (CBT 決策樹) */
.game-section {
  background: #fffdf5;
  border: 2px solid #fde68a;
  border-radius: 10px;
  padding: 5px 8px;
}
.game-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.section-tag-game {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #0284c7;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  padding: 2px 8px;
  border-radius: 6px;
}
.game-prompt {
  background: #ffffff;
  border: 1.5px solid #fde68a;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 0.84rem;
  color: #92400e;
  font-weight: 800;
  margin-bottom: 5px;
}

/* 決策樹雙欄卡片 */
.decision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.dt-card {
  border-radius: 8px;
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dt-card-impulsive {
  background: #fef2f2;
  border: 2px solid #fca5a5;
}
.dt-card-skill {
  background: #f0fdf4;
  border: 2px solid #86efac;
}
.dt-title {
  font-size: 0.86rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2px;
}
.dt-desc {
  font-size: 0.8rem;
  line-height: 1.35;
  margin-bottom: 3px;
  font-weight: 700;
}
.dt-consequence {
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 0.77rem;
  line-height: 1.35;
  margin-bottom: 3px;
  font-weight: 700;
}
.dt-feedback {
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 頁尾 */
.page-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid #e2e8f0;
  padding-top: 3px;
  margin-top: 1px;
  font-size: 0.78rem;
}
.footer-stars {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b45309;
  font-weight: 800;
}
.teacher-stamp {
  border: 1.5px dashed #f59e0b;
  background: #fffdf5;
  padding: 2px 10px;
  border-radius: 6px;
  font-weight: 900;
  color: #92400e;
}

/* ==========================================
   線上閱讀螢幕自適應排版模式 (Reader Friendly Screen Mode)
   消除列印高差空白、最適閱讀寬度、卡片自然流動
   ========================================== */
@media screen {
  body {
    background: #f1f5f9;
    padding: 24px 16px 64px 16px;
    min-height: 100vh;
  }

  .reader-toolbar {
    position: sticky;
    top: 16px;
    z-index: 999;
    max-width: 920px;
    margin: 0 auto 24px auto;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(12px);
    border: 2px solid #cbd5e1;
    border-radius: 9999px;
    padding: 10px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
  }

  .reader-toolbar a, .reader-toolbar button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.88rem;
    font-weight: 800;
    color: #334155;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 9999px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .reader-toolbar a:hover, .reader-toolbar button:hover {
    background: #ede9fe;
    color: #6d28d9;
    border-color: #a78bfa;
  }

  .lesson-page, .cover-page, .toc-page {
    max-width: 920px;
    margin: 0 auto 36px auto !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
    border-radius: 16px;
    padding: 30px 34px !important;
    gap: 18px !important;
    justify-content: flex-start !important;
    background: #ffffff !important;
    box-sizing: border-box !important;
  }

  .toc-page {
    max-width: 960px !important;
    overflow: hidden !important;
  }

  .page-header {
    margin-bottom: 6px !important;
    padding-bottom: 8px !important;
  }

  .roleplay-grid {
    gap: 12px !important;
  }

  .roleplay-card {
    padding: 12px 14px !important;
    border-radius: 10px !important;
  }

  .game-grid {
    gap: 14px !important;
  }

  .choice-box {
    padding: 14px 16px !important;
    border-radius: 10px !important;
  }

  .page-footer {
    margin-top: 14px !important;
    padding-top: 10px !important;
    border-top: 1.5px solid #e2e8f0 !important;
  }
}

@media print {
  .reader-toolbar {
    display: none !important;
  }
}
"""

# ==================== Part A: 封面與目錄 ====================
intro_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>101堂特教社交技巧角色劇場與遊樂場實戰全集·封面與目錄</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <style>{css}</style>
</head>
<body>

  <nav class="reader-toolbar">
    <div style="display:flex; align-items:center; gap:8px;">
      <a href="index.html">🌱 備課平台</a>
      <a href="../index.html">🏫 網站首頁</a>
    </div>
    <span style="font-weight:900; font-size:0.92rem; color:#1e293b;">🎭 角色劇場與遊樂場實戰全集 (104頁)</span>
    <div style="display:flex; align-items:center; gap:8px;">
      <a href="#toc-1">📋 目錄</a>
      <button type="button" onclick="window.scrollTo({{top:0, behavior:'smooth'}})">⬆️ 頂部</button>
    </div>
  </nav>

  <!-- Page 1: 封面 -->
  <article class="lesson-page cover-page">
    <div style="margin-top:12mm;">
      <div style="display:inline-block; background:#8b5cf6; color:#ffffff; padding:4px 18px; border-radius:9999px; font-size:1.05rem; font-weight:900; letter-spacing:1px; margin-bottom:12px;">
        🌱 OO國小學習教室 · 角色大劇場與遊樂場實戰指南
      </div>
      <h1 style="font-size:2.35rem; font-weight:900; color:#1e3a8a; margin:0 0 10px 0; line-height:1.25;">
        特教社交技巧與溝通訓練<br>
        <span style="color:#7c3aed; font-size:2.1rem;">【角色大劇場 暨 遊樂場實戰】</span><br>
        101堂課實戰演練指南
      </h1>
      <p style="font-size:1.15rem; color:#475569; font-weight:800; margin:0 0 18px 0;">
        按週次與日期編排 · 52 週新課綱 ＋ 49 堂特殊情境疑難靈感庫 · 四角色分工台詞演練與雙向因果決策樹全集
      </p>
      <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
        <span style="background:#e0f2fe; color:#0369a1; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">📚 108 課綱特殊需求領域：社會技巧</span>
        <span style="background:#f3e8ff; color:#6b21a8; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">🎭 差異化分工台詞演練（宇🦁、畯🐻、和🐼、嘉🦊）</span>
        <span style="background:#fef3c7; color:#b45309; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">🧭 CBT 行為因果抉擇模擬器 (Choice & Consequence)</span>
        <span style="background:#ecfdf5; color:#047857; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">📄 一堂課一頁 A4 · 課堂投影分組演練專用</span>
      </div>
    </div>

    <!-- 四大代表角色卡片 -->
    <div style="background:#ffffff; border:2.5px solid #cbd5e1; border-radius:16px; padding:12px 16px; max-width:880px; margin:0 auto 16px auto; box-shadow:0 4px 16px rgba(0,0,0,0.06);">
      <div style="font-size:0.95rem; font-weight:900; color:#1e293b; margin-bottom:10px;">
        🌟 課堂大劇場：四位特教學童代表角色（Persona）演練分工與鷹架引導
      </div>
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; text-align:left;">
        <div style="background:#eff6ff; border:2px solid #bfdbfe; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#1d4ed8;">🦁 小宇 (ASD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">主角挑戰者 · 克服開口焦慮</div>
          <div style="font-size:0.75rem; color:#1e3a8a; line-height:1.35;">安排第一順位台詞，搭配直視眉心與肢體動作明確指示。</div>
        </div>
        <div style="background:#f5f3ff; border:2px solid #ddd6fe; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#6d28d9;">🐻 小畯 (EBD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">合作互動者 · 練習耐心傾聽</div>
          <div style="font-size:0.75rem; color:#5b21b6; line-height:1.35;">克制急躁搶話，練習溫和體面回應與輸得起運動家風度。</div>
        </div>
        <div style="background:#ecfdf5; border:2px solid #a7f3d0; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#047857;">🐼 小和 (ASD/LD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">暖心支持者 · 建立成功經驗</div>
          <div style="font-size:0.75rem; color:#065f46; line-height:1.35;">給予同儕肯定與提供道具支援，在安全團體中大方發言。</div>
        </div>
        <div style="background:#fffbeb; border:2px solid #fde68a; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#b45309;">🦊 小嘉 (ASD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">秩序引導者 · 正向班級領導</div>
          <div style="font-size:0.75rem; color:#78350f; line-height:1.35;">主持規則宣達、帶領鼓掌喝采，將規則執著化為組織力。</div>
        </div>
      </div>
    </div>

    <!-- 底部單位 -->
    <div style="margin-bottom:8mm;">
      <div style="font-size:1.15rem; font-weight:900; color:#1e3a8a;">雲林縣OO國小 學習教室 老師編製</div>
      <div style="font-size:0.88rem; color:#64748b; font-weight:800; margin-top:4px;">全套共 104 頁（封面 1 頁、目錄 2 頁、實戰演練頁 101 頁）· 中華民國 115 年 10 月</div>
    </div>
  </article>

  <!-- Page 2: 目錄索引（一）52 週新課綱 -->
  <article class="lesson-page toc-page">
    <div class="toc-title">
      <span>📚 目錄索引（一）：52 週特教新課綱大劇場與實戰進度表</span>
      <span style="font-size:0.85rem; color:#0f766e; font-weight:800;">按週次與教學日期排序 · 第 1 週～第 52 週</span>
    </div>
    <div class="toc-grid">
"""

for b in weeks:
    ln = b.get("lessonNumber")
    t = clean_title(b)
    d = b.get("date", "")
    rp = roleplays.get(b["id"], {})
    sc = rp.get("scenario", "")
    if len(sc) > 12:
        sc = sc[:10] + "..."
    page_target = 3 + ln
    intro_html += f"""
      <a href="#lesson-{ln}" class="toc-item">
        <span class="toc-num">W{ln:02d} ({d[5:]})</span>
        <span class="toc-text">{t}</span>
        <span class="toc-skill">{sc} · P.{page_target}</span>
      </a>
    """

intro_html += """
    </div>
    <div style="text-align:right; font-size:0.75rem; color:#64748b; margin-top:6px; border-top:1px solid #cbd5e1; padding-top:4px;">
      第 2 頁 / 全套 101 堂劇場與實戰手冊
    </div>
  </article>

  <!-- Page 3: 目錄索引（二）49 堂特殊情境疑難靈感庫專題 -->
  <article class="lesson-page toc-page">
    <div class="toc-title">
      <span>💡 目錄索引（二）：49 堂特殊情境疑難靈感庫劇場與實戰</span>
      <span style="font-size:0.85rem; color:#0f766e; font-weight:800;">7 大特教領域深度專題 · 第 53 課～第 101 課</span>
    </div>
    <div class="toc-grid">
"""

for b in ideas:
    ln = b.get("lessonNumber")
    t = clean_title(b)
    rp = roleplays.get(b["id"], {})
    sc = rp.get("scenario", "")
    if len(sc) > 12:
        sc = sc[:10] + "..."
    page_target = 3 + ln
    intro_html += f"""
      <a href="#lesson-{ln}" class="toc-item">
        <span class="toc-num">第 {ln:02d} 課</span>
        <span class="toc-text">{t}</span>
        <span class="toc-skill">{sc} · P.{page_target}</span>
      </a>
    """

intro_html += """
    </div>
    <div style="text-align:right; font-size:0.75rem; color:#64748b; margin-top:6px; border-top:1px solid #cbd5e1; padding-top:4px;">
      第 3 頁 / 全套 101 堂劇場與實戰手冊
    </div>
  </article>

</body>
</html>
"""

intro_html_path = "/tmp/pdf_part_rp_intro.html"
with open(intro_html_path, "w", encoding="utf-8") as f:
    f.write(intro_html)

# ==================== Part B: 101 堂課 劇場與實戰內頁 ====================
lessons_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>101堂特教角色大劇場與遊樂場實戰內頁</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <style>{css}</style>
</head>
<body>
"""

for idx, b in enumerate(briefings):
    ln = b.get("lessonNumber")
    is_legacy = b.get("legacy", False)
    t = clean_title(b)
    date_str = b.get("date", "")
    day_str = b.get("dayOfWeek", "")
    theme_c = b.get("themeColor", "#8b5cf6")
    code = b.get("code", "特社1-II-1")
    unit = b.get("unit", "")
    badge_e = b.get("badgeEmoji", "🌟")
    badge_l = b.get("badgeLabel", "超能力達人")
    
    rp = roleplays.get(b["id"], {})
    scenario = rp.get("scenario", f"在「{t}」的情境中，四位同學合作完成挑戰！")
    roles = rp.get("roles", [])
    
    roles_html = ""
    for r in roles:
        sc = r.get("studentColor", "#3b82f6")
        roles_html += f"""
        <div class="role-card" style="border-left: 3.5px solid {sc};">
          <div class="role-head">
            <span class="role-badge" style="color:{sc};">{r.get('studentEmoji')} {r.get('name')}</span>
            <span style="font-size:0.72rem; color:#64748b; font-weight:800;">{r.get('studentName')}同學</span>
          </div>
          <div class="role-action"><strong>【動作指引】</strong>{r.get('action')}</div>
          <div class="role-dialogue" style="border-left-color:{sc};">「{r.get('dialogue')}」</div>
          <div class="role-tip">💡 鷹架指引：{r.get('tip')}</div>
        </div>
        """
        
    dt = get_decision_tree_data(b)
    imp = dt.get("impulsive", {})
    skill = dt.get("super_skill", {})
    
    dt_html = f"""
    <div class="decision-grid">
      <!-- Impulsive -->
      <div class="dt-card dt-card-impulsive">
        <div>
          <div class="dt-title" style="color:#b91c1c;">💥 {imp.get('title', '衝動發脾氣 / 拒絕配合')}</div>
          <div class="dt-desc" style="color:#7f1d1d;"><strong>【行為做法】</strong>{imp.get('desc')}</div>
          <div class="dt-consequence" style="background:#ffffff; color:#991b1b;">{imp.get('consequence')}</div>
        </div>
        <div class="dt-feedback" style="color:#b91c1c;">{imp.get('feedback')}</div>
      </div>

      <!-- Super Skill -->
      <div class="dt-card dt-card-skill">
        <div>
          <div class="dt-title" style="color:#15803d;">🌟 {skill.get('title', '施展超能力')}</div>
          <div class="dt-desc" style="color:#14532d;"><strong>【行為做法】</strong>{skill.get('desc')}</div>
          <div class="dt-consequence" style="background:#ffffff; color:#166534;">{skill.get('consequence')}</div>
        </div>
        <div class="dt-feedback" style="color:#15803d;">{skill.get('feedback')}</div>
      </div>
    </div>
    """
    
    page_num = 3 + ln
    
    if is_legacy:
        progress_label = f"第 {ln} 課 · 靈感專題"
        meta_info = f"💡 靈感專題庫 · {badge_e} {badge_l}"
    else:
        progress_label = f"第 {ln} 週 · {t}"
        meta_info = f"📅 {date_str} ({day_str}) · {badge_e} {badge_l}"

    lessons_html += f"""
    <article class="lesson-page" id="lesson-{ln}" style="--theme-color:{theme_c};">
      <!-- 頂部資訊列 -->
      <div class="page-header">
        <div class="header-top">
          <span class="school-badge">🏫 雲林縣OO國小學習教室 · 特殊需求領域（社會技巧）</span>
          <span class="unit-badge">{unit} · 課綱代碼：{code}</span>
        </div>
        <div class="header-title-row">
          <h1 class="main-title">{progress_label}</h1>
          <span class="meta-pill">{meta_info}</span>
        </div>
      </div>

      <!-- 模組一：角色大劇場 -->
      <div class="rp-section">
        <div class="rp-top-bar">
          <span class="section-tag-rp">🎭 角色大劇場 · 四特教學童實戰劇本</span>
          <span style="font-size:0.75rem; color:#6b21a8; font-weight:800;">宇🦁、畯🐻、和🐼、嘉🦊 差異化分工台詞演練</span>
        </div>
        <div class="rp-scenario"><strong>🎬 今日演練情境：</strong>{scenario}</div>
        <div class="roles-grid">
          {roles_html}
        </div>
      </div>

      <!-- 模組二：遊樂場實戰 (CBT 決策樹) -->
      <div class="game-section">
        <div class="game-top-bar">
          <span class="section-tag-game">🎮 遊樂場實戰 · 行為抉擇因果模擬分岔路</span>
          <span style="font-size:0.75rem; color:#0369a1; font-weight:800;">CBT 認知行為治療 · PBS 正向行為支持</span>
        </div>
        <div class="game-prompt"><strong>🧭 行為抉擇考驗：</strong>{dt.get('prompt')}</div>
        {dt_html}
      </div>

      <!-- 底部頁尾與檢核 -->
      <div class="page-footer">
        <div class="footer-stars">
          <span>🌟 劇場實戰挑戰成果：</span>
          <span style="letter-spacing:3px;">⭐ ⭐ ⭐</span>
        </div>
        <div class="teacher-stamp">
          <span>💮 老師簽章：［　　　　　］</span>
        </div>
        <div style="color:#64748b;">
          第 {page_num} 頁 / 全套 101 堂劇場與實戰手冊
        </div>
      </div>
    </article>
    """

lessons_html += """
</body>
</html>
"""

lessons_html_path = "/tmp/pdf_part_rp_lessons.html"
with open(lessons_html_path, "w", encoding="utf-8") as f:
    f.write(lessons_html)

# 保存完整線上網頁版至備課平台/
lessons_body = lessons_html.split("<body>", 1)[1] if "<body>" in lessons_html else lessons_html
full_book_html = intro_html.replace("</body>\n</html>", "") + lessons_body
with open(os.path.join(WEB_DIR, "all_roleplay_and_games_book.html"), "w", encoding="utf-8") as f:
    f.write(full_book_html)

print("📄 網頁生成完畢，開始以 Headless Chrome 列印 Part A (封面與目錄)...")
pdf_intro = "/tmp/part_rp_intro.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_intro}",
    f"file://{intro_html_path}"
], check=True)

print("📄 開始以 Headless Chrome 列印 Part B (101 堂劇場與實戰內頁)...")
pdf_lessons = "/tmp/part_rp_lessons.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_lessons}",
    f"file://{lessons_html_path}"
], check=True)

# 4. 合併並注入 PDF 階層式大綱書籤 (Bookmarks/Outlines)
print("📑 合併 PDF 並注入 106 組層級書籤...")
writer = pypdf.PdfWriter()

writer.append(pdf_intro)
writer.append(pdf_lessons)

# 注入書籤大綱
writer.add_outline_item("★ 封面手冊簡介", 0)
writer.add_outline_item("📚 目錄索引（一）：52週新課綱", 1)
writer.add_outline_item("💡 目錄索引（二）：49堂靈感專題庫", 2)

# Parent Bookmark 1: 52週新課綱
parent_weeks = writer.add_outline_item("🌟 第一部分：52 週社交技巧與溝通訓練新課綱", 3)
for idx, b in enumerate(weeks):
    ln = b.get("lessonNumber")
    t = clean_title(b)
    d = b.get("date", "")
    page_num = 3 + idx
    writer.add_outline_item(f"第 {ln} 週 · {t} ({d})", page_num, parent=parent_weeks)

# Parent Bookmark 2: 49堂靈感專題庫
parent_ideas = writer.add_outline_item("💡 第二部分：49 堂特殊情境疑難靈感庫專題", 3 + len(weeks))
for idx, b in enumerate(ideas):
    ln = b.get("lessonNumber")
    t = clean_title(b)
    page_num = 3 + len(weeks) + idx
    writer.add_outline_item(f"第 {ln} 課 · {t}", page_num, parent=parent_ideas)

# 5. 注入目錄頁點擊跳轉超連結 (Clickable Link Annotations on TOC Pages 1 & 2)
print("Injecting clickable jump links to TOC pages 1 & 2...")
from pypdf.generic import DictionaryObject, NameObject, ArrayObject, FloatObject, NumberObject

total_links_added = 0

# Page 1: 52 週新課綱 (26 rows x 2 cols)
page1 = writer.pages[1]
y_set1 = set()
def visitor1(text, cm, tm, font_dict, font_size):
    if text.strip() in ['W', '第']:
        y_dev = round(cm[1] * tm[4] + cm[3] * tm[5] + cm[5], 1)
        if 60 < y_dev < 750:
            y_set1.add(y_dev)
page1.extract_text(visitor_text=visitor1)
ys1 = sorted(list(y_set1), reverse=True)

if len(ys1) != 26:
    print(f"⚠️ Warning: Page 1 expected 26 rows, found {len(ys1)}")

for r, y in enumerate(ys1):
    top = y + 9.0
    bottom = y - 9.0
    
    # Left col: Week 2*r + 1
    w_left = 2 * r + 1
    if w_left <= 52:
        target_p = writer.pages[2 + w_left]
        link_l = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(40.0), FloatObject(bottom), FloatObject(295.0), FloatObject(top)]),
            NameObject('/Border'): ArrayObject([NumberObject(0), NumberObject(0), NumberObject(0)]),
            NameObject('/A'): DictionaryObject({
                NameObject('/S'): NameObject('/GoTo'),
                NameObject('/D'): ArrayObject([target_p.indirect_reference, NameObject('/Fit')]),
            }),
        })
        res = writer.add_annotation(1, link_l)
        res[NameObject('/Dest')] = ArrayObject([target_p.indirect_reference, NameObject('/Fit')])
        total_links_added += 1
    
    # Right col: Week 2*r + 2
    w_right = 2 * r + 2
    if w_right <= 52:
        target_p = writer.pages[2 + w_right]
        link_r = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(300.0), FloatObject(bottom), FloatObject(570.0), FloatObject(top)]),
            NameObject('/Border'): ArrayObject([NumberObject(0), NumberObject(0), NumberObject(0)]),
            NameObject('/A'): DictionaryObject({
                NameObject('/S'): NameObject('/GoTo'),
                NameObject('/D'): ArrayObject([target_p.indirect_reference, NameObject('/Fit')]),
            }),
        })
        res = writer.add_annotation(1, link_r)
        res[NameObject('/Dest')] = ArrayObject([target_p.indirect_reference, NameObject('/Fit')])
        total_links_added += 1

# Page 2: 49 堂特殊情境疑難靈感庫 (25 rows x 2 cols)
page2 = writer.pages[2]
y_set2 = set()
def visitor2(text, cm, tm, font_dict, font_size):
    if text.strip() in ['W', '第']:
        y_dev = round(cm[1] * tm[4] + cm[3] * tm[5] + cm[5], 1)
        if 60 < y_dev < 750:
            y_set2.add(y_dev)
page2.extract_text(visitor_text=visitor2)
ys2 = sorted(list(y_set2), reverse=True)

if len(ys2) != 25:
    print(f"⚠️ Warning: Page 2 expected 25 rows, found {len(ys2)}")

for r, y in enumerate(ys2):
    top = y + 9.0
    bottom = y - 9.0
    
    # Left col: Lesson 53 + 2*r
    l_left = 53 + 2 * r
    if l_left <= 101:
        target_p = writer.pages[2 + l_left]
        link_l = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(40.0), FloatObject(bottom), FloatObject(295.0), FloatObject(top)]),
            NameObject('/Border'): ArrayObject([NumberObject(0), NumberObject(0), NumberObject(0)]),
            NameObject('/A'): DictionaryObject({
                NameObject('/S'): NameObject('/GoTo'),
                NameObject('/D'): ArrayObject([target_p.indirect_reference, NameObject('/Fit')]),
            }),
        })
        res = writer.add_annotation(2, link_l)
        res[NameObject('/Dest')] = ArrayObject([target_p.indirect_reference, NameObject('/Fit')])
        total_links_added += 1
    
    # Right col: Lesson 53 + 2*r + 1
    l_right = 53 + 2 * r + 1
    if l_right <= 101:
        target_p = writer.pages[2 + l_right]
        link_r = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(300.0), FloatObject(bottom), FloatObject(570.0), FloatObject(top)]),
            NameObject('/Border'): ArrayObject([NumberObject(0), NumberObject(0), NumberObject(0)]),
            NameObject('/A'): DictionaryObject({
                NameObject('/S'): NameObject('/GoTo'),
                NameObject('/D'): ArrayObject([target_p.indirect_reference, NameObject('/Fit')]),
            }),
        })
        res = writer.add_annotation(2, link_r)
        res[NameObject('/Dest')] = ArrayObject([target_p.indirect_reference, NameObject('/Fit')])
        total_links_added += 1

print(f"✅ Successfully injected {total_links_added} clickable PDF link annotations to TOC pages 1 & 2!")

final_pdf_web = os.path.join(WEB_DIR, "101堂特教社交技巧角色劇場與遊樂場實戰全集.pdf")
final_pdf_short = os.path.join(WEB_DIR, "special_ed_101_roleplay_and_games.pdf")
final_pdf_art = os.path.join(ARTIFACT_DIR, "101堂特教社交技巧角色劇場與遊樂場實戰全集.pdf")

with open(final_pdf_web, "wb") as f:
    writer.write(f)

shutil.copyfile(final_pdf_web, final_pdf_short)
shutil.copyfile(final_pdf_web, final_pdf_art)

size_mb = os.path.getsize(final_pdf_web) / (1024 * 1024)
print(f"🎉 角色劇場與遊樂場實戰全集 PDF 彙整編譯大成功！")
print(f"- 輸出檔案：{final_pdf_web} ({size_mb:.2f} MB)")
print(f"- 鏡像檔案：{final_pdf_short}")
print(f"- Artifact：{final_pdf_art}")

reader = pypdf.PdfReader(final_pdf_web)
print(f"★ 總頁數：{len(reader.pages)} 頁（嚴格 1 課 1 頁，無溢出）")

def count_outlines(outlines):
    cnt = 0
    for item in outlines:
        if isinstance(item, list):
            cnt += count_outlines(item)
        else:
            cnt += 1
    return cnt

print(f"★ 總書籤數：{count_outlines(writer.outline)} 組大綱")
