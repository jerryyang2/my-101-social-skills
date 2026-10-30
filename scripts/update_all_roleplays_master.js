const fs = require("fs");
const path = require("path");
const vm = require("vm");

const filePath = path.join(__dirname, "../備課平台/roleplay-data.js");
const originalCode = fs.readFileSync(filePath, "utf8");

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(originalCode, sandbox);

const roleplays = sandbox.window.dailyRoleplays;

const allUpdates = {
  // NOVEMBER UPDATES
  "b-2026-11-10": {
    "id": "b-2026-11-10",
    "date": "2026-11-10",
    "dayOfWeek": "星期二",
    "unit": "第四單元：同儕合作與分享藝術",
    "title": "團體積木大工程——一人一塊不爭搶",
    "scenario": "四大箱磁力片要合力蓋出火星太空站，大家一開始想搶最多磁力片，工程差點停擺！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "太空站總建築師 · 小宇",
        "action": "按照設計圖指示，把方形磁力片排在底座，清楚分配大家負責的區塊。",
        "dialogue": "我們照設計圖輪流拿磁力片，我蓋發射台，小畯蓋火箭機翼，大家一起完成！",
        "tip": "引導宇透過視覺分工圖卡帶領同儕合作。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "控制搶零件手的小畯",
        "action": "縮回想把全部磁力片抱在懷裡的手，拿了三片紅色磁力片，專心組裝火箭推進器。",
        "dialogue": "我只要拿我需要的這幾塊！一人蓋一部分，合起來才是最大的火星基地！",
        "tip": "引導畯練習材料分享與自我克制。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "零件補給支援官 · 小和",
        "action": "將散落各處的磁力片依照顏色分類排好，主動遞送適合的零件給隊友。",
        "dialogue": "小宇你需要黃色三角形嗎？我幫你找好了，推進器裝上這個最堅固！",
        "tip": "引導和發揮細心分類與補給支援優勢。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "火箭升空總指揮 · 小嘉",
        "action": "在太空站頂端插上金色國旗，帶領全體隊員倒數拍手慶祝完工。",
        "dialogue": "輪流拿、不爭搶，我們的火星太空站超級堅固！全員登陸火星大成功！",
        "tip": "引導嘉肯定團隊分享與協作的輝煌成果。"
      }
    ]
  },
  "b-2026-11-11": {
    "id": "b-2026-11-11",
    "date": "2026-11-11",
    "dayOfWeek": "星期三",
    "unit": "第四單元：同儕合作與分享藝術",
    "title": "讚美放大鏡——看見同儕優點並真誠說出來",
    "scenario": "小刺蝟總覺得自己不受歡迎，貓頭鷹校長拿出讚美放大鏡，引導大家尋找彼此的閃光點！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "發現同儕亮點的小宇",
        "action": "拿起金邊放大鏡看著小畯，眼神真誠，大聲說出小畯今天最棒的優點。",
        "dialogue": "小畯，我看見你今天排隊時主動幫大家拿課本，你真的好熱心又大方！",
        "tip": "引導宇練習具體指認同儕行為優點並大方口語表達。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "開心接受並回饋的小畯",
        "action": "挺起胸膛微笑，轉身對著小和豎起大拇指，聲音宏亮給予讚美。",
        "dialogue": "謝謝小宇！我也要用放大鏡讚美小和，你畫的藏寶圖線條好漂亮！",
        "tip": "引導畯從被讚美中體驗喜悅，主動給予他人善意反饋。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "溫暖尋找善意的小和",
        "action": "雙手捧著放大鏡對著小嘉微笑，輕輕道出心底觀察到的貼心之處。",
        "dialogue": "小嘉每天早上都會笑瞇瞇跟我說早安，你的笑容像太陽一樣溫暖！",
        "tip": "引導和細膩覺察日常人際互動中的溫暖細節。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "讚美泡泡收集官 · 小嘉",
        "action": "在班級讚美樹上貼上三顆金色果實，帶動全班給予真誠的掌聲。",
        "dialogue": "讚美就像神奇魔法糖果，說出口的人快樂，聽到的人心裡更甜！",
        "tip": "引導嘉強化正向口語回饋在人際團體中的黏著度。"
      }
    ]
  },
  "b-2026-11-12": {
    "id": "b-2026-11-12",
    "date": "2026-11-12",
    "dayOfWeek": "星期四",
    "unit": "第四單元：同儕合作與分享藝術",
    "title": "接受讚美不害羞——大方說「謝謝你」",
    "scenario": "小刺蝟穿著新恐龍外套被同學大聲讚美，害羞得把頭縮進兜帽裡不敢看人！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "示範大方道謝的小宇",
        "action": "眼神直視讚美自己的同儕，嘴角微微上揚，雙手自然垂放，聲音清晰。",
        "dialogue": "當別人稱讚我時，我不躲也不逃，我挺起胸膛微笑說：謝謝你，我也很喜歡！",
        "tip": "引導宇克服社交害羞焦慮，建立「眼神注視＋微笑說謝謝」的標準應對。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "克服臉紅的小畯",
        "action": "把拉鍊拉正，露出自信的笑容，雙手向同儕比出友好的感謝手勢。",
        "dialogue": "哈哈！這件外套我真的很喜歡，謝謝你的欣賞，聽到你的讚美我好開心！",
        "tip": "引導畯將害羞轉換為大方自信的社交接納。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "溫和陪伴鼓勵的小和",
        "action": "輕輕拍拍同儕的手臂，溫柔注視對方，給予最安全的社交支持。",
        "dialogue": "你的外套真的很帥氣！不用害羞，大方收下讚美是世界上最棒的禮物！",
        "tip": "引導和發揮同儕安定陪伴力量，降低社交退縮。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "自信收禮見證官 · 小嘉",
        "action": "拿出「落落大方獎牌」掛在同學脖子上，帶領全體擊掌鼓勵。",
        "dialogue": "不低頭、不扭捏，大方說聲謝謝你！自信的小英雄最閃閃發光！",
        "tip": "引導嘉強化接納讚美的正向自我價值感。"
      }
    ]
  },
  "b-2026-11-13": {
    "id": "b-2026-11-13",
    "date": "2026-11-13",
    "dayOfWeek": "星期五",
    "unit": "第四單元：同儕合作與分享藝術",
    "title": "同儕合作大闖關——配合隊友速度的協調術",
    "scenario": "兩人三腳運球闖關賽，跑得快的小獵豹和走得慢的小樹懶綁在同一組，差點摔倒！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "數拍子配速的小宇",
        "action": "轉頭看著身旁隊友的步伐，手扶著隊友的肩膀，大聲喊出一致的口令。",
        "dialogue": "一二、一二！我們看著彼此的腳步，配合拍子一起踩，不要急慢慢走！",
        "tip": "引導宇透過「聽口令、看腳步」的節奏控制促進動作協調。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "按下減速煞車的小畯",
        "action": "壓下急著往前衝的躁動，配合搭檔的步幅放慢速度，穩住兩人的平衡。",
        "dialogue": "好！我把腳步放慢！兩人三腳不是比誰快，兩個人都不跌倒才能贏！",
        "tip": "引導畯學會在團體競爭中克制衝刺慾望，主動配合慢速隊友。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "默契步伐搭檔 · 小和",
        "action": "穩穩邁開右腳，依照節奏「左、右、左、右」，雙手緊緊護住運送的大彈力球。",
        "dialogue": "我配合小畯的口令踩下去！球抱緊了，我們兩個人像一台大戰車一樣穩！",
        "tip": "引導和提升動作計畫能力與同儕默契。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "步調協調裁判長 · 小嘉",
        "action": "在終點線揮動彩色旗幟，迎接順利跨過終點的搭檔，熱烈宣布闖關成功。",
        "dialogue": "快不一定會贏，默契好才是第一名！配合隊友速度，兩人三腳全員過關！",
        "tip": "引導嘉肯定同儕合作中的協調美德。"
      }
    ]
  },
  "b-2026-11-18": {
    "id": "b-2026-11-18",
    "date": "2026-11-18",
    "dayOfWeek": "星期三",
    "unit": "第六單元：人際修復與和解藝術",
    "title": "當別人跟你說對不起——寬容的原諒密碼",
    "scenario": "心愛的金色旋轉鉛筆被借用的同學不小心扭斷機芯，對方誠懇鞠躬道歉並拿出新筆賠償！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "寬容原諒的小宇",
        "action": "深吸一口氣，將手輕輕放在胸口撫平心疼，接過道歉同儕的手，眼神溫柔微笑。",
        "dialogue": "雖然筆壞了我很心疼，但我看見你的誠意了！沒關係，我原諒你，我們還是好朋友！",
        "tip": "引導宇在受到同儕實質補償與誠懇道歉時，說出「沒關係、我原諒你」的寬容句型。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "誠懇補償的小畯",
        "action": "雙手恭敬捧著全新的自動鉛筆，向小宇深深鞠躬，態度誠懇不推諉責任。",
        "dialogue": "小宇對不起！這是我買來賠給你的新筆，謝謝你的寬容，我下次一定會好好愛惜！",
        "tip": "引導畯面對過失時展現負責任的承擔與補償態度。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "友誼膠水 · 小和",
        "action": "雙手把兩位同學的手輕輕牽在一起，露出安心燦爛的微笑。",
        "dialogue": "勇於認錯很勇敢，大方原諒最溫暖！金色鉛筆壞了，換來更堅固的友誼！",
        "tip": "引導和感受人際和解後的正向團結力量。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "和解榮譽大使 · 小嘉",
        "action": "在班級修復角貼上象徵原諒的彩虹徽章，帶領大家給予掌聲鼓勵。",
        "dialogue": "OO國小學習教室最珍貴的寶物不是筆，而是彼此包容的心！和解大成功！",
        "tip": "引導嘉總結同儕和解對團體氛圍的深遠益處。"
      }
    ]
  },
  "b-2026-11-19": {
    "id": "b-2026-11-19",
    "date": "2026-11-19",
    "dayOfWeek": "星期四",
    "unit": "第六單元：人際修復與和解藝術",
    "title": "走廊與操場安全界線——開玩笑的底線",
    "scenario": "小玲心愛的粉紅便當袋被調皮同學掛在三公尺高的黑板上，急得在教室大哭！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "守護同儕界線的小宇",
        "action": "站在哭泣的小玲身旁，把雙手平舉擋在中間，嚴肅且堅定地面向開玩笑的同學。",
        "dialogue": "開玩笑是要別人和你一起笑！如果別人哭了這不是好玩，請立刻拿下來！",
        "tip": "引導宇建立「好玩的界線在於對方是否舒服」的道德判斷力。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "幫忙取下便當袋的小畯",
        "action": "走到黑板前小心踮起腳尖，把掛在上面的便當袋輕輕取下來，雙手奉還給小玲。",
        "dialogue": "對不起！我們以後不開這種玩笑了！小玲你不要哭，便當袋拿回來了！",
        "tip": "引導畯察覺越界惡作劇的傷害，主動採取補救行動。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "遞面紙安撫的小和",
        "action": "抽出一張乾淨面紙遞給小玲，幫忙拍掉便當袋上的粉筆灰，輕聲安慰。",
        "dialogue": "小玲擦擦眼淚，便當袋乾乾淨淨沒有壞掉，我們一起回座位吃午餐！",
        "tip": "引導和提供受挫同儕情緒安撫與具體照料。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "玩笑紅綠燈檢察官 · 小嘉",
        "action": "在黑板畫出紅燈標誌，向全班宣導玩笑的底線與界線原則。",
        "dialogue": "別人痛苦不是幽默！尊重彼此的感受，守住安全紅線，才是真正的男子漢！",
        "tip": "引導嘉清晰總結群體人際尊重的底線。"
      }
    ]
  },
  "b-2026-11-20": {
    "id": "b-2026-11-20",
    "date": "2026-11-20",
    "dayOfWeek": "星期五",
    "unit": "第六單元：人際修復與和解藝術",
    "title": "校園法庭模擬——和平解決問題小法官",
    "scenario": "操場唯一搶手的大鳥巢鞦韆，兩位同學同時衝過去抓住繩子，互不相讓差點扭打！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "提出公平輪流方案的小宇",
        "action": "拿出計時沙漏放在長椅上，站在兩位爭執同學中間，冷靜提出輪流規則。",
        "dialogue": "我們不要打架！全校只有一個鳥巢鞦韆，我們用沙漏計時，一人蕩三分鐘！",
        "tip": "引導宇運用視覺化計時工具作為客觀仲裁媒介。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "克制揮拳衝動的小畯",
        "action": "把快要抓住對方衣領的手收回來，大口深呼吸，同意坐下來猜拳決定先後順序。",
        "dialogue": "好！我們猜拳決定誰先盪！剪刀石頭布，贏的先盪三分鐘，輸的不許耍賴！",
        "tip": "引導畯練習接受遊戲規則仲裁，化解肢體衝突。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "公正翻轉沙漏的小和",
        "action": "坐在長椅上專心看著沙漏細沙流動，微笑為正在盪鞦韆的同學輕輕推一把。",
        "dialogue": "沙漏開始跑了！大家安心盪，時間到了我會提醒，每個人都能享受飛翔！",
        "tip": "引導和在同儕紛爭中扮演公正客觀的計時與服務角色。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "和平小法官 · 小嘉",
        "action": "敲擊班級法槌三次，宣布衝突和平圓滿解決，雙方握手和解。",
        "dialogue": "搶奪只會兩敗俱傷，輪流才能一起快樂！校園法庭裁決：和平共享大獲全勝！",
        "tip": "引導嘉鞏固法理與規則意識對人際衝突的解套功能。"
      }
    ]
  },
  "b-2026-11-25": {
    "id": "b-2026-11-25",
    "date": "2026-11-25",
    "dayOfWeek": "星期三",
    "unit": "第五單元：人際界線與情緒自主",
    "title": "尊重別人的「不」——不強求才是真朋友",
    "scenario": "小猴子熱情地想找同學玩搔癢遊戲，小宇大喊「不要」，對方卻繼續追著抓腰！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "堅定說不的小宇",
        "action": "雙手在胸前比出一個大大的叉叉，身體往後退一步，雙眼堅定直視對方，聲音宏亮。",
        "dialogue": "請立刻停手！我不喜歡被搔癢！我說了「不要」，你必須立刻停止動作！",
        "tip": "引導宇練習身體自主權界線的堅定口語表達。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "立刻煞車收手的小畯",
        "action": "聽到明確拒絕後，雙手立刻舉高表示停手，向後退兩步，態度誠懇道歉。",
        "dialogue": "對不起！我聽見你說不要了，我馬上停下來！我下次會先問你的同意再玩！",
        "tip": "引導畯內化「聽到不就要立刻停手」的身體社交煞車。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "尊重界線的小和",
        "action": "走上前溫和提醒同儕，並提議改玩雙方都感到舒服安全的拍手遊戲。",
        "dialogue": "每個人身體都有紅綠燈，朋友說不要就要尊重他，我們改玩別的遊戲吧！",
        "tip": "引導和以身體紅綠燈隱喻強化人際界線觀念。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "身體界線防護官 · 小嘉",
        "action": "頒發「懂得尊重安全徽章」貼在同學身上，總結友誼真諦。",
        "dialogue": "尊重別人的「不」，才是真朋友的表現！守護彼此界線，友誼才能長長久久！",
        "tip": "引導嘉強化拒絕與被拒絕時雙向尊重的成熟心態。"
      }
    ]
  },
  "b-2026-11-26": {
    "id": "b-2026-11-26",
    "date": "2026-11-26",
    "dayOfWeek": "星期四",
    "unit": "第五單元：人際界線與情緒自主",
    "title": "秘密與安全警報——不能說的秘密 vs 必須說的危險",
    "scenario": "放學時圍牆外有陌生人拿著發光扭蛋，要求小明保密不要告訴老師和家長！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "啟動安全警報的小宇",
        "action": "堅定地把手背在身後，不拿陌生人的扭蛋，轉身大步走向導護老師和警衛室。",
        "dialogue": "叫我不要跟大人說的，通常都是大危險！我不會保守這種秘密，我要報告老師！",
        "tip": "引導宇區辨「驚喜小秘密」與「危險大警報」的界線，遇險立即通報。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "勇敢保護同儕的小畯",
        "action": "伸手拉住想拿扭蛋的同學手腕，大聲喝止，帶著同學退回校門安全線內。",
        "dialogue": "小明不要拿！陌生人的東西很可疑！我們馬上跟警衛高叔叔報告！",
        "tip": "引導畯運用勇氣保護同儕，防範誘拐與安全威脅。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "辨識危險小雷達 · 小和",
        "action": "拿出安全守則圖卡，向同學比對「有危險、傷害身體、要求隱瞞」必通報原則。",
        "dialogue": "感到害怕、肚子痛、心跳快的秘密，絕對不能藏在心裡，一定要大聲說出來！",
        "tip": "引導和依靠身體警報訊號判斷危險隱私。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "校園安全反特務小隊長 · 小嘉",
        "action": "吹響警哨，帶領同儕向導護師長完整陳述陌生人特徵與方位。",
        "dialogue": "聰明分辨好秘密與壞秘密！保護自己不沉默，全員啟動安全警報！",
        "tip": "引導嘉建立通報與求援的果決行動力。"
      }
    ]
  },
  "b-2026-11-27": {
    "id": "b-2026-11-27",
    "date": "2026-11-27",
    "dayOfWeek": "星期五",
    "unit": "第五單元：人際界線與情緒自主",
    "title": "友誼存錢筒——累積好人緣的正向互動金幣",
    "scenario": "大象爺爺帶來四個金色友誼存錢筒，每說一句好話、幫一次忙，就能存入一枚金幣！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "存入分享金幣的小宇",
        "action": "雙手拿著一本心愛的恐龍百科借給同儕，在透明存錢筒裡投下一枚金色代幣。",
        "dialogue": "叮咚！我借同學好看的百科全書，我在大家的友誼存錢筒裡存入了一枚金幣！",
        "tip": "引導宇以具體分享行為累積人際正向資本。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "存入禮讓金幣的小畯",
        "action": "在飲水機前側身退後一步，微笑禮讓口渴的同學先裝水，投下代幣。",
        "dialogue": "叮咚！我禮讓同學先裝水！不推擠、多禮讓，我的好人緣存錢筒越來越重了！",
        "tip": "引導畯在日常瑣事中實踐禮貌，體會人際存款增加的成就感。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "存入傾聽金幣的小和",
        "action": "坐在同儕身旁安靜注視對方說話，點頭給予回應，投入閃爍金幣。",
        "dialogue": "叮咚！我耐心聽完好朋友的心事！做一個溫暖的傾聽者，能存入滿滿的愛！",
        "tip": "引導和發揮傾聽同理特質，深化人際親密感。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "友誼首富銀行家 · 小嘉",
        "action": "搖動裝滿金幣發出清脆響聲的撲滿，宣布全員榮登友誼大富翁金榜。",
        "dialogue": "每天存入好話與善行，OO學習教室每個人都是身價億萬的友誼大富翁！",
        "tip": "引導嘉以成就感獎勵正向循環人際行為。"
      }
    ]
  },
  "b-2026-11-30": {
    "id": "b-2026-11-30",
    "date": "2026-11-30",
    "dayOfWeek": "星期一",
    "unit": "第六單元：人際修復與和解藝術",
    "title": "社交超能力英雄大閱兵與結業授勳典禮",
    "scenario": "歷經前六單元二十六天考驗，特教教室鋪上紅地毯，老師為四位小英雄舉行授勳典禮！",
    "roles": [
      {
        "roleId": 1,
        "studentName": "宇",
        "studentEmoji": "🦁",
        "studentColor": "#3b82f6",
        "name": "獲頒專注情緒勳章的小宇",
        "action": "走上紅地毯立正站好，雙手接過老師頒發的金色獎狀，雙眼閃爍光芒。",
        "dialogue": "我學會了看身體訊號、學會了深呼吸煞車，我不再動不動發脾氣，我是情緒小達人！",
        "tip": "引導宇回顧自己前六單元的情緒調節突破，建立卓越自信。"
      },
      {
        "roleId": 2,
        "studentName": "畯",
        "studentEmoji": "🐻",
        "studentColor": "#8b5cf6",
        "name": "獲頒和平自制勳章的小畯",
        "action": "昂首挺胸向台下鞠躬，將閃亮的英雄徽章佩戴在左胸前，大聲發表感言。",
        "dialogue": "我把揮出去的拳頭變成了擊掌，把大吼變成了溝通接力棒，我打敗了衝動暴龍！",
        "tip": "引導畯深刻體認暴力替代技能的成果，鞏固和平行為模式。"
      },
      {
        "roleId": 3,
        "studentName": "和",
        "studentEmoji": "🐼",
        "studentColor": "#10b981",
        "name": "獲頒溫暖支持勳章的小和",
        "action": "雙手捧著榮譽金盃，露出無比燦爛的笑容，向身邊的三位同儕高高舉杯。",
        "dialogue": "謝謝老師和三位最好的夥伴！在學習教室裡，我們互相扶持，一起變得更勇敢！",
        "tip": "引導和享受團體共同成長的榮譽感。"
      },
      {
        "roleId": 4,
        "studentName": "嘉",
        "studentEmoji": "🦊",
        "studentColor": "#f59e0b",
        "name": "授勳大典總主持 · 小嘉",
        "action": "高舉金色火炬，帶領全體師生齊聲喊出社交英雄口號，現場掌聲如雷。",
        "dialogue": "前半學期大閱兵全員通關！OO國小四大社交英雄，準備好迎接後半學期的挑戰了！",
        "tip": "引導嘉帶動全體熱情，為後續高階社交單元注入強大前進動能。"
      }
    ]
  }
};

Object.keys(allUpdates).forEach(k => {
  roleplays[k] = allUpdates[k];
});

const updatedJson = JSON.stringify(roleplays, null, 2);
const newFileContent = `// OO國小學習教室 · 每日 4 角色情境扮演小劇場專屬資料庫 (2026-10-26 至 2026-12-31 全 49 天)
// 專為 宇 (🦁 ASD)、畯 (🐻 EBD)、和 (🐼 ASD/LD)、嘉 (🦊 ASD) 設計
// 每個情境具備：明確動作指令、具體對話台詞（支援注音與語音朗讀）、特教引導小撇步

window.dailyRoleplays = ${updatedJson};
`;

fs.writeFileSync(filePath, newFileContent, "utf8");
console.log("Successfully updated roleplay-data.js with all November updates as well!");
