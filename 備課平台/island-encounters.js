(() => {
  'use strict';
  // Fictional neighbours; dialogue is separate from scored lesson content.
  const profiles = [
    {role:'郵差',name:'阿信',icon:'✉️',uniform:'post',intro:'你好！我是郵差阿信，正要把信送給島上的居民。',reply:'你好，送信辛苦了！',answer:'謝謝你的招呼！我會把每封信送到正確的信箱。'},
    {role:'園丁',name:'小苗',icon:'🌱',uniform:'garden',intro:'你好！我是園丁小苗，正在照顧步道旁的花草。',reply:'你好，花園好漂亮！',answer:'謝謝！一起走在步道上，就能好好欣賞花草。'},
    {role:'圖書館員',name:'書書',icon:'📚',uniform:'library',intro:'你好！我是圖書館員書書，歡迎來找一本喜歡的書。',reply:'你好，我想找一本故事書。',answer:'好呀！你喜歡動物故事，還是冒險故事呢？'},
    {role:'烘焙師',name:'麥麥',icon:'🥖',uniform:'baker',intro:'你好！我是烘焙師麥麥，今天烤了香香的麵包。',reply:'你好，麵包聞起來好香！',answer:'謝謝！你也可以告訴我，你最喜歡哪一種麵包。'},
    {role:'護理師',name:'安心',icon:'🩹',uniform:'nurse',intro:'你好！我是護理師安心。不舒服時，可以告訴我哪裡不舒服。',reply:'你好，謝謝你照顧大家。',answer:'謝謝你！把自己的感覺說出來，能讓別人更了解你的需要。'},
    {role:'消防員',name:'亮亮',icon:'🚒',uniform:'fire',intro:'你好！我是消防員亮亮，出發前正在確認工作裝備。',reply:'你好，工作辛苦了！',answer:'謝謝你的鼓勵！我和夥伴會一起完成工作。'},
    {role:'公車司機',name:'順風',icon:'🚌',uniform:'driver',intro:'你好！我是公車司機順風，準備載大家去想去的地方。',reply:'司機你好，謝謝你！',answer:'你好！很高興見到你，祝你今天旅途愉快。'},
    {role:'清潔隊員',name:'小淨',icon:'🧹',uniform:'cleaner',intro:'你好！我是清潔隊員小淨，正在整理大家一起走的步道。',reply:'你好，謝謝你整理環境。',answer:'謝謝！把垃圾帶到垃圾桶，就是很棒的幫忙。'},
    {role:'廚師',name:'香香',icon:'🍲',uniform:'chef',intro:'你好！我是廚師香香，正在想今天的午餐菜單。',reply:'你好，我可以說喜歡的菜嗎？',answer:'當然可以！也可以告訴我不喜歡的口感，我會聽你說。'},
    {role:'修繕師',name:'巧手',icon:'🔧',uniform:'repair',intro:'你好！我是修繕師巧手，正在查看木橋和椅子。',reply:'你好，謝謝你修理東西。',answer:'謝謝！如果發現東西壞了，可以請大人幫忙告訴我。'},
    {role:'音樂老師',name:'和弦',icon:'🎵',uniform:'music',intro:'你好！我是音樂老師和弦，準備帶大家唱一首歌。',reply:'老師你好，我想聽聽看。',answer:'歡迎！你可以先聽，也可以跟著拍一拍節奏。'},
    {role:'運動教練',name:'活力',icon:'⚽',uniform:'coach',intro:'你好！我是運動教練活力，正在準備輪流傳球的活動。',reply:'你好，我可以一起玩嗎？',answer:'可以呀！我們先說好規則，再一起輪流玩。'},
    {role:'商店店員',name:'小果',icon:'🛍️',uniform:'shop',intro:'你好！我是店員小果，需要找東西時可以問我。',reply:'你好，請問水放在哪裡？',answer:'你好，水在飲品架上。謝謝你有禮貌地詢問！'},
    {role:'海岸巡守員',name:'浪花',icon:'🌊',uniform:'coast',intro:'你好！我是海岸巡守員浪花，正在看看海邊的環境。',reply:'你好，今天海邊好漂亮！',answer:'是呀！我們一起欣賞，也一起把海岸照顧好。'}
  ];
  function createGate() {
    const seen = new Map(); let nextTime = 1;
    return {
      pick(position, walkers, time) {
        if (time < nextTime) return -1;
        let nearest = -1, distance = 2.8;
        walkers.forEach((walker,index) => {
          const point = walker.person.position;
          if (time - (seen.get(index) ?? -Infinity) < 60 || Math.abs(point.y-position.y) > 1.2) return;
          const gap = Math.hypot(point.x-position.x,point.z-position.z);
          if (gap < distance) { distance=gap; nearest=index; }
        });
        if (nearest !== -1) { seen.set(nearest,time); nextTime=time+20; }
        return nearest;
      },
      remember(index,time) { seen.set(index,time); nextTime=time+20; }
    };
  }
  window.SocialIslandEncounters = {profiles, createGate};
})();
