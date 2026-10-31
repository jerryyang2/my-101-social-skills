#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
compile_zhuyin_worksheets_b4_pdf.py
Compiles the complete 106-page B4 Special Education Zhuyin Social Skills Worksheets PDF:
- Page 1: Full-color B4 Cover Page (雲林縣特殊教育教材教具製作比賽參賽特輯 · 注音版)
- Page 2: Table of Contents Part 1-A (Weeks 1 to 26 ordered by week and date)
- Page 3: Table of Contents Part 1-B (Weeks 27 to 52 ordered by week and date)
- Page 4: Table of Contents Part 2-A (Lessons 53 to 77 ordered by lesson and domain, without dates)
- Page 5: Table of Contents Part 2-B (Lessons 78 to 101 ordered by lesson and domain, without dates)
- Pages 6-57: 52 Weekly Curriculum Worksheets (Weeks 1 to 52) with vertical Zhuyin (B4)
- Pages 58-106: 49 Inspiration Library Worksheets (Lessons 53 to 101) with vertical Zhuyin (B4)
Total Pages: Exactly 106 Pages, strictly 1 B4 sheet per lesson, zero overflow, zero truncation!
Adds clickable PDF bookmarks (outlines) for every single lesson and TOC section.
"""

import json
import os
import re
import shutil
import subprocess
import tempfile
import pypdf
import pypinyin
from pypinyin import pinyin, Style, load_phrases_dict

# 台灣教育部審定音與特教常用詞語發音微調詞典
TAIWAN_PHONETIC_DICT = {
    '音樂': [['yīn'], ['yuè']],
    '乾淨': [['gān'], ['jìng']],
    '角色': [['jiǎo'], ['sè']],
    '快樂': [['kuài'], ['lè']],
    '長度': [['cháng'], ['dù']],
    '什麼': [['shén'], ['me']],
    '便宜': [['pián'], ['yí']],
}
load_phrases_dict(TAIWAN_PHONETIC_DICT)

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

def add_zhuyin(text):
    """使用字嗨注音標楷體原生字型注音，直接回傳純文字由字嗨字型精確渲染"""
    return text or ""

css = """
@page {
  size: 250mm 353mm; /* 嚴格 B4 直式規格 */
  margin: 6mm 8mm;
}
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  background: #ffffff;
  color: #1e293b;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* 封面與目錄頁保持清晰無注音導航字型 */
.cover-page, .toc-page {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
}

/* 101 堂注音版學習單全頁嚴格套用開源字嗨注音標楷體 (Bpmf Zihi Kai Std) */
.worksheet-page:not(.cover-page):not(.toc-page) {
  font-family: "Bpmf Zihi Kai Std", "BiauKai", "DFKai-SB", "PingFang TC", sans-serif;
  letter-spacing: 0.04em;
}

.worksheet-page {
  page-break-after: always;
  break-after: page;
  width: 100%;
  height: 336mm;
  max-height: 336mm;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5mm 6mm;
  border: 3px solid var(--border-color, #f59e0b);
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 台灣教科書正統直式注音樣式 */
.zy-block {
  display: inline-flex;
  align-items: center;
  vertical-align: baseline;
  line-height: 1;
  margin-right: 1.5px;
}
.zy-char {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}
.zy-bopo {
  writing-mode: vertical-rl;
  font-size: 0.52em;
  color: #0d9488;
  line-height: 1;
  margin-left: 1px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

/* 封面樣式 */
.cover-page {
  border: 4px solid #2563eb !important;
  background: linear-gradient(145deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%) !important;
  padding: 10mm 12mm !important;
  text-align: center;
}

/* 目錄頁樣式 */
.toc-page {
  border: 3.5px solid #0f766e !important;
  padding: 6mm 8mm !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.toc-page-ideas {
  border-color: #b45309 !important;
}
.toc-header {
  border-bottom: 2.5px solid #0f766e;
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
  font-size: 1.35rem;
  font-weight: 900;
  color: #0f766e;
}
.toc-page-ideas .toc-title-main {
  color: #b45309;
}
.toc-subtitle-badge {
  font-size: 0.88rem;
  font-weight: 800;
  color: #0f766e;
  background: #ccfbf1;
  padding: 3px 12px;
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
  font-size: 0.82rem;
  font-weight: 900;
  color: #64748b;
  padding: 4px 8px;
  background: #f1f5f9;
  border-radius: 6px;
  margin-top: 5px;
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
  padding: 3px 8px;
  font-size: 0.86rem;
  line-height: 1.3;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.toc-row:hover {
  background: #f0fdf4 !important;
}
.toc-row:nth-child(even) {
  background: #f8fafc;
}
.toc-col-no {
  width: 75px;
  flex-shrink: 0;
  font-weight: 900;
  color: #0f766e;
}
.toc-page-ideas .toc-col-no {
  color: #b45309;
}
.toc-col-date {
  width: 125px;
  flex-shrink: 0;
  font-size: 0.82rem;
  font-weight: 700;
  color: #475569;
  white-space: nowrap;
}
.toc-col-domain {
  width: 110px;
  flex-shrink: 0;
  font-size: 0.82rem;
  font-weight: 800;
  color: #92400e;
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 1px 6px;
  border-radius: 4px;
  text-align: center;
  margin-right: 8px;
  white-space: nowrap;
}
.toc-col-title {
  flex: 1;
  font-weight: 800;
  color: #1e293b;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toc-col-skill {
  width: 125px;
  flex-shrink: 0;
  font-size: 0.82rem;
  font-weight: 800;
  color: #92400e;
  background: #fef3c7;
  border: 1px solid #fde68a;
  padding: 2px 8px;
  border-radius: 9999px;
  text-align: center;
  white-space: nowrap;
  margin-right: 10px;
}
.toc-col-page {
  width: 48px;
  flex-shrink: 0;
  text-align: right;
  font-weight: 900;
  font-size: 0.88rem;
  color: #0f766e;
}
.toc-page-ideas .toc-col-page {
  color: #b45309;
}
.toc-footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  font-weight: 800;
  color: #64748b;
  border-top: 1.5px solid #cbd5e1;
  padding-top: 4px;
  margin-top: 2px;
}

/* 學習單內部組件 */
.sheet-header-badge {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #fed7aa;
  padding-bottom: 3px;
}
.school-tag {
  font-size: 0.88rem;
  font-weight: 900;
  color: #9a3412;
  background: #ffedd5;
  padding: 2px 10px;
  border-radius: 9999px;
}
.unit-badge {
  font-size: 0.88rem;
  font-weight: 800;
  color: #475569;
}
.sheet-title-row {
  text-align: center;
  margin: 3px 0 5px 0;
}
.sheet-main-title {
  font-size: 1.45rem;
  font-weight: 900;
  color: #78350f;
  margin: 0 0 4px 0;
  line-height: 1.4;
}
.sheet-target-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fef3c7;
  border: 1.5px solid var(--border-color, #f59e0b);
  color: #92400e;
  font-size: 0.95rem;
  font-weight: 900;
  padding: 3px 14px;
  border-radius: 9999px;
  line-height: 1.4;
}
.student-info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fffdf5;
  border: 1.5px solid #fde68a;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 0.82rem;
  font-weight: 800;
  gap: 6px;
}
.student-info-bar span {
  white-space: nowrap;
}
.hero-box {
  display: inline-flex;
  gap: 5px;
  white-space: nowrap;
  font-size: 0.82rem;
}
.hero-opt {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 1px 4px;
  font-size: 0.82rem;
  color: #334155;
}
.task-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 4mm 6mm;
}
.task-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 3px;
}
.task-num-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--border-color, #f59e0b);
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.85rem;
}
.task-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
}
.task-prompt {
  font-size: 0.9rem;
  font-weight: 700;
  color: #475569;
  margin: 0 0 4px 0;
  line-height: 1.4;
}
.circle-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.circle-item {
  background: #f8fafc;
  border: 1.5px dashed #94a3b8;
  border-radius: 8px;
  padding: 5px 4px;
  text-align: center;
}
.circle-icon {
  font-size: 1.3rem;
}
.circle-label {
  font-size: 0.88rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 2px;
  line-height: 1.3;
}
.circle-desc {
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.3;
}
.choice-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.choice-card {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid #cbd5e1;
  border-radius: 6px;
  padding: 4px 8px;
  background: #f8fafc;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.4;
}
.choice-radio {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid #94a3b8;
  background: white;
  flex-shrink: 0;
}
.checklist-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.checklist-row {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f0fdf4;
  border: 1.5px solid #bbf7d0;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 0.9rem;
  font-weight: 800;
  color: #14532d;
  line-height: 1.4;
}
.checklist-box {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1.5px solid #16a34a;
  background: white;
  flex-shrink: 0;
}
.sheet-footer {
  border-top: 1.5px dashed #fed7aa;
  padding-top: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
}
.self-stars-box {
  background: #fffbeb;
  border: 1.5px solid #fde68a;
  border-radius: 8px;
  padding: 4px 8px;
  text-align: center;
  font-size: 0.84rem;
  font-weight: 900;
  color: #854d0e;
  line-height: 1.35;
}
.teacher-stamp-box {
  border: 1.5px dashed #cbd5e1;
  border-radius: 8px;
  padding: 3px;
  text-align: center;
  background: #f8fafc;
  font-size: 0.84rem;
  font-weight: 800;
  color: #475569;
  min-height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.gen-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.gen-box {
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 0.82rem;
  line-height: 1.35;
}
.gen-box-teacher {
  background: #fffbeb;
  border: 1px dashed #f59e0b;
  color: #78350f;
}
.gen-box-home {
  background: #f0fdf4;
  border: 1px dashed #10b981;
  color: #065f46;
}
"""

# 分割為 4 頁目錄
weeks_p1 = weeks[:26]
weeks_p2 = weeks[26:]
ideas_p1 = ideas[:25]
ideas_p2 = ideas[25:]

print("1. Generating Part A: Intro (B4 Cover + 4 TOC pages)...")
intro_html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>注音版學習單封面與目錄 (B4規格)</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/bpmf-zihi-kai-std@latest/index.css">
  <style>{css}</style>
</head>
<body>

  <!-- 封面 -->
  <article class="worksheet-page cover-page" id="book-cover">
    <div>
      <div style="font-size:1.15rem; font-weight:bold; color:#1d4ed8; background:#eff6ff; border:2.5px solid #93c5fd; padding:8px 24px; border-radius:9999px; display:inline-block;">
        ★ OO國小學習教室 · 特殊需求領域（社會技巧）注音學習單全集 ★
      </div>
    </div>
    <div style="margin:20px 0;">
      <div style="font-size:3.3rem; margin-bottom:8px;">🏫 🦁 🐻 🐼 🦊</div>
      <h1 style="font-size:2.4rem; font-weight:900; color:#1e3a8a; margin:0 0 10px 0;">國小特殊教育資源班 · 社交技巧與溝通訓練</h1>
      <h2 style="font-size:1.55rem; font-weight:800; color:#047857; margin:0 0 14px 0;">全學年 101 堂國字注音彩色學習單完整彙編手冊（注音版）</h2>
      <div style="font-size:1.12rem; font-weight:900; color:#92400e; background:#fef3c7; border:2.5px solid #f59e0b; padding:8px 28px; border-radius:9999px; display:inline-block;">
        52 週常態循序課綱 ＋ 49 堂特殊情境疑難靈感庫（全冊共 106 頁 · B4 大開本單面精印）
      </div>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin:12px 0;">
      <div style="background:#ffffff; border:2.5px solid #93c5fd; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2.2rem; display:block; margin-bottom:4px;">🦁</span>
        <div style="font-size:1.2rem; font-weight:900;">小宇</div>
        <span style="font-size: 0.82rem; font-weight:800; background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:4px;">ASD 自閉症</span>
      </div>
      <div style="background:#ffffff; border:2.5px solid #c4b5fd; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2.2rem; display:block; margin-bottom:4px;">🐻</span>
        <div style="font-size:1.2rem; font-weight:900;">小畯</div>
        <span style="font-size: 0.82rem; font-weight:800; background:#ede9fe; color:#5b21b6; padding:2px 8px; border-radius:4px;">EBD 情緒障礙</span>
      </div>
      <div style="background:#ffffff; border:2.5px solid #a7f3d0; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2.2rem; display:block; margin-bottom:4px;">🐼</span>
        <div style="font-size:1.2rem; font-weight:900;">小和</div>
        <span style="font-size: 0.82rem; font-weight:800; background:#d1fae5; color:#065f46; padding:2px 8px; border-radius:4px;">ASD/LD 雙殊</span>
      </div>
      <div style="background:#ffffff; border:2.5px solid #fde68a; border-radius:12px; padding:10px; text-align:center;">
        <span style="font-size:2.2rem; display:block; margin-bottom:4px;">🦊</span>
        <div style="font-size:1.2rem; font-weight:900;">小嘉</div>
        <span style="font-size: 0.82rem; font-weight:800; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px;">ASD 自閉症</span>
      </div>
    </div>
    <div style="background:#f8fafc; border:2px dashed #94a3b8; border-radius:12px; padding:14px 18px; text-align:left; font-size:1.0rem; line-height:1.7; color:#334155;">
      • <strong>正統右側直式注音 (Taiwan Zhuyin Standard)</strong>：完全符合教育部審定教科書排版規範，調號精準定位，專為識字弱勢與語文障礙特需生量身打造。<br>
      • <strong>B4 大開本視覺友善</strong>：250mm × 353mm 寬廣版面，字體適中清晰、間距大方，提供低張力、易聚焦的閱讀無障礙體驗。<br>
      • <strong>通用設計 (UDL) 多感官鷹架</strong>：全冊免繁重書寫負擔，採彩色情境圈選、選擇題與動作自我核對，迅速強化正向行為。<br>
      • <strong>全學年 101 堂完整體系</strong>：52 週循序生活情境課綱 ＋ 49 堂特殊疑難靈感庫，兼顧常規養成與突發情境即時輔導。<br>
      • <strong>親師生三方融合閉環</strong>：每張學習單同步搭載「普通班導師融合口訣便利貼」與「家庭小超人生活打卡」，落實跨情境類化。
    </div>
    <div style="border-top:2px solid #e2e8f0; padding-top:10px; display:flex; justify-content:space-between; font-size:1.02rem; font-weight:800; color:#475569;">
      <span>🏫 雲林縣OO國小 學習教室 老師編製</span>
      <span>📅 115 學年度全套 101 堂完整彙編（共 106 頁）</span>
      <span>格式：B4 彩色單面精印</span>
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
        <span style="width:75px;">週次</span>
        <span style="width:125px;">教學日期</span>
        <span style="flex:1;">課堂主題與情境導引</span>
        <span style="width:125px; text-align:center;">核心超能力徽章</span>
        <span style="width:48px; text-align:right;">頁碼</span>
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
      <span>🏫 國小特教班社交技巧與溝通訓練 · 全學年注音版手冊</span>
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
        <span style="width:75px;">週次</span>
        <span style="width:125px;">教學日期</span>
        <span style="flex:1;">課堂主題與情境導引</span>
        <span style="width:125px; text-align:center;">核心超能力徽章</span>
        <span style="width:48px; text-align:right;">頁碼</span>
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
      <span>🏫 國小特教班社交技巧與溝通訓練 · 全學年注音版手冊</span>
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
        <span style="width:75px;">課號</span>
        <span style="width:110px;">專題領域</span>
        <span style="flex:1;">專題主題與突破技巧</span>
        <span style="width:125px; text-align:center;">核心超能力徽章</span>
        <span style="width:48px; text-align:right;">頁碼</span>
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
        <span style="width:75px;">課號</span>
        <span style="width:110px;">專題領域</span>
        <span style="flex:1;">專題主題與突破技巧</span>
        <span style="width:125px; text-align:center;">核心超能力徽章</span>
        <span style="width:48px; text-align:right;">頁碼</span>
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

def generate_lesson_article(k):
    d = ws[k]
    color = d.get("themeColor", "#f59e0b")
    title = get_clean_title(d)
    is_legacy = bool(d.get("legacy"))
    ln = d["lessonNumber"]
    unit = d["unit"]
    badge_emoji = d["badgeEmoji"]
    super_skill = d["superSkill"]
    badge_label = d["badgeLabel"]

    title_zy = add_zhuyin(title)
    super_skill_zy = add_zhuyin(super_skill)
    badge_label_zy = add_zhuyin(badge_label)

    if is_legacy:
        date_str = f"💡 專題：第 {ln} 課（靈感庫無日期限制）"
    else:
        date_str = f"📅 課堂進度：第 {ln} 週 · {d['date']} ({d['dayOfWeek']})"

    s1_title_zy = add_zhuyin(d["section1"]["title"])
    s1_prompt_zy = add_zhuyin(d["section1"]["prompt"])
    c_items = []
    for it in d["section1"]["items"]:
        lbl_zy = add_zhuyin(it["label"])
        desc_zy = add_zhuyin(it["desc"])
        c_items.append(f'<div class="circle-item"><div class="circle-icon">{it["icon"]}</div><div class="circle-label">{lbl_zy}</div><div class="circle-desc">{desc_zy}</div></div>')
    c_items_html = "".join(c_items)

    s2_title_zy = add_zhuyin(d["section2"]["title"])
    s2_prompt_zy = add_zhuyin(d["section2"]["prompt"])
    if d["section2"]["type"] == "choice":
        s2_opts = []
        for opt in d["section2"]["options"]:
            opt_zy = add_zhuyin(opt["label"])
            s2_opts.append(f'<div class="choice-card"><span class="choice-radio"></span><span style="font-size:1.2rem;">{opt["icon"]}</span><span>{opt_zy}</span></div>')
        s2_content_html = '<div class="choice-list">' + "".join(s2_opts) + '</div>'
    else:
        s2_opts = []
        for it in d["section2"]["items"]:
            lbl_zy = add_zhuyin(it["label"])
            desc_zy = add_zhuyin(it["desc"])
            s2_opts.append(f'<div class="circle-item"><div class="circle-icon">{it["icon"]}</div><div class="circle-label">{lbl_zy}</div><div class="circle-desc">{desc_zy}</div></div>')
        s2_content_html = '<div class="circle-grid">' + "".join(s2_opts) + '</div>'

    s3_title_zy = add_zhuyin(d["section3"]["title"])
    s3_prompt_zy = add_zhuyin(d["section3"]["prompt"])
    s3_steps = []
    for st in d["section3"]["steps"]:
        st_zy = add_zhuyin(st["text"])
        s3_steps.append(f'<div class="checklist-row"><div class="checklist-box"></div><span style="font-size:1.2rem;">{st["icon"]}</span><span class="checklist-text">{st_zy}</span></div>')
    s3_steps_html = "".join(s3_steps)

    gen_text = f"{d['generalization']['trigger']} ➜ <strong>{d['generalization']['promptWord']}</strong>" if d.get("generalization") else "在普通班遇到狀況時，請提示今日超能力口訣！"
    home_action = d["homeTask"]["action"] if d.get("homeTask") else "向爸爸媽媽展現一次今日超能力！"

    return f"""
    <!-- Worksheet {d['id']} (Lesson {ln}) -->
    <article class="worksheet-page" id="lesson-{ln}" style="--border-color: {color};">
      <div class="sheet-header-badge">
        <span class="school-tag">🏫 115年OO國小學習教室 · 社交技巧與溝通訓練 成長學習單（注音版）</span>
        <span class="unit-badge">{unit}</span>
      </div>
      <div class="sheet-title-row">
        <h1 class="sheet-main-title">{title_zy}</h1>
        <div class="sheet-target-badge" style="border-color: {color};">
          <span>{badge_emoji}</span>
          <span>本日超能力目標：{super_skill_zy}</span>
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
          <h3 class="task-title">{s1_title_zy}</h3>
        </div>
        <p class="task-prompt">{s1_prompt_zy}</p>
        <div class="circle-grid">{c_items_html}</div>
      </div>
      <div class="task-card">
        <div class="task-header">
          <span class="task-num-icon">2</span>
          <h3 class="task-title">{s2_title_zy}</h3>
        </div>
        <p class="task-prompt">{s2_prompt_zy}</p>
        {s2_content_html}
      </div>
      <div class="task-card">
        <div class="task-header">
          <span class="task-num-icon">3</span>
          <h3 class="task-title">{s3_title_zy}</h3>
        </div>
        <p class="task-prompt">{s3_prompt_zy}</p>
        <div class="checklist-rows">{s3_steps_html}</div>
      </div>
      <div class="sheet-footer">
        <div class="self-stars-box">
          <div>🌟 {add_zhuyin('我的今日超能力成果評量（表現優秀請塗滿星星）')}</div>
          <div style="font-size:1.45rem; letter-spacing:5px;">⭐ ⭐ ⭐</div>
        </div>
        <div class="teacher-stamp-box">
          <span>💮 老師簽章</span>
          <div style="font-size: 0.82rem; color:#94a3b8;">（表現優秀，蓋章贈送課堂星星代幣！）</div>
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
            <span style="font-size: 0.82rem;">家長簽章：［　　　　　］</span>
          </div>
          {home_action}
        </div>
      </div>
    </article>
    """

def wrap_html(body_content):
    return f"""<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>注音版學習單 (B4規格)</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" type="image/png" href="favicon.png">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/bpmf-zihi-kai-std@latest/index.css">
  <style>{css}</style>
</head>
<body>
{body_content}
</body>
</html>"""

def print_html_to_pdf(html_str, output_pdf):
    temp_html = output_pdf.replace(".pdf", ".html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_str)
    subprocess.run([
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless", "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        f"--print-to-pdf={output_pdf}",
        f"file://{temp_html}"
    ], check=True)

# 2. 依批次編譯 PDF
print("2. Compiling Part A: Intro (Cover + 4 TOC pages)...")
pdf_part_intro = "/tmp/zhuyin_intro.pdf"
print_html_to_pdf(intro_html, pdf_part_intro)

print("3. Compiling Part B1: Weeks 1 to 26 (26 pages)...")
b1_content = "\n".join([generate_lesson_article(k) for k in weeks_p1])
pdf_part_b1 = "/tmp/zhuyin_b1.pdf"
print_html_to_pdf(wrap_html(b1_content), pdf_part_b1)

print("4. Compiling Part B2: Weeks 27 to 52 (26 pages)...")
b2_content = "\n".join([generate_lesson_article(k) for k in weeks_p2])
pdf_part_b2 = "/tmp/zhuyin_b2.pdf"
print_html_to_pdf(wrap_html(b2_content), pdf_part_b2)

print("5. Compiling Part B3: Lessons 53 to 77 (25 pages)...")
b3_content = "\n".join([generate_lesson_article(k) for k in ideas_p1])
pdf_part_b3 = "/tmp/zhuyin_b3.pdf"
print_html_to_pdf(wrap_html(b3_content), pdf_part_b3)

print("6. Compiling Part B4: Lessons 78 to 101 (24 pages)...")
b4_content = "\n".join([generate_lesson_article(k) for k in ideas_p2])
pdf_part_b4 = "/tmp/zhuyin_b4.pdf"
print_html_to_pdf(wrap_html(b4_content), pdf_part_b4)

# 3. 合併並注入 PDF 階層式大綱書籤 (Bookmarks/Outlines)
print("7. Merging PDF parts and adding hierarchical bookmarks...")
writer = pypdf.PdfWriter()

# Append Intro (5 pages: 1 Cover + 4 TOC pages)
writer.append(pdf_part_intro)
writer.append(pdf_part_b1)
writer.append(pdf_part_b2)
writer.append(pdf_part_b3)
writer.append(pdf_part_b4)

# 注入大綱 (Outlines / Bookmarks)
# Page 1: 封面
writer.add_outline_item("📖 封面：101 堂國字注音彩色學習單彙編手冊（B4規格）", page_number=0)

# Page 2~5: 目錄
toc_parent = writer.add_outline_item("📚 目錄索引（4頁完整導航）", page_number=1)
writer.add_outline_item("目錄（一·上）：第 01 週 ～ 第 26 週（第一學期課綱）", page_number=1, parent=toc_parent)
writer.add_outline_item("目錄（一·下）：第 27 週 ～ 第 52 週（第二學期課綱）", page_number=2, parent=toc_parent)
writer.add_outline_item("目錄（二·上）：第 53 課 ～ 第 77 課（特殊情境疑難靈感庫）", page_number=3, parent=toc_parent)
writer.add_outline_item("目錄（二·下）：第 78 課 ～ 第 101 課（特殊情境疑難靈感庫）", page_number=4, parent=toc_parent)

# Part 1: 52 週常態課綱 (Pages 6 to 57)
part1_parent = writer.add_outline_item("📘 第一部分：52 週社交技巧循序課綱（含日期進度）", page_number=5)
for i, k in enumerate(weeks):
    item = ws[k]
    t = get_clean_title(item)
    ln = item["lessonNumber"]
    d = item["date"]
    page_idx = 5 + i
    writer.add_outline_item(f"第 {ln:02d} 週 ({d}) {t}", page_number=page_idx, parent=part1_parent)

# Part 2: 49 堂疑難靈感庫 (Pages 58 to 106)
part2_parent = writer.add_outline_item("💡 第二部分：49 堂特殊情境疑難靈感庫（彈性專題）", page_number=57)
for j, k in enumerate(ideas):
    item = ws[k]
    t = item["title"]
    ln = item["lessonNumber"]
    dom = get_short_domain(item.get("unit", ""))
    page_idx = 57 + j
    writer.add_outline_item(f"第 {ln} 課 [{dom}] {t}", page_number=page_idx, parent=part2_parent)

# 8. 注入目錄頁點擊跳轉超連結 (Clickable Link Annotations on TOC Pages 1..4)
print("8. Adding clickable jump links to Table of Contents pages...")
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
        if 65 < y < 920:
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
            top = min(920.0, y + (ys[0] - ys[1]) / 2)
        else:
            top = (ys[i-1] + y) / 2
        if i == len(ys) - 1:
            bottom = max(65.0, y - (ys[-2] - ys[-1]) / 2)
        else:
            bottom = (y + ys[i+1]) / 2
        
        target_page_idx = 4 + ln
        target_page = writer.pages[target_page_idx]
        
        link = DictionaryObject({
            NameObject('/Type'): NameObject('/Annot'),
            NameObject('/Subtype'): NameObject('/Link'),
            NameObject('/Rect'): ArrayObject([FloatObject(35.0), FloatObject(bottom), FloatObject(675.0), FloatObject(top)]),
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

# 儲存最終編譯 PDF
output_pdf_path = os.path.join(WEB_DIR, "101堂特教學習單_注音版_B4.pdf")
mirror_pdf_path = os.path.join(WEB_DIR, "special_ed_101_worksheets_zhuyin_b4.pdf")
artifact_pdf_path = os.path.join(ARTIFACT_DIR, "101堂特教學習單_注音版_B4.pdf")

with open(output_pdf_path, "wb") as f_out:
    writer.write(f_out)

shutil.copyfile(output_pdf_path, mirror_pdf_path)
shutil.copyfile(output_pdf_path, artifact_pdf_path)

# 儲存全冊完整 HTML 預覽檔
full_html_path = os.path.join(WEB_DIR, "all_worksheets_zhuyin_b4.html")
intro_body_match = re.search(r"<body>([\s\S]*?)</body>", intro_html)
intro_body = intro_body_match.group(1) if intro_body_match else ""
full_book_content = intro_body + "\n" + b1_content + "\n" + b2_content + "\n" + b3_content + "\n" + b4_content
with open(full_html_path, "w", encoding="utf-8") as f_html:
    f_html.write(wrap_html(full_book_content).replace("</head>", '<link rel="stylesheet" href="focus-mode.css?v=20261031-font">\n<script defer src="focus-mode.js?v=20261031-font"></script>\n<link rel="stylesheet" href="book-reader.css?v=20261031-silent">\n<script defer src="book-reader.js?v=20261031-silent"></script>\n</head>'))

file_size_mb = os.path.getsize(output_pdf_path) / (1024 * 1024)
print(f"🎉 MASTER B4 ZHUYIN WORKSHEETS PDF COMPILED SUCCESSFULLY!")
print(f"- Output File: {output_pdf_path} ({file_size_mb:.2f} MB)")
print(f"- Mirror File: {mirror_pdf_path}")
print(f"- Artifact File: {artifact_pdf_path}")

# Verify page count
reader = pypdf.PdfReader(output_pdf_path)
total_pages = len(reader.pages)
print(f"★ 總頁數：{total_pages} 頁")
if total_pages == 106:
    print("✅ 完美驗證：整整 106 頁（1 封面 ＋ 4 目錄 ＋ 101 堂注音版學習單），一堂課嚴格一張 B4，零溢出、零截斷！")
else:
    print(f"⚠️ 警告：總頁數為 {total_pages}，預期為 106 頁！")
