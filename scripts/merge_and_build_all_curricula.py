# -*- coding: utf-8 -*-
"""
大埤國小特教班 52 週新課綱整合構建腳本
1. 讀取 curriculum_part1 (Weeks 1-26) 與 curriculum_part2 (Weeks 27-52)
2. 提取既有 49 天每日教案（作為第 53 至 101 課 晨報靈感備份庫）
3. 生成完整的 52 週新教案、情境角色劇場、彩色圖文學習單
4. 寫入 app.js, roleplay-data.js, worksheets-data.js
"""

import sys
import os
import json
import datetime
import re

sys.path.append(os.path.join(os.path.dirname(__file__)))
import curriculum_part1
import curriculum_part2

START_DATE = datetime.date(2026, 9, 1)

WEEKS_ALL = curriculum_part1.WEEKS_1_TO_26 + curriculum_part2.WEEKS_27_TO_52
print(f"Total new weekly lessons: {len(WEEKS_ALL)}")

def get_week_date(week_num):
    d = START_DATE + datetime.timedelta(days=(week_num - 1) * 7)
    return d.isoformat()

def build_new_briefings():
    briefings = []
    for w in WEEKS_ALL:
        week_num = w["week"]
        date_str = get_week_date(week_num)
        bid = f"b-week-{week_num}"
        
        # 40分鐘 4階段流程
        timeline = [
            {
                "time": "00-08分",
                "stage": "引起動機",
                "desc": f"導讀故事「{w['story_title']}」，透過偶戲插圖引導學生覺察情緒與人際情境：{w['story_question']}"
            },
            {
                "time": "08-20分",
                "stage": "技巧示範",
                "desc": f"示範「{w['super_skill']}」核心技巧，拆解肢體動作與語音聲調三步驟，結合大腦煞車視覺圖卡進行精熟練習。"
            },
            {
                "time": "20-35分",
                "stage": "角色演練",
                "desc": f"四位小英雄（宇🦁、畯🐻、和🐼、嘉🦊）進行角色大劇場實戰演練「{w['scenario']}」，熟練非口語肢體動作與台詞。"
            },
            {
                "time": "35-40分",
                "stage": "正向回饋",
                "desc": f"完成自我檢核打勾與彩色學習單，頒發「{w['badge_label']}」榮譽勳章，獎勵課堂星星代幣！"
            }
        ]
        
        # 特殊教育鷹架支援
        scaffolds = {
            "asd": f"提供「{w['super_skill']}」結構化視覺提示圖卡，標註眼神聚焦點與肢體距離，降低陌生社交情境焦慮。",
            "ld": f"免繁瑣文字抄寫，全流程以彩色圖文圈選、肢體動作演練與口語重複為主要學習評量方式。",
            "ebd": f"演練前明確約定安全界線與代幣獎勵，若情緒激動允許先至冷靜角深呼吸，待情緒穩定後再進行角色演練。"
        }
        
        # 視覺提示卡
        visualCard = {
            "title": f"🎯 {w['super_skill']}",
            "steps": [
                {"num": 1, "text": "察覺訊號：手握拳、心跳快或看見他人需要時停步"},
                {"num": 2, "text": "按下煞車：做深呼吸三次，想一想最棒的做法"},
                {"num": 3, "text": "堅定行動：看著對方眉心，用合適音量說出想法"}
            ]
        }
        
        # 行為因果決策樹（CBT 認知行為模擬）
        decision_tree = {
            "prompt": f"在「{w['title'].split('——')[0]}」的情境考驗中，如果是你，你會選擇哪一條行為路線？",
            "impulsive": {
                "title": "💥 衝動發脾氣 / 拒絕配合",
                "desc": "直接大聲吼叫、動手推人或生悶氣轉頭跑開",
                "consequence": "❌ 行為後果：同學被嚇哭了、活動被迫暫停，大家心情都很糟，自己被扣除星星……好懊悔！",
                "feedback": "⚠️ 衝動大腦噴火了！下次請試著踩住煞車、做三次深呼吸！"
            },
            "super_skill": {
                "title": f"🌟 施展超能力：{w['super_skill']}",
                "desc": f"大腦深呼吸踩煞車，運用「{w['super_skill']}」有禮貌地表達與行動",
                "consequence": "🎉 圓滿大成功！同儕看見你的成熟與尊重，全班熱烈為你拍手歡呼，全員獲得 1 顆金色榮譽星星！",
                "feedback": "🏆 太棒了！理性大腦大獲全勝，成功掌握社交超能力！"
            }
        }
        
        # 普特融合與家庭類化
        home_task = {
            "title": "🏠 今日家庭生活小超人打卡任務",
            "action": f"放學回家後，向爸爸媽媽展現一次「{w['super_skill']}」，並跟家人擊掌！",
            "checkText": "家人簽章或打勾確認：［　　　　　］"
        }
        
        generalization = {
            "trigger": f"當學生在普通班遇到「{w['title'].split('——')[0]}」類似狀況時",
            "promptWord": f"請提示口訣：『啟動【{w['super_skill']}】！』",
            "praise": f"在班級公開肯定其進步：『你看同學剛才做到了【{w['super_skill']}】，非常懂禮貌！』"
        }
        
        briefing = {
            "id": bid,
            "lessonNumber": week_num,
            "legacy": False,
            "date": date_str,
            "dayOfWeek": "星期二",
            "festival": w.get("festival", ""),
            "unit": w["unit"],
            "title": w["title"],
            "code": w["code"],
            "themeColor": w["theme_color"],
            "badgeEmoji": w["badge_emoji"],
            "badgeLabel": w["badge_label"],
            "superSkill": w["super_skill"],
            "summary": w["summary"],
            "tags": ["特教社交", "溝通訓練", "ASD", "EBD", "LD"],
            "story": {
                "title": w["story_title"],
                "content": w["story_content"],
                "question": w["story_question"]
            },
            "timeline": timeline,
            "scaffolds": scaffolds,
            "visualCard": visualCard,
            "decisionTree": decision_tree,
            "homeTask": home_task,
            "generalization": generalization,
            "iepGoal": f"在遭遇相關社交或情緒情境時，學生能在視覺提示下 30 秒內做出「{w['super_skill']}」相應行為，達成率 80% 以上。",
            "regularClassTip": f"【普特合作口訣】{generalization['trigger']}，{generalization['promptWord']}；{generalization['praise']}"
        }
        briefings.append(briefing)
    return briefings

def build_new_roleplays():
    roleplays = {}
    students_meta = [
        {"studentName": "宇", "studentEmoji": "🦁", "studentColor": "#3b82f6"},
        {"studentName": "畯", "studentEmoji": "🐻", "studentColor": "#8b5cf6"},
        {"studentName": "和", "studentEmoji": "🐼", "studentColor": "#10b981"},
        {"studentName": "嘉", "studentEmoji": "🦊", "studentColor": "#f59e0b"}
    ]
    
    for w in WEEKS_ALL:
        week_num = w["week"]
        date_str = get_week_date(week_num)
        bid = f"b-week-{week_num}"
        
        roles_list = []
        for idx, r in enumerate(w["roles"]):
            meta = students_meta[idx % 4]
            roles_list.append({
                "roleId": idx + 1,
                "studentName": meta["studentName"],
                "studentEmoji": meta["studentEmoji"],
                "studentColor": meta["studentColor"],
                "name": r["name"],
                "action": r["action"],
                "dialogue": r["dialogue"],
                "tip": r["tip"]
            })
            
        roleplays[bid] = {
            "id": bid,
            "lessonNumber": week_num,
            "legacy": False,
            "date": date_str,
            "dayOfWeek": "星期二",
            "festival": w.get("festival", ""),
            "unit": w["unit"],
            "title": w["title"],
            "scenario": w["scenario"],
            "roles": roles_list
        }
    return roleplays

def build_new_worksheets():
    worksheets = {}
    for w in WEEKS_ALL:
        week_num = w["week"]
        date_str = get_week_date(week_num)
        bid = f"b-week-{week_num}"
        
        # 任務一：圈圈看 (3個正面行為 + 1個負面干擾項)
        r0 = w["roles"][0]
        r1 = w["roles"][1]
        r2 = w["roles"][2]
        
        section1 = {
            "type": "circle",
            "title": "任務一：好習慣圈圈看",
            "prompt": f"在「{w['title'].split('——')[0]}」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
            "items": [
                {
                    "id": "c1",
                    "icon": w["badge_emoji"],
                    "label": r0["name"].split('·')[-1].strip(),
                    "desc": r0["action"][:26] + "…",
                    "isCorrect": True
                },
                {
                    "id": "c2",
                    "icon": "🛑",
                    "label": "生氣大叫或動手推人",
                    "desc": "發脾氣破壞規則、不聽指令",
                    "isCorrect": False
                },
                {
                    "id": "c3",
                    "icon": "✨",
                    "label": r1["name"].split('·')[-1].strip(),
                    "desc": r1["action"][:26] + "…",
                    "isCorrect": True
                },
                {
                    "id": "c4",
                    "icon": "🤝",
                    "label": r2["name"].split('·')[-1].strip(),
                    "desc": r2["action"][:26] + "…",
                    "isCorrect": True
                }
            ]
        }
        
        # 任務二：選擇題 (1推薦正確選項 + 2干擾項)
        section2 = {
            "type": "choice",
            "title": f"任務二：我的超能力選擇題",
            "prompt": f"當遇到這個狀況時，哪一個做法能發揮「{w['super_skill']}」？",
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
                    "icon": w["badge_emoji"],
                    "label": f"冷靜深呼吸，運用「{w['super_skill']}」禮貌溝通",
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
        }
        
        # 任務三：檢核打勾清單
        section3 = {
            "type": "checklist",
            "title": "任務三：今日超能力動作挑戰",
            "prompt": f"跟著老師演練「{w['super_skill']}」動作，做到了請在框框裡打勾勾［✓］：",
            "steps": [
                {
                    "num": 1,
                    "icon": "👀",
                    "text": f"我能看著老師或同儕的眉心，保持專注微笑"
                },
                {
                    "num": 2,
                    "icon": "🛑",
                    "text": f"我能在大腦踩煞車，用適當的聲音音量說出想法"
                },
                {
                    "num": 3,
                    "icon": "🌟",
                    "text": f"我能完成今天的小劇場扮演，得到「{w['badge_label']}」徽章"
                }
            ]
        }
        
        worksheets[bid] = {
            "id": bid,
            "lessonNumber": week_num,
            "legacy": False,
            "date": date_str,
            "dayOfWeek": "星期二",
            "festival": w.get("festival", ""),
            "unit": w["unit"],
            "title": w["title"],
            "superSkill": w["super_skill"],
            "themeColor": w["theme_color"],
            "badgeEmoji": w["badge_emoji"],
            "badgeLabel": w["badge_label"],
            "section1": section1,
            "section2": section2,
            "section3": section3,
            "homeTask": {
                "title": "🏠 今日家庭生活小超人打卡任務",
                "action": f"放學回家後，向爸爸媽媽展現一次「{w['super_skill']}」，並跟家人擊掌！",
                "checkText": "家人簽章或打勾確認：［　　　　　］"
            },
            "generalization": {
                "trigger": f"當學生在普通班遇到「{w['title'].split('——')[0]}」類似狀況時",
                "promptWord": f"請提示口訣：『啟動【{w['super_skill']}】！』",
                "praise": f"在班級公開肯定其進步：『你看同學剛才做到了【{w['super_skill']}】，非常懂禮貌！』"
            }
        }
    return worksheets

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    workspace_root = os.path.dirname(script_dir)
    web_dir = os.path.join(workspace_root, "備課平台")
    
    # 1. 讀取 legacy_data.json
    legacy_file = os.path.join(script_dir, "legacy_data.json")
    with open(legacy_file, "r", encoding="utf-8") as f:
        legacy_data = json.load(f)
        
    legacy_briefings = legacy_data["briefings"]
    legacy_roleplays = legacy_data["roleplays"]
    legacy_worksheets = legacy_data["worksheets"]
    
    print(f"Loaded {len(legacy_briefings)} legacy briefings, {len(legacy_roleplays)} legacy roleplays, {len(legacy_worksheets)} legacy worksheets.")
    
    # 2. 為 legacy 項目賦予 lessonNumber 53..101 與 legacy: True
    for i, b in enumerate(legacy_briefings):
        b["lessonNumber"] = 53 + i
        b["legacy"] = True
        
    for i, (k, rp) in enumerate(legacy_roleplays.items()):
        rp["lessonNumber"] = 53 + i
        rp["legacy"] = True
        
    for i, (k, ws) in enumerate(legacy_worksheets.items()):
        ws["lessonNumber"] = 53 + i
        ws["legacy"] = True
        
    # 3. 建立 52 週新數據
    new_briefings = build_new_briefings()
    new_roleplays = build_new_roleplays()
    new_worksheets = build_new_worksheets()
    
    # 4. 合併新舊數據
    all_briefings = new_briefings + legacy_briefings
    
    all_roleplays = {}
    for k, v in new_roleplays.items():
        all_roleplays[k] = v
    for k, v in legacy_roleplays.items():
        all_roleplays[k] = v
        
    all_worksheets = {}
    for k, v in new_worksheets.items():
        all_worksheets[k] = v
    for k, v in legacy_worksheets.items():
        all_worksheets[k] = v
        
    print(f"Merged Total Briefings: {len(all_briefings)}")
    print(f"Merged Total Roleplays: {len(all_roleplays)}")
    print(f"Merged Total Worksheets: {len(all_worksheets)}")
    
    # 5. 更新 app.js
    app_js_path = os.path.join(web_dir, "app.js")
    with open(app_js_path, "r", encoding="utf-8") as f:
        app_content = f.read()
        
    split_target = "// 初始化資料庫"
    if split_target not in app_content:
        raise Exception(f"Cannot find '{split_target}' in app.js")
        
    parts = app_content.split(split_target)
    code_after = parts[1]
    
    briefings_json = json.dumps(all_briefings, ensure_ascii=False, indent=2)
    new_app_content = (
        "// 預設每日備課晨報資料庫（按照日期與週次排序：前 52 週為完整社交溝通課綱，後 49 課為晨報靈感備份庫）\n"
        f"const defaultBriefings = {briefings_json};\n\n"
        f"{split_target}{code_after}"
    )
    with open(app_js_path, "w", encoding="utf-8") as f:
        f.write(new_app_content)
    print("Updated app.js successfully!")
    
    # 6. 更新 roleplay-data.js
    rp_js_path = os.path.join(web_dir, "roleplay-data.js")
    roleplays_json = json.dumps(all_roleplays, ensure_ascii=False, indent=2)
    new_rp_content = (
        "// 大埤國小學習教室 · 每日 4 角色情境扮演小劇場專屬資料庫 (52 週新課綱 + 49 天靈感備份庫 共 101 課)\n"
        "// 專為 宇 (🦁 ASD)、畯 (🐻 EBD)、和 (🐼 ASD/LD)、嘉 (🦊 ASD) 設計\n"
        "// 每個情境具備：明確動作指令、具體對話台詞（支援注音與語音朗讀）、特教引導小撇步\n\n"
        f"window.dailyRoleplays = {roleplays_json};\n"
    )
    with open(rp_js_path, "w", encoding="utf-8") as f:
        f.write(new_rp_content)
    print("Updated roleplay-data.js successfully!")
    
    # 7. 更新 worksheets-data.js
    ws_js_path = os.path.join(web_dir, "worksheets-data.js")
    worksheets_json = json.dumps(all_worksheets, ensure_ascii=False, indent=2)
    new_ws_content = (
        "// 國小特殊教育資源班 · 每日彩色圖文學習單專用資料庫 (52 週新課綱 + 49 天靈感備份庫 共 101 課)\n"
        "// 專為自閉症 (ASD)、學習障礙 (LD)、情緒障礙 (EBD) 設計：免繁重書寫、多感官圖文、直覺圈選與勾選\n\n"
        f"const dailyWorksheets = {worksheets_json};\n\n"
        "if (typeof window !== 'undefined') {\n"
        "  window.dailyWorksheets = dailyWorksheets;\n"
        "}\n"
    )
    with open(ws_js_path, "w", encoding="utf-8") as f:
        f.write(new_ws_content)
    print("Updated worksheets-data.js successfully!")

if __name__ == "__main__":
    main()
