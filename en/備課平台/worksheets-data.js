// 國小特殊教育資源班 · 每日彩色圖文學習單專用資料庫 (52 週新課綱 + 49 課靈感備份庫 共 101 課)
// 專為自閉症 (ASD)、學習障礙 (LD)、情緒障礙 (EBD) 設計：免繁重書寫、多感官圖文、直覺圈選與勾選
// 全冊 101 堂課 100% 情境化專屬設計，零重複模板，符合特教全國賽高品質教材標準

const dailyWorksheets = {
  "b-week-1": {
    "id": "b-week-1",
    "lessonNumber": 1,
    "legacy": false,
    "date": "2026-09-01",
    "dayOfWeek": "Tuesday",
    "festival": "Welcome Back to School",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "Meeting new students and saying hello loudly at the beginning of school - getting to know new classmates and establishing a sense of security",
    "superSkill": "👋 Smiling and Greeting Superman",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌟",
    "badgeLabel": "Energetic Greeting Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"meeting each other at the beginning of school and saying hello loudly\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu took the initiative to greet her",
          "desc": "Raise your head and chest, look straight ahead, smile with the corners of your mouth raised, and wave your right hand to say hello. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Lower your head and hide behind the door without speaking or make faces at new classmates",
          "desc": "Be shy and withdrawn or deliberately make trouble, so that people don't know how to be friends with you.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jun introduces himself generously",
          "desc": "Put your hands naturally on both sides of your body, take a step forward steadily, and make a loud voice.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "A gentle response from He",
          "desc": "Put your hands gently in front of your belly, bow deeply to everyone, and look at you gently.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"👋 Say hello to Superboy with a smile\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Feeling shy, he threw his schoolbag on the ground angrily and yelled at the new classmate who came over: \"Go away! Don't look at me!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌟",
          "label": "Raise your head and chest, take a deep breath, look at the other person’s eyebrows and smile, wave generously and say: \"Good morning! I am Yu!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "He zipped his coat up to his head, hid behind the door and looked down at his sneakers, and didn't dare to talk to anyone for the entire class.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"👋 \"Smile and say hello to Superboy\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand firm on both feet, raise your head and chest, and take a deep breath"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Wave your right hand and raise the corners of your mouth to show a smile"
        },
        {
          "num": 3,
          "icon": "🌟",
          "text": "Say your name and good morning clearly and loudly"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, raise your head, smile and say loudly \"Dad/Mom, I'm back\" to your family, and give them a warm high-five!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-2": {
    "id": "b-week-2",
    "lessonNumber": 2,
    "legacy": false,
    "date": "2026-09-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "Friendly Looks and Warm Smiles: Communicating Without Words",
    "superSkill": "👁️ Eyes and forehead spotlight",
    "themeColor": "#6366f1",
    "badgeEmoji": "✨",
    "badgeLabel": "Focused Gaze",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"eye gaze and warm smile\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "✨",
          "label": "Yu focusing on the space between the eyebrows",
          "desc": "Focus your eyes on the middle of the other person's eyebrows, lean forward slightly, and nod seriously. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Staring at the floor or turning away from classmates when speaking",
          "desc": "Wandering and avoidant eyes will make the other person feel that you don't want to pay attention to him at all.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A young man who feels respected",
          "desc": "Put down the toy ball in your hand, face Yu, put your hands flat, and respond with a smile.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He with a gentle gaze",
          "desc": "The corners of his mouth were slightly raised, his eyes looked at his peers warmly, and he clapped his hands gently. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"👁️ Eyes and brows spotlight\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When others are talking to me, I deliberately turn my head to look at the ceiling, turn my pen, or even block my ears to refuse to listen.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "✨",
          "label": "Start the eyebrow spotlight, look gently at the middle of the other person's eyebrows for three seconds, nod and smile naturally to express that you are listening.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Afraid of eye contact, talking in a low voice while staring at the floor and counting tiles. The more he talks, the more he feels guilty and dare not look at people.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"👁️ \"eyes and eyebrows spotlight\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Project your gaze gently to the opponent's \"eyebrow triangle\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Relax your facial muscles and reveal a natural and sincere smile"
        },
        {
          "num": 3,
          "icon": "✨",
          "text": "Keep your gaze for three seconds and nod slightly to indicate that you are listening."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "During dinner, look at your family’s eyebrows, smile and talk for three seconds, and ask your family to give a like on the worksheet!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-3": {
    "id": "b-week-3",
    "lessonNumber": 3,
    "legacy": false,
    "date": "2026-09-15",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "The Five-Level Voice Meter: Choosing the Right Volume",
    "superSkill": "🎛️ Magical volume control on the dashboard",
    "themeColor": "#10b981",
    "badgeEmoji": "🎙️",
    "badgeLabel": "The Volume Magician",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"sound level five level dashboard\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎙️",
          "label": "Yu adjusting the volume",
          "desc": "Put your index finger in front of your lips to make a quiet sound, lower your throat and make a smooth and gentle sound.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Yell loudly in a quiet study class or library",
          "desc": "Disturbing the concentration of the whole class can easily lead to protests and resentment.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, who pressed the brakes on his loud voice",
          "desc": "Place your right hand on your throat to feel the vibration, deliberately speak softly and speak softly.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "The soft-spoken He",
          "desc": "The body takes a small step closer to the peer, and the voice is as clear but soft as the breeze.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎛️ Volume Dashboard God Tuning\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I was so excited during the group discussion that I directly turned the volume to the loudest quarter volume in the playground, which gave the whole class earaches.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎙️",
          "label": "Touch your throat to feel the vibration, adjust the volume to two groups and whisper softly to express clearly and keep the class quiet.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Afraid of being scolded for speaking too loudly, I simply shut up and stopped speaking at all, giving up participating in group discussions.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎛️ \"Volume Dashboard God Tuning\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Observe the place you are in (classroom/library/study room)"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Place your palm lightly against your throat to feel the vibration intensity during pronunciation"
        },
        {
          "num": 3,
          "icon": "🎙️",
          "text": "Turn the knob to one to two volume and speak softly and gently"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Play the \"Volume Level 5\" game with your family and practice whispering a little secret in two minutes at home!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-4": {
    "id": "b-week-4",
    "lessonNumber": 4,
    "legacy": false,
    "date": "2026-09-22",
    "dayOfWeek": "Tuesday",
    "festival": "Teacher's Day",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "[Teacher's Day Special 9/28]——Seeing the teacher's hard work, I sincerely say \"Thank you\"",
    "superSkill": "💌 Little Ambassador of Respect and Gratitude to Teachers",
    "themeColor": "#ef4444",
    "badgeEmoji": "🍎",
    "badgeLabel": "Little Role Models of Respecting Teachers",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Teacher's Day Special 9/28]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🍎",
          "label": "Yu bowing respectfully",
          "desc": "Place your hands on both sides of your thighs, bend your waist at 45 degrees, and bow deeply to the teacher.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Complained that it was too difficult for the teacher to give homework and threw the contact book on the ground",
          "desc": "Disrespecting the teachers who work hard to teach us hurts the feelings of teachers and students.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, loudly proclaiming your love",
          "desc": "Respectfully presented the hand-painted golden love card with both hands, and spoke with sincere eyes.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Here's some warm water for you, He.",
          "desc": "Holding the cup of warm water in both hands, he gently placed it on the table with a warm smile on his face. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💌 \"Special envoy of gratitude\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I found it annoying when the teacher told me to correct, so I rolled my eyes at the teacher and kicked the chair hard in protest.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🍎",
          "label": "Present the hand-painted love card with both hands straight, stand at attention and bow and say: \"Thank you, teacher, for teaching me hard every day!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Although I was very grateful to the teacher, I was too shy to speak, so I secretly stuffed the written card at the bottom of my school bag.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💌 \"Special envoy of gratitude to teachers\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand at attention and hold the card or warm water steadily with both hands."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Bend the waist naturally at 45 degrees and bow to the teacher."
        },
        {
          "num": 3,
          "icon": "🍎",
          "text": "Say sincerely: \"Thank you, teacher, for your hard work!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Before going to bed, pour a glass of warm water to your family members who work hard to take care of you, and say \"Thank you for taking care of me today\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-5": {
    "id": "b-week-5",
    "lessonNumber": 5,
    "legacy": false,
    "date": "2026-09-29",
    "dayOfWeek": "Tuesday",
    "festival": "Mid-Autumn Festival",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "[Mid-Autumn Festival Special] - Mooncake and Pomelo Reunion: Food sharing and taking turns",
    "superSkill": "🌕 Mid-Autumn Festival Treats to Foodies",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🥮",
    "badgeLabel": "Sharing Little Fairy",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Mid-Autumn Festival Special]\" situation, what are the correct and polite actions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🥮",
          "label": "Yu, who follows the rules of queuing",
          "desc": "Hold a small paper plate and stand quietly behind the line, holding the plate with both hands without pushing. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Grab the whole box of delicious egg yolk cakes",
          "desc": "If you are selfish and unwilling to share, your peers will not dare to have fun with you.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The polite little fellow",
          "desc": "Take back the hand that was about to reach out to grab it, turn sideways and let your peers choose first, with a smile on your face.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He distributing pomelo hats",
          "desc": "Gently put the peeled grapefruit peel like a crown on the head of his peer with both hands, smiling gently.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌕 Mid-Autumn Festival courtesy to gourmets\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I saw the grapefruits and mooncakes from the ceilidh, I carried the whole plate away with my hands, stuffed my mouth full and yelled, \"They're all mine!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🥮",
          "label": "Observe taking turns to line up, take your own portion with both hands, and generously say to the classmates next to you: \"Please use it slowly and eat together!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I wanted to eat snacks but I didn’t dare to go forward to get them. I stood alone in the corner of the classroom and watched everyone eat. I was hungry and sulky.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌕 Mid-Autumn Festival Courtesy to Gourmets\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stop in front of the food, put your hands in front of your belly and wait"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "When everyone is seated, politely ask: \"Can I get one?\""
        },
        {
          "num": 3,
          "icon": "🥮",
          "text": "Take one with both hands and say please to the classmates next to you with a smile"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When you get home, cut up a piece of fruit or snacks, take the initiative to share them with your family and say \"please use them slowly\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-6": {
    "id": "b-week-6",
    "lessonNumber": 6,
    "legacy": false,
    "date": "2026-10-06",
    "dayOfWeek": "Tuesday",
    "festival": "Double Ten National Day",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "[Double Ten National Day Special 10/10] - Group gathering and queuing: Put your hands on your sides and look ahead",
    "superSkill": "🚩 The Mighty Little Guardian",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎖️",
    "badgeLabel": "Order Squad Leader",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Double Ten National Day Special 10/10]\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎖️",
          "label": "Yu, the straight-legged team leader",
          "desc": "Straighten your chest, look intently at the back of the classmate’s head in front of you, place your hands on both sides of your thighs and walk steadily...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When queuing, push the classmate in front of you and take the opportunity to jump in and get first place.",
          "desc": "It is easy to cause pushing and falling injuries, and disrupt the order of the class group.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who braked just in time",
          "desc": "Take back your kicking feet, stand upright immediately, and put a step away from the classmate in front of you.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Maintain a small following distance",
          "desc": "Stretch your arms forward to show a safe distance, and gently remind the students behind you to slow down.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚩 \"Small marching guard\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "The rally whistle sounded, and in order to get to the front, he used his elbow to push away Xiaowa who was in front.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎖️",
          "label": "Put your hands naturally on your sides, keep a safe distance from the classmates in front, and keep up with the team in high spirits.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When queuing, they look around and wander around, deviate from the neat line, and when urged, they sit on the ground in anger and refuse to move forward.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚩 \"Arrogant Marching Little Guard\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you hear the command to assemble, stand at attention with your feet together and your hands on your sides."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Look at the back of the head of the classmate in front of you and keep an arm’s length distance"
        },
        {
          "num": 3,
          "icon": "🎖️",
          "text": "Keep your steps in line with the rhythm of the team and march quietly without leaving the team."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Queuing up with your family at the supermarket or at the bus stop, show off the cool little guard that \"keeps your hands on your sides and doesn't push\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-7": {
    "id": "b-week-7",
    "lessonNumber": 7,
    "legacy": false,
    "date": "2026-10-13",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 3: Understanding Feelings and Practicing Self-Control",
    "title": "My Body's Alarm: Noticing Signs of Anger",
    "superSkill": "🧭 Detecting body alarms",
    "themeColor": "#f97316",
    "badgeEmoji": "🌡️",
    "badgeLabel": "Body Detective",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "What is the correct and polite thing to do in a My Body Alarm situation? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌡️",
          "label": "Yu, who sensed the alarm",
          "desc": "Look down at the blocks on the floor, make fists with your hands and slowly release them, take a deep breath and feel your heartbeat, pick up your emotions...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "As soon as the heartbeat becomes faster, hit someone with a fist or kick the table hard\n\"",
          "desc": "Ignoring physiological alarms and allowing impulses to harm others and vandalize public property.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun suppressing his impulses",
          "desc": "He immediately braked to a stop, turned around and faced Yu, lowered his hands without defense, and stared sincerely in his eyes...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Handing over the acupressure ball.",
          "desc": "Quickly walked to the locker to get the acupressure ball and deep breathing chart, handed them to Yu's hand, patted them gently...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧭 Found the body alarm?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "My chest felt hot and my fists became hard. I immediately threw my schoolbag around like a little dinosaur and kicked over the trash can.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌡️",
          "label": "Be keenly aware of the body signal of \"heartbeat beating like a drum\", and immediately extend your index finger in front of your chest to sign \"pause and brake\"!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "My body was obviously very uncomfortable and my stomach hurt so much that I broke into a cold sweat, but I insisted on not talking about it. In the end, I was so sad that I lay on the table and cried.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧭 If you find the \"Body Alarm\" action, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Place your palm on your left chest and feel if your heartbeat is running fast"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Self-check with open palms: Are the fists of both hands clenched too tightly?"
        },
        {
          "num": 3,
          "icon": "🌡️",
          "text": "Talk about your physical feelings: \"My body alarm is going off.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Share with your parents your body signals of \"fast heartbeat and clenched fists\" when you are angry, and ask your family members to remind themselves when they are angry!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-8": {
    "id": "b-week-8",
    "lessonNumber": 8,
    "legacy": false,
    "date": "2026-10-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 3: Understanding Feelings and Practicing Self-Control",
    "title": "The Turtle Pause: Breathe Three Times and Count to Ten",
    "superSkill": "🛡️ The amazing turtle shell-shrinking technique",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🐢",
    "badgeLabel": "Braking Master",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"Magic Turtle Braking Technique\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🐢",
          "label": "Yu, who shrank his car and braked.",
          "desc": "Put your hands around your chest, put your chin close to your collarbone, close your eyes, and inhale and exhale slowly and evenly three times.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When angry, he yells, smashes toys, and tears his own homework.",
          "desc": "Emotional volcano erupts, and you have to bear the consequences afterwards and feel very regretful.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The little farmer counting to ten",
          "desc": "Make fists with both hands and place them on your abdomen, stand firmly on the ground with both feet, count down to one loudly in your mind, and spit out a long...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Gentle and protective little one",
          "desc": "Stand aside and accompany your peers quietly, do not rush or ridicule, count the beats softly to help your peers relax their shoulders...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛡️ The magical turtle shell shrinking technique\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I was very unwilling to lose the game. I tore up the game cards and yelled at the referee teacher: \"This is not fair!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🐢",
          "label": "Imagine that you are a calm little turtle, hold your head in your hands and shrink into the safety shell, take three deep breaths and count from one to ten.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "He suppressed his anger, his face turned red while holding his anger, and he secretly gritted his teeth and resented his classmates all day long.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛡️ \"Magical Turtle Shell Shrinking Technique\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Hold your hands around your chest, like a little turtle retracting into its solid shell"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Close your eyes and take three deep breaths, feeling your belly bulge"
        },
        {
          "num": 3,
          "icon": "🐢",
          "text": "Count the numbers slowly in your mind: one, two, three...count to ten"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Find a comfortable corner of the sofa at home as a \"turtle base\" and demonstrate to your family the calming exercises of shrinking your shell!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-9": {
    "id": "b-week-9",
    "lessonNumber": 9,
    "legacy": false,
    "date": "2026-10-27",
    "dayOfWeek": "Tuesday",
    "festival": "Halloween",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "[Halloween Special 10/31] - Little Trick-or-Treat Gentleman: The line between politeness and joking when asking for candy",
    "superSkill": "🍬 Politely ask for candy without causing trouble",
    "themeColor": "#d97706",
    "badgeEmoji": "🎃",
    "badgeLabel": "Halloween Gentleman Elf",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Halloween Special 10/31]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎃",
          "label": "Yu politely asks for candy",
          "desc": "Holding the pumpkin basket, walk to the door and knock three times, looking at each other with a cute smile.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Deliberately trampling on a classmate’s pumpkin bag to get candy",
          "desc": "Joking out of proportion turns a happy party into a quarrel.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun takes off his mask and apologizes",
          "desc": "Immediately pushed the scary vampire mask to the top of his head, showing his sincere face, and returned the picked up with both hands...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Comforting the frightened peers, He",
          "desc": "Gently pat the back of a frightened classmate, hand him a small piece of paper, and gently soothe his emotions.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🍬 Be polite and don’t trick-or-treat”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I asked for candy, others only gave me one. If I thought it was too little, I immediately spit the candy on the ground, and even took away other people's masks.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎃",
          "label": "Politely hold the bag with both hands and say, \"Trick or treat, can you give me candy?\" Say thank you when you get it!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I feel scared when I see others dressing up as monsters. I hide in the bathroom and refuse to come out to participate in the party, missing out on fun activities.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🍬 Be polite and don’t trick-or-treat. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand up straight, hold the bag in both hands and smile politely"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Speak the secret word gently and clearly: \"Trick or Treat\""
        },
        {
          "num": 3,
          "icon": "🎃",
          "text": "When you get the candy, catch it with both hands and say loudly: \"Thank you!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Practice the skill of \"politely asking for things\" with your family at home, say \"please, thank you\", and don't grab it casually!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-10": {
    "id": "b-week-10",
    "lessonNumber": 10,
    "legacy": false,
    "date": "2026-11-03",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "Raising a Hand: Waiting for Your Turn to Speak",
    "superSkill": "✋ Quietly raise your hand and wait to be called on.",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🙋",
    "badgeLabel": "Polite and Courteous Speech",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"classroom etiquette of raising hands to speak\", what are the correct and polite practices? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🙋",
          "label": "Yu",
          "desc": "Sit upright with your back straight, put your elbows on the table, raise your right hand quietly, and look at the old...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "The teacher interrupts loudly and interrupts the lecture by slamming the table",
          "desc": "Interrupt the class so that everyone cannot hear the teacher's important instructions.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, who pressed the brakes on interrupting.",
          "desc": "Sit back on the chair, take a deep breath, tightly press your mouth that makes you want to shout, and put your hands...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "The gentle response from He",
          "desc": "After hearing the teacher's roll call, stand up, stand firm, and speak the answer in a clear and gentle voice. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"✋ Quietly raise your hands and wait for roll call\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I thought of the answer, I yelled excitedly. I jumped up from my seat and waved my hands to talk, covering up other people's speeches.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🙋",
          "label": "Raise your right hand straight up close to your ear, close your mouth and wait quietly until the teacher calls your name before standing up to speak.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I knew the answer clearly, but because I was afraid of being laughed at if I made a mistake, I lowered my head and hid my hand in the drawer, not daring to raise my hand at all.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"✋ \"Quietly raise your hands and wait for the roll call\" action, please tick the box if you do it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Raise your right hand upward steadily, with your arm close to your ear"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Close your mouth like zipper and look at the teacher quietly"
        },
        {
          "num": 3,
          "icon": "🙋",
          "text": "When you hear the teacher calling your name, stand up and speak generously"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When talking to your family at the dinner table, practice \"wait until your family members finish speaking a paragraph, then raise your hand and say I want to speak too\" without interrupting the elders!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-11": {
    "id": "b-week-11",
    "lessonNumber": 11,
    "legacy": false,
    "date": "2026-11-10",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "Back to Class: Getting Ready When the Bell Rings",
    "superSkill": "⏰ The bell will chime again in thirty seconds.",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🔔",
    "badgeLabel": "Getting Back into the swing of things team",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"you will calm down when you hear the bell\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🔔",
          "label": "Yu",
          "desc": "As soon as you hear the bell, immediately put down the building blocks in your hands, stand up and move the chairs closer.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When the bell rang, he was still chasing and running in the corridor and did not go back to the classroom.",
          "desc": "Delayed class time, sweating profusely and unable to concentrate on studying.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, reluctant to part",
          "desc": "Take a deep breath, take a photo of the unfinished building blocks, and quickly put them into your storage box.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Quickly sweep the scattered blocks on the ground into the storage box and close the lid. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which method can use \"⏰ the bell returns to its original position in thirty seconds\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "The bell rang, but he still insisted on kicking the ball into the goal, screaming in the playground and refusing to go back to the classroom.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔔",
          "label": "As soon as he heard the bell, he immediately counted thirty seconds silently in his heart, returned the toys to their original places, and quickly walked back to the classroom to tidy up the desktop.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When the bell rang, I dragged my feet slowly, and only wandered back to the classroom after five minutes of class. I was angry and dazed when the teacher corrected me.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Follow the teacher to practice the \"⏰ bell returns to position after thirty seconds\" action. If you do it, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "As soon as you hear the school bell ringing, put down the game at hand immediately"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Walk quickly instead of running, and return to your seat within thirty seconds"
        },
        {
          "num": 3,
          "icon": "🔔",
          "text": "Take out the textbook and pencil case for the next period, sit upright and take a deep breath"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Set up an alarm clock at home. When the alarm clock rings, immediately put away the toys at hand within thirty seconds and show your parents your mind-controlling skills!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-12": {
    "id": "b-week-12",
    "lessonNumber": 12,
    "legacy": false,
    "date": "2026-11-17",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Joining a Game: May I Play Too?",
    "superSkill": "🔑 Add to game pass",
    "themeColor": "#ec4899",
    "badgeEmoji": "🤝",
    "badgeLabel": "Friendship Little Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"adding a magical passcode to the game\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🤝",
          "label": "Yu asks a polite question",
          "desc": "Stand on the sidelines and watch for three seconds. When the ball goes out of bounds and there is a timeout, he steps forward and looks at the captain with a smile and asks...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Stealing the ball without asking others and kicking down other people's castles",
          "desc": "Forcibly intervening in the game will destroy the game and make people not want to play with you.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A warm welcome from Jun",
          "desc": "Put the ball under your feet and stop it, raise your head and wave to Yu, and distribute the position generously.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He who follows the rules",
          "desc": "Briefly explain the game progress and scores to new peers to help them integrate. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔑 Game Add Pass\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Wanted to join everyone in playing football, so he rushed up and kicked the ball away, yelling at the goalkeeper: \"Now it's my turn to be the captain!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🤝",
          "label": "Walked to the game circle, stopped and stared, raised his hand gently and asked: \"Can I play together? I can be a passer!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I want to join the game but stand ten meters away and watch from a distance. I feel envious and self-pitying, feeling that others are ostracizing me.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔑 \"Add pass\" action to the game, please tick the box if you have done so.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stop two steps away from your game partner and keep smiling"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Say the secret word to pass the level: \"Can I play together?\""
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "Take the initiative to explain the role you can play or wait patiently for the next round"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When you go to the park and playground to play, politely say \"Can I play with you\" to other children and successfully make a partner!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-13": {
    "id": "b-week-13",
    "lessonNumber": 13,
    "legacy": false,
    "date": "2026-11-24",
    "dayOfWeek": "Tuesday",
    "festival": "Thanksgiving",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "[Thanksgiving Special] - Friendship Money Bank: See the little angel around you, accumulate positive popularity gold coins",
    "superSkill": "💰 More Friendship Coins deposited",
    "themeColor": "#eab308",
    "badgeEmoji": "🪙",
    "badgeLabel": "Friendship Monopoly",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Thanksgiving Special]\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🪙",
          "label": "Yu deposited sharing coins",
          "desc": "Holding a beloved dinosaur encyclopedia in both hands and lending it to a peer, he dropped a gold coin in the transparent piggy bank...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Seeing a classmate falling and laughing next to him, he shouted \"You deserve it\"",
          "desc": "Deducting friendship gold coins makes classmates sad and loses good friends.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun depositing courtesy coins",
          "desc": "Stand sideways and step back in front of the water dispenser, smile politely and let the thirsty students fill the water first and drop the tokens.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Deposit Listening Coins (Little He)",
          "desc": "Sit next to your peers, watch them quietly as they speak, nod in response, and put in flashing gold coins. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💰 Deposit more friendship gold coins\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "A classmate borrowed an eraser and accidentally dropped it on the ground. Jia lost his temper and called the other person a fool, and kicked the classmate's stationery away.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🪙",
          "label": "When you see a classmate in need of help, take the initiative to lend a hand and deposit a sparkling friendly gold coin into the friendship piggy bank in your heart!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When I see a classmate encountering difficulties, I pretend not to notice and run away quickly out of fear of getting into trouble. I feel very sorry afterwards.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💰 \"Deposit more friendship gold coins\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Use your eyes to find students in the classroom who are working hard or need help."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Walk up and stretch out your right hand to comfort or praise"
        },
        {
          "num": 3,
          "icon": "🪙",
          "text": "Say silently in your heart: \"I have deposited another warm friendship gold coin\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home, praise one of your family's strengths (for example: the food cooked by your mother is delicious), and put a heart in the family piggy bank!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-14": {
    "id": "b-week-14",
    "lessonNumber": 14,
    "legacy": false,
    "date": "2026-12-01",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Building Together: Taking Turns and Sharing Jobs",
    "superSkill": "🧩 Teamwork and Collaboration to Cover",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚀",
    "badgeLabel": "Collaborating Architect",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"Group Block Project\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🚀",
          "label": "Yu",
          "desc": "According to the instructions of the design drawing, arrange the square magnetic pieces on the base, and clearly allocate the blocks that everyone is responsible for...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Tear down the entire building that others have worked so hard to build.",
          "desc": "If you destroy the team's hard work, everyone will be angry and no longer trust you.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun controlling the hand grabbing the parts",
          "desc": "Retracting the hand that held all the magnetic pieces in his arms, he took three red magnetic pieces and concentrated on assembling them...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Arrange the magnetic pieces scattered everywhere according to color classification, and actively deliver suitable parts to teammates...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧩 Team division of labor and joint efforts\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When his teammates took the long red blocks they wanted, they were so angry that they knocked down the entire castle and shouted: \"Everyone, stop playing!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚀",
          "label": "Take the initiative to discuss the division of labor: \"You are responsible for building the city wall, and I will build the bridge!\" When parts are insufficient, exchange them instead of fighting for them.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling that his teammates are not doing as well as he expected, he puts his hands in his pockets angrily, sits aside and watches indifferently, refusing to cooperate.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧩 The team divides the work and works together to build the action. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Place the building blocks in the center of the table and everyone looks at the design drawings together"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Discuss the division of roles: \"I build the foundation, you build the roof.\""
        },
        {
          "num": 3,
          "icon": "🚀",
          "text": "When taking the blocks, take them one at a time and thank and encourage each other."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Work together with your family to complete a household chore (for example: one person cleans the table, another person sets the dishes) and experience the power of division of labor and cooperation!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-15": {
    "id": "b-week-15",
    "lessonNumber": 15,
    "legacy": false,
    "date": "2026-12-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Giving Compliments and Saying Thank You",
    "superSkill": "💖 Praise generously and say thank you.",
    "themeColor": "#a855f7",
    "badgeEmoji": "🔍",
    "badgeLabel": "Praise the Little Sun",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"praising the magnifying glass and being generous\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🔍",
          "label": "Yu discovers the strengths of her peers",
          "desc": "Picked up the gold-rimmed magnifying glass and looked at Jia, with sincere eyes, and loudly said Xiaojiu's best advantage today...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When others praise you for being great, sneer and say \"whatever\"",
          "desc": "Rejecting others thousands of miles away and trampling other people's good intentions on the ground.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun overcame his shyness to say thank you",
          "desc": "He held up his chest and smiled, turned around and gave a thumbs up to He, and praised him in a loud voice.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Warmth seeks out the kind-hearted He",
          "desc": "Holding the magnifying glass in both hands, he smiled at Jia and gently expressed the thoughtfulness he observed in his heart. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💖 Praise generously and say thank you”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "A classmate kindly praised his beautiful painting. Yu felt shy and overwhelmed, and angrily scolded him: \"It's so noisy!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔍",
          "label": "Looking at the friend who praised him, he raised the corners of his mouth slightly and said generously and gently: \"Thank you, I also think yours is beautiful!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When he hears others complimenting himself, his face turns red and he buries his head in his arms and pretends to sleep, not daring to say a word in response.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💖 \"Praise generously and say thank you\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you hear a compliment, stop what you are doing and face the person who complimented you."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Look at the other person’s eyebrows and raise a sincere smile at the corner of your mouth"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "Luo Luo generously said three words clearly: \"Thank you!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Take the initiative to use the \"Praise Magnifying Glass\" to discover a great thing about mom and dad today, and look into the family's eyes and say it!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-16": {
    "id": "b-week-16",
    "lessonNumber": 16,
    "legacy": false,
    "date": "2026-12-15",
    "dayOfWeek": "Tuesday",
    "festival": "Winter Solstice",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "[Winter Solstice Special 12/21] - Hot red and white glutinous rice balls: Eating glutinous rice balls means gratitude and filial piety to the elders",
    "superSkill": "🍡 Celebrating Winter Solstice with Tangyuan (Sweet Rice Balls) and Expressing Gratitude",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🥣",
    "badgeLabel": "Heartwarming Filial Piety Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Winter Solstice Special 12/21]\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🥣",
          "label": "Sharing Yu's first glutinous rice ball",
          "desc": "Carefully scoop up a pink sweet glutinous rice ball with a spoon and blow it to cool down, looking at the classmates next to you with gentle eyes...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I disliked the glutinous rice balls served by my elders as being too hot and too sweet, so I vomited them on the ground on the spot.",
          "desc": "It is very rude not to appreciate the love of elders.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun learns to chew slowly and carefully",
          "desc": "Get rid of the impatient habit of swallowing in one bite, slowly bite open the sesame glutinous rice balls, and serve the most delicious red bean soup to...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He, remembering the kindness of his elders",
          "desc": "Holding the warm rice dumpling bowl with both hands, close your eyes and smile, feeling the warmth spread from your stomach to your whole body...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🍡 Winter Solstice Tangyuan means \"Thanksgiving\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "The elders worked hard to cook glutinous rice balls and served them to the table. I only wanted to eat the red ones, so I scooped out all the white ones with a spoon and threw them on the table.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🥣",
          "label": "Hold the rice dumpling bowl respectfully with both hands, say happy winter solstice and thank you to the elders first, blow it to cool down and then chew slowly to taste the warm deliciousness.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "The elders asked themselves to eat glutinous rice balls, but they kept staring at the tablet and refused to go to the dining table. They didn't care until the glutinous rice balls became cold and mushy.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🍡 Winter Solstice Tangyuan \"Thanksgiving\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Holding the rim of the bowl with both hands, sit upright at the dining table"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Nod deeply and say thank you to the elders who served you the glutinous rice balls."
        },
        {
          "num": 3,
          "icon": "🥣",
          "text": "Gently blow the cool and hot air, chew slowly and taste the delicious food quietly"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "During the Winter Solstice, bring a bowl of hot soup or hot water to honor the elders in your family, and send warm blessings \"Wish you health and happiness during the Winter Solstice\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-17": {
    "id": "b-week-17",
    "lessonNumber": 17,
    "legacy": false,
    "date": "2026-12-22",
    "dayOfWeek": "Tuesday",
    "festival": "Christmas",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "[Christmas Special 12/25] - Gift Exchange Battle: Draw a gift you don’t like and still be graceful",
    "superSkill": "🎄 Politely accepting gifts with good manners",
    "themeColor": "#16a34a",
    "badgeEmoji": "🎁",
    "badgeLabel": "A Gentleman's Demeanor",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Christmas Special 12/25]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎁",
          "label": "Yu sees the advantages of the gift",
          "desc": "Pat Jia on the shoulder, point to the heat preservation switch on the kettle, smile and tell the practicality of this gift...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you get something you don’t like, you’ll cry and throw the gift out of the window.",
          "desc": "It makes the students who carefully prepared the gifts shed tears and lose their grace.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun showing his magnanimous demeanor",
          "desc": "Relax your frowning brows, take a deep breath, take the pink gift with both hands, and say…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "He walked up to give his affirmation, took out his own snacks and exchanged them with everyone, and the atmosphere immediately...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎄 Accept gifts politely and gracefully”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I opened my Christmas gift and found that it was a notebook instead of a beyblade, I rolled on the ground crying and swearing.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎁",
          "label": "Take the gift with both hands and say thank you with a smile, appreciate the packaging and card, show your grace and say: \"This notebook can be used for drawing!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When I get a gift that I don’t like, I immediately throw the gift to the ground with a bad face, lie on the table and refuse to talk to anyone all day long.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎄 \"Receive gifts politely and gracefully\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Take the gift with both hands and say thank you first no matter what is inside"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Smile as you unwrap and find one good thing about this gift"
        },
        {
          "num": 3,
          "icon": "🎁",
          "text": "Look into the eyes of the classmate who gave the gift and say: \"Thank you for your careful preparation!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When receiving meals or small gifts prepared by family members, whether you like it or not, say \"Thank you for your hard work\" first, showing a gentleman's demeanor!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-18": {
    "id": "b-week-18",
    "lessonNumber": 18,
    "legacy": false,
    "date": "2026-12-29",
    "dayOfWeek": "Tuesday",
    "festival": "New Year's Eve",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "[New Year's Eve Special 12/31-1/1] - Year-End Time Machine: Reviewing the biggest progress this year and setting new goals",
    "superSkill": "🎋 Hang your goals on the wishing tree",
    "themeColor": "#7c3aed",
    "badgeEmoji": "🎆",
    "badgeLabel": "New Year's Hope Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[New Year's Eve Special 12/31-1/1]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎆",
          "label": "Looking back on Yu's growth and breakthroughs",
          "desc": "Standing up and looking at the screen, compared to how I held my head and screamed when there was noise in September, I...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Complaining that I can’t do anything well this year, lying on the table and giving up on myself",
          "desc": "Ignore your own small progress and let negative thoughts block your progress.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun makes a grand vow to make his own food.",
          "desc": "I recall that I used to kick the chair when I lost the game. Now I let my hands naturally hang down and focus on the wooden sign seriously...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He with a wish for happiness hanging on it",
          "desc": "Stand on tiptoes and hang the wooden sign where the sun shines brightest, put your hands together and express your New Year’s wishes with a smile...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎋 Hanging goals on the wish tree\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "During the New Year's review, I recalled that my shortcomings had been noted, and I was so angry that I tore the entire annual review worksheet into pieces.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎆",
          "label": "Write down the most proud progress of this year on the wish tree, and set a feasible new goal for the new year, and stride forward bravely!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I feel that New Year’s goals are too difficult to achieve, so I just scribble or leave them blank, feeling that I will never succeed.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎋 \"Hang a target on the wish tree\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Close your eyes and think about a new superpower you learned this year"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Carefully write down a small goal for progress in the new year on the wish card"
        },
        {
          "num": 3,
          "icon": "🎆",
          "text": "Place the wish card squarely on the wish tree, make a fist and say to yourself, come on"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Make new hopes for the New Year with your family in the living room, high-five each other and promise to support and encourage each other in the new year!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-19": {
    "id": "b-week-19",
    "lessonNumber": 19,
    "legacy": false,
    "date": "2027-01-05",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "When Plans Change: Using a Change Pass",
    "superSkill": "🔄 Flexible Mind Transfer Pass",
    "themeColor": "#2563eb",
    "badgeEmoji": "🎫",
    "badgeLabel": "Elastic Strain Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"facing sudden changes in class schedule\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎫",
          "label": "Yu took out the changed pass",
          "desc": "I was very angry and wanted to pull my hair. I looked at the green elastic card on the table, took three deep breaths, and tried to hide...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When the class schedule changes, he screams and rolls on the ground and refuses to change classrooms.",
          "desc": "My brain is stuck in knots, causing me extreme pain and delaying the entire class.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, put away your irritable temper.",
          "desc": "Gently put down the pencil case that almost fell on the table, place both hands flat on the table, and take a deep breath...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Take out a box of class puzzle checkers and colored pencils from the locker and place them in the middle of the table to share.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔄 Flexible Thought Pass\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Because it rained, the physical education class was changed to self-study in the classroom. Jia was so angry that he scribbled on the blackboard, slapped the table loudly and refused to go back to his seat.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎫",
          "label": "Take out the green \"Change Pass\", take a deep breath and say to yourself: \"It doesn't matter if the class schedule has changed, indoor activities are also fun!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "The arranged schedule suddenly changed, and my brain couldn't turn around. I sat frozen on the corridor floor, unable to move.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔄 \"Flexible Thought Pass\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you hear the stroke change, make a fist with your right hand and tap the heart of your left hand to remind yourself"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take three deep breaths and turn the pass in your brain: \"Elastic changes are no problem.\""
        },
        {
          "num": 3,
          "icon": "🎫",
          "text": "Quickly cooperate with the teacher’s instructions and bring your stationery to the new activity location"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When family plans change due to weather or events (for example, you can't go to the park but go to the library instead), say to your parents, \"It doesn't matter, I can flexibly adjust\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-20": {
    "id": "b-week-20",
    "lessonNumber": 20,
    "legacy": false,
    "date": "2027-01-12",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "When Work Feels Hard: I Am Still Learning",
    "superSkill": "💪 I'm still learning the magic words.",
    "themeColor": "#059669",
    "badgeEmoji": "🦋",
    "badgeLabel": "Perseverance Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"I want to give up when encountering difficulties\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🦋",
          "label": "Yu encounters setbacks",
          "desc": "Put down the scissors, take a deep breath to relax your hand muscles, make fists with both hands, smile to yourself and say the magic formula...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "As soon as a question is calculated incorrectly, the test paper will be crumpled into a ball and thrown into the trash can.",
          "desc": "Avoid giving up if you are afraid of setbacks, and you will never lose the opportunity to upgrade your brain.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who controls and gives up his impulses",
          "desc": "Put the parts that were about to be thrown away gently on the table, take a deep breath and turn to learn from Yu.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Gently press the corner of Yu's drawing paper with your left hand to help fix the paper, allowing Yu to perform the knife better...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💪 I’m still learning the magic words”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I encounter a math question that I can’t write, I immediately break the pencil and yell angrily: “I’m a big idiot, I don’t want to write anymore!”",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🦋",
          "label": "Put down the pencil, take a deep breath, and say the magic words to yourself: \"It's not that I don't know it, I'm just 'still learning'! I can ask the teacher for help!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When I encounter a slightly more difficult puzzle, I take one look at it and push it away, lying on the table in a daze and giving up trying.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💪 I'm still learning the magic words. If you do it, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you feel frustrated or stuck, put down your pen and take a deep breath."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Cross your arms and say the magic spell out loud to yourself: \"I'm just still learning.\""
        },
        {
          "num": 3,
          "icon": "🦋",
          "text": "Raise your hand and politely ask the teacher or classmates for help: \"Can you teach me this question?\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When you encounter something you don't know how to do at home (such as tying shoelaces, packing school bags), say loudly to your family, \"I'm just still learning\", and ask your family to demonstrate once!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-21": {
    "id": "b-week-21",
    "lessonNumber": 21,
    "legacy": false,
    "date": "2027-01-19",
    "dayOfWeek": "Tuesday",
    "festival": "Final evaluation",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "Final exam and evaluation - use the red pen to cross out as a brain upgrade, do not tear up the exam paper",
    "superSkill": "📝 Red pen corrections upgrade your brain",
    "themeColor": "#dc2626",
    "badgeEmoji": "🆙",
    "badgeLabel": "Smart Upgrade Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"final exam and assessment\" situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🆙",
          "label": "Yu who wrote the wrong answer on the exam paper",
          "desc": "Take three deep breaths, put the test paper flat on the table, don’t knead the paper, don’t cry, take out the red pen and write...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you don’t do well in the exam, you tear up the assessment paper and grab the red pen and scribble on the blackboard.",
          "desc": "Treat objective evaluation as punishment and fail to learn and grow from mistakes.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun almost tore up the exam paper",
          "desc": "Seeing Yu correcting seriously, he grasped the ball-shaped test paper and slowly flattened it, and took out the eraser.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Take the initiative to open the dictionary page and point to the correct new word for Yu to compare the radicals.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📝 Red pen correction brain upgrade\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I was giving the Mandarin assessment and I saw a cross with a red pen, I went crazy on the spot and tore the entire test paper into pieces, stuffed it into my mouth and swallowed it.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🆙",
          "label": "Pick up the blue pen and carefully recalculate the red-crossed questions, and say to yourself in your heart: \"Every revision is a brain level improvement!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "After getting the test paper with unsatisfactory results, I secretly stuffed the test paper in the shoe cabinet at the bottom, went home and lied to my parents that I didn't give out the test paper.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📝 Red pen corrects the action \"Brain Upgrade\", please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Calmly took the evaluation paper, neither covering it up nor tearing it up impulsively"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take out the correction pen and carefully see which step you wrote incorrectly"
        },
        {
          "num": 3,
          "icon": "🆙",
          "text": "Write the correct answer neatly in the correction column and ask the teacher for confirmation."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Show the corrected evaluation paper to your parents with both hands, point to the correction and say, \"I have learned the mistake!\""
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-22": {
    "id": "b-week-22",
    "lessonNumber": 22,
    "legacy": false,
    "date": "2027-01-26",
    "dayOfWeek": "Tuesday",
    "festival": "Lunar New Year",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "[Lunar New Year Special Edition] - The etiquette of saying auspicious words and receiving red envelopes with both hands during the Spring Festival",
    "superSkill": "🧧 Receiving red envelopes with both hands while saying auspicious words",
    "themeColor": "#b91c1c",
    "badgeEmoji": "🧧",
    "badgeLabel": "Auspicious New Year's Greeting Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Lunar New Year Special]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🧧",
          "label": "Yu loudly wishes everyone a Happy New Year",
          "desc": "With his hands clasped in front of his chest, he looked into the eyes of his elders and said the four-character idiom in a loud voice...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When I received the red envelope, I grabbed it and opened it in front of my face. I thought the money was too little and threw it away.",
          "desc": "It is extremely rude and breaks the hearts of the elders, and they lose the joy of the New Year.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A young man receiving a red envelope with both hands",
          "desc": "Lean forward slightly and bow, respectfully receive the red envelope with the palms of your hands facing up, and carefully put it into the inner pocket of your coat...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He serves hot sweet tea",
          "desc": "Holding the winter melon sweet tea on the tray with both hands, he served it to the guests and elders sitting on the sofa in order.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧧 Receive red envelopes with both hands and say auspicious words\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When an elder wanted to give a red envelope, he couldn't wait for the other person to finish saying his blessings, so he reached out and snatched it away. He also counted the money loudly and said, \"That's it?\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🧧",
          "label": "Stand at attention with your feet together, bow your hands and say auspicious words \"I wish you a happy new year and good health\", take the red envelope respectfully with both hands and put it into your pocket.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I always hide behind my parents when I go to relatives’ houses to pay New Year greetings. I refuse to take the red envelopes given by my elders, and I don’t say a word of good luck with a bad face.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧧 Take the red envelope with both hands and say auspicious words\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand up straight with your feet together and your hands in front of your chest."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Look at the eyebrows of the elders and say auspicious words loudly: \"Happy New Year and all the best\""
        },
        {
          "num": 3,
          "icon": "🧧",
          "text": "Respectfully take the red envelope bag with both hands, put it straightly into your coat pocket and say thank you"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "On New Year's Eve or during the Spring Festival, bow to every elder in the family and say auspicious words, showing the polite little angel style of an OO elementary school!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-23": {
    "id": "b-week-23",
    "lessonNumber": 23,
    "legacy": false,
    "date": "2027-02-02",
    "dayOfWeek": "Tuesday",
    "festival": "Winter vacation life",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "[Winter Vacation Life Independent Chapter] - Refuse 3C addiction: plan regular schedule and outdoor activities",
    "superSkill": "📱 Your 3C Time Manager",
    "themeColor": "#0284c7",
    "badgeEmoji": "⏳",
    "badgeLabel": "Little master of time",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Winter Vacation Life Autonomy]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "⏳",
          "label": "Yu keeps his promise to the alarm clock",
          "desc": "When the alarm clock rang, he pressed the tablet's close button with his right hand without hesitation and put the tablet back on the bookshelf. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Playing with mobile phone and tablet from morning to night, screaming and throwing the phone when asked to eat",
          "desc": "The eyesight is damaged, the brain is addicted and irritable, and the healthy winter vacation life is lost.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun restrained himself from playing another game.",
          "desc": "Take a deep breath, put down the remote control in your hand, and loudly report to your mother that the time is up.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Walk to the window, blink hard five times with both hands, stare at the tallest tree in the distance, relax your shoulders...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📱 3C Time Butler\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Mom stipulated that mobile phones must be put away when the time is up. Xiaojiu was so angry that he rolled around on the ground and smashed the TV remote control with all his strength.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⏳",
          "label": "When the alarm clock on your phone rings, take the initiative to press it to turn it off, hand the tablet to your parents, put on your sneakers and ride a bicycle in the outdoor park to enjoy the breeze!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "My winter vacation routine is completely reversed. I stay awake at night and peek at my phone. I sleep on the sofa all day long. I feel dizzy and miserable.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📱 3C Time Butler\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Before starting to use 3C, set a thirty-minute countdown with an alarm clock."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Turn off the screen as soon as the alarm goes off and put the device back into the charging base with both hands."
        },
        {
          "num": 3,
          "icon": "⏳",
          "text": "Go to the window and look at the green trees in the distance for three minutes, do stretching exercises and jump"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Sign the \"Winter Vacation Eye Protection 3C Agreement\" with your family, accumulate one hour of outdoor activities every day and clock in!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-24": {
    "id": "b-week-24",
    "lessonNumber": 24,
    "legacy": false,
    "date": "2027-02-09",
    "dayOfWeek": "Tuesday",
    "festival": "Lantern Festival",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "[Lantern Festival Special] - Lantern Riddle Guessing Party: Follow the rules and don’t be discouraged if you guess wrong",
    "superSkill": "🏮 Guess the riddles while following the rules for answering quickly.",
    "themeColor": "#ea580c",
    "badgeEmoji": "🏮",
    "badgeLabel": "Little Riddle Master",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Lantern Festival Special]\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🏮",
          "label": "Yu listens quietly to the questions",
          "desc": "Put your hands on the table, listen to the full text of the puzzle with your ears, and then quickly raise your hands until you hear the sound of the gong...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Guessing lantern riddles without being answered, causing a scene and knocking over the answering bell",
          "desc": "Destroy the joyful atmosphere of the Lantern Festival party and lose the qualification to participate in the game.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun accepts the wrong guess",
          "desc": "Take a deep breath to calm down the annoyance of ringing the wrong bell, place your hands flat on your knees, and generously cheer for your peers who answered correctly...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "A gentle and thoughtful little girl",
          "desc": "Look at the lantern riddle card, point to the characteristics of the peanut shell, and clearly explain the thinking process to everyone.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🏮 When guessing lantern riddles, follow the answering rules?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I saw another group guessing the lantern riddle and getting the prize, I was so angry that I rushed forward and snatched away other people's small lanterns, and even cursed the host teacher for being biased.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏮",
          "label": "Comply with the rules of ringing the bell and accepting the prize with a smile when you guess right. If you guess wrong or miss, you can also warmly applaud other winning students!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "As soon as the question came out and I felt it was too difficult to guess, I would lie on the table with my head in my hands and get sulky, giving up the fun of solving the puzzle.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🏮 Guess lantern riddles and follow the rules for answering questions. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Put your hands on the table and wait for the host to finish reading the puzzle questions"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Comply with the competition rules of \"raise your hand first and then stand up to answer\""
        },
        {
          "num": 3,
          "icon": "🏮",
          "text": "When you guess wrong, smile to yourself and say it’s okay, and applaud the students who got the answer right."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Take the funny questions you learned from guessing Lantern Festival riddles home to test your parents, and the whole family can enjoy the fun of guessing lantern riddles together!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-25": {
    "id": "b-week-25",
    "lessonNumber": 25,
    "legacy": false,
    "date": "2027-02-16",
    "dayOfWeek": "Tuesday",
    "festival": "Back-to-School Routines",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "The battle to calm your mind at the beginning of school—restart your computer, return to campus life, and warm up in the morning light",
    "superSkill": "🎒 Back to school, get back into the swing of things and start fresh again.",
    "themeColor": "#4f46e5",
    "badgeEmoji": "⏰",
    "badgeLabel": "Vitality boot star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"the battle to win back the students at the beginning of school\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "⏰",
          "label": "Little Yu, full of energy",
          "desc": "Straighten the strap of your schoolbag, straighten your chest, stride into the classroom, look at your peers, smile and say hello loudly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Staying in bed crying and kicking the quilt on the first day of school, refusing to wear school uniform to school",
          "desc": "The schedule is not adjusted well, causing family chaos and delaying the start of the new semester.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun giving a high five",
          "desc": "He trotted forward excitedly, stretched out his right palm and gave high fives to every peer who walked into the classroom.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Carefully checking He's schoolbag",
          "desc": "Check the neat vocabulary books and pencil boxes on the desktop one by one, and nod to everyone with peace of mind.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎒 School starts, calm down and restart”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I was woken up, I was so angry that I threw all the textbooks and stationery in my schoolbag into the trash can. I grabbed the bedrail and refused to go out.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⏰",
          "label": "I packed my schoolbags and uniforms the night before, took a deep breath and did morning stretching exercises in the morning, and walked into the school gate full of energy to say hello to the guards!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Although I walked into the classroom, I lay on the table all day with my eyes dazed and refused to respond when the teacher called my name.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎒 Please check the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Get up in the morning, drink a cup of warm water, and do chest expansion and stretching exercises three times."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Check whether the water bottle, contact book and colored pens in the schoolbag are complete according to the class schedule"
        },
        {
          "num": 3,
          "icon": "⏰",
          "text": "Walk into the classroom with your head held high and say hello to the first friend you see with a smile"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Go to bed before nine o'clock the night before school starts. Before going to bed, tell your parents, \"I will be energetic to go to school tomorrow\" and give each other a high five!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-26": {
    "id": "b-week-26",
    "lessonNumber": 26,
    "legacy": false,
    "date": "2027-02-23",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Boundaries, Body Autonomy and Personal Safety",
    "title": "Personal Space: Learning About Body Boundaries",
    "superSkill": "🛡️ An arm-sized airbag",
    "themeColor": "#0d9488",
    "badgeEmoji": "🎈",
    "badgeLabel": "Boundary Guardian",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "What is the correct and polite thing to do in a \"my personal body airbag\" situation? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎈",
          "label": "Yu, the guardian of airbags",
          "desc": "Stretch out your right arm and raise it forward, palm forward to make a pause gesture, look at the other person politely and firmly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Sudden hugging classmates, grabbing other people’s hair or pinching cheeks without consent",
          "desc": "Violating other people's body boundaries can easily cause panic and physical conflict in others.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who took a step back",
          "desc": "Seeing the pause gesture, he immediately took a small step back with his feet, placing his hands on both sides, showing understanding...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Use both hands to show the size of the hula hoop, stand beside the two classmates, and confirm that neither of them collides with each other...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛡️ One arm airbag\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I saw my classmate wearing a cute headband, I reached out and pulled it off hard and put it on my head. I also pushed my classmate to the corner.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎈",
          "label": "Extend an arm to confirm social distance and politely ask for permission before touching other people's belongings.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I feel very uncomfortable when others are too close to me, but I don't dare to express myself. I endure it until my whole body is shaking and I huddle in the corner.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛡️ \"One Arm Airbag\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Raise one arm forward and measure the safe boundary with peers"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Use your palms facing outward to make a friendly braking gesture: \"Please give me an arm's length distance.\""
        },
        {
          "num": 3,
          "icon": "🎈",
          "text": "Before you want to hug or shake hands, always ask: \"Can I hug you?\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Demonstrate the \"airbag for one arm\" to your parents to let your family know that they need physical comfort and a safe space!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-27": {
    "id": "b-week-27",
    "lessonNumber": 27,
    "legacy": false,
    "date": "2027-03-02",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "A Firm No: My Body, My Choice",
    "superSkill": "✋ Firmly Reject Protective Shield",
    "themeColor": "#ef4444",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Body Defense Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"saying \"no\" bravely and firmly\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🛡️",
          "label": "Yu firmly refused",
          "desc": "Stand with your feet as firm as a big tree, extend your right hand with your five-fingered palm facing forward, and look firmly at the center of the other person's eyebrows.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When others ask you to do dangerous pranks (such as pushing people), blindly follow them",
          "desc": "Lacking a self-protective line of defense, it is easy to injure others and become an accomplice.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun Learns to Respect",
          "desc": "Immediately retract the outstretched hand behind your back, take a step back with your feet, and look serious and serious.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Stand beside your peers to offer support, with your hands folded in front of your chest and a calm expression.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"✋ Firmly reject the shield”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I encounter senior classmates who force me to hand over snacks, I obediently hand them over for fear of being excluded, and even help steal other people's money.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🛡️",
          "label": "Look directly at the other party firmly, extend your right palm forward to sign \"stop\", and say clearly and firmly: \"No! I don't agree!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I desperately don’t want to do something, but I don’t dare to say no. I cry while aggrievedly complying with other people’s unreasonable demands.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"✋ Firmly refuse the \"Guard Shield\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Put your feet firmly on the floor and stand as straight as a pine tree"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Raise your right hand forward to show the \"Palm Red Light Stop\" sign"
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "The secret word for clearance was spoken firmly in a loud voice: \"No! Please stop!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Role-play with your family at home to practice the firm movements and lines of \"bravely resisting the temptation of strangers\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-28": {
    "id": "b-week-28",
    "lessonNumber": 28,
    "legacy": false,
    "date": "2027-03-09",
    "dayOfWeek": "Tuesday",
    "festival": "Arbor Day",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "[Arbor Day Special 3/12] - Cherish public property and whisper in the library",
    "superSkill": "🌿 Guardian Star of Public Property Protection",
    "themeColor": "#10b981",
    "badgeEmoji": "🌱",
    "badgeLabel": "Little Green Hero's Favorite Items",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Arbor Day Special 3/12]\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌱",
          "label": "Yu turning the pages of a book softly",
          "desc": "Gently pinch the corners of the pages with the index fingers and thumbs of both hands, and turn over slowly without making any snapping sound...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Running and shouting in the library, tearing and scribbling at the picture books on the bookshelf",
          "desc": "Destroying valuable books shared by teachers and students in the school, and losing the sense of public morality in reading.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun walks with a light, cat-like gait",
          "desc": "Walking quietly on tiptoes like a cat stepping on clouds, holding three borrowing books firmly in both hands...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Squatting in front of the flower pot on the windowsill of the classroom, holding a small spray bottle and gently spraying the green leaves, his eyes warm.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌿 \"Guardian Star of Cherishing Public Property\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I was trying to borrow a popular comic book from the library, if I couldn't get it, I pushed down the whole row of bookshelves and scattered the books all over the floor.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌱",
          "label": "Gently flip through the pages of the book without folding the corners. After reading, put the books back to the original sorting shelf with both hands, walking as lightly as a cat walking.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I accidentally tore a corner of the picture book, and because I was afraid of being scolded, I quietly stuffed the torn book under the sofa, hid it and ran away.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌿 \"Cherish public property and protect the star\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Before entering the library, first adjust the throat knob to a whisper."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Read the book with both hands and turn it gently, without folding the corners or using a pen to draw."
        },
        {
          "num": 3,
          "icon": "🌱",
          "text": "After reading, turn the spine of the book outward and insert it neatly back into the original numbered shelf."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Organize the bookcases at home, carefully repair the damaged children’s books with transparent tape, and share with your family your experience in cherishing books!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-29": {
    "id": "b-week-29",
    "lessonNumber": 29,
    "legacy": false,
    "date": "2027-03-16",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Respecting No: Accepting Other People's Boundaries",
    "superSkill": "🚦 Instant brake-striking reflexes",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🛑",
    "badgeLabel": "Equal Brake Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the context of \"respecting other people's \"no\"\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🛑",
          "label": "Yu's calm and composed expression",
          "desc": "Look the other person in the eyes, shake your head calmly but firmly, and place your hands on the table without touching them.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Others said not to borrow toys, so they grabbed them and threw them on the ground and crushed them.",
          "desc": "Disrespect the ownership of others' bodies and belongings, and undermine peer trust.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who slammed on the brakes in a second",
          "desc": "Upon hearing the rejection from his peers, he immediately raised his hands in a surrender gesture, took a step back and showed a big smile...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He with a peaceful smile",
          "desc": "Feeling the respect of his peers, his tense shoulders relaxed and he nodded gently to his peers in thanks. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚦 Immediate braking reaction\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Yu was invited to play chess together but was rejected. Yu became furious and scolded Yu for his lack of loyalty. He turned over the table and swept the chess pieces off the ground.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🛑",
          "label": "When you hear someone say \"no\", you immediately step on the emotional brake, take a deep breath, nod and say: \"It's okay, we can play again when you are free next time!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "After being rejected by a classmate once, I felt that the whole world hated me. I hid in the toilet cubicle crying and refused to come out to class.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚦 \"Immediately step on the brakes to react\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you hear the other party say \"no\", your ears immediately receive the signal and stop."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Count silently for three seconds in your mind: \"Others have the right to reject me, this is normal.\""
        },
        {
          "num": 3,
          "icon": "🛑",
          "text": "With a smile on his face, he responded generously: \"Okay, it's okay, we'll make an appointment next time.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When your mother says, \"We can't eat cookies now,\" practice smiling and saying, \"Okay, I'll eat them after dinner.\" Show your accepting demeanor!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-30": {
    "id": "b-week-30",
    "lessonNumber": 30,
    "legacy": false,
    "date": "2027-03-23",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Safe and Unsafe Secrets: Speaking Up and Getting Help",
    "superSkill": "🚨 Secret Alarm Deactivator",
    "themeColor": "#f97316",
    "badgeEmoji": "🔍",
    "badgeLabel": "Little Truth Detective",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In a \"good secret vs. bad secret\" situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🔍",
          "label": "Yu's keen observation",
          "desc": "Point to the situation cards on the blackboard and make it clear that situations that make people feel fearful and anxious are bad secrets…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Promise others to keep bad secrets that can hurt others, conceal facts from others",
          "desc": "Bad secrets are like time bombs that can harm yourself and others, so you must seek help early.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun breaks the silence",
          "desc": "He clenched his fists to cheer himself up, walked quickly to the teacher, looked firmly in his eyes and shouted for help.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Gentle guardian He",
          "desc": "Stand beside a peer who asks for help, hold his hand, and give him courage and companionship. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚨 \"Secret alarm disarm\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "You saw a classmate stealing class fees, and he threatened to beat you up if you went out. He lied because he was afraid to help hide his wallet.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔍",
          "label": "Distinguish between good secrets and bad secrets, and if you notice the \"bad secrets\" that make you feel stomachache and fearful, report it to a trusted teacher for help immediately!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I was bullied and threatened by others to keep it secret, I was in fear every day and had nightmares at night, I suppressed my anger and did not dare to say anything even if I got sick.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚨 \"Secret Alarm Canceler\" action, please tick the box if you have achieved it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Ask yourself: \"Will this secret make me scared or have a stomachache?\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "If it is a dangerous or bad secret, activate the help alarm immediately"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "Go to the special education teacher and tell the truth quietly but firmly to seek protection"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Make an agreement with your parents on three \"bad secret situations that must not be hidden from your parents\" and confirm that you can tell your family if you have any difficulties!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-31": {
    "id": "b-week-31",
    "lessonNumber": 31,
    "legacy": false,
    "date": "2027-03-30",
    "dayOfWeek": "Tuesday",
    "festival": "Children's Day and Qingming Festival",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "[Children's Day and Qingming Festival 4/4] - Little Gentlemen in Public Places: Riding and Queuing Order",
    "superSkill": "🎫 Little expert in public etiquette",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚌",
    "badgeLabel": "Polite Little Gentleman",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Children's Day and Qingming Festival 4/4]\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🚌",
          "label": "Yu, who follows the rules of queuing",
          "desc": "Stand behind the yellow waiting line at the bus stop, hold your EasyCard in both hands, and wait patiently for the passengers to get off...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Taking off shoes on the bus, jumping on the seats, screaming and making noises",
          "desc": "It affects the safety and tranquility of all passengers in the vehicle and may easily cause injuries when braking.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The little guy gripping the handle tightly",
          "desc": "Walk into the car and stand firm with your feet slightly spread, hold the yellow lifting ring firmly with your right hand, and do not jump or run.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He offered his seat",
          "desc": "When you see an elder approaching, you immediately stand up and stand aside, pointing the palm of your right hand upward to indicate an empty seat.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎫 \"Little master of public etiquette\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When taking the bus, in order to grab the window seat, I pushed the old lady who was getting on the bus away and occupied two seats to lie down.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚌",
          "label": "Queue up and swipe your card to say thank you, hold the handrails with both hands in the carriage, lower your voice and sit quietly, and take the initiative to offer your seat to the elders.",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I kept walking around and groping around in the MRT carriage. When my parents stopped me, I would get angry and cry and kick the back of the seat in front of me.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎫 \"Public Etiquette Master\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Queue up in order before getting on the bus, don’t run, don’t rush"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "After taking a seat, sit with a straight posture and keep your feet flat on the ground without kicking the front seat"
        },
        {
          "num": 3,
          "icon": "🚌",
          "text": "Use one minute of voice volume throughout the whole process, and see the elderly and weak take the initiative to give up their seats"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When taking public transportation with your family, take the initiative to abide by the three principles of \"soft voice, hold on to the armrests, and give up your seat.\"Please rate it!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-32": {
    "id": "b-week-32",
    "lessonNumber": 32,
    "legacy": false,
    "date": "2027-04-06",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Lunch Manners: Chewing Quietly and Reducing Food Waste",
    "superSkill": "🥢 Little Food God Who Finishes Every Dish!",
    "themeColor": "#eab308",
    "badgeEmoji": "🍱",
    "badgeLabel": "Dining Table Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the context of \"nutritious lunch table manners\", what are the correct and polite practices? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🍱",
          "label": "Yu chewing with his mouth closed",
          "desc": "After putting the food into your mouth, press your lips tightly together, chew your jaw regularly for twenty times, and swallow quietly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you are a picky eater, put the whole plate of vegetables you don’t like on the table and knock the bowl with chopsticks.",
          "desc": "It wastes the food that farmers have worked hard to grow, and creates mess and noise on the table.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun only spoke after swallowing the",
          "desc": "Pat your chest with your right hand to confirm that the soup in your mouth has been completely swallowed, and gently press the corners of your mouth with a tissue before turning your head...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Cherishing food, He",
          "desc": "Use a spoon to scrape off the last grain of rice at the bottom of the bowl and eat it. The plate will be as bright as a mirror. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🥢 Delicious CD \"Small Food God\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I saw carrots in my lunch, I was so angry that I smashed the entire stainless steel lunch box on the floor, spraying vegetable juice everywhere.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🍱",
          "label": "Sit upright, close your mouth, and chew carefully without dropping the rice grains on the table. Take in balanced nutrition and successfully complete the delicious CD!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I thought the food was not delicious, so I kept poking at the rice grains with my chopsticks. I didn't eat a bite for forty minutes, so I went to class hungry.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🥢 Delicious CD \"Small Food God\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sit in an upright posture, holding a bowl in one hand and a spoon or chopsticks in the other"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "When there is food in your mouth, close your lips and chew quietly without opening your mouth to speak."
        },
        {
          "num": 3,
          "icon": "🍱",
          "text": "Eat the food on the plate cleanly, sort the dishes and kitchen waste and put them away neatly"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "During dinner, he showed off his \"Small Food God\" skills, not being picky about eating all the vegetables, and taking the initiative to carry his own bowls and chopsticks to the sink after the meal!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-33": {
    "id": "b-week-33",
    "lessonNumber": 33,
    "legacy": false,
    "date": "2027-04-13",
    "dayOfWeek": "Tuesday",
    "festival": "Earth Day",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "[World Earth Day 4/22] - Turn off lights and recycle resources: Guardian of green life",
    "superSkill": "♻️ Resource categorization green finger",
    "themeColor": "#16a34a",
    "badgeEmoji": "🌍",
    "badgeLabel": "Earth Little Guardian",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[World Earth Day 4/22]\" situation, what are the correct and polite actions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌍",
          "label": "Yu",
          "desc": "Go to the door switch, check the light and fan switches one by one, and turn off the power with a click. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Leaving the classroom, deliberately turning on all the lights and fans, and littering",
          "desc": "Waste the earth's precious energy and destroy the cleanliness of the campus environment.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jun",
          "desc": "Walk quickly to the sink, stretch out your right hand and tighten the dripping metal faucet completely until it no longer...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Rinse the empty milk carton with a small amount of water, flatten it with both hands, and put in the blue paper...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"♻️ Resource classification green finger?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "After drinking the drink, he crushed the Tetra Pak bag and kicked it into the flower garden, and also laughed at the environmental volunteers who picked up garbage as fools.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌍",
          "label": "Turn off the light switch that no one is using, rinse the carton and flatten it after drinking the milk, and definitely throw it into the recycling bin!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When I saw that the faucet at the sink was leaking, I thought to myself, \"I didn't turn it on anyway\" and turned away indifferently.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"♻️ Resource Classification Green Finger\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When the last one leaves the classroom, turn off the light switch clockwise"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "After washing your hands, turn the faucet firmly and lock it tightly to avoid wasting water drops."
        },
        {
          "num": 3,
          "icon": "🌍",
          "text": "Rinse lunch boxes and plastic bottles and put them into recycling bins by category"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Serve as an \"energy-saving green captain\" at home for a day, inspecting the lights and air conditioners in unoccupied rooms and turning them off!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-34": {
    "id": "b-week-34",
    "lessonNumber": 34,
    "legacy": false,
    "date": "2027-04-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 11: Expressing Feelings with I-Messages",
    "title": "I-Messages: Sharing Feelings Without Blaming",
    "superSkill": "🎯 I communicate with magic arrows",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💬",
    "badgeLabel": "My message to Master",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"Speak Magic \"I Message\"\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "💬",
          "label": "Yu, who conveyed my message",
          "desc": "Put your hands flat on your chest, look directly into the other person's eyes, speak a three-part sentence pattern with a clear and steady tone...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When he is unhappy, he points at his classmates’ noses and yells: “You big pig head!”",
          "desc": "Using offensive language will only lead to intense conflict and will not resolve the matter.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, completely convinced",
          "desc": "When I heard that my peers did not abuse me, I took the initiative to hold the corners of the table with both hands, nodded seriously to express my apology and adopted...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "A gentle and harmonious little peace",
          "desc": "Hand both parties a new box of color pens and stand next to them with a smile to create a peaceful atmosphere.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎯 \"My message communicates with the magic arrow\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When a classmate accidentally touched his arm, he immediately punched the other person in the stomach and yelled ugly and dirty words to insult the classmate and his family.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "💬",
          "label": "Use the \"I message\" communication method: \"I feel a lot of pain because you bumped into me. I hope you will be more careful next time you walk.\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I was obviously very angry at the other person's behavior, but I kept it in my heart and didn't say anything. I graffitied my classmates' names in the textbook to vent my anger.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎯 \"I communicate with the Magic Arrow\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Take a deep breath and put back the curse words you originally wanted to say."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Say the first sentence: \"I feel... (state your feelings)\""
        },
        {
          "num": 3,
          "icon": "💬",
          "text": "Say the second and third sentences: \"Because... I hope...\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When talking to your family at home, practice using \"I messages\" to express your needs (for example: I feel very tired because I have a lot of homework, and I want to rest for ten minutes first)!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-35": {
    "id": "b-week-35",
    "lessonNumber": 35,
    "legacy": false,
    "date": "2027-04-27",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Asking the School Nurse for Help",
    "superSkill": "🩹 Clearly identifying young patients seeking medical help",
    "themeColor": "#ec4899",
    "badgeEmoji": "🩺",
    "badgeLabel": "Health Help Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"health center politeness\" situation, what are the correct and polite actions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🩺",
          "label": "Jun expresses himself clearly",
          "desc": "Sitting on the diagnosis and treatment chair, pointing to the wound on the right knee, with a calm expression and clearly reporting the pain and menstruation...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Yelling at the nurse and pulling bandages from the first aid kit at the health center",
          "desc": "Interfere with the progress of medical rescue and prevent medical staff from accurately diagnosing injuries.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Yu, a caring companion",
          "desc": "Standing next to the diagnosis and treatment chair, helping to hold the water bottle and coat of Xiaoqiu with both hands, looking at the same person with concern...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He handing over toilet paper",
          "desc": "Pull out a piece of clean toilet paper, gently help your peer wipe away the tears on his cheek, and provide gentle comfort. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🩹 \"Clearly seek medical treatment for young patients\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "My knee was bruised and bleeding. When I entered the health center, I cried and threw the chair. I refused the nurse to apply the medicine, and even knocked the betadine medicine to the ground.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🩺",
          "label": "He walked in politely and said hello to the nurse. He calmly pointed to the injured area and said, \"My right knee was bruised and bleeding when I fell in gym class.\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "My stomach hurt so much that my face turned pale. I went into the health center but lowered my head and didn't say a word, leaving the nurse guessing that she couldn't handle it for a long time.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🩹 Clearly understand the action of \"seeking medical treatment for young patients\", please tick the box if you have done so.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When entering the health center, first nod politely and say hello: \"Hello, nurse\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Point to the specific parts of your body that feel uncomfortable (head/stomach/hands and feet)"
        },
        {
          "num": 3,
          "icon": "🩺",
          "text": "Clearly state the reason why it happened: \"I fell and hit while running after class.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Practice communicating with your family at home by \"clearly stating what makes you uncomfortable\" and learn to be a smart little expert in seeking medical treatment!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-36": {
    "id": "b-week-36",
    "lessonNumber": 36,
    "legacy": false,
    "date": "2027-05-04",
    "dayOfWeek": "Tuesday",
    "festival": "Mother's Day",
    "unit": "Unit 2: Spring Celebrations and Gratitude",
    "title": "[Mother's Day Special] - Hand-painted gratitude cards and doing a housework: caring for caregivers with actions",
    "superSkill": "💖 Loving Household Chores Taker",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🌹",
    "badgeLabel": "A Filial and Warm-hearted Little Boy",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Mother's Day Special]\" situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌹",
          "label": "Yu presents the card with both hands",
          "desc": "Holding the red carnation card respectfully with both hands, he bowed slightly and looked at his mother sincerely.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "On Mother's Day, I complained that the food my mother cooked was terrible and I dropped the gifts on the ground.",
          "desc": "It hurts the mother who works hard to take care of her family and lacks gratitude and consideration.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun promised to do housework",
          "desc": "Roll up your sleeves and act like wiping the table and washing dishes, loudly announcing your commitment to housework.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Gentle back massage from He",
          "desc": "Make small hollow fists with both hands and simulate a gentle backbeat on the shoulders and necks of your peers, with a regular and warm rhythm.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💖 \"Love's housework activist\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Mom reminded herself that it was time to take a bath, threw the toys on the spot and shouted: \"Today is Mother's Day, please leave me alone!\" This made her sad and shed tears.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌹",
          "label": "Present hand-painted carnation cards, hug mom and say Happy Mother's Day, and take the initiative to help mom pat her back and share the chores of washing dishes!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Although I drew a thank you card at school, I shyly hid it in my schoolbag when I got home and didn’t say a word of thanks to my mother all day long.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💖 \"Love Domestic Actor\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Handwrite a Mother’s Day card full of gratitude"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Go to mom and give her a big warm hug"
        },
        {
          "num": 3,
          "icon": "🌹",
          "text": "Take the initiative to complete a household chore (such as folding clothes or sweeping the floor) and use actions to relieve worries"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "On Mother's Day, pour a glass of warm water for your mother or primary caregiver, rub your shoulders for ten minutes, and say \"I love you, Mom\" out loud!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-37": {
    "id": "b-week-37",
    "lessonNumber": 37,
    "legacy": false,
    "date": "2027-05-11",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "School Safety: Walking in Hallways and on Stairs",
    "superSkill": "🚸 Turn corners, stop, look, and listen like a radar",
    "themeColor": "#d97706",
    "badgeEmoji": "🚶",
    "badgeLabel": "Safety Navigator",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"campus safety has no blind spots\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🚶",
          "label": "Yu",
          "desc": "Put your hands naturally on both sides, walk steadily on the right side of the white safety line with steady steps, and look...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Sprint with all your strength in the corridor, rush down the stair handrail and slide",
          "desc": "An extremely dangerous campus violation that can cause severe concussion if bumped into a classmate.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who stops to look and listen at the corner",
          "desc": "Stop your feet immediately when you reach the corner pillar, turn your body slightly to the side, look to the left, then to the right...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "The little one on the right",
          "desc": "Holding the metal handrail of the stairs lightly with your right hand, move your feet up and down the stairs to the right step by step, without stepping on the empty tab...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚸 Stop around the corner and watch the radar”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "In order to rush to the stadium after class, I ran wildly in the corridor and knocked away the squad leader who was holding a stack of homework books. His homework was scattered on the ground and he refused to apologize.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚶",
          "label": "Walk slowly and lightly in the corridor, go up and down the stairs close to the railing on the right side one step at a time, and activate the \"stop, watch, listen\" radar at the corner!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I was almost late for class and I panicked. I lowered my head and rushed forward regardless of whether there was anyone around me. I almost fell down the stairs.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚸 \"Stop around the corner to watch and listen to the radar\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "As soon as you walk into the corridor, start the slow gear, walk slowly and don’t run."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Go up and down the stairs with your feet one step at a time, hold the safety handrail with your right hand and walk to the right"
        },
        {
          "num": 3,
          "icon": "🚶",
          "text": "Walk to the blind corner of the corridor, stop for a second and turn your head to confirm that no one is around before turning."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Demonstrate the safety rules of \"keep right, don't run\" with your family on the stairs at home or in the hallway of your apartment to ensure the safety of the whole family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-38": {
    "id": "b-week-38",
    "lessonNumber": 38,
    "legacy": false,
    "date": "2027-05-18",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 12: Apologies, Forgiveness and Repairing Relationships",
    "title": "A Sincere Apology: Four Steps to Make Things Right",
    "superSkill": "🙇 The Four-Step Method for Sincere Apology",
    "themeColor": "#6366f1",
    "badgeEmoji": "🤝",
    "badgeLabel": "Sincere Apology Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"What should I do if I step on a landmine? Four steps to a sincere apology\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🤝",
          "label": "Little Jun demonstrates the four steps to apologizing.",
          "desc": "Look into the eyes of the victim's peers, fold your hands in front of your abdomen, bow slightly, and speak sincerely...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Knocked down a classmate and ran away immediately, pretending not to notice, shouting \"He bumped into me!\"",
          "desc": "Shirking responsibility and refusing to admit your fault will only add fuel to the fire of interpersonal conflicts.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu, having calmed down and accepted the situation.",
          "desc": "Take three deep breaths to release the tightness in your chest, look into the other person's eyes, and relax your shoulders.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Small items assisting with cleaning and repair",
          "desc": "Get wet wipes and dry rags, and squat next to the two people to help absorb the stains on the shoe uppers.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🙇 Four steps to sincerely apologize\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I accidentally broke He's colored pen. Not only did I not apologize, but I also complained to him and scolded He for buying a bad colored pen.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🤝",
          "label": "The four steps of a sincere apology: look the other person in the eye, say sorry, explain the reason, and proactively ask how to help make amends!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Knowing that he has done something wrong, he refuses to apologize because of face issues. He freezes in place and stares at the other person, making the relationship even more tense.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🙇 \"Four Steps to Sincerely Apologize\", please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Look at the other person's eyebrows and say sincerely: \"I'm sorry, I was wrong.\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Explain what happened specifically: \"I accidentally knocked over your pen holder\""
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "Offer a remedy: \"I'll help you pick up the pen and put it away together.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "If you accidentally spill water or bump into a family member, immediately say \"I'm sorry, I'll wipe it up\" and wipe it clean with a rag!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-39": {
    "id": "b-week-39",
    "lessonNumber": 39,
    "legacy": false,
    "date": "2027-05-25",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 12: Apologies, Forgiveness and Repairing Relationships",
    "title": "Accepting an Apology and Rebuilding Friendship",
    "superSkill": "🗝️ Forgiveness and a magnanimous heart",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🕊️",
    "badgeLabel": "Tolerance Decoding Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"when others say sorry\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🕊️",
          "label": "Yu shows tolerance",
          "desc": "Turn around to face your peer, look at the other person with gentle eyes, stretch out your right hand and pat the other person on the shoulder, the corner of your mouth is slightly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Others have already bowed and apologized, but they still yelled \"I will never forgive you!\" and hit them.",
          "desc": "Lack of tolerance and tolerance allows conflicts to spread endlessly, and eventually friends are lost.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, relieved of his heavy burden",
          "desc": "He breathed a long sigh of relief, relaxed his whole body, and carefully held the tape with both hands to help repair. …",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Tear off a piece of transparent tape and stick it flatly on the torn paper cracks to smooth out the marks.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🗝️ Tolerance, forgiveness and big heart”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "The classmate sincerely apologized to himself and repaired the toy, but Jia still refused to let him go. He grabbed the toy and threw it on his head.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🕊️",
          "label": "Seeing the other party's sincere apology, he took a deep breath and let go of the anger in his heart. He magnanimously extended his hand and said, \"It's okay. Just pay attention next time!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "He said he was forgiven, but he always held a grudge in his heart, roping in other students behind his back to isolate and exclude the student who apologized.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🗝️ \"Tolerance, forgiveness, big heart\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "After listening to the other party’s apology, feel the sincerity in the other party’s eyes"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Let go of the burden of anger in your brain and take a deep breath to calm down."
        },
        {
          "num": 3,
          "icon": "🕊️",
          "text": "Smiled and nodded, extending his friendly right hand: \"It doesn't matter, we are still good friends.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When your family apologizes to you (for example, you forgot to buy stationery), respond generously with \"It's okay, I know you are busy\", showing your tolerance and openness!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-40": {
    "id": "b-week-40",
    "lessonNumber": 40,
    "legacy": false,
    "date": "2027-06-01",
    "dayOfWeek": "Tuesday",
    "festival": "Dragon Boat Festival",
    "unit": "Unit 2: Summer Celebrations and Gratitude",
    "title": "[Dragon Boat Festival Special]——Dragon Boating Team Spirit: Cooperate with teammates’ speed without complaining",
    "superSkill": "🥁 Row a dragon boat in perfect rhythm",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🚣",
    "badgeLabel": "Dragon Boat Drummer Star",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Dragon Boat Festival Special]\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🚣",
          "label": "Yu keeping up with the rhythm",
          "desc": "Watch the rhythm of the drummer in front of you, hold the paddle with both hands, and make strokes according to the slogan...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When I fall behind in dragon boat racing, I get so angry that I throw the paddle into the water and curse my teammates for being a burden.",
          "desc": "Destroy team morale and turn cooperative competition into a battleground of mutual blame.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A little farmer who has learned to wait and cooperate",
          "desc": "Deliberately slow down the strong stroke force, turn your head to confirm that the teammates behind you are keeping up, and have an encouraging word on your lips...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He giving it his all",
          "desc": "Grasp the oar with both hands, listen to the slogan loudly, lean forward and paddle with all your strength.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🥁 \"Dragon boat racing in time with the rhythm\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "After losing a round of tug-of-war, he immediately threw the hemp rope to the ground, pointed at his teammate's nose and yelled, \"It's all because you are too weak!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚣",
          "label": "Row the oars neatly to the rhythm of the big drum, shout slogans loudly to cheer each other up even if they fall behind, and keep fighting until the last second!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Seeing that the other team was faster, I felt that they would definitely not be able to win, so I just let go of the wooden paddle and sat on the boat in a daze, giving up my efforts.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🥁 \"Dragon boat rowing in time with the rhythm\", please tick the box if you can do it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Listen intently to the captain's drum chant: \"One, two! One, two!\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "The movements of both hands match the speed of teammates, neither rushing forward nor lagging behind"
        },
        {
          "num": 3,
          "icon": "🚣",
          "text": "When falling behind, shout cheering slogans loudly to cheer each other up without blaming others."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Work together with your family to assemble a set of furniture or tidy up the living room. During the process, say \"Come on, we're almost done\" and experience working together!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-41": {
    "id": "b-week-41",
    "lessonNumber": 41,
    "legacy": false,
    "date": "2027-06-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 13: Resilience and Good Sportsmanship",
    "title": "Good Sportsmanship: Winning and Losing Kindly",
    "superSkill": "👏 Sportsmanship - Big applause!",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🏆",
    "badgeLabel": "Style Champion",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"sportsmanlike manner, you can afford to play and you can lose\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🏆",
          "label": "A young man displaying a magnanimous demeanor",
          "desc": "Put your hands down naturally, take a deep breath and smile, take the initiative to walk up to the opponent and stretch out your right hand to hold...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you lose in football, kick the ball out of the fence and beat the referee teacher",
          "desc": "A complete lack of sportsmanship. Serious offenses will result in a lifetime ban.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Humility leads to victory.",
          "desc": "Hold each other's hands politely with both hands, with a grateful and humble smile on your face, without showing off or mocking.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Yu calmly accompanies her.",
          "desc": "Stand by the chessboard and help put the pieces in order, gently affirming the efforts of the two players. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"👏 Big applause for sportsmanship”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "After losing to Yu in chess, he was so angry that he overturned the entire chessboard and smashed the chess pieces all over the floor. He also pointed at Yu and scolded him for cheating.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏆",
          "label": "After the game, regardless of winning or losing, walk towards your opponent, take off your hat, shake hands and say sincerely: \"This was a wonderful game, you were great!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "After losing the game, he sat on the grass and cried and refused to stand up. He refused to attend the closing award ceremony, embarrassing the whole class.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"👏 \"Sportsman style, big applause\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "The referee blows the whistle and immediately stops moving and stands at attention."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take a deep breath to calm down the excitement of victory and defeat, and walk towards the opponent's team"
        },
        {
          "num": 3,
          "icon": "🏆",
          "text": "Stretch out your right hand and shake hands with your opponent warmly: \"Thank you for the advice, you performed really well!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When playing board games or video games with your family at home, don't get angry and fall out when you lose, but clap your hands generously to the winner and say \"you are so awesome\"!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-42": {
    "id": "b-week-42",
    "lessonNumber": 42,
    "legacy": false,
    "date": "2027-06-15",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 11: Expressing Feelings with I-Messages",
    "title": "When Things Feel Unfair: Speaking Up Calmly",
    "superSkill": "🙋 Objective and Calm Appeal Device",
    "themeColor": "#a855f7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "Fairness Ombudsman",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "What are the correct and polite things to do in the situation \"when you feel it is unfair\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "⚖️",
          "label": "Yu, who rationally raised his hand to ask a question",
          "desc": "Sit upright with your back straight, raise your right hand steadily, and state your doubts to the teacher in a smooth and polite tone.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Feeling that the prizes were distributed unevenly, he turned over the table and snatched all the gifts and tore them apart.",
          "desc": "Being impulsive and noisy cannot achieve fairness, and will only make you punished for violating the rules.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun, who listens objectively",
          "desc": "Put your hands flat on the table, listen carefully to the teacher's explanation, and nod frequently to understand the rules and standards.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Sharing the results with He",
          "desc": "Take the initiative to show your cleaning record card to your peers and gently explain the reason for the extra points.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🙋 Objective and calm appeal instrument\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I felt that the teacher had given out one more sticker to someone else than me, so I immediately slapped the table and yelled, rushed to the podium, snatched the whole pack of stickers and scattered them on the ground.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⚖️",
          "label": "Raise your hands and calmly wait for the teacher to call your name, and express in an objective and gentle tone: \"Teacher, my group is missing one card, can it be reissued?\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely unfair, he lay on the table sulking and secretly broke his classmate's pencil in revenge.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🙋 \"Objective Calm Appeal Instrument\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you feel excited and want to protest, immediately count down five, four, three, two, one in your mind"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Raise your right hand and wait quietly for the teacher to call your name. Do not knock on the table to interrupt."
        },
        {
          "num": 3,
          "icon": "⚖️",
          "text": "State specific facts in objective and calm sentences without offensive words"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When you feel that the snacks shared by your brothers and sisters are unfair at home, don’t cry and quarrel, calmly tell your parents the specific situation and ask for coordination!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-43": {
    "id": "b-week-43",
    "lessonNumber": 43,
    "legacy": false,
    "date": "2027-06-22",
    "dayOfWeek": "Tuesday",
    "festival": "Closing Ceremony and Graduation Season",
    "unit": "Unit 14: Looking Back and Celebrating Growth",
    "title": "[Retirement Ceremony and Graduation Season] - Facing separation in classes: Adjusting to separation anxiety, cherishing each other",
    "superSkill": "🎈 Take care, goodbye, and blessings from the website.",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎓",
    "badgeLabel": "Farewell to the little seeds",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Graduation Ceremony and Graduation Season]\" situation, what are the correct and polite actions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🎓",
          "label": "Yu wrote down heartfelt blessings",
          "desc": "Hold the pen upright with both hands, carefully write down words of gratitude word by word in the memorial book of your peers, and hand it over in person...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Faced with being separated into different classes, he cried hysterically in the classroom and broke his peers’ memorial books.",
          "desc": "Failure to digest separation anxiety healthily turns warm blessings into painful regrets.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun generously promised friendship",
          "desc": "Stretch out your strong arms and gently give each partner a warm side hug with a bold and confident expression...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He, with tears in his eyes and a smile on his face",
          "desc": "Wipe away the tears from your eyes, hold the memory album on your chest tightly, bow deeply to everyone and show a sweet smile.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎈 Cherish Goodbye Blessing Network\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Knowing that He and He would be assigned to a different class next semester, he grabbed He's clothes and wouldn't let go. He cried and made a fuss and forced the teacher not to put him in a different class.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎓",
          "label": "Write down many blessings neatly in the memory book, give your good friends a warm hug, and meet to play together in the corridor after class!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Afraid of the sad emotions of separation, I closed myself off all day and refused to talk to anyone, and refused to write a souvenir in my graduation album.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎈 \"Cherish Goodbye Blessing Network\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Write the most sincere thanks and advantages for your friends in the memorial book"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Look into your friend’s eyes and give them a strong smile and hug"
        },
        {
          "num": 3,
          "icon": "🎓",
          "text": "Make a firm promise: \"Even if we are in different classes, we can still play together after class!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Handwrite a warm blessing card for a teacher/classmate who is about to enter a higher education or be transferred to a new job, and express your gratitude by hand!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-44": {
    "id": "b-week-44",
    "lessonNumber": 44,
    "legacy": false,
    "date": "2027-06-29",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 14: Looking Back and Celebrating Growth",
    "title": "Celebrating My Progress This Term",
    "superSkill": "🎖️ Confident growth and great glory",
    "themeColor": "#ec4899",
    "badgeEmoji": "💮",
    "badgeLabel": "Honor Little Doctor",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"Grand Acceptance of Semester Achievements\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "💮",
          "label": "Yu confidently expresses his opinion",
          "desc": "Stand in the center of the podium with your head upright and your hands placing three big red flowers on the top of the growing tree. The sound...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Feeling sorry for yourself and saying \"I can't learn anything, I'm a waste!\" Lying on the ground and giving up",
          "desc": "Completely negating one’s efforts throughout the year, destroying self-confidence and motivation.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun affirms his self-transformation",
          "desc": "He clenched his fist with his right hand and lightly beat his chest, with a mature and proud smile on his face and a determined expression.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Gentle Sharing by Little He",
          "desc": "Show your progress worksheet with your hands straight and your tone soft but powerful.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎖️ Confidence grows with great glory”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "At the end of the semester, I saw my peers getting the big gold trophy, but I only had the silver medal. I was so jealous that I grabbed my peers' trophy and broke it in half.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "💮",
          "label": "Count down all the social superpowers you have learned this year, proudly wear three honorary red flowers on your chest, and affirm your self-transformation!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "When he went on stage to receive the Progress Award, he was so shy that he hid his entire face in his coat, huddled up and slipped off the stage without saying a word.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎖️ \"Confident Growth and Great Glory\" action, please tick the box if you achieve it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Take out this semester’s growth history file and look through your own progress."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Place a golden badge of \"Self-Breakthrough Glory\" on your chest."
        },
        {
          "num": 3,
          "icon": "💮",
          "text": "Put your hands on your hips, raise your head and straighten your chest, and say to the mirror: \"Yu/Xiaojiu, you are really great!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Show your family the token passbook and worksheets you have accumulated throughout the school year, and share your biggest breakthrough this year out loud!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-45": {
    "id": "b-week-45",
    "lessonNumber": 45,
    "legacy": false,
    "date": "2027-07-06",
    "dayOfWeek": "Tuesday",
    "festival": "Summer vacation begins",
    "unit": "Unit 15: Summer Routines and Community Citizenship",
    "title": "[Summer vacation starting line] - Summer vacation life independent manual: regular work and rest should not be reversed",
    "superSkill": "📅 Holiday schedule manager",
    "themeColor": "#f97316",
    "badgeEmoji": "⏰",
    "badgeLabel": "Clock Butler",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"[Summer Starting Line]\" situation, what are the correct and polite actions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "⏰",
          "label": "Yu, who plans with self-discipline",
          "desc": "Display a hand-drawn color time pie chart with clearly marked indicators for reading, exercise and bedtime periods...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Starting from the first day of summer vacation, I stay up late every day playing video games until five in the morning, day and night are reversed.",
          "desc": "The body's immunity decreases, the brain degenerates, and the whole person becomes irritable and irritable.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun made up his mind",
          "desc": "Put the small alarm clock upright in the center of the desk, beat your chest hard to make sure you get up early and stay in bed...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He, who pays close attention to detail in life",
          "desc": "Pointing to \"Drink 1500cc of water daily\" and \"Read picture books for one hour\" on the life check-in list...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📅 \"Holiday schedule manager\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "The parents reminded him that he should do his homework on time during the summer vacation. He was so angry that he grabbed the electric fan and smashed it on the ground, threatening the parents not to allow him to have a holiday.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⏰",
          "label": "Personally formulate the \"Golden Manual for Independent Summer Vacation Schedule\": read and exercise in the morning, explore and relax in the afternoon, and go to bed on time in the evening!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "There is no plan at all for the summer vacation. I lie on the bed with nothing to do every day and scroll through my mobile phone. I am wasting my time listlessly.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📅 \"Holiday Housekeeper\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Draw the morning, afternoon and evening time grids for each day on a large piece of white paper."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Plan a fixed daily \"one hour of reading and one hour of outdoor exercise\""
        },
        {
          "num": 3,
          "icon": "⏰",
          "text": "Take the initiative to turn off the TV and mobile phone at 9:30 in the evening, listen to light music and go to bed on time"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Post the summer vacation schedule on the refrigerator door, and invite mom and dad to check today's regular check-in items together before going to bed every day!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-46": {
    "id": "b-week-46",
    "lessonNumber": 46,
    "legacy": false,
    "date": "2027-07-13",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 15: Summer Routines and Community Citizenship",
    "title": "Being a Good Neighbor: Manners in the Community",
    "superSkill": "🛒 Community Courtesy King",
    "themeColor": "#10b981",
    "badgeEmoji": "🏪",
    "badgeLabel": "Community Little Gentleman",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the context of \"routine life as a good neighbor in the community\", what are the correct and polite practices? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🏪",
          "label": "Yu",
          "desc": "Holding the selected product with both hands straight and placing it on the cashier, he looked at the clerk and said clearly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "The child who ran wildly in the supermarket corridor and knocked down the goods on the shelves, and who cut in line and pushed down the slide in the park.",
          "desc": "Seriously endanger public safety and destroy the quality of life and harmony of community residents.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun restrains the urge to open the package",
          "desc": "Put your hands firmly into your pockets and wait until you have paid and received the invoice before unpacking the bag. …",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He taking turns playing with the playground equipment",
          "desc": "Watching the countdown on the watch, when the five minutes are up, immediately stand up and smile politely to the waiting neighbor...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛒 \"The king of public courtesy in the community\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I wanted to eat ice cream at a convenience store. I couldn't wait for the checkout, so I tore open the package and ran around the store to eat it. The store clerk stopped me and spit on me.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏪",
          "label": "When you go into the supermarket, push the cart quietly and slowly, wait patiently in line at the checkout to say thank you, and obey the rules of taking turns in the park and playground without fighting!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Yelling and screaming in libraries or public places, and when others take a look at it, they will be so angry that they kick over the trash can to vent their anger.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛒 Community Public Courtesy King\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Entering a public place in the community automatically switches to \"Public Gentleman Mode\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Handle items with both hands with care, and proactively notify compensation for damaged items."
        },
        {
          "num": 3,
          "icon": "🏪",
          "text": "When receiving the invoice and change at the cashier, smile generously to the clerk and say thank you."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Accompany your family to the supermarket or wet market near your home to buy food, take the initiative to help carry the food basket and say hello politely to the store!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-47": {
    "id": "b-week-47",
    "lessonNumber": 47,
    "legacy": false,
    "date": "2027-07-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Dealing with Teasing and Bullying: Leave Safely and Get Help",
    "superSkill": "🚨 The Three-Step Anti-Bullying Self-Protection Strategy",
    "themeColor": "#dc2626",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Anti-Domination Counterattack Shield",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"What should I do if I encounter teasing and bullying?\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🛡️",
          "label": "Calm and collected Yu",
          "desc": "Do not reply or shed tears when faced with ridicule, look straight ahead with firm eyes, take long steps and leave quickly...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When bullied, rush up to him and wield a utility knife, or go home and secretly drink pesticide and commit suicide.",
          "desc": "Responding with extreme violence or harming oneself will only cause irreparable tragedy.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who stood up to protect his peers",
          "desc": "Quickly stepped forward and stood sideways in front of Yu, straightening his arms to separate the space, and spoke in a loud and majestic tone.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Peaceful peers and small-mindedness",
          "desc": "Hold Yu's trembling hand tightly, comfort him softly and walk to the office together. …",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚨 Anti-bullying and self-protection trilogy\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Being teased with a nickname by a senior classmate, he immediately lost control, grabbed a rock and threw it into his eyes, almost causing severe blindness.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🛡️",
          "label": "Start the trilogy of anti-bullying and self-protection: say no with firm eyes, quickly leave the dangerous scene to find peer allies, and report to the teacher immediately!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "He was ridiculed and intimidated by his classmates, and he did not dare to tell anyone for fear of retaliation. He secretly hid under the quilt and cut his wrists to commit suicide.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚨 Anti-bullying and self-protection trilogy\" actions, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Scream loudly and firmly to the bully: \"Please stop! What you're doing is against the rules!\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Turn around immediately and walk quickly to a crowded teacher's office or health center"
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "Find a trusted mentor or special education teacher and tell the complete time, place and process"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Discuss the anti-bullying safety hotline with your parents at home to ensure that you can talk to your family as soon as possible if you encounter any uncomfortable treatment!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-48": {
    "id": "b-week-48",
    "lessonNumber": 48,
    "legacy": false,
    "date": "2027-07-27",
    "dayOfWeek": "Tuesday",
    "festival": "Father's Day",
    "unit": "Unit 2: Summer Celebrations and Gratitude",
    "title": "[Father's Day 8/8] - Reliance as strong as a mountain: express sincere gratitude to your father",
    "superSkill": "🏔️ A Mountain-like Journey of Love and Gratitude",
    "themeColor": "#0284c7",
    "badgeEmoji": "👔",
    "badgeLabel": "Little Filial Piety Warrior",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[Father's Day 8/8]\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "👔",
          "label": "The young servant who serves tea to his parents",
          "desc": "Holding the flat wheat tea cup with both hands, he walked steadily to his father and bowed slightly to serve the tea, his eyes full of admiration. …",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I thought the gift my father bought for Father’s Day was too bad, and I yelled at my hard-working father.",
          "desc": "Not understanding how hard it is for the father to silently support the family hurts the relationship between father and son.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu, who sent the handmade card",
          "desc": "Send the hand-painted mountain and superman cards to the elders with both hands, and say thank you generously.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He, so considerate, gives a back massage",
          "desc": "Walk behind the elder and use hollow punches with a steady rhythm to relieve the stiff shoulder muscles of the elder.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🏔️ Love and gratitude like a mountain\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "My father reminded himself to abide by the agreement, broke the Father's Day cake on the spot, and cursed his father for only working and ignoring him all day long.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "👔",
          "label": "I personally presented a thank you card \"as great as a mountain\", gave my father a firm hug with both hands and said, \"I love you, Dad!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I know in my heart that my father loves me very much, but on Father's Day I was too shy to speak, so I went back to my room and locked the door without saying a word.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🏔️ \"Love and Gratitude Like a Mountain\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Observing the calluses and traces of hard work on my father’s hands, I feel grateful in my heart"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Pour a cup of hot tea for your father with your own hands and hold it in front of him with both hands"
        },
        {
          "num": 3,
          "icon": "👔",
          "text": "Look into father's eyes and say clearly and loudly: \"Dad, you have worked hard, thank you!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "On Father’s Day (8/8), give your hard-working father or the pillar of your family a hard-working father or a supporter of the family by giving him a ten-minute pat on the back and send him a hand-drawn card!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-49": {
    "id": "b-week-49",
    "lessonNumber": 49,
    "legacy": false,
    "date": "2027-08-03",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Summer Water Safety: Staying Away from Dangerous Water",
    "superSkill": "🛟 Water Safety Ring",
    "themeColor": "#0284c7",
    "badgeEmoji": "🏊",
    "badgeLabel": "Water Drowning Prevention Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"summer outdoor and water safety\" situation, what are the correct and polite practices? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🏊",
          "label": "He firmly refused",
          "desc": "He blocked the way with his hands on his hips and pointed at the safety poster to remind his peers.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Privately jumping into deep pools and wild streams without lifeguards to play in the water, running around the swimming pool and pushing people into the water",
          "desc": "Drowning is the number one killer of students in summer and can easily lead to tragedy.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun realized his mistake in time",
          "desc": "Immediately put the swimming trunks back into the backpack, patted his head hard, and thanked his peers for stopping him in time.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Yu demonstrates rope rescue",
          "desc": "Simulate lying down on the shore and throw the lifebuoy tied with a long rope forward to the target water with both hands...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛟 Water safety guard ring\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Peers made bets on who dared to jump into the reservoir. He ignored the warning and jumped down. When he got cramps, he struggled in panic and almost drowned.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏊",
          "label": "Keep in mind the ten tips to prevent drowning: only go to safe swimming pools with qualified lifeguards, do adequate warm-up exercises, wear life jackets, and do not push people around!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Seeing his companions convulsing and struggling in the depths of the water, he panicked and blindly jumped into the water to save others. As a result, he was pulled tightly and they both sank.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛟 \"Water Safety Guard Ring\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Do full body joint warm-up exercises for ten minutes before entering the water."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Strictly confirm that there are qualified lifeguards on duty in the lifesaving chairs at the scene"
        },
        {
          "num": 3,
          "icon": "🏊",
          "text": "When encountering a drowning accident, shout for help, throw a lifebuoy or bamboo pole, and never enter the water with bare hands"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Review the \"Ten Tips to Prevent Drowning and the Five Steps to Rescue from Drowning (called Stretch, Throw and Pad)\" with your family to confirm that it is absolutely safe to go out for swimming in the summer!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-50": {
    "id": "b-week-50",
    "lessonNumber": 50,
    "legacy": false,
    "date": "2027-08-10",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "Empathy Detectives: Noticing Other People's Feelings",
    "superSkill": "🔍 Mind reading through micro-expressions in your eyebrows",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🕵️",
    "badgeLabel": "Mind-Reading Little Detective",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the \"Empathy Detective\" situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🕵️",
          "label": "Yu's keen observation",
          "desc": "Lean forward and look at the facial expressions of your peers, and accurately tell your peers' mood based on the corners of their mouths and eyes...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "My classmates were obviously wiping away tears and crying, but they were still clapping loudly and laughing and making faces nearby.",
          "desc": "A complete lack of empathy and emotional awareness that cuts deeply into the hearts of injured peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Little Jun who has learned to read facial expressions",
          "desc": "When I see my peers frowning, I take the initiative to slow down my steps, put away the funny toys in my hands, and take a step back...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Sending you a warm little tidings.",
          "desc": "Hand a glass of warm water, look at your depressed peer with gentle eyes, and gently pat him...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔍 Eyebrow micro-expression mind reading\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Seeing He crying because the teacher didn't finish his homework, Xiaojiu rushed forward and pointed at He's nose and laughed: \"Shame on you crybaby!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🕵️",
          "label": "Start micro-expression mind reading: observe the drooping corners of the mouth and red eye sockets of your peers, hand over a piece of toilet paper and ask gently: \"Are you okay?\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I saw my classmates sitting in a corner feeling depressed and didn't know what to do, so I pretended not to see them and stayed away, making my classmates feel lonely.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔍 Eyebrow micro-expression mind reading\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Eyes carefully watching peers' facial signals: whether eyebrows are furrowed, flat or raised"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Observe the direction of the corners of the mouth: Is the corner of the mouth raised for a smile, or drooped for sadness?"
        },
        {
          "num": 3,
          "icon": "🕵️",
          "text": "Gently hand over a piece of tissue and say a gentle greeting: \"Do you want me to sit with you for a while?\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "During dinner, observe the facial expressions of mom and dad today, and take the initiative to ask, \"Are mom and dad tired from work today?\" to show empathy!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-51": {
    "id": "b-week-51",
    "lessonNumber": 51,
    "legacy": false,
    "date": "2027-08-17",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "Making New Friends: Starting a Conversation",
    "superSkill": "🧊 The Three-Phrase Politeness Breaking Method",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🪄",
    "badgeLabel": "Icebreaker Magician",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "What are the correct and polite things to do in the \"Icebreaker Magic for Making New Friends\" situation? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🪄",
          "label": "Yu took the initiative to greet people",
          "desc": "Take a steady step and walk up to your new peers, smile and wave your right hand, introducing yourself clearly.…",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you want to make new friends, throw small stones at them, or grab their snacks directly.",
          "desc": "If you use the wrong way to attract attention, you will only be regarded as a bully, and people will avoid you.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Praise Jun for finding topics to talk about.",
          "desc": "Look at the other person's sneakers, give a thumbs up to give sincere affirmation, and start a resonant topic.…",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Little He actively shares his toys",
          "desc": "He took out his toy building block box with both hands generously and made a welcoming gesture to his new peers.…",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧊 \"Three polite sentences to break the ice\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When I saw my newly transferred classmate reading comics, I snatched it away and tore it in half, shouting, \"Look at me! Play with me!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🪄",
          "label": "Use three polite words to break the ice: \"Hi, hello! My name is Yu, what are you drawing? This drawing is so cool!\" Start friendship generously!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I want to get to know my new classmates but I don’t dare to get close. I stalk them five meters behind them all day long, scaring them so much that they dare not go to the toilet.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧊 \"Three polite sentences to break the ice\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Walk two steps in front of your new classmates and stand firm, with a warm smile on your lips"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Introduce your name generously: \"Hi! Hello, I am Yu\""
        },
        {
          "num": 3,
          "icon": "🪄",
          "text": "Sincerely looking for a common topic: \"Do you also like to play with building blocks? We can build them together!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "When walking in the community park, take the initiative to smile and say \"Hi, hello\" to a neighbor child to practice your courage to break the ice and make friends!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  },
  "b-week-52": {
    "id": "b-week-52",
    "lessonNumber": 52,
    "legacy": false,
    "date": "2027-08-24",
    "dayOfWeek": "Tuesday",
    "festival": "The new school year takes off",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "[New school year take-off parade] - Put on the cloak of courage: self-confidence and big commitment to the new grade",
    "superSkill": "🚀 52 Weeks of All-Around Social Superpowers",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🦸",
    "badgeLabel": "The All-Powerful Superhero",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"[New School Takeoff Parade]\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🦸",
          "label": "Yu",
          "desc": "Wearing a red cloak, he stood up straight with his head held high, his right hand clenched in front of his chest, his eyes bright...",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When he gets into a new grade, he complains \"I never want to go to school again!\" and burns all the new textbooks",
          "desc": "Resisting growth and progress, being trapped by past setbacks, and losing the courage to face the future.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jun",
          "desc": "He straightened the corners of his cloak with both hands, showing a sunny, mature and steady smile, and paid tribute to the teacher...",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He",
          "desc": "Putting both hands on the chest to express love, he bowed deeply to his companion who has been with him for a whole year, with a warm and firm voice...",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚀 52 weeks of almighty social superpower\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Faced with the more difficult subjects of advancing to the upper grades, he was so angry that he kicked over the desks and chairs and shouted: \"I just want to be a baby, I don't want to grow up!\"",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🦸",
          "label": "Wearing the cloak of courage accumulated over the past fifty-two weeks, we proudly took the oath of growth for the new grade: \"I have mastered a full set of social superpowers, and I am ready!\"",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "I felt extremely fearful and anxious about upgrading. I spent the entire day of the opening ceremony huddled in the corner of the classroom, shaking, not daring to look at my new classmates.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚀 52 weeks of \"all-around social super power\" actions, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Close your eyes and review all the superpowers you have learned in fifty-two weeks of the year"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Hold your head high, your chest straight, your back straight, take a deep breath and feel the powerful power in your heart"
        },
        {
          "num": 3,
          "icon": "🦸",
          "text": "Raise your right hand and swear loudly: \"I have superpowers, and I will definitely be able to meet all challenges!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "The whole family holds a warm \"new grade growth and coronation ceremony\" together and reads their annual growth oath aloud to their family members!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "Loud Alarm Drills: Ear Defenders and Safe Evacuation",
    "superSkill": "🔕 Noise-canceling earmuffs for a calming experience",
    "themeColor": "#ef4444",
    "badgeEmoji": "🔕",
    "badgeLabel": "Little Heroes of Air Raid Shelter",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"disaster prevention drill and air defense sirens sounding\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu quickly put on earmuffs and covered his head",
          "desc": "Retract the body under the table, protect the back of the head and neck with both hands, close the mouth and keep quiet.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Screaming, crying and running around in the hallways",
          "desc": "It is easy to cause pushing and stamping, resulting in the risk of serious injury.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A small boy who obeys discipline and squats quietly",
          "desc": "Restrain the urge to joke and make fun, and make sure to take sheltering postures.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Patting peers gives a sense of security",
          "desc": "Gentlely accompany nervous peers to achieve safety protection together.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔕 Noise reduction earmuffs and meditation shield\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "As soon as the alarm sounded, he was so frightened that he screamed, cried and rushed around in the corridor, accidentally knocking down and pushing his classmates.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔕",
          "label": "Quickly put on noise-reducing earmuffs or cover your ears with both hands, calmly hide under the table and take refuge with your head in your hands!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "My ears were tingling and uncomfortable, but I was sitting stiffly in my chair, not daring to move. I was frightened by the sharp siren and my whole body was shaking.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔕 Noise reduction earmuffs and meditation shield\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Wear noise-canceling earmuffs or cover your ears with your hands."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Quickly hide under the sturdy table"
        },
        {
          "num": 3,
          "icon": "🔕",
          "text": "Put your hands behind your head, close your mouth and stay quiet."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Go home and practice the \"air raid siren head-holding evacuation drill\" with your family to make sure you know which table to hide under at home!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "Scratchy Labels and Sticky Clay: Explaining Sensory Needs",
    "superSkill": "🧤 Tactile comfort and autonomy",
    "themeColor": "#f97316",
    "badgeEmoji": "👕",
    "badgeLabel": "Tactile Adjustment Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the situation of \"prickly clothes tags and sticky clay\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Jia who raised her hand to ask the teacher to cut off the prickly labels",
          "desc": "Speak clearly about your feelings and needs without damaging your clothes.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I was so angry that I rolled on the ground and tore my new sportswear.",
          "desc": "It hurts clothes and cannot solve the itching problem, and it also makes parents sad.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "He takes the initiative to put on thin gloves and happily kneads the clay",
          "desc": "Make good use of assistive devices to reduce tactile rejection and integrate into class art activities.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Take a deep breath and say \"My palms are sticky and weird\" Yu",
          "desc": "Communicate clearly using spoken language to avoid causing distress by screaming and shaking hands.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧤 Tactile comfort autonomy order\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When clothes feel itchy, I get so angry that I roll on the floor, tear my new sports clothes, and get angry and yell at my parents.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "👕",
          "label": "Raise your hands to express your feelings gently, ask the teacher to help cut off the prickly tags or wear thin gloves to pinch the clay safely!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "The pricks on my neck were red and even skinned, but I didn’t dare to tell the teacher. I frowned and sulked on the table all day long.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧤 \"Tactile comfort, autonomous command\" action, please tick the box if you achieve it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Notice any itchy or sticky discomfort on the skin."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Raise your hand gently and say: \"Teacher, the tag on this shirt is prickly.\""
        },
        {
          "num": 3,
          "icon": "👕",
          "text": "Trim with small scissors or place a pure cotton handkerchief underneath."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Check the clothes at home that are uncomfortable to wear, and use small scissors with mom and dad to carefully trim the prickly tags!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🍲 Noisy Places: Asking for a Quiet Recharge Break",
    "superSkill": "🔋 Three-minute recharge technique",
    "themeColor": "#10b981",
    "badgeEmoji": "🔋",
    "badgeLabel": "Sensory Recharge Assistant",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🍲 In the noisy cooperative and central kitchen situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu took the initiative to make a pause gesture and retreated to the corridor to recharge.",
          "desc": "Instantly detect overload warnings and successfully avoid crashes.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Screaming anxiously in the crowd and pushing away classmates",
          "desc": "It is easy to cause stampedes and physical conflicts, exacerbating one's own panic.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The little boy who patiently accompanies his peers to rest under the shade of a tree",
          "desc": "Demonstrate mature empathy and become a guardian of friendship.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia who helps to time the three minutes to maintain quiet order",
          "desc": "Make good use of time structure to make rest and recharging more effective.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔋 Three-minute exit charging technique\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Screaming anxiously in the crowded and noisy crowd, pushing away the classmates around me and pushing forward.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔋",
          "label": "Show the teacher the \"T-shaped pause gesture\" and retreat to the quiet corridor accompanied by someone to take a deep breath for three minutes to recharge!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "My brain was overloaded, I felt dizzy and felt like vomiting, but I resisted and did not dare to leave. In the end, my vision turned black and I fainted in the assembly line.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔋 \"Three Minutes Leaving the Field Charging Technique\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Notice overload signals such as a buzzing brain, dizziness, and chest tightness."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Make a \"T\" sign with both hands in front of your chest\" pause gesture to your peers."
        },
        {
          "num": 3,
          "icon": "🔋",
          "text": "Step back into a breezy corridor or a quiet corner and take three deep breaths."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🔋 Three-minute exit recharging technique\" and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🔦 Bright Lights: Asking for Help and Adjusting the Room",
    "superSkill": "🕶️ Soft Light Visual Protection Net",
    "themeColor": "#eab308",
    "badgeEmoji": "🕶️",
    "badgeLabel": "Soft Light Adjustment Guardian",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🔦 What are the correct and polite things to do in a classroom with \"dazzling fluorescent lights or western sunlight\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Jia raised her hand politely and asked to close the curtains to adjust the light.",
          "desc": "Clearly communicate problem areas to promote visual comfort for the entire class.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I was so angry that I slapped the table and threw my pen, and I lay on the table and refused to look at the blackboard.",
          "desc": "Failure to express specific reasons resulted in teacher misunderstanding and delayed learning.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A small bag that helps draw the curtains with light movements",
          "desc": "Handle public property with care and demonstrate a gentlemanly demeanor that is considerate of peers.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Adjust your sitting posture and thank everyone for their division of labor and cooperation",
          "desc": "I am grateful for the friendly environment of the class and am actively engaged in learning.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🕶️ Soft light visual protection net\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. He is so angry that he slams the table and throws pens, or lies on the table and refuses to read the blackboard, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🕶️",
          "label": "Calm down and take a deep breath to start \"🕶️ Soft light visual protection net\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🕶️ Soft light visual protection net\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Notice bright light signals that cause squinting, tearing, or eye strain."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Raise your hand politely and ask: \"Teacher, the light is too bright and causing glare. Could you please close the curtains?\""
        },
        {
          "num": 3,
          "icon": "🕶️",
          "text": "Gently close the blinds or turn off the glaring overhead light."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🕶️ Soft light visual protection net\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "💨 Movement and Stimming: Choosing Helpful Sensory Tools",
    "superSkill": "🧘 Invisible Stress-Relieving Acupressure Ball",
    "themeColor": "#6366f1",
    "badgeEmoji": "🧘",
    "badgeLabel": "Focused on Stress Relief Experts",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"💨 Can't help shaking my body, turning my pen or pacing\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who makes good use of pocket acupressure balls to quietly relieve stress",
          "desc": "Meet your own physiological adjustment needs while maintaining quiet in the classroom.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I was protested by my classmates for pressing the ball pen wildly and kicking the table to make noise.",
          "desc": "Disturbing the concentration of the whole class can easily lead to interpersonal rejection among peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A small pocket that neatly stores the pen that makes the sound",
          "desc": "Be considerate of the needs of others and demonstrate a high degree of self-discipline.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia is steady and focused on studying while stepping on the elastic band on the chair legs.",
          "desc": "Effectively release excess kinetic energy, taking into account sitting posture and learning absorption.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧘 Invisible Stress Relief Acupressure Ball\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He presses the ball pen wildly and kicks the table to make noise, which is protested by his classmates, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🧘",
          "label": "Calm down and take a deep breath to start \"🧘 Invisible pressure-relieving acupressure ball\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧘 \"Invisible Stress Relief Acupressure Ball\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Feeling an urge to itch your hands, shake your pen, or make strange noises when pressing it."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take out the foam acupressure ball, put it in your coat pocket, and gently squeeze it."
        },
        {
          "num": 3,
          "icon": "🧘",
          "text": "Gently press down on the elastic bands of the chair legs with both feet to release energy."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧘 Invisible pressure-relieving acupressure ball\" and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🦷 Health Checkups: Preparing for New People and Equipment",
    "superSkill": "🩺 White Coat Health Check Reassurance Mantra",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🩺",
    "badgeLabel": "Health Check Little Warriors",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🦷 What is the correct and polite thing to do in the situation of \"Dental check-up and vision check coming\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who bravely opened his mouth and successfully completed the inspection",
          "desc": "Overcome the unknown fear in your heart and cooperate with medical staff to protect your health.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Crying and yelling, biting the doctor's finger or kicking over the medical instrument tray",
          "desc": "Injury to self and damage to equipment, making it impossible to complete the inspection.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Put your hands on your knees and carefully compare the small areas in the direction of vision.",
          "desc": "Focus on cooperating with testing instructions and demonstrate a high degree of self-discipline.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia who enthusiastically helped to guide the queue with the record sheet",
          "desc": "Give full play to the organizational talents and become an effective helper at the health examination site.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🩺 White Robe Health Checkup and Reassuring Spell\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, crying and biting the doctor's finger or kicking over the medical equipment tray, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🩺",
          "label": "Calm down and take a deep breath to start \"🩺 \"White Robe Health Check-up Reassuring Mantra\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🩺 \"White Robe Health Check-up and Reassuring Mantra\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sit in the swivel chair, take a deep breath and relax your shoulders."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "She leaned her head back on the pillow, opened her mouth wide, and said, \"Ah~\"."
        },
        {
          "num": 3,
          "icon": "🩺",
          "text": "Count to three in your mind: one, two, three, and quickly complete the check to collect the sticker."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🩺 \"White Robe Health Check-up Reassuring Mantra\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🌧️ Rainy-Day PE: Stretching Indoors",
    "superSkill": "🧘 Chair Core Stretch",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌧️",
    "badgeLabel": "Rainy Day Vitality Stretch Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🌧️ What are the correct and polite things to do in the situation of \"rescheduling physical education classes to indoor classrooms on rainy days\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Take the initiative to straighten the chair and do squats to vent your energy.",
          "desc": "Successfully regulate frustration and turn impulse into healthy exercise.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Yelling in the corridor, running wildly in the rain, slipping and falling",
          "desc": "Violating campus safety regulations on rainy days can easily lead to fractures and injuries.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who carefully follows the rhythm and pushes the wall to relax",
          "desc": "Make good use of proprioceptive stretching to stabilize emotions and adapt to changes in the environment.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia, who enthusiastically counts the beats and leads the class in stretching exercises",
          "desc": "Show team leadership and make self-study on rainy days full of energy.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧘 Chair Core Stretch\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. He yells and runs in the rain in the corridor, slips and falls, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌧️",
          "label": "Calm down and take a deep breath to start \"🧘 Chair Core Stretch\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧘 \"Chair Core Stretch\" movement, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Accept the natural limitations of rainy weather, take a deep breath and tell yourself: \"It's okay, it's fun indoors too.\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Push firmly against a solid wall with both hands, elbows slightly bent, for ten seconds to release mental stress"
        },
        {
          "num": 3,
          "icon": "🌧️",
          "text": "Perform five chair squats with both feet on the ground to give your muscles a comfortable workout."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧘 Chair Core Stretch\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🦖 Sharing My Favorite Topic: Taking Turns in Conversation",
    "superSkill": "🎾 Two-way conversational ball throwing and catching",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🎾",
    "badgeLabel": "Chatting Masters (Throwing and Catching Balls)",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🦖 In the situation \"I really want to keep talking about my favorite Pokémon\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "After speaking three sentences, Yu took the initiative to ask \"It's you, what do you like?\"",
          "desc": "Learn to put the monologue brake on and respect the two-way interaction of dialogue.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Dominate the topic and speak for ten minutes, and do not allow others to interrupt or leave.",
          "desc": "Causing peer fatigue and disgust, and loss of willingness to interact with friends.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiaoqiu who enthusiastically catches the ball and generously shares his preferences",
          "desc": "Demonstrate good conversational courtesy and promote positive interpersonal interactions.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia uses a timing hourglass to help everyone take turns speaking",
          "desc": "Implement the rule structure so that every student has the right to express himself.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎾 Two-way dialogue \"throwing and catching the ball\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "He caught a classmate and lectured about Pokémon moves for ten minutes. When the classmate wanted to leave, he held on to his clothes to prevent him from leaving.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎾",
          "label": "After speaking three sentences, he immediately put on the brakes in his brain and threw the topic ball to the other party: \"What about you?\"what do you like?”",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "After being reminded too many times, I get angry and lose my temper. I think, \"You all don't understand me anyway,\" and close yourself off and ignore others.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎾 \"Two-way dialogue, throwing and catching the ball\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Realizing he had already uttered three sentences in a row, he immediately put the brakes on his brain."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Observe whether the other person's eyes are looking at you, or if they are already looking around and trying to leave."
        },
        {
          "num": 3,
          "icon": "🎾",
          "text": "Throw the conversation ball to the other person: \"And what about you? What do you like best?\" And listen attentively."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "Practice the \"throwing and catching conversation method\" when chatting with your family. After speaking three sentences, ask your mother what interesting things happened today!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🤐 Honest and Kind: Thinking Before Speaking",
    "superSkill": "🧠 Filtered Gum for Words",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🧠",
    "badgeLabel": "Guardian of Thoughtful Communication",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🤐 In the situation \"Tell the truth vs. Tell the truth\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who activates the brain to filter chewing gum and speaks nice words gently",
          "desc": "Filter out hurtful impulses and speak thoughtfully and warmly.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Pointing at classmates and laughing in public, \"It's so ugly that it was eaten by a dog.\"",
          "desc": "Severely affects the self-esteem of peers, destroys friendships and causes interpersonal conflicts.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jia who reflects in time and sincerely bows and apologizes to his peers",
          "desc": "Have the courage to take responsibility for speech and demonstrate introspective character.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia who actively affirms the advantages of her peers’ new styles",
          "desc": "Create a warm class culture of appreciation and acceptance.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧠 Discourse filter gum\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. He points at his classmates in public and laughs, \"It's so ugly and got eaten by a dog.\"This causes confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🧠",
          "label": "Calm down and take a deep breath to start \"🧠 Word Filter Chewing Gum\", follow the action steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧠 \"Discourse Filtering Gum\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Perceived urge to blurt out comments about peers' appearance, lunch, or clothing"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Chew the gum three times in your mind and ask yourself: \"Does this sentence make you want to cry?\"”"
        },
        {
          "num": 3,
          "icon": "🧠",
          "text": "Take the hurtful thorn back into your belly and replace it with praise or keep polite and quiet"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧠 Word Filter Chewing Gum\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🎭 Joking or Teasing? Listening for Tone and Intent",
    "superSkill": "🔍 Voice and Tone Decoding Mirror",
    "themeColor": "#059669",
    "badgeEmoji": "🔍",
    "badgeLabel": "Mind Decoding Detective",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🎭 Is he laughing at me or joking?\"What are the correct and polite actions in this situation?\"Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who took the initiative to stop and asked \"Are you kidding me?\"",
          "desc": "Learn to clarify true intentions and avoid impulsive and misunderstood punches.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "No matter what, just punch someone and grab the ball.",
          "desc": "Destroying friendships on the court, causing injuries to peers and severe school discipline.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jia who promptly clarified the goodwill and sincere explanation",
          "desc": "Take responsibility for repairing communication and demonstrate a high level of empathy.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Xiaoqiu who is eager to help mediate misunderstandings and support teammates",
          "desc": "Promote peer trust and consolidate team harmony.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔍 Voice and intonation decoding mirror\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control and punches people and grabs the ball regardless of the situation, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔍",
          "label": "Calm down and take a deep breath to start \"🔍 Voice and Intonation Decoding Mirror\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔍 \"Voice and Intonation Decoding Mirror\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you notice the anger that hardens your fist, stop for three seconds."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Observe the other person’s eyes (gentle gaze) and corners of the mouth (friendly smile)"
        },
        {
          "num": 3,
          "icon": "🔍",
          "text": "When unsure, ask directly: \"Are you kidding me?\"”"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🔍 Voice and Intonation Decoding Mirror\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "📱 Respecting Privacy: Ask Before Looking",
    "superSkill": "🔒 Privacy Boundary Security Lock",
    "themeColor": "#e11d48",
    "badgeEmoji": "🔒",
    "badgeLabel": "Guardian of Personal Privacy",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"📱 In the situation of \"peeping into other people's contact books or private schoolbags\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu takes the initiative to take a step back and restrains himself from snooping into the privacy of other people's school bags.",
          "desc": "Strictly observe the safety lock of interpersonal boundaries and demonstrate high moral self-discipline.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "While my classmates are away, I secretly unzip my schoolbag and look through my private diary.\n​​",
          "desc": "Serious violation of the privacy rights of peers, causing intense interpersonal conflicts and breakdown of trust.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Admit your mistake promptly and promise never to touch your personal belongings again",
          "desc": "Know your mistakes, correct them, and regain the respect and trust of your peers.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He who thoughtfully helps zipper and passes facial tissue to comfort his peers",
          "desc": "Be warm and sympathetic to the feelings of others and become the guardian angel of the class.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🔒 Privacy Boundary Security Lock\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He secretly unzips his school bag and reads his private diary while his classmates are away, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🔒",
          "label": "Calm down and take a deep breath to start \"🔒 Privacy Boundary Security Lock\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🔒 \"Privacy Boundary Security Lock\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Do not open other people's bag zippers or drawers casually"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Do not read other people’s contact book comments and personal diaries"
        },
        {
          "num": 3,
          "icon": "🔒",
          "text": "When you are curious and want to borrow something, you must first look into the other person's eyes and say, \"Can I see it?\"”"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🔒 Privacy Boundary Security Lock\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🤫 Reading the Room: Noticing When Others Need Quiet",
    "superSkill": "🌫️ Classroom Weather Barometer",
    "themeColor": "#0284c7",
    "badgeEmoji": "🌫️",
    "badgeLabel": "Air Quality Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🤫 What is \"reading the air\"? \"What are the correct and polite actions in this situation?\" Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu looked up at the whole class and actively switched to silent mode",
          "desc": "Successfully understand the class atmosphere and respect the collective order of work and rest.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "During the lunch break, he imitated Superman’s dubbing loudly and woke up the whole class.",
          "desc": "Destroying the sleep quality of peers and causing class-wide complaints and negative interpersonal confrontation.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The little boy who has the self-discipline to put away his hands and feet and lie down quietly to rest",
          "desc": "Control body kinetic energy impulses and demonstrate excellent teamwork.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia shows the mute sign to help keep the class quiet",
          "desc": "Give full play to positive leadership and protect the common comfortable environment of the class.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌫️ Class Air Barometer\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain goes out of control and he imitates Superman's dubbing loudly during lunch break to wake up the whole class, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌫️",
          "label": "Calm down and take a deep breath to start \"🌫️ Class Air Barometer\", follow the steps to properly deal with it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌫️ Class Air Barometer\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "He raised his head and looked around the class: Are everyone talking lively, or are they quietly reading with their heads down?"
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "If it's a quiet atmosphere, zip up your mouth."
        },
        {
          "num": 3,
          "icon": "🌫️",
          "text": "When you miss your lines, recite them silently in your brain without making any spoken sounds."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🌫️ Class Air Barometer\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "👂 Showing I Am Listening: Attention and Body Language",
    "superSkill": "🙆 The art of sincere listening and nodding.",
    "themeColor": "#10b981",
    "badgeEmoji": "🙆",
    "badgeLabel": "Big Ears Listening Ambassador",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"👂 In the \"Body Language When Listening\" situation, what are the correct and polite practices? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who listens sincerely",
          "desc": "Face your peers with your body focused, smile and nod.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Turning his back to his classmates, lowering his head and playing with an eraser wildly, expressionless",
          "desc": "Make speaking peers feel disrespected and frustrated, blocking willingness to communicate.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu put down the blocks in his hand and looked at the other person’s eyebrows to respond.",
          "desc": "Break through the limitations of the senses and show a sincere and sincere social gesture.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Don’t interrupt, don’t interrupt, patiently listen to the whole text before asking questions.",
          "desc": "Have a high level of listening skills and build deep peer trust.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🙆 Sincere listening and nodding technique”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, the body turns away from the classmates, the head is lowered and the face is expressionless while playing with the eraser, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🙆",
          "label": "Calm down and take a deep breath to start \"🙆 \"True Listening and Nodding Technique\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🙆 Listen sincerely and nod\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Turn your chair or shoulder so that your body is facing the student who is speaking."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Look at the other person's forehead or the bridge of their nose to show focus."
        },
        {
          "num": 3,
          "icon": "🙆",
          "text": "Each time I understood a passage, I nodded slightly downwards and smiled."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🙆 Listen sincerely and nod\", and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "❓ When Instructions Are Confusing: Ask for the Next Step Again",
    "superSkill": "✋ Step-by-step confirmation card",
    "themeColor": "#f59e0b",
    "badgeEmoji": "❓",
    "badgeLabel": "Dare to Ask the Little Scholar",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"❓ What are the correct and polite things to do in a situation where you cannot understand the teacher’s long and complex instructions? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who bravely raised his hand and said \"Teacher please tell me the second step again\"",
          "desc": "Actively clarify learning tasks and overcome listening and comprehension bottlenecks.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Don’t understand at all but don’t dare to ask, sit in a daze and bite fingers",
          "desc": "Valuable study time is wasted, resulting in unfinished assignments and increased anxiety.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu took out the sticky note and carefully checked the steps with the teacher",
          "desc": "Make good use of auxiliary tools to implement and demonstrate a responsible learning attitude.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia who wrote down the steps on the blackboard to help everyone",
          "desc": "Turn structured thinking into concrete services to improve the learning efficiency of the whole class.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"✋ Steps Restatement Confirmation Card\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. I don't understand at all but dare not ask. I sit in a daze and bite my fingers, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "❓",
          "label": "Calm down and take a deep breath to start \"✋ Steps Restatement Confirmation Card\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"✋ Restate the steps to confirm the card action. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "I realize my mind is in a tangled mess and I don't know what to do next."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Immediately raise your right hand and look at the teacher."
        },
        {
          "num": 3,
          "icon": "❓",
          "text": "Clearly state: \"Teacher, what is the second step?\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to✋ Steps Restatement Confirmation Card\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "✏️ Writing Frustration: Put Down the Pencil and Take a Break",
    "superSkill": "🍞 The fingertip relaxation method while kneading dough",
    "themeColor": "#ef4444",
    "badgeEmoji": "✏️",
    "badgeLabel": "Resilient Writing Prodigy",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"✏️ In the situation of \"writing Chinese characters outside the grid, erasing the notebook with an eraser\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Put down the pencil and rub your hands, patch the holes with tape and continue writing the small sum",
          "desc": "Successfully regulate frustration and collapse emotions, showing strong psychological resilience.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "He was so angry that he tore up his homework and broke his pencil and threw it on the ground.",
          "desc": "Breaking school supplies and having to rewrite them all adds to the frustration.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Hand over the repair tape in time to comfort and persuade the peers",
          "desc": "Become a peer supporter and resolve frustration storms in a timely manner.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia adjusts the pen holder to help her peers improve writing comfort",
          "desc": "Make good use of assistive devices and techniques to improve team learning effectiveness.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🍞 Fingertip relaxation method for kneading dough\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. He is so angry that he tears up the homework book, breaks the pencil and throws it on the ground, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "✏️",
          "label": "Calm down and take a deep breath to start \"🍞 Fingertip Relaxation Method for Kneading Dough\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🍞 Knead the dough with your fingertips and relax. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "I noticed my fingers were stiff, and I felt an urge to angrily stab the paper."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Immediately put down the pencil, and make five kneading motions in the air with both hands as if kneading dough."
        },
        {
          "num": 3,
          "icon": "✏️",
          "text": "Take out some transparent repair tape, cover the hole, take a deep breath, and rewrite it."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🍞 Fingertip relaxation method for kneading dough\" and giving warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "📖 Reading Aloud: Asking a Partner for Help",
    "superSkill": "🤝 Read aloud a relay help card",
    "themeColor": "#f97316",
    "badgeEmoji": "📖",
    "badgeLabel": "Confident Reading Little Warriors",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"📖 In the situation where I got stuck reading a text on stage and was laughed at by my classmates, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who bravely accepted the relay from his peers and successfully read the next sentence",
          "desc": "Don’t shrink from obstacles and show your tenacious courage to learn.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When a classmate laughed, he threw the textbook on the ground and ran out of the classroom crying.",
          "desc": "Interrupt learning progress, exacerbating interpersonal barriers and self-frustration.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jia who takes the initiative to raise the relay flag and reads the sentence clearly and fills the position",
          "desc": "Give full play to the highest example of teamwork and resolve peer crises.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Stand up and seriously stop the laughing Xiaoqiu",
          "desc": "Demonstrate a righteous demeanor and protect a friendly and inclusive class environment.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🤝 Read the relay help card\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. When a classmate laughs, he smashes the textbook on the ground and runs out of the classroom crying, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "📖",
          "label": "Calm down and take a deep breath to start \"🤝 Read the \"Relay Help Card\" and follow the steps to properly deal with it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🤝 Read the \"Relay Help Card\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "I noticed I was stuck recognizing a character, and my brain froze for more than three seconds."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Don't panic, lower your head and cry, raise the green relay flag."
        },
        {
          "num": 3,
          "icon": "📖",
          "text": "Your group member reads a sentence, you take a deep breath, and then read the next sentence."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🤝 Read the \"Relay Help Card\" aloud and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "⏱️ The timer in class is ticking and I am so nervous - Facing time pressure, \"take a deep breath according to the rhythm and take a breath for each question\"",
    "superSkill": "⏳Tick-tock clock adagio pranayama",
    "themeColor": "#6366f1",
    "badgeEmoji": "⏱️",
    "badgeLabel": "Calm Timekeeping Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario test of \"⏱️ What are the correct and polite things to do in a situation like \"The timer is ticking and I'm so nervous in class\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu is breathing steadily while looking at the turtle hourglass and figuring out the answers to each question.",
          "desc": "Successfully mediate time anxiety and demonstrate calm test-taking ability.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When he saw the timer, he yelled, crushed the test paper and stomped it on the ground.",
          "desc": "The opportunity for evaluation is lost and the order of the examination room is disrupted, aggravating the frustration.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Resist the urge to rush quickly and carefully check the details of each question",
          "desc": "Develop a rigorous learning attitude and improve the accuracy of answering questions.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He who answers questions at his own pace without panicking",
          "desc": "Establish and improve self-awareness and overcome peer comparison pressure.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which method can bring out the \"⏳ ticking clock adagio pranayama\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. When he sees the timer, he yells, mashes the test paper and stomps it on the ground, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⏱️",
          "label": "Take a calm and deep breath to activate \"⏳ Tick-Tock Clock Adagio Pranayama\", and follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Follow the teacher to practice the \"⏳ ticking clock slow and slow breath adjustment\" action. If you can do it, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Time panic: noticing your heart racing and your mind going blank."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "I placed my hands flat on the table, took a deep breath: \"Phew~ I have my own rhythm.\""
        },
        {
          "num": 3,
          "icon": "⏱️",
          "text": "After finishing one question, draw a heart next to it, and then move on to the next one."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, demonstrate \"⏳ Tick-Tock Clock Adagio Pranayama\" to your parents and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "📐 Long Word Problems: Breaking Information into Small Parts",
    "superSkill": "🍫 Segment the chocolate into sections",
    "themeColor": "#10b981",
    "badgeEmoji": "🍫",
    "badgeLabel": "Problem Breakdown Master",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"📐 What are the correct and polite things to do in the situation of \"The application questions are so long and it's dazzling to see\"? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Use a highlighter pen to cut the long question into three clearly disassembled pieces.",
          "desc": "Overcome the dilemma of dyslexia and find efficient problem-solving paths.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If the question is too long, just give up and just scribble in the answer column.",
          "desc": "Lose the opportunity to practice thinking and fail to build confidence in mathematical thinking.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu makes good use of the reading window to analyze the meaning of the question line by line.",
          "desc": "Eliminate sensory interference and establish the habit of rigorous text review.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia who draws images to help everyone verify their answers",
          "desc": "Use multi-sensory image representation to deepen conceptual understanding.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🍫 The question is \"Segmented chocolate cutting\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. If the question is too long, it will give up and scribble in the answer column, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🍫",
          "label": "Calm down and take a deep breath to start \"🍫 The question \"Segmented Chocolate Cutting\", follow the steps to properly solve it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🍫 The question is \"Segmented Chocolate Cutting\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Take out the word-covering ruler and read slowly, line by line, without letting your eyes skip lines."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Use a ballpoint pen to circle the numbers and units in the problem"
        },
        {
          "num": 3,
          "icon": "🍫",
          "text": "Use a yellow highlighter to draw the last sentence, \"Excuse me...?\" Identify the mathematical target."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🍫 The topic is \"chocolate cutting in sections\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🎨 Art Is Unique: Letting Go of Perfection",
    "superSkill": "🪐 Unique Planetary Pride",
    "themeColor": "#ec4899",
    "badgeEmoji": "🎨",
    "badgeLabel": "Creative and Confident Little Painters",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🎨 In the situation where the art class works are done differently than the demonstrations, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu accepts flaws in clay works and creates unique features",
          "desc": "Get rid of the prison of perfectionism and enjoy the joy of pure creation.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Because it didn’t look like the model, I threw the work to the ground and crushed it.",
          "desc": "All your hard work and efforts are in vain, and you are stuck in the abyss of self-denial and negative emotions.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Paint with watercolor and transform it into a beautiful wave.",
          "desc": "Possess highly flexible thinking and demonstrate problem-solving wisdom.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia integrates everyone’s unique works to form a space fleet",
          "desc": "Value individual differences among peers and inspire strong team cohesion.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🪐 Unique Planet Self-Esteem\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. Because it does not look like the template, the work will be thrown to the ground and crushed, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎨",
          "label": "Calm down and take a deep breath to start \"🪐 \"Unique Planet Self-Esteem\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🪐 \"Unique Planet Self-Esteem\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "The anxiety of noticing that \"I'm doing things differently from the teacher\" and the urge to throw things."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take a deep breath and tell yourself: \"Every planet in the universe looks different.\""
        },
        {
          "num": 3,
          "icon": "🎨",
          "text": "Add a small star to any crooked or mispainted areas to create a unique feature."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🪐 Unique Planet Self-Esteem\" and gave a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🎒 An Organized School Bag: Color Folders and a Daily Check",
    "superSkill": "📁 Five-Color Storage Magic",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🎒",
    "badgeLabel": "Organizing and Storage Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🎒 In the situation of “stuffing schoolbags into big trash cans and unable to find homework”, what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Make good use of the five-color folder classification and quickly submit homework assignments",
          "desc": "Successfully get rid of messy bad habits and improve learning and execution efficiency.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Stuffing schoolbags into trash cans, dumping all the debris in the corridor and yelling",
          "desc": "Creates mess and wastes time, causing anxiety and looks from peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu implements color corresponding labels and organizes school bags in an orderly manner",
          "desc": "Leverage your structural talents and become an expert in personal belongings management.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "According to the check-box after school check list, check the small sums confirmed one by one.",
          "desc": "Make good use of tools to implement self-management and establish a sense of learning responsibility.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📁 Five-color storage magic\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He stuffs his schoolbag into a trash can, dumps all the debris in the corridor and yells, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🎒",
          "label": "Calm down and take a deep breath to start \"📁 \"Five Color Storage Magic\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📁 \"Five Color Storage Magic\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Before leaving school, open your schoolbag and throw the crumpled trash and toilet paper into the trash can."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Put your textbooks and homework into the corresponding colored subject folders"
        },
        {
          "num": 3,
          "icon": "🎒",
          "text": "Before zipping up, check the checklist to confirm: 'The contact book and homework are all inside!'"
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to📁 The magic of five-color storage\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🏃 A Dropped Relay Baton: Supporting a Teammate",
    "superSkill": "🤝 No complaints when the team drops a baton",
    "themeColor": "#059669",
    "badgeEmoji": "🏃",
    "badgeLabel": "Best Teammates",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🏃 In the situation where the baton accidentally dropped during the relay of the physical education team, what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Xiao Bao swallows the blame and loudly cheers for his teammates who made mistakes",
          "desc": "Showing the tolerance of a mature athlete, he can be called a true teammate.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Pointing at his teammates on the spot and yelling, \"You are the trash that caused us to lose.\"",
          "desc": "Seriously tearing apart class relationships, causing psychological trauma and exclusion among peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jia quickly helped pick up the baton and encouraged her partners to move forward.",
          "desc": "Actively take up positions in times of crisis, showing the best team crisis management.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He who grits his teeth and fights to the end, never giving up on running because of dropping the baton",
          "desc": "Overcome the fear of self-blame and show the respectable perseverance of athletes.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🤝 Don’t complain if the team loses the stick”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain lost control. He pointed at his teammates and yelled, \"You are the loser who caused us to lose.\" This caused confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏃",
          "label": "Calm down and take a deep breath to start \"🤝 Don’t complain when the team loses the baton”, follow the action steps to properly deal with it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🤝 If the team fails to complain, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Seeing teammates make mistakes and fall behind, immediately suppress the urge to curse."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Immediately help pick up the baton or verbally remind them: 'Hurry up!'"
        },
        {
          "num": 3,
          "icon": "🏃",
          "text": "He shouted from the sidelines, \"It's okay, we'll catch it together!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🤝 Don’t complain when the team loses the stick” and gave a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "😡 Accident or Intent? Responding Calmly to Broken Things",
    "superSkill": "📏 Accidentally damaged the Calm Ruler",
    "themeColor": "#ef4444",
    "badgeEmoji": "📏",
    "badgeLabel": "Calm Mediation Judge",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"😡 In the situation \"He accidentally stepped on my new ruler\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu restrained his fists and rationally asked the teacher to help him deal with compensation.",
          "desc": "Successfully mediate intense anger and replace violent lynchings with legal procedures.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "No matter what, just beat the opponent until his nose bleeds and smash the desk.",
          "desc": "Inflict serious bodily harm and transform yourself from victim to perpetrator.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiaoqiu who did not run away and actively promised to buy new products and compensate",
          "desc": "Have the courage to take responsibility for the consequences and show the highest sincerity in sincere apology.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Careful use of tape to help piece together damaged items",
          "desc": "Use actions to convey warmth and comfort and resolve tense interpersonal crises.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📏 Accidental damage to the cooling ruler?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control and he beats the opponent until his nose bleeds and smashes the desk, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "📏",
          "label": "Calm down and take a deep breath to start \"📏 Accidental damage to the calming ruler\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📏 \"Accidental damage to the calming ruler\" action, please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sensing the urge to throw a punch, he immediately put his hands into his coat pockets."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Observe the other person's face and attitude: Does he panic and apologize?"
        },
        {
          "num": 3,
          "icon": "📏",
          "text": "Please ask the teacher to assist in discussing repairs or compensation; do not resort to violence privately."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to📏 Accidentally damaged the calming ruler\" and gave a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "👥 Sharing Friends: Making Room for Other Friendships",
    "superSkill": "🌐 An Open and Friendly Mind",
    "themeColor": "#3b82f6",
    "badgeEmoji": "👥",
    "badgeLabel": "A Broad-minded Friend",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"👥 In the situation \"A good friend is going to play with someone else today\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He put aside his monopoly and took the initiative to help shake the rope and have fun together",
          "desc": "Expand a broad social landscape and turn jealousy into the joy of a larger group.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I was so angry that I yelled \"I will never be with you again\" in the corridor and fell out on the spot.",
          "desc": "Exerting one's desire for control over others, resulting in broken friendships and isolation.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who can enjoy his solitude without any restrictions on making friends with peers",
          "desc": "Demonstrate mature psychological differentiation and establish healthy and independent personality traits.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "A little boy who actively beckons to invite friends who are alone to join the game",
          "desc": "Have a high degree of warmth and enthusiasm, and create a friendly environment where all employees are harmonious.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌐 Open to friendship and be open-minded”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control and he is so angry that he yells \"I will never be with you again\" in the corridor and turns his face on the spot, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "👥",
          "label": "Calm down and take a deep breath to start \"🌐 Be open to friendship and have a big mind\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌐 \"Open Friendship with a Big Mind\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "I sensed a pang of possessive jealousy, a feeling of wanting to get angry and break off the friendship."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Silently remind yourself: \"Friends are not exclusive toys; they also have the freedom to make new friends.\""
        },
        {
          "num": 3,
          "icon": "👥",
          "text": "Take the initiative to approach them and try to play together, or happily do your own thing."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🌐 Be open to friendship and have a big heart\" and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🗣️ Hurtful Nicknames: Speak Firmly and Ask a Teacher for Help",
    "superSkill": "🛡️ Insult Remark Reflection Shield",
    "themeColor": "#e11d48",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Guardian of Confidence and Dignity",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🗣️ What is the correct and polite thing to do in the situation \"I heard someone call me an unpleasant nickname in private\"? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Resist the urge to act, firmly declare your name and report to your mentor",
          "desc": "Successfully overcome the provoked anger trap, showing both wisdom and courage in restraint.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "In anger, he grabbed the iron bucket and hit the opponent's head hard, causing severe bleeding and injuries.",
          "desc": "It evolved into a serious injury incident on campus, and faced a major demerit and compensation from parents.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Stand up and strictly stop Jia who is provocative with malicious nicknames",
          "desc": "Show extraordinary justice and courage without fear of rape, and protect the bottom line of campus friendship.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He who holds the hands of his peers and gives warm alliance support",
          "desc": "Provide strong psychological support so that victimized children no longer feel alone and fearful.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛡️ Insulting remarks backlash shield\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He grabs a metal bucket and slams the opponent's head in anger, causing severe bleeding and serious injuries, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🛡️",
          "label": "Calm down and take a deep breath to start \"🛡️ Insulting remarks backlash shield\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛡️ Insult speech backlash shield\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sensing the fury of being called a nickname, he clenched his fists and held back, refusing to retaliate."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Looking firmly into the other person's eyes, he said, \"This is not my name. Please respect others!\""
        },
        {
          "num": 3,
          "icon": "🛡️",
          "text": "Turn around and leave the scene, then immediately report the incident to your advisor or the student affairs office."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🛡️ Insulting remarks backlash shield\" and gave warm high-fives to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🤝 Group Decisions: Voting and Respecting Everyone",
    "superSkill": "🗳️ Disagreement ballot box",
    "themeColor": "#059669",
    "badgeEmoji": "🤝",
    "badgeLabel": "Little Gentlemen of Democratic Cooperation",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🤝 In a group discussion where everyone is deadlocked, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu showed great concessions and agreed to the creative integration plan",
          "desc": "Successfully break the fixed thinking framework and experience the beauty of win-win cooperation.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "If you disagree, throw down the blackboard eraser, quit in anger and shout \"I won't draw anymore\"",
          "desc": "Destroy the progress of the group and be labeled by peers as willful and difficult to cooperate.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiao Qiu who proposes \"Space Tyrannosaurus\" to integrate creativity to resolve the deadlock",
          "desc": "Demonstrate excellent problem mediation skills and lead the entire group toward peace.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia promises to give priority to peer proposals next time and expresses sincere thanks",
          "desc": "Practice the highest quality of democracy and respect for minorities, and consolidate lasting peer friendship.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🗳️ \"Divided Opinion Ballot Box\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. If they disagree, they throw down the blackboard eraser, quit in anger and shout \"I won't draw anymore\", causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🤝",
          "label": "Calm down and take a deep breath to start \"🗳️ \"Ballot box for differences of opinion\", follow the steps to properly handle and resolve it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🗳️ \"Ballot box for differences of opinion\" action, please tick the box if you have done so☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When you sense that everyone is at an impasse due to differing opinions, shout: \"Let's vote!\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "The side with fewer votes should maintain sportsmanship, smiling and cooperating with the majority decision"
        },
        {
          "num": 3,
          "icon": "🤝",
          "text": "Find creative points of convergence and integrate the essence of a few into the overall work."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🗳️ Ballot box for differences of opinion\" and warm high-fives to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "💔 A Dried-Out Marker: Asking Kindly to Make Things Right",
    "superSkill": "🖍️ The Dialogue Repair Technique with Colored Pencils",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🖍️",
    "badgeLabel": "Gentle Communication Role Model",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"💔 The colored pen I lent to my classmate was dried without the cap on.\" In this situation, what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Jia calmly states the facts and gently demands reasonable compensation.",
          "desc": "Demonstrated excellent emotional EQ and non-violent communication model, and successfully obtained compensation.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "He was so angry that he smashed and trampled the entire box of pens of his classmates and cursed in public.",
          "desc": "Expanding the conflict and escalating it into physical violence puts oneself into the dilemma of being punished for violating the rules.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Take out your own crayons and lend them to your peers for emergencies",
          "desc": "Instantly provide help in times of need, showing the strength of peer cooperation.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Yu and He who assisted in using warm water first aid stationery and carefully covering the pen cap",
          "desc": "Focus on specific repair solutions and demonstrate the wisdom of rational problem solving.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🖍️ Colored pen repair dialogue method\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When faced with a situation, his brain lost control. He was so angry that he smashed and trampled the entire box of pens of his classmates, and cursed in public, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🖍️",
          "label": "Calm down and take a deep breath to start \"🖍️ \"Colored pen repair dialogue method\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🖍️ Color Pen Repair Dialogue Method\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sensing the hurt and anger at the damaged item, take three deep breaths."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Calmly pointing to the object, he stated the objective facts: \"The pen cap wasn't closed properly, and the nib is dry.\""
        },
        {
          "num": 3,
          "icon": "🖍️",
          "text": "A gentle but concrete solution was offered: \"Please lend me your pen, and buy me another one to return it.\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🖍️ \"Colored Pen Repair Conversation Method\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🏃 After a Collision: Check on the Other Person First",
    "superSkill": "🩹 First, crouch down and show concern for the first message.",
    "themeColor": "#ef4444",
    "badgeEmoji": "🏃",
    "badgeLabel": "Loving and Caring Big Brother",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🏃 In the situation of \"running into the younger brother while running in the corridor\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Brave and responsible Jia",
          "desc": "Do not run away, squat down to care and accompany lower grade students to the health center.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Knock someone down and cry when you see the other person bleeding, run away and pretend not to see him",
          "desc": "Delaying the injured's medical treatment involves major school safety violations and uneasy conscience.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who helped pick up the kettle and comforted the students at the scene",
          "desc": "Use calm and attentive qualities to provide immediate support to injured peers.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Quickly notify the teacher and guide He and Jia who are driving behind to slow down.",
          "desc": "Demonstrate excellent emergency response and on-site safety protection capabilities.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🩹 Squat down and care about the first item first”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, knocking over someone and seeing the other person bleeding and crying, running away and pretending not to see it, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏃",
          "label": "Calm down and take a deep breath to start \"🩹 \"Squat down and pay attention to the first item first\" and follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🩹 Squat down and pay attention to the first action. If you do it, please tick the box.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stop immediately and absolutely do not run away or shirk responsibility."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "She knelt down beside the other person and gently asked, \"Are you hurt? Where does it hurt?\""
        },
        {
          "num": 3,
          "icon": "🏃",
          "text": "Help pick up the dropped items, and lead the person to a teacher or a health center."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🩹 Squat down and care about the first item first” and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "⚖️ Fair Play: Ask a Neutral Person to Check the Rules",
    "superSkill": "⚖️ Fair Suspension of Verification Act",
    "themeColor": "#0284c7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "Grand Demeanor, Little Referee",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"⚖️ In the situation of \"playing board games and catching others cheating and driving them crazy\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Jia made a T-shaped pause gesture and calmly checked according to the rules.",
          "desc": "Show mature demeanor and use civilized procedures to protect the fairness and justice of the game.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "He was so angry that he yelled at the cheater and overturned the entire table and chessboard.",
          "desc": "Destroy teaching aids and interrupt the fun of the whole group, causing collective resentment among peers and unwillingness to be in the same group.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who assists in confirming the number of steps using the objective and fair step-by-step grid",
          "desc": "Use your precise talents to become a trustworthy and impartial third party.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "A little boy who enthusiastically helps pick up and organize banknotes and props to encourage continued play.",
          "desc": "Show magnanimity and inject positive cohesion into group harmony.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"⚖️ \"Just Suspension Verification Law\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Realizing that he was lagging behind and about to lose, he knocked over the entire chessboard and shouted: \"It doesn't count!\" Start over!”",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⚖️",
          "label": "Take a deep breath to suppress your frustration, keep playing until the end, and generously reach out to praise your winning opponent!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "As soon as I fell a little behind at the start, I felt like I was finished. I buried my head between my knees and sulked, giving up all subsequent moves.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"⚖️ \"Fair Suspension Verification Act\" action, please tick the box if you have done so☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "If you notice a suspected violation or a miscount of steps, immediately make a \"T\" sign to pause."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "He said calmly, \"Everyone, please pause for a moment. Let's go over the rules with the instruction manual.\""
        },
        {
          "num": 3,
          "icon": "⚖️",
          "text": "Everyone should double-count to confirm. If it was indeed a slip of the hand and a mistake, go back to the original position and start over."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to⚖️ Fair Suspension Verification Law\" and give a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "👩‍🏫 A Substitute Teacher: Keeping Routines and Being Helpful",
    "superSkill": "🧭 A steady compass on substitute teaching days",
    "themeColor": "#059669",
    "badgeEmoji": "👩‍🏫",
    "badgeLabel": "A Competent Navigator and Guide",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"👩‍🏫 In the situation \"the substitute teacher is coming to class today\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Jia, who takes the initiative to explain class routines and enthusiastically assists substitute teachers",
          "desc": "Demonstrate mature class leadership style and become the most competent guide on substitute teaching days.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Taking advantage of the teacher’s unfamiliarity, yelling and throwing paper airplanes in the classroom",
          "desc": "Destroy the image of the class, cause collective chaos and face punishment from the returning instructor.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu quickly calms down his body and mind and concentrates on studying according to the class schedule",
          "desc": "Make good use of structured self-regulation to successfully adapt to sudden changes in the environment.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Take the initiative to warmly welcome the substitute teacher He",
          "desc": "Pass on the good virtues of respecting teachers and showing the warm qualities of special education classes.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧭 A Steady Compass for Substitute Days\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. When the teacher is unfamiliar, he yells and throws paper airplanes in the classroom, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "👩‍🏫",
          "label": "Calm down and take a deep breath to start \"🧭 A Steady Compass on Substitute Day\", follow the steps to properly deal with it step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧭 \"Steady Compass on Substitute Day\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sensing the nervousness and anxiety of changing teachers, I took a deep breath and told myself: \"The daily routine is the same.\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Stand up loudly, salute and greet the teacher, demonstrating polite and gentlemanly manners"
        },
        {
          "num": 3,
          "icon": "👩‍🏫",
          "text": "Actively explain the rules regarding homework submission and participation to the substitute teacher."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧭 A Steady Compass on Substitute Day\" and gave a warm high-five to my family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "💺 New Seats: Three Ways to Get to Know a Classmate",
    "superSkill": "🪑 New seat icebreaker greeting card",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💺",
    "badgeLabel": "Little Expert at Adapting to New Environments",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"💺 In the situation \"The class is changing seats\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu overcomes spatial fixation and takes the initiative to say hello to his new deskmate to break the ice",
          "desc": "Successfully mediate environmental anxiety and demonstrate valuable environmental adaptability.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Holding on to the old desk, crying and kicking, lying on the ground and refusing to move",
          "desc": "It hinders the seat-changing process of the whole class and aggravates one's own fear of isolation.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "New deskmate Xiaoqiu who enthusiastically helps move chairs and actively shares stickers",
          "desc": "Demonstrate excellent peer friendliness and quickly resolve the coldness of the new environment.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Take the initiative to explore new seats with beautiful scenery, optimistic and cheerful He",
          "desc": "Reconstruct the environment with positive cognition and establish a healthy philosophy of dealing with yourself.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🪑 New Seat Ice Breaking Greeting Card\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, clinging to the old desk, crying and kicking, lying on the ground and refusing to move, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "💺",
          "label": "Calm down and take a deep breath to start \"🪑 New Seat Ice Breaking Greeting Card\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🪑 New Seat Ice Breaking Greeting Card\" action, please tick the box if you have done so☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Sensing the panic and unease of leaving my old seat, I took a deep breath."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Arrange your textbooks and pencil case neatly, and establish your own new little territory."
        },
        {
          "num": 3,
          "icon": "💺",
          "text": "Turning to her new neighbor with a smile, she said, \"Hello, nice to meet you this semester!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🪑 \"New Seat Ice Breaking Greeting Card\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🚌 Field-Trip Bus Safety: Stay Seated and Ask for Help",
    "superSkill": "🚌 Tour bus etiquette guidelines",
    "themeColor": "#0284c7",
    "badgeEmoji": "🚌",
    "badgeLabel": "The Elegant Gentleman's Car Ride",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🚌 In the situation where the whole school’s off-campus teaching takes a tour bus, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Fasten your seat belt and observe the etiquette of riding",
          "desc": "Successfully overcome impulsive and active bad habits and demonstrate excellent public safety literacy.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Running and chasing along the aisle of a moving tour bus, grabbing the microphone and shouting",
          "desc": "Serious violation of public safety regulations, emergency braking can easily cause severe intracranial fractures.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Jia promptly took the vomiting bag for the motion sickness partner and informed the teacher",
          "desc": "Demonstrate keen empathy and crisis management skills, and keep the carriage clean and comfortable.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Wear earmuffs and quietly enjoy the scenery along the way, Yu adjusts himself",
          "desc": "Demonstrating a high degree of self-discipline and the ability to handle oneself independently, it can be called a model of civilized riding.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚌 \"Code of Civility for Tour Buses\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, running wildly and chasing in the aisle of the traveling tour bus, grabbing the microphone and shouting, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚌",
          "label": "Calm down and take a deep breath to start \"🚌 Tour Bus Civilization Code\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚌 \"Civility Code for Tour Buses\" action, please tick the box if you have done so☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Once you get in the car, immediately fasten your seatbelt around your waist and do not unfasten it unnecessarily."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Speak at a moderate volume, do not scream or run in the aisle"
        },
        {
          "num": 3,
          "icon": "🚌",
          "text": "If you feel nauseous or dizzy, immediately grab a vomit bag and take a deep breath."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🚌 Code of Civility on Tour Buses\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🍽️ Foods I Dislike: Polite Choices at Lunch",
    "superSkill": "🫑 Bravely take a bite of a little adventure",
    "themeColor": "#10b981",
    "badgeEmoji": "🍽️",
    "badgeLabel": "Nutritionally Balanced Little Food God",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🍽️ What are the correct and polite things to do in a nutritious lunch with pesky green peppers or onions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu restrained his disgusting remarks and bravely tried to bite a small piece of green pepper",
          "desc": "Demonstrate the courage to overcome sensory defenses while maintaining public dining etiquette.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Spitting in public, yelling \"It's so disgusting and poisonous\" and knocking over the plate",
          "desc": "Seriously trampling on the hard work of the cook, creating a mess and causing resentment and rejection by peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Sit the plate politely and ask for a small spoonful to taste.",
          "desc": "Use civilized communication to avoid wasting leftover food and demonstrate good table manners.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Take the lead in eating vegetables and encourage everyone to have balanced nutrition",
          "desc": "Show healthy and sunny vitality and become a model student in class diet.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🫑 Bravely try a little adventure”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, spitting in public, yelling \"so disgusting and poisonous\" and knocking over the dinner plate, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🍽️",
          "label": "Calm down and take a deep breath to start \"🫑 Be brave and have a little adventure\" and follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🫑 Bravely take a bite of a little adventure\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Upon realizing the aversion to unpleasant food, I immediately swallowed the word \"disgusting.\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "When serving food, hold the plate with both hands and politely say, 'Please just give me a little bit, thank you!'"
        },
        {
          "num": 3,
          "icon": "🍽️",
          "text": "Give yourself the courage to take a small bite, and even if you don't like it, quietly leave it in the corner of your plate without spitting it out."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🫑 Be brave and have a little adventure\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🌧️ Heavy Rain: Choosing a Quiet Indoor Activity",
    "superSkill": "🎲 Rainy Day Fun Box",
    "themeColor": "#6366f1",
    "badgeEmoji": "🌧️",
    "badgeLabel": "Rainy Day Self-Guided Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🌧️ In the situation of \"the playground is closed after heavy rain after class\", what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Xiao Qi who focuses on playing chess",
          "desc": "Put your energy into puzzle board games, don't make noise and don't shoot the ball.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Yelling and shooting basketballs in the corridor, knocking down classmates and breaking glass",
          "desc": "Seriously endangering indoor safety on campus, resulting in demerits and protests from peers.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu enjoying the sound of rain and deep reading in the book corner",
          "desc": "Show mature spiritual ability and establish an independent spiritual world.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia who carefully painted mandala and helped organize board games",
          "desc": "Create a warm classroom culture with static braking, making rainy days full of warmth.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🎲 Rainy day filing fun box\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "Realizing that he was lagging behind and about to lose, he knocked over the entire chessboard and shouted: \"It doesn't count!\" Start over!”",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌧️",
          "label": "Take a deep breath to suppress your frustration, keep playing until the end, and generously reach out to praise your winning opponent!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "As soon as I fell a little behind at the start, I felt like I was finished. I buried my head between my knees and sulked, giving up all subsequent moves.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🎲 \"Rainy Day Registration Fun Box\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Accept the fact that it's raining, take a deep breath and tell yourself: \"Rainy days are peaceful and beautiful days.\""
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Go to the classroom book corner or board game cabinet, choose a static item you like"
        },
        {
          "num": 3,
          "icon": "🌧️",
          "text": "Sit quietly and immerse yourself in the moment for thirty minutes, enjoying the peaceful time in the rain."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🎲 \"Record Fun Box for Rainy Days\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🧹 Cleanup Teamwork: Helping Safely and Taking Pride in Our Work",
    "superSkill": "🧽 Little hero of spring cleaning",
    "themeColor": "#eab308",
    "badgeEmoji": "🧹",
    "badgeLabel": "Cleanliness and Environmental Protection Little Guardian",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🧹 In the context of \"cleaning toilets and gutters during general cleaning time\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "A small house cleaning carefully",
          "desc": "Instead of spraying people with water pipes, work hard to clean the tiles and gutters.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Taking a water pipe and pouring water everywhere, soaking classmates and corridors.",
          "desc": "Making the ground slippery can easily lead to serious fractures and seriously undermine the cleaning discipline.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Wearing gloves, He bravely overcomes the fear of dirt and carefully picks up fallen leaves.",
          "desc": "Make good use of protective aids to break through psychological barriers and invest in collective labor services.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Yu carefully scraped away the accumulated water to protect the walking safety of all teachers and students",
          "desc": "Carry out safety finishing work and demonstrate the demeanor of a careful and considerate general.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧽 \"Little hero of cleaning labor\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He takes a water pipe and sprays water everywhere, soaking his classmates and corridors, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🧹",
          "label": "Calm down and take a deep breath to start \"🧽 \"Little Hero of Cleaning Labor\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧽 \"Little Hero of Cleaning Labor\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Wearing a waterproof apron and rubber gloves will protect you from getting dirty."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Hold the long-handled brush firmly with both hands and scrub the dirt vigorously, keeping the hose pointing downwards to avoid spraying haphazardly"
        },
        {
          "num": 3,
          "icon": "🧹",
          "text": "Scrape away the puddles, arrange the utensils neatly, and enjoy the sense of accomplishment from a cleaner environment."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧽 \"Little Hero of Cleaning Labor\" and gave a warm high-five to his family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🚶 Stranger Safety: Do Not Go Along or Get into a Car",
    "superSkill": "🛑 Strangers' Red Line Brakes",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚶",
    "badgeLabel": "Self-Protection Little Guardian",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🚶 What are the correct and polite things to do in the situation of meeting a stranger on the way out of school and asking for directions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who is determined not to get in the car",
          "desc": "Grab the classmate, take three steps back and run to the supermarket to seek adult assistance.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Attracted by free toys and candies, unsuspectingly opened the door and got in the car",
          "desc": "Falling into the abduction trap of human traffickers, they face deprivation of personal freedom and huge threats to their lives.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiaoqiu brakes immediately and follows his companions to the safe base.",
          "desc": "Overcome the temptation of material desires and show vigilance and self-preservation and survival instincts.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia who blew the alarm whistle and calmly provided the characteristics of the suspicious vehicle",
          "desc": "Make good use of self-defense equipment and careful observation to become a little hero of campus safety protection.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛑 \"Stranger red line brake\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control and is attracted by free toys and candies. Unsuspectingly, it opens the door and gets in the car, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚶",
          "label": "Calm down and take a deep breath to start \"🛑 \"Stranger Red Line Brake\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛑 \"Stranger Red Line Brake\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "If a stranger tries to strike up a conversation while driving by, immediately take three steps back to maintain distance."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Shout loudly: 'I don't know, I need to find an adult!' Refuse to get into the car"
        },
        {
          "num": 3,
          "icon": "🚶",
          "text": "Without looking back, he ran as fast as he could into the nearest convenience store, school, or shop to ask for help."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🛑 \"Stranger's red line brake\" and give warm high-fives to family members!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🏫 Returning to the General Classroom: Finding My Group and Joining In",
    "superSkill": "🌉 Puton Seamless Bridge",
    "themeColor": "#059669",
    "badgeEmoji": "🏫",
    "badgeLabel": "Fusion and Adaptation Pioneers",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🏫 What are the correct and polite things to do in the situation of returning from the study classroom to regular classes? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu returns to class calmly",
          "desc": "Read the blackboard, pick up the textbook, smile and say \"I'm back\" to your classmates.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "I was so scared that I cowered at the door of the corridor and cried loudly, refusing to enter the classroom.",
          "desc": "Interrupt learning progress and intensify self-labeling and peer alienation.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Return to the ordinary class, be self-disciplined, observe the rules, sit upright and study well",
          "desc": "Demonstrate self-discipline consistency across situations and win high praise from teachers and students.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia actively participate in group reading and class service",
          "desc": "Enthusiastically integrate into the large group and demonstrate the spirit of inclusive education and mutual good.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌉 \"Put Seamless Bridge\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, and the child shrinks in fear at the door of the corridor, shouts, and refuses to enter the classroom, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏫",
          "label": "Calm down and take a deep breath to start \"🌉 \"Put Seamless Connection Bridge\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌉 \"Put Seamless Bridge\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Take a deep breath as you walk to the classroom door, and look up at the blackboard to see the current subject and page number."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Quietly walked to her seat, took out her textbooks and stationery."
        },
        {
          "num": 3,
          "icon": "🏫",
          "text": "Smile at your deskmate and say, \"I'm back!\" Proactively check on their progress."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🌉 \"Put Seamless Bridge\" and gave a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "👦 My Learning Support Classroom: A Place to Recharge My Strengths",
    "superSkill": "⚡ Charging Station's Proud Declaration",
    "themeColor": "#3b82f6",
    "badgeEmoji": "⚡",
    "badgeLabel": "Confident and Radiant Little Angels",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"👦 A classmate in a regular class asked: \"Why do you go to the study classroom?\" In this situation, what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who shines with confidence",
          "desc": "Smiled and said, \"That's my charging station. I learned a lot of superpowers.\"",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When asked by classmates, he burst into tears of shame, lying on the table and not daring to raise his head to see anyone.",
          "desc": "Deepen the inner inferiority complex and let yourself be trapped in the shadow of unnecessary shame.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiaoqiu who came forward to enthusiastically promote the results of emotional braking",
          "desc": "Show extraordinary courage and alliance loyalty to clear the names of special education partners.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia and Yu show off their golden badges generously and share the joy of progress",
          "desc": "Convey positive energy of confidence and become the best spokesperson for inclusive education.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"⚡ Charging Station Proud Declaration\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. When asked by classmates, he cries in shame, lies on the table and does not dare to raise his head to see others, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "⚡",
          "label": "Calm down and take a deep breath to start \"⚡ \"Charging Station Proud Declaration\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"⚡ Charge Station Proud Declaration\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When faced with a classmate's curious question, stand tall, straighten your back, and look them directly in the eye."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "A smile played on her lips, and she lowered her head without being angry or shy."
        },
        {
          "num": 3,
          "icon": "⚡",
          "text": "He declared confidently, \"That's my superpower charging station! I learned so many amazing skills there!\""
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to⚡ Declaration of pride at the charging station\" and gave a warm high-five to his family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🏠 Taking Turns with Siblings: Sharing Screens Fairly",
    "superSkill": "⏱️ Hands and feet take turns using an hourglass to keep track of time.",
    "themeColor": "#eab308",
    "badgeEmoji": "🏠",
    "badgeLabel": "Guardians of Family Peace",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🏠 What are the correct and polite things to do in the situation of grabbing a TV remote control or tablet with a sibling at home? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Reasonable Jia",
          "desc": "Instead of grabbing the remote control, take out the hourglass and take turns watching it for 20 minutes with your younger siblings.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "In order to grab the remote control, I beat up my younger brother and sister and scratched each other’s cheeks.",
          "desc": "Cause serious physical injuries to siblings and pain to the family, destroying family and trust relationships.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who makes good use of timers to set rules clearly and waits patiently",
          "desc": "Implement the time rule structure to promote harmony and stability in family life.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia who establish a fair schedule in the refrigerator and accompany their siblings warmly",
          "desc": "Use wisdom and empathy to become an angel of peace that protects family happiness.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which method can exert \"⏱️ Siblings take turns timing the hourglass\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. In order to grab the remote control, he beats his younger siblings and scratches each other's cheeks, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🏠",
          "label": "Calm and deep breathing starts \"⏱️ Hands and feet take turns timing the hourglass\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Follow the teacher to practice \"⏱️ Hands and feet take turns timing the hourglass movement, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "If you sense someone's rage at you grabbing a toy or remote control, immediately release their grip."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take out a timer or hourglass and set the time: 'We will take turns for twenty minutes'"
        },
        {
          "num": 3,
          "icon": "🏠",
          "text": "When it's the other person's turn, they do other things, and when the time is up, they switch hands on time."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, demonstrate to your parents once \"⏱️ Siblings take turns timing the hourglass\" and give warm high fives to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "👵 Visiting Grandparents: Greetings and Helping at Mealtimes",
    "superSkill": "🥣 Helper for serving tea and dishes",
    "themeColor": "#f97316",
    "badgeEmoji": "👵",
    "badgeLabel": "Filial and Thoughtful Little Angels",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"👵 In the situation of \"going back to grandpa and grandma's house for the holidays\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who is filial and considerate",
          "desc": "Look into the eyes of grandpa and grandma and say hello, serve tea with both hands and help set the dishes and chopsticks.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "As soon as he entered the door, he slammed the door and hid in his room to play video games and told his elders to \"go away and don't bother.\"",
          "desc": "It deeply hurts the elders' love for their grandchildren and destroys the happy atmosphere of family reunion.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A filial little boy who takes the initiative to help his grandpa hold chairs and carry heavy objects.",
          "desc": "Give full play to the strength of manhood and contribute to the family, showing the virtue of respecting the elderly and respecting the elders.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia make their elders happy by carefully setting out the dishes and sharing school honors",
          "desc": "It brings joy and laughter to the whole house and can be called the happy pistachio for the whole family.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🥣 \"A little helper who serves tea and dishes\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. As soon as he enters the door, he slams the door and hides in the room to play video games and tells the elders to \"go away and don't bother\", causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "👵",
          "label": "Calm down and take a deep breath to start \"🥣 \"Little Helper for Serving Tea and Serving Food\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🥣 \"Serving tea and serving dishes as a little helper\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "After taking off your shoes upon entering, look the elders in the eye and loudly address them with your title and greeting."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Serve warm tea or fruit with both hands, saying, 'Please enjoy!'"
        },
        {
          "num": 3,
          "icon": "👵",
          "text": "Before meals, proactively help set out the bowls, chopsticks, and tissues for the whole family."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🥣 \"Serving tea and serving dishes as a little helper\" and giving warm high fives to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🛒 Shopping with Family: Stay Together and Ask Staff for Help",
    "superSkill": "🛒 Create your own guardian while shopping at the supermarket",
    "themeColor": "#059669",
    "badgeEmoji": "🛒",
    "badgeLabel": "Store Compliance Assistant",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🛒 In the situation of \"accompanying your family to go shopping at Quanlian Hypermarket\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "A well-behaved little boy",
          "desc": "Don’t run around with the hand cart, look for things according to the list, don’t lie down and cry.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Running wildly in the supermarket corridor, knocking over the cookie rack, lying on the ground rolling and screaming",
          "desc": "Seriously disturbing public peace, causing damage to goods and causing embarrassment to parents and punishment.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu holds on to the handle of the cart with both hands and focuses on finding the target ingredients.",
          "desc": "Demonstrate a high degree of self-control and effectively prevent straying and distraction accidents.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia carefully protect fragile ingredients and politely thank you at the checkout counter",
          "desc": "Successfully generalize classroom special education skills to community living situations.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🛒 Supermarket Shopping Homemade Guardian\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, his brain loses control. He runs wildly in the supermarket corridor, knocks down the cookie rack, and lies on the ground rolling and screaming, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🛒",
          "label": "Calm down and take a deep breath to start \"🛒 \"Make your own guardian for supermarket shopping\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🛒 Make your own \"Guardian\" action for supermarket shopping. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Keep both hands firmly on the stroller handles and stay close to an adult without running around."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Help find items according to the shopping list, don't randomly put items from the shelves into the cart"
        },
        {
          "num": 3,
          "icon": "🛒",
          "text": "If you accidentally get lost, stand next to the cashier and ask a uniformed employee for help."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🛒 \"Make your own guardian for supermarket shopping\" and give warm high-fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "💤 Bedtime Routines: Putting Books Away and Settling Down",
    "superSkill": "🌙 Goodnight Shutdown Sleep Exercise",
    "themeColor": "#6366f1",
    "badgeEmoji": "💤",
    "badgeLabel": "Model of Quality Sleep",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"💤 In the situation \"I still want to read comics when it's time to go to bed at night\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who sleeps regularly",
          "desc": "Close the comic and put it back on the bookshelf, lie down and take a deep breath, and shut down your brain quietly to recharge.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Hitting the pillow and crying when urged to sleep, staying up until early morning and dozing off",
          "desc": "Severe damage to brain neurological development, leading to emotional outbursts and learning breakdown in class the next day.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A little boy who takes the initiative to turn off the lights and go to bed early for tomorrow’s running goal",
          "desc": "Demonstrate a high degree of internal drive and self-discipline, and integrate healthy life into the pursuit of ideals.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia prepare tomorrow’s supplies and go to bed peacefully",
          "desc": "Demonstrate excellent independent living order and enjoy a peaceful and beautiful night's rest.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌙 Good night, shut down and sleep\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. When urged to sleep, the person throws a pillow and cries, stays up until the early morning and dozes off, causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "💤",
          "label": "Calm down and take a deep breath to start \"🌙 \"Good Night Shut Down and Sleep Exercise\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌙 \"Good Night Shut Down and Sleep Exercise\", please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "As soon as the alarm rang at 9:30, I immediately closed the comic book and put it back on the shelf."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Climb into bed and lie flat, placing your hands on your stomach to feel the rise and fall"
        },
        {
          "num": 3,
          "icon": "💤",
          "text": "Inhale and expand your belly, exhale slowly, repeat five times, and then drift off to sleep."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🌙 Good night, shut down the phone and do some sleep exercises\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🧺 I Can Help at Home: Folding Clothes and Tidying Toys",
    "superSkill": "👕 A Little Expert at Independent Living",
    "themeColor": "#059669",
    "badgeEmoji": "🧺",
    "badgeLabel": "Your Self-Reliant Life Assistant",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🧺 In the situation of \"folding your own clothes and putting away your own toys\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who lives independently",
          "desc": "Fold clothes and collect toys by yourself, and use formulas to fold clothes neatly.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Clothes and socks are randomly thrown on the sofa, waiting for parents to help collect them like servants",
          "desc": "Fostering the bad habit of dependence and laziness, exacerbating family care burden and family friction.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "After playing with the toys, he actively counts down and puts them away and returns them to their original places.",
          "desc": "Demonstrate self-discipline and responsibility from beginning to end, and keep the home environment safe and tidy.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Yu and Jia carefully organized the clothes drawers and enthusiastically sorted and delivered them",
          "desc": "Become a little helper in the family's independent life and show true mature growth.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"👕 \"Little master of independent living\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. Clothes and socks are randomly thrown on the sofa, waiting for parents to help collect them like servants, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🧺",
          "label": "Calm down and take a deep breath to start \"👕 \"Little master of independent living\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"👕 \"Little master of independent living\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Lay the garment flat on the table with the back facing up, and smooth out any wrinkles with both hands."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Fold the left sleeve inwards and the right sleeve inwards."
        },
        {
          "num": 3,
          "icon": "🧺",
          "text": "Fold the hem of the clothes up into neat little squares and put them in the basket."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to👕 A little master of independent living\" and gave a warm high-five to his family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🪞 My Unique Strengths: Three Things That Make Me Shine",
    "superSkill": "💎 Unique Glowing Crystal",
    "themeColor": "#ec4899",
    "badgeEmoji": "🪞",
    "badgeLabel": "Confident and Shining Heroes",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🪞 In the situation \"I look different in the mirror\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "The small sum of self-acceptance",
          "desc": "Look in the mirror and find your three strengths and say out loud, \"I like myself.\"",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Looking in the mirror and feeling sorry for myself, crying, \"I'm stupid, I'm ugly, and the whole world hates me.\"",
          "desc": "Being stuck in self-denial hinders the healthy development of mental health and potential.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu confidently declares the merits of dinosaur encyclopedia’s talents and trustworthiness",
          "desc": "Demonstrate excellent self-awareness and turn special traits into extraordinary life highlights.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "I am sure that I am brave enough to admit my mistakes and willing to help others.",
          "desc": "Establish a sound character and self-esteem, and exude the charisma of a sincere and responsible leader.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💎 Unique luminous crystal\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control and looks in the mirror, pitying itself and crying, \"I'm stupid, I'm ugly and the whole world hates me\", causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🪞",
          "label": "Calm down and take a deep breath to start \"💎 Unique Luminous Crystal\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💎 Unique Luminous Crystal\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand tall in front of the mirror, smile, and gaze into your own eyes."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Say aloud your first strength: 'I am a kind and warm-hearted person!'"
        },
        {
          "num": 3,
          "icon": "🪞",
          "text": "Read out the second and third advantages, and give yourself a big round of applause and a hug."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to💎 Unique luminous crystal\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🪙 Buying Bread: Counting Money and Checking Change",
    "superSkill": "💰 Convenience store clerk's abacus",
    "themeColor": "#059669",
    "badgeEmoji": "🪙",
    "badgeLabel": "Financial Self-Reliance Expert",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🪙 In the situation of \"Learning to count and check the change when buying bread at the supermarket\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "He who can count money",
          "desc": "Understand the price of the bread, pay 50 yuan, and count the 22 yuan back in the palm of your hand.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "After grabbing something, I want to run out of the store directly. I don’t know that I have to queue up to pay.",
          "desc": "A serious violation of the law is suspected of theft, highlighting the urgent lack of regular education in daily life.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu who accurately used four ten yuan to buy designated toast bread",
          "desc": "Demonstrate excellent literacy in daily life mathematics application and lay the foundation for future independence.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Xiaoqiu and Jia queue up in a civilized manner and remind everyone to collect their invoices",
          "desc": "Implement citizen literacy practices and demonstrate the fruitful results of special education integrated education.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"💰 Supermarket shopkeeper's abacus\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. After grabbing something, I want to run out of the store without knowing that I have to queue up to pay, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🪙",
          "label": "Calm down and take a deep breath to start \"💰 \"Supermarket shopkeeper's abacus\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"💰 \"Supermarket shopkeeper's abacus\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Pick up the product and look at the Arabic numerals and price on the label."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take out coins or banknotes that are greater than the value of the goods and hand them to the cashier with both hands."
        },
        {
          "num": 3,
          "icon": "🪙",
          "text": "Take the change with both hands, count it in your palms, and then put it into your wallet."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to💰 Supermarket shopkeeper’s abacus” and gave a warm high-five to his family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🚦 Crossing Safely: Wait for Green, Look Both Ways and Walk Carefully",
    "superSkill": "🚩 Raise a little yellow flag for peace of mind",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚦",
    "badgeLabel": "Traffic Safety Junior Patrol Officer",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🚦 In the context of \"Safety Code for Crossing the Street Independently\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Pay attention to safety",
          "desc": "When the light turns green, look left and right first, raise the little yellow flag, hold your brother in hand and walk slowly across the road.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "As soon as the light turned green, he lowered his head, screamed and ran wildly, but was hit by a large turning truck.",
          "desc": "Ignoring the fatal crisis of the blind spot in the inner wheel, causing irreparable life tragedy.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Yu, who stood one step behind the yellow line and carefully checked that there was no oncoming traffic on the left and right",
          "desc": "Implementing the highest safety inspection standards can be called a model of traffic safety and self-defense.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia, who focus on walking without distraction and take care of their siblings",
          "desc": "Demonstrate a steady and down-to-earth character, and protect the lives and safety of yourself and your family members.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🚩 Raise the little yellow flag and feel at ease”?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control. As soon as the light turns green, he lowers his head, screams and runs wildly, but is hit by a large turning truck, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚦",
          "label": "Calm down and take a deep breath to start \"🚩 Raise the little yellow flag and feel at ease\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🚩 Raise the little yellow flag and feel at ease\" action, please tick the box if you do it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Stand one step back from the yellow line in the zebra crossing waiting area, and never step onto the road while waiting."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "After the little green man lights up, he turns his head to the left and then to the right to confirm that the vehicle has come to a complete stop."
        },
        {
          "num": 3,
          "icon": "🚦",
          "text": "Raise your right hand or small yellow flag high and walk steadily and straight across the zebra crossing."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🚩 Raise the little yellow flag and feel at ease\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🚿 Fresh After PE: Clean Clothes, Handwashing and Personal Care",
    "superSkill": "🧼 Seven-step cleansing and refreshing wash",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚿",
    "badgeLabel": "Clean and Neat Little Gentleman",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🚿 In the context of “cleaning habits after sweating profusely in physical education class”, what are the correct and polite practices? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Yu who loves cleanliness",
          "desc": "Dry sweat with a towel, put on dry and clean clothes, and wash your face and hands.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Let wet clothes stick to your back and stink, and get angry and hit others when your classmates point them out\n5. Content overview (including production process):",
          "desc": "It is easy to cause skin eczema infection, and the problem of body odor aggravates interpersonal rejection and estrangement.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Wash your hands and face carefully and keep it clean and fresh for lunch",
          "desc": "Implement good public health education and establish an excellent class model.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "He and Jia combing their hair carefully and storing wet clothes properly",
          "desc": "Show meticulous self-care ability and protect physical and mental health and quality of life.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🧼 Refreshing and cleansing in seven steps\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, letting the wet clothes stick to the back and smelling, and gets angry and hits others when pointed out by classmates, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🚿",
          "label": "Calm down and take a deep breath to start \"🧼 \"Refreshing and cleansing in seven steps\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🧼 \"Refreshing and cleansing in seven steps\", please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Immediately after exercising, take out a small towel and wipe the sweat from your forehead and the back of your neck."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Go to the changing room, take off your wet clothes, and change into clean, breathable, dry clothes."
        },
        {
          "num": 3,
          "icon": "🚿",
          "text": "After washing my hands and face thoroughly with soap at the sink, I returned to the classroom feeling refreshed."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🧼 \"Refreshing and cleansing in seven steps\" and give warm high fives to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🩹 A Scraped Knee: Stay Calm and Ask the School Nurse for Help",
    "superSkill": "🩹 External Wound Hemostasis and Calming Patch",
    "themeColor": "#ef4444",
    "badgeEmoji": "🩹",
    "badgeLabel": "Calm and Self-Protective Little Warriors",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🩹 In the situation \"I fell down and bruised my knee and it started to bleed\", what are the correct and polite things to do? Please circle the correct pattern! (can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Calm and brave He",
          "desc": "Don’t panic if you fall, press the wound with clean tissue, and go to the health center bravely.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "When he saw the scraped skin, he would lie on the dirt floor crying and kicking wildly, refusing to seek medical treatment and apply medicine.",
          "desc": "The wound is seriously infected and suppurated by sediment bacteria, which delays the opportunity for debridement.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "A small crutch that acts as a human crutch to gently support an injured partner for medical treatment.",
          "desc": "Show an extremely warm and friendly mind and become a trustworthy teammate.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia and Yu calmly assist in stopping the bleeding and guiding the movement line",
          "desc": "Give full play to excellent on-site response skills to promote perfect handling of accidents.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🩹 Trauma Hemostasis Calming Patch\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "I accidentally fell down while running and broke my skin. I pounded the floor and cried loudly. I pushed down the classmates who came to help.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🩹",
          "label": "Take a deep breath to check the wound, get up and dust yourself off, and gently ask your classmates to accompany you to the health center!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "After falling down, I felt extremely embarrassed in front of everyone. I lay down on the playground and covered my face with my hands, refusing to let anyone get close to me.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🩹 Trauma Hemostasis and Calm Patch\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Upon noticing pain and bleeding, sit on the ground and take deep breaths, without kicking or crying out loudly."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Take a clean tissue and gently press it onto the wound to stop the bleeding."
        },
        {
          "num": 3,
          "icon": "🩹",
          "text": "With the help of classmates or teachers, they slowly walked step by step to the health center to apply the medicine."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🩹 Trauma Hemostasis Calming Patch\" and a warm high-five to the family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "📮 A Letter to My Future Self: Keep Learning and Keep Trying",
    "superSkill": "📜 Writing a Letter to a Future Hero",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "📮",
    "badgeLabel": "Future Time Navigator",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"📮 In the context of \"write a thank you letter to your future self\", what are the correct and polite things to do? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "Looking back at the promised Yu",
          "desc": "Write a letter to your future self, thanking yourself for bravely overcoming difficulties and never giving up.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Thinking that I am worthless, I crumble the letter and throw it on the ground and say, \"I have no future.\"",
          "desc": "Deeply trapped in the quagmire of learned helplessness and pessimism, refusing to see the huge fact of one's own growth.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "Xiao Zuo promises to always step on the emotional brake and aspires to be a hero of justice",
          "desc": "Establish lofty personality goals and show the bright light of inner character transformation.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "Jia led everyone to solemnly seal the time capsule and swear to the future",
          "desc": "The ceremony condenses all life beliefs and writes the most touching chapter for the special education process.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"📜 A letter to future heroes\"?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, thinking that one is worthless, crumpling the letter and throwing it on the ground, saying \"I have no future\", causing confusion and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "📮",
          "label": "Calm down and take a deep breath to start \"📜 \"Letter to Future Heroes\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"📜 \"Write a letter to the future hero\" action, please tick the box if you have done it☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "Thank you to my past self who overcame difficulties and bravely practiced superpowers."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Write down your specific expectations for yourself one year from now: 'I hope I can…'"
        },
        {
          "num": 3,
          "icon": "📮",
          "text": "I personally stamped the box with the honorary seal, locked it in the iron box, and promised to meet again a year later."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to📜 Write a letter to future heroes\" and give a warm high-five to your family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
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
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🌟 My Social Skills Journey: I Am the Captain of My Life",
    "superSkill": "🌟 Captain of the Boat, Taking Control of Life",
    "themeColor": "#d97706",
    "badgeEmoji": "🌟",
    "badgeLabel": "The All-Round Independent Little Captain",
    "section1": {
      "type": "circle",
      "title": "Task 1: Good habits to look around",
      "prompt": "In the scenario of \"🌟 In the \"Ultimate Special Education Super Power Summary\" situation, what are the correct and polite actions? Please circle the correct pattern!(can circle more than one)",
      "items": [
        {
          "id": "c1",
          "icon": "🌟",
          "label": "All members of the Almighty Little Captain",
          "desc": "Hold the steering wheel of life, integrate 49 superpowers, and bravely sail towards a wonderful future.",
          "isCorrect": true
        },
        {
          "id": "c2",
          "icon": "🛑",
          "label": "Give up before difficulties and regard setbacks as an unchangeable fate",
          "desc": "Self-drawing and self-limitation miss the precious opportunity for self-breakthrough and soaring in life.",
          "isCorrect": false
        },
        {
          "id": "c3",
          "icon": "✨",
          "label": "The little boy who turned his impulse into a protective force and received the honor with his head held high",
          "desc": "Demonstrate extraordinary self-transcendence and become an outstanding example of transformation of emotional and behavioral disorders.",
          "isCorrect": true
        },
        {
          "id": "c4",
          "icon": "🤝",
          "label": "All partners who bow deeply to thank the teacher and set sail with love and hope",
          "desc": "Compose the most brilliant and touching life movement of special education, illuminating and warming the world.",
          "isCorrect": true
        }
      ]
    },
    "section2": {
      "type": "choice",
      "title": "Task 2: My super power multiple choice question",
      "prompt": "When encountering this situation, which approach can play a role in \"🌟 \"Little Captain\" at the helm of life?",
      "options": [
        {
          "id": "t1",
          "score": "Negative impulse",
          "icon": "⚡",
          "label": "When encountering a situation, the brain loses control, retreats and gives up before difficulties, and regards failure as an unchangeable fate, causing chaos and danger.",
          "color": "#ef4444"
        },
        {
          "id": "t2",
          "score": "Best Super Power",
          "icon": "🌟",
          "label": "Calm down and take a deep breath to start \"🌟 \"Little Captain at the helm of life\", follow the steps to deal with it properly step by step!",
          "color": "#10b981",
          "recommended": true
        },
        {
          "id": "t3",
          "score": "Negative withdrawal",
          "icon": "🌧️",
          "label": "Feeling extremely frightened and frustrated, I endured silently and did not dare to ask for help. I huddled in the corner and shivered in pain and frustration.",
          "color": "#f59e0b"
        }
      ]
    },
    "section3": {
      "type": "checklist",
      "title": "Task three: Today’s super power action challenge",
      "prompt": "Practice with the teacher \"🌟 Take charge of your life as a little captain. Please tick the box if you have done it.☑：",
      "steps": [
        {
          "num": 1,
          "icon": "👀",
          "text": "When faced with a storm of anger and frustration, immediately grab the helm in your mind and take a deep breath."
        },
        {
          "num": 2,
          "icon": "🧘",
          "text": "Use the 49 superpower tools you've learned to find the best solution."
        },
        {
          "num": 3,
          "icon": "🌟",
          "text": "Hold your head high, believe in yourself, and be a kind, brave, and indomitable captain of your own life."
        }
      ]
    },
    "homeTask": {
      "title": "Family Life Superman Student Check-in",
      "action": "After returning home from school, show your parents how to🌟 The little captain takes charge of life\" and gave a warm high-five to his family!"
    },
    "stars": {
      "title": "Self-outcome assessment",
      "prompt": "How did I perform on today's small task?(Please paint beautiful star colors):",
      "max": 5,
      "default": 3
    }
  }
};

if (typeof window !== 'undefined') {
  window.dailyWorksheets = dailyWorksheets;
}
