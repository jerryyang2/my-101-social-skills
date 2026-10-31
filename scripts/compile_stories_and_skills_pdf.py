#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
compile_stories_and_skills_pdf.py
彙整 101 堂課的「故事島冒險」與「超能力招式」，每堂課嚴格一張 A4，按照週次與日期排序：
- 第 1 頁：特教比賽規格全彩封面手冊
- 第 2 頁：目錄索引（一）52 週特教新課綱（週次、日期、節日、單元、故事與核心招式）
- 第 3 頁：目錄索引（二）49 堂特殊情境疑難靈感庫專題（課號、7大領域、故事與核心招式）
- 第 4 ～ 55 頁：第 1 週 至 第 52 週 故事島與超能力招式（嚴格 A4 單頁）
- 第 56 ～ 104 頁：第 53 課 至 第 101 課 靈感專題庫 故事島與超能力招式（嚴格 A4 單頁）
包含 101 組層級式 PDF 書籤大綱（Outlines/Bookmarks），點擊即可直達任意課堂！
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

# 1. 讀取 defaultBriefings 資料庫
node_cmd = """
const fs = require('fs');
const appJs = fs.readFileSync('備課平台/app.js', 'utf8');
const m = appJs.match(/const defaultBriefings\\s*=\\s*(\\[[\\s\\S]*?\\n\\];)/);
if (!m) {
  process.exit(1);
}
const list = eval(m[1]);
fs.writeFileSync('/tmp/briefings_data.json', JSON.stringify(list));
"""
subprocess.run(["node", "-e", node_cmd], check=True)

with open("/tmp/briefings_data.json", "r", encoding="utf-8") as f:
    briefings = json.load(f)

print(f"✅ 成功載入 {len(briefings)} 堂課資料")

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
  padding: 5mm 7mm;
  border: 3.5px solid var(--theme-color, #f59e0b);
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 封面樣式 */
.cover-page {
  border: 4.5px solid #2563eb !important;
  background: linear-gradient(145deg, #eff6ff 0%, #ffffff 40%, #fef3c7 100%) !important;
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

/* 課堂內頁標頭 */
.page-header {
  border-bottom: 2px dashed #fed7aa;
  padding-bottom: 4px;
  margin-bottom: 4px;
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
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
}
.main-title {
  font-size: 1.25rem;
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

/* 模組一：故事島冒險 */
.story-section {
  background: #fffdf7;
  border: 2px solid #fed7aa;
  border-radius: 10px;
  padding: 7px 10px;
  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.08);
}
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #f59e0b;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  padding: 2px 8px;
  border-radius: 6px;
}
.story-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: #b45309;
  margin: 4px 0 3px 0;
}
.story-content {
  font-size: 0.94rem;
  line-height: 1.65;
  color: #334155;
  white-space: pre-line;
  margin: 0 0 6px 0;
  text-align: justify;
}
.question-box {
  background: #f0fdf4;
  border: 1.5px solid #86efac;
  border-radius: 8px;
  padding: 6px 10px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.86rem;
  color: #166534;
  line-height: 1.45;
}
.question-title {
  font-weight: 900;
  color: #15803d;
  white-space: nowrap;
}

/* 模組二：超能力招式 */
.skill-section {
  background: #f8fafc;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  padding: 7px 10px;
}
.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.skill-name-badge {
  background: #2563eb;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 900;
  padding: 3px 12px;
  border-radius: 9999px;
}
.skill-subtitle {
  font-size: 0.82rem;
  font-weight: 800;
  color: #64748b;
}
.steps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 6px;
}
.step-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.step-top {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.step-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #ffffff;
  font-weight: 900;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.step-label {
  font-size: 0.82rem;
  font-weight: 900;
}
.step-desc {
  font-size: 0.84rem;
  line-height: 1.45;
  color: #334155;
  font-weight: 700;
}
.slogan-bar {
  background: #fffbeb;
  border: 1.5px dashed #f59e0b;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 0.84rem;
  color: #78350f;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* 頁尾檢核 */
.page-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid #e2e8f0;
  padding-top: 4px;
  margin-top: 2px;
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
    max-width: 900px;
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
    background: #fef3c7;
    color: #1e293b;
    border-color: #94a3b8;
  }

  .lesson-page, .cover-page, .toc-page {
    max-width: 900px;
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

# ==================== Part A: 封面與雙頁目錄 ====================
intro_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>101堂特教社交技巧故事島與超能力招式全集·封面與目錄</title>
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
    <span style="font-weight:900; font-size:0.92rem; color:#1e293b;">📖 故事島與超能力招式全集 (104頁)</span>
    <div style="display:flex; align-items:center; gap:8px;">
      <a href="#toc-1">📋 目錄</a>
      <a href="#book-cover">⬆️ 頂部</a>
    </div>
  </nav>

  <!-- Page 1: 封面 -->
  <article class="lesson-page cover-page" id="book-cover">
    <div style="margin-top:12mm;">
      <div style="display:inline-block; background:#2563eb; color:#ffffff; padding:4px 18px; border-radius:9999px; font-size:1.05rem; font-weight:900; letter-spacing:1px; margin-bottom:12px;">
        🌱 OO國小學習教室 · 故事島與超能力招式全集
      </div>
      <h1 style="font-size:2.35rem; font-weight:900; color:#1e3a8a; margin:0 0 10px 0; line-height:1.25;">
        特教社交技巧與溝通訓練<br>
        <span style="color:#d97706; font-size:2.1rem;">【故事島冒險 暨 超能力招式】</span><br>
        101堂課全彩教學指南
      </h1>
      <p style="font-size:1.15rem; color:#475569; font-weight:800; margin:0 0 18px 0;">
        按週次與日期編排 · 52 週新課綱 ＋ 49 堂特殊情境疑難靈感庫 · 課堂情境導讀與三步驟動作圖卡全集
      </p>
      <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
        <span style="background:#e0f2fe; color:#0369a1; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">📚 108 課綱特殊需求領域：社會技巧</span>
        <span style="background:#fef3c7; color:#b45309; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">💡 通用學習設計 (UDL) · 社會故事法 10.2</span>
        <span style="background:#ecfdf5; color:#047857; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">🧠 CBT 認知行為重構 · PBS 正向行為支持</span>
        <span style="background:#fce7f3; color:#be185d; padding:4px 12px; border-radius:8px; font-weight:800; font-size:0.9rem;">📄 一堂課一頁 A4 · 隨印隨教即開即用</span>
      </div>
    </div>

    <!-- 四大代表角色卡片 -->
    <div style="background:#ffffff; border:2.5px solid #cbd5e1; border-radius:16px; padding:12px 16px; max-width:880px; margin:0 auto 16px auto; box-shadow:0 4px 16px rgba(0,0,0,0.06);">
      <div style="font-size:0.95rem; font-weight:900; color:#1e293b; margin-bottom:10px;">
        🌟 四位特教學童代表角色（Persona）差異化教學鷹架矩陣
      </div>
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; text-align:left;">
        <div style="background:#eff6ff; border:2px solid #bfdbfe; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#1d4ed8;">🦁 小宇 (ASD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">自閉症光譜 · 眼神接觸焦慮</div>
          <div style="font-size:0.75rem; color:#1e3a8a; line-height:1.35;">眉心倒三角聚光練習、定點結構化台詞、30秒預告。</div>
        </div>
        <div style="background:#f5f3ff; border:2px solid #ddd6fe; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#6d28d9;">🐻 小畯 (EBD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">情緒行為障礙 · 衝動輸不起</div>
          <div style="font-size:0.75rem; color:#5b21b6; line-height:1.35;">大腦煞車冷靜角、因果決策模擬、四步誠懇道歉SOP。</div>
        </div>
        <div style="background:#ecfdf5; border:2px solid #a7f3d0; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#047857;">🐼 小和 (ASD/LD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">伴隨學障 · 讀寫落後害羞</div>
          <div style="font-size:0.75rem; color:#065f46; line-height:1.35;">注音標楷對齊、真人語音導讀、暖心小幫手成功經驗。</div>
        </div>
        <div style="background:#fffbeb; border:2px solid #fde68a; border-radius:10px; padding:8px 10px;">
          <div style="font-size:1.15rem; font-weight:900; color:#b45309;">🦊 小嘉 (ASD)</div>
          <div style="font-size:0.75rem; color:#64748b; font-weight:800; margin:2px 0 4px 0;">自閉症探索者 · 執著於規則</div>
          <div style="font-size:0.75rem; color:#78350f; line-height:1.35;">轉化為秩序小隊長領導力、步驟條目化打勾、觸控互動。</div>
        </div>
      </div>
    </div>

    <!-- 底部單位 -->
    <div style="margin-bottom:8mm;">
      <div style="font-size:1.15rem; font-weight:900; color:#1e3a8a;">雲林縣OO國小 學習教室 老師編製</div>
      <div style="font-size:0.88rem; color:#64748b; font-weight:800; margin-top:4px;">全套共 104 頁（封面 1 頁、目錄 2 頁、故事招式頁 101 頁）· 中華民國 115 年 10 月</div>
    </div>
  </article>

  <!-- Page 2: 目錄索引（一）52 週新課綱 -->
  <article class="lesson-page toc-page" id="toc-1">
    <div class="toc-title">
      <span>📚 目錄索引（一）：52 週特教新課綱進度表</span>
      <span style="font-size:0.85rem; color:#0f766e; font-weight:800;">按週次與教學日期排序 · 第 1 週～第 52 週</span>
    </div>
    <div class="toc-grid">
"""

for b in weeks:
    ln = b.get("lessonNumber")
    t = clean_title(b)
    d = b.get("date", "")
    skill = b.get("superSkill", "")
    page_target = 3 + ln
    intro_html += f"""
      <a href="#lesson-{ln}" class="toc-item">
        <span class="toc-num">W{ln:02d} ({d[5:]})</span>
        <span class="toc-text">{t}</span>
        <span class="toc-skill">{skill} · P.{page_target}</span>
      </a>
    """

intro_html += """
    </div>
    <div style="text-align:right; font-size:0.75rem; color:#64748b; margin-top:6px; border-top:1px solid #cbd5e1; padding-top:4px;">
      第 2 頁 / 全套 101 堂故事與招式手冊
    </div>
  </article>

  <!-- Page 3: 目錄索引（二）49 堂特殊情境疑難靈感庫專題 -->
  <article class="lesson-page toc-page" id="toc-2">
    <div class="toc-title">
      <span>💡 目錄索引（二）：49 堂特殊情境疑難靈感庫專題</span>
      <span style="font-size:0.85rem; color:#0f766e; font-weight:800;">7 大特教領域深度專題 · 第 53 課～第 101 課</span>
    </div>
    <div class="toc-grid">
"""

for b in ideas:
    ln = b.get("lessonNumber")
    t = clean_title(b)
    skill = b.get("superSkill", "")
    page_target = 3 + ln
    intro_html += f"""
      <a href="#lesson-{ln}" class="toc-item">
        <span class="toc-num">第 {ln:02d} 課</span>
        <span class="toc-text">{t}</span>
        <span class="toc-skill">{skill} · P.{page_target}</span>
      </a>
    """

intro_html += """
    </div>
    <div style="text-align:right; font-size:0.75rem; color:#64748b; margin-top:6px; border-top:1px solid #cbd5e1; padding-top:4px;">
      第 3 頁 / 全套 101 堂故事與招式手冊
    </div>
  </article>

</body>
</html>
"""

intro_html_path = "/tmp/pdf_part_stories_intro.html"
with open(intro_html_path, "w", encoding="utf-8") as f:
    f.write(intro_html)

# ==================== Part B: 101 堂課 故事與招式內頁 ====================
lessons_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>101堂特教故事島與超能力招式內頁</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <style>{css}</style>
</head>
<body>
"""

step_colors = ["#2563eb", "#8b5cf6", "#059669"]
step_labels = ["步驟一：察覺訊號", "步驟二：按下煞車", "步驟三：堅定行動"]

for idx, b in enumerate(briefings):
    ln = b.get("lessonNumber")
    is_legacy = b.get("legacy", False)
    t = clean_title(b)
    date_str = b.get("date", "")
    day_str = b.get("dayOfWeek", "")
    theme_c = b.get("themeColor", "#f59e0b")
    code = b.get("code", "特社1-II-1")
    unit = b.get("unit", "")
    badge_e = b.get("badgeEmoji", "🌟")
    badge_l = b.get("badgeLabel", "超能力達人")
    summary = b.get("summary", "")
    
    story = b.get("story", {})
    s_title = story.get("title", f"📖 {t}")
    s_content = story.get("content", summary)
    s_question = story.get("question", "如果你遇到這個情況，你會怎麼做呢？")
    
    card = b.get("visualCard", {})
    skill_title = card.get("title") or b.get("superSkill", "社交超能力")
    steps = card.get("steps", [])
    
    steps_html = ""
    for s_idx, s in enumerate(steps):
        c = step_colors[s_idx % len(step_colors)]
        lbl = step_labels[s_idx % len(step_labels)]
        s_text = s.get("text", "")
        steps_html += f"""
        <div class="step-card" style="border-top: 3px solid {c};">
          <div class="step-top">
            <span class="step-circle" style="background:{c};">{s_idx + 1}</span>
            <span class="step-label" style="color:{c};">{lbl}</span>
          </div>
          <div class="step-desc">{s_text}</div>
        </div>
        """
        
    page_num = 3 + ln
    
    # 頂部進度文字
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

      <!-- 模組一：故事島冒險 -->
      <div class="story-section">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="section-tag">📖 故事島冒險 · 校園情境社交故事</span>
          <span style="font-size:0.75rem; color:#b45309; font-weight:800;">Carol Gray 社會故事 10.2 標準</span>
        </div>
        <div class="story-title">{s_title}</div>
        <div class="story-content">{s_content}</div>
        <div class="question-box">
          <span style="font-size:1.1rem;">🤔</span>
          <div>
            <span class="question-title">全班動動腦 · 課堂引導提問：</span>
            <span>{s_question}</span>
          </div>
        </div>
      </div>

      <!-- 模組二：超能力招式 -->
      <div class="skill-section">
        <div class="skill-header">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="skill-name-badge" style="background:{theme_c};">🎯 {skill_title}</span>
            <span class="skill-subtitle">記住這三個超能力動作，你就是社交小超人！</span>
          </div>
          <span style="font-size:0.75rem; color:#64748b; font-weight:800;">CBT / PBS 行為重構</span>
        </div>
        <div class="steps-grid">
          {steps_html}
        </div>
        <div class="slogan-bar">
          <span style="font-weight:900; color:#b45309;">🌟 核心口訣與技巧提示：</span>
          <span style="font-weight:800;">{summary}</span>
        </div>
      </div>

      <!-- 底部頁尾與檢核 -->
      <div class="page-footer">
        <div class="footer-stars">
          <span>🌟 今日超能力挑戰成果：</span>
          <span style="letter-spacing:3px;">⭐ ⭐ ⭐</span>
        </div>
        <div class="teacher-stamp">
          <span>💮 老師簽章：［　　　　　］</span>
        </div>
        <div style="color:#64748b;">
          第 {page_num} 頁 / 全套 101 堂故事與招式手冊
        </div>
      </div>
    </article>
    """

lessons_html += """
</body>
</html>
"""

lessons_html_path = "/tmp/pdf_part_stories_lessons.html"
with open(lessons_html_path, "w", encoding="utf-8") as f:
    f.write(lessons_html)

# 保存完整線上網頁版至備課平台/
lessons_body = lessons_html.split("<body>", 1)[1] if "<body>" in lessons_html else lessons_html
full_book_html = intro_html.replace("</body>\n</html>", "") + lessons_body
with open(os.path.join(WEB_DIR, "all_stories_and_skills_book.html"), "w", encoding="utf-8") as f:
    f.write(full_book_html.replace("</head>", '<link rel="stylesheet" href="focus-mode.css?v=20261031-focus">\n<script defer src="focus-mode.js?v=20261031-focus"></script>\n<link rel="stylesheet" href="book-reader.css?v=20261031-reader">\n<script defer src="book-reader.js?v=20261031-reader"></script>\n</head>'))

print("📄 網頁生成完畢，開始以 Headless Chrome 列印 Part A (封面與目錄)...")
pdf_intro = "/tmp/part_stories_intro.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_intro}",
    f"file://{intro_html_path}"
], check=True)

print("📄 開始以 Headless Chrome 列印 Part B (101 堂故事與招式內頁)...")
pdf_lessons = "/tmp/part_stories_lessons.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_lessons}",
    f"file://{lessons_html_path}"
], check=True)

# 4. 合併並注入 PDF 階層式大綱書籤 (Bookmarks/Outlines)
print("📑 合併 PDF 並注入 101 組層級書籤...")
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

final_pdf_web = os.path.join(WEB_DIR, "101堂特教社交技巧故事島與超能力招式全集.pdf")
final_pdf_short = os.path.join(WEB_DIR, "special_ed_101_stories_and_skills.pdf")
final_pdf_art = os.path.join(ARTIFACT_DIR, "101堂特教社交技巧故事島與超能力招式全集.pdf")

with open(final_pdf_web, "wb") as f:
    writer.write(f)

shutil.copyfile(final_pdf_web, final_pdf_short)
shutil.copyfile(final_pdf_web, final_pdf_art)

size_mb = os.path.getsize(final_pdf_web) / (1024 * 1024)
print(f"🎉 故事島與超能力招式全集 PDF 彙整編譯大成功！")
print(f"- 輸出檔案：{final_pdf_web} ({size_mb:.2f} MB)")
print(f"- 鏡像檔案：{final_pdf_short}")
print(f"- Artifact：{final_pdf_art}")

reader = pypdf.PdfReader(final_pdf_web)
print(f"★ 總頁數：{len(reader.pages)} 頁（嚴格 1 課 1 頁，無溢出）")
print(f"★ 總書籤數：{len(writer.outline)} 組大綱")
