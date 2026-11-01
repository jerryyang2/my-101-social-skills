(() => {
  'use strict';
  // Fictional neighbours; dialogue is separate from scored lesson content.
  const profiles = [
    {role:"Postal worker",name:"Letter",icon:'✉️',uniform:'post',intro:"Hello! I’m Letter, the postal worker. I’m taking letters to our island neighbours.",reply:"Hello! Thank you for delivering the letters.",answer:"Thanks for saying hello! I’ll make sure each letter reaches the right mailbox."},
    {role:"Gardener",name:"Sprout",icon:'🌱',uniform:'garden',intro:"Hello! I’m Sprout, the gardener. I look after the plants beside the paths.",reply:"Hello! The garden looks lovely.",answer:"Thank you! We can enjoy the plants as we walk along the paths."},
    {role:"Librarian",name:"Page",icon:'📚',uniform:'library',intro:"Hello! I’m Page, the librarian. Come and find a book you like.",reply:"Hello! I’d like to find a storybook.",answer:"Of course! Do you like animal stories or adventures?"},
    {role:"Baker",name:"Wheat",icon:'🥖',uniform:'baker',intro:"Hello! I’m Wheat, the baker. I’ve baked some lovely fresh bread today.",reply:"Hello! The bread smells wonderful.",answer:"Thank you! You can tell me what kind of bread you like best."},
    {role:"Nurse",name:"Care",icon:'🩹',uniform:'nurse',intro:"Hello! I’m Care, the nurse. If you feel unwell, you can tell me what’s bothering you.",reply:"Hello! Thank you for looking after everyone.",answer:"Thank you! Sharing how you feel helps other people understand what you need."},
    {role:"Firefighter",name:"Spark",icon:'🚒',uniform:'fire',intro:"Hello! I’m Spark, the firefighter. I’m checking my equipment before I set off.",reply:"Hello! Thank you for your hard work.",answer:"Thanks for your encouragement! My team and I will work together."},
    {role:"Bus driver",name:"Breeze",icon:'🚌',uniform:'driver',intro:"Hello! I’m Breeze, the bus driver. I’m ready to take everyone where they want to go.",reply:"Hello, driver! Thank you.",answer:"Hello! It’s lovely to see you. Have a pleasant journey today."},
    {role:"Cleaner",name:"Tidy",icon:'🧹',uniform:'cleaner',intro:"Hello! I’m Tidy, the cleaner. I’m tidying the paths we all share.",reply:"Hello! Thank you for keeping this place tidy.",answer:"Thank you! Taking rubbish to a bin is a great way to help."},
    {role:"Chef",name:"Pepper",icon:'🍲',uniform:'chef',intro:"Hello! I’m Pepper, the chef. I’m planning today’s lunch menu.",reply:"Hello! May I tell you about my favourite food?",answer:"Of course! You can also tell me about textures you don’t like. I’ll listen."},
    {role:"Repair worker",name:"Handy",icon:'🔧',uniform:'repair',intro:"Hello! I’m Handy, the repair worker. I’m checking the wooden bridges and chairs.",reply:"Hello! Thank you for fixing things.",answer:"Thank you! If you notice something broken, you can ask an adult to let me know."},
    {role:"Music teacher",name:"Melody",icon:'🎵',uniform:'music',intro:"Hello! I’m Melody, the music teacher. I’m getting ready to sing with everyone.",reply:"Hello, teacher! I’d like to listen.",answer:"Welcome! You can listen first or clap along with the beat."},
    {role:"Sports coach",name:"Bounce",icon:'⚽',uniform:'coach',intro:"Hello! I’m Bounce, the sports coach. I’m setting up a game where we take turns passing.",reply:"Hello! May I play too?",answer:"Yes! Let’s agree on the rules, then take turns playing together."},
    {role:"Shop assistant",name:"Berry",icon:'🛍️',uniform:'shop',intro:"Hello! I’m Berry, the shop assistant. Ask me if you need help finding something.",reply:"Hello! Where can I find some water, please?",answer:"Hello! The water is on the drinks shelf. Thanks for asking politely!"},
    {role:"Coastal ranger",name:"Ripple",icon:'🌊',uniform:'coast',intro:"Hello! I’m Ripple, the coastal ranger. I’m looking after our seaside environment.",reply:"Hello! The seaside looks beautiful today.",answer:"It does! Let’s enjoy it and look after our coast together."}
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
