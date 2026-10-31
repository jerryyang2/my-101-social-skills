#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
compile_master_pdf.py
Compiles the complete 106-page Special Education Social Skills & Communication Workbook PDF:
- Page 1: Full-color Cover Page (雲林縣特殊教育教材教具製作比賽參賽特輯)
- Page 2: Table of Contents Part 1-A (Weeks 1 to 26 ordered by week and date)
- Page 3: Table of Contents Part 1-B (Weeks 27 to 52 ordered by week and date)
- Page 4: Table of Contents Part 2-A (Lessons 53 to 77 ordered by lesson and domain)
- Page 5: Table of Contents Part 2-B (Lessons 78 to 101 ordered by lesson and domain)
- Pages 6-57: 52 Weekly Curriculum Worksheets (Weeks 1 to 52)
- Pages 58-106: 49 Inspiration Library Worksheets (Lessons 53 to 101)
Adds clickable PDF bookmarks (outlines) for every single lesson and TOC section!
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

# 1. 讀取 worksheets-data.js
ws_file = os.path.join(WEB_DIR, "worksheets-data.js")
with open(ws_file, "r", encoding="utf-8") as f:
    code = f.read()

m = re.search(r"const dailyWorksheets\s*=\s*(\{[\s\S]*?\});", code)
if not m:
    raise RuntimeError("Cannot find dailyWorksheets in worksheets-data.js")

ws = json.loads(m.group(1))

weeks = sorted([k for k, v in ws.items() if not v.get("legacy")], key=lambda k: ws[k]["lessonNumber"])
ideas = sorted([k for k, v in ws.items() if v.get("legacy")], key=lambda k: ws[k]["lessonNumber"])

def get_clean_title(item):
    fest_prefix = "【" + item["festival"] + "】" if item.get("festival") else ""
    t = item.get("title", "")
    t = re.sub(r"^【.*?】[——\-：:\s]*", "", t)
    return fest_prefix + t

def get_short_domain(unit):
    if "感覺" in unit or "感官" in unit: return "⚡ 感覺調節"
    if "語用" in unit or "社交" in unit: return "🗣️ 語用溝通"
    if "挫折" in unit or "作業" in unit or "學習" in unit: return "📝 課堂學習"
    if "摩擦" in unit or "衝突" in unit: return "🤝 同儕衝突"
    if "環境" in unit or "情境" in unit: return "🏫 環境適應"
    if "融合" in unit or "家庭" in unit: return "🏠 融合家庭"
    if "自尊" in unit or "自立" in unit: return "🌟 自尊自立"
    return "💡 特殊專題"

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

.worksheet-page {
  page-break-after: always;
  break-after: page;
  width: 100%;
  height: 280mm;
  max-height: 280mm;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4.5mm 6mm;
  border: 3px solid var(--border-color, #f59e0b);
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 封面樣式 */
.cover-page {
  border: 4px solid #3b82f6 !important;
  background: linear-gradient(145deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%) !important;
  padding: 10mm 12mm !important;
  text-align: center;
}

/* 目錄頁樣式 */
.toc-page {
  border: 3.5px solid #0f766e !important;
  padding: 5mm 8mm !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.toc-page-ideas {
  border-color: #b45309 !important;
}
.toc-header {
  border-bottom: 2px solid #0f766e;
  padding-bottom: 4px;
  margin-bottom: 3px;
}
.toc-page-ideas .toc-header {
  border-bottom-color: #b45309;
}
.toc-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toc-title-main {
  font-size: 1.25rem;
  font-weight: 900;
  color: #0f766e;
}
.toc-page-ideas .toc-title-main {
  color: #b45309;
}
.toc-subtitle-badge {
  font-size: 0.8rem;
  font-weight: 800;
  color: #0f766e;
  background: #ccfbf1;
  padding: 2px 10px;
  border-radius: 9999px;
  border: 1px solid #99f6e4;
}
.toc-page-ideas .toc-subtitle-badge {
  color: #9a3412;
  background: #ffedd5;
  border-color: #fed7aa;
}
.toc-column-headers {
  display: flex;
  align-items: center;
  font-size: 0.72rem;
  font-weight: 900;
  color: #64748b;
  padding: 3px 6px;
  background: #f1f5f9;
  border-radius: 4px;
  margin-top: 4px;
}
.toc-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin: 3px 0;
}
.toc-row {
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #e2e8f0;
  padding: 2.2px 6px;
  font-size: 0.77rem;
  line-height: 1.25;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background 0.15s ease;
}
.toc-row:hover {
  background: #e0f2fe !important;
}
.toc-row:nth-child(even) {
  background: #f8fafc;
}
.toc-col-no {
  width: 66px;
  flex-shrink: 0;
  font-weight: 900;
  color: #0f766e;
}
.toc-page-ideas .toc-col-no {
  color: #b45309;
}
.toc-col-date {
  width: 108px;
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 700;
  color: #475569;
  white-space: nowrap;
}
.toc-col-domain {
  width: 96px;
  flex-shrink: 0;
  font-size: 0.71rem;
  font-weight: 800;
  color: #92400e;
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 0 4px;
  border-radius: 4px;
  text-align: center;
  margin-right: 6px;
  white-space: nowrap;
}
.toc-col-title {
  flex: 1;
  font-weight: 800;
  color: #1e293b;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toc-col-skill {
  width: 105px;
  flex-shrink: 0;
  font-size: 0.71rem;
  font-weight: 800;
  color: #92400e;
  background: #fef3c7;
  border: 1px solid #fde68a;
  padding: 1px 6px;
  border-radius: 9999px;
  text-align: center;
  white-space: nowrap;
  margin-right: 8px;
}
.toc-col-page {
  width: 42px;
  flex-shrink: 0;
  text-align: right;
  font-weight: 900;
  font-size: 0.78rem;
  color: #0f766e;
}
.toc-page-ideas .toc-col-page {
  color: #b45309;
}
.toc-footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.74rem;
  font-weight: 800;
  color: #64748b;
  border-top: 1.5px solid #cbd5e1;
  padding-top: 3px;
  margin-top: 2px;
}

/* 學習單內部組件 */
.sheet-header-badge { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #fed7aa; padding-bottom: 3px; }
.school-tag { font-size: 0.82rem; font-weight: 900; color: #9a3412; background: #ffedd5; padding: 2px 8px; border-radius: 9999px; }
.unit-badge { font-size: 0.82rem; font-weight: 800; color: #475569; }
.sheet-title-row { text-align: center; margin: 2px 0; }
.sheet-main-title { font-size: 1.35rem; font-weight: 900; color: #78350f; margin: 0 0 2px 0; line-height: 1.25; }
.sheet-target-badge { display: inline-flex; align-items: center; gap: 4px; background: #fef3c7; border: 1.5px solid #fde68a; color: #92400e; font-size: 0.9rem; font-weight: 900; padding: 2px 12px; border-radius: 9999px; }

/* 學生資訊欄 */
.student-info-bar { display: flex; justify-content: space-between; align-items: center; background: #fffdf5; border: 1.5px solid #fde68a; border-radius: 8px; padding: 3px 8px; font-size: 0.85rem; font-weight: 800; }
.hero-box { display: inline-flex; gap: 5px; }
.hero-opt { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; padding: 1px 4px; font-size: 0.78rem; color: #334155; }

/* 任務卡片 */
.task-card { background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 10px; padding: 4.5mm 7mm; }
.task-header { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
.task-num-icon { width: 20px; height: 20px; border-radius: 50%; background: var(--border-color, #f59e0b); color: white; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.8rem; }
.task-title { font-size: 0.95rem; font-weight: 900; color: #0f172a; margin: 0; }
.task-prompt { font-size: 0.84rem; font-weight: 700; color: #475569; margin: 0 0 4px 0; line-height: 1.3; }

/* 任務一：圈圈看 */
.circle-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
.circle-item { background: #f8fafc; border: 1.5px dashed #94a3b8; border-radius: 8px; padding: 4px 3px; text-align: center; }
.circle-icon { font-size: 1.2rem; }
.circle-label { font-size: 0.82rem; font-weight: 900; color: #0f172a; margin-bottom: 2px; }
.circle-desc { font-size: 0.69rem; color: #475569; line-height: 1.2; }

/* 任務二：選擇題 */
.choice-list { display: flex; flex-direction: column; gap: 3px; }
.choice-card { display: flex; align-items: center; gap: 6px; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 3px 6px; background: #f8fafc; font-size: 0.84rem; font-weight: 800; }
.choice-radio { width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #94a3b8; background: white; flex-shrink: 0; }

/* 任務三：檢核清單 */
.checklist-rows { display: flex; flex-direction: column; gap: 3px; }
.checklist-row { display: flex; align-items: center; gap: 6px; background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 6px; padding: 3px 6px; font-size: 0.84rem; font-weight: 800; color: #14532d; }
.checklist-box { width: 16px; height: 16px; border-radius: 3px; border: 1.5px solid #16a34a; background: white; flex-shrink: 0; }

/* 頁尾星星與簽章 */
.sheet-footer { border-top: 1.5px dashed #fed7aa; padding-top: 4px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-items: center; }
.self-stars-box { background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 8px; padding: 3px 6px; text-align: center; font-size: 0.78rem; font-weight: 900; color: #854d0e; }
.teacher-stamp-box { border: 1.5px dashed #cbd5e1; border-radius: 8px; padding: 3px; text-align: center; background: #f8fafc; font-size: 0.78rem; font-weight: 800; color: #475569; min-height: 40px; display: flex; flex-direction: column; justify-content: center; }

/* 類化與打卡 */
.gen-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.gen-box { border-radius: 8px; padding: 4px 8px; font-size: 0.74rem; line-height: 1.3; }
.gen-box-teacher { background: #fffbeb; border: 1px dashed #f59e0b; color: #78350f; }
.gen-box-home { background: #f0fdf4; border: 1px dashed #10b981; color: #065f46; }
"""

# 分割為 4 頁目錄
weeks_p1 = weeks[:26]
weeks_p2 = weeks[26:]
ideas_p1 = ideas[:25]
ideas_p2 = ideas[25:]

# 2. 生成 Part A: Intro (封面 + 4 頁完整目錄)
intro_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>國小特教班社交技巧與溝通訓練·101堂彩色圖文學習單全集</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <style>{css}</style>
</head>
<body>

  <!-- 封面 -->
  <article class="worksheet-page cover-page" id="book-cover">
    <div>
      <div style="font-size:1.05rem; font-weight:bold; color:#1d4ed8; background:#eff6ff; border:2px solid #93c5fd; padding:6px 20px; border-radius:9999px; display:inline-block;">
        ★ OO國小學習教室 · 特殊需求領域（社會技巧）彩色學習單全集 ★
      </div>
    </div>
    <div style="margin:20px 0;">
      <div style="font-size:3rem; margin-bottom:6px;">🏫 🦁 🐻 🐼 🦊</div>
      <h1 style="font-size:2.2rem; font-weight:900; color:#1e3a8a; margin:0 0 10px 0;">國小特殊教育資源班 · 社交技巧與溝通訓練</h1>
      <h2 style="font-size:1.35rem; font-weight:800; color:#047857; margin:0 0 12px 0;">全學年 101 堂彩色圖文學習單完整彙編手冊</h2>
      <div style="font-size:1.05rem; font-weight:900; color:#92400e; background:#fef3c7; border:2px solid #f59e0b; padding:6px 24px; border-radius:9999px; display:inline-block;">
        52 週常態循序課綱 ＋ 49 堂特殊情境疑難靈感庫（全冊共 106 頁 · 含 101 堂精編學習單）
      </div>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin:10px 0;">
      <div style="background:#ffffff; border:2px solid #93c5fd; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2rem; display:block; margin-bottom:4px;">🦁</span>
        <div style="font-size:1.1rem; font-weight:900;">小宇</div>
        <span style="font-size:0.75rem; font-weight:800; background:#dbeafe; color:#1e40af; padding:2px 6px; border-radius:4px;">ASD 自閉症</span>
      </div>
      <div style="background:#ffffff; border:2px solid #c4b5fd; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2rem; display:block; margin-bottom:4px;">🐻</span>
        <div style="font-size:1.1rem; font-weight:900;">小畯</div>
        <span style="font-size:0.75rem; font-weight:800; background:#ede9fe; color:#5b21b6; padding:2px 6px; border-radius:4px;">EBD 情緒障礙</span>
      </div>
      <div style="background:#ffffff; border:2px solid #a7f3d0; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2rem; display:block; margin-bottom:4px;">🐼</span>
        <div style="font-size:1.1rem; font-weight:900;">小和</div>
        <span style="font-size:0.75rem; font-weight:800; background:#d1fae5; color:#065f46; padding:2px 6px; border-radius:4px;">ASD/LD 雙殊</span>
      </div>
      <div style="background:#ffffff; border:2px solid #fde68a; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2rem; display:block; margin-bottom:4px;">🦊</span>
        <div style="font-size:1.1rem; font-weight:900;">小嘉</div>
        <span style="font-size:0.75rem; font-weight:800; background:#fef3c7; color:#92400e; padding:2px 6px; border-radius:4px;">ASD 自閉症</span>
      </div>
    </div>
    <div style="background:#f8fafc; border:2px dashed #94a3b8; border-radius:12px; padding:12px 16px; text-align:left; font-size:0.9rem; line-height:1.65; color:#334155;">
      • <strong>通用設計 (UDL) 多感官視覺鷹架</strong>：全冊免繁重書寫，採用直覺彩色圖形圈選、選擇與肢體動作檢核。<br>
      • <strong>全學年完整體系</strong>：52 週生活常規與節慶，49 堂涵蓋感覺調節、語用、挫折與融合等疑難突破。<br>
      • <strong>親師生三方聯結</strong>：每頁皆含「普通班導師融合口訣」與「家庭小超人共學打卡」，落實生活類化。<br>
      • <strong>嚴格 A4 單頁列印</strong>：每堂課獨立 1 頁，版面工整，課後 5 分鐘即能快速完成複習與正向強化！
    </div>
    <div style="border-top:2px solid #e2e8f0; padding-top:10px; display:flex; justify-content:space-between; font-size:0.95rem; font-weight:800; color:#475569;">
      <span>🏫 雲林縣OO國小 學習教室 老師編製</span>
      <span>📅 115 學年度全套 101 堂完整彙編（共 106 頁）</span>
      <span>格式：A4 彩色單面印製</span>
    </div>
  </article>

  <!-- 目錄 (一·上)：第 01 週 ～ 第 26 週 -->
  <article class="worksheet-page toc-page" id="toc-1">
    <div class="toc-header">
      <div class="toc-title-row">
        <span class="toc-title-main">📚 目錄索引（一·上）：52 週社交技巧新課綱</span>
        <span class="toc-subtitle-badge">第 01 週 ～ 第 26 週 · 第一學期循序課綱</span>
      </div>
      <div class="toc-column-headers">
        <span style="width:66px;">週次</span>
        <span style="width:108px;">教學日期</span>
        <span style="flex:1;">課堂主題與情境導引</span>
        <span style="width:105px; text-align:center;">核心超能力徽章</span>
        <span style="width:42px; text-align:right;">頁碼</span>
      </div>
    </div>
    <div class="toc-list">
"""

for k in weeks_p1:
    item = ws[k]
    t = get_clean_title(item)
    ln = item["lessonNumber"]
    d = item["date"]
    dow = item.get("dayOfWeek", "")
    dow_short = dow[-1] if dow else "二"
    badge = item["badgeLabel"]
    target_p = 5 + ln
    intro_html += f"""      <a href="#lesson-{ln}" class="toc-row">
        <span class="toc-col-no">第 {ln:02d} 週</span>
        <span class="toc-col-date">{d} ({dow_short})</span>
        <span class="toc-col-title" title="{t}">{t}</span>
        <span class="toc-col-skill">{badge}</span>
        <span class="toc-col-page">P.{target_p}</span>
      </a>\n"""

intro_html += """    </div>
    <div class="toc-footer-info">
      <span>🏫 國小特教班社交技巧與溝通訓練 · 全學年課綱手冊</span>
      <span>本頁收錄：第 01 週 ～ 第 26 週 · 冊內頁碼 P.6 ～ P.31</span>
    </div>
  </article>

  <!-- 目錄 (一·下)：第 27 週 ～ 第 52 週 -->
  <article class="worksheet-page toc-page" id="toc-2">
    <div class="toc-header">
      <div class="toc-title-row">
        <span class="toc-title-main">📚 目錄索引（一·下）：52 週社交技巧新課綱</span>
        <span class="toc-subtitle-badge">第 27 週 ～ 第 52 週 · 第二學期循序課綱</span>
      </div>
      <div class="toc-column-headers">
        <span style="width:66px;">週次</span>
        <span style="width:108px;">教學日期</span>
        <span style="flex:1;">課堂主題與情境導引</span>
        <span style="width:105px; text-align:center;">核心超能力徽章</span>
        <span style="width:42px; text-align:right;">頁碼</span>
      </div>
    </div>
    <div class="toc-list">
"""

for k in weeks_p2:
    item = ws[k]
    t = get_clean_title(item)
    ln = item["lessonNumber"]
    d = item["date"]
    dow = item.get("dayOfWeek", "")
    dow_short = dow[-1] if dow else "二"
    badge = item["badgeLabel"]
    target_p = 5 + ln
    intro_html += f"""      <a href="#lesson-{ln}" class="toc-row">
        <span class="toc-col-no">第 {ln:02d} 週</span>
        <span class="toc-col-date">{d} ({dow_short})</span>
        <span class="toc-col-title" title="{t}">{t}</span>
        <span class="toc-col-skill">{badge}</span>
        <span class="toc-col-page">P.{target_p}</span>
      </a>\n"""

intro_html += """    </div>
    <div class="toc-footer-info">
      <span>🏫 國小特教班社交技巧與溝通訓練 · 全學年課綱手冊</span>
      <span>本頁收錄：第 27 週 ～ 第 52 週 · 冊內頁碼 P.32 ～ P.57</span>
    </div>
  </article>

  <!-- 目錄 (二·上)：第 53 課 ～ 第 77 課 -->
  <article class="worksheet-page toc-page toc-page-ideas" id="toc-3">
    <div class="toc-header">
      <div class="toc-title-row">
        <span class="toc-title-main">💡 目錄索引（二·上）：49 堂特殊情境疑難靈感庫</span>
        <span class="toc-subtitle-badge">第 53 課 ～ 第 77 課 · 彈性專題（感官調節／語用／學習）</span>
      </div>
      <div class="toc-column-headers">
        <span style="width:66px;">課號</span>
        <span style="width:96px;">專題領域</span>
        <span style="flex:1;">專題主題與突破技巧</span>
        <span style="width:105px; text-align:center;">核心超能力徽章</span>
        <span style="width:42px; text-align:right;">頁碼</span>
      </div>
    </div>
    <div class="toc-list">
"""

for k in ideas_p1:
    item = ws[k]
    t = item["title"]
    ln = item["lessonNumber"]
    dom = get_short_domain(item.get("unit", ""))
    badge = item["badgeLabel"]
    target_p = 5 + ln
    intro_html += f"""      <a href="#lesson-{ln}" class="toc-row">
        <span class="toc-col-no">第 {ln} 課</span>
        <span class="toc-col-domain">{dom}</span>
        <span class="toc-col-title" title="{t}">{t}</span>
        <span class="toc-col-skill">{badge}</span>
        <span class="toc-col-page">P.{target_p}</span>
      </a>\n"""

intro_html += """    </div>
    <div class="toc-footer-info">
      <span>💡 特教疑難即時突破 · 49堂靈感專題庫（彈性無日期限制）</span>
      <span>本頁收錄：第 53 課 ～ 第 77 課 · 冊內頁碼 P.58 ～ P.82</span>
    </div>
  </article>

  <!-- 目錄 (二·下)：第 78 課 ～ 第 101 課 -->
  <article class="worksheet-page toc-page toc-page-ideas" id="toc-4">
    <div class="toc-header">
      <div class="toc-title-row">
        <span class="toc-title-main">💡 目錄索引（二·下）：49 堂特殊情境疑難靈感庫</span>
        <span class="toc-subtitle-badge">第 78 課 ～ 第 101 課 · 彈性專題（衝突／環境／家庭／自立）</span>
      </div>
      <div class="toc-column-headers">
        <span style="width:66px;">課號</span>
        <span style="width:96px;">專題領域</span>
        <span style="flex:1;">專題主題與突破技巧</span>
        <span style="width:105px; text-align:center;">核心超能力徽章</span>
        <span style="width:42px; text-align:right;">頁碼</span>
      </div>
    </div>
    <div class="toc-list">
"""

for k in ideas_p2:
    item = ws[k]
    t = item["title"]
    ln = item["lessonNumber"]
    dom = get_short_domain(item.get("unit", ""))
    badge = item["badgeLabel"]
    target_p = 5 + ln
    intro_html += f"""      <a href="#lesson-{ln}" class="toc-row">
        <span class="toc-col-no">第 {ln} 課</span>
        <span class="toc-col-domain">{dom}</span>
        <span class="toc-col-title" title="{t}">{t}</span>
        <span class="toc-col-skill">{badge}</span>
        <span class="toc-col-page">P.{target_p}</span>
      </a>\n"""

intro_html += """    </div>
    <div class="toc-footer-info">
      <span>💡 特教疑難即時突破 · 49堂靈感專題庫（彈性無日期限制）</span>
      <span>本頁收錄：第 78 課 ～ 第 101 課 · 冊內頁碼 P.83 ～ P.106</span>
    </div>
  </article>

</body>
</html>
"""

intro_html_path = "/tmp/pdf_part_intro.html"
with open(intro_html_path, "w", encoding="utf-8") as f:
    f.write(intro_html)


# 3. 生成 Part B: 101 Worksheets HTML
ws_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>101堂特教學習單內頁</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <style>{css}</style>
</head>
<body>
"""

all_keys = weeks + ideas
for k in all_keys:
    d = ws[k]
    color = d.get("themeColor", "#f59e0b")
    title = get_clean_title(d)
    is_legacy = bool(d.get("legacy"))
    ln = d["lessonNumber"]
    unit = d["unit"]
    badge_emoji = d["badgeEmoji"]
    super_skill = d["superSkill"]
    badge_label = d["badgeLabel"]

    if is_legacy:
        date_str = f"💡 專題：第 {ln} 課（靈感庫無日期限制）"
    else:
        date_str = f"📅 課堂進度：第 {ln} 週 · {d['date']} ({d['dayOfWeek']})"

    c_items = "".join([f'<div class="circle-item"><div class="circle-icon">{it["icon"]}</div><div class="circle-label">{it["label"]}</div><div class="circle-desc">{it["desc"]}</div></div>' for it in d["section1"]["items"]])

    if d["section2"]["type"] == "choice":
        s2_content = '<div class="choice-list">' + "".join([f'<div class="choice-card"><span class="choice-radio"></span><span>{opt["icon"]}</span><span>{opt["label"]}</span></div>' for opt in d["section2"]["options"]]) + '</div>'
    else:
        s2_content = '<div class="circle-grid">' + "".join([f'<div class="circle-item"><div class="circle-icon">{it["icon"]}</div><div class="circle-label">{it["label"]}</div><div class="circle-desc">{it["desc"]}</div></div>' for it in d["section2"]["items"]]) + '</div>'

    s3_steps = "".join([f'<div class="checklist-row"><div class="checklist-box"></div><span style="font-size:1.15rem;">{st["icon"]}</span><span class="checklist-text">{st["text"]}</span></div>' for st in d["section3"]["steps"]])

    s1_title = d["section1"]["title"]
    s1_prompt = d["section1"]["prompt"]
    s2_title = d["section2"]["title"]
    s2_prompt = d["section2"]["prompt"]
    s3_title = d["section3"]["title"]
    s3_prompt = d["section3"]["prompt"]

    gen_text = f"{d['generalization']['trigger']} ➜ <strong>{d['generalization']['promptWord']}</strong>" if d.get("generalization") else "在普通班遇到狀況時，請提示今日超能力口訣！"
    home_action = d["homeTask"]["action"] if d.get("homeTask") else "向爸爸媽媽展現一次今日超能力！"

    ws_html += f"""
    <!-- Worksheet {d['id']} -->
    <article class="worksheet-page" id="lesson-{ln}" style="--border-color: {color};">
      <div class="sheet-header-badge">
        <span class="school-tag">🏫 115年OO國小學習教室 · 社交技巧與溝通訓練 成長學習單</span>
        <span class="unit-badge">{unit}</span>
      </div>
      <div class="sheet-title-row">
        <h1 class="sheet-main-title">{title}</h1>
        <div class="sheet-target-badge" style="border-color: {color};">
          <span>{badge_emoji}</span>
          <span>本日超能力目標：{super_skill}</span>
        </div>
      </div>
      <div class="student-info-bar">
        <span>{date_str}</span>
        <div class="hero-box">
          <span>👦 挑戰小英雄：</span>
          <span class="hero-opt">□宇🦁</span>
          <span class="hero-opt">□畯🐻</span>
          <span class="hero-opt">□和🐼</span>
          <span class="hero-opt">□嘉🦊</span>
        </div>
        <span>🎖️ 徽章：<strong style="color:#b45309;">{badge_label}</strong></span>
      </div>
      <div class="task-card">
        <div class="task-header">
          <span class="task-num-icon">1</span>
          <h3 class="task-title">{s1_title}</h3>
        </div>
        <p class="task-prompt">{s1_prompt}</p>
        <div class="circle-grid">{c_items}</div>
      </div>
      <div class="task-card">
        <div class="task-header">
          <span class="task-num-icon">2</span>
          <h3 class="task-title">{s2_title}</h3>
        </div>
        <p class="task-prompt">{s2_prompt}</p>
        {s2_content}
      </div>
      <div class="task-card">
        <div class="task-header">
          <span class="task-num-icon">3</span>
          <h3 class="task-title">{s3_title}</h3>
        </div>
        <p class="task-prompt">{s3_prompt}</p>
        <div class="checklist-rows">{s3_steps}</div>
      </div>
      <div class="sheet-footer">
        <div class="self-stars-box">
          <div>🌟 我的今日超能力成果評量（表現優秀請塗滿星星）</div>
          <div style="font-size:1.35rem; letter-spacing:4px;">⭐ ⭐ ⭐</div>
        </div>
        <div class="teacher-stamp-box">
          <span>💮 老師簽章</span>
          <div style="font-size:0.7rem; color:#94a3b8;">（表現優秀，蓋章贈送課堂星星代幣！）</div>
        </div>
      </div>
      <div class="gen-cards">
        <div class="gen-box gen-box-teacher">
          <strong style="color:#b45309;">🏫 普通班導師融合口訣便利貼</strong><br>
          {gen_text}
        </div>
        <div class="gen-box gen-box-home">
          <div style="display:flex; justify-content:space-between;">
            <strong style="color:#047857;">🏠 家庭生活小超人共學打卡</strong>
            <span style="font-size:0.7rem;">家長簽章：［　　　　　］</span>
          </div>
          {home_action}
        </div>
      </div>
    </article>
    """

ws_html += """
</body>
</html>
"""

ws_html_path = "/tmp/pdf_part_ws.html"
with open(ws_html_path, "w", encoding="utf-8") as f:
    f.write(ws_html)

# Also save full book HTML to web directory
ws_body = ws_html.split("<body>", 1)[1] if "<body>" in ws_html else ws_html
with open(os.path.join(WEB_DIR, "all_worksheets_book.html"), "w", encoding="utf-8") as f:
    f.write((intro_html.replace("</body>\n</html>", "") + ws_body).replace("</head>", '<link rel="stylesheet" href="focus-mode.css?v=20261031-focus">\n<script defer src="focus-mode.js?v=20261031-focus"></script>\n<link rel="stylesheet" href="book-reader.css?v=20261031-reader">\n<script defer src="book-reader.js?v=20261031-reader"></script>\n</head>'))

print("HTML files generated. Printing Part A (Intro: 1 Cover + 4 TOC pages)...")
pdf_intro = "/tmp/part_intro.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_intro}",
    f"file://{intro_html_path}"
], check=True)

print("Printing Part B (101 Worksheets)...")
pdf_ws = "/tmp/part_ws.pdf"
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless", "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={pdf_ws}",
    f"file://{ws_html_path}"
], check=True)

# 4. 合併並注入 PDF 階層式大綱書籤 (Bookmarks/Outlines)
print("Merging PDF parts and adding hierarchical bookmarks...")
writer = pypdf.PdfWriter()

# Append Intro (5 pages: 1 Cover + 4 TOC pages)
writer.append(pdf_intro)
# Append 101 Worksheets (101 pages)
writer.append(pdf_ws)

# 加入書籤目錄
# Page 0: 封面
writer.add_outline_item("★ 封面手冊簡介", 0)
# Page 1: 目錄一·上
writer.add_outline_item("📚 目錄索引（一·上）：第 01 週～第 26 週", 1)
# Page 2: 目錄一·下
writer.add_outline_item("📚 目錄索引（一·下）：第 27 週～第 52 週", 2)
# Page 3: 目錄二·上
writer.add_outline_item("💡 目錄索引（二·上）：第 53 課～第 77 課", 3)
# Page 4: 目錄二·下
writer.add_outline_item("💡 目錄索引（二·下）：第 78 課～第 101 課", 4)

# Parent Bookmark 1: 52週新課綱 (starts at page index 5 = page 6)
parent_weeks = writer.add_outline_item("🌟 第一部分：52 週社交技巧與溝通訓練新課綱", 5)
for idx, k in enumerate(weeks):
    item = ws[k]
    t = get_clean_title(item)
    ln = item["lessonNumber"]
    d = item["date"]
    page_num = 5 + idx
    writer.add_outline_item(f"第 {ln:02d} 週 · {t} ({d})", page_num, parent=parent_weeks)

# Parent Bookmark 2: 49堂靈感專題庫 (starts at page index 5 + len(weeks) = 57 = page 58)
parent_ideas = writer.add_outline_item("💡 第二部分：49 堂特殊情境疑難靈感庫專題", 5 + len(weeks))
for idx, k in enumerate(ideas):
    item = ws[k]
    t = item["title"]
    ln = item["lessonNumber"]
    page_num = 5 + len(weeks) + idx
    writer.add_outline_item(f"第 {ln} 課 · {t}", page_num, parent=parent_ideas)

# 5. 注入目錄頁點擊跳轉超連結 (Clickable Link Annotations on TOC Pages 1..4)
print("Injecting clickable jump links to TOC pages 1..4...")
from pypdf.generic import DictionaryObject, NameObject, ArrayObject, FloatObject, NumberObject

total_links_added = 0
for p_idx, exp_count in [(1, 26), (2, 26), (3, 25), (4, 24)]:
    page = writer.pages[p_idx]
    chunks_by_y = {}
    def visitor(text, cm, tm, font_dict, font_size):
        if text.strip():
            y_dev = round(cm[1] * tm[4] + cm[3] * tm[5] + cm[5], 1)
            x_dev = round(cm[0] * tm[4] + cm[2] * tm[5] + cm[4], 1)
            matched_y = None
            for cy in chunks_by_y:
                if abs(cy - y_dev) < 5.0:
                    matched_y = cy
                    break
            if matched_y is None:
                matched_y = y_dev
                chunks_by_y[matched_y] = []
            chunks_by_y[matched_y].append((x_dev, text.strip()))
    page.extract_text(visitor_text=visitor)
    
    lesson_rows = []
    for y in sorted(chunks_by_y.keys(), reverse=True):
        if 65 < y < 775:
            line = ' '.join([c[1] for c in sorted(chunks_by_y[y], key=lambda x: x[0])])
            m = re.search(r'第\s*(\d+)\s*(週|課)', line)
            if m:
                ln = int(m.group(1))
                lesson_rows.append((ln, y))
    
    if len(lesson_rows) != exp_count:
        print(f"⚠️ Warning: Page {p_idx} expected {exp_count} rows, found {len(lesson_rows)}")
    
    ys = [r[1] for r in lesson_rows]
    for i, (ln, y) in enumerate(lesson_rows):
        if i == 0:
            top = min(775.0, y + (ys[0] - ys[1]) / 2) if len(ys) > 1 else y + 10.0
        else:
            top = (ys[i-1] + y) / 2
        if i == len(ys) - 1:
            bottom = max(65.0, y - (ys[-2] - ys[-1]) / 2) if len(ys) > 1 else y - 10.0
        else:
            bottom = (y + ys[i+1]) / 2
        
        target_page_idx = 4 + ln
        target_page = writer.pages[target_page_idx]
        
        link = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(25.0), FloatObject(bottom), FloatObject(570.0), FloatObject(top)]),
            NameObject('/Border'): ArrayObject([NumberObject(0), NumberObject(0), NumberObject(0)]),
            NameObject('/A'): DictionaryObject({
                NameObject('/S'): NameObject('/GoTo'),
                NameObject('/D'): ArrayObject([target_page.indirect_reference, NameObject('/Fit')]),
            }),
        })
        res = writer.add_annotation(p_idx, link)
        res[NameObject('/Dest')] = ArrayObject([target_page.indirect_reference, NameObject('/Fit')])
        total_links_added += 1

print(f"✅ Successfully injected {total_links_added} clickable PDF link annotations to TOC pages!")

final_pdf_web = os.path.join(WEB_DIR, "101堂特教社交技巧彩色學習單全集.pdf")
final_pdf_short = os.path.join(WEB_DIR, "special_ed_101_worksheets.pdf")
final_pdf_art = os.path.join(ARTIFACT_DIR, "101堂特教社交技巧彩色學習單全集.pdf")

with open(final_pdf_web, "wb") as f:
    writer.write(f)

shutil.copyfile(final_pdf_web, final_pdf_short)
shutil.copyfile(final_pdf_web, final_pdf_art)

size_mb = os.path.getsize(final_pdf_web) / (1024 * 1024)
print(f"🎉 MASTER PDF COMPILED SUCCESSFULLY!")
print(f"- Output File: {final_pdf_web} ({size_mb:.2f} MB)")
print(f"- Mirror File: {final_pdf_short}")
print(f"- Artifact File: {final_pdf_art}")

reader = pypdf.PdfReader(final_pdf_web)
print(f"★ 總頁數：{len(reader.pages)} 頁")
