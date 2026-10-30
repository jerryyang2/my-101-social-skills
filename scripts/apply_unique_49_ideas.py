#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
apply_unique_49_ideas.py
Injects 49 completely unique, non-overlapping inspiration lessons into:
1. 備課平台/app.js (defaultBriefings)
2. 備課平台/roleplay-data.js (dailyRoleplays)
3. 備課平台/worksheets-data.js (dailyWorksheets)
Removes all dates from the 49 legacy lessons!
"""

import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from scripts.build_unique_49_ideas import IDEAS_DATA
from scripts.ideas_cluster2_3 import CLUSTER_2_3
from scripts.ideas_cluster4_5 import CLUSTER_4_5
from scripts.ideas_cluster5 import CLUSTER_5
from scripts.ideas_cluster6_7 import CLUSTER_6_7

all_ideas = IDEAS_DATA + CLUSTER_2_3 + CLUSTER_4_5 + CLUSTER_5 + CLUSTER_6_7
print(f"Total unique ideas to inject: {len(all_ideas)}")

web_dir = os.path.join(os.path.dirname(__file__), "..", "備課平台")

# 1. Update app.js
app_path = os.path.join(web_dir, "app.js")
with open(app_path, "r", encoding="utf-8") as f:
    app_code = f.read()

match = re.search(r"const defaultBriefings = (\[[\s\S]*?\]);\s*//", app_code)
if not match:
    raise RuntimeError("Cannot find defaultBriefings in app.js")

briefings = json.loads(match.group(1))
# Keep only the 52 weeks
new_52_briefings = [b for b in briefings if not b.get("legacy")]
print(f"Kept {len(new_52_briefings)} new 52-week briefings from app.js.")

idea_briefings = []
for idea in all_ideas:
    ln = idea["lessonNumber"]
    idea_id = f"b-idea-{ln}"
    b_entry = {
        "id": idea_id,
        "lessonNumber": ln,
        "legacy": True,
        "date": "",
        "dayOfWeek": "靈感專題",
        "festival": "",
        "unit": idea["unit"],
        "title": idea["title"],
        "code": idea["code"],
        "themeColor": idea["themeColor"],
        "badgeEmoji": idea["badgeEmoji"],
        "badgeLabel": idea["badgeLabel"],
        "superSkill": idea["superSkill"],
        "summary": idea["summary"],
        "tags": ["ASD", "LD", "EBD"],
        "story": {
            "title": idea["story_title"],
            "content": idea["story_content"],
            "question": idea["story_question"]
        },
        "timeline": [
            {
                "time": "00-08分",
                "stage": "引起動機",
                "desc": f"導讀故事「{idea['story_title']}」，透過偶戲情境引導：{idea['story_question']}"
            },
            {
                "time": "08-20分",
                "stage": "技巧示範",
                "desc": f"拆解【{idea['card_title']}】：1.{idea['step1']}；2.{idea['step2']}；3.{idea['step3']}。"
            },
            {
                "time": "20-35分",
                "stage": "角色演練",
                "desc": f"4角色情境扮演大劇場（宇🦁、畯🐻、和🐼、嘉🦊 全員任務）：{idea['scenario']}"
            },
            {
                "time": "35-40分",
                "stage": "正向回饋",
                "desc": f"頒發「{idea['badgeLabel']}」榮譽章，完成彩色圖文學習單並派發家庭生活打卡任務。"
            }
        ],
        "scaffolds": {
            "asd": idea["asd_scaffold"],
            "ld": idea["ld_scaffold"],
            "ebd": idea["ebd_scaffold"]
        },
        "visualCard": {
            "title": f"⭐ {idea['card_title']}",
            "steps": [
                {"num": 1, "text": idea["step1"]},
                {"num": 2, "text": idea["step2"]},
                {"num": 3, "text": idea["step3"]}
            ]
        },
        "iepGoal": idea["iep_goal"],
        "regularClassTip": idea["class_tip"]
    }
    idea_briefings.append(b_entry)

all_combined_briefings = new_52_briefings + idea_briefings
print(f"Total combined briefings: {len(all_combined_briefings)}")

briefings_json = json.dumps(all_combined_briefings, ensure_ascii=False, indent=2)
# Replace in app.js
new_app_code = app_code[:match.start()] + f"const defaultBriefings = {briefings_json};\n//" + app_code[match.end():]
with open(app_path, "w", encoding="utf-8") as f:
    f.write(new_app_code)
print("Successfully updated app.js with 49 unique idea briefings.")


# 2. Update roleplay-data.js
rp_path = os.path.join(web_dir, "roleplay-data.js")
with open(rp_path, "r", encoding="utf-8") as f:
    rp_code = f.read()

rp_match = re.search(r"window\.dailyRoleplays\s*=\s*(\{[\s\S]*?\});", rp_code)
if not rp_match:
    raise RuntimeError("Cannot find window.dailyRoleplays in roleplay-data.js")

# Load existing 52-week roleplays
# Since eval is js, let us extract keys
rp_raw = rp_match.group(1)

# We can parse the 52 weeks directly
new_52_rp = {}
for w in range(1, 53):
    key = f"b-week-{w}"
    # find key in rp_raw
    k_pattern = rf'"{key}":\s*(\{{[\s\S]*?\n  \}})(?=,\s*"\w+|\s*\}})'
    m = re.search(k_pattern, rp_raw)
    if m:
        new_52_rp[key] = json.loads(m.group(1))

print(f"Extracted {len(new_52_rp)} new 52-week roleplays from roleplay-data.js.")

idea_roleplays = {}
for idea in all_ideas:
    ln = idea["lessonNumber"]
    idea_id = f"b-idea-{ln}"
    idea_roleplays[idea_id] = {
        "id": idea_id,
        "lessonNumber": ln,
        "legacy": True,
        "date": "",
        "dayOfWeek": "靈感專題",
        "festival": "",
        "unit": idea["unit"],
        "title": idea["title"],
        "scenario": idea["scenario"],
        "roles": [
            {
                "roleId": 1,
                "studentName": "宇",
                "studentEmoji": "🦁",
                "studentColor": "#3b82f6",
                "name": f"冷靜自律的小宇",
                "action": idea["yu_action"],
                "dialogue": idea["yu_dialogue"],
                "tip": idea["yu_tip"]
            },
            {
                "roleId": 2,
                "studentName": "畯",
                "studentEmoji": "🐻",
                "studentColor": "#8b5cf6",
                "name": f"勇於擔當的小畯",
                "action": idea["jun_action"],
                "dialogue": idea["jun_dialogue"],
                "tip": idea["jun_tip"]
            },
            {
                "roleId": 3,
                "studentName": "和",
                "studentEmoji": "🐼",
                "studentColor": "#10b981",
                "name": f"溫和體貼的小和",
                "action": idea["he_action"],
                "dialogue": idea["he_dialogue"],
                "tip": idea["he_tip"]
            },
            {
                "roleId": 4,
                "studentName": "嘉",
                "studentEmoji": "🦊",
                "studentColor": "#f59e0b",
                "name": f"熱心守規的小嘉",
                "action": idea["jia_action"],
                "dialogue": idea["jia_dialogue"],
                "tip": idea["jia_tip"]
            }
        ]
    }

all_combined_roleplays = {**new_52_rp, **idea_roleplays}
print(f"Total combined roleplays: {len(all_combined_roleplays)}")

roleplays_json = json.dumps(all_combined_roleplays, ensure_ascii=False, indent=2)
new_rp_file_content = (
    "// OO國小學習教室 · 每日 4 角色情境扮演小劇場專屬資料庫 (52 週新課綱 + 49 課靈感備份庫 共 101 課)\n"
    "// 專為 宇 (🦁 ASD)、畯 (🐻 EBD)、和 (🐼 ASD/LD)、嘉 (🦊 ASD) 設計\n"
    "// 每個情境具備：明確動作指令、具體對話台詞（支援注音與語音朗讀）、特教引導小撇步\n\n"
    f"window.dailyRoleplays = {roleplays_json};\n"
)
with open(rp_path, "w", encoding="utf-8") as f:
    f.write(new_rp_file_content)
print("Successfully updated roleplay-data.js with 49 unique idea roleplays.")


# 3. Update worksheets-data.js
ws_path = os.path.join(web_dir, "worksheets-data.js")
with open(ws_path, "r", encoding="utf-8") as f:
    ws_code = f.read()

ws_match = re.search(r"const dailyWorksheets\s*=\s*(\{[\s\S]*?\});", ws_code)
if not ws_match:
    raise RuntimeError("Cannot find dailyWorksheets in worksheets-data.js")

ws_raw = ws_match.group(1)
new_52_ws = {}
for w in range(1, 53):
    key = f"b-week-{w}"
    k_pattern = rf'"{key}":\s*(\{{[\s\S]*?\n  \}})(?=,\s*"\w+|\s*\}})'
    m = re.search(k_pattern, ws_raw)
    if m:
        new_52_ws[key] = json.loads(m.group(1))

print(f"Extracted {len(new_52_ws)} new 52-week worksheets from worksheets-data.js.")

idea_worksheets = {}
for idea in all_ideas:
    ln = idea["lessonNumber"]
    idea_id = f"b-idea-{ln}"
    short_title = idea["title"].split("——")[0]
    idea_worksheets[idea_id] = {
        "id": idea_id,
        "lessonNumber": ln,
        "legacy": True,
        "date": "",
        "dayOfWeek": "靈感專題",
        "festival": "",
        "unit": idea["unit"],
        "title": idea["title"],
        "superSkill": idea["superSkill"],
        "themeColor": idea["themeColor"],
        "badgeEmoji": idea["badgeEmoji"],
        "badgeLabel": idea["badgeLabel"],
        "section1": {
            "type": "circle",
            "title": "任務一：好習慣圈圈看",
            "prompt": f"在「{short_title}」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
            "items": [
                {
                    "id": "c1",
                    "icon": "🌟",
                    "label": idea["c1_label"],
                    "desc": idea["c1_desc"],
                    "isCorrect": True
                },
                {
                    "id": "c2",
                    "icon": "🛑",
                    "label": idea["c2_label"],
                    "desc": idea["c2_desc"],
                    "isCorrect": False
                },
                {
                    "id": "c3",
                    "icon": "✨",
                    "label": idea["c3_label"],
                    "desc": idea["c3_desc"],
                    "isCorrect": True
                },
                {
                    "id": "c4",
                    "icon": "🤝",
                    "label": idea["c4_label"],
                    "desc": idea["c4_desc"],
                    "isCorrect": True
                }
            ]
        },
        "section2": {
            "type": "choice",
            "title": "任務二：我的超能力選擇題",
            "prompt": f"當遇到這個狀況時，哪一個做法能發揮「{idea['superSkill']}」？",
            "options": [
                {
                    "id": "t1",
                    "score": "負向衝動",
                    "icon": "⚡",
                    "label": "不說話直接發脾氣或轉頭跑開",
                    "color": "#ef4444"
                },
                {
                    "id": "t2",
                    "score": "最佳超能力",
                    "icon": "🌟",
                    "label": f"冷靜深呼吸，運用「{idea['superSkill']}」妥善應對",
                    "color": "#10b981",
                    "recommended": True
                },
                {
                    "id": "t3",
                    "score": "消極退縮",
                    "icon": "🌧️",
                    "label": "一直忍耐不說，自己躲在角落生悶氣",
                    "color": "#f59e0b"
                }
            ]
        },
        "section3": {
            "type": "checklist",
            "title": "任務三：今日超能力動作挑戰",
            "prompt": f"跟著老師演練「{idea['superSkill']}」動作，做到了請在框框裡打勾勾［✓］：",
            "steps": [
                {
                    "num": 1,
                    "icon": "👀",
                    "text": idea["step1"]
                },
                {
                    "num": 2,
                    "icon": "🛑",
                    "text": idea["step2"]
                },
                {
                    "num": 3,
                    "icon": "🌟",
                    "text": idea["step3"]
                }
            ]
        },
        "homeTask": {
            "title": "🏠 今日家庭生活小超人打卡任務",
            "action": f"放學回家後，向爸爸媽媽展現一次「{idea['superSkill']}」，並跟家人擊掌！",
            "checkText": "家人簽章或打勾確認：［　　　　　］"
        },
        "generalization": {
            "trigger": f"當學生在普通班或生活中遇到「{short_title}」類似狀況時",
            "promptWord": f"請提示口訣：『啟動【{idea['superSkill']}】！』",
            "praise": f"在班級公開肯定其進步：『你看同學剛才做到了【{idea['superSkill']}】，非常懂事！』"
        }
    }

all_combined_worksheets = {**new_52_ws, **idea_worksheets}
print(f"Total combined worksheets: {len(all_combined_worksheets)}")

worksheets_json = json.dumps(all_combined_worksheets, ensure_ascii=False, indent=2)
new_ws_file_content = (
    "// 國小特殊教育資源班 · 每日彩色圖文學習單專用資料庫 (52 週新課綱 + 49 課靈感備份庫 共 101 課)\n"
    "// 專為自閉症 (ASD)、學習障礙 (LD)、情緒障礙 (EBD) 設計：免繁重書寫、多感官圖文、直覺圈選與勾選\n\n"
    f"const dailyWorksheets = {worksheets_json};\n"
)
with open(ws_path, "w", encoding="utf-8") as f:
    f.write(new_ws_file_content)
print("Successfully updated worksheets-data.js with 49 unique idea worksheets.")
print("All 3 databases updated successfully!")
