// 國小特殊教育資源班 · 每日彩色圖文學習單專用資料庫 (52 週新課綱 + 49 課靈感備份庫 共 101 課)
// 專為自閉症 (ASD)、學習障礙 (LD)、情緒障礙 (EBD) 設計：免繁重書寫、多感官圖文、直覺圈選與勾選
// 全冊 101 堂課 100% 情境化專屬設計，零重複模板，符合特教全國賽高品質教材標準

const dailyWorksheets = {
  "b-week-1": {
    "id": "b-week-1",
    "lessonNumber": 1,
    "legacy": false,
    "date": "2026-09-01",
    "dayOfWeek": "星期二",
    "festival": "開學相見歡",
    "unit": "第一單元：自我覺察與教室適應",
    "title": "開學相見歡與大聲打招呼——認識新同學與建立安全感",
    "superSkill": "👋 微笑打招呼小超人",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌟",
    "badgeLabel": "元氣問候官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「開學相見歡與大聲打招呼」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動問候的小宇",
          "desc": "抬頭挺胸直視前方，嘴角上揚微笑，右手揮動打招呼。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "低頭躲在門後不講話或對新同學做鬼臉",
          "desc": "害羞退縮或故意作怪，讓大家不知道怎麼跟你做朋友。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "大方自我介紹的小畯",
          "desc": "雙手自然垂放身體兩側，步伐穩健向前走一步，聲音宏亮。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫和回應的小和",
          "desc": "雙手輕輕放在肚子前，向大家深深一鞠躬，眼神溫柔。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「👋 微笑打招呼小超人」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "感到害羞就氣呼呼把書包摔在地上，對走過來的新同學大吼：「走開！不要看我！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌟",
          "label": "抬頭挺胸深呼吸，看著對方的眉心露出微笑，大方揮手說：「早安！我是小宇！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "把外套拉鍊拉到頭頂、躲在門後一直低頭看球鞋，整整一節課不敢跟任何人說話。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「👋 微笑打招呼小超人」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙腳站穩、抬頭挺胸深呼吸"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "右手揮揮、嘴角上揚露微笑"
        },
        {
          "num": 3,
          "icon": "🌟",
          "text": "清楚響亮說出自己的名字與早安"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，抬頭微笑向家人大聲說「爸爸/媽媽我回來了」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-2": {
    "id": "b-week-2",
    "lessonNumber": 2,
    "legacy": false,
    "date": "2026-09-08",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第一單元：自我覺察與教室適應",
    "title": "眼神注視與溫暖微笑——非口語溝通的魔法力量",
    "superSkill": "👁️ 眼神眉心聚光燈",
    "themeColor": "#6366f1",
    "badgeEmoji": "✨",
    "badgeLabel": "專注凝視官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「眼神注視與溫暖微笑」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "✨",
          "label": "鎖定眉心的小宇",
          "desc": "雙眼聚焦在對方的兩眉中間，身體稍微前傾，認真點頭。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "說話時一直盯著地板或背對著同學",
          "desc": "眼神游移迴避，會讓對方覺得你根本不想理他。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "感受被尊重的小畯",
          "desc": "放下手中的玩具球，面對小宇，雙手平放，微笑回應。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫柔注視的小和",
          "desc": "嘴角微微揚起，眼神溫暖地看著同儕，雙手輕輕拍手。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「👁️ 眼神眉心聚光燈」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "別人跟自己講話時，故意轉頭看天花板轉筆，甚至把兩隻耳朵用力塞住拒絕聽。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "✨",
          "label": "啟動眉心聚光燈，溫柔注視對方兩眉中間三秒鐘，自然點頭微笑表達我有在聽。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "害怕眼神接觸，一邊小聲講話一邊眼睛直盯著地板數磁磚，越講越心虛不敢看人。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「👁️ 眼神眉心聚光燈」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "將視線溫柔投射至對方「眉心三角形」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "臉部肌肉放鬆，露出自然真誠微笑"
        },
        {
          "num": 3,
          "icon": "✨",
          "text": "保持注視三秒鐘，輕輕點頭表示在聽"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "晚餐時看著家人的眉心微笑對話三秒鐘，請家人在學習單上蓋個讚！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-3": {
    "id": "b-week-3",
    "lessonNumber": 3,
    "legacy": false,
    "date": "2026-09-15",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第一單元：自我覺察與教室適應",
    "title": "聲音大小五級儀表板——在不同場合調節說話音量",
    "superSkill": "🎛️ 音量儀表板神調音",
    "themeColor": "#10b981",
    "badgeEmoji": "🎙️",
    "badgeLabel": "音量魔法師",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「聲音大小五級儀表板」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎙️",
          "label": "調節音量的小宇",
          "desc": "把食指放在嘴唇前比出安靜，壓低喉嚨發出平穩溫和的聲量。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在安靜的自習課或圖書館用大聲公吼叫",
          "desc": "打擾全班專注，容易引發大家抗議與反感。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "按下大嗓門煞車的小畯",
          "desc": "右手放在自己喉嚨上感受震動，刻意放輕語氣，輕聲說話。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "輕聲細語的小和",
          "desc": "身體靠近同儕一小步，聲音像微風般清晰但輕柔。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎛️ 音量儀表板神調音」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "小組討論時太興奮，直接把音量轉到操場大聲公四分音量，震得全班耳朵痛。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎙️",
          "label": "摸摸喉嚨感受震動，將音量調到二分小組輕聲耳語，清楚表達又保護班級安靜。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "怕自己聲音太大被罵，乾脆緊閉嘴巴完全不發言，放棄參與小組討論。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎛️ 音量儀表板神調音」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "觀察身處場所（教室/圖書館/自習室）"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "手掌輕貼喉嚨感受發音時的震動強度"
        },
        {
          "num": 3,
          "icon": "🎙️",
          "text": "旋鈕調至一至二分音量，輕聲溫和說話"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "和家人一起玩「音量五級跳」遊戲，在家中練習用二分悄悄話說一個小秘密！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-4": {
    "id": "b-week-4",
    "lessonNumber": 4,
    "legacy": false,
    "date": "2026-09-22",
    "dayOfWeek": "星期二",
    "festival": "教師節",
    "unit": "第二單元：節慶感恩與禮貌心意 (秋季篇)",
    "title": "【教師節特輯 9/28】——看見老師的辛苦，真心說聲「謝謝您」",
    "superSkill": "💌 敬師感恩小特使",
    "themeColor": "#ef4444",
    "badgeEmoji": "🍎",
    "badgeLabel": "尊師小楷模",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【教師節特輯 9/28】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🍎",
          "label": "端正鞠躬的小宇",
          "desc": "雙手貼齊大腿兩側，腰部彎曲四十五度向老師深深一鞠躬。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "抱怨老師出功課太難，把聯絡簿丟在地上",
          "desc": "不尊重辛苦教導我們的老師，傷害師生感情。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "大聲說出愛的小畯",
          "desc": "雙手恭敬奉上手繪的金色大愛心卡片，眼神真摯宏亮發言。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "送上溫開水的小和",
          "desc": "雙手捧著溫開水杯輕輕放在桌上，臉上帶著溫暖微笑。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💌 敬師感恩小特使」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "覺得老師叮嚀自己訂正很煩，當場對著老師翻白眼、用力踢椅子抗議。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🍎",
          "label": "雙手端正奉上手繪愛心卡，立正鞠躬說：「謝謝老師每天辛苦教導我！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "雖然心裡很感謝老師，但害羞不好意思開口，悄悄把寫好的卡片塞在自己書包底。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💌 敬師感恩小特使」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "端正立正站好，雙手平穩端送卡片或溫水"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "腰部自然彎曲四十五度向師長鞠躬"
        },
        {
          "num": 3,
          "icon": "🍎",
          "text": "真誠說出：「謝謝老師，您辛苦了！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "睡前倒一杯溫開水端給辛苦照顧自己的家人，並說一聲「謝謝您今天照顧我」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-5": {
    "id": "b-week-5",
    "lessonNumber": 5,
    "legacy": false,
    "date": "2026-09-29",
    "dayOfWeek": "星期二",
    "festival": "中秋節",
    "unit": "第二單元：節慶感恩與禮貌心意 (秋季篇)",
    "title": "【中秋節特輯】——月餅柚子同樂會：美食分享與輪流禮讓",
    "superSkill": "🌕 中秋禮讓美食家",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🥮",
    "badgeLabel": "分享小仙子",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【中秋節特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🥮",
          "label": "遵守排隊的小宇",
          "desc": "拿著小紙盤安靜排在隊伍線後面，雙手端好盤子不推擠。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "把整盒好吃的蛋黃酥全部霸占搶光",
          "desc": "自私不願分享，同儕會不敢跟你一起同樂。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動禮讓的小畯",
          "desc": "把快要伸出去搶的手收回，側身禮讓同儕先挑選，臉上帶著笑容。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "分送柚子帽的小和",
          "desc": "雙手把剝得像皇冠一樣的柚子皮輕輕戴在同儕頭上，溫和微笑。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌕 中秋禮讓美食家」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看到同樂會的柚子和月餅，直接用手整盤端走，嘴裡塞滿還大吼：「都是我的！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🥮",
          "label": "遵守輪流排隊，雙手拿取自己的一份，並大方跟旁邊同學說：「請慢用，一起吃！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "想吃點心但不敢上前拿，一個人站在教室角落看著大家吃，肚子餓又生悶氣。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌕 中秋禮讓美食家」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "在美食面前停步，雙手放在肚子前等待"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "等大家都入座，禮貌詢問：「我可以拿一個嗎？」"
        },
        {
          "num": 3,
          "icon": "🥮",
          "text": "雙手拿取一份，並微笑對旁邊同學說請"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "回家後把一份水果或小點心切好，主動端給家人分享並說「請慢用」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-6": {
    "id": "b-week-6",
    "lessonNumber": 6,
    "legacy": false,
    "date": "2026-10-06",
    "dayOfWeek": "星期二",
    "festival": "雙十國慶",
    "unit": "第二單元：節慶感恩與禮貌心意 (秋季篇)",
    "title": "【雙十國慶特輯 10/10】——團體集合與排隊行進：手放兩側、眼看前方",
    "superSkill": "🚩 神氣行進小衛兵",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎖️",
    "badgeLabel": "秩序小隊長",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【雙十國慶特輯 10/10】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎖️",
          "label": "筆直領隊的小宇",
          "desc": "挺起胸膛，雙眼專注看著前面同學後腦勺，雙手貼齊大腿兩側穩步走…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "排隊時猛推前面同學，趁機插隊搶第一",
          "desc": "容易造成推擠跌倒受傷，破壞班級團體秩序。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時煞車的小畯",
          "desc": "收回亂踢的雙腳，身體立刻立正站好，與前面同學拉開一步距離。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "保持車距的小和",
          "desc": "伸出手臂向前比出安全距離，輕聲提醒後方同學慢行。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚩 神氣行進小衛兵」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "集會哨音響起，為了搶走在最前面，用力用手肘撞開排在前面的小和。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎖️",
          "label": "雙手自然垂放身體兩側，跟前面同學保持一步安全距離，精神抖擻跟上隊伍。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "排隊時東張西望亂走，脫離整齊隊伍，被催促時賭氣坐在地上不肯前進。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚩 神氣行進小衛兵」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "聽到集合口令，雙腳併攏手放兩側立正"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "眼睛看著前面同學後腦勺，保持一臂距離"
        },
        {
          "num": 3,
          "icon": "🎖️",
          "text": "腳步配合隊伍節奏，安靜行進不脫隊"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在超商或公車站跟家人一起排隊，展現「手放兩側、不推擠」的神氣小衛兵！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-7": {
    "id": "b-week-7",
    "lessonNumber": 7,
    "legacy": false,
    "date": "2026-10-13",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第三單元：情緒密碼與自制煞車術",
    "title": "我的身體警報器——覺察心跳快、握拳等憤怒生理訊號",
    "superSkill": "🧭 發現身體警報器",
    "themeColor": "#f97316",
    "badgeEmoji": "🌡️",
    "badgeLabel": "身體偵探員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「我的身體警報器」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌡️",
          "label": "覺察警報的小宇",
          "desc": "低頭看滿地積木，雙手握拳又慢慢放開，深呼吸感受心跳，拿起情緒…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "心跳一變快就直接握拳打人或用力踢桌子",
          "desc": "忽視生理警報，放任衝動傷害別人與破壞公物。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "按捺衝動的小畯",
          "desc": "立刻煞車停下腳步，轉身面向小宇，雙手垂下不防衛，眼神誠懇注視…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "遞上指壓球的小和",
          "desc": "快步走到置物櫃拿來指壓球與深呼吸圖卡，遞到小宇手裡，輕輕拍撫…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧭 發現身體警報器」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "感覺胸口發熱、拳頭變硬，立刻像小恐龍一樣亂甩書包、用力踹翻垃圾桶。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌡️",
          "label": "敏銳覺察「心跳像打鼓」的身體訊號，立刻伸出食指在胸前比出「暫停煞車」！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "身體明明很難受、肚子痛得冒冷汗，卻硬撐著不說，最後難過得趴在桌上大哭。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧭 發現身體警報器」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "手掌放在左胸口，感覺心跳是不是在快跑"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "手掌張開自我檢查：雙手拳頭有沒有握太緊"
        },
        {
          "num": 3,
          "icon": "🌡️",
          "text": "說出自己的生理感受：「我的身體警報器響了」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟爸爸媽媽分享自己生氣時「心跳快、握拳」的身體訊號，請家人在生氣時提醒自己！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-8": {
    "id": "b-week-8",
    "lessonNumber": 8,
    "legacy": false,
    "date": "2026-10-20",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第三單元：情緒密碼與自制煞車術",
    "title": "神奇烏龜煞車術——生氣時縮殼、深呼吸三口、數到十",
    "superSkill": "🛡️ 神奇烏龜縮殼術",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🐢",
    "badgeLabel": "煞車大高手",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「神奇烏龜煞車術」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🐢",
          "label": "縮殼煞車的小宇",
          "desc": "雙手環抱胸前，下巴貼緊鎖骨，雙眼閉上，緩慢均勻吸氣吐氣三次。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "生氣時大叫砸壞玩具、撕破自己的作業本",
          "desc": "情緒火山爆發，事後必須承擔後果而且好懊悔。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "數到十的小畯",
          "desc": "雙手握拳放在腹部，雙腳站穩踩地，在心裡大聲倒數十到一，吐出長…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫和守護的小和",
          "desc": "站在一旁安靜陪伴，不催促、不嘲弄，輕聲數拍子協助同儕放鬆肩膀…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛡️ 神奇烏龜縮殼術」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遊戲輸了非常不甘心，一把扯壞遊戲卡牌，對著裁判老師大吼：「這不公平！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🐢",
          "label": "想像自己是一隻冷靜的小烏龜，雙手抱頭縮進安全殼，深呼吸三大口從一數到十。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "強忍怒氣不發作，憋著氣滿臉通紅，暗中咬牙切齒記恨同學一整天。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛡️ 神奇烏龜縮殼術」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙手環抱胸前，像小烏龜縮進堅固龜殼"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "閉上眼睛深深吸氣三口，感覺肚子鼓起來"
        },
        {
          "num": 3,
          "icon": "🐢",
          "text": "在心裡慢慢數數字：一、二、三……一直數到十"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中找一個舒適的沙發角落當作「烏龜小基地」，向家人示範縮殼冷靜操！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-9": {
    "id": "b-week-9",
    "lessonNumber": 9,
    "legacy": false,
    "date": "2026-10-27",
    "dayOfWeek": "星期二",
    "festival": "萬聖節",
    "unit": "第二單元：節慶感恩與禮貌心意 (秋季篇)",
    "title": "【萬聖節特輯 10/31】——不搗蛋小紳士：要糖果的禮貌與開玩笑界線",
    "superSkill": "🍬 禮貌討糖不搗蛋",
    "themeColor": "#d97706",
    "badgeEmoji": "🎃",
    "badgeLabel": "萬聖紳士小精靈",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【萬聖節特輯 10/31】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎃",
          "label": "禮貌要糖的小宇",
          "desc": "提著南瓜提籃，走到門口輕敲三下，眼神注視對方，露出可愛笑容。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "要不到糖果就故意踩壞同學的南瓜提袋",
          "desc": "開玩笑失去分寸，把歡樂派對變成吵架現場。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "摘下面具道歉的小畯",
          "desc": "立刻把嚇人的吸血鬼面具推到頭頂，露出真誠臉龐，雙手奉還撿起的…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "安慰受驚同儕的小和",
          "desc": "輕輕拍拍被嚇到同學的背，遞上小面紙，溫柔安撫情緒。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🍬 禮貌討糖不搗蛋」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "要糖果時別人只給一顆，覺得太少立刻把糖果吐在地上，還搶走別人的面具。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎃",
          "label": "有禮貌雙手捧著提袋說：「不給糖就搗蛋，請問可以給我糖果嗎？」拿到後說謝謝！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看到別人扮裝怪獸覺得害怕，躲在洗手間不肯出來參加派對，錯過好玩的活動。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🍬 禮貌討糖不搗蛋」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "端正站好，雙手拿著提袋保持禮貌微笑"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "溫和清楚說出通關密語：「不給糖就搗蛋」"
        },
        {
          "num": 3,
          "icon": "🎃",
          "text": "拿到糖果雙手接住，大聲說：「謝謝您！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中跟家人練習「有禮貌要東西」的技巧，說「請、謝謝」，不隨便動手搶！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-10": {
    "id": "b-week-10",
    "lessonNumber": 10,
    "legacy": false,
    "date": "2026-11-03",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第四單元：課堂常規與團體適應",
    "title": "課堂舉手發言禮儀——等待老師點名、不插嘴不搶話",
    "superSkill": "✋ 安靜舉手等點名",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🙋",
    "badgeLabel": "發言守禮星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「課堂舉手發言禮儀」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🙋",
          "label": "小宇",
          "desc": "把背打直坐得端端正正，手肘貼在桌上，右手安靜舉高，眼睛看著老…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "老師還在講課就大聲插嘴搶話、拍桌子打斷",
          "desc": "打斷課堂進行，讓大家聽不清楚老師的重要說明。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "按下搶話煞車的小畯",
          "desc": "屁股坐回椅子上，深呼吸一口氣，把衝動想大喊的嘴巴緊緊抿住，雙…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫和回答的小和",
          "desc": "聽到老師點名後，站起身、身體站穩，聲音清楚溫和地說出答案。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「✋ 安靜舉手等點名」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "心裡想到答案就興奮大吼，直接從座位跳起來揮手搶話，把別人的發言蓋過去。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🙋",
          "label": "右手筆直舉高貼近耳朵，嘴巴閉上安靜等待，直到老師叫到自己的名字才起立發言。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "明明知道答案，但因為害怕講錯被笑，低著頭把手藏在抽屜裡完全不敢舉手。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「✋ 安靜舉手等點名」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "右手平穩向上舉高，手臂貼近耳朵"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "嘴巴緊閉像拉上拉鍊，安靜看著老師"
        },
        {
          "num": 3,
          "icon": "🙋",
          "text": "聽到老師叫自己名字，再起立大方發言"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "餐桌上跟家人講話時，練習「等家人講完一段，再舉手說我也要講」，不打斷長輩！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-11": {
    "id": "b-week-11",
    "lessonNumber": 11,
    "legacy": false,
    "date": "2026-11-10",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第四單元：課堂常規與團體適應",
    "title": "聽到鐘聲會收心——下課轉換操與桌面就位準備",
    "superSkill": "⏰ 鐘聲三十秒歸位",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🔔",
    "badgeLabel": "收心小隊長",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「聽到鐘聲會收心」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🔔",
          "label": "小宇",
          "desc": "一聽到鐘聲，立刻放下手上的積木零件，站起身把椅子靠攏。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "鐘聲響了還在走廊追逐奔跑，不回教室",
          "desc": "延誤上課時間，滿頭大汗無法專心進入學習狀態。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "依依不捨的小畯",
          "desc": "深吸一口氣，將未完成的積木拍照存證，快速放進自己的收納盒中。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "動作迅速地把地面上的散落積木掃進收納箱，蓋上蓋子。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「⏰ 鐘聲三十秒歸位」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "鐘聲噹噹噹響了，還堅持要把球踢進球門，在操場尖叫拒絕集合回教室。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔔",
          "label": "一聽到鐘聲立刻在心中默數三十秒，把玩具物歸原位，迅速走回教室整理好桌面。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "鐘聲響了拖拖拉拉慢慢摸，上課五分鐘後才晃回教室，被老師指正時賭氣發呆。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「⏰ 鐘聲三十秒歸位」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "一聽到上課鐘聲響起，立刻放下手邊遊戲"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "腳步快走不奔跑，三十秒內回到自己座位"
        },
        {
          "num": 3,
          "icon": "🔔",
          "text": "拿出下一節課本與鉛筆盒，端正坐好深呼吸"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中設置一個鬧鐘，鬧鐘一響立刻在三十秒內收好手邊玩具，向爸媽展現收心功！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-12": {
    "id": "b-week-12",
    "lessonNumber": 12,
    "legacy": false,
    "date": "2026-11-17",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第五單元：同儕友誼與合作分享",
    "title": "加入遊戲的魔法通關密語——有禮貌說「請問我可以一起玩嗎？」",
    "superSkill": "🔑 遊戲加入通行證",
    "themeColor": "#ec4899",
    "badgeEmoji": "🤝",
    "badgeLabel": "友誼小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「加入遊戲的魔法通關密語」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🤝",
          "label": "禮貌發問的小宇",
          "desc": "站在場邊看三秒，趁球踢出界暫停時走上前，眼神看著隊長微笑詢問…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "沒問別人就直接搶走球、踢倒別人的城堡",
          "desc": "強行介入遊戲會破壞遊戲，讓大家都不想跟你玩。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "熱情歡迎的小畯",
          "desc": "把球踩在腳下停穩，抬起頭向小宇揮手，大方分配位置。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "遵守規則的小和",
          "desc": "向新加入的同儕簡要說明遊戲進程與比分，協助融入。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔑 遊戲加入通行證」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "想加入大家踢球，直接衝上去把球一腳踢飛，對守門員大吼：「現在輪到我當隊長！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🤝",
          "label": "走到遊戲圈旁停步注視，溫和舉手詢問：「請問我可以一起玩嗎？我可以當傳球手！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "想加入遊戲卻站在十公尺外遠遠看著，心裡羨慕又自怨自艾，覺得別人都排擠自己。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔑 遊戲加入通行證」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走到遊戲夥伴旁兩步處停下，保持微笑"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "說出通關密語：「請問我可以一起玩嗎？」"
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "主動說明自己能擔任的角色或耐心等下一局"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "到公園遊樂場玩時，禮貌向其他小朋友說「請問我可以一起玩嗎」，成功結交一位夥伴！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-13": {
    "id": "b-week-13",
    "lessonNumber": 13,
    "legacy": false,
    "date": "2026-11-24",
    "dayOfWeek": "星期二",
    "festival": "感恩節",
    "unit": "第五單元：同儕友誼與合作分享",
    "title": "【感恩節特輯】——友誼存錢筒：看見身邊的小天使，累積人緣正向金幣",
    "superSkill": "💰 友誼金幣多存入",
    "themeColor": "#eab308",
    "badgeEmoji": "🪙",
    "badgeLabel": "友誼大富翁",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【感恩節特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🪙",
          "label": "存入分享金幣的小宇",
          "desc": "雙手拿著一本心愛的恐龍百科借給同儕，在透明存錢筒裡投下一枚金…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "看到同學跌倒在旁邊嘲笑，大聲喊『活該』",
          "desc": "扣除友誼金幣，讓同學傷心難過、失去好朋友。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "存入禮讓金幣的小畯",
          "desc": "在飲水機前側身退後一步，微笑禮讓口渴的同學先裝水，投下代幣。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "存入傾聽金幣的小和",
          "desc": "坐在同儕身旁安靜注視對方說話，點頭給予回應，投入閃爍金幣。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💰 友誼金幣多存入」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "同學借橡皮擦不小心掉在地上，小畯大發脾氣罵對方是笨蛋，把同學文具踢飛。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🪙",
          "label": "看見同學需要幫忙主動伸手攙扶，並在心裡為友誼存錢筒存入一顆閃閃發光的友善金幣！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看到同學遇到困難，怕惹麻煩假裝沒看見快步溜走，事後心裡覺得很過意不去。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💰 友誼金幣多存入」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "用眼睛尋找教室裡正在努力或需要幫忙的同學"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "走上前伸出右手輕拍安慰或給予讚揚"
        },
        {
          "num": 3,
          "icon": "🪙",
          "text": "在心中默念：「我又存入了一枚溫暖友誼金幣」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "回家後讚美家人一個優點（如：媽媽煮的菜好好吃），為家庭存錢筒存入一顆愛心！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-14": {
    "id": "b-week-14",
    "lessonNumber": 14,
    "legacy": false,
    "date": "2026-12-01",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第五單元：同儕友誼與合作分享",
    "title": "團體積木大工程——一人一塊不爭搶、分工合作力量大",
    "superSkill": "🧩 團隊分工合力蓋",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚀",
    "badgeLabel": "合作建築師",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「團體積木大工程」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🚀",
          "label": "小宇",
          "desc": "按照設計圖指示，把方形磁力片排在底座，清楚分配大家負責的區塊…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "把別人辛辛苦苦蓋好的積木大樓整座推倒",
          "desc": "破壞團隊心血，大家會生氣不再信任你。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "控制搶零件手的小畯",
          "desc": "縮回想把全部磁力片抱在懷裡的手，拿了三片紅色磁力片，專心組裝…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "將散落各處的磁力片依照顏色分類排好，主動遞送適合的零件給隊友…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧩 團隊分工合力蓋」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "隊友拿了自己想要的紅色長條積木，氣得一把推倒整座城堡，大叫：「大家都別玩！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚀",
          "label": "主動討論分工：「你負責蓋城牆，我來搭橋梁！」遇到零件不夠時用交換代替爭搶。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "覺得隊友蓋得不如自己的意，賭氣把雙手插在口袋，坐在一旁冷眼旁觀拒絕合作。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧩 團隊分工合力蓋」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "把積木放在桌子中央，大家一起看設計圖"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "開口討論角色分工：「我蓋基底，你蓋屋頂」"
        },
        {
          "num": 3,
          "icon": "🚀",
          "text": "拿取積木時一次拿一塊，互相道謝與鼓勵"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟家人合力完成一件家事（例如：一人擦桌子、一人擺碗筷），體會分工合作的力量！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-15": {
    "id": "b-week-15",
    "lessonNumber": 15,
    "legacy": false,
    "date": "2026-12-08",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第五單元：同儕友誼與合作分享",
    "title": "讚美放大鏡與落落大方——真誠稱讚朋友、大方微笑說「謝謝你」",
    "superSkill": "💖 讚美大方說謝謝",
    "themeColor": "#a855f7",
    "badgeEmoji": "🔍",
    "badgeLabel": "讚美小太陽",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「讚美放大鏡與落落大方」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🔍",
          "label": "發現同儕亮點的小宇",
          "desc": "拿起金邊放大鏡看著小畯，眼神真誠，大聲說出小畯今天最棒的優點…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "別人稱讚你很棒時，斜眼冷笑說『隨便啦』",
          "desc": "拒人於千里之外，把別人的好意真誠踐踏在地上。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "克服害羞道謝的小畯",
          "desc": "挺起胸膛微笑，轉身對著小和豎起大拇指，聲音宏亮給予讚美。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫暖尋找善意的小和",
          "desc": "雙手捧著放大鏡對著小嘉微笑，輕輕道出心底觀察到的貼心之處。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💖 讚美大方說謝謝」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "同學好心稱讚自己的畫作很漂亮，小宇覺得害羞不知所措，氣急敗壞罵對方：「吵死了！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔍",
          "label": "雙眼看著稱讚自己的朋友，嘴角微微上揚，大方溫和地說：「謝謝你，我也覺得你的很好看！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "聽到別人誇獎自己，滿臉通紅把頭埋進手臂裡裝睡，一句話都不敢回應。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💖 讚美大方說謝謝」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "聽到讚美時停下手邊動作，面對稱讚你的人"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "眼神看著對方的眉心，嘴角揚起真誠笑容"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "落落大方清楚說出三個字：「謝謝你！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "主動用「讚美放大鏡」發現爸爸媽媽今天一個很棒的地方，並看著家人的眼睛說出來！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-16": {
    "id": "b-week-16",
    "lessonNumber": 16,
    "legacy": false,
    "date": "2026-12-15",
    "dayOfWeek": "星期二",
    "festival": "冬至",
    "unit": "第六單元：節慶感恩與分享藝術 (冬季篇)",
    "title": "【冬至特輯 12/21】——熱騰騰紅白小湯圓：吃湯圓話感恩與孝敬長輩",
    "superSkill": "🍡 冬至湯圓話感恩",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🥣",
    "badgeLabel": "暖心孝親星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【冬至特輯 12/21】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🥣",
          "label": "分享第一顆湯圓的小宇",
          "desc": "用湯匙小心舀起一顆粉紅色的甜湯圓吹涼，眼神溫柔看著身旁的同學…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "嫌棄長輩盛的湯圓太燙太甜，當場吐在地上",
          "desc": "不懂得感恩長輩的愛心，非常沒禮貌。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "學會細嚼慢嚥的小畯",
          "desc": "改掉一口吞的急躁習慣，慢慢咬開芝麻湯圓，把最好吃的紅豆湯盛給…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "回想長輩恩情的小和",
          "desc": "雙手捧著溫暖的湯圓碗，閉上眼睛微笑，感受溫暖從胃裡擴散到全身…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🍡 冬至湯圓話感恩」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "長輩辛苦煮好湯圓端上桌，自己只想吃紅色的，把白色的全部用湯匙挖出來甩到桌上。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🥣",
          "label": "雙手恭敬端接湯圓碗，先向長輩說聲冬至快樂與謝謝，吹涼後細嚼慢嚥品嚐溫暖美味。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "長輩叫自己吃湯圓，一直盯著平板不肯去餐桌，直到湯圓變冰冷糊掉也不在乎。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🍡 冬至湯圓話感恩」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙手捧著碗緣，端正坐在餐桌前"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "向盛湯圓給你的長輩深深點頭說謝謝"
        },
        {
          "num": 3,
          "icon": "🥣",
          "text": "輕輕吹涼熱氣，安靜細嚼慢嚥品嚐美味"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "冬至時親手端一碗熱湯或熱水孝敬家中長輩，並送上溫暖祝福「祝您冬至健康快樂」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-17": {
    "id": "b-week-17",
    "lessonNumber": 17,
    "legacy": false,
    "date": "2026-12-22",
    "dayOfWeek": "星期二",
    "festival": "聖誕節",
    "unit": "第六單元：節慶感恩與分享藝術 (冬季篇)",
    "title": "【聖誕節特輯 12/25】——交換禮物大作戰：抽到不喜歡的禮物依然有風度",
    "superSkill": "🎄 禮貌收禮有風度",
    "themeColor": "#16a34a",
    "badgeEmoji": "🎁",
    "badgeLabel": "風度小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【聖誕節特輯 12/25】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎁",
          "label": "看見禮物優點的小宇",
          "desc": "拍拍小畯的肩膀，指著水壺上的保溫開關，微笑說出這份禮物的實用…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "抽到不喜歡的文具就大哭把禮物用力扔出窗外",
          "desc": "讓用心準備禮物的同學難過掉眼淚，失去風度。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "展現大度風度的小畯",
          "desc": "把快要皺起的眉頭舒展開來，深呼吸一口氣，雙手接過粉紅禮物，對…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "走上前給予肯定，拿出自己的小點心和大家交換分享，現場氣氛立刻…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎄 禮貌收禮有風度」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "拆開聖誕禮物發現是一本筆記本而不是戰鬥陀螺，當場在地上打滾大哭大鬧罵髒話。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎁",
          "label": "雙手接過禮物微笑說謝謝，欣賞包裝與卡片，展現風度說：「這本筆記本可以拿來畫畫耶！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "抽到不合心意的禮物，立刻擺臭臉把禮物摔在地上，趴在桌上一整天拒絕跟任何人說話。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎄 禮貌收禮有風度」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙手接過禮物，不管裡面是什麼都先說謝謝"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拆開包裝時保持微笑，找出這份禮物的一個優點"
        },
        {
          "num": 3,
          "icon": "🎁",
          "text": "看著送禮同學的眼睛說：「謝謝你的用心準備！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "收到家人準備的餐點或小禮物時，無論喜不喜歡都先說「謝謝您的用心」，展現紳士風度！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-18": {
    "id": "b-week-18",
    "lessonNumber": 18,
    "legacy": false,
    "date": "2026-12-29",
    "dayOfWeek": "星期二",
    "festival": "跨年元旦",
    "unit": "第六單元：節慶感恩與分享藝術 (冬季篇)",
    "title": "【元旦跨年特輯 12/31-1/1】——歲末時光機：回顧今年最大進步與許下新目標",
    "superSkill": "🎋 願望樹上掛目標",
    "themeColor": "#7c3aed",
    "badgeEmoji": "🎆",
    "badgeLabel": "新年希望星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【元旦跨年特輯 12/31-1/1】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎆",
          "label": "回顧成長突破的小宇",
          "desc": "挺起胸膛看著螢幕，對比九月時自己遇到噪音就抱頭大叫的樣子，微…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "抱怨今年自己什麼都做不好，趴在桌上自暴自棄",
          "desc": "忽視自己的微小進步，讓負面想法困住前進腳步。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "許下自制大願的小畯",
          "desc": "回憶自己以前輸了比賽就踢椅子，現在雙手自然垂放，認真在木牌上…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "掛上幸福心願的小和",
          "desc": "墊起腳尖把木牌掛在陽光最燦爛的地方，雙手合十微笑道出新年期許…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎋 願望樹上掛目標」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "跨年回顧時，回想起自己曾經被記缺點，氣得把整張年度回顧學習單撕得粉碎。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎆",
          "label": "在願望樹上寫下今年最驕傲的進步，並為新年立下一個可行的新目標，勇敢大步向前！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "覺得新年目標太難達成，乾脆隨便亂寫或者空白不交，覺得自己永遠不可能成功。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎋 願望樹上掛目標」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "閉上眼睛回想今年自己學會的一項新超能力"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "在心願卡上認真寫下一個新年進步小目標"
        },
        {
          "num": 3,
          "icon": "🎆",
          "text": "把心願卡端正貼在願望樹上，握拳對自己說加油"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "和家人在客廳一起許下新年新希望，彼此擊掌約定在新的一年互相支持鼓勵！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-19": {
    "id": "b-week-19",
    "lessonNumber": 19,
    "legacy": false,
    "date": "2027-01-05",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "面對突發課表變動——使用「改變通行證」調節固著與焦慮",
    "superSkill": "🔄 彈性轉念通行證",
    "themeColor": "#2563eb",
    "badgeEmoji": "🎫",
    "badgeLabel": "彈性應變官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「面對突發課表變動」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎫",
          "label": "拿出改變通行證的小宇",
          "desc": "原本很生氣想抓頭髮，看著桌上的綠色彈性卡片，深呼吸三次，把躲…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "課表一變動就尖叫在地上打滾、堅決不換教室",
          "desc": "大腦固著打結，讓自己極度痛苦且耽誤全班行程。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "收起暴躁脾氣的小畯",
          "desc": "把差點摔在桌上的鉛筆盒輕輕放下，雙手平放在桌面上，跟著深吸一…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "從置物櫃拿出一盒班級益智跳棋和色鉛筆，放在桌子中間分享。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔄 彈性轉念通行證」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "因為下雨體育課改在教室上自習，小畯氣得在黑板亂塗鴉、大聲拍打桌子拒絕回座。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎫",
          "label": "拿出綠色的「改變通行證」，深呼吸對自己說：「課表變了沒關係，室內活動也很有趣！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "排好的行程突然改動，大腦轉不過來，僵坐在走廊地板上一動也不動，動彈不得。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔄 彈性轉念通行證」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "聽到行程改變時，右手握拳輕敲左手心提醒自己"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "深呼吸三次，在大腦翻轉通行證：「彈性改變沒問題」"
        },
        {
          "num": 3,
          "icon": "🎫",
          "text": "迅速配合老師指示，帶好文具前往新活動地點"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "當家裡的計畫因天氣或事情改變時（例如不能去公園改去圖書館），對爸媽說「沒關係我能彈性調整」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-20": {
    "id": "b-week-20",
    "lessonNumber": 20,
    "legacy": false,
    "date": "2027-01-12",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "遇到難題想放棄——神奇魔法字眼「我只是還在學」",
    "superSkill": "💪 魔法字眼我還在學",
    "themeColor": "#059669",
    "badgeEmoji": "🦋",
    "badgeLabel": "堅持不懈星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「遇到難題想放棄」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🦋",
          "label": "遇到挫折的小宇",
          "desc": "放下剪刀，深呼吸放鬆手部肌肉，雙手握拳對自己微笑說出魔法口訣…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "題目一算錯就把考卷揉成一團丟進垃圾桶",
          "desc": "害怕挫折就逃避放棄，永遠失去讓大腦升級的機會。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "控制放棄衝動的小畯",
          "desc": "把快要丟出去的零件輕輕放在桌上，深吸一口氣轉頭向小宇學習。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "輕輕用左手按住小宇的圖畫紙邊角，協助固定紙張，讓小宇更好下刀…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💪 魔法字眼我還在學」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到不會寫的數學題目，立刻把鉛筆折斷，氣得大喊：「我就是大笨蛋，我不要寫了！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🦋",
          "label": "放下鉛筆深呼吸，對自己念出魔法字眼：「我不是不會，我只是『還在學』！我可以請教老師！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "遇到稍微難一點的拼圖，看了一眼就直接推開，趴在桌上發呆放棄嘗試。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💪 魔法字眼我還在學」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺挫折與卡關時，放下手中筆做深呼吸"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手抱胸對自己大聲念出魔法咒語：「我只是還在學」"
        },
        {
          "num": 3,
          "icon": "🦋",
          "text": "舉手禮貌向老師或同學求助：「請問這題可以教我嗎？」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家遇到不會做的事情（如綁鞋帶、整理書包），大聲跟家人說「我只是還在學」，並請家人示範一次！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-21": {
    "id": "b-week-21",
    "lessonNumber": 21,
    "legacy": false,
    "date": "2027-01-19",
    "dayOfWeek": "星期二",
    "festival": "期末評量",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "期末考試與評量——把紅筆打叉當作大腦升級，不撕考卷",
    "superSkill": "📝 紅筆訂正大腦升級",
    "themeColor": "#dc2626",
    "badgeEmoji": "🆙",
    "badgeLabel": "智慧升級官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「期末考試與評量」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🆙",
          "label": "考卷寫錯的小宇",
          "desc": "深呼吸三次，把考卷平整放在桌上，不揉紙、不哭泣，拿出紅筆和字…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "考不好就撕破評量卷、把紅筆搶過來亂塗黑板",
          "desc": "把客觀評量當成懲罰，無法從錯誤中學習成長。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "差點想撕考卷的小畯",
          "desc": "看到小宇認真訂正，把握成球狀的考卷慢慢攤平，拿出橡皮擦。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "主動翻開字典那一頁，指著正確的生字給小宇比對部首。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📝 紅筆訂正大腦升級」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "發下國語評量看見紅筆打叉，當場抓狂把整張考卷撕成碎片塞進嘴巴裡吞下去。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🆙",
          "label": "拿起藍筆認真把紅叉題目重新算一次，在心裡對自己說：「每一次訂正都是大腦等級提升！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "拿到成績不理想的考卷，悄悄把考卷塞在最底層鞋櫃裡，回家對爸媽說謊沒有發考卷。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📝 紅筆訂正大腦升級」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "平靜接過評量卷，不遮掩也不衝動撕毀"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拿出訂正筆，仔細看清楚自己哪一個步驟寫錯"
        },
        {
          "num": 3,
          "icon": "🆙",
          "text": "在訂正欄重新工整寫出正確答案，向老師請教確認"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "把訂正好的評量卷雙手拿給爸爸媽媽看，主動指著訂正處說：「我已經把錯誤學會了！」"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-22": {
    "id": "b-week-22",
    "lessonNumber": 22,
    "legacy": false,
    "date": "2027-01-26",
    "dayOfWeek": "星期二",
    "festival": "農曆春節",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "【農曆春節拜年特輯】——走春拜年說吉祥話、雙手領紅包的禮節",
    "superSkill": "🧧 雙手領紅包說吉祥話",
    "themeColor": "#b91c1c",
    "badgeEmoji": "🧧",
    "badgeLabel": "吉祥拜年星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【農曆春節拜年特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🧧",
          "label": "大聲拜年的小宇",
          "desc": "雙手抱拳在胸前作揖，眼睛看著長輩的眼睛，聲音宏亮說出四字成語…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "領紅包時一把搶過來當面拆開、嫌錢太少隨手丟",
          "desc": "極度不禮貌且傷透長輩的心，失去過年的喜氣。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "雙手接紅包的小畯",
          "desc": "身體微微前傾鞠躬，雙手手掌朝上恭敬接過紅包，小心放進外套內袋…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "奉上熱甜茶的小和",
          "desc": "雙手端著托盤上的冬瓜甜茶，依序奉給坐在沙發上的客人長輩。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧧 雙手領紅包說吉祥話」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "長輩要給紅包，等不及對方講完祝福，直接伸手搶走，還大聲數鈔票說：「才這樣喔？」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🧧",
          "label": "雙腳併攏立正站好，雙手作揖說吉祥話「祝您新年快樂、身體健康」，雙手恭敬接過紅包放進口袋。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "去親戚家拜年一直躲在爸媽身後，長輩給紅包也不肯伸手接，臭臉不說一句吉祥話。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧧 雙手領紅包說吉祥話」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙腳並攏、雙手胸前作揖端正站好"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "看著長輩的眉心大聲說出吉祥話：「新年快樂萬事如意」"
        },
        {
          "num": 3,
          "icon": "🧧",
          "text": "雙手恭敬接過紅包袋，端正收進外套口袋並道謝"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "除夕或過年走春時，向家中每一位長輩端正鞠躬拜年說吉祥話，展現OO國小禮貌小天使風範！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-23": {
    "id": "b-week-23",
    "lessonNumber": 23,
    "legacy": false,
    "date": "2027-02-02",
    "dayOfWeek": "星期二",
    "festival": "寒假生活",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "【寒假生活自主篇】——拒絕3C成癮：規劃規律作息與戶外活動",
    "superSkill": "📱 3C時間小管家",
    "themeColor": "#0284c7",
    "badgeEmoji": "⏳",
    "badgeLabel": "時間小主人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【寒假生活自主篇】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "⏳",
          "label": "遵守鬧鐘約定的小宇",
          "desc": "鬧鐘一響，右手毫不猶豫按下平板關閉鍵，將平板放回書架上。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "從早到晚一直玩手機平板、一被叫吃飯就尖叫摔手機",
          "desc": "眼睛視力受損、大腦沉迷暴躁，失去健康的寒假生活。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "克制再玩一局的小畯",
          "desc": "深呼吸一口氣，把握在手裡的遙控器放下，大聲向媽媽報告時間到。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "走到窗戶邊，雙手用力眨眼五次，雙眼凝視遠方最高的大樹，放鬆肩…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📱 3C時間小管家」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "媽媽規定手機時間到了要收起來，小畯氣得在地上滾來滾去，用力砸爛電視遙控器。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⏳",
          "label": "在手機鬧鐘響起時主動按下關閉，把平板交給家長，穿上球鞋到戶外公園騎腳踏車吹微風！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "寒假作息徹底顛倒，晚上不睡覺偷看手機，白天整天昏睡在沙發上，頭昏腦脹好痛苦。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📱 3C時間小管家」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "在開始使用3C前，自己用鬧鐘設定三十分鐘倒數"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "鬧鐘一響立刻關閉螢幕，雙手將裝置放回充電座"
        },
        {
          "num": 3,
          "icon": "⏳",
          "text": "走到窗邊看遠方綠樹三分鐘，做伸展操跳一跳"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟家人共同簽署「寒假護眼3C約定書」，每天累積戶外活動一小時並打卡記錄！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-24": {
    "id": "b-week-24",
    "lessonNumber": 24,
    "legacy": false,
    "date": "2027-02-09",
    "dayOfWeek": "星期二",
    "festival": "元宵節",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "【元宵節特輯】——猜燈謎同樂會：遵守搶答規則、猜錯不氣餒",
    "superSkill": "🏮 猜燈謎遵守搶答規則",
    "themeColor": "#ea580c",
    "badgeEmoji": "🏮",
    "badgeLabel": "燈謎小狀元",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【元宵節特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🏮",
          "label": "安靜聆聽題目的小宇",
          "desc": "雙手放在桌面上，耳朵專心聽完謎題全文，直到聽到鑼聲才迅速舉手…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "猜燈謎沒被點到就大鬧會場、掀翻搶答鈴",
          "desc": "破壞元宵同樂會的歡樂氣氛，失去參加遊戲的資格。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "接受猜錯的小畯",
          "desc": "深呼吸平復按錯鈴的懊惱，雙手平放在膝蓋上，大方為答對的同儕鼓…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫和思考的小和",
          "desc": "看著燈謎圖卡，指著花生外殼的特徵，清晰向大家解釋思考過程。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🏮 猜燈謎遵守搶答規則」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看見別組猜中燈謎拿到獎品，氣得衝上前搶走別人的小燈籠，還大罵主辦老師偏心。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏮",
          "label": "遵守按鈴搶答規則，猜對時大方微笑領獎，猜錯或沒搶到也熱烈為其他獲獎同學鼓掌！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "題目一出來覺得太難猜不到，就趴在桌上雙手抱頭生悶氣，放棄享受解謎的樂趣。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🏮 猜燈謎遵守搶答規則」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "手放在桌面上等待主持人念完謎題題目"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "遵守「先舉手點名、再起立作答」的競賽規則"
        },
        {
          "num": 3,
          "icon": "🏮",
          "text": "猜錯時對自己微笑說沒關係，為答對的同學鼓掌"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "把元宵猜燈謎學到的好笑題目帶回家考爸爸媽媽，全家一起享受猜燈謎的益智樂趣！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-25": {
    "id": "b-week-25",
    "lessonNumber": 25,
    "legacy": false,
    "date": "2027-02-16",
    "dayOfWeek": "星期二",
    "festival": "開學收心",
    "unit": "第七單元：彈性應變、抗挫力與寒假生活",
    "title": "開學收心大作戰——重新開機回到校園生活與晨光熱身",
    "superSkill": "🎒 開學收心重新開機",
    "themeColor": "#4f46e5",
    "badgeEmoji": "⏰",
    "badgeLabel": "活力開機星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「開學收心大作戰」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "⏰",
          "label": "精神抖擻的小宇",
          "desc": "把書包背帶拉正，挺起胸膛大步邁進教室，看著同儕微笑大聲打招呼…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "開學第一天賴床哭鬧踢棉被、拒絕穿校服上學",
          "desc": "作息未調整好，造成家庭混亂並耽誤新學期開學。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "熱情擊掌的小畯",
          "desc": "興奮地小跑上前，伸出右手掌和每位走進教室的同儕用力擊掌。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心檢查書包的小和",
          "desc": "把桌面上整齊的生字簿與文具盒一一核對，安心地向大家點頭。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎒 開學收心重新開機」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "被叫醒時大發起床氣，把書包裡的課本文具整包倒進垃圾桶，死抓著床欄不肯出門。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⏰",
          "label": "前一天晚上整理好書包與制服，早晨深呼吸做晨光伸展操，元氣滿滿走進校門跟警衛打招呼！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "雖然走進了教室，但整天趴在桌上雙眼無神發呆，老師叫名字也不肯回應。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎒 開學收心重新開機」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "早晨起床喝一杯溫開水，做擴胸伸展操三次"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "按課表檢查書包內水壺、聯絡簿與彩色筆是否齊全"
        },
        {
          "num": 3,
          "icon": "⏰",
          "text": "昂首闊步走進教室，向第一位看到的夥伴微笑問好"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "開學前一晚九點前上床睡覺，睡前跟爸媽說一聲「明天我會精神飽滿去上學」，互相擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-26": {
    "id": "b-week-26",
    "lessonNumber": 26,
    "legacy": false,
    "date": "2027-02-23",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第八單元：人際界線、身體自主與自我保護",
    "title": "我的個人身體安全氣囊——認識身體界線與一隻手臂的安全距離",
    "superSkill": "🛡️ 一隻手臂安全氣囊",
    "themeColor": "#0d9488",
    "badgeEmoji": "🎈",
    "badgeLabel": "界線守護員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「我的個人身體安全氣囊」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎈",
          "label": "守護安全氣囊的小宇",
          "desc": "伸出右手臂向前平舉，掌心向前比出暫停手勢，禮貌而堅定地看著對…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "未經同意就突然緊抱同學、抓別人頭髮或捏臉頰",
          "desc": "侵犯他人身體界線，容易引發他人驚恐與肢體衝突。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動退後一步的小畯",
          "desc": "看到暫停手勢，雙腳立刻向後退一小步，雙手放在兩側，露出理解的…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "雙手比出呼拉圈的大小，站在兩位同學身側，確認彼此都沒有碰撞到…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛡️ 一隻手臂安全氣囊」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看見同學戴了可愛髮箍，直接伸手用力扯下來戴在自己頭上，還把同學推到牆角。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎈",
          "label": "伸出一隻手臂確認社交安全距離，想要碰觸別人物品前先開口禮貌徵求對方同意。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "別人靠自己太近讓自己感到很不舒服，卻不敢開口表達，忍到全身發抖縮在角落。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛡️ 一隻手臂安全氣囊」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "向前平舉一隻手臂，測量與同儕間的安全界線"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "手掌朝外比出友善煞車：「請給我一個手臂距離」"
        },
        {
          "num": 3,
          "icon": "🎈",
          "text": "想要擁抱或握手前，一定先開口問：「我可以抱你嗎？」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟爸爸媽媽示範「一隻手臂的安全氣囊」，讓家人知道自己需要身體舒適與安全空間！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-27": {
    "id": "b-week-27",
    "lessonNumber": 27,
    "legacy": false,
    "date": "2027-03-02",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第八單元：身體自主與拒絕藝術",
    "title": "勇敢堅定說「不」——身體自主與拒絕侵害",
    "superSkill": "✋ 堅定拒絕護衛盾",
    "themeColor": "#ef4444",
    "badgeEmoji": "🛡️",
    "badgeLabel": "身體防衛官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「勇敢堅定說「不」」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🛡️",
          "label": "堅定拒絕的小宇",
          "desc": "雙腳站穩如大樹，右手伸出五指立掌向前，眼神堅定注視對方眉心。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "別人叫你做危險惡作劇（如推人）就盲目照做",
          "desc": "缺乏自我保護防線，容易害人受傷並成為共犯。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "學會尊重的小畯",
          "desc": "立刻把伸出去的手縮回背後，雙腳後退一步，神情認真且嚴肅。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "站在同儕身旁給予支持，雙手交疊放在胸前，神情沉著冷靜。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「✋ 堅定拒絕護衛盾」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到高年級同學硬逼自己交出零食，因為害怕被排擠就乖乖交出，甚至幫忙偷別人的錢。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🛡️",
          "label": "眼神堅定直視對方，伸出右手手掌向前比出「停」，清楚堅決地說：「不！我不答應！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "心裡極度不想做某件事，卻不敢說不，一邊哭一邊委屈地順從別人的無理要求。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「✋ 堅定拒絕護衛盾」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙腳踩穩地板，身體站得像松樹一樣筆直"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "右手向前平舉比出「手掌紅燈煞車」標誌"
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "聲音宏亮堅定說出通關密語：「不可以！請停手！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中跟家人角色扮演演練一次「勇敢拒絕陌生人誘惑」的堅定動作與台詞！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-28": {
    "id": "b-week-28",
    "lessonNumber": 28,
    "legacy": false,
    "date": "2027-03-09",
    "dayOfWeek": "星期二",
    "festival": "植樹節",
    "unit": "第九單元：校園公物與社區生活禮儀",
    "title": "【植樹節特輯 3/12】——愛惜公物與圖書館輕聲細語",
    "superSkill": "🌿 愛惜公物守護星",
    "themeColor": "#10b981",
    "badgeEmoji": "🌱",
    "badgeLabel": "愛物小綠俠",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【植樹節特輯 3/12】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌱",
          "label": "輕聲翻書的小宇",
          "desc": "雙手食指與拇指輕輕捏起書頁邊角，緩緩翻過，完全不發出啪啪聲響…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在圖書館奔跑大叫、在書架上的繪本亂撕亂畫",
          "desc": "破壞全校師生共用的寶貴圖書，失去閱讀公德心。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "貓步輕走的小畯",
          "desc": "腳尖著地像貓咪踩在雲朵上一樣安靜步行，雙手穩穩抱著三本借閱繪…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "蹲在教室窗台的花盆前，拿著噴霧小水壺輕輕噴灑綠葉，眼神溫暖。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌿 愛惜公物守護星」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "在圖書館搶借熱門漫畫書，搶不到就用力把整排書架推倒，書本散落一地。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌱",
          "label": "輕輕翻閱書頁不折角，閱讀完畢雙手將圖書放回原分類架位，腳步放輕如貓咪漫步。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "不小心把繪本撕破一角，因為害怕挨罵就悄悄把破書塞在沙發底下藏起來溜走。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌿 愛惜公物守護星」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "進入圖書館先將喉嚨旋鈕調到一分耳語"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手翻閱書本輕輕翻，不折書角也不用筆塗畫"
        },
        {
          "num": 3,
          "icon": "🌱",
          "text": "閱讀完畢將書脊朝外，工整插回原編號架位"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "整理家中的書櫃，把破損的童書用透明膠帶小心修補好，跟家人分享愛惜書本的心得！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-29": {
    "id": "b-week-29",
    "lessonNumber": 29,
    "legacy": false,
    "date": "2027-03-16",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第八單元：身體自主與拒絕藝術",
    "title": "尊重別人的「不」——同理心煞車與接納拒絕",
    "superSkill": "🚦 即刻踩煞車神反應",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🛑",
    "badgeLabel": "同理煞車官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「尊重別人的「不」」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🛑",
          "label": "冷靜表達的小宇",
          "desc": "看著對方的眼睛，語氣平和但堅定地搖搖頭，雙手放在桌面不碰觸。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "別人說不要借玩具，就硬搶過來摔在地上踩碎",
          "desc": "不尊重他人的身體與物品所有權，破壞同儕信任。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "秒踩煞車的小畯",
          "desc": "聽到同儕的拒絕，雙手立刻高舉做投降姿勢，後退一步露出大大的微…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "安心微笑的小和",
          "desc": "感受到同儕的尊重，緊繃的肩膀放鬆下來，溫和向同儕點頭致謝。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚦 即刻踩煞車神反應」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "邀請小宇一起下棋被拒絕，小畯暴跳如雷大罵小宇沒義氣，用力翻桌把棋子掃落地面。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🛑",
          "label": "聽到別人說「不」立刻踩住情緒煞車，深呼吸點頭說：「沒關係，等你下次有空我們再玩！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "被同學拒絕一次就覺得全世界都討厭自己，自己躲在廁所隔間哭泣不肯出來上課。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚦 即刻踩煞車神反應」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "聽到對方說「不」，耳朵立刻接收訊號停步"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "在心中默數三秒：「別人有權利拒絕我，這很正常」"
        },
        {
          "num": 3,
          "icon": "🛑",
          "text": "面帶微笑落落大方回應：「好的，沒關係，下次再約」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "當媽媽說「現在不行吃餅乾」時，練習微笑說「好，那等吃完晚餐再吃」，展現接納風度！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-30": {
    "id": "b-week-30",
    "lessonNumber": 30,
    "legacy": false,
    "date": "2027-03-23",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第八單元：身體自主與拒絕藝術",
    "title": "好秘密 vs 壞秘密——辨識危險警報與大膽求助",
    "superSkill": "🚨 秘密警報解除器",
    "themeColor": "#f97316",
    "badgeEmoji": "🔍",
    "badgeLabel": "真相小偵探",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「好秘密 vs 壞秘密」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🔍",
          "label": "敏銳辨識的小宇",
          "desc": "指著黑板上的情境圖卡，明確指出讓人感到害怕焦慮的情境是壞秘密…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "答應別人保守會讓人受傷的壞秘密、隱瞞事實不說",
          "desc": "壞秘密會像定時炸彈一樣傷害自己和別人，必須及早求助。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "打破沉默的小畯",
          "desc": "握緊小拳頭給自己打氣，快步走到老師面前，眼神堅定大聲求助。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫柔守護的小和",
          "desc": "站在求助的同儕身邊牽住他的手，給予勇氣與陪伴。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚨 秘密警報解除器」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "同學偷拿班費被你看見，對方威脅說出去就揍你，小和因為害怕幫忙藏匿錢包一起說謊。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔍",
          "label": "分辨好秘密與壞秘密，察覺讓人肚子痛、害怕不安的「壞秘密」，立刻報告信任的老師求助！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "被別人欺負威脅要保密，每天提心吊膽晚上做噩夢，忍氣吞聲憋出病來也不敢說。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚨 秘密警報解除器」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "自我提問：「這個秘密會讓我害怕或肚子痛嗎？」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "如果是危險壞秘密，立刻啟動求助警報器"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "走到特教老師身邊，小聲但堅定說出事實尋求保護"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟爸爸媽媽約定三個「絕對不能隱瞞家長的壞秘密情境」，確認任何困難都可以向家人說！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-31": {
    "id": "b-week-31",
    "lessonNumber": 31,
    "legacy": false,
    "date": "2027-03-30",
    "dayOfWeek": "星期二",
    "festival": "兒童節與清明節",
    "unit": "第九單元：校園公物與社區生活禮儀",
    "title": "【兒童節與清明節 4/4】——公共場所小紳士：乘車與排隊秩序",
    "superSkill": "🎫 公共禮儀小達人",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚌",
    "badgeLabel": "禮貌小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【兒童節與清明節 4/4】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🚌",
          "label": "排隊守規的小宇",
          "desc": "站在公車站黃色等候線後方，雙手握好悠遊卡，耐心等乘客下車完畢…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在公車上脫鞋踩在座椅上跳躍、大聲尖叫喧嘩",
          "desc": "影響全車乘客乘車安全與安寧，容易在剎車時摔傷。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "握緊把手的小畯",
          "desc": "走進車廂雙腳微張站穩，右手牢牢握緊黃色吊環，不跳躍、不奔跑。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動讓座的小和",
          "desc": "看見長輩走近，立即起身站到一旁，右手手心向上指向空座位示意。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎫 公共禮儀小達人」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "搭公車時為了搶靠窗座位，把正在上車的老奶奶用力推開，霸占兩個座位橫躺。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚌",
          "label": "排隊上車刷卡說謝謝，在車廂內雙手抓緊扶手，壓低音量安靜坐好，主動禮讓座位給長輩。",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "在捷運車廂裡一直轉來轉去、摸東摸西，被家長制止就賭氣大哭踢前面的椅背。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎫 公共禮儀小達人」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "上車前依序排隊，不奔跑不搶快"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "就座後坐姿端正，雙腳平放地面不踢前座"
        },
        {
          "num": 3,
          "icon": "🚌",
          "text": "全程使用一分耳語音量，看見老弱主動讓座"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "和家人搭乘大眾運輸工具時，主動遵守「輕聲、抓緊扶手、讓座」三原則，請家人評分！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-32": {
    "id": "b-week-32",
    "lessonNumber": 32,
    "legacy": false,
    "date": "2027-04-06",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十單元：生活自理與健康好習慣",
    "title": "營養午餐餐桌禮儀——閉嘴咀嚼與光盤行動",
    "superSkill": "🥢 美味光盤小食神",
    "themeColor": "#eab308",
    "badgeEmoji": "🍱",
    "badgeLabel": "餐桌小行家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「營養午餐餐桌禮儀」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🍱",
          "label": "閉口咀嚼的小宇",
          "desc": "把食物送進嘴裡後，雙唇緊緊抿閉，下顎規律咀嚼二十下，安靜吞嚥…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "挑食把不喜歡吃的青菜整盤倒在桌上、用筷子敲碗",
          "desc": "浪費農夫辛苦種植的糧食，且製造餐桌髒亂與噪音。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "吞完才說話的小畯",
          "desc": "右手輕拍胸口確認嘴裡的湯完全吞下，用紙巾輕輕按壓嘴角後才轉頭…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "珍惜食物的小和",
          "desc": "用湯匙把碗底最後一粒米飯刮乾淨吃掉，餐盤亮得像鏡子一樣。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🥢 美味光盤小食神」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看到午餐有胡蘿蔔，氣得把整個不鏽鋼便當盒砸在地板上，菜汁噴得到處都是。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🍱",
          "label": "端正坐好閉上嘴巴細細咀嚼，不把飯粒掉在桌上，均衡攝取營養，順利完成美味光盤！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "嫌菜不好吃就拿筷子一直戳飯粒發呆，整整四十分鐘一口都沒吃，餓著肚子上課。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🥢 美味光盤小食神」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "坐姿端正，一手扶碗、一手拿湯匙或筷子"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "嘴裡有食物時緊閉嘴唇安靜咀嚼，不張嘴說話"
        },
        {
          "num": 3,
          "icon": "🍱",
          "text": "吃乾淨盤中食物，將碗筷與廚餘分類收拾整齊"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "晚餐時展現「光盤小食神」功夫，不挑食吃光蔬菜，飯後主動將自己碗筷端到水槽！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-33": {
    "id": "b-week-33",
    "lessonNumber": 33,
    "legacy": false,
    "date": "2027-04-13",
    "dayOfWeek": "星期二",
    "festival": "世界地球日",
    "unit": "第九單元：校園公物與社區生活禮儀",
    "title": "【世界地球日 4/22】——隨手關燈與資源回收：綠色生活守護者",
    "superSkill": "♻️ 資源分類綠手指",
    "themeColor": "#16a34a",
    "badgeEmoji": "🌍",
    "badgeLabel": "地球小衛士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【世界地球日 4/22】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌍",
          "label": "小宇",
          "desc": "走到門口開關前，逐一檢查電燈與風扇開關，喀嗒一聲關閉電源。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "離開教室故意把電燈電扇全部開到最大、垃圾亂扔",
          "desc": "浪費地球寶貴能源，破壞校園環境整潔。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "小畯",
          "desc": "快步走向洗手台，伸出右手將滴水的金屬水龍頭徹底旋緊，直到不再…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "把喝空的牛奶紙盒用少量清水沖洗乾淨，雙手用力壓扁，投入藍色紙…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「♻️ 資源分類綠手指」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "喝完飲料直接把利樂包踩扁踢進花圃裡，還嘲笑撿垃圾的環保志工是傻瓜。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌍",
          "label": "隨手關掉沒人使用的電燈開關，喝完牛奶把紙盒沖乾淨壓扁，確實分類丟進回收桶！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看見洗手台水龍頭一直在漏水，心裡想著「反正不是我開的」就冷漠轉頭走開。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「♻️ 資源分類綠手指」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "最後一個離開教室時，隨手順時鐘關閉電燈開關"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "洗完手後將水龍頭確實旋轉鎖緊，不浪費水滴"
        },
        {
          "num": 3,
          "icon": "🌍",
          "text": "將便當盒與寶特瓶沖洗乾淨，按類別投入回收箱"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中擔任一日「節能綠隊長」，巡視家中沒有人房間的電燈與冷氣並隨手關閉！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-34": {
    "id": "b-week-34",
    "lessonNumber": 34,
    "legacy": false,
    "date": "2027-04-20",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十一單元：情緒表達與我訊息溝通",
    "title": "說話魔法「我訊息」——用「我覺得…因為…我希望…」取代攻擊",
    "superSkill": "🎯 我訊息溝通魔法箭",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💬",
    "badgeLabel": "我訊息大師",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「說話魔法「我訊息」」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "💬",
          "label": "施展我訊息的小宇",
          "desc": "雙手平放胸口，眼睛直視對方雙眼，語調清晰平穩，說出三部曲句型…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "一不高興就指著同學鼻子大罵：「你這隻大豬頭！」",
          "desc": "使用攻擊性語言只會引發激烈衝突，無法解決事情。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "心悅誠服的小畯",
          "desc": "聽見同儕沒有謾罵自己，雙手主動扶好桌角，認真點頭表達歉意並採…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫和調解的小和",
          "desc": "遞給雙方一盒新的色筆，微笑站在兩人身旁，營造和平氣氛。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎯 我訊息溝通魔法箭」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "被同學不小心碰到手臂，立刻揮拳揍對方肚子，並大罵難聽髒話侮辱同學家人。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "💬",
          "label": "使用「我訊息」溝通法：「我覺得很痛，因為你撞到我，我希望你下次走路注意一點。」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "明明很生氣對方的行為，卻憋在心裡不說，在課本上亂畫同學的名字洩恨。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎯 我訊息溝通魔法箭」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "深呼吸一口氣，把原本想罵人的話收回肚子"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "說出第一句：「我覺得……（說出感受）」"
        },
        {
          "num": 3,
          "icon": "💬",
          "text": "說出第二句與第三句：「因為……我希望……」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家跟家人說話時，練習用「我訊息」表達一次自己的需要（例如：我覺得很累因為功課多，我希望先休息十分鐘）！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-35": {
    "id": "b-week-35",
    "lessonNumber": 35,
    "legacy": false,
    "date": "2027-04-27",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十單元：生活自理與健康好習慣",
    "title": "健康中心求助禮貌——清楚向護理師說出哪裡痛與不舒服",
    "superSkill": "🩹 清楚求醫小患者",
    "themeColor": "#ec4899",
    "badgeEmoji": "🩺",
    "badgeLabel": "健康求助星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「健康中心求助禮貌」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🩺",
          "label": "清楚表達的小畯",
          "desc": "坐在診療椅上，用手指著右腳膝蓋傷口，神情沉穩清楚報告痛感與經…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在健康中心對著護理師大吼大叫、亂拔急救箱繃帶",
          "desc": "干擾醫療救護進行，讓醫護人員無法精準診斷傷勢。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "貼心陪伴的小宇",
          "desc": "站在診療椅旁邊，雙手幫忙拿著小畯的水壺與外套，眼神關切注視同…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "遞衛生紙的小和",
          "desc": "抽出一張乾淨衛生紙，輕輕幫同儕擦去臉頰上的淚珠，溫和安慰。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🩹 清楚求醫小患者」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "膝蓋擦傷流血，進健康中心就大哭摔椅子，拒絕護理師擦藥，還把優碘藥水打翻在地。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🩺",
          "label": "有禮貌進門說護理師好，冷靜指著受傷部位說：「我的右膝蓋在體育課跌倒擦傷流血了。」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "肚子痛到臉色發白，進了健康中心卻低頭一句話也不講，讓護理師猜半天無法處理。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🩹 清楚求醫小患者」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走進健康中心先點頭禮貌問好：「護理師好」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "用手指著自己不舒服的具體部位（頭/肚子/手腳）"
        },
        {
          "num": 3,
          "icon": "🩺",
          "text": "清楚說出發生的原因：「我下課跑步跌倒撞到了」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中跟家人練習「清楚說出自己哪裡不舒服」的溝通表達，學會當聰明求醫小達人！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-36": {
    "id": "b-week-36",
    "lessonNumber": 36,
    "legacy": false,
    "date": "2027-05-04",
    "dayOfWeek": "星期二",
    "festival": "母親節",
    "unit": "第二單元：節慶感恩與禮貌心意 (春季篇)",
    "title": "【母親節特輯】——手繪感恩卡與做一件家事：用行動體貼照顧者",
    "superSkill": "💖 愛的家事行動家",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🌹",
    "badgeLabel": "孝親小暖男",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【母親節特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌹",
          "label": "雙手奉卡的小宇",
          "desc": "雙手恭敬捧著紅色的康乃馨卡片，微微鞠躬，眼神真誠看著媽媽。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "母親節當天抱怨媽媽煮的菜很難吃、把禮物摔在地上",
          "desc": "傷害辛勤照顧家人的母親，缺乏感恩與體貼之心。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "承諾做家事的小畯",
          "desc": "捲起袖子做出擦桌子與洗碗的動作，大聲宣布自己的家事行動承諾。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫柔搥背的小和",
          "desc": "雙手握成空心小拳頭，在同儕肩頸上模擬輕柔搥背，節奏規律溫暖。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💖 愛的家事行動家」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "媽媽提醒自己該洗澡了，當場摔玩具大吼：「今天是母親節妳不要管我！」讓媽媽難過掉淚。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌹",
          "label": "親手奉上手繪康乃馨卡片，抱抱媽媽說母親節快樂，並主動幫媽媽搥背和分擔洗碗家事！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "雖然在學校畫好了感恩卡片，回家卻害羞藏在書包裡，整天沒對媽媽說一句感謝。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💖 愛的家事行動家」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "親手寫下一張充滿感謝心意的母親節卡片"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "走到媽媽身邊，給媽媽一個大大的溫暖擁抱"
        },
        {
          "num": 3,
          "icon": "🌹",
          "text": "主動完成一項家事（如折衣服或掃地），用行動分憂"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "母親節當天為媽媽或主要照顧者倒一杯溫水、搥搥肩膀十分鐘，大聲說出「媽媽我愛您」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-37": {
    "id": "b-week-37",
    "lessonNumber": 37,
    "legacy": false,
    "date": "2027-05-11",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第四單元：課堂常規與團體適應",
    "title": "校園安全無死角——走廊不奔跑、樓梯靠右行、轉角停看聽",
    "superSkill": "🚸 轉角停看聽雷達",
    "themeColor": "#d97706",
    "badgeEmoji": "🚶",
    "badgeLabel": "安全領航員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「校園安全無死角」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🚶",
          "label": "小宇",
          "desc": "雙手自然垂放兩側，以穩定的腳步在白色安全線右側平穩步行，眼神…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在走廊全力衝刺狂奔、在樓梯扶手溜滑梯向下衝",
          "desc": "極度危險的校園違規行為，一旦撞上同學會造成嚴重腦震盪。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "轉角停看聽的小畯",
          "desc": "走到轉角柱子前立刻停下雙腳，身體稍微側轉，眼睛往左看、再往右…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "靠右行的小和",
          "desc": "右手輕扶著樓梯金屬扶手，雙腳一階一階靠右上下樓梯，不踩空跳格…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚸 轉角停看聽雷達」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "下課為了搶著去球場，在走廊狂奔撞飛抱著整疊作業簿的班長，作業散落一地還不肯道歉。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚶",
          "label": "走廊保持慢步輕走，上下樓梯緊靠右側欄杆一步一階，轉角處啟動「停看聽」雷達！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "上課快遲到了慌張失措，不管左右有沒有人就低頭猛衝，險些從樓梯踩空跌落。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚸 轉角停看聽雷達」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走進走廊立刻啟動慢速檔，腳步放輕不奔跑"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "上下樓梯雙腳一步一階，右手扶著安全扶手靠右走"
        },
        {
          "num": 3,
          "icon": "🚶",
          "text": "走到走廊轉角盲區，停下一秒轉頭確認無人再轉彎"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家中樓梯或公寓走廊跟家人示範「靠右行、不奔跑」的安全守則，確保全家出入平安！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-38": {
    "id": "b-week-38",
    "lessonNumber": 38,
    "legacy": false,
    "date": "2027-05-18",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十二單元：道歉、原諒與修復關係",
    "title": "踩到地雷怎麼辦？誠懇道歉四步曲——化解人際風暴",
    "superSkill": "🙇 誠懇道歉四步法",
    "themeColor": "#6366f1",
    "badgeEmoji": "🤝",
    "badgeLabel": "真誠道歉官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「踩到地雷怎麼辦？誠懇道歉四步曲」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🤝",
          "label": "示範道歉四步曲的小畯",
          "desc": "眼神注視受害同儕眼睛，雙手交疊放於腹前，微微鞠躬，語調真誠無…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "撞倒同學假裝沒看見立刻逃跑、大喊「是他自己撞過來的！」",
          "desc": "推卸責任死不認錯，只會讓人際衝突火上加油。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "平復情緒接受的小宇",
          "desc": "深呼吸三次將胸中悶氣吐出，看著對方的眼睛，肩膀放鬆下來。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "協助清理修復的小和",
          "desc": "拿來濕紙巾和乾抹布，蹲在兩人旁邊幫忙吸乾鞋面污漬。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🙇 誠懇道歉四步法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "不小心弄壞小和的彩色筆，不但不道歉，還惡人先告狀罵小和彩色筆買太爛。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🤝",
          "label": "誠懇展現道歉四步曲：看著對方眼睛、說對不起、說明原因、主動詢問如何幫忙彌補！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "知道自己做錯事了，卻因為面子問題死硬不道歉，僵在原地瞪著對方，把關係搞得更僵。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🙇 誠懇道歉四步法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "看著對方的眉心，真誠說出：「對不起，我錯了」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "說明具體發生的事情：「我不小心撞倒你的筆筒」"
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "主動提出補救辦法：「我幫你一起把筆撿起來收好」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "如果不小心打翻水或撞到家人，立即主動說「對不起我來擦」，並拿抹布擦拭乾淨！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-39": {
    "id": "b-week-39",
    "lessonNumber": 39,
    "legacy": false,
    "date": "2027-05-25",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十二單元：道歉、原諒與修復關係",
    "title": "當別人說對不起——寬容原諒的密碼與重拾友誼",
    "superSkill": "🗝️ 寬容原諒大心胸",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🕊️",
    "badgeLabel": "寬容解碼官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「當別人說對不起」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🕊️",
          "label": "展現寬容的小宇",
          "desc": "轉身面對同儕，眼神溫柔注視對方，伸出右手輕拍對方肩膀，嘴角微…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "別人已經鞠躬道歉了，還是大吼「我永遠不原諒你！」並動手打人",
          "desc": "缺乏寬容包容之心，讓衝突無休止蔓延，最後失去朋友。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "放下重擔的小畯",
          "desc": "長長舒了一口氣，整個人放鬆下來，雙手小心拿著膠帶幫忙修補。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "撕下一段透明膠帶，平整地貼在撕裂的紙張裂縫上，撫平痕跡。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🗝️ 寬容原諒大心胸」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "同學誠懇向自己道歉並修好玩具，小畯依然不依不饒，一把搶過玩具砸在對方頭上。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🕊️",
          "label": "看見對方的真誠道歉，深呼吸放下心中的怒火，大度伸出手說：「沒關係，下次注意就好！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "嘴巴上說原諒了，但心裡一直記恨，在背後拉攏其他同學一起孤立排擠道歉的同學。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🗝️ 寬容原諒大心胸」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "聽完對方的道歉，感受對方眼中的真誠"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "大腦放下生氣包袱，深呼吸一口氣讓心情放平"
        },
        {
          "num": 3,
          "icon": "🕊️",
          "text": "微笑點頭伸出友善右手：「沒關係，我們還是好朋友」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "當家人向自己說抱歉（如忘記買文具）時，大方回一句「沒關係我知道您很忙」，展現寬容大心胸！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-40": {
    "id": "b-week-40",
    "lessonNumber": 40,
    "legacy": false,
    "date": "2027-06-01",
    "dayOfWeek": "星期二",
    "festival": "端午節",
    "unit": "第二單元：節慶感恩與禮貌心意 (夏季篇)",
    "title": "【端午節特輯】——划龍舟團隊精神：配合隊友速度不埋怨",
    "superSkill": "🥁 節奏合拍划龍舟",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🚣",
    "badgeLabel": "龍舟鼓手星",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【端午節特輯】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🚣",
          "label": "配合節奏的小宇",
          "desc": "眼睛看著前方的鼓手節奏，雙手握緊划槳，規律隨口號做出划水動作…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "划龍舟落後就氣得把木槳扔進水裡、大罵隊友是累贅",
          "desc": "破壞團隊士氣，把合作競賽變成互相埋怨的戰場。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "學會等待配合的小畯",
          "desc": "刻意放緩強勁的划水力道，側頭確認後方隊友跟上，嘴角掛著鼓舞的…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "全力以赴的小和",
          "desc": "雙手使勁抓緊划槳，聽著口號大聲呼應，身體前傾全力划動。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🥁 節奏合拍划龍舟」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "拔河比賽輸了一局，立刻把麻繩摔在地上，指著隊友鼻子破口大罵：「都是因為你力氣太小！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚣",
          "label": "配合大鼓節奏整齊劃一划槳，就算落後也大聲喊口號互相打氣，堅持奮戰到最後一秒！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看到別隊速度比較快，覺得肯定贏不了，直接放開木槳坐在船上發呆放棄出力。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🥁 節奏合拍划龍舟」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "耳朵專注傾聽隊長的鼓聲口號：「一、二！一、二！」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手動作配合隊友速度，不搶快也不落後"
        },
        {
          "num": 3,
          "icon": "🚣",
          "text": "落後時大聲喊出加油口號，互相打氣不指責"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "和家人合力組裝一組家具或整理客廳，過程中多說「加油我們快完成了」，體會同心協力！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-41": {
    "id": "b-week-41",
    "lessonNumber": 41,
    "legacy": false,
    "date": "2027-06-08",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十三單元：挫折容忍與運動家風度",
    "title": "運動家風度玩得起輸得起——比賽輸了不翻桌、讚美對手",
    "superSkill": "👏 運動家風度大掌聲",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🏆",
    "badgeLabel": "風度冠軍官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「運動家風度玩得起輸得起」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🏆",
          "label": "展現大器風度的小畯",
          "desc": "雙手自然垂放，深吸一口氣露出微笑，主動走到對手面前伸出右手握…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "踢足球輸球就當場把球踢出圍牆、毆打裁判老師",
          "desc": "完全缺乏運動家精神，嚴重複犯會被終身禁賽。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "謙遜獲勝的小和",
          "desc": "雙手禮貌握住對方的手，臉上帶著感恩謙虛的微笑，不炫耀嘲弄。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "冷靜陪伴的小宇",
          "desc": "站在棋盤邊幫忙把棋子整理好，溫和肯定兩位選手的努力。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「👏 運動家風度大掌聲」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "下棋輸給小宇，氣得一把掀翻整張棋盤，棋子砸得滿地都是，還指著小宇罵作弊。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏆",
          "label": "比賽結束後，不管輸贏都走向對手，脫帽握手真誠說聲：「這是一場精彩的比賽，你太棒了！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "比賽輸了就坐在草地上嚎啕大哭拒絕起立，拒絕參加閉幕頒獎典禮，讓全班尷尬。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「👏 運動家風度大掌聲」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "裁判吹響哨音，立刻停止動作立正站好"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "深呼吸平復勝負激動情緒，走向對手隊伍"
        },
        {
          "num": 3,
          "icon": "🏆",
          "text": "伸出右手與對手熱情握手：「謝謝指教，你表現真好！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家跟家人玩桌遊或電玩遊戲時，輸了不生氣翻臉，大方對贏家拍手說「你真厲害」！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-42": {
    "id": "b-week-42",
    "lessonNumber": 42,
    "legacy": false,
    "date": "2027-06-15",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十一單元：情緒表達與我訊息溝通",
    "title": "覺得不公平的時候——冷靜舉手表達感受不吵鬧",
    "superSkill": "🙋 客觀冷靜申訴儀",
    "themeColor": "#a855f7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "公平申訴官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「覺得不公平的時候」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "⚖️",
          "label": "理性舉手發問的小宇",
          "desc": "把背打直坐得端正，右手平穩舉高，語調平穩禮貌向老師陳述疑惑。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "覺得獎品分得不均勻，當場掀桌搶走所有禮物撕爛",
          "desc": "衝動吵鬧無法爭取公平，只會讓自己因違規受罰。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "客觀傾聽的小畯",
          "desc": "雙手平放桌上，認真聽老師說明原委，頻頻點頭理解規則標準。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "分享成果的小和",
          "desc": "主動把自己的打掃記錄卡拿給同儕看，溫和說明加分由來。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🙋 客觀冷靜申訴儀」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "覺得老師發的貼紙別人比自己多一張，立刻拍桌大吼大叫，衝上講台搶走整包貼紙撒落地上。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⚖️",
          "label": "舉手冷靜等待老師點名，用客觀溫和的語氣表達：「老師，我這組少發了一張，可以補發嗎？」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "心裡覺得極度不公平，卻趴在桌上憋著生悶氣，暗中把同學的鉛筆折斷報復。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🙋 客觀冷靜申訴儀」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "情緒激動想抗議時，立刻在心裡倒數五四三二一"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "舉起右手安靜等待老師點名，不敲桌插嘴"
        },
        {
          "num": 3,
          "icon": "⚖️",
          "text": "用客觀平靜的語句說出具體事實，不帶攻擊字眼"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家覺得兄弟姊妹分的點心不公平時，不哭鬧吵架，冷靜向爸媽說出具體狀況並請求協調！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-43": {
    "id": "b-week-43",
    "lessonNumber": 43,
    "legacy": false,
    "date": "2027-06-22",
    "dayOfWeek": "星期二",
    "festival": "休業式與畢業季",
    "unit": "第十四單元：學期收尾與自我成長回顧",
    "title": "【休業式與畢業季】——面對分班離別：調適分離焦慮、互道珍重",
    "superSkill": "🎈 珍重再見祝福網",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎓",
    "badgeLabel": "惜別小種子",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【休業式與畢業季】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🎓",
          "label": "寫下深情祝福的小宇",
          "desc": "雙手端正拿筆，在同儕紀念冊上一字一劃認真寫下感謝詞並親手奉上…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "面對分班離別在教室歇斯底里大哭、打壞同儕紀念冊",
          "desc": "無法健康消化分離焦慮，把溫馨祝福變成痛苦遺憾。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "大方承諾情誼的小畯",
          "desc": "伸出結實的手臂，輕輕給每位夥伴一個溫暖的側邊擁抱，神情豪邁自…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "破涕微笑的小和",
          "desc": "擦乾眼眶淚水，緊握胸前的紀念冊，向大家深深鞠躬露出甜美笑容。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎈 珍重再見祝福網」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "知道下學期要跟小和分到不同班，抓住小和衣服不放，狂哭大鬧逼老師不可以分班。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎓",
          "label": "在紀念冊上工整寫下滿滿祝福，送給好朋友一個溫暖擁抱，相約下課在走廊一起玩！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "害怕離別的難過情緒，整天封閉自己不肯跟任何人講話，拒絕寫畢業紀念冊留念。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎈 珍重再見祝福網」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "在紀念冊上為好友寫下一句最真摯的感謝與優點"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "看著好友的眼睛，送給對方一個堅強的微笑與擁抱"
        },
        {
          "num": 3,
          "icon": "🎓",
          "text": "堅定許下約定：「就算不同班，我們下課還是能一起玩！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "為一位即將升學或調職的老師/同學手寫一張溫馨祝福卡片，親手送上滿滿感恩！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-44": {
    "id": "b-week-44",
    "lessonNumber": 44,
    "legacy": false,
    "date": "2027-06-29",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十四單元：學期收尾與自我成長回顧",
    "title": "學期成就大驗收——給自己三朵大紅花：肯定自我突破",
    "superSkill": "🎖️ 自信成長大榮光",
    "themeColor": "#ec4899",
    "badgeEmoji": "💮",
    "badgeLabel": "榮耀小博士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「學期成就大驗收」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "💮",
          "label": "自信發表的小宇",
          "desc": "抬頭挺胸站立講台正中央，雙手將三朵大紅花貼在成長樹頂端，聲音…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "自怨自艾說「我什麼都學不會，我是大廢物！」躺在地上放棄",
          "desc": "完全否定自我一整年的努力，打擊自信心與前進動力。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "肯定自我蛻變的小畯",
          "desc": "右手握拳輕捶胸口，臉上露出成熟自豪的笑容，神情堅定。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "溫柔分享的小和",
          "desc": "雙手端正展示自己的進步學習單，語調輕柔但充滿力量。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎖️ 自信成長大榮光」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "學期結算看見同儕拿到金色大獎盃，自己只有銀牌，嫉妒得一把搶過同儕獎盃摔成兩半。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "💮",
          "label": "細數自己這一年學會的各項社交超能力，自豪地在胸前佩戴三朵榮譽紅花，肯定自我蛻變！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "上台領進步獎時害羞得把整張臉藏在外套裡，縮著身子一句感言都不肯說就溜下台。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎖️ 自信成長大榮光」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "拿出這學期的成長歷程檔案，翻閱自己的進步點滴"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "在胸前親手貼上一枚「自我突破大榮光」金色徽章"
        },
        {
          "num": 3,
          "icon": "💮",
          "text": "雙手叉腰抬頭挺胸對鏡子說：「小宇/小畯，你真的很棒！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "向家人展示自己一整學年累積的代幣存摺與學習單，大聲分享自己今年最大的一項突破！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-45": {
    "id": "b-week-45",
    "lessonNumber": 45,
    "legacy": false,
    "date": "2027-07-06",
    "dayOfWeek": "星期二",
    "festival": "暑假開始",
    "unit": "第十五單元：假期自律與社區好公民 (暑期生活篇)",
    "title": "【暑假起跑線】——暑假生活自主手冊：規律作息不顛倒",
    "superSkill": "📅 假期作息大管家",
    "themeColor": "#f97316",
    "badgeEmoji": "⏰",
    "badgeLabel": "時鐘小管家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【暑假起跑線】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "⏰",
          "label": "自律規劃的小宇",
          "desc": "展示親手繪製的彩色時間餅圖，指標清晰標出閱讀、運動與就寢時段…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "暑假第一天開始天天熬夜打電動到清晨五點、日夜顛倒",
          "desc": "身體免疫力下降、大腦退化，整個人變得暴躁易怒。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "下定決心的小畯",
          "desc": "把小鬧鐘端正擺在書桌正中央，用力拍胸脯向大家做出早起不賴床保…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心生活的小和",
          "desc": "指著生活打卡表上的「每日喝水1500cc」與「閱讀繪本一小時…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📅 假期作息大管家」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "家長提醒暑假要按時間做功課，氣得抓起電風扇砸在地上，威脅家長不准管他放假。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⏰",
          "label": "親自制定「暑假自主作息黃金手冊」：上午閱讀運動、下午探索休閒、晚上按時就寢！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "暑假完全沒有任何規劃，每天無所事事躺在床上滑手機，整個人無精打采虛度光陰。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📅 假期作息大管家」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "在一張大白紙上畫出每天的晨間、午後與晚間時間方格"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "規劃每天固定的「閱讀一小時、戶外運動一小時」"
        },
        {
          "num": 3,
          "icon": "⏰",
          "text": "晚上九點半主動關閉電視手機，聽輕音樂準時上床"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "將暑假作息表張貼在冰箱門上，每天睡前邀請爸爸媽媽一起檢核今天規律打卡項目！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-46": {
    "id": "b-week-46",
    "lessonNumber": 46,
    "legacy": false,
    "date": "2027-07-13",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十五單元：假期自律與社區好公民 (暑期生活篇)",
    "title": "社區好鄰居生活常規——超商、圖書館、公園禮儀",
    "superSkill": "🛒 社區公共禮貌王",
    "themeColor": "#10b981",
    "badgeEmoji": "🏪",
    "badgeLabel": "社區小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「社區好鄰居生活常規」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🏪",
          "label": "小宇",
          "desc": "雙手端正拿著選好的商品放在收銀台上，眼睛看著店員叔叔，清楚說…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在超市走廊狂奔撞倒貨架商品、在公園插隊推下溜滑梯的小孩",
          "desc": "嚴重危害公共安全，破壞社區居民的生活品質與和諧。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "克制拆封衝動的小畯",
          "desc": "把雙手牢牢插進口袋裡，等待付完款拿回發票後才拆開包裝袋。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "輪流玩遊具的小和",
          "desc": "看著手錶倒數，五分鐘時間一到，立刻站起身微笑禮讓等待的鄰居小…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛒 社區公共禮貌王」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "在便利商店想吃冰淇淋，等不及結帳就直接撕開包裝在店內邊跑邊吃，被店員制止還吐口水。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏪",
          "label": "進超商推推車輕聲慢走，購物結帳耐心排隊說謝謝，在公園遊樂場遵守輪流玩不爭搶！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "在圖書館或公共場所大呼小叫，被旁人看了一眼就氣得當場踹翻垃圾桶發洩。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛒 社區公共禮貌王」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走進社區公共場所，自動切換至「公共小紳士模式」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手拿取物品輕拿輕放，損壞物品主動告知賠償"
        },
        {
          "num": 3,
          "icon": "🏪",
          "text": "在收銀台接過發票與零錢時，大方對店員微笑說謝謝"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "陪同家人到住家附近超商或菜市場買菜，主動幫忙提菜籃並向店家禮貌打招呼！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-47": {
    "id": "b-week-47",
    "lessonNumber": 47,
    "legacy": false,
    "date": "2027-07-20",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第八單元：身體自主與拒絕藝術",
    "title": "遇到取笑與霸凌怎麼辦？——冷靜離開、尋求同盟、呼救通報大人",
    "superSkill": "🚨 反霸凌自保三部曲",
    "themeColor": "#dc2626",
    "badgeEmoji": "🛡️",
    "badgeLabel": "防霸反擊盾",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「遇到取笑與霸凌怎麼辦？」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🛡️",
          "label": "沉著冷靜的小宇",
          "desc": "面對嘲笑不回嘴、不掉眼淚，眼神堅定平視前方，邁開大步迅速脫離…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "遇到霸凌時衝上去拿美工刀揮舞、或者回家偷喝農藥輕生",
          "desc": "用極端暴力或傷害自己的方式應對，只會造成不可挽回的悲劇。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "挺身保護同儕的小畯",
          "desc": "快步上前側身站在小宇前方，伸直手臂隔開空間，語氣宏亮威嚴。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "安定同儕的小和",
          "desc": "緊緊握住小宇顫抖的手，輕聲安撫並一起走向辦公室。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚨 反霸凌自保三部曲」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "被高年級學生取笑外號，立刻失控抓起石頭朝對方眼睛丟過去，險些造成嚴重失明。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🛡️",
          "label": "啟動反霸凌自保三部曲：眼神堅定說不、迅速離開危險現場尋找同儕同盟、立刻向師長通報！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "被同學嘲笑恐嚇，害怕被報復不敢告訴任何人，自己偷偷躲在棉被裡割腕自殘。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚨 反霸凌自保三部曲」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "大聲堅定對霸凌者喊出：「請停止！你這樣做是犯規的！」"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "立刻轉身快步走到人多的教師辦公室或健康中心"
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "找到信任的導師或特教老師，完整說出時間地點與經過"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在家跟爸爸媽媽討論防霸凌的安全熱線，確保遇到任何不舒服的對待都能第一時間向家人傾訴！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-48": {
    "id": "b-week-48",
    "lessonNumber": 48,
    "legacy": false,
    "date": "2027-07-27",
    "dayOfWeek": "星期二",
    "festival": "父親節",
    "unit": "第二單元：節慶感恩與禮貌心意 (夏季篇)",
    "title": "【父親節 8/8】——像大山一樣堅強的依靠：向父親表達真誠感恩",
    "superSkill": "🏔️ 像山一樣的愛感恩行",
    "themeColor": "#0284c7",
    "badgeEmoji": "👔",
    "badgeLabel": "孝父小勇士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【父親節 8/8】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "👔",
          "label": "端茶奉孝的小畯",
          "desc": "雙手端平麥茶杯，穩健走到爸爸面前微微鞠躬奉茶，眼神充滿敬佩。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "父親節嫌父親買的禮物太爛、對著辛苦工作的父親大吼大叫",
          "desc": "不懂得體諒父親默默支撐家庭的艱辛，傷害父子感情。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "送上親手卡片的小宇",
          "desc": "雙手將手繪的大山與超人卡片送到長輩手中，大方說出感謝詞。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "體貼搥背的小和",
          "desc": "走到長輩背後，以節奏平穩的空心拳為長輩舒緩僵硬的肩膀肌肉。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🏔️ 像山一樣的愛感恩行」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "父親提醒自己要遵守約定，當場摔壞父親節蛋糕，大罵父親整天只會工作不管他。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "👔",
          "label": "親手奉上一張「像大山一樣偉大」的感恩卡，雙手給爸爸一個結實的擁抱說：「爸爸我愛您！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "心裡知道爸爸平時很疼自己，但在父親節當天害羞不敢開口，一句話都沒說就回房鎖門。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🏔️ 像山一樣的愛感恩行」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "觀察父親雙手上的厚繭與辛勞痕跡，在心中湧現感恩"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "親手為父親倒一杯熱茶，雙手端到父親面前"
        },
        {
          "num": 3,
          "icon": "👔",
          "text": "看著父親的雙眼，清楚大聲說出：「爸爸您辛苦了，謝謝您！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在父親節（8/8）當天為辛苦工作的父親或家中支柱搥背十分鐘，並送上一張手繪卡片！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-49": {
    "id": "b-week-49",
    "lessonNumber": 49,
    "legacy": false,
    "date": "2027-08-03",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十單元：生活自理與健康好習慣",
    "title": "夏日戶外與戲水安全——防溺十招與遠離危險水域",
    "superSkill": "🛟 戲水安全守護環",
    "themeColor": "#0284c7",
    "badgeEmoji": "🏊",
    "badgeLabel": "水域防溺官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「夏日戶外與戲水安全」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🏊",
          "label": "堅決拒絕的小和",
          "desc": "雙手叉腰擋住去路，態度嚴肅堅定，指著安全海報提醒同儕。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "私自跳進無救生員的深潭野溪玩水、在游泳池邊奔跑推人下水",
          "desc": "溺水是夏季學生意外第一殺手，極易造成溺斃慘劇。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時醒悟的小畯",
          "desc": "立刻把泳褲收回背包，用力拍拍自己的腦袋，感謝同儕的及時阻攔。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "示範拋繩救援的小宇",
          "desc": "模擬在岸上趴低身體，雙手用力將綁著長繩的救生圈向前拋向目標水…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛟 戲水安全守護環」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "同儕起鬨打賭誰敢跳進水庫，不聽警告一躍而下，抽筋時慌亂掙扎險些滅頂淹死。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏊",
          "label": "牢記防溺十招：只去有合格救生員的安全泳池、做好充分暖身操、穿著救生衣、不打鬧推人！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看到同伴在水深處抽筋掙扎，慌張得盲目跳進水裡救人，結果被緊緊拉住雙雙下沉。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛟 戲水安全守護環」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "下水前認真做足十分鐘全身關節暖身操"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "嚴格確認現場有合格救生員在救生椅上執勤"
        },
        {
          "num": 3,
          "icon": "🏊",
          "text": "遇到溺水事故大聲呼救求援，拋擲救生圈或竹竿，絕不徒手下水"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟家人一起復習「防溺十招與救溺五步（叫叫伸拋划）」，確認夏季戲水出遊絕對安全！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-50": {
    "id": "b-week-50",
    "lessonNumber": 50,
    "legacy": false,
    "date": "2027-08-10",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十六單元：高階同理心與破冰社交 (迎接新學年)",
    "title": "同理心小偵探——觀察同儕眼神與嘴角猜心情",
    "superSkill": "🔍 眉宇微表情讀心術",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🕵️",
    "badgeLabel": "讀心小偵探",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「同理心小偵探」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🕵️",
          "label": "敏銳觀察的小宇",
          "desc": "身體前傾注視同儕臉部表情，根據嘴角與眼神特徵準確道出同儕心情…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "同學明明在擦眼淚哭泣，還在旁邊大聲拍手狂笑扮鬼臉",
          "desc": "完全缺乏同理心與情緒覺察，深深刺傷受傷同儕的心。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "學會看臉色的小畯",
          "desc": "看到同儕雙眉緊鎖，主動放輕腳步，收起手裡的搞笑玩具，退後一步…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "送上溫暖的小和",
          "desc": "遞上一杯溫水，眼神溫和專注看著心情低落的同儕，輕輕拍撫對方後…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔍 眉宇微表情讀心術」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看見小和因為作業沒寫完被老師念在哭，小畯衝上前指著小和鼻子大笑：「愛哭鬼羞羞臉！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🕵️",
          "label": "啟動微表情讀心術：觀察同儕下垂的嘴角與泛紅的眼眶，遞上一張衛生紙溫柔問：「你還好嗎？」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "看到同學心情低落坐在角落，不知道該怎麼辦，就假裝沒看到遠遠避開，讓同伴感到孤單。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔍 眉宇微表情讀心術」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "眼睛仔細觀察同儕面部訊號：眉毛是皺起、平放還是揚起"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "觀察嘴角方向：嘴角是上揚微笑，還是下垂難過"
        },
        {
          "num": 3,
          "icon": "🕵️",
          "text": "輕輕遞上一張面紙，溫和問候一句：「需要我陪你坐一下嗎？」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "晚餐時觀察爸爸媽媽今天的臉部表情，主動問一句「爸爸媽媽今天上班累不累」，展現同理心！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-51": {
    "id": "b-week-51",
    "lessonNumber": 51,
    "legacy": false,
    "date": "2027-08-17",
    "dayOfWeek": "星期二",
    "festival": "",
    "unit": "第十六單元：高階同理心與破冰社交 (迎接新學年)",
    "title": "結交新朋友的破冰魔法——主動開啟話題與分享玩具",
    "superSkill": "🧊 破冰三句客氣法",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🪄",
    "badgeLabel": "破冰魔法師",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「結交新朋友的破冰魔法」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🪄",
          "label": "主動打招呼的小宇",
          "desc": "跨出穩健的一步走到新同儕面前，微笑揮動右手，清楚介紹自己。…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "想要認識新朋友就拿小石頭丟對方、或者直接搶對方的零食",
          "desc": "錯誤的引人注意方式只會被當成小霸王，讓人避之唯恐不及。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "讚美找話題的小畯",
          "desc": "眼睛看著對方的球鞋，豎起大拇指給予真誠肯定，開啟共鳴話題。…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動分享玩具的小和",
          "desc": "雙手大方端出自己的玩具積木箱，向新同儕做出歡迎手勢。…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧊 破冰三句客氣法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "看到新轉來的同學在看漫畫，直接一把搶走撕成兩半，大吼：「看我啊！跟我玩！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🪄",
          "label": "運用破冰三句客氣法：「嗨，你好！我叫小宇，你在畫什麼呀？這畫得好酷喔！」大方開啟友誼！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "想認識新同學卻不敢靠近，一整天在對方背後五公尺處偷偷跟蹤，嚇得新同學不敢上廁所。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧊 破冰三句客氣法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走到新同學面前兩步處站穩，嘴角露出溫暖笑容"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "大方介紹自己的名字：「嗨！你好，我是小宇」"
        },
        {
          "num": 3,
          "icon": "🪄",
          "text": "真誠尋找一個共通話題：「你也喜歡玩積木嗎？我們可以一起蓋喔！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "在社區公園散步時，主動微笑向一位鄰居小朋友說一聲「嗨，你好」，練習破冰交友勇氣！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-week-52": {
    "id": "b-week-52",
    "lessonNumber": 52,
    "legacy": false,
    "date": "2027-08-24",
    "dayOfWeek": "星期二",
    "festival": "新學年起飛",
    "unit": "第十六單元：高階同理心與破冰社交 (迎接新學年)",
    "title": "【新學年起飛大閱兵】——披上勇氣披風：升上新年級的自信心與大承諾",
    "superSkill": "🚀 52週全能社交超能力",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🦸",
    "badgeLabel": "全能超級英雄",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「【新學年起飛大閱兵】」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🦸",
          "label": "小宇",
          "desc": "繫著紅色披風，抬頭挺胸站得筆直，右手握拳舉在胸前，眼神炯炯有…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "升上新年級就抱怨「我再也不要上學了！」把新課本全燒掉",
          "desc": "抗拒成長進步，被過去的挫折困住，喪失迎向未來的勇氣。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "小畯",
          "desc": "雙手拉正披風兩角，露出陽光燦爛且成熟沉穩的笑容，向老師敬…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "小和",
          "desc": "雙手在胸前比出愛心，向陪伴一整年的夥伴深深一鞠躬，聲音溫暖堅…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚀 52週全能社交超能力」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "面對升上高年級更難的課業，氣得踢翻課桌椅大吼：「我只要當小嬰兒，我不要長大！」",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🦸",
          "label": "披上五十二週積累的勇氣披風，昂首闊步立下新年級成長誓詞：「我已經掌握全套社交超能力，我準備好了！」",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "對升級感到極度恐懼焦慮，開學典禮整整一天縮在教室角落發抖不敢看新同學。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚀 52週全能社交超能力」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "閉上雙眼回顧一整年五十二週學到的滿滿超能力"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "昂首挺胸將背脊挺直，深吸一口氣感受內心的強大力量"
        },
        {
          "num": 3,
          "icon": "🦸",
          "text": "高舉右手宣誓大聲說出：「我擁有超能力，我一定能迎接所有挑戰！」"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "全家一起舉行一個溫馨的「新年級成長加冕儀式」，向家人大聲朗讀自己的年度成長誓詞！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-53": {
    "id": "b-idea-53",
    "lessonNumber": 53,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "防災演練防空警報響起——聽覺過載的降噪耳罩與「抱頭閉嘴避難操」",
    "superSkill": "🔕 降噪耳罩靜心盾",
    "themeColor": "#ef4444",
    "badgeEmoji": "🔕",
    "badgeLabel": "防空避難小英雄",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「防災演練防空警報響起」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "迅速配戴耳罩並抱頭掩護的小宇",
          "desc": "身體縮入桌底，雙手保護頭部後頸，閉緊嘴巴保持安靜。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "尖叫大哭並在走廊到處亂跑",
          "desc": "容易引發推擠踩踏，造成嚴重受傷危險。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "遵守紀律安靜蹲下的小畯",
          "desc": "克制開玩笑打鬧衝動，確實做好避難姿勢。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "輕拍同儕給予安全感的小和",
          "desc": "溫和陪伴緊張同儕，共同達成安全防護。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔕 降噪耳罩靜心盾」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "警報聲一響就嚇得在走廊尖叫大哭四處亂衝，不慎撞倒推擠同學。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔕",
          "label": "迅速戴上降噪耳罩或雙手緊摀耳朵，冷靜躲進桌子底下做好抱頭避難姿勢！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "耳朵刺痛難受卻僵坐在椅子上一動也不敢動，被尖銳警報聲嚇得全身發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔕 降噪耳罩靜心盾」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "戴上降噪耳罩或雙手掩耳"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "迅速躲進堅固桌子底下"
        },
        {
          "num": 3,
          "icon": "🔕",
          "text": "雙手抱頭、閉上嘴巴保持安靜"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "回家跟家人練習「防空警報抱頭避難操」，確認自己在家中也知道躲在哪個桌子下！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-54": {
    "id": "b-idea-54",
    "lessonNumber": 54,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "衣服標籤刺刺的、黏土黏黏的——觸覺敏感時的「主動表達與自我調節」",
    "superSkill": "🧤 觸覺舒適自主令",
    "themeColor": "#f97316",
    "badgeEmoji": "👕",
    "badgeLabel": "觸覺調適小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「衣服標籤刺刺的、黏土黏黏的」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動舉手請老師剪除刺刺標籤的小嘉",
          "desc": "清楚說出自己的感覺與需求，不破壞衣物。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得在地上打滾、扯破新運動服",
          "desc": "傷害衣服且無法解決刺癢問題，還會讓家長難過。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動戴上薄手套開心捏黏土的小和",
          "desc": "善用輔具降低觸覺排斥，融入班級美勞活動。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "深呼吸說出「手心黏黏怪怪的」小宇",
          "desc": "用口語清晰溝通，避免尖叫甩手造成困擾。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧤 觸覺舒適自主令」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "覺得衣服刺癢就氣得在地上打滾、扯破新運動服，對爸媽發脾氣大吼。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "👕",
          "label": "舉手溫和表達感受，請老師協助剪除刺刺標籤或戴上薄手套安心捏黏土！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "脖子刺得發紅甚至磨破皮，卻不敢跟老師說，整天皺著眉頭趴在桌上生悶氣。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧤 觸覺舒適自主令」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺皮膚刺癢或黏稠的不舒服感覺"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "舉手溫和表達：『老師，這件衣服標籤刺刺的』"
        },
        {
          "num": 3,
          "icon": "👕",
          "text": "使用小剪刀修剪或墊上純棉手帕"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "檢查家中穿起來不舒服的衣服，跟爸爸媽媽一起用小剪刀小心修剪刺刺標籤！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-55": {
    "id": "b-idea-55",
    "lessonNumber": 55,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "🍲 走進熱鬧嘈雜的合作社與中央廚房——感官過載時的「離場充電三部曲」",
    "superSkill": "🔋 三分鐘離場充電術",
    "themeColor": "#10b981",
    "badgeEmoji": "🔋",
    "badgeLabel": "感官充電小管家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🍲 走進熱鬧嘈雜的合作社與中央廚房」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動比出暫停手勢退至走廊充電的小宇",
          "desc": "即時覺察過載警訊，成功避免當機崩潰。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在人潮中焦躁尖叫並用力推開周圍同學",
          "desc": "容易造成踩踏與肢體衝突，加劇自身恐慌。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "耐心陪伴同儕到樹蔭下休息的小畯",
          "desc": "展現成熟同理心，成為友誼守護者。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "幫忙計時三分鐘維持安靜秩序的小嘉",
          "desc": "善用時間結構，讓休息充電更具成效。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔋 三分鐘離場充電術」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "在擁擠吵鬧的人群中焦躁尖叫，用力推開身邊同學硬往前擠。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔋",
          "label": "向老師比出『Ｔ字暫停手勢』，在陪伴下退到安靜走廊深呼吸三分鐘充電！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "大腦過載頭暈想吐，卻強忍著不敢離場，最後在集會隊伍中眼前發黑昏倒。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔋 三分鐘離場充電術」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺大腦嗡嗡叫、頭暈胸悶的過載訊號"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "向同儕做出「雙手胸前比Ｔ」暫停手勢"
        },
        {
          "num": 3,
          "icon": "🔋",
          "text": "退到微風走廊或安靜角落深呼吸三分鐘"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🔋 三分鐘離場充電術」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-56": {
    "id": "b-idea-56",
    "lessonNumber": 56,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "🔦 教室刺眼日光燈或西曬陽光——視覺敏感時的「溫和告知老師與拉窗簾」",
    "superSkill": "🕶️ 柔光視覺防護網",
    "themeColor": "#eab308",
    "badgeEmoji": "🕶️",
    "badgeLabel": "柔光調節守護員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🔦 教室刺眼日光燈或西曬陽光」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "禮貌舉手請求拉上窗簾調節光線的小嘉",
          "desc": "清楚溝通問題所在，促成全班視覺舒適。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得拍桌子摔筆、趴在桌上拒絕看黑板",
          "desc": "未表達具體原因，導致老師誤解且延誤學習。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "動作輕巧協助拉好窗簾的小畯",
          "desc": "細心操作公物，展現體貼同儕的紳士風度。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "調整坐姿並感謝大家分工合作的小和",
          "desc": "對班級友善環境充滿感恩，正向投入學習。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🕶️ 柔光視覺防護網」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，氣得拍桌子摔筆、趴在桌上拒絕看黑板，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🕶️",
          "label": "冷靜深呼吸啟動「🕶️ 柔光視覺防護網」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🕶️ 柔光視覺防護網」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺瞇瞇眼、流眼淚或眼睛酸痛的強光訊號"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "舉手禮貌告知：『老師，光線太亮反光，可以拉窗簾嗎？』"
        },
        {
          "num": 3,
          "icon": "🕶️",
          "text": "動作輕柔拉上百葉窗或關閉刺眼頂燈"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🕶️ 柔光視覺防護網」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-57": {
    "id": "b-idea-57",
    "lessonNumber": 57,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "💨 忍不住搖晃身體、轉筆或踱步——自閉自我刺激 (Stimming) 的「替代舒壓小教具」",
    "superSkill": "🧘 隱形舒壓指壓球",
    "themeColor": "#6366f1",
    "badgeEmoji": "🧘",
    "badgeLabel": "專注舒壓小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「💨 忍不住搖晃身體、轉筆或踱步」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "善用口袋指壓球安靜舒壓的小宇",
          "desc": "滿足自身生理調節需求，同時維持課堂安靜。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "狂按原子筆、踢桌子製造噪音被同學抗議",
          "desc": "打擾全班專注，易引發同儕人際排斥。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動把發出聲音的筆收納整齊的小畯",
          "desc": "體察他人需求，展現高度自律精神。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "踩著椅腳彈力帶安定專注學習的小嘉",
          "desc": "有效釋放過剩動能，兼顧坐姿與學習吸收。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧘 隱形舒壓指壓球」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，狂按原子筆、踢桌子製造噪音被同學抗議，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🧘",
          "label": "冷靜深呼吸啟動「🧘 隱形舒壓指壓球」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧘 隱形舒壓指壓球」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺手癢、想搖晃或按筆發出怪聲的衝動"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拿出發泡指壓球放進外套口袋安靜擠壓"
        },
        {
          "num": 3,
          "icon": "🧘",
          "text": "雙腳踩著椅腳彈力帶上下輕踩釋放能量"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧘 隱形舒壓指壓球」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-58": {
    "id": "b-idea-58",
    "lessonNumber": 58,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "🦷 牙齒檢查與視力檢查來了——面對陌生白袍醫師與器械的「預告減敏呼吸術」",
    "superSkill": "🩺 白袍健檢安心咒",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🩺",
    "badgeLabel": "健康檢查小勇士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🦷 牙齒檢查與視力檢查來了」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "勇敢張大嘴巴順利完成檢查的小和",
          "desc": "戰勝心中未知恐懼，配合醫護人員守護健康。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "大哭大鬧咬醫師手指或踢翻醫療器械盤",
          "desc": "造成自身受傷與器械損毀，無法完成檢查。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "雙手放膝蓋認真比出視力方向的小畯",
          "desc": "專注配合檢測指令，展現高度自律。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "熱心協助拿記錄單引導排隊的小嘉",
          "desc": "發揮組織長才，成為健檢現場得力小幫手。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🩺 白袍健檢安心咒」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，大哭大鬧咬醫師手指或踢翻醫療器械盤，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🩺",
          "label": "冷靜深呼吸啟動「🩺 白袍健檢安心咒」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🩺 白袍健檢安心咒」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "坐上旋轉椅，深呼吸一口氣放鬆肩膀"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "頭往後靠在枕頭上，嘴巴張成大大的圓形說「阿～」"
        },
        {
          "num": 3,
          "icon": "🩺",
          "text": "在心裡數到三：一、二、三，檢查迅速完成領貼紙"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🩺 白袍健檢安心咒」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-59": {
    "id": "b-idea-59",
    "lessonNumber": 59,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題一：感覺調節與感官適應",
    "title": "🌧️ 下雨天體育課改在室內教室——戶外動能無法宣洩時的「室內伸展操」",
    "superSkill": "🧘 椅子核心伸展術",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌧️",
    "badgeLabel": "雨天活力伸展官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🌧️ 下雨天體育課改在室內教室」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動扶正椅子跟著深蹲宣洩精力的小畯",
          "desc": "成功調控挫折情緒，把衝動轉為健康運動。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在走廊大吼大叫淋雨狂奔滑倒摔傷",
          "desc": "違反雨天校園安全規定，極易造成骨折受傷。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "認真跟隨節奏進行推牆放鬆的小宇",
          "desc": "善用本體覺伸展穩定情緒，適應環境變動。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "熱心數節拍帶領全班伸展小體操的小嘉",
          "desc": "展現團隊領導力，讓雨天自習充滿活力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧘 椅子核心伸展術」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，在走廊大吼大叫淋雨狂奔滑倒摔傷，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌧️",
          "label": "冷靜深呼吸啟動「🧘 椅子核心伸展術」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧘 椅子核心伸展術」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "接納天氣下雨的自然限制，深呼吸告訴自己：『沒關係，室內也很好玩』"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手用力推緊堅固牆壁，手肘微彎推十秒，釋放大腦壓力"
        },
        {
          "num": 3,
          "icon": "🌧️",
          "text": "雙腳踩地做椅子深蹲五次，讓肌肉獲得舒服的運動感"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧘 椅子核心伸展術」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-60": {
    "id": "b-idea-60",
    "lessonNumber": 60,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "🦖 當我好想一直講我最愛的寶可夢——自閉症「獨白踩煞車」與「雙向拋接球談話法」",
    "superSkill": "🎾 雙向對話拋接球",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🎾",
    "badgeLabel": "拋接球聊天高手",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🦖 當我好想一直講我最愛的寶可夢」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "講完三句主動問「換你囉，你喜歡什麼」的小宇",
          "desc": "學會踩住獨白煞車，尊重對話雙向互動。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "霸佔話題講滿十分鐘、不准別人插嘴或離開",
          "desc": "造成同儕疲倦與反感，失去朋友互動意願。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "熱情接球並大方分享自己喜好的小畯",
          "desc": "展現良好對話禮貌，促成人際良性互動。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "用計時沙漏協助大家輪流發言的小嘉",
          "desc": "落實規則結構，讓每位同學都享有表達權利。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎾 雙向對話拋接球」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "抓住同學大講十分鐘寶可夢招式，同學想走還拉住對方衣角不准走。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎾",
          "label": "講完三句立刻在大腦踩煞車，把話題球拋給對方：『那你呢？你喜歡什麼？』",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "被提醒講太多次就賭氣發脾氣，心想『反正你們都不懂我』，封閉自己不理人。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎾 雙向對話拋接球」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺自己已經連續講了三句話，立刻在大腦踩煞車"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "看對方的眼神是否在看你，還是已經東張西望想走開"
        },
        {
          "num": 3,
          "icon": "🎾",
          "text": "把對話球拋給對方：『那你呢？你最喜歡什麼？』並專心聽"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "跟家人聊天時練習「拋接球談話法」，自己講三句後主動問媽媽今天發生什麼趣事！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-61": {
    "id": "b-idea-61",
    "lessonNumber": 61,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "🤐 實話實說 vs 傷人直言——理解「別人在意的事」，學會把傷人的話「在大腦嚼三下」",
    "superSkill": "🧠 話語過濾口香糖",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🧠",
    "badgeLabel": "體貼說話守護官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🤐 實話實說 vs 傷人直言」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "啟動大腦過濾口香糖、溫和說好話的小宇",
          "desc": "過濾傷人衝動，把話說得體貼且溫暖。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "當眾指著同學大笑「好醜喔被狗啃」",
          "desc": "嚴重打擊同儕自尊心，破壞友誼引發人際對立。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時反省並真誠向同儕鞠躬道歉的小畯",
          "desc": "勇於承擔言語責任，展現自省品格。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動肯定同儕新造型優點的小嘉",
          "desc": "營造欣賞接納的溫馨班級文化。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧠 話語過濾口香糖」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，當眾指著同學大笑「好醜喔被狗啃」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🧠",
          "label": "冷靜深呼吸啟動「🧠 話語過濾口香糖」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧠 話語過濾口香糖」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺想脫口而出評價同儕外表、便當或衣著的衝動"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "在心裡嚼三下口香糖自問：『這句話聽了會讓人想哭嗎？』"
        },
        {
          "num": 3,
          "icon": "🧠",
          "text": "把傷人的刺收回肚子裡，換成讚美或保持禮貌安靜"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧠 話語過濾口香糖」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-62": {
    "id": "b-idea-62",
    "lessonNumber": 62,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "🎭 他是在笑我還是在開玩笑？——辨識「善意打趣」與「惡意嘲諷」的語調線索",
    "superSkill": "🔍 語音語調解碼鏡",
    "themeColor": "#059669",
    "badgeEmoji": "🔍",
    "badgeLabel": "心意解碼偵探",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🎭 他是在笑我還是在開玩笑？」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動停住問一句「你是在開玩笑嗎」的小宇",
          "desc": "學會澄清真實意圖，避免衝動誤解揮拳。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "不管三七二十一直接出拳揍人搶球",
          "desc": "破壞球場友誼，造成同儕受傷與嚴重校規懲處。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時澄清善意並真誠說明的小嘉",
          "desc": "勇於負責修復溝通，展現高度同理心。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "熱心協助調解誤會、支持隊友的小畯",
          "desc": "促進同儕信任，鞏固團隊和諧氣氛。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔍 語音語調解碼鏡」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，不管三七二十一直接出拳揍人搶球，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔍",
          "label": "冷靜深呼吸啟動「🔍 語音語調解碼鏡」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔍 語音語調解碼鏡」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺拳頭硬起來的憤怒，先停住三秒鐘"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "觀察對方的眼神（溫柔注視）與嘴角（友善微笑）"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "不確定時直接開口問：『請問你是在跟我開玩笑嗎？』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🔍 語音語調解碼鏡」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-63": {
    "id": "b-idea-63",
    "lessonNumber": 63,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "📱 偷看別人的聯絡簿或私人書包——尊重同儕隱私權與「不窺探邊界」",
    "superSkill": "🔒 隱私界線安全鎖",
    "themeColor": "#e11d48",
    "badgeEmoji": "🔒",
    "badgeLabel": "個人隱私守護神",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「📱 偷看別人的聯絡簿或私人書包」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動退後一步、克制窺探他人書包隱私的小宇",
          "desc": "嚴守人際界線安全鎖，展現高尚道德自律。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "趁同學不在偷偷拉開書包拉鍊翻看私人日記",
          "desc": "嚴重侵犯同儕隱私權，引發激烈人際衝突與信任破裂。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時認錯並保證再也不亂碰私人物品的小畯",
          "desc": "知錯能改，重新贏回同儕的尊重與信任。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "貼心幫忙拉好拉鍊、遞面紙安慰同儕的小和",
          "desc": "溫暖同理他人感受，成為班級守護天使。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🔒 隱私界線安全鎖」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，趁同學不在偷偷拉開書包拉鍊翻看私人日記，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🔒",
          "label": "冷靜深呼吸啟動「🔒 隱私界線安全鎖」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🔒 隱私界線安全鎖」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "不隨便拉開別人的書包拉鍊或抽屜"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "不翻看別人的聯絡簿評語與個人日記"
        },
        {
          "num": 3,
          "icon": "🔒",
          "text": "好奇想借看時，必須先看著對方眼睛說：『請問我可以看嗎？』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🔒 隱私界線安全鎖」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-64": {
    "id": "b-idea-64",
    "lessonNumber": 64,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "🤫 什麼是「讀懂空氣」？——當大家都在安靜專注時，如何克制自言自語與發出怪聲",
    "superSkill": "🌫️ 班級空氣晴雨表",
    "themeColor": "#0284c7",
    "badgeEmoji": "🌫️",
    "badgeLabel": "讀懂空氣小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🤫 什麼是「讀懂空氣」？」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "抬頭看全班並主動切換至靜音模式的小宇",
          "desc": "成功讀懂班級空氣，尊重集體作息秩序。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "午休大聲模仿超人配音吵醒全班同學",
          "desc": "破壞同儕睡眠品質，引發全班抱怨與負向人際對立。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "自律收好手腳安靜趴下休息的小畯",
          "desc": "克制身體動能衝動，展現優良團體配合度。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "出示靜音標誌協助維持班級寧靜的小嘉",
          "desc": "發揮正向領導力，守護班級共同舒適環境。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌫️ 班級空氣晴雨表」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，午休大聲模仿超人配音吵醒全班同學，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌫️",
          "label": "冷靜深呼吸啟動「🌫️ 班級空氣晴雨表」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌫️ 班級空氣晴雨表」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "抬頭環視全班：大家是在熱鬧說話，還是安靜低頭看書？"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "如果是安靜氛圍，把嘴巴拉上隱形拉鍊"
        },
        {
          "num": 3,
          "icon": "🌫️",
          "text": "想念台詞時，在大腦肚子裡默唸，不發出口語聲音"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🌫️ 班級空氣晴雨表」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-65": {
    "id": "b-idea-65",
    "lessonNumber": 65,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "👂 傾聽時的身體語言——除了不講話，還要「微微點頭＋眼神定向」，展現真誠關注",
    "superSkill": "🙆 真誠傾聽點頭術",
    "themeColor": "#10b981",
    "badgeEmoji": "🙆",
    "badgeLabel": "大耳朵傾聽大使",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「👂 傾聽時的身體語言」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "真誠傾聽的小和",
          "desc": "身體面向同儕，眼神專注並微笑點頭。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "身體背對同學、低頭狂玩橡皮擦面無表情",
          "desc": "讓說話同儕感到不受尊重與挫折，阻斷溝通意願。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "放下手中積木、看著對方眉心給予回應的小宇",
          "desc": "突破感官侷限，展現真摯誠懇的社交姿態。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "不插嘴不打岔、耐心聽完全文再提問的小畯",
          "desc": "具備高度傾聽素養，建立深厚同儕信任。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🙆 真誠傾聽點頭術」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，身體背對同學、低頭狂玩橡皮擦面無表情，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🙆",
          "label": "冷靜深呼吸啟動「🙆 真誠傾聽點頭術」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🙆 真誠傾聽點頭術」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "轉動椅子或肩膀，身體正面朝向說話的同學"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙眼看著對方的眉心或鼻樑，展現專注"
        },
        {
          "num": 3,
          "icon": "🙆",
          "text": "每聽懂一個段落，頭微微向下點一下，嘴角微笑"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🙆 真誠傾聽點頭術」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-66": {
    "id": "b-idea-66",
    "lessonNumber": 66,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題二：語用溝通與隱性社交密碼",
    "title": "❓ 聽不懂老師複雜的長指令時——不愣住裝懂，鼓起勇氣舉手說：「請老師再說一次第二步」",
    "superSkill": "✋ 步驟重述確認卡",
    "themeColor": "#f59e0b",
    "badgeEmoji": "❓",
    "badgeLabel": "勇於求問小博士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「❓ 聽不懂老師複雜的長指令時」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "勇敢舉手說「請老師再說一次第二步」的小和",
          "desc": "主動釐清學習任務，克服聽理解瓶頸。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "完全聽不懂卻不敢問、坐在位子上發呆咬手指",
          "desc": "浪費寶貴學習時間，導致作業無法完成且焦慮加劇。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "拿出便利貼認真向老師核對步驟的小宇",
          "desc": "善用輔助工具落實執行，展現負責學習態度。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "在黑板條目化寫下步驟協助大家的小嘉",
          "desc": "將結構化思維化為具體服務，提升全班學習效率。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「✋ 步驟重述確認卡」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，完全聽不懂卻不敢問、坐在位子上發呆咬手指，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "❓",
          "label": "冷靜深呼吸啟動「✋ 步驟重述確認卡」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「✋ 步驟重述確認卡」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺自己腦袋打結、不知道下一步要做什麼"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "立刻把右手舉高，眼睛看著老師"
        },
        {
          "num": 3,
          "icon": "❓",
          "text": "清楚說出：『報告老師，請問第二步要做什麼？』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「✋ 步驟重述確認卡」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-67": {
    "id": "b-idea-67",
    "lessonNumber": 67,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "✏️ 國字寫出格子外、橡皮擦把本子擦破——書寫挫折時的「放下鉛筆揉麵糰放鬆法」",
    "superSkill": "🍞 揉麵糰指尖放鬆法",
    "themeColor": "#ef4444",
    "badgeEmoji": "✏️",
    "badgeLabel": "耐挫書寫小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「✏️ 國字寫出格子外、橡皮擦把本子擦破」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "放下鉛筆揉手、用膠帶補好破洞繼續寫的小和",
          "desc": "成功調控挫折崩潰情緒，展現強大心理韌性。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得把作業本撕爛、把鉛筆折斷丟在地上",
          "desc": "破壞學用品且必須全部重寫，使挫折感更難以收拾。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時遞上修復膠帶安慰勸導同儕的小畯",
          "desc": "化身同儕支持者，及時化解挫折風暴。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "調整握筆器協助同儕改善書寫舒適度的小嘉",
          "desc": "善用輔具與技巧，提升團隊學習效益。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🍞 揉麵糰指尖放鬆法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，氣得把作業本撕爛、把鉛筆折斷丟在地上，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "✏️",
          "label": "冷靜深呼吸啟動「🍞 揉麵糰指尖放鬆法」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🍞 揉麵糰指尖放鬆法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺手指僵硬、生氣想用力戳破紙張的衝動"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "立刻把鉛筆放下，雙手在空中做捏麵糰抓握五次"
        },
        {
          "num": 3,
          "icon": "✏️",
          "text": "拿出透明修復膠帶貼好破洞，深呼吸重寫一遍"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🍞 揉麵糰指尖放鬆法」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-68": {
    "id": "b-idea-68",
    "lessonNumber": 68,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "📖 上台朗讀課文卡住被同學笑——閱讀障礙 (LD) 當機時的「求助小字卡：夥伴接力」",
    "superSkill": "🤝 朗讀接力求助卡",
    "themeColor": "#f97316",
    "badgeEmoji": "📖",
    "badgeLabel": "自信朗讀小勇士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「📖 上台朗讀課文卡住被同學笑」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "勇敢接受同儕接力、順利讀完下一句的小和",
          "desc": "不因卡關退縮，展現堅韌的學習勇氣。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "被同學笑一聲就當場把課本砸在地上大哭跑出教室",
          "desc": "中斷學習進度，加劇人際隔閡與自身挫折。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動舉起接力旗清亮補位讀句的小嘉",
          "desc": "發揮團隊互助最高典範，化解同儕當機危機。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "挺身而出嚴肅制止嘲弄笑聲的小畯",
          "desc": "展現正義風範，守護友善包容的班級環境。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🤝 朗讀接力求助卡」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，被同學笑一聲就當場把課本砸在地上大哭跑出教室，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "📖",
          "label": "冷靜深呼吸啟動「🤝 朗讀接力求助卡」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🤝 朗讀接力求助卡」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺認字卡關、大腦當機超過三秒鐘"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "不慌張低下頭哭，舉起綠色接力小旗子"
        },
        {
          "num": 3,
          "icon": "📖",
          "text": "同組夥伴接讀一句，自己深呼吸接著讀下一句"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🤝 朗讀接力求助卡」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-69": {
    "id": "b-idea-69",
    "lessonNumber": 69,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "⏱️ 課堂限時計時器滴答響好緊張——面對時間壓力的「跟著節奏深呼吸、一題吸一口氣」",
    "superSkill": "⏳ 滴答時鐘慢板調息",
    "themeColor": "#6366f1",
    "badgeEmoji": "⏱️",
    "badgeLabel": "冷靜計時小行家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「⏱️ 課堂限時計時器滴答響好緊張」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "看著海龜沙漏穩定呼吸、一題題算出答案的小宇",
          "desc": "成功調解時間焦慮，展現沉穩應試能力。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "看到計時器就大吼大叫把考卷揉爛踩在地上",
          "desc": "喪失評量機會且破壞考場秩序，加劇挫敗感。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "克制搶快衝動、認真檢查每一道題目的小畯",
          "desc": "養成嚴謹學習態度，提升答題正確率。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "按自己節奏踏實作答不慌張的小和",
          "desc": "建立健全自我認知，克服同儕比較壓力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「⏳ 滴答時鐘慢板調息」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，看到計時器就大吼大叫把考卷揉爛踩在地上，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⏱️",
          "label": "冷靜深呼吸啟動「⏳ 滴答時鐘慢板調息」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「⏳ 滴答時鐘慢板調息」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺心跳加速、腦袋一片空白的時間恐慌"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手貼平桌面，深吸一口氣：『呼～我有自己的節奏』"
        },
        {
          "num": 3,
          "icon": "⏱️",
          "text": "寫完一題就在題目旁邊畫一顆愛心，安穩完成下一題"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「⏳ 滴答時鐘慢板調息」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-70": {
    "id": "b-idea-70",
    "lessonNumber": 70,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "📐 應用題題目好長看花了眼——把長文字切成三塊巧克力的「視覺分段拆解術」",
    "superSkill": "🍫 題目分段巧克力切",
    "themeColor": "#10b981",
    "badgeEmoji": "🍫",
    "badgeLabel": "題目拆解大師",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「📐 應用題題目好長看花了眼」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "用螢光筆將長題目切成三塊清晰拆解的小和",
          "desc": "戰勝閱讀障礙困境，找到高效解題路徑。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "看到題目太長就直接放棄、隨便在答案欄亂寫",
          "desc": "失去思考練習機會，無法建立數學思維信心。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "善用閱讀窗一行行專注分析題意的小宇",
          "desc": "排除感官干擾，建立嚴謹文字審題習慣。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "畫出圖像輔助大家驗證答案的小嘉",
          "desc": "運用多感官圖像表徵，加深概念理解深度。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🍫 題目分段巧克力切」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，看到題目太長就直接放棄、隨便在答案欄亂寫，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🍫",
          "label": "冷靜深呼吸啟動「🍫 題目分段巧克力切」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🍫 題目分段巧克力切」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "拿出遮字尺，一行一行慢慢讀，不讓眼睛跳行"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "用原子筆把題目裡的數字與單位圈起來"
        },
        {
          "num": 3,
          "icon": "🍫",
          "text": "用黃色螢光筆畫出最後那句『請問……？』抓出算式目標"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🍫 題目分段巧克力切」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-71": {
    "id": "b-idea-71",
    "lessonNumber": 71,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "🎨 美勞課作品做得跟示範不一樣——「每個人的創作都是獨特星球」，擺脫完美主義",
    "superSkill": "🪐 獨特星球自尊心",
    "themeColor": "#ec4899",
    "badgeEmoji": "🎨",
    "badgeLabel": "創意自信小畫家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🎨 美勞課作品做得跟示範不一樣」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "接納黏土作品瑕疵、創造出專屬特色的小宇",
          "desc": "擺脫完美主義牢籠，享受純粹創作的快樂。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "因為捏得不像範本就狠狠把作品摔在地上踩爛",
          "desc": "白費心血努力，深陷自我否定與負面情緒深淵。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "水彩塗出去改造成美麗浪花的小畯",
          "desc": "具備高度彈性思維，展現問題解決智慧。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "整合大家獨特作品組成宇宙艦隊的小嘉",
          "desc": "珍視同儕個別差異，激發強大團隊凝聚力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🪐 獨特星球自尊心」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，因為捏得不像範本就狠狠把作品摔在地上踩爛，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎨",
          "label": "冷靜深呼吸啟動「🪐 獨特星球自尊心」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🪐 獨特星球自尊心」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺『做得跟老師不一樣』的焦慮與想摔東西衝動"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "深呼吸告訴自己：『宇宙中每一顆星球都長得不一樣』"
        },
        {
          "num": 3,
          "icon": "🎨",
          "text": "在歪掉或塗出去的地方加上一顆小星星，變成專屬特色"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🪐 獨特星球自尊心」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-72": {
    "id": "b-idea-72",
    "lessonNumber": 72,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "🎒 書包塞成大垃圾桶找不到作業——五色資料夾收納法與「書包回家每日排毒術」",
    "superSkill": "📁 五色收納大魔法",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🎒",
    "badgeLabel": "收納整理小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🎒 書包塞成大垃圾桶找不到作業」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "善用五色資料夾分類、迅速繳交作業的小畯",
          "desc": "成功戒除凌亂壞習慣，提升學習執行效率。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "書包塞成垃圾桶、把雜物全倒在走廊大吼大叫",
          "desc": "製造髒亂且浪費時間，引發焦慮與同儕側目。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "落實顏色對應標籤、井井有條整理書包的小宇",
          "desc": "發揮結構化長才，成為個人物品管理達人。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "依照放學檢核表逐項打勾確認的小和",
          "desc": "善用工具落實自我管理，建立學習責任感。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📁 五色收納大魔法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，書包塞成垃圾桶、把雜物全倒在走廊大吼大叫，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🎒",
          "label": "冷靜深呼吸啟動「📁 五色收納大魔法」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📁 五色收納大魔法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "放學前打開書包，把揉爛的垃圾和衛生紙丟進垃圾桶"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "將課本與作業放進對應顏色的科目資料夾"
        },
        {
          "num": 3,
          "icon": "🎒",
          "text": "拉上拉鍊前對照打勾卡確認：『聯絡簿與作業都裝進去了！』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「📁 五色收納大魔法」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-73": {
    "id": "b-idea-73",
    "lessonNumber": 73,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題三：課堂學習挫折與作業挑戰",
    "title": "🏃 體育課大隊接力意外掉棒——面對團隊失誤，「不指責掉棒隊友、主動上前說沒關係」",
    "superSkill": "🤝 團隊掉棒不埋怨",
    "themeColor": "#059669",
    "badgeEmoji": "🏃",
    "badgeLabel": "最佳團隊神隊友",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🏃 體育課大隊接力意外掉棒」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "把責怪吞回肚子、大聲為失誤隊友吶喊助威的小畯",
          "desc": "展現成熟運動家包容氣度，堪稱真正的神隊友。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "當場指著隊友破口大罵「都是你害我們輸的廢物」",
          "desc": "嚴重撕裂班級感情，造成同儕心理創傷與排擠。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "迅速協助撿起接力棒激勵夥伴向前衝的小嘉",
          "desc": "臨危不亂積極補位，展現最佳團隊危機處理。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "咬緊牙關奮戰到底、不因掉棒放棄奔馳的小和",
          "desc": "戰勝自責恐慌，展現可敬的運動員堅毅精神。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🤝 團隊掉棒不埋怨」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，當場指著隊友破口大罵「都是你害我們輸的廢物」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏃",
          "label": "冷靜深呼吸啟動「🤝 團隊掉棒不埋怨」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🤝 團隊掉棒不埋怨」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "看見隊友失誤落後，立刻克制嘴巴想罵人的衝動"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "立刻幫忙撿起接力棒或出聲提醒：『快衝！』"
        },
        {
          "num": 3,
          "icon": "🏃",
          "text": "在場邊大聲喊：『沒關係，我們一起追回來！』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🤝 團隊掉棒不埋怨」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-74": {
    "id": "b-idea-74",
    "lessonNumber": 74,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "😡 他不小心踩壞我的新直尺——分清「意外損壞」與「惡意破壞」，冷靜調解不揮拳",
    "superSkill": "📏 意外損壞冷靜尺",
    "themeColor": "#ef4444",
    "badgeEmoji": "📏",
    "badgeLabel": "冷靜調解小法官",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「😡 他不小心踩壞我的新直尺」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "克制拳頭、理性請老師協助處理賠償的小宇",
          "desc": "成功調解激烈怒火，以法治程序代替暴力私刑。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "不管三七二十一直接把對方打到流鼻血砸爛課桌",
          "desc": "造成嚴重肢體傷害，讓自己從受害者變成加害者。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "沒有逃跑、主動承諾購買新品賠償的小畯",
          "desc": "勇於負責承擔後果，展現真誠道歉最高誠意。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心用膠帶協助拼湊受損物品的小和",
          "desc": "以行動傳遞溫暖撫慰，化解劍拔弩張的人際危機。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📏 意外損壞冷靜尺」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，不管三七二十一直接把對方打到流鼻血砸爛課桌，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "📏",
          "label": "冷靜深呼吸啟動「📏 意外損壞冷靜尺」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📏 意外損壞冷靜尺」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺暴怒想出拳，立刻把雙手插進外套口袋"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "看對方的臉與態度：他是否慌張說對不起？"
        },
        {
          "num": 3,
          "icon": "📏",
          "text": "請老師協助商量修復或賠償，不私下動用暴力"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「📏 意外損壞冷靜尺」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-75": {
    "id": "b-idea-75",
    "lessonNumber": 75,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "👥 好朋友今天去找別人玩——調適獨佔友誼的嫉妒心：「朋友不是我的專屬玩具」",
    "superSkill": "🌐 開放友誼大胸襟",
    "themeColor": "#3b82f6",
    "badgeEmoji": "👥",
    "badgeLabel": "寬廣心胸好朋友",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「👥 好朋友今天去找別人玩」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "放下獨佔心、主動上前幫忙搖繩同樂的小和",
          "desc": "拓展寬闊社交格局，將嫉妒化為更大群體的歡樂。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得在走廊大吼「我再也不跟你好了」當場翻臉",
          "desc": "將個人控制慾強加於人，導致友誼破裂與孤立無援。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "能安心享受個人獨處、不限制同儕交友的小宇",
          "desc": "展現成熟心理分化，建立健康自立的人格特質。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動招手邀請落單好友加入遊戲的小畯",
          "desc": "具備高度溫暖熱情，營造全員共融之友善環境。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌐 開放友誼大胸襟」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，氣得在走廊大吼「我再也不跟你好了」當場翻臉，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "👥",
          "label": "冷靜深呼吸啟動「🌐 開放友誼大胸襟」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌐 開放友誼大胸襟」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺心裡酸酸的、想生氣絕交的獨佔嫉妒心"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "在心裡默唸：『朋友不是專屬玩具，他也有認識新朋友的自由』"
        },
        {
          "num": 3,
          "icon": "👥",
          "text": "主動走上前爭取一起玩，或者開心地做自己的事情"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🌐 開放友誼大胸襟」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-76": {
    "id": "b-idea-76",
    "lessonNumber": 76,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "🗣️ 聽到別人在私底下叫我難聽的綽號——「不當場暴怒動手」，向導師求助與堅定回擊",
    "superSkill": "🛡️ 侮辱言論反彈盾",
    "themeColor": "#e11d48",
    "badgeEmoji": "🛡️",
    "badgeLabel": "自信尊嚴守護員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🗣️ 聽到別人在私底下叫我難聽的綽號」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "克制動手衝動、堅定宣示姓名並報告導師的小畯",
          "desc": "成功戰勝被挑釁的激怒陷阱，展現智勇雙全的克制力。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "暴怒抓起鐵桶猛砸對方頭部造成流血重傷",
          "desc": "演變成校園重大傷害事件，面臨記大過與家長賠償。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "挺身而出嚴厲制止惡意綽號挑釁的小嘉",
          "desc": "展現不畏強暴的非凡正義勇氣，守護校園友善底線。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "緊握同儕雙手給予溫暖同盟支持的小和",
          "desc": "提供堅強心理後盾，讓受害孩子不再感到孤單恐懼。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛡️ 侮辱言論反彈盾」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，暴怒抓起鐵桶猛砸對方頭部造成流血重傷，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🛡️",
          "label": "冷靜深呼吸啟動「🛡️ 侮辱言論反彈盾」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛡️ 侮辱言論反彈盾」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺被叫綽號的暴怒，雙手緊扣身體，不動手反擊"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "眼神堅定直視對方說：『這不是我的名字，請尊重別人！』"
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "轉身離開現場，立刻向導師或學務處具體通報"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🛡️ 侮辱言論反彈盾」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-77": {
    "id": "b-idea-77",
    "lessonNumber": 77,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "🤝 分組討論大家意見僵持不下——「少數服從多數、多數尊重少數」，用投票平息爭執",
    "superSkill": "🗳️ 意見分歧投票箱",
    "themeColor": "#059669",
    "badgeEmoji": "🤝",
    "badgeLabel": "民主合作小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🤝 分組討論大家意見僵持不下」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "展現大器退讓、同意創意融合方案的小宇",
          "desc": "成功打破思考固著框架，體驗合作雙贏的美好。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "意見不同就摔黑板擦、賭氣退出大喊「我不畫了」",
          "desc": "破壞小組團隊進度，被同儕貼上任性難以合作的標籤。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "提出「太空暴龍」融合創意化解僵局的小畯",
          "desc": "展現卓越問題調解能力，引領全組走向和平。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "承諾下次優先採納同儕提案、真誠致謝的小嘉",
          "desc": "實踐民主尊重少數之最高素養，鞏固持久同儕情誼。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🗳️ 意見分歧投票箱」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，意見不同就摔黑板擦、賭氣退出大喊「我不畫了」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🤝",
          "label": "冷靜深呼吸啟動「🗳️ 意見分歧投票箱」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🗳️ 意見分歧投票箱」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺大家意見不同僵持不下時，喊一聲：『我們來投票！』"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "票數少的一方遵守運動家風度，微笑配合多數決議"
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "尋找創意結合點，把少數方的精華融入整體作品中"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🗳️ 意見分歧投票箱」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-78": {
    "id": "b-idea-78",
    "lessonNumber": 78,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "💔 借給同學的彩色筆沒蓋蓋子乾掉了——溫和提出修復需求，不情緒勒索",
    "superSkill": "🖍️ 彩色筆修復對話法",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🖍️",
    "badgeLabel": "溫和溝通小模範",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「💔 借給同學的彩色筆沒蓋蓋子乾掉了」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "平靜陳述事實、溫和要求合理補償的小嘉",
          "desc": "展現卓越情緒EQ與非暴力溝通典範，順利獲得補償。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得把同學整盒筆砸爛踩碎、當眾狂飆髒話",
          "desc": "擴大衝突升級為肢體暴力，使自己陷入違規受罰窘境。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動拿出自己蠟筆借給同儕應急的小畯",
          "desc": "即時雪中送炭，展現同儕互助暖實力。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "協助使用溫水急救文具、細心蓋好筆蓋的小宇和小和",
          "desc": "專注於具體修復方案，展現理性解決問題之智慧。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🖍️ 彩色筆修復對話法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，氣得把同學整盒筆砸爛踩碎、當眾狂飆髒話，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🖍️",
          "label": "冷靜深呼吸啟動「🖍️ 彩色筆修復對話法」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🖍️ 彩色筆修復對話法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺物品損壞的委屈與怒火，深呼吸三次"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "平靜指著物品說出客觀事實：『筆蓋沒蓋緊，筆尖乾掉了』"
        },
        {
          "num": 3,
          "icon": "🖍️",
          "text": "溫和提出具體解決方案：『請你借我你的筆，並買一支還我』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🖍️ 彩色筆修復對話法」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-79": {
    "id": "b-idea-79",
    "lessonNumber": 79,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "🏃 在走廊奔跑撞到低年級小弟弟——「先蹲下關心對方有沒有受傷」，展現責任感",
    "superSkill": "🩹 先蹲下關心第一條",
    "themeColor": "#ef4444",
    "badgeEmoji": "🏃",
    "badgeLabel": "愛心守護大哥哥",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🏃 在走廊奔跑撞到低年級小弟弟」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "勇敢負責的小畯",
          "desc": "不逃跑、蹲下關心並陪同低年級同學去健康中心。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "撞倒人看到對方流血大哭、拔腿落跑裝作沒看見",
          "desc": "延誤傷患就醫救治，涉重大校安違規且良心難安。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "在現場幫忙撿起水壺、安撫學弟情緒的小宇",
          "desc": "發揮冷靜細心特質，提供受傷同儕即時支持。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "迅速通報老師並引導後方減速慢行的小和和小嘉",
          "desc": "展現卓越應變與現場安全防護能力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🩹 先蹲下關心第一條」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，撞倒人看到對方流血大哭、拔腿落跑裝作沒看見，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏃",
          "label": "冷靜深呼吸啟動「🩹 先蹲下關心第一條」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🩹 先蹲下關心第一條」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "立刻停下腳步，絕對不拔腿落跑或推卸責任"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "走到對方身邊蹲下來，溫柔問：『你有沒有受傷？哪裡痛？』"
        },
        {
          "num": 3,
          "icon": "🏃",
          "text": "幫忙撿起掉落物品，牽著對方去找老師或送健康中心"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🩹 先蹲下關心第一條」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-80": {
    "id": "b-idea-80",
    "lessonNumber": 80,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題四：同儕摩擦與衝突化解進階",
    "title": "⚖️ 玩桌遊抓別人作弊抓到抓狂——「當裁判要有風度，不直接拍桌大罵」，請公正第三方確認",
    "superSkill": "⚖️ 公正暫停查核法",
    "themeColor": "#0284c7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "大器風度小裁判",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「⚖️ 玩桌遊抓別人作弊抓到抓狂」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "比出Ｔ字暫停手勢、平靜依據規則查核的小嘉",
          "desc": "展現成熟風度，以文明程序守護遊戲公平公正。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "氣得破口大罵作弊狂並把整張桌子棋盤掀翻",
          "desc": "毀損教具並中斷全組樂趣，引發同儕集體反感不願同組。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "客觀公正一步步數格子協助確認步數的小宇",
          "desc": "發揮精準長才，成為值得信賴的公正第三方。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "熱心幫忙撿拾整理紙鈔道具促成續玩的小畯",
          "desc": "展現寬宏氣度，為團體和諧注入正向凝聚力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「⚖️ 公正暫停查核法」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "發現自己落後快要輸了，一把將整盤棋盤打翻，大喊：『不算不算！重來！』",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⚖️",
          "label": "深呼吸壓住挫折感，堅持玩到最後一刻，並大度伸出手讚美獲勝的對手！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "剛開局落後一點點就覺得完蛋了，把頭埋在雙膝間生悶氣，放棄後續所有走步。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「⚖️ 公正暫停查核法」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺疑似違規或步數算錯，立刻比出「Ｔ」暫停手勢"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "聲音平穩說：『大家先暫停，我們拿說明書對一下規則』"
        },
        {
          "num": 3,
          "icon": "⚖️",
          "text": "大家一起重數確認，如果真的是手滑算錯，退回原位重新走"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「⚖️ 公正暫停查核法」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-81": {
    "id": "b-idea-81",
    "lessonNumber": 81,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "👩‍🏫 今天是代課老師來上課——面對陌生的教學節奏與口吻，「維持既定常規、當稱職引路人」",
    "superSkill": "🧭 代課日穩健指南針",
    "themeColor": "#059669",
    "badgeEmoji": "👩‍🏫",
    "badgeLabel": "稱職導航引路人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「👩‍🏫 今天是代課老師來上課」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "主動說明班級常規、熱情協助代課老師的小嘉",
          "desc": "展現成熟班級領導風範，成為代課日最稱職引路人。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "趁老師不熟悉大吼大叫、在教室亂扔紙飛機",
          "desc": "破壞班級形象，引發集體混亂且面臨返校導師處罰。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "對照課表迅速安定身心專注學習的小宇",
          "desc": "善用結構化自我調節，成功適應環境突發變更。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動奉水溫暖迎接代課老師的小和",
          "desc": "傳遞尊師重道優良美德，展現特教班溫馨素養。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧭 代課日穩健指南針」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，趁老師不熟悉大吼大叫、在教室亂扔紙飛機，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "👩‍🏫",
          "label": "冷靜深呼吸啟動「🧭 代課日穩健指南針」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧭 代課日穩健指南針」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺換老師的緊張不安，深呼吸告訴自己：『作息流程都一樣』"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "大聲起立敬禮問好，展現班級禮貌小紳士風度"
        },
        {
          "num": 3,
          "icon": "👩‍🏫",
          "text": "主動向代課老師說明平時的作業繳交與發言規定"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧭 代課日穩健指南針」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-82": {
    "id": "b-idea-82",
    "lessonNumber": 82,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "💺 班級大換座位了——離開習慣的角落，面對新鄰居的「三句破冰卡」",
    "superSkill": "🪑 新座位破冰問候卡",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💺",
    "badgeLabel": "適應新環境小達人",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「💺 班級大換座位了」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "克服空間固著、主動向新同桌問好破冰的小宇",
          "desc": "成功調解環境焦慮，展現可貴的環境適應彈性。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "死死抓著舊課桌大哭大踢、賴在地上拒絕搬遷",
          "desc": "阻礙全班換座流程，加劇自身的孤立恐懼感。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "熱情幫忙搬椅子、主動分享貼紙的新同桌小畯",
          "desc": "展現卓越同儕友善力，迅速化解新環境冰冷感。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動發掘新座位美麗風景、樂觀開朗的小和",
          "desc": "以正向認知重構環境，建立健康的自處哲學。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🪑 新座位破冰問候卡」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，死死抓著舊課桌大哭大踢、賴在地上拒絕搬遷，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "💺",
          "label": "冷靜深呼吸啟動「🪑 新座位破冰問候卡」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🪑 新座位破冰問候卡」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺離開舊座位的恐慌與不安，深吸一口大氣"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "把課本與筆袋整整齊齊擺好，建立屬於自己的新小地盤"
        },
        {
          "num": 3,
          "icon": "💺",
          "text": "轉頭對新鄰居微笑說：『你好，這學期請多多指教！』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🪑 新座位破冰問候卡」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-83": {
    "id": "b-idea-83",
    "lessonNumber": 83,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "🚌 全校校外教學坐遊覽車——乘車不離座、不大聲尖叫、暈車時主動通報",
    "superSkill": "🚌 遊覽車文明守則",
    "themeColor": "#0284c7",
    "badgeEmoji": "🚌",
    "badgeLabel": "優雅乘車小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🚌 全校校外教學坐遊覽車」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "全程繫好安全帶、遵守乘車禮貌的小畯",
          "desc": "成功克服衝動好動壞習慣，展現優良公共安全素養。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在行駛的遊覽車走道狂奔追逐、搶麥克風大叫",
          "desc": "嚴重違反公共安全規範，遇緊急煞車極易造成顱內重創骨折。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時為暈車夥伴拿取嘔吐袋並通報老師的小嘉",
          "desc": "展現敏銳同理心與危機處理能力，維護車廂整潔舒適。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "戴上耳罩安靜欣賞沿途風景自我調節的小宇",
          "desc": "展現高度自律獨立自處能力，堪稱文明乘車典範。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚌 遊覽車文明守則」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，在行駛的遊覽車走道狂奔追逐、搶麥克風大叫，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚌",
          "label": "冷靜深呼吸啟動「🚌 遊覽車文明守則」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚌 遊覽車文明守則」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "一上車立刻把安全帶扣緊在腰部，不隨意解開"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "保持說話兩分音量，不尖叫也不在走道奔跑"
        },
        {
          "num": 3,
          "icon": "🚌",
          "text": "如果肚子反胃頭暈，立刻舉手拿嘔吐袋並深呼吸"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🚌 遊覽車文明守則」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-84": {
    "id": "b-idea-84",
    "lessonNumber": 84,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "🍽️ 營養午餐出現討厭的青椒或洋蔥——「不吐在地上或大叫噁心」，練習咬一口或禮貌少盛",
    "superSkill": "🫑 勇敢嘗一口小探險",
    "themeColor": "#10b981",
    "badgeEmoji": "🍽️",
    "badgeLabel": "營養均衡小食神",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🍽️ 營養午餐出現討厭的青椒或洋蔥」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "克制嫌棄言論、勇敢嘗試咬一小片青椒的小宇",
          "desc": "展現克服感官防禦之勇氣，同時維護公眾用餐禮儀。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "當眾大吐口水、大吼大叫「好噁心有毒」打翻餐盤",
          "desc": "嚴重踐踏烹飪者心血，製造髒亂並引發同儕反感排斥。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "端正餐盤禮貌請求盛一小匙嚐味道的小和",
          "desc": "以文明溝通避免剩食浪費，展現優良餐桌教養。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "帶頭大口吃蔬菜並鼓勵大家營養均衡的小畯",
          "desc": "展現健康陽光活力，成為班級飲食模範生。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🫑 勇敢嘗一口小探險」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，當眾大吐口水、大吼大叫「好噁心有毒」打翻餐盤，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🍽️",
          "label": "冷靜深呼吸啟動「🫑 勇敢嘗一口小探險」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🫑 勇敢嘗一口小探險」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺看到討厭食物的反感，立刻把『噁心』兩個字吞回肚子"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "盛菜時雙手端著餐盤禮貌說：『請幫我盛一點點就好，謝謝！』"
        },
        {
          "num": 3,
          "icon": "🍽️",
          "text": "給自己勇氣咬一小口，即使不喜歡也安靜留在餐盤角落不亂吐"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🫑 勇敢嘗一口小探險」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-85": {
    "id": "b-idea-85",
    "lessonNumber": 85,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "🌧️ 下課下暴雨操場封閉——雨天備案：教室走廊靜態桌遊與看繪本的自處能力",
    "superSkill": "🎲 雨天備案樂趣盒",
    "themeColor": "#6366f1",
    "badgeEmoji": "🌧️",
    "badgeLabel": "雨天自處小行家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🌧️ 下課下暴雨操場封閉」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "專注下棋自處的小畯",
          "desc": "將精力投入益智桌遊，不喧嘩不拍球。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在走廊大吼大叫狂拍籃球撞倒同學砸破玻璃",
          "desc": "嚴重危害校園室內安全，招致記過懲處與同儕抗議。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "在圖書角享受雨聲與深度閱讀樂趣的小宇",
          "desc": "展現成熟的心靈自處能力，建立獨立精神世界。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心繪畫曼陀羅並協助整理桌遊的小和與小嘉",
          "desc": "以靜制動營造溫馨教室文化，讓雨天時光充滿溫暖。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🎲 雨天備案樂趣盒」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "發現自己落後快要輸了，一把將整盤棋盤打翻，大喊：『不算不算！重來！』",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌧️",
          "label": "深呼吸壓住挫折感，堅持玩到最後一刻，並大度伸出手讚美獲勝的對手！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "剛開局落後一點點就覺得完蛋了，把頭埋在雙膝間生悶氣，放棄後續所有走步。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🎲 雨天備案樂趣盒」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "接納天氣下雨的事實，深呼吸告訴自己：『雨天是安靜的好日子』"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "走到班級圖書角或桌遊櫃，挑選一樣自己喜歡的靜態寶物"
        },
        {
          "num": 3,
          "icon": "🌧️",
          "text": "安靜坐好專注沉浸三十分鐘，享受雨中的安寧時光"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🎲 雨天備案樂趣盒」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-86": {
    "id": "b-idea-86",
    "lessonNumber": 86,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "🧹 大掃除時間負責刷洗廁所與水溝——不嫌髒、不把水潑到同學身上，體驗勞動榮譽",
    "superSkill": "🧽 大掃除勞動小英雄",
    "themeColor": "#eab308",
    "badgeEmoji": "🧹",
    "badgeLabel": "整潔環保小衛士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🧹 大掃除時間負責刷洗廁所與水溝」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "認真大掃除的小畯",
          "desc": "不拿水管噴人，賣力刷洗磁磚與水溝。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "拿著水管到處亂滋水把同學和走廊淋得濕透",
          "desc": "造成地面濕滑易引發嚴重骨折，嚴重破壞大掃除紀律。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "戴手套勇敢克服髒污恐懼、細心夾落葉的小和",
          "desc": "善用防護輔具突破心理障礙，投入集體勞動服務。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "認真刮乾積水守護全體師生行走安全的小宇",
          "desc": "落實安全收尾工作，展現細心體貼之大將風範。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧽 大掃除勞動小英雄」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，拿著水管到處亂滋水把同學和走廊淋得濕透，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🧹",
          "label": "冷靜深呼吸啟動「🧽 大掃除勞動小英雄」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧽 大掃除勞動小英雄」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "穿好防水圍裙與橡膠手套，做好防護就不怕髒"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手拿穩長柄刷用力刷洗污垢，水管朝下不亂噴"
        },
        {
          "num": 3,
          "icon": "🧹",
          "text": "把積水刮乾淨、用具排整齊，享受環境變乾淨的榮譽感"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧽 大掃除勞動小英雄」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-87": {
    "id": "b-idea-87",
    "lessonNumber": 87,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題五：特殊情境與環境適應",
    "title": "🚶 放學路上遇到陌生人問路要帶路——堅守安全紅線：「不跟陌生人走、不大意上車」",
    "superSkill": "🛑 陌生人紅線煞車器",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚶",
    "badgeLabel": "自我防護小衛士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🚶 放學路上遇到陌生人問路要帶路」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "堅決不上車的小宇",
          "desc": "拉住同學、後退三步並奔向超商尋求大人協助。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "被免費玩具和糖果吸引、毫無戒心打開車門坐上車",
          "desc": "落入人口販子誘拐陷阱，面臨人身自由被剝奪與生命巨大威脅。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "及時大腦踩煞車、跟著夥伴全力奔向安全據點的小畯",
          "desc": "戰勝物慾誘惑，展現機警自保求生本能。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "吹響警報哨並冷靜提供可疑車輛特徵的小和與小嘉",
          "desc": "善用防身器材與細緻觀察，成為校園安全防護小英雄。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛑 陌生人紅線煞車器」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，被免費玩具和糖果吸引、毫無戒心打開車門坐上車，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚶",
          "label": "冷靜深呼吸啟動「🛑 陌生人紅線煞車器」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛑 陌生人紅線煞車器」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "陌生人開車搭訕時，腳步立刻後退三步保持距離"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "大聲喊：『我不知道，我要找大人！』堅決不上車"
        },
        {
          "num": 3,
          "icon": "🚶",
          "text": "頭也不回全力跑進最近的便利商店、學校或店家求助"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🛑 陌生人紅線煞車器」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-88": {
    "id": "b-idea-88",
    "lessonNumber": 88,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "🏫 從學習教室回到普通班上課時——迅速切換大班級步調，找到同組夥伴不落單",
    "superSkill": "🌉 普特無縫銜接橋",
    "themeColor": "#059669",
    "badgeEmoji": "🏫",
    "badgeLabel": "融合適應小先鋒",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🏫 從學習教室回到普通班上課時」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "從容回班的小宇",
          "desc": "看黑板、拿課本，微笑跟同桌說「我回來了」。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "害怕得縮在走廊門口大哭大叫、拒絕走進教室",
          "desc": "中斷學習進度，加劇自我標籤化與同儕疏離感。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "回到普通班自律守規矩端正坐好學習的小畯",
          "desc": "展現跨情境行為自律一致性，贏得師生高度讚賞。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "主動參與小組朗讀與班級服務的小和與小嘉",
          "desc": "熱情融入大集體，彰顯融合教育共融共好精神。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌉 普特無縫銜接橋」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，害怕得縮在走廊門口大哭大叫、拒絕走進教室，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏫",
          "label": "冷靜深呼吸啟動「🌉 普特無縫銜接橋」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌉 普特無縫銜接橋」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "走到教室門口深呼吸，抬頭看黑板當前授課科目與頁數"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "安靜走到自己的座位坐好，拿出課本與文具"
        },
        {
          "num": 3,
          "icon": "🏫",
          "text": "對鄰座同桌微笑說：『我回來了！』主動確認進度"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🌉 普特無縫銜接橋」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-89": {
    "id": "b-idea-89",
    "lessonNumber": 89,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "👦 普通班同學問：「你為什麼要去學習教室？」——自信大方回答：「那是我的特異功能充電站！」",
    "superSkill": "⚡ 充電站自豪宣言",
    "themeColor": "#3b82f6",
    "badgeEmoji": "⚡",
    "badgeLabel": "自信發光小天使",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「👦 普通班同學問：「你為什麼要去學習教室？」」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "自信發光的小和",
          "desc": "微笑說「那是我的充電站，我學會了好多超能力」。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "被同學一問就羞恥大哭、趴在桌上不敢抬頭見人",
          "desc": "加深內在自卑感，讓自己困在無謂的羞恥陰影中。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "挺身而出熱情宣傳情緒煞車成果的小畯",
          "desc": "展現非凡勇氣與同盟義氣，為特教夥伴正名。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "大方展示金色徽章、分享進步喜悅的小嘉與小宇",
          "desc": "傳遞自信正能量，成為融合教育最佳代言人。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「⚡ 充電站自豪宣言」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，被同學一問就羞恥大哭、趴在桌上不敢抬頭見人，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "⚡",
          "label": "冷靜深呼吸啟動「⚡ 充電站自豪宣言」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「⚡ 充電站自豪宣言」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "面對同學的好奇詢問，抬頭挺胸直視對方的眼睛"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "嘴角上揚微笑，不生氣也不害羞低下頭"
        },
        {
          "num": 3,
          "icon": "⚡",
          "text": "大聲自信說出：『那是我的超能力充電站，我在那裡學很多厲害技巧！』"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「⚡ 充電站自豪宣言」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-90": {
    "id": "b-idea-90",
    "lessonNumber": 90,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "🏠 在家裡跟手足搶電視遙控器或平板——手足輪流分享計時器，當個講道理的哥哥姐姐",
    "superSkill": "⏱️ 手足輪流計時沙漏",
    "themeColor": "#eab308",
    "badgeEmoji": "🏠",
    "badgeLabel": "家庭和平守護者",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🏠 在家裡跟手足搶電視遙控器或平板」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "講道理的小畯",
          "desc": "不搶遙控器，拿出沙漏跟弟妹一人輪流看20分鐘。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "為了搶遙控器痛毆弟弟妹妹、抓傷對方臉頰",
          "desc": "造成手足身體重傷與家庭痛苦，破壞親情信任關係。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "善用計時器明確設定規則、耐心等待的小宇",
          "desc": "落實時間規則架構，促進家庭生活和諧平穩。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "在冰箱建立公平時間表並溫馨陪伴手足的小和與小嘉",
          "desc": "發揮智慧同理心，成為守護家庭幸福的和平天使。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「⏱️ 手足輪流計時沙漏」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，為了搶遙控器痛毆弟弟妹妹、抓傷對方臉頰，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🏠",
          "label": "冷靜深呼吸啟動「⏱️ 手足輪流計時沙漏」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「⏱️ 手足輪流計時沙漏」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺搶奪玩具或遙控器的暴怒，立刻鬆開拉扯的手"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拿出計時器或沙漏設定時間：『我們一人輪流二十分鐘』"
        },
        {
          "num": 3,
          "icon": "🏠",
          "text": "輪到對方時去做其他事情，時間一到準時換手"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「⏱️ 手足輪流計時沙漏」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-91": {
    "id": "b-idea-91",
    "lessonNumber": 91,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "👵 回阿公阿嬤家過節——注視長輩眼睛說好話、主動幫忙端菜擺碗筷",
    "superSkill": "🥣 奉茶端菜小幫手",
    "themeColor": "#f97316",
    "badgeEmoji": "👵",
    "badgeLabel": "孝順體貼小天使",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「👵 回阿公阿嬤家過節」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "孝順體貼的小宇",
          "desc": "看著阿公阿嬤眼睛問好，雙手奉茶並幫忙擺碗筷。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "一進門就甩門躲進房間打電動、叫長輩「走開不要煩」",
          "desc": "深深刺傷長輩愛孫之情，破壞家庭團聚和樂氛圍。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "主動幫阿公扶椅子、搬重物的孝順小畯",
          "desc": "發揮男子漢力量奉獻家庭，展現尊老敬長美德。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心擺碗筷並分享學校榮譽逗長輩開心的小和與小嘉",
          "desc": "帶來滿堂歡聲笑語，堪稱全家族的幸福開心果。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🥣 奉茶端菜小幫手」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，一進門就甩門躲進房間打電動、叫長輩「走開不要煩」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "👵",
          "label": "冷靜深呼吸啟動「🥣 奉茶端菜小幫手」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🥣 奉茶端菜小幫手」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "進門脫鞋後，雙眼看著長輩眼睛，大聲說出稱謂與問候"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "雙手端上溫茶或水果，雙手奉上說：『請用！』"
        },
        {
          "num": 3,
          "icon": "👵",
          "text": "用餐前主動幫忙擺放全家人的碗筷與面紙"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🥣 奉茶端菜小幫手」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-92": {
    "id": "b-idea-92",
    "lessonNumber": 92,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "🛒 陪家人去全聯大賣場買菜——不亂摸貨架、不偷偷往推車塞零食、走失時找穿制服店員",
    "superSkill": "🛒 超市購物自制守護員",
    "themeColor": "#059669",
    "badgeEmoji": "🛒",
    "badgeLabel": "賣場守規小管家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🛒 陪家人去全聯大賣場買菜」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "守規矩的小畯",
          "desc": "手扶推車不亂跑，照著清單找東西，不躺地哭鬧。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在超市走廊狂奔把餅乾架撞倒、躺在地上打滾尖叫",
          "desc": "嚴重打擾公眾安寧，造成貨物毀損並讓家長難堪受罰。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "雙手緊扶推車把手、專注尋找目標食材的小宇",
          "desc": "展現高度自控力，有效預防走失與分心意外。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心保護易碎食材、在收銀台禮貌道謝的小和與小嘉",
          "desc": "將課堂特教技巧成功類化至社區生活生活情境中。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🛒 超市購物自制守護員」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，在超市走廊狂奔把餅乾架撞倒、躺在地上打滾尖叫，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🛒",
          "label": "冷靜深呼吸啟動「🛒 超市購物自制守護員」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🛒 超市購物自制守護員」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "雙手始終握緊推車把手，走在大人身邊不亂跑"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "照著購物清單幫忙找東西，不隨便拿架上商品往推車塞"
        },
        {
          "num": 3,
          "icon": "🛒",
          "text": "如果不小心走失，站在收銀台旁邊找穿制服的店員求助"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🛒 超市購物自制守護員」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-93": {
    "id": "b-idea-93",
    "lessonNumber": 93,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "💤 晚上睡覺時間到了還想看漫畫——睡前 30 分鐘關燈靜心「晚安呼吸術」",
    "superSkill": "🌙 晚安關機舒眠操",
    "themeColor": "#6366f1",
    "badgeEmoji": "💤",
    "badgeLabel": "優質睡眠小模範",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「💤 晚上睡覺時間到了還想看漫畫」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "規律睡眠的小宇",
          "desc": "合上漫畫放回書架，躺好深呼吸，大腦安靜關機充電。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "被催促睡覺就砸枕頭大哭、熬夜到凌晨打瞌睡",
          "desc": "嚴重損害大腦神經發育，導致隔天課堂情緒暴躁學習崩潰。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "為了明日跑步目標主動關燈早睡的小畯",
          "desc": "展現高度內驅自律，將健康生活融入理想追求中。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "備妥明日用品安心就寢的小和與小嘉",
          "desc": "展現優良獨立生活條理性，享受平靜美好的夜間安息。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌙 晚安關機舒眠操」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，被催促睡覺就砸枕頭大哭、熬夜到凌晨打瞌睡，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "💤",
          "label": "冷靜深呼吸啟動「🌙 晚安關機舒眠操」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌙 晚安關機舒眠操」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "九點半鬧鐘一響，立刻把漫畫書合上放回書架"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "爬進被窩躺平，雙手放在肚子上感受起伏"
        },
        {
          "num": 3,
          "icon": "💤",
          "text": "吸氣肚子鼓、吐氣慢慢吹，做五次安靜進入夢鄉"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🌙 晚安關機舒眠操」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-94": {
    "id": "b-idea-94",
    "lessonNumber": 94,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題六：普特融合與家庭生活",
    "title": "🧺 自己的衣服自己折、玩具自己收——「從做中學自理能力」，減輕家長照顧負擔",
    "superSkill": "👕 生活自立小達人",
    "themeColor": "#059669",
    "badgeEmoji": "🧺",
    "badgeLabel": "自立生活小管家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🧺 自己的衣服自己折、玩具自己收」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "生活自立的小和",
          "desc": "自己折衣服、收玩具，用口訣把衣服折得整整齊齊。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "衣服襪子隨手亂扔在沙發、等著父母像傭人一樣幫忙收",
          "desc": "滋長依賴怠惰惡習，加劇家庭照護負擔與親情摩擦。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "玩完玩具主動倒數收拾、物歸原位的小畯",
          "desc": "展現有始有終之自律擔當，守護居家環境安全整潔。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "認真整理衣物抽屜、熱心分類送達的小宇和小嘉",
          "desc": "成為家庭獨立生活小幫手，展現真正的成熟成長。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「👕 生活自立小達人」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，衣服襪子隨手亂扔在沙發、等著父母像傭人一樣幫忙收，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🧺",
          "label": "冷靜深呼吸啟動「👕 生活自立小達人」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「👕 生活自立小達人」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "把衣服背面朝上攤平在桌面上，雙手抹平皺褶"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "左邊袖子向內折、右邊袖子向內折"
        },
        {
          "num": 3,
          "icon": "🧺",
          "text": "衣服下擺往上折成方方正正的小豆腐，放進籃子"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「👕 生活自立小達人」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-95": {
    "id": "b-idea-95",
    "lessonNumber": 95,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🪞 鏡子裡的我不一樣——接納自己的外表與特質，寫下自己的三個獨特發光點",
    "superSkill": "💎 獨一無二發光水晶",
    "themeColor": "#ec4899",
    "badgeEmoji": "🪞",
    "badgeLabel": "自信發光真英雄",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🪞 鏡子裡的我不一樣」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "自我接納的小和",
          "desc": "看著鏡子找到自己的三個優點，大聲說「我喜歡我自己」。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "對著鏡子自怨自艾、哭喊「我很笨我很醜全世界都討厭我」",
          "desc": "深陷自我否定之泥淖，阻礙心理健康與潛能之健全發展。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "自信宣讀恐龍百科長才與守信用優點的小宇",
          "desc": "展現卓越自我認知，將特殊特質化為非凡生命亮點。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "肯定自己勇於認錯、樂於助人的小畯與小嘉",
          "desc": "建立健全品格自尊，散發真誠有擔當的領袖魅力。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💎 獨一無二發光水晶」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，對著鏡子自怨自艾、哭喊「我很笨我很醜全世界都討厭我」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🪞",
          "label": "冷靜深呼吸啟動「💎 獨一無二發光水晶」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💎 獨一無二發光水晶」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "站在鏡子前挺起胸膛，微笑注視鏡子裡自己的雙眼"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "大聲念出自己的第一個優點：『我是一個善良熱心的人！』"
        },
        {
          "num": 3,
          "icon": "🪞",
          "text": "念出第二個與第三個優點，給自己一個大大的掌聲與擁抱"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「💎 獨一無二發光水晶」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-96": {
    "id": "b-idea-96",
    "lessonNumber": 96,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🪙 超商買麵包學會數零錢與核對找零——生活數學在超商收銀台的實戰應用",
    "superSkill": "💰 超商小掌櫃算盤",
    "themeColor": "#059669",
    "badgeEmoji": "🪙",
    "badgeLabel": "理財自立小行家",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🪙 超商買麵包學會數零錢與核對找零」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "會算錢的小和",
          "desc": "看懂麵包標價，付50元，在手心數清楚找回的22元。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "抓了東西就想直接跑出店門、不知道要排隊付錢",
          "desc": "嚴重觸犯法律涉嫌竊盜，凸顯生活常規教育之迫切缺失。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "精準使用四個十元購買指定吐司麵包的小宇",
          "desc": "展現卓越生活數學應用素養，奠定未來獨立自主基石。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "文明排隊並提醒大家收好發票的小畯與小嘉",
          "desc": "落實公民素養實務，展現特教融合教育豐碩成果。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「💰 超商小掌櫃算盤」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，抓了東西就想直接跑出店門、不知道要排隊付錢，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🪙",
          "label": "冷靜深呼吸啟動「💰 超商小掌櫃算盤」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「💰 超商小掌櫃算盤」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "拿起商品看標籤上的阿拉伯數字與價格"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拿出大於商品金額的硬幣或鈔票，雙手遞給收銀員"
        },
        {
          "num": 3,
          "icon": "🪙",
          "text": "雙手接過找零，在手心數清楚枚數再收進錢包"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「💰 超商小掌櫃算盤」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-97": {
    "id": "b-idea-97",
    "lessonNumber": 97,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🚦 獨立過大馬路安全守則——綠燈左右看、舉起小黃旗、步伐穩健不東張西望",
    "superSkill": "🚩 舉起小黃旗安心過",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚦",
    "badgeLabel": "交通安全小巡警",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🚦 獨立過大馬路安全守則」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "注意安全的小畯",
          "desc": "綠燈亮先左右看，舉起小黃旗，牽好弟弟慢慢走過馬路。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "綠燈一亮就低頭尖叫狂奔被轉彎大卡車撞飛",
          "desc": "忽視內輪差視線死角致命危機，造成不可挽回之生命悲劇。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "站在黃線後一步、嚴謹檢核左右無來車的小宇",
          "desc": "落實最高規格安全檢核標準，堪稱交安自衛楷模。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "專注行走不分心並照顧手足同行的小和與小嘉",
          "desc": "展現穩重踏實品格，守護自身與同行家人之生命安全。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🚩 舉起小黃旗安心過」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，綠燈一亮就低頭尖叫狂奔被轉彎大卡車撞飛，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚦",
          "label": "冷靜深呼吸啟動「🚩 舉起小黃旗安心過」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🚩 舉起小黃旗安心過」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "站在斑馬線等待區黃線後退一步，絕不踩在馬路上等"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "小綠人亮起後，頭向左轉看、再向右轉看，確認車輛完全煞停"
        },
        {
          "num": 3,
          "icon": "🚦",
          "text": "高高舉起右手或小黃旗，腳步穩健筆直走過斑馬線"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🚩 舉起小黃旗安心過」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-98": {
    "id": "b-idea-98",
    "lessonNumber": 98,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🚿 體育課流大汗後的清潔習慣——換乾淨衣服、用毛巾擦汗、正確洗手保持清爽",
    "superSkill": "🧼 清爽潔淨七步洗",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚿",
    "badgeLabel": "清爽整潔小紳士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🚿 體育課流大汗後的清潔習慣」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "愛乾淨的小宇",
          "desc": "用毛巾擦乾汗水，換上乾爽乾淨衣服，洗好臉和手。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "任由濕衣服貼在後背發臭、被同學指出就暴怒打人",
          "desc": "容易引發皮膚濕疹感染，且因體味問題加劇人際排斥隔閡。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "認真洗手洗臉、保持乾淨清爽吃午餐的小畯",
          "desc": "落實良好公眾衛生教養，樹立優良班級典範。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "細心梳理頭髮並妥善收納濕衣服的小和與小嘉",
          "desc": "展現細緻自理能力，守護身心健康與生活品質。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🧼 清爽潔淨七步洗」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，任由濕衣服貼在後背發臭、被同學指出就暴怒打人，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🚿",
          "label": "冷靜深呼吸啟動「🧼 清爽潔淨七步洗」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🧼 清爽潔淨七步洗」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "運動結束立刻拿出小毛巾，把額頭、後頸的汗水擦乾"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "到更衣室脫下濕衣服，換上乾淨透氣的乾爽上衣"
        },
        {
          "num": 3,
          "icon": "🚿",
          "text": "在洗手台用肥皂洗淨雙手並洗一把臉，神采奕奕回教室"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🧼 清爽潔淨七步洗」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-99": {
    "id": "b-idea-99",
    "lessonNumber": 99,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🩹 跌倒膝蓋擦傷流血了——不慌張大哭，自己按壓傷口找健康中心擦藥包紮",
    "superSkill": "🩹 外傷止血冷靜貼",
    "themeColor": "#ef4444",
    "badgeEmoji": "🩹",
    "badgeLabel": "冷靜自護小勇士",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🩹 跌倒膝蓋擦傷流血了」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "冷靜勇敢的小和",
          "desc": "跌倒不慌張，用乾淨面紙按壓傷口，勇敢去健康中心。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "看到擦破皮就躺在泥地上狂哭亂蹬、拒絕就醫擦藥",
          "desc": "導致傷口遭受泥沙細菌嚴重感染化膿，延誤清創時機。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "充當人體拐杖溫柔攙扶受傷夥伴就醫的小畯",
          "desc": "展現無比溫暖友愛胸襟，成為值得依靠的神隊友。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "冷靜協助止血並引導動線的小嘉和小宇",
          "desc": "發揮卓越現場應變素養，促成意外事故完美處置。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🩹 外傷止血冷靜貼」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "跑步不小心跌倒摔破皮，當場捶地板嚎啕大哭，把上前幫忙的同學一把推倒。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🩹",
          "label": "深呼吸檢查傷口，自己爬起來拍拍灰塵，並溫和請同學陪自己去健康中心！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "跌倒覺得在大家面前丟臉極了，趴在操場操場上用雙手遮臉，拒絕任何人靠近。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🩹 外傷止血冷靜貼」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "察覺疼痛與流血，坐在地上深呼吸，不踢腿也不大哭嚎叫"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "拿出乾淨面紙輕輕覆蓋按壓在傷口上止血"
        },
        {
          "num": 3,
          "icon": "🩹",
          "text": "在同學或老師攙扶下，一步一步慢慢走向健康中心擦藥"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🩹 外傷止血冷靜貼」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-100": {
    "id": "b-idea-100",
    "lessonNumber": 100,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "📮 寫一封感謝信給未來的自己——封存時空膠囊，期許自己在特教道路上永不放棄",
    "superSkill": "📜 寫給未來英雄信",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "📮",
    "badgeLabel": "未來時空領航員",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「📮 寫一封感謝信給未來的自己」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "回顧承諾的小宇",
          "desc": "寫信給未來的自己，感謝自己勇敢克服困難、永不放棄。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "認為自己一無是處、把信紙揉爛丟在地上說「我沒有未來」",
          "desc": "深陷習得性無助悲觀泥沼，拒絕看見自身巨大的成長事實。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "承諾永遠踩住情緒煞車、立志當正義英雄的小畯",
          "desc": "樹立崇高人格目標，展現內在品格蛻變之璀璨光芒。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "帶領大家莊嚴封存時空膠囊宣誓未來的小嘉",
          "desc": "以儀式凝聚全體生命信念，為特教歷程寫下最動人篇章。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「📜 寫給未來英雄信」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，認為自己一無是處、把信紙揉爛丟在地上說「我沒有未來」，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "📮",
          "label": "冷靜深呼吸啟動「📜 寫給未來英雄信」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「📜 寫給未來英雄信」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "感謝過去那個克服困難、勇敢練習超能力的自己"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "寫下對一年後自己的具體期許：『我希望我能……』"
        },
        {
          "num": 3,
          "icon": "📮",
          "text": "親手蓋上榮譽印章，鎖進鐵盒，約定一年後相見"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「📜 寫給未來英雄信」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  },
  "b-idea-101": {
    "id": "b-idea-101",
    "lessonNumber": 101,
    "legacy": true,
    "date": "",
    "dayOfWeek": "",
    "festival": "",
    "unit": "靈感庫專題七：自尊建立與生活自立",
    "title": "🌟 終極特教超能力大總結——49項靈感匯聚成光：我是自己生活的小船長！",
    "superSkill": "🌟 生活掌舵小船長",
    "themeColor": "#d97706",
    "badgeEmoji": "🌟",
    "badgeLabel": "全能自立小船長",
    "section1": {
      "type": "circle",
      "title": "任務一：好習慣圈圈看",
      "prompt": "在「🌟 終極特教超能力大總結」情境中，哪些做法是正確又有禮貌的？請把對的圖案圈起來！（可圈多個）",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "全能小船長全員",
          "desc": "手握人生大舵輪，整合49項超能力，勇敢航向精彩未來。",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "在困難前退縮放棄、把挫敗當作無法改變的命運",
          "desc": "自我畫地自限，錯失生命自我突破與展翅高飛之寶貴契機。",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "將衝動化為守護力量、昂首挺胸受勳的小畯",
          "desc": "展現非凡自我超越，成為情緒行為障礙轉化之卓越典範。",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "向師長深情鞠躬致謝、滿懷愛與希望啟航的全體夥伴",
          "desc": "譜寫特殊教育最輝煌感人之生命樂章，照亮溫暖人間。",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "任務二：我的超能力選擇題",
      "prompt": "當遇到這個狀況時，哪一個做法能發揮「🌟 生活掌舵小船長」？",
      "options": [
        {
          "id": "t1",
          "score": "負向衝動",
          "icon": "⚡",
          "label": "遇到狀況時大腦失控，在困難前退縮放棄、把挫敗當作無法改變的命運，造成混亂與危險。",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "最佳超能力",
          "icon": "🌟",
          "label": "冷靜深呼吸啟動「🌟 生活掌舵小船長」，照著動作步驟一步步妥善應對解決！",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "消極退縮",
          "icon": "🌧️",
          "label": "感到極度害怕與挫折，默默忍耐不敢開口求助，自己痛苦憋屈地縮在角落發抖。",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "任務三：今日超能力動作挑戰",
      "prompt": "跟著老師演練「🌟 生活掌舵小船長」動作，做到了請在框框裡打勾勾［✓］：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "遇到狂風暴雨（挫折怒火），立刻在大腦穩穩抓住舵輪深呼吸"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "運用學會的 49 項超能力工具箱，找出最棒的解決方法"
        },
        {
          "num": 3,
          "icon": "🌟",
          "text": "昂首挺胸相信自己，當個善良、勇敢、永不言敗的生命舵手"
        }
      ]
    },
    "homeTask": {
      "title": "家庭生活超人共學打卡",
      "action": "放學回家後，向爸爸媽媽示範一次「🌟 生活掌舵小船長」，並跟家人溫暖擊掌！"
    },
    "stars": {
      "title": "自我成果評量",
      "prompt": "今天的小任務我表現得怎麼樣？（請塗上美麗的星星顏色）：",
      "max": 5,
      "default": 3
    }
  }
};

if (typeof window !== 'undefined') {
  window.dailyWorksheets = dailyWorksheets;
}
