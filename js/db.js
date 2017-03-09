var zones = {
  arcium: {
    name:"Arcium",
    hotspot:"200,200,240,240",
    min:15,
    max:50,
    cont:["gc"],
    quests:[
      {
        mob:"Joji",
        rare:true,
        spawn:"At undead horses near entrance.",
        quest:"Give 5 freshly killed salmon for spellbook"
      },
      {
        mob:"A shackled slave"
      },
      {
        mob:"Granrn"
      }
    ],
    amenities:["shops"],
    loot:[],
    warning:"Often raided!  Aggros in jungle!"
  },
  myra: {
    name:"Myrabolus",
    hotspot:"360,140,430,180",
    min:10,
    max:50,
    cont:["gc"],
    cnx:["darkfall"],
    amenities:["port","cargo","inn","bartender","bank","shops"],
    items:[]
  },
  charing: {
    name:"Charing",
    hotspot:"484,158,531,186",
    min:1,
    max:56,
    cont:["gc"],
    items:[],
    warning:"Aggro to all but elves and centaurs!"
  },
  ff: {
    name:"Forgotten Forest",
    hotspot:"465,187,522,218",
    min:30,
    max:50,
    cont:["gc"],
    items:[]
  },
  suntemple: {
    name:"Temple of the Sun",
    hotspot:"631,235,688,266",
    min:40,
    max:50,
    cont:["gc"],
    items:[]
  },
  darkfall: {
    name:"Darkfall",
    hotspot:"382,198,425,230",
    min:10,
    max:20,
    cont:["gc"],
    cnx:["myra"],
    items:[],
    warning:"Often raided!"
  },
  hauntedwoods: {
    name:"Haunted Woods",
    hotspot:"334,228,381,267",
    min:1,
    max:35,
    cont:["gc"],
    items:[]
  },
  blackthorne: {
    name:"Blackthorne Mountains",
    hotspot:"423,256,490,291",
    min:1,
    max:56,
    cont:["gc"],
    items:[],
    warning:"Thar be dragon!"
  },
  longhollow: {
    name:"Longhollow",
    hotspot:"537,286,601,313",
    min:1,
    max:15,
    cont:["gc"],
    items:[]
  },
  sunwell: {
    name:"Sunwell",
    hotspot:"689,365,749,402",
    min:1,
    max:56,
    cont:["gc"],
    items:[]
  },
  faerierealm: {
    name:"Faerie Realm",
    hotspot:"499,417,541,453",
    min:1,
    max:50,
    cont:["gc"],
    items:[]
  },
  highmoor: {
    name:"High Moor Forest",
    hotspot:"359,342,416,367",
    min:45,
    max:50,
    cont:["gc"],
    items:[]
  },
  neverwinter: {
    name:"Neverwinter Woods",
    hotspot:"337,387,404,418",
    min:1,
    max:56,
    cont:["gc"],
    items:[]
  },
  elementalgroves: {
    name:"Elemental Groves",
    hotspot:"404,442,459,473",
    min:20,
    max:30,
    cont:["gc"],
    items:[]
  },
  coastalhighway: {
    name:"Coastal Highway",
    hotspot:"216,442,266,481",
    min:1,
    max:30,
    cont:["gc"],
    items:[]
  },
  banditcanyons: {
    name:"Bandit Canyons",
    hotspot:"326,508,375,544",
    min:1,
    max:56,
    cont:["gc"],
    items:[]
  },
  towerofhighsorcery: {
    name:"Tower of High Sorcery",
    hotspot:"105,365,150,406",
    min:30,
    max:50,
    cont:["gc"],
    items:[]
  },
  fenaline: {
    name:"Fenaline Docks",
    hotspot:"84,408,135,435",
    min:1,
    max:56,
    cont:["gc"],
    amenities:["port","cargo","inn","bartender"],
    items:[]
  },
  totempass: {
    name:"Totem Pass",
    hotspot:"149,410,188,460",
    min:1,
    max:56,
    cont:["gc"],
    items:[]
  },
  neverwind: {
    name:"Neverwind Valley",
    hotspot:"297,350,332,413",
    min:25,
    max:50,
    cont:["gc"],
    items:[]
  },
  outcast: {
    name:"Outcast Tower",
    hotspot:"320,730,390,770",
    min:15,
    max:30,
    cont:["gc"],
    items:[]
  }
}
