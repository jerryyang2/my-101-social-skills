// 預設每日備課晨報資料庫（按照日期與週次排序：前 52 週為完整社交溝通課綱，後 49 課為晨報靈感備份庫）
const defaultBriefings = [
  {
    "id": "b-week-1",
    "lessonNumber": 1,
    "legacy": false,
    "date": "2026-09-01",
    "dayOfWeek": "Tuesday",
    "festival": "Welcome Back to School",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "Saying Hello: Meeting Classmates and Feeling Safe",
    "code": "特社1-II-1",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌟",
    "badgeLabel": "Energetic Greeting Officer",
    "superSkill": "👋 Smiling and Greeting Superman",
    "summary": "On the first day of school, students overcame their unfamiliarity and shyness, learning to make eye contact, smile, and greet their teachers and peers with their names and a \"good morning.\"",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎒 The little bear in the magic backpack and the first \"Good morning\"!",
      "content": "On September 1st, the first day of school, colorful welcome balloons hung outside the special education classroom. Four little heroes, carrying their new schoolbags, walked into the classroom, their hearts filled with both anticipation and nervousness. Yu clutched his backpack strap tightly, head down; Jun looked around restlessly; He shyly hid behind the door; and Jia curiously peered around. The teacher smiled and approached with a teddy bear puppet: \"Good morning, everyone! Welcome to our warm learning castle!\" The teddy bear puppet extended its hand to each person, its eyes gazing gently at them. Yu took a deep breath, raised his head, and shouted loudly, \"Good morning, teacher! I'm Yu!\" This resounding greeting, like sunshine, illuminated the entire classroom, and everyone smiled happily!",
      "question": "On meeting new classmates, how could you introduce yourself using speech, pointing or a wave, and notice the other person comfortably?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎒 The bear in the school bag and the first greeting: Use the story to explore how to greet new classmates with speech, pointing or a wave and attend to others comfortably."
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"👋 The core technique of \"Smiling and Saying Hello to Superboy\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct a practical drill in the character theater \"On the first day of school, walk into the learning classroom, face the new teacher and new partners, everyone practices eye gaze, smile and clearly introduce themselves!\", and become proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and color worksheet, you will be awarded the \"Vitality Greeting Officer\" medal of honor and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"👋 Smile and say hello, \"Superman\" structured visual prompt card, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 👋 Smiling and Greeting Superman",
      "steps": [
        {
          "num": 1,
          "text": "Stand firm on both feet, raise your head and chest, and take a deep breath"
        },
        {
          "num": 2,
          "text": "Wave your right hand and raise the corners of your mouth to show a smile"
        },
        {
          "num": 3,
          "text": "Greet with speech, a card or a wave"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Saying Hello: Meeting Classmates and Feeling Safe”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Feeling shy, he threw his schoolbag on the ground angrily and yelled at the new classmate who came over: \"Go away! Don't look at me!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Stand comfortably, take a breath, turn toward the partner, smile if comfortable and wave: “Good morning! I am Yu!”",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Wave your right hand and raise the corners of your mouth to show a smile. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"meeting each other at the beginning of school and saying hello loudly\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【👋 Say hello to Superboy with a smile]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [👋 Say hello to Superboy with a smile], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Wave your right hand and raise the corners of your mouth to show a smile. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Wave your right hand and raise the corners of your mouth to show a smile. Wait for a response, demonstrate if needed, and recognise effort without public comparisons.",
    "useBrowserSpeech": true
  },
  {
    "id": "b-week-2",
    "lessonNumber": 2,
    "legacy": false,
    "date": "2026-09-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "Noticing and Responding Comfortably",
    "code": "特社1-II-2",
    "themeColor": "#6366f1",
    "badgeEmoji": "✨",
    "badgeLabel": "Responding Comfortably",
    "superSkill": "Respond in a comfortable way",
    "summary": "Practise respond in a comfortable way using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "Respond in a comfortable way",
      "content": "Yu does not feel comfortable looking into someone’s eyes for a long time. Jun points to the blocks and asks, “Would you like to build with me?” Yu looks at the blocks, nods and says yes. The teacher notices that he heard and responded to the invitation. Listening can look different for different people.",
      "question": "What comfortable ways can you use to show a partner you are listening?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Respond in a comfortable way”. What comfortable ways can you use to show a partner you are listening? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Choose a comfortable position and attend to your partner or a shared object → Respond with a nod, a wave, a communication card or speech → Ask for a repeat or take a break when needed"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Respond in a comfortable way",
      "steps": [
        {
          "num": 1,
          "text": "Choose a comfortable position and attend to your partner or a shared object"
        },
        {
          "num": 2,
          "text": "Respond with a nod, a wave, a communication card or speech"
        },
        {
          "num": 3,
          "text": "Ask for a repeat or take a break when needed"
        }
      ]
    },
    "decisionTree": {
      "prompt": "What comfortable ways can you use to show a partner you are listening?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Respond with a nod, a wave, a communication card or speech",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Respond with a nod, a wave, a communication card or speech. Report no opportunity or any support needed too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter similar situations of \"eye gaze and warm smile\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【👁️ Eyes and eyebrows spotlight]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [👁️ Eyes, eyebrows, spotlight], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can respond with a nod, a wave, a communication card or speech. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Respond with a nod, a wave, a communication card or speech. Accept speech, pointing or gestures without public comparisons.",
    "useBrowserSpeech": true
  },
  {
    "id": "b-week-3",
    "lessonNumber": 3,
    "legacy": false,
    "date": "2026-09-15",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 1: Self-Awareness and Classroom Routines",
    "title": "The Five-Level Voice Meter: Choosing the Right Volume",
    "code": "特社1-II-3",
    "themeColor": "#10b981",
    "badgeEmoji": "🎙️",
    "badgeLabel": "The Volume Magician",
    "superSkill": "🎛️ Magical volume control on the dashboard",
    "summary": "Develop environmental volume awareness: recognize 1 minute for whispering, 2 minute for small group whispering, 3 minute for whole class speaking, 4 minute for loudspeaker on the playground, and 5 minute for emergency help, and learn to adjust the volume according to the location.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🔊 Big Horn, Little Dinosaur, and Magical Volume Control!",
      "content": "Jun has a very loud voice; he speaks in the hallway like he's using a megaphone, and he even shouts while reading in the library! Today, the teacher drew a colorful \"five-level volume control panel\" on the blackboard: \"1 point is like a kitten's whisper, used in the library and during lunch break; 2 points is like two birds chatting, used in group discussions; 3 points is like a teacher lecturing, used when raising your hand to speak; 4 points is like an athlete on the field, used in outdoor physical education class; 5 points is a life-saving shout in case of fire!\" The teacher had Jun practice turning the volume knob. When Jun turned the volume down from 4 points to 2 points and spoke gently to Yu, Yu happily said, \"Jun, you sound so good speaking at 2 points!\"",
      "question": "If you speak at a 4/5 volume in a quiet classroom or library, who will you disturb? What volume should you use during group discussions?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🔊 Big speaker dinosaur and magical volume adjuster! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Who will be disturbed if you speak with a 4-point voice in a quiet classroom or library? What level should the volume be turned to during group discussions?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎛️ The core technique of \"Volume Dashboard Divine Tuning\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct practical exercises in the character theater \"In the library and group discussion situations, everyone practices turning their throat knobs to the correct volume level!\", and becomes proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Volume Magician\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎛️ \"Volume Dashboard God Tuning\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎛️ Magical volume control on the dashboard",
      "steps": [
        {
          "num": 1,
          "text": "Observe the place you are in (classroom/library/study room)"
        },
        {
          "num": 2,
          "text": "Place your palm lightly against your throat to feel the vibration intensity during pronunciation"
        },
        {
          "num": 3,
          "text": "Turn the knob to one to two volume and speak softly and gently"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “The Five-Level Voice Meter: Choosing the Right Volume”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I was so excited during the group discussion that I directly turned the volume to the loudest quarter volume in the playground, which gave the whole class earaches.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Touch your throat to feel the vibration, adjust the volume to two groups and whisper softly to express clearly and keep the class quiet.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Place your palm lightly against your throat to feel the vibration intensity during pronunciation. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation with the \"five-level sound level dashboard\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🎛️ Volume dashboard divine tuning]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎛️ Volume Dashboard Divine Tuning], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Place your palm lightly against your throat to feel the vibration intensity during pronunciation. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Place your palm lightly against your throat to feel the vibration intensity during pronunciation. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-4",
    "lessonNumber": 4,
    "legacy": false,
    "date": "2026-09-22",
    "dayOfWeek": "Tuesday",
    "festival": "Teacher's Day",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "Saying Thank You to Our Teachers",
    "code": "特社2-II-1",
    "themeColor": "#ef4444",
    "badgeEmoji": "🍎",
    "badgeLabel": "Little Role Models of Respecting Teachers",
    "superSkill": "💌 Little Ambassador of Respect and Gratitude to Teachers",
    "summary": "In conjunction with Teachers' Day in September, guide students to recognize the hard work of special education and regular class teachers, and express their sincere gratitude through specific polite actions (standing at attention, bowing, and presenting cards with both hands).",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "💐 The cup of warm water and the bright red teacher's card in front of the podium!",
      "content": "Teacher's Day is approaching on September 28th, and music of gratitude is playing throughout the school. He observed that the teachers are busy grading homework, practicing the \"emotional thermometer\" exercise with the students, and leading the class, often so busy they don't even have time to drink water, their throats becoming hoarse. At recess, He quietly brought warm water to the teacher's desk. Yu and Jun also took out hand-drawn gold heart cards, and Jia wrote \"Happy Teacher's Day\" on the blackboard. When the teacher entered the classroom and saw all this, her eyes welled up with tears. The four little heroes stood straight and bowed deeply: \"Teacher, thank you for your patient guidance every day. Happy Teacher's Day!\"",
      "question": "What hard things does the teacher usually do to take care of everyone? Besides saying \"Happy Teacher's Day,\" what actions can we take to express our gratitude?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💐 The cup of warm water and the red teacher's card in front of the podium! ”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: What hard things does the teacher usually do to take care of everyone? In addition to saying Happy Holidays on Teachers' Day, what actions can we take to express our gratitude?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"💌 The core technique of \"The Little Envoy of Gratitude to Teachers\" is a three-step process of body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Teacher's Day is here, the four little heroes practice sending sincere gratitude and gifts to the mentors and special education teachers who have worked hard to accompany them!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Little Model of Respecting Teachers\" honorary medal and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"💌 \"Little Envoy of Appreciation for Teachers\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 💌 Little Ambassador of Respect and Gratitude to Teachers",
      "steps": [
        {
          "num": 1,
          "text": "Stand at attention and hold the card or warm water steadily with both hands."
        },
        {
          "num": 2,
          "text": "Bend the waist naturally at 45 degrees and bow to the teacher."
        },
        {
          "num": 3,
          "text": "Say sincerely: \"Thank you, teacher, for your hard work!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Saying Thank You to Our Teachers”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I found it annoying when the teacher told me to correct, so I rolled my eyes at the teacher and kicked the chair hard in protest.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Present the hand-painted love card with both hands straight, stand at attention and bow and say: \"Thank you, teacher, for teaching me hard every day!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Bend the waist naturally at 45 degrees and bow to the teacher.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Teacher's Day Special 9/28]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【💌 A special envoy of gratitude to teachers]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [💌 A special envoy of respect and gratitude], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Bend the waist naturally at 45 degrees and bow to the teacher.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Bend the waist naturally at 45 degrees and bow to the teacher.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-5",
    "lessonNumber": 5,
    "legacy": false,
    "date": "2026-09-29",
    "dayOfWeek": "Tuesday",
    "festival": "Mid-Autumn Festival",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "Mooncakes and Pomelos: Sharing and Taking Turns",
    "code": "特社2-II-2",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🥮",
    "badgeLabel": "Sharing Little Fairy",
    "superSkill": "🌕 Mid-Autumn Festival Treats to Foodies",
    "summary": "Master the etiquette of taking snacks at festive parties: queue up, each person takes one portion and doesn't hoard the largest piece, and offer snacks to classmates to enjoy the fun of sharing with others.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🥮 A round and plump egg yolk pastry with an adorable pomelo hat!",
      "content": "The Mid-Autumn Festival celebration table was laden with fragrant egg yolk pastries and pomelos. The most eye-catching item was the \"Golden Egg Yolk Pastry\" in the very center of the plate, studded with a large egg yolk! Jun's mouth watered at the sight, and he immediately reached out to grab it! Jia gently reminded him, \"Jun, we need to take one each in line!\" Remembering that the Mid-Autumn Festival represents \"completeness and courtesy,\" Jun took a deep breath, withdrew his hand, and smiled at Yu, saying, \"Yu, you go first! You love egg yolks the most!\" Yu was overjoyed. Everyone wore green pomelo hats that He had peeled himself, sitting around eating mooncakes, their hearts filled with a sweeter, more complete joy than the moon itself!",
      "question": "What would happen if we grabbed the biggest mooncake we wanted? Why did everyone laugh even more when Jun offered it to Yu?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🥮 Round egg yolk cake and a cute grapefruit hat!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: What would happen if you grab the big mooncake you want to eat the most? Xiaojiu took the initiative to show courtesy to Yu, why did everyone laugh more happily?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🌕 The core technique of \"Mid-Autumn Courtesy to Gourmets\" is a three-step process of dismantling body movements and voice tones, combined with brain braking visual charts for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Line up to get snacks at the Mid-Autumn Festival Party. Faced with the most popular egg yolk cake, everyone practiced taking one portion each and taking the initiative to give way to friends!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Sharing Fairy\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🌕 \"Mid-Autumn Festival Courtesy to Gourmets\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🌕 Mid-Autumn Festival Treats to Foodies",
      "steps": [
        {
          "num": 1,
          "text": "Stop in front of the food, put your hands in front of your belly and wait"
        },
        {
          "num": 2,
          "text": "When everyone is seated, politely ask: \"Can I get one?\""
        },
        {
          "num": 3,
          "text": "Take one with both hands and say please to the classmates next to you with a smile"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Mooncakes and Pomelos: Sharing and Taking Turns”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I saw the grapefruits and mooncakes from the ceilidh, I carried the whole plate away with my hands, stuffed my mouth full and yelled, \"They're all mine!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Observe taking turns to line up, take your own portion with both hands, and generously say to the classmates next to you: \"Please use it slowly and eat together!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: When everyone is seated, politely ask: \"Can I get one?\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Mid-Autumn Festival Special]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🌕 Mid-Autumn Festival courtesy to gourmets]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🌕 Mid-Autumn Festival courtesy to gourmets], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: When everyone is seated, politely ask: \"Can I get one?\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: When everyone is seated, politely ask: \"Can I get one?\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-6",
    "lessonNumber": 6,
    "legacy": false,
    "date": "2026-10-06",
    "dayOfWeek": "Tuesday",
    "festival": "Double Ten National Day",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "Lining Up Safely: Hands at Your Sides, Eyes Ahead",
    "code": "特社1-II-4",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎖️",
    "badgeLabel": "Order Squad Leader",
    "superSkill": "🚩 The Mighty Little Guardian",
    "summary": "Master the group marching discipline: look ahead, keep your hands at your sides without swinging them too much, take steady steps without looking around or stepping on your heels.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🇹🇼 National Day flag bearers and the majestic little train in the corridor!",
      "content": "On National Day, the whole school lined up to walk to the playground for the flag-raising ceremony. Jun, who loves to look around while walking, would glance at the swallows' nest and kick the shoes in front of him. \"Thump!\" Jun stepped on Yu's heel! Yu almost fell: \"Ouch! Don't keep stepping on me!\" Jia, the team leader, waved his small national flag and announced the rhyme: \"Hands on thighs, eyes looking behind your head, one step apart!\" Jun immediately withdrew his hands and feet and stood up straight. The line marched forward in perfect unison, the national flag fluttering in the morning sun, and everyone looked incredibly proud!",
      "question": "What dangers might occur if we turn our heads around and step randomly while walking in a line? Where should we put our eyes and hands when walking?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🇹🇼 The National Day flag bearer and the impressive little train in the corridor!\", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: What dangers will occur if you turn your head around and step on your feet while walking in line? Where should you place your eyes and hands when walking?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚩 The core technique of \"Little Guards Marching with Spirit\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"The whole school lined up to move during the National Day flag-raising ceremony. The four partners practiced keeping distance between cars, putting their hands on their thighs, and looking straight ahead!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and colored worksheet, you will be awarded the \"Order Squad Leader\" medal of honor and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚩 \"Arrogant Marching Little Guard\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚩 The Mighty Little Guardian",
      "steps": [
        {
          "num": 1,
          "text": "When you hear the command to assemble, stand at attention with your feet together and your hands on your sides."
        },
        {
          "num": 2,
          "text": "Look at the back of the head of the classmate in front of you and keep an arm’s length distance"
        },
        {
          "num": 3,
          "text": "Keep your steps in line with the rhythm of the team and march quietly without leaving the team."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Lining Up Safely: Hands at Your Sides, Eyes Ahead”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "The rally whistle sounded, and in order to get to the front, he used his elbow to push away Xiaowa who was in front.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Put your hands naturally on your sides, keep a safe distance from the classmates in front, and keep up with the team in high spirits.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Look at the back of the head of the classmate in front of you and keep an arm’s length distance. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in the regular class \"[Double Ten National Day Special 10/10]\"",
      "promptWord": "Please prompt the formula: \"Start【🚩 The little guard marching with dignity]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚩 The little guard marching with dignity], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Look at the back of the head of the classmate in front of you and keep an arm’s length distance. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Look at the back of the head of the classmate in front of you and keep an arm’s length distance. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-7",
    "lessonNumber": 7,
    "legacy": false,
    "date": "2026-10-13",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 3: Understanding Feelings and Practicing Self-Control",
    "title": "My Body's Alarm: Noticing Signs of Anger",
    "code": "特社1-II-5",
    "themeColor": "#f97316",
    "badgeEmoji": "🌡️",
    "badgeLabel": "Body Detective",
    "superSkill": "🧭 Detecting body alarms",
    "summary": "Guide students to become aware of physical physiological signals such as rapid heartbeat, clenched fists, and flushed face, and use a 1-5 point emotional thermometer to visualize anger and establish a sense of braking.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "💥 The Thunderous Block Castle Collapses and Heart-Pounding Drums!",
      "content": "Xiao Hao spent the entire class building his block castle, only to have it smashed to pieces by a classmate running to retrieve a ball! Xiao Hao froze, his palms sweating profusely, his fists clenched like stones, his teeth grinding together. His chest pounded like a drum, his face burning hot! A train screamed in his head: \"I'm going to rush up and beat someone up!\" The teacher gently pressed his shoulder: \"Xiao Hao, look at your emotional thermometer, what's it on now?\" Xiao Hao looked at the thermometer, took a deep breath, and shouted: \"Four out of ten! I'm about to explode!\" The moment he uttered the thermometer, his body slowly found the brakes!",
      "question": "What angry warning signs did Xiaohao's body send out? Say your emotional score aloud; why does this help put the brakes on your brain?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💥 The thunder block castle collapses and the heart beats! ”, using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: What anger alarms does Xiao Hao’s body send out? Why does speaking out loud about your emotional scores put the brakes on your brain?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🧭 The core technique of \"Discovering the Body Alarm\" is to break down the three steps of body movements and voice tone, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"When the blocks are knocked down and are about to explode, everyone practices identifying the heartbeat, clenching fists and other body alarms, and saying the score of the emotional thermometer!\", and becoming proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Body Detective\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🧭 Discover \"Body Alarm\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🧭 Detecting body alarms",
      "steps": [
        {
          "num": 1,
          "text": "Place your palm on your left chest and feel if your heartbeat is running fast"
        },
        {
          "num": 2,
          "text": "Self-check with open palms: Are the fists of both hands clenched too tightly?"
        },
        {
          "num": 3,
          "text": "Talk about your physical feelings: \"My body alarm is going off.\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “My Body's Alarm: Noticing Signs of Anger”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "My chest felt hot and my fists became hard. I immediately threw my schoolbag around like a little dinosaur and kicked over the trash can.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Be keenly aware of the body signal of \"heartbeat beating like a drum\", and immediately extend your index finger in front of your chest to sign \"pause and brake\"!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Self-check with open palms: Are the fists of both hands clenched too tightly?. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter \"my body alarm\" similar situations in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🧭 Body alarm found]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🧭 Found the body alarm], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Self-check with open palms: Are the fists of both hands clenched too tightly?. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Self-check with open palms: Are the fists of both hands clenched too tightly?. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-8",
    "lessonNumber": 8,
    "legacy": false,
    "date": "2026-10-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 3: Understanding Feelings and Practicing Self-Control",
    "title": "The Turtle Pause: Breathe Three Times and Count to Ten",
    "code": "特社1-II-6",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🐢",
    "badgeLabel": "Braking Master",
    "superSkill": "🛡️ The amazing turtle shell-shrinking technique",
    "summary": "Master impulse control techniques: When you feel like you're about to lose your temper or attack, cross your arms over your chest like a turtle retracting into its shell, take three deep breaths, and mentally count down ten seconds.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🐢 Po the little turtle's magical green protective shell!",
      "content": "Po, the little turtle, used to be a ticking time bomb. If anyone touched him, he'd immediately lash out with his claws. Grandpa Turtle gave him a magic book: 'When you feel like getting angry, retract your head and hands into your shell, slowly inhale and exhale, counting in your mind: ten, nine, eight… all the way down to one!' Today after class, a classmate accidentally snatched Po's beloved colored pencils. Just as Po was about to retaliate, he suddenly remembered the turtle's secret! He immediately crossed his arms, pressed his chin to his chest, and curled up into a ball. He closed his eyes inside his shell, took a deep breath, and counted to one in his mind. Ten seconds later, Po looked up; the storm had passed. He calmly said, 'Please give me back my pencil.' The whole class applauded Po's miraculous braking!",
      "question": "When you want to hit someone or cry and scream, what happens to the anger in your brain when you shrink into your shell and count to ten?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🐢 Little turtle Po’s green magical protective shell!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When you want to punch someone or cry loudly, if you shrink into your own little shell and count to ten, what will happen to the anger in your brain?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🛡️ The core technique of \"Magic Turtle Shell Shrinking Technique\" is to disassemble the three steps of body movements and voice tone, and practice it with the brain braking visual chart."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater.\"When a toy is robbed or accidentally hit by someone, everyone practices the self-made braking action of \"crossing the chest and shrinking the shell + counting to ten\" immediately! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Brake Master\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🛡️ \"The Magic Turtle Shrinking Technique\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🛡️ The amazing turtle shell-shrinking technique",
      "steps": [
        {
          "num": 1,
          "text": "Hold your hands around your chest, like a little turtle retracting into its solid shell"
        },
        {
          "num": 2,
          "text": "Close your eyes and take three deep breaths, feeling your belly bulge"
        },
        {
          "num": 3,
          "text": "Count the numbers slowly in your mind: one, two, three...count to ten"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “The Turtle Pause: Breathe Three Times and Count to Ten”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I was very unwilling to lose the game. I tore up the game cards and yelled at the referee teacher: \"This is not fair!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Imagine that you are a calm little turtle, hold your head in your hands and shrink into the safety shell, take three deep breaths and count from one to ten.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Close your eyes and take three deep breaths, feeling your belly bulge. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"Magical Turtle Braking Technique\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【🛡️ Magical Turtle Shell Shrinking Technique]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🛡️ Magical Turtle Shell Shrinking Technique], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Close your eyes and take three deep breaths, feeling your belly bulge. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Close your eyes and take three deep breaths, feeling your belly bulge. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-9",
    "lessonNumber": 9,
    "legacy": false,
    "date": "2026-10-27",
    "dayOfWeek": "Tuesday",
    "festival": "Halloween",
    "unit": "Unit 2: Autumn Celebrations and Gratitude",
    "title": "Halloween Manners: Asking Politely and Respecting Boundaries",
    "code": "特社2-II-3",
    "themeColor": "#d97706",
    "badgeEmoji": "🎃",
    "badgeLabel": "Halloween Gentleman Elf",
    "superSkill": "🍬 Politely ask for candy without causing trouble",
    "summary": "Master the etiquette of asking for candy and costume parades during festivals: politely say please and thank you, don't use masks to scare people, and stop immediately when someone tells you not to play pranks.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎃 A pumpkin basket filled with gold coin chocolates and a terrifying giant pumpkin mask!",
      "content": "At a Halloween costume party, fourth-grader Jun wore a vampire mask that glowed red and had a mouthful of sharp teeth. He screamed \"Wow—!\" in the hallway, scaring everyone! A younger girl was so frightened that she burst into tears, dropping her pumpkin basket. The teacher came over and gently reminded her, \"Jun, Halloween is a holiday to bring joy, not to scare people! If someone is crying or saying they're scared, we should take off our masks immediately!\" Jun quickly took off his mask, knelt down to help the little girl pick up her pumpkin basket, and gave her one of his pumpkin marshmallows: \"Little girl, I'm sorry, I'm Jun the masked brother, don't be afraid!\" The little girl wiped away her tears and smiled, and the hallway was filled with joyful laughter again!",
      "question": "What should we do if a classmate is already crying from fright when we're joking around on Halloween? What's a polite thing to say when asking for candy?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎃 Gold coin chocolates and scary big pumpkin mask in the pumpkin basket!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: What should we do if our classmates are scared to tears when we are joking on Halloween? What is the polite thing to say when asking for candy?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🍬 The core skill of \"Being polite and not trick-or-treating\" is divided into three steps of body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Halloween parade asking for candy and wearing masks to interact. Everyone practiced polite knocking on the door to ask for candy, and respecting those who are afraid of being scared!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and be awarded the \"Halloween Gentleman Elf\" medal of honor, as well as classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🍬 \"Be Polite and Don't Trick-Treat\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🍬 Politely ask for candy without causing trouble",
      "steps": [
        {
          "num": 1,
          "text": "Stand up straight, hold the bag in both hands and smile politely"
        },
        {
          "num": 2,
          "text": "Speak the secret word gently and clearly: \"Trick or Treat\""
        },
        {
          "num": 3,
          "text": "When you get the candy, catch it with both hands and say loudly: \"Thank you!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Halloween Manners: Asking Politely and Respecting Boundaries”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I asked for candy, others only gave me one. If I thought it was too little, I immediately spit the candy on the ground, and even took away other people's masks.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Politely hold the bag with both hands and say, \"Trick or treat, can you give me candy?\" Say thank you when you get it!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Speak the secret word gently and clearly: \"Trick or Treat\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Halloween Special 10/31]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🍬 Be polite and don’t trick or treat]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🍬 Be polite and don’t trick-or-treat], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Speak the secret word gently and clearly: \"Trick or Treat\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Speak the secret word gently and clearly: \"Trick or Treat\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-10",
    "lessonNumber": 10,
    "legacy": false,
    "date": "2026-11-03",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "Raising a Hand: Waiting for Your Turn to Speak",
    "code": "特社1-II-7",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🙋",
    "badgeLabel": "Polite and Courteous Speech",
    "superSkill": "✋ Quietly raise your hand and wait to be called on.",
    "summary": "Master the boundaries of body language when speaking in class: sit upright, keep your elbows on the table and raise them quietly, keep your mouth closed and wait to be called on, and overcome the habit of impulsively shouting out when you think of an answer.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🦖 The little Tyrannosaurus Rex that interrupts and the great magician who raises his hand!",
      "content": "In social studies class, the teacher asked a fun riddle: \"What white English letter is on the chest of the Formosan black bear?\" Jun, who had just read an animal encyclopedia yesterday, excitedly jumped onto his chair, waving his hands and shouting, \"I know! It's a V! Teacher, pick me! Pick me!\" The whole classroom buzzed with excitement. The teacher frowned and called on He, who was sitting upright in the second row, his right hand quietly raised: \"He, please answer.\" He stood up and said gently, \"It's the letter V.\" The teacher smiled and gave He a stamp of approval. Jun sat down angrily: \"I said it first!\" The teacher told him, \"Jun's answer was great, but the magic of speaking in class is 'raise your hand first, wait to be called on, then speak.' Speaking up first will make it hard for everyone to hear you!\"",
      "question": "Jun knew the answer, but why didn't the teacher call on him first? How can you make yourself more popular when you want to speak?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦖 The talking little tyrannosaurus and the big magician who raises his hand! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Although Jia knew the answer, why didn’t the teacher ask him to speak first? What do you do to be popular when you want to be published?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"✋ The core technique of \"Quietly raising hands and waiting for roll call\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater.\"There was almost a quarrel in class as they rushed to tell the answers. Four partners demonstrated the speaking etiquette of \"put your elbows on the table, close your mouth, and wait until your name is called before standing up\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Speech and Ceremony Star\" medal of honor, and will be rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"✋ \"Quietly raise hands and wait for roll call\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 ✋ Quietly raise your hand and wait to be called on.",
      "steps": [
        {
          "num": 1,
          "text": "Raise your right hand upward steadily, with your arm close to your ear"
        },
        {
          "num": 2,
          "text": "Close your mouth like zipper and look at the teacher quietly"
        },
        {
          "num": 3,
          "text": "When you hear the teacher calling your name, stand up and speak generously"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Raising a Hand: Waiting for Your Turn to Speak”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I thought of the answer, I yelled excitedly. I jumped up from my seat and waved my hands to talk, covering up other people's speeches.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Raise your right hand straight up close to your ear, close your mouth and wait quietly until the teacher calls your name before standing up to speak.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Close your mouth like zipper and look at the teacher quietly. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter situations similar to \"classroom raising of hands etiquette\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【✋ Quietly raise your hands and wait for roll call]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [✋ Quietly raise your hand and wait for roll call], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Close your mouth like zipper and look at the teacher quietly. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Close your mouth like zipper and look at the teacher quietly. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-11",
    "lessonNumber": 11,
    "legacy": false,
    "date": "2026-11-10",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "Back to Class: Getting Ready When the Bell Rings",
    "code": "特社1-II-8",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🔔",
    "badgeLabel": "Getting Back into the swing of things team",
    "superSkill": "⏰ The bell will chime again in thirty seconds.",
    "summary": "Master the routine for switching to class when the bell rings: put down your toys, return to your seat, take three deep breaths, and take out your textbook for the next class to improve transition anxiety and procrastination.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🔔 Flying spinning top and the magical school bell!",
      "content": "During the twenty-minute break, fourth-graders Yu and Jun engaged in a spinning top duel in the hallway! The tops spun rapidly, making crisp clanging sounds, and a crowd of cheering classmates gathered around. Just as Jun's top unleashed its ultimate attack, \"Clang—clang—\" the school bell suddenly rang! Jun, still eager for more, shouted, \"Wait! Let's fight for the last three seconds!\" Although Yu also wanted to see the result, he glanced at the clock on the wall and decisively pressed the top launcher: \"Jun, the bell rang! The teacher said the bell is an order, let's put our tops away and go back to our seats!\" He also quickly ran over to help collect the parts. Within thirty seconds, all four children were sitting upright in their seats, opening their Chinese textbooks. The teacher walked into the classroom and, seeing the whole class neatly seated, stamped a large badge of honor on the entire class!",
      "question": "What would happen if we refused to return to the classroom when the clock struck midnight and we were having the most fun? What actions should we take within thirty seconds of the clock striking midnight?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🔔 Flying top and the magic bell!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When the clock rings when you are having the most fun, what will be the consequences if you refuse to go back to the classroom? What actions must be completed within thirty seconds after the bell rings?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstrate the core technique of \"⏰ The bell returns in thirty seconds\", break down the three steps of body movements and voice tone, and practice it with the brain brake visual chart."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"When the bell rings, the toys in your hands are playing to a wonderful point. Let's practice putting down the toys immediately, returning to our seats and setting up the textbooks!\", and become proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and colored worksheet, you will be awarded the \"Heart-Taking Team Leader\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"⏰ The bell returns to its original position in thirty seconds\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 ⏰ The bell will chime again in thirty seconds.",
      "steps": [
        {
          "num": 1,
          "text": "As soon as you hear the school bell ringing, put down the game at hand immediately"
        },
        {
          "num": 2,
          "text": "Walk quickly instead of running, and return to your seat within thirty seconds"
        },
        {
          "num": 3,
          "text": "Take out the textbook and pencil case for the next period, sit upright and take a deep breath"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Back to Class: Getting Ready When the Bell Rings”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "The bell rang, but he still insisted on kicking the ball into the goal, screaming in the playground and refusing to go back to the classroom.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "As soon as he heard the bell, he immediately counted thirty seconds silently in his heart, returned the toys to their original places, and quickly walked back to the classroom to tidy up the desktop.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Walk quickly instead of running, and return to your seat within thirty seconds. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in a regular class as \"they will calm down when they hear the sound of the bell\"",
      "promptWord": "Please prompt the formula: \"Start [⏰ The bell will return in thirty seconds]!”",
      "praise": "Publicly affirm his progress in class: \"Look, my classmate just did [⏰ Return to position after the bell rings in thirty seconds], very polite!\" ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Walk quickly instead of running, and return to your seat within thirty seconds. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Walk quickly instead of running, and return to your seat within thirty seconds. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-12",
    "lessonNumber": 12,
    "legacy": false,
    "date": "2026-11-17",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Joining a Game: May I Play Too?",
    "code": "特社2-II-4",
    "themeColor": "#ec4899",
    "badgeEmoji": "🤝",
    "badgeLabel": "Friendship Little Expert",
    "superSkill": "🔑 Asking to Join a Game",
    "summary": "Master the strategy of integrating into peer games: First, observe from the side for three seconds, wait for the game to pause, make eye contact and ask, \"May I join?\", and calmly accept if rejected.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "⚽ A soccer tournament on the playground and a lonely little fox!",
      "content": "At recess, the students on the playground were playing an exciting soccer game. Jia stood by the goal with her water bottle, really wanting to join in. But she didn't know how to start, so she suddenly rushed onto the field, grabbed the soccer ball, and shouted, \"I want to play too! Let me kick!\" The students who were playing enthusiastically yelled angrily, \"Why are you taking our ball! That's so rude! You can't play anymore!\" Jia froze, tears welling up in her eyes. The teacher came over and took Jia's hand: \"Jia, you can't just grab the ball if you want to play. We should stand on the sidelines and watch how everyone plays. When the ball stops, look at the captain and politely ask, 'May I join you?'\" Jia wiped away her tears and did as the teacher instructed. The soccer captain smiled and said, \"Sure! You can be the goalkeeper!\" Jia jumped up happily!",
      "question": "When you want to join someone else's game, how would everyone feel if you just snatched the ball away? What are the three correct steps to join?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"⚽ Football match on the playground and the lonely little fox!\", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When you want to join other people's games, what will everyone think if you directly snatch the ball away? What are the correct three steps to join?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🔑 The core skills of \"Passport\" are added to the game, and the three steps of body movements and voice tone are broken down, and combined with the brain braking visual chart for proficiency practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater. \"Everyone is having fun on the playground. The four partners practiced observing first, waiting for a gap, and using polite sentence patterns to apply to join the game!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Friendship Master\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🔑 The game adds \"Passport\" structured visual reminder chart to mark eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🔑 Asking to Join a Game",
      "steps": [
        {
          "num": 1,
          "text": "Stop two steps away from your game partner and keep smiling"
        },
        {
          "num": 2,
          "text": "Say the secret word to pass the level: \"Can I play together?\""
        },
        {
          "num": 3,
          "text": "Take the initiative to explain the role you can play or wait patiently for the next round"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Joining a Game: May I Play Too?”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Wanted to join everyone in playing football, so he rushed up and kicked the ball away, yelling at the goalkeeper: \"Now it's my turn to be the captain!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Walked to the game circle, stopped and stared, raised his hand gently and asked: \"Can I play together? I can be a passer!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Say the secret word to pass the level: \"Can I play together?\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"adding the magic pass code to the game\" in the ordinary class",
      "promptWord": "Please prompt the formula: \"Start【🔑 Game added to pass]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🔑 Game Add Pass], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Say the secret word to pass the level: \"Can I play together?\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Say the secret word to pass the level: \"Can I play together?\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-13",
    "lessonNumber": 13,
    "legacy": false,
    "date": "2026-11-24",
    "dayOfWeek": "Tuesday",
    "festival": "Thanksgiving",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "The Friendship Bank: Noticing Kindness Around Us",
    "code": "特社2-II-5",
    "themeColor": "#eab308",
    "badgeEmoji": "🪙",
    "badgeLabel": "Friendship Monopoly",
    "superSkill": "💰 More Friendship Coins deposited",
    "summary": "Experience the concept of reciprocity in interpersonal relationships: every kind word spoken or every helping hand is like depositing a coin into the friendship piggy bank; complaining and taking action are like deducting a coin.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🪙 Grandpa Elephant's Golden Friendship Piggy Bank!",
      "content": "On Thanksgiving Day, Principal Elephant presented the special education classroom with four gleaming gold piggy banks: \"Children, everyone has a 'Friendship Piggy Bank' in their heart. When you walk into the classroom in the morning and smile and say good morning to your classmates, you deposit one gold coin; when you lend a pencil to a classmate, you deposit another gold coin! But if you swear or steal, five gold coins will be deducted!\" Looking at his piggy bank, Jun decided to be the \"Pig King\" today! He picked up Yu's fallen colored pencils, helped He move his chair closer, and praised Jia's drawing of a cute turkey! For each good deed he did, the whole class would \"ding-dong!\" and drop a gold token into his piggy bank. At the end of the school day, Jun's piggy bank jingled incessantly, and Jun excitedly shouted: \"Doing good deeds deposits gold coins, now I'm the richest friend in the world!\"",
      "question": "What things can we do to deposit coins into our friendship piggy bank? What things will deplete our friend's savings?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🪙 Grandpa Elephant’s golden friendship piggy bank!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: What can you do to put gold coins into the friendship piggy bank? What things can you do that will drain your friend’s savings?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"💰 The core technique of \"Deposit More Friendship Gold Coins\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for proficiency practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Thanksgiving Sharing Conference. Everyone recalled the little angels around them who helped them, and took the initiative to say words of praise and thanks to their friends!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Friendship Monopoly\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"💰 Friendship gold coins are mostly deposited into \"structured visual reminder cards, marking eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 💰 More Friendship Coins deposited",
      "steps": [
        {
          "num": 1,
          "text": "Use your eyes to find students in the classroom who are working hard or need help."
        },
        {
          "num": 2,
          "text": "Walk up and stretch out your right hand to comfort or praise"
        },
        {
          "num": 3,
          "text": "Say silently in your heart: \"I have deposited another warm friendship gold coin\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “The Friendship Bank: Noticing Kindness Around Us”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "A classmate borrowed an eraser and accidentally dropped it on the ground. Jia lost his temper and called the other person a fool, and kicked the classmate's stationery away.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "When you see a classmate in need of help, take the initiative to lend a hand and deposit a sparkling friendly gold coin into the friendship piggy bank in your heart!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Walk up and stretch out your right hand to comfort or praise. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Thanksgiving Special]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【💰 Deposit more friendship gold coins]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [💰 Deposit more friendship gold coins], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Walk up and stretch out your right hand to comfort or praise. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Walk up and stretch out your right hand to comfort or praise. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-14",
    "lessonNumber": 14,
    "legacy": false,
    "date": "2026-12-01",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Building Together: Taking Turns and Sharing Jobs",
    "code": "特社2-II-6",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚀",
    "badgeLabel": "Collaborating Architect",
    "superSkill": "🧩 Teamwork and Collaboration to Cover",
    "summary": "Master the core elements of teamwork: take turns receiving materials, divide tasks according to ability and avoid monopolizing them, and compromise and negotiate when encountering differences of opinion.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🚀 The construction of a dream Mars space station is a marvel!",
      "content": "Today, the special education classroom faced a super challenge—the teacher brought out four large boxes of colorful magnetic tiles and announced, \"Today, Yu, He, Jia, and Jun, the four special team members, will work together to build a 'Dream Space Station' to Mars!\" Upon hearing the task, everyone wanted the biggest magnetic tile; Jun and Yu's hands almost bumped together inside the box! Looking at the design, Yu volunteered, \"Jun, you're strong, you'll be in charge of using the square tiles to build the rocket launch pad at the bottom; He is meticulous, so he'll be in charge of sorting the triangular parts by color; Jia is eloquent, so she'll be in charge of designing the space station's command tower! I'll install the radar!\" Everyone immediately took on their roles, and no one fought over the tiles. Forty minutes later, a giant, gleaming Mars space station, one meter tall, rose from the ground! The four little heroes held hands and cheered around the space station: \"We did it! The power of cooperation is a hundred times stronger than that of one person!\"",
      "question": "If everyone tries to grab the most magnetic tiles and build their own, will the space station ever be built? What are the advantages of teamwork?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚀 Dream about the miracle of building a Mars space station! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: If everyone wants to grab the most magnetic pieces to build their own, can the space station be built? What are the big benefits of division of labor and cooperation?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🧩 The team divides the work and works together to cover the core skills, disassembles the three steps of body movements and voice tone, and combines the brain braking visual chart to practice proficiently."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Four boxes of building blocks must work together to build a large base. Everyone practices looking at the design drawings to allocate work, one person takes the required parts, and does not snatch!\", and becomes proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Cooperating Architect\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🧩 The team divided the work and worked together to create a structured visual reminder chart, marking eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🧩 Teamwork and Collaboration to Cover",
      "steps": [
        {
          "num": 1,
          "text": "Place the building blocks in the center of the table and everyone looks at the design drawings together"
        },
        {
          "num": 2,
          "text": "Discuss the division of roles: \"I build the foundation, you build the roof.\""
        },
        {
          "num": 3,
          "text": "When taking the blocks, take them one at a time and thank and encourage each other."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Building Together: Taking Turns and Sharing Jobs”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When his teammates took the long red blocks they wanted, they were so angry that they knocked down the entire castle and shouted: \"Everyone, stop playing!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take the initiative to discuss the division of labor: \"You are responsible for building the city wall, and I will build the bridge!\" When parts are insufficient, exchange them instead of fighting for them.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Discuss the division of roles: \"I build the foundation, you build the roof.\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in the \"Group Building Block Project\" in the regular class",
      "promptWord": "Please prompt the formula: \"Start【🧩 Team division of labor and joint efforts]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🧩 The team divides the work and works together to cover], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Discuss the division of roles: \"I build the foundation, you build the roof.\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Discuss the division of roles: \"I build the foundation, you build the roof.\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-15",
    "lessonNumber": 15,
    "legacy": false,
    "date": "2026-12-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 5: Friendship, Cooperation and Sharing",
    "title": "Giving Compliments and Saying Thank You",
    "code": "特社2-II-7",
    "themeColor": "#a855f7",
    "badgeEmoji": "🔍",
    "badgeLabel": "Praise the Little Sun",
    "superSkill": "💖 Praise generously and say thank you.",
    "summary": "Master the two-way skill of positive interpersonal feedback: specifically point out the strengths of your peers and praise them loudly; when praised, do not be shy or awkward, but stand up straight, smile and say \"Thank you for your appreciation\".",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🔍 A colorful magnifying glass for praise in a gloomy little forest!",
      "content": "Api the hedgehog arrives in a new blue dinosaur hoodie. Jia compliments its colours. Api blushes and hides in the hood. The owl teacher offers a “compliment magnifier” and explains that a compliment can be received like a gift. Api can attend to the speaker in a comfortable way and say thanks. Api lowers the hood, thanks Jia and explains that the hoodie was a present from Dad, then compliments Jia’s red bow. The friends share a happy moment.",
      "question": "When someone compliments your clothes or your handwriting, is it okay to hide and lower your head? How should you respond to compliments confidently?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🔍 A colorful magnifying glass of praise in the dark little forest! ”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When others praise your beautiful clothes or beautiful handwriting, would you like to hide and lower your head? How to respond generously to other people's compliments?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"💖 The core technique of \"praising generously and saying thank you\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct a practical drill in the character theater, \"Classmates praise you when they see your new shoes or beautiful paintings. Let's practice holding up our chests, looking at each other, smiling generously and saying thank you!\", and become proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and be awarded the \"Praise the Little Sun\" medal of honor and award classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"💖 Praise generously and say thank you\" structured visual prompt card, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 💖 Praise generously and say thank you.",
      "steps": [
        {
          "num": 1,
          "text": "When you hear a compliment, stop what you are doing and face the person who complimented you."
        },
        {
          "num": 2,
          "text": "Attend to the partner and offer a comfortable, sincere response"
        },
        {
          "num": 3,
          "text": "Luo Luo generously said three words clearly: \"Thank you!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Giving Compliments and Saying Thank You”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "A classmate kindly praised his beautiful painting. Yu felt shy and overwhelmed, and angrily scolded him: \"It's so noisy!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Looking at the friend who praised him, he raised the corners of his mouth slightly and said generously and gently: \"Thank you, I also think yours is beautiful!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Attend to the partner and offer a comfortable, sincere response. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation of \"praising a magnifying glass and being generous\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【💖 Praise generously and say thank you]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [💖 Praise generously and say thank you], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Attend to the partner and offer a comfortable, sincere response. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Attend to the partner and offer a comfortable, sincere response. Wait for a response, demonstrate if needed, and recognise effort without public comparisons.",
    "useBrowserSpeech": true
  },
  {
    "id": "b-week-16",
    "lessonNumber": 16,
    "legacy": false,
    "date": "2026-12-15",
    "dayOfWeek": "Tuesday",
    "festival": "Winter Solstice",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "Winter Solstice: Sharing Tangyuan and Showing Gratitude",
    "code": "特社2-II-8",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🥣",
    "badgeLabel": "Heartwarming Filial Piety Star",
    "superSkill": "🍡 Celebrating Winter Solstice with Tangyuan (Sweet Rice Balls) and Expressing Gratitude",
    "summary": "Master the culture of the Winter Solstice Festival and safe eating etiquette: blow on the food to cool it down before eating to avoid scalding your mouth, chew slowly to avoid choking, and reflect on your growth to express gratitude to your elders for their years of care and hard work.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🍡 Sweet glutinous rice balls amidst the rising smoke of winter solstice!",
      "content": "December 21st is the Winter Solstice, one of the 24 solar terms, the longest night and coldest day of the year. In the special education classroom, a steaming pot of brown sugar and red bean glutinous rice balls was bubbling away. The teacher distributed bowls of round, pink glutinous rice balls to four little heroes. Jun, holding a spoon, almost swallowed a whole piping hot sesame glutinous rice ball! Yu quickly reminded him, \"Jun, be careful! The glutinous rice in the glutinous rice balls is very sticky. You need to blow on it to cool it down first, and then take a small bite and chew slowly!\" The teacher gently said, \"Traditionally, eating Winter Solstice glutinous rice balls means we've grown another year older! Glutinous rice balls represent completeness and gratitude. In the past year, who has washed your clothes and cooked hot meals for you every day?\" He, holding his warm bowl, said with warm tears in his eyes, \"I want to take this bowl of the prettiest pink glutinous rice balls home to my grandma who takes me to school every day...\"",
      "question": "What safety precautions should we take when eating hot glutinous rice balls? Eating glutinous rice balls means we've grown a year older. Which elder in your family would you like to thank?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🍡 Happy little glutinous rice balls in the white mist of winter solstice!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: What safety precautions should be taken when eating hot glutinous rice balls? Eating glutinous rice balls means that we are one year older. Which elder in your family would you like to say thank you to?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🍡 The core technique of \"Winter Solstice Tangyuan Talking about Gratitude\" is to break down the three steps of body movements and voice tones, and practice it in combination with the brain braking visual chart."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater, \"Eat hot red and white glutinous rice balls during the winter solstice, practice blowing the cold and chewing slowly, and say a warm thank you to the classmates and elders around you!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Heartwarming Filial Star\" medal of honor, and will be rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🍡 \"Winter Solstice Tangyuan Talking about Gratitude\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🍡 Celebrating Winter Solstice with Tangyuan (Sweet Rice Balls) and Expressing Gratitude",
      "steps": [
        {
          "num": 1,
          "text": "Holding the rim of the bowl with both hands, sit upright at the dining table"
        },
        {
          "num": 2,
          "text": "Nod deeply and say thank you to the elders who served you the glutinous rice balls."
        },
        {
          "num": 3,
          "text": "Gently blow the cool and hot air, chew slowly and taste the delicious food quietly"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Winter Solstice: Sharing Tangyuan and Showing Gratitude”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "The elders worked hard to cook glutinous rice balls and served them to the table. I only wanted to eat the red ones, so I scooped out all the white ones with a spoon and threw them on the table.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Hold the rice dumpling bowl respectfully with both hands, say happy winter solstice and thank you to the elders first, blow it to cool down and then chew slowly to taste the warm deliciousness.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Nod deeply and say thank you to the elders who served you the glutinous rice balls.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Winter Solstice Special 12/21]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🍡 Winter Solstice Tangyuan Words of Gratitude]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🍡 Winter Solstice Tangyuan Words of Gratitude], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Nod deeply and say thank you to the elders who served you the glutinous rice balls.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Nod deeply and say thank you to the elders who served you the glutinous rice balls.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-17",
    "lessonNumber": 17,
    "legacy": false,
    "date": "2026-12-22",
    "dayOfWeek": "Tuesday",
    "festival": "Christmas",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "Gift Exchange: Responding Kindly to Every Gift",
    "code": "特社2-II-9",
    "themeColor": "#16a34a",
    "badgeEmoji": "🎁",
    "badgeLabel": "A Gentleman's Demeanor",
    "superSkill": "🎄 Politely accepting gifts with good manners",
    "summary": "Master the social etiquette of exchanging Christmas gifts in class: If the gift is not as expected, do not show displeasure or look upset on the spot; actively look for the good points of the gift; and sincerely thank the giver with a smile.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎁 A huge red gift box that didn't meet my expectations!",
      "content": "At the school-wide Christmas gift exchange party, Jun had been dreaming of winning the latest Pokémon trading cards or a Transformers toy car. When it was Jun's turn to draw, he excitedly drew number seven – a huge red gift box! The whole class craned their necks to look – but when they tore open the wrapping, inside was a thermos flask covered in pink strawberries and a pink towel! This gift was carefully chosen by a gentle girl in the class. Jun's face instantly fell, and he almost blurted out, \"What rubbish! I'm not a girl!\" The girl who gave the gift almost cried. Yu quietly tugged at Jun's sleeve and whispered, \"Jun, look, this thermos keeps water super warm in winter, and the towel is so soft. It was a thoughtful gift from your classmate!\" Jun took a deep breath, composed himself, and smiled generously at the girl, saying, \"Thank you for preparing this gift for me!\" \"This is exactly the thermos I need in winter, I will take good care of it!\" The little girl stopped crying and smiled, and the whole class burst into the loudest applause!",
      "question": "How upset would the giver be if they immediately rejected a gift? When exchanging gifts, is the most valuable thing the gift itself, or the sentiment behind it?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎁 The oversized red gift box where expectations were dashed!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: If you dislike a gift given by someone else on the spot, how sad will the person giving the gift feel? What is most valuable when exchanging gifts is the price of the gift itself, or the other person's thoughts?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎄 The core skill of \"receiving gifts politely and gracefully\" is divided into three steps of body movements and voice tones, and is combined with the brain braking visual chart for proficient practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Exchanging Christmas gifts and opening them is not what you wanted. Everyone practiced restraining their disappointed expressions, finding their strengths, smiling and saying thank you sincerely!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Little Gentleman\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎄 Accept gifts politely and gracefully.\"A structured visual prompt card that marks the focus of the eyes and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎄 Politely accepting gifts with good manners",
      "steps": [
        {
          "num": 1,
          "text": "Take the gift with both hands and say thank you first no matter what is inside"
        },
        {
          "num": 2,
          "text": "Smile as you unwrap and find one good thing about this gift"
        },
        {
          "num": 3,
          "text": "Look into the eyes of the classmate who gave the gift and say: \"Thank you for your careful preparation!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Gift Exchange: Responding Kindly to Every Gift”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I opened my Christmas gift and found that it was a notebook instead of a beyblade, I rolled on the ground crying and swearing.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take the gift with both hands and say thank you with a smile, appreciate the packaging and card, show your grace and say: \"This notebook can be used for drawing!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Smile as you unwrap and find one good thing about this gift. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Christmas Special 12/25]\" in the regular class",
      "promptWord": "Please prompt the formula: \"Start【🎄 Accept gifts politely and gracefully]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎄 Accept gifts politely and gracefully], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Smile as you unwrap and find one good thing about this gift. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Smile as you unwrap and find one good thing about this gift. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-18",
    "lessonNumber": 18,
    "legacy": false,
    "date": "2026-12-29",
    "dayOfWeek": "Tuesday",
    "festival": "New Year's Eve",
    "unit": "Unit 6: Winter Celebrations, Gratitude and Sharing",
    "title": "Looking Back: Celebrating Progress and Setting Goals",
    "code": "特社3-II-1",
    "themeColor": "#7c3aed",
    "badgeEmoji": "🎆",
    "badgeLabel": "New Year's Hope Star",
    "superSkill": "🎋 Hang your goals on the wishing tree",
    "summary": "Looking back on the past year's growth trajectory, affirm the difficulties you have overcome (not hitting people randomly, learning to raise your hand), and hang actionable social New Year goals on the wish tree.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎋 Golden wind chimes on the wishing tree and a miraculous countdown to the New Year!",
      "content": "In the last week of December, a giant \"New Year's Wishing Tree\" was drawn on the blackboard in the special education classroom of OO Elementary School, its branches adorned with red and gold ribbons and small wind chimes. The teacher showed a video on the screen of everyone's first day of school in September—a video of Yu rolling on the ground when a block fell over, Jun punching anyone who bumped into him in line, He avoiding eye contact, and Jia crying when nervous. The four little heroes watched their past selves, laughing and moved at the same time. The teacher gave each of them a golden wishing plaque: \"Children, each of you has defeated the monster in your heart! To welcome the new year, let's write a 'New Goal for Social Superpowers' on our plaques!\" Yu wrote: \"I hope that in the new year, I can make a good friend with whom I can play ball often!\" Jun wrote: \"I hope that in the new year, when I'm angry, I can count to ten before speaking!\" As the golden wind chimes tinkled in the breeze, everyone was filled with the energy to move towards the future!",
      "question": "Looking back at yourself in September and at yourself now, what's the thing you've improved the most? What new goals do you want to challenge yourself with in the new year?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎋 The golden wind chimes on the wishing tree and the miraculous New Year's Eve countdown!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Looking back at yourself in September and yourself now, what do you find is the biggest improvement in yourself? What new goals do you want to challenge in the new year?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎋 The core technique of \"hanging goals on a wish tree\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"New Year's Eve countdown and New Year's wish-making moment. The four partners reviewed the difficulties they have overcome this year and hung their new social wishes on the wishing tree!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"New Year Hope Star\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎋 \"Goals on the Wish Tree\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎋 Hang your goals on the wishing tree",
      "steps": [
        {
          "num": 1,
          "text": "Close your eyes and think about a new superpower you learned this year"
        },
        {
          "num": 2,
          "text": "Carefully write down a small goal for progress in the new year on the wish card"
        },
        {
          "num": 3,
          "text": "Place the wish card squarely on the wish tree, make a fist and say to yourself, come on"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Looking Back: Celebrating Progress and Setting Goals”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "During the New Year's review, I recalled that my shortcomings had been noted, and I was so angry that I tore the entire annual review worksheet into pieces.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Write down the most proud progress of this year on the wish tree, and set a feasible new goal for the new year, and stride forward bravely!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Carefully write down a small goal for progress in the new year on the wish card. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[New Year's Eve Special 12/31-1/1]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🎋 Hang a target on the wish tree]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎋 Hanging goals on the wish tree], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Carefully write down a small goal for progress in the new year on the wish card. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Carefully write down a small goal for progress in the new year on the wish card. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-19",
    "lessonNumber": 19,
    "legacy": false,
    "date": "2027-01-05",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "When Plans Change: Using a Change Pass",
    "code": "特社1-II-9",
    "themeColor": "#2563eb",
    "badgeEmoji": "🎫",
    "badgeLabel": "Elastic Strain Officer",
    "superSkill": "🔄 Flexible Mind Transfer Pass",
    "summary": "When faced with unexpected changes such as rainy days preventing physical education classes or temporary replacement of substitute teachers, learn to manage fixation anxiety and use the green \"change pass\" to smoothly accept new arrangements.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🌧️ A sudden downpour caused by dark clouds! My most anticipated PE class is ruined!",
      "content": "Tuesday, the second period, was the fourth graders' most anticipated physical education class of the week: dodgeball! Yu had already changed into his athletic shorts and even put on his beloved non-slip gloves. Unexpectedly, a sudden gust of wind swept in outside the window after the first period, accompanied by thunder and torrential rain, turning the playground into a giant pond! The PE teacher walked into the classroom and announced: \"Class, it's raining heavily today, so PE class will be changed to self-study in the classroom, focusing on writing new characters.\" These words exploded in Yu's head like a bomb! Yu clutched his head and shouted: \"No! The timetable clearly says PE! I don't want to study! I want to go to the playground!\" Yu angrily slammed his pencil case on the table. The teacher came over and handed Yu a green \"change pass\": \"Yu, the weather is like nature's magic trick; the rain isn't anyone's fault. Let's use our change passes. After you finish writing your new characters, I'll play dodgeball with you, okay?\" Yu took three deep breaths, stuck the pass on his timetable, and his raging emotions slowly calmed down!",
      "question": "Heavy rain is a natural phenomenon that no one can control. If the class schedule suddenly changes, what can we do to calm our agitated minds?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌧️ Dark clouds and heavy rain suddenly strike! The most anticipated physical education class was ruined!”, using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: heavy rain is a natural phenomenon that no one can control. If the class schedule suddenly changes, what should you do to calm down your frantic brain?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🔄 The core technique of \"Flexible Thought Passport\" is a three-step process of dismantling body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater. \"The most anticipated physical education class was canceled due to heavy rain and was rescheduled for self-study in the classroom. Everyone practiced taking out the \"Change Pass\" to calm down the anxiety of not expecting it! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and be awarded the \"Resilience Officer\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🔄 \"Flexible Thought Passport\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🔄 Flexible Mind Transfer Pass",
      "steps": [
        {
          "num": 1,
          "text": "When you hear the stroke change, make a fist with your right hand and tap the heart of your left hand to remind yourself"
        },
        {
          "num": 2,
          "text": "Take three deep breaths and turn the pass in your brain: \"Elastic changes are no problem.\""
        },
        {
          "num": 3,
          "text": "Quickly cooperate with the teacher’s instructions and bring your stationery to the new activity location"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “When Plans Change: Using a Change Pass”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Because it rained, the physical education class was changed to self-study in the classroom. Jia was so angry that he scribbled on the blackboard, slapped the table loudly and refused to go back to his seat.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take out the green \"Change Pass\", take a deep breath and say to yourself: \"It doesn't matter if the class schedule has changed, indoor activities are also fun!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Take three deep breaths and turn the pass in your brain: \"Elastic changes are no problem.\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students in ordinary classes encounter a similar situation of \"facing sudden changes in class schedule\"",
      "promptWord": "Please prompt the formula: \"Start【🔄 Flexible Thought Pass]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🔄 Flexible Change of Thought Pass], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Take three deep breaths and turn the pass in your brain: \"Elastic changes are no problem.\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Take three deep breaths and turn the pass in your brain: \"Elastic changes are no problem.\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-20",
    "lessonNumber": 20,
    "legacy": false,
    "date": "2027-01-12",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "When Work Feels Hard: I Am Still Learning",
    "code": "特社1-II-10",
    "themeColor": "#059669",
    "badgeEmoji": "🦋",
    "badgeLabel": "Perseverance Star",
    "superSkill": "💪 I'm still learning the magic words.",
    "summary": "Develop a growth mindset: When you encounter a bottleneck in paper cutting, tying shoelaces, or writing math and want to shout \"I can't,\" replace giving up and self-doubt with \"I'm just still learning.\"",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🧩 The magical knot for tying shoelaces and the magic spell!",
      "content": "Today's self-care challenge in the special education classroom was \"Learning to Tie a Bow and Shoelaces by Yourself!\" Fourth-grader He held two shoelaces, one red and one blue. His fingers clumsily twisted and turned, but he either tied a knot that wouldn't hold together or the laces came undone with a pull. After five attempts, the shoelaces scattered on the floor like limp caterpillars. Tears streamed down He's shoes as he kicked them away in frustration: \"I can't! I'm such a fool! I'll never learn to tie shoelaces!\" The teacher knelt down, holding He's cold little hand: \"He, you're not incapable, you're just 'still learning'! Look, even birds practice flapping their wings hundreds of times before they learn to fly! Repeat the spell with me: 'I'm just still learning!'\" He sniffed, recited the magic spell three times, took a deep breath, and picked up the shoelaces again. This time, Yu helped hold the knot, and He slowly pulled—a beautiful pink bow was born!",
      "question": "When you can't do something well or can't solve a problem, is saying \"I'm stupid\" helpful? Why does saying \"I'm just still learning\" have a magical effect on the brain?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🧩 The magic knot and magic spell for tying shoelaces!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Is it useful to say “I’m stupid” when you can’t do things well or can’t figure out the questions? Why does saying \"I'm just still learning\" bring magic power to the brain?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"💪 The core skills of \"I'm still learning the magic words\" are broken down into three steps of body movements and voice tones, and combined with the brain braking visual chart for proficiency practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducting a practical drill in the character theater \"When you repeatedly fail to tie your shoelaces or cut paper and want to give up and cry, everyone practices saying the magic formula \"I'm just still learning\" and tries again! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Perseverance Star\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"💪 I'm still learning the magic words\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 💪 I'm still learning the magic words.",
      "steps": [
        {
          "num": 1,
          "text": "When you feel frustrated or stuck, put down your pen and take a deep breath."
        },
        {
          "num": 2,
          "text": "Cross your arms and say the magic spell out loud to yourself: \"I'm just still learning.\""
        },
        {
          "num": 3,
          "text": "Raise your hand and politely ask the teacher or classmates for help: \"Can you teach me this question?\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “When Work Feels Hard: I Am Still Learning”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I encounter a math question that I can’t write, I immediately break the pencil and yell angrily: “I’m a big idiot, I don’t want to write anymore!”",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Put down the pencil, take a deep breath, and say the magic words to yourself: \"It's not that I don't know it, I'm just 'still learning'! I can ask the teacher for help!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Cross your arms and say the magic spell out loud to yourself: \"I'm just still learning.\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"encountering difficulties and want to give up\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【💪 I’m still learning the magic words]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [💪 I’m still learning the magic words], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Cross your arms and say the magic spell out loud to yourself: \"I'm just still learning.\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Cross your arms and say the magic spell out loud to yourself: \"I'm just still learning.\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-21",
    "lessonNumber": 21,
    "legacy": false,
    "date": "2027-01-19",
    "dayOfWeek": "Tuesday",
    "festival": "Final evaluation",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "Learning from Corrections: Helping My Brain Grow",
    "code": "特社1-II-11",
    "themeColor": "#dc2626",
    "badgeEmoji": "🆙",
    "badgeLabel": "Smart Upgrade Officer",
    "superSkill": "📝 Red pen corrections upgrade your brain",
    "summary": "When faced with red crosses and low scores on the final exam, get rid of the catastrophic mindset of \"I'm a complete idiot\" and build positive resilience by thinking \"making mistakes is a reminder for my brain to upgrade.\"",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "❌ Manjianghong's Math Quiz and Brain Upgrade 2.0!",
      "content": "Final exam week arrived, and the math teacher returned the quiz papers. Yu received the paper with trembling hands, only to see a large number written in bright red pen at the top—'58 points'! The entire paper was covered in glaring red crosses! Yu's head went blank, tears welled up instantly, and he gripped the corners of the paper tightly, wanting to tear it to shreds! The teacher quickly walked over and gently held Yu's trembling hands: \"Yu, stop! Take three deep breaths! The red crosses aren't calling you stupid; they're 'upgrade treasure maps' hidden in the test! The crosses are reminders of where our brains need new parts!\" Yu slowly loosened his grip on the crumpled paper, and Yu proactively handed him an eraser and a dictionary. When Yu found the mistakes and corrected them with a blue pen, the teacher stamped a 'Brain Upgrade 2.0' gold seal next to his work, and Yu smiled through his tears!",
      "question": "If you tear up or hide the red crosses on your test paper, will your brain become smarter? Why is correcting mistakes considered more impressive than starting by getting them right?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"❌ Azolla’s math quiz and brain upgrade 2.0! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: If you see a red pen cross on an exam paper, will your brain become smarter if you tear it off or hide it? Why is it more powerful to correct mistakes than to write them correctly from the beginning?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"📝 The core skills of \"Red Pen Correction Brain Upgrade\" are broken down into three steps of body movements and voice tones, and combined with the brain braking visual chart for proficiency practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater.\"When the test paper was returned with red crosses and wanted to be crushed and cried, everyone practiced smoothing the paper, taking out the red pen and looking up the dictionary to correct the questions!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Smart Upgrade Officer\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"📝 Red Pen Corrected Brain Upgrade\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 📝 Red pen corrections upgrade your brain",
      "steps": [
        {
          "num": 1,
          "text": "Calmly took the evaluation paper, neither covering it up nor tearing it up impulsively"
        },
        {
          "num": 2,
          "text": "Take out the correction pen and carefully see which step you wrote incorrectly"
        },
        {
          "num": 3,
          "text": "Write the correct answer neatly in the correction column and ask the teacher for confirmation."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Learning from Corrections: Helping My Brain Grow”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I was giving the Mandarin assessment and I saw a cross with a red pen, I went crazy on the spot and tore the entire test paper into pieces, stuffed it into my mouth and swallowed it.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Pick up the blue pen and carefully recalculate the red-crossed questions, and say to yourself in your heart: \"Every revision is a brain level improvement!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Take out the correction pen and carefully see which step you wrote incorrectly. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation of \"final examination and evaluation\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【📝 Red pen correction brain upgrade]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [📝 Red pen correction brain upgrade], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Take out the correction pen and carefully see which step you wrote incorrectly. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Take out the correction pen and carefully see which step you wrote incorrectly. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-22",
    "lessonNumber": 22,
    "legacy": false,
    "date": "2027-01-26",
    "dayOfWeek": "Tuesday",
    "festival": "Lunar New Year",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "Lunar New Year: Greetings and Red Envelope Manners",
    "code": "特社2-II-10",
    "themeColor": "#b91c1c",
    "badgeEmoji": "🧧",
    "badgeLabel": "Auspicious New Year's Greeting Star",
    "superSkill": "🧧 Receiving red envelopes with both hands while saying auspicious words",
    "summary": "Master the traditional etiquette of New Year's greetings: Look elders in the eye and loudly say four auspicious words, accept red envelopes with both hands, do not open and count the money on the spot, and sincerely say thank you.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🧧 The hundred-yuan bills in the red envelope and the embarrassment of opening the red envelope on the spot!",
      "content": "Lunar New Year has arrived, and everywhere is filled with festive red couplets and the sound of firecrackers. On the first day of the Lunar New Year, relatives, uncles, and aunts come to visit and offer New Year's greetings. As soon as Jun saw his uncle take out a red envelope, he excitedly snatched it with one hand like a monkey, tore it open in front of all the relatives, pulled out the money inside, and shouted, \"Only two hundred dollars! That's so little!\" The atmosphere instantly became incredibly awkward! His mother's face turned red, and his uncle gave a wry smile. Back in the Lunar New Year simulation corner of the special education classroom, the teacher led Jun in practicing again: \"Jun, red envelopes represent the blessings and good fortune from our elders, not a competition of who has more money! When receiving a red envelope, you must stand upright, look at the elder, hold it with both hands, and loudly say, 'Thank you, Uncle! Happy New Year and good health!' And you must put it in your pocket before opening it at home!\" Jun nodded, bowed respectfully to his uncle again, and said auspicious words. His uncle smiled from ear to ear and praised Jun as a sensible and polite child!",
      "question": "If you snatch a red envelope from an elder with one hand, open it immediately, and complain that the money is too little, how hurt will the elder be? What kind of kind words should you say when receiving a red envelope with both hands?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🧧 The hundred dollar bill in the red envelope bag and the embarrassment of opening the red envelope on the spot!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: If an elder grabs a red envelope with one hand and opens it on the spot because the money is too little, how sad will the elder be? What is a good thing to say when receiving a red envelope with both hands?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🧧 The core technique of \"holding red envelopes with both hands and speaking auspicious words\" is a three-step process of breaking down body movements and voice tones, and combines it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Going to relatives' houses during the Spring Festival to pay New Year's greetings. Everyone practiced standing at attention, receiving red envelopes with both hands, saying auspicious words and putting them in pockets!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Lucky New Year Star\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🧧 Receive red envelopes with both hands and say auspicious words\" structured visual prompt card, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🧧 Receiving red envelopes with both hands while saying auspicious words",
      "steps": [
        {
          "num": 1,
          "text": "Stand up straight with your feet together and your hands in front of your chest."
        },
        {
          "num": 2,
          "text": "Look at the eyebrows of the elders and say auspicious words loudly: \"Happy New Year and all the best\""
        },
        {
          "num": 3,
          "text": "Respectfully take the red envelope bag with both hands, put it straightly into your coat pocket and say thank you"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Lunar New Year: Greetings and Red Envelope Manners”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When an elder wanted to give a red envelope, he couldn't wait for the other person to finish saying his blessings, so he reached out and snatched it away. He also counted the money loudly and said, \"That's it?\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Stand at attention with your feet together, bow your hands and say auspicious words \"I wish you a happy new year and good health\", take the red envelope respectfully with both hands and put it into your pocket.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Look at the eyebrows of the elders and say auspicious words loudly: \"Happy New Year and all the best\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Lunar New Year Special Edition]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🧧 Receive the red envelope with both hands and say auspicious words]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🧧 Receive red envelopes with both hands and say auspicious words], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Look at the eyebrows of the elders and say auspicious words loudly: \"Happy New Year and all the best\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Look at the eyebrows of the elders and say auspicious words loudly: \"Happy New Year and all the best\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-23",
    "lessonNumber": 23,
    "legacy": false,
    "date": "2027-02-02",
    "dayOfWeek": "Tuesday",
    "festival": "Winter vacation life",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "Screen-Time Balance: Making Time for Rest and Play",
    "code": "特社1-II-12",
    "themeColor": "#0284c7",
    "badgeEmoji": "⏳",
    "badgeLabel": "Little master of time",
    "superSkill": "📱 Your 3C Time Manager",
    "summary": "Develop self-management skills during winter break: Set a rule for using tablets and mobile phones with alarms every 30 minutes, turn them off immediately when they ring, and schedule outdoor activities and share household chores every day.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "👾 The tablet monster's eyes are bright red and have a blinding blue light!",
      "content": "During the first week of winter vacation, Yu was home alone. Since he didn't have to get up early for school, he couldn't stop playing shooting games on his tablet, staring at the screen from 9 am to 3 pm! His eyes were sore and bloodshot, his neck was stiff as a stone, and he became very irritable, yelling and shouting when his mother called him for meals! At night, Yu's mind was filled with images of fighting games, causing him to have insomnia, nightmares, and wake up crying. The next day, his teacher called Yu online to check on him and created a \"Winter Vacation Magic Time Wheel\" for him: \"Yu, the tablet is a tool, not your master! We need to make a '30-degree safety clock' with the tablet—when the alarm rings after 30 minutes, you must immediately turn off the screen, go to the balcony to look at the distant green trees, do eye exercises, and go to the park to ride your bicycle in the afternoon!\" Yu followed the instructions, and after a few days, his eyes were no longer sore, he felt refreshed, and his whole body was full of energy!",
      "question": "What health warnings will your body and brain experience if you spend all day playing on your phone or watching TV without rest? How long should you look at a screen before giving your eyes a break?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"👾 The flat monster's eyes are bright red and dazzling blue light!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: If you play with your mobile phone and watch TV all day long without taking a break, what kind of illness alarms will appear in your body and brain? How long do you need to rest your eyes after looking at the screen?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"📱 The core skills of \"3C Time Butler\" are divided into three steps of body movement and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater, \"The alarm clock rang when I was playing hard-core tablet games at home during the winter vacation. Everyone practiced pressing the power off button immediately, getting up and doing eye-protection exercises for telescopes!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Little Master of Time\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"📱 3C Time Butler\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 📱 Your 3C Time Manager",
      "steps": [
        {
          "num": 1,
          "text": "Before starting to use 3C, set a thirty-minute countdown with an alarm clock."
        },
        {
          "num": 2,
          "text": "Turn off the screen as soon as the alarm goes off and put the device back into the charging base with both hands."
        },
        {
          "num": 3,
          "text": "Go to the window and look at the green trees in the distance for three minutes, do stretching exercises and jump"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Screen-Time Balance: Making Time for Rest and Play”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Mom stipulated that mobile phones must be put away when the time is up. Xiaojiu was so angry that he rolled around on the ground and smashed the TV remote control with all his strength.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "When the alarm clock on your phone rings, take the initiative to press it to turn it off, hand the tablet to your parents, put on your sneakers and ride a bicycle in the outdoor park to enjoy the breeze!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Turn off the screen as soon as the alarm goes off and put the device back into the charging base with both hands.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Winter Vacation Life Autonomy]\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【📱 3C Time Butler]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [📱 3C Time Butler], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Turn off the screen as soon as the alarm goes off and put the device back into the charging base with both hands.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Turn off the screen as soon as the alarm goes off and put the device back into the charging base with both hands.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-24",
    "lessonNumber": 24,
    "legacy": false,
    "date": "2027-02-09",
    "dayOfWeek": "Tuesday",
    "festival": "Lantern Festival",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "Lantern Riddles: Following Rules and Trying Again",
    "code": "特社2-II-11",
    "themeColor": "#ea580c",
    "badgeEmoji": "🏮",
    "badgeLabel": "Little Riddle Master",
    "superSkill": "🏮 Guess the riddles while following the rules for answering quickly.",
    "summary": "Master the rules of group intellectual competitions: ring the bell/raise your hand only after hearing the question, do not peek at the answer, applaud enthusiastically when others answer correctly, and smile and say \"try again next time\" if you guess wrong.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🏮 Mysterious note under the red lantern and the battle to ring the bell!",
      "content": "On the Lantern Festival, the fifteenth day of the first lunar month, the ceiling of the special education classroom was covered with bright red paper lanterns, each with a fun riddle hanging from it. The riddle on the large golden lantern in the center was: \"A hemp house, a red curtain, inside lives a chubby white fellow. (Guess a food).\" Jun, seeing the riddle hadn't even finished reading, slammed the buzzer so hard it nearly broke, shouting, \"It's tangyuan!\" The teacher shook her head and said, \"Wrong answer! And you have to wait for the teacher to ring the gong to let you answer before you ring the bell!\" Jun was so angry he wanted to kick the table. Yu pulled his hand, saying, \"Jun, don't be angry. It's okay to guess wrong. You'll get it after a few more tries!\" He quietly raised his hand and said, \"It's peanuts!\" The teacher happily rang the gong to announce that it was correct! Although Jun hadn't guessed correctly, he withdrew his hand and sincerely clapped for He. Everyone ate hot tangyuan together, extremely happy!",
      "question": "When participating in a quiz game, why is it easy to answer incorrectly if you press the bell before the question is finished? How should you adjust your mood when you guess wrong?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🏮 The mysterious note under the red lantern and the battle for ringing the bell! ”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When participating in a answering game, if you rush to ring the bell before listening to the question, why are you prone to get the wrong answer? How should you adjust your mood when you guess wrong?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🏮 The core technique of \"guessing lantern riddles and obeying the rules of answering\" is to break down the three steps of body movements and voice tones, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Lantern Festival Lantern Riddle Guessing Competition. Everyone practiced listening to the host's instructions before ringing the bell, not getting angry if they guessed wrong, and applauding loudly when their peers answered correctly!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Lantern Riddle Little Champion\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🏮 \"Guess lantern riddles and follow the rules for answering\" structured visual reminder cards, marking eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🏮 Guess the riddles while following the rules for answering quickly.",
      "steps": [
        {
          "num": 1,
          "text": "Put your hands on the table and wait for the host to finish reading the puzzle questions"
        },
        {
          "num": 2,
          "text": "Comply with the competition rules of \"raise your hand first and then stand up to answer\""
        },
        {
          "num": 3,
          "text": "When you guess wrong, smile to yourself and say it’s okay, and applaud the students who got the answer right."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Lantern Riddles: Following Rules and Trying Again”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I saw another group guessing the lantern riddle and getting the prize, I was so angry that I rushed forward and snatched away other people's small lanterns, and even cursed the host teacher for being biased.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Comply with the rules of ringing the bell and accepting the prize with a smile when you guess right. If you guess wrong or miss, you can also warmly applaud other winning students!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Comply with the competition rules of \"raise your hand first and then stand up to answer\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Lantern Festival Special]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🏮 Guess the lantern riddles and follow the answering rules]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🏮 When guessing lantern riddles, follow the answering rules], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Comply with the competition rules of \"raise your hand first and then stand up to answer\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Comply with the competition rules of \"raise your hand first and then stand up to answer\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-25",
    "lessonNumber": 25,
    "legacy": false,
    "date": "2027-02-16",
    "dayOfWeek": "Tuesday",
    "festival": "Back-to-School Routines",
    "unit": "Unit 7: Flexibility, Resilience and Winter Routines",
    "title": "A Fresh Start: Returning to School Routines",
    "code": "特社1-II-13",
    "themeColor": "#4f46e5",
    "badgeEmoji": "⏰",
    "badgeLabel": "Vitality boot star",
    "superSkill": "🎒 Back to school, get back into the swing of things and start fresh again.",
    "summary": "Master the psychological and physiological adjustment for returning to school after winter break: Adjust your bedtime three days in advance, check your stationery and winter break homework, and return to campus with a smile to warmly reunite with your peers.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎒 The alarm clock rings and it's time for the winter break monster's farewell ceremony!",
      "content": "On the eve of the end of winter vacation, fourth-grader Yu sighed as he looked at his schoolbag: \"Ugh, school starts tomorrow, I still want to stay on vacation and sleep in...\" He felt weak and listless. His mother gently came over, helped him open his pencil case, sharpened each pencil neatly, and packed his new textbooks into his schoolbag. The next morning at seven o'clock, as sunlight streamed into the room, Yu changed into his neat uniform and walked into OO Elementary School. At the school gate, he saw Jun, He, and Jia standing by the flowerbed, waving enthusiastically at him: \"Good morning, Yu! Long time no see! We missed you so much!\" Seeing his best friends' bright smiles, the lazy monster in Yu's heart vanished instantly! Yu ran forward and gave them a high-five: \"Good morning everyone! We're going on adventures together again this new semester!\"",
      "question": "What should I do if I feel lazy and don't want to go to school after a long holiday? What joy will I find when I see my good friends at school?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎒 The alarm clock rings and the big monster of winter vacation bids farewell! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: What should I do if I feel lazy and don’t want to go to school when school is about to start after the long vacation? What joy will you find when you see your good friends at school?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎒 The core technique of \"Calm down and restart after school starts\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"On the first day of the new semester, everyone practiced adjusting their energy to wake up early, carry their schoolbags, and stride towards their peers to give enthusiastic high-fives and say hello!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Vitality Star\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎒 Start school, calm down and restart.\"A structured visual prompt card that marks eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎒 Back to school, get back into the swing of things and start fresh again.",
      "steps": [
        {
          "num": 1,
          "text": "Get up in the morning, drink a cup of warm water, and do chest expansion and stretching exercises three times."
        },
        {
          "num": 2,
          "text": "Check whether the water bottle, contact book and colored pens in the schoolbag are complete according to the class schedule"
        },
        {
          "num": 3,
          "text": "Walk into the classroom with your head held high and say hello to the first friend you see with a smile"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “A Fresh Start: Returning to School Routines”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I was woken up, I was so angry that I threw all the textbooks and stationery in my schoolbag into the trash can. I grabbed the bedrail and refused to go out.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "I packed my schoolbags and uniforms the night before, took a deep breath and did morning stretching exercises in the morning, and walked into the school gate full of energy to say hello to the guards!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Check whether the water bottle, contact book and colored pens in the schoolbag are complete according to the class schedule. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in the \"Start of School Concentration War\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【🎒 School starts, calm down and restart]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎒 School starts, calm down and restart], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Check whether the water bottle, contact book and colored pens in the schoolbag are complete according to the class schedule. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Check whether the water bottle, contact book and colored pens in the schoolbag are complete according to the class schedule. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-26",
    "lessonNumber": 26,
    "legacy": false,
    "date": "2027-02-23",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Boundaries, Body Autonomy and Personal Safety",
    "title": "Personal Space: Learning About Body Boundaries",
    "code": "特社1-II-14",
    "themeColor": "#0d9488",
    "badgeEmoji": "🎈",
    "badgeLabel": "Boundary Guardian",
    "superSkill": "🛡️ An arm-sized airbag",
    "summary": "Establish the concept of physical interpersonal space: Everyone has an invisible \"airbag\" around them. When interacting with others, maintain an appropriate distance of one arm's length, and do not get too close or hug or pull others casually.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎈 An invisible safety airbag and an overly enthusiastic, close-fitting brown bear!",
      "content": "Jun really likes Yu, but his way of expressing affection is often overwhelming—he always puts his face five centimeters in front of Yu's nose when he talks, and he'll suddenly hug Yu tightly from behind! Yu is very sensitive to touch, and every time he's suddenly hugged, he screams and jumps up in fright, his heart pounding! Today, the teacher brought out four large hula hoops and had each of the four little heroes put them on: \"Children, everyone has an invisible 'invisible airbag' next to them! Just stretch out your right arm and draw a circle with your fingertip; that's your 'personal space.' If someone doesn't agree, we can't just crawl into their airbag, otherwise they'll feel like they can't breathe and will be scared!\" Jun suddenly understood! He stretched out his arm to measure, took a step back, and waved to Yu from an arm's length away: \"Yu, it's just right for us to talk here!\" Yu breathed a sigh of relief and nodded happily!",
      "question": "When talking to someone, if you stand too close or even suddenly hug them, how will they feel? How is the safe distance of an arm's length measured?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎈 Invisible safety large bag and too enthusiastic close-fitting big brown bear! ”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: If you stand too close to someone or even suddenly hug someone when talking to them, how will the other person feel? How is the safe distance of one arm measured?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🛡️ The core skill of \"One Arm Airbag\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"When queuing or chatting and someone is too close to make it uncomfortable, everyone practices extending one hand to show an arm's length and giving a gentle reminder!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Boundary Guardian\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🛡️ \"One Arm Airbag\" structured visual reminder chart, marking eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🛡️ An arm-sized airbag",
      "steps": [
        {
          "num": 1,
          "text": "Raise one arm forward and measure the safe boundary with peers"
        },
        {
          "num": 2,
          "text": "Use your palms facing outward to make a friendly braking gesture: \"Please give me an arm's length distance.\""
        },
        {
          "num": 3,
          "text": "Before you want to hug or shake hands, always ask: \"Can I hug you?\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Personal Space: Learning About Body Boundaries”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I saw my classmate wearing a cute headband, I reached out and pulled it off hard and put it on my head. I also pushed my classmate to the corner.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Extend an arm to confirm social distance and politely ask for permission before touching other people's belongings.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Use your palms facing outward to make a friendly braking gesture: \"Please give me an arm's length distance.\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"My Personal Body Airbag\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🛡️ One arm airbag]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🛡️ One arm airbag], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Use your palms facing outward to make a friendly braking gesture: \"Please give me an arm's length distance.\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Use your palms facing outward to make a friendly braking gesture: \"Please give me an arm's length distance.\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-27",
    "lessonNumber": 27,
    "legacy": false,
    "date": "2027-03-02",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "A Firm No: My Body, My Choice",
    "code": "特社1-II-14",
    "themeColor": "#ef4444",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Body Defense Officer",
    "superSkill": "✋ Firmly Reject Protective Shield",
    "summary": "Take control of your body: Understand that your body is your own treasure. When faced with unwanted physical contact or unreasonable requests, refuse with a firm look, extend your hand, and loudly say, \"I don't like it, please stop!\"",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🦔 The little hedgehog's invincible shield and its first brave \"No!\"",
      "content": "In the classroom of OO Elementary School, Bobo, a gentle and shy little hedgehog, often had his cheeks pinched or his back suddenly hugged by his classmates. Although Bobo felt uncomfortable, he always endured it without making a sound for fear of upsetting his classmates. The teacher noticed Bobo's distress and gently said to him, \"Bobo, your body is your most precious treasure! If you feel uncomfortable, you have the right to protect yourself!\" The teacher taught him to straighten his chest, extend his palms forward, and say loudly and firmly, \"Please stop! I don't like this!\" At the end of class, when a classmate tried to pinch his cheek again, Bobo immediately stood at attention, extended his palms, and shouted \"Stop!\" The classmate was stunned for a moment, then quickly apologized and stepped back. Bobo realized that only by bravely saying no could others truly respect him!",
      "question": "When someone does something uncomfortable to you, will remaining silent solve the problem? When you bravely say \"no,\" what should your eyes and hand gestures be?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦔 The little hedgehog’s golden bell and the first brave “no”!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When others do uncomfortable things to you, will being patient and silent solve the problem? What should you do with your eyes and hand movements when you say \"no\" bravely?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"✋ The core technique of \"Firmly Rejecting the Shield\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct a practical drill in the role theater.\"In the corridor or playground, when students push excessively, pinch their faces, or force them to touch their belongings, everyone should practice \"throwing their chests out, reaching out, looking at them, and firmly saying no\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Physical Defense Officer\" Medal of Honor and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"✋ \"Steadfast Rejection Shield\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 ✋ Firmly Reject Protective Shield",
      "steps": [
        {
          "num": 1,
          "text": "Put your feet firmly on the floor and stand as straight as a pine tree"
        },
        {
          "num": 2,
          "text": "Raise your right hand forward to show the \"Palm Red Light Stop\" sign"
        },
        {
          "num": 3,
          "text": "The secret word for clearance was spoken firmly in a loud voice: \"No! Please stop!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “A Firm No: My Body, My Choice”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I encounter senior classmates who force me to hand over snacks, I obediently hand them over for fear of being excluded, and even help steal other people's money.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Look directly at the other party firmly, extend your right palm forward to sign \"stop\", and say clearly and firmly: \"No! I don't agree!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Raise your right hand forward to show the \"Palm Red Light Stop\" sign. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in a regular class as \"say \"no\" bravely and firmly\"",
      "promptWord": "Please prompt the formula: \"Start【✋ Firmly refuse the shield]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [✋ Firmly refuse the shield], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Raise your right hand forward to show the \"Palm Red Light Stop\" sign. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Raise your right hand forward to show the \"Palm Red Light Stop\" sign. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-28",
    "lessonNumber": 28,
    "legacy": false,
    "date": "2027-03-09",
    "dayOfWeek": "Tuesday",
    "festival": "Arbor Day",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "Caring for Shared Things and Using a Library Voice",
    "code": "特社2-II-8",
    "themeColor": "#10b981",
    "badgeEmoji": "🌱",
    "badgeLabel": "Little Green Hero's Favorite Items",
    "superSkill": "🌿 Guardian Star of Public Property Protection",
    "summary": "In conjunction with Arbor Day in March, we should cultivate an awareness of cherishing life and campus property: protect flowers, plants and trees and do not climb or break them at will; walk softly when entering the library, turn pages gently, and return items to their original place after reading.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "📖 The banyan tree in the library and the crying fairy tale book!",
      "content": "March 12th is Arbor Day, and new saplings have been planted on campus. After class, He passed by the flowerbeds and saw some younger students trying to pull at the saplings. He gently approached them: \"The saplings have just moved into new soil; it will hurt. Shall we gently water them?\" Entering the school library, Jun saw a wonderful comic book and excitedly ran towards it, almost knocking over the shelf. The teacher whispered in his ear, \"Jun, the library is a forest of books. We should walk as gently as kittens.\" Jun nodded, immediately slowing his steps, turning the pages as gently as if handling a feather, and carefully placing the book back on the green-numbered shelf after finishing. The librarian praised Jun: \"You are truly the best little library gentleman!\"",
      "question": "The flowers and plants on campus and the books in the library are public property for everyone. How should we treat them gently? Where should we put the books after we've finished reading them?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"📖 The big banyan tree and the crying fairy tale book in the library! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: The flowers and plants on campus and the books in the library are the public property of everyone in the school. How should we treat them gently? Where should I put the book after reading it?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🌿 The core technique of \"Cherishing Public Property and Guardian Star\" is to break down the three steps of body movements and voice tone, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater.\"In the library reading room and the campus plant area, the four little heroes practiced \"walking slowly on a cat walk, turning books gently, returning public property to their place, and caring for vegetation\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Little Green Man Lover\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🌿 \"Guardian Star of Cherishing Public Property\" is a structured visual prompt card that marks the focus of eyes and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🌿 Guardian Star of Public Property Protection",
      "steps": [
        {
          "num": 1,
          "text": "Before entering the library, first adjust the throat knob to a whisper."
        },
        {
          "num": 2,
          "text": "Read the book with both hands and turn it gently, without folding the corners or using a pen to draw."
        },
        {
          "num": 3,
          "text": "After reading, turn the spine of the book outward and insert it neatly back into the original numbered shelf."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Caring for Shared Things and Using a Library Voice”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I was trying to borrow a popular comic book from the library, if I couldn't get it, I pushed down the whole row of bookshelves and scattered the books all over the floor.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Gently flip through the pages of the book without folding the corners. After reading, put the books back to the original sorting shelf with both hands, walking as lightly as a cat walking.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Read the book with both hands and turn it gently, without folding the corners or using a pen to draw.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Arbor Day Special 3/12]\" in the regular class",
      "promptWord": "Please prompt the formula: \"Start【🌿 Guardian Star of Cherishing Public Property]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🌿 Guardian Star of Cherishing Public Property], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Read the book with both hands and turn it gently, without folding the corners or using a pen to draw.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Read the book with both hands and turn it gently, without folding the corners or using a pen to draw.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-29",
    "lessonNumber": 29,
    "legacy": false,
    "date": "2027-03-16",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Respecting No: Accepting Other People's Boundaries",
    "code": "特社1-II-15",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🛑",
    "badgeLabel": "Equal Brake Officer",
    "superSkill": "🚦 Instant brake-striking reflexes",
    "summary": "Master the two-way boundary of respecting others: When others say \"no\" or \"please stop,\" be able to immediately stop what you are doing, not get angry, not ask questions or pester, and gracefully step back.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🏎️ A remote-controlled race car speeding along with a red light siren!",
      "content": "Jun brought a cool remote-controlled race car to school today. He enthusiastically wanted to grab He's hand and touch the tires together. Startled by the sudden touch, He pulled his hand back to his chest, shook his head, and whispered, \"Jun, no, I want to draw first.\" Jun frowned, about to shout, \"That's fun! It won't hurt if you touch it!\" Then, he saw the \"Empathy Traffic Light\" sign on the blackboard. He took a deep breath and mentally applied the red brake: \"When someone says no, it's like the red light is on!\" Jun put away the remote control, smiled, and said, \"Okay! You draw first, and come find me when you want to play!\" Seeing that Jun wasn't angry, He breathed a sigh of relief, looked up at Jun, and smiled sweetly: \"Thank you for respecting me, Jun!\"",
      "question": "When someone tells us \"no,\" why can't we force them or keep pushing? What good quality does immediately stopping and saying \"okay\" represent?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🏎️ Racing remote control racing car and red light siren!\", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When others say \"no\" to us, why can't we force others or keep saying no? What good quality does it represent to stop immediately and say \"yes\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚦 The core skill of \"Instant Brake Reaction\" is a three-step process of dismantling body movements and voice tones, combined with brain braking visual charts for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater, \"If you want to share a toy or hold hands with good intentions, and the other party refuses, the four little heroes practice \"stop your hands immediately, take a deep breath, say yes with a smile, and take a step back\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Sympathy Brake Officer\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚦 \"Immediate Brake Response\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚦 Instant brake-striking reflexes",
      "steps": [
        {
          "num": 1,
          "text": "When you hear the other party say \"no\", your ears immediately receive the signal and stop."
        },
        {
          "num": 2,
          "text": "Count silently for three seconds in your mind: \"Others have the right to reject me, this is normal.\""
        },
        {
          "num": 3,
          "text": "With a smile on his face, he responded generously: \"Okay, it's okay, we'll make an appointment next time.\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Respecting No: Accepting Other People's Boundaries”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Yu was invited to play chess together but was rejected. Yu became furious and scolded Yu for his lack of loyalty. He turned over the table and swept the chess pieces off the ground.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "When you hear someone say \"no\", you immediately step on the emotional brake, take a deep breath, nod and say: \"It's okay, we can play again when you are free next time!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Count silently for three seconds in your mind: \"Others have the right to reject me, this is normal.\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter similar situations of \"respecting others' \"no\"\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🚦 Immediate braking reaction]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚦 Immediate braking reaction], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Count silently for three seconds in your mind: \"Others have the right to reject me, this is normal.\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Count silently for three seconds in your mind: \"Others have the right to reject me, this is normal.\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-30",
    "lessonNumber": 30,
    "legacy": false,
    "date": "2027-03-23",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Safe and Unsafe Secrets: Speaking Up and Getting Help",
    "code": "特社1-II-16",
    "themeColor": "#f97316",
    "badgeEmoji": "🔍",
    "badgeLabel": "Little Truth Detective",
    "superSkill": "🚨 Secret Alarm Deactivator",
    "summary": "Develop children's self-protection awareness: distinguish between \"good secrets\" (surprises that make people happy and look forward to, with time limits) and \"bad secrets\" (secrets that make people afraid, require them to hide, involve physical privacy, and should never be kept secret), and bravely seek help from trusted teachers and elders.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎁 Birthday gift hidden in a box vs. a heartbreaking secret!",
      "content": "Today, the teacher took out two magic boxes. The first was a gift box tied with a pink ribbon: \"Next week is He's birthday. Everyone, secretly draw cards for him without telling him first. This is called a 'good secret,' which makes people feel warm and happy!\" The teacher then took out a black box: \"But if someone touches your private parts, or asks you to do something dangerous, and threatens you by saying, 'This is our secret, and I'll beat you if you tell anyone,' that's a 'bad secret'! Bad secrets will make you have stomach aches, nightmares, and be very scared!\" Yu raised his hand and asked, \"Teacher, what should I do if I encounter a bad secret?\" The teacher firmly said, \"Bad secrets must never be kept! Tell your parents or teacher immediately, and the teacher will definitely protect everyone!\" The four children answered loudly, \"We understand!\"",
      "question": "What is a good secret? What is a bad secret? If someone threatens you not to tell anyone something bad, should you listen to them or quickly go to the teacher?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎁 The birthday gift hidden in the box vs the dark secret that makes people feel stomachache!”, using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: What is a good secret? What is a bad secret? If someone threatens you not to tell bad things, should you listen to him or go to the teacher quickly?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚨 The core technique of \"Secret Alarm Canceling Device\" is a three-step disassembly of body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct a practical drill in the character theater. \"In the face of possible threats or dangerous secrets, everyone practices boldly breaking the silence and clearly informing the trusted teacher for help!\", and becomes proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Truth Little Detective\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚨 \"Secret Alarm Canceler\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚨 Secret Alarm Deactivator",
      "steps": [
        {
          "num": 1,
          "text": "Ask yourself: \"Will this secret make me scared or have a stomachache?\""
        },
        {
          "num": 2,
          "text": "If it is a dangerous or bad secret, activate the help alarm immediately"
        },
        {
          "num": 3,
          "text": "Go to the special education teacher and tell the truth quietly but firmly to seek protection"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Safe and Unsafe Secrets: Speaking Up and Getting Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "You saw a classmate stealing class fees, and he threatened to beat you up if you went out. He lied because he was afraid to help hide his wallet.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Distinguish between good secrets and bad secrets, and if you notice the \"bad secrets\" that make you feel stomachache and fearful, report it to a trusted teacher for help immediately!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: If it is a dangerous or bad secret, activate the help alarm immediately. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation of \"good secrets vs bad secrets\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🚨 Secret alarm canceller]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚨 Secret alarm canceller], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: If it is a dangerous or bad secret, activate the help alarm immediately. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: If it is a dangerous or bad secret, activate the help alarm immediately. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-31",
    "lessonNumber": 31,
    "legacy": false,
    "date": "2027-03-30",
    "dayOfWeek": "Tuesday",
    "festival": "Children's Day and Qingming Festival",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "Public Manners: Riding Safely and Waiting in Line",
    "code": "特社2-II-9",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚌",
    "badgeLabel": "Polite Little Gentleman",
    "superSkill": "🎫 Little expert in public etiquette",
    "summary": "In conjunction with the Children's Day and Qingming Festival holidays in April, pay attention to public transportation and public place order: queue in order when taking the bus, let passengers off first and then board, hold the handrails tightly and do not run inside the carriage, keep your voice down, and give up priority seats.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🚌 A big yellow bus and a wobbly little penguin!",
      "content": "During the Children's Day long weekend in April, four little heroes from OO Elementary School took a yellow bus to the Municipal Zoo. At the bus stop, Jun excitedly tried to rush onto the bus as soon as he saw it arrive! Yu tugged at Jun's sleeve: \"Jun, look, there are yellow queuing lines on the ground. We have to wait for people to get off before we can swipe our cards and board!\" Once on the bus, it swayed a bit. After He sat down, he saw an elderly woman with a cane board. He immediately stood up, holding onto the handrail: \"Grandma, here's your seat!\" The elderly woman smiled and patted He's head, saying thank you. Jia quietly discussed the penguin exhibit on the bus, making the entire journey quiet and smooth. The driver gave them a thumbs-up and praised, \"You are the most polite little gentlemen in all of Yunlin!\"",
      "question": "When taking the bus, is it okay to rush forward as soon as the door opens? What should we do if we see someone with mobility issues on the bus?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚌 The big yellow bus and the rickety little penguin! \", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When taking the bus, can you rush forward as soon as the door opens? What should you do if you see someone with mobility issues on the bus?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎫 The core skills of \"Public Etiquette Master\" are divided into three steps of body movements and voice tone, combined with the brain braking visual chart for proficiency practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In a simulated bus and MRT station situation, four little heroes practiced \"waiting in line, getting off first, getting on, holding on to the handrails, and taking the initiative to give up their seats\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Polite Gentleman\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎫 \"Public Etiquette Master\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎫 Little expert in public etiquette",
      "steps": [
        {
          "num": 1,
          "text": "Queue up in order before getting on the bus, don’t run, don’t rush"
        },
        {
          "num": 2,
          "text": "After taking a seat, sit with a straight posture and keep your feet flat on the ground without kicking the front seat"
        },
        {
          "num": 3,
          "text": "Use one minute of voice volume throughout the whole process, and see the elderly and weak take the initiative to give up their seats"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Public Manners: Riding Safely and Waiting in Line”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When taking the bus, in order to grab the window seat, I pushed the old lady who was getting on the bus away and occupied two seats to lie down.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Queue up and swipe your card to say thank you, hold the handrails with both hands in the carriage, lower your voice and sit quietly, and take the initiative to offer your seat to the elders.",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: After taking a seat, sit with a straight posture and keep your feet flat on the ground without kicking the front seat. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Children's Day and Qingming Festival 4/4]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🎫 A little master of public etiquette]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎫 A little master of public etiquette], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: After taking a seat, sit with a straight posture and keep your feet flat on the ground without kicking the front seat. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: After taking a seat, sit with a straight posture and keep your feet flat on the ground without kicking the front seat. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-32",
    "lessonNumber": 32,
    "legacy": false,
    "date": "2027-04-06",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Lunchtime Manners and Communicating Food Needs",
    "code": "特社1-II-17",
    "themeColor": "#eab308",
    "badgeEmoji": "🍱",
    "badgeLabel": "Expressing Mealtime Needs",
    "superSkill": "Express my lunchtime needs",
    "summary": "Practise express my lunchtime needs using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "Express my lunchtime needs",
      "content": "At lunch, He finds a food smell uncomfortable. He points to a needs card and asks for a smaller portion and help. The teacher checks the agreed dietary arrangements before making changes. Everyone practises respecting different needs without comparing how much people eat.",
      "question": "How can you let the teacher know about a food preference or dietary need?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Express my lunchtime needs”. How can you let the teacher know about a food preference or dietary need? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Check the portion and any known dietary requirements → Use speech or a communication card to request a smaller portion, an alternative or help → Eat safely and comfortably, then tidy the utensils"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Express my lunchtime needs",
      "steps": [
        {
          "num": 1,
          "text": "Check the portion and any known dietary requirements"
        },
        {
          "num": 2,
          "text": "Use speech or a communication card to request a smaller portion, an alternative or help"
        },
        {
          "num": 3,
          "text": "Eat safely and comfortably, then tidy the utensils"
        }
      ]
    },
    "decisionTree": {
      "prompt": "How can you let the teacher know about a food preference or dietary need?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Use speech or a communication card to request a smaller portion, an alternative or help",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Use speech or a communication card to request a smaller portion, an alternative or help. Report no opportunity or any support needed too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter situations similar to \"Nutritious Lunch Table Manners\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🥢 Delicious CD Food God]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🥢 Delicious CD Food God], very polite!”"
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can use speech or a communication card to request a smaller portion, an alternative or help. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Use speech or a communication card to request a smaller portion, an alternative or help. Accept speech, pointing or gestures without public comparisons.",
    "useBrowserSpeech": true
  },
  {
    "id": "b-week-33",
    "lessonNumber": 33,
    "legacy": false,
    "date": "2027-04-13",
    "dayOfWeek": "Tuesday",
    "festival": "Earth Day",
    "unit": "Unit 9: Shared Spaces and Community Manners",
    "title": "Green Guardians: Saving Energy and Recycling",
    "code": "特社2-II-10",
    "themeColor": "#16a34a",
    "badgeEmoji": "🌍",
    "badgeLabel": "Earth Little Guardian",
    "superSkill": "♻️ Resource categorization green finger",
    "summary": "In conjunction with World Earth Day, establish concrete behaviors to protect resources: turn off lights and fans when leaving the classroom, stop running water from the tap when washing hands, and implement waste sorting for paper, plastic, and metal/aluminum containers.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "💡 A crying light bulb and a magical blue-green recycling bin!",
      "content": "On April 22nd, World Earth Day, the teacher led the students on a campus tour. They noticed that many empty classrooms had their lights on and fans whirring, and the faucets in the hallways were dripping. The teacher said, \"If Mother Earth has a fever, polar bears won't have any ice to live in! We need to be Earth's little green bodyguards!\" Yu volunteered to be the \"Lights-Off Captain,\" turning off the lights as he left the classroom after class; Jun saw a dripping faucet and rushed over to tighten the valve; He and Jia guided everyone in the hallway to wash and flatten their empty milk cartons before putting them in the paper recycling bin. The principal, seeing the four little guardians, awarded the special education class the \"School-wide Energy Saving and Carbon Reduction Champion Flag\" during the flag-raising ceremony!",
      "question": "What resources are wasted if the lights aren't turned off when leaving an empty classroom? What should you do before putting an empty milk carton into the recycling bin?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💡 The crying light bulb and the magical blue-green recycling bin!”, using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: What resources will be wasted if the lights are not turned off when leaving a classroom with no one around? What should you do before you put the finished milk carton into the recycling bin?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"♻️ The core technique of \"Resource Classification Green Finger\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"Before school in the classroom and in the recycling yard situation, the four little heroes practiced \"inspecting the water and electricity switches, turning off the power, flushing and flattening the recyclables\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Little Guardian of the Earth\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"♻️ Resource Classification Green Finger\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 ♻️ Resource categorization green finger",
      "steps": [
        {
          "num": 1,
          "text": "When the last one leaves the classroom, turn off the light switch clockwise"
        },
        {
          "num": 2,
          "text": "After washing your hands, turn the faucet firmly and lock it tightly to avoid wasting water drops."
        },
        {
          "num": 3,
          "text": "Rinse lunch boxes and plastic bottles and put them into recycling bins by category"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Green Guardians: Saving Energy and Recycling”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "After drinking the drink, he crushed the Tetra Pak bag and kicked it into the flower garden, and also laughed at the environmental volunteers who picked up garbage as fools.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Turn off the light switch that no one is using, rinse the carton and flatten it after drinking the milk, and definitely throw it into the recycling bin!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: After washing your hands, turn the faucet firmly and lock it tightly to avoid wasting water drops.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation on \"[World Earth Day 4/22]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【♻️ Resource classification green finger]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [♻️ Resource classification green finger], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: After washing your hands, turn the faucet firmly and lock it tightly to avoid wasting water drops.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: After washing your hands, turn the faucet firmly and lock it tightly to avoid wasting water drops.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-34",
    "lessonNumber": 34,
    "legacy": false,
    "date": "2027-04-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 11: Expressing Feelings with I-Messages",
    "title": "I-Messages: Sharing Feelings Without Blaming",
    "code": "特社1-II-18",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💬",
    "badgeLabel": "My message to Master",
    "superSkill": "🎯 I communicate with magic arrows",
    "summary": "Master advanced communication skills: Overcome the tendency to use \"you messages\" to blame others when angry (\"It's all your fault! You're so annoying!\"), and learn to use the three-part \"I message\" to clearly express your feelings, reasons, and specific expectations.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "💥 The fire-breathing Tyrannosaurus Rex's \"You\" bomb vs. the gentle and magical \"I Message\"!",
      "content": "During art class, when Jun turned around with scissors in hand, he accidentally bumped into Yu, knocking over the paper castle that Yu had painstakingly built. Yu's face turned bright red, his fists clenched, and he almost yelled, \"You're terrible! Are you blind?! It's all your fault!\" At that moment, Yu remembered the \"Me Message Magic Card\" his teacher had taught him. He took a deep breath, suppressed his inner rage, and looked at Jun, saying, \"Jun, I feel very sad because it took me half an hour to build this castle. I hope you can watch where you're going and help me pick up the blocks!\" Jun had initially thought Yu was going to hit him, but Yu's reasoning made him feel ashamed. He lowered his head in embarrassment, saying, \"I'm sorry, Yu! I didn't mean to. I'll put it back together for you right now!\" A potential physical conflict was gently averted by the magical \"Me Message\"!",
      "question": "When someone breaks your things, will telling them \"You're so mean\" make things better? What are the three magic phrases for \"I Message\"?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💥 Fire-breathing Tyrannosaurus' \"you\" bomb vs. gentle and magical \"I message\"! \", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When someone breaks your things, will calling the other person \"you are annoying\" make things better? What are the three magic sentence patterns for \"I Message\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎯 The core technique of \"My Message Communication Magic Arrow\" is to break down the three steps of body movements and voice tone, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Practical drill in the character theater \"In a conflict situation where toys are messed up or queues are collided, four little heroes practice using the \"My Message Trilogy\" to resolve misunderstandings! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"My Message Master\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎯 \"My Message Communication Magic Arrow\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎯 I communicate with magic arrows",
      "steps": [
        {
          "num": 1,
          "text": "Take a deep breath and put back the curse words you originally wanted to say."
        },
        {
          "num": 2,
          "text": "Say the first sentence: \"I feel... (state your feelings)\""
        },
        {
          "num": 3,
          "text": "Say the second and third sentences: \"Because... I hope...\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “I-Messages: Sharing Feelings Without Blaming”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When a classmate accidentally touched his arm, he immediately punched the other person in the stomach and yelled ugly and dirty words to insult the classmate and his family.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Use the \"I message\" communication method: \"I feel a lot of pain because you bumped into me. I hope you will be more careful next time you walk.\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Say the first sentence: \"I feel... (state your feelings)\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation with \"Talking Magic \"I Message\"\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🎯 I communicate with the magic arrow]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎯 My message communication magic arrow], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Say the first sentence: \"I feel... (state your feelings)\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Say the first sentence: \"I feel... (state your feelings)\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-35",
    "lessonNumber": 35,
    "legacy": false,
    "date": "2027-04-27",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Asking the School Nurse for Help",
    "code": "特社1-II-19",
    "themeColor": "#ec4899",
    "badgeEmoji": "🩺",
    "badgeLabel": "Health Help Star",
    "superSkill": "🩹 Clearly identifying young patients seeking medical help",
    "summary": "Mastering the accurate verbal expression of physical symptoms: When injured or in pain, one should not cry or vent, but be able to walk into a health center, knock on the door and greet people, and point to specific areas to describe the pain, the time, and the cause.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🩹 A miraculous ointment from the health center for a scraped and bleeding knee!",
      "content": "During PE class, while running, Jun fell on the PU track while chasing a basketball that was about to go out of bounds, scraping a large patch of skin off his right knee, which bled profusely. Jun cried out in pain, tears welling in his eyes. Yu and He quickly helped him towards the health center. Jun initially wanted to sit down and cry, but the teacher encouraged him, saying, \"Jun is very brave. Let's wipe away our tears and go inside to tell the nurse where you're hurt!\" At the door, Jun knocked lightly twice, saying, \"Hello, Auntie!\" The nurse kindly asked, \"What happened, little one?\" Jun pointed to his right knee, \"Auntie, I fell while running during PE class, and my right knee is scraped and bleeding. It hurts!\" The nurse praised Jun for explaining so clearly and immediately disinfected the area with saline solution, applied ointment, and put on a large gauze bandage. Jun wiped away his tears and loudly thanked the nurse!",
      "question": "When you go to the health center to see a doctor or nurse, if you just cry and don't say anything, can the nurse immediately tell where it hurts? What three things should you clearly state when reporting symptoms?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🩹 Broken and bleeding knees and the health center’s miracle ointment!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When going to the health center to see a doctor or nurse, if you just keep crying and don’t speak, can your aunt immediately know where it hurts? What three things should be clear when reporting symptoms?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🩹 Understand the core skills of \"seeking medical treatment for young patients clearly\", break down the three steps of body movements and voice tones, and practice proficiently with the brain braking visual chart."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In the health center consultation situation, everyone practiced \"knocking on the door to greet, pointing to the location, telling reasons and feelings, and sincerely thanking you\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Health Help Star\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🩹 \"Clearly Seeking Medical Care for Young Patients\" structured visual reminder chart, marking eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🩹 Clearly identifying young patients seeking medical help",
      "steps": [
        {
          "num": 1,
          "text": "When entering the health center, first nod politely and say hello: \"Hello, nurse\""
        },
        {
          "num": 2,
          "text": "Point to the specific parts of your body that feel uncomfortable (head/stomach/hands and feet)"
        },
        {
          "num": 3,
          "text": "Clearly state the reason why it happened: \"I fell and hit while running after class.\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Asking the School Nurse for Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "My knee was bruised and bleeding. When I entered the health center, I cried and threw the chair. I refused the nurse to apply the medicine, and even knocked the betadine medicine to the ground.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "He walked in politely and said hello to the nurse. He calmly pointed to the injured area and said, \"My right knee was bruised and bleeding when I fell in gym class.\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Point to the specific parts of your body that feel uncomfortable (head/stomach/hands and feet). Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When a student encounters a situation similar to \"Health Center Helping Politeness\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🩹 Seek medical treatment clearly for young patients]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🩹 Seek medical treatment clearly for young patients], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Point to the specific parts of your body that feel uncomfortable (head/stomach/hands and feet). Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Point to the specific parts of your body that feel uncomfortable (head/stomach/hands and feet). Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-36",
    "lessonNumber": 36,
    "legacy": false,
    "date": "2027-05-04",
    "dayOfWeek": "Tuesday",
    "festival": "Mother's Day",
    "unit": "Unit 2: Spring Celebrations and Gratitude",
    "title": "Showing Care: A Thank-You Card and a Helpful Chore",
    "code": "特社2-II-11",
    "themeColor": "#f43f5e",
    "badgeEmoji": "🌹",
    "badgeLabel": "A Filial and Warm-hearted Little Boy",
    "superSkill": "💖 Loving Household Chores Taker",
    "summary": "In conjunction with Mother's Day in May, appreciate the hard work of family caregivers (mothers, grandparents, etc.): express your gratitude by hand-drawing carnation cards and fulfill your promise to complete a household chore (sweeping, washing dishes, or giving a back massage) on the weekend.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": " Carnation: A carnation I folded myself and a bowl of rice that I washed until it was sparkling clean!",
      "content": "The second Sunday in May is Mother's Day. Looking at family photos in class, He thought about how his mother gets up at five every morning to cook breakfast, takes him to school on her motorcycle, and washes clothes and dishes late into the night, leaving her hands rough. In the special education classroom, the teacher handed out red colored paper and gold crayons: \"Loving your mother can't just be words; we should give her two most heartwarming gifts: the first is a sincere thank-you card, and the second is helping her with a household chore!\" Yu folded a three-dimensional carnation out of red paper; Jun promised to clean the living room floor over the weekend; He wrote, \"Mom, I'll massage your back for twenty minutes\"; and Jia drew a family portrait. Back home, He handed his card to his mother with both hands and went into the kitchen to wash the dishes after dinner. His mother hugged him tightly, moved to tears!",
      "question": "What hard things do our mothers or elders do for us at home? Besides sending cards, what actions can we take to help ease their burden on Mother's Day?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "The introductory story \"Carnation: A hand-folded carnation and a shiny bowl of rice!\" uses puppet show illustrations to guide students to become aware of emotions and interpersonal situations: What hard things do mothers or elders at home do for us? In addition to sending cards on Mother’s Day, what actions can we take to help reduce the burden?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"💖 The core skills of \"Love Domestic Actor\" are divided into three steps of body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In the Mother's Day Thanksgiving party and family situations, the four little heroes practiced giving cards to caregivers and expressing love with specific housework services!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and colored worksheet, you will be awarded the \"Filial Little Friendly Man\" medal of honor and will be rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"💖 \"Love Domestic Activist\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 💖 Loving Household Chores Taker",
      "steps": [
        {
          "num": 1,
          "text": "Handwrite a Mother’s Day card full of gratitude"
        },
        {
          "num": 2,
          "text": "Go to mom and give her a big warm hug"
        },
        {
          "num": 3,
          "text": "Take the initiative to complete a household chore (such as folding clothes or sweeping the floor) and use actions to relieve worries"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Showing Care: A Thank-You Card and a Helpful Chore”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Mom reminded herself that it was time to take a bath, threw the toys on the spot and shouted: \"Today is Mother's Day, please leave me alone!\" This made her sad and shed tears.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Present hand-painted carnation cards, hug mom and say Happy Mother's Day, and take the initiative to help mom pat her back and share the chores of washing dishes!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Go to mom and give her a big warm hug. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Mother's Day Special]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【💖 Loving housework activist]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [💖 Loving housework activist], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Go to mom and give her a big warm hug. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Go to mom and give her a big warm hug. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-37",
    "lessonNumber": 37,
    "legacy": false,
    "date": "2027-05-11",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 4: Classroom Routines and Learning Together",
    "title": "School Safety: Walking in Hallways and on Stairs",
    "code": "特社1-II-20",
    "themeColor": "#d97706",
    "badgeEmoji": "🚶",
    "badgeLabel": "Safety Navigator",
    "superSkill": "🚸 Turn corners, stop, look, and listen like a radar",
    "summary": "Master the physical safety of walking on campus: slow down in the corridors to avoid collisions, hold the handrail and walk on the right when going up and down stairs, and follow the \"stop, look and listen\" collision avoidance guidelines when passing through blind spots and corners.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🌪️ A small whirlwind in the hallway collides with a huge collision at the corner of the stairs!",
      "content": "The school bell had just rung when Jun, eager to get to the playground for the swings, dashed down the corridor like a bullet! Just as he was about to turn the corner of the stairs, a first-grader came out carrying a water bottle, and the two collided violently with a loud \"Bang!\" The water bottle shattered, the little girl sat on the ground crying in pain, and Jun got a big bump on his forehead. The teacher walked over sternly: \"Jun, the corridor isn't a running track! Corners are blind spots; if everyone runs in the corridor, someone will get seriously injured every day!\" The teacher led the whole class in practicing the \"Three Rules of Corridor Safety\": walk slowly, one step at a time; keep to the right when walking on stairs; stop for two seconds and look left and right when turning corners. Jun apologized to the little girl and learned his lesson. From then on, there were no more dangerous little whirlwinds in the corridor, only steady little gentlemen walking!",
      "question": "Why is running in the hallway and on the stairs so dangerous? When you pass a corner where you can't see the other side, what three things should you do?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌪️ The small whirlwind in the corridor collides with the big collision at the corner of the stairs!\", using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: Why is running in corridors and stairs so dangerous? What three actions must you do when passing a corner where you cannot see the other side?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚸 The core skill of \"Stop at a Corner, Watch and Listen to the Radar\" is a three-step process of dismantling body movements and voice tones, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In the corridor, corner and staircase flow situation, the four little heroes demonstrated \"walk slowly to the right, stop for two seconds at the corner, and confirm that it is safe before moving forward\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Safety Navigator\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚸 Stop around the corner, look and listen to the radar\" structured visual prompt chart, marking the focus point of the eyes and the distance of the body to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚸 Turn corners, stop, look, and listen like a radar",
      "steps": [
        {
          "num": 1,
          "text": "As soon as you walk into the corridor, start the slow gear, walk slowly and don’t run."
        },
        {
          "num": 2,
          "text": "Go up and down the stairs with your feet one step at a time, hold the safety handrail with your right hand and walk to the right"
        },
        {
          "num": 3,
          "text": "Walk to the blind corner of the corridor, stop for a second and turn your head to confirm that no one is around before turning."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “School Safety: Walking in Hallways and on Stairs”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "In order to rush to the stadium after class, I ran wildly in the corridor and knocked away the squad leader who was holding a stack of homework books. His homework was scattered on the ground and he refused to apologize.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Walk slowly and lightly in the corridor, go up and down the stairs close to the railing on the right side one step at a time, and activate the \"stop, watch, listen\" radar at the corner!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Go up and down the stairs with your feet one step at a time, hold the safety handrail with your right hand and walk to the right. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation of \"campus safety has no dead ends\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【🚸 Stop around the corner and listen to the radar]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚸 Stop around the corner to watch and listen to the radar], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Go up and down the stairs with your feet one step at a time, hold the safety handrail with your right hand and walk to the right. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Go up and down the stairs with your feet one step at a time, hold the safety handrail with your right hand and walk to the right. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-38",
    "lessonNumber": 38,
    "legacy": false,
    "date": "2027-05-18",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 12: Apologies, Forgiveness and Repairing Relationships",
    "title": "A Sincere Apology: Four Steps to Make Things Right",
    "code": "特社1-II-21",
    "themeColor": "#6366f1",
    "badgeEmoji": "🤝",
    "badgeLabel": "Sincere Apology Officer",
    "superSkill": "🙇 The Four-Step Method for Sincere Apology",
    "summary": "Mastering core relationship repair skills: Overcoming defensiveness when making mistakes (making excuses like \"I didn't do it on purpose!\"), and learning the four steps to a sincere apology: I'm looking at you + I'm sorry + It's my fault + I'll do it next time...",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎨 Red ink spilled on white sneakers and a heartfelt apology!",
      "content": "While washing watercolor brushes in art class, Jun flicked the water droplet, accidentally splashing red water all over Yu's new white sneakers! The pristine white surface was immediately stained with a large, mottled red stain. Yu's eyes reddened, and he gritted his teeth in anger. Jun's first instinct was to blurt out, \"You walked too close yourself! I didn't mean to!\" But seeing Yu's heartbroken tears, Jun remembered the teacher's \"four-step apology process.\" Jun took a deep breath, walked up to Yu, and looked at him sincerely: \"First, I'm looking at you; second, Yu, I'm sorry; third, it was my fault for splashing water and getting your new sneakers dirty; fourth, I'll get you some wet wipes right now to clean them up, and next time you'll definitely look to the side first when washing your brushes!\" Hearing Jun's sincerity, Yu's anger slowly subsided: \"Okay, let's clean them together!\"",
      "question": "If you make an excuse like \"I didn't do it on purpose\" when you do something wrong, will the other person feel comfortable? What are the four steps to sincerely apologizing?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎨 The red ink splashed on the white sneakers and a sincere apology!\", using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: If you make an excuse and say \"I didn't mean to do something wrong\" when you do something wrong, will the other person feel comfortable? What are the four steps to a sincere apology?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🙇 The core technique of \"The Four Steps of Sincere Apology\" is a three-step breakdown of body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In a sudden conflict where classmates' belongings were accidentally damaged or soiled, four little heroes practiced the standard \"Four Steps of Sincere Apology + Specific Repair Actions\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and colored worksheet, you will be awarded the \"Sincere Apology Officer\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🙇 \"Four Steps of Sincere Apology\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🙇 The Four-Step Method for Sincere Apology",
      "steps": [
        {
          "num": 1,
          "text": "Turn toward the partner and offer a sincere apology: “I am sorry.”"
        },
        {
          "num": 2,
          "text": "Explain what happened specifically: \"I accidentally knocked over your pen holder\""
        },
        {
          "num": 3,
          "text": "Offer a remedy: \"I'll help you pick up the pen and put it away together.\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “A Sincere Apology: Four Steps to Make Things Right”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I accidentally broke He's colored pen. Not only did I not apologize, but I also complained to him and scolded He for buying a bad colored pen.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "The four steps of a sincere apology: look the other person in the eye, say sorry, explain the reason, and proactively ask how to help make amends!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Explain what happened specifically: \"I accidentally knocked over your pen holder\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"What should I do if I step on a landmine? Four steps to sincerely apologize\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🙇 Four steps to sincerely apologize! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🙇 Four steps to sincerely apologize], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Explain what happened specifically: \"I accidentally knocked over your pen holder\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Explain what happened specifically: \"I accidentally knocked over your pen holder\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-39",
    "lessonNumber": 39,
    "legacy": false,
    "date": "2027-05-25",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 12: Apologies, Forgiveness and Repairing Relationships",
    "title": "After an Apology Sharing Feelings and Choosing How to Repair",
    "code": "特社1-II-22",
    "themeColor": "#0ea5e9",
    "badgeEmoji": "🕊️",
    "badgeLabel": "Choosing How to Repair",
    "superSkill": "There are choices after an apology",
    "summary": "Practise there are choices after an apology using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "There are choices after an apology",
      "content": "Jun accidentally knocks over Jia’s work and offers to help repair it. Jia is still upset and asks for more time. The teacher helps everyone make the area safe and discuss repairs. Hearing an apology does not mean having to forgive immediately, hug or keep playing together.",
      "question": "What could you say if you hear an apology but are not ready to respond?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “There are choices after an apology”. What could you say if you hear an apology but are not ready to respond? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Check that you feel safe and willing to talk → Share a feeling or say that you need more time → Discuss repair and future boundaries with a trusted adult"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "There are choices after an apology",
      "steps": [
        {
          "num": 1,
          "text": "Check that you feel safe and willing to talk"
        },
        {
          "num": 2,
          "text": "Share a feeling or say that you need more time"
        },
        {
          "num": 3,
          "text": "Discuss repair and future boundaries with a trusted adult"
        }
      ]
    },
    "decisionTree": {
      "prompt": "What could you say if you hear an apology but are not ready to respond?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Share a feeling or say that you need more time",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Share a feeling or say that you need more time. Report no opportunity or any support needed too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation of \"when others say sorry\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【🗝️ Tolerance, forgiveness and a big heart]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🗝️ Tolerant and forgiving, big-hearted], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can share a feeling or say that you need more time. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Share a feeling or say that you need more time. Accept speech, pointing or gestures without public comparisons.",
    "useBrowserSpeech": true
  },
  {
    "id": "b-week-40",
    "lessonNumber": 40,
    "legacy": false,
    "date": "2027-06-01",
    "dayOfWeek": "Tuesday",
    "festival": "Dragon Boat Festival",
    "unit": "Unit 2: Summer Celebrations and Gratitude",
    "title": "Dragon Boat Teamwork: Moving Together",
    "code": "特社2-II-12",
    "themeColor": "#14b8a6",
    "badgeEmoji": "🚣",
    "badgeLabel": "Dragon Boat Drummer Star",
    "superSkill": "🥁 Row a dragon boat in perfect rhythm",
    "summary": "In conjunction with the Dragon Boat Festival in May, we can experience the true meaning of teamwork and cooperation: in group competitions and tasks, we should coordinate with the team's rhythm and pace, not complain about teammates who are slower, and encourage each other.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🐉 Colorful dragon boat races on the floor and the synchronized beating of drums!",
      "content": "The Dragon Boat Festival in the fifth month of the lunar calendar has arrived! Two long, colorful dragon boats were cleverly arranged on the floor of the special education classroom. The teacher gave each student a cardboard paddle, ready for the \"Dragon Boat Race!\" At first, Jun, who was strong, paddled very fast, using both hands and feet to propel himself forward; but Yu and He behind him couldn't keep up, and the whole dragon boat spun in place, almost capsizing! Jun shouted anxiously, \"You're paddling too slowly! Hurry up!\" Jia started playing the rhythm drum: \"Boom! Boom! Boom! Everyone, listen to the drummer's rhythm, one, two strokes, one, two strokes!\" Hearing the drumbeat, Jun slowed down his paddling speed, matching He's rhythm. The four of them shouted slogans in unison, and the dragon boat moved forward smoothly like flying, successfully capturing the finish line red flag! Everyone hugged each other and cheered in celebration!",
      "question": "When rowing a dragon boat, if the strongest person only focuses on rushing forward, can the dragon boat move forward? How can the team move fast and steadily?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🐉 Colorful dragon boat races on the floor and uniform drumming sounds!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When rowing a dragon boat, if the strong person only rushes forward, can the dragon boat move forward? How can we make the team move quickly and steadily?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🥁 The core technique of \"Dragon Boating in Rhythm\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conduct a practical drill in the character theater \"In the land dragon boat or team cooperation relay competition, everyone practices listening to the drum slogans, slowing down the individual speed to cooperate with the group, and working together to win the championship!\", and become proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Dragon Boat Drummer Star\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🥁 \"Dragon Boating in Rhythm\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🥁 Row a dragon boat in perfect rhythm",
      "steps": [
        {
          "num": 1,
          "text": "Listen intently to the captain's drum chant: \"One, two! One, two!\""
        },
        {
          "num": 2,
          "text": "The movements of both hands match the speed of teammates, neither rushing forward nor lagging behind"
        },
        {
          "num": 3,
          "text": "When falling behind, shout cheering slogans loudly to cheer each other up without blaming others."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Dragon Boat Teamwork: Moving Together”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "After losing a round of tug-of-war, he immediately threw the hemp rope to the ground, pointed at his teammate's nose and yelled, \"It's all because you are too weak!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Row the oars neatly to the rhythm of the big drum, shout slogans loudly to cheer each other up even if they fall behind, and keep fighting until the last second!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: The movements of both hands match the speed of teammates, neither rushing forward nor lagging behind. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Dragon Boat Festival Special]\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🥁 Dragon boat racing in time with the rhythm]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🥁 Rowing dragon boats in time with the rhythm], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: The movements of both hands match the speed of teammates, neither rushing forward nor lagging behind. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: The movements of both hands match the speed of teammates, neither rushing forward nor lagging behind. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-41",
    "lessonNumber": 41,
    "legacy": false,
    "date": "2027-06-08",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 13: Resilience and Good Sportsmanship",
    "title": "Good Sportsmanship: Winning and Losing Kindly",
    "code": "特社1-II-23",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🏆",
    "badgeLabel": "Style Champion",
    "superSkill": "👏 Sportsmanship - Big applause!",
    "summary": "Mastering competitive resilience: Overcome anger and loss of control when losing (crying, knocking over the chessboard, accusing the opponent of cheating), learn to take deep breaths to calm down, smile, shake hands with the winner, and say, \"Congratulations, you're amazing!\"",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "♟️ A billionaire who was just one step away from winning the championship and a cool high-five!",
      "content": "This afternoon during board game time, four children were playing an exciting Animal Monopoly game. Jun was in the lead, and it seemed he only needed to roll a three to buy the last castle and win! When it was Jun's turn to roll the dice, the dice rolled and rolled a one! Next, it was He's turn, and He luckily rolled a six, reaching the finish line and winning! Jun's face instantly fell, his eyes widened, and he grabbed the edge of the board with both hands, almost flipping it over! The teacher gently placed a hand on Jun's shoulder: \"Jun, a true hero isn't someone who always wins, but someone who can lose gracefully and applaud others!\" Jun closed his eyes, took three deep breaths, and removed his hands from the board. He stood up, strode over to He, and extended his right hand: \"He, congratulations! You had great luck today, you played brilliantly!\" The whole class immediately erupted in thunderous applause!",
      "question": "If you get angry and flip the table after losing a game, will anyone want to play with you again? What constitutes true \"sportsmanship\"?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"♟️ The rich man who is one step away from winning the championship gives a handsome high five! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: If you lose in a game and flip the table in anger, will anyone want to play with you next time? What is true \"sportsmanship\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"👏 The core technique of \"Sportsman's Style and Big Applause\" is a three-step breakdown of body movements and voice tones, combined with brain braking visual charts for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In a table game duel or a losing situation in a sports competition, the four little heroes demonstrated \"restraining the urge to turn over the table, taking a deep breath to calm down, and taking the initiative to go to the winner to shake hands and congratulate\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Champion Officer of Style\" medal of honor and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"👏 \"Sportsman's Style and Big Applause\" is a structured visual reminder chart that marks eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 👏 Sportsmanship - Big applause!",
      "steps": [
        {
          "num": 1,
          "text": "The referee blows the whistle and immediately stops moving and stands at attention."
        },
        {
          "num": 2,
          "text": "Take a deep breath to calm down the excitement of victory and defeat, and walk towards the opponent's team"
        },
        {
          "num": 3,
          "text": "Stretch out your right hand and shake hands with your opponent warmly: \"Thank you for the advice, you performed really well!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Good Sportsmanship: Winning and Losing Kindly”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "After losing to Yu in chess, he was so angry that he overturned the entire chessboard and smashed the chess pieces all over the floor. He also pointed at Yu and scolded him for cheating.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "After the game, regardless of winning or losing, walk towards your opponent, take off your hat, shake hands and say sincerely: \"This was a wonderful game, you were great!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Take a deep breath to calm down the excitement of victory and defeat, and walk towards the opponent's team. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in a regular class as \"sportsmanlike, can afford to play but can afford to lose\"",
      "promptWord": "Please prompt the formula: \"Start【👏 Big applause for sportsmanship]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [👏 Sportsman style, big applause], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Take a deep breath to calm down the excitement of victory and defeat, and walk towards the opponent's team. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Take a deep breath to calm down the excitement of victory and defeat, and walk towards the opponent's team. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-42",
    "lessonNumber": 42,
    "legacy": false,
    "date": "2027-06-15",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 11: Expressing Feelings with I-Messages",
    "title": "When Things Feel Unfair: Speaking Up Calmly",
    "code": "特社1-II-24",
    "themeColor": "#a855f7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "Fairness Ombudsman",
    "superSkill": "🙋 Objective and Calm Appeal Device",
    "summary": "Master positive rights advocacy strategies: When subjectively feeling that \"teachers are biased, the distribution is uneven, or it is unfair\", do not vent by screaming, throwing objects, or resisting and striking. Instead, calmly raise your hand and raise questions and explanations to the teacher based on objective facts.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "⚖️ Two boxes of colored stickers and a raised arm!",
      "content": "Today, when collecting stickers to exchange for gifts, Yu saw that the teacher gave He three large stickers, while he only received two small stickers. A strong sense of resentment suddenly welled up inside Yu: \"It's unfair! The teacher is biased! I clearly paid attention in class, so why did He get more!\" Yu angrily slammed his pencil on the table, buried his head in his arms, and sulked. The teacher came over and gently asked, \"Yu, what's wrong?\" Yu remembered the communication principles he had practiced: when you're angry or sulking, others can't guess what you're doing, so you have to talk about it! Yu sat up straight, raised his hand properly: \"Teacher, I'd like to ask you something. He got three stickers, and I only got two. I feel a little sad and confused. How is it calculated?\" The teacher smiled and explained, \"Yu, He also completed the classroom cleaning task for extra points today! And your handwriting was very beautiful today, so this is your special sparkly sticker!\" Yu suddenly understood, and his resentment vanished!",
      "question": "When you feel something is unfair, will throwing things or crying resolve your doubts? What are the benefits of calmly raising your hand to ask a question?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"⚖️ Two boxes of colorful stickers and an upright raised arm!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When they feel unfair, can throwing things or crying on their stomachs solve the problem? What are the benefits of calmly raising your hand and asking a question?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🙋 The core technique of \"Objective Calm Complaint Instrument\" is a three-step process of dismantling body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"When faced with resource allocation or point disputes, everyone practiced \"not losing temper, sitting upright and raising hands, asking objective questions, and listening to explanations\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and color worksheet, you will be awarded the \"Fairness Complaint Officer\" honorary medal and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🙋 \"Objective Calm Complaint Instrument\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🙋 Objective and Calm Appeal Device",
      "steps": [
        {
          "num": 1,
          "text": "When you feel excited and want to protest, immediately count down five, four, three, two, one in your mind"
        },
        {
          "num": 2,
          "text": "Raise your right hand and wait quietly for the teacher to call your name. Do not knock on the table to interrupt."
        },
        {
          "num": 3,
          "text": "State specific facts in objective and calm sentences without offensive words"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “When Things Feel Unfair: Speaking Up Calmly”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I felt that the teacher had given out one more sticker to someone else than me, so I immediately slapped the table and yelled, rushed to the podium, snatched the whole pack of stickers and scattered them on the ground.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Raise your hands and calmly wait for the teacher to call your name, and express in an objective and gentle tone: \"Teacher, my group is missing one card, can it be reissued?\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Raise your right hand and wait quietly for the teacher to call your name. Do not knock on the table to interrupt.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter similar situations like \"when they feel it is unfair\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🙋 Objective and calm appeal instrument]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🙋 Objective and calm appeal instrument], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Raise your right hand and wait quietly for the teacher to call your name. Do not knock on the table to interrupt.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Raise your right hand and wait quietly for the teacher to call your name. Do not knock on the table to interrupt.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-43",
    "lessonNumber": 43,
    "legacy": false,
    "date": "2027-06-22",
    "dayOfWeek": "Tuesday",
    "festival": "Closing Ceremony and Graduation Season",
    "unit": "Unit 14: Looking Back and Celebrating Growth",
    "title": "Saying Goodbye: Preparing for a New Class",
    "code": "特社1-II-25",
    "themeColor": "#0284c7",
    "badgeEmoji": "🎓",
    "badgeLabel": "Farewell to the little seeds",
    "superSkill": "🎈 Take care, goodbye, and blessings from the website.",
    "summary": "In conjunction with the closing ceremony in June and the end of the school year, adjust to the anxiety of environmental changes: when facing peers moving up to higher levels, being divided into different classes, or graduating and parting ways, learn to look back on shared memories, write down blessing cards by hand, wish each other well, and make promises for the future.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🎒 A colorful autographed commemorative booklet and a dream balloon soaring into the sky!",
      "content": "In late June, cicadas began to sing in the treetops, signaling the annual closing ceremony. Looking at the photo wall in the classroom, He thought about how they might be assigned to different classes next year, and tears welled up in her eyes, dripping onto the desk: \"Teacher, does this mean we won't be able to be together anymore?\" The four children sat around a mat, and the teacher handed out a colorful yearbook: \"Children, being assigned to different classes isn't the end, but rather a time for everyone to grow up and explore new worlds with new wings! We should thank each other for our companionship throughout the year!\" Jun picked up a pen and drew a strong bear in He's notebook: \"He, don't cry. Even if we're not in the same class, I'll find you to play ball every day after class!\" Yu wrote, \"Thank you, Jun, for teaching me courage,\" and Jia gave everyone a painted balloon. Looking at each other's heartfelt messages, they smiled through their tears, their hearts filled with warmth and strength!",
      "question": "Is it normal to feel sad when facing grade changes or when a good friend graduates? What methods can we use to preserve beautiful memories forever?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎒 Colorful signed commemorative album and dream balloons flying into the sky!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: Is it normal for us to feel sad when faced with a grade promotion or the graduation of a good friend? How can you keep good memories forever?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎈 \"Cherish Goodbye Blessing Network\" core skills, disassemble the body movements and voice intonation in three steps, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"At the farewell party, everyone practiced reviewing common memories, writing blessings to each other in the memorial book, and bravely giving each other a hug!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Farewell Little Seed\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎈 \"Cherish Goodbye Blessing Network\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎈 Take care, goodbye, and blessings from the website.",
      "steps": [
        {
          "num": 1,
          "text": "Write the most sincere thanks and advantages for your friends in the memorial book"
        },
        {
          "num": 2,
          "text": "Look into your friend’s eyes and give them a strong smile and hug"
        },
        {
          "num": 3,
          "text": "Make a firm promise: \"Even if we are in different classes, we can still play together after class!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Saying Goodbye: Preparing for a New Class”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Knowing that He and He would be assigned to a different class next semester, he grabbed He's clothes and wouldn't let go. He cried and made a fuss and forced the teacher not to put him in a different class.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Write down many blessings neatly in the memory book, give your good friends a warm hug, and meet to play together in the corridor after class!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Look into your friend’s eyes and give them a strong smile and hug. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter situations similar to \"[Recess Ceremony and Graduation Season]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🎈 Cherish Goodbye Blessing Network]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎈 Cherish Goodbye Blessing Network], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Look into your friend’s eyes and give them a strong smile and hug. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Look into your friend’s eyes and give them a strong smile and hug. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-44",
    "lessonNumber": 44,
    "legacy": false,
    "date": "2027-06-29",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 14: Looking Back and Celebrating Growth",
    "title": "Celebrating My Progress This Term",
    "code": "特社1-II-26",
    "themeColor": "#ec4899",
    "badgeEmoji": "💮",
    "badgeLabel": "Honor Little Doctor",
    "superSkill": "🎖️ Confident growth and great glory",
    "summary": "Mastering meta-self-awareness and self-esteem construction: Reviewing three specific improvements made this academic year in emotional restraint, polite expression, and peer sharing, and confidently standing on the podium to present and receive applause and affirmation from peers.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "💮 Three big red flowers on the podium and the most dazzling confident smile!",
      "content": "In the last social skills class of the semester, a giant \"Tree of Growth\" was displayed on the blackboard in the special education classroom. The teacher gave each student three gold-edged red flower stickers: \"Today, we're going to award ourselves! Everyone, find out the three things you've improved the most this year and stick the flowers on the tree!\" Yu was the first to go up to the stage, head held high: \"My first flower is that I dare to look people in the eye and say good morning; my second flower is that I can express myself through messages; my third flower is that I've made three good friends!\" The audience erupted in applause. Next, Jun went up: \"My big red flower is that I've learned to use empathy as a brake, not to flip the table when I lose, and to stop, look, and listen when turning a corner!\" Looking at the tree full of blooming red flowers, the teacher's eyes welled up with tears: \"Each of you has grown from a shy, fragile little seed into a towering, indomitable hero!\"",
      "question": "Think about it, since the start of the semester, what things have you overcome in the classroom that you were previously afraid to do or couldn't do well? Are you proud of yourself?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💮 Three big red flowers on the podium and the most dazzling confident smile! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Think about it, from the beginning to now, what things have you overcome in the learning classroom that you didn’t dare to do or couldn’t do well before? Are you proud of yourself?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🎖️ The core skills of \"Confident Growth and Great Glory\" are divided into three steps of body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"At the semester growth results presentation meeting, four little heroes stood on the podium, loudly announced their three major improvements and received heroic cheers from their peers!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Honorable Little Doctor\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🎖️ Confident Growth and Great Glory\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🎖️ Confident growth and great glory",
      "steps": [
        {
          "num": 1,
          "text": "Take out this semester’s growth history file and look through your own progress."
        },
        {
          "num": 2,
          "text": "Place a golden badge of \"Self-Breakthrough Glory\" on your chest."
        },
        {
          "num": 3,
          "text": "Put your hands on your hips, raise your head and straighten your chest, and say to the mirror: \"Yu/Xiaojiu, you are really great!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Celebrating My Progress This Term”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "At the end of the semester, I saw my peers getting the big gold trophy, but I only had the silver medal. I was so jealous that I grabbed my peers' trophy and broke it in half.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Count down all the social superpowers you have learned this year, proudly wear three honorary red flowers on your chest, and affirm your self-transformation!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Place a golden badge of \"Self-Breakthrough Glory\" on your chest.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"Semester Achievements Acceptance\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🎖️ Confident growth and great glory]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🎖️ Confidence grows with great glory], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Place a golden badge of \"Self-Breakthrough Glory\" on your chest.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Place a golden badge of \"Self-Breakthrough Glory\" on your chest.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-45",
    "lessonNumber": 45,
    "legacy": false,
    "date": "2027-07-06",
    "dayOfWeek": "Tuesday",
    "festival": "Summer vacation begins",
    "unit": "Unit 15: Summer Routines and Community Citizenship",
    "title": "Summer Routines: Planning a Balanced Day",
    "code": "特社1-II-27",
    "themeColor": "#f97316",
    "badgeEmoji": "⏰",
    "badgeLabel": "Clock Butler",
    "superSkill": "📅 Holiday schedule manager",
    "summary": "Master self-management skills during long holidays: overcome the loss of control over life by staying up late playing video games and sleeping in late during the day, and work with teachers and parents to create a daily schedule for summer vacation (early waking up, exercise, reading, and time limits for 3C products).",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "⏰ The rooster's morning crowing and the colorful daily schedule disc!",
      "content": "During the first week of summer vacation, Jun was like a deflated balloon. He watched TV until 1 a.m. on the first day and slept until noon on the second, feeling dizzy, irritable, and even had a big argument with his mother. That afternoon, the teacher brought out a \"Colorful Daily Schedule\" during an online special education class: \"Children, summer vacation is the best opportunity to learn to 'be the master of your own time'! If your schedule is reversed, your brain will rust and become stupid!\" Jun looked at Yu's shared schedule: waking up at 8 a.m. to jump rope, doing homework at 9 a.m., riding a bicycle at 3 p.m., and going to bed at 10 p.m. Jun was very impressed and immediately drew his own \"Unbeatable Summer Vacation Schedule\" and stuck it on the refrigerator. From that day on, Jun turned off his alarm clock every morning and woke up radiant!",
      "question": "What happens to your body and brain if you play video games until midnight and sleep until noon every day during summer vacation? Why does a regular lifestyle make people happier?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "The introductory story \"⏰ The morning crow of the big rooster and the big colorful disk of work and rest!\" guides students through puppet show illustrations to become aware of emotions and interpersonal situations: What will happen to the body and brain if they play video games until midnight and sleep until noon every day during summer vacation? Why does a regular life make people happier?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"📅 The core skills of \"Holiday Housekeeper\" are divided into three steps of body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"During the holiday self-planning meeting, the four little heroes practiced formulating a one-day schedule for the summer vacation and made a self-discipline oath to their parents and teachers!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Clock Butler\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"📅 \"Holiday Work and Rest Manager\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 📅 Holiday schedule manager",
      "steps": [
        {
          "num": 1,
          "text": "Draw the morning, afternoon and evening time grids for each day on a large piece of white paper."
        },
        {
          "num": 2,
          "text": "Plan a fixed daily \"one hour of reading and one hour of outdoor exercise\""
        },
        {
          "num": 3,
          "text": "Take the initiative to turn off the TV and mobile phone at 9:30 in the evening, listen to light music and go to bed on time"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Summer Routines: Planning a Balanced Day”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "The parents reminded him that he should do his homework on time during the summer vacation. He was so angry that he grabbed the electric fan and smashed it on the ground, threatening the parents not to allow him to have a holiday.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Personally formulate the \"Golden Manual for Independent Summer Vacation Schedule\": read and exercise in the morning, explore and relax in the afternoon, and go to bed on time in the evening!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Plan a fixed daily \"one hour of reading and one hour of outdoor exercise\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[Summer Starting Line]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【📅 Holiday schedule butler]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [📅 Holiday Schedule Manager], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Plan a fixed daily \"one hour of reading and one hour of outdoor exercise\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Plan a fixed daily \"one hour of reading and one hour of outdoor exercise\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-46",
    "lessonNumber": 46,
    "legacy": false,
    "date": "2027-07-13",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 15: Summer Routines and Community Citizenship",
    "title": "Being a Good Neighbor: Manners in the Community",
    "code": "特社2-II-13",
    "themeColor": "#10b981",
    "badgeEmoji": "🏪",
    "badgeLabel": "Community Little Gentleman",
    "superSkill": "🛒 Community Courtesy King",
    "summary": "Master the routines of daily life in community public spaces: do not open unopened or unpaid items in convenience stores, take turns playing on playground equipment in community parks for five minutes in an orderly manner, do not climb dangerous walls, and maintain public cleanliness.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🏪 The five-minute secret between the convenience store at the alley entrance and the swings in the park!",
      "content": "On a hot summer afternoon, four children went to the local convenience store to enjoy the air conditioning and buy popsicles. As soon as Jun entered the store, he saw his favorite Pokémon blind boxes and excitedly tried to pry open the packaging with his fingernails to peek at the cards inside! The clerk frowned, and Yu quickly pulled Jun's arm gently: \"Jun, no! You can't open the packaging before paying, that's the store's rule!\" Jun quickly stopped, took out his change, and stood in line to pay. After buying the popsicles, they went to the park. There was only one popular swing set, the Bird's Nest. He sat on it and saw two little boys watching longingly. He proactively counted down five minutes and jumped off the swing: \"Little brothers, it's your turn!\" The parents in the park praised, \"The children in the OO special education class are so well-mannered!\"",
      "question": "What law would you break if you opened the packaging and ate something at a convenience store before paying? What should you do if you're playing a game of snatching toys in a park?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🏪 The five-minute code for alley convenience stores and park swings! ”, using puppet show illustrations to guide students to become aware of emotions and interpersonal situations: When buying something in a convenience store, what kind of law would it be against if you unpack it and eat it before you check out? What should you do when playing with stolen toys in the park?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🛒 The core skill of \"King of Public Courtesy in the Community\" is a three-step process of dismantling body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In the context of the convenience store checkout line and the community park game area, everyone practiced \"not opening products, checking out in order, and taking turns to share amusement equipment within a limited time\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and be awarded the \"Community Gentleman\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🛒 Community Public Courtesy King\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🛒 Community Courtesy King",
      "steps": [
        {
          "num": 1,
          "text": "Entering a public place in the community automatically switches to \"Public Gentleman Mode\""
        },
        {
          "num": 2,
          "text": "Handle items with both hands with care, and proactively notify compensation for damaged items."
        },
        {
          "num": 3,
          "text": "When receiving the invoice and change at the cashier, smile generously to the clerk and say thank you."
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Being a Good Neighbor: Manners in the Community”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "I wanted to eat ice cream at a convenience store. I couldn't wait for the checkout, so I tore open the package and ran around the store to eat it. The store clerk stopped me and spit on me.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "When you go into the supermarket, push the cart quietly and slowly, wait patiently in line at the checkout to say thank you, and obey the rules of taking turns in the park and playground without fighting!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Handle items with both hands with care, and proactively notify compensation for damaged items.. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in the \"community good neighbor life routine\" in the ordinary class",
      "promptWord": "Please prompt the formula: \"Start【🛒 Community Public Courtesy King]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🛒 The king of public courtesy in the community], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Handle items with both hands with care, and proactively notify compensation for damaged items.. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Handle items with both hands with care, and proactively notify compensation for damaged items.. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-47",
    "lessonNumber": 47,
    "legacy": false,
    "date": "2027-07-20",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 8: Body Autonomy and Saying No",
    "title": "Dealing with Teasing and Bullying: Leave Safely and Get Help",
    "code": "特社1-II-28",
    "themeColor": "#dc2626",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Anti-Domination Counterattack Shield",
    "superSkill": "🚨 The Three-Step Anti-Bullying Self-Protection Strategy",
    "summary": "Master self-protection strategies when facing verbal mockery and physical bullying: Do not retaliate with violence or suffer in silence and self-pity. Practice \"calm gaze and indifference → immediately go to a crowded place/to a companion → shout for help and report to an adult in detail\".",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🦁 A little lion wearing thick glasses and three naughty little devils!",
      "content": "On the edge of the summer camp playground, three older kids from another school surrounded Yu, pointing at his thick glasses and laughing: \"Four-eyed frog! You walk so clumsily!\" They even deliberately tried to trip him. Yu was terrified, his legs trembling. At that moment, Yu remembered the teacher's anti-bullying drill: \"First, don't get angry and yell back, don't cry, look at the other person's head, and calmly and firmly walk away; second, quickly walk to the teacher or your classmate!\" Yu straightened his back, didn't even glance at them, and decisively strode towards Jun and Jia, who were washing a ball. Jun immediately rushed forward to block Yu, shouting, \"Don't bully my classmate!\" Jia immediately ran to find the camp director. Seeing the other kids united and with an adult present, the three mischievous children were terrified and ran away! The director severely punished them, and Yu escaped safely!",
      "question": "When someone deliberately makes fun of you, will arguing or fighting back solve the problem? Why is \"calmly leaving, finding a friend, and reporting to an adult\" the smartest three-step approach?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦁 A little lion wearing thick glasses and three naughty little naughty boys!”, using puppet show illustrations to guide students to be aware of emotions and interpersonal situations: When someone deliberately makes fun of you, will scolding or starting a fight with them solve the problem? Why is \"leave calmly, find partners, and report to adults\" the smartest trilogy?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚨 The core skills of the \"Trilogy of Anti-Bullying and Self-Protection\" are divided into three steps: body movements and voice tone, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In a bullying situation where peers were teasing and pushing, the four little heroes practiced \"looking calmly and ignoring them, quickly walking towards their peers to form an alliance, and reporting loudly to their teachers\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"anti-tyrant counterattack shield\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚨 Anti-Bullying and Self-Protection Trilogy\" structured visual reminder cards, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚨 The Three-Step Anti-Bullying Self-Protection Strategy",
      "steps": [
        {
          "num": 1,
          "text": "Scream loudly and firmly to the bully: \"Please stop! What you're doing is against the rules!\""
        },
        {
          "num": 2,
          "text": "Turn around immediately and walk quickly to a crowded teacher's office or health center"
        },
        {
          "num": 3,
          "text": "Find a trusted mentor or special education teacher and tell the complete time, place and process"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Dealing with Teasing and Bullying: Leave Safely and Get Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Being teased with a nickname by a senior classmate, he immediately lost control, grabbed a rock and threw it into his eyes, almost causing severe blindness.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Start the trilogy of anti-bullying and self-protection: say no with firm eyes, quickly leave the dangerous scene to find peer allies, and report to the teacher immediately!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Turn around immediately and walk quickly to a crowded teacher's office or health center. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter similar situations in ordinary classes, \"What should I do if I encounter teasing and bullying?\"",
      "promptWord": "Please prompt the formula: \"Start【🚨 Anti-bullying and self-protection trilogy]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚨 Anti-bullying and self-protection trilogy], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Turn around immediately and walk quickly to a crowded teacher's office or health center. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Turn around immediately and walk quickly to a crowded teacher's office or health center. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-48",
    "lessonNumber": 48,
    "legacy": false,
    "date": "2027-07-27",
    "dayOfWeek": "Tuesday",
    "festival": "Father's Day",
    "unit": "Unit 2: Summer Celebrations and Gratitude",
    "title": "Showing Gratitude to Dad",
    "code": "特社2-II-14",
    "themeColor": "#0284c7",
    "badgeEmoji": "👔",
    "badgeLabel": "Little Filial Piety Warrior",
    "superSkill": "🏔️ A Mountain-like Journey of Love and Gratitude",
    "summary": "Combined with Father's Day on August 8, appreciate the father's love or the deep and perseverance of male elders: hand-painted tie medal cards, serve tea, beat the back, and say loudly \"Dad, I love you, thank you for protecting me like a mountain!\" to express your heart.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "👔 Those large, calloused hands and a large blue tie card!",
      "content": "Father's Day is approaching on August 8th. Jun sat in the living room looking at his father's plumbing and electrical toolbox. Jun's father worked hard every day under the scorching sun at construction sites, his hands covered in scars and thick calluses. He often fell asleep on the sofa when he got home, exhausted. But whenever Jun wanted watermelon, his father would always cut him the sweetest, biggest, middle piece. In his online special education craft class, Jun cut out a beautiful tie from blue cardboard, writing \"World's Number One Superman Dad\" on it in gold pen. On Father's Day evening, as soon as his father came home from work, Jun presented him with a cup of iced barley tea, hung the paper tie around his father's neck, and rushed into his arms: \"Dad! You've worked so hard! Happy Father's Day! Thank you for working so hard every day to support the family!\" Tears of happiness streamed down his father's dark, rugged face.",
      "question": "How do dads or elders in the family usually protect and take care of us silently like mountains? What actions can we use to say thank you to dad for your hard work?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"👔 Those big calloused hands and a big blue tie card!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: How do dads or elders in the family usually protect and take care of us silently like mountains? What actions can we use to say thank you to dad for your hard work?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🏔️ The core technique of \"Love and Gratitude Walk Like a Mountain\" is a three-step process of breaking down body movements and voice tones, and combine it with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In a warm family gathering on Father's Day, four young heroes practiced serving warm tea to their father or elders, presenting medal cards and saying love loudly!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Filial Father Little Warrior\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🏔️ \"Love and Gratitude Walk Like a Mountain\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🏔️ A Mountain-like Journey of Love and Gratitude",
      "steps": [
        {
          "num": 1,
          "text": "Observing the calluses and traces of hard work on my father’s hands, I feel grateful in my heart"
        },
        {
          "num": 2,
          "text": "Pour a cup of hot tea for your father with your own hands and hold it in front of him with both hands"
        },
        {
          "num": 3,
          "text": "Look into father's eyes and say clearly and loudly: \"Dad, you have worked hard, thank you!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Showing Gratitude to Dad”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "My father reminded himself to abide by the agreement, broke the Father's Day cake on the spot, and cursed his father for only working and ignoring him all day long.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "I personally presented a thank you card \"as great as a mountain\", gave my father a firm hug with both hands and said, \"I love you, Dad!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Pour a cup of hot tea for your father with your own hands and hold it in front of him with both hands. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a similar situation in \"[Father's Day 8/8]\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🏔️ Love and gratitude like a mountain]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🏔️ A mountain of love and gratitude], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Pour a cup of hot tea for your father with your own hands and hold it in front of him with both hands. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Pour a cup of hot tea for your father with your own hands and hold it in front of him with both hands. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-49",
    "lessonNumber": 49,
    "legacy": false,
    "date": "2027-08-03",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 10: Self-Care and Healthy Habits",
    "title": "Summer Water Safety: Staying Away from Dangerous Water",
    "code": "特社1-II-29",
    "themeColor": "#0284c7",
    "badgeEmoji": "🏊",
    "badgeLabel": "Water Drowning Prevention Officer",
    "superSkill": "🛟 Water Safety Ring",
    "summary": "Master the concepts of summer water safety and drowning prevention and self-protection: do not play in the water at streams or beaches without lifeguards, warm up before entering the water, and do not blindly dive into the water to save others if you encounter someone drowning.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🌊 A rushing stream and a lifebuoy floating on the water!",
      "content": "On a hot August day, my neighbor’s eldest brother told me to go swimming in a deep-water ravine without a lifeguard. When Jia heard that she was so excited, she grabbed her swimming trunks and wanted to follow!\n\nHe quickly ran over and grabbed Xiaojiao's backpack: \"Xiaojiao can't go!\"The teacher said that there are undercurrents and sharp rocks under the stream. You must not play in the water without a lifeguard!” The teacher also arrived immediately and reviewed with everyone the five-character secret to preventing drowning: “Scream, bark, stretch, throw, and paddle”! The teacher said seriously: \"If you see someone struggling in the water, you must not jump in to save him!\" Shout for help, call 119, or throw a long bamboo pole or floating object to him! ”Xiaojiu wiped cold sweat all over his body. Fortunately, He caught her in time, and they all agreed to go to the municipal standard swimming pool with lifeguards. They had a safe and fun time!",
      "question": "If you see a classmate or passerby falling into the water and about to sink, can you jump into the water to save them yourself? What is the first step in correct \"calling, stretching, throwing and paddling\"?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌊 A rushing stream and a lifebuoy floating on the water! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When you see a classmate or passerby falling into the water and about to sink, can you jump into the water to save them yourself? What is the first step in correct \"calling, stretching, throwing and paddling\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🛟 The core technique of \"Safe Guard Ring for Playing in Water\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"During the water safety promotion and simulated sudden falling into the water situation, everyone practiced \"strictly avoiding dangerous waters, calling adults loudly, and using bamboo poles and lifebuoys to throw to rescue\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "After completing the self-examination check-box and color worksheet, you will be awarded the \"Water Drowning Prevention Officer\" medal of honor and rewarded with classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🛟 \"Water Safety Guard Ring\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🛟 Water Safety Ring",
      "steps": [
        {
          "num": 1,
          "text": "Do full body joint warm-up exercises for ten minutes before entering the water."
        },
        {
          "num": 2,
          "text": "Strictly confirm that there are qualified lifeguards on duty in the lifesaving chairs at the scene"
        },
        {
          "num": 3,
          "text": "When encountering a drowning accident, shout for help, throw a lifebuoy or bamboo pole, and never enter the water with bare hands"
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Summer Water Safety: Staying Away from Dangerous Water”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Peers made bets on who dared to jump into the reservoir. He ignored the warning and jumped down. When he got cramps, he struggled in panic and almost drowned.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Keep in mind the ten tips to prevent drowning: only go to safe swimming pools with qualified lifeguards, do adequate warm-up exercises, wear life jackets, and do not push people around!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Strictly confirm that there are qualified lifeguards on duty in the lifesaving chairs at the scene. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter similar situations of \"summer outdoor and water play safety\" in regular classes",
      "promptWord": "Please prompt the formula: \"Start【🛟 Water safety guard ring]!”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🛟 Water safety guard ring], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Strictly confirm that there are qualified lifeguards on duty in the lifesaving chairs at the scene. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Strictly confirm that there are qualified lifeguards on duty in the lifesaving chairs at the scene. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-50",
    "lessonNumber": 50,
    "legacy": false,
    "date": "2027-08-10",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "Empathy Detectives: Noticing Other People's Feelings",
    "code": "特社1-II-30",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🕵️",
    "badgeLabel": "Mind-Reading Little Detective",
    "superSkill": "🔍 Mind reading through micro-expressions in your eyebrows",
    "summary": "Master the ability to interpret advanced non-verbal emotions: observe peers' \"eyes (widening/downcasting), eyebrows (tightening/flattening), corners of mouth (up/down), shoulders (tight/relaxed)\", accurately interpret each other's happiness, anger, sorrow, and joy, and give appropriate social responses.",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🔍 The little brow and the smile at the corner of the mouth under the magnifying glass!",
      "content": "The summer vacation is coming to an end, and an \"Emotional Micro-Expression Detective Competition\" was held in the special education classroom. The teacher showed many close-up photos of only the eyes and corners of the mouth on the projection screen.\n\nThe first photo: eyebrows furrowed into caterpillars, eyes blazing, fists clenched. Xiaojiu immediately responded: \"He is angry!\"You can't go over and make trouble with him at this time, you have to give him space to calm down!”Second photo: Shoulders hunched up, looking down at the floor, corners of mouth turned down. Yu raised his hand and said: \"He is very sad or has low self-esteem now and needs a gentle pat on the back from his friends!\" ”He and Jia also correctly guessed the expressions of shyness and surprise. The teacher praised: \"Everyone's spiritual eyes have been opened!\"As long as you know how to read other people's expression codes, you can become a master of interpersonal relationships that everyone loves!”",
      "question": "When you see a good friend frowning and not saying a word, what does it mean about his mood? What will happen if you play tricks on him at this time?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🔍 The little brow and the smile at the corner of the mouth under the magnifying glass!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When you see a good friend frowning and not saying a word, what does that mean about his mood? What will happen if you play tricks on him at this time?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🔍 The core skill of \"Brow micro-expression mind reading\" is a three-step process of dismantling body movements and voice tones, combined with the brain braking visual chart for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"In the context of peer mood interpretation, the four little heroes practiced observing the micro-expressions of their partners and providing the most appropriate care and interaction!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Mind-Reading Detective\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🔍 Eyebrow Micro-expression Mind Reading\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🔍 Mind reading through micro-expressions in your eyebrows",
      "steps": [
        {
          "num": 1,
          "text": "Eyes carefully watching peers' facial signals: whether eyebrows are furrowed, flat or raised"
        },
        {
          "num": 2,
          "text": "Observe the direction of the corners of the mouth: Is the corner of the mouth raised for a smile, or drooped for sadness?"
        },
        {
          "num": 3,
          "text": "Gently hand over a piece of tissue and say a gentle greeting: \"Do you want me to sit with you for a while?\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Empathy Detectives: Noticing Other People's Feelings”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Seeing He crying because the teacher didn't finish his homework, Xiaojiu rushed forward and pointed at He's nose and laughed: \"Shame on you crybaby!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Start micro-expression mind reading: observe the drooping corners of the mouth and red eye sockets of your peers, hand over a piece of toilet paper and ask gently: \"Are you okay?\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Observe the direction of the corners of the mouth: Is the corner of the mouth raised for a smile, or drooped for sadness?. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to the \"Empathy Detective\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🔍 Eyebrow micro-expression mind reading]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🔍 Eyebrow micro-expression mind reading], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Observe the direction of the corners of the mouth: Is the corner of the mouth raised for a smile, or drooped for sadness?. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Observe the direction of the corners of the mouth: Is the corner of the mouth raised for a smile, or drooped for sadness?. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-51",
    "lessonNumber": 51,
    "legacy": false,
    "date": "2027-08-17",
    "dayOfWeek": "Tuesday",
    "festival": "",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "Making New Friends: Starting a Conversation",
    "code": "特社1-II-31",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🪄",
    "badgeLabel": "Icebreaker Magician",
    "superSkill": "🧊 The Three-Phrase Politeness Breaking Method",
    "summary": "Master the skills to actively break the ice and make friends in unfamiliar situations: Overcome the unfamiliarity and embarrassment when facing new classmates, and master the three-step ice-breaking rule of \"smile and focus eyes → praise the other person's good things or advantages → bring up common topics or share toys\".",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🧊 Two little hedgehogs and a box of magical magnets by the playground!",
      "content": "On the freshman experience day in mid-August, many transfer students and new classmates came to the campus. Under the shade of the trees on the playground, a new classmate sat alone on a bench holding his schoolbag, looking lonely and nervous.\n\nJia pulled Yu and Xiaojiu: \"Let's go!\" Let’s go work on some ice-breaking magic! ”The four people walked forward quickly. Yu first showed a warm smile: \"Hello!\" I am Yu from OO Elementary School! \"Xiaojiao looked at the Pikachu pendant on his new classmate's school bag and praised loudly: \"Wow! Your Pikachu pendant is so handsome. Do you like Pokémon too?” The new classmate’s tense face suddenly lit up: “Yes! Charizard is my favorite! He opened the box of magnetic tablets and said, \"We just want to build a Pokémon castle. Do you want to join us in building it?\"”The new classmate happily put down his schoolbag and jumped over, and within five minutes we became good buddies who talked about everything!",
      "question": "When you see a new classmate sitting alone, what kind of courage does it take to take the initiative to go over and say hello? What are the \"Three Steps to Breaking the Ice\"?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🧊 Two little hedgehogs and a box of magical magnets by the playground! ”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: When you see a new classmate sitting alone, what courage does it take to take the initiative to go over and say hello? What are the \"Three Steps to Breaking the Ice\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🧊 The core technique of \"Three Polite Sentences to Break the Ice\" is a three-step process of dismantling body movements and voice tones, combined with brain braking visual charts for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater. \"In the situation of meeting newly transferred peers in the new semester, the four little heroes demonstrated \"looking at each other to say hello, praising each other's strengths, and issuing invitations to play together\"! ”, proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-examination check-box and color worksheet, and you will be awarded the \"Ice Breaker Magician\" medal of honor and receive classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🧊 \"Three Polite Sentences to Break the Ice\" is a structured visual reminder chart that marks eye focus points and body distances to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🧊 The Three-Phrase Politeness Breaking Method",
      "steps": [
        {
          "num": 1,
          "text": "Walk two steps in front of your new classmates and stand firm, with a warm smile on your lips"
        },
        {
          "num": 2,
          "text": "Introduce your name generously: \"Hi! Hello, I am Yu\""
        },
        {
          "num": 3,
          "text": "Sincerely looking for a common topic: \"Do you also like to play with building blocks? We can build them together!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “Making New Friends: Starting a Conversation”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When I saw my newly transferred classmate reading comics, I snatched it away and tore it in half, shouting, \"Look at me! Play with me!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Use three polite words to break the ice: \"Hi, hello! My name is Yu, what are you drawing? This drawing is so cool!\" Start friendship generously!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Introduce your name generously: \"Hi! Hello, I am Yu\". Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"Icebreaker Magic for Making New Friends\" in a regular class",
      "promptWord": "Please prompt the formula: \"Start【🧊 Three polite words to break the ice]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🧊 Three polite sentences to break the ice], very polite!”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Introduce your name generously: \"Hi! Hello, I am Yu\". Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Introduce your name generously: \"Hi! Hello, I am Yu\". Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-week-52",
    "lessonNumber": 52,
    "legacy": false,
    "date": "2027-08-24",
    "dayOfWeek": "Tuesday",
    "festival": "The new school year takes off",
    "unit": "Unit 16: Empathy and Making New Friends",
    "title": "My Courage Cape: Moving Up to a New Grade",
    "code": "特社1-II-32",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🦸",
    "badgeLabel": "The All-Powerful Superhero",
    "superSkill": "🚀 52 Weeks of All-Around Social Superpowers",
    "summary": "Review the entire fifty-two weeks of social skills and communication practice, fully integrate non-verbal language, emotional braking, I-message, rejection and self-protection, teamwork and other abilities, put on the red cloak of courage, and confidently meet the new challenges of the new grade!",
    "tags": [
      "Special education social",
      "Communication training",
      "ASD",
      "EBD",
      "LD"
    ],
    "story": {
      "title": "🦸 Put on the red cloak of courage, the four little heroes of OO face the future!",
      "content": "August 24th, the last social class for fifty-two weeks. The podium of the special education classroom was covered with a bright red carpet and surrounded by fifty-two sparkling badges and flags.\n\nThe teacher held four bright red \"little hero cloaks of courage\" in his hand: \"Fifty-two weeks, three hundred and sixty-five days.\" From little dinosaurs to little hedgehogs, you have passed the fifty-two major tests of emotional thermometer, me message, sincere apology, dragon boat cooperation, and safety and bullying prevention! Now, each of you has the invincible social superpower to protect yourself and love your friends! ”The teacher personally tied red cloaks on the four children. Yu, Jia, He, and Jia stood in a row, raised their hands in salute facing the sunshine outside the window, and swore loudly: \"We have grown up!\" We are ready for the next grade! \"That loud voice penetrated the campus and echoed in the blue sky!",
      "question": "Looking back on these fifty-two weeks, what do you think is the biggest change in yourself? After putting on the cloak of courage, what confidence and commitment do you have when entering a new grade?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦸 Put on the red cloak of courage, the four little heroes of OO face the future!”, guiding students to be aware of emotions and interpersonal situations through puppet show illustrations: Looking back on these fifty-two weeks, what do you think is the biggest change in yourself? After putting on the cloak of courage, what confidence and commitment do you have when entering a new grade?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Demonstration \"🚀 52 weeks of \"all-round social superpower\" core skills, dismantling body movements and voice intonation in three steps, combined with brain braking visual charts for skillful practice."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "Four little heroes (Yu🦁, Jun🐻, He🐼, Jia🦊) Conducted a practical drill in the character theater \"At the flag-giving ceremony at the end of the 52-week course, the four little heroes put on their cloaks of courage and solemnly swore to their teachers and the new grade!\", and became proficient in non-verbal body movements and lines."
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Complete the self-assessment check-box and color worksheet, and you will be awarded the \"Almighty Superhero\" medal of honor and classroom star tokens!"
      }
    ],
    "scaffolds": {
      "asd": "Provide \"🚀 52 Weeks of Almighty Social Powers\" structured visual reminder chart, marking eye focus and body distance to reduce anxiety in unfamiliar social situations.",
      "ld": "There is no need for cumbersome text copying. The whole process uses color picture and text circle selection, body movement drills and oral repetition as the main learning evaluation methods.",
      "ebd": "Before the drill, clearly agree on the safety boundary and token rewards. If you are emotionally excited, you are allowed to go to the calm corner to take a deep breath, and then conduct the role drill after your emotions stabilize."
    },
    "visualCard": {
      "title": "🎯 🚀 52 Weeks of All-Around Social Superpowers",
      "steps": [
        {
          "num": 1,
          "text": "Close your eyes and review all the superpowers you have learned in fifty-two weeks of the year"
        },
        {
          "num": 2,
          "text": "Hold your head high, your chest straight, your back straight, take a deep breath and feel the powerful power in your heart"
        },
        {
          "num": 3,
          "text": "Raise your right hand and swear loudly: \"I have superpowers, and I will definitely be able to meet all challenges!\""
        }
      ]
    },
    "decisionTree": {
      "prompt": "In the situation “My Courage Cape: Moving Up to a New Grade”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Faced with the more difficult subjects of advancing to the upper grades, he was so angry that he kicked over the desks and chairs and shouted: \"I just want to be a baby, I don't want to grow up!\"",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Wearing the cloak of courage accumulated over the past fifty-two weeks, we proudly took the oath of growth for the new grade: \"I have mastered a full set of social superpowers, and I am ready!\"",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "homeTask": {
      "title": "🏠 Today’s family life little superman check-in task",
      "action": "When willing and an opportunity arises, practise this with a familiar adult: Hold your head high, your chest straight, your back straight, take a deep breath and feel the powerful power in your heart. Use speech, pointing or gestures; report no opportunity too.",
      "checkText": "Family member confirmation: □ Completed (Signature: ＿＿＿＿)"
    },
    "generalization": {
      "trigger": "When students encounter a situation similar to \"[New school year take-off parade]\" in ordinary classes",
      "promptWord": "Please prompt the formula: \"Start【🚀 52 weeks of almighty social super power]! ”",
      "praise": "Publicly affirm his progress in class: \"Look, the classmate just did it [🚀 52 Weeks Almighty Social Super Power], very polite! ”"
    },
    "iepGoal": "In this lesson’s context, practise the following using speech, pointing or AAC: Hold your head high, your chest straight, your back straight, take a deep breath and feel the powerful power in your heart. Set prompts and opportunities from baseline data, and distinguish independent from supported performance. Stars do not establish mastery.",
    "regularClassTip": "At a suitable moment, prompt: Hold your head high, your chest straight, your back straight, take a deep breath and feel the powerful power in your heart. Wait for a response, demonstrate if needed, and recognise effort without public comparisons."
  },
  {
    "id": "b-idea-53",
    "lessonNumber": 53,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "Preparing for an Emergency Drill with Sensory Support",
    "code": "特自1-II-2",
    "themeColor": "#ef4444",
    "badgeEmoji": "🔕",
    "badgeLabel": "Supported Safety Practice",
    "superSkill": "Use support during a safety drill",
    "summary": "Practise use support during a safety drill using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "Use support during a safety drill",
      "content": "Before a drill, the teacher previews the possible alarm and the route using a sequence card. Yu requests ear defenders. The teacher checks that he can still receive safety instructions and arranges adult support. Everyone follows the actual drill instructions. Success is about safe movement and asking for help, not enduring discomfort.",
      "question": "What would you like to know before a drill, and how could you ask for support?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Use support during a safety drill”. What would you like to know before a drill, and how could you ask for support? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Preview the drill sequence and the route specified by the teacher → Use speech or a card to request ear defenders or adult support if uncomfortable → Follow the adult’s on-site safety instructions to the designated location"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Use support during a safety drill",
      "steps": [
        {
          "num": 1,
          "text": "Preview the drill sequence and the route specified by the teacher"
        },
        {
          "num": 2,
          "text": "Use speech or a card to request ear defenders or adult support if uncomfortable"
        },
        {
          "num": 3,
          "text": "Follow the adult’s on-site safety instructions to the designated location"
        }
      ]
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can use speech or a card to request ear defenders or adult support if uncomfortable. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Use speech or a card to request ear defenders or adult support if uncomfortable. Accept speech, pointing or gestures without public comparisons.",
    "decisionTree": {
      "prompt": "What would you like to know before a drill, and how could you ask for support?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Use speech or a card to request ear defenders or adult support if uncomfortable",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "useBrowserSpeech": true,
    "homeTask": {
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Use speech or a card to request ear defenders or adult support if uncomfortable. Report no opportunity or any support needed too."
    }
  },
  {
    "id": "b-idea-54",
    "lessonNumber": 54,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "Scratchy Labels and Sticky Clay: Explaining Sensory Needs",
    "code": "特自2-II-1",
    "themeColor": "#f97316",
    "badgeEmoji": "👕",
    "badgeLabel": "Tactile Adjustment Expert",
    "superSkill": "🧤 Tactile comfort and autonomy",
    "summary": "Children with autism often experience emotional distress due to itchy collar tags, sticky or cold textures in art clay, or other tactile discomfort. Encourage children to verbally describe their tactile discomfort and to proactively remove the tags or wear gloves to complete tasks.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🌵 A little hedgehog on the neck and colorful little gloves!",
      "content": "Today, Jia wore her new bright yellow tracksuit to school. But as soon as she entered the classroom, she kept scratching the back of her neck, her face turning bright red. Frustrated, she slammed her textbook on the desk: \"It itches! It pricks! I don't want to wear this anymore!\" The teacher came over and gently checked, finding a stiff nylon care label sewn onto the back of the collar. The teacher carefully cut off the label with small scissors and placed a soft cotton handkerchief under the collar. Later, during clay art class, the teacher even prepared a pair of thin, transparent baking gloves for Jia, who dislikes sticky textures. Jia touched her neck and smiled happily: \"The prickly little hedgehog is gone! I feel so comfortable now!\"",
      "question": "If a clothing tag or clay makes you feel very uncomfortable, will constantly getting angry or tearing the clothes help? How can you talk to the teacher to solve the problem?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌵 The little hedgehog on the neck and the colorful gloves!”, guidance through puppet show situations: If clothes tags or clay make you feel very uncomfortable, is it useful to keep losing your temper or tearing clothes? How can I tell the teacher to solve the problem?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [three-step communication method for tactile discomfort]: 1. Feel the uncomfortable feeling of itching or sticky skin; 2. Raise your hands and express gently: \"Teacher, the label on this dress is prickly\"; 3. Use small scissors to trim or put a pure cotton handkerchief on it."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Tasks for all members): In art class, clay sticks to hands, new clothes labels are itchy, four little heroes practice taking the initiative to speak out their feelings and seek auxiliary tools!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Tactile Adaptation Master\" honorary medal, complete the colorful picture and text worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Provide three visual solutions: \"cut off the label/wear inner sanitary clothing/wear gloves\".",
      "ld": "Use the children's rhyme formula \"Prick, scratch, scratch, don't get angry, ask the teacher to cut small labels\" to recite to deepen memory.",
      "ebd": "Guide to take three deep breaths before tearing clothes, and say \"My neck is thorny\" instead of throwing things."
    },
    "visualCard": {
      "title": "⭐ Three-Step Communication Method for Tactile Discomfort",
      "steps": [
        {
          "num": 1,
          "text": "Notice any itchy or sticky discomfort on the skin."
        },
        {
          "num": 2,
          "text": "Raise your hand gently and say: \"Teacher, the tag on this shirt is prickly.\""
        },
        {
          "num": 3,
          "text": "Trim with small scissors or place a pure cotton handkerchief underneath."
        }
      ]
    },
    "iepGoal": "When encountering tactile discomfort (labels, clay), the child can use spoken language or picture cards to express needs to adults without aggressive or destructive behavior, with an achievement rate of more than 80%.",
    "regularClassTip": "Parents are reminded to cut off all the back collars and side labels of their children's new school uniforms before the start of school, or to purchase seamless and skin-friendly clothing.",
    "decisionTree": {
      "prompt": "In the situation “Scratchy Labels and Sticky Clay: Explaining Sensory Needs”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When clothes feel itchy, I get so angry that I roll on the floor, tear my new sports clothes, and get angry and yell at my parents.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Raise your hands to express your feelings gently, ask the teacher to help cut off the prickly tags or wear thin gloves to pinch the clay safely!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-55",
    "lessonNumber": 55,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🍲 Noisy Places: Asking for a Quiet Recharge Break",
    "code": "特自1-II-3",
    "themeColor": "#10b981",
    "badgeEmoji": "🔋",
    "badgeLabel": "Sensory Recharge Assistant",
    "superSkill": "🔋 Three-minute recharge technique",
    "summary": "Faced with the crowds at the after-school cooperative, the smell of steamed buns, and the noisy hawking, schoolchildren are prone to multi-sensory overload. Teaching children to recognize brain shutdown warning signs involves giving a \"pause\" gesture to their peers and retreating to a quiet, well-ventilated area to recharge.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🐝 A buzzing hive of people and a breezy corridor!",
      "content": "During the long break, Yu and Jun went to the school cooperative to buy milk with their spare change. As soon as they reached the door, Yu froze—it was packed with thirty or forty students, all shouting at the top of their lungs: \"I want tea eggs! I want bread!\" The cash register beeped, steam billowed out. The various sounds and smells mingled together, like thousands of bees buzzing in Yu's head! Yu's face turned pale, and he stood rooted to the spot. Seeing Yu's blank stare, Jun immediately remembered the \"off-site recharging method\" taught in class. Jun gently pulled Yu's hand and led him to the camphor tree-lined corridor outside the cooperative: \"Yu, let's enjoy the breeze under the trees and take three deep breaths!\" In the quiet shade, with the gentle breeze, Yu's mental alarm finally subsided.",
      "question": "When you feel dizzy and nauseous in a crowded, noisy, and smelly place, how do you recharge yourself?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🐝 A buzzing hive of people and a breeze corridor! ”, guidance through puppet show situations: How should you recharge yourself when you feel dizzy and want to vomit in a place with many people, loud sounds, and strong smells?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps for Leaving the Charge]: 1. Detect overload signals such as brain buzzing and dizziness and chest tightness;2. Make a pause gesture of \"T with hands in front of chest\" to peers; 3. Retreat to a breeze corridor or a quiet corner and take a deep breath for three minutes."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Mission for all): The cooperative is bustling and hot, and the four little heroes practice identifying sensory overload and reminding each other to go to a ventilated place to recharge!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Sensory Charging Little Butler\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design portable small card \"🔋 \"Charging is paused\".When the senses are overloaded, you can show the card and go to the quiet corner to rest.",
      "ld": "Use the battery pattern (red grid is almost out of power) ➡️ Green grid (full charge) embodies personal energy status.",
      "ebd": "Practice turning around and walking towards the ventilation corridor to take a deep breath before pushing someone who is irritated and wants to push you."
    },
    "visualCard": {
      "title": "⭐ Three steps to charging off-site",
      "steps": [
        {
          "num": 1,
          "text": "Notice overload signals such as a buzzing brain, dizziness, and chest tightness."
        },
        {
          "num": 2,
          "text": "Make a \"T\" sign with both hands in front of your chest\" pause gesture to your peers."
        },
        {
          "num": 3,
          "text": "Step back into a breezy corridor or a quiet corner and take three deep breaths."
        }
      ]
    },
    "iepGoal": "When a sensory overload warning occurs in a noisy crowd situation, the patient can autonomously retreat to a quiet and safe zone within 1 minute to adjust without emotional collapse, with an achievement rate of over 85%.",
    "regularClassTip": "Allow sensory-sensitive students to avoid peak crowd periods in the cooperative, or have their peer angels assist in purchasing the necessary stationery.",
    "decisionTree": {
      "prompt": "In the situation “🍲 Noisy Places: Asking for a Quiet Recharge Break”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Screaming anxiously in the crowded and noisy crowd, pushing away the classmates around me and pushing forward.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Show the teacher the \"T-shaped pause gesture\" and retreat to the quiet corridor accompanied by someone to take a deep breath for three minutes to recharge!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-56",
    "lessonNumber": 56,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🔦 Bright Lights: Asking for Help and Adjusting the Room",
    "code": "特自2-II-2",
    "themeColor": "#eab308",
    "badgeEmoji": "🕶️",
    "badgeLabel": "Soft Light Adjustment Guardian",
    "superSkill": "🕶️ Soft Light Visual Protection Net",
    "summary": "Strong fluorescent light flickering or intense afternoon sunlight can easily cause eye strain, migraines, and irritability in autistic children. Teachers should gently and politely ask children to turn off a light or gently close the blinds to create a visually friendly environment.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "☀️ The bright reflection on the blackboard contrasts beautifully with the soft beige curtains!",
      "content": "At 2 PM, during math class, the blazing afternoon sun shone directly into the special education classroom's blackboard! The blinding white light created a large reflection on the blackboard, so bright it was difficult to open one's eyes. Jia, sitting in the first row, squinted, her brows furrowed, her eyes stinging and watering, making it impossible to see the questions. Jia wanted to slam her hand on the desk and shout, \"It's too bright! It's so annoying!\" But then she remembered the \"soft light communication method\" her teacher had taught her. Jia stood up, placed her hands flat, and politely said, \"Teacher, there's a glare from the sun on the blackboard, it's hurting my eyes. Could I please draw the beige curtains halfway?\" The teacher praised, \"Jia, that's excellent! Please go and draw the curtains!\" When the soft beige curtains were drawn, the blinding white light transformed into a warm, soft glow, making it much more comfortable for everyone to see the blackboard!",
      "question": "When the sunlight is too bright or the lighting gives you a headache, will yelling and shouting solve the problem? How can we get everyone to work together to create comfortable lighting?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"☀️ Big reflection on the blackboard and gentle beige curtains!”, guided through puppet show situations: When the sun is too dazzling or the lights give you a headache, can making a scene solve the problem? How can I invite everyone to work together to create comfortable light?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three steps of visual adjustment]: 1. Detect the strong light signal of squinting, tears or sore eyes; 2. Raise your hand and politely inform: \"Teacher, the light is too bright and reflective, can you close the curtains?\" ”; 3. Gently close the blinds or turn off the dazzling overhead lights."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): In the afternoon, the direct sunlight on the blackboard caused strong reflections. The four little heroes practiced politely expressing their needs and cooperated to adjust the lighting in the classroom!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Soft Light Adjustment Guardian\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Avoid arranging classroom seats directly facing west-facing windows or under old strobe light tubes.",
      "ld": "Attach a \"rope safety arrow and label\" next to the curtain cord to assist operation.",
      "ebd": "Guide people to focus on the specific action \"pull the curtains\" before complaining about \"being bored to death\"."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Visual Adjustment",
      "steps": [
        {
          "num": 1,
          "text": "Notice bright light signals that cause squinting, tearing, or eye strain."
        },
        {
          "num": 2,
          "text": "Raise your hand politely and ask: \"Teacher, the light is too bright and causing glare. Could you please close the curtains?\""
        },
        {
          "num": 3,
          "text": "Gently close the blinds or turn off the glaring overhead light."
        }
      ]
    },
    "iepGoal": "When faced with the interference of strong light or visual stimulation, the person can make specific environment adjustment requests (pull the curtains/turn off the lights) through spoken language without leaving the seat restlessly, with an achievement rate of more than 85%.",
    "regularClassTip": "Regularly check classroom lamps for high-frequency flickers that are difficult to detect with the naked eye, and allow sensitive students to wear sun visors or filter glasses.",
    "decisionTree": {
      "prompt": "In the situation “🔦 Bright Lights: Asking for Help and Adjusting the Room”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. He is so angry that he slams the table and throws pens, or lies on the table and refuses to read the blackboard, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🕶️ Soft light visual protection net\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-57",
    "lessonNumber": 57,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "Comfortable and Safe Self Regulation",
    "code": "特自1-II-1",
    "themeColor": "#6366f1",
    "badgeEmoji": "🧘",
    "badgeLabel": "Comfortable Self-Regulation",
    "superSkill": "Find a comfortable way to regulate",
    "summary": "Practise find a comfortable way to regulate using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "Find a comfortable way to regulate",
      "content": "Jun gently rocks while thinking. When the movement is safe and does not harm anyone, the teacher does not require him to sit completely still. He needs to move for a while and uses a break card. Everyone practises communicating needs and arranging a suitable space.",
      "question": "Which way helps you feel comfortable, and how could you ask for support?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Find a comfortable way to regulate”. Which way helps you feel comfortable, and how could you ask for support? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Notice body sensations and current needs → Keep movements that do not harm yourself or others, or choose a suitable object or break → Tell the teacher when you need space, movement or support"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Find a comfortable way to regulate",
      "steps": [
        {
          "num": 1,
          "text": "Notice body sensations and current needs"
        },
        {
          "num": 2,
          "text": "Keep movements that do not harm yourself or others, or choose a suitable object or break"
        },
        {
          "num": 3,
          "text": "Tell the teacher when you need space, movement or support"
        }
      ]
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can keep movements that do not harm yourself or others, or choose a suitable object or break. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Keep movements that do not harm yourself or others, or choose a suitable object or break. Accept speech, pointing or gestures without public comparisons.",
    "decisionTree": {
      "prompt": "Which way helps you feel comfortable, and how could you ask for support?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Keep movements that do not harm yourself or others, or choose a suitable object or break",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "useBrowserSpeech": true,
    "homeTask": {
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Keep movements that do not harm yourself or others, or choose a suitable object or break. Report no opportunity or any support needed too."
    }
  },
  {
    "id": "b-idea-58",
    "lessonNumber": 58,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🦷 Health Checkups: Preparing for New People and Equipment",
    "code": "特自2-II-3",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🩺",
    "badgeLabel": "Health Check Little Warriors",
    "superSkill": "🩺 White Coat Health Check Reassurance Mantra",
    "summary": "Special education students often resist and scream when faced with metal mouth mirrors, vision hoods, and white-coated medical staff during school health checks due to the unknown and fear of touch. Through role-playing scenarios to see the examination steps, coupled with the \"Big Mouth Ah~ Three Seconds\" exercise, they can overcome their fear of medical procedures.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🐊 A baby crocodile with its mouth wide open and a magical little silver mirror!",
      "content": "Today, the activity center set up rows of health check stations, with dentists in white coats holding long, thin, shiny metal mirrors. When it was the special education class's turn to line up, He was so frightened by the metal instruments that tears streamed down his face. He covered his mouth tightly with his hands and hid behind the teacher, refusing to sit in the swivel chair. The teacher took out a small crocodile doll and demonstrated with a smile: \"He, look, the little crocodile is going to look in the mirror to check its teeth! Open your mouth wide and say: Ah—one, two, three!\" The dentist gently squatted down and lightly touched the back of He's hand with the round metal mirror: \"Look, this is just a small flashlight mirror to illuminate the teeth. It's cool and doesn't hurt at all!\" He touched the back of his hand, took a deep breath, sat in the chair, and boldly opened his mouth, saying: \"Ah—!\" The dentist praised: \"Such clean teeth! It only took three seconds!\" He happily received a brave sticker!",
      "question": "If you keep your mouth tightly shut and cry during a health check, will the doctor still be able to examine you? What can you do to make yourself brave when you're scared?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🐊 The little crocodile opens its mouth and the magical little silver mirror! ”, guidance through puppet show situations: If you keep your mouth closed and cry during a health check-up, can the doctor help you check it up? What can you do to make yourself brave when you feel scared?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Brave Steps for Dental Examination]: 1. Sit on the swivel chair, take a deep breath and relax your shoulders; 2. Lean your head back on the pillow, open your mouth in a big circle and say \"ah~\"; 3. Count to three in your mind: one, two, three, complete the examination quickly and receive the sticker."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): While queuing up for a regular health checkup on campus, the four little heroes practice opening their mouths with the dentist uncle and defeating their fear!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Little Warrior of Health Examination\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "A \"Visual Picture Book of Four Steps of Health Examination\" is provided three days in advance, clearly indicating the examination tools and time for each level.",
      "ld": "Use the mantra \"open your mouth wide, count to one, two, three, and take the sticker home\" to simplify process memory.",
      "ebd": "It is allowed to hold a familiar comfort doll or parent photo in your hand during the examination to increase the sense of security."
    },
    "visualCard": {
      "title": "⭐ Three Brave Steps to a Dental Checkup",
      "steps": [
        {
          "num": 1,
          "text": "Sit in the swivel chair, take a deep breath and relax your shoulders."
        },
        {
          "num": 2,
          "text": "She leaned her head back on the pillow, opened her mouth wide, and said, \"Ah~\"."
        },
        {
          "num": 3,
          "text": "Count to three in your mind: one, two, three, and quickly complete the check to collect the sticker."
        }
      ]
    },
    "iepGoal": "During the school health examination (dental, vision, height, etc.), the child can be accompanied by an adult and cooperate with the instructions of the medical staff to complete the examination items without aggression or strong resistance, and the achievement rate is more than 85%.",
    "regularClassTip": "Before the school health examination, special education children can be given priority or arranged to be examined during a period with less crowds to reduce the anxiety of waiting in line.",
    "decisionTree": {
      "prompt": "In the situation “🦷 Health Checkups: Preparing for New People and Equipment”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, crying and biting the doctor's finger or kicking over the medical equipment tray, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🩺 \"White Robe Health Check-up Reassuring Mantra\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-59",
    "lessonNumber": 59,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Special Topic 1: Sensory Regulation and Sensory Adaptation",
    "title": "🌧️ Rainy-Day PE: Stretching Indoors",
    "code": "特自1-II-4",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🌧️",
    "badgeLabel": "Rainy Day Vitality Stretch Officer",
    "superSkill": "🧘 Chair Core Stretch",
    "summary": "The long-awaited physical education class on the playground was forced to be moved indoors due to torrential rain. Hyperactive and emotionally unstable students often became agitated and ran away because their kinetic energy could not be released. The students were taught to use chair squats, stretching exercises, and resistance bands in the classroom to regulate their proprioception and stabilize their physical and mental energy.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "☔ A large puddle on the playground and a small gymnastics routine in the classroom!",
      "content": "The fourth period was everyone's most anticipated PE class. Everyone changed into their sneakers, ready to go to the playground to play soccer! Suddenly, thunder rumbled, followed by a torrential downpour, turning the playground into a muddy mess of puddles. The PE teacher walked into the classroom and announced, \"It's raining too hard today, so we'll study in the classroom and watch a soccer game video instead.\" Hearing that they couldn't go to the playground, Jun angrily kicked over his chair: \"Damn this awful rain! I've been preparing to play soccer all week, I don't care, I want to go outside and run!\" He was as angry as a popcorn about to explode. The teacher came over, righted the chair, and said with a smile, \"If we can't run on the playground, then we'll have an 'Indoor Spy Stretching Challenge' in the classroom!\" The teacher led everyone in \"chair-suspended squats,\" \"wall push-ups,\" and \"turtle-like static core exercises.\" After ten minutes, Jun was working up a good sweat, and all his frustration had vanished: \"Wow! Wall push-ups and squats are even more fun than playing soccer!\"",
      "question": "When it's raining heavily and we can't run on the playground, can kicking over a classroom chair stop the rain? What indoor activities can we use our strength in the right way?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"☔ The big puddle on the playground and the small gymnastics in the classroom! \", guidance through puppet show situations: When it rains heavily and you can't go for a run on the playground, can kicking over the classroom chairs make the rain stop? What moves can you do indoors to use your strength in the right place?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Tips for Indoor Stretching on Rainy Days]: 1. Accept the natural limitations of rainy weather, take a deep breath and tell yourself: \"It doesn't matter, indoors are fun too\";2. Push the solid wall with both hands, slightly bend your elbows for ten seconds to release the pressure on your brain; 3. Do five chair squats with your feet on the ground to give your muscles a comfortable sense of movement."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Heavy rain caused physical education classes to be rescheduled to the classroom. The four little heroes practiced restraining their bad tempers and collaborated on indoor core stretching!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Rainy Day Vitality Officer\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "On rainy days, change the blackboard class schedule label to \"Indoor Physical Fitness\" in advance to reduce the sense of loss of control due to sudden changes.",
      "ld": "Draw the actions of \"Push the wall/Chair Squat/Towel Stretch\" into a large picture card and paste it on the blackboard.",
      "ebd": "Provide high-resistance elastic bands or medicine ball push and push music to release intense emotions through the proprioception of heavy resistance."
    },
    "visualCard": {
      "title": "⭐ Three indoor stretching moves for rainy days",
      "steps": [
        {
          "num": 1,
          "text": "Accept the natural limitations of rainy weather, take a deep breath and tell yourself: \"It's okay, it's fun indoors too.\""
        },
        {
          "num": 2,
          "text": "Push firmly against a solid wall with both hands, elbows slightly bent, for ten seconds to release mental stress"
        },
        {
          "num": 3,
          "text": "Perform five chair squats with both feet on the ground to give your muscles a comfortable workout."
        }
      ]
    },
    "iepGoal": "When outdoor activities are canceled due to weather and are moved indoors, they can cooperate with indoor alternative physical stretching for 15 minutes without damaging public property or rushing out of the classroom. The achievement rate is above 85%.",
    "regularClassTip": "After class on rainy days, ordinary classes can plan a \"static stretching area\" or an \"indoor board game corner\" in the classroom to avoid slipping due to chasing in the corridor.",
    "decisionTree": {
      "prompt": "In the situation “🌧️ Rainy-Day PE: Stretching Indoors”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. He yells and runs in the rain in the corridor, slips and falls, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🧘 Chair Core Stretch\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-60",
    "lessonNumber": 60,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🦖 Sharing My Favorite Topic: Taking Turns in Conversation",
    "code": "特溝1-II-1",
    "themeColor": "#3b82f6",
    "badgeEmoji": "🎾",
    "badgeLabel": "Chatting Masters (Throwing and Catching Balls)",
    "superSkill": "🎾 Two-way conversational ball throwing and catching",
    "summary": "Autistic children often launch into lengthy monologues about specific interests (dinosaurs, bus routes, Pokémon), ignoring their peers who are already lost in thought or wanting to leave. Teach them to use the \"three-sentence pause\" technique and proactively throw the conversation back to them: \"So, what do you like?\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "⚾ The baseball flying non-stop and the ball being passed back and forth!",
      "content": "Ten minutes into the break, Yu grabbed Jun and excitedly launched into a rapid-fire lecture: \"Did you know that Charizard has two Mega Evolutions? The X-type is Dragon and Fire, with incredibly high attack power... and Mewtwo's gene arrangement...\" Yu talked for eight minutes straight without stopping, gesturing excitedly with his hands. Standing opposite him, Jun's eyes were already drifting towards the playground, his feet involuntarily taking steps backward, muttering, \"Yu, I need to go to the bathroom...\" But Yu didn't hear him at all, continuing his endless chatter. Just then, Jia gently patted Yu's shoulder and handed him a tennis ball: \"Yu, chatting is like passing a ball. If you keep throwing and not letting others catch, their arms will get sore!\" Yu paused, seeing Jun's anxious look, and quickly slammed on the brakes: \"Ah! Sorry, Jun, I talked too much! What's your favorite game? You throw the ball!\" Jun smiled: \"I like dodgeball, let's go after school!\"",
      "question": "When you keep talking about your favorite things and don't let anyone else speak, how will the other person feel? How can we create a \"give and take\" atmosphere in conversation?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"⚾ The baseball is flying non-stop and the ball is passing and catching! ”, guided through the puppet show situation: When you keep talking about your favorite things and don’t let others talk at all, how will the other person feel? What should we do when chatting so that we can “come and go”?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps to Toss and Ball in Dialogue]: 1. Realize that you have said three sentences in a row, and immediately apply the brakes in your brain; 2. See if the other person is looking at you, or is already looking around and wanting to go away; 3. Throw the dialogue ball to the other person: \"What about you?\"What is your favorite?’ and listen attentively."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Share your favorite toys or cartoons after class, and the four little heroes practice restrained monologues, ask each other questions and listen!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Master of Throwing, Catching and Chatting\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Set specific rules \"After you speak three sentences, you must ask the other person what they think (what about you?)\" and observe whether the other person is looking at you.",
      "ld": "Utilize physical tennis props to pass between two people, whoever has the ball speaks.",
      "ebd": "When peers show boredom or want to leave, practice accepting \"other people have different interests\" and not get angry or angry."
    },
    "visualCard": {
      "title": "⭐ Three steps to conversational ball toss and catch",
      "steps": [
        {
          "num": 1,
          "text": "Realizing he had already uttered three sentences in a row, he immediately put the brakes on his brain."
        },
        {
          "num": 2,
          "text": "Observe whether the other person's eyes are looking at you, or if they are already looking around and trying to leave."
        },
        {
          "num": 3,
          "text": "Throw the conversation ball to the other person: \"And what about you? What do you like best?\" And listen attentively."
        }
      ]
    },
    "iepGoal": "In a free dialogue situation, be able to restrain continuous monologues and actively ask open-ended questions to guide peers to speak within 3 sentences, with an achievement rate of more than 80%.",
    "regularClassTip": "A timing hourglass can be given during group chats in ordinary classes (each person takes a turn for 1 minute) to help autistic students visualize the length of their speeches.",
    "decisionTree": {
      "prompt": "In the situation “🦖 Sharing My Favorite Topic: Taking Turns in Conversation”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "He caught a classmate and lectured about Pokémon moves for ten minutes. When the classmate wanted to leave, he held on to his clothes to prevent him from leaving.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "After speaking three sentences, he immediately put on the brakes in his brain and threw the topic ball to the other party: \"What about you?\"what do you like?”",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-61",
    "lessonNumber": 61,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🤐 Honest and Kind: Thinking Before Speaking",
    "code": "特溝2-II-2",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "🧠",
    "badgeLabel": "Guardian of Thoughtful Communication",
    "superSkill": "🧠 Filtered Gum for Words",
    "summary": "Special education children often suffer from interpersonal disasters due to their blunt cognition, saying \"your new hair style is ugly\" or \"your lunch box smells so bad\" in public. Guide school children to establish a \"thinking filter\", distinguish between \"objective facts\" and \"hurtful comments\", and learn to chew their brains three times before speaking.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🍋 Tart lemon candy and sweet marshmallows!",
      "content": "He got a new haircut today, with short bangs. She walked into the classroom a little shyly. As soon as Xiaozuo saw it, he immediately pointed at He's head and laughed loudly and shouted: \"Hahaha!\"He, your head looks like it has been chewed by a dog. It’s so ugly!\"When He heard this, his whole face turned pale instantly, tears welled up in his eyes, and he lay on the table with his head down and cried.\n\nThe teacher came over and gently invited Jia to the side: \"Xiaojiu, your words are like a sour lemon piercing He's heart.\" Even if you think your hairstyle is different, calling someone \"so ugly\" in public will make them very sad. ” The teacher taught everyone the formula for chewing “brain filter gum”: “Is this sentence true? Is it necessary to say this? Does it make you sad to hear this? \"Xiaojiu looked at the sobbing He and felt very guilty. He stepped forward and bowed sincerely: \"He, I'm sorry, I shouldn't have laughed at your hair. It looks refreshing if you cut it short. Please forgive me! ”",
      "question": "When you see a classmate wearing new clothes or having a new haircut, if you just shout \"so ugly\", how will the other person feel? What trouble can you avoid by chewing three times in your brain before you want to speak?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🍋 Sour lemon candies and sweet marshmallows! ”, guidance through puppet show situations: When you see your classmates wearing new clothes or cutting new hair, if you directly shout “so ugly”, how will the other person feel? What trouble can you avoid by chewing three times in your brain before you want to speak?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three times of brain chewing filtering method]: 1. Detect the urge to blurt out comments about the appearance, lunch or clothing of peers; 2. Chew gum three times in your mind and ask yourself: \"Does this sentence make you want to cry?\"”; 3. Take the hurtful thorn back into your belly and replace it with praise or keep polite and quiet."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): A classmate has changed to new glasses or a new hairstyle, and the four little heroes practice activating the speech filter to avoid saying hurtful words!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Considerate and Speaking Guardian Officer\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Show the \"traffic light filter list\": red light (hurtful appearance evaluation), no speaking, yellow light (personal feelings), whisper in private, green light (praise and gratitude), speak loudly.",
      "ld": "Use the image of \"a lotus flower spits out of your mouth to speak good words, and a poisonous snake spits out of your mouth to speak bad words\" to metaphorize the consequences of speaking.",
      "ebd": "Practice pressing your tongue against the roof of your mouth for three seconds to force your brain to calm down before you laugh or blurt it out."
    },
    "visualCard": {
      "title": "⭐ Brain Chew Three Times Filtering Method",
      "steps": [
        {
          "num": 1,
          "text": "Perceived urge to blurt out comments about peers' appearance, lunch, or clothing"
        },
        {
          "num": 2,
          "text": "Chew the gum three times in your mind and ask yourself: \"Does this sentence make you want to cry?\"”"
        },
        {
          "num": 3,
          "text": "Take the hurtful thorn back into your belly and replace it with praise or keep polite and quiet"
        }
      ]
    },
    "iepGoal": "When faced with peers' appearance, works or personal characteristics, they can restrain themselves from making inappropriate direct comments, use neutral or positive language to interact, and do not make fun of them in public. The achievement rate is above 85%.",
    "regularClassTip": "Regular class tutors should establish the routine of \"zero appearance teasing in class\" to guide children to see the uniqueness and dignity of each person.",
    "decisionTree": {
      "prompt": "In the situation “🤐 Honest and Kind: Thinking Before Speaking”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. He points at his classmates in public and laughs, \"It's so ugly and got eaten by a dog.\"This causes confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🧠 Word Filter Chewing Gum\", follow the action steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-62",
    "lessonNumber": 62,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🎭 Joking or Teasing? Listening for Tone and Intent",
    "code": "特溝1-II-2",
    "themeColor": "#059669",
    "badgeEmoji": "🔍",
    "badgeLabel": "Mind Decoding Detective",
    "superSkill": "🔍 Voice and Tone Decoding Mirror",
    "summary": "Autistic schoolchildren are often unable to recognize irony, joking or ridicule in the tone of voice, and are prone to take a friend's well-intentioned jokes as an attack and punch them, or take malicious ridicule seriously. Teach people how to recognize good-natured jokes by \"smiling at the corner of the mouth/gentle eyes/close to the body\".",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🎭 Crooked smile and gentle eyes!",
      "content": "When playing volleyball after class, Yu accidentally missed the ball while serving, and the ball rolled gently to Jia's feet. Jia picked up the ball and said with a smile, \"Wow!\" Yu, your ball hits a home run, fly to the moon! ” Several classmates around him started laughing.\n\nYu's face turned red, and he clenched his fists tightly, shouting: \"Why are you laughing at me!\"Are you laughing at my stupidity?\"Raise your hands to grab the ball.\"The teacher came over and gently held Yu's shoulders: \"Yu, wait!\"Please look at Jia's eyes - is she smiling and looking at you tenderly, or is she looking at you sideways? Did she hide the ball from you, or did she hand it to you with both hands?\"Yu was stunned for a moment and saw Jia holding the ball in both hands with friendly eyes. Jia quickly said, \"I'm sorry, Yu. I was just joking. I'm not saying you are stupid. You are really strong!\" \"Yu unclenched his fist: \"So you were playing with me, I thought you were scolding me...\"",
      "question": "When someone says something to you and laughs, how do you tell whether he is having fun with you or laughing at you maliciously?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎭 Crooked smile and gentle eyes!”, guided by the puppet show situation: When someone says something to you and laughs, how can you tell whether he is having fun with you, or whether he is laughing at you maliciously?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three steps to decode the mind]: 1. Notice the anger that hardens the fist, and stop for three seconds; 2. Observe the other person’s eyes (gentle gaze) and corners of the mouth (friendly smile); 3. When unsure, ask directly: \"Are you kidding me?\"”."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): A humorous joke from a peer on the court caused a misunderstanding. The four little heroes practiced identifying intonation clues and clearly clarifying their intentions!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Mind Decoding Detective\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Provide a \"good-natured joking vs. malicious teasing\" comparison checklist: good-natured (eye gaze, sharing toys, relaxed expression); malicious (rolling eyes, pushing, calling ugly nicknames).",
      "ld": "Use puppetry to perform two different intonations (gentle and brisk vs. harsh), so that school children can identify the difference with their ears.",
      "ebd": "Before you get angry and take action, ask the other person: \"Are you kidding me, or are you serious?\"” Clarify the intention."
    },
    "visualCard": {
      "title": "⭐ Three steps of mind decoding",
      "steps": [
        {
          "num": 1,
          "text": "When you notice the anger that hardens your fist, stop for three seconds."
        },
        {
          "num": 2,
          "text": "Observe the other person’s eyes (gentle gaze) and corners of the mouth (friendly smile)"
        },
        {
          "num": 3,
          "text": "When unsure, ask directly: \"Are you kidding me?\"”"
        }
      ]
    },
    "iepGoal": "When peers engage in verbal humor or joking, they can observe non-verbal clues (expressions, eyes) and correctly interpret intentions without misjudgment of aggressive behavior. The achievement rate is above 85%.",
    "regularClassTip": "Students in regular classes are reminded to keep their spoken language as direct and clear as possible when interacting with children with autism, and avoid excessive metaphors or irony.",
    "decisionTree": {
      "prompt": "In the situation “🎭 Joking or Teasing? Listening for Tone and Intent”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control and punches people and grabs the ball regardless of the situation, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🔍 Voice and Intonation Decoding Mirror\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-63",
    "lessonNumber": 63,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "📱 Respecting Privacy: Ask Before Looking",
    "code": "特社2-II-2",
    "themeColor": "#e11d48",
    "badgeEmoji": "🔒",
    "badgeLabel": "Guardian of Personal Privacy",
    "superSkill": "🔒 Privacy Boundary Security Lock",
    "summary": "Special education children often unzip their peers' schoolbags and read the red letters in their contact books or diaries at will due to their strong curiosity or lack of concept of property rights and privacy boundaries, causing strong resentment among their peers. Guide school children to establish safe boundaries where \"other people's personal belongings will never be touched\".",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🎒 The tightly closed zipper and the little fox’s secret notes!",
      "content": "After class, Jia went to the bathroom. Her pink schoolbag was placed on the chair. The zipper was slightly opened, revealing a beautiful secret diary with a golden unicorn on the cover. When Xiaoji passed by, he became very curious and thought to himself: \"Wow!\" It's a unicorn diary. I wonder what interesting things are written in it? ”\n\nXiaojiu couldn't help but reached out and unzipped the zipper, took out the diary and flipped through it. At this time, Jia walked into the classroom and saw that her diary was opened. She was so angry that she burst into tears. She screamed and rushed forward and pushed Jia away: \"Why are you peeking at my things!\" Thief! What a nuisance! \"The teacher came over seriously: \"Xiaojiu, your schoolbag and diary are everyone's private castle. Opening other people's schoolbags or looking through diaries without permission is a very disrespectful and intrusive act! \"When Jia saw Jia crying so sadly, she lowered her head in shame. She put the diary back into her school bag and zipped it up with both hands: \"I'm sorry, Jia, I'm too curious. I promise never to rummage through other people's things again!\"”",
      "question": "When you really want to see something interesting in your classmate’s schoolbag, can you just take it out and look through it? Why is respecting other people’s privacy the most important boundary in making friends?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎒 The tightly closed zipper and the little fox’s secret notes!”, guidance through puppet show situations: When you really want to see something interesting in your classmate’s schoolbag, can you just take it out and look through it? Why is respecting other people’s privacy the most important boundary in making friends?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Improper Principles of Privacy Boundary]: 1. Do not unzip other people's schoolbags or drawers casually;2. Do not look through other people's contact book comments and personal diaries; 3. When you are curious and want to borrow a book, you must first look into the other person's eyes and say: \"Can I see it?\" ”."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Seeing the beautiful notebooks exposed in their peers’ schoolbags, the four little heroes practice activating the privacy lock to restrain their desire to pry!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Guardian Saint of Personal Privacy\" medal of honor, complete the color graphic worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Establish clear property rights rules: \"schoolbags, pencil cases, contact books, pockets = private castles, I can't touch them unless you ask me to borrow them.\"",
      "ld": "Hang a \"personal name tag\" on the bag handle of each student in the class to strengthen the awareness of ownership.",
      "ebd": "Transform curiosity into a positive spoken request: \"Your notebook is so beautiful. Can you lend it to me to see the cover after class?\""
    },
    "visualCard": {
      "title": "⭐ Three principles of privacy boundary",
      "steps": [
        {
          "num": 1,
          "text": "Do not open other people's bag zippers or drawers casually"
        },
        {
          "num": 2,
          "text": "Do not read other people’s contact book comments and personal diaries"
        },
        {
          "num": 3,
          "text": "When you are curious and want to borrow something, you must first look into the other person's eyes and say, \"Can I see it?\"”"
        }
      ]
    },
    "iepGoal": "Do not turn over, pry into, or take your peers’ personal belongings (schoolbags, drawers, contact books) without permission, and the achievement rate is over 90%.",
    "regularClassTip": "Students in regular classes and special education classes should be taught to guard their personal space in the classroom, and it is strictly forbidden to peek into other people's mobile phones or private letters without consent.",
    "decisionTree": {
      "prompt": "In the situation “📱 Respecting Privacy: Ask Before Looking”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control. He secretly unzips his school bag and reads his private diary while his classmates are away, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🔒 Privacy Boundary Security Lock\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-64",
    "lessonNumber": 64,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "🤫 Noticing the Setting and Communicating a Need for a Break or Quiet Self Regulation",
    "code": "特自2-II-4",
    "themeColor": "#0284c7",
    "badgeEmoji": "🌫️",
    "badgeLabel": "Air Quality Expert",
    "superSkill": "🌫️ Classroom Weather Barometer",
    "summary": "During a quiet reading period or rest time, a learner may use sounds or repeated speech to regulate. Preview the setting and offer ways to communicate a need for movement, a quieter activity or a break.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "📺 The big TV in your mouth and the quiet lunch break bell!",
      "content": "At 12:30 noon, the soft lunch break bell rang on the campus. The whole class lay down on the table and closed their eyes to sleep. The whole classroom was so quiet that you could hear a pin drop. Yu was lying on the table, but his head was like a movie projector, constantly replaying the Superman cartoon he watched last night!\n\nYu couldn't help but make a sharp dubbing sound with his mouth: \"Boom——!\"Light wave emission! pound! pound! Defeat the bad guys!\"The classmates lying next to them were woken up one by one, holding their heads in annoyance: \"Yu is so noisy! Do you want to sleep or not?\"The teacher walked gently to Yu, took out a \"Quiet Kitty Lying Card\" and placed it on the corner of the table: \"Yu, look up and look around - what is the color of the air in the class now? Everyone is closing their eyes to rest. At this time, we have to turn off the big TV in our mouths and switch to brain silent mode to think about Superman!\"When Yu saw everyone's tired faces, he quickly shut his mouth. He closed his eyes and watched Superman quietly in his head, and everyone fell asleep comfortably!",
      "question": "When people nearby are resting or reading, what can you notice about the setting and how could you ask for support?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"📺 The noisy television and the quiet lunch break: Use a short scene to discuss what people nearby are doing and how to request a quieter way to regulate."
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Understanding the Air Trilogy]: 1. Look up and look around the class: Are everyone talking lively, or quietly reading with their heads down?; 2. If it is a quiet atmosphere, close the invisible zipper on your mouth; 3. When you miss the lines, recite them silently in your brain without making any spoken sounds."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): In quiet situations during lunch break and self-study, the four little heroes practice identifying the group atmosphere and switching to brain silent mode!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Master of Understanding the Air\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design visual situation reminder lights: green light (free chat), yellow light (soft discussion), red light (absolute silence), and stick it in the center of the blackboard.",
      "ld": "Formula with actions: \"Look at the whole class with your eyes, zip your mouth, and keep your brain quiet.\"",
      "ebd": "Provide chewing gum or oral pressure relief teaching aids to meet the needs of oral movements without making noise."
    },
    "visualCard": {
      "title": "⭐ Understand the Air Trilogy",
      "steps": [
        {
          "num": 1,
          "text": "He raised his head and looked around the class: Are everyone talking lively, or are they quietly reading with their heads down?"
        },
        {
          "num": 2,
          "text": "If it's a quiet atmosphere, zip up your mouth."
        },
        {
          "num": 3,
          "text": "When you miss your lines, recite them silently in your brain without making any spoken sounds."
        }
      ]
    },
    "iepGoal": "In situations where quiet is required in class (lunch breaks, silent reading, individual tests), students can restrain themselves from talking to themselves and making strange noises for more than 25 minutes, and do not engage in behaviors that disturb the peace of peers. The achievement rate is more than 85%.",
    "regularClassTip": "Low-decibel white noise (such as the sound of waves and rain) can be played during lunch break to help children with sensitive hearing block subtle environmental interference.",
    "decisionTree": {
      "prompt": "In the situation “🤫 Noticing the Setting and Communicating a Need for a Break or Quiet Self Regulation”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain goes out of control and he imitates Superman's dubbing loudly during lunch break to wake up the whole class, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🌫️ Class Air Barometer\", follow the steps to properly deal with it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    },
    "useBrowserSpeech": true
  },
  {
    "id": "b-idea-65",
    "lessonNumber": 65,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "👂 Showing I Am Listening: Attention and Body Language",
    "code": "特溝1-II-3",
    "themeColor": "#10b981",
    "badgeEmoji": "🙆",
    "badgeLabel": "Big Ears Listening Ambassador",
    "superSkill": "🙆 The art of sincere listening and nodding.",
    "summary": "Special education students often turn their backs to others and fidget with their hands while listening to them, making it seem as if they are not listening at all. We teach them the \"Three Treasures of Listening to Body Language\": lean slightly forward, look at the other person's forehead, and nod gently after understanding each sentence.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🗿 A wooden figure and a nodding sunflower!",
      "content": "Today, Jia excitedly shared with He the funny story she had about seeing five ducklings in the park yesterday: \"He, look! The mother duck is leading her ducklings swimming in the water, and the last duckling almost slipped! It's so cute!\" Although He didn't speak, her body was turned sideways to Jia, her eyes fixed on the eraser in her hand, motionless like a cold wooden statue. As Jia spoke, her voice grew softer and softer, and finally she lowered her head in frustration: \"He, you weren't listening to me at all, were you? I'm so bored...\" He hurriedly raised her head: \"Yes! I was listening! You said five ducklings!\" The teacher smiled and said: \"He, your ears are listening, but your body is asleep! When others are speaking, our bodies should be like a sunflower, facing the sun, with our face towards the speaker. After understanding each sentence, nod slightly and say 'Yes! Really!', so that the other person can see your sincerity!\" He immediately turned to look at Jia and nodded: \"Jia, continue, did the duckling catch up with its mother later?\" Jia's eyes lit up immediately!",
      "question": "If a classmate keeps looking down at something and ignoring you while you're talking, would you want to continue talking to them? How can you use actions to let the other person know you're listening attentively?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🗿 Wooden figure and little nodding sunflower! \", guidance through puppet show situations: If your classmate keeps playing with things and ignoring you while talking to you, would you want to continue talking to him? How do you use your actions to let the other person know that you are listening attentively?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Model ways to listen: turn toward the speaker or a shared object, attend in a comfortable way, and use a nod or another response to show understanding."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Partners share their wonderful life experiences, and the four little heroes practice activating their body language to show sincere listening!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Big Ears Listening Ambassador\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Use the \"body turn + eyebrow gaze + three micro nods\" step card to internalize implicit listening into explicit body movements.",
      "ld": "Matching feedback formula: \"Wow! Then what? Really! ”Enrich the interactive language of listening.",
      "ebd": "Practice refraining from interruptions and interruptions, and maintain a listening position with your hands flat on your knees for 1 minute."
    },
    "visualCard": {
      "title": "⭐ Listen to your body's three treasures",
      "steps": [
        {
          "num": 1,
          "text": "Turn your chair or shoulder so that your body is facing the student who is speaking."
        },
        {
          "num": 2,
          "text": "Attend to the speaker or a shared object in a comfortable way"
        },
        {
          "num": 3,
          "text": "Each time I understood a passage, I nodded slightly downwards and smiled."
        }
      ]
    },
    "iepGoal": "When listening to a peer's individual speech for 1 minute, be able to maintain the body facing the other person and have a listening response of nodding or directional gaze, without turning away or ineffective distraction, and the achievement rate is above 85%.",
    "regularClassTip": "The \"Best Audience Award\" can be set up when the general class reports in groups, specifically to praise the group members who can use body language to affirm the speaker.",
    "decisionTree": {
      "prompt": "In the situation “👂 Showing I Am Listening: Attention and Body Language”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, the body turns away from the classmates, the head is lowered and the face is expressionless while playing with the eraser, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🙆 \"True Listening and Nodding Technique\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-66",
    "lessonNumber": 66,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 2: Pragmatic Communication and Implicit Social Codes",
    "title": "❓ When a Long Instruction Is Unclear - Ask the Teacher to Repeat the Second Step",
    "code": "特溝2-II-3",
    "themeColor": "#f59e0b",
    "badgeEmoji": "❓",
    "badgeLabel": "Dare to Ask the Little Scholar",
    "superSkill": "✋ Step-by-step confirmation card",
    "summary": "Faced with multiple instructions from the teacher, such as \"Take out the blue notebook, turn to page 25, write the third question, and hand it in to the group leader,\" children with learning disabilities and autism often freeze up due to insufficient working memory. The teachers encourage students to raise their hands and ask to repeat the specified steps.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🌪️ A long strip of paper flies away and a brave little hand is raised!",
      "content": "During science class, the teacher gave four instructions in one breath: \"Please put away your pencil cases first, take out your yellow observation record books, turn to page eighteen, and draw today's bean sprouts. After you're done, give them to your group leader for stamping!\" He sat in his seat, his mind a complete mess. He only remembered the first instruction about putting away his pencil cases; the rest was a jumbled mess! Watching his classmates take out their notebooks and start drawing, He's eyes welled up with tears. He sat there blankly, wanting to peek at the students next to him but too afraid to. The teacher came over and gently patted He's head: \"He, it's normal not to understand or remember. Your brain needs time to process! Don't pretend you understand. Raise your hand and tell the teacher, 'Please tell me again what the second step is?'\" He wiped away his tears, mustered his courage, and raised his right hand: \"Teacher, I didn't hear the third step clearly. Who should I give it to after I finish drawing?\" The teacher smiled and said, \"That's a great question! Give it to your group leader for stamping!\" He immediately took out his notebook and happily got to work!",
      "question": "When the teacher explains many things that you don't understand or can't remember, is sitting in your seat and daydreaming helpful? How can you ask questions to understand the steps?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌪️ The long note flying away and the brave little hand raised! ”, guidance through puppet show situations: When the teacher tells you many things that you don’t understand or remember, is it useful to sit in a daze in your seat? How do I ask so that I can understand the steps?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps of Instruction and Questioning]: 1. Feel that your head is knotted and you don’t know what to do next; 2. Immediately raise your right hand high and look at the teacher; 3. Say clearly: \"Report to the teacher, what should I do in the second step?\"”."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): I couldn’t understand the multi-step task in class. The four little heroes practiced taking the initiative to raise their hands to confirm the steps without panicking!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal for \"Have the courage to ask the little doctor\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Provide a tabletop three-frame picture card rack: \"Step One/Step Two/Step Three\", and ask students to place the instructions they hear in order to confirm.",
      "ld": "Teaching help sentence pattern: \"Teacher, I remember the first two, can you say the third one again?\"”Reduce the sense of inferiority.",
      "ebd": "Before being irritated and slapping the table because you cannot remember the instructions, guide them to raise their hands and take a deep breath to ask questions."
    },
    "visualCard": {
      "title": "⭐ Three steps to request instructions",
      "steps": [
        {
          "num": 1,
          "text": "I realize my mind is in a tangled mess and I don't know what to do next."
        },
        {
          "num": 2,
          "text": "Immediately raise your right hand and look at the teacher."
        },
        {
          "num": 3,
          "text": "Clearly state: \"Teacher, what is the second step?\""
        }
      ]
    },
    "iepGoal": "When faced with difficulty in listening and understanding complex oral instructions of more than three steps, the person can actively raise his hand to make a specific restatement request within 1 minute without evasive behavior, and the achievement rate is more than 85%.",
    "regularClassTip": "When the regular class teacher explains the homework and tasks, he should simultaneously write the step entries on the blackboard, and ask the special education children to repeat the key steps to confirm their understanding.",
    "decisionTree": {
      "prompt": "In the situation “❓ When a Long Instruction Is Unclear - Ask the Teacher to Repeat the Second Step”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. I don't understand at all but dare not ask. I sit in a daze and bite my fingers, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"✋ Steps Restatement Confirmation Card\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-67",
    "lessonNumber": 67,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "✏️ Writing Frustration: Put Down the Pencil and Take a Break",
    "code": "特學2-II-1",
    "themeColor": "#ef4444",
    "badgeEmoji": "✏️",
    "badgeLabel": "Resilient Writing Prodigy",
    "superSkill": "🍞 The fingertip relaxation method while kneading dough",
    "summary": "Children with learning disabilities and motor coordination difficulties often tear their notebooks due to insufficient hand muscle strength, resulting in inconsistent handwriting, writing outside the lines, and excessive force when scratching. Guiding children to \"put down the pen, rub their hands, and use patching stickers to repair the damage\" helps build resilience.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "💣 Angry torn paper and magical transparent repair sticker!",
      "content": "During the vocabulary practice class, He held a thick triangular pencil tightly in his hand. Because my hand coordination is relatively weak, the thirteen horizontal lines on the right side of the word \"listen\" cannot fit into the square grid no matter how I write it, and it accidentally flies out of the grid! He picked up the eraser and rubbed hard, and the result was \"Hiss——!\" \"With a sound, a big black hole was wiped out of the thin calligraphy pad!\n\nLooking at the broken notebook, He collapsed. Tears fell like broken pearls. He grabbed the entire calligraphy notebook and tried to tear it into pieces! The teacher's sharp eyesight and quick hands gently held He's wrist: \"He, take a deep breath!\"Your hands are too hard and too hard! Put down the pencil first and let’s do the “dough finger exercise”!” The teacher took out a small piece of green clay and asked He to squeeze it to relax his tense fingers. Then he took out a roll of transparent invisible tape and said, “It doesn’t matter if the paper is torn. We put on a piece of “Repair Velcro” and the hole will be repaired. Let’s write it again! ”He wiped away his tears, touched the flat tape, picked up the pen again, and wrote the words correctly one stroke at a time!",
      "question": "When you can't write well or tear your notebook, will tearing the notebook make your handwriting neater? How can you relax when your hand is sore and you feel frustrated?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💣 Angry paper holes and magical transparent repair stickers!”, guided through the puppet show situation: When the writing is not good or the workbook is scratched, can tearing the book make the writing beautiful? How to relax when your hands are sore and angry?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps to Resist Frustration in Writing]: 1. Notice the stiffness of your fingers and the angry urge to pierce the paper; 2. Immediately put down the pencil and hold the dough in the air with both hands five times; 3. Take out the transparent repair tape and paste the hole, take a deep breath and rewrite."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members: When writing and scratching the homework book, they felt frustrated and collapsed. The four little heroes practiced putting down the pencil, relaxing their fingers and repairing the book!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Frustration-resistant Writing Master\" honorary medal, complete the colorful picture and text worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Provide a bold cross grid or raised grid word book to give clear visual and tactile boundary prompts.",
      "ld": "Allow the use of a pencil holder or a large soft eraser, and provide \"hole repair tape\" to create a sense of fault tolerance.",
      "ebd": "Before you want to tear up the book, start \"kneading dough and kneading clay with your fingers\" to transfer the energy of angry limbs."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Overcome Frustration When Writing",
      "steps": [
        {
          "num": 1,
          "text": "I noticed my fingers were stiff, and I felt an urge to angrily stab the paper."
        },
        {
          "num": 2,
          "text": "Immediately put down the pencil, and make five kneading motions in the air with both hands as if kneading dough."
        },
        {
          "num": 3,
          "text": "Take out some transparent repair tape, cover the hole, take a deep breath, and rewrite it."
        }
      ]
    },
    "iepGoal": "When a writing assignment encounters a clerical error or the paper is damaged, the person can stop the destructive behavior under adult prompts, use repair tools to regroup and continue writing, with an achievement rate of more than 85%.",
    "regularClassTip": "For students with difficulty in coordinating small muscles, ordinary class teachers should pay attention to the structure of strokes instead of rigidly following the order of strokes, and provide flexible space for answers.",
    "decisionTree": {
      "prompt": "In the situation “✏️ Writing Frustration: Put Down the Pencil and Take a Break”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. He is so angry that he tears up the homework book, breaks the pencil and throws it on the ground, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🍞 Fingertip Relaxation Method for Kneading Dough\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-68",
    "lessonNumber": 68,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "📖 Reading Aloud: Asking a Partner for Help",
    "code": "特學1-II-2",
    "themeColor": "#f97316",
    "badgeEmoji": "📖",
    "badgeLabel": "Confident Reading Little Warriors",
    "superSkill": "🤝 Read aloud a relay help card",
    "summary": "Children with dyslexia often stumble and get stuck when taking turns reading aloud in class due to difficulties recognizing words, skipping lines, or breaking down characters, which can lead to laughter from peers and cause social trauma. Teaching methods can help resolve this by showing a \"relay help card\" and having group members read a sentence in turn.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "Dancing black ants and a warm relay baton!",
      "content": "In the Chinese class, the teacher asked the whole class to stand up and read a text aloud according to their seat numbers. When it was He's turn, she stood up with her textbook. In He's eyes, the Chinese characters on the textbook were like little black ants dancing in a crooked arrangement. He read the first three words: \"Spring...day...\" and then got stuck in front of the four words \"breeze\", and couldn't spell it out no matter how hard he spelled it.\n\nThe whole class was quiet for five seconds. A few naughty students in the back row began to chuckle: \"Why do you read so slowly?\"”He's face instantly turned red like a ripe tomato, his legs were shaking, and tears were about to fall down. At this time, Jia, who was sitting in the front row, saw it and immediately raised the \"green relay flag\" in his hand, smiled and read aloud: \"The breeze is blowing the green willow trees!\"” The teacher immediately praised: “Jia did a great job! He also read very clearly!” With the partner relaying, He took a deep breath and finished the next sentence smoothly, and the whole class burst into warm applause!",
      "question": "When you get stuck reading aloud on stage, what would you do if some classmates laughed? What's a good way to ask a good friend to help you finish?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "The introductory story \"Dancing Black Ants and the Warm Baton!\" is guided through the puppet show situation: When you get stuck while reading the text on the stage, what will you do if a classmate laughs in the audience? What's a good way to ask good friends to help relay the ball?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Tips for Relay Reading aloud]: 1. Feel that the word recognition is stuck and the brain freezes for more than three seconds; 2. Don’t panic, lower your head and cry, and raise the green relay flag; 3. The partner in the same group reads one sentence, take a deep breath and read the next sentence."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The class takes turns reading the text aloud and encounters a new word barrier. The four little heroes practice and start the partner relay to resolve the embarrassment!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Little Warriors of Confident Reading\" medal of honor, complete the colorful picture and text worksheets and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "The textbooks are pre-marked with highlighters on specific phrases that students will read aloud, providing clear visual anchors.",
      "ld": "Establish a \"little angel relay mechanism\" for class reading, allowing small flags to be displayed on difficult words for peers to read.",
      "ebd": "When you hear the laughter of your peers, practice saying to yourself in your mind: \"It doesn't matter, the words are dancing, I can just find someone to take over.\""
    },
    "visualCard": {
      "title": "⭐ Three Tips for Reading Relay",
      "steps": [
        {
          "num": 1,
          "text": "I noticed I was stuck recognizing a character, and my brain froze for more than three seconds."
        },
        {
          "num": 2,
          "text": "Don't panic, lower your head and cry, raise the green relay flag."
        },
        {
          "num": 3,
          "text": "Your group member reads a sentence, you take a deep breath, and then read the next sentence."
        }
      ]
    },
    "iepGoal": "When encountering reading difficulty in oral reading in class or public speaking, he can use help signals (relay cards or eye prompts) to guide peers to support him in completing the task without giving up and crying, and the achievement rate is above 85%.",
    "regularClassTip": "Ordinary class teachers should strictly refrain from publicly mocking students with dyslexia, and confirm the designated reading passages with students in private before class.",
    "decisionTree": {
      "prompt": "In the situation “📖 Reading Aloud: Asking a Partner for Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. When a classmate laughs, he smashes the textbook on the ground and runs out of the classroom crying, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🤝 Read the \"Relay Help Card\" and follow the steps to properly deal with it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-69",
    "lessonNumber": 69,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "⏱️ The timer in class is ticking and I am so nervous - Facing time pressure, \"take a deep breath according to the rhythm and take a breath for each question\"",
    "code": "特學2-II-2",
    "themeColor": "#6366f1",
    "badgeEmoji": "⏱️",
    "badgeLabel": "Calm Timekeeping Expert",
    "superSkill": "⏳Tick-tock clock adagio pranayama",
    "summary": "The shrinking red block or ticking sound of the countdown timer on the large screen often causes autistic and learning-disabled children to experience extreme anxiety, sweaty palms, and a complete mental blank. Teaching children to shift their visual focus to their breathing circle and learn the rhythm of \"taking a breath after finishing a problem\" is helpful.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "💣 A red countdown bomb and a leisurely little sea turtle!",
      "content": "Today in math class, we had a ten-minute pop quiz with five questions. A huge red countdown timer was projected in the center of the electronic whiteboard. Tick-tock, tick-tock, tick-tock… As the red time disc shrank, the hands emitted a rapid electronic beep. Sitting in the second row, Yu stared at the red circle, his heart pounding as if it would jump out of his throat! His palms were sweating profusely as he gripped his pencil. The addition and subtraction he usually knew were now a tangled mess in his head! Yu frantically crumpled his test paper into a ball: “It’s going to explode! I can’t finish!” The teacher walked to the large screen, pressed the “mute mode” on the timer, and placed a slowly flowing “blue turtle liquid hourglass” on Yu’s desk: “Yu, time isn’t a bomb chasing you, but a good friend accompanying you. Watch the turtle slowly swim, take a deep breath after finishing each question, and let’s move forward at our own pace!” Yu watched the turtle slowly descend, exhaled a long breath, his brain rebooted, and he smoothly finished the questions, stroke by stroke!",
      "question": "When you see the clock counting down and you feel panicked, will crumpling up the exam paper buy you time? How can you calm your mind and write slowly?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💣 The red countdown bomb and the leisurely little turtle! ”, guided through puppet show situations: When you see the clock counting down and feel very panicked, can you buy time by rubbing the exam paper away? What can you do to calm your brain and write slowly?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Anti-Anxiety Timing Trilogy]: 1. Feel the panic of time when your heartbeat speeds up and your head goes blank; 2. Flatten your hands on the table and take a deep breath: \"Huh~ I have my own rhythm\"; 3. After writing a question, draw a heart next to the question and complete the next question steadily."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The countdown to the classroom time-limited test is in progress. The four little heroes practice overcoming time pressure and breathing steadily to answer!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Calm Timing Expert\" honorary medal, complete the colorful picture and text worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Turn off the timer sound (pure visual silent countdown), or provide a personal slow liquid hourglass instead.",
      "ld": "The number of questions in the examination paper has been halved. Questions marked with an asterisk must be answered to reduce visual pressure.",
      "ebd": "Before you rub the exam papers in a panic due to time, you are advised to place your palms on the cold table for five seconds to cool down."
    },
    "visualCard": {
      "title": "⭐ Anti-Anxiety Trilogy",
      "steps": [
        {
          "num": 1,
          "text": "Time panic: noticing your heart racing and your mind going blank."
        },
        {
          "num": 2,
          "text": "I placed my hands flat on the table, took a deep breath: \"Phew~ I have my own rhythm.\""
        },
        {
          "num": 3,
          "text": "After finishing one question, draw a heart next to it, and then move on to the next one."
        }
      ]
    },
    "iepGoal": "When faced with in-class tests or time-limited activities, students can use self-regulation strategies to maintain a stable answering state without tearing up test papers or leaving their seats anxiously. The achievement rate is above 85%.",
    "regularClassTip": "During school section examinations or assessments, students with special needs should be given reasonable adjustments to extend the answering time by 20 minutes based on the special education assessment.",
    "decisionTree": {
      "prompt": "In the scenario test of \"⏱️ In a situation involving classroom timer pressure, consider what might happen with different approaches.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. When he sees the timer, he yells, mashes the test paper and stomps it on the ground, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take a calm and deep breath to activate \"⏳ Tick-Tock Clock Adagio Pranayama\", and follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-70",
    "lessonNumber": 70,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "📐 Long Word Problems: Breaking Information into Small Parts",
    "code": "特學1-II-3",
    "themeColor": "#10b981",
    "badgeEmoji": "🍫",
    "badgeLabel": "Problem Breakdown Master",
    "superSkill": "🍫 Segment the chocolate into sections",
    "summary": "Faced with math literacy word problems that often consist of four or five lines of text, children with reading difficulties and autism often fail to grasp the key words and give up, overwhelmed by the dense text. Teaching them to use a two-color highlighter to solve the problem like \"cutting three chocolates\" involves breaking down the condition, the number, and the question.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🍫 A giant chocolate block with three magical little cutters!",
      "content": "The last problem on the math workbook was a real nightmare, stretching for four long lines: \"There are three classes in the fourth grade of OO Elementary School, with twenty-five students in each class. Each bus ticket for a field trip costs 100 yuan. How much will all the students have to pay for the tickets in total?\" He felt his scalp tingle when he saw those four long lines of densely packed black text. His eyes kept skipping lines, completely confused about whether to add or multiply. He grabbed his hair and sighed, \"It's too long! I can't even understand it! Why write math problems like they're from a storybook!\" The teacher smiled and took out a thick bar of chocolate, handing He pink and yellow highlighters: \"He, swallowing a big piece of chocolate whole will choke you. Let's cut it into three pieces! First cut: find out 'who is doing what'; second cut: circle the 'numbers and units'; third cut: use yellow to highlight 'what the question is actually asking!'\" He cut the problem three times, and what was originally a long, monstrous problem instantly became a neat three-step equation. He excitedly shouted, \"It's so simple once you cut it! I can do it!\"",
      "question": "When you see a long and difficult question, what happens if you try to guess the answer without even looking at it? Why does using a highlighter to cut through the question make it clearer to the brain?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🍫 Huge chocolate bricks and three magical little knives!”, guidance through puppet show situations: When you see that the question is long and difficult, what will happen if you guess the answer without even looking? Why can the brain see clearly when using a highlighter pen to cut through a question?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps for Cutting Chocolates]: 1. Take out the ruler and read slowly line by line without letting your eyes skip lines;2. Use a ball pen to circle the numbers and units in the question;3. Use a yellow fluorescent pen to draw the last sentence \"Excuse me...?\" ”Catch the calculation target."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Faced with complicated and lengthy mathematical problems, the four little heroes practiced using highlighters to break down the core information in sections!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Master of Problem Solving\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Provide a visual mask (reading window), which only exposes one line of text at a time to prevent the line of sight from being disturbed by the full-page long text.",
      "ld": "Use a two-color fluorescent pen: draw the condition information in pink, draw the core question sentence in yellow, and circle the numbers with a ball pen.",
      "ebd": "Before you encounter a long question and feel like throwing down the textbook, do the \"cutting chocolate three times\" action to relax your mind."
    },
    "visualCard": {
      "title": "⭐ Three steps to cutting chocolate",
      "steps": [
        {
          "num": 1,
          "text": "Take out the word-covering ruler and read slowly, line by line, without letting your eyes skip lines."
        },
        {
          "num": 2,
          "text": "Use a ballpoint pen to circle the numbers and units in the problem"
        },
        {
          "num": 3,
          "text": "Use a yellow highlighter to draw the last sentence, \"Excuse me...?\" Identify the mathematical target."
        }
      ]
    },
    "iepGoal": "When facing situational application questions with more than three lines, they can use visual marking strategies (circling key figures, drawing question sentences) to complete the disassembly of the problem-solving steps, and the correct answer rate is increased by more than 75%.",
    "regularClassTip": "The fonts of the regular assessment papers for regular classes should be appropriately enlarged (it is recommended to use italics for grades 14 and above) and the line spacing should be increased to reduce the visual burden on children with learning disabilities.",
    "decisionTree": {
      "prompt": "In the situation “📐 Long Word Problems: Breaking Information into Small Parts”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. If the question is too long, it will give up and scribble in the answer column, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🍫 The question \"Segmented Chocolate Cutting\", follow the steps to properly solve it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-71",
    "lessonNumber": 71,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🎨 Art Is Unique: Letting Go of Perfection",
    "code": "特自2-II-1",
    "themeColor": "#ec4899",
    "badgeEmoji": "🎨",
    "badgeLabel": "Creative and Confident Little Painters",
    "superSkill": "🪐 Unique Planetary Pride",
    "summary": "Children with autism are often bound by a strong sense of perfectionism and fixation on symmetry. If they paint outside the black lines in their watercolor paintings or their clay sculptures are slightly different from the teacher's model, they may break down in tears, crushing and stomping on their artwork. It is important to guide children to accept that \"difference is precisely what makes art unique.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🌌 A crooked flying saucer and a colorful rainbow star!",
      "content": "Today's art class theme was to sculpt a \"magical space station\" using lightweight clay. The teacher displayed a neat, symmetrical, silver-white rocket template on the platform. Yu tried to copy it, but because the clay was too soft, the rocket's tip was slightly tilted to the left by three centimeters, and he couldn't straighten it no matter how hard he tried. Looking at his crooked rocket, Yu's face turned bright red, his fists clenched and trembled. He grabbed the rocket, ready to smash it to the ground: \"It's ruined! It doesn't look like the teacher's at all! I'm such an idiot!\" The teacher gently reached out and caught Yu's clay: \"Yu, wait! Look at the clouds outside the window. Are there any clouds that look exactly the same? If everyone's spaceship looked the same, how boring would the universe be! Your rocket's tip is bent to the left, just like a magical cruiser nimbly dodging an asteroid!\" Yu was stunned. He looked at the curved rocket in his hand and suddenly thought it was so cool. Yu added two more small stars next to it and smiled happily: \"This is my own 'Starship Scimitar'!\"",
      "question": "When your drawing or art piece is different from the template, will smashing or stepping on it make you feel better? Why is something different the most special treasure?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌌 The crooked flying saucer and the colorful rainbow star! ”, guided through the puppet show situation: When your painting or art work is different from the model, will you feel better if you smash it to pieces and crush it? Why is difference the most special treasure?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Tips for Fighting Frustration in Art and Crafts]: 1. Detect the anxiety of \"doing things differently than the teacher\" and the urge to throw things; 2. Take a deep breath and tell yourself: \"Every planet in the universe looks different\"; 3. Add a small star to the crooked or painted place to make it a unique feature."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The clay work was accidentally twisted. The four little heroes practiced getting rid of the shackles of perfectionism and appreciating unique creativity!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Creative and Confident Little Painter\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish a cognitive preview before the art class: \"Today's task is to make your own planet. There is no standard answer. The more special the better!\" ”",
      "ld": "Prepare \"stickers/colorful stickers/magic patches\" to turn small flaws into special decorations on your work.",
      "ebd": "When frustration breaks out and you want to ruin your work, activate \"Cross your arms and watch for ten seconds\" and discover unexpected beauty."
    },
    "visualCard": {
      "title": "⭐ Three Tips for Overcoming Frustration in Art and Craft Work",
      "steps": [
        {
          "num": 1,
          "text": "The anxiety of noticing that \"I'm doing things differently from the teacher\" and the urge to throw things."
        },
        {
          "num": 2,
          "text": "Take a deep breath and tell yourself: \"Every planet in the universe looks different.\""
        },
        {
          "num": 3,
          "text": "Add a small star to any crooked or mispainted areas to create a unique feature."
        }
      ]
    },
    "iepGoal": "When conducting open art and handicraft creations, when faced with unexpected results or flaws, they can accept differences in individual works under prompts and do not engage in vandalism or tearing. The achievement rate is above 85%.",
    "regularClassTip": "The art work scoring for regular classes should focus on the diversity of creativity and investment in the creative process, and avoid using \"whether the template is copied\" as the single scoring criterion.",
    "decisionTree": {
      "prompt": "In the situation “🎨 Art Is Unique: Letting Go of Perfection”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. Because it does not look like the template, the work will be thrown to the ground and crushed, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🪐 \"Unique Planet Self-Esteem\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-72",
    "lessonNumber": 72,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🎒 An Organized School Bag: Color Folders and a Daily Check",
    "code": "特自2-II-2",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🎒",
    "badgeLabel": "Organizing and Storage Expert",
    "superSkill": "📁 Five-Color Storage Magic",
    "summary": "Children with ADHD and learning disabilities often have weak executive functions, resulting in their schoolbags being stuffed with crumpled notices, moldy breadcrumbs, and scattered colored pens. They experience anxiety when they can't find their homework during class and are punished. We teach them the \"five-color folder sorting method\" and a three-minute \"detoxification and emptying check\" before school ends.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🕳️ A giant black hole backpack and a colorful rainbow folder!",
      "content": "When collecting Chinese homework during morning self-study, everyone in the class had handed it in, except for Jun, who was still rummaging through his big backpack! Jun's backpack was crammed full, like a giant black hole about to explode. Inside were last week's notices crumpled like dried plums, broken crayon stubs, half-eaten cookie bags, and three textbooks with their corners folded upside down. Jun was sweating profusely, almost going crazy: \"Strange! I clearly wrote it yesterday, where did it go! So annoying!\" Frustrated, Jun dumped all the clutter from his backpack onto the hallway floor. The teacher walked over and took out five transparent folders of different colors: \"Jun, your backpack isn't a trash can, it's your learning toolbox! Let's do a 'five-color detox': blue for Chinese, red for math, yellow for the communication book, and green for the notices!\" Under the teacher's guidance, Jun threw the clutter into the trash can, neatly categorized the five subjects, and the missing vocabulary book suddenly jumped out from the blue folder! Jun hugged his neatly packed schoolbag and smiled proudly!",
      "question": "How anxious do you feel when you can't find your homework book during class? What are the benefits of tidying up your schoolbag after school each day for yourself tomorrow?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🕳️ Black hole school bag and colorful rainbow folder! ”, guided through the puppet show situation: How anxious would you feel when you couldn’t find your homework book in class? What benefit will it bring to you tomorrow if you tidy up your schoolbag after school every day?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Trilogy of School Bag Organizing]: 1. Open the school bag before school and throw the crumbled garbage and toilet paper into the trash can; 2. Put the textbooks and homework into the subject folders of the corresponding colors; 3. Before closing the zipper, check the check card to confirm: \"The contact book and homework are all packed in!\"”."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): It’s time for early self-study and homework submission. The four little heroes practice using color sorting folders to quickly find books!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Storage and Organizing Master\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Color labels are affixed to the inner layer of the school bag, and tapes of the same color (such as blue for Mandarin) are affixed to the sides of textbooks and exercises to achieve intuitive visual correspondence.",
      "ld": "Use the \"School Bag Check Tick Card\" (four items: contact book, exercise book, pencil case, and water bottle) to confirm one by one.",
      "ebd": "Before you get irritated about not being able to find something and want to take out the trash, take three deep breaths, take out all the items from your schoolbag one by one and put them on the table."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Organizing Your Schoolbag",
      "steps": [
        {
          "num": 1,
          "text": "Before leaving school, open your schoolbag and throw the crumpled trash and toilet paper into the trash can."
        },
        {
          "num": 2,
          "text": "Put your textbooks and homework into the corresponding colored subject folders"
        },
        {
          "num": 3,
          "text": "Before zipping up, check the checklist to confirm: 'The contact book and homework are all inside!'"
        }
      ]
    },
    "iepGoal": "Before school or in the early morning hours, students can complete the classification of personal school bag items and waste cleaning independently or under the prompts of the checklist, and no more homework will be lost or forgotten, with an achievement rate of more than 80%.",
    "regularClassTip": "Regular class teachers can set up a \"daily homework submission color box\" on the right side of the blackboard to help children with executive dysfunction establish a collection routine.",
    "decisionTree": {
      "prompt": "In the situation “🎒 An Organized School Bag: Color Folders and a Daily Check”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control. He stuffs his schoolbag into a trash can, dumps all the debris in the corridor and yells, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"📁 \"Five Color Storage Magic\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-73",
    "lessonNumber": 73,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 3: Classroom Learning Frustrations and Homework Challenges",
    "title": "🏃 A Dropped Relay Baton: Supporting a Teammate",
    "code": "特社2-II-3",
    "themeColor": "#059669",
    "badgeEmoji": "🏃",
    "badgeLabel": "Best Teammates",
    "superSkill": "🤝 No complaints when the team drops a baton",
    "summary": "In relay races or team competitions, if a teammate slips the baton or runs the wrong lane, causing the entire group to fall behind, emotionally challenged children are prone to verbally abusing them, shouting things like, \"It's all your fault! You're terrible!\" This can lead to serious peer bullying. The correct approach is to \"immediately go up to them, pat them on the back, and say, 'It's okay, let's catch up together.'\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🥉 The golden baton rolled off the red track!",
      "content": "On the eve of the school sports meet, during PE class, a tense and exciting fourth-grade relay simulation was underway. Jun ran the fourth leg, sprinting like a whirlwind and successfully catching up to second place! At the baton exchange area, Jun shouted, \"Pass the baton!\" However, He, who was supposed to receive the fifth leg, was so nervous with sweaty palms that her outstretched hand slipped, and the golden baton slammed onto the red PU track with a loud \"thud!\" rolling all the way into the grass! The teams behind seized the opportunity to overtake, and the lead instantly turned into last place. Jun's eyes blazed with anger, and she clenched her fists, about to rush towards He and yell, \"What are you doing! You're so stupid! You're the one who made us lose!\" Seeing this, Jia immediately rushed over, picked up the baton, and shoved it back into He's hand, shouting, \"He, don't stop! Keep going! Jun, yelling now will only slow things down, let's all cheer her on from the sidelines!\" Jun paused for a moment, watching He grit his teeth and sprint forward. He swallowed the curse words he was about to utter, put his hands to his mouth and shouted, \"Go He! Go for it!\" The whole class cheered along, and He sprinted like he had a turbocharger, finally catching up with one person just before the finish line!",
      "question": "When a teammate makes a mistake during a competition, will yelling at them on the spot bring back the ranking? Why is saying \"It's okay, we'll catch up together\" the coolest way to be a teammate?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🥉 The golden baton rolling down the red runway! ”, guided through puppet show situations: When a teammate accidentally makes a mistake in a team competition, can you get your ranking back by scolding him on the spot? Why is the most handsome teammate who says \"It doesn't matter, let's chase together\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Steps for Teammates]: 1. When you see your teammates making mistakes and falling behind, immediately restrain your urge to curse; 2. Immediately help pick up the baton or give a reminder: \"Hurry up!\"”; 3. Shouted loudly on the sidelines: “It doesn’t matter, let’s chase it back together!””."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): In the relay race of the brigade, peers dropped their sticks due to nervousness and fell behind. The four little heroes practiced restraining criticism and showed team tolerance and motivation!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Best Teammate\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish awareness of sports events: \"A relay race is a game for the whole team. The whole team is responsible for winning or losing. Mistakes are also part of the game.\"",
      "ld": "Use slogans to strengthen team spirit: \"Don't blame others if you drop the stick, pick it up and rush forward; everyone chases it together, we are the best!\"",
      "ebd": "Before blaming teammates, guide them to take three deep breaths and turn impulsive swearing into clapping with both hands and shouting, \"Come on.\""
    },
    "visualCard": {
      "title": "⭐ Three Steps to Becoming a Perfect Teammate",
      "steps": [
        {
          "num": 1,
          "text": "Seeing teammates make mistakes and fall behind, immediately suppress the urge to curse."
        },
        {
          "num": 2,
          "text": "Immediately help pick up the baton or verbally remind them: 'Hurry up!'"
        },
        {
          "num": 3,
          "text": "He shouted from the sidelines, \"It's okay, we'll catch it together!\""
        }
      ]
    },
    "iepGoal": "When participating in group competitive activities, when peers make mistakes or are at a disadvantage in the competition, they do not abuse, push or blame peers, and can give verbal encouragement, with an achievement rate of more than 85%.",
    "regularClassTip": "After the physical education class, the teacher should specifically praise the team that \"shows peer tolerance when making mistakes\", downplay the championship ranking, and demonstrate the spirit of sportsmanship.",
    "decisionTree": {
      "prompt": "In the situation “🏃 A Dropped Relay Baton: Supporting a Teammate”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain lost control. He pointed at his teammates and yelled, \"You are the loser who caused us to lose.\" This caused confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🤝 Don’t complain when the team loses the baton”, follow the action steps to properly deal with it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-74",
    "lessonNumber": 74,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "😡 Accident or Intent? Responding Calmly to Broken Things",
    "code": "特社2-II-2",
    "themeColor": "#ef4444",
    "badgeEmoji": "📏",
    "badgeLabel": "Calm Mediation Judge",
    "superSkill": "📏 Accidentally damaged the Calm Ruler",
    "summary": "When a child with autism or emotional disorders accidentally steps on or breaks their beloved stationery, they often instinctively assume \"it was intentional\" and retaliate with a punch. Guiding children to \"first observe their facial expressions, clarify the accident, and seek compensation and an apology from the teacher\" can help prevent the violence from escalating.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "💔 A transparent dinosaur ruler broken in two and a sincere apology letter!",
      "content": "Today in math class, we had to draw straight lines. Yu took out his limited-edition \"Glow-in-the-Dark Tyrannosaurus Rex Transparent Ruler,\" a new gift from his dad, and was extremely proud of himself. At the end of class, Jun rushed out of his seat to get a drink of water, but he stumbled and his elbow accidentally brushed against the ruler on Yu's desk. \"Crack!\" The precious Tyrannosaurus Rex ruler fell to the ground and was stomped in two by Jun! Looking at the broken ruler on the ground, Yu's blood pressure soared, his eyes turned bloodshot, and he roared like a wild beast. He grabbed Jun by the collar and raised his fist: \"You deliberately broke my Tyrannosaurus Rex ruler! I'm going to kill you!\" Jun turned pale with fright, his hands clasped in front of his chest as he shouted: \"I didn't mean to! I really didn't see it! I'm sorry!\" The teacher immediately stepped forward to separate the two: \"Yu, stop! Take a deep breath! Do you see Jun grinning as he deliberately stepped on it, or is he trembling with fear?\" \"I can pay for broken items, but hitting someone will shatter a friend's heart!\" Yu looked at the frightened Jun and slowly lowered his fist. Jun immediately ran back to his seat, took out a brand new iron ruler, and handed it to Yu: \"Yu, I'm sorry. I'll tell my mom after school that I'll definitely buy you an identical one!\" Yu took the iron ruler, and the anger in his heart finally subsided.",
      "question": "When someone breaks your favorite toy or stationery, will punching them fix it? Distinguish between \"accidental\" and \"intentional\" damage, and why does it protect friendship?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"💔 A transparent dinosaur ruler broken in half and a sincere letter of apology!”, guided through puppet show situations: When someone breaks your favorite toys or stationery, can you make things better by punching them directly? How can distinguishing between \"accidental\" and \"intentional\" protect friendships?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three steps to calm down when damaged items]: 1. If you notice that you are angry and want to punch, immediately put your hands into your coat pockets; 2. Look at the other person's face and attitude: Does he panic and say sorry?; 3. Ask the teacher to help discuss repairs or compensation, and do not use violence in private."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The beloved stationery was accidentally stepped on by a classmate. The four little heroes practiced restraint in punching, distinguishing accidents and solving them rationally!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Calm Mediation Junior Judge\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Show the \"Intent Identification Magnifying Glass\" chart: If the other party apologizes immediately and looks flustered = carelessness; if the other party makes a provocative face = malicious intent.",
      "ld": "Using the \"Four Steps for Item Compensation\" chart: Stop ➡️ Listen to the apology ➡️ Ask the teacher to record ➡️ Compensation for new products.",
      "ebd": "When making a fist to hit someone, forcefully start \"putting hands in pockets and counting to ten\" to keep the physical distance between the two people."
    },
    "visualCard": {
      "title": "⭐ Three steps to stay calm after item damage",
      "steps": [
        {
          "num": 1,
          "text": "Sensing the urge to throw a punch, he immediately put his hands into his coat pockets."
        },
        {
          "num": 2,
          "text": "Observe the other person's face and attitude: Does he panic and apologize?"
        },
        {
          "num": 3,
          "text": "Please ask the teacher to assist in discussing repairs or compensation; do not resort to violence privately."
        }
      ]
    },
    "iepGoal": "When personal belongings are accidentally damaged by peers, they can restrain the urge to physically attack and express protest through words or seek mediation from teachers, with an achievement rate of over 85%.",
    "regularClassTip": "Ordinary class tutors should intervene in damage incidents as soon as possible, clarify the attribution of responsibility and reasonable compensation, and prevent the victimized students from turning to lynching violence due to the damage to their rights and interests.",
    "decisionTree": {
      "prompt": "In the situation “😡 Accident or Intent? Responding Calmly to Broken Things”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control and he beats the opponent until his nose bleeds and smashes the desk, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"📏 Accidental damage to the calming ruler\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-75",
    "lessonNumber": 75,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "👥 Sharing Friends: Making Room for Other Friendships",
    "code": "特社1-II-2",
    "themeColor": "#3b82f6",
    "badgeEmoji": "👥",
    "badgeLabel": "A Broad-minded Friend",
    "superSkill": "🌐 An Open and Friendly Mind",
    "summary": "Children with autism often have a strong sense of possessiveness and ownership in their friendships. If a close friend talks to other classmates or joins a group, they may feel betrayed, become angry, and break off the friendship or threaten to do so. We should teach them that \"everyone can have many friends, and sharing with friends is more fun.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🎈 A giant balloon with two ropes and a three-person jump rope team!",
      "content": "In the special education classroom, He always considered Jia her \"most exclusive best friend.\" Every day after class, they would sit together under the shade of a tree and draw. Today, during the long break, Jia excitedly ran off with a jump rope to play \"three-person jump rope\" with two girls from the regular class. Everyone laughed happily in the hallway. Sitting by the window, He watched this scene, her heart aching with jealousy. He angrily bit her pencil, her eyes reddening, and secretly vowed: \"Jia betrayed me! She went to play with someone else, I'll never talk to Jia again!\" The teacher walked over to He, smiling as she took out a string of colorful balloons: \"He, do you think balloons look better held in one hand, or floating in the sky so everyone can see them? Friends aren't dolls; we can't lock them away in our own closets. Jia going to jump rope doesn't mean she doesn't like you anymore; if you went over and loudly asked, 'Can I help you swing the rope?' wouldn't you all become best friends?\" He wiped away her tears and went outside, shouting, \"Jia, I'll help you swing the rope!\" The four of them held hands and jumped in the sunlight, their laughter louder than ever before!",
      "question": "When your favorite friend goes to play with someone else, can getting angry and severing ties bring them back? Why is it that accepting that a friend has other friends helps the friendship last?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎈 A big balloon with two ropes and a rope skipping team of three people! ”, guided through the puppet show situation: When your favorite friend goes to play with someone else, can you get your friend back by breaking up with him in anger? Why does accepting friends have other partners make friendships last longer?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Tips to Open Friendship]: 1. Be aware of the exclusive jealousy that makes you feel sour and want to get angry and break off the friendship; 2. Say silently in your heart: \"Friends are not exclusive toys, he also has the freedom to meet new friends\"; 3. Take the initiative to come forward and try to play together, or happily do your own things."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Seeing their best friends having fun with other classmates, the four little heroes practice letting go of their exclusiveness and actively integrating into the big circle!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Good Friend with a Broad Mind\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Draw a \"Concentric Circle Diagram of Friendship Network\": You are in the center, and there can be many friends overlapping each other around you. No one is exclusive.",
      "ld": "Use children's songs to establish concepts: \"One person plays alone, two people play warm, and everyone has fun!\"",
      "ebd": "Before jealousy breaks out and you want to break off the relationship, take three deep breaths and practice taking the initiative to join in or find other interesting things to do by yourself."
    },
    "visualCard": {
      "title": "⭐ Three Tips for Opening Up Friendships",
      "steps": [
        {
          "num": 1,
          "text": "I sensed a pang of possessive jealousy, a feeling of wanting to get angry and break off the friendship."
        },
        {
          "num": 2,
          "text": "Silently remind yourself: \"Friends are not exclusive toys; they also have the freedom to make new friends.\""
        },
        {
          "num": 3,
          "text": "Take the initiative to approach them and try to play together, or happily do your own thing."
        }
      ]
    },
    "iepGoal": "When peers interact or group with other people, there will be no strong jealousy protests, forced restrictions on peers, or behavior of breaking up with others out of spite, and the achievement rate is above 80%.",
    "regularClassTip": "When regular classes are grouped, group members should be randomly rotated regularly to prevent special education children from over-relying on a single specific peer and causing exclusion anxiety.",
    "decisionTree": {
      "prompt": "In the situation “👥 Sharing Friends: Making Room for Other Friendships”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control and he is so angry that he yells \"I will never be with you again\" in the corridor and turns his face on the spot, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🌐 Be open to friendship and have a big mind\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-76",
    "lessonNumber": 76,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🗣️ Hurtful Nicknames: Speak Firmly and Ask a Teacher for Help",
    "code": "特社2-II-3",
    "themeColor": "#e11d48",
    "badgeEmoji": "🛡️",
    "badgeLabel": "Guardian of Confidence and Dignity",
    "superSkill": "🛡️ Insult Remark Reflection Shield",
    "summary": "Special needs students are often teased by their peers behind their backs for their unusual movements or stuttering, being called \"freaks,\" \"robots,\" or \"fat boys.\" The goal is to teach these students to activate their \"verbal defense\" by giving them a firm look and saying, \"That's not my name, please call me by my real name!\" and to proactively report such remarks to their teachers.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🦔 Spiky, offensive labels and glittering name badges!",
      "content": "Walking down the corridor, Jun heard two older students laughing and joking behind him: \"Look, that robot who walks like a penguin is here again! Robot! Beep beep beep!\" Jun, walking ahead, heard this and knew they were laughing at his forceful arm swing while walking. The word \"robot\" pierced Jun's ears like a poisonous thorn! Jun instantly flew into a rage, turned around, grabbed the lid of a nearby trash can, and was about to smash it over the other student's head! Jia happened to be passing by and immediately grabbed Jun's arm, shouting: \"Jun, stop! If you hit someone, you lose! They just want to see you lose your temper!\" Jia stood in front of Jun, looking directly at the two mocking students, her voice loud and firm: \"He has a name, his name is Jun from OO Elementary School! Giving someone such an offensive nickname is extremely rude! We're going to the student affairs office to report him to the teacher right now!\" Seeing Jia's resolute courage, the two classmates turned red with fright, lowered their heads, and slunk away. Jun put down the bucket lid, took a deep breath, and said, \"Jia, thank you. If I had acted just now, I would have received a major demerit!\"",
      "question": "When someone calls you a mean nickname, if you immediately become enraged and hit them, who will be punished? Why is responding with a firm and confident attitude and going to the teacher the smartest thing to do?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦔 A prickly ugly label and a sparkling name medal! ”, guided through the puppet show situation: When someone calls you an unpleasant nickname, if you get angry and hit them on the spot, who will be punished? Why is it the smartest thing to do to fight back with a firm and confident attitude and go to the teacher?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Insult Rebound Trilogy]: 1. Sensing the rage of being called a nickname, clasping hands tightly to the body and not fighting back; 2. Looking directly at the other person with firm eyes and saying: \"This is not my name, please respect others!\"”; 3. Turn around and leave the scene, and immediately inform the instructor or the Academic Affairs Office in detail."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Encountered malicious provocations with unpleasant nicknames in the corridor, the four little heroes practiced activating the verbal rebound shield, resolutely defending themselves, and seeking legal channels!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Guardian of Confidence and Dignity\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Teach the three-step defense script: 1. Look directly at the other person 2. Speak out the correct sentence 3. Turn around and walk quickly to the Academic Affairs Office or the tutor's office.",
      "ld": "Use the \"Rebound Shield Picture Card\": Imagine that unpleasant words are like mud balls, which bounce directly back to the opponent when they hit the golden shield, and your body is still clean.",
      "ebd": "Before being provoked to take action, the standard avoidance procedure of \"take a deep breath for three seconds + turn around and leave the scene\" is forced to be activated."
    },
    "visualCard": {
      "title": "⭐ The Trilogy of Insult Retaliation",
      "steps": [
        {
          "num": 1,
          "text": "Sensing the fury of being called a nickname, he clenched his fists and held back, refusing to retaliate."
        },
        {
          "num": 2,
          "text": "Looking firmly into the other person's eyes, he said, \"This is not my name. Please respect others!\""
        },
        {
          "num": 3,
          "text": "Turn around and leave the scene, then immediately report the incident to your advisor or the student affairs office."
        }
      ]
    },
    "iepGoal": "When encountering verbal provocations such as being teased by peers or using unpleasant nicknames, they can restrain the impulse to violently fight back, use firm self-affirming language and seek help from adults, with an achievement rate of over 85%.",
    "regularClassTip": "If verbal insults occur in schools, the Academic Affairs Office and tutors should initiate bullying prevention reporting procedures, strictly coach the teasers, and protect the personal dignity of special education children.",
    "decisionTree": {
      "prompt": "In the situation “🗣️ Hurtful Nicknames: Speak Firmly and Ask a Teacher for Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control. He grabs a metal bucket and slams the opponent's head in anger, causing severe bleeding and serious injuries, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🛡️ Insulting remarks backlash shield\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-77",
    "lessonNumber": 77,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🤝 Group Decisions: Voting and Respecting Everyone",
    "code": "特社1-II-3",
    "themeColor": "#059669",
    "badgeEmoji": "🤝",
    "badgeLabel": "Little Gentlemen of Democratic Cooperation",
    "superSkill": "🗳️ Disagreement ballot box",
    "summary": "When creating posters or discussing topics in groups, autistic children often become fixated on their own ideas, insisting that the entire group listen to their chosen theme, otherwise they will bang on the table, get up, and cry. We should teach them democratic compromise mechanisms such as \"majority rule,\" \"best-of-three,\" and \"incorporating different elements.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🦖 Green Dinosaur vs. 🚀 The decisive battle of Silver Rocket!",
      "content": "During group activity time in the special education classroom, the teacher asked four little heroes—Yu, He, Jia, and Jun—to work together to draw a large poster on the blackboard titled \"Our Dreamland.\" At the start of the discussion, Yu slammed his fist on the table: \"We have to draw 'Tyrannosaurus Rex Jurassic Park'! Only dinosaurs are the strongest! We have to draw all dinosaurs!\" Jia immediately jumped up and retorted: \"No! Dinosaurs every time! I want to draw 'Space Mars Base'! The silver rocket is the coolest!\" The two argued back and forth, growing louder and louder. Yu, exasperated, slammed the eraser on the floor, crossed his arms, turned around, and shouted: \"If we don't draw dinosaurs, I'm quitting! I won't draw any of them!\" At this moment, Jun walked over and drew a line in the middle of the blackboard: \"Stop! Everyone, don't argue! We have a democratic trick for different opinions—voting and unification! If three people vote for Space Base, the minority must obey the majority; but! We can draw a 'Tyrannosaurus Rex guarding the entrance to Space Base,' so that dinosaurs and rockets are in the same paradise!\" Yu paused for a moment, imagining the Tyrannosaurus Rex wearing a space helmet, and couldn't help but burst out laughing: \"Okay! A Tyrannosaurus Rex wearing a space helmet sounds really cool!\" The four of them immediately picked up chalk and happily worked together to complete the best space dinosaur base in the whole school!",
      "question": "During group discussions, if everyone insists on their own ideas and refuses to compromise, can the task be completed? Why can voting and combining everyone's ideas lead to a win-win situation?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦖 Green Dinosaur vs. 🚀 The decisive battle of Silver Rocket!”, guided through the puppet show situation: If everyone insists on their own ideas and refuses to give in during group discussions, can things be completed? By voting and combining everyone's ideas, why can everyone be happy?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three steps of group cooperation and compromise]: 1. When you notice that everyone has different opinions and is deadlocked, shout: \"Let's vote!\" ”;2. The party with the fewest votes adheres to the sportsman’s style and cooperates with the majority decision with a smile; 3. Find creative combination points and integrate the essence of the minority party into the overall work."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The group was deadlocked on the poster theme, and the four little heroes practiced using voting and creative integration to reach a group consensus!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Little Gentleman of Democratic Cooperation\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design \"Element Fusion List\": Everyone's proposal must be adopted at least one small element to ensure that no one is marginalized.",
      "ld": "Use the physical \"democratic voting chip\" to put one into the carton. Whoever listens more will listen to the rules. The rules are clear and intuitive.",
      "ebd": "When your opinion is rejected and you want to quit in anger, take three deep breaths and read the mantra aloud: \"The minority obeys the majority, and it will be mine next time!\"”"
    },
    "visualCard": {
      "title": "⭐ Three Steps to Compromise in Group Collaboration",
      "steps": [
        {
          "num": 1,
          "text": "When you sense that everyone is at an impasse due to differing opinions, shout: \"Let's vote!\""
        },
        {
          "num": 2,
          "text": "The side with fewer votes should maintain sportsmanship, smiling and cooperating with the majority decision"
        },
        {
          "num": 3,
          "text": "Find creative points of convergence and integrate the essence of a few into the overall work."
        }
      ]
    },
    "iepGoal": "When participating in group discussions and encountering differences of opinion, they can cooperate with the group majority decision or negotiate a compromise without shrinking from the meeting or strongly resisting, with an achievement rate of more than 85%.",
    "regularClassTip": "When ordinary classes are divided into groups, teachers should strengthen inspections and guide group leaders to implement democratic voting and idea integration to prevent a single strong student from being arbitrary and dictatorial.",
    "decisionTree": {
      "prompt": "In the situation “🤝 Group Decisions: Voting and Respecting Everyone”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. If they disagree, they throw down the blackboard eraser, quit in anger and shout \"I won't draw anymore\", causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🗳️ \"Ballot box for differences of opinion\", follow the steps to properly handle and resolve it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-78",
    "lessonNumber": 78,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "💔 A Dried-Out Marker: Asking Kindly to Make Things Right",
    "code": "特溝2-II-4",
    "themeColor": "#f59e0b",
    "badgeEmoji": "🖍️",
    "badgeLabel": "Gentle Communication Role Model",
    "superSkill": "🖍️ The Dialogue Repair Technique with Colored Pencils",
    "summary": "When a kind person lends out colored pens, the cap may not be properly closed when the pens are returned, causing them to dry out and stop writing. Students often become upset and angry, yelling, \"You did that on purpose! Pay me back! I'll never lend you a pen again!\" Guiding students to use objective facts and gently request a pen loan or to work together to find an alternative solution is helpful.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🍂 A dry, red colored pencil and a box of large, colorful puzzle pieces!",
      "content": "In art class, Jia kindly lent her 24-color pencils to Xiao Ming in the next group to draw a big red flower. Unexpectedly, when she returned them after class, her most frequently used \"bright red\" pencil had been left uncapped for the entire lesson, and the nib was as dry and hard as a twig, unable to draw any color on the paper! Seeing her beloved pencil broken, Jia felt a pang of heartache, almost bursting into tears. She wanted to rush over and smash Xiao Ming's pencil case on the ground, yelling, \"You big bad guy! Give me a new pencil!\" The teacher walked over to Jia, handing her a cup of warm water to soak the hardened nib: \"Jia, it's normal to be angry, because you're upset that the pencil is broken. But yelling will only make Xiao Ming think you're insulting him. We can use the 'gentle repair dialogue method': point out the facts, express your distress, and offer concrete compensation!\" Jia took a deep breath, went to Xiao Ming, and calmly said, \"Xiao Ming, this pencil dried out because it wasn't capped, and I'm very sad that I can't draw now.\" \"Could you lend me your red pen for this class, and return it to me next week with a new single red pen?\" Xiaoming felt very guilty when he saw the dried-out pen and quickly handed his red pen to Jia with both hands: \"Jia, I'm sorry! I was too careless. I will definitely ask my mother to buy you a new one when I get home today!\" A storm of arguments that could have broken out instantly turned into a spring breeze.",
      "question": "When something you lent to someone gets broken, will yelling at them or even physically smashing their things fix it? Why is it that asking for compensation in a calm and objective tone is more likely to elicit sincere reparations?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🍂 A dry red color pen and a box of large colorful puzzles!”, guiding through puppet show situations: When something you lend to others is broken, can you curse the person or even smash the other person’s things, can the pen become better? Why is it better to receive sincere compensation if you ask for compensation in a calm and objective tone?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Steps to Repair Stationery]: 1. Feel the grievance and anger when the item is damaged, and take three deep breaths; 2. Calmly point to the item and state the objective facts: \"The pen cap is not tightly capped, and the nib is dry\"; 3. Gentlely propose a specific solution: \"Please lend me your pen, and buy one and return it to me.\""
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The colored pens lent to classmates dried up because they were not capped, so the four little heroes practiced calm communication and asked for repairs!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Model of Gentle Communication\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design a \"Three Sentences for Situational Compensation\" photocard: 1. This pen is dead 2. I feel bad because I need to use it later 3. Please lend it to me first and buy a new one to return to me.",
      "ld": "Provide \"stationery first aid life tips\" such as soaking pen tips in warm water and dripping glycerin to divert anger from physical repair.",
      "ebd": "Before you want to retaliate by smashing the other person's pencil case, clench your fist and place it on your thigh for three seconds, then turn around and ask the teacher for help in communicating."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Stationery Repair",
      "steps": [
        {
          "num": 1,
          "text": "Sensing the hurt and anger at the damaged item, take three deep breaths."
        },
        {
          "num": 2,
          "text": "Calmly pointing to the object, he stated the objective facts: \"The pen cap wasn't closed properly, and the nib is dry.\""
        },
        {
          "num": 3,
          "text": "A gentle but concrete solution was offered: \"Please lend me your pen, and buy me another one to return it.\""
        }
      ]
    },
    "iepGoal": "When loaned items are damaged by peer negligence, they can restrain attacks and retaliation, use gentle and non-aggressive oral language to express their demands and reach a consensus on reasonable repairs, with an achievement rate of more than 85%.",
    "regularClassTip": "The class should establish a property rights education that says \"If you borrow something from someone, you must return it in perfect condition.\"When the lender discovers damage, the instructor will coordinate and make reasonable compensation.",
    "decisionTree": {
      "prompt": "In the situation “💔 A Dried-Out Marker: Asking Kindly to Make Things Right”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When faced with a situation, his brain lost control. He was so angry that he smashed and trampled the entire box of pens of his classmates, and cursed in public, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🖍️ \"Colored pen repair dialogue method\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-79",
    "lessonNumber": 79,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "🏃 After Bumping into a Younger Child - Stop and Ask an Adult to Check for Injury",
    "code": "特自2-II-3",
    "themeColor": "#ef4444",
    "badgeEmoji": "🏃",
    "badgeLabel": "Loving and Caring Big Brother",
    "superSkill": "🩹 First, crouch down and show concern for the first message.",
    "summary": "Hyperactive and impulsive children often run quickly down the hallways after school, accidentally knocking down younger students at corners. These children often run away out of fear of punishment or accuse the other child of blocking their way. We should teach them the responsibility of immediately crouching down to help them up and accompanying them to the health center.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🚀 An unstoppable jet plane and a small water bottle on the ground!",
      "content": "As soon as the bell rang, fourth-grader Jun dashed out of the classroom like a fully fueled jet fighter! His arms outstretched like wings, his strides were incredibly fast, and he yelled, \"Whoosh—! Plane landing!\" Just as he rounded the corner of the stairs, a first-grader carrying a colorful water bottle happened to walk out. Jun was going too fast to stop, and with a loud \"Bang!\" the two collided violently! The little boy was sent flying, landing on the floor, his water bottle flying a considerable distance, his knee scraped and bleeding, and he immediately burst into tears! Jun's heart pounded in his chest. His first instinct was to turn and run back to the classroom, pretending nothing had happened. Just then, the teacher called out from behind, \"Jun! A true hero doesn't run away after causing trouble! Stop!\" Jun slammed on the brakes, turned around, and saw the little boy crying on the ground, tears and snot streaming down his face. Jun gritted his teeth, ran back to the little boy, knelt down, and gently picked up his water bottle: \"Little brother, I'm so sorry! Big brother was running too fast and bumped into you. Where does it hurt? I'll take you to the health center to get some medicine!\" Jun carefully helped the little boy up and slowly walked towards the infirmary. Although Jun had been reminded by his teacher not to run in the corridor, the nurse praised him: \"You took responsible care of your younger brother; you're a brave and responsible young man!\"",
      "question": "When you accidentally knock down a younger student while running, what serious consequences will it cause if you turn and run away? Why is it that \"crouching down to check on them and helping them apply medicine\" shows you're a responsible older brother?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚀 The irresistible jet plane and the small kettle on the ground! ”, guided through puppet show situations: When you run and accidentally knock down a lower-grade classmate, what serious consequences will it cause if you turn around and run away? Why is it a big brother with shoulders to \"squat down first, care about him, and accompany him to apply medicine\"?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three steps to respond to someone you bump into]: 1. Stop immediately and never run away or shirk responsibility; 2. Go to the other person and squat down, gently ask: \"Are you injured?\" Where does it hurt?”;3. Help pick up the dropped items and take the other person to the teacher or health center."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Running around a corner and accidentally knocking down a junior classmate, the four little heroes practice restraining their escape instinct, squatting down to care, and taking care of themselves!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Loving and Protecting Big Brother\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish a \"visual stop line at the corner of the corridor\" to force the corridor to only use catwalks.",
      "ld": "Utilize the \"four-step card for troubleshooting\": Stop ➡️ Squat down ➡️ Say sorry ➡️ Send to health center.",
      "ebd": "Transform the escape instinct of fear of being punished into a positive sense of honor of \"having the courage to take on responsibility and taking the initiative to accompany medical treatment\"."
    },
    "visualCard": {
      "title": "⭐ Three steps to respond when you bump into someone",
      "steps": [
        {
          "num": 1,
          "text": "Stop immediately and absolutely do not run away or shirk responsibility."
        },
        {
          "num": 2,
          "text": "She knelt down beside the other person and gently asked, \"Are you hurt? Where does it hurt?\""
        },
        {
          "num": 3,
          "text": "Help pick up the dropped items, and lead the person to a teacher or a health center."
        }
      ]
    },
    "iepGoal": "When inadvertently colliding with peers in campus activities, they can stop evading or quibbling, take the initiative to give oral care and notify teachers for handling, and the achievement rate is more than 85%.",
    "regularClassTip": "Convex reflectors should be installed in dead corners of school corridors, and pickets should reinforce the reminder of \"walk slowly and lightly\" after class to ensure the safety of lower grade students.",
    "decisionTree": {
      "prompt": "In the situation “🏃 After Bumping into a Younger Child - Stop and Ask an Adult to Check for Injury”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, knocking over someone and seeing the other person bleeding and crying, running away and pretending not to see it, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🩹 \"Squat down and pay attention to the first item first\" and follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-80",
    "lessonNumber": 80,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 4: Peer Friction and Conflict Resolution Advanced",
    "title": "⚖️ Fair Play: Ask a Neutral Person to Check the Rules",
    "code": "特社2-II-2",
    "themeColor": "#0284c7",
    "badgeEmoji": "⚖️",
    "badgeLabel": "Grand Demeanor, Little Referee",
    "superSkill": "⚖️ Fair Suspension of Verification Act",
    "summary": "Special education students exhibit a strong fixation on rules and a strong sense of justice when playing Monopoly, stacking cups, or card games. If they discover that a peer has taken an extra step or an extra card, they immediately assume \"he's cheating\" and slam their fist on the table to overturn the outcome. They are taught to \"pause with their hands forming a 'T' shape with their chest, take out the instruction manual, and check it calmly.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🎲 The dice rolled a little more than usual, just like the Monopoly instruction manual!",
      "content": "Twenty minutes after class, four students were playing the exciting \"Monopoly World Adventure\" board game in the special education classroom. When it was Xiaoming's turn to roll the dice, a five rolled, but when his car piece reached the fourth square, he slipped and jumped directly to the sixth square, buying the high-speed rail station! Sitting opposite him, Jia, with eyes as sharp as an eagle, slammed her hand on the table, stood up, and yelled, \"Cheating! Caught! You deliberately moved an extra square! You big cheater! This round doesn't count!\" Enraged, Jia reached out and overturned the entire Monopoly board, scattering banknotes and houses all over the floor. Xiaoming stood frozen in shock. The teacher walked over and gently patted Jia's head: \"Jia, it's very righteous of you to notice the incorrect move count. But as a referee, you need to have class. Overturning the board only ruins the game.\" When you think there's a problem with the rules, our superpower is—\"make a T with both hands in front of your chest,\" and shout, \"Stop! Let's look at the instructions and recount the steps!\" That way, everyone will admire your professionalism and fairness! Jia, looking at the banknotes scattered on the floor, embarrassedly squatted down to help pick them up: \"Sorry, Xiao Ming, I shouldn't have flipped the table. Let's recount the dice; five should be here!\" Everyone sat down again, and the game was filled with laughter once more!",
      "question": "When playing a board game and you think someone has made a mistake or cheated, will flipping the whole table solve the problem? Why is it that making a pause gesture and calmly checking the rules is more respected?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🎲 The dice roll a little more with the Monopoly instructions!\", guidance through puppet show situations: When playing board games and feeling that someone else has made a mistake or cheated, can overturning the entire table solve the problem? Why are the pause gestures and calm checking rules so admired by everyone?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Steps of Fairness Check]: 1. If you notice a suspected violation or miscalculation of steps, immediately make a \"T\" pause gesture; 2. Say in a steady voice: \"Everyone pauses first, let's check the rules with the instructions\"; 3. Everyone re-counts to confirm. If it is really a slip of the hand, return to the original position and start again."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): A dispute over the number of steps was discovered during the board game duel. Four little heroes practiced the start-pause gesture and calmly checked the rules without flipping the table!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Referee with Great Dignity\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "An enlarged version of the \"Key Game Rules Card\" is provided and placed in the center of the board. In case of doubt, the text shall prevail.",
      "ld": "Using step counting tags or big dice, the whole group counts \"one, two, three\" in unison with each step, which is open and transparent.",
      "ebd": "Before you want to overturn the table, clasp your hands on your stomach, close your eyes and take a deep breath for the count of five."
    },
    "visualCard": {
      "title": "⭐ Fair Verification in Three Steps",
      "steps": [
        {
          "num": 1,
          "text": "If you notice a suspected violation or a miscount of steps, immediately make a \"T\" sign to pause."
        },
        {
          "num": 2,
          "text": "He said calmly, \"Everyone, please pause for a moment. Let's go over the rules with the instruction manual.\""
        },
        {
          "num": 3,
          "text": "Everyone should double-count to confirm. If it was indeed a slip of the hand and a mistake, go back to the original position and start over."
        }
      ]
    },
    "iepGoal": "When participating in regular board games or competitions and encountering disputes or suspected violations, they can restrain the urge to overturn props or physically attack, and use time-out and rule review procedures to resolve differences, with an achievement rate of more than 85%.",
    "regularClassTip": "Before board game activities in ordinary classes, the \"table captain/chief referee of each group\" should be clearly designated, and the rule of \"if there is a dispute, ask the table captain to suspend the game, and those who flip the table will be directly disqualified\".",
    "decisionTree": {
      "prompt": "In the situation “⚖️ Fair Play: Ask a Neutral Person to Check the Rules”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Realizing that he was lagging behind and about to lose, he knocked over the entire chessboard and shouted: \"It doesn't count!\" Start over!”",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take a deep breath to suppress your frustration, keep playing until the end, and generously reach out to praise your winning opponent!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-81",
    "lessonNumber": 81,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "👩‍🏫 A Substitute Teacher: Keeping Routines and Being Helpful",
    "code": "特自2-II-2",
    "themeColor": "#059669",
    "badgeEmoji": "👩‍🏫",
    "badgeLabel": "A Competent Navigator and Guide",
    "superSkill": "🧭 A steady compass on substitute teaching days",
    "summary": "When the original teacher is absent and a substitute teacher enters the classroom, it often causes extreme anxiety and maladjustment among autistic students, or students with emotional disorders take the opportunity to cause trouble and disrupt order. Teaching students to \"follow established classroom rules and proactively introduce the class schedule to the substitute teacher\" demonstrates good manners.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "👓 New glasses on the podium and a little class tour guide!",
      "content": "This morning, during the first period of Chinese class, it wasn't the familiar teacher who walked into the classroom, but Ms. Zhang, who wore silver-rimmed glasses and spoke with a soft voice. Ms. Zhang wrote her name on the blackboard: \"The teacher is away for training today, so I'll be filling in for you all day!\" Upon seeing the change of teacher, Yu tensed up, clutching his schoolbag tightly and repeatedly muttering, \"Not the teacher! Not the teacher! The timetable is broken!\" A few mischievous students in the back even took the opportunity to eat candy and chase each other down the hallway. At this moment, Jia stood up and shouted, \"Stand up, salute! Good morning, teacher!\" Jia stepped forward and handed Ms. Zhang a \"Special Education Class Schedule\": \"Hello, Ms. Zhang. Every day, we read a story and take three deep breaths in the first period. I'm Jia, the class monitor, and we welcome you!\" Seeing Jia's composure, Yu took a deep breath and slowly put down his schoolbag. Ms. Zhang smiled and stamped the whole class's record: \"You are the most sensible and well-behaved class I've ever seen!\" ”",
      "question": "What happens if we deliberately cause trouble and create a disturbance when our familiar teacher is absent or a substitute teacher comes to class? Why is someone a true hero for proactively telling the new teacher about the class's good rules?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"👓 New glasses and class guide on the podium!”, guided through the puppet show situation: What will happen when a familiar old tutor takes leave and a substitute teacher comes to class, deliberately causing trouble and making trouble? Why is it a true hero to take the initiative to tell a new teacher about the good rules of the class?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Steps for Substitute Teachers]: 1. Notice the nervousness of changing teachers, take a deep breath and tell yourself: \"The work and rest procedures are the same\"; 2. Stand up and salute loudly to say hello, showing class politeness and gentlemanly demeanor; 3. Take the initiative to explain to the substitute teacher the usual rules for handing in homework and speaking."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Tasks for all members): Familiar tutors ask for leave, unfamiliar substitute teachers enter the class, the four little heroes practice restraining anxiety and booing, and show a model of compliance!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Competent Navigator\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Post the photo and name of the substitute teacher on the \"Important Announcement Column\" on the blackboard the day before, announcing in advance that the schedule will remain unchanged.",
      "ld": "Provide a visual \"daily classroom fixed flow chart\" posted on the podium to facilitate substitute teachers and students to follow it.",
      "ebd": "Resist the urge to make trouble when the substitute teacher is not familiar with the situation, and serve as a small assistant teacher for class order."
    },
    "visualCard": {
      "title": "⭐ Three steps for substitute teachers to cope",
      "steps": [
        {
          "num": 1,
          "text": "Sensing the nervousness and anxiety of changing teachers, I took a deep breath and told myself: \"The daily routine is the same.\""
        },
        {
          "num": 2,
          "text": "Stand up loudly, salute and greet the teacher, demonstrating polite and gentlemanly manners"
        },
        {
          "num": 3,
          "text": "Actively explain the rules regarding homework submission and participation to the substitute teacher."
        }
      ]
    },
    "iepGoal": "When the main teacher is absent and the substitute teacher teaches, the student can maintain normal routines and classroom routines for 40 minutes without serious stubborn resistance or intentional violations, and the achievement rate is above 85%.",
    "regularClassTip": "Before taking leave, the original teacher should write detailed support guidelines for special education children and remind substitute teachers to maintain structured routines and positive oral language enhancement.",
    "decisionTree": {
      "prompt": "In the situation “👩‍🏫 A Substitute Teacher: Keeping Routines and Being Helpful”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. When the teacher is unfamiliar, he yells and throws paper airplanes in the classroom, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🧭 A Steady Compass on Substitute Day\", follow the steps to properly deal with it step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-82",
    "lessonNumber": 82,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "💺 New Seats: Three Ways to Get to Know a Classmate",
    "code": "特自2-II-1",
    "themeColor": "#3b82f6",
    "badgeEmoji": "💺",
    "badgeLabel": "Little Expert at Adapting to New Environments",
    "superSkill": "🪑 New seat icebreaker greeting card",
    "summary": "Children with autism exhibit a strong fixation on spatial locations. When the class reshuffles seating each month, they often cry and kick their desks, refusing to move because they feel they are \"leaving their familiar, cozy spot by the window\" or \"having a classmate they don't like sitting next to them.\" We teach children to use three icebreaker phrases to help them adapt to new environments.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🗺️ The wind blowing the school desks and chairs and the new neighbor's colored pencils!",
      "content": "At the beginning of each month, it's time for the whole class at OO Elementary School to change seats. The teacher announced the results of the draw: Yu would be moving from his safest spot in the corner with a wall to the second row in the middle, and next to him would be Jun, who usually talks very loudly! Upon seeing his new seat, Yu's heart sank. He clung to the corner of his desk, tears welling in his eyes, and protested loudly, \"I don't want to move! That's my desk! There are too many people in the middle, it's scary!\" The teacher came over and gently patted Yu's shoulder: \"Yu, moving is like a little adventure. Sitting in the middle, you can see the words on the blackboard more clearly, and Jun is strong enough to help you carry your lunchbox! We'll use three 'icebreaker phrases' to get to know our new neighbors!\" Yu took a deep breath, moved his backpack, and sat down in the middle. Jun immediately smiled broadly and gave Yu a newly bought dinosaur sticker: \"Good morning, Yu! From now on, we're deskmates and best buddies!\" Looking at the dinosaur stickers on the table, Yu finally felt relieved. It turns out that changing seats can also help you make good friends!",
      "question": "If someone keeps crying and making a scene in their old seat when we change seats, can we refuse to change? When you move to a new seat, what's the first thing you should say to your new deskmate to make friends?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🗺️ The desks and chairs blown by the strong wind and the new neighbor’s colored pens!”, guidance through puppet show situations: If you stay in the old seat and cry and make a fuss when changing seats, can you not change seats? When you move to a new position, how do you say the first thing to your new deskmate to make friends?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three steps to adapt to the new seat]: 1. Feel the panic and uneasiness of leaving the old seat, and take a deep breath; 2. Arrange the textbooks and pencil cases neatly, and establish a new small territory of your own; 3. Turn to the new neighbor and smile and say: \"Hello, please give me your advice this semester!\"”."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): The whole class changes seats and draws new neighbors. The four little heroes practice restraining spatial fixation, relocating generously and actively breaking the ice!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Expert in Adapting to the New Environment\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "A \"New Seat Map Preview\" will be provided the day before the seat change, allowing students to sit in the new seat for 5 minutes to experience the view and light.",
      "ld": "Provide a \"three-sentence ice-breaker card for your new roommate\" and stick it on the pencil box: \"Hello/my name is ○○/please give me your advice.\"",
      "ebd": "Before you encounter a classmate you don’t like and want to kick the table in protest, take three deep breaths and discuss the bottom line with your teacher in private."
    },
    "visualCard": {
      "title": "⭐ Three steps to getting used to your new seat",
      "steps": [
        {
          "num": 1,
          "text": "Sensing the panic and unease of leaving my old seat, I took a deep breath."
        },
        {
          "num": 2,
          "text": "Arrange your textbooks and pencil case neatly, and establish your own new little territory."
        },
        {
          "num": 3,
          "text": "Turning to her new neighbor with a smile, she said, \"Hello, nice to meet you this semester!\""
        }
      ]
    },
    "iepGoal": "When class seats are changed regularly or in response to needs, personal belongings can be moved into place within 15 minutes under adult prompts without recalcitrant refusal behavior, and the achievement rate is above 85%.",
    "regularClassTip": "When regular class teachers arrange seats for special education children, they should avoid arranging them in areas exposed to strong light, air-conditioning outlets or behind high-interference door moving lines.",
    "decisionTree": {
      "prompt": "In the situation “💺 New Seats: Three Ways to Get to Know a Classmate”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, clinging to the old desk, crying and kicking, lying on the ground and refusing to move, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🪑 New Seat Ice Breaking Greeting Card\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-83",
    "lessonNumber": 83,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🚌 Field-Trip Bus Safety: Stay Seated and Ask for Help",
    "code": "特自1-II-3",
    "themeColor": "#0284c7",
    "badgeEmoji": "🚌",
    "badgeLabel": "The Elegant Gentleman's Car Ride",
    "superSkill": "🚌 Tour bus etiquette guidelines",
    "summary": "When the whole school travels on large tour buses for field trips, special education students often become overly excited, chasing and jumping in the aisles, grabbing microphones and shouting, or breaking down in tears due to vestibular motion sickness and vomiting. They are taught to \"fasten their seatbelts, quietly look out the window at the scenery, and immediately raise their hands to grab a vomit bag if they feel nauseous.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "⛰️ A wobbly bus and refreshing mint green candy!",
      "content": "Today is the annual autumn field trip, and the whole school is going on a two-hour bus tour to the Natural Science Museum! As soon as we got on the bus, Jun was extremely excited. He unbuckled his seatbelt and jumped around in the narrow aisle, shouting, \"Go! Let's see who gets to the last row of big sofas first!\" As the bus started moving and turned, Jun lost his balance and fell to the ground, almost hitting his forehead on the metal railing. The teacher came over and helped Jun up, saying seriously, \"Running and jumping in the aisle while the bus is moving is very dangerous. If the driver brakes suddenly, you'll be thrown out like a missile!\" The teacher helped Jun fasten his two-point seatbelt. At this moment, He, sitting by the window, turned pale from the swaying of the bus and clutched his stomach, feeling nauseous. Jia saw this and immediately took a plastic vomit bag from the storage pocket in front of his seat, raising his hand and shouting, \"Teacher, He is feeling carsick and nauseous!\" The teacher quickly handed out some mint candies and turned the air conditioner vent towards He's forehead. He sucked on the candy, looked out at the peaceful mountains, and his stomach gradually stopped churning. Everyone arrived safely and happily at the Science Museum!",
      "question": "What terrible dangers might occur if you unbuckle your seatbelt and run around on a moving tour bus? What should you do if you feel dizzy and nauseous while riding in a vehicle?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"⛰️ A rickety bus and mint green candies! ”, guided through puppet show situations: What terrible dangers will occur if you take off your seat belt and run around on a moving tour bus? What should you do if you feel dizzy and want to vomit while riding in a car?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Rules for Tour Bus Safety]: 1. Fasten the seat belt around your waist as soon as you get on the bus and do not unbutton it at will; 2. Keep speaking at a moderate volume, do not scream or run in the aisle; 3. If you feel queasy and dizzy, immediately raise your hands to grab a vomit bag and take a deep breath."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Mission for all members): The off-campus teaching tour bus sets off, and the four little heroes practice fastening their seat belts, maintaining civility and courtesy on the bus, and taking care of each other!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Elegant Gentleman Riding a Car\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Arrange to sit in the front row in a ventilated area by the window, and provide noise-reducing earmuffs to reduce the low-frequency roar of the vehicle engine.",
      "ld": "Use the picture card to demonstrate the \"Three Don'ts of Riding in a Car\": don't leave your seat, don't scream, and don't stick your head and hands out of the window.",
      "ebd": "Guide to transform excess excitement into a static mini-game of observing the scenery outside the window and playing \"Counting Red Cars on the Road\"."
    },
    "visualCard": {
      "title": "⭐ Three Safety Rules for Tour Buses",
      "steps": [
        {
          "num": 1,
          "text": "Once you get in the car, immediately fasten your seatbelt around your waist and do not unfasten it unnecessarily."
        },
        {
          "num": 2,
          "text": "Speak at a moderate volume, do not scream or run in the aisle"
        },
        {
          "num": 3,
          "text": "If you feel nauseous or dizzy, immediately grab a vomit bag and take a deep breath."
        }
      ]
    },
    "iepGoal": "When participating in off-campus teaching and taking a large tour bus, the person can fasten the seat belt throughout the whole process and maintain quiet riding manners, without wandering in the aisles or dangerous probe behaviors, and the achievement rate is more than 90%.",
    "regularClassTip": "The history of motion sickness of special education children should be confirmed before off-campus teaching in schools, and the car attendant or parents should help take motion sickness medicine half an hour before getting on the bus.",
    "decisionTree": {
      "prompt": "In the situation “🚌 Field-Trip Bus Safety: Stay Seated and Ask for Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, running wildly and chasing in the aisle of the traveling tour bus, grabbing the microphone and shouting, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🚌 Tour Bus Civilization Code\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-84",
    "lessonNumber": 84,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "Food Preferences Sensory Needs and Asking for Support",
    "code": "特自1-II-1",
    "themeColor": "#10b981",
    "badgeEmoji": "🍽️",
    "badgeLabel": "Expressing Food Needs",
    "superSkill": "Explain my food and sensory needs",
    "summary": "Practise explain my food and sensory needs using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "Explain my food and sensory needs",
      "content": "A food smell makes Jia uncomfortable. Jia puts the utensils down safely and asks the teacher for help. Together they check the agreed dietary arrangements. The lesson practises expressing needs. Tasting food is not forced, and tolerating discomfort is not a condition for a reward.",
      "question": "If a food makes you uncomfortable, what help could you ask for?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Explain my food and sensory needs”. If a food makes you uncomfortable, what help could you ask for? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Notice discomfort from a smell, texture or body sensation → Tell a caregiver about smaller portions, alternatives or other needs → Agree on suitable mealtime arrangements with an adult"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Explain my food and sensory needs",
      "steps": [
        {
          "num": 1,
          "text": "Notice discomfort from a smell, texture or body sensation"
        },
        {
          "num": 2,
          "text": "Tell a caregiver about smaller portions, alternatives or other needs"
        },
        {
          "num": 3,
          "text": "Agree on suitable mealtime arrangements with an adult"
        }
      ]
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can tell a caregiver about smaller portions, alternatives or other needs. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Tell a caregiver about smaller portions, alternatives or other needs. Accept speech, pointing or gestures without public comparisons.",
    "decisionTree": {
      "prompt": "If a food makes you uncomfortable, what help could you ask for?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Tell a caregiver about smaller portions, alternatives or other needs",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "useBrowserSpeech": true,
    "homeTask": {
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Tell a caregiver about smaller portions, alternatives or other needs. Report no opportunity or any support needed too."
    }
  },
  {
    "id": "b-idea-85",
    "lessonNumber": 85,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🌧️ Heavy Rain: Choosing a Quiet Indoor Activity",
    "code": "特自2-II-2",
    "themeColor": "#6366f1",
    "badgeEmoji": "🌧️",
    "badgeLabel": "Rainy Day Self-Guided Expert",
    "superSkill": "🎲 Rainy Day Fun Box",
    "summary": "When it rains, the playground becomes muddy and closed. Special education students who are used to running and playing ball on the playground often become restless in the classroom, frantically sliding on bases in the corridor, or banging on doors and making noise. We guide the students to activate the \"Rainy Day Indoor Fun Box\" and learn to look at picture books, do puzzles, and play two-player static board games to calm their minds and bodies.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🌧️ The big raindrops outside the window and the 3D Rubik's Cube on the table!",
      "content": "At 2 PM, a torrential downpour began, turning the playground into a vast expanse of water. The student affairs office announced over the loudspeaker: \"Attention all students, the playground will be completely closed this afternoon. Please do not go outdoors after class!\" Jun, who usually rushed to the playground to play basketball after every break, was like a caged cheetah, pacing restlessly in the corridor, stamping his feet: \"What am I supposed to do if I can't play basketball! So boring! So incredibly boring!\" He grabbed a basketball and began dribbling it wildly in the corridor, the deafening \"thump! thump! thump!\" The noise drew the attention of a teacher from the next class, who came out to protest. The teacher gently took the basketball away and pulled a gleaming \"Rainy Day Indoor Treasure Box\" from a cabinet: \"Jun, it's raining heavily outside, the perfect time for a brain upgrade! Inside the box are a 3D maze ball, a 100-piece puzzle, and a two-player Connect Four game. Want to play a 'Connect Four Showdown' with me?\" Jun looked at the exquisite four-in-a-row chessboard and sat down curiously. For fifteen minutes, Jun was completely focused on the chessboard, thinking about the layout, while listening to the pattering rain outside the window. He felt extremely calm: \"Playing chess in the classroom on a rainy day is even more intellectually challenging and fun than playing ball!\"",
      "question": "What dangers and noise would it cause to dribble a basketball wildly in the hallway when it's raining heavily and we can't go to the playground? What static games can we play in the classroom to make our brains smarter?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌧️ The heavy raindrops outside the window and the three-dimensional puzzle magic cube on the table! ”, guided through the puppet show situation: When it rains heavily and you can’t go to the playground, what dangers and noise will it bring if you shoot basketball wildly in the corridor? What static games can be played in the classroom to make the brain smarter?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Tips for Coping with Yourself Indoors on Rainy Days]: 1. Accept the fact that it is rainy, take a deep breath and tell yourself: \"Rainy days are a good quiet day\";2. Go to the class library corner or board game cabinet and pick a static treasure that you like;3. Sit quietly and concentrate for thirty minutes, enjoying the peaceful time in the rain."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Heavy rain closed outdoor activities on the playground. The four little heroes practiced initiating rainy day registration and focused on indoor board games and reading!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Expert on Rainy Days\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design a \"rainy day indoor activity list chart\" and post it on the bulletin board: 1. Read the dinosaur encyclopedia 2. Puzzle challenge 3. Coloring mandala 4. Play chess duel.",
      "ld": "Prepare board games with simple and intuitive rules (such as Kuaishou cup stacking, Tower of Babel building blocks, and four-piece chess) to lower the threshold of written rules.",
      "ebd": "Before complaining about \"being bored and wanting to throw the ball\", take three deep breaths and be guided by the teacher into a one-to-one focused board game situation."
    },
    "visualCard": {
      "title": "⭐ Three ways to stay indoors on a rainy day",
      "steps": [
        {
          "num": 1,
          "text": "Accept the fact that it's raining, take a deep breath and tell yourself: \"Rainy days are peaceful and beautiful days.\""
        },
        {
          "num": 2,
          "text": "Go to the classroom book corner or board game cabinet, choose a static item you like"
        },
        {
          "num": 3,
          "text": "Sit quietly and immerse yourself in the moment for thirty minutes, enjoying the peaceful time in the rain."
        }
      ]
    },
    "iepGoal": "When outdoor activities are limited on rainy days, students can independently choose and participate in static activities in the classroom (reading, educational board games, and painting) for more than 20 minutes without playing ball or collision in the corridor. The achievement rate is more than 85%.",
    "regularClassTip": "Schools should open the library and indoor building block corner after class on rainy days, and assign senior service teams to patrol the corridors to maintain slow walking order.",
    "decisionTree": {
      "prompt": "In the situation “🌧️ Heavy Rain: Choosing a Quiet Indoor Activity”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Realizing that he was lagging behind and about to lose, he knocked over the entire chessboard and shouted: \"It doesn't count!\" Start over!”",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Take a deep breath to suppress your frustration, keep playing until the end, and generously reach out to praise your winning opponent!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-86",
    "lessonNumber": 86,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🧹 Cleaning Tasks - Use Tools within an Agreed Safe Role and Avoid Splashing Others",
    "code": "特自2-II-3",
    "themeColor": "#eab308",
    "badgeEmoji": "🧹",
    "badgeLabel": "Cleanliness and Environmental Protection Little Guardian",
    "superSkill": "🧽 Little hero of spring cleaning",
    "summary": "At the end of each semester, during the school-wide cleaning, special education students often run away or slack off due to tactile aversion to the blackened washbasins, moss-covered ditches, and dirty buckets, or get overly excited and splash water everywhere with hoses, soaking their classmates. The school teaches students to \"divide tasks for washing, use water safely, and remember that labor is honorable.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🧼 A sparkling handwashing station and a cleaning agent in rain boots!",
      "content": "This afternoon was OO Elementary School's once-a-semester \"year-end cleaning\"! The special education class was responsible for cleaning the central handwashing station and leaf-collecting ditch of the entire special education building. The ditch was filled with black, sticky, withered leaves, and green moss had grown in the grout lines of the handwashing station tiles. Upon seeing the mud, He retreated far away, waving his little hands: \"So dirty! So disgusting! I don't want to touch it!\" Jun, who was responsible for holding the long hose, got too excited and grabbed the hose, turning the water jet to maximum. \"Whoosh—!\" he sprayed water everywhere in the corridor like a fire truck, almost soaking Yu's pants and shoes! The teacher came over and turned off the tap: \"Everyone, stop! The cleaning is a magical 'renewal operation,' not a water fight! As long as everyone puts on rain boots and waterproof gloves, we are cleaning agents defeating the dirt monster!\" The teacher assigned tasks: He was responsible for wearing gloves and using long tongs to pick up fallen leaves; Jun was responsible for vigorously scrubbing the grout lines of the tiles with a stiff-bristled brush; Yu was responsible for squeegeeing the dirty water off the floor; and Jia was responsible for checking every corner. The four of them worked together for half an hour, and the originally blackened sink tiles became sparkling clean, like a mirror! Looking at the spotless sink, everyone felt a tremendous sense of accomplishment!",
      "question": "If everyone is diligently scrubbing during a big clean-up, but you're just spraying water everywhere with a hose, what dangers might that pose? How would you feel if you personally cleaned a dirty and messy environment until it was sparkling clean?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🧼 The shiny sink and the cleaning agent wearing rain boots!”, guided through the puppet show situation: During general cleaning, if everyone is scrubbing carefully, but you take the water pipe and spray water everywhere, what dangers will it bring? How do you feel when you clean a dirty environment with your own hands and make it sparkle?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Principles of General Cleaning Work]: 1. Wear a waterproof apron and rubber gloves, and protect yourself so that you are not afraid of getting dirty; 2. Hold the long-handled brush firmly with both hands to scrub away dirt, and do not spray the water pipe downward; 3. Scrape away the accumulated water, arrange the utensils neatly, and enjoy the sense of honor of a clean environment."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Tasks for all staff): The whole school cleans the sinks and public areas. The four little heroes practice division of labor and cooperation, use safe water and do not play!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Guardian of Cleanliness and Environmental Protection\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Prepare exclusive waterproof long-sleeved aprons, rain boots and thick rubber gloves for children with sensitive touch to completely block dirty water and dirt from directly contacting the skin.",
      "ld": "Break down general cleaning into \"clipping fallen leaves\" ➡️ Pour detergent ➡️ Brush brush brush ➡️ \"Scrape clean\" four-frame clear process card.",
      "ebd": "It is strictly prohibited to use clean water pipes as toys to shoot at each other. It is stipulated that the water outlet of the water pipe must always be close to the ground within thirty centimeters."
    },
    "visualCard": {
      "title": "⭐ Three Principles of Spring Cleaning",
      "steps": [
        {
          "num": 1,
          "text": "Wearing a waterproof apron and rubber gloves will protect you from getting dirty."
        },
        {
          "num": 2,
          "text": "Hold the long-handled brush firmly with both hands and scrub the dirt vigorously, keeping the hose pointing downwards to avoid spraying haphazardly"
        },
        {
          "num": 3,
          "text": "Scrape away the puddles, arrange the utensils neatly, and enjoy the sense of accomplishment from a cleaner environment."
        }
      ]
    },
    "iepGoal": "During a school cleaning activity, use agreed safety equipment with adult guidance, participate in the assigned task for up to 25 minutes, and ask for help or a break when needed. The draft target is 85%; adapt it to baseline data.",
    "regularClassTip": "School cleaning guidance should focus on anti-skid and fall prevention safety, and give positive praise and rewards to the whole class for their hard work after cleaning.",
    "decisionTree": {
      "prompt": "In the situation “🧹 Cleaning Tasks - Use Tools within an Agreed Safe Role and Avoid Splashing Others”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control. He takes a water pipe and sprays water everywhere, soaking his classmates and corridors, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🧽 \"Little Hero of Cleaning Labor\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-87",
    "lessonNumber": 87,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 5: Special Situations and Environmental Adaptation",
    "title": "🚶 Stranger Safety: Do Not Go Along or Get into a Car",
    "code": "特自2-II-3",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚶",
    "badgeLabel": "Self-Protection Little Guardian",
    "superSkill": "🛑 Strangers' Red Line Brakes",
    "summary": "Special education children are often naive and lack vigilance towards strangers, or are easily attracted by candy, Pokémon cards, or cute puppies. When a stranger in a car asks for directions and says, \"Little one, get in the car and I'll buy you a drink,\" they readily get in. They should be taught the safety red lines: \"Take three steps back, loudly refuse, and run to a convenience store for help.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🚗 A black sedan with its windows rolled down and a gleaming convenience store door!",
      "content": "Walking home from school on the walkway, a black sedan suddenly pulled up to a stop, its window slowly rolling down. Inside sat a smiling stranger wearing sunglasses, holding a bag of sparkly limited-edition Pokémon card packs and a cute cat plush toy: \"Hello, little friend! Uncle is lost at OO Elementary School. Could you sit in the front seat and help Uncle get directions? This whole set of Charizard card packs and this adorable cat plush toy is a thank you gift!\" Jun's eyes lit up at the sight of the rare Pokémon cards, and he couldn't resist walking towards the car door, reaching out to take the pack! Yu, walking beside him, saw this and immediately panicked! Remembering the \"stranger red line braking\" drill they'd practiced in class, Yu rushed forward, grabbing Jun's backpack strap and shouting, \"Jun, stop! You absolutely cannot get in the car!\" Yu pulled Jun back three steps, shouting into the car window, \"We don't know!\" \"We need to find a police officer!\" With that, Yu and Jun grabbed their backpacks and rushed into the brightly lit FamilyMart convenience store at the intersection without looking back, shouting for help from the clerk: \"Auntie! There are strangers outside asking us to get in their car!\" The clerk immediately sheltered them behind the checkout counter and called the police. Seeing the situation was serious, the black car sped away! When the teacher and police arrived at the convenience store, they hugged the two children tightly and praised them: \"Yu and Jun reacted so quickly! You successfully protected your lives!\"",
      "question": "When a stranger on the street offers you a fun toy or delicious snack and asks you to get in their car and show them the way, can you trust them? Why should you never get in their car no matter what they say?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚗 The black car with the windows rolled down and the gleaming supermarket door!”, guidance through puppet show situations: When a stranger on the roadside offers a fun toy or delicious snack and asks you to get in the car and lead the way, can you trust him? Why can't he get in the car no matter what he says?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Tips to Prevent Abduction and Protect Yourself]: 1. When a stranger approaches you in a car, immediately take three steps back to keep your distance; 2. Shout loudly: \"I don't know, I want to find an adult!\"”Determined not to get in the car;3. Without looking back, run with all your strength into the nearest convenience store, school or store for help."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Encountered by a strange vehicle on the way out of school and lured by gifts, the four little heroes practiced activating the safety red line, rejecting the temptation and rushing to the safe stronghold!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Little Guardian of Self-Protection\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish an iron rule of absolute safety: \"Adults will never ask elementary school students for help when they get lost. 100% of the people who ask you to get in the car are bad people. Just take three steps back and run to the supermarket.\"",
      "ld": "Use children's songs for self-defense exercises: \"I won't take candy toys, I won't get into strange cars; shout loudly, run, run, run, rush into the supermarket to find an adult!\"",
      "ebd": "When attracted by expensive bait, the \"brain brake\" is forcibly activated, and the eye immediately shifts away from staring at the gift."
    },
    "visualCard": {
      "title": "⭐ Three ways to prevent abduction and protect yourself",
      "steps": [
        {
          "num": 1,
          "text": "If a stranger tries to strike up a conversation while driving by, immediately take three steps back to maintain distance."
        },
        {
          "num": 2,
          "text": "Shout loudly: 'I don't know, I need to find an adult!' Refuse to get into the car"
        },
        {
          "num": 3,
          "text": "Without looking back, he ran as fast as he could into the nearest convenience store, school, or shop to ask for help."
        }
      ]
    },
    "iepGoal": "When encountering strangers in situation simulation or real life to strike up a conversation, give gifts or ask for companionship, they can refuse the temptation and perform the three steps of safe evacuation protection (step back, shout, ask for help), with an achievement rate of more than 95%.",
    "regularClassTip": "The certification of \"Love and Safe Guidance Store\" should be implemented around the school, and anti-abduction scenarios should be practiced regularly at gatherings to strengthen children's awareness of self-protection in crisis.",
    "decisionTree": {
      "prompt": "In the situation “🚶 Stranger Safety: Do Not Go Along or Get into a Car”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control and is attracted by free toys and candies. Unsuspectingly, it opens the door and gets in the car, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🛑 \"Stranger Red Line Brake\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-88",
    "lessonNumber": 88,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🏫 Returning to the General Classroom: Finding My Group and Joining In",
    "code": "特社1-II-2",
    "themeColor": "#059669",
    "badgeEmoji": "🏫",
    "badgeLabel": "Fusion and Adaptation Pioneers",
    "superSkill": "🌉 Puton Seamless Bridge",
    "summary": "Special education children, accustomed to the protection of small classes of one to four in disengagement special education classes, often feel lost and stand blankly at the door when the bell rings to return to a regular class of thirty students. This is because the classroom is noisy, they cannot find their seats, or they have missed the progress. We teach them the transition method of \"looking at the blackboard homework before entering the classroom, smiling and nodding to the neighbor when walking to their seats\".",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🚪 Two large doors and a green pass for traveling through time!",
      "content": "The school bell rang, signaling the end of class. Yu, having finished two lessons in the special education classroom, packed his bag and prepared to return to the large classroom of Class 2, Grade 4. Reaching the classroom door, Yu stopped, watching his thirty classmates laughing and playing loudly, the blackboard covered in densely packed Chinese Language Lesson 7 homework. A sudden, unfamiliar panic welled up inside Yu. He gripped his bag straps tightly, frozen like an outsider, hesitant to go in. Just then, the teacher slipped a \"seamless transition card\" into Yu's pocket: \"Yu, the regular class is your stage! Do three things when you enter: First, look up at the blackboard to see what lesson it is; second, go to your seat and gently pull out your chair; third, smile at your deskmate and say, 'I'm back!'\" Yu took a deep breath and stepped into the classroom. He pulled out his chair, turned to his deskmate Xiao Ming, and smiled, saying, \"Xiao Ming, I'm back. Which notebook would you like now?\" Xiao Ming smiled and pointed to the blackboard: \"Yu, you're back! Quickly get your vocabulary notebook, we're about to start writing!\" Yu quickly took out his notebook and smoothly caught up with the rest of the class!",
      "question": "When returning to a regular class from a special education class, if you stand at the door in fear and space out, will you be able to keep up with the rest of the class? What three things should you do upon entering the classroom to quickly integrate into a larger class?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚪 Two gates and a green pass through time and space!”, guidance through puppet show situations: When returning from a special education class to a regular class, if you stand in a daze at the door in fear, will you be able to keep up with the progress of the whole class? What three things should you do when you enter the classroom to quickly integrate into the big class?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps to Return to Class]: 1. Walk to the door of the classroom, take a deep breath, and look up at the blackboard for the current subject and page number; 2. Quietly walk to your seat, sit down, and take out your textbooks and stationery; 3. Smile to your seatmate next to you and say, \"I'm back!\"”Proactively confirm progress."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): After the special education class returns to the regular class, the four little heroes practice sitting calmly, confirming the progress and actively saying hello to their peers!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Integration and Adaptation Little Pioneer\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Prepare a \"Return to Class Transition Manual\" and stick it on the inside of your school bag, clearly indicating the three fixed actions after returning to class.",
      "ld": "Ordinary classes are assigned fixed \"peer navigators\" who will proactively remind special education children of the current textbook and page number when they return to class.",
      "ebd": "When you feel irritable in the face of a noisy large class, take three deep breaths and first focus on the current task on the blackboard."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Return to Work",
      "steps": [
        {
          "num": 1,
          "text": "Take a deep breath as you walk to the classroom door, and look up at the blackboard to see the current subject and page number."
        },
        {
          "num": 2,
          "text": "Quietly walked to her seat, took out her textbooks and stationery."
        },
        {
          "num": 3,
          "text": "Smile at your deskmate and say, \"I'm back!\" Proactively check on their progress."
        }
      ]
    },
    "iepGoal": "When returning from the special education class to the ordinary class classroom, the student can independently complete the seating process within 2 minutes and take out the corresponding school supplies to study without being stuck at the door or refusing to take a seat. The achievement rate is above 85%.",
    "regularClassTip": "Regular class teachers should greet special education children with a brief and gentle nod when they return to class, and guide members of the same group to provide acceptance and support.",
    "decisionTree": {
      "prompt": "In the situation “🏫 Returning to the General Classroom: Finding My Group and Joining In”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, and the child shrinks in fear at the door of the corridor, shouts, and refuses to enter the classroom, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🌉 \"Put Seamless Connection Bridge\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-89",
    "lessonNumber": 89,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "👦 My Learning Support Classroom: A Place to Recharge My Strengths",
    "code": "特社2-II-2",
    "themeColor": "#3b82f6",
    "badgeEmoji": "⚡",
    "badgeLabel": "Confident and Radiant Little Angels",
    "superSkill": "⚡ Charging Station's Proud Declaration",
    "summary": "When faced with curious questions from their classmates in regular classes, such as, \"Are you stupid for going to the gifted class?\", special education students often feel ashamed, lower their heads and cry, or become angry and hit others. Instead, teach them, \"That's my superpower charging station! I practice emotional braking and reading magic there!\" This fosters a confident and positive response.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🔋 Superman cape and shiny badges in the secret base!",
      "content": "While eating lunch, a classmate from a regular class sitting in the back row looked at He curiously and asked, \"He, why are you never in the classroom on Tuesdays and Thursdays? Why do you go to that study room at the very bottom of the second-floor corridor? Is that a place for idiots?\" These words struck He like a blow to the heart. Her eyes instantly reddened, and she so sadly lowered her head almost to her lunchbox, her spoon trembling in her hand. She wanted to run away on the spot. Just then, Jun, sitting next to her, suddenly stood up, puffed out her chest, and loudly proclaimed, \"No way! That's the school's strongest 'Superhuman Recharging Base'! We learn there how to brake our emotions, how to be communication masters, and the teachers even teach us super memory magic!\" Looking at the brave Jun, He took a deep breath, wiped away her tears, and slowly raised her head, smiling into the classmate's eyes, saying, \"Yes! I practice fixing my brain that used to 'dance like Chinese characters' there. Now I recognize twice as many characters as before!\" \"If you have any emotional magic tricks you don't know, I can teach you!\" The classmate's eyes widened in admiration: \"Wow! That sounds so cool! I really want to try it out too!\" The heavy weight in He's heart disappeared, replaced by a sense of pride!",
      "question": "When others ask you why you go to the special education learning room, will crying out of inferiority or throwing a tantrum to eliminate prejudice? Confidently talk about the superpowers you learned in the learning room, and why that's the best way to win others' admiration?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🔋 The Superman cape and shiny badge in the secret base!”, guidance through puppet show situations: When others curiously ask you why you go to the special education classroom, can you eliminate prejudice by crying with low self-esteem or losing your temper and hitting others? Why can you best win the admiration of others by confidently speaking out about the superpowers you learned in the classroom?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps to Respond Confidently]: 1. When facing a classmate’s curious inquiry, raise your head and straighten your chest and look directly into the other person’s eyes; 2. Raise the corners of your mouth and smile, lowering your head without getting angry or shy; 3. Say loudly and confidently: “That’s my super power charging station, I learned many powerful skills there!””."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Faced with peers curiously asking about the purpose of the special education class, the four little heroes practiced activating the charging station and responded proudly and confidently!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Confident Shining Little Angel\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design \"My Super Power Handbook\": list the 5 powerful skills you learned in the special education class to enhance your self-identity.",
      "ld": "Teach the golden saying to respond confidently: \"I practice my special powers there, and that is my exclusive charging station!\" Read it aloud three times.",
      "ebd": "When being misunderstood and ridiculed, restrain the urge to punch the person and use a tall stance and a confident smile to give the highest level of counterattack."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Confident Response",
      "steps": [
        {
          "num": 1,
          "text": "When faced with a classmate's curious question, stand tall, straighten your back, and look them directly in the eye."
        },
        {
          "num": 2,
          "text": "A smile played on her lips, and she lowered her head without being angry or shy."
        },
        {
          "num": 3,
          "text": "He declared confidently, \"That's my superpower charging station! I learned so many amazing skills there!\""
        }
      ]
    },
    "iepGoal": "When faced with inquiries from peers about special education status or separation courses, they can use positive and confident oral responses without shy withdrawal or aggressive behavior, with an achievement rate of more than 90%.",
    "regularClassTip": "Schools and tutors should promote school-wide awareness-raising activities for people with disabilities, eliminate labeling bias, and establish a friendly campus culture that respects individual differences.",
    "decisionTree": {
      "prompt": "In the situation “👦 My Learning Support Classroom: A Place to Recharge My Strengths”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. When asked by classmates, he cries in shame, lies on the table and does not dare to raise his head to see others, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"⚡ \"Charging Station Proud Declaration\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-90",
    "lessonNumber": 90,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🏠 Taking Turns with Siblings: Sharing Screens Fairly",
    "code": "特社1-II-3",
    "themeColor": "#eab308",
    "badgeEmoji": "🏠",
    "badgeLabel": "Guardians of Family Peace",
    "superSkill": "⏱️ Hands and feet take turns using an hourglass to keep track of time.",
    "summary": "Special education students often get so fixated on the cartoons or games they want to watch that they fight fiercely with their younger siblings over remote controls or tablets, sometimes even scratching or biting each other, causing family conflicts. Guiding students to use physical timers and turn-taking agreements can help them learn to share generously.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "📺 Black remote control tug-of-war and colorful timer hourglass!",
      "content": "When Jun got home from school, he threw down his backpack and rushed to the living room sofa, grabbing the remote to change the channel to watch his favorite Beetle cartoon. Just then, his sister, two years younger than him, ran over, grabbed the other end of the remote, and yelled, \"It's my turn to watch Peppa Pig this time! Let go!\" The two of them pulled on the sofa like in a tug-of-war, tearing the remote's battery cover off. Jun, furious, raised his hand to strike his sister's arm: \"I'm the older brother! Get away from me!\" His mother, hearing this from the kitchen, shouted, \"Jun! Stop!\" Suddenly, the \"friendship piggy bank\" trick his teacher had taught him popped into his head—hitting his sister would cost him ten gold coins! Jun took a deep breath, withdrew his fist, and took out the \"30-minute liquid color hourglass\" from his special education class, placing it in the center of the TV cabinet: \"Sister, let's not fight!\" \"Put the hourglass in the middle. You watch Peppa Pig for twenty minutes first. When the hourglass runs out, I'll watch The Beetle. No cheating allowed!\" Seeing her brother being reasonable, the younger sister wiped away her tears and nodded: \"Okay! Brother, you turn on the TV for me first!\" A family battle turned into a harmonious sibling time amidst the ticking of the hourglass!",
      "question": "How sad would it make your parents if you fought with your younger siblings over the TV or tablet at home? Why can taking turns using a timer make you a more likable older brother or sister?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"📺 Black remote control tug-of-war and colorful timing hourglass!”, guidance through puppet show situations: How sad would it be for parents to fight with their younger siblings over TV or tablets at home? How can you be a well-liked older sibling by taking turns with a timer?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Steps of Sibling Sharing]: 1. When you notice the rage of snatching toys or remote controls, immediately let go of the pulling hand; 2. Take out a timer or hourglass to set the time: \"We each take turns for twenty minutes\"; 3. When it is the other person's turn, do other things, and change hands on time when the time is up."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Fighting with siblings for the TV remote control at home, the four little heroes practice starting the timing hourglass and negotiating turns to avoid fighting!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Guardian of Family Peace\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "The family creates a visual \"screen time schedule\" with each person's time zone clearly marked with different colored magnets.",
      "ld": "Use the \"Sharing Tip\": Half of the feelings are good for one person, and when the timer goes off, change the hug!",
      "ebd": "Before you want to hit your hands and feet, forcefully place your hands into fists on the back of the sofa and take five deep breaths."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Sibling Sharing",
      "steps": [
        {
          "num": 1,
          "text": "If you sense someone's rage at you grabbing a toy or remote control, immediately release their grip."
        },
        {
          "num": 2,
          "text": "Take out a timer or hourglass and set the time: 'We will take turns for twenty minutes'"
        },
        {
          "num": 3,
          "text": "When it's the other person's turn, they do other things, and when the time is up, they switch hands on time."
        }
      ]
    },
    "iepGoal": "In family life situations, when faced with siblings sharing limited leisure resources (TV, tablets, toys), they can restrain violent snatching and abide by the turn-taking time agreement, with an achievement rate of more than 85%.",
    "regularClassTip": "Special education teachers should establish consistent family tokens and timing rotation standards with parents through parent contact books to strengthen family normalization effects.",
    "decisionTree": {
      "prompt": "In the situation “🏠 Taking Turns with Siblings: Sharing Screens Fairly”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. In order to grab the remote control, he beats his younger siblings and scratches each other's cheeks, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm and deep breathing starts \"⏱️ Hands and feet take turns timing the hourglass\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-91",
    "lessonNumber": 91,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "👵 Visiting Grandparents - Greeting Comfortably and Helping with the Meal",
    "code": "特社1-II-1",
    "themeColor": "#f97316",
    "badgeEmoji": "👵",
    "badgeLabel": "Filial and Thoughtful Little Angels",
    "superSkill": "🥣 Helper for serving tea and dishes",
    "summary": "When visiting elders' homes during holidays, special education students often hide in their rooms scrolling on their phones, ignoring everyone, or even slamming doors and shouting when elders try to comfort them. The school teaches students the proper etiquette of \"looking into the eyes of grandparents and greeting them loudly, serving tea with both hands, and setting the table before meals.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🍵 Fragrant oolong tea and four neatly arranged pairs of mahogany chopsticks!",
      "content": "The whole family drove back to their grandparents' house in the countryside for the holiday. As soon as they entered the gate, the living room was filled with uncles, aunts, cousins, and other relatives they hadn't seen in a long time. Upon seeing so many relatives, Yu's social anxiety instantly overwhelmed him. He grabbed his schoolbag and tried to rush upstairs to the living room to hide and play video games. Grandpa saw Yu, smiled, and, leaning on his cane, came over and patted Yu's head: \"Yu, you've grown so tall! My dear grandson!\" Yu wanted to shake off Grandpa's hand and yell, \"Don't touch me! It's annoying!\" But Yu remembered a story his teacher had told him—his grandparents were old and their eyesight wasn't very good, and they waited at the door every day for their grandson to come home. Yu took a deep breath, stopped, turned around, and looked tenderly into his grandfather's eyes beneath his white hair. He offered him a steaming cup of oolong tea and shouted, \"Grandpa and Grandma, I'm back to see you! I wish you good health and a long life!\" Then, before the meal, Yu volunteered to help in the kitchen, neatly arranging four pairs of mahogany chopsticks. Grandpa beamed, tears of emotion welling in his eyes: \"Oh my! Our Yu is so sensible and filial, the best grandson in the whole family!\"",
      "question": "If you stay in your room scrolling on your phone and ignore everyone when you visit your grandparents, how disappointed will they be? How much warmer will they feel if you hold a cup of tea with both hands and greet them loudly?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🍵 Fragrant oolong tea and four pairs of neatly arranged mahogany chopsticks! ”, guided through the puppet show situation: If you go back to your elders’ house and hide in the room all the time using your mobile phone and ignoring people, how disappointed will your grandparents feel? Holding a cup of tea with both hands and calling someone loudly will bring a warm smile?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Etiquettes for Greeting Elders]: 1. After entering the door, take off your shoes, look into the eyes of the elders, and say the title and greeting loudly;2. Serve warm tea or fruit with both hands, offer it with both hands and say: \"Please use it!\"”; 3. Take the initiative to help place the tableware and tissues for the whole family before the meal."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Mission for all members): Family reunion to visit grandparents, the four little heroes practiced looking at their elders to say hello, and taking the initiative to serve tea and set out the dishes!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Filial and Thoughtful Little Angel\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Show \"elder relatives photo character tree\" to predict relationship titles, and provide a three-part meeting and greeting drill.",
      "ld": "Use the auspicious words: \"Serving tea with both hands means longevity, holding chopsticks and placing bowls is the first!\"",
      "ebd": "When relatives care too much and feel irritated, take three deep breaths and take the initiative to divert social attention by \"helping set the dishes, chopsticks, and fruits.\""
    },
    "visualCard": {
      "title": "⭐ Three Etiquette Rules for Greeting Elders",
      "steps": [
        {
          "num": 1,
          "text": "After taking off your shoes upon entering, look the elders in the eye and loudly address them with your title and greeting."
        },
        {
          "num": 2,
          "text": "Serve warm tea or fruit with both hands, saying, 'Please enjoy!'"
        },
        {
          "num": 3,
          "text": "Before meals, proactively help set out the bowls, chopsticks, and tissues for the whole family."
        }
      ]
    },
    "iepGoal": "When participating in family festivals or visiting elders, be able to proactively give spoken greetings and participate in table service (serving tea, setting out bowls and chopsticks) without hiding, resisting or rudely contradicting, with an achievement rate of more than 85%.",
    "regularClassTip": "Before going on a long vacation, you can ask special education children to draw or record a \"filial piety to elders check-in task\" in the contact book to promote substantial family interaction.",
    "decisionTree": {
      "prompt": "In the situation “👵 Visiting Grandparents - Greeting Comfortably and Helping with the Meal”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. As soon as he enters the door, he slams the door and hides in the room to play video games and tells the elders to \"go away and don't bother\", causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🥣 \"Little Helper for Serving Tea and Serving Food\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-92",
    "lessonNumber": 92,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🛒 Shopping with Family: Stay Together and Ask Staff for Help",
    "code": "特自2-II-2",
    "themeColor": "#059669",
    "badgeEmoji": "🛒",
    "badgeLabel": "Store Compliance Assistant",
    "superSkill": "🛒 Create your own guardian while shopping at the supermarket",
    "summary": "Walking into a supermarket filled with a dazzling array of goods, special education children often run wildly between the shelves, secretly stuff cookies and toys into their shopping carts, or throw tantrums and cry on the floor because they didn't get their favorite snacks, and some even get lost. They are taught to \"hold onto the shopping cart without letting go, choose items according to the shopping list, and if they get lost, find a uniformed store clerk.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🛒 A huge shopping cart full of items and checkmarks on the list!",
      "content": "On Saturday afternoon, Jun accompanied his mother to the PX Mart Welfare Center for a big shopping trip. As soon as they entered the store, Jun saw three whole rows of colorful potato chips and chocolate bars. His eyes lit up with excitement, and he grabbed three huge bags of potato chips, trying to stuff them into his mother's shopping cart! His mother sternly stopped the cart: \"Jun, today we need to buy onions and tofu for dinner soup. No snacks!\" Hearing this, Jun's temper flared instantly. He plopped down on the floor, hugged the cart wheel, and yelled, \"I don't care! I want potato chips! I won't go home until I get them!\" The aunties and uncles shopping around them all stopped and looked over. At that moment, the \"Shopping Spy List\" his teacher had taught him in special education class flashed through Jun's mind—children who cause trouble lose their eligibility to be the little manager! Jun took a deep breath, got up from the floor, and dusted himself off. His mother handed him a hand-drawn \"Shopping List Card\" and a pencil: \"Jun, you're our commander!\" \"Find three onions for Mom in the vegetable section. If you find them all, you can choose a box of yogurt as a reward!\" Jun took the list, pushed the cart, and focused on comparing the onions. He put a big checkmark on each one he found, successfully completing the task and receiving a box of his favorite strawberry yogurt!",
      "question": "How embarrassing would it be if you threw a tantrum and cried on the floor at the supermarket because you weren't satisfied? Why can helping your mom find things according to the list make you a great little shopping expert?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🛒 A big cart full of items on the list!”, guided through puppet show situations: How embarrassing would it be if you rolled on the floor and cried when you didn’t get what you wanted when you went to the supermarket? Helping mom find things according to the list, why can she become a great purchasing expert?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three Rules of Self-Made in Stores]: 1. Always hold the handle of the cart with both hands, and do not run around when walking beside adults; 2. Help find things according to the shopping list, and do not randomly stuff the items on the shelves into the cart; 3. If you accidentally get lost, stand next to the cashier and look for help from a uniformed clerk."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Accompany their mother to the supermarket to buy daily necessities. The four little heroes practice restraining their desires and shopping according to the list without cheating!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Store Compliance Butler\" honorary medal, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Present \"Today's Purchase List Card (within 3 items)\" with pictures and texts, and give specific and clear task orientation.",
      "ld": "Let school children be responsible for pushing carts or holding shopping baskets, and use weights on their hands to provide proprioception to stabilize the body and mind.",
      "ebd": "Agree on the \"self-made reward principle\": as long as you don't lie down and cheat during the whole process, you can choose a healthy snack within the designated amount when you check out."
    },
    "visualCard": {
      "title": "⭐ Three Rules for Store Self-Made",
      "steps": [
        {
          "num": 1,
          "text": "Keep both hands firmly on the stroller handles and stay close to an adult without running around."
        },
        {
          "num": 2,
          "text": "Help find items according to the shopping list, don't randomly put items from the shelves into the cart"
        },
        {
          "num": 3,
          "text": "If you accidentally get lost, stand next to the cashier and ask a uniformed employee for help."
        }
      ]
    },
    "iepGoal": "When following parents for shopping activities in public stores, they can abide by store routines and cooperate with the purchase list, without having to lie down and cry or have the urge to get lost, with an achievement rate of more than 85%.",
    "regularClassTip": "The family contact assignment \"Practice Diary of a Little Supermarket Buyer\" can be designed, and parents are asked to guide their children to complete a task-oriented shopping experience during holidays.",
    "decisionTree": {
      "prompt": "In the situation “🛒 Shopping with Family: Stay Together and Ask Staff for Help”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, his brain loses control. He runs wildly in the supermarket corridor, knocks down the cookie rack, and lies on the ground rolling and screaming, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🛒 \"Make your own guardian for supermarket shopping\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-93",
    "lessonNumber": 93,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "💤 Bedtime Routines: Putting Books Away and Settling Down",
    "code": "特自1-II-4",
    "themeColor": "#6366f1",
    "badgeEmoji": "💤",
    "badgeLabel": "Model of Quality Sleep",
    "superSkill": "🌙 Goodnight Shutdown Sleep Exercise",
    "summary": "Special education students often become so engrossed in comics or mobile games that their vestibular and nervous systems are overstimulated, leading them to refuse to go to bed until 11 p.m., creating a vicious cycle of difficulty waking up in the morning, irritability, and drowsiness in class. We teach them a 30-minute offline ritual before bedtime and deep relaxation breathing.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🌙 A little magic trick for turning off your brain's screen when the moon rises!",
      "content": "At 9:30 PM, the alarm clock hands had already pointed to bedtime. Mom gently opened the bedroom door and reminded him, \"Yu, it's 9:30. Time to turn off the lights and go to sleep. You have school tomorrow!\" But Yu was engrossed in the final chapter of his most exciting dinosaur comic, his eyes shining and his heart pounding. He couldn't bear to put it down! \"I don't want to sleep! I want to read the last ten pages! Give me five more minutes!\" Ten minutes passed, and Yu was still reading. Mom came over and turned off the main light. Yu immediately flew into a rage, throwing his pillow against the wall and yelling and screaming on the bed. The \"magic trick\" his teacher had written for him in the communication book suddenly appeared before Yu's eyes—sleep is like charging a phone; if you don't turn it off and charge it, tomorrow your phone will be a useless piece of junk! Yu took a deep breath, put the comic back on the bookshelf, snuggled into his warm bed, and placed his hands flat on his stomach: \"Inhale—one, two, three, my stomach swells up like a big balloon; exhale—three, two, one, my body relaxes like sinking into soft cotton candy...\" Slowly, Yu's eyelids grew heavier and heavier, and in his sweet dream, he rode a gentle thunder dragon and flew into the starry sky!",
      "question": "If you stay up all night reading or playing games when it's bedtime, what will happen to your brain the next day? Why does turning off the screen and books and taking deep breaths before bed help you have sweet dreams?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🌙 A little magic that turns off the brain screen when the moon rises!\", guided by puppet show situations: If you stay up late reading and playing games when it's bedtime, what will happen to your brain the next day? Why can you have sweet dreams if you turn off the screen and books and take a deep breath before going to bed?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three steps to shut down before going to bed]: 1. When the alarm clock rings at 9:30, immediately close the comic book and put it back on the bookshelf; 2. Climb into bed and lie flat, put your hands on your stomach to feel the ups and downs; 3. Inhale and exhale slowly, do this five times to fall asleep quietly."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Late at night, bedtime has arrived. The four little heroes practice restraining the temptation to stay up late and complete the power-off ritual before going to bed to fall asleep peacefully!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Little Model of Quality Sleep\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish a fixed \"visual flow chart before going to bed\": brush your teeth and wash your face ➡️ Change into pajamas ➡️ Listen to light music ➡️ Turn off the headlights and take a deep breath to eliminate temporary interference.",
      "ld": "Use the \"Sleep Countdown Hourglass (Ten Minutes)\" to let schoolchildren see the end of time and prepare themselves mentally for bed.",
      "ebd": "When you want to throw a pillow and lose your temper, hold the gravity comfort pillow tightly and turn your anger into a sense of stability through deep tactile pressure."
    },
    "visualCard": {
      "title": "⭐ Three steps to turn off your device before bed",
      "steps": [
        {
          "num": 1,
          "text": "As soon as the alarm rang at 9:30, I immediately closed the comic book and put it back on the shelf."
        },
        {
          "num": 2,
          "text": "Climb into bed and lie flat, placing your hands on your stomach to feel the rise and fall"
        },
        {
          "num": 3,
          "text": "Inhale and expand your belly, exhale slowly, repeat five times, and then drift off to sleep."
        }
      ]
    },
    "iepGoal": "In the family nighttime bedtime situation, the person can actively end leisure activities and prepare for bedtime within the warning time without throwing things or violent procrastination, and the achievement rate is above 85%.",
    "regularClassTip": "Special education teachers should regularly track the sleep quality of students at night through sleep records to help parents improve their bedtime environment and bedtime routine.",
    "decisionTree": {
      "prompt": "In the situation “💤 Bedtime Routines: Putting Books Away and Settling Down”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. When urged to sleep, the person throws a pillow and cries, stays up until the early morning and dozes off, causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🌙 \"Good Night Shut Down and Sleep Exercise\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-94",
    "lessonNumber": 94,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 6: Putian Fusion and Family Life",
    "title": "🧺 I Can Help at Home: Folding Clothes and Tidying Toys",
    "code": "特自2-II-1",
    "themeColor": "#059669",
    "badgeEmoji": "🧺",
    "badgeLabel": "Your Self-Reliant Life Assistant",
    "superSkill": "👕 A Little Expert at Independent Living",
    "summary": "Special needs children often rely excessively on their parents for chores at home. Smelly socks are left scattered in the living room, and building blocks are strewn all over the hallway, leaving parents exhausted and experiencing parental burnout. Teaching them the \"clothes-folding mantra: hug to the left, hug to the right, bow upwards\" helps them develop self-care skills and give back to their families.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🧺 A mountain of messy clothes and the amazing magic of folding clothes!",
      "content": "On Sunday afternoon, the clothes drying on the balcony were brought into the living room, creating a small mountain of clothes piled high on the sofa. Mom had just finished cooking lunch and sat down, rubbing her aching back. Usually, He would just throw his coat on the floor after taking it off and never put his toys away after playing, leaving the room looking like it had been bombed. But today, seeing his mother's tired, gray hair, He suddenly felt a pang of heartache. He remembered the \"magical clothes-folding rhyme\" his teacher had taught him in special education class! He ran over with a beaming smile and said, \"Mom, you go rest on the sofa and have some water. I'll tame this mountain of clothes!\" He took out a T-shirt, spread it flat on the coffee table, and recited the rhyme: \"First step, hug with your left hand; second step, hug with your right hand; third step, put your hands together and bow upwards!\" In just ten seconds, the limp shirt was folded into a neat little square! He neatly folded and sorted all the family's clothes, putting them into a basket in one go. His mother was moved to tears, hugging He tightly: \"My baby has really grown up; he's Mommy's most thoughtful little helper!\"",
      "question": "If your mom has to tidy up your clothes and toys at home, how tidy is it for her? Why is learning to fold clothes and put toys away neatly a sign of growing up?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🧺 A messy mountain of clothes and the magic of folding clothes! ”, guided through the puppet show situation: If you have to help your mother clean up your clothes and toys at home, how hard will it be for your mother? Why is learning to fold clothes and put away toys neatly by yourself a big sign of growing up?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three tips for folding clothes and taking care of yourself]: 1. Flatten the clothes on the table with the back facing up, and smooth out the wrinkles with both hands; 2. Fold the left sleeve inward and the right sleeve inward; 3. Fold the hem of the clothes up into a small square tofu and put it in the basket."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Mission for all members): Facing the mountains of laundry in the living room, the four little heroes practice the clothes-folding formula and implement self-care to give back to their families!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Little Housekeeper of Independent Life\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Provide a cardboard folding assistant (Folder) to disassemble complex folding into three mechanized steps: left folding, right folding, and bottom turning.",
      "ld": "Utilize the steps of children's songs to guide: \"Hug the left, hug the right, turn it up and fold it!\"”",
      "ebd": "Pack the tidying up toys into a \"Ten-second timed return-to-original contest\" to inspire a competitive spirit."
    },
    "visualCard": {
      "title": "⭐ Three tips for folding clothes independently",
      "steps": [
        {
          "num": 1,
          "text": "Lay the garment flat on the table with the back facing up, and smooth out any wrinkles with both hands."
        },
        {
          "num": 2,
          "text": "Fold the left sleeve inwards and the right sleeve inwards."
        },
        {
          "num": 3,
          "text": "Fold the hem of the clothes up into neat little squares and put them in the basket."
        }
      ]
    },
    "iepGoal": "In the family life self-care check, the child can independently complete the folding of personal clothes, the return of shoes and socks, and the storage of toys without the need for adults to do it for them, with an achievement rate of more than 85%.",
    "regularClassTip": "School classrooms should implement environmental self-care training such as hanging coats and returning sweeping tools, and check-in should be implemented simultaneously at home through parent-teacher manuals.",
    "decisionTree": {
      "prompt": "In the situation “🧺 I Can Help at Home: Folding Clothes and Tidying Toys”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. Clothes and socks are randomly thrown on the sofa, waiting for parents to help collect them like servants, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"👕 \"Little master of independent living\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-95",
    "lessonNumber": 95,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🪞 My Unique Strengths: Three Things That Make Me Shine",
    "code": "特自1-II-1",
    "themeColor": "#ec4899",
    "badgeEmoji": "🪞",
    "badgeLabel": "Confident and Shining Heroes",
    "superSkill": "💎 Unique Glowing Crystal",
    "summary": "Special needs children often suffer from self-loathing and low self-esteem due to their gait, wearing thick glasses, or slow reaction time, enduring countless stares and judgments. Guiding children to stand in front of a large mirror, identify and loudly proclaim three shining qualities within themselves, helps them embrace their unique selves.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🪞 A magical dressing mirror with three golden, glowing stars!",
      "content": "Today, in the center of the special education classroom, a large full-length mirror with a gold frame was erected. The teacher hung a sparkling five-pointed star at the top of the mirror: \"Children, in front of the mirror, let's not criticize our shortcomings. Let's embark on a magical adventure of 'discovering the shining gems'!\" Four little heroes stood before the large mirror. At first, everyone was a little shy, lowering their heads, hesitant to look in the mirror. He touched his short stature and whispered, \"I don't think I'm pretty enough, and I'm not fast at running...\" The teacher gently took He's hand and pointed to He's clear, large eyes in the mirror: \"He, look at yourself in the mirror! The first gem: You have gentle eyes that see when others are sad; the second gem: You have skillful hands that fold clothes neatly; the third gem: You have a kind heart that never laughs at others! These gems are more precious than the stars in the sky!\" He looked at himself in the mirror, and his eyes slowly brightened. Yu, Jun, and Jia also stepped forward in turn, loudly proclaiming their own shining qualities! The mirror reflected four smiling faces full of confidence and strength, shining brightly in the sunlight!",
      "question": "When you feel inferior to others or dislike yourself, how sad do you feel? Look in the mirror, find three of your strengths, and read them aloud. Why do they give you so much courage?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🪞 Magic large full-length mirror with three golden glowing stars!”, guided through the puppet show situation: How sad would you feel when you feel inferior to others and hate yourself? Look in the mirror and find your three strengths and read them out loud. Why does it give you endless courage?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Self-Acceptance Trilogy]: 1. Stand in front of the mirror with your chest raised, smile and look into your own eyes in the mirror; 2. Read your first advantage out loud: \"I am a kind and enthusiastic person!\" ”; 3. Read out the second and third advantages, and give yourself a big round of applause and a hug."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Stand in front of the big mirror to explore the inner treasures. The four little heroes practice self-acceptance and read out their personal highlights!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Confidence Shining True Hero\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Design \"My Strengths Checklist\": visual recognition, attention to details, honesty and trustworthiness, strong memory, etc. for school children to check.",
      "ld": "Use \"Glowing Crystal Stickers\" to put a golden star on your chest every time you name one of your strengths.",
      "ebd": "Transform your irritable and critical feelings about yourself into affirmations that read out loud, \"I am precious, I am unique, and I am making progress every day.\""
    },
    "visualCard": {
      "title": "⭐ The Three Steps to Self-Acceptance",
      "steps": [
        {
          "num": 1,
          "text": "Stand tall in front of the mirror, smile, and gaze into your own eyes."
        },
        {
          "num": 2,
          "text": "Say aloud your first strength: 'I am a kind and warm-hearted person!'"
        },
        {
          "num": 3,
          "text": "Read out the second and third advantages, and give yourself a big round of applause and a hug."
        }
      ]
    },
    "iepGoal": "In self-concept exploration activities, be able to proactively identify and verbally express 3 specific personal traits and strengths, and demonstrate a positive self-acceptance attitude, with an achievement rate of over 90%.",
    "regularClassTip": "Regular class teachers should guide children to see the multiple intelligences of each special education child in class management, and create an inclusive and respectful group self-esteem ecology.",
    "decisionTree": {
      "prompt": "In the situation “🪞 My Unique Strengths: Three Things That Make Me Shine”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "In a difficult situation, feeling overwhelmed and saying hurtful things about oneself to a mirror rather than asking for help.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"💎 Unique Luminous Crystal\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-96",
    "lessonNumber": 96,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🪙 Buying Bread: Counting Money and Checking Change",
    "code": "特學2-II-2",
    "themeColor": "#059669",
    "badgeEmoji": "🪙",
    "badgeLabel": "Financial Self-Reliance Expert",
    "superSkill": "💰 Convenience store clerk's abacus",
    "summary": "Children with learning disabilities often fail paper-and-pencil arithmetic in class, but in real life, learning to read price tags, take out the correct coin, and check change is an essential foundation for independent adult life. This course teaches practical money skills such as \"reading the price tag to find the number, taking out a fifty-dollar coin, and counting change in your palm.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🥐 The fragrant pineapple bread and the clinking coins on the cash register!",
      "content": "Today, the special education class had an exciting \"Real Money Challenge Outside of School\"! The teacher gave each little hero a blue coin purse containing a fifty-dollar coin and three ten-dollar coins. The whole class held hands and went to the FamilyMart convenience store next to the school. He's task was to buy a \"twenty-eight-dollar pineapple bread\" for tomorrow's breakfast. Entering the store, He looked at the dazzling array of bread labels on the shelves, with so many confusing numbers. Holding the bread, He looked at the large print on the label: \"28 yuan.\" Reaching the cashier, He's palms were sweating; he didn't know which coin to give the clerk. The teacher gently reminded him: \"He, twenty-eight dollars is less than fifty dollars. Take out the big fifty-dollar gold coin and give it to the clerk!\" He handed over the fifty-dollar coin with both hands, and the clerk swiped the barcode with a \"beep!\": \"Fifty dollars taken, twenty-two dollars in change!\" The clerk placed two ten-dollar coins and two one-dollar coins in He's palm. He took a deep breath and counted the money in his palm one by one: \"Ten, twenty, twenty-one, twenty-two! Exactly twenty-two yuan!\" He happily put the bread and receipt into his bag: \"I can buy bread myself now! I'm the best little shopkeeper!\"",
      "question": "What problems might arise if you don't know how much money you need or how much change you'll receive when shopping? How does learning to count change help you become independent as you grow up?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🥐 The fragrant puff pastry and the jingling copper plate on the cashier!”, guided through puppet show situations: What trouble will happen if you don’t know how much you need to pay when you go to the store to buy something, and you don’t look at the store clerk’s change? How will learning how to count change help you grow up and be independent?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three Steps of Supermarket Shopping]: 1. Pick up the product and look at the Arabic numerals and price on the label; 2. Take out coins or banknotes that are larger than the amount of the product and hand them to the cashier with both hands; 3. Take the change with both hands, count the coins clearly in the palm of your hand, and put it into your wallet."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Buy bread independently in a convenience store. The four little heroes practice checking the prices, paying cash and counting the change!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Financial Self-Reliance Little Expert\" honorary medal, complete the colorful picture and text worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Make \"Coin Cards Corresponding to Common Product Prices\": get two tens for twenty yuan, four ten yuan for thirty-five yuan, etc. Intuitive visual formulas.",
      "ld": "Utilize real circulating coins for palm touch point training (50 yuan gold coin, 10 yuan silver coin, 1 yuan small copper coin).",
      "ebd": "Practice waiting quietly when waiting in line at the checkout counter, without panicking or rushing the clerk."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Shopping at a Convenience Store",
      "steps": [
        {
          "num": 1,
          "text": "Pick up the product and look at the Arabic numerals and price on the label."
        },
        {
          "num": 2,
          "text": "Take out coins or banknotes that are greater than the value of the goods and hand them to the cashier with both hands."
        },
        {
          "num": 3,
          "text": "Take the change with both hands, count it in your palms, and then put it into your wallet."
        }
      ]
    },
    "iepGoal": "When making small purchases in community stores or convenience supermarkets, be able to understand prices, complete cash payments, and check the change amount in the palm of your hand, with an achievement rate of over 85%.",
    "regularClassTip": "Life mathematics teaching should focus on real situation operations, and implement physical purchasing teaching in combination with school party or community supermarket.",
    "decisionTree": {
      "prompt": "In the situation “🪙 Buying Bread: Counting Money and Checking Change”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. After grabbing something, I want to run out of the store without knowing that I have to queue up to pay, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"💰 \"Supermarket shopkeeper's abacus\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-97",
    "lessonNumber": 97,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🚦 Crossing Safely: Wait for Green, Look Both Ways and Walk Carefully",
    "code": "特自2-II-3",
    "themeColor": "#ef4444",
    "badgeEmoji": "🚦",
    "badgeLabel": "Traffic Safety Junior Patrol Officer",
    "superSkill": "🚩 Raise a little yellow flag for peace of mind",
    "summary": "Children with ADHD and autism often lack awareness of road hazards, rushing across green lights and crossing blind spots of turning vehicles, which can easily lead to serious traffic accidents. Teach them three life-saving tips: \"Stop at the yellow line and take a step back, look left and right when the green light is on, and hold up the small yellow flag when crossing the street.\"",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🦓 A little zebra on the zebra crossing and a small yellow flag held high!",
      "content": "After school, as they crossed the large intersection in front of OO Elementary School, a bustling thoroughfare during recess, large trucks, buses, and motorcycles roared past. Jun and his younger brother, hand in hand, prepared to cross the road. Jun saw the pedestrian crossing signal light up and immediately tried to pull his brother across! Just then, a large truck attempting a right turn sped towards them, its massive cab obstructing the driver's view! A traffic guide standing at the intersection blew her whistle: \"Hurry! Danger! Back off!\" She grabbed Jun's backpack! The truck, accompanied by a biting gust of wind, whistled past Jun's feet, narrowly missing them by ten centimeters! Jun's legs went weak, and he knelt on the ground, his back soaked with cold sweat. The caregiver crouched down and gently handed Jun a bright yellow \"pedestrian safety warning flag\": \"Honey, big trucks have huge blind spots! The little green flag is lit, so you absolutely can't rush around like a wild horse! We need to stand at the edge of the crosswalk and take a big step back, look left and right to make sure the turning vehicles have completely stopped, then raise the little yellow flag high and take steady steps across the zebra crossing!\" Jun took the little yellow flag, took a deep breath, held his younger brother's hand tightly, raised the flag high, looked left and right, and walked safely to the other side!",
      "question": "Why is it so easy to get hit by turning vehicles if you immediately duck and rush across the street when the light turns green? Why can raising a small yellow flag and looking left and right when crossing the street save your precious life?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦓 The little zebra on the zebra crossing and the little yellow flag raised high! ”, guided through puppet show situations: When you see the green light, you immediately lower your head and rush wildly. Why is it so easy to be hit by a turning vehicle? Why can you save your precious life by raising a small yellow flag and looking left and right when crossing the road?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Three tips to save your life when crossing the road]: 1. Stand on the yellow line in the zebra crossing waiting area and take a step back, never step on the road and wait; 2. After the little green man lights up, turn your head to the left and then to the right to make sure the vehicle has stopped completely; 3. Raise your right hand or the small yellow flag high, and walk straight and steady across the zebra crossing."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Facing the zebra crossing at a busy intersection, the four little heroes practiced starting, stopping, watching, listening, and holding the flag high to cross the road safely!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Traffic Safety Patrol Officer\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Establish the \"three-second braking and stopping method at the intersection\": after the green light turns on, force yourself to count one, two, three silently on the spot, and see the left and right turning cars clearly before starting.",
      "ld": "Use the mantra song: \"Stop on red light, go on green light, look left and right for no traffic, hold the yellow flag high and stride forward!\"",
      "ebd": "Treat crossing the road as \"a secret agent crossing a minefield\", prohibit running and playing, and maintain a high level of concentration throughout the process."
    },
    "visualCard": {
      "title": "⭐ Three ways to save your life when crossing the street",
      "steps": [
        {
          "num": 1,
          "text": "Stand one step back from the yellow line in the zebra crossing waiting area, and never step onto the road while waiting."
        },
        {
          "num": 2,
          "text": "After the little green man lights up, he turns his head to the left and then to the right to confirm that the vehicle has come to a complete stop."
        },
        {
          "num": 3,
          "text": "Raise your right hand or small yellow flag high and walk steadily and straight across the zebra crossing."
        }
      ]
    },
    "iepGoal": "In the situation of crossing the road or crossing an intersection, the person can look left and right independently or under prompts, raise his hands to warn and walk across steadily without running or lowering his head to collide. The achievement rate is more than 95%.",
    "regularClassTip": "Volunteer guides should regularly conduct intersection traffic safety promotions around the school, and small reflective yellow flags should be distributed to lower grade and special education children to enhance daytime visibility.",
    "decisionTree": {
      "prompt": "In the situation “🚦 Crossing Safely: Wait for Green, Look Both Ways and Walk Carefully”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control. As soon as the light turns green, he lowers his head, screams and runs wildly, but is hit by a large turning truck, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🚩 Raise the little yellow flag and feel at ease\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-98",
    "lessonNumber": 98,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🚿 Fresh After PE: Clean Clothes, Handwashing and Personal Care",
    "code": "特自2-II-1",
    "themeColor": "#06b6d4",
    "badgeEmoji": "🚿",
    "badgeLabel": "Clean and Neat Little Gentleman",
    "superSkill": "🧼 Seven-step cleansing and refreshing wash",
    "summary": "As special education students enter puberty, they often find themselves drenched in sweat, with dripping wet hair and a strong, unpleasant odor after strenuous physical activity in physical education classes, unaware of their surroundings and causing their peers in regular classes to hold their noses and reject them. They are taught self-management of their personal hygiene, such as wiping away sweat with a towel, changing into dry underwear, and washing their hands and face.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🦁 A little lion covered in sweat and a fragrant little towel!",
      "content": "After playing soccer during the fourth period of PE class, Yu was drenched in sweat, his hair plastered to his forehead like a drowned rat, and the back of his gray cotton T-shirt was completely soaked, turning a deep black and emitting a strong, sour, sticky smell. The bell rang, and Yu, panting heavily, was about to walk back to his regular classroom for lunch in his soaking, smelly clothes. The classmate sitting next to him smelled it and couldn't help but pinch his nose and take a step back: \"Wow! Yu, you smell awful! That sour smell is awful!\" Yu froze, his face flushed red, clutching the hem of his shirt, feeling both embarrassed and ashamed. The teacher gently greeted Yu at the door: \"Yu, sweating so much means you ran really hard today, you're a true hero! But after heroic exercise, you need a 'refreshing transformation'!\" The teacher led Yu to the sink, showing him how to use a spare cotton towel dampened with warm water to wipe away the sticky sweat from his forehead, neck, and arms, giving him a refreshing wash of his face. He then changed into a clean, dry blue short-sleeved shirt in the changing room. When Yu emerged from his dry clothes, he looked refreshed and smelled faintly of soap. His classmates patted him on the shoulder with smiles: \"Yu, you look so handsome and smell so good after changing! Let's go get some rice!\"",
      "question": "What health and social problems might arise if you let your clothes get soaked and smelly after sweating profusely during exercise? Why does spending three minutes wiping away sweat and changing clothes after exercise make people like and want to be around you?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🦁 The sweaty little lion and the fragrant little towel! ”, guided by puppet show situations: What health and social problems will occur if the clothes are allowed to get wet and smelly after sweating during exercise? Why does spending three minutes wiping sweat and changing clothes after exercise make everyone like to get close to you?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three steps to refresh yourself during exercise]: 1. Immediately after exercise, take out a small towel and wipe the sweat from your forehead and back of your neck; 2. Go to the locker room to take off your wet clothes and put on a clean and breathable dry top; 3. Wash your hands and face with soap at the sink, and return to the classroom refreshed."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Mission for all members): After physical education class, they were sweating profusely. The four little heroes practiced initiating a refreshing transformation, changing clothes and washing their faces on their own to keep themselves tidy!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the honorary medal of \"Refreshing and Neat Gentleman\", complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "A \"sports refreshing bag\" (clean top, small towel, plastic dirty clothes bag) is fixed in the school bag and included in the morning light inspection list.",
      "ld": "Use the \"Refreshing Trilogy Picture Card\" to stick at the door of the locker room: wipe away sweat ➡️ Get a new top ➡️ Wash hands and face.",
      "ebd": "Before hearing a classmate say that he smells of sweat, he feels embarrassed and wants to take action, wash his face with a towel and calm down physically and mentally."
    },
    "visualCard": {
      "title": "⭐ Three Steps to Feel Refreshed After Exercise",
      "steps": [
        {
          "num": 1,
          "text": "Immediately after exercising, take out a small towel and wipe the sweat from your forehead and the back of your neck."
        },
        {
          "num": 2,
          "text": "Go to the changing room, take off your wet clothes, and change into clean, breathable, dry clothes."
        },
        {
          "num": 3,
          "text": "After washing my hands and face thoroughly with soap at the sink, I returned to the classroom feeling refreshed."
        }
      ]
    },
    "iepGoal": "After participating in sports activities or sweating profusely, the person can complete wiping sweat, changing tops, and cleaning hands and face independently or under prompts, and maintains personal hygiene and tidiness, with an achievement rate of more than 85%.",
    "regularClassTip": "Schools should educate students in general classes to be considerate of the physical changes of their peers during puberty, prohibit personal attacks based on body odor, and provide friendly changing spaces.",
    "decisionTree": {
      "prompt": "In the situation “🚿 Fresh After PE: Clean Clothes, Handwashing and Personal Care”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, letting the wet clothes stick to the back and smelling, and gets angry and hits others when pointed out by classmates, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🧼 \"Refreshing and cleansing in seven steps\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-99",
    "lessonNumber": 99,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "Asking an Adult for Help When Hurt",
    "code": "特自2-II-3",
    "themeColor": "#ef4444",
    "badgeEmoji": "🩹",
    "badgeLabel": "Asking for Help",
    "superSkill": "Find a trusted adult when hurt",
    "summary": "Practise find a trusted adult when hurt using speech, cards or gestures. Adjust support to the learner’s current needs.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "Find a trusted adult when hurt",
      "content": "Yu falls and cries because his knee hurts. He stays nearby and asks the teacher for help. The teacher listens to where it hurts and follows the school’s procedure to accompany Yu to the health room. Crying does not remove the right to help. An appropriate adult handles injury care.",
      "question": "How can you get adult help if you or a classmate is hurt?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Story and feelings",
        "desc": "Read “Find a trusted adult when hurt”. How can you get adult help if you or a classmate is hurt? Accept speech, pointing or gestures."
      },
      {
        "time": "08–16 min",
        "stage": "Modelling and prompts",
        "desc": "Model this lesson’s three steps: Stop in a safe place and tell a trusted adult → Use speech, pointing or gestures to indicate discomfort → Ask an adult to accompany you and follow the school’s health-room procedure"
      },
      {
        "time": "16–26 min",
        "stage": "Rotate roles",
        "desc": "Rotate expressing, responding, supporting and observing roles. Watching first is welcome; do not require eye contact, touch or an immediate response."
      },
      {
        "time": "26–36 min",
        "stage": "Scenario practice",
        "desc": "Discuss different choices, then rehearse the actions. Other approaches, breaks and asking for help are welcome."
      },
      {
        "time": "36–40 min",
        "stage": "Review and daily-life follow-up",
        "desc": "Record actual support and opportunities, then agree on a daily-life practice the learner chooses. Stars do not show mastery."
      }
    ],
    "scaffolds": {
      "asd": "Offer the lesson’s three-step cards and preview the situation. Accept speech, pointing and a comfortable direction of attention.",
      "ld": "Give one message at a time. Accept models, pointing and gestures without requiring extensive copying.",
      "ebd": "Check emotional and sensory needs first. Allow rest, refusal and help; agree on participation when the learner is ready."
    },
    "visualCard": {
      "title": "Find a trusted adult when hurt",
      "steps": [
        {
          "num": 1,
          "text": "Stop in a safe place and tell a trusted adult"
        },
        {
          "num": 2,
          "text": "Use speech, pointing or gestures to indicate discomfort"
        },
        {
          "num": 3,
          "text": "Ask an adult to accompany you and follow the school’s health-room procedure"
        }
      ]
    },
    "iepGoal": "In this lesson’s context, observe whether the learner can use speech, pointing or gestures to indicate discomfort. Set opportunities and support from baseline observations, recording independent and supported responses separately.",
    "regularClassTip": "Check safety and willingness, then prompt: Use speech, pointing or gestures to indicate discomfort. Accept speech, pointing or gestures without public comparisons.",
    "decisionTree": {
      "prompt": "How can you get adult help if you or a classmate is hurt?",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "Requiring everyone to do the same thing immediately without checking their needs.",
        "consequence": "People’s situations and needs can differ. Check safety and willingness before making adjustments together.",
        "feedback": "Choose again or ask the teacher to demonstrate."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Use speech, pointing or gestures to indicate discomfort",
        "consequence": "A need has been expressed. Listen to the response and check what support is available.",
        "feedback": "Use speech, pointing, gestures or watching first. The teacher records actual performance."
      }
    },
    "useBrowserSpeech": true,
    "homeTask": {
      "action": "Let the learner choose a suitable moment to try this with a familiar adult: Use speech, pointing or gestures to indicate discomfort. Report no opportunity or any support needed too."
    }
  },
  {
    "id": "b-idea-100",
    "lessonNumber": 100,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "📮 A Letter to My Future Self: Keep Learning and Keep Trying",
    "code": "特學2-II-3",
    "themeColor": "#8b5cf6",
    "badgeEmoji": "📮",
    "badgeLabel": "Future Time Navigator",
    "superSkill": "📜 Writing a Letter to a Future Hero",
    "summary": "Looking back on the countless hardships overcome along the way, including sensory sensitivity, emotional stagnation, reading difficulties, and interpersonal friction, the students are guided to write a letter by hand (or dictate and draw a picture) and seal it in the \"future time capsule,\" promising themselves a year from now that they will never give up.",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "✉️ A golden envelope and a time travel journey a year later!",
      "content": "Today in the special education classroom of OO Elementary School, the teacher brought out four \"time capsule sealed tin boxes\" printed with golden wings. Beautiful letter paper and colored crayons were laid out on the table. \"Children, in this long journey you've taken, you've learned to hide in your shell like a turtle, to chat while throwing and catching a ball, to wipe away your tears when you fall, and to be considerate of your elders and siblings. Today, we are going to complete the most solemn task in the entire universe—to write a letter to 'yourself a year from now, when you're in a new grade!'\" The four little heroes held their pens and earnestly wrote their deepest thoughts on the letter paper. Yu drew a dragon with its wings spread wide and wrote: \"To Yu a year from now: I hope that by then you will dare to look into the eyes of new friends and smile, and be able to take a deep breath when you encounter something you're afraid of!\" Jun wrote: \"To Jun in the future: When you're angry, you must insist on counting to ten and be a reasonable hero!\" He drew a big red flower: \"To He in the future: Even if the words are dancing, I will slowly cut the chocolate. I'm not stupid, I'm great!\" Everyone folded the letters filled with love and vows, placed them in the tin box, and clicked the golden combination lock shut. The teacher's eyes reddened, and she led everyone in a deep bow: \"Children, in the future, you will be incredibly proud of your courage and perseverance today!\"",
      "question": "Think back on all the superpowers you've learned from the past to the present, what would you like to say to your future self? Why does sealing your vows in a time capsule give you so much motivation to move forward?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"✉️ Golden envelope and time travel one year later!”, guided through the puppet show situation: Thinking back on the many superpowers you have learned from the past to the present, what would you like to say to your future self? Why can sealing your vows in a space-time envelope give you full strength to move forward?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantle [Three elements of future letters]: 1. Thank you for overcoming difficulties and bravely practicing superpowers in the past; 2. Write down your specific expectations for yourself in one year: \"I hope I can...\"; 3. Stamp the seal of honor with your own hands, lock it in the iron box, and agree to meet in one year."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Task for all members): Seal the time capsule written to their future selves, and the four little heroes practice reviewing their growth and transformation, and making firm self-commitments!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Future Time and Space Navigator\" medal of honor, complete the colorful picture and text worksheet and distribute the family life check-in task."
      }
    ],
    "scaffolds": {
      "asd": "Provide graphic and text guide stationery template: \"My best progress is.../I hope that one year from now I can.../I want to say to myself...\" Lower the threshold for text organization.",
      "ld": "Allow students to use drawings, stickers, and a few key words to complete the letter, with the teacher assisting in marking their thoughts.",
      "ebd": "In the letter, write down the \"secret words to clear the level\" when your emotions are violent, as a powerful anchor for self-stability in the future."
    },
    "visualCard": {
      "title": "⭐ Three essential elements of a future letter",
      "steps": [
        {
          "num": 1,
          "text": "Thank you to my past self who overcame difficulties and bravely practiced superpowers."
        },
        {
          "num": 2,
          "text": "Write down your specific expectations for yourself one year from now: 'I hope I can…'"
        },
        {
          "num": 3,
          "text": "I personally stamped the box with the honorary seal, locked it in the iron box, and promised to meet again a year later."
        }
      ]
    },
    "iepGoal": "In self-review and career outlook activities, be able to express personal growth and transformation in detail through writing, painting or oral expression and set future self-expected goals, with an achievement rate of more than 90%.",
    "regularClassTip": "The school can establish a campus ritual activity of \"opening the space-time mailbox before graduation\", so that the growth process of special education can be turned into lifelong psychological capital that can be seen and touched.",
    "decisionTree": {
      "prompt": "In the situation “📮 A Letter to My Future Self: Keep Learning and Keep Trying”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, thinking that one is worthless, crumpling the letter and throwing it on the ground, saying \"I have no future\", causing confusion and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"📜 \"Letter to Future Heroes\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  },
  {
    "id": "b-idea-101",
    "lessonNumber": 101,
    "legacy": true,
    "date": "",
    "dayOfWeek": "Flexible Topic",
    "festival": "",
    "unit": "Inspiration Library Topic 7: Building self-esteem and living independently",
    "title": "🌟 My Social Skills Journey: I Am the Captain of My Life",
    "code": "特自2-II-4",
    "themeColor": "#d97706",
    "badgeEmoji": "🌟",
    "badgeLabel": "The All-Round Independent Little Captain",
    "superSkill": "🌟 Captain of the Boat, Taking Control of Life",
    "summary": "Reviewing all the scenario drills in the entire 49-item lesson preparation inspiration library, the four little heroes integrated all the skills of sensory adjustment, pragmatic social skills, learning resilience, conflict resolution, environmental adaptation, and independent living, and won the highest honor, the \"Life Captain Gold Medal,\" ready to set sail for a magnificent and wonderful life!",
    "tags": [
      "ASD",
      "LD",
      "EBD"
    ],
    "story": {
      "title": "🚢 A golden rudder and a great pirate ship cutting through the waves!",
      "content": "Today, a large, gleaming wooden \"Great Wheel of Life\" was erected in front of the podium in the special education classroom, surrounded by glittering badges and flags from all 101 lessons! Streamers fluttered, and a large screen displayed precious moments of Yu, He, Jia, and Jun's journey—every drop of sweat, tears, and the triumphant rise of their spirits. With tears in her eyes, the teacher stepped forward, holding four weighty \"All-Round Self-Reliant Little Captain Gold Cups\": \"Little heroes, looking back on these forty-nine extraordinary thematic lessons, you learned how to protect your ears during alarms, how to smile when rejected, how to gently repair torn paper, and how to call for help when lost. Special education is never about making you exactly like others, but about teaching you to steer your own ship! Now, the vast ocean of life lies ahead, and each of you is a top-notch little captain holding a golden wheel!\" Yu, Jun, He, and Jia stood side by side in front of the steering wheel, their four little hands tightly clasped on it, and shouted in unison: \"Teacher, we have learned all the superpowers! No matter how big the storms of the future may be, we will hold our heads high and forge ahead!\" The golden cannon fire resounded through the sky, and the radiant smiles of the four little heroes bloomed into an everlasting, dazzling rainbow under the clear sky of OO Elementary School!",
      "question": "Now that you've learned so many special education life and interpersonal skills, what will you do when you encounter difficulties in life? Why do you say you are the best little captain in your own life?"
    },
    "timeline": [
      {
        "time": "00–08 min",
        "stage": "Cause motivation",
        "desc": "Introduction story \"🚢 The big golden steering wheel and the big pirate ship cutting through the waves! ”, guidance through puppet show situations: Having learned so many special education life and interpersonal superpowers, what will you do when you encounter difficulties in life in the future? Why do you say you are the best little captain in your life?"
      },
      {
        "time": "08–20 min",
        "stage": "Skill Demonstration",
        "desc": "Dismantling [Little Captain’s Three Oaths for Sailing]: 1. When encountering a violent storm (frustration and anger), immediately grasp the steering wheel in your brain and take a deep breath; 2. Use the 49 superpower toolbox you have learned to find the best solution; 3. Hold your head high, believe in yourself, and be a kind, brave, and never-say-die helmsman of life."
      },
      {
        "time": "20–35 min",
        "stage": "Role play",
        "desc": "4 role situation play theater (Yu🦁, Jun🐻, He🐼, Jia🦊 Tasks for all members): A grand graduation ceremony with a full set of forty-nine inspirational topics. Four little heroes practice swearing to take the helm of life and break the waves to set sail!"
      },
      {
        "time": "35–40 min",
        "stage": "Positive feedback",
        "desc": "Award the \"Almighty and Independent Little Captain\" honorary medal, complete the colorful picture and text worksheet and distribute family life check-in tasks."
      }
    ],
    "scaffolds": {
      "asd": "Published the \"Lifelong Social Superpower Overview Large Leaflet\", which has a built-in index of 49 situational quick-check tips for school children to carry with them for reference.",
      "ld": "Use the \"golden steering wheel physical teaching aid\" to let each student turn the steering wheel with his own hands and declare his or her sovereignty.",
      "ebd": "In the medal ceremony, the students' great breakthroughs in emotional self-control and interpersonal empathy are publicly recognized, and the lifelong internal control character is strengthened."
    },
    "visualCard": {
      "title": "⭐ The Little Captain's Three Oaths",
      "steps": [
        {
          "num": 1,
          "text": "When faced with a storm of anger and frustration, immediately grab the helm in your mind and take a deep breath."
        },
        {
          "num": 2,
          "text": "Use the 49 superpower tools you've learned to find the best solution."
        },
        {
          "num": 3,
          "text": "Hold your head high, believe in yourself, and be a kind, brave, and indomitable captain of your own life."
        }
      ]
    },
    "iepGoal": "In the final evaluation of the full set of special education courses, students can integrate social and adaptive skills in various fields, demonstrate a high sense of self-efficacy and flexibility in adapting to the environment, and achieve an achievement rate of more than 95%.",
    "regularClassTip": "The school should create a digital growth file of the all-round graduation process of special education children and share it with all Putonghua teachers and parents to jointly witness the miracle of life education.",
    "decisionTree": {
      "prompt": "In the situation “🌟 My Social Skills Journey: I Am the Captain of My Life”, consider what could happen with different choices.",
      "impulsive": {
        "title": "Consider this approach",
        "desc": "When encountering a situation, the brain loses control, retreats and gives up before difficulties, and regards failure as an unchangeable fate, causing chaos and danger.",
        "consequence": "This approach may interrupt the interaction or affect safety. Check the need and consider another approach together.",
        "feedback": "Choices can be changed. Ask for a demonstration or communicate a need for a break."
      },
      "super_skill": {
        "title": "Try the method from this lesson",
        "desc": "Calm down and take a deep breath to start \"🌟 \"Little Captain at the helm of life\", follow the steps to deal with it properly step by step!",
        "consequence": "This is an approach to practise. Others have their own views; keep checking, negotiating or seeking help.",
        "feedback": "Rehearse once with speech, pointing or gestures, then have the teacher record the prompts and outcome."
      }
    }
  }
];
// 初始化資料庫
let currentBriefings = [...defaultBriefings];
let activeBriefingId = defaultBriefings[0].id;
let activeFilter = "ALL";
let searchQuery = "";

// 課程完成狀態管理（支援本地與雲端跨裝置即時同步）
let completedCourses = JSON.parse(localStorage.getItem("completed_courses") || "{}");

// 切換當前選中日期的課程完成狀態
window.toggleCurrentCourseCompleted = function(isDone) {
  toggleCourseCompleted(activeBriefingId, isDone);
};

// 標記指定日期的課程完成狀態
window.toggleCourseCompleted = function(courseId, isDone) {
  const b = currentBriefings.find(x => x.id === courseId || x.date === courseId);
  if (isDone) {
    completedCourses[courseId] = true;
    if (b) completedCourses[b.id] = true;
    if (typeof AudioEffects !== 'undefined') AudioEffects.playCelebration();
    if (typeof triggerConfetti === 'function') triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 65);
  } else {
    delete completedCourses[courseId];
    if (b) {
      delete completedCourses[b.id];
      delete completedCourses[b.date];
    }
  }
  localStorage.setItem("completed_courses", JSON.stringify(completedCourses));

  // 更新各區塊 UI
  renderSidebar();
  updateBannerCompletionUI();
  updateCourseProgressBar();

  // 觸發雲端同步
  const stars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');
  syncIndexPushCloudStars(stars);
};

// 更新學期課程進度條
function updateCourseProgressBar() {
  const textEl = document.getElementById("courseProgressText");
  const barEl = document.getElementById("courseProgressBar");
  if (!textEl || !barEl) return;

  const total = currentBriefings.length;
  if (total === 0) return;

  let completedCount = 0;
  currentBriefings.forEach(b => {
    if (completedCourses[b.id] || completedCourses[b.date]) completedCount++;
  });

  const pct = Math.round((completedCount / total) * 100);
  textEl.innerText = `Completed ${completedCount} / ${total} lessons (${pct}%)`;
  barEl.style.width = `${pct}%`;
}

// 更新主 Banner 完成勾選卡狀態
function updateBannerCompletionUI() {
  const b = getActiveBriefing();
  if (!b) return;
  const isDone = !!(completedCourses[b.id] || completedCourses[b.date]);

  const box = document.getElementById("bannerCompletionBox");
  const chk = document.getElementById("bannerCompletionCheckbox");
  const title = document.getElementById("completionMainTitle");
  const sub = document.getElementById("completionSubTitle");
  const pill = document.getElementById("completionStatusPill");

  if (chk) chk.checked = isDone;
  if (!box) return;

  if (isDone) {
    box.classList.add("is-completed");
    if (title) title.innerText = "🎉 Today’s course has been successfully completed!";
    if (sub) sub.innerText = `Recorded in this browser. Teaching progress does not show learner mastery.`;
    if (pill) pill.innerText = "✅ Lesson completed";
  } else {
    box.classList.remove("is-completed");
    if (title) title.innerText = "Today's lesson: Not completed";
    if (sub) sub.innerText = "Records teaching delivered only. Record learner prompts and performance separately in Teaching Observations.";
    if (pill) pill.innerText = "⬜ Not taught yet";
  }
}

// 讀取 LocalStorage
function loadSavedData() {
  const customData = localStorage.getItem("custom_briefings");
  if (customData) {
    try {
      const parsed = JSON.parse(customData);
      currentBriefings = [...parsed, ...defaultBriefings];
    } catch (e) {
      console.error("Failed to parse custom briefings", e);
    }
  }
}

// 取得當前選中的晨報
function getActiveBriefing() {
  return currentBriefings.find(b => b.id === activeBriefingId) || currentBriefings[0];
}

function getUpcomingBriefing(briefings, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(now);
  const calendar = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const today = `${calendar.year}-${calendar.month}-${calendar.day}`;
  const scheduled = briefings.filter(briefing => !briefing.legacy && /^\d{4}-\d{2}-\d{2}$/.test(briefing.date || ""))
    .sort((first, second) => first.date.localeCompare(second.date));
  return scheduled.find(briefing => briefing.date >= today) || scheduled[scheduled.length - 1] || briefings[0];
}

// 渲染側邊欄清單
function renderSidebar() {
  const container = document.getElementById("dateList");
  container.innerHTML = "";

  const filtered = currentBriefings.filter(b => {
    // 標籤篩選
    const matchTag = activeFilter === "ALL" || b.tags.includes(activeFilter);
    // 關鍵字搜尋
    const matchSearch = !searchQuery ||
      b.title.includes(searchQuery) ||
      b.summary.includes(searchQuery) ||
      (b.date ? b.date.includes(searchQuery) : false);
    return matchTag && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 24px; color:#94a3b8; font-size:0.85rem;">No qualifying lesson preparation courses found</div>`;
    return;
  }

  let shownNewHeader = false;
  let shownLegacyHeader = false;

  filtered.forEach(b => {
    if (!b.legacy && !shownNewHeader) {
      shownNewHeader = true;
      const secHeader = document.createElement("div");
      secHeader.className = "curriculum-group-header";
      secHeader.style.cssText = "padding: 10px 14px; margin: 10px 0 8px 0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left: 4px solid #3b82f6; border-radius: 8px; font-size: 0.82rem; font-weight: 800; color: #1e40af; display: flex; align-items: center; gap: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);";
      secHeader.innerHTML = `🌟 52 Weekly Social Skills Lessons`;
      container.appendChild(secHeader);
    } else if (b.legacy && !shownLegacyHeader) {
      shownLegacyHeader = true;
      const secHeader = document.createElement("div");
      secHeader.className = "curriculum-group-header legacy";
      secHeader.style.cssText = "padding: 10px 14px; margin: 20px 0 8px 0; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-left: 4px solid #64748b; border-radius: 8px; font-size: 0.82rem; font-weight: 800; color: #334155; display: flex; align-items: center; gap: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);";
      secHeader.innerHTML = `💡 Special Education Lesson Preparation Inspiration Library Special Topic (Lessons 53-101 · 49 lessons in total)`;
      container.appendChild(secHeader);
    }

    const isCompleted = !!completedCourses[b.id];
    const card = document.createElement("div");
    card.className = `date-card ${b.id === activeBriefingId ? "active" : ""} ${isCompleted ? "is-completed" : ""}`;
    card.onclick = () => {
      selectBriefingById(b.id);
    };

    const tagsHtml = b.tags.map(t => {
      const cls = t === "ASD" ? "tag-asd" : (t === "LD" ? "tag-ld" : "tag-ebd");
      return `<span class="mini-tag ${cls}">${t}</span>`;
    }).join("");

    const dateLabel = b.legacy
      ? `Lesson ${b.lessonNumber} [Inspiration Topic]`
      : `Week ${b.lessonNumber} · ${b.festival ? '【' + b.festival + '】' : ''}${b.date}`;

    card.innerHTML = `
      <div class="date-card-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" class="sidebar-date-checkbox" onclick="event.stopPropagation(); toggleCourseCompleted('${b.id}', this.checked)" ${isCompleted ? "checked" : ""} title="Click to check the course completion status for this date">
          <span class="date-tag">${b.legacy ? '💡' : '📅'} ${dateLabel}</span>
        </div>
        <div style="display:flex; align-items:center; gap:4px;">
          ${isCompleted ? "<span class=\"completed-mini-badge\">✓ Done</span>" : ''}
          <span class="week-badge">${b.legacy ? "Flexible Topic" : b.dayOfWeek}</span>
        </div>
      </div>
      <div class="date-card-title">${b.title}</div>
      <div class="date-card-tags">
        ${tagsHtml}
        <span class="mini-tag" style="background:#f1f5f9; color:#64748b;">${b.code}</span>
      </div>
    `;
    container.appendChild(card);
  });
  updateCourseProgressBar();
}

// 乾淨格式化課堂標題（用於快速選單）
function formatCleanTitleForDropdown(b) {
  if (!b) return "";
  const fest = b.festival ? `【${b.festival}】` : "";
  let cleanTitle = (b.title || "").replace(/^【.*?】[——\-：:\s]*/, "");
  if (b.festival && cleanTitle.startsWith(b.festival)) {
    cleanTitle = cleanTitle.substring(b.festival.length).replace(/^[與和的大作戰——\-：:\s]+/, "");
  }
  return `${fest}${cleanTitle}`;
}

// 渲染快速跳轉週次與日期下拉選單
function renderDateDropdowns() {
  const mainSel = document.getElementById("mainDateDropdown");
  const sideSel = document.getElementById("sidebarDateDropdown");
  if (!mainSel && !sideSel) return;

  const newWeeks = currentBriefings.filter(b => !b.legacy);
  const legacyWeeks = currentBriefings.filter(b => b.legacy);

  let html = "";
  if (newWeeks.length > 0) {
    html += `<optgroup label="🌟 52 Weekly Social Skills Lessons">`;
    html += newWeeks.map(b => `
      <option value="${b.id}" ${b.id === activeBriefingId ? "selected" : ""}>
        Week ${b.lessonNumber} · ${formatCleanTitleForDropdown(b)} (${b.date || ''})
      </option>
    `).join("");
    html += `</optgroup>`;
  }
  if (legacyWeeks.length > 0) {
    html += `<optgroup label="💡 Special Education Lesson Preparation Inspiration Library Special Topic (Lessons 53-101 · 49 lessons in total)">`;
    html += legacyWeeks.map(b => `
      <option value="${b.id}" ${b.id === activeBriefingId ? "selected" : ""}>
        Lesson ${b.lessonNumber} · ${b.title}
      </option>
    `).join("");
    html += `</optgroup>`;
  }

  [mainSel, sideSel].forEach(sel => {
    if (!sel) return;
    sel.innerHTML = html;
    sel.value = activeBriefingId;
    sel.onchange = (e) => {
      selectBriefingById(e.target.value);
    };
  });
}

// 前進或後退一週/堂
window.stepBriefing = function(delta) {
  const idx = currentBriefings.findIndex(b => b.id === activeBriefingId);
  if (idx === -1) return;
  const nextIdx = idx + delta;
  if (nextIdx >= 0 && nextIdx < currentBriefings.length) {
    selectBriefingById(currentBriefings[nextIdx].id);
  }
};

// 選取指定課程 ID
window.selectBriefingById = function(id) {
  const found = currentBriefings.find(b => b.id === id);
  if (found) {
    window.stopIndexSpeech?.();
    activeBriefingId = id;
    renderSidebar();
    renderMainContent();
    renderDateDropdowns();
    setTimeout(() => {
      const activeCard = document.querySelector('.date-card.active');
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 50);
  }
};

// 全部展開或收合教師教學指引
window.toggleAllTeacherGuides = function(shouldOpen) {
  document.querySelectorAll(".guide-step-card").forEach(el => {
    el.open = shouldOpen;
  });
};

// 建立 40 分鐘 5 步走教師精確教學手冊與引導話術（搭配 Classroom 教材）
function buildDetailedTeacherGuide(b) {
  const story = b.story || {
    title: b.title,
    content: (b.timeline[0] && b.timeline[0].desc) || b.summary,
    question: "What would you do if you encountered this situation?"
  };
  const vCard = b.visualCard || { title: b.title, steps: [] };
  const rp = (typeof dailyRoleplays !== "undefined" && dailyRoleplays[b.id]) ? dailyRoleplays[b.id] : {
    scenario: `In the "${b.title}" situation, four students cooperated to complete the challenge!`,
    roles: [
      { roleId: 1, name: "Protagonist Challenger", studentName: "Yu", studentEmoji: "🦁", action: "Take a deep breath and speak clearly", dialogue: "Everyone please look at me! I took a deep breath!", tip: "Give Yu clear visual instructions" },
      { roleId: 2, name: "Collaborative Interactors", studentName: "Jun", studentEmoji: "🐻", action: "Restrain impulse and respond patiently", dialogue: "I will cooperate with everyone and abide by the rules!", tip: "Guide to practice listening" },
      { roleId: 3, name: "Warm and supportive partners", studentName: "He", studentEmoji: "🐼", action: "Stand aside and provide props to cheer you up", dialogue: "You two work together so well!", tip: "Give full play to the power of stabilizing peers" },
      { roleId: 4, name: "Order leader", studentName: "Jia", studentEmoji: "🦊", action: "Hold the sign high and clap loudly", dialogue: "All members challenged successfully!", tip: "Practice positive affirmation and hosting" }
    ]
  };

  const stepsData = [
    {
      num: 1,
      icon: "📖",
      time: "00–08 min",
      slideIdx: 0,
      title: "Story Island Adventure · Cause Motivation",
      themeColor: "#f59e0b",
      goal: `Through the situational adventure story [${story.title}], arouse empathy and realize the real challenges and feelings of "${b.title}" in campus life.`,
      ops: [
        `Click the shortcut button or open Classroom (Slide 1) on the classroom electronic whiteboard. It is recommended to click <strong>F</strong> key to enter full screen projection.`,
        `Confirm the voice style in the upper right corner (default is "🌸 Read-aloud voice·gentle female voice" can also be switched to "👦 Sunshine and energetic male voice").`,
        `Click "🔊 Read the full text of the story aloud", the computer will read the full text of the story to the whole class with simulated ventilation pauses.`,
        `After reading aloud, click below "🔊 Read the title" and play the question: "${story.question}" to guide the students to publish and share freely.`
      ],
      script: `"Kids, please look at the big screen!"The protagonist in today's story encountered a big test... Listen carefully, when this happened, if it were you, how would you feel in your heart and body?”`,
      students: [
        { name: "Yu", emoji: "🦁", tag: "ASD", tip: "Look at the words on the big screen and follow the phonetic reading; if you feel anxious about the conflict in the story, softly comfort: \"This is the protagonist of the story who is solving the level. Wait a minute and let's teach him his superpowers together!\"”" },
        { name: "Jun", emoji: "🐻", tag: "EBD", tip: "If you are excited after hearing about conflict situations, remind them to put their hands on their knees and practice \"raising their hands after listening to the questions\" to avoid interrupting or leaving their seats." },
        { name: "He", emoji: "🐼", tag: "ASD/LD", tip: "Please retell the most impressive word or character action in the story to build your listening confidence." },
        { name: "Jia", emoji: "🦊", tag: "ASD", tip: "Invite Jia to take the stage as a \"little story detective\", pointing out the focus of the questions and illustrations on the big screen, using visual expertise to build a sense of classroom participation." }
      ],
      warning: "Please do not label impulsive or erroneous characters in the story negatively. Emphasize that \"everyone may encounter it, and you can solve it by learning how to solve it.\""
    },
    {
      num: 2,
      icon: "💡",
      time: "08–16 min",
      slideIdx: 1,
      title: "Super Skills · Skill demonstration",
      themeColor: "#0284c7",
      goal: `Break ${vCard.title} into three visible steps and practice each action together.`,
      ops: [
        `Click the "›" button on the right side of the screen or press the right key on the keyboard to enter Slide 2.`,
        `Projected presentation of 3-step visual chart: ${vCard.steps.map(s => `Step ${s.num}: ${s.text}`).join("；")}.`,
        `The teacher demonstrates standard formulas and body movements, leading all students to stand up or perform gestures in unison on their seats.`,
        `Click the center of the screen "🎭 Enter the character theater! ›" button to smoothly transition to the 4-character practice session.`
      ],
      script: `"The brain is going to be upgraded!" We broke this superpower into three magical movements. Everyone stretched out their hands and followed the teacher to do it: the first step...the second step...the third step...everyone did very standard actions! ”`,
      students: [
        { name: "Yu", emoji: "🦁", tag: "ASD", tip: "Provide physical digital picture card comparison, pointing in order with 1-2-3 fingers, no abstract skipping." },
        { name: "Jun", emoji: "🐻", tag: "EBD", tip: "Practice keeping hand movements on your chest or knees without waving or touching classmates." },
        { name: "He", emoji: "🐼", tag: "ASD/LD", tip: "Recite the mantra in conjunction with the clapping rhythm (pa-pa-pa) to enhance auditory rhythm memory." },
        { name: "Jia", emoji: "🦊", tag: "ASD", tip: "Please come on stage as a teaching assistant and lead all the students to repeat the steps and formulas aloud to strengthen the procedural structure." }
      ],
      warning: "The formula must be kept precise and short (no more than 3 steps) to avoid distracting attention with complicated reasoning."
    },
    {
      num: 3,
      icon: "🎭",
      time: "16–26 min",
      slideIdx: 2,
      title: "Character Theater · Situational Drill",
      themeColor: "#8b5cf6",
      goal: `All four students took the stage for a real-life simulation, and completed the positive interpersonal communication of "${b.title}" according to the action instructions and phonetic lines.`,
      ops: [
        `Enter the Slide 3 character theater and confirm that the whole scene is focused on today's situation: ${rp.scenario}.`,
        `Click on the top "🔊 Demonstrate 4 character lines in sequence", the big screen cards will highlight in sequence, allowing the whole class to observe the computer movement demonstration first!`,
        `Assign students to the stage to position: Yu (${rp.roles[0].name}), Zhen (${rp.roles[1].name}), He (${rp.roles[2].name}), Jia (${rp.roles[3].name}).`,
        `When it is each student's turn, click "🔊 Demonstrate this line" and read it with students, and practice the phonetic pronunciation out loud.`,
        `After all members have completed the exercise, click "⭐ Great success in the exercise! All members +1 star" to trigger the victory sound effect and award 1 honorary star to each of the four students!`
      ],
      script: `"Now four superstars are on stage! Yu is responsible for the parties, Zhen is responsible for the interactive partner, He is responsible for the warm support, and Jia is responsible for the little referee! Everyone looked at the actions and lines on the big screen, Action!”`,
      students: [
        { name: "Yu", emoji: "🦁", tag: "ASD", tip: `Action: ${rp.roles[0].action}. Line: “${rp.roles[0].dialogue}”. Teaching tip: ${rp.roles[0].tip}` },
        { name: "Jun", emoji: "🐻", tag: "EBD", tip: `Action: ${rp.roles[1].action}. Line: “${rp.roles[1].dialogue}”. Teaching tip: ${rp.roles[1].tip}` },
        { name: "He", emoji: "🐼", tag: "ASD/LD", tip: `Action: ${rp.roles[2].action}. Line: “${rp.roles[2].dialogue}”. Teaching tip: ${rp.roles[2].tip}` },
        { name: "Jia", emoji: "🦊", tag: "ASD", tip: `Action: ${rp.roles[3].action}. Line: “${rp.roles[3].dialogue}”. Teaching tip: ${rp.roles[3].tip}` }
      ],
      warning: "If the student forgets the words or is too shy to speak, the teacher can click \"🔊 Demonstrate this line and read it with no time pressure."
    },
    {
      num: 4,
      icon: "🎮",
      time: "26–36 min",
      slideIdx: 3,
      title: "Playground practice · Interactive games",
      themeColor: "#059669",
      goal: `Through large-screen interactive challenges (thermometer/breathing circle/eye radar/baton/board game), gamification provides real-time feedback and enhances skill categorization.`,
      ops: [
        `Enter the Slide 4 actual game area (right-click or click "Enter Actual Game" below).`,
        `Invite students to come to the large screen or electronic whiteboard in sequence and use their fingers or stylus to interact.`,
        `When the student's operation is successful, the large screen will trigger exclusive sound effects (Pop/Chime/Fanfare) and star accumulation.`,
        `Remind the students in the audience to maintain the "civilized little audience" quiet etiquette and take turns on stage.`
      ],
      script: `"The superpower actual battle begins!" Everyone takes turns to go on stage to challenge the game levels. The children in the audience are responsible for counting seconds and cheering to see who can pass the level in one go!”`,
      students: [
        { name: "Yu", emoji: "🦁", tag: "ASD", tip: "Provide clear visual touch guidance, and upon completion, the whole class will give three warm applauses." },
        { name: "Jun", emoji: "🐻", tag: "EBD", tip: "Practice waiting patiently for your turn in the audience, and then come on stage when it is your turn, without pushing your peers." },
        { name: "He", emoji: "🐼", tag: "ASD/LD", tip: "If the operation speed is slow, the teacher will provide gentle support and companionship to the limbs without urging." },
        { name: "Jia", emoji: "🦊", tag: "ASD", tip: "Assist the teacher to operate the mouse or switch game topics to increase active participation with clearly structured tasks." }
      ],
      warning: "If the game challenge fails, immediately give the \"I'm still learning to try again\" pass and guide you to take a deep breath and challenge again."
    },
    {
      num: 5,
      icon: "🏆",
      time: "36–40 min",
      slideIdx: 4,
      title: "Honor Award Podium · Integration and Summary",
      themeColor: "#d97706",
      goal: `Count the honor stars in the class, praise each student's specific progress, and hand over the original class's classification tasks and worksheets.`,
      ops: [
        `Enter Slide 5 Honors Podium.`,
        `Click the "⭐ Today's star settlement for all members" button to trigger the celebration horn sound effect and display the total stars of the four students.`,
        `Click on the upper right corner "📄 "Today's Study Sheet" button opens today's colorful graphic worksheet and sends it to students for intuitive circle checking.`,
        `Stamp "teacher's signature" and reward sticker on the student's worksheet.`
      ],
      script: `"All four children have been upgraded today!"Yu took a deep breath today, Zhen took the initiative to apologize, was very courageous, and enthusiastic about helping, and the host Jia was very fair! Please put a stamp of honor on your worksheet and remember to continue using this super power when you return to regular classes!”`,
      students: [
        { name: "Yu", emoji: "🦁", tag: "ASD", tip: "Stamp your personal star bankbook to enhance your sense of self-efficacy." },
        { name: "Jun", emoji: "🐻", tag: "EBD", tip: "Concretely verbally acknowledge today’s successful moment of emotional braking and encourage continuation of good behavior." },
        { name: "He", emoji: "🐼", tag: "ASD/LD", tip: "Big thumbs up for assisting and completing worksheet check-boxes." },
        { name: "Jia", emoji: "🦊", tag: "ASD", tip: "Award \"Today's Order Star\" medal of honor to affirm their compliance with the rules and positive interaction." }
      ],
      warning: `Notes in the teacher's contact book: "Today I completed the [${b.title}] drill in the study classroom and performed very well!"”Remind regular class instructors to give immediate verbal affirmation when students practice skills (${b.regularClassTip}).`
    }
  ];

  return stepsData.map((s, idx) => `
    <details class="guide-step-card" ${idx === 0 || idx === 2 ? "open" : ""}>

      <!-- Accordion Header Summary -->
      <summary class="guide-step-summary">
        <div class="guide-step-header-left">
          <span class="guide-step-badge" style="background:${s.themeColor}15; color:${s.themeColor}; border:1px solid ${s.themeColor}40;">
            ${s.icon} Step ${s.num}
          </span>
          <span class="guide-step-time">${s.time}</span>
          <span class="guide-step-title">${s.title}</span>
        </div>
        <div class="guide-step-summary-right">
          <a class="btn btn-sm" href="classroom.html?id=${b.id}&slide=${s.slideIdx}" target="_blank" onclick="event.stopPropagation();" style="background:#e0f2fe; color:#0369a1; border:1px solid #7dd3fc; font-weight:800; font-size:0.8rem; padding:3px 8px;" title="Open this step teaching material slideshow in a separate page">
            🚀 Classroom Materials (Slide ${s.slideIdx + 1})
          </a>
          <span class="guide-toggle-icon">▼</span>
        </div>
      </summary>

      <!-- Accordion Content Body -->
      <div class="guide-step-body">

        <!-- Goal Box -->
        <div class="guide-box guide-box-goal">
          <strong>🎯 The core objectives of this link:</strong>${s.goal}
        </div>

        <!-- Classroom Controls Box -->
        <div class="guide-box guide-box-ops">
          <div style="font-weight:900; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
            <span>💻 Classroom classroom teaching materials precise operation steps:</span>
          </div>
          <ol style="margin:0; padding-left:20px; line-height:1.7; font-size:0.92rem;">
            ${s.ops.map(op => `<li>${op}</li>`).join("")}
          </ol>
        </div>

        <!-- Teacher Script Box -->
        <div class="guide-box guide-box-script">
          <div style="font-weight:900; margin-bottom:4px;">
            🗣️ Teacher’s classroom guidance skills (word-for-word demonstration example):
          </div>
          <div style="font-size:0.95rem; line-height:1.8; font-weight:800; color:#78350f; font-style:italic;">
            ${s.script}
          </div>
        </div>

        <!-- 4 Students Scaffolding Box -->
        <div class="guide-box guide-box-students">
          <div style="font-weight:900; color:#1e293b; margin-bottom:8px; font-size:0.92rem;">
            🦁🐻🐼🦊 Individualized real-time guidance for four students:
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px;">
            ${s.students.map(st => `
              <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:10px; font-size:0.88rem; line-height:1.5;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <strong style="color:#0f172a;">${st.emoji} ${st.name}</strong>
                  <span style="font-size:0.75rem; background:#f1f5f9; color:#475569; padding:2px 6px; border-radius:4px; font-weight:800;">${st.tag}</span>
                </div>
                <div style="color:#334155;">${st.tip}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Safety / Warning Box -->
        <div class="guide-box guide-box-warning">
          <strong>⚠️ Regular classroom classroom support reminder:</strong>${s.warning}
        </div>

      </div>

    </details>
  `).join("");
}

// 渲染主內容區塊
function renderMainContent() {
  const b = getActiveBriefing();
  if (!b) return;

  // Banner
  if (b.legacy) {
    document.getElementById("bannerDate").innerText = `💡 Special Education Lesson Preparation Inspiration Library Special Topic · Lesson ${b.lessonNumber}`;
  } else {
    const prefix = `Week ${b.lessonNumber} ${b.festival ? '· 【' + b.festival + '】' : ''}`;
    document.getElementById("bannerDate").innerText = `📅 ${prefix} · ${b.date}（${b.dayOfWeek}）`;
  }
  document.getElementById("bannerCode").innerText = b.code;
  document.getElementById("bannerUnit").innerText = b.unit;
  document.getElementById("bannerTitle").innerText = b.title;
  document.getElementById("bannerSummary").innerText = b.summary;
  updateBannerCompletionUI();

  // Badges
  const badgesContainer = document.getElementById("bannerBadges");
  badgesContainer.innerHTML = `
    <span class="badge" style="background:#ccfbf1; color:#0f766e;">🧩 Autism Spectrum Disorder (ASD) Structured Support</span>
    <span class="badge" style="background:#ede9fe; color:#6b21a8;">🎨 Learning Disability (LD) Multisensory Low Literacy</span>
    <span class="badge" style="background:#fee2e2; color:#991b1b;">🛡️ Emotional Disorders (EBD) Calm Down Line of Defense</span>
  `;

  // 40min Timeline
  const timelineContainer = document.getElementById("timelineList");
  if (timelineContainer) {
    timelineContainer.innerHTML = buildDetailedTeacherGuide(b);
  }

  // Scaffolds
  document.getElementById("scaffoldAsd").innerText = b.scaffolds.asd;
  document.getElementById("scaffoldLd").innerText = b.scaffolds.ld;
  document.getElementById("scaffoldEbd").innerText = b.scaffolds.ebd;

  // Visual Flashcard
  document.getElementById("visualCardTitle").innerText = b.visualCard.title;
  const stepsContainer = document.getElementById("visualSteps");
  stepsContainer.innerHTML = b.visualCard.steps.map(s => `
    <div class="visual-step">
      <div class="step-num">${s.num}</div>
      <div class="step-text">${s.text}</div>
    </div>
  `).join("");

  // IEP Box
  document.getElementById("iepText").innerText = b.iepGoal;

  // Regular Class Tip & Home Task
  document.getElementById("regularTipText").innerText = b.regularClassTip;
  const homeTaskEl = document.getElementById("homeTaskText");
  if (homeTaskEl) {
    homeTaskEl.innerText = b.homeTask ? `${b.homeTask.action}（${b.homeTask.checkText}）` : "After returning home from school, demonstrate today’s social superpower to your parents!";
  }

  // 課堂故事渲染
  const story = b.story || {
    title: b.title,
    content: (b.timeline[0] && b.timeline[0].desc) || b.summary,
    question: "What would you do if you encountered this situation?"
  };
  const storyTitleEl = document.getElementById("briefingStoryTitle");
  if (storyTitleEl) storyTitleEl.innerHTML = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.title) : story.title;
  const storyContentEl = document.getElementById("briefingStoryContent");
  if (storyContentEl) storyContentEl.innerHTML = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.content) : story.content;
  const storyQuestionEl = document.getElementById("briefingStoryQuestion");
  if (storyQuestionEl) storyQuestionEl.innerHTML = typeof toZhuyinHtml === "function" ? toZhuyinHtml(story.question) : story.question;

  // 渲染今日 4 角色情境小劇場
  const rpContainer = document.getElementById("briefingRoleplayContent");
  if (rpContainer) {
    const rp = (typeof dailyRoleplays !== "undefined" && dailyRoleplays[b.id]) ? dailyRoleplays[b.id] : null;
    if (rp) {
      rpContainer.innerHTML = `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px 16px; margin-bottom:14px;">
          <strong style="color:#0f172a; font-size:1rem;">🎬 Today’s situation:</strong>
          <span style="color:#334155; font-size:0.95rem; line-height:1.6;">${rp.scenario}</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
          ${rp.roles.map(r => `
            <div style="background:#ffffff; border:1.5px solid #e2e8f0; border-top:5px solid ${r.studentColor}; border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="background:${r.studentColor}; color:#ffffff; font-weight:900; font-size:0.85rem; padding:3px 8px; border-radius:999px;">
                  ${r.studentEmoji} ${r.studentName}
                </span>
                <strong style="color:#0f172a; font-size:0.95rem;">${r.name}</strong>
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:8px 10px; font-size:0.9rem; line-height:1.5;">
                <div style="font-weight:800; color:#475569; font-size:0.8rem; margin-bottom:2px;">🎬 Things to do (actions and expressions):</div>
                <div style="color:#1e293b;">${r.action}</div>
              </div>
              <div style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:8px 10px; font-size:0.95rem; line-height:1.6;">
                <div style="font-weight:800; color:#854d0e; font-size:0.8rem; margin-bottom:2px;">💬 Dialogue lines:</div>
                <div style="color:#0f172a; font-weight:800;">『${r.dialogue}』</div>
                <div style="display:flex; justify-content:flex-end; margin-top:4px;">
                  <button class="btn btn-sm" onclick="speakIndexQueue('${r.studentName}負責的${r.name}說：${r.dialogue.replace(/'/g, "\\'")}', 'role')" style="background:#fef08a; color:#854d0e; font-weight:800; padding:2px 8px; font-size:0.8rem; border:1px solid #facc15;" title="Read this line aloud">
                    🔊 Read lines
                  </button>
                </div>
              </div>
              <div style="font-size:0.8rem; color:#64748b; background:#f1f5f9; padding:6px 8px; border-radius:6px; margin-top:auto;">
                💡 <strong>Special education tips:</strong>${r.tip}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      rpContainer.innerHTML = "";
    }
  }

  // 更新課堂模式與學習單按鈕連結
  const headerBtn = document.getElementById("headerLaunchClassBtn");
  if (headerBtn) {
    headerBtn.href = `classroom.html?id=${b.id}`;
  }
  const sheetBtn = document.getElementById("bannerWorksheetBtn");
  if (sheetBtn) {
    sheetBtn.href = `worksheet.html?id=${b.id}`;
  }

  // Restore Checkboxes State
  restoreCheckboxes(b.id);
}

// 快速跳轉至當日課堂投影模式
window.launchClassroomForCurrent = function() {
  window.location.href = `classroom.html?id=${activeBriefingId}`;
};

// 儲存與恢復 Checklist
function handleCheck(box) {
  const key = `check_${activeBriefingId}_${box.id}`;
  localStorage.setItem(key, box.checked);
}

function restoreCheckboxes(briefingId) {
  const checkboxes = document.querySelectorAll(".checklist input[type='checkbox']");
  checkboxes.forEach(box => {
    const key = `check_${briefingId}_${box.id}`;
    const saved = localStorage.getItem(key);
    box.checked = saved === "true";
  });
}

// 複製 IEP 文字
function copyIep() {
  const b = getActiveBriefing();
  navigator.clipboard.writeText(b.iepGoal).then(() => {
    alert("✅ IEP Quantitative Goals copied to clipboard! Can be posted directly to the IEP report or contact book.");
  });
}

function copyRegularTip() {
  const b = getActiveBriefing();
  navigator.clipboard.writeText(b.regularClassTip).then(() => {
    alert("✅ The fusion formula for ordinary class instructors has been copied! You can directly send it to the tutor's LINE or fill in the contact book.");
  });
}

// 複製完整教案草稿
function copyFullLesson() {
  const b = getActiveBriefing();
  const text = `
[OO Elementary School Learning Classroom Social and Communication Skills Lesson Preparation Platform]
${b.legacy ? "Category:💡 Special Education Lesson Preparation Inspiration Library Special Topic (No. " + b.lessonNumber + " Lesson · Flexible no date limit)" : "Date:" + b.date + '（' + b.dayOfWeek + '）'}
Units: ${b.unit} - ${b.title}
Curriculum correspondence: ${b.code}
Core summary: ${b.summary}

[40-minute withdrawal class process]:
${b.timeline.map(t => `- ${t.time}【${t.stage}】：${t.desc}`).join("\n")}

[Differentiated scaffolding]:
• Autism (ASD): ${b.scaffolds.asd}
• Learning Disability (LD): ${b.scaffolds.ld}
• Emotional disorders (EBD): ${b.scaffolds.ebd}

[Measurable IEP Goals]:
${b.iepGoal}

[Instructions for ordinary class teachers to normalize their daily lives]:
${b.regularClassTip}
  `.trim();

  navigator.clipboard.writeText(text).then(() => {
    alert("📋 The complete lesson plan for today’s lesson has been copied to the clipboard!");
  });
}

// 搜尋與篩選事件
function setupFilters() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeFilter = pill.getAttribute("data-filter");
      renderSidebar();
    });
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderSidebar();
  });
}

// Modal 新增晨報事件
let addModalReturnFocus=null;
function openAddModal() {
  addModalReturnFocus=document.activeElement;
  document.body.classList.add("teacher-dialog-open");
  document.getElementById("addModal").classList.add("open");
  const today = new Date(Date.now() - new Date().getTimezoneOffset()*60000).toISOString().split("T")[0];
  document.getElementById("newDate").value = today;
  document.getElementById("newTitle").focus();
}

function closeAddModal() {
  document.getElementById("addModal").classList.remove("open");
  document.body.classList.remove("teacher-dialog-open");
  addModalReturnFocus?.focus();
}

function handleAddModalKeys(e) {
  if(e.key==='Escape'){e.preventDefault();closeAddModal();}
  if(e.key!=='Tab')return;
  const nodes=[...document.querySelectorAll('#addModal button, #addModal input, #addModal textarea')].filter(x=>!x.disabled);
  const first=nodes[0],last=nodes[nodes.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
}

function saveCustomBriefing(e) {
  e.preventDefault();
  const field=id=>document.getElementById(id).value.trim().replace(/[<>]/g, '');
  const title=field('newTitle'), summary=field('newSummary');
  const steps=['newStep1','newStep2','newStep3'].map((id,i)=>({num:i+1,text:field(id)}));
  const newEntry={
    id:'b-'+Date.now(), custom:true, date:field('newDate'), dayOfWeek:"Custom schedule",
    unit:field('newUnit'),title,code:field('newCode')||"Not specified; teacher should check the curriculum code",summary,tags:[],
    timeline:[
      {time:"00–08 min",stage:"Cause motivation",desc:"Check the learner’s state and participation choice; discuss the situation."},
      {time:"08–16 min",stage:"Skill Demonstration",desc:"Model the three lesson steps using speech or picture pointing."},
      {time:"16–26 min",stage:"Role play",desc:"Take turns practising the three steps; watching first is welcome."},
      {time:"26–36 min",stage:"Apply in a new situation",desc:"Practise with a new partner or setting and record the prompts actually used."},
      {time:"36–40 min",stage:"Review and follow-up",desc:"Check the learner’s needs and plan who and where to practise with in daily life."}
    ],
    scaffolds:{asd:field('newAsd')||"Offer step cards and allow pointing or watching first.",ld:field('newLd')||"Give one message at a time; model before practising.",ebd:field('newEbd')||"Check sensory and emotional needs first; keep rest and help available."},
    visualCard:{title:`⭐ ${title} key card`,steps},
    story:{title,content:field('newStory')||summary,question:"What help would you like in this situation? Which step could you practise first?"},
    useBrowserSpeech:true,
    iepGoal:field('newIep')||`Observe “${steps[1].text}” under teacher-defined conditions and prompts; set opportunities and an individual criterion from the baseline.`,
    regularClassTip:`When a natural opportunity occurs, prompt “${steps[1].text}” and record the support given. Do not force participation.`,
    homeTask:"Teacher and family choose a suitable daily-life situation together. Record honestly if no opportunity occurs."
  };
  try {
    const existing=JSON.parse(localStorage.getItem('custom_briefings')||'[]');
    if(!Array.isArray(existing))throw new Error('invalid');
    localStorage.setItem('custom_briefings',JSON.stringify([newEntry,...existing]));
  } catch(err) {document.getElementById('customSaveStatus').textContent="Not saved: Browser storage is unavailable. Save a separate copy of the lesson content first.";return;}
  currentBriefings.unshift(newEntry);activeBriefingId=newEntry.id;
  closeAddModal();renderSidebar();renderMainContent();
  const notice=document.createElement('p');notice.setAttribute('role','status');notice.textContent="🎉 Lesson added. Its presentation and custom practice template are linked and stored only in this browser.";document.getElementById('dailyLesson').prepend(notice);
}

// Records remain on this browser; synchronize only same-origin tabs.
function syncIndexFetchCloudStars() {
  completedCourses = JSON.parse(localStorage.getItem("completed_courses") || "{}");
  renderIndexStudentStars();
  updateCourseProgressBar();
  updateBannerCompletionUI();
}
function syncIndexPushCloudStars() { /* Already saved locally by the caller. */ }
window.addEventListener("storage", event => {
  if (["student_stars", "completed_courses"].includes(event.key)) {
    syncIndexFetchCloudStars();
    renderSidebar();
  }
});

// 備課網頁端四位學生星星增減
window.indexAddStar = function(id) {
  const stars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');
  stars[id] = (stars[id] || 0) + 1;
  localStorage.setItem("student_stars", JSON.stringify(stars));
  renderIndexStudentStars();
  syncIndexPushCloudStars(stars);
  AudioEffects.playDing();
  triggerConfetti(window.innerWidth * 0.15, window.innerHeight * 0.35, 20);
};

window.indexMinusStar = function(id) {
  const stars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');
  if ((stars[id] || 0) > 0) {
    stars[id]--;
    localStorage.setItem("student_stars", JSON.stringify(stars));
    renderIndexStudentStars();
    syncIndexPushCloudStars(stars);
    AudioEffects.playPop();
  }
};

// 渲染四位學生的星星代幣存摺 (童趣超能力寶箱風)
function renderIndexStudentStars() {
  const container = document.getElementById("indexStudentsBar");
  if (!container) return;
  const stars = JSON.parse(localStorage.getItem("student_stars") || '{"yu":0,"he":0,"jia":0,"jun":0}');
  const students = [
    { id: "yu", name: "Yu", emoji: "🦁", role: "Captain" },
    { id: "he", name: "He", emoji: "🐼", role: "Pilotage" },
    { id: "jia", name: "Jia", emoji: "🦊", role: "Adventure" },
    { id: "jun", name: "Jun", emoji: "🐻", role: "Hero" }
  ];
  container.innerHTML = students.map(s => `
    <div class="treasure-chest-card">
      <div class="chest-card-top">
        <div class="chest-card-identity">
          <span class="chest-avatar" onclick="highFiveMascot('${s.id}')" title="Click to give little ${s.name} a high five!">${s.emoji}</span>
          <span class="chest-name">Small ${s.name}</span>
        </div>
        <span class="chest-role">${s.role}</span>
      </div>
      <div class="chest-card-bottom">
        <button class="chest-btn-mini" onclick="indexMinusStar('${s.id}')" title="Deduct 1 star">−</button>
        <span class="chest-star-count">⭐ ${stars[s.id] || 0}</span>
        <button class="chest-btn-mini chest-btn-plus" onclick="indexAddStar('${s.id}')" title="Add 1 star">+</button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 童趣手繪動態互動與音效系統 (Web Audio + Confetti)
// ==========================================
const AudioEffects = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playDing() {
    if (window.LearningSupport?.quiet()) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch(e) {}
  },
  playPop() {
    if (window.LearningSupport?.quiet()) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  },
  playCelebration() {
    if (window.LearningSupport?.quiet()) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.42);
      });
    } catch(e) {}
  }
};

window.triggerConfetti = function(originX, originY, count = 40) {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#fde047"];
  const particles = [];
  const startX = originX || window.innerWidth / 2;
  const startY = originY || window.innerHeight * 0.4;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 8;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      shape: Math.random() > 0.4 ? "rect" : "star",
      alpha: 1
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22;
      p.rotation += p.vRot;
      p.alpha -= 0.016;
      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          for (let s = 0; s < 5; s++) {
            ctx.lineTo(Math.cos((18 + s * 72) * Math.PI / 180) * p.size, -Math.sin((18 + s * 72) * Math.PI / 180) * p.size);
            ctx.lineTo(Math.cos((54 + s * 72) * Math.PI / 180) * (p.size / 2), -Math.sin((54 + s * 72) * Math.PI / 180) * (p.size / 2));
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    });
    frame++;
    if (alive && frame < 90) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(animate);
};

const MASCOT_DIALOGUES = {
  yu: [
    "\"Take a deep breath, look between your eyebrows and say good morning loudly!\"",
    "\"I am Yu! Let's put our superpowers into the treasure box together today!\"",
    "\"Look into each other's eyes and smile, everyone is a good partner!\"",
    "\"Yeah! High five successfully! Yu is twice as courageous today!\""
  ],
  jun: [
    "\"The turtle shrinks its shell and counts to ten, and the brain puts on the brakes!\"",
    "\"I am Jia! Turn the loudspeaker into a soft one, and speak so gently!\"",
    "\"When you are angry, take three deep breaths and your heartbeat will slowly calm down!\"",
    "\"High five! The most handsome thing is when your power is used to help others!\""
  ],
  he: [
    "\"Smile and nod three times, let's learn slowly together!\"",
    "\"I'm He! When I encounter a word I don't know, I'm just still learning it!\"",
    "\"Bring water to the teacher with both hands, thank you for taking care of me every day!\"",
    "\"High five! He will often help everyone organize the warm castle!\""
  ],
  jia: [
    "\"Thank you for clearing the code, I am so happy to make friends!\"",
    "\"I'm Jia! An arm airbag, everyone can feel at ease!\"",
    "\"As we line up and look ahead, we are proud little guards!\"",
    "\"High five! The searchlight of wit has been turned on to explore new superpowers!\""
  ]
};

window.highFiveMascot = function(id) {
  AudioEffects.playDing();
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'mascotJump 0.5s ease';
  }
  const quotes = MASCOT_DIALOGUES[id] || [];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const bubble = document.getElementById(`bubble-${id}`);
  if (bubble) {
    bubble.innerText = quote;
    bubble.style.transform = 'scale(1.08)';
    setTimeout(() => { bubble.style.transform = 'scale(1)'; }, 300);
  }
  triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.3, 25);
};

window.celebrateAllMascots = function() {
  AudioEffects.playCelebration();
  ['yu', 'jun', 'he', 'jia'].forEach((id, idx) => {
    setTimeout(() => {
      const card = document.getElementById(`card-${id}`);
      if (card) {
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'mascotJump 0.6s ease';
      }
    }, idx * 90);
  });
  triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 60);
};

window.selectEmotion = function(type, btn) {
  document.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const statusMap = {
    sunny: { title: "☀️ Sunny", text: "Great! Today, with full sunshine and energy, let’s use our social superpowers together!", sound: 'ding' },
    breezy: { title: "🌤️ Breezy", text: "What a comfortable mood! Take a deep breath of fresh air and set out calmly and focused!", sound: 'ding' },
    rainy: { title: "🌧️ Rainy", text: "Thank you for your hard work ~ Hug the little bear! Close your eyes and take three deep breaths to gently recharge yourself.", sound: 'ding' },
    stormy: { title: "⚡ Dark clouds and thunder", text: "Is the body alarm going off? Follow the little turtle into the safety shell, count from one to ten, and put your brain on the brakes!", sound: 'pop' },
    rainbow: { title: "🌈 Rainbow", text: "Wow! You are now full of super magical energy, and you will definitely become the most shining little social hero today!", sound: 'celebrate' }
  };

  const conf = statusMap[type] || statusMap.sunny;
  const statusEl = document.getElementById('emotionSelectedStatus');
  const textEl = document.getElementById('emotionFeedbackText');
  if (statusEl) statusEl.innerText = conf.title;
  if (textEl) textEl.innerText = conf.text;

  if (conf.sound === 'celebrate') {
    AudioEffects.playCelebration();
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 45);
  } else if (conf.sound === 'pop') {
    AudioEffects.playPop();
  } else {
    AudioEffects.playDing();
  }
};

// 備課首頁情境故事與題目朗讀功能
window._indexActiveUtterances = [];
let indexSpeechMode = null; // 'story' | 'question' | null
let indexLiveAudio = null;
let indexSpeechSessionId = 0;
let activeIndexSpeechTimer = null;
const indexAudioBlobCache = new Map();

window.stopIndexSpeech = function() {
  indexSpeechSessionId++;
  if (activeIndexSpeechTimer) {
    clearTimeout(activeIndexSpeechTimer);
    activeIndexSpeechTimer = null;
  }
  if (indexLiveAudio) {
    indexLiveAudio.onended = null;
    indexLiveAudio.onerror = null;
    try {
      indexLiveAudio.pause();
      indexLiveAudio.currentTime = 0;
    } catch (e) {}
    indexLiveAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  window._indexActiveUtterances = [];
  indexSpeechMode = null;
  updateIndexTtsButtons();
};

window.playIndexUniversalSpeech = async function(text, mode) {
  window.stopIndexSpeech();
  const sessionId = indexSpeechSessionId;

  let cleanText = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[『』「」"]/g, "")
    .replace(/——+/g, "，")
    .replace(/\.{3,}/g, "。")
    .replace(/…+/g, "。")
    .trim();

  if (!cleanText) return;

  indexSpeechMode = mode;
  updateIndexTtsButtons();

  const preferredGender = localStorage.getItem("preferred_tts_gender") || "female";
  const b = getActiveBriefing();
  const audioKey = b ? b.id : "";

  // 1. 優先播放預錄廣播級配音員音檔
  if (false && audioKey && !getActiveBriefing()?.useBrowserSpeech && (mode === "story" || mode === "question")) {
    const staticAudioUrl = `audio/${mode}_${preferredGender}_${audioKey}.mp3`;
    let fallbackHandled = false;
    const fallbackToWebSpeech = () => {
      if (fallbackHandled || sessionId !== indexSpeechSessionId || indexSpeechMode !== mode) return;
      fallbackHandled = true;
      window.speakIndexQueue(cleanText, mode);
    };

    try {
      const audio = new Audio();
      indexLiveAudio = audio;

      audio.onended = () => {
        if (sessionId !== indexSpeechSessionId || indexLiveAudio !== audio) return;
        indexSpeechMode = null;
        indexLiveAudio = null;
        updateIndexTtsButtons();
      };

      audio.onerror = () => {
        fallbackToWebSpeech();
      };

      audio.src = staticAudioUrl;
      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          if (sessionId === indexSpeechSessionId) updateIndexTtsButtons();
        }).catch(() => {
          fallbackToWebSpeech();
        });
      }
      return;
    } catch (e) {
      fallbackToWebSpeech();
      return;
    }
  }

  window.speakIndexQueue(cleanText, mode);
};
function getBestTextbookVoice(preferredGender = "female") {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "Yunzhe", "Yunxi", "Yun Yang", "Kangkang", "Zhiwei", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
  const FEMALE_KEYWORDS = ["hsiaochen", "hsiaohan", "Xiaozhen", "Xiaohan", "meijia", "Meijia", "tingting", "Tingting", "sinji", "Shanyi", "sandy", "shelley", "flo", "grandma", "yaoyao", "yating", "Yating", "hanhan", "Hanhan", "female", "woman", "girl"];

  let bestVoice = null;
  let highestScore = -999999;

  for (const v of voices) {
    let score = 0;
    const nameLower = (v.name || "").toLowerCase();
    const langLower = (v.lang || "").toLowerCase().replace("_", "-");

    // 必須是中文語系
    if (!langLower.startsWith("zh")) continue;

    const isMatchMale = MALE_KEYWORDS.some(k => nameLower.includes(k));
    const isMatchFemale = FEMALE_KEYWORDS.some(k => nameLower.includes(k));

    // 1. 性別硬核權重：切換到男聲時，男聲 +1000 分，女聲 -1000 分；切換到女聲時相反
    if (preferredGender === "male") {
      if (isMatchMale) score += 1000;
      if (isMatchFemale) score -= 1000;
    } else {
      if (isMatchFemale) score += 1000;
      if (isMatchMale) score -= 1000;
    }

    // 2. 繁體中文（台灣）優先
    if (langLower === "zh-tw" || langLower === "cmn-hant-tw") {
      score += 200;
    } else if (nameLower.includes("taiwan") || langLower.includes("tw")) {
      score += 150;
    } else if (langLower === "zh-hk") {
      score += 20;
    } else if (langLower === "zh-cn") {
      score += 10;
    }

    // 3. 微軟自然神經網路語音加權 (Natural / Online / Neural)
    if (nameLower.includes("natural") || nameLower.includes("neural") || nameLower.includes("online")) {
      score += 300;
    }

    // 4. 具體品牌與角色語音加權
    if (preferredGender === "male") {
      if (nameLower.includes("yunjhe") || nameLower.includes("Yunzhe")) score += 400; // 微軟最優質台灣男聲
      if (nameLower.includes("eddy")) score += 350; // Apple 最佳台灣男童/男孩聲
      if (nameLower.includes("rocko") || nameLower.includes("reed")) score += 300;
      if (nameLower.includes("yunxi") || nameLower.includes("kangkang")) score += 250;
    } else {
      if (nameLower.includes("hsiaochen") || nameLower.includes("Xiaozhen")) score += 400; // 微軟最優質課本女聲
      if (nameLower.includes("hsiaohan") || nameLower.includes("Xiaohan")) score += 350;
      if (nameLower.includes("meijia") || nameLower.includes("Meijia")) score += 300; // Apple 最佳台灣女聲
    }

    // 5. 系統增強型語音 (Apple Enhanced / Premium)
    if (nameLower.includes("enhanced") || nameLower.includes("premium")) {
      score += 100;
    }

    if (score > highestScore) {
      highestScore = score;
      bestVoice = v;
    }
  }

  return bestVoice;
}

// 智慧聲學參數調校（確保男聲有朝氣男孩聲線，絕不與女聲混淆）
function getTtsAcousticConfig(preferredGender, selectedVoice) {
  const MALE_KEYWORDS = ["yunjhe", "yunxi", "yunyang", "kangkang", "zhiwei", "Yunzhe", "Yunxi", "Yun Yang", "Kangkang", "Zhiwei", "eddy", "reed", "rocko", "grandpa", "danny", "male", "man", "boy"];
  const voiceName = (selectedVoice && selectedVoice.name) ? selectedVoice.name.toLowerCase() : "";
  const isRealMale = MALE_KEYWORDS.some(k => voiceName.includes(k));

  if (preferredGender === "male") {
    if (isRealMale) {
      // 系統有原生男聲（如微軟雲哲、Apple Eddy、Rocko 等）
      return {
        rate: 0.98,
        pitch: 0.92, // 自然陽光男聲
        isMale: true
      };
    } else {
      // 系統無原生男聲時（如 Chrome 內建 Google 國語或美佳），採用聲學共振頻率降調（降低 24%）
      // 讓基礎女聲波形直接轉化為充滿朝氣的陽光男孩聲線！
      return {
        rate: 0.98,
        pitch: 0.76, // 強效降調：女聲瞬間轉換成活力男孩！
        isMale: true
      };
    }
  } else {
    // 溫柔親切的國語課本配音（女聲）
    const isNeural = voiceName.includes("natural") || voiceName.includes("neural") || voiceName.includes("online");
    return {
      rate: isNeural ? 0.94 : 0.92,
      pitch: 1.08, // 溫柔清亮的故事媽媽音調
      isMale: false
    };
  }
}

window.changeVoiceGender = function(gender) {
  localStorage.setItem("preferred_tts_gender", gender);
  if (indexSpeechMode) {
    window.stopIndexSpeech();
  }
  const sel1 = document.getElementById("indexVoiceGenderSelector");
  if (sel1) sel1.value = gender;
  const sel2 = document.getElementById("voiceGenderSelector");
  if (sel2) sel2.value = gender;
};

window.speakIndexQueue = function(text, mode) {
  window.stopIndexSpeech();
  if (!window.speechSynthesis) {
    alert("Your browser does not yet support the voice reading function. It is recommended to use Chrome or Edge browser.");
    return;
  }
  const sessionId = indexSpeechSessionId;

  let cleanText = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[『』「」"]/g, "")
    .replace(/——+/g, "，")
    .replace(/\.{3,}/g, "。")
    .replace(/…+/g, "。")
    .trim();

  if (!cleanText) return;

  const rawParts = cleanText.split(/([.!?。！？\n]+)/);
  const sentences = [];
  for (let i = 0; i < rawParts.length; i += 2) {
    const s = (rawParts[i] + (rawParts[i + 1] || "")).trim();
    if (s && s !== "。" && s !== "！" && s !== "？") sentences.push(s);
  }

  if (sentences.length === 0) return;

  indexSpeechMode = mode;
  updateIndexTtsButtons();

  // 優先挑選最逼真的台灣國語課本配音
  const preferredGender = localStorage.getItem("preferred_tts_gender") || "female";
  const twVoice = getBestTextbookVoice(preferredGender);
  const acoustic = getTtsAcousticConfig(preferredGender, twVoice);

  let currentIndex = 0;

  function speakNext() {
    if (sessionId !== indexSpeechSessionId || indexSpeechMode !== mode) return;
    if (currentIndex >= sentences.length) {
      indexSpeechMode = null;
      updateIndexTtsButtons();
      return;
    }

    const s = sentences[currentIndex];
    const utterance = new SpeechSynthesisUtterance(s);
    utterance.lang = "en-US";
    utterance.rate = acoustic.rate;
    utterance.pitch = acoustic.pitch;
    if (twVoice) utterance.voice = twVoice;

    window._indexActiveUtterances.push(utterance);

    utterance.onend = () => {
      if (sessionId !== indexSpeechSessionId) return;
      currentIndex++;
      // 自然換氣呼吸停頓 180 毫秒，模擬真人朗讀節奏
      activeIndexSpeechTimer = setTimeout(speakNext, 180);
    };

    utterance.onerror = () => {
      if (sessionId !== indexSpeechSessionId) return;
      currentIndex++;
      if (currentIndex < sentences.length) {
        activeIndexSpeechTimer = setTimeout(speakNext, 180);
      } else {
        indexSpeechMode = null;
        updateIndexTtsButtons();
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  activeIndexSpeechTimer = setTimeout(speakNext, 50);
};

window.toggleIndexStorySpeech = function() {
  if (indexSpeechMode === "story") {
    window.stopIndexSpeech();
  } else {
    const b = getActiveBriefing();
    if (!b) return;
    const story = b.story || { title: b.title, content: b.summary };
    const fullText = `${story.title}。${story.content}`;
    window.playIndexUniversalSpeech(fullText, "story");
  }
};

window.toggleIndexQuestionSpeech = function() {
  if (indexSpeechMode === "question") {
    window.stopIndexSpeech();
  } else {
    const b = getActiveBriefing();
    if (!b) return;
    const story = b.story || { question: "What would you do if you encountered this situation?" };
    window.playIndexUniversalSpeech(story.question, "question");
  }
};

function updateIndexTtsButtons() {
  const storyBtn = document.getElementById("indexStoryTtsBtn");
  const questionBtn = document.getElementById("indexQuestionTtsBtn");

  if (storyBtn) {
    if (indexSpeechMode === "story") {
      storyBtn.innerHTML = "⏹️ Stop reading story";
      storyBtn.style.background = "#fee2e2";
      storyBtn.style.color = "#991b1b";
    } else {
      storyBtn.innerHTML = "🔊 Read the Story";
      storyBtn.style.background = "#fef08a";
      storyBtn.style.color = "#854d0e";
    }
  }

  if (questionBtn) {
    if (indexSpeechMode === "question") {
      questionBtn.innerHTML = "⏹️ Stop reading the question aloud";
      questionBtn.style.background = "#fee2e2";
      questionBtn.style.color = "#991b1b";
    } else {
      questionBtn.innerHTML = "🔊 Read the Question";
      questionBtn.style.background = "#d1fae5";
      questionBtn.style.color = "#065f46";
    }
  }
}

// 頁面初始化
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("dateList")) {
    return; // classroom.html 或其他頁面僅引入資料，不執行首頁初始化
  }
  loadSavedData();
  activeBriefingId = getUpcomingBriefing(currentBriefings)?.id || activeBriefingId;
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get("id") || urlParams.get("date") || urlParams.get("lesson");
  if (targetId) {
    const found = currentBriefings.find(b => b.id === targetId || b.date === targetId || String(b.lessonNumber) === targetId);
    if (found) activeBriefingId = found.id;
  }
  setupFilters();
  renderSidebar();
  renderMainContent();
  renderIndexStudentStars();
  updateCourseProgressBar();
  renderDateDropdowns();
  const voiceSel = document.getElementById("indexVoiceGenderSelector");
  if (voiceSel) {
    voiceSel.value = localStorage.getItem("preferred_tts_gender") || "female";
  }
  // 啟動雲端即時同步
  syncIndexFetchCloudStars();
});

// The English edition uses English browser voices, never Mandarin recordings.
getBestTextbookVoice = preferredGender => window.SiteLanguage.englishVoice(preferredGender);
