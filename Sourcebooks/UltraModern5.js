var iFileName = "UltraModern5.js";
RequiredSheetVersion(13);

SourceList["UM5"] = {

	name : "UltraModern5",

	abbreviation : "UM5",

	date : "2016/08/04",

	group : "Dias Ex Machina",

	url : "https://www.drivethrurpg.com/en/product/190188/ultramodern5-5th-edition",
}

SourceList["UM5R"] = {

	name : "UltraModern5 - Redux",

	abbreviation : "UM5R",

	date : "2020/02/09",

	group : "Dias Ex Machina",

	url : "https://www.drivethrurpg.com/en/product/302992/ultramodern5-redux-5th-edition",
}

RaceList["konoe"] = {

	regExpSearch : /^(?=.*konoe).*$/i,

	name : "Konoe",

	source : ["UM5R", 20],

	plural : "Konoe",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : [1, "Konoe Telepathy"],

	vision : [["Darkvision", 60]],

	skillstxt : "Choose any one skill",

	age : " parents implant a parasite in an unwilling and/or unaware humanoid (likely a primate, most konoe cultures forbid infecting advanced creatures) and emerge fully matured three months later, having adopted the unique genetic traits of the host along with those of their parents (the now dominant features of all konoe). They can live up to 2,000 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 100 lbs.",

	improvements : "Konoe: +2 Wisdom, +1 Any;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Konoe (+2 Wisdom, +1 Any)\nBig Cap: I automatically know the location of all creatures not underground within 30 feet of me. Additionally, I possess six eyes and can see all around me (I do not see invisible or ethereal creatures).\nSustenance: If I remain upon natural soil (that is part of an ecosystem) for at least 2 hours a day, I'm considered to have absorbed all required nutrients for that day. I do not require food; I still need water. I'm also considered fully rested. I can get inebriated from any acidic liquid, including lemon juice and vinegar, the more acidic, the more potent.",
};

RaceList["khitin"] = {

	regExpSearch : /^(?=.*khitin).*$/i,

	name : "Khitin",

	source : ["UM5R", 20],

	plural : "Khitin",

	size : 3,

	speed : {

		walk : { spd : 40, enc : 30 },

		climb : { spd : 20, enc : 0 },
	},

	languageProfs : [2, "Khitin Tongue"],

	vision : [["Darkvision", 60]],

	age : " parents produce a fertilized egg nearly as impossible to crack as a khitin carapace, and they break from it as a softshell newborn. After feeding on the bulkheads of the surrounding vessels, they eventually shed several more times until reaching maturity, which only takes a week. They are required to shed at least twice more before being allowed to leave Sargasso. A khitin lives for at least 200 years.",

	height : " range from 6 to over 8 feet tall.",

	weight : " weigh around 175 lbs.",

	improvements : "Khitin: +2 Constitution, +2 Intelligence, +1 Any;",

	scores : [0, 0, 2, 2, 0, 0],

	trait : "Khitin (+2 Constitution, +2 Intelligence, +1 Any)\nSpider Climb: I can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. I never suffer disadvantage due to zero or microgravity.\nExoskeleton: I cannot wear traditional armor. I can either be a heavy khitin or a light khitin. A light khitin has an AC of 12 and can add its entire Dexterity modifier to AC, and a heavy khitin has an AC of 16 and cannot add its Dexterity modifier to AC.\nSustenance: Khitin are silicon-based and devour inorganic material to survive; this includes metal, plastic, and carbides, leading people to believe the khitin are in actuality sentient alien machines. Their acidic saliva is employed to dissolve and devour these compounds as quickly as a caterpillar eats a leaf.\nMolting: Upon reaching a level granting the \"Ability Score Improvement\" feature, I must undergo molting to gain that level's benefits, requiring me to spend an entire day (24 hours) prepping and another hour to emerge. After this, I lose my AC for another full day. When the process is finally concluded, my AC is restored and increases by 1. If I decide to gain a feat, I don't have to molt, but I also don't gain the AC improvement. If I select the feat but still molt, I gain the AC improvement but not the ability score improvement.",

	scoresMaximum : [0, 0, 0, 0, 0, 14],

	features : {

		"acid spit" : {
			name : "Acid Spit",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],
			recovery : "short rest",
			tooltip : "As an action, I can eject a corrosive acid from my mouth with a range of 10 feet. If I hit, the target suffers 1d4 + Dexterity/Strength modifier acid damage and half that amount at the beginning of my next turn.",
			action : ["action"],
		},
	}
};

RaceList["altered"] = {

	regExpSearch : /^(?=.*altered).*$/i,

	name : "Altered",

	source : ["UM5R", 21],

	plural : "Altered",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 }
	},

	languageProfs : ["Common"],

	age : " live the same lifespans as humans.",

	height : " range wildly in height.",

	weight : " range wildly in weight.",

	improvements : "Altered: +2 Any, +1 Any;",

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Altered (+2 Any, +1 Any)\nMutations: I select up to two mutations. I may also select a single drawback, which allows me to select a third mutation. I can accept a +1 level adjustment to select two additional mutations. There are two tiers of power; choosing the same one twice gains the second tier. Some are also listed with a third option, \"Feat\", indicating if I pick both tiers, I can select this third ability as a feat later. Altered mutations cannot be changed after character creation (at least not without a strong story justification).",

	toNotesPage : [{
		name : "Altered Mutations",
		source : ["UM5R", 21],
		popupName : "Altered Mutations",
		note : "\nAll Hands:\n   Tier 1: My feet are articulate. My speed is reduced by 5 feet. I'm omnidextrous and can hold weapons with any limb. I gain a climb speed equal to my normal speed.\n   Tier 2: I have advantage with all grapple checks, both attempting and escaping.\n   Feat: If I can make more than one melee attack with an action, I can make one additional melee attack with disadvantage as part of the same action.\nAquatic:\n   Tier 1: I have slightly scaly skin. I have gills and can breathe underwater. I gain a swim speed of 20 feet.\n   Tier 2: My swim speed increases to 40; I have webbed feet and hands. Good luck concealing that.\n   Feat: I have developed sonar. Underwater, I have advantage with all Perception checks, and I cannot be surprised. I gain blindsight 60 feet. I have advantage with Stealth checks while underwater.\nArms:\n   Tier 1: I gain two additional arms equal in Strength to my primary arms. I can wield two two-handed weapons, and one arm can operate as a brace for a heavy weapon.\nBig Nose:\n   Tier 1: I have advantage on Perception checks that rely on smell.\nCarapce:\n   Tier 1: I have a natural armor value of 12 + my Dexterity modifier.\n   Tier 2: I have a natural armor value of 17 but cannot wear heavy armor.\nChoppers:\n   Tier 1: My jaw is slightly elongated and my teeth... what big teeth I've got. My bite is a natural melee weapon. It inflicts 1d6 piercing damage.\n   Tier 2: The damage die increases to 1d8.\n   Feat: I can use my natural melee weapon to make a single attack as a bonus action.\nDigitigrade:\n   Tier 1: My legs are not shaped like a normal human. I walk entirely on my toes, with long ankles and short upper legs. This is very noticeable. advantage on Athletics checks when performing a jump. My speed increases by 5 feet.\n   Tier 2: My Strength is counted as +4 when calculating a jump. I can reduce a fall by 30 if I'm not incapacitated.\n   Feat: I have advantage on Stealth checks when attempting to move silently.\nEnhanced:\n   Tier 1: I gain a +2 bonus to one ability.\nFine Hairs:\n   Tier 1: I have advantage on Perception checks that rely on touch.\nIron Nails:\n   Tier 1: These don’t crack. They are also long and resemble silver. You can grab onto basically anything. You have a climb speed of 20. Your hands become natural melee weapons. They inflict 1d4 slashing or piercing damage. They have the finesse and light property.\n   Tier 2: Damage dice increases to 1d6, and I have advantage with grapple checks.\n   Feat: As an action, I can make two attacks using my iron nails, and my claws gain the AP property.\nKeen Eyes:\n   Tier 1: I have advantage on Perception checks that rely on sight.\n   Tier 2: I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light.\nKeen Hearing:\n   Tier 1: I have advantage on Perception checks that rely on hearing.\n   Tier 2: I have blindsight out to 20 ft.\nLarge:\n   Tier 1: I'm Large. My reach is still 5 feet.\nLegs:\n   Tier 1: I gain two additional legs with equal strength to my primary legs. My speed increases by 5, and I have advantage with all saving throws to prevent from being knocked prone.\nMetabolism:\n   Tier 1: I require twice as much food and water to survive as a normal person, but when I spend hit dice as part of a short rest, I roll each die twice and take the higher value.\nQuills:\n   Tier 1: My hair is actually composed of sharp quills. Any creature making a melee attack on me suffers 1 point of piercing damage.\n   Tier 2: I can toss a quill as a ranged attack. I target one creature within 30 feet as a bonus action. If I hit, I inflict 1d6 + my Dexterity modifier piercing damage.\nRhinohide:\n   Tier 1: My skin is of leather, and it’s nearly impossible to cut. I have resistance to slashing damage from non-magical weapons.\n   Tier 2: I have resistance to piercing damage from non-magical weapons.\n   Feat: When struck with a critical hit, I suffer only normal damage.\nSpeed:\n   Tier 1: I gain a +5 bonus to my movement speed.\nTail:\n   Tier 1: I gain a prehensile tail. It counts as a hand. It is not easy to conceal. I have advantage with Acrobatics checks.\n   Tier 2: My tail has a 10-foot reach.\n   I gain a +1 bonus to my AC and Dexterity saving throws saves while not wearing heavy armor.\nWicked Tongue:\n   Tier 1: I gain a prehensile tongue. It can't hold weapons, but it does count as a free hand for grab attempts and retrieving objects. It can reach up to 5 feet.\n   Tier 2: My prehensile tongue can reach up to 10 feet. I have advantage with grapple attempts.\n   Feat: My prehensile tongue can reach up to 30 feet and can wield light weapons (with disadvantage).\nWings:\n   Tier 1: I gain wings which cannot be concealed easily. I gain a fly speed of 30 feet. I have disadvantage to any checks to hide my wings. I operate as any normal creature with flight, I must rest 1 hour for every 3 hours I fly, and I can't fly for more than 9 hours per day.\n   Tier 2: My fly speed increases to 40 feet.\n   Feat: My fly speed increases to 60 feet.",
	}, {
		name : "Altered Drawbacks",
		source : ["UM5R", 22],
		popupName : "Altered Drawbacks",
		note : "\n   Deformity: I possess a visible deformity that makes hiding from authorities and bigots difficult. I have disadvantage with all checks involving Charisma.\n   Fragile: The amount of hit points I recover from spending hit dice is reduced by 1 per die (minimum 1).\n   Metabolic Disease: I suffer from one of many non-communicable physical diseases, such as diabetes or hemochromatosis. I may act normal, but I better not get sneezed on. I have disadvantage on ability checks with Strength, Dexterity, or Constitution (pick two).\n   Mute: I barely speak... to the satisfaction of all other characters. I cannot say more than 30 words per day.\n   Simple Deficiency: My maximum in either Strength, Dexterity, Constitution, or Wisdom (choose one) is 12 instead of 20, and that score can be no higher than 8 at character creation.\n   Slow: My walking speed decreases by 5 ft.",
	}]
};

RaceList["animyst, ape"] = {

	regExpSearch : /^(?=.*animyst)(?=.*ape).*$/i,

	name : "Animyst, Ape",

	source : ["UM5R", 24],

	plural : "Animyst, Ape",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		climb : { spd : 20, enc : 0 },
	},

	languageProfs : 1,

	weaponsAdd : ["Slam"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /slam/i,
		name : "Slam",
		source : ["UM5R", 24],
		damage : [2, 6, "bludgeoning"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Ape: +2 Strength, +1 Dexterity or Constitution;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Ape (+2 Strength, +1 Dexterity or Constitution)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nThick: My HP maximum increases by 1, and it increases by 1 every time I gain a level.",
};

RaceList["animyst, badger"] = {

	regExpSearch : /^(?=.*animyst)(?=.*badger).*$/i,

	name : "Animyst, Badger",

	source : ["UM5R", 24],

	plural : "Animyst, Badger",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	vision : [["Darkvision", 60]],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Badger: +2 Dexterity, +1 Intelligence or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Badger (+2 Dexterity, +1 Intelligence or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nKeen Smell: I have advantage on Perception checks that rely on smell.",

	abilitySave : 5,

	features : {

		"stinker" : {
			name : "Stinker",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "As a minor action, I can produce an unpleasant smell through anal glands. All creatures able to smell me in a 10-foot radius centered on me suffer disadvantage to all attack rolls, ability checks, and saving throws until the end of my next turn. Once I use this ability, I cannot use it again until you finish a long rest.",
			action : ["action", " (Minor action)"],
		},
	}
};

RaceList["animyst, bat"] = {

	regExpSearch : /^(?=.*animyst)(?=.*bat).*$/i,

	name : "Animyst, Bat",

	source : ["UM5R", 25],

	plural : "Animyst, Bat",

	size : 3,

	speed : {

		walk : { spd : 20, enc : 10 },

		fly : { spd : 30, enc : 0 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	vision : [["Blindsight", 30]],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Bat: +2 Dexterity, +1 Intelligence or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Bat (+2 Dexterity, +1 Intelligence or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 25. When moving in this fashion, I ignore movement penalties from difficult terrain.\nKeen Hearing: I have advantage on Perception checks that rely on hearing.\nEcholocation: I have blindsight out to a range of 30 feet; I cannot use echolocation while deafened.",
};

RaceList["animyst, bear"] = {

	regExpSearch : /^(?=.*animyst)(?=.*bear).*$/i,

	name : "Animyst, Bear",

	source : ["UM5R", 25],

	plural : "Animyst, Bear",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	vision : [["Darkvision", 60]],

	advantages : [
		["Animal Handling", true],
		["Survival", true]
	],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Bear: +2 Strength, +1 Constitution or Wisdom;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Bear (+2 Strength, +1 Constitution or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nImposing But Clumsy: I can wield two-handed weapons in one hand, but I'm too large and clumsy to ride a mount.",
};

RaceList["animyst, boar"] = {

	regExpSearch : /^(?=.*animyst)(?=.*boar).*$/i,

	name : "Animyst, Boar",

	source : ["UM5R", 25],

	plural : "Animyst, Boar",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"],
		modifiers : ["", 1],
		tooltip : "Can also deal bludgeoning damage instead of slashing damage.",
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Boar: +2 Strength, +1 Dexterity or Constitution;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Boar (+2 Strength, +1 Dexterity or Constitution)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nCharge: If I move at least 20 feet straight toward a target and then hit with my natural melee attack on the same turn, the target takes an extra 1d6 slashing damage. If a creature, the target must succeed on a Strength saving throw or be knocked prone.",

	abilitySave : 1,

	features : {

		"relentless" : {
			name : "Relentless",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "If I'm reduced to 0 HP, I'm reduced to 1 HP instead. Once I use this ability, I cannot use it again until I finish a long rest.",
		},
	}
};

RaceList["animyst, crocodile"] = {

	regExpSearch : /^(?=.*animyst)(?=.*crocodile).*$/i,

	name : "Animyst, Crocodile",

	source : ["UM5R", 25],

	plural : "Animyst, Crocodile",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		swim : { spd : 30, enc : 0 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Crocodile: +2 Strength, +1 Constitution or Wisdom;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Crocodile (+2 Strength, +1 Constitution or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nHold Breath: I can hold my breath for a number of minutes equal to my Constitution score.\nGrapple Bite: If I hit with my bite attack, the target is grappled. Until this grapple ends, the target is restrained, and I cannot bite another target.",

	abilitySave : 1,
};

RaceList["animyst, elephant"] = {

	regExpSearch : /^(?=.*animyst)(?=.*elephant).*$/i,

	name : "Animyst, Elephant",

	source : ["UM5R", 25],

	plural : "Animyst, Elephant",

	size : 2,

	speed : {

		walk : { spd : 20, enc : 10 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 8, "slashing"],
		modifiers : ["", 2],
		tooltip : "Can also deal bludgeoning damage instead of slashing damage.",
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Elephant: +2 Strength, +1 Constitution or Wisdom;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Elephant (+2 Strength, +1 Constitution or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 25. When moving in this fashion, I ignore movement penalties from difficult terrain.\nHeavy: My maximum increases by 1, and it increases by 1 every time I gain a level.\nCharge: If I move at least 20 feet straight toward a target and then hit with my natural melee attack on the same turn, the target takes an extra 1d6 slashing damage. If a creature, the target must succeed on a Strength saving throw or be knocked prone.",

	abilitySave : 1,
};

RaceList["animyst, frog"] = {

	regExpSearch : /^(?=.*animyst)(?=.*frog).*$/i,

	name : "Animyst, Frog",

	source : ["UM5R", 25],

	plural : "Animyst, Frog",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	vision : [["Darkvision", 60]],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Frog: +2 Dexterity, +1 Strength or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Frog (+2 Dexterity, +1 Strength or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nAmphibious: I can breathe air and water.\nStanding Leap: I can use Athletics instead of Athletics when jumping. I'm considered having moved 10 feet before performing any jump. I also have advantage with Athletics and Acrobatics checks when jumping.",
};

RaceList["animyst, goat"] = {

	regExpSearch : /^(?=.*animyst)(?=.*goat).*$/i,

	name : "Animyst, Goat",

	source : ["UM5R", 25],

	plural : "Animyst, Goat",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Horns"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /horns/i,
		name : "Horns",
		source : ["UM5R", 24],
		damage : [1, 6, "bludgeoning"]
	},

	savetxt : {

		adv_vs : ["prone"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Goat: +2 Dexterity, +1 Strength or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Goat (+2 Dexterity, +1 Strength or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nBalance: I never suffer disadvantage due to microgravity or poor climbing conditions when moving.\nCharge: If I move at least 20 feet straight toward a target and then hit with my natural melee attack on the same turn, the target takes an extra 1d6 bludgeoning damage. If a creature, the target must succeed on a Strength saving throw or be knocked prone.\nInertia: I increase my speed by 5 feet when performing a Dash action.",

	abilitySave : 1,
};

RaceList["animyst, hawk"] = {

	regExpSearch : /^(?=.*animyst)(?=.*hawk).*$/i,

	name : "Animyst, Hawk",

	source : ["UM5R", 26],

	plural : "Animyst, Hawk",

	size : 3,

	speed : {

		walk : { spd : 20, enc : 10 },

		fly : { spd : 50, enc : 0 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Hawk: +2 Wisdom, +1 Dexterity or Intelligence;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Animyst, Hawk (+2 Wisdom, +1 Dexterity or Intelligence)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 25. When moving in this fashion, I ignore movement penalties from difficult terrain.\nKeen Sight: I have advantage on Perception checks that rely on sight.\nQuiet: I have advantage with Stealth checks when flying.",
};

RaceList["animyst, horse"] = {

	regExpSearch : /^(?=.*animyst)(?=.*horse).*$/i,

	name : "Animyst, Horse",

	source : ["UM5R", 26],

	plural : "Animyst, Horse",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Hooves"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /hooves/i,
		name : "Hooves",
		source : ["UM5R", 24],
		damage : [1, 6, "bludgeoning"]
	},

	savetxt : {

		adv_vs : ["prone"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Horse: +2 Strength, +1 Dexterity or Constitution;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Animyst, Horse (+2 Strength, +1 Dexterity or Constitution)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 40. When moving in this fashion, I ignore movement penalties from difficult terrain.\nHooves: I have advantage when trying to maintain a grip on something with my hands, but disadvantage on actions that require fine manual dexterity.\nMount: I can also act as a mount for any creature up to my size. If I'm Large and my rider is also Large, my speed is reduced to 30 ft.",
};

RaceList["animyst, opossum"] = {

	regExpSearch : /^(?=.*animyst)(?=.*opossum).*$/i,

	name : "Animyst, Opossum",

	source : ["UM5R", 26],

	plural : "Animyst, Opossum",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	vision : [["Darkvision", 60]],

	dmgres : ["Poison"],

	savetxt : {

		adv_vs : ["poison"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Opossum: +2 Dexterity, +1 Wisdom or Charisma;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Opossum (+2 Dexterity, +1 Wisdom or Charisma)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.",

	features : {

		"play dead" : {
			name : "Play Dead",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "As a reaction to suffering damage but not being reduced to zero HP, I can fall prone and imitate death. Any creature examining me must succeed at DC 20 Perception check to discover my bluff. I can only remain in this state for 1 minute per character level. After I recover from this ability, I cannot use it again until I finish a long rest.",
			action : ["reaction"],
		},
	}
};

RaceList["animyst, rabbit"] = {

	regExpSearch : /^(?=.*animyst)(?=.*rabbit).*$/i,

	name : "Animyst, Rabbit",

	source : ["UM5R", 26],

	plural : "Animyst, Rabbit",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		burrow : { spd : 30, enc : 0 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Rabbit: +2 Dexterity, +1 Wisdom or Charisma;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Rabbit (+2 Dexterity, +1 Wisdom or Charisma)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nAcceleration: My speed when performing the Dash action is 40 ft.\nStanding Leap: I can use Athletics instead of Athletics when jumping. I'm considered having moved 10 feet before performing any jump. I also have advantage with Athletics and Acrobatics checks when jumping.",
};

RaceList["animyst, rat"] = {

	regExpSearch : /^(?=.*animyst)(?=.*rat).*$/i,

	name : "Animyst, Rat",

	source : ["UM5R", 26],

	plural : "Animyst, Rat",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	vision : [["Darkvision", 60]],

	savetxt : {

		immune : ["disease"],
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Rat: +2 Dexterity, +1 Wisdom or Charisma;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Rat (+2 Dexterity, +1 Wisdom or Charisma)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nKeen Smell: I have advantage on Perception checks that rely on smell.",
};

RaceList["animyst, shark"] = {

	regExpSearch : /^(?=.*animyst)(?=.*shark).*$/i,

	name : "Animyst, Shark",

	source : ["UM5R", 26],

	plural : "Animyst, Shark",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	vision : [["Blindsight (while underwater)", 60]],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Shark: +2 Dexterity, +1 Constitution or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Shark (+2 Dexterity, +1 Constitution or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nFrenzy: I gain a +1 bonus to attack rolls against any creature that isn't at their maximum HP.\nWater Breathing: I can breathe underwater.",
};

RaceList["animyst, tiger"] = {

	regExpSearch : /^(?=.*animyst)(?=.*tiger).*$/i,

	name : "Animyst, Tiger",

	source : ["UM5R", 26],

	plural : "Animyst, Tiger",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	vision : [["Darkvision", 60]],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Tiger: +2 Dexterity, +1 Wisdom or Charisma;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Tiger (+2 Dexterity, +1 Wisdom or Charisma)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nKeen Smell: I have advantage Perception checks that rely on smell.\nOn Your Feet: I subtract 20 feet from any fall. I also have advantage on Athletics checks when jumping.",
};

RaceList["animyst, turtle"] = {

	regExpSearch : /^(?=.*animyst)(?=.*turtle).*$/i,

	name : "Animyst, Turtle",

	source : ["UM5R", 26],

	plural : "Animyst, Turtle",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /bite/i,
		name : "Bite",
		source : ["UM5R", 24],
		damage : [1, 6, "piercing"]
	},

	vision : [["Darkvision", 60]],

	extraAC : [{
		mod : 2,
		magic : false,
		text : "I add 2 to my AC, but I cannot wear heavy armor.",
	}],

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Turtle: +2 Constitution, +1 Intelligence or Wisdom;",

	scores : [0, 0, 2, 0, 0, 0],

	trait : "Animyst, Turtle (+2 Constitution, +1 Intelligence or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nWater Breathing: I can breathe underwater.",
};

RaceList["animyst, wolf"] = {

	regExpSearch : /^(?=.*animyst)(?=.*wolf).*$/i,

	name : "Animyst, Wolf",

	source : ["UM5R", 26],

	plural : "Animyst, Wolf",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : 1,

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 24],
		damage : [1, 6, "slashing"]
	},

	age : " live twice as long as the animals they derive from.",

	height : " range wildly in height depending on the subrace.",

	weight : " range wildly in weight depending on the subrace.",

	improvements : "Animyst, Wolf: +2 Dexterity, +1 Intelligence or Wisdom;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Animyst, Wolf (+2 Dexterity, +1 Intelligence or Wisdom)\nAnimalistic Speed: If both of my hands are free, I can run on all four limbs. If I do, my speed increases to 35. When moving in this fashion, I ignore movement penalties from difficult terrain.\nInertia: I increase my speed by 5 feet when performing a Dash action.\nKeen Senses: I have advantage with Perception checks that rely on hearing or smell.\nPounce: If I move at least 20 feet straight toward a target and then hit with my natural melee attack on the same turn, the target must succeed on a Strength saving throw or be knocked prone. I have advantage on melee attack rolls against prone targets.",

	abilitySave : 1,
};

RaceList["automaton, android"] = {

	regExpSearch : /^(?=.*automaton)(?=.*android).*$/i,

	name : "Automation, Android",

	source : ["UM5R", 28],

	plural : "Automatons, Androids",

	size : 3,

	speed : {

		walk : { spd : 35, enc : 25 },
	},

	languageProfs : ["Common", 4],

	savetxt : {

		text : ["Immune to poison damage"],

		immune : ["poison", "exhaustion"],
	},

	skillstxt : "Choose any two skills and two tools",

	saves : ["Wis"],

	age : " neither reach maturity or age.",

	height : " range wildly in height.",

	weight : " range wildly in weight.",

	improvements : "Automaton, Android: +2 Any two scores;",

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Automaton, Android (+2 Any two scores)\nEncyclopedic Recall: I have proficiency in all Intelligence checks when recalling lore of any kind.\nFixed Origin: I cannot select a background.",

	features : {

		"durable" : {
			name : "Durable",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "If I suffer damage, as a reaction, I can reduce my Charisma ability score by an amount up to the damage indicated instead of from my HP. However, this damage does not regenerate and must be repaired.",
			action : ["reaction"],
		},
	},

	toNotesPage : [{
		name : "Low Power",
		source : ["UM5R", 27],
		popupName : "Low Power",
		note : "\nEntering low-power is similar to sleep, except nearly all outside inputs are severed. I'm in a deep sleep, functioning with very little energy, allowing myself to not die when starved. If I'm prevented from entering low power when required, I can operate for one round per character level before dying. While in low power, I have no awareness of the outside world and fail all Perception checks. Entering low power may be only optional, based on my selected power source. I can be jostled out of low power if I suffer damage or if an ally physically disturbs me."
	}, {
		name : "Power Sources",
		source : ["UM5R", 27],
		popupName : "Power Sources",
		note : [
			"My power source depends on the tech level of the setting and the specifics of the GM's game world.",
			"Archaic (TL1): I run off what? Steam? Diesel? I can function for 6 hours and then must take 10 minutes at a fuel source or enter low power.",
			"Bioenergy (TL2): I actually ingest food (often specialized). I do not require being powered down. I function basically the same as a human.",
			"Energy Cell (TL3): I function via an extremely powerful battery that cannot be recharged. Each cell lasts one week, and then you require ten minutes to replace it. This assumes a night routine involving six hours in \"Low Power\" mode, otherwise, this time is considerably reduced.",
			"Rechargable Battery (TL3): Similar to an energy cell, this one functions for 20 hours before requiring 4 hours of recharging via an external supply (I'm in low power for that time). The interface may require a cable or wireless induction. I may force a quick charge through violent means (touching live power cables). I'll recharge fully in one minute but will be reduced to half my current HP.",
			"Solar (TL4): I operate via a rechargeable battery pack. Deploying a photovoltaic cell need not be required—I may just gain power by walking in the sun. If requiring a cell deployment, I need six hours of daylight to recharge every 24 hours. If not, I can function indefinitely as long as there is a sun; when in darkness, I will enter \"Low Power\" within 4 hours unless I can find a power source.",
			"Fusion (TL5): I possess a miniature nuclear power pack that allows me to operate without interruption for at least 125 years. If I'm killed, or if I overload my reactor as a free action or a reaction to being reduced to 0 HP, I detonate. Each creature in a 20-foot/ character level radius sphere centered on me must make a Dexterity saving throw (DC = 8 + my Constitution modifier + my proficiency bonus). A target takes 3d6 + 1d6/character level  nuclear damage on a failed save or half as much on a successful one. Just to be clear, I'm also very much dead."
		],
	}],
};

RaceList["automaton, robot"] = {

	regExpSearch : /^(?=.*automaton)(?=.*robot).*$/i,

	name : "Automation, Robot",

	source : ["UM5R", 28],

	plural : "Automatons, Robots",

	size : 3,

	speed : {

		walk : { spd : 35, enc : 25 },
	},

	languageProfs : ["Common", 4],

	savetxt : {

		text : ["Immune to poison damage"],

		immune : ["poison", "exhaustion"],
	},

	skillstxt : "Choose any two skills and two tools",

	saves : ["Wis"],

	age : " neither reach maturity or age.",

	height : " range wildly in height.",

	weight : " range wildly in weight.",

	improvements : "Automaton, Robot: +2 Any, +1 Any; Charisma cannot be higher than 14 at 1st level;",

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Automaton, Robot (+2 Any, +1 Any)\nEncyclopedic Recall: I have proficiency in all Intelligence checks when recalling lore of any kind.\nFixed Origin: I cannot select a background.",

	toNotesPage : [{
		name : "Low Power",
		source : ["UM5R", 27],
		popupName : "Low Power",
		note : "\nEntering low-power is similar to sleep, except nearly all outside inputs are severed. I'm in a deep sleep, functioning with very little energy, allowing myself to not die when starved. If I'm prevented from entering low power when required, I can operate for one round per character level before dying. While in low power, I have no awareness of the outside world and fail all Perception checks. Entering low power may be only optional, based on my selected power source. I can be jostled out of low power if I suffer damage or if an ally physically disturbs me."
	}, {
		name : "Power Sources",
		source : ["UM5R", 27],
		popupName : "Power Sources",
		note : [
			"My power source depends on the tech level of the setting and the specifics of the GM's game world.",
			"Archaic (TL1): I run off what? Steam? Diesel? I can function for 6 hours and then must take 10 minutes at a fuel source or enter low power.",
			"Bioenergy (TL2): I actually ingest food (often specialized). I do not require being powered down. I function basically the same as a human.",
			"Energy Cell (TL3): I function via an extremely powerful battery that cannot be recharged. Each cell lasts one week, and then you require ten minutes to replace it. This assumes a night routine involving six hours in \"Low Power\" mode, otherwise, this time is considerably reduced.",
			"Rechargable Battery (TL3): Similar to an energy cell, this one functions for 20 hours before requiring 4 hours of recharging via an external supply (I'm in low power for that time). The interface may require a cable or wireless induction. I may force a quick charge through violent means (touching live power cables). I'll recharge fully in one minute but will be reduced to half my current HP.",
			"Solar (TL4): I operate via a rechargeable battery pack. Deploying a photovoltaic cell need not be required—I may just gain power by walking in the sun. If requiring a cell deployment, I need six hours of daylight to recharge every 24 hours. If not, I can function indefinitely as long as there is a sun; when in darkness, I will enter \"Low Power\" within 4 hours unless I can find a power source.",
			"Fusion (TL5): I possess a miniature nuclear power pack that allows me to operate without interruption for at least 125 years. If I'm killed, or if I overload my reactor as a free action or a reaction to being reduced to 0 HP, I detonate. Each creature in a 20-foot/ character level radius sphere centered on me must make a Dexterity saving throw (DC = 8 + my Constitution modifier + my proficiency bonus). A target takes 3d6 + 1d6/character level  nuclear damage on a failed save or half as much on a successful one. Just to be clear, I'm also very much dead."
		],
	}, {
		name : "Movement Modes",
		source : ["UM5R", 28],
		popupName : "Movement Modes",
		note : [
			"My movement speeds are determined by how I was made, allowing me to select one of the following to be my movement speed:",
			"   Walking speed of 35 feet.",
			"   Walking speed of 30 and a climb speed of 10.",
			"   Walking speed of 30 and advantage with Dexterity checks when jumping.",
			"   Walking speed of 25 feet, ignoring penalties for difficult terrain.",
			"   Wheels or multi-ped chassis with a drive speed of 40, but I have disadvantage on all movement-related checks in difficult terrain (such as Dexterity saving throws)."
		],
	}],
};

RaceList["human, um5r"] = {

	regExpSearch : /^(?=.*human)(?=.*um5r).*$/i,

	name : "Human, UM5R",

	source : ["UM5R", 28],

	plural : "Humans, UM5R",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common", 1],

	age : " reach adulthood in their late teens and live between 80 and 110 years, depending on the level of technology in the setting.",

	height : " range from 5 to over 6 feet tall.",

	weight : " range around 150 lbs.",

	improvements : "Human, UM5R: +1 All;",

	scores : [1, 1, 1, 1, 1, 1],

	trait : "Human, UM5R (+1 All)\nGenetic Benefit: I select or roll for one genetic benefit (see notes). I can gain additional benefits by either forgoing one of my +1 ability score increases (but only one) or by incurring a penalty by selecting a shortcoming (also see notes).",

	toNotesPage : [{
		name : "Shortcomings Table",
		source : ["UM5R", 29],
		popupName : "Shortcomings Table",
		note : [
			"Roll or Choose   Shortcoming",
			"1-2              Bad Eyes: It happens to everyone. I need glasses. Without them, I have disadvantage with Perception checks when using sight.",
			"3-4              Long Sleeper: I get headaches. I need to have at least 8 hours of sleep a night to qualify for having a long rest.",
			"5-6              Bad Hearing: I need hearing aids. Without them, I have disadvantage with Perception checks dealing with hearing.",
			"7-8              Hairless: I have no hair. Anywhere. I have disadvantage with Persuasion checks.",
			"9-10             Dwarfism: The accepted term is \"little person.\" I choose whether I'm size Medium or Small, but my speed is reduced by 5 ft. either way.",
			"11-12            Fat: It's not big-boned, I've accepted that. I'm not slightly overweight. My speed is reduced by 5 ft.",
			"13-14            Frail Frame: I do not handle pain very well. Each time I suffer damage, I lose 1 additional HP.",
			"15-16            Albino: I suffer from a condition resulting in a complete lack of melanin. When in direct sunlight, I have disadvantage with Perception checks when using sight.",
			"17-18            Dyslexia: I have disadvantage on checks that involve reading or research unless I take double the usual time to perform them.",
			"19-20            Shyness: I don't like being in public spaces. I have disadvantage with all Charisma ability checks."
		],
	}, {
		name : "Genetic Benefits Table",
		source : ["UM5R", 30],
		popupName : "Genetic Benefits Table",
		note : [
			"Roll or Choice   Genetic Benefit",
			"1                Skill/Tool Proficiency: I'm adept at one thing since birth, a calling. I gain proficiency in one skill or tool of my choice.",
			"2                Enhanced Secondary Senses: A connoisseur, I have advantage with any Perception checks regarding taste or smell.",
			"3                Night Eyes: I gain Darkvision out to a range of 60 feet.",
			"4                Disciplined Lungs: I always could hold my breath longer than others. I can go without oxygen for as many minutes as twice my Constitution modifier.",
			"5                Extreme Fortitude: I gain 2 additional HP at 1st level, plus 1 additional HP every additional level.",
			"6                Light Sleeper: It's been a positive and a negative, but I cannot be surprised by sleeping. Alas, it can also be challenging to get a decent night's sleep.",
			"7                Short Sleeper: I don't need much. I only require 3 hours of sleep per night to function, and a good night's sleep is only 4 hours.",
			"8                Eidetic Memory: I remember nearly everything. I automatically pass any Intelligence checks to recall any information I have been exposed to.",
			"9                Empathy: I've always been able to understand someone's emotional state, allowing for sympathy or manipulation. I gain a +2 bonus to Insight checks.",
			"10               Extra Fatigue: I've always been running. I can ignore the effects of the first and second levels of exhaustion.",
			"11               Fashion Sense: I look good in anything, from haute couture to dollar store rejects. I have a +1 bonus to all Charisma ability checks.",
			"12               Quick Healer: Very useful when I was a child—I regain 1 additional spent Hit Die when I take a long rest.",
			"13               High Pain Threshold: I can take a punch. When reduced to 0 HP, I do not fall unconscious until I fail my first death save.",
			"14               Disease Protection: I rarely get sick. I have advantage on saving throws against disease.",
			"15               Poison Protection: Tastes minty. I have advantage on saving throws against poison.",
			"16               Limber: I gain a 5 ft. bonus to speed.",
			"17               Strong Will: Not easy to stare down. I have advantage with Wisdom saving throws.",
			"18               Toughness: Each time I suffer damage from a piercing or slashing weapon, I suffer 2 fewer points of damage.",
			"19               Nimbleness: I can move through the space of any creature that is of a size larger than mine.",
			"20               Ornery: When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
		],
	}],
};

RaceList["morpher"] = {

	regExpSearch : /^(?=.*morpher).*$/i,

	name : "Morpher",

	source : ["UM5R", 30],

	plural : "Morphers",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " do not have a consistent height.",

	weight : " do not have a consistent weight.",

	improvements : "Morpher: +2 Constitution, +1 Strength or Dexterity;",

	scores : [0, 0, 2, 0, 0, 0],

	trait : "Morpher (+2 Constitution, +1 Strength or Dexterity)\nConstruction: I decide how I'm composed. Are the cells as mentioned above synthetic or organic? Is my default form human or a mound of flesh? Is my imitation ability at the cellular level or part of elaborate nanotechnology. If biological, I must ingest food like any other creature. If synthetic, I pick a power source from the automaton list.",

	toNotesPage : [{
		name : "Transformations",
		source : ["UM5R", 30],
		popupName : "Transformations",
		note : [
			"I select two of my transformation abilities below. As I progress in character levels, I can select one transformation ability in place of an ability score improvement or feat. I can also accept a +1 level adjustment to choose two additional transformations. The requirement of any transformation's tier is all previous transformations of the same type.",
			"   Clay",
			"     Tier 1: I spend 30 feet of movement to add 5 feet to my reach until the start of my next turn.",
			"     Tier 2: 5 feet of reach only costs 15 feet of movement to use. This can compound.",
			"     Tier 3: I can grab or manipulate an object or willing person up to 40 feet away (this is not the same as combat reach).",
			"     Tier 4: 5 feet of reach only costs 10 feet of movement to use. This can compound.",
			"     Tier 5: I can grab or manipulate an object or willing person up to 80 feet away (this is not the same as combat reach).",
			"   Form Shield",
			"     Tier 1: As an action, I reshape a portion of one of my arms into a shield. I lose functionality of that hand. This shield grants a +1 shield bonus to AC. Extruding the shield damages clothing or armor over the extrusion site unless the article is specially designed to accommodate it. The shield disintegrates if I'm reduced to 0 HP, when I finish a long rest, or when I dismiss it as a bonus action. After I use this feature, I cannot use it again until I finish a long rest.",
			"     Tier 2: I can use this talent twice before being required to finish a long rest, and the AC increases to a +2 bonus to AC.",
			"     Tier 3: While my shield is in effect, any critical hit against me becomes a normal hit.",
			"     Tier 4: My shield's bonus to AC increases to +3.",
			"   Form Weapon",
			"     Tier 1: As an action, I shape my arm into any simple melee weapon that lacks moving parts of my choice. The weapon can remain attached or be broken off and thrown. If removed from my body, the weapon disintegrates after one minute. After I use this talent twice, you cannot use it again until I finish a short or long rest.",
			"     Tier 2: Deploying my weapon is reduced to a bonus action, and I can form any martial melee weapon that lacks moving parts of my choice.",
			"     Tier 3: I can extend my weapon three times before being required to finish a short or long rest. Extruding a weapon takes no action.",
			"     Tier 4: I can form a weapon as many times as I wish.",
			"   Shaper",
			"     Tier 1: As an action, I make myself—though not my clothing, armor, weapons, or other belongings on my person—look different until one minute passes or until I stop concentration. I can seem 1 foot shorter or taller and can appear thin, fat, or in between. I can't change my body type, so I must adopt a form that has the same necessary arrangement of limbs. To discern that I'm disguised, a creature can use its action to inspect my appearance and succeed on an Investigation check against my Deception check. After I use this feature, I cannot use it again until I finish a long rest.",
			"     Tier 2: My ability to disguise myself improves. It now lasts up to ten minutes. After I use this feature, I cannot use it again until I finish a short or a long rest.",
			"     Tier 3: I can now transform into a beast whose challenge rating is equal to or less than my level. My physical statistics are replaced by the statistics of the chosen animal, while my mental statistics are unchanged. My HP is also unchanged. I can still speak as usual but my capacity to hold onto objects is dependent on the creature being turned into."
		],
	}],
};

RaceList["splice, bat"] = {

	regExpSearch : /^(?=.*splice)(?=.*bat).*$/i,

	name : "Splice, Bat",

	source : ["UM5R", 32],

	plural : "Splice, Bat",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	vision : [["Blindsight (Echolocation)", 30]],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Bat: +2 Wisdom, +1 Any;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Splice, Bat (+2 Wisdom, +1 Any)\nKeen Hearing: I have advantage on Perception checks that rely on hearing.",
};

RaceList["splice, bear"] = {

	regExpSearch : /^(?=.*splice)(?=.*bear).*$/i,

	name : "Splice, Bear",

	source : ["UM5R", 32],

	plural : "Splice, Bear",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	vision : [["Darkvision", 60]],

	advantages : [
		["Animal Handling", true],
		["Survival", true]
	],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Bear: +2 Strength, +1 Any;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Splice, Bear (+2 Strength, +1 Any)",
};

RaceList["splice, beetle"] = {

	regExpSearch : /^(?=.*splice)(?=.*beetle).*$/i,

	name : "Splice, Beetle",

	source : ["UM5R", 32],

	plural : "Splice, Beetle",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Beetle: +3 Strength, +1 Any;",

	scores : [3, 0, 0, 0, 0, 0],

	trait : "Splice, Beetle (+3 Strength, +1 Any)\nKeen Smell: I have advantage on Perception checks that rely on smell.",
};

RaceList["splice, bee"] = {

	regExpSearch : /^(?=.*splice)(?=.*bee).*$/i,

	name : "Splice, Bee",

	source : ["UM5R", 32],

	plural : "Splice, Bee",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Bee: +3 Dexterity, +1 Any;",

	scores : [0, 3, 0, 0, 0, 0],

	trait : "Splice, Bee (+3 Dexterity, +1 Any)\nKeen Smell: I have advantage on Perception checks that rely on smell.",
};

RaceList["splice, cat"] = {

	regExpSearch : /^(?=.*splice)(?=.*cat).*$/i,

	name : "Splice, Cat",

	source : ["UM5R", 32],

	plural : "Splice, Cat",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	vision : [["Darkvision", 60]],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Cat: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Cat (+2 Dexterity, +1 Any)\nKeen Smell: I have advantage on Perception checks that rely on smell.",
};

RaceList["splice, chameleon"] = {

	regExpSearch : /^(?=.*splice)(?=.*chameleon).*$/i,

	name : "Splice, Chameleon",

	source : ["UM5R", 33],

	plural : "Splice, Chameleon",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		climb : { spd : 10, enc : 0 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Chameleon: +2 Wisdom, +1 Any;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Splice, Chameleon (+2 Wisdom, +1 Any)",

	abilitySave : 5,

	features : {

		"coloration" : {
			name : "Coloration",
			minlevel : 1,
			tooltip : "As an action, I gain advantage to my next Stealth check, but this benefit is nullified when I move.",
			action : ["action"],
		},
	},
};

RaceList["splice, dolphin"] = {

	regExpSearch : /^(?=.*splice)(?=.*dolphin).*$/i,

	name : "Splice, Dolphin",

	source : ["UM5R", 33],

	plural : "Splice, Dolphin",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		swim : { spd : 30, enc : 0 },
	},

	languageProfs : ["Common"],

	vision : [["Blindsight", 20]],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Dolphin: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Dolphin (+2 Dexterity, +1 Any)\nUltrasound: I have blindsight out tot a range of 20 ft., which expands to 80 ft. underwater.",
};

RaceList["splice, eagle"] = {

	regExpSearch : /^(?=.*splice)(?=.*eagle).*$/i,

	name : "Splice, Eagle",

	source : ["UM5R", 33],

	plural : "Splice, Eagle",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 33],
		damage : [1, 6, "slashing"]
	},

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Eagle: +2 Wisdom, +1 Any;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Splice, Eagle (+2 Wisdom, +1 Any)\nKeen Sight: I have advantage on Perception checks that rely on sight.",
};

RaceList["splice, horse"] = {

	regExpSearch : /^(?=.*splice)(?=.*horse).*$/i,

	name : "Splice, Horse",

	source : ["UM5R", 33],

	plural : "Splice, Horse",

	size : 3,

	speed : {

		walk : { spd : 35, enc : 25 },
	},

	languageProfs : ["Common"],

	savetxt : {

		adv_vs : ["prone"]
	},

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Horse: +2 Strength, +1 Any;",

	scores : [2, 0, 0, 0, 0, 0],

	trait : "Splice, Horse (+2 Strength, +1 Any)",
};

RaceList["splice, rabbit"] = {

	regExpSearch : /^(?=.*splice)(?=.*rabbit).*$/i,

	name : "Splice, Rabbit",

	source : ["UM5R", 33],

	plural : "Splice, Rabbit",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Rabbit: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Rabbit (+2 Dexterity, +1 Any)\nAcceleration: My speed is 35 when performing the Dash action.\nStanding Leap: I can use Athletics instead of Athletics when jumping. I'm considered having moved 10 feet before performing any jump. I also have advantage with Athletics and Acrobatics checks when jumping.",
};

RaceList["splice, rat"] = {

	regExpSearch : /^(?=.*splice)(?=.*rat).*$/i,

	name : "Splice, Rat",

	source : ["UM5R", 33],

	plural : "Splice, Rat",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	savetxt : {

		immune : ["disease"],
	},

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Rat: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Rat (+2 Dexterity, +1 Any)\nKeen Smell: I have advantage on Perception checks that rely on smell.",
};

RaceList["splice, spider"] = {

	regExpSearch : /^(?=.*splice)(?=.*spider).*$/i,

	name : "Splice, Spider",

	source : ["UM5R", 33],

	plural : "Splice, Spider",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },

		climb : { spd : 10, enc : 0 },
	},

	languageProfs : ["Common"],

	vision : [["Blindsight", 10]],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Spider: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Spider (+2 Dexterity, +1 Any)\nSpider Climb: I can climb difficult surfaces, including upside down on ceilings without needing to make an ability check. I never suffer disadvantage when moving in zero and microgravity situations.",
};

RaceList["splice, viper"] = {

	regExpSearch : /^(?=.*splice)(?=.*viper).*$/i,

	name : "Splice, Viper",

	source : ["UM5R", 33],

	plural : "Splice, Viper",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	vision : [["Blindsight", 10]],

	savetxt : {

		text : ["Immune to poison damage"],

		immune : ["poison"],
	},

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Viper: +2 Wisdom, +1 Any;",

	scores : [0, 0, 0, 0, 2, 0],

	trait : "Splice, Viper (+2 Wisdom, +1 Any)",

	abilitySave : 3,

	features : {

		"poison" : {
			name : "Poison",
			minlevel : 1,
			usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
			recovery : "long rest",
			tooltip : "As many times a day as my proficiency bonus, as an action, I can make a ranged poison spit attack against a target up to 20 ft away. If hit, the target suffers 1d6/proficiency bonus + Constitution modifier poison damage, and the target must make a Constitution saving throw to prevent being poisoned for 1 minute; the target can repeat the save at the end of each of its turns.",
			action : ["action"],
		},
	},
};

RaceList["splice, wolf"] = {

	regExpSearch : /^(?=.*splice)(?=.*wolf).*$/i,

	name : "Splice, Wolf",

	source : ["UM5R", 33],

	plural : "Splice, Wolf",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Wolf: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Wolf (+2 Dexterity, +1 Any)\nInertia: I increase my speed by 5 feet when committing a Dash action.\nKeen Senses: I have advantage with Perception checks that rely on hearing or smell.",
};

RaceList["splice, wolverine"] = {

	regExpSearch : /^(?=.*splice)(?=.*wolverine).*$/i,

	name : "Splice, Wolverine",

	source : ["UM5R", 33],

	plural : "Splice, Wolverine",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	weaponsAdd : ["Claws"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /claws/i,
		name : "Claws",
		source : ["UM5R", 33],
		damage : [1, 6, "slashing"]
	},

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Splice, Wolverine: +2 Dexterity, +1 Any;",

	scores : [0, 2, 0, 0, 0, 0],

	trait : "Splice, Wolverine (+2 Dexterity, +1 Any)\nInertia: I increase my speed by 5 feet when committing a Dash action.\nKeen Smell: I have advantage with Perception checks that rely on smell.",
};

RaceList["tuner"] = {

	regExpSearch : /^(?=.*tuner).*$/i,

	name : "Tuner",

	source : ["UM5R", 34],

	plural : "Tuners",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common"],

	age : " reach adulthood in their late teens and live around 100 years.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Tuner: +2 Intelligence, Wisdom, or Vigor (if used), +1 Intelligence, Wisdom, or Vigor (cannot be the same score that gained the +2 bonus);",

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Tuner (+2 Intelligence, Wisdom, or Vigor, +1 Intelligence, Wisdom, or Vigor)\nPsykar: I may select the magi class. At 1st level and every subsequent level, I gain a +1 bonus to my asset. I also gain a +2 bonus to my vessel at character creation. My ability to master dark is considered wholly natural, and I don't require a spellbook or a focus (like a wand).",
};

RaceList["yokai"] = {

	regExpSearch : /^(?=.*yokai).*$/i,

	name : "Yōkai",

	source : ["UM5R", 34],

	plural : "Yōkai",

	size : 3,

	speed : {

		walk : { spd : 30, enc : 20 },
	},

	languageProfs : ["Common", "Sylvan"],

	age : " do not age, and are immortal.",

	height : " range from 5 to over 6 feet tall.",

	weight : " weigh around 150 lbs.",

	improvements : "Yōkai: +2 Any, +1 Any (cannot be the same score);",

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Yōkai (+2 Any, +1 Any)\nConvention: I possess a series of rules I must follow. I must satisfy these rules, generally between 1 and 3. The only pattern is that the sweeter the soul, the more constricting the convention. Convention laws vary between the mundane and the magical. I roll between 1 and 3 times on the table in the notes.",

	features : {

		"yokai form" : {
			name : "Yōkai Form",
			minlevel : 1,
			tooltip : "I pick one beast CR 1 or lower and Medium sized or smaller. This as much my natural form as is my human form. As an action, I can shift from one form to another. However, when I assume a form, I cannot change back for five minutes. There is no limit on the number of times I can shift. I retain my HP in my animal form, as well as my mental ability scores. I cannot be polymorphed.",
			action : ["action"],
		},
	},

	toNotesPage : [{
		name : "Convention Table",
		source : ["UM5R", 35],
		popupName : "Convention Table",
		note : [
			"Roll   Convention",
			"1      After a short rest, I must consume at least one liter of saltwater.",
			"2      I select an item. I can only turn human when carrying this item. The moment I drop the item, I change into my animal form.",
			"3      I lose 1 Hit Die if I reduce a creature to 0 HP.",
			"4      I know the name of every person I meet.",
			"5      Every few times I talk, I must speak a rhyme.",
			"6      I collect shiny rocks.",
			"7      I can only recover Hit Dice when touching natural soil.",
			"8      I can only eat raisins; I hate grapes.",
			"9      I cannot change into my animal form while people look.",
			"10     I know the vintage of any spirit I drink. I also must ingest some alcohol each short and long rest.",
			"11     Each time an ally within 5 ft. of me swears, I suffer 1 point of damage.",
			"12     I always whisper.",
			"13     I pick a spice. At will, as an action, I produce a handful of that spice. Everyone smells that spice within 20 ft. of me.",
			"14     Once a week for eight hours, I must be buried up to my head in a garden.",
			"15     I spark any flammable substance within 5 ft. of me.",
			"16     I'm apprehensive, I always go last in initiative.",
			"17     I must assume animal form for six hours a day.",
			"18     I cannot escape from a creature's grapple, but I can always escape physical bindings after 1 round.",
			"19     My alignment changes in your animal form.",
			"20     I pick my own convention (GM discretion)."
		],
	}],
};

BackgroundList["affluent"] = {

	regExpSearch : /affluent/i,

	name : "Affluent",

	source : ["UM5R", 37],

	skillstxt : "Choose one from Deception or Persuasion",

	gold : 0,

	equipright : [
		["Fine clothes", "", 3],
		["$200 in a fancy, leather wallet", "", 1],
	],

	toolProfs : [["Musical instrument", 1]],

	languageProfs : 2,

	lifestyle : "wealthy",
};

BackgroundList["bruiser"] = {

	regExpSearch : /bruiser/i,

	name : "Bruiser",

	source : ["UM5R", 37],

	skillstxt : "Choose one from Athletics or Acrobatics",

	gold : 0,

	equipleft : [
		["A trophy from a fight (official or informal)", "", 3],
	],

	equipright : [
		["Common clothes", "", 3],
		["$20 in loose bills", "", 1],
	],

	languageProfs : 1,

	lifestyle : "modest",
};

BackgroundList["delinquent"] = {

	regExpSearch : /delinquent/i,

	name : "Delinquent",

	source : ["UM5R", 37],

	skillstxt : "Choose one from Deception or Sleight of Hand",

	gold : 0,

	equipright : [
		["Common clothes", "", 3],
		["$15 of stuff I stole", "", ""],
	],

	toolProfs : [["Thieves' tools"]],

	languageProfs : 1,

	lifestyle : "poor",
};

BackgroundList["disciple"] = {

	regExpSearch : /disciple/i,

	name : "Disciple",

	source : ["UM5R", 37],

	skillstxt : "Choose one from Nature or Religion",

	gold : 0,

	equipleft : [
		["Holy items (if said faith endorses them) including books and symbols", "", ""],
	],

	equipright : [
		["Common clothes", "", 3],
	],

	languageProfs : 1,

	lifestyle : "modest",
};

BackgroundList["drifter"] = {

	regExpSearch : /drifter/i,

	name : "Drifter",

	source : ["UM5R", 37],

	skillstxt : "Choose one from Deception or Survival",

	gold : 0,

	equipright : [
		["Common clothes", "", 3],
		["A backpack", "", 5],
		["A bedroll", "", 3],
		["A blanket", "", 2],
		["$5 in coins", "", ""],
	],

	languageProfs : 2,

	lifestyle : "squalid",
};

BackgroundList["intellectual"] = {

	regExpSearch : /intellectual/i,

	name : "Intellectual",

	source : ["UM5R", 38],

	skillstxt : "Choose one from Engineering or Science",

	gold : 0,

	equipleft : [
		["A handful of textbooks", "", 4],
	],

	equipright : [
		["Common clothes", "", 3],
		["$15 in a wallet", "", 1],
	],

	languageProfs : 2,

	lifestyle : "modest",
};

BackgroundList["laborer"] = {

	regExpSearch : /laborer/i,

	name : "Laborer",

	source : ["UM5R", 38],

	skillstxt : "Choose one from Animal Handling or Athletics",

	gold : 0,

	equipleft : [
		["One set of artisan's tools", "", ""],
	],

	equipright : [
		["Common clothes", "", 3],
		["$50 in well-earned money", "", 1],
	],

	toolProfs : [["Artisan's tools", 1]],

	languageProfs : 1,

	lifestyle : "modest",
};

BackgroundList["prodigy"] = {

	regExpSearch : /prodigy/i,

	name : "Prodigy",

	source : ["UM5R", 38],

	skillstxt : "Choose one from Athletics or Performance",

	gold : 0,

	equipleft : [
		["One set of artisan's tools or a musical instrument", "", ""],
		["A trophy", "", 3],
	],

	equipright : [
		["Common clothes", "", 3],
		["$15 in a wallet", "", 1],
	],

	toolProfs : [["Artisan's tools or a musical instrument", 1]],

	languageProfs : 1,

	lifestyle : "modest",
};

BackgroundList["recluse"] = {

	regExpSearch : /recluse/i,

	name : "Recluse",

	source : ["UM5R", 38],

	skillstxt : "Choose one from Computer Use or Investigation",

	gold : 0,

	equipleft : [
		["A personal computer", "", 7],
	],

	equipright : [
		["Common clothes", "", 3],
		["$20 in prepaid cards", "", 1],
		["$10 in a wallet", "", 1],
	],

	languageProfs : 2,

	lifestyle : "modest",
};

BackgroundList["regular joe"] = {

	regExpSearch : /regular joe/i,

	name : "Regular Joe",

	source : ["UM5R", 39],

	skillstxt : "Choose one from any skill",

	gold : 0,

	equipright : [
		["Common clothes", "", 3],
		["$50 in a wallet", "", 1],
	],

	toolProfs : [["Artisan's tools or a vehicle", 1]],

	languageProfs : 1,

	lifestyle : "modest",
};

BackgroundList["smooth talker"] = {

	regExpSearch : /smooth talker/i,

	name : "Smooth Talker",

	source : ["UM5R", 39],

	skillstxt : "Choose one from Intimidation or Persuasion",

	gold : 0,

	equipleft : [
		["A gaming set", "", ""],
	],

	equipright : [
		["Fine clothes", "", 3],
		["$50 in a wallet", "", 1],
	],

	toolProfs : [["Gaming set", 1]],

	languageProfs : 1,

	lifestyle : "modest",
};

FeatsList["skills and proficiencies, um5r"] = {

	name : "Skills and Proficiencies (UM5R)",

	source : ["UM5R", 45],

	allowDuplicates : false,

	description : "Adds information about the new skills and proficiencies introduced in UltraModern5 Redux in the notes.",

	toNotesPage : [{
		name : "Skills and Proficiencies, Part 1",
		source : ["UM5R", 45],
		popupName : "Skills and Proficiencies",
		note : [
			"Computer Use (Intelligence): Knowing where the \"on\" switch is and understanding a point/click interface is a common skill expected of everyone. Computer Use covers more advanced concepts like hardware modification, upgrade, and maintenance. Computer Use is also employed in the researching of online materials. I can attempt the repair or modification of a computer, circumvent security, create programs, or use it to replace an Investigation check when researching a subject.",
			"Demolitions (Intelligence): If proficient in demolitions, I can set and disarm explosives. This includes the planting of all manners of mechanical and electronic detonators. A successful check lets me place bombs to best effect and set or disable detonators. Failure means that the explosive fails to go off as planned. The explosives are not lost. Failure by 10 or more means the bomb might go off (if it is an explosive that can) as the detonator is being installed. A failure with wiring explosives together means the extra wired explosives will not go off with the primary.",
			"Engineering (Intelligence): This is a broad skill dealing with all applications of technology, allowing me to craft, modify, and repair devices. These include electronics, general machines, exo-armor, mecha, techan armor, techan weapons, and vehicles.",
			"   Crafting: Crafting technology deviates slightly from crafting mundane items. Not only am I required to be proficient in Engineering, but I also must possess the appropriate Engineering kit. If so, then I can expend $5 multiplied by my character level in widgets each day until I reach the market value of the item (this is called a build schedule). I must have widgets or parts on hand. Alternately, I can attempt to make an Engineering check—the result - 10 and multiplied by my character level is how much in $ I progress instead of taking the standard $5 each day. This value can increase with the use of engineering kits. The tech level of my engineering kit affects the speed of my build, being a multiplier affecting the number of $ I can invest per day of use. A TL1 kit thus cannot affect my build time, while a TL5 kit allows me to spend 5 times more $ than generally for a day's work. I cannot build other kits or medical injections. For example, if the item I'm trying to build costs $5,000, and I possess a TL3 Engineering kit and are 10th level, I can spend 5 (base) x 10 (level) x 3 (kit) = $150 a day without rolling. If deciding to roll one day, and my result is a 20, I can spend 10 (roll) x 10 (level) x 3 (kit) = $300 that day.",
			"   Disarm Electric Locks: When attempting to disarm a trap or break through a lock using an Engineering tool kit, I can use Engineering granted I have a tool kit of at least equal tech level of the device I'm trying to affect.",
			"   Recover Hit Points: I can take a day of downtime and make an Engineering to recover the HP of damaged items or machines. The number of HP recovered is equal to the result of my skill check - 10. This does not apply to mecha (see Mecha) This value can be adjusted with an appropriate engineering kit. If the kit is more advanced than the item being repairs, add the difference to the HP recovered. If the other way around, the recovered HP are reduced (if repairing a TL2 item with a TL4 kit, I gain a +2 bonus to the HP recovered—if reversed, it becomes a -2 penalty). The repair cost in widgets for each day is equal to the number of HP recovered * 5.",
			"   Reverse Engineer: I can use the Engineering skill to convert technology into widgets to be used in the creation of other technology. Each attempt to reverse engineer an item takes six hours. Reverse engineering destroys the item being selected. The end result is I acquire one-fifth of the item's value in widgets.",
			"   Sabotage: I can use Engineering skill to sabotage devices and vehicles. With this technique, I can inflict effects instantly or when certain conditions occur. I can only attempt sabotage against a target which I can incapacitate logically. The GM can refuse a sabotage attempt if I have no way of accessing vital components in the target. The GM may also require me to spend time gaining access to said components. There are hundreds of different effects I can accomplish with sabotage. Effects last until the effect is repaired unless stated otherwise. Effects can be repaired by a contested Engineering check or with specific solutions to each problem (breaking open a door instead of fixing the sabotage).",
			"   Mecha: Engineering can be used to build, modify, or repair mecha. Unlike most equipment, because mecha fall into an abstract definition of technology, they are not listed with a tech level; instead, the GM determines which tech level players mecha fall into and which tech level of kit is required; unless mecha are commonplace in my setting, a good guideline is one TL higher than the setting standard. Once sorted, I must possess that kit to conduct any work on mecha (see Mecha)."
		],
	}, {
		name : "Skills and Proficiencies, Part 2",
		source : ["UM5R", 46],
		popupName : "Skills and Proficiencies",
		note : [
			"Science (Intelligence): This is the general study of the applications of the unaltered rules that govern the real world. It deals with broad studies like Biology, Astronomy, and Geography and into further specific fields of expertise like Biochemistry and Astrophysics. Given enough dedication, you could earn grants and degrees, specializing in a field of study to better your species and the natural world. Being a top mind of the profession could enable me to unravel a genome or to design and build my own superconducting supercollider. I do not have to specify a field of expertise. This skill refers to a general knowledge of science. I use this skill for general scientific observations. Because science.",
			"Mecha Proficiency: Although similar to vehicles, mecha don't follow the rules regarding vehicles in the Equipment chapter. When I receive mecha proficiency, I gain the ability to operate all the mecha utilizing the same cockpit configuration as my mecha. Therefore, if my mecha utilizes a virtual cockpit, I'm trained to use any mecha utilizing a virtual cockpit, but I have no training with a mecha utilizing thought control. Although there is a mecha pilot class, if the setting of the game employs mecha as commonplace, the GM should offer mecha proficiency to all players, regardless of class. If a mecha transforms outside of a beast or humanoid form into something operating identically to a vehicle listed here, it turns into a vehicle, requiring the correct proficiency (see Vehicle Proficiency).",
			"Vehicle Proficiency: If proficient with a vehicle, I know how to drive or pilot said vehicle and any situation. There are five types of vehicle proficiency: light ground, heavy ground, super-heavy ground, aircraft, watercraft. If possessing one, I know how to control all vehicles of that type. So, if I ride a bike, I can ride them all. Although not entirely accurate given the broad range of technology seen across the world, this is a compromise to prevent clutter. Routine tasks such as ordinary driving don't require a check. I only make a check when experiencing unusual circumstances (such as stormy weather or a slippery surface), performing a stunt, driving at high speeds, or if trying to operate a vehicle while being attacked or attacking. If I fail a Dexterity check with a vehicle, I must suffer the consequences. This can include a second chance to recover, a slide, or a crash. Some stunts are easy, and they neither require a skill check nor have consequences. If I'm crashing, I often lose control of my vehicle and cannot perform any checks involving my vehicle until the crash is resolved. In most crashes, I continue my remaining movement in the direction I was previously pointed. In others (like catastrophic jumps), I immediately stop my movement. See Vehicle Rules for detailed rules on vehicles and how they are controlled.",
			"   Mecha: If a mecha transforms outside of a beast or humanoid form into something operating identically to a vehicle listed here, it turns into a vehicle, requiring the correct proficiency."
		],
	}],
}

FeatsList["exo-armor proficiency"] = {

	name : "Exo-Armor Proficiency",

	source : ["UM5R", 47],

	allowDuplicates : false,

	description : "I increase my Strength or Dexterity score by 1, to a maximum of 20. I also gain proficiency with exo-armor.",

	improvements : "Exo-Armor Proficiency: +1 Strength or Dexterity;",

	toolProfs : ["Exo-armor"],
}

FeatsList["crossfire"] = {

	name : "Crossfire",

	source : ["UM5R", 47],

	allowDuplicates : false,

	description : "I increase my Dexterity or Intelligence score by 1, to a maximum of 20. Any ability I have requiring an ally within 5-feet of an enemy is now extended to any ally with a firearm within 20 feet of an enemy.",

	improvements : "Crossfire: +1 Dexterity or Intellgence;",
}

FeatsList["fidgety fingers"] = {

	name : "Fidgety Fingers",

	source : ["UM5R", 47],

	allowDuplicates : false,

	description : "I increase my Intelligence or Wisdom score by 1, to a maximum of 20. When crafting technology, the $ I can expend per day (or longer with a mismatched engineering kit) is doubled.",

	improvements : "Fidgety Fingers: +1 Intelligence or Wisdom;",
}

FeatsList["firearm expertise"] = {

	name : "Firearm Expertise",

	source : ["UM5R", 47],

	allowDuplicates : false,

	description : "I increase my ranged attack ability score by 1, to a maximum of 20. I can reload one clip, magazine, or cell using fifteen feet of unspent movement. Before making a ranged attack with a firearm that I'm proficient with, I can choose to take a -5 penalty to the attack roll. If the attack hits, I add +10 to the attack's damage.",

	improvements : "Firearm Expertise: +1 ranged attack ability score;",
}

ClassList["born leader"] = {

	name : "Born Leader",

	regExpSearch : /^(?=.*born)(?=.*leader).*$/i,

	source : ["UM5R", 49],

	primaryAbility : "Intelligence or Charisma",

	prereqs : "None",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Born Leader") + ": None.", "\n\n" + toUni("Born Leader") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"brains and good looks" : {
			name : "Brains and Good Looks",
			source : ["UM5R", 49],
			minlevel : 1,
			description : "\n   " + "I choose either to have Intelligence or Charisma as my primary ability.",
			choices : ["Intelligence", "Charisma"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Brains and Good Looks (Intelligence)",
				description : "\n   " + "I can always choose to use Intelligence instead of Wisdom for Insight and Perception checks. Additionally, after taking a long rest, if I wear no armor and wield no weapons, I gain a +2 bonus to Intelligence or Charisma (select one) until I make an attack roll or cast a spell.",
			},

			"charisma" : {
				name : "Brains and Good Looks (Charisma)",
				description : "\n   " + "I can always choose to use Intelligence instead of Wisdom for Insight and Perception checks. Additionally, after taking a long rest, if I wear no armor and wield no weapons, I gain a +2 bonus to Intelligence or Charisma (select one) until I make an attack roll or cast a spell.",
			},
		},

		"compelling directive" : {
			name : "Compelling Directive",
			source : ["UM5R", 49],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Brains and Good Looks\".",
			choices : ["Intelligence", "Charisma"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Compelling Directive (Intelligence)",
				description : "\n   " + "After I finish a long rest, I roll a d20, and put the result aside. I can swap out any roll me or an ally that can communicate with me makes for that result. I should always have a d20 result put aside this way, but after swapping two die rolls, I cannot swap another until you finish a short or long rest. After I finish a long rest, I always roll a new d20. Additionally, at 5th level, I gain a +2 bonus to any Intelligence or Charisma skill of my choice.",
				improvements : "Compelling Directive: +1 Any;",
				scoresMaximum : [0, 0, 0, 22, 0, 0],
				usages : ["", "", "", 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
				recovery : ["", "", "", "long rest", "long rest", "long rest", "long rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest"],
			},

			"charisma" : {
				name : "Compelling Directive (Charisma)",
				description : "\n   " + "I can always choose to use Intelligence instead of Wisdom for Insight and Perception checks. Additionally, after taking a long rest, if I wear no armor and wield no weapons, I gain a +2 bonus to Intelligence or Charisma (select one) until I make an attack roll or cast a spell. Additionally, at 5th level, I gain a +2 bonus to any Intelligence or Charisma skill of my choice.",
				improvements : "Compelling Directive: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 0, 22],
				usages : ["", "", "", 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
				recovery : ["", "", "", "long rest", "long rest", "long rest", "long rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest", "short rest"],
			},
		},

		"social sciences" : {
			name : "Social Sciences",
			source : ["UM5R", 49],
			minlevel : 8,
			description : "\n   " + "I can swap out four die rolls between short and long rests with my \"Compelling Directive\" feature.",
			improvements : "Social Sciences: +1 Any;",
		},

		"presence of leadership" : {
			name : "Presence of Leadership",
			source : ["UM5R", 49],
			minlevel : 12,
			description : "\n   " + "After taking a long rest, if I wear no armor and wield no weapons, I have advantage with either Intelligence or Charisma skill checks (select one) until I make an attack roll or cast a spell.",
			improvements : "Presence of Leadership: +2 Any or +1 Any two ability scores;",
			extraAC : [{
				mod : 1,
				magic : false,
				text : "I add 1 to my AC.",
			}],
		},

		"earned loyalty" : {
			name : "Earned Loyalty",
			source : ["UM5R", 49],
			minlevel : 16,
			description : "\n   " + "I can turn a short rest into a long rest without an extension of time. This affects me and all allies I can see. After I use this ability, I cannot use it again until I have completed four additional long rests. Additionally, at 17th level, I gain a +1 bonus to my attack and damage rolls.",
			improvements : "Earned Loyalty: +1 Any;",
		},

		"just stop" : {
			name : "Just Stop",
			source : ["UM5R", 49],
			minlevel : 19,
			description : "\n   " + "As an action, me and all allies able to communicate with me gain the benefit of a short rest. This takes no time other than the action on my turn. After I use this ability, I cannot use it again until I finish a long rest.",
			improvements : "Just Stop: +2 Any or +1 Any two ability scores;",
			usages : 1,
			recovery : "long rest",
			action : ["action"],
		},
	}
}

ClassList["juggernaut"] = {

	name : "Juggernaut",

	regExpSearch : /^(?=.*juggernaut).*$/i,

	source : ["UM5R", 49],

	primaryAbility : "Strength or Constitution",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Juggernaut") + ": None.", "\n\n" + toUni("Juggernaut") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"full torque" : {
			name : "Full Torque",
			source : ["UM5R", 49],
			minlevel : 1,
			description : "\n   " + "I choose either to have Strength or Constitution as my primary ability.",
			choices : ["Strength", "Constitution"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Full Torque (Strength)",
				description : "\n   " + "I can use Strength in place of Dexterity for all attack and damage rolls with ranged and thrown weapons. Alternately, when wielding two-handed small arms, heavy weapons, or super heavy weapons, I can use Constitution in place of Dexterity for all attack and damage rolls.",
			},

			"constitution" : {
				name : "Full Torque (Constitution)",
				description : "\n   " + "I can use Strength in place of Dexterity for all attack and damage rolls with ranged and thrown weapons. Alternately, when wielding two-handed small arms, heavy weapons, or super heavy weapons, I can use Constitution in place of Dexterity for all attack and damage rolls.",
			},
		},

		"good cardio" : {
			name : "Good Cardio",
			source : ["UM5R", 49],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Full Torque\".",
			choices : ["Strength", "Constitution"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Good Cardio (Strength)",
				description : "\n   " + "My speed is not reduced when moving through difficult terrain, and I gain a bonus to my HP this level equal to twice my Strength modifier. Addtionally, I regain 1 HP per hour as long as I have at least 1 HP.",
				improvements : "Good Cardio: +1 Any;",
				scoresMaximum : [22, 0, 0, 0, 0, 0],
			},

			"constitution" : {
				name : "Good Cardio (Constitution)",
				description : "\n   " + "My speed is not reduced when moving through difficult terrain, and I gain a bonus to my HP this level equal to triple my Constitution modifier. Addtionally, I regain 1 HP per hour as long as I have at least 1 HP.",
				improvements : "Good Cardio: +1 Any;",
				scoresMaximum : [0, 0, 22, 0, 0, 0],
			},
		},

		"unstoppable" : {
			name : "Unstoppable",
			source : ["UM5R", 50],
			minlevel : 8,
			description : "\n   " + "I gain 1 additional Hit Die at this level, and I maximize the HP rolled from both this Hit Die and the normal one I receive at this level.",
			improvements : "Unstoppable: +1 Any;",
		},

		"built like a truck" : {
			name : "Built Like A Truck",
			source : ["UM5R", 50],
			minlevel : 12,
			description : "\n   " + "I gain a bonus to my HP this level equal to my primary juggernaut modifier ability (meaning double if I selected Constitution), and I gain a damage bonus with melee attacks against incapacitated targets or immovable objects equal to my primary juggernaut ability modifier. Additionally, I regain an additional 1d4 Hit Dice when taking a long rest.",
			improvements : "Built Like A Truck: +2 Any or +1 Any two ability scores;",
			savetxt : {

				adv_vs : ["poisoned", "stunned"]
			},
		},

		"hulking smash" : {
			name : "Hulking Smash",
			source : ["UM5R", 50],
			minlevel : 16,
			description : "\n   " + "I can use an action to activate my \"hulking\" ability. After I use this ability, you cannot use it again until I finish a long rest. When hulking, the following occurs:\n    I gain temporary hit HP equal to twice my level + twice my primary juggernaut ability modifier.\n   As long as I have temporary HP, I gain a bonus to damage rolls with melee attacks equal to my primary juggernaut ability.\n   I suffer disadvantage on all skill checks, ability checks, and attack rolls utilizing Intelligence, Wisdom, or Charisma for one hour. Additionally, at 17th level, I regain 2 HP per hour instead of 1.",
			improvements : "Hulking Smash: +1 Any;",
			usages : 1,
			recovery : "long rest",
			action : ["action"],
		},

		"in your prime" : {
			name : "In Your Prime",
			source : ["UM5R", 50],
			minlevel : 19,
			description : "\n   " + "I have resistance to non-magical bludgeoning, piercing, and slashing damage.",
			improvements : "In Your Prime: +2 Any or +1 Any two ability scores;",
			dmgres : ["Blud. (Non-mag)", "Pier. (Non-mag)", "Slash. (Non-mag)"],
		},
	}
}

ClassList["performer"] = {

	name : "Performer",

	regExpSearch : /^(?=.*performer).*$/i,

	source : ["UM5R", 51],

	primaryAbility : "Dexterity or Charisma",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Performer") + ": None.", "\n\n" + toUni("Performer") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"constant practice" : {
			name : "Constant Practice",
			source : ["UM5R", 51],
			minlevel : 1,
			description : "\n   " + "I choose either to have Dexterity or Charisma as my primary ability.",
			choices : ["Dexterity", "Charisma"],
			choicesNotInMenu : false,
			"dexterity" : {
				name : "Constant Practice (Dexterity)",
				description : "\n   " + "I can always choose to use Dexterity instead of Charisma for Performance checks. I can also choose to use Charisma instead of Dexterity for Acrobatics checks. I also gain proficiency in Deception and Performance skills.",
				skills : ["Performance", "Deception"],
			},

			"charisma" : {
				name : "Constant Practice (Charisma)",
				description : "\n   " + "I can always choose to use Dexterity instead of Charisma for Performance checks. I can also choose to use Charisma instead of Dexterity for Acrobatics checks. I also gain proficiency in Deception and Performance skills.",
				skills : ["Performance", "Deception"],
			},
		},

		"over baseline" : {
			name : "Over Baseline",
			source : ["UM5R", 51],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Constant Practice\".",
			choices : ["Dexterity", "Charisma"],
			choicesNotInMenu : false,
			"dexterity" : {
				name : "Over Baseline (Dexterity)",
				description : "\n   " + "I'm immune to the frightened condition. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Over Baseline: +1 Any;",
				scoresMaximum : [0, 22, 0, 0, 0, 0],
				savetxt : {

					immune : ["frightened"]
				},
			},

			"charisma" : {
				name : "Over Baseline (Charisma)",
				description : "\n   " + "I'm immune to the frightened condition. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Over Baseline: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 0, 22],
				savetxt : {

					immune : ["frightened"]
				},
			},
		},

		"practice makes perfect" : {
			name : "Practice Makes Perfect",
			source : ["UM5R", 51],
			minlevel : 8,
			description : "\n   " + "Any time I make an ability check based on my primary performer ability, you re-roll all die results of 5 or less.",
			improvements : "Practice Makes Perfect: +1 Any;",
		},

		"confidence" : {
			name : "Confidence",
			source : ["UM5R", 51],
			minlevel : 12,
			description : "\n   " + "Before making a d20 roll, I can declare what the roll will be (taking no action); subtract the difference between my guess and the actual roll from 4 and add that result onto my roll (if a positive). If the modified roll becomes a 20 or higher, it is not natural. Once I add 3 or more to a roll from this ability, I cannot use it again until I finish a short or long rest. When declaring my result, it must be audible for the GM and the player group to hear. Additionally, I gain a +1 bonus to my Dexterity and Charisma saving throws.",
			improvements : "Confidence: +1 Any;",
			usages : 1,
			recovery : "short rest",
		},

		"effortless" : {
			name : "Effortless",
			source : ["UM5R", 52],
			minlevel : 16,
			description : "\n   " + "Any time I make an ability check based on my primary performer ability, I re-roll all die results of 10 or less. Additionally, at 17th level, I gain a +1 bonus to my attack and damage rolls.",
			improvements : "Effortless: +1 Any;",
		},

		"personal control" : {
			name : "Personal Control",
			source : ["UM5R", 52],
			minlevel : 19,
			description : "\n   " + "I select one Dexterity or Charisma skill I'm proficient in. When I make an ability check using that skill, I set the die roll to a natural 20. Once I use this ability, I can't use it again until you finish a long rest.",
			improvements : "Personal Control: +2 Any or +1 Any two ability scores;",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["runner"] = {

	name : "Runner",

	regExpSearch : /^(?=.*runner).*$/i,

	source : ["UM5R", 52],

	primaryAbility : "Dexterity or Intelligence",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Runner") + ": None.", "\n\n" + toUni("Runner") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"power to weight ratio" : {
			name : "Power to Weight Ratio",
			source : ["UM5R", 52],
			minlevel : 1,
			description : "\n   " + "I choose either to have Dexterity or Intelligence as my primary ability.",
			choices : ["Dexterity", "Intelligence"],
			choicesNotInMenu : false,
			"dexterity" : {
				name : "Power to Weight Ratio (Dexterity)",
				description : "\n   " + "I can always choose to use Dexterity instead of Strength for the Athletics skill, and Intelligence instead of Wisdom for the Perception skill. I can also use Dexterity in place of Strength for attack or damage rolls with all weapons without the heavy property, and I have proficiency with Acrobatics.",
				skills : ["Acrobatics"],
			},

			"intelligence" : {
				name : "Power to Weight Ratio (Intelligence)",
				description : "\n   " + "I can always choose to use Dexterity instead of Strength for the Athletics skill, and Intelligence instead of Wisdom for the Perception skill. I can also use Dexterity in place of Strength for attack or damage rolls with all weapons without the heavy property, and I have proficiency with Acrobatics.",
				skills : ["Acrobatics"],
			},
		},

		"cat balance" : {
			name : "Cat Balance",
			source : ["UM5R", 52],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Power to Weight Ratio\".",
			choices : ["Dexterity", "Intelligence"],
			choicesNotInMenu : false,
			"dexterity" : {
				name : "Cat Balance (Dexterity)",
				description : "\n   " + "If I move at least 10 feet while moving towards a wall, my remaining movement becomes a climb speed until the end of my turn. This movement can be in any direction as long as it follows a vertical surface. Additionally, I gain a +1 bonus to my AC if I'm not wearing heavy armor or exo-armor.",
				improvements : "Cat Balance: +1 Any;",
				scoresMaximum : [0, 22, 0, 0, 0, 0],
			},

			"intelligence" : {
				name : "Cat Balance (Intelligence)",
				description : "\n   " + "If I move at least 10 feet while moving towards a wall, my remaining movement becomes a climb speed until the end of my turn. This movement can be in any direction as long as it follows a vertical surface. Additionally, I gain a +1 bonus to my AC if I'm not wearing heavy armor or exo-armor.",
				improvements : "Cat Balance: +1 Any;",
				scoresMaximum : [0, 0, 0, 22, 0, 0],
			},
		},

		"saute de precision" : {
			name : "Saute de Precision",
			source : ["UM5R", 53],
			minlevel : 8,
			description : "\n   " + "If I use the Dash action, my movement increases by 1.5 times my speed (rounded down). I also add both my Dexterity and my Intelligence modifier to all Acrobatics checks.",
			improvements : "Saute de Precision: +1 Any;",
		},

		"natural athlete" : {
			name : "Natural Athlete",
			source : ["UM5R", 53],
			minlevel : 12,
			description : "\n   " + "As an action, I can set my next Dexterity check or saving throw to my Dexterity score without rolling. I can do this as many times as my Intelligence modifier and regain all spent uses after I finish a long rest. Additionally, I also don't suffer half damage from an effect that inflicts half damage on a successful Dexterity saving throw and the bonus to my AC becomes +2 instead of +1.",
			improvements : "Natural Athlete: +1 Any;",
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["action"],
		},

		"all about the flipping" : {
			name : "All About The Flipping",
			source : ["UM5R", 53],
			minlevel : 16,
			description : "\n   " + "When wearing medium armor, my maximum Dexterity modifier is increased to 3. If wearing light armor, I gain a +1 bonus to AC. Also, if I take an action to analyze my path before making any movement on my turn, until the beginning of my next turn, I gain a bonus to my AC equal to my Intelligence modifier. Additionally, at 17th level, the bonus to my AC becomes +3 instead of +2.",
			improvements : "All About The Flipping: +1 Any;",
		},

		"parkour master" : {
			name : "Parkour Master",
			source : ["UM5R", 53],
			minlevel : 19,
			description : "\n   " + "I gain a pool of additional actions equal to my primary runner ability modifier. I can only use one additional action per turn, and only to take the Dash, Disengage, or Use an Object actions. My action pool refills when I finish a long rest.",
			improvements : "Parkour Master: +2 Any or +1 Any two ability scores;",
		},
	}
}

ClassList["savant"] = {

	name : "Savant",

	regExpSearch : /^(?=.*savant).*$/i,

	source : ["UM5R", 53],

	primaryAbility : "Intelligence or Wisdom",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Savant") + ": None.", "\n\n" + toUni("Savant") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"traning beats experience" : {
			name : "Traning Beats Experience",
			source : ["UM5R", 53],
			minlevel : 1,
			description : "\n   " + "I choose either to have Intelligence or Wisdom as my primary ability.",
			choices : ["Intelligence", "Wisdom"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Traning Beats Experience (Intelligence)",
				description : "\n   " + "I can use Intelligence in place of Dexterity for attack and damage rolls with one-handed and two-handed small arms. I can also use Intelligence or Wisdom as my modifier to AC instead of Dexterity and as my spellcasting ability (if I cast spells).",
			},

			"wisdom" : {
				name : "Traning Beats Experience (Wisdom)",
				description : "\n   " + "I can use Intelligence in place of Dexterity for attack and damage rolls with one-handed and two-handed small arms. I can also use Intelligence or Wisdom as my modifier to AC instead of Dexterity and as my spellcasting ability (if I cast spells).",
			},
		},

		"not stupid" : {
			name : "Not Stupid",
			source : ["UM5R", 53],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Traning Beats Experience\".",
			choices : ["Intelligence", "Wisdom"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Not Stupid (Intelligence)",
				description : "\n   " + "I gain the insight to discover if something is simply... stupid. I can ask the GM if a course of action (either mine or an ally's I know about) is just plain dumb, or the GM can volunteer this information. If the action is borderline, the GM's answer may be cryptic; otherwise, it should be straightforward. I can ask as many times as my Intelligence modifier before being required to finish a long rest. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Not Stupid: +1 Any;",
				scoresMaximum : [0, 0, 0, 22, 0, 0],
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recovery : "long rest",
			},

			"wisdom" : {
				name : "Not Stupid (Wisdom)",
				description : "\n   " + "I gain the insight to discover if something is simply... stupid. I can ask the GM if a course of action (either mine or an ally's I know about) is just plain dumb, or the GM can volunteer this information. If the action is borderline, the GM's answer may be cryptic; otherwise, it should be straightforward. I can ask as many times as my Wisdom modifier before being required to finish a long rest. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Not Stupid: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 22, 0],
				usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
				recovery : "long rest",
			},
		},

		"talented" : {
			name : "Talented",
			source : ["UM5R", 53],
			minlevel : 8,
			description : "\n   " + "I'm proficient in all skills of my primary savant ability (if not already) and use my primary savant ability instead of Dexterity for my bonus to initiative.",
			improvements : "Talented: +1 Any;",
		},

		"too smart" : {
			name : "Too Smart",
			source : ["UM5R", 54],
			minlevel : 12,
			description : "\n   " + "If I use any skill tied to my primary savant ability to practice a profession during downtime activities, I can maintain a wealthy lifestyle without having to pay per day. I also do not have to pay for research, and training costs 1/4th the usual time and money. Additionally, after taking a long rest, I gain a +3 bonus to Intelligence or Wisdom (select one) until I make an attack roll or cast a spell.",
			improvements : "Too Smart: +2 Any or +1 Any two ability scores;",
			savetxt : {

				immune : ["charmed"]
			},
		},

		"eidetic memory" : {
			name : "Eidetic Memory",
			source : ["UM5R", 54],
			minlevel : 16,
			description : "\n   " + "If I have advantage on any roll (including attack rolls and saving throws) and both results would succeed, I can set one aside. At any point in the next five minutes, I can choose not to make a d20 roll and instead use the saved die. I can only set aside one result at a time, and if not used within 5 minutes, it is lost. Additionally, at 17th level, I become immune to the frightened condition.",
			improvements : "Eidetic Memory: +1 Any;",
		},

		"opus" : {
			name : "Opus",
			source : ["UM5R", 54],
			minlevel : 19,
			description : "\n   " + "Any time I roll an ability check, skill check, or saving throw with my primary savant ability, I can set my die roll to my primary savant ability score.",
			improvements : "Opus: +1 Any;",
		},
	}
}

ClassList["survivor"] = {

	name : "Survivor",

	regExpSearch : /^(?=.*survivor).*$/i,

	source : ["UM5R", 54],

	primaryAbility : "Constitution or Wisdom",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Survivor") + ": None.", "\n\n" + toUni("Survivor") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"hunter" : {
			name : "Hunter",
			source : ["UM5R", 54],
			minlevel : 1,
			description : "\n   " + "I choose either to have Constitution or Wisdom as my primary ability.",
			choices : ["Constitution", "Wisdom"],
			choicesNotInMenu : false,
			"constitution" : {
				name : "Hunter (Constitution)",
				description : "\n   " + "I can use Wisdom in place of Dexterity for attack and damage rolls with ranged attacks. I can use Constitution in place of Dexterity when determining my modifier to AC.",
			},

			"wisdom" : {
				name : "Hunter (Wisdom)",
				description : "\n   " + "I can use Wisdom in place of Dexterity for attack and damage rolls with ranged attacks. I can use Constitution in place of Dexterity when determining my modifier to AC.",
			},
		},

		"natural equilibrium" : {
			name : "Natural Equilibrium",
			source : ["UM5R", 54],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Hunter\".",
			choices : ["Constitution", "Wisdom"],
			choicesNotInMenu : false,
			"constitution" : {
				name : "Natural Equilibrium (Constitution)",
				description : "\n   " + "I can use an action and make a DC 15 Constitution ability check to reduce my exhaustion level by 1. Each time I attempt this save, the DC increases by 5. When I finish a long rest and have a chance to eat and drink something, the DC resets to 15. Additionally, at 5th level, I have resistance to cold damage.",
				improvements : "Natural Equilibrium: +1 Any;",
				scoresMaximum : [0, 0, 22, 0, 0, 0],
				skillstxt : "Choose one from either Animal Handling or Survival",
				action : ["action"],
			},

			"wisdom" : {
				name : "Natural Equilibrium (Wisdom)",
				description : "\n   " + "I can use an action and make a DC 15 Constitution ability check to reduce my exhaustion level by 1. Each time I attempt this save, the DC increases by 5. When I finish a long rest and have a chance to eat and drink something, the DC resets to 15. Additionally, at 5th level, I have resistance to cold damage.",
				improvements : "Natural Equilibrium: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 22, 0],
				skillstxt : "Choose one from either Animal Handling or Survival",
				action : ["action"],
			},
		},

		"tough it out" : {
			name : "Tough It Out",
			source : ["UM5R", 54],
			minlevel : 8,
			description : "\n   " + "I can increase my exhaustion level by 1 and select one of the bonuses below. Once I use one of the following abilities, I cannot use that same one again until I finish a long rest (though I can select the others, each time increasing your exhaustion level):\n   Hit Points: As an action, I gain temporary HP equal to my primary survivor modifier + my level.\n   Critical Hit: As part of an Attack action, I can turn a hit into a critical hit and inflict additional damage equal to twice my level.\n   AC Bonus: As an action, I gain a +1 bonus to AC for 1 minute (10 rounds).\n   Combat: As an action, I gain a +1 bonus to attack rolls for 1 minute (10 rounds).",
			improvements : "Tough It Out: +1 Any;",
			usages : 4,
			recovery : "long rest",
			action : ["action"],
		},

		"dead man walking" : {
			name : "Dead Man Walking",
			source : ["UM5R", 55],
			minlevel : 12,
			description : "\n   " + "I can be reduced to less than 0 HP (counted as being negative HP) but remain conscious and standing at the cost of my minimum exhaustion level. If I already have levels of exhaustion, they increase accordingly. Though I can remove additional levels, the minimum cannot be removed until my HP are raised back above 0.\n   If my HP are reduced to 0 HP but not more than -10, my minimum exhaustion level is 1.\n   Between -11 and -20 HP, my minimum exhaustion level is 2.\n   Between -21 and -30 HP, my minimum exhaustion level is 3.\n   Between -31 and -40 HP, my minimum exhaustion level is 4.\n   Between -41 and -50 HP, my minimum exhaustion level is 5.\nI can voluntarily fall unconscious and not compound exhaustion levels; additionally, after –50 HP, my minimum exhaustion level increases to 6, and I die.",
			improvements : "Dead Man Walking: +1 Any;",
			extraAC : [{
				mod : 1,
				magic : false,
				text : "I add 1 to my AC.",
			}],
		},

		"elite" : {
			name : "Elite",
			source : ["UM5R", 55],
			minlevel : 16,
			description : "\n   " + "I automatically pass Survival checks with a DC of 20 or less unless I have disadvantage on the check. Additionally, at 17th level, I gain resistance to fire damage.",
			improvements : "Elite: +2 Any or +1 Any two ability scores;",
		},

		"unnatural survival" : {
			name : "Unnatural Survival",
			source : ["UM5R", 55],
			minlevel : 19,
			description : "\n   " + "When I finish a long rest and ingest some food and drink, I reduce my exhaustion level by 2.",
			improvements : "Unnatural Survival: +2 Any or +1 Any two ability scores;",
		},
	}
}

ClassList["veteran"] = {

	name : "Veteran",

	regExpSearch : /^(?=.*veteran).*$/i,

	source : ["UM5R", 55],

	primaryAbility : "Wisdom or Charisma",

	die : 0,

	improvements : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	skills : ["\n\n" + toUni("Veteran") + ": None.", "\n\n" + toUni("Veteran") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"calm reflexes" : {
			name : "Calm Reflexes",
			source : ["UM5R", 55],
			minlevel : 1,
			description : "\n   " + "I choose either to have Wisdom or Charisma as my primary ability.",
			choices : ["Wisdom", "Charisma"],
			choicesNotInMenu : false,
			"wisdom" : {
				name : "Calm Reflexes (Wisdom)",
				description : "\n   " + "I can use Wisdom for all attack and damage rolls with ranged attacks, unarmed attacks, and attacks with melee weapons without the heavy property. I can also use Wisdom or Charisma for spells.",
				skillstxt : "Choose one from Deception, Intimidation, Performance, or Persuasion",
			},

			"charisma" : {
				name : "Calm Reflexes (Charisma)",
				description : "\n   " + "I can use Wisdom for all attack and damage rolls with ranged attacks, unarmed attacks, and attacks with melee weapons without the heavy property. I can also use Wisdom or Charisma for spells.",
				skillstxt : "Choose one from Deception, Intimidation, Performance, or Persuasion",
			},
		},

		"good guess" : {
			name : "Good Guess",
			source : ["UM5R", 55],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Calm Reflexes\".",
			choices : ["Wisdom", "Charisma"],
			choicesNotInMenu : false,
			"wisdom" : {
				name : "Good Guess (Wisdom)",
				description : "\n   " + "I gain a pool of rerolls for any roll I might make equal to my Wisdom modifier. This occurs as part of the same action (or reaction); this does not count as having advantage. If I suffer from advantage or disadvantage, I gain the re-roll after taking the final result. I can then select whichever roll I want. Once I use Good Guess, I cannot use it again until the beginning of my next turn. I regain all my Good Guess re-roll dice when I finish a long rest. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Good Guess: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 22, 0],
				skillstxt : "Choose one from either Animal Handling or Survival",
				usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
				recovery : "long rest",
			},

			"charisma" : {
				name : "Good Guess (Charisma)",
				description : "\n   " + "I gain a pool of rerolls for any roll I might make equal to my Charisma modifier. This occurs as part of the same action (or reaction); this does not count as having advantage. If I suffer from advantage or disadvantage, I gain the re-roll after taking the final result. I can then select whichever roll I want. Once I use Good Guess, I cannot use it again until the beginning of my next turn. I regain all my Good Guess re-roll dice when I finish a long rest. Additionally, at 5th level, I gain a +1 bonus to my AC.",
				improvements : "Good Guess: +1 Any;",
				scoresMaximum : [0, 0, 0, 0, 0, 22],
				skillstxt : "Choose one from either Animal Handling or Survival",
				usages : "Charisma modifier per ",
				usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
				recovery : "long rest",
			},
		},

		"expecting trouble" : {
			name : "Expecting Trouble",
			source : ["UM5R", 55],
			minlevel : 8,
			description : "\n   " + "The number of uses I gain for \"Good Guess\" increases by 2. I also regain a \"Good Guess\" die roll if that roll results in a 1 or a 2. I also can make a History check (using Intelligence) as a History check (using Wisdom), effectively a gut instinct of what is probably true, or as a History check (using Charisma), where I'm making something up that might be true.",
			improvements : "Expecting Trouble: +1 Any;",
		},

		"stone faced" : {
			name : "Stone Faced",
			source : ["UM5R", 56],
			minlevel : 12,
			description : "\n   " + "I'm immune to the frightened and charmed conditions. Additionally, I gain a +1 bonus to my attack and damage rolls.",
			improvements : "Stone Faced: +2 Any or +1 Any two ability scores;",
			savetxt : {

				immune : ["charmed", "frightened"]
			},
		},

		"instinct with time" : {
			name : "Instinct With Time",
			source : ["UM5R", 56],
			minlevel : 16,
			description : "\n   " + "As a reaction to making a saving throw (but before making the roll), I can move 5 feet. If this movement would take me out of the area of the effect that requires a save, I don't have to make one. Additionally, at 17th level, the bonus to AC becomes +2 instead of +1.",
			improvements : "Instinct With Time: +2 Any or +1 Any two ability scores;",
			action : ["reaction"],
		},

		"at any cost" : {
			name : "At Any Cost",
			source : ["UM5R", 56],
			minlevel : 19,
			description : "\n   " + "The number of uses I gain for \"Good Guess\" increases by 2. I'm also able to more easily overcome foes if I have dealt with them (or something similar) previously. If I fight a similar opponent in the future, I have advantage on attack rolls until the first time I hit, and my first hit is also a critical hit. \"Similar\" is defined as having the same basic creature stat block (with allowances for minor customizations the GM may have made to a particular creature). for instance, if I previously defeated a space gnome security guard, I would have a bonus against other space gnome security guards, but not against space gnome mercenaries or space elf security guards.",
			improvements : "At Any Cost: +1 Any;",
		},
	}
}

ClassList["warrior, um5r"] = {

	name : "Warrior, UM5R",

	regExpSearch : /^(?=.*warrior)(?=.*um5r).*$/i,

	source : ["UM5R", 56],

	primaryAbility : "Strength or Dexterity",

	die : 0,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	skills : ["\n\n" + toUni("Warrior") + ": None.", "\n\n" + toUni("Warrior") + ": None."],

	subclasses : ["", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"ladder" : {
			name : "Ladder",
			source : ["UM5R", 48],
			minlevel : 1,
			description : "\n   " + "This class is a Ladder, meaning that levels in this class do not count towards my overall character level and gains levels alongside my main class.",
		},

		"strength over agility" : {
			name : "Strength Over Agility",
			source : ["UM5R", 56],
			minlevel : 1,
			description : "\n   " + "I choose either to have Strength or Dexterity as my primary ability.",
			choices : ["Strength", "Dexterity"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Strength Over Agility (Strength)",
				description : "\n   " + "I can use Strength in place of Dexterity for all attack and damage rolls when wielding two-handed small arms, heavy weapons, or super heavy weapons. When wearing medium armor, my maximum Dexterity modifier is increased to 3. When wearing heavy armor, I gain a maximum Dexterity bonus of 1.",
			},

			"dexterity" : {
				name : "Strength Over Agility (Dexterity)",
				description : "\n   " + "I can use Strength in place of Dexterity for all attack and damage rolls when wielding two-handed small arms, heavy weapons, or super heavy weapons. When wearing medium armor, my maximum Dexterity modifier is increased to 3. When wearing heavy armor, I gain a maximum Dexterity bonus of 1.",
			},
		},

		"power up" : {
			name : "Power Up",
			source : ["UM5R", 56],
			minlevel : 4,
			description : "\n   " + "I choose the same option as the one I chose in \"Calm Reflexes\".",
			choices : ["Strength", "Dexterity"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Power Up (Strength)",
				description : "\n   " + "I can power up as an action. I gain a power rank, starting at 1 and increasing to a maximum of 5 with successive power-ups. Each rank has an associated power-up ability, which I can choose to apply to one attack (each ability also includes all lower ranks). I lose my power ranks when I use the ability, or when I roll for initiative, or finish a short or long rest.\n   Power Rank 1: I have advantage on my next attack; if I hit, the damage die of any weapon I wield increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12).\n   Power Rank 2: Regardless of my next attack roll, it automatically hits; the damage die of any weapon I wield increases by an additional step.\n   Power Rank 3: Regardless of my attack roll, my next attack is a critical hit.\n   Power Rank 4: Re-roll all 1s and 2s on my damage dice of my next hit. Each time I roll the maximum result on a damage die, roll that die again and add the result to my damage. If I roll the maximum result on a reroll, keep rolling and adding until I get a different result.\n   With my next hit, double all damage dice, this stacks with my critical hit.\nAdditionally, at 5th level, I gain a +1 bonus to my attack and damage rolls.",
				improvements : "Power Up: +1 Any;",
				scoresMaximum : [22, 0, 0, 0, 0, 0],
				action : ["action"],
			},

			"dexterity" : {
				name : "Power Up (Dexterity)",
				description : "\n   " + "I can power up as an action. I gain a power rank, starting at 1 and increasing to a maximum of 5 with successive power-ups. Each rank has an associated power-up ability, which I can choose to apply to one attack (each ability also includes all lower ranks). I lose my power ranks when I use the ability, or when I roll for initiative, or finish a short or long rest.\n   Power Rank 1: I have advantage on my next attack; if I hit, the damage die of any weapon I wield increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12).\n   Power Rank 2: Regardless of my next attack roll, it automatically hits; the damage die of any weapon I wield increases by an additional step.\n   Power Rank 3: Regardless of my attack roll, my next attack is a critical hit.\n   Power Rank 4: Re-roll all 1s and 2s on my damage dice of my next hit. Each time I roll the maximum result on a damage die, roll that die again and add the result to my damage. If I roll the maximum result on a reroll, keep rolling and adding until I get a different result.\n   With my next hit, double all damage dice, this stacks with my critical hit.\nAdditionally, at 5th level, I gain a +1 bonus to my attack and damage rolls.",
				improvements : "Power Up: +1 Any;",
				scoresMaximum : [0, 22, 0, 0, 0, 0],
				action : ["action"],
			},
		},

		"ultra super" : {
			name : "Ultra Super",
			source : ["UM5R", 56],
			minlevel : 8,
			description : "\n   " + "I can also increase my power rank by 1 with a bonus action. Once I use this ability, I cannot use it again until I finish a short or long rest.",
			improvements : "Ultra Super: +2 Any or +1 Any two ability scores;",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action"],
		},

		"covert energy" : {
			name : "Covert Energy",
			source : ["UM5R", 56],
			minlevel : 12,
			description : "\n   " + "If I don't move from my spot starting on my turn, at the beginning of my next turn, I gain a power rank. Once I use this ability, I cannot use it again until I finish a short or long rest.",
			improvements : "Covert Energy: +2 Any or +1 Any two ability scores;",
			usages : 1,
			recovery : "short rest",
			extraAC : [{
				mod : 1,
				magic : false,
				text : "I add 1 to my AC.",
			}],
		},

		"vigorous surge" : {
			name : "Vigorous Surge",
			source : ["UM5R", 56],
			minlevel : 16,
			description : "\n   " + "After I roll for initiative, I start my first turn at power rank 1. Additionally, at 17th level, my bonus to my attack and damage rolls increases to +2 instead of +1",
			improvements : "Vigorous Surge: +2 Any or +1 Any two ability scores;",
		},

		"loses patience, finds anger" : {
			name : "Loses Patience, Finds Anger",
			source : ["UM5R", 56],
			minlevel : 19,
			description : "\n   " + "When I suffer a critical hit or am reduced to below half HP, I roll a d4, and add the result to my power rank. This can only occur once after I establish initiative.",
			improvements : "Loses Patience, Finds Anger: +1 Any;",
		},
	}
}

ClassList["civilian"] = {

	name : "Civilian",

	regExpSearch : /^(?=.*civilian).*$/i,

	source : ["UM5R", 59],

	primaryAbility : "Any",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	skills : ["\n\n" + toUni("Civilian") + ": Select any four skills and any two ability scores. I can choose to be proficient in any two skills and ability scores instead and gain a hero talent.", "\n\n" + toUni("Civilian") + ": None."],

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, false],
		[true, false, false]
	],

	equipment : "Citizen starting equipment:\n \u2022 $300 in gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"luck dice" : {
			name : "Luck Dice",
			source : ["UM5R", 60],
			minlevel : 1,
			description : "\n   " + "I gain the ability to affect my success rate at specific tasks based on factors I should realistically not have control over. I acquire d6s of different colors (mine do not have to be these colors, but whichever ones I use should be clearly identifiable and consistent). I will have the chance to acquire more and in different combinations of colors. Each color die is connected to a specific type of ability (see notes for more info).\n   Black   Defense\n   White   Speed\n   Green   Recovery\n   Red   Attack\n   Purple   Wild",
			toNotesPage : [{
				name : "Luck Dice Information",
				source : ["UM5R", 60],
				popupName : "Luck Dice Information",
				note : "\nI gain a number of luck dice based on my highest attribute score modifier (regardless which one it is) plus half my level (rounded up). I must possess at least one of each die before selecting duplicates at 1st level. Upon reaching a new level, my total dice pool can increase based on the new level and if my highest attribute score has improved. Whenever I gain additional luck dice, I can also swap out one previously selected die (even if it means removing my last die of a color), but these choices remain fixed until I gain a level again. For example, A character has a Charisma of 17 at 1st level and starts with 4 dice. The player chooses 1 defense (black), 1 attack (red), 1 wild (purple), and 1 recovery (green) dice. At 3rd level, the die pool increases to 5, the player replaces the green with a purple and adds a white. After rolling initiative, place my luck die in a cup or bag (referred to as the supply), randomly remove a number of dice based on my level (2 at 1st level) and roll them, these are my available dice to spend (my active dice), and once spent, are discarded and set aside. After finishing a short rest, I return spent dice to my die pool. Luck Dice can be spent to activate their color, or the die can be discarded to use the value on the die regardless of die color. Each color offers its own unique ability.\n   Dice Value: A die on its own, regardless of color, can be spent to modify any d20 roll (whether it be skill or attack) I make as part of the same action. I can roll first, check for success, and then decide whether or not to spend the luck die.\n   Combining Dice: Dice can be combined to increase the effect of an ability. By spending multiple dice, I compound the effect of the activated luck ability. The value on the initial spent die is not counted, but the values on additional dice do. Color-matched dice have their values doubled while unmatched colors are added unmodified. A wild die has no activatable functions, cannot be discarded on its own, but always acts as a matched die for the purposes of combining dice. For example, if I discard an attack die along with another attack die (indicating 3), a recovery (showing 5), and a wild die (showing 2), I add (3 * 2) + 5 + (2 * 2) = 15 to the attack die action. The first initial attack die does not add its value.\n   Black (Defense) Dice: When discarded as a reaction to an enemy hit on me, that attack misses.\n     Combined (Stumble): When combined, the attacker must make a Constitution save equal to the value +8, or be knocked prone.\n   White (Speed) Dice: I discard as a bonus action, and I can Disengage and move up to my speed.\n     Combined (Bolt): When combined, the value, rounded up to the nearest 5, is additional movement I can make this turn.\n   Green (Recovery) Dice: Discard a green along with a Hit Die as a bonus action and recover HP equal to the Hit Die's maximum value.\n     Combined (Heal): When combined, the value is additional HP I recover.\n   Red (Attack) Dice: I discard as part of an attack action to either turn a miss into a hit or a hit into a critical hit.\n     Combined (Wound): When combined, this value is added to my damage roll for this attack.\n   Purple (Wild) Dice: This die cannot be discarded on its own and can only be discarded with another die; however, its value is always doubled as if it were a matching die.",
			}]
		},

		"hero talents" : {
			name : "Hero Talents",
			source : ["UM5R", 60],
			minlevel : 1,
			description : "\n   " + "Starting 1st level, and then every two levels after that, I gain a hero talent. Unless otherwise stated, I can only select a hero talent once.",
			extraname : "Hero Talents",
			extrachoices : ["Born Lucky", "Bravely Run Away", "Comedy Sidekick", "Do I Feel Lucky", "Foolish Fortune", "Happy Accidents", "Improving The Odds", "It's All In The Reflexes", "Kismet", "Luck of the Whatever", "Lucky Star", "Make Your Own Luck", "Protagonist", "Stormtrooper Aim", "Stroke of Luck", "We're All Lucky"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 4 ? 2 : n < 6 ? 3 : n < 8 ? 4 : n < 10 ? 5 : n < 12 ? 6 : n < 14 ? 7 : n < 16 ? 9 : n < 18 ? 10 : n < 20 ? 11 : 12;
			}),
			"born lucky" : {
				name : "Born Lucky",
				description : "\n   " + "If I discard more than three additional luck dice via combining, I return one of my choice to my die supply.",
			},

			"bravely run away" : {
				name : "Bravely Run Away",
				description : "\n   " + "When activating a speed die, I can also stand up from prone for free; I also have advantage on escaping from a grapple until the beginning of my next turn.",
			},

			"comedy sidekick" : {
				name : "Comedy Sidekick",
				description : "\n   " + "Any time I roll a natural 1 with any dice (including damage rolls), I increase the value of one unused rolled luck die by 1 (maximum 6).",
			},

			"do i feel lucky" : {
				name : "Do I Feel Lucky",
				description : "\n   " + "When activating an attack die, I can also make one additional attack as part of the same action (it does not benefit from the attack die).",
			},

			"foolish fortune" : {
				name : "Foolish Fortune",
				description : "\n   " + "After rolling my luck dice after initiative, I select one and set the die result to 6.",
			},

			"happy accidents" : {
				name : "Happy Accidents",
				description : "\n   " + "When adding matched dice (from combining dice), increase the total result by 3.",
			},

			"improving the odds" : {
				name : "Improving The Odds",
				description : "\n   " + "Immediately after rolling luck dice after initiative, I increase all wild die results by 2 (maximum 6).",
			},

			"it's all in the reflexes" : {
				name : "It's All In The Reflexes",
				description : "\n   " + "Before making an ability check, as part of the same action, I take a random luck die from the supply and \"lock\" it on the player's character sheet, giving me advantage on my next ability check. I do not regain that locked die until I finish a long rest.",
			},

			"kismet" : {
				name : "Kismet",
				description : "\n   " + "I increase my luck die pool by 1. I can select this talent up to three times.",
			},

			"luck of the whatever" : {
				name : "Luck of the Whatever",
				description : "\n   " + "After rolling luck dice after initiative, I can re-roll up to two and take the higher value.",
			},

			"lucky star" : {
				name : "Lucky Star",
				description : "\n   " + "I increase my luck die draw by 1. I can select this talent twice.",
			},

			"make your own luck" : {
				name : "Make Your Own Luck",
				description : "\n   " + "I can spend a Hit Die as a bonus action to draw two additional luck dice from my supply. If my supply is empty, I cannot use this ability. I can select this talent a second time and increase the draw to three additional dice.",
			},

			"protagonist" : {
				name : "Protagonist",
				description : "\n   " + "When an ally I can see suffers a critical hit or is reduced to zero HP, I recover a spent luck die of my choice (I re-roll it immediately and add it back to my active dice).",
			},

			"stormtrooper aim" : {
				name : "Stormtrooper Aim",
				description : "\n   " + "When activating a defense die, I'm also counted as having taken the Dodge action (any attack rolls made against me have disadvantage until the start of my next turn).",
			},

			"stroke of luck" : {
				name : "Stroke of Luck",
				description : "\n   " + "Any time I roll a natural 20 (whether an ability check or an attack), I either return a spent luck die to my supply or draw one luck die from the supply.",
			},

			"we're all lucky" : {
				name : "We're All Lucky",
				description : "\n   " + "When activating a recovery die, one ally within 5 feet of me can also spend a Hit Die and recover that die's maximum value (the ally does not gain the benefit of combining dice).",
			},
		},

		"avoidance" : {
			name : "Avoidance",
			source : ["UM5R", 61],
			minlevel : 2,
			description : "\n   " + "As long as I'm wearing no armor, I gain a +1 bonus to AC. This increases to +2 at 6th level, +3 at 10th level, and +4 at 14th level.",
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 61],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"chosen one" : {
			name : "Chosen One",
			source : ["UM5R", 61],
			minlevel : 20,
			description : "\n   " + "If I'm reduced to 0 HP, but are then healed before taking a short rest, I return all spent luck dice to the supply and draw again as if I just rolled initiative. Once I use this ability, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["civilian, archetypeless"] = {

	name : "Civilian, Archetypeless",

	regExpSearch : /^(?=.*civilian)(?=.*archetypeless).*$/i,

	source : ["UM5R", 59],

	primaryAbility : "Any",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	skills : ["\n\n" + toUni("Civilian") + ": Select any four skills and any two ability scores. I can choose to be proficient in any two skills and ability scores instead and gain a hero talent.", "\n\n" + toUni("Civilian") + ": None."],

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, false],
		[true, false, false]
	],

	equipment : "Citizen starting equipment:\n \u2022 $300 in gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"luck dice" : {
			name : "Luck Dice",
			source : ["UM5R", 60],
			minlevel : 1,
			description : "\n   " + "I gain the ability to affect my success rate at specific tasks based on factors I should realistically not have control over. I acquire d6s of different colors (mine do not have to be these colors, but whichever ones I use should be clearly identifiable and consistent). I will have the chance to acquire more and in different combinations of colors. Each color die is connected to a specific type of ability (see notes for more info).\n   Black   Defense\n   White   Speed\n   Green   Recovery\n   Red   Attack\n   Purple   Wild",
			toNotesPage : [{
				name : "Luck Dice Information",
				source : ["UM5R", 60],
				popupName : "Luck Dice Information",
				note : "\nI gain a number of luck dice based on my highest attribute score modifier (regardless which one it is) plus half my level (rounded up). I must possess at least one of each die before selecting duplicates at 1st level. Upon reaching a new level, my total dice pool can increase based on the new level and if my highest attribute score has improved. Whenever I gain additional luck dice, I can also swap out one previously selected die (even if it means removing my last die of a color), but these choices remain fixed until I gain a level again. For example, A character has a Charisma of 17 at 1st level and starts with 4 dice. The player chooses 1 defense (black), 1 attack (red), 1 wild (purple), and 1 recovery (green) dice. At 3rd level, the die pool increases to 5, the player replaces the green with a purple and adds a white. After rolling initiative, place my luck die in a cup or bag (referred to as the supply), randomly remove a number of dice based on my level (2 at 1st level) and roll them, these are my available dice to spend (my active dice), and once spent, are discarded and set aside. After finishing a short rest, I return spent dice to my die pool. Luck Dice can be spent to activate their color, or the die can be discarded to use the value on the die regardless of die color. Each color offers its own unique ability.\n   Dice Value: A die on its own, regardless of color, can be spent to modify any d20 roll (whether it be skill or attack) I make as part of the same action. I can roll first, check for success, and then decide whether or not to spend the luck die.\n   Combining Dice: Dice can be combined to increase the effect of an ability. By spending multiple dice, I compound the effect of the activated luck ability. The value on the initial spent die is not counted, but the values on additional dice do. Color-matched dice have their values doubled while unmatched colors are added unmodified. A wild die has no activatable functions, cannot be discarded on its own, but always acts as a matched die for the purposes of combining dice. For example, if I discard an attack die along with another attack die (indicating 3), a recovery (showing 5), and a wild die (showing 2), I add (3 * 2) + 5 + (2 * 2) = 15 to the attack die action. The first initial attack die does not add its value.\n   Black (Defense) Dice: When discarded as a reaction to an enemy hit on me, that attack misses.\n     Combined (Stumble): When combined, the attacker must make a Constitution save equal to the value +8, or be knocked prone.\n   White (Speed) Dice: I discard as a bonus action, and I can Disengage and move up to my speed.\n     Combined (Bolt): When combined, the value, rounded up to the nearest 5, is additional movement I can make this turn.\n   Green (Recovery) Dice: Discard a green along with a Hit Die as a bonus action and recover HP equal to the Hit Die's maximum value.\n     Combined (Heal): When combined, the value is additional HP I recover.\n   Red (Attack) Dice: I discard as part of an attack action to either turn a miss into a hit or a hit into a critical hit.\n     Combined (Wound): When combined, this value is added to my damage roll for this attack.\n   Purple (Wild) Dice: This die cannot be discarded on its own and can only be discarded with another die; however, its value is always doubled as if it were a matching die.",
			}]
		},

		"hero talents" : {
			name : "Hero Talents",
			source : ["UM5R", 60],
			minlevel : 1,
			description : "\n   " + "Starting 1st level, and then every two levels after that, I gain a hero talent. Unless otherwise stated, I can only select a hero talent once.",
			extraname : "Hero Talents",
			extrachoices : ["Born Lucky", "Bravely Run Away", "Comedy Sidekick", "Do I Feel Lucky", "Foolish Fortune", "Happy Accidents", "Improving The Odds", "It's All In The Reflexes", "Kismet", "Luck of the Whatever", "Lucky Star", "Make Your Own Luck", "Protagonist", "Stormtrooper Aim", "Stroke of Luck", "We're All Lucky"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 3 ? 2 : n < 4 ? 3 : n < 6 ? 4 : n < 7 ? 5 : n < 8 ? 6 : n < 10 ? 7 : n < 11 ? 8 : n < 12 ? 9 : n < 14 ? 10 : n < 15 ? 11 : n < 16 ? 12 : n < 18 ? 14 : n < 20 ? 15 : 16;
			}),
			"born lucky" : {
				name : "Born Lucky",
				description : "\n   " + "If I discard more than three additional luck dice via combining, I return one of my choice to my die supply.",
			},

			"bravely run away" : {
				name : "Bravely Run Away",
				description : "\n   " + "When activating a speed die, I can also stand up from prone for free; I also have advantage on escaping from a grapple until the beginning of my next turn.",
			},

			"comedy sidekick" : {
				name : "Comedy Sidekick",
				description : "\n   " + "Any time I roll a natural 1 with any dice (including damage rolls), I increase the value of one unused rolled luck die by 1 (maximum 6).",
			},

			"do i feel lucky" : {
				name : "Do I Feel Lucky",
				description : "\n   " + "When activating an attack die, I can also make one additional attack as part of the same action (it does not benefit from the attack die).",
			},

			"foolish fortune" : {
				name : "Foolish Fortune",
				description : "\n   " + "After rolling my luck dice after initiative, I select one and set the die result to 6.",
			},

			"happy accidents" : {
				name : "Happy Accidents",
				description : "\n   " + "When adding matched dice (from combining dice), increase the total result by 3.",
			},

			"improving the odds" : {
				name : "Improving The Odds",
				description : "\n   " + "Immediately after rolling luck dice after initiative, I increase all wild die results by 2 (maximum 6).",
			},

			"it's all in the reflexes" : {
				name : "It's All In The Reflexes",
				description : "\n   " + "Before making an ability check, as part of the same action, I take a random luck die from the supply and \"lock\" it on the player's character sheet, giving me advantage on my next ability check. I do not regain that locked die until I finish a long rest.",
			},

			"kismet" : {
				name : "Kismet",
				description : "\n   " + "I increase my luck die pool by 1. I can select this talent up to three times.",
			},

			"luck of the whatever" : {
				name : "Luck of the Whatever",
				description : "\n   " + "After rolling luck dice after initiative, I can re-roll up to two and take the higher value.",
			},

			"lucky star" : {
				name : "Lucky Star",
				description : "\n   " + "I increase my luck die draw by 1. I can select this talent twice.",
			},

			"make your own luck" : {
				name : "Make Your Own Luck",
				description : "\n   " + "I can spend a Hit Die as a bonus action to draw two additional luck dice from my supply. If my supply is empty, I cannot use this ability. I can select this talent a second time and increase the draw to three additional dice.",
			},

			"protagonist" : {
				name : "Protagonist",
				description : "\n   " + "When an ally I can see suffers a critical hit or is reduced to zero HP, I recover a spent luck die of my choice (I re-roll it immediately and add it back to my active dice).",
			},

			"stormtrooper aim" : {
				name : "Stormtrooper Aim",
				description : "\n   " + "When activating a defense die, I'm also counted as having taken the Dodge action (any attack rolls made against me have disadvantage until the start of my next turn).",
			},

			"stroke of luck" : {
				name : "Stroke of Luck",
				description : "\n   " + "Any time I roll a natural 20 (whether an ability check or an attack), I either return a spent luck die to my supply or draw one luck die from the supply.",
			},

			"we're all lucky" : {
				name : "We're All Lucky",
				description : "\n   " + "When activating a recovery die, one ally within 5 feet of me can also spend a Hit Die and recover that die's maximum value (the ally does not gain the benefit of combining dice).",
			},
		},

		"avoidance" : {
			name : "Avoidance",
			source : ["UM5R", 61],
			minlevel : 2,
			description : "\n   " + "As long as I'm wearing no armor, I gain a +1 bonus to AC. This increases to +2 at 6th level, +3 at 10th level, and +4 at 14th level.",
		},

		"chosen one" : {
			name : "Chosen One",
			source : ["UM5R", 61],
			minlevel : 20,
			description : "\n   " + "If I'm reduced to 0 HP, but are then healed before taking a short rest, I return all spent luck dice to the supply and draw again as if I just rolled initiative. Once I use this ability, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["face"] = {

	name : "Face",

	regExpSearch : /^(?=.*face).*$/i,

	source : ["UM5R", 62],

	primaryAbility : "Charisma",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis", "Cha"],

	skills : ["\n\n" + toUni("Face") + ": Insight, Perception, and any four skills from either Computer Use, Engineering, History, Investigation, Performance, Persuasion, Sciences, or Stealth.", "\n\n" + toUni("Face") + ": None."],

	toolProfs : {
		primary : [["Disguise kit"], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Face starting equipment:\n \u2022 A one-handed small arm costing $300 or less;\n \u2022 A set of light armor $300 or less;\n \u2022 A ground vehicle with a value of $30,000 or less;\n \u2022 A disguise kit;\n \u2022 $200 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	abilitySave : 6,

	features : {

		"bulletproof ego" : {
			name : "Bulletproof Ego",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "As long as I wear light or no armor, I gain a bonus to AC equal to half my proficiency bonus (rounded down).",
		},

		"double your efforts" : {
			name : "Double Your Efforts",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "I can make a DC 15 Perception check as a bonus action; if I pass, I can take an additional action on top of my regular action. I cannot use the Attack action with this extra action. I can do this once per turn.",
			action : ["bonus action"],
		},

		"life insurance" : {
			name : "Life Insurance",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during rests, I can expend them to gain an edge when required. I spend a Hit Die on my turn, regain no HP, and I gain the following benefits (this requires no action).\n   I automatically pass the \"Double Your Efforts\" skill check to gain the additional action.\n   I have advantage on all attack rolls, ability checks, and skill checks until the beginning of my next turn.\n   Any Charisma saving throws I force a target to make before the end of my next turn gains a +5 bonus to the DC",
			action : ["bonus action"],
		},

		"way of the protagonist" : {
			name : "Way of the Protagonist",
			source : ["UM5R", 63],
			minlevel : 1,
			description : "\n   " + "I begin developing skills enabling me to manipulate people through force of while, a winning smile, and the right sequence of words. I gain two Protagonist Traits at 1st level, gaining an additional trait at 5th, 10th, 15th, and 20th level.",
			extraname : "Protagonist Traits",
			extrachoices : ["Biting Taunt", "Cognitive Empathy", "Faceman", "Fascination", "Iceman", "Know The Signs", "Mind Twist", "Poker Face", "Polyglot", "Possible Sociopath", "Veneer", "Winning Smile"],
			extraTimes : levels.map(function (n) {
				return n < 1 ? 1 : n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6;
			}),
			"biting taunt" : {
				name : "Biting Taunt",
				description : "\n   " + "As an action, I can target an enemy that can hear and understand me. It makes a Charisma saving throw. If the target fails, it has disadvantage on attack rolls and ability checks until the beginning of my next turn. A target that succeeds on the DC has advantage on additional saving throws against this effect until I finish a long rest.",
				action : ["action"],
			},

			"cognitive empathy" : {
				name : "Cognitive Empathy",
				description : "\n   " + "As an action, I can focus my mind on any one creature that I can see within 30 feet of me and that has an Intelligence of 4 or higher. It makes a Charisma saving throw. If it fails, I learn the surface thoughts of the creature, what it is most likely to do in the immediate future, and what could possibly be on its mind. I also gain insight into its reasoning (if any) and/or its emotional state. This effect lasts until the end of my next turn or until I break line of sight.",
				action : ["action"],
			},

			"faceman" : {
				name : "Faceman",
				description : "\n   " + "I select one Intelligence, Wisdom, or Charisma skill or one item proficiency. As an action, I double my proficiency bonus with the next check made with that skill or item. I can select faceman a second time and select another skill or item.",
				action : ["action"],
			},

			"fascination" : {
				name : "Fascination",
				description : "\n   " + "As an action, I can attempt to charm a target. It must be able to hear and understand me. It makes a Charisma saving throw. If it fails, the creature is not only charmed by me, but by all my allies the target can see. The charmed effect ends if the target suffers damage or five minutes have passed. When I use this feature, I cannot use it again until I finish a long rest. If the target makes the saving throw, I recover the use of Fascination, but cannot use it against the same target until I finish a long rest. I can select Fascination a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"iceman" : {
				name : "Iceman",
				description : "\n   " + "If I suffer a critical hit, I regain 1 spent Hit Die.",
			},

			"know the signs" : {
				name : "Know The Signs",
				description : "\n   " + "I have advantage against any Wisdom and Charisma saving throws.",
				advantages : [
					["Wisdom", true],
					["Charisma", true]
				],
			},

			"mind twist" : {
				name : "Mind Twist",
				description : "\n   " + "As an action, I can target an enemy that can hear and understand me. It makes a Charisma saving throw. If the target fails, it is stunned until the beginning of my next turn. When I use this feature, you cannot use it again until I finish a long rest. If the target makes the saving throw, I recover the use of Mind Twist, but cannot use it against the same target until I finish a long rest. I can select Mind Twist a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"poker face" : {
				name : "Poker Face",
				description : "\n   " + "I'm immune to being frightened or charmed. Additionally, all allies that can see me have advantage against being frightened or charmed as well.",
				savetxt : {

					immune : ["charmed", "frightened"]
				},
			},

			"polyglot" : {
				name : "Polyglot",
				description : "\n   " + "I learn three additional languages. I also gain one additional language every three levels from now on.",
				languageProfs : 3,
			},

			"possible sociopath" : {
				name : "Possible Sociopath",
				description : "\n   " + "I have resistance to psychic damage, as well as having advantage on saving throws against any effect that would sense my emotions or read my thoughts.",
				dmgres : ["Psychic"],
			},

			"veneer" : {
				name : "Veneer",
				description : "\n   " + "A disguise kit is only the beginning; outside of clothing and make-up, I can now alter my voice and mannerisms. I can also mimic specific people. If attempting a generic person, the disguise is near flawless (I have advantage on the disguise kit). Regardless, if I'm mimicking a specific or generic person, if my ability check to create a visual disguise is less than my Charisma saving throw DC, I can use that instead.",
			},

			"winning smile" : {
				name : "Winning Smile",
				description : "\n   " + "Before making a skill check for a skill I'm proficient with, I can instead set my roll to my ability score. When I use Winning Smile, I cannot use it again until I finish a long rest. I can select Winning Smile a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
			},
		},

		"hustle pool" : {
			name : "Hustle Pool",
			source : ["UM5R", 64],
			minlevel : 2,
			description : "\n   " + "I can alter the natural of any non-attack d20 roll I make. I gain a pool equal to double my Charisma modifier and can pull from said pool to modify the result of a d20 roll I just made. My hustle pool refills after I finish a long rest.",
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 64],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"automatic improvisation" : {
			name : "Automatic Improvisation",
			source : ["UM5R", 64],
			minlevel : 6,
			description : "\n   " + "I can spend a Hit Die as a bonus action to gain proficiency with a tool for one minute (including musical instruments). At 20th level, this improves, and I have proficiency with all tools, all the time (no need to spend hit dice).",
		},

		"make them flinch" : {
			name : "Make Them Flinch",
			source : ["UM5R", 64],
			minlevel : 13,
			description : "\n   " + "I can force a creature that made a Charisma saving throw I imposed to re-roll. When I use this feature, I cannot use it again until I finish a long rest. If the target still succeeds on the saving throw, I recover the use of Make Them Flinch, but cannot use it against the same target until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["face, archetypeless"] = {

	name : "Face, Archetypeless",

	regExpSearch : /^(?=.*face)(?=.*archetypeless).*$/i,

	source : ["UM5R", 62],

	primaryAbility : "Charisma",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis", "Cha"],

	skills : ["\n\n" + toUni("Face") + ": Insight, Perception, and any four skills from either Computer Use, Engineering, History, Investigation, Performance, Persuasion, Sciences, or Stealth.", "\n\n" + toUni("Face") + ": None."],

	toolProfs : {
		primary : [["Disguise kit"], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Face starting equipment:\n \u2022 A one-handed small arm costing $300 or less;\n \u2022 A set of light armor $300 or less;\n \u2022 A ground vehicle with a value of $30,000 or less;\n \u2022 A disguise kit;\n \u2022 $200 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	abilitySave : 6,

	features : {

		"bulletproof ego" : {
			name : "Bulletproof Ego",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "As long as I wear light or no armor, I gain a bonus to AC equal to half my proficiency bonus (rounded down).",
		},

		"double your efforts" : {
			name : "Double Your Efforts",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "I can make a DC 15 Perception check as a bonus action; if I pass, I can take an additional action on top of my regular action. I cannot use the Attack action with this extra action. I can do this once per turn.",
			action : ["bonus action"],
		},

		"life insurance" : {
			name : "Life Insurance",
			source : ["UM5R", 62],
			minlevel : 1,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during rests, I can expend them to gain an edge when required. I spend a Hit Die on my turn, regain no HP, and I gain the following benefits (this requires no action).\n   I automatically pass the \"Double Your Efforts\" skill check to gain the additional action.\n   I have advantage on all attack rolls, ability checks, and skill checks until the beginning of my next turn.\n   Any Charisma saving throws I force a target to make before the end of my next turn gains a +5 bonus to the DC",
			action : ["bonus action"],
		},

		"way of the protagonist" : {
			name : "Way of the Protagonist",
			source : ["UM5R", 63],
			minlevel : 1,
			description : "\n   " + "I begin developing skills enabling me to manipulate people through force of while, a winning smile, and the right sequence of words. I gain two Protagonist Traits at 1st level, gaining an additional trait at 5th, 10th, 15th, and 20th level.",
			extraname : "Protagonist Traits",
			extrachoices : ["Biting Taunt", "Cognitive Empathy", "Faceman", "Fascination", "Iceman", "Know The Signs", "Mind Twist", "Poker Face", "Polyglot", "Possible Sociopath", "Veneer", "Winning Smile"],
			extraTimes : levels.map(function (n) {
				return n < 1 ? 1 : n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 10 ? 5 : n < 11 ? 6 : n < 15 ? 8 : n < 18 ? 9 : n < 20 ? 10 : 11;
			}),
			"biting taunt" : {
				name : "Biting Taunt",
				description : "\n   " + "As an action, I can target an enemy that can hear and understand me. It makes a Charisma saving throw. If the target fails, it has disadvantage on attack rolls and ability checks until the beginning of my next turn. A target that succeeds on the DC has advantage on additional saving throws against this effect until I finish a long rest.",
				action : ["action"],
			},

			"cognitive empathy" : {
				name : "Cognitive Empathy",
				description : "\n   " + "As an action, I can focus my mind on any one creature that I can see within 30 feet of me and that has an Intelligence of 4 or higher. It makes a Charisma saving throw. If it fails, I learn the surface thoughts of the creature, what it is most likely to do in the immediate future, and what could possibly be on its mind. I also gain insight into its reasoning (if any) and/or its emotional state. This effect lasts until the end of my next turn or until I break line of sight.",
				action : ["action"],
			},

			"faceman" : {
				name : "Faceman",
				description : "\n   " + "I select one Intelligence, Wisdom, or Charisma skill or one item proficiency. As an action, I double my proficiency bonus with the next check made with that skill or item. I can select faceman a second time and select another skill or item.",
				action : ["action"],
			},

			"fascination" : {
				name : "Fascination",
				description : "\n   " + "As an action, I can attempt to charm a target. It must be able to hear and understand me. It makes a Charisma saving throw. If it fails, the creature is not only charmed by me, but by all my allies the target can see. The charmed effect ends if the target suffers damage or five minutes have passed. When I use this feature, I cannot use it again until I finish a long rest. If the target makes the saving throw, I recover the use of Fascination, but cannot use it against the same target until I finish a long rest. I can select Fascination a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"iceman" : {
				name : "Iceman",
				description : "\n   " + "If I suffer a critical hit, I regain 1 spent Hit Die.",
			},

			"know the signs" : {
				name : "Know The Signs",
				description : "\n   " + "I have advantage against any Wisdom and Charisma saving throws.",
				advantages : [
					["Wisdom", true],
					["Charisma", true]
				],
			},

			"mind twist" : {
				name : "Mind Twist",
				description : "\n   " + "As an action, I can target an enemy that can hear and understand me. It makes a Charisma saving throw. If the target fails, it is stunned until the beginning of my next turn. When I use this feature, you cannot use it again until I finish a long rest. If the target makes the saving throw, I recover the use of Mind Twist, but cannot use it against the same target until I finish a long rest. I can select Mind Twist a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"poker face" : {
				name : "Poker Face",
				description : "\n   " + "I'm immune to being frightened or charmed. Additionally, all allies that can see me have advantage against being frightened or charmed as well.",
				savetxt : {

					immune : ["charmed", "frightened"]
				},
			},

			"polyglot" : {
				name : "Polyglot",
				description : "\n   " + "I learn three additional languages. I also gain one additional language every three levels from now on.",
				languageProfs : 3,
			},

			"possible sociopath" : {
				name : "Possible Sociopath",
				description : "\n   " + "I have resistance to psychic damage, as well as having advantage on saving throws against any effect that would sense my emotions or read my thoughts.",
				dmgres : ["Psychic"],
			},

			"veneer" : {
				name : "Veneer",
				description : "\n   " + "A disguise kit is only the beginning; outside of clothing and make-up, I can now alter my voice and mannerisms. I can also mimic specific people. If attempting a generic person, the disguise is near flawless (I have advantage on the disguise kit). Regardless, if I'm mimicking a specific or generic person, if my ability check to create a visual disguise is less than my Charisma saving throw DC, I can use that instead.",
			},

			"winning smile" : {
				name : "Winning Smile",
				description : "\n   " + "Before making a skill check for a skill I'm proficient with, I can instead set my roll to my ability score. When I use Winning Smile, I cannot use it again until I finish a long rest. I can select Winning Smile a second time and gain a second use before finishing a long rest.",
				usages : 1,
				recovery : "long rest",
			},
		},

		"hustle pool" : {
			name : "Hustle Pool",
			source : ["UM5R", 64],
			minlevel : 2,
			description : "\n   " + "I can alter the natural of any non-attack d20 roll I make. I gain a pool equal to double my Charisma modifier and can pull from said pool to modify the result of a d20 roll I just made. My hustle pool refills after I finish a long rest.",
		},

		"automatic improvisation" : {
			name : "Automatic Improvisation",
			source : ["UM5R", 64],
			minlevel : 6,
			description : "\n   " + "I can spend a Hit Die as a bonus action to gain proficiency with a tool for one minute (including musical instruments). At 20th level, this improves, and I have proficiency with all tools, all the time (no need to spend hit dice).",
		},

		"make them flinch" : {
			name : "Make Them Flinch",
			source : ["UM5R", 64],
			minlevel : 13,
			description : "\n   " + "I can force a creature that made a Charisma saving throw I imposed to re-roll. When I use this feature, I cannot use it again until I finish a long rest. If the target still succeeds on the saving throw, I recover the use of Make Them Flinch, but cannot use it against the same target until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["grounder"] = {

	name : "Grounder",

	regExpSearch : /^(?=.*grounder).*$/i,

	source : ["UM5R", 65],

	primaryAbility : "Strength and Dexterity",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Dex"],

	skills : ["\n\n" + toUni("Grounder") + ": Select two skills from Acrobatics, Athletics, History, Insight, Intimidation, or Perception.", "\n\n" + toUni("Grounder") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, true, true],
		[true, true, true, true]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],
		[true, false, false]
	],

	equipment : "Grounder starting equipment:\n \u2022 Three small arms, each $300 or less;\n \u2022 Two Concussion Grenades;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],

	features : {

		"fire support" : {
			name : "Fire Support",
			source : ["UM5R", 65],
			minlevel : 1,
			description : "\n   " + "I can select a fire support discipline. There are two to choose from: assault or precision. By pursuing assault, I favor automatic weapons that fire multiple rounds, increasing damage at the risk of accuracy. By selecting precision, I keep my weapon firing single rounds, ensuring a hit without wasting ammunition.",
			extraname : "Fire Support Disciplines",
			extrachoices : ["Assault - Tier 1", "Assault - Tier 2", "Assault - Tier 3", "Assault - Tier 4", "Assault - Tier 5", "Precision - Tier 1", "Precision - Tier 2", "Precision - Tier 3", "Precision - Tier 4", "Precision - Tier 5"],
			extraTimes : levels.map(function (n) {
				return n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5;
			}),
			"assault - tier 1" : {
				name : "Assault - Tier 1",
				description : "\n   " + "Whenever I make an autofire attack, I inflict additional damage equal to the amount I beat the enemy's AC by, up to a maximum of 5 (for an auto weapon) or 10 (for an auto-heavy weapon).",
			},

			"assault - tier 2" : {
				name : "Assault - Tier 2",
				description : "\n   " + "If I hit, I can increase my final attack roll for the purposes of this path (up to a maximum value based on your type of weapon from tier 1).\n   Auto: +2 to my attack roll after I hit.\n   Auto-Heavy: +4 to my attack roll after I hit.",
			},

			"assault - tier 3" : {
				name : "Assault - Tier 3",
				description : "\n   " + "If I hit, I can increase my final attack roll for purposes of this path (up to a maximum value based on your type of weapon from tier 1). This replaces the values from Tier 2.\n   Auto: +4 to my attack roll after I hit.\n   Auto-Heavy: +8 to my attack roll after I hit.",
			},

			"assault - tier 4" : {
				name : "Assault - Tier 4",
				description : "\n   " + "The maximum upper limit on damage with this path doubles (10 (for an auto weapon) or 20 (for an auto-heavy weapon).",
			},

			"assault - tier 5" : {
				name : "Assault - Tier 5",
				description : "\n   " + "If I hit, I can increase my final attack roll for purposes of this path (up to a maximum value based on your type of weapon from tier 1). This replaces the values from Tier 3.\n   Auto: +8 to my attack roll after I hit.\n   Auto-Heavy: +16 to my attack roll after I hit.",
			},

			"precision - tier 1" : {
				name : "Precision - Tier 1",
				description : "\n   " + "I gain a +1 bonus to all non-autofire firearm attack rolls.",
			},

			"precision - tier 2" : {
				name : "Precision - Tier 2",
				description : "\n   " + "If I score a critical hit with a non-autofire firearm attack, I roll all damage dice three times instead of twice.",
			},

			"precision - tier 3" : {
				name : "Precision - Tier 3",
				description : "\n   " + "I set aside a natural 20. I can replace one missed attack roll I make with a non-autofire firearm with that natural 20. Once I do, I cannot set aside another natural 20 until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
			},

			"precision - tier 4" : {
				name : "Precision - Tier 4",
				description : "\n   " + "If I roll a natural 2 or 3 on a non-autofire firearm attack, I can re-roll.",
			},

			"precision - tier 5" : {
				name : "Precision - Tier 5",
				description : "\n   " + "I have advantage on non-autofire firearm attack rolls.",
			},
		},

		"brotherhood" : {
			name : "Brotherhood",
			source : ["UM5R", 66],
			minlevel : 1,
			description : "\n   " + "I select one of the following These abilities complement the group I'm in, rewarding teamwork over selfish ambitions. I select additional abilities at 4th, 7th, 10th, 13th, 16th, and 19th level.",
			extraname : "Brotherhood Abilities",
			extrachoices : ["Action Star", "Cauterize", "Combat Ineffective", "Comrades In Arms", "Covering Fire", "For The Common Honor", "Front Line Deployment", "Jump In Front", "Man Down", "Member of a Team", "Slow Is Smooth", "Snap Out Of It", "Solid Frame", "Spotter", "Toss Magezine"],
			extraTimes : levels.map(function (n) {
				return n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7;
			}),
			"action star" : {
				name : "Action Star",
				description : "\n   " + "If I score a hit on a creature 20 feet or closer, I can elect to piss said creature off. It now suffers disadvantage on all attack rolls that don't include me as a target. The effect ends if I move out of range or out of line of sight (like behind total cover), or don't attack the same target before the end of my next turn (I don't need to hit, just attack).",
			},

			"cauterize" : {
				name : "Cauterize",
				description : "\n   " + "I can use my action to heal an injured ally. The target recovers HP equal to 1d6 per grounder level. When I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"combat ineffective" : {
				name : "Combat Ineffective",
				description : "\n   " + "If an allied character in line of sight is reduced to 0 HP or less, I have advantage on attack rolls against the creature that hit the ally until the creature is destroyed or until the felled ally recovers HP.",
			},

			"comrades in arms" : {
				name : "Comrades In Arms",
				description : "\n   " + "If an ally within 10 feet of me suffers a critical hit, I have advantage on attack rolls against the creature that made that attack until the end of my next turn.",
			},

			"covering fire" : {
				name : "Covering Fire",
				description : "\n   " + "When making an Attack action I can suffer disadvantage on all attack rolls for that action. After finishing my attack, all allies in line of sight gain a +1 bonus to AC and advantage on all saving throws against any target I attack until the beginning of my next turn.",
			},

			"for the common honor" : {
				name : "For The Common Honor",
				description : "\n   " + "If an ally within 5 feet of me suffers a hit from an enemy, as a reaction, I can swap locations with the ally and suffer the hit and all effects instead.",
				action : ["reaction"],
			},

			"front line deployment" : {
				name : "Front Line Deployment",
				description : "\n   " + "I select one ally within 10 feet as a bonus action. Until the beginning of my next turn, the targeted ally gains a +1 bonus to AC.",
				action : ["bonus action"],
			},

			"jump in front" : {
				name : "Jump In Front",
				description : "\n   " + "If me and at least one ally is struck by an area effect no bigger than 60 feet across, as a reaction, I can push my allies out of the target area. However, I'm then targeted by the effect a number of times equal to the number of allies I pushed. I can still make saving throw to the effect, but for each attack on me. When I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["reaction"],
			},

			"man down" : {
				name : "Man Down",
				description : "\n   " + "If I occupy the same space as a dead, prone, or unconscious ally, the ally cannot be targeted by any ranged or melee attacks and automatically passes all Dexterity saving throws. The effect ends if the target stands, if I leave the target's area, or if the target makes any kind of attack.",
			},

			"member of a team" : {
				name : "Member of a Team",
				description : "\n   " + "I can spend 30 feet of movement and select an ally within 5 feet. That ally can use the Disengage action without using their action on their next turn.",
			},

			"slow is smooth" : {
				name : "Slow Is Smooth",
				description : "\n   " + "When I move, I can reduce my speed by 10 feet and pull one ally within 5 feet with me. If I use the Disengage action, the ally also disengages.",
			},

			"snap out of it" : {
				name : "Snap Out Of It",
				description : "\n   " + "I use m yaction to remove one of the following conditions an ally suffers from (unless I suffer from the same condition): charmed, frightened, stunned, or unconscious (unless dying). When I use this feature, I cannot use it again until you finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"solid frame" : {
				name : "Solid Frame",
				description : "\n   " + "When wielding a two-handed small arm, I do not suffer the -2 penalty to firing while moving.",
			},

			"spotter" : {
				name : "Spotter",
				description : "\n   " + "I target an enemy in line of sight with my action; one ally within 5 feet of me has advantage on their next attack roll against the target.",
				action : ["action"],
			},

			"toss magezine" : {
				name : "Toss Magezine",
				description : "\n   " + "I can spend 30 feet of movement and reload an ally's weapon. The ally must be within 10 feet, and I must have the proper ammunition or cell.",
			},
		},

		"take a knee" : {
			name : "Take A Knee",
			source : ["UM5R", 67],
			minlevel : 2,
			description : "\n   " + "I can crouch quickly and brace my elbow against my knee for a secured firing position, spending 30 feet of movement and making one ranged attack. I cannot use this feature if you are within reach of an enemy or an enemy is in reach of me. At 5th level, this movement cost is reduced to 25 feet, reducing to 20 feet at 13th level, and 15 feet at 17th level.",
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 67],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"meat shield" : {
			name : "Meat Shield",
			source : ["UM5R", 67],
			minlevel : 10,
			description : "\n   " + "As a reaction, or part of my action if on my turn, when a creature within 5 feet is killed or otherwise incapacitated, I grab it; it now grants me half-cover until I move. If using a two-handed small arm, I suffer a -1 penalty to attack rolls while holding the target. I cannot use a heavy or super heavy weapon with Meat Shield. I also cannot use Meat Shield with \"Take A Knee\".",
			action : ["reaction"],
		},

		"all in" : {
			name : "All In",
			source : ["UM5R", 67],
			minlevel : 20,
			description : "\n   " + "If I hit an enemy, I can empty a full magazine to ensure a messy kill. I double the number of attacks I make with an Attack action against a single target. When I use this feature, I cannot use it again until I finish a short or long rest. That weapon is also out of ammunition.",
			usages : 1,
			recovery : "short rest",
		},
	}
}

ClassList["grounder, archetypeless"] = {

	name : "Grounder, Archetypeless",

	regExpSearch : /^(?=.*grounder)(?=.*archetypeless).*$/i,

	source : ["UM5R", 65],

	primaryAbility : "Strength and Dexterity",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Dex"],

	skills : ["\n\n" + toUni("Grounder") + ": Select two skills from Acrobatics, Athletics, History, Insight, Intimidation, or Perception.", "\n\n" + toUni("Grounder") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, true, true],
		[true, true, true, true]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],
		[true, false, false]
	],

	equipment : "Grounder starting equipment:\n \u2022 Three small arms, each $300 or less;\n \u2022 Two Concussion Grenades;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],

	features : {

		"fire support" : {
			name : "Fire Support",
			source : ["UM5R", 65],
			minlevel : 1,
			description : "\n   " + "I can select a fire support discipline. There are two to choose from: assault or precision. By pursuing assault, I favor automatic weapons that fire multiple rounds, increasing damage at the risk of accuracy. By selecting precision, I keep my weapon firing single rounds, ensuring a hit without wasting ammunition.",
			extraname : "Fire Support Disciplines",
			extrachoices : ["Assault - Tier 1", "Assault - Tier 2", "Assault - Tier 3", "Assault - Tier 4", "Assault - Tier 5", "Precision - Tier 1", "Precision - Tier 2", "Precision - Tier 3", "Precision - Tier 4", "Precision - Tier 5"],
			extraTimes : levels.map(function (n) {
				return n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5;
			}),
			"assault - tier 1" : {
				name : "Assault - Tier 1",
				description : "\n   " + "Whenever I make an autofire attack, I inflict additional damage equal to the amount I beat the enemy's AC by, up to a maximum of 5 (for an auto weapon) or 10 (for an auto-heavy weapon).",
			},

			"assault - tier 2" : {
				name : "Assault - Tier 2",
				description : "\n   " + "If I hit, I can increase my final attack roll for the purposes of this path (up to a maximum value based on your type of weapon from tier 1).\n   Auto: +2 to my attack roll after I hit.\n   Auto-Heavy: +4 to my attack roll after I hit.",
			},

			"assault - tier 3" : {
				name : "Assault - Tier 3",
				description : "\n   " + "If I hit, I can increase my final attack roll for purposes of this path (up to a maximum value based on your type of weapon from tier 1). This replaces the values from Tier 2.\n   Auto: +4 to my attack roll after I hit.\n   Auto-Heavy: +8 to my attack roll after I hit.",
			},

			"assault - tier 4" : {
				name : "Assault - Tier 4",
				description : "\n   " + "The maximum upper limit on damage with this path doubles (10 (for an auto weapon) or 20 (for an auto-heavy weapon).",
			},

			"assault - tier 5" : {
				name : "Assault - Tier 5",
				description : "\n   " + "If I hit, I can increase my final attack roll for purposes of this path (up to a maximum value based on your type of weapon from tier 1). This replaces the values from Tier 3.\n   Auto: +8 to my attack roll after I hit.\n   Auto-Heavy: +16 to my attack roll after I hit.",
			},

			"precision - tier 1" : {
				name : "Precision - Tier 1",
				description : "\n   " + "I gain a +1 bonus to all non-autofire firearm attack rolls.",
			},

			"precision - tier 2" : {
				name : "Precision - Tier 2",
				description : "\n   " + "If I score a critical hit with a non-autofire firearm attack, I roll all damage dice three times instead of twice.",
			},

			"precision - tier 3" : {
				name : "Precision - Tier 3",
				description : "\n   " + "I set aside a natural 20. I can replace one missed attack roll I make with a non-autofire firearm with that natural 20. Once I do, I cannot set aside another natural 20 until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
			},

			"precision - tier 4" : {
				name : "Precision - Tier 4",
				description : "\n   " + "If I roll a natural 2 or 3 on a non-autofire firearm attack, I can re-roll.",
			},

			"precision - tier 5" : {
				name : "Precision - Tier 5",
				description : "\n   " + "I have advantage on non-autofire firearm attack rolls.",
			},
		},

		"brotherhood" : {
			name : "Brotherhood",
			source : ["UM5R", 66],
			minlevel : 1,
			description : "\n   " + "I select one of the following These abilities complement the group I'm in, rewarding teamwork over selfish ambitions. I select additional abilities at 4th, 7th, 10th, 13th, 16th, and 19th level.",
			extraname : "Brotherhood Abilities",
			extrachoices : ["Action Star", "Cauterize", "Combat Ineffective", "Comrades In Arms", "Covering Fire", "For The Common Honor", "Front Line Deployment", "Jump In Front", "Man Down", "Member of a Team", "Slow Is Smooth", "Snap Out Of It", "Solid Frame", "Spotter", "Toss Magezine"],
			extraTimes : levels.map(function (n) {
				return n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7;
			}),
			"action star" : {
				name : "Action Star",
				description : "\n   " + "If I score a hit on a creature 20 feet or closer, I can elect to piss said creature off. It now suffers disadvantage on all attack rolls that don't include me as a target. The effect ends if I move out of range or out of line of sight (like behind total cover), or don't attack the same target before the end of my next turn (I don't need to hit, just attack).",
			},

			"cauterize" : {
				name : "Cauterize",
				description : "\n   " + "I can use my action to heal an injured ally. The target recovers HP equal to 1d6 per grounder level. When I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"combat ineffective" : {
				name : "Combat Ineffective",
				description : "\n   " + "If an allied character in line of sight is reduced to 0 HP or less, I have advantage on attack rolls against the creature that hit the ally until the creature is destroyed or until the felled ally recovers HP.",
			},

			"comrades in arms" : {
				name : "Comrades In Arms",
				description : "\n   " + "If an ally within 10 feet of me suffers a critical hit, I have advantage on attack rolls against the creature that made that attack until the end of my next turn.",
			},

			"covering fire" : {
				name : "Covering Fire",
				description : "\n   " + "When making an Attack action I can suffer disadvantage on all attack rolls for that action. After finishing my attack, all allies in line of sight gain a +1 bonus to AC and advantage on all saving throws against any target I attack until the beginning of my next turn.",
			},

			"for the common honor" : {
				name : "For The Common Honor",
				description : "\n   " + "If an ally within 5 feet of me suffers a hit from an enemy, as a reaction, I can swap locations with the ally and suffer the hit and all effects instead.",
				action : ["reaction"],
			},

			"front line deployment" : {
				name : "Front Line Deployment",
				description : "\n   " + "I select one ally within 10 feet as a bonus action. Until the beginning of my next turn, the targeted ally gains a +1 bonus to AC.",
				action : ["bonus action"],
			},

			"jump in front" : {
				name : "Jump In Front",
				description : "\n   " + "If me and at least one ally is struck by an area effect no bigger than 60 feet across, as a reaction, I can push my allies out of the target area. However, I'm then targeted by the effect a number of times equal to the number of allies I pushed. I can still make saving throw to the effect, but for each attack on me. When I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["reaction"],
			},

			"man down" : {
				name : "Man Down",
				description : "\n   " + "If I occupy the same space as a dead, prone, or unconscious ally, the ally cannot be targeted by any ranged or melee attacks and automatically passes all Dexterity saving throws. The effect ends if the target stands, if I leave the target's area, or if the target makes any kind of attack.",
			},

			"member of a team" : {
				name : "Member of a Team",
				description : "\n   " + "I can spend 30 feet of movement and select an ally within 5 feet. That ally can use the Disengage action without using their action on their next turn.",
			},

			"slow is smooth" : {
				name : "Slow Is Smooth",
				description : "\n   " + "When I move, I can reduce my speed by 10 feet and pull one ally within 5 feet with me. If I use the Disengage action, the ally also disengages.",
			},

			"snap out of it" : {
				name : "Snap Out Of It",
				description : "\n   " + "I use m yaction to remove one of the following conditions an ally suffers from (unless I suffer from the same condition): charmed, frightened, stunned, or unconscious (unless dying). When I use this feature, I cannot use it again until you finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"solid frame" : {
				name : "Solid Frame",
				description : "\n   " + "When wielding a two-handed small arm, I do not suffer the -2 penalty to firing while moving.",
			},

			"spotter" : {
				name : "Spotter",
				description : "\n   " + "I target an enemy in line of sight with my action; one ally within 5 feet of me has advantage on their next attack roll against the target.",
				action : ["action"],
			},

			"toss magezine" : {
				name : "Toss Magezine",
				description : "\n   " + "I can spend 30 feet of movement and reload an ally's weapon. The ally must be within 10 feet, and I must have the proper ammunition or cell.",
			},
		},

		"take a knee" : {
			name : "Take A Knee",
			source : ["UM5R", 67],
			minlevel : 2,
			description : "\n   " + "I can crouch quickly and brace my elbow against my knee for a secured firing position, spending 30 feet of movement and making one ranged attack. I cannot use this feature if you are within reach of an enemy or an enemy is in reach of me. At 5th level, this movement cost is reduced to 25 feet, reducing to 20 feet at 13th level, and 15 feet at 17th level.",
		},

		"additional choice 1" : {
			name : "Additional Choice 1",
			source : ["UM5R", 67],
			minlevel : 3,
			description : "\n   " + "I can choose to either gain an additional Fire Support Discipline or a Brotherhood Ability.",
			choices : ["Fire Support Discipline", "Brotherhood Ability"],
			choicesNotInMenu : false,
			"fire support discipline" : {
				name : "Fire Support Discipline 1",
				description : "\n   " + "I gain an additional Fire Support Discipline.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "fire support",
					bonus : 1
				}],
			},

			"brotherhood ability" : {
				name : "Brotherhood Ability 1",
				description : "\n   " + "I gain an additional Brotherhood Ability.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "brotherhood",
					bonus : 1
				}],
			},
		},

		"additional choice 2" : {
			name : "Additional Choice 2",
			source : ["UM5R", 67],
			minlevel : 7,
			description : "\n   " + "I can choose to either gain an additional Fire Support Discipline or a Brotherhood Ability.",
			choices : ["Fire Support Discipline", "Brotherhood Ability"],
			choicesNotInMenu : false,
			"fire support discipline" : {
				name : "Fire Support Discipline 2",
				description : "\n   " + "I gain an additional Fire Support Discipline.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "fire support",
					bonus : 1
				}],
			},

			"brotherhood ability" : {
				name : "Brotherhood Ability 2",
				description : "\n   " + "I gain an additional Brotherhood Ability.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "brotherhood",
					bonus : 1
				}],
			},
		},

		"meat shield" : {
			name : "Meat Shield",
			source : ["UM5R", 67],
			minlevel : 10,
			description : "\n   " + "As a reaction, or part of my action if on my turn, when a creature within 5 feet is killed or otherwise incapacitated, I grab it; it now grants me half-cover until I move. If using a two-handed small arm, I suffer a -1 penalty to attack rolls while holding the target. I cannot use a heavy or super heavy weapon with Meat Shield. I also cannot use Meat Shield with \"Take A Knee\".",
			action : ["reaction"],
		},

		"additional choice 3" : {
			name : "Additional Choice 3",
			source : ["UM5R", 67],
			minlevel : 11,
			description : "\n   " + "I can choose to either gain an additional Fire Support Discipline or a Brotherhood Ability.",
			choices : ["Fire Support Discipline", "Brotherhood Ability"],
			choicesNotInMenu : false,
			"fire support discipline" : {
				name : "Fire Support Discipline 3",
				description : "\n   " + "I gain an additional Fire Support Discipline.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "fire support",
					bonus : 1
				}],
			},

			"brotherhood ability" : {
				name : "Brotherhood Ability 3",
				description : "\n   " + "I gain an additional Brotherhood Ability.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "brotherhood",
					bonus : 1
				}],
			},
		},

		"additional choice 4" : {
			name : "Additional Choice 4",
			source : ["UM5R", 67],
			minlevel : 15,
			description : "\n   " + "I can choose to either gain an additional Fire Support Discipline or a Brotherhood Ability.",
			choices : ["Fire Support Discipline", "Brotherhood Ability"],
			choicesNotInMenu : false,
			"fire support discipline" : {
				name : "Fire Support Discipline 4",
				description : "\n   " + "I gain an additional Fire Support Discipline.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "fire support",
					bonus : 1
				}],
			},

			"brotherhood ability" : {
				name : "Brotherhood Ability 4",
				description : "\n   " + "I gain an additional Brotherhood Ability.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "brotherhood",
					bonus : 1
				}],
			},
		},

		"additional choice 5" : {
			name : "Additional Choice 5",
			source : ["UM5R", 67],
			minlevel : 18,
			description : "\n   " + "I can choose to either gain an additional Fire Support Discipline or a Brotherhood Ability.",
			choices : ["Fire Support Discipline", "Brotherhood Ability"],
			choicesNotInMenu : false,
			"fire support discipline" : {
				name : "Fire Support Discipline 5",
				description : "\n   " + "I gain an additional Fire Support Discipline.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "fire support",
					bonus : 1
				}],
			},

			"brotherhood ability" : {
				name : "Brotherhood Ability 5",
				description : "\n   " + "I gain an additional Brotherhood Ability.",
				bonusClassExtrachoices : [{
					'class' : "grounder, archetypeless",
					feature : "brotherhood",
					bonus : 1
				}],
			},
		},

		"all in" : {
			name : "All In",
			source : ["UM5R", 67],
			minlevel : 20,
			description : "\n   " + "If I hit an enemy, I can empty a full magazine to ensure a messy kill. I double the number of attacks I make with an Attack action against a single target. When I use this feature, I cannot use it again until I finish a short or long rest. That weapon is also out of ammunition.",
			usages : 1,
			recovery : "short rest",
		},
	}
}

ClassList["gunslinger"] = {

	name : "Gunsligner",

	regExpSearch : /^(?=.*gunslinger).*$/i,

	source : ["UM5R", 68],

	primaryAbility : "Dexterity and Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Gunslinger") + ": Select three skills from Acrobatics, Athletics, History, Insight, Intimidation, Perception, and Performance, or Sleight of Hand.", "\n\n" + toUni("Gunslinger") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio"]],
		[true, false, false]
	],

	equipment : "Gunslinger starting equipment:\n \u2022 Two one-handed small arms, $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4],

	features : {

		"cinematic style" : {
			name : "Cinematic Style",
			source : ["UM5R", 68],
			minlevel : 1,
			description : "\n   " + "I choose whether I fight with either one firearm or two.",
			choices : ["One Weapon", "Two Weapons"],
			choicesNotInMenu : false,
			"one weapon" : {
				name : "Cinematic Style (One Weapon)",
				description : "\n   " + "If wielding only a single one-handed small arm, I gain a +3 bonus to damage rolls with that weapon. This increases to +6 at 6th level.",
			},

			"two weapons" : {
				name : "Cinematic Style (Two Weapons)",
				description : "\n   " + "Wielding two one-handed small arms is the same as wielding two light melee weapons for the purposes of two-weapon fighting. As such, I can use a bonus action to attack with my second small arm. I don't add my ability modifier to the damage of the bonus attack unless the modifier is negative. At 6th level, I no longer have this limitation and can add my ability modifier to the damage of the bonus attack.",
			},
		},

		"converging fire" : {
			name : "Converging Fire",
			source : ["UM5R", 69],
			minlevel : 1,
			description : "\n   " + "When attacking a creature 5 feet or closer with one or two one-handed small arms, I gain a +1 bonus to attack rolls and a +2 bonus to AC against that creature.",
		},

		"kata" : {
			name : "Kata",
			source : ["UM5R", 69],
			minlevel : 1,
			description : "\n   " + "I can use kata exploits fueled by kata points. I regain all spent kata points when I finish a short or long rest. Each time I can select a new exploit, I can replace one I know with a different one. All exploits require the use of one-handed small arms. Certain kata exploits also cost more than one point. I can only use one exploit per turn, which increases to two at 10th level.",
			additional : ["4 Kata Points", "5 Kata Points", "5 Kata Points", "5 Kata Points", "6 Kata Points", "6 Kata Points", "6 Kata Points", "7 Kata Points", "7 Kata Points", "7 Kata Points", "8 Kata Points", "8 Kata Points", "8 Kata Points", "9 Kata Points", "9 Kata Points", "9 Kata Points", "10 Kata Points", "10 Kata Points", "10 Kata Points", "11 Kata Points"],
			extraname : "Kata Exploits",
			extrachoices : ["Abnormally Fast", "Between The Knees", "Blood in the Eyes", "Boundary Threshold", "Classic Tumble", "Equilibrium", "Hydrostatic Shot", "Just One Bullet", "Kinesics", "Limber Up", "Rapid Kill", "Way of the Gun", "Weak Spot"],
			extraTimes : levels.map(function (n) {
				return n < 4 ? 1 : n < 7 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 16 ? 5 : n < 19 ? 6 : 7;
			}),
			"abnormally fast" : {
				name : "Abnormally Fast",
				description : "\n   " + "I spend 1 kata point as part of my movement to double my speed until the end of my turn. If I'm hit with an attack before the beginning of my next turn, I gain 1 kata point.",
			},

			"between the knees" : {
				name : "Between The Knees",
				description : "\n   " + "I spend 1 kata point before making a ranged attack roll to have advantage on that attack roll. If both attack rolls hit, I double my ability modifier damage. If both miss, I regain 1 kata point.",
			},

			"blood in the eyes" : {
				name : "Blood in the Eyes",
				description : "\n   " + "I spend 1 kata point as a reaction if an enemy scores a critical hit on me; I make a ranged attack against the triggering enemy. If I hit, my attack is also a critical hit. If I miss by 5 or more, I regain 1 kata point.",
				action : ["reaction"],
			},

			"boundary threshold" : {
				name : "Boundary Threshold",
				description : "\n   " + "If I'm within 5 feet of at least two enemies, I can spend 1 kata point along with 30 feet of movement to make one ranged attack to one of those enemies.",
			},

			"classic tumble" : {
				name : "Classic Tumble",
				description : "\n   " + "I spend 1 kata point as a reaction when hit with an attack or if I fail a Dexterity saving throw. I take only 1/4th damage.",
				action : ["reaction"],
			},

			"equilibrium" : {
				name : "Equilibrium",
				description : "\n   " + "I spend 1 kata point as part of a reaction when an enemy misses with a ranged attack, I make a ranged attack. If I score a critical hit with said attack, I recover 1 kata point.",
				action : ["reaction"],
			},

			"hydrostatic shot" : {
				name : "Hydrostatic Shot",
				description : "\n   " + "I spend 1 kata point after hitting a target; I inflict additional damage equal to my level, and if the creature is my size or smaller and moves or attacks before the start of my next turn, I can knock the enemy prone as a reaction.",
			},

			"just one bullet" : {
				name : "Just One Bullet",
				description : "\n   " + "I spend 1 kata point before an Attack action to add my Wisdom modifier to all damage rolls until the end of my turn. If any attack rolls I make on my turn score a critical hit, I gain 1 kata point (max 1).",
			},

			"kinesics" : {
				name : "Kinesics",
				description : "\n   " + "I spend 1 kata point on my turn as a bonus action, and my movement is not reduced through difficult terrain, I don't provoke opportunity attacks, and all attacks against me have disadvantage until the beginning of my next turn. If I suffer more than one hit while Kinesics is in effect, I regain 1 kata point.",
				action : ["bonus action"],
			},

			"limber up" : {
				name : "Limber Up",
				description : "\n   " + "I spend 1 kata point with a bonus action and gain advantage on Dexterity and Strength ability checks, skill checks, and saving throws until the end of my next turn.",
				action : ["bonus action"],
			},

			"rapid kill" : {
				name : "Rapid Kill",
				description : "\n   " + "I spend 2 kata points after hitting a creature to turn that hit into a critical hit.",
			},

			"way of the gun" : {
				name : "Way of the Gun",
				description : "\n   " + "If I hit a creature at least 20 feet away, I spend 1 kata point as part of that same action to gain an additional attack against one additional enemy within 5 feet of the first target.",
			},

			"weak spot" : {
				name : "Weak Spot",
				description : "\n   " + "I spend 4 kata points after hitting a target, and as part of the same action, I gain a damage bonus to every subsequent hit on that specific target equal to my Wisdom modifier until the target is killed.",
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 70],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"gun-fu" : {
			name : "Gun-Fu",
			source : ["UM5R", 70],
			minlevel : 5,
			description : "\n   " + "If all ranged attacks I make with an Attack action are directed at the same target, I can make one additional ranged attack (two at 17th level) against that target.",
		},

		"reflex shot" : {
			name : "Reflex Shot",
			source : ["UM5R", 70],
			minlevel : 9,
			description : "\n   " + "When wielding a one-handed small arm, I can use a ranged attack as an opportunity attack.",
		},

		"heroic bloodshed" : {
			name : "Heroic Bloodshed",
			source : ["UM5R", 70],
			minlevel : 14,
			description : "\n   " + "If wielding two one-handed small arms, I can double the number of ranged attacks I make with my Attack action, my bonus action, and any reactions until the beginning of my next turn. If wielding one one-handed small arm, until the beginning of my next turn, any hits are automatically critical hits, and I double all dice rolled. Once I use Heroic Bloodshed, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},

		"endorphin response" : {
			name : "Endorphin Response",
			source : ["UM5R", 70],
			minlevel : 20,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them on my turn as a bonus action and gain 4 kata points.",
			action : ["bonus action"],
		},
	}
}

ClassList["gunslinger, archetypeless"] = {

	name : "Gunsligner, Archetypeless",

	regExpSearch : /^(?=.*gunslinger)(?=.*archetypeless).*$/i,

	source : ["UM5R", 68],

	primaryAbility : "Dexterity and Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Gunslinger") + ": Select three skills from Acrobatics, Athletics, History, Insight, Intimidation, Perception, and Performance, or Sleight of Hand.", "\n\n" + toUni("Gunslinger") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio"]],
		[true, false, false]
	],

	equipment : "Gunslinger starting equipment:\n \u2022 Two one-handed small arms, $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4],

	features : {

		"cinematic style" : {
			name : "Cinematic Style",
			source : ["UM5R", 68],
			minlevel : 1,
			description : "\n   " + "I choose whether I fight with either one firearm or two.",
			choices : ["One Weapon", "Two Weapons"],
			choicesNotInMenu : false,
			"one weapon" : {
				name : "Cinematic Style (One Weapon)",
				description : "\n   " + "If wielding only a single one-handed small arm, I gain a +3 bonus to damage rolls with that weapon. This increases to +6 at 6th level.",
			},

			"two weapons" : {
				name : "Cinematic Style (Two Weapons)",
				description : "\n   " + "Wielding two one-handed small arms is the same as wielding two light melee weapons for the purposes of two-weapon fighting. As such, I can use a bonus action to attack with my second small arm. I don't add my ability modifier to the damage of the bonus attack unless the modifier is negative. At 6th level, I no longer have this limitation and can add my ability modifier to the damage of the bonus attack.",
			},
		},

		"converging fire" : {
			name : "Converging Fire",
			source : ["UM5R", 69],
			minlevel : 1,
			description : "\n   " + "When attacking a creature 5 feet or closer with one or two one-handed small arms, I gain a +1 bonus to attack rolls and a +2 bonus to AC against that creature.",
		},

		"kata" : {
			name : "Kata",
			source : ["UM5R", 69],
			minlevel : 1,
			description : "\n   " + "I can use kata exploits fueled by kata points. I regain all spent kata points when I finish a short or long rest. Each time I can select a new exploit, I can replace one I know with a different one. All exploits require the use of one-handed small arms. Certain kata exploits also cost more than one point. I can only use one exploit per turn, which increases to two at 10th level.",
			additional : ["4 Kata Points", "5 Kata Points", "6 Kata Points", "6 Kata Points", "7 Kata Points", "7 Kata Points", "8 Kata Points", "8 Kata Points", "8 Kata Points", "8 Kata Points", "9 Kata Points", "9 Kata Points", "9 Kata Points", "9 Kata Points", "10 Kata Points", "10 Kata Points", "10 Kata Points", "11 Kata Points", "11 Kata Points", "12 Kata Points"],
			extraname : "Kata Exploits",
			extrachoices : ["Abnormally Fast", "Between The Knees", "Blood in the Eyes", "Boundary Threshold", "Classic Tumble", "Equilibrium", "Hydrostatic Shot", "Just One Bullet", "Kinesics", "Limber Up", "Rapid Kill", "Way of the Gun", "Weak Spot"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 1 : n < 4 ? 2 : n < 7 ? 4 : n < 10 ? 5 : n < 11 ? 6 : n < 13 ? 7 : n < 15 ? 8 : n < 16 ? 9 : n < 18 ? 10 : n < 19 ? 11 : 12;
			}),
			"abnormally fast" : {
				name : "Abnormally Fast",
				description : "\n   " + "I spend 1 kata point as part of my movement to double my speed until the end of my turn. If I'm hit with an attack before the beginning of my next turn, I gain 1 kata point.",
			},

			"between the knees" : {
				name : "Between The Knees",
				description : "\n   " + "I spend 1 kata point before making a ranged attack roll to have advantage on that attack roll. If both attack rolls hit, I double my ability modifier damage. If both miss, I regain 1 kata point.",
			},

			"blood in the eyes" : {
				name : "Blood in the Eyes",
				description : "\n   " + "I spend 1 kata point as a reaction if an enemy scores a critical hit on me; I make a ranged attack against the triggering enemy. If I hit, my attack is also a critical hit. If I miss by 5 or more, I regain 1 kata point.",
				action : ["reaction"],
			},

			"boundary threshold" : {
				name : "Boundary Threshold",
				description : "\n   " + "If I'm within 5 feet of at least two enemies, I can spend 1 kata point along with 30 feet of movement to make one ranged attack to one of those enemies.",
			},

			"classic tumble" : {
				name : "Classic Tumble",
				description : "\n   " + "I spend 1 kata point as a reaction when hit with an attack or if I fail a Dexterity saving throw. I take only 1/4th damage.",
				action : ["reaction"],
			},

			"equilibrium" : {
				name : "Equilibrium",
				description : "\n   " + "I spend 1 kata point as part of a reaction when an enemy misses with a ranged attack, I make a ranged attack. If I score a critical hit with said attack, I recover 1 kata point.",
				action : ["reaction"],
			},

			"hydrostatic shot" : {
				name : "Hydrostatic Shot",
				description : "\n   " + "I spend 1 kata point after hitting a target; I inflict additional damage equal to my level, and if the creature is my size or smaller and moves or attacks before the start of my next turn, I can knock the enemy prone as a reaction.",
			},

			"just one bullet" : {
				name : "Just One Bullet",
				description : "\n   " + "I spend 1 kata point before an Attack action to add my Wisdom modifier to all damage rolls until the end of my turn. If any attack rolls I make on my turn score a critical hit, I gain 1 kata point (max 1).",
			},

			"kinesics" : {
				name : "Kinesics",
				description : "\n   " + "I spend 1 kata point on my turn as a bonus action, and my movement is not reduced through difficult terrain, I don't provoke opportunity attacks, and all attacks against me have disadvantage until the beginning of my next turn. If I suffer more than one hit while Kinesics is in effect, I regain 1 kata point.",
				action : ["bonus action"],
			},

			"limber up" : {
				name : "Limber Up",
				description : "\n   " + "I spend 1 kata point with a bonus action and gain advantage on Dexterity and Strength ability checks, skill checks, and saving throws until the end of my next turn.",
				action : ["bonus action"],
			},

			"rapid kill" : {
				name : "Rapid Kill",
				description : "\n   " + "I spend 2 kata points after hitting a creature to turn that hit into a critical hit.",
			},

			"way of the gun" : {
				name : "Way of the Gun",
				description : "\n   " + "If I hit a creature at least 20 feet away, I spend 1 kata point as part of that same action to gain an additional attack against one additional enemy within 5 feet of the first target.",
			},

			"weak spot" : {
				name : "Weak Spot",
				description : "\n   " + "I spend 4 kata points after hitting a target, and as part of the same action, I gain a damage bonus to every subsequent hit on that specific target equal to my Wisdom modifier until the target is killed.",
			},
		},

		"gun-fu" : {
			name : "Gun-Fu",
			source : ["UM5R", 70],
			minlevel : 5,
			description : "\n   " + "If all ranged attacks I make with an Attack action are directed at the same target, I can make one additional ranged attack (two at 17th level) against that target.",
		},

		"reflex shot" : {
			name : "Reflex Shot",
			source : ["UM5R", 70],
			minlevel : 9,
			description : "\n   " + "When wielding a one-handed small arm, I can use a ranged attack as an opportunity attack.",
		},

		"heroic bloodshed" : {
			name : "Heroic Bloodshed",
			source : ["UM5R", 70],
			minlevel : 14,
			description : "\n   " + "If wielding two one-handed small arms, I can double the number of ranged attacks I make with my Attack action, my bonus action, and any reactions until the beginning of my next turn. If wielding one one-handed small arm, until the beginning of my next turn, any hits are automatically critical hits, and I double all dice rolled. Once I use Heroic Bloodshed, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},

		"endorphin response" : {
			name : "Endorphin Response",
			source : ["UM5R", 70],
			minlevel : 20,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them on my turn as a bonus action and gain 4 kata points.",
			action : ["bonus action"],
		},
	}
}

ClassList["heavy"] = {

	name : "Heavy",

	regExpSearch : /^(?=.*heavy).*$/i,

	source : ["UM5R", 71],

	primaryAbility : "Strength and Constitution",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Con"],

	skills : ["\n\n" + toUni("Heavy") + ": Select two skills from Acrobatics, Athletics, History, Insight, Intimidation, or Perception.", "\n\n" + toUni("Heavy") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, true, true],
		[true, true, true, true]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],
		[true, false, false]
	],

	equipment : "Heavy starting equipment:\n \u2022 Three small arms, each $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	abilitySave : 1,

	features : {

		"artillery talent" : {
			name : "Artillery Talent",
			source : ["UM5R", 71],
			minlevel : 1,
			description : "\n   " + "I gain four talents at first level. I gain an additional talent at 2nd, 5th, 9th, 13th, 17th, and 20th level. Several talents can be selected multiple times, increasing their tier, though I cannot achieve more than rank 2 at 1st level.",
			extraname : "Artillery Talents",
			extrachoices : ["Attack of Necessity - Tier 1", "Attack of Necessity - Tier 2", "Attack of Necessity - Tier 3", "Attack of Necessity - Tier 4", "Rapid Fire - Tier 1", "Rapid Fire - Tier 2", "Rapid Fire - Tier 3", "Rapid Fire - Tier 4", "Easy Target - Tier 1", "Easy Target - Tier 2", "Easy Target - Tier 3", "Easy Target - Tier 4", "Gaming Avatar - Tier 1", "Gaming Avatar - Tier 2", "Gaming Avatar - Tier 3", "Gaming Avatar - Tier 4", "Imposing Frame - Tier 1", "Imposing Frame - Tier 2", "Imposing Frame - Tier 3", "Imposing Frame - Tier 4", "Overwatch - Tier 1", "Overwatch - Tier 2", "Overwatch - Tier 3", "Overwatch - Tier 4", "Overwatch - Tier 5", "Overwatch - Tier 6", "Precision Fire - Tier 1", "Precision Fire - Tier 2", "Precision Fire - Tier 3", "Precision Fire - Tier 4", "Precision Fire - Tier 5", "Shrapnel - Tier 1", "Shrapnel - Tier 2", "Shrapnel - Tier 3", "Sure-Footed"],
			extraTimes : levels.map(function (n) {
				return n < 1 ? 3 : n < 2 ? 4 : n < 5 ? 5 : n < 9 ? 6 : n < 13 ? 7 : n < 17 ? 8 : n < 20 ? 9 : 10;
			}),
			"attack of necessity - tier 1" : {
				name : "Attack of Necessity - Tier 1",
				description : "\n   " + "As an action, while I'm wielding an auto or auto-heavy weapon, each creature in a 10-foot cone (or 15-foot for auto-heavy) centered on me must make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted.",
				action : ["action"],
			},

			"attack of necessity - tier 2" : {
				name : "Attack of Necessity - Tier 2",
				description : "\n   " + "The cone increases by 5 feet (15 and 20 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'attack of necessity - tier 1'; },
			},

			"attack of necessity - tier 3" : {
				name : "Attack of Necessity - Tier 3",
				description : "\n   " + "Targets my size or smaller are knocked prone if they fail their saves.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'attack of necessity - tier 2'; },
			},

			"attack of necessity - tier 4" : {
				name : "Attack of Necessity - Tier 4",
				description : "\n   " + "The cone increases by 5 feet (20 and 25 feet, respectively).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'attack of necessity - tier 3'; },
			},

			"rapid fire - tier 1" : {
				name : "Rapid Fire - Tier 1",
				description : "\n   " + "As an action, while I'm wielding an auto or auto-heavy weapon, each creature in a 10-foot cube (20-foot with auto-heavy) within normal weapon range must make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted. I can also attempt Rapid Fire between a weapon's normal range and maximum range, but the save DC suffers a -5 penalty.",
				action : ["action"],
			},

			"rapid fire - tier 2" : {
				name : "Rapid Fire - Tier 2",
				description : "\n   " + "The cube's area increases by 10 feet (20 and 30 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'rapid fire - tier 1'; },
			},

			"rapid fire - tier 3" : {
				name : "Rapid Fire - Tier 3",
				description : "\n   " + "All targets in the cube have their speed halved until the beginning of my next turn.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'rapid fire - tier 2'; },
			},

			"rapid fire - tier 4" : {
				name : "Rapid Fire - Tier 4",
				description : "\n   " + "The cube's area increases by 10 feet (30 and 40 feet, respectively).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'rapid fire - tier 3'; },
			},

			"easy target - tier 1" : {
				name : "Easy Target - Tier 1",
				description : "\n   " + "When attacking a Large or larger creature with a weapon using the auto or auto-heavy property, I gain a bonus to damage against the target for every size above Medium the creature is. I gain this damage bonus with both autofire and area-effect attacks using auto and auto-heavy weapons.",
			},

			"easy target - tier 2" : {
				name : "Easy Target - Tier 2",
				description : "\n   " + "The damage bonus improves by 1.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'easy target - tier 1'; },
			},

			"easy target - tier 3" : {
				name : "Easy Target - Tier 3",
				description : "\n   " + "The damage bonus improves by an additional 1 (totaling 2).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'easy target - tier 2'; },
			},

			"easy target - tier 4" : {
				name : "Easy Target - Tier 4",
				description : "\n   " + "The damage bonus improves by an additional 1 (totaling 3).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'easy target - tier 3'; },
			},

			"gaming avatar - tier 1" : {
				name : "Gaming Avatar - Tier 1",
				description : "\n   " + "As an action, I make a single autofire attack. If I hit, I impose one or more effects on the enemy depending on how much I beat the target's AC by (to a maximum of 5 for an auto weapon or 10 for an auto-heavy weapon). All effects are cumulative.\n   2 or more: The target is pushed 5 feet.\n   6 or more: The target is pushed 5 feet (10 total).",
				action : ["action"],
			},

			"gaming avatar - tier 2" : {
				name : "Gaming Avatar - Tier 2",
				description : "\n   " + "I unlock two additional potential effects.\n   3 or more: The target has disadvantage on its next ranged attack roll against me until the beginning of my next turn.\n   8 or more: The target has disadvantage on its next attack roll until the beginning of my next turn.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'gaming avatar - tier 1'; },
			},

			"gaming avatar - tier 3" : {
				name : "Gaming Avatar - Tier 3",
				description : "\n   " + "I unlock two additional potential effects.\n   5 or more: The target's speed is reduced to zero until the beginning of my next turn.\n   10 or more: The target loses its action on its next turn. It still can take reactions and bonus actions.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'gaming avatar - tier 2'; },
			},

			"gaming avatar - tier 4" : {
				name : "Gaming Avatar - Tier 4",
				description : "\n   " + "I have advantage on this attack.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'gaming avatar - tier 3'; },
			},

			"imposing frame - tier 1" : {
				name : "Imposing Frame - Tier 1",
				description : "\n   " + "I can spend 30 feet of movement and gain a +1 bonus to AC and provide half-cover for all allies within 5 feet until the beginning of my next turn. I also have advantage against checks and saves from being moved against my will until the beginning of my next turn.",
			},

			"imposing frame - tier 2" : {
				name : "Imposing Frame - Tier 2",
				description : "\n   " + "Allies now gain three-quarters cover.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'imposing frame - tier 1'; },
			},

			"imposing frame - tier 3" : {
				name : "Imposing Frame - Tier 3",
				description : "\n   " + "The bonus to AC increases to +2.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'imposing frame - tier 2'; },
			},

			"imposing frame - tier 4" : {
				name : "Imposing Frame - Tier 4",
				description : "\n   " + "Imposing Frame now only costs 20 feet of movement.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'imposing frame - tier 3'; },
			},

			"overwatch - tier 1" : {
				name : "Overwatch - Tier 1",
				description : "\n   " + "While wielding an auto or auto-heavy weapon, I can spend 30 feet of movement on my turn and select a 10-foot cube (20-foot with auto-heavy) within my weapon's range. Until the beginning of my next turn, the area is considered difficult terrain to any enemy targets attempting to move through it. As a reaction, I can force an enemy that enters the area to make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted.",
			},

			"overwatch - tier 2" : {
				name : "Overwatch - Tier 2",
				description : "\n   " + "The cube's area increases by 10 feet (20 and 30 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'overwatch - tier 1'; },
			},

			"overwatch - tier 3" : {
				name : "Overwatch - Tier 3",
				description : "\n   " + "Overwatch now costs only 20 feet of movement to use.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'overwatch - tier 2'; },
			},

			"overwatch - tier 4" : {
				name : "Overwatch - Tier 4",
				description : "\n   " + "The cube's area increases by 10 feet (30 and 40 feet, respectively).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'overwatch - tier 3'; },
			},

			"overwatch - tier 5" : {
				name : "Overwatch - Tier 5",
				description : "\n   " + "I can use my action as well as spending movement with Overwatch and double its area of effect.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'overwatch - tier 4'; },
			},

			"overwatch - tier 6" : {
				name : "Overwatch - Tier 6",
				description : "\n   " + "If I used Overwatch on my previous turn, I can continue sustaining it on this turn, costing only 10 feet of movement to do so. I cannot shift its location.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'overwatch - tier 5'; },
			},

			"precision fire - tier 1" : {
				name : "Precision Fire - Tier 1",
				description : "\n   " + "When making a non-autofire attack, I can re-roll any damage die roll of 1 until the result is other than 1. If I roll the maximum result of any, I add +1 damage.",
			},

			"precision fire - tier 2" : {
				name : "Precision Fire - Tier 2",
				description : "\n   " + "If I score a critical hit, I roll all damage dice twice and take the higher values.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'precision fire - tier 1'; },
			},

			"precision fire - tier 3" : {
				name : "Precision Fire - Tier 3",
				description : "\n   " + "If I roll the maximum result on a damage die, I add +2 damage (instead of +1).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'precision fire - tier 2'; },
			},

			"precision fire - tier 4" : {
				name : "Precision Fire - Tier 4",
				description : "\n   " + "If I roll the maximum result on a damage die, instead of adding +2 damage, I roll 1d6 instead (this die and any subsequent dice can also benefit from Precision Fire).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'precision fire - tier 3'; },
			},

			"precision fire - tier 5" : {
				name : "Precision Fire - Tier 5",
				description : "\n   " + "Re-roll any damage die roll of 1 or 2 until the result is other than a 1 or a 2. If I roll the maximum result of any die, I add +2 damage (for a total of +4).",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'precision fire - tier 4'; },
			},

			"shrapnel - tier 1" : {
				name : "Shrapnel - Tier 1",
				description : "\n   " + "When I hit a creature with a ranged attack using the auto or auto-heavy property, one creature within 5 feet of the first target (10 feet with auto-heavy) takes damage equal to my Dexterity or Strength modifier.",
			},

			"shrapnel - tier 2" : {
				name : "Shrapnel - Tier 2",
				description : "\n   " + "I increase the range by 10 feet (15 and 20 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy', 'artillery talent') == 'shrapnel - tier 1'; },
			},

			"shrapnel - tier 3" : {
				name : "Shrapnel - Tier 3",
				description : "\n   " + "I double the damage the second target suffers.",
				prereqeval : function(v) { return classes.known.heavy.level >= 2 && GetFeatureChoice('class', 'heavy', 'artillery talent') == 'shrapnel - tier 2'; },
			},

			"sure-footed" : {
				name : "Sure-Footed",
				description : "\n   " + "I treat heavy weapons as two-handed small arms for the purposes of attack penalties while moving. This does not apply to super heavy weapons.",
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 73],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"too close" : {
			name : "Too Close",
			source : ["UM5R", 73],
			minlevel : 6,
			description : "\n   " + "If I'm hit by an opportunity attack, I can make a single melee attack, using my weapon as a club, as either an action or part of my action.",
		},

		"strongpoint" : {
			name : "Strongpoint",
			source : ["UM5R", 73],
			minlevel : 10,
			description : "\n   " + "I can take one additional action on my turn if both this and my normal action are used to employ artillery talents. When I use this feature, I cannot use it again until I finish a short or long rest. At 14th level, I gain one additional use of Strongpoint before I finish a short or long rest. I can also expend a Hit Die as a bonus action, not recovering any HP and gain an additional use of Strongpoint though I cannot gain more than 1 additional action per turn.",
			usages : ["", "", "", "", "", "", "", "", "", 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
			recovery : "short rest",
		},
	}
}

ClassList["heavy, archetypeless"] = {

	name : "Heavy, Archetypeless",

	regExpSearch : /^(?=.*heavy)(?=.*archetypeless).*$/i,

	source : ["UM5R", 71],

	primaryAbility : "Strength and Constitution",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Con"],

	skills : ["\n\n" + toUni("Heavy") + ": Select two skills from Acrobatics, Athletics, History, Insight, Intimidation, or Perception.", "\n\n" + toUni("Heavy") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, true, true],
		[true, true, true, true]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],
		[true, false, false]
	],

	equipment : "Heavy starting equipment:\n \u2022 Three small arms, each $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	abilitySave : 1,

	features : {

		"artillery talent" : {
			name : "Artillery Talent",
			source : ["UM5R", 71],
			minlevel : 1,
			description : "\n   " + "I gain four talents at first level. I gain an additional talent at 2nd, 5th, 9th, 13th, 17th, and 20th level. Several talents can be selected multiple times, increasing their tier, though I cannot achieve more than rank 2 at 1st level.",
			extraname : "Artillery Talents",
			extrachoices : ["Attack of Necessity - Tier 1", "Attack of Necessity - Tier 2", "Attack of Necessity - Tier 3", "Attack of Necessity - Tier 4", "Rapid Fire - Tier 1", "Rapid Fire - Tier 2", "Rapid Fire - Tier 3", "Rapid Fire - Tier 4", "Easy Target - Tier 1", "Easy Target - Tier 2", "Easy Target - Tier 3", "Easy Target - Tier 4", "Gaming Avatar - Tier 1", "Gaming Avatar - Tier 2", "Gaming Avatar - Tier 3", "Gaming Avatar - Tier 4", "Imposing Frame - Tier 1", "Imposing Frame - Tier 2", "Imposing Frame - Tier 3", "Imposing Frame - Tier 4", "Overwatch - Tier 1", "Overwatch - Tier 2", "Overwatch - Tier 3", "Overwatch - Tier 4", "Overwatch - Tier 5", "Overwatch - Tier 6", "Precision Fire - Tier 1", "Precision Fire - Tier 2", "Precision Fire - Tier 3", "Precision Fire - Tier 4", "Precision Fire - Tier 5", "Shrapnel - Tier 1", "Shrapnel - Tier 2", "Shrapnel - Tier 3", "Sure-Footed"],
			extraTimes : levels.map(function (n) {
				return n < 1 ? 3 : n < 2 ? 4 : n < 3 ? 5 : n < 5 ? 6 : n < 7 ? 7 : n < 9 ? 8 : n < 11 ? 9 : n < 13 ? 10 : n < 15 ? 11 : n < 17 ? 12 : n < 18 ? 13 : n < 20 ? 14 : 15;
			}),
			"attack of necessity - tier 1" : {
				name : "Attack of Necessity - Tier 1",
				description : "\n   " + "As an action, while I'm wielding an auto or auto-heavy weapon, each creature in a 10-foot cone (or 15-foot for auto-heavy) centered on me must make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted.",
				action : ["action"],
			},

			"attack of necessity - tier 2" : {
				name : "Attack of Necessity - Tier 2",
				description : "\n   " + "The cone increases by 5 feet (15 and 20 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'attack of necessity - tier 1'; },
			},

			"attack of necessity - tier 3" : {
				name : "Attack of Necessity - Tier 3",
				description : "\n   " + "Targets my size or smaller are knocked prone if they fail their saves.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'attack of necessity - tier 2'; },
			},

			"attack of necessity - tier 4" : {
				name : "Attack of Necessity - Tier 4",
				description : "\n   " + "The cone increases by 5 feet (20 and 25 feet, respectively).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'attack of necessity - tier 3'; },
			},

			"rapid fire - tier 1" : {
				name : "Rapid Fire - Tier 1",
				description : "\n   " + "As an action, while I'm wielding an auto or auto-heavy weapon, each creature in a 10-foot cube (20-foot with auto-heavy) within normal weapon range must make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted. I can also attempt Rapid Fire between a weapon's normal range and maximum range, but the save DC suffers a -5 penalty.",
				action : ["action"],
			},

			"rapid fire - tier 2" : {
				name : "Rapid Fire - Tier 2",
				description : "\n   " + "The cube's area increases by 10 feet (20 and 30 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'rapid fire - tier 1'; },
			},

			"rapid fire - tier 3" : {
				name : "Rapid Fire - Tier 3",
				description : "\n   " + "All targets in the cube have their speed halved until the beginning of my next turn.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'rapid fire - tier 2'; },
			},

			"rapid fire - tier 4" : {
				name : "Rapid Fire - Tier 4",
				description : "\n   " + "The cube's area increases by 10 feet (30 and 40 feet, respectively).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'rapid fire - tier 3'; },
			},

			"easy target - tier 1" : {
				name : "Easy Target - Tier 1",
				description : "\n   " + "When attacking a Large or larger creature with a weapon using the auto or auto-heavy property, I gain a bonus to damage against the target for every size above Medium the creature is. I gain this damage bonus with both autofire and area-effect attacks using auto and auto-heavy weapons.",
			},

			"easy target - tier 2" : {
				name : "Easy Target - Tier 2",
				description : "\n   " + "The damage bonus improves by 1.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'easy target - tier 1'; },
			},

			"easy target - tier 3" : {
				name : "Easy Target - Tier 3",
				description : "\n   " + "The damage bonus improves by an additional 1 (totaling 2).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'easy target - tier 2'; },
			},

			"easy target - tier 4" : {
				name : "Easy Target - Tier 4",
				description : "\n   " + "The damage bonus improves by an additional 1 (totaling 3).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'easy target - tier 3'; },
			},

			"gaming avatar - tier 1" : {
				name : "Gaming Avatar - Tier 1",
				description : "\n   " + "As an action, I make a single autofire attack. If I hit, I impose one or more effects on the enemy depending on how much I beat the target's AC by (to a maximum of 5 for an auto weapon or 10 for an auto-heavy weapon). All effects are cumulative.\n   2 or more: The target is pushed 5 feet.\n   6 or more: The target is pushed 5 feet (10 total).",
				action : ["action"],
			},

			"gaming avatar - tier 2" : {
				name : "Gaming Avatar - Tier 2",
				description : "\n   " + "I unlock two additional potential effects.\n   3 or more: The target has disadvantage on its next ranged attack roll against me until the beginning of my next turn.\n   8 or more: The target has disadvantage on its next attack roll until the beginning of my next turn.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'gaming avatar - tier 1'; },
			},

			"gaming avatar - tier 3" : {
				name : "Gaming Avatar - Tier 3",
				description : "\n   " + "I unlock two additional potential effects.\n   5 or more: The target's speed is reduced to zero until the beginning of my next turn.\n   10 or more: The target loses its action on its next turn. It still can take reactions and bonus actions.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'gaming avatar - tier 2'; },
			},

			"gaming avatar - tier 4" : {
				name : "Gaming Avatar - Tier 4",
				description : "\n   " + "I have advantage on this attack.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'gaming avatar - tier 3'; },
			},

			"imposing frame - tier 1" : {
				name : "Imposing Frame - Tier 1",
				description : "\n   " + "I can spend 30 feet of movement and gain a +1 bonus to AC and provide half-cover for all allies within 5 feet until the beginning of my next turn. I also have advantage against checks and saves from being moved against my will until the beginning of my next turn.",
			},

			"imposing frame - tier 2" : {
				name : "Imposing Frame - Tier 2",
				description : "\n   " + "Allies now gain three-quarters cover.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'imposing frame - tier 1'; },
			},

			"imposing frame - tier 3" : {
				name : "Imposing Frame - Tier 3",
				description : "\n   " + "The bonus to AC increases to +2.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'imposing frame - tier 2'; },
			},

			"imposing frame - tier 4" : {
				name : "Imposing Frame - Tier 4",
				description : "\n   " + "Imposing Frame now only costs 20 feet of movement.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'imposing frame - tier 3'; },
			},

			"overwatch - tier 1" : {
				name : "Overwatch - Tier 1",
				description : "\n   " + "While wielding an auto or auto-heavy weapon, I can spend 30 feet of movement on my turn and select a 10-foot cube (20-foot with auto-heavy) within my weapon's range. Until the beginning of my next turn, the area is considered difficult terrain to any enemy targets attempting to move through it. As a reaction, I can force an enemy that enters the area to make a Dexterity saving throw. A target takes my weapon damage on a failed save, or half as much damage on a successful one. I expend ammunition with each saving throw attempted.",
			},

			"overwatch - tier 2" : {
				name : "Overwatch - Tier 2",
				description : "\n   " + "The cube's area increases by 10 feet (20 and 30 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'overwatch - tier 1'; },
			},

			"overwatch - tier 3" : {
				name : "Overwatch - Tier 3",
				description : "\n   " + "Overwatch now costs only 20 feet of movement to use.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'overwatch - tier 2'; },
			},

			"overwatch - tier 4" : {
				name : "Overwatch - Tier 4",
				description : "\n   " + "The cube's area increases by 10 feet (30 and 40 feet, respectively).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'overwatch - tier 3'; },
			},

			"overwatch - tier 5" : {
				name : "Overwatch - Tier 5",
				description : "\n   " + "I can use my action as well as spending movement with Overwatch and double its area of effect.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'overwatch - tier 4'; },
			},

			"overwatch - tier 6" : {
				name : "Overwatch - Tier 6",
				description : "\n   " + "If I used Overwatch on my previous turn, I can continue sustaining it on this turn, costing only 10 feet of movement to do so. I cannot shift its location.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'overwatch - tier 5'; },
			},

			"precision fire - tier 1" : {
				name : "Precision Fire - Tier 1",
				description : "\n   " + "When making a non-autofire attack, I can re-roll any damage die roll of 1 until the result is other than 1. If I roll the maximum result of any, I add +1 damage.",
			},

			"precision fire - tier 2" : {
				name : "Precision Fire - Tier 2",
				description : "\n   " + "If I score a critical hit, I roll all damage dice twice and take the higher values.",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'precision fire - tier 1'; },
			},

			"precision fire - tier 3" : {
				name : "Precision Fire - Tier 3",
				description : "\n   " + "If I roll the maximum result on a damage die, I add +2 damage (instead of +1).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'precision fire - tier 2'; },
			},

			"precision fire - tier 4" : {
				name : "Precision Fire - Tier 4",
				description : "\n   " + "If I roll the maximum result on a damage die, instead of adding +2 damage, I roll 1d6 instead (this die and any subsequent dice can also benefit from Precision Fire).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'precision fire - tier 3'; },
			},

			"precision fire - tier 5" : {
				name : "Precision Fire - Tier 5",
				description : "\n   " + "Re-roll any damage die roll of 1 or 2 until the result is other than a 1 or a 2. If I roll the maximum result of any die, I add +2 damage (for a total of +4).",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'precision fire - tier 4'; },
			},

			"shrapnel - tier 1" : {
				name : "Shrapnel - Tier 1",
				description : "\n   " + "When I hit a creature with a ranged attack using the auto or auto-heavy property, one creature within 5 feet of the first target (10 feet with auto-heavy) takes damage equal to my Dexterity or Strength modifier.",
			},

			"shrapnel - tier 2" : {
				name : "Shrapnel - Tier 2",
				description : "\n   " + "I increase the range by 10 feet (15 and 20 feet, respectively).",
				prereqeval : function(v) { return GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'shrapnel - tier 1'; },
			},

			"shrapnel - tier 3" : {
				name : "Shrapnel - Tier 3",
				description : "\n   " + "I double the damage the second target suffers.",
				prereqeval : function(v) { return classes.known['heavy, archetypeless'].level >= 2 && GetFeatureChoice('class', 'heavy, archetypeless', 'artillery talent') == 'shrapnel - tier 2'; },
			},

			"sure-footed" : {
				name : "Sure-Footed",
				description : "\n   " + "I treat heavy weapons as two-handed small arms for the purposes of attack penalties while moving. This does not apply to super heavy weapons.",
			},
		},

		"too close" : {
			name : "Too Close",
			source : ["UM5R", 73],
			minlevel : 6,
			description : "\n   " + "If I'm hit by an opportunity attack, I can make a single melee attack, using my weapon as a club, as either an action or part of my action.",
		},

		"strongpoint" : {
			name : "Strongpoint",
			source : ["UM5R", 73],
			minlevel : 10,
			description : "\n   " + "I can take one additional action on my turn if both this and my normal action are used to employ artillery talents. When I use this feature, I cannot use it again until I finish a short or long rest. At 14th level, I gain one additional use of Strongpoint before I finish a short or long rest. I can also expend a Hit Die as a bonus action, not recovering any HP and gain an additional use of Strongpoint though I cannot gain more than 1 additional action per turn.",
			usages : ["", "", "", "", "", "", "", "", "", 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
			recovery : "short rest",
		},
	}
}

ClassList["infiltrator"] = {

	name : "Infiltrator",

	regExpSearch : /^(?=.*infiltrator).*$/i,

	source : ["UM5R", 74],

	primaryAbility : "Dexterity and Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Infiltrator") + ": Stealth and three skills from Acrobatics, Athletics, Deception, Computer Use, Engineering, History, Insight, Intimidation, Perception, Persuasion, or Sleight of Hand. I also gain proficiency in two martial weapons of my choice.", "\n\n" + toUni("Infiltrator") + ": None."],

	toolProfs : {
		primary : [["Disguise kit or Poisoner's kit", 1], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Infiltrator starting equipment:\n \u2022 A one-handed small arm worth $300 or less;\n \u2022 A one-handed melee weapon worth $50 or less;\n \u2022 A set of TL0 synthetic weave or TL0 ballistics armor;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"procedural memory" : {
			name : "Procedural Memory",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "I can re-roll undesirable d20 results I make. I gain as many uses of Procedural Memory as my Wisdom modifier + my proficiency bonus. I recover spent uses after I finish a short or long rest. I can re-roll as many times as I wish in response to a single bad roll until I accept a result or run out of uses of Procedural Memory. When I use Procedural Memory, that roll (whether it be a skill check, ability check, saving throw, or attack roll) is also counted as having advantage. I cannot use Procedural Memory if I have disadvantage. If I already have advantage, I still only get to re-roll one die result.",
		},

		"leet" : {
			name : "Leet",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "Any time I have advantage on an attack roll, the target of my attack has disadvantage on attack rolls against me until the beginning of my next turn.",
		},

		"intended target" : {
			name : "Intended Target",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "Once per turn, if I hit on an attack I have advantage on, I can turn that attack into a critical hit. The target must be within 20 feet of me.",
		},

		"solid skills" : {
			name : "Solid Skills",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "I gain an additional skill that enables me to accomplish my mission more successfully. I gain an additional skill at 4th, 7th, 13th, 16th, and 19th level.",
			extraname : "Solid Skills",
			extrachoices : ["Around Corners", "Automatic", "Focus", "Following Patterns", "Increased Pacification", "Multi-Talented", "Quickness", "Readiness", "Reflex Dash", "Response", "Scanner", "Sprung"],
			extraTimes : levels.map(function (n) {
				return n < 4 ? 1 : n < 7 ? 2 : n < 13 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6;
			}),
			"around corners" : {
				name : "Around Corners",
				description : "\n   " + "As long as I'm not deaf, I'm aware of the location of any hidden or invisible creatures within 10 feet of me.",
			},

			"automatic" : {
				name : "Automatic",
				description : "\n   " + "I gain two additional uses of \"Procedural Memory\".",
			},

			"focus" : {
				name : "Focus",
				description : "\n   " + "The range of \"Intended Target\" increases to 40 feet.",
			},

			"following patterns" : {
				name : "Following Patterns",
				description : "\n   " + "I reduce the Passive Perception of all enemies I encounter by 2.",
			},

			"increased pacification" : {
				name : "Increased Pacification",
				description : "\n   " + "When using \"Pacification\", I increase the gained damage dice by one.",
				action : ["action"],
			},

			"multi-talented" : {
				name : "Multi-Talented",
				description : "\n   " + "I gain proficiency in either one skill or one tool of my choice. If I select a skill or tool I already possess proficiency in, I gain a +2 bonus with checks involving that skill or tool.",
				skillstxt : "Choose any one skill or tool",
			},

			"quickness" : {
				name : "Quickness",
				description : "\n   " + "If enemies within 50 feet of me can't see me, I gain a +5 foot bonus to speed.",
			},

			"readiness" : {
				name : "Readiness",
				description : "\n   " + "If I ready an Attack action to trigger when a specific enemy gets within 20 feet or reveals itself, I have advantage on the attack.",
			},

			"reflex dash" : {
				name : "Reflex Dash",
				description : "\n   " + "If an enemy scores a hit on me, I gain a +10 foot bonus to speed until the end of my next turn.",
			},

			"response" : {
				name : "Response",
				description : "\n   " + "If an enemy within 40 feet of me misses on an attack against me, I have advantage on my next attack against that same enemy.",
			},

			"scanner" : {
				name : "Scanner",
				description : "\n   " + "I can Search with a bonus action.",
			},

			"sprung" : {
				name : "Sprung",
				description : "\n   " + "I can stand from prone using only 5 feet of movement. I do not suffer disadvantage with one-handed small arms while prone.",
			},
		},

		"pacification" : {
			name : "Pacification",
			source : ["UM5R", 76],
			minlevel : 2,
			description : "\n   " + "Instead of using my Hit Dice to recover HP, I can expend one during an attack action after hitting to double all damage dice.",
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 76],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"ghost" : {
			name : "Ghost",
			source : ["UM5R", 76],
			minlevel : 5,
			description : "\n   " + "I have advantage on initiative. If I act first after rolling initiative, I gain one additional action on my first turn and have advantage on attack rolls until the end of that turn.",
		},

		"efficient killer" : {
			name : "Efficient Killer",
			source : ["UM5R", 76],
			minlevel : 6,
			description : "\n   " + "If I hit my target with a melee weapon or a ranged weapon at 20 feet or closer, I can repeat the same attack against the same target as part of the same action. This attack is counted separately from the previous, so any benefits do not carry over. If the additional attack hits, I can make a third attack as part of the same action. At 13th level, Efficient Killer improves, and I can make up to five additional attacks on the same target as part of the same action as long as each previous attack hits.",
		},

		"most dangerous prey" : {
			name : "Most Dangerous Prey",
			source : ["UM5R", 76],
			minlevel : 9,
			description : "\n   " + "If using a one-handed small arm or melee weapon, I improve the damage of the weapon by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12) when benefitting from cover, when attacking a surprised target, or if my attack roll had advantage.",
		},

		"crippling effect" : {
			name : "Crippling Effect",
			source : ["UM5R", 76],
			minlevel : 10,
			description : "\n   " + "With one-handed melee weapons and one-handed small arms, I score a critical hit on a natural roll of 19 or 20. I also triple all damage dice instead of double.",
		},

		"enhanced camouflage" : {
			name : "Enhanced Camouflage",
			source : ["UM5R", 76],
			minlevel : 17,
			description : "\n   " + "When benefitting from half cover, it is treated as three-quarters cover. When benefitting from three-quarters cover, it is treated as total cover.",
		},

		"system shock" : {
			name : "System Shock",
			source : ["UM5R", 76],
			minlevel : 20,
			description : "\n   " + "After scoring a critical hit on a creature, the target is also stunned until the end of my next turn. When I use this feature, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["infiltrator, archetypeless"] = {

	name : "Infiltrator, Archetypeless",

	regExpSearch : /^(?=.*infiltrator)(?=.*archetypeless).*$/i,

	source : ["UM5R", 74],

	primaryAbility : "Dexterity and Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Infiltrator") + ": Stealth and three skills from Acrobatics, Athletics, Deception, Computer Use, Engineering, History, Insight, Intimidation, Perception, Persuasion, or Sleight of Hand. I also gain proficiency in two martial weapons of my choice.", "\n\n" + toUni("Infiltrator") + ": None."],

	toolProfs : {
		primary : [["Disguise kit or Poisoner's kit", 1], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Infiltrator starting equipment:\n \u2022 A one-handed small arm worth $300 or less;\n \u2022 A one-handed melee weapon worth $50 or less;\n \u2022 A set of TL0 synthetic weave or TL0 ballistics armor;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	features : {

		"procedural memory" : {
			name : "Procedural Memory",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "I can re-roll undesirable d20 results I make. I gain as many uses of Procedural Memory as my Wisdom modifier + my proficiency bonus + 1. I recover spent uses after I finish a short or long rest. I can re-roll as many times as I wish in response to a single bad roll until I accept a result or run out of uses of Procedural Memory. When I use Procedural Memory, that roll (whether it be a skill check, ability check, saving throw, or attack roll) is also counted as having advantage. I cannot use Procedural Memory if I have disadvantage. If I already have advantage, I still only get to re-roll one die result.",
		},

		"leet" : {
			name : "Leet",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "Any time I have advantage on an attack roll, the target of my attack has disadvantage on attack rolls against me until the beginning of my next turn.",
		},

		"intended target" : {
			name : "Intended Target",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "Once per turn, if I hit on an attack I have advantage on, I can turn that attack into a critical hit. The target must be within 20 feet of me.",
		},

		"solid skills" : {
			name : "Solid Skills",
			source : ["UM5R", 75],
			minlevel : 1,
			description : "\n   " + "I gain an additional skill that enables me to accomplish my mission more successfully. I gain an additional skill at 4th, 7th, 13th, 16th, and 19th level.",
			extraname : "Solid Skills",
			extrachoices : ["Around Corners", "Automatic", "Focus", "Following Patterns", "Increased Pacification", "Multi-Talented", "Quickness", "Readiness", "Reflex Dash", "Response", "Scanner", "Sprung"],
			extraTimes : levels.map(function (n) {
				return n < 4 ? 1 : n < 7 ? 2 : n < 13 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6;
			}),
			"around corners" : {
				name : "Around Corners",
				description : "\n   " + "As long as I'm not deaf, I'm aware of the location of any hidden or invisible creatures within 10 feet of me.",
			},

			"automatic" : {
				name : "Automatic",
				description : "\n   " + "I gain two additional uses of \"Procedural Memory\".",
			},

			"focus" : {
				name : "Focus",
				description : "\n   " + "The range of \"Intended Target\" increases to 40 feet.",
			},

			"following patterns" : {
				name : "Following Patterns",
				description : "\n   " + "I reduce the Passive Perception of all enemies I encounter by 2.",
			},

			"increased pacification" : {
				name : "Increased Pacification",
				description : "\n   " + "When using \"Pacification\", I increase the gained damage dice by one.",
				action : ["action"],
			},

			"multi-talented" : {
				name : "Multi-Talented",
				description : "\n   " + "I gain proficiency in either one skill or one tool of my choice. If I select a skill or tool I already possess proficiency in, I gain a +2 bonus with checks involving that skill or tool.",
				skillstxt : "Choose any one skill or tool",
			},

			"quickness" : {
				name : "Quickness",
				description : "\n   " + "If enemies within 50 feet of me can't see me, I gain a +5 foot bonus to speed.",
			},

			"readiness" : {
				name : "Readiness",
				description : "\n   " + "If I ready an Attack action to trigger when a specific enemy gets within 20 feet or reveals itself, I have advantage on the attack.",
			},

			"reflex dash" : {
				name : "Reflex Dash",
				description : "\n   " + "If an enemy scores a hit on me, I gain a +10 foot bonus to speed until the end of my next turn.",
			},

			"response" : {
				name : "Response",
				description : "\n   " + "If an enemy within 40 feet of me misses on an attack against me, I have advantage on my next attack against that same enemy.",
			},

			"scanner" : {
				name : "Scanner",
				description : "\n   " + "I can Search with a bonus action.",
			},

			"sprung" : {
				name : "Sprung",
				description : "\n   " + "I can stand from prone using only 5 feet of movement. I do not suffer disadvantage with one-handed small arms while prone.",
			},
		},

		"pacification" : {
			name : "Pacification",
			source : ["UM5R", 76],
			minlevel : 2,
			description : "\n   " + "Instead of using my Hit Dice to recover HP, I can expend one during an attack action after hitting to double all damage dice.",
		},

		"ghost" : {
			name : "Ghost",
			source : ["UM5R", 76],
			minlevel : 5,
			description : "\n   " + "I have advantage on initiative. If I act first after rolling initiative, I gain one additional action on my first turn and have advantage on attack rolls until the end of that turn.",
		},

		"efficient killer" : {
			name : "Efficient Killer",
			source : ["UM5R", 76],
			minlevel : 6,
			description : "\n   " + "If I hit my target with a melee weapon or a ranged weapon at 20 feet or closer, I can repeat the same attack against the same target as part of the same action. This attack is counted separately from the previous, so any benefits do not carry over. If the additional attack hits, I can make a third attack as part of the same action. At 13th level, Efficient Killer improves, and I can make up to five additional attacks on the same target as part of the same action as long as each previous attack hits.",
		},

		"most dangerous prey" : {
			name : "Most Dangerous Prey",
			source : ["UM5R", 76],
			minlevel : 9,
			description : "\n   " + "If using a one-handed small arm or melee weapon, I improve the damage of the weapon by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12) when benefitting from cover, when attacking a surprised target, or if my attack roll had advantage.",
		},

		"crippling effect" : {
			name : "Crippling Effect",
			source : ["UM5R", 76],
			minlevel : 10,
			description : "\n   " + "With one-handed melee weapons and one-handed small arms, I score a critical hit on a natural roll of 19 or 20. I also triple all damage dice instead of double.",
		},

		"enhanced camouflage" : {
			name : "Enhanced Camouflage",
			source : ["UM5R", 76],
			minlevel : 17,
			description : "\n   " + "When benefitting from half cover, it is treated as three-quarters cover. When benefitting from three-quarters cover, it is treated as total cover.",
		},

		"system shock" : {
			name : "System Shock",
			source : ["UM5R", 76],
			minlevel : 20,
			description : "\n   " + "After scoring a critical hit on a creature, the target is also stunned until the end of my next turn. When I use this feature, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["marshal"] = {

	name : "Marshal",

	regExpSearch : /^(?=.*marshal).*$/i,

	source : ["UM5R", 77],

	primaryAbility : "Intelligence and Charisma",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Cha"],

	skills : ["\n\n" + toUni("Marshal") + ": Select four skills from Computer Use, History, Investigation, Insight, Medicine, Perception, Survival, Deception, Intimidation, and Persuasion.", "\n\n" + toUni("Marshal") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio"]],
		[true, false, false]
	],

	equipment : "Marshal starting equipment:\n \u2022 Two small arms worth $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $200 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],

	features : {

		"command presence" : {
			name : "Command Presence",
			source : ["UM5R", 78],
			minlevel : 1,
			description : "\n   " + "I select one command presence from the list above. These are always in effect. Each command presence I possess can also be temporarily boosted, after which I cannot boost it again until I finish a long rest. Unless otherwise stated, I gain no benefit from my own command presence.",
			extraname : "Command Presence",
			extrachoices : ["By Example - Tier 1", "By Example - Tier 2", "Field Advice - Tier 1", "Field Advice - Tier 2", "Intimidating Mug - Tier 1", "Intimidating Mug - Tier 2", "Mask of Authority - Tier 1", "Mask of Authority - Tier 2", "Stand As One - Tier 1", "Stand As One - Tier 2", "Strategic Precision - Tier 1", "Strategic Precision - Tier 2"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6;
			}),
			"by example - tier 1" : {
				name : "By Example - Tier 1",
				description : "\n   " + "Allies that can see and hear me have advantage on Intelligence, Wisdom and Charisma saving throws.\n   Exemplary Example (Boost): As an action, for one minute, all allies within 20 feet of me gain a +1 bonus to AC.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Exemplary Example)"],
			},

			"by example - tier 2" : {
				name : "By Example - Tier 2",
				description : "\n   " + "Allies also gain advantage on Constitution and Strength saving throws as well; the bonus from \"Exemplary Example\" increases to +2.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'by example - tier 1'; },
			},

			"field advice - tier 1" : {
				name : "Field Advice - Tier 1",
				description : "\n   " + "Allies that can see and hear me double any effect that removes exhaustion. Finishing a long rest reduces an ally's exhaustion level by 2, provided that the ally has also ingested some food and drink.\n   Profound Advice (Boost): As an action, I give a rousing speech; All allies that can see and hear me reduce their exhaustion by 1.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Profound Advice)"],
			},

			"field advice - tier 2" : {
				name : "Field Advice - Tier 2",
				description : "\n   " + "I gain a number of Hit Dice equal to half my level that I can distribute to allies that can see and hear me when either of us finish a long rest. These additional Hit Dice must be used immediately or are lost. Additionally, when I use \"Profound Advice\", each ally recovers HP equal to a quarter of my current HP.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'field advice - tier 1'; },
			},

			"intimidating mug - tier 1" : {
				name : "Intimidating Mug - Tier 1",
				description : "\n   " + "All enemies within 10 feet of you treat the area as difficult terrain.\n   Menacing Mug (Boost): As an action, I double the range of Intimidating Mug for one minute.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Menacing Mug)"],
			},

			"intimidating mug - tier 2" : {
				name : "Intimidating Mug - Tier 2",
				description : "\n   " + "The range increases to 20 feet, and I can use \"Menacing Mug\" twice before needing to finish a long rest.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'intimidating mug - tier 1'; },
			},

			"mask of authority - tier 1" : {
				name : "Mask of Authority - Tier 1",
				description : "\n   " + "All allies that can see and hear me can re-roll one result of a 1 on the damage dice they roll per hit.\n   Personification of Authority (Boost): As an action, for one minute, all allies that can see and hear me gain a +1 bonus to damage rolls.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Personification of Authority)"],
			},

			"mask of authority - tier 2" : {
				name : "Mask of Authority - Tier 2",
				description : "\n   " + "Allies re-roll all 1s on all damage rolls; \"Personification of Authority\" improves to a +2 bonus to damage rolls.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'mask of authority - tier 1'; },
			},

			"stand as one - tier 1" : {
				name : "Stand As One - Tier 1",
				description : "\n   " + "All allies that can see and hear me reduce all damage inflicted on them by 1 (2 at 10th level).\n   Brotherhood (Boost): As an action, I advise my allies on the best way to avoid damage. I select an energy type (acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder), for one minute, all allies that can see I gain resistance to that energy type.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Brotherhood)"],
			},

			"stand as one - tier 2" : {
				name : "Stand As One - Tier 2",
				description : "\n   " + "All allies in range reduce all damage inflicted on them by 2 (3 at 10th level).",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'stand as one - tier 1'; },
			},

			"strategic precision - tier 1" : {
				name : "Strategic Precision - Tier 1",
				description : "\n   " + "Once per turn, if I hit a creature, I pick one ally that can see or hear me. The targeted ally gains a +2 bonus to thier next attack roll.\n   Strategic Superiority (Boost): As an action, I convey an attack plan. For one minute, all allies that can see and hear me gain a +1 bonus to attack rolls against the last target I hit until the beginning o fmy next turn. My selected ally still only gains a +2 bonus.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Strategic Superiority)"],
			},

			"strategic precision - tier 2" : {
				name : "Strategic Precision - Tier 2",
				description : "\n   " + "Instead of a +2 bonus, the selected ally gains advantage.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'strategic precision - tier 1'; },
			},
		},

		"for the good of the team" : {
			name : "For the Good of the Team",
			source : ["UM5R", 79],
			minlevel : 1,
			description : "\n   " + "As an action, I can allow one ally within line of sight to take any action ordinarily available to them as a reaction or as an additional action on their next turn. Additionally, I can swap my initiative order with another ally once per round.",
			action : ["action"],
		},

		"team power" : {
			name : "Team Power",
			source : ["UM5R", 79],
			minlevel : 1,
			description : "\n   " + "I can select one team power (an an additional one every four levels after). Several powers are only available to choose after 5th level.",
			extraname : "Team Power",
			extrachoices : ["Autocratic", "Big Picture", "Boar's Head", "Control The Battle Theater", "Face Slap (prereq: 5th level)", "Focus Target (prereq: 5th level)", "Improvisation is the Best Plan", "Mark of the Puppeteer", "No One Hits the Chief (prereq: 5th level)", "Pat on the Back", "Plan of Attack", "Pure Leader", "Quick Patch", "Reading Body Language", "Snap Out Of It", "Unnessecary Abuse (prereq: 5th level)"],
			extraTimes : levels.map(function (n) {
				return n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5;
			}),
			"autocratic" : {
				name : "Autocratic",
				description : "\n   " + "If an ally suffers a critical hit from a creature, I can use my reaction to give another ally a single attack against the creature that inflicted the critical hit.",
				action : ["reaction"],
			},

			"big picture" : {
				name : "Big Picture",
				description : "\n   " + "As an action, I select one ally able to see and hear me. If the ally hits with an attack before the beginning of my next turn, that hit gains a damage bonus equal to my Wisdom modifier + my level.",
			},

			"boar's head" : {
				name : "Boar's Head",
				description : "\n   " + "I can spend 10 feet of movement to give an ally a 5-foot bonus to their speed until the beginning of my next turn. I can use Boar's Head multiple times on my turn, but each ally cannot gain more than 5 feet of movement this way.",
			},

			"control the battle theater" : {
				name : "Control The Battle Theater",
				description : "\n   " + "When rolling for initiative, me and each ally that can see or hear me gains a +2 bonus to their roll.",
			},

			"face slap (prereq: 5th level)" : {
				name : "Face Slap",
				description : "\n   " + "As an action, I wake up one adjacent unconscious creature. If the target was unconscious from being reduced to fewer than 0 HP, they are healed to 1 HP. When I use this feature, I cannot use it again until I finish a long rest.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"focus target (prereq: 5th level)" : {
				name : "Focus Target",
				description : "\n   " + "As a bonus action, I can grant an ally within 5 feet of me a single ranged attack against the same creature I hit with a ranged attack this same turn.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				action : ["bonus action"],
			},

			"improvisation is the best plan" : {
				name : "Improvisation is the Best Plan",
				description : "\n   " + "As a bonus action, I gain 1 additional reaction before the beginning of my next turn.",
				action : ["bonus action"],
			},

			"mark of the puppeteer" : {
				name : "Mark of the Puppeteer",
				description : "\n   " + "Any time an ally hits with an attack, I can use a reaction to shove that creature 5 feet as long as the target is not moved into hazardous terrain (like fire or a pit).",
				action : ["reaction"],
			},

			"no one hits the chief (prereq: 5th level)" : {
				name : "No One Hits the Chief",
				description : "\n   " + "If a creature hits me with a critical hit, all allies that can see or hear me have advantage on attack rolls until the beginning of my next turn against the creature that scored the hit.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
			},

			"pat on the back" : {
				name : "Pat on the Back",
				description : "\n   " + "When the party takes a short rest, I can award any of my Hit Dice to an ally. Allies cannot have more Hit Dice than their level.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"pure leader" : {
				name : "Pure Leader",
				description : "\n   " + "If I hit an enemy with a ranged attack, I can inflict no damage, and one ally can disengage from the same enemy and move up to half their speed.",
			},

			"quick patch" : {
				name : "Quick Patch",
				description : "\n   " + "I can use my action to administer aid to an ally. The target regains a number of HP equal to 1d6 per marshal level. When I use this feature, I cannot use it again until I take a short or long rest. I can select this trait multiple times, increasing the damage cured by 1d6 each time and gaining an additional use of quick patch between long rests (max 3).",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"reading body language" : {
				name : "Reading Body Language",
				description : "\n   " + "I have advantage on Insight, Survival, Deception, Intimidation, Performance, or Persuasion checks (select one). I can select this trait multiple times, selecting a different skill each time.",
			},

			"snap out of it" : {
				name : "Snap Out Of It",
				description : "\n   " + "If an ally within 5 feet of me is charmed, frightened, or stunned, I can use my reaction to inflict 1d4 damage on that ally and remove the effect.",
				action : ["reaction"],
			},

			"unnessecary abuse (prereq: 5th level)" : {
				name : "Unnessecary Abuse",
				description : "\n   " + "If an ally within 5 feet of me misses on an attack roll, I can use my reaction to inflict 1d4 damage on that ally and have them re-roll with advantage.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				action : ["reaction"],
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 80],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"manifestation of greatness" : {
			name : "Manifestation of Greatness",
			source : ["UM5R", 80],
			minlevel : 20,
			description : "\n   " + "I gain a pool of 1d4 natural 20s when I finish a long rest, which I can use to replace any d20 rolled by any ally I can see and communicate with as a reaction.",
			usages : "1d4",
			recovery : "long rest",
			action : ["reaction"],
		},
	}
}

ClassList["marshal, archetypeless"] = {

	name : "Marshal, Archetypeless",

	regExpSearch : /^(?=.*marshal)(?=.*archetypeless).*$/i,

	source : ["UM5R", 77],

	primaryAbility : "Intelligence and Charisma",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Cha"],

	skills : ["\n\n" + toUni("Marshal") + ": Select four skills from Computer Use, History, Investigation, Insight, Medicine, Perception, Survival, Deception, Intimidation, and Persuasion.", "\n\n" + toUni("Marshal") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio"]],
		[true, false, false]
	],

	equipment : "Marshal starting equipment:\n \u2022 Two small arms worth $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $200 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],

	features : {

		"command presence" : {
			name : "Command Presence",
			source : ["UM5R", 78],
			minlevel : 1,
			description : "\n   " + "I select one command presence from the list above. These are always in effect. Each command presence I possess can also be temporarily boosted, after which I cannot boost it again until I finish a long rest. Unless otherwise stated, I gain no benefit from my own command presence.",
			extraname : "Command Presence",
			extrachoices : ["By Example - Tier 1", "By Example - Tier 2", "Field Advice - Tier 1", "Field Advice - Tier 2", "Intimidating Mug - Tier 1", "Intimidating Mug - Tier 2", "Mask of Authority - Tier 1", "Mask of Authority - Tier 2", "Stand As One - Tier 1", "Stand As One - Tier 2", "Strategic Precision - Tier 1", "Strategic Precision - Tier 2"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6;
			}),
			"by example - tier 1" : {
				name : "By Example - Tier 1",
				description : "\n   " + "Allies that can see and hear me have advantage on Intelligence, Wisdom and Charisma saving throws.\n   Exemplary Example (Boost): As an action, for one minute, all allies within 20 feet of me gain a +1 bonus to AC.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Exemplary Example)"],
			},

			"by example - tier 2" : {
				name : "By Example - Tier 2",
				description : "\n   " + "Allies also gain advantage on Constitution and Strength saving throws as well; the bonus from \"Exemplary Example\" increases to +2.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'by example - tier 1'; },
			},

			"field advice - tier 1" : {
				name : "Field Advice - Tier 1",
				description : "\n   " + "Allies that can see and hear me double any effect that removes exhaustion. Finishing a long rest reduces an ally's exhaustion level by 2, provided that the ally has also ingested some food and drink.\n   Profound Advice (Boost): As an action, I give a rousing speech; All allies that can see and hear me reduce their exhaustion by 1.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Profound Advice)"],
			},

			"field advice - tier 2" : {
				name : "Field Advice - Tier 2",
				description : "\n   " + "I gain a number of Hit Dice equal to half my level that I can distribute to allies that can see and hear me when either of us finish a long rest. These additional Hit Dice must be used immediately or are lost. Additionally, when I use \"Profound Advice\", each ally recovers HP equal to a quarter of my current HP.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'field advice - tier 1'; },
			},

			"intimidating mug - tier 1" : {
				name : "Intimidating Mug - Tier 1",
				description : "\n   " + "All enemies within 10 feet of you treat the area as difficult terrain.\n   Menacing Mug (Boost): As an action, I double the range of Intimidating Mug for one minute.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Menacing Mug)"],
			},

			"intimidating mug - tier 2" : {
				name : "Intimidating Mug - Tier 2",
				description : "\n   " + "The range increases to 20 feet, and I can use \"Menacing Mug\" twice before needing to finish a long rest.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'intimidating mug - tier 1'; },
			},

			"mask of authority - tier 1" : {
				name : "Mask of Authority - Tier 1",
				description : "\n   " + "All allies that can see and hear me can re-roll one result of a 1 on the damage dice they roll per hit.\n   Personification of Authority (Boost): As an action, for one minute, all allies that can see and hear me gain a +1 bonus to damage rolls.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Personification of Authority)"],
			},

			"mask of authority - tier 2" : {
				name : "Mask of Authority - Tier 2",
				description : "\n   " + "Allies re-roll all 1s on all damage rolls; \"Personification of Authority\" improves to a +2 bonus to damage rolls.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'mask of authority - tier 1'; },
			},

			"stand as one - tier 1" : {
				name : "Stand As One - Tier 1",
				description : "\n   " + "All allies that can see and hear me reduce all damage inflicted on them by 1 (2 at 10th level).\n   Brotherhood (Boost): As an action, I advise my allies on the best way to avoid damage. I select an energy type (acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder), for one minute, all allies that can see I gain resistance to that energy type.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Brotherhood)"],
			},

			"stand as one - tier 2" : {
				name : "Stand As One - Tier 2",
				description : "\n   " + "All allies in range reduce all damage inflicted on them by 2 (3 at 10th level).",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'stand as one - tier 1'; },
			},

			"strategic precision - tier 1" : {
				name : "Strategic Precision - Tier 1",
				description : "\n   " + "Once per turn, if I hit a creature, I pick one ally that can see or hear me. The targeted ally gains a +2 bonus to thier next attack roll.\n   Strategic Superiority (Boost): As an action, I convey an attack plan. For one minute, all allies that can see and hear me gain a +1 bonus to attack rolls against the last target I hit until the beginning o fmy next turn. My selected ally still only gains a +2 bonus.",
				usages : 1,
				recovery : "long rest",
				action : ["action", " (Strategic Superiority)"],
			},

			"strategic precision - tier 2" : {
				name : "Strategic Precision - Tier 2",
				description : "\n   " + "Instead of a +2 bonus, the selected ally gains advantage.",
				prereqeval : function(v) { return classes.known.marshal.level >= 2 && GetFeatureChoice('class', 'marshal', 'command presence') == 'strategic precision - tier 1'; },
			},
		},

		"for the good of the team" : {
			name : "For the Good of the Team",
			source : ["UM5R", 79],
			minlevel : 1,
			description : "\n   " + "As an action, I can allow one ally within line of sight to take any action ordinarily available to them as a reaction or as an additional action on their next turn. Additionally, I can swap my initiative order with another ally once per round.",
			action : ["action"],
		},

		"team power" : {
			name : "Team Power",
			source : ["UM5R", 79],
			minlevel : 1,
			description : "\n   " + "I can select one team power (an an additional one every four levels after). Several powers are only available to choose after 5th level.",
			extraname : "Team Power",
			extrachoices : ["Autocratic", "Big Picture", "Boar's Head", "Control The Battle Theater", "Face Slap (prereq: 5th level)", "Focus Target (prereq: 5th level)", "Improvisation is the Best Plan", "Mark of the Puppeteer", "No One Hits the Chief (prereq: 5th level)", "Pat on the Back", "Plan of Attack", "Pure Leader", "Quick Patch", "Reading Body Language", "Snap Out Of It", "Unnessecary Abuse (prereq: 5th level)"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 11 ? 5 : n < 13 ? 6 : n < 15 ? 7 : n < 17 ? 8 : n < 18 ? 9 : 10;
			}),
			"autocratic" : {
				name : "Autocratic",
				description : "\n   " + "If an ally suffers a critical hit from a creature, I can use my reaction to give another ally a single attack against the creature that inflicted the critical hit.",
				action : ["reaction"],
			},

			"big picture" : {
				name : "Big Picture",
				description : "\n   " + "As an action, I select one ally able to see and hear me. If the ally hits with an attack before the beginning of my next turn, that hit gains a damage bonus equal to my Wisdom modifier + my level.",
			},

			"boar's head" : {
				name : "Boar's Head",
				description : "\n   " + "I can spend 10 feet of movement to give an ally a 5-foot bonus to their speed until the beginning of my next turn. I can use Boar's Head multiple times on my turn, but each ally cannot gain more than 5 feet of movement this way.",
			},

			"control the battle theater" : {
				name : "Control The Battle Theater",
				description : "\n   " + "When rolling for initiative, me and each ally that can see or hear me gains a +2 bonus to their roll.",
			},

			"face slap (prereq: 5th level)" : {
				name : "Face Slap",
				description : "\n   " + "As an action, I wake up one adjacent unconscious creature. If the target was unconscious from being reduced to fewer than 0 HP, they are healed to 1 HP. When I use this feature, I cannot use it again until I finish a long rest.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"focus target (prereq: 5th level)" : {
				name : "Focus Target",
				description : "\n   " + "As a bonus action, I can grant an ally within 5 feet of me a single ranged attack against the same creature I hit with a ranged attack this same turn.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				action : ["bonus action"],
			},

			"improvisation is the best plan" : {
				name : "Improvisation is the Best Plan",
				description : "\n   " + "As a bonus action, I gain 1 additional reaction before the beginning of my next turn.",
				action : ["bonus action"],
			},

			"mark of the puppeteer" : {
				name : "Mark of the Puppeteer",
				description : "\n   " + "Any time an ally hits with an attack, I can use a reaction to shove that creature 5 feet as long as the target is not moved into hazardous terrain (like fire or a pit).",
				action : ["reaction"],
			},

			"no one hits the chief (prereq: 5th level)" : {
				name : "No One Hits the Chief",
				description : "\n   " + "If a creature hits me with a critical hit, all allies that can see or hear me have advantage on attack rolls until the beginning of my next turn against the creature that scored the hit.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
			},

			"pat on the back" : {
				name : "Pat on the Back",
				description : "\n   " + "When the party takes a short rest, I can award any of my Hit Dice to an ally. Allies cannot have more Hit Dice than their level.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"pure leader" : {
				name : "Pure Leader",
				description : "\n   " + "If I hit an enemy with a ranged attack, I can inflict no damage, and one ally can disengage from the same enemy and move up to half their speed.",
			},

			"quick patch" : {
				name : "Quick Patch",
				description : "\n   " + "I can use my action to administer aid to an ally. The target regains a number of HP equal to 1d6 per marshal level. When I use this feature, I cannot use it again until I take a short or long rest. I can select this trait multiple times, increasing the damage cured by 1d6 each time and gaining an additional use of quick patch between long rests (max 3).",
				usages : 1,
				recovery : "short rest",
				action : ["action"],
			},

			"reading body language" : {
				name : "Reading Body Language",
				description : "\n   " + "I have advantage on Insight, Survival, Deception, Intimidation, Performance, or Persuasion checks (select one). I can select this trait multiple times, selecting a different skill each time.",
			},

			"snap out of it" : {
				name : "Snap Out Of It",
				description : "\n   " + "If an ally within 5 feet of me is charmed, frightened, or stunned, I can use my reaction to inflict 1d4 damage on that ally and remove the effect.",
				action : ["reaction"],
			},

			"unnessecary abuse (prereq: 5th level)" : {
				name : "Unnessecary Abuse",
				description : "\n   " + "If an ally within 5 feet of me misses on an attack roll, I can use my reaction to inflict 1d4 damage on that ally and have them re-roll with advantage.",
				prereqeval : function(v) { return classes.known.marshal.level >= 5; },
				action : ["reaction"],
			},
		},

		"manifestation of greatness" : {
			name : "Manifestation of Greatness",
			source : ["UM5R", 80],
			minlevel : 20,
			description : "\n   " + "I gain a pool of 1d4 natural 20s when I finish a long rest, which I can use to replace any d20 rolled by any ally I can see and communicate with as a reaction.",
			usages : "1d4",
			recovery : "long rest",
			action : ["reaction"],
		},
	}
}

ClassList["martial artist"] = {

	name : "Martial Artist",

	regExpSearch : /^(?=.*martial)(?=.*artist).*$/i,

	source : ["UM5R", 81],

	primaryAbility : "Strength or Dexterity",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Dex"],

	skills : ["\n\n" + toUni("Martial Artist") + ": Select three skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, or Survival. I also gain proficiency in four martial weapons of my choice.", "\n\n" + toUni("Martial Artist") + ": None."],

	toolProfs : {
		primary : [["Disguise kit or Poisoner's kit", 1], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Martial Artist starting equipment:\n \u2022 Any simple melee weapon;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],

	features : {

		"fighting form" : {
			name : "Fighting Form",
			source : ["UM5R", 81],
			minlevel : 1,
			description : "\n   " + "I select either Strength or Dexterity as my ability for attack and damage rolls.",
			choices : ["Strength", "Dexterity"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Fighting Form (Strength)",
				description : "\n   " + "If I use Strength as my attack/damage ability, I gain the following benefits:\n   I gain a +1 bonus to all melee damage rolls.\n   I gain proficiency with all medium and heavy armor.\n   I have advantage when attempting to shove a target. A shoved creature is pushed 10 feet away instead of 5 feet.",
				armor : [false, true, true, false],
			},

			"dexterity" : {
				name : "Fighting Form (Dexterity)",
				description : "\n   " + "If I use Dexterity as my attack/damage ability, I gain the following benefits:\n   When reaching \"Combo Chain\" Tier 2, I gain a +1 bonus to melee attack rolls.\n   I add half my Dexterity modifier (rounded down) to my normal Dexterity modifier when determining my AC with light armor.\n   I can use Acrobatics instead of Athletics to make or sustain grapple checks.",
			},
		},

		"combo chain" : {
			name : "Combo Chain",
			source : ["UM5R", 82],
			minlevel : 1,
			description : "\n   " + "I gain the ability to string fighting maneuvers together to unleash more powerful attacks. I always begin a battle on Tier 1, inflicting 1d6 damage with unarmed attacks. If on my turn, I score at least one melee hit, then at the beginning of my next turn, I advance to the next tier. I must have hit an enemy at least once during my turn to move up on my next turn and I can only advance my tier once per turn. On tiers 2, 3, 4, or 5, after hitting a target, I can perform a finishing move. If I don't perform a finishing move, the combo chain can continue. When I perform a finishing move or fail to make an attack during my turn, I restart the combo chain at Tier 1. I must decide to perform a finishing move after a successful attack, and on the same turn as one. When I reach the maximum tier allowed by my level (Tier 3 at 1st level, Tier 4 at 9th level, and Tier 5 at 13th level), I can sustain the chain and my damage dice for as long as I wish, but the moment I commit to a finishing move, I revert back to Tier 1. I can keep my chain while changing targets.",
			toNotesPage : [{
				name : "Additional Combo Chain Notes",
				source : ["UM5R", 82],
				popupName : "Additional Combo Chain Notes",
				note : [
					"I can use melee weapons with combo chain but utilize the table's damage die instead of the weapon's. If I have an ability that increases the damage of my unarmed attack, my damage dice may change, but my tier does not.",
					"Tier   Unarmed Damage   Finishing Moves",
					"1      1d6              None",
					"2      1d8              Bone Breaker, Circular Attack, Ground & Pound, Surging Punch",
					"3      1d10             Counter, Soul Fist, Spinning Attack, Ranbu",
					"4      1d12             The Zone, Touch of Death, Drop Hammer, Xian",
					"5      2d6              Ultra, Falcon Punch, Sun-Goku-Satsu, Limit Break"
				],
			}, {
				name : "Tier 2 Finishing Moves",
				source : ["UM5R", 82],
				popupName : "Tier 2 Finishing Moves",
				note : [
					"Bone Breaker: I exert pressure on a limb and hear a crack. I double both my damage dice and ability modifier to my last hit.",
					"Circular Attack: I spin my leg around to catch another opponent. After resolving damage from my last hit, I make a single additional melee attack (at the same tier) against one other creature in reach (different than the one that escalated the combo chain) as part of the same action as the last hit. If I score a hit, I gain an additional identical attack this turn against a new creature different than the first and second (these attacks cannot trigger a finisher).",
					"Ground & Pound: After resolving damage from my last hit, I use my agility and strength to knock the target prone (the creature must be my size or smaller). I can then either use a Disengage action or have advantage on my next attack against the target.",
					"Surging Punch: I channel my willpower, focus my energy, and let out a roar. After resolving damage from my last hit, the target is pushed 5 feet and has disadvantage on its next skill check or attack roll until the end of its next turn (the creature must be my size or smaller)."
				],
			}, {
				name : "Tier 3 Finishing Moves",
				source : ["UM5R", 82],
				popupName : "Tier 3 Finishing Moves",
				note : [
					"Counter: After resolving damage from my last hit, I gain a +2 bonus to my AC for one minute or until I move. If a creature hits me, I can use a reaction to make a melee attack against the triggering enemy.",
					"Soul Fist: After resolving my last hit, I can disengage from the target. Additionally, the target I hit last suffers additional damage equal to my attack ability score at the beginning of its next turn.",
					"Spinning Attack: After resolving damage from my last hit, I make a melee attack at this tier to each enemy within ten feet of me. If I miss, the creature still suffers my ability modifier damage; if hit, the target is knocked prone. These attacks cannot trigger a finisher.",
					"Ranbu: I double my last hit's regular damage dice and make additional melee attacks at this tier against the same creature until I miss twice or hit four times. These attacks cannot trigger a finisher."
				],
			}, {
				name : "Tier 4 Finishing Moves",
				source : ["UM5R", 83],
				popupName : "Tier 4 Finishing Moves",
				note : [
					"The Zone: After resolving damage from my last hit, my damage die remains at this tier regardless of my combo chain until I finish a short rest.",
					"Touch of Death: After resolving damage from my last hit, until the target is killed or five minutes have passed, the target's speed is halved, and it takes damage equal to half my level at the beginning of its turn. This damage value does not increase if I inflict this finisher on the same target more than once.",
					"Drop Hammer: If I'm grabbing the last creature I hit (it must be my size or smaller), after resolving damage, I maneuver myself to force my enemy into the ground. I make an Athletics check with advantage and leap into the air. I inflict additional damage equal to my roll as I crash back down, possibly creating an impact crater (with cracks in the ground).",
					"Xian: After resolving damage from my last hit, all enemies in reach are pushed ten feet. I cannot be shoved and am resistant to all damage types for one minute."
				],
			}, {
				name : "Tier 5 Finishing Moves",
				source : ["UM5R", 83],
				popupName : "Tier 5 Finishing Moves",
				note : [
					"Spirit Bomb: I triple my ability damage to my last hit, and if my size or smaller, the target is incapacitated for one minute or until the target suffers damage or is moved in any way.",
					"Falcon Punch: My last attack is a critical hit, I inflict maximum damage, and a creature my size or smaller is shoved 30 feet. If the target hits an obstruction, it suffers additional damage equal to the remaining distance. The target may still pass through the obstruction.",
					"Shun-Goku-Satsu: After resolving damage from my last hit, I make six additional melee attacks (at this tier) against any number of enemies within ten feet of me (each target can only be attacked a maximum of three times). Additionally, all attacks on me miss until the beginning of my next turn. These attacks cannot trigger a finisher.",
					"Limit Break: After resolving damage for my last hit, I inflict additional damage equal to the amount of HP I'm currently down from my total (maximum 50 HP)."
				],
			}],
		},

		"martial exploit" : {
			name : "Martial Exploit",
			source : ["UM5R", 83],
			minlevel : 1,
			description : "\n   " + "I can select one martial exploit from the list above.",
			extraname : "Martial Exploits",
			extrachoices : ["C-C-C-Combo Breaker", "Calisthenics", "Gun Something-Something", "Chain Boost", "Marker", "Newaza", "Pound For Pound", "Redirection of Energy", "Rhythm String", "Tag Team", "Ultra", "Unarmed Expanded Profile", "Vicious Hook (prereq: 10th level)", "Wrestler"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 5 ? 2 : n < 8 ? 3 : n < 11 ? 4 : n < 14 ? 5 : n < 17 ? 6 : n < 20 ? 7 : 8;
			}),
			"c-c-c-combo breaker" : {
				name : "C-C-C-Combo Breaker",
				description : "\n   " + "If the same creature in a single round hits me twice, I can perform a single melee attack against the triggering creature as a reaction (to the second attack). If I hit, I inflict normal damage, and the target's turn ends.",
				action : ["reaction"],
			},

			"calisthenics" : {
				name : "Calisthenics",
				description : "\n   " + "I gain a +1 damage bonus to melee damage rolls.",
			},

			"gun something-something" : {
				name : "Gun Something-Something",
				description : "\n   " + "I treat one-handed small arms as melee weapons when attacking targets at 5 feet or closer. Additionally, all ranged attacks with one-handed small arms made against targets 5 feet or closer can be considered as melee attacks.",
			},

			"chain boost" : {
				name : "Chain Boost",
				description : "\n   " + "Instead of using my hit dice to recover HP during a short rest, I can expend them to increase my \"Combo Chain\". As a bonus action and spending 1d4 hit dice, I recover no HP, and increase my combo chain by that same value. Once I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"marker" : {
				name : "Marker",
				description : "\n   " + "When I hit an enemy that is in reach of me, it has disadvantage on any attacks that don't include me as a target until the end of my next turn. The effect ends if I'm reduced to 0 HP, I move out of reach of that enemy, but not if the enemy moves out of reach of me.",
			},

			"newaza" : {
				name : "Newaza",
				description : "\n   " + "I gain the following benefits:\n   If a creature breaks from my grapple, I can use my reaction to attempt a grapple check on the same target.\n   I have a +2 bonus to AC against any creature I'm grappling.\n   I do not have disadvantage on melee attacks while prone. Enemies do not have advantage on me with non-reach melee attacks if I'm prone.",
			},

			"pound for pound" : {
				name : "Pound For Pound",
				description : "\n   " + "If a creature moves away from me, even with the disengage action, I can use my reaction to move up to my speed with it.",
				action : ["reaction"],
			},

			"redirection of energy" : {
				name : "Redirection of Energy",
				description : "\n   " + "When an enemy scores a critical hit on me with a melee attack, I gain temporary HP equal to the amount of damage dealt. When I use this exploit, I cannot use it again until I finish a long rest. Additionally, any time a creature scores a critical hit on me with a melee attack, I have advantage on melee attacks against that creature until the end of my next turn.",
				usages : 1,
				recovery : "long rest",
			},

			"rhythm string" : {
				name : "Rhythm String",
				description : "\n   " + "After performing a finishing move, the tier of said finishing move is a bonus I receive on my next melee attack at Tier 1.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"tag team" : {
				name : "Tag Team",
				description : "\n   " + "If an ally hits an enemy within 5 feet of me with a melee attack, I can deal additional damage to that hit equal to my Strength or Dexterity modifier as a reaction. This does not count towards my \"Combo Chain\".",
			},

			"ultra" : {
				name : "Ultra",
				description : "\n   " + "After hitting a creature, I increase my combo chain tier by one and perform a finishing move. I must have access to the higher tier, and after using Ultra, I can't use it again until I finish a long rest.",
				usages : 1,
				recovery : "long rest",
			},

			"unarmed expanded profile" : {
				name : "Unarmed Expanded Profile",
				description : "\n   " + "I spend 30 feet of movement, and my unarmed attacks have reach until the beginning of my next turn.",
			},

			"vicious hook (prereq: 10th level)" : {
				name : "Vicious Hook",
				description : "\n   " + "My melee attacks score a critical hit on a natural roll of 19 or 20.",
				prereqeval : function(v) { return classes.known['martial artist'].level >= 10; },
			},

			"wrestler" : {
				name : "Wrestler",
				description : "\n   " + "I gain the following benefits:\n   If I'm grappling a target, I have half cover from attacks from other targets.\n   Any attack that misses me by 5 or less hits my grappled target instead.\n   When moving a grabbed creature my size or smaller, my speed is not reduced.",
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 84],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},
	}
}

ClassList["martial artist, archetypeless"] = {

	name : "Martial Artist, Archetypeless",

	regExpSearch : /^(?=.*martial)(?=.*artist)(?=.*archetypeless).*$/i,

	source : ["UM5R", 81],

	primaryAbility : "Strength or Dexterity",

	prereqs : "Strength 13 or Dexterity 13",

	die : 10,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Str", "Dex"],

	skills : ["\n\n" + toUni("Martial Artist") + ": Select three skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, or Survival. I also gain proficiency in four martial weapons of my choice.", "\n\n" + toUni("Martial Artist") + ": None."],

	toolProfs : {
		primary : [["Disguise kit or Poisoner's kit", 1], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Martial Artist starting equipment:\n \u2022 Any simple melee weapon;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],

	features : {

		"fighting form" : {
			name : "Fighting Form",
			source : ["UM5R", 81],
			minlevel : 1,
			description : "\n   " + "I select either Strength or Dexterity as my ability for attack and damage rolls.",
			choices : ["Strength", "Dexterity"],
			choicesNotInMenu : false,
			"strength" : {
				name : "Fighting Form (Strength)",
				description : "\n   " + "If I use Strength as my attack/damage ability, I gain the following benefits:\n   I gain a +1 bonus to all melee damage rolls.\n   I gain proficiency with all medium and heavy armor.\n   I have advantage when attempting to shove a target. A shoved creature is pushed 10 feet away instead of 5 feet.",
				armor : [false, true, true, false],
			},

			"dexterity" : {
				name : "Fighting Form (Dexterity)",
				description : "\n   " + "If I use Dexterity as my attack/damage ability, I gain the following benefits:\n   When reaching \"Combo Chain\" Tier 2, I gain a +1 bonus to melee attack rolls.\n   I add half my Dexterity modifier (rounded down) to my normal Dexterity modifier when determining my AC with light armor.\n   I can use Acrobatics instead of Athletics to make or sustain grapple checks.",
			},
		},

		"combo chain" : {
			name : "Combo Chain",
			source : ["UM5R", 82],
			minlevel : 1,
			description : "\n   " + "I gain the ability to string fighting maneuvers together to unleash more powerful attacks. I always begin a battle on Tier 1, inflicting 1d6 damage with unarmed attacks. If on my turn, I score at least one melee hit, then at the beginning of my next turn, I advance to the next tier. I must have hit an enemy at least once during my turn to move up on my next turn and I can only advance my tier once per turn. On tiers 2, 3, 4, or 5, after hitting a target, I can perform a finishing move. If I don't perform a finishing move, the combo chain can continue. When I perform a finishing move or fail to make an attack during my turn, I restart the combo chain at Tier 1. I must decide to perform a finishing move after a successful attack, and on the same turn as one. When I reach the maximum tier allowed by my level (Tier 3 at 1st level, Tier 4 at 9th level, and Tier 5 at 13th level), I can sustain the chain and my damage dice for as long as I wish, but the moment I commit to a finishing move, I revert back to Tier 1. I can keep my chain while changing targets.",
			toNotesPage : [{
				name : "Additional Combo Chain Notes",
				source : ["UM5R", 82],
				popupName : "Additional Combo Chain Notes",
				note : [
					"I can use melee weapons with combo chain but utilize the table's damage die instead of the weapon's. If I have an ability that increases the damage of my unarmed attack, my damage dice may change, but my tier does not.",
					"Tier   Unarmed Damage   Finishing Moves",
					"1      1d6              None",
					"2      1d8              Bone Breaker, Circular Attack, Ground & Pound, Surging Punch",
					"3      1d10             Counter, Soul Fist, Spinning Attack, Ranbu",
					"4      1d12             The Zone, Touch of Death, Drop Hammer, Xian",
					"5      2d6              Ultra, Falcon Punch, Sun-Goku-Satsu, Limit Break"
				],
			}, {
				name : "Tier 2 Finishing Moves",
				source : ["UM5R", 82],
				popupName : "Tier 2 Finishing Moves",
				note : [
					"Bone Breaker: I exert pressure on a limb and hear a crack. I double both my damage dice and ability modifier to my last hit.",
					"Circular Attack: I spin my leg around to catch another opponent. After resolving damage from my last hit, I make a single additional melee attack (at the same tier) against one other creature in reach (different than the one that escalated the combo chain) as part of the same action as the last hit. If I score a hit, I gain an additional identical attack this turn against a new creature different than the first and second (these attacks cannot trigger a finisher).",
					"Ground & Pound: After resolving damage from my last hit, I use my agility and strength to knock the target prone (the creature must be my size or smaller). I can then either use a Disengage action or have advantage on my next attack against the target.",
					"Surging Punch: I channel my willpower, focus my energy, and let out a roar. After resolving damage from my last hit, the target is pushed 5 feet and has disadvantage on its next skill check or attack roll until the end of its next turn (the creature must be my size or smaller)."
				],
			}, {
				name : "Tier 3 Finishing Moves",
				source : ["UM5R", 82],
				popupName : "Tier 3 Finishing Moves",
				note : [
					"Counter: After resolving damage from my last hit, I gain a +2 bonus to my AC for one minute or until I move. If a creature hits me, I can use a reaction to make a melee attack against the triggering enemy.",
					"Soul Fist: After resolving my last hit, I can disengage from the target. Additionally, the target I hit last suffers additional damage equal to my attack ability score at the beginning of its next turn.",
					"Spinning Attack: After resolving damage from my last hit, I make a melee attack at this tier to each enemy within ten feet of me. If I miss, the creature still suffers my ability modifier damage; if hit, the target is knocked prone. These attacks cannot trigger a finisher.",
					"Ranbu: I double my last hit's regular damage dice and make additional melee attacks at this tier against the same creature until I miss twice or hit four times. These attacks cannot trigger a finisher."
				],
			}, {
				name : "Tier 4 Finishing Moves",
				source : ["UM5R", 83],
				popupName : "Tier 4 Finishing Moves",
				note : [
					"The Zone: After resolving damage from my last hit, my damage die remains at this tier regardless of my combo chain until I finish a short rest.",
					"Touch of Death: After resolving damage from my last hit, until the target is killed or five minutes have passed, the target's speed is halved, and it takes damage equal to half my level at the beginning of its turn. This damage value does not increase if I inflict this finisher on the same target more than once.",
					"Drop Hammer: If I'm grabbing the last creature I hit (it must be my size or smaller), after resolving damage, I maneuver myself to force my enemy into the ground. I make an Athletics check with advantage and leap into the air. I inflict additional damage equal to my roll as I crash back down, possibly creating an impact crater (with cracks in the ground).",
					"Xian: After resolving damage from my last hit, all enemies in reach are pushed ten feet. I cannot be shoved and am resistant to all damage types for one minute."
				],
			}, {
				name : "Tier 5 Finishing Moves",
				source : ["UM5R", 83],
				popupName : "Tier 5 Finishing Moves",
				note : [
					"Spirit Bomb: I triple my ability damage to my last hit, and if my size or smaller, the target is incapacitated for one minute or until the target suffers damage or is moved in any way.",
					"Falcon Punch: My last attack is a critical hit, I inflict maximum damage, and a creature my size or smaller is shoved 30 feet. If the target hits an obstruction, it suffers additional damage equal to the remaining distance. The target may still pass through the obstruction.",
					"Shun-Goku-Satsu: After resolving damage from my last hit, I make six additional melee attacks (at this tier) against any number of enemies within ten feet of me (each target can only be attacked a maximum of three times). Additionally, all attacks on me miss until the beginning of my next turn. These attacks cannot trigger a finisher.",
					"Limit Break: After resolving damage for my last hit, I inflict additional damage equal to the amount of HP I'm currently down from my total (maximum 50 HP)."
				],
			}],
		},

		"martial exploit" : {
			name : "Martial Exploit",
			source : ["UM5R", 83],
			minlevel : 1,
			description : "\n   " + "I can select one martial exploit from the list above.",
			extraname : "Martial Exploits",
			extrachoices : ["C-C-C-Combo Breaker", "Calisthenics", "Gun Something-Something", "Chain Boost", "Marker", "Newaza", "Pound For Pound", "Redirection of Energy", "Rhythm String", "Tag Team", "Ultra", "Unarmed Expanded Profile", "Vicious Hook (prereq: 10th level)", "Wrestler"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 8 ? 5 : n < 11 ? 7 : n < 14 ? 8 : n < 15 ? 9 : n < 17 ? 10 : n < 18 ? 11 : n < 20 ? 12 : 13;
			}),
			"c-c-c-combo breaker" : {
				name : "C-C-C-Combo Breaker",
				description : "\n   " + "If the same creature in a single round hits me twice, I can perform a single melee attack against the triggering creature as a reaction (to the second attack). If I hit, I inflict normal damage, and the target's turn ends.",
				action : ["reaction"],
			},

			"calisthenics" : {
				name : "Calisthenics",
				description : "\n   " + "I gain a +1 damage bonus to melee damage rolls.",
			},

			"gun something-something" : {
				name : "Gun Something-Something",
				description : "\n   " + "I treat one-handed small arms as melee weapons when attacking targets at 5 feet or closer. Additionally, all ranged attacks with one-handed small arms made against targets 5 feet or closer can be considered as melee attacks.",
			},

			"chain boost" : {
				name : "Chain Boost",
				description : "\n   " + "Instead of using my hit dice to recover HP during a short rest, I can expend them to increase my \"Combo Chain\". As a bonus action and spending 1d4 hit dice, I recover no HP, and increase my combo chain by that same value. Once I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"marker" : {
				name : "Marker",
				description : "\n   " + "When I hit an enemy that is in reach of me, it has disadvantage on any attacks that don't include me as a target until the end of my next turn. The effect ends if I'm reduced to 0 HP, I move out of reach of that enemy, but not if the enemy moves out of reach of me.",
			},

			"newaza" : {
				name : "Newaza",
				description : "\n   " + "I gain the following benefits:\n   If a creature breaks from my grapple, I can use my reaction to attempt a grapple check on the same target.\n   I have a +2 bonus to AC against any creature I'm grappling.\n   I do not have disadvantage on melee attacks while prone. Enemies do not have advantage on me with non-reach melee attacks if I'm prone.",
			},

			"pound for pound" : {
				name : "Pound For Pound",
				description : "\n   " + "If a creature moves away from me, even with the disengage action, I can use my reaction to move up to my speed with it.",
				action : ["reaction"],
			},

			"redirection of energy" : {
				name : "Redirection of Energy",
				description : "\n   " + "When an enemy scores a critical hit on me with a melee attack, I gain temporary HP equal to the amount of damage dealt. When I use this exploit, I cannot use it again until I finish a long rest. Additionally, any time a creature scores a critical hit on me with a melee attack, I have advantage on melee attacks against that creature until the end of my next turn.",
				usages : 1,
				recovery : "long rest",
			},

			"rhythm string" : {
				name : "Rhythm String",
				description : "\n   " + "After performing a finishing move, the tier of said finishing move is a bonus I receive on my next melee attack at Tier 1.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"tag team" : {
				name : "Tag Team",
				description : "\n   " + "If an ally hits an enemy within 5 feet of me with a melee attack, I can deal additional damage to that hit equal to my Strength or Dexterity modifier as a reaction. This does not count towards my \"Combo Chain\".",
			},

			"ultra" : {
				name : "Ultra",
				description : "\n   " + "After hitting a creature, I increase my combo chain tier by one and perform a finishing move. I must have access to the higher tier, and after using Ultra, I can't use it again until I finish a long rest.",
				usages : 1,
				recovery : "long rest",
			},

			"unarmed expanded profile" : {
				name : "Unarmed Expanded Profile",
				description : "\n   " + "I spend 30 feet of movement, and my unarmed attacks have reach until the beginning of my next turn.",
			},

			"vicious hook (prereq: 10th level)" : {
				name : "Vicious Hook",
				description : "\n   " + "My melee attacks score a critical hit on a natural roll of 19 or 20.",
				prereqeval : function(v) { return classes.known['martial artist'].level >= 10; },
			},

			"wrestler" : {
				name : "Wrestler",
				description : "\n   " + "I gain the following benefits:\n   If I'm grappling a target, I have half cover from attacks from other targets.\n   Any attack that misses me by 5 or less hits my grappled target instead.\n   When moving a grabbed creature my size or smaller, my speed is not reduced.",
			},
		},
	}
}

spellSchoolList["MedEx"] = "medical exploit";

ClassList["medic"] = {

	name : "Medic",

	regExpSearch : /^(?=.*medic).*$/i,

	source : ["UM5R", 85],

	primaryAbility : "Intelligence or Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 6,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis"],

	skills : ["\n\n" + toUni("Medic") + ": Select six skills from Computer Use, Deception, Demolitions, Engineering, History, Insight, Investigation, Nature, Perception, Persuasion, or Sciences.", "\n\n" + toUni("Medic") + ": None."],

	toolProfs : {
		primary : [["Poisoner's kit"], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Medic starting equipment:\n \u2022 A medical kit and a drug kit;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $200 in additional non-military gear (no weapons, weapon-accessories, bullets, or armor).",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	spellcastingFactor : 3,

	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 1, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 4, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 4, 3, 2, 0, 0, 0, 0, 0], //lvl14
		[4, 4, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 4, 3, 3, 0, 0, 0, 0, 0], //lvl16
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl17
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl18
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl19
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl20
	],

	spellcastingKnown : {

		cantrips : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],

		spells : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],

		prepared : true,

		atwill : true,
	},

	spellcastingList : {

		class : "medic",

		school : ["MedEx"],

		level : [0, 4],

		ritual : false,
	},

	features : {

		"medical exploits" : {
			name : "Medical Exploits",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "When I become a medic, I select either my Intelligence or Wisdom as my medic ability. It is used when setting the saving throw DC for a medical application I use and when making an attack roll with one. If selecting Intelligence, the Wisdom (Medicine) skill can be replaced with Intelligence (Medicine).",
			choices : ["Intelligence", "Wisdom"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Medical Exploits (Intelligence)",
				description : "\n   " + "Intelligence is my medic ability. Many exploits and applications require the use of either a medical kit or a drug kit. A medical kit has enough supplies for 50 actions, while the drug kit has enough for 10 actions. This is regardless of how many targets are affected by said action.",
				abilitySave : 4,
			},

			"wisdom" : {
				name : "Medical Exploits (Wisdom)",
				description : "\n   " + "Wisdom is my medic ability. Many exploits and applications require the use of either a medical kit or a drug kit. A medical kit has enough supplies for 50 actions, while the drug kit has enough for 10 actions. This is regardless of how many targets are affected by said action.",
				abilitySave : 5,
			},
		},

		"target avoidance" : {
			name : "Target Avoidance",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I can take a Dash action. At 2nd level, as a bonus action, I can instead take a Disengage action.",
			action : ["bonus action"],
		},

		"primary target" : {
			name : "Primary Target",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "If I don't use the Attack action on my turn, I gain a +2 bonus to AC until the start of my next turn. At 5th level, this bonus increases to +3.",
		},

		"martial exploit" : {
			name : "Martial Exploit",
			source : ["UM5R", 83],
			minlevel : 1,
			description : "\n   " + "I can select one martial exploit from the list above.",
			extraname : "Martial Exploits",
			extrachoices : ["C-C-C-Combo Breaker", "Calisthenics", "Gun Something-Something", "Chain Boost", "Marker", "Newaza", "Pound For Pound", "Redirection of Energy", "Rhythm String", "Tag Team", "Ultra", "Unarmed Expanded Profile", "Vicious Hook (prereq: 10th level)", "Wrestler"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 5 ? 2 : n < 8 ? 3 : n < 11 ? 4 : n < 14 ? 5 : n < 17 ? 6 : n < 20 ? 7 : 8;
			}),
			"c-c-c-combo breaker" : {
				name : "C-C-C-Combo Breaker",
				description : "\n   " + "If the same creature in a single round hits me twice, I can perform a single melee attack against the triggering creature as a reaction (to the second attack). If I hit, I inflict normal damage, and the target's turn ends.",
				action : ["reaction"],
			},

			"calisthenics" : {
				name : "Calisthenics",
				description : "\n   " + "I gain a +1 damage bonus to melee damage rolls.",
			},

			"gun something-something" : {
				name : "Gun Something-Something",
				description : "\n   " + "I treat one-handed small arms as melee weapons when attacking targets at 5 feet or closer. Additionally, all ranged attacks with one-handed small arms made against targets 5 feet or closer can be considered as melee attacks.",
			},

			"chain boost" : {
				name : "Chain Boost",
				description : "\n   " + "Instead of using my hit dice to recover HP during a short rest, I can expend them to increase my \"Combo Chain\". As a bonus action and spending 1d4 hit dice, I recover no HP, and increase my combo chain by that same value. Once I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"marker" : {
				name : "Marker",
				description : "\n   " + "When I hit an enemy that is in reach of me, it has disadvantage on any attacks that don't include me as a target until the end of my next turn. The effect ends if I'm reduced to 0 HP, I move out of reach of that enemy, but not if the enemy moves out of reach of me.",
			},

			"newaza" : {
				name : "Newaza",
				description : "\n   " + "I gain the following benefits:\n   If a creature breaks from my grapple, I can use my reaction to attempt a grapple check on the same target.\n   I have a +2 bonus to AC against any creature I'm grappling.\n   I do not have disadvantage on melee attacks while prone. Enemies do not have advantage on me with non-reach melee attacks if I'm prone.",
			},

			"pound for pound" : {
				name : "Pound For Pound",
				description : "\n   " + "If a creature moves away from me, even with the disengage action, I can use my reaction to move up to my speed with it.",
				action : ["reaction"],
			},

			"redirection of energy" : {
				name : "Redirection of Energy",
				description : "\n   " + "When an enemy scores a critical hit on me with a melee attack, I gain temporary HP equal to the amount of damage dealt. When I use this exploit, I cannot use it again until I finish a long rest. Additionally, any time a creature scores a critical hit on me with a melee attack, I have advantage on melee attacks against that creature until the end of my next turn.",
				usages : 1,
				recovery : "long rest",
			},

			"rhythm string" : {
				name : "Rhythm String",
				description : "\n   " + "After performing a finishing move, the tier of said finishing move is a bonus I receive on my next melee attack at Tier 1.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"tag team" : {
				name : "Tag Team",
				description : "\n   " + "If an ally hits an enemy within 5 feet of me with a melee attack, I can deal additional damage to that hit equal to my Strength or Dexterity modifier as a reaction. This does not count towards my \"Combo Chain\".",
			},

			"ultra" : {
				name : "Ultra",
				description : "\n   " + "After hitting a creature, I increase my combo chain tier by one and perform a finishing move. I must have access to the higher tier, and after using Ultra, I can't use it again until I finish a long rest.",
				usages : 1,
				recovery : "long rest",
			},

			"unarmed expanded profile" : {
				name : "Unarmed Expanded Profile",
				description : "\n   " + "I spend 30 feet of movement, and my unarmed attacks have reach until the beginning of my next turn.",
			},

			"vicious hook (prereq: 10th level)" : {
				name : "Vicious Hook",
				description : "\n   " + "My melee attacks score a critical hit on a natural roll of 19 or 20.",
				prereqeval : function(v) { return classes.known['martial artist'].level >= 10; },
			},

			"wrestler" : {
				name : "Wrestler",
				description : "\n   " + "I gain the following benefits:\n   If I'm grappling a target, I have half cover from attacks from other targets.\n   Any attack that misses me by 5 or less hits my grappled target instead.\n   When moving a grabbed creature my size or smaller, my speed is not reduced.",
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 86],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"medical emergency" : {
			name : "Medical Emergency",
			source : ["UM5R", 86],
			minlevel : 6,
			description : "\n   " + "Once per turn (on my turn), I can activate one medical application requiring an action or bonus action as a free action.",
		},

		"intelligent assistance" : {
			name : "Intelligent Assistance",
			source : ["UM5R", 86],
			minlevel : 10,
			description : "\n   " + "I double my proficiency bonus with all Intelligence and Wisdom saving throws.",
		},

		"risk an aneurysm" : {
			name : "Risk An Aneurysm",
			source : ["UM5R", 86],
			minlevel : 13,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them on my turn to recover a medical exploit of any level I can use. I must employ that exploit within 1 minute or it is lost. I regain one level of exploit slot for each Hit Die sacrificed, but I can only recover one slot per turn.",
		},

		"expanded knowledge" : {
			name : "Expanded Knowledge",
			source : ["UM5R", 86],
			minlevel : 17,
			description : "\n   " + "I select two more skills from my class list to have proficiency in.",
			skillstxt : "Choose two skills from Computer Use, Deception, Demolitions, Engineering, History, Insight, Investigation, Nature, Perception, Persuasion, or Sciences.",
		},

		"good thing you have friends" : {
			name : "Good Thing You Have Friends",
			source : ["UM5R", 86],
			minlevel : 20,
			description : "\n   " + "For each ally within 5 feet of me, I can increase the level of cover I have. If I'm still hit with an attack, you can transfer all damage to any single adjacent ally regardless if the original attack roll can hit the ally or not. If the attack targets me and the ally, the ally takes both damage values, taking my damage second. The ally does not have to be willing.",
		},
	}
}

ClassList["medic, archetypeless"] = {

	name : "Medic, Archetypeless",

	regExpSearch : /^(?=.*medic)(?=.*archetypeless).*$/i,

	source : ["UM5R", 85],

	primaryAbility : "Intelligence or Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 6,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis"],

	skills : ["\n\n" + toUni("Medic") + ": Select six skills from Computer Use, Deception, Demolitions, Engineering, History, Insight, Investigation, Nature, Perception, Persuasion, or Sciences.", "\n\n" + toUni("Medic") + ": None."],

	toolProfs : {
		primary : [["Poisoner's kit"], ["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Medic starting equipment:\n \u2022 A medical kit and a drug kit;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $200 in additional non-military gear (no weapons, weapon-accessories, bullets, or armor).",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	spellcastingFactor : 3,

	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 1, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 4, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 4, 3, 2, 0, 0, 0, 0, 0], //lvl14
		[4, 4, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 4, 3, 3, 0, 0, 0, 0, 0], //lvl16
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl17
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl18
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl19
		[4, 4, 4, 3, 0, 0, 0, 0, 0], //lvl20
	],

	spellcastingKnown : {

		cantrips : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		spells : [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 11],

		prepared : true,

		atwill : true,
	},

	spellcastingList : {

		class : "medic",

		school : ["MedEx"],

		level : [0, 4],

		ritual : false,
	},

	features : {

		"medical exploits" : {
			name : "Medical Exploits",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "When I become a medic, I select either my Intelligence or Wisdom as my medic ability. It is used when setting the saving throw DC for a medical application I use and when making an attack roll with one. If selecting Intelligence, the Wisdom (Medicine) skill can be replaced with Intelligence (Medicine).",
			choices : ["Intelligence", "Wisdom"],
			choicesNotInMenu : false,
			"intelligence" : {
				name : "Medical Exploits (Intelligence)",
				description : "\n   " + "Intelligence is my medic ability. Many exploits and applications require the use of either a medical kit or a drug kit. A medical kit has enough supplies for 50 actions, while the drug kit has enough for 10 actions. This is regardless of how many targets are affected by said action.",
				abilitySave : 4,
			},

			"wisdom" : {
				name : "Medical Exploits (Wisdom)",
				description : "\n   " + "Wisdom is my medic ability. Many exploits and applications require the use of either a medical kit or a drug kit. A medical kit has enough supplies for 50 actions, while the drug kit has enough for 10 actions. This is regardless of how many targets are affected by said action.",
				abilitySave : 5,
			},
		},

		"target avoidance" : {
			name : "Target Avoidance",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I can take a Dash action. At 2nd level, as a bonus action, I can instead take a Disengage action.",
			action : ["bonus action"],
		},

		"primary target" : {
			name : "Primary Target",
			source : ["UM5R", 85],
			minlevel : 1,
			description : "\n   " + "If I don't use the Attack action on my turn, I gain a +2 bonus to AC until the start of my next turn. At 5th level, this bonus increases to +3.",
		},

		"martial exploit" : {
			name : "Martial Exploit",
			source : ["UM5R", 83],
			minlevel : 1,
			description : "\n   " + "I can select one martial exploit from the list above.",
			extraname : "Martial Exploits",
			extrachoices : ["C-C-C-Combo Breaker", "Calisthenics", "Gun Something-Something", "Chain Boost", "Marker", "Newaza", "Pound For Pound", "Redirection of Energy", "Rhythm String", "Tag Team", "Ultra", "Unarmed Expanded Profile", "Vicious Hook (prereq: 10th level)", "Wrestler"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 5 ? 2 : n < 8 ? 3 : n < 11 ? 4 : n < 14 ? 5 : n < 17 ? 6 : n < 20 ? 7 : 8;
			}),
			"c-c-c-combo breaker" : {
				name : "C-C-C-Combo Breaker",
				description : "\n   " + "If the same creature in a single round hits me twice, I can perform a single melee attack against the triggering creature as a reaction (to the second attack). If I hit, I inflict normal damage, and the target's turn ends.",
				action : ["reaction"],
			},

			"calisthenics" : {
				name : "Calisthenics",
				description : "\n   " + "I gain a +1 damage bonus to melee damage rolls.",
			},

			"gun something-something" : {
				name : "Gun Something-Something",
				description : "\n   " + "I treat one-handed small arms as melee weapons when attacking targets at 5 feet or closer. Additionally, all ranged attacks with one-handed small arms made against targets 5 feet or closer can be considered as melee attacks.",
			},

			"chain boost" : {
				name : "Chain Boost",
				description : "\n   " + "Instead of using my hit dice to recover HP during a short rest, I can expend them to increase my \"Combo Chain\". As a bonus action and spending 1d4 hit dice, I recover no HP, and increase my combo chain by that same value. Once I use this feature, I cannot use it again until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"marker" : {
				name : "Marker",
				description : "\n   " + "When I hit an enemy that is in reach of me, it has disadvantage on any attacks that don't include me as a target until the end of my next turn. The effect ends if I'm reduced to 0 HP, I move out of reach of that enemy, but not if the enemy moves out of reach of me.",
			},

			"newaza" : {
				name : "Newaza",
				description : "\n   " + "I gain the following benefits:\n   If a creature breaks from my grapple, I can use my reaction to attempt a grapple check on the same target.\n   I have a +2 bonus to AC against any creature I'm grappling.\n   I do not have disadvantage on melee attacks while prone. Enemies do not have advantage on me with non-reach melee attacks if I'm prone.",
			},

			"pound for pound" : {
				name : "Pound For Pound",
				description : "\n   " + "If a creature moves away from me, even with the disengage action, I can use my reaction to move up to my speed with it.",
				action : ["reaction"],
			},

			"redirection of energy" : {
				name : "Redirection of Energy",
				description : "\n   " + "When an enemy scores a critical hit on me with a melee attack, I gain temporary HP equal to the amount of damage dealt. When I use this exploit, I cannot use it again until I finish a long rest. Additionally, any time a creature scores a critical hit on me with a melee attack, I have advantage on melee attacks against that creature until the end of my next turn.",
				usages : 1,
				recovery : "long rest",
			},

			"rhythm string" : {
				name : "Rhythm String",
				description : "\n   " + "After performing a finishing move, the tier of said finishing move is a bonus I receive on my next melee attack at Tier 1.",
			},

			"plan of attack" : {
				name : "Plan of Attack",
				description : "\n   " + "I can spend 10 feet of movement to move another ally 5 feet. This movement does not provoke opportunity attacks and does not require a reaction on the ally's part.",
			},

			"tag team" : {
				name : "Tag Team",
				description : "\n   " + "If an ally hits an enemy within 5 feet of me with a melee attack, I can deal additional damage to that hit equal to my Strength or Dexterity modifier as a reaction. This does not count towards my \"Combo Chain\".",
			},

			"ultra" : {
				name : "Ultra",
				description : "\n   " + "After hitting a creature, I increase my combo chain tier by one and perform a finishing move. I must have access to the higher tier, and after using Ultra, I can't use it again until I finish a long rest.",
				usages : 1,
				recovery : "long rest",
			},

			"unarmed expanded profile" : {
				name : "Unarmed Expanded Profile",
				description : "\n   " + "I spend 30 feet of movement, and my unarmed attacks have reach until the beginning of my next turn.",
			},

			"vicious hook (prereq: 10th level)" : {
				name : "Vicious Hook",
				description : "\n   " + "My melee attacks score a critical hit on a natural roll of 19 or 20.",
				prereqeval : function(v) { return classes.known['martial artist'].level >= 10; },
			},

			"wrestler" : {
				name : "Wrestler",
				description : "\n   " + "I gain the following benefits:\n   If I'm grappling a target, I have half cover from attacks from other targets.\n   Any attack that misses me by 5 or less hits my grappled target instead.\n   When moving a grabbed creature my size or smaller, my speed is not reduced.",
			},
		},

		"medical emergency" : {
			name : "Medical Emergency",
			source : ["UM5R", 86],
			minlevel : 6,
			description : "\n   " + "Once per turn (on my turn), I can activate one medical application requiring an action or bonus action as a free action.",
		},

		"intelligent assistance" : {
			name : "Intelligent Assistance",
			source : ["UM5R", 86],
			minlevel : 10,
			description : "\n   " + "I double my proficiency bonus with all Intelligence and Wisdom saving throws.",
		},

		"risk an aneurysm" : {
			name : "Risk An Aneurysm",
			source : ["UM5R", 86],
			minlevel : 13,
			description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them on my turn to recover a medical exploit of any level I can use. I must employ that exploit within 1 minute or it is lost. I regain one level of exploit slot for each Hit Die sacrificed, but I can only recover one slot per turn.",
		},

		"expanded knowledge" : {
			name : "Expanded Knowledge",
			source : ["UM5R", 86],
			minlevel : 17,
			description : "\n   " + "I select two more skills from my class list to have proficiency in.",
			skillstxt : "Choose two skills from Computer Use, Deception, Demolitions, Engineering, History, Insight, Investigation, Nature, Perception, Persuasion, or Sciences.",
		},

		"good thing you have friends" : {
			name : "Good Thing You Have Friends",
			source : ["UM5R", 86],
			minlevel : 20,
			description : "\n   " + "For each ally within 5 feet of me, I can increase the level of cover I have. If I'm still hit with an attack, you can transfer all damage to any single adjacent ally regardless if the original attack roll can hit the ally or not. If the attack targets me and the ally, the ally takes both damage values, taking my damage second. The ally does not have to be willing.",
		},
	}
}

SpellsList["defilade"] = {

	name : "Defilade",

	regExpSearch : /^(?=.*defilade).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 rea",

	range : "Self",

	components : "S",

	duration : "Instantaneous",

	description : "On enemy crit, all allies that can see me and enemy gain adv. on attack rolls on enemy until the start of its turn.",

	descriptionFull : "If a creature scores a critical hit against me, each ally that can see both me and the triggering enemy has advantage on attack rolls against the triggering enemy until the start of its next turn.",
}

SpellsList["diagnose and cure"] = {

	name : "Diagnose and Cure",

	regExpSearch : /^(?=.*diagnose)(?=.*and)(?=.*cure).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "1 min",

	description : "The target gains a bonus on its next STR, CON, INT, or WIS saving throw equal to my proficiency bonus.",

	descriptionFull : "I use my medical kit on a willing creature. The target gains a bonus on its next Strength, Constitution, Intelligence, or Wisdom saving throw equal to my proficiency bonus. Each target can only receive this bonus once per check.",
}

SpellsList["do science to it"] = {

	name : "Do Science To It",

	regExpSearch : /^(?=.*do)(?=.*science)(?=.*to)(?=.*it).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S",

	duration : "Instantaneous",

	description : "I double my proficiency bonus with my next Medicine or Sciences check made this turn.",

	descriptionFull : "I double my proficiency bonus with my next Medicine or Sciences check made this turn. I can only gain this bonus once per check.",
}

SpellsList["evasive overdrive"] = {

	name : "Evasive Overdrive",

	regExpSearch : /^(?=.*evasive)(?=.*overdrive).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S",

	duration : "1 rnd",

	description : "I'm able to do everything in my power to avoid getting hit.",

	descriptionFull : "I'm able to do everything in my power to avoid getting hit. I gain a +1 bonus to AC against one creature I can see, and I don't provoke opportunity attacks from the target. Both effects last until the beginning of my next turn. I can only gain this bonus once per turn.",
}

SpellsList["field shot"] = {

	name : "Field Shot",

	regExpSearch : /^(?=.*field)(?=.*shot).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S,M",

	compMaterial : "Any firearm",

	duration : "Instantaneous",

	description : "After using a medical exploit as my action, I make a single ranged attack this same turn.",

	descriptionFull : "After using a medical exploit as my action, I make a single ranged attack this same turn. I can use Intelligence or Wisdom instead of Dexterity as my modifier for attack and damage.",
}

SpellsList["imperative escape"] = {

	name : "Imperative Escape",

	regExpSearch : /^(?=.*imperative)(?=.*escape).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 rea",

	range : "Self",

	components : "S",

	duration : "Instantaneous",

	description : "As a reaction to suffering damage from a hit while already below half HP, I halve the attack's damage.",

	descriptionFull : "After using a medical exploit as my action, I make a single ranged attack this same turn. I can use Intelligence or Wisdom instead of Dexterity as my modifier for attack and damage.",
}

SpellsList["live, damn you"] = {

	name : "Live, Damn You",

	regExpSearch : /^(?=.*live)(?=.*damn)(?=.*you).*$/i,

	source : ["UM5R", 87],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "If the target has been reduced to 0 HP and is making death saving throws, the target gains 1 HP.",

	descriptionFull : "I use my Medical kit on a willing creature and spend a Hit Die. If the target has been reduced to 0 HP and is making death saving throws, the target gains 1 HP. If above 0 HP, the target recovers HP equal to my proficiency bonus + 1d6. This increases to 2d6 at 10th level.",
}

SpellsList["medical expertise"] = {

	name : "Medical Expertise",

	regExpSearch : /^(?=.*medical)(?=.*expertise).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 rea",

	range : "Special",

	components : "V",

	duration : "Instantaneous",

	save : "Int",

	description : "I can aid allies in pinpointing weak spots in enemies based on my own medical knowledge.",

	descriptionFull : "I can aid allies in pinpointing weak spots in enemies based on my own medical knowledge. As a reaction to an ally's successful attack on a creature, I add my Intelligence or Wisdom modifier as extra damage. The ally must be able to hear me.",
}

SpellsList["medical knowledge"] = {

	name : "Medical Knowledge",

	regExpSearch : /^(?=.*medical)(?=.*knowledge).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S,M",

	compMaterial : "Any firearm",

	duration : "Instantaneous",

	description : "I make an exploit attack against the same target after hitting a creature with a firearm.",

	descriptionFull : "I make an exploit attack against the same target after hitting a creature with a firearm. On a hit, the target has disadvantage on its next attack roll until the beginning of my next turn.",
}

SpellsList["modern master"] = {

	name : "Modern Master",

	regExpSearch : /^(?=.*modern)(?=.*master).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target recovers 1d4 additional HP. This increases to 2d4 at 10th level. I can only gain this bonus once per exploit.",

	descriptionFull : "As a bonus action during the same round after attempting an exploit that recovers a target's HP, the target recovers 1d4 additional HP. This increases to 2d4 at 10th level. I can only gain this bonus once per exploit.",
}

SpellsList["outthink and outwit"] = {

	name : "Outthink and Outwit",

	regExpSearch : /^(?=.*outthink)(?=.*and)(?=.*outwit).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 a",

	range : "30 ft",

	components : "S",

	duration : "Instantaneous",

	description : "I make a ranged attack against the target. I can use Intelligence or Wisdom instead of Dexterity as my modifier for attack and damage.",
}

SpellsList["weak spot"] = {

	name : "Weak Spot",

	regExpSearch : /^(?=.*weak)(?=.*spot).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 0,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	save : "Int",

	description : "After a hit, the target's speed is reduced by half until the beginning of my next turn.",

	descriptionFull : "After I score a hit, the target's speed is reduced by half until the beginning of my next turn. I can only apply this effect once per turn.",
}

SpellsList["anatomy expert"] = {

	name : "Anatomy Expert",

	regExpSearch : /^(?=.*anatomy)(?=.*expert).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S,M",

	compMaterial : "Any firearm",

	duration : "Instantaneous",

	description : "I target one creature I scored a critical hit on this turn; I double the amount of dice rolled for damage.",
}

SpellsList["clamp the artery"] = {

	name : "Clamp The Artery",

	regExpSearch : /^(?=.*clamp)(?=.*the)(?=.*artery).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target is healed of any damage incurred by the last hit it received since the end of my previous turn.",
}

SpellsList["cortical reinforcement injection"] = {

	name : "Cortical Reinforment Injection",

	nameShort : "Reinforcement Injection",

	regExpSearch : /^(?=.*cortical)(?=.*reinforcement)(?=.*injection).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "24 h",

	description : "I target one living creature. The target is immune to being blinded.",

	descriptionFull : "I target one living creature. The target is immune to being blinded.\n\nAdvanced: At 10th level, I can target two creatures, though each one requires an action. I can sacrifice the action on my next turn to administer both injections this turn.",
}

SpellsList["standard procedure"] = {

	name : "Standard Procedure",

	regExpSearch : /^(?=.*standard)(?=.*procedure).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "24 h",

	description : "The target has advantage on any saving throws to recover from disease or poison for the duration.",

	descriptionFull : "I target one living creature suffering from disease or poison. The target has advantage on any saving throws to recover from disease or poison for the duration.",
}

SpellsList["emergency patch"] = {

	name : "Emergency Patch",

	regExpSearch : /^(?=.*emergency)(?=.*patch).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target regains HP equal to my proficiency bonus + my Wisdom modifier + my level.",

	descriptionFull : "I target one living creature. The target regains HP equal to my proficiency bonus + my Wisdom modifier + my level.\n\nAdvanced: At 10th level, I can either increase the HP recovered to triple my Wisdom bonus, or I can target two creatures instead of one.",
}

SpellsList["stanozolol injection"] = {

	name : "Stanzolol Injection",

	regExpSearch : /^(?=.*stanozolol)(?=.*injection).*$/i,

	source : ["UM5R", 88],

	classes : ["medic"],

	level : 1,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "1 h",

	description : "The target has advantage on Dexterity ability checks and saving throws and gains a 10-foot bonus to speed for the duration.",

	descriptionFull : "I target one living creature. The target has advantage on Dexterity ability checks and saving throws and gains a 10-foot bonus to speed for the duration.\n\nAdvanced: At 10th level, I can target up to 2 creatures, but each requires an action. I can sacrifice theaction on my next turn to administer both injections this turn.",
}

SpellsList["adrenaline injection"] = {

	name : "Adrenaline Injection",

	regExpSearch : /^(?=.*adrenaline)(?=.*injection).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 bns",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "Instantaneous",

	description : "I target one living creature to gain one additional action on its next turn and on its following turn.",

	descriptionFull : "I target one living creature to gain one additional action on its next turn and on its following turn. This is in addition to any actions the target already has, including bonus actions.\n\nAdvancement: At 15th level, I can target up to 2 creatures, but each requires either an action or a bonus action (on the same turn).",
}

SpellsList["advantageous scleroderma injection"] = {

	name : "Advantageous Scleroderma Injection",

	nameShort : "Scleroderma Injection",

	regExpSearch : /^(?=.*advantageous)(?=.*scleroderma)(?=.*injection).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "5 min",

	description : "I target one living creature to gain a +2 bonus to AC for the duration. This bonus increases to +3 at 14th level.",

	descriptionFull : "I target one living creature to gain a +2 bonus to AC for the duration. This bonus increases to +3 at 14th level.\n\nAdvancement: At 15th level, I can target up to 2 creatures, but each requires an action. I can sacrifice my action on my next turn to administer both injections this turn.",
}

SpellsList["angel of death"] = {

	name : "Angel of Death",

	regExpSearch : /^(?=.*angel)(?=.*of)(?=.*death).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "I target one living creature reduced to 0 HP or less in the previous round. I gain 5 + my level in temporary HP.",
}

SpellsList["medical master"] = {

	name : "Medical Master",

	regExpSearch : /^(?=.*medical)(?=.*master).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "5 min",

	description : "The targets regains HP equal to my proficiency bonus + my Wisdom modifier + my level.",

	descriptionFull : "I target myself and one living creature OR two living creatures. Those targets regains HP equal to my proficiency bonus + my Wisdom modifier + my level. They also have advantage on Constitution ability checks and saving throws for the duration.\n\nAdvancement: At 15th level, I can target up to 4 creatures, but every two targets require an action. I can sacrifice the action on my next turn to affect all targets this turn.",
}

SpellsList["natural helper"] = {

	name : "Natural Helper",

	regExpSearch : /^(?=.*natural)(?=.*helper).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target regains HP equal to double my proficiency bonus + double my Wisdom modifier + my level.",

	descriptionFull : "I target myself or one living creature. The target regains HP equal to double my proficiency bonus + double my Wisdom modifier + my level.\n\nAdvancement: At 15th level, the healing increases to triple my proficiency bonus and ability modifier.",
}

SpellsList["quick recovery"] = {

	name : "Quick Recovery",

	regExpSearch : /^(?=.*quick)(?=.*recovery).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 bns",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "1 rnd",

	description : "I double my proficiency bonus to my next Intelligence or Wisdom skill check this turn.",

	descriptionFull : "I double my proficiency bonus to my next Intelligence or Wisdom skill check this turn. If the check still fails, I have advantage on all saving throws until the end of my next turn.",
}

SpellsList["synthetic steroid"] = {

	name : "Synthetic Steroid",

	regExpSearch : /^(?=.*synthetic)(?=.*steroid).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "1 h",

	description : "The target has advantage on Strength ability checks as well as a +1 bonus to Strength-based attack rolls for the duration.",

	descriptionFull : "I target one living creature. The target has advantage on Strength ability checks as well as a +1 bonus to Strength-based attack rolls for the duration.\n\nAdvancement: At 10th level, I can target up to 2 creatures, but each requires an action. I can sacrifice my action on my next turn to affect both targets this turn.",
}

SpellsList["treat patient"] = {

	name : "Treat Patient",

	regExpSearch : /^(?=.*treat)(?=.*patient).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "One creature recovers as many Hit Dice as my proficiency bonus.",
}

SpellsList["xanthine injection"] = {

	name : "Xanthine Injection",

	regExpSearch : /^(?=.*xanthine)(?=.*injection).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 2,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "1 h",

	description : "For the duration, the target has advantage on Constitution ability checks and saving throws.",

	descriptionFull : "I target one living creature. For the duration, the target has advantage on Constitution ability checks and saving throws. The target also gains temporary HP equal to double my proficiency bonus + double my Wisdom bonus.\n\nAdvancement: At 10th level, I can target up to 2 creatures, but each requires an action. I can sacrifice my action on my next turn to affect both targets this turn.",
}

SpellsList["analeptic injection"] = {

	name : "Analeptic Injection",

	nameShort : "Scleroderma Injection",

	regExpSearch : /^(?=.*analeptic)(?=.*injection).*$/i,

	source : ["UM5R", 89],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "Instant/Special",

	save : "Int",

	description : "I target one unconscious living creature. The target wakes up.",

	descriptionFull : "I target one unconscious living creature. The target wakes up. If the target is at 0 HP, the target is brought to 1 HP, wakes up, and can expend up to 2d4 hit dice to recover HP. The target is also immune to sleep effects until it finishes a long rest.\n\nAdvancement: At 15th level, I can target up to 2 creatures, but each requires an action. I can sacrifice my next turn to administer both injections this turn.",
}

SpellsList["aversion therapy"] = {

	name : "Aversion Therapy",

	regExpSearch : /^(?=.*aversion)(?=.*therapy).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 bns",

	range : "Self",

	components : "S,M",

	compMaterial : "Any firearm",

	duration : "1 min",

	description : "The target suffers a -2 penalty to AC, and its speed is halved until it makes a Constitution saving throw.",

	descriptionFull : "I target one creature I hit with a ranged weapon this turn. The target suffers a -2 penalty to AC, and its speed is halved until it makes a Constitution saving throw.",
}

SpellsList["ephedrine psychotropic injection"] = {

	name : "Ephedrine Psychotropic Injection",

	nameShort : "Ephedrine Injection",

	regExpSearch : /^(?=.*ephedrine)(?=.*psychotropic)(?=.*injection).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "5 min",

	description : "For the duration, the target automatically succeeds at all Wisdom and Intelligence saving throws.",

	descriptionFull : "I target one living creature. For the duration, the target automatically succeeds at all Wisdom and Intelligence saving throws. The target also gains resistance to all physical damage.",
}

SpellsList["delay condition"] = {

	name : "Delay Condition",

	regExpSearch : /^(?=.*delay)(?=.*condition).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "I target one living creature. Its exhaustion level is reduced by 4.",

	descriptionFull : "I target one living creature. Its exhaustion level is reduced by 4.\n\nAdvancement: At 15th level, I can target up to 2 creatures, but each requires an action. I can sacrifice the action on my next turn to administer both injections this turn.",
}

SpellsList["minor medical miracle"] = {

	name : "Minor Medical Miracle",

	nameShort : "Mi. Medical Miracle",

	regExpSearch : /^(?=.*minor)(?=.*medical)(?=.*miracle).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target regains HP equal to double my proficiency bonus + double my Wisdom modifier.",

	descriptionFull : "I target one creature that has been reduced to 0 HP or killed in the past five minutes. The target regains HP equal to double my proficiency bonus + double my Wisdom modifier. The target can also expend up to 2d6 Hit Dice to recover additional HP.",
}

SpellsList["unhealthy psychostimulant injection"] = {

	name : "Unhealthy Psychostimulant Injection",

	nameShort : "Unhealty Injection",

	regExpSearch : /^(?=.*unhealthy)(?=.*psychostimulant)(?=.*injection).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 3,

	school : "MedEx",

	time : "1 a",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "Instantaneous",

	description : "For the duration, when making an attack action, the target may make one extra attack with any weapon it is holding.",

	descriptionFull : "I target one living creature. For the duration, when making an attack action, the target may make one extra attack with any weapon it is holding. This is in addition to any attacks it already has and those gained by a bonus action.\n\nAdvancement: At 15th level, I can target up to 2 creatures, but each requires an action. I can sacrifice the action on my next turn to administer both injections this turn.",
}

SpellsList["exotic concoction"] = {

	name : "Exotic Concoction",

	regExpSearch : /^(?=.*exotic)(?=.*concoction).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 4,

	school : "MedEx",

	time : "5 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A drug kit",

	duration : "Instantaneous",

	description : "Each target gains temporary HP equal to double my proficiency bonus + double my Wisdom modifier.",

	descriptionFull : "I target up to 6 creatures (which can include me). Each target gains temporary HP equal to double my proficiency bonus + double my Wisdom modifier.\n\nAdvancement: At 20th level, target(s) gain an additional 3d4 temporary HP.",
}

SpellsList["field experience"] = {

	name : "Field Experience",

	regExpSearch : /^(?=.*field)(?=.*experience).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 4,

	school : "MedEx",

	time : "1 a",

	range : "30 ft",

	components : "V",

	duration : "5 min",

	description : "For the duration, the target's weapon attacks score a critical hit on a roll of 19 or 20.",

	descriptionFull : "I target up to 6 creatures (which can include me). For the duration, the target's weapon attacks score a critical hit on a roll of 19 or 20. If the target already can score a critical hit on a roll of 19 or 20, it increases to 18, 19, or 20.",
}

SpellsList["i can hear the bells ringing"] = {

	name : "I Can Hear The Bells Ringing",

	nameShort : "The Ringing Bells",

	regExpSearch : /^(?=.*i)(?=.*can)(?=.*hear)(?=.*the)(?=.*bells)(?=.*ringing).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 4,

	school : "MedEx",

	time : "1 rea",

	range : "Self",

	components : "S",

	duration : "Instantaneous",

	description : "As a reaction to being targeted by an area effect, I'm moved to the nearest unoccupied space outside the area (suffering no damage).",

	descriptionFull : "As a reaction to being targeted by an area effect, I'm moved to the nearest unoccupied space outside the area (suffering no damage). I also gain a +5 bonus to AC and have advantage on Dexterity ability checks and saving throws until the end of my next turn.",
}

SpellsList["major medical miracle"] = {

	name : "Major Medical Miracle",

	nameShort : "Ma. Medical Miracle",

	regExpSearch : /^(?=.*major)(?=.*medical)(?=.*miracle).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 4,

	school : "MedEx",

	time : "1 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "The target recovers from all of the following conditions. blinded, charmed, deafened, diseased, paralyzed, poisoned, and stunned.",

	descriptionFull : "I target one living creature. The target recovers from all of the following conditions. blinded, charmed, deafened, diseased, paralyzed, poisoned, and stunned, it's exhaustion level is reduced to 0, and it recovers HP equal to double my proficiency bonus + double my Wisdom modifier + double my level.",
}

SpellsList["playing god"] = {

	name : "Playing God",

	regExpSearch : /^(?=.*playing)(?=.*god).*$/i,

	source : ["UM5R", 90],

	classes : ["medic"],

	level : 4,

	school : "MedEx",

	time : "5 min",

	range : "Touch",

	components : "S,M",

	compMaterial : "A medical kit",

	duration : "Instantaneous",

	description : "I target one ally killed in the past 30 minutes. The target returns to life with 20 HP, and they awaken.",
}

ClassList["sniper"] = {

	name : "Sniper",

	regExpSearch : /^(?=.*sniper).*$/i,

	source : ["UM5R", 91],

	primaryAbility : "Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Sniper") + ": Stealth and two skills from Acrobatics, Athletics, History, Insight, Perception, or Sleight of Hand.", "\n\n" + toUni("Sniper") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "atomizer", "god's eye sniper gun", "super-kill sniper"]],
		[true, false, false]
	],

	equipment : "Sniper starting equipment:\n \u2022 A basic sniper rifle;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],

	features : {

		"marksman's talent" : {
			name : "Marksman's Talent",
			source : ["UM5R", 92],
			minlevel : 1,
			description : "\n   " + "I can spend marksman points to employ one or more of the talents on the following list as part of an attack action employing a sniper weapon. Each effect can only be implemented once per attack. I start with marksman points equal to 2 + my Wisdom modifier, gaining an additional points at higher levels. When I take a short or long rest, I recover any spent marksman points. Additionally, if I kill a target with a sniper weapon, I gain 2 marksman points. The number of points I can spend per attack depends on my level.",
			additional : ["2 + Wisdom modifier Marksman Points / 2 points per attack", "3 + Wisdom modifier Marksman Points / 2 points per attack", "3 + Wisdom modifier Marksman Points / 2 points per attack", "4 + Wisdom modifier Marksman Points / 2 points per attack", "4 + Wisdom modifier Marksman Points / 3 points per attack", "5 + Wisdom modifier Marksman Points / 3 points per attack", "5 + Wisdom modifier Marksman Points / 3 points per attack", "6 + Wisdom modifier Marksman Points / 3 points per attack", "6 + Wisdom modifier Marksman Points / 3 points per attack", "7 + Wisdom modifier Marksman Points / 4 points per attack", "7 + Wisdom modifier Marksman Points / 4 points per attack", "8 + Wisdom modifier Marksman Points / 4 points per attack", "8 + Wisdom modifier Marksman Points / 4 points per attack", "9 + Wisdom modifier Marksman Points / 4 points per attack", "9 + Wisdom modifier Marksman Points / 4 points per attack", "10 + Wisdom modifier Marksman Points / 4 points per attack", "10 + Wisdom modifier Marksman Points / 5 points per attack", "11 + Wisdom modifier Marksman Points / 5 points per attack", "11 + Wisdom modifier Marksman Points / 5 points per attack", "12 + Wisdom modifier Marksman Points / 6 points per attack"],
			toNotesPage : [{
				name : "Marksman's Talents",
				source : ["UM5R", 93],
				popupName : "Marksman's Talents",
				note : [
					"Academic Kill: When I hit with an attack, I can spend 1 marksman point to inflict an additional 1d6 damage. This increases to 2d6 at 5th level, 3d6 at 9th level, 4d6 at 13th level, and 5d6 at 17th level.",
					"Assassin Psychology: When I roll a natural 18 or 19 on an attack roll, I can spend 1 marksman point to turn that attack into a critical hit.",
					"Boom, Headshot!: When I kill a creature, at the cost of 2 marksman points, all Medium-sized or smaller enemies in a 5-foot radius around the target have disadvantage on attack rolls until the start of my next turn.",
					"Dum-Dum: When I score a critical hit with an attack, at the cost of 1 marksman point, the target also has disadvantage on saving throws and ability checks until the beginning of your next turn.",
					"Hollow Point: When I score a critical hit, at the cost of 1 marksman point, I roll three times the damage dice instead of two.",
					"Magic Bullet: After dropping a creature to 0 HP with a sniper weapon, at the cost of 1 marksman point, I can make a single ranged attack against one creature within 20 feet of the original target. I use no additional ammunition. I can repeat this process until I fail to drop a creature to 0 HP, I run out of enemies in range, or I hit three creatures (each additional attack costs an additional marksman point).",
					"Pinpoint Accuracy: When I score a critical hit, at the cost of 4 marksman points, the target must make a Constitution saving throw or be stunned until the beginning of my next turn. The DC for the saving throw is 8 + my proficiency bonus + my Wisdom or Dexterity modifier (my choice).",
					"Systemic Infammation: When I score a critical hit on a living creature, at the cost of 3 marksman points, the target is poisoned for one minute or until it passes a Constitution saving throw at the end if each of its turns. The DC for the saving throw is 8 + your proficiency bonus + my Wisdom or Dexterity modifier (my choice).",
					"Twitchy Fingers: After scoring a critical hit, at the cost of 1 marksman point, I make 1 additional attack with the same weapon as part of the same action against the same target.",
					"Weak Spot: When I hit with an attack, at the cost of 2 marksman points, my next attack on the target has advantage; This effect expires at the end of my next turn."
				],
			}],
		},

		"battle condition" : {
			name : "Battle Condition",
			source : ["UM5R", 93],
			minlevel : 1,
			description : "\n   " + "I gain one of the following special traits. I may select another condition at 2nd, 9th, 13th, and 20th level.",
			extraname : "Special Traits",
			extrachoices : ["Army Crawl", "Ballistics Expertise", "Covert Operation", "Dead Eye", "Low Profile", "Failure is not an Option", "Snap Shot", "Lead The Target", "Penetration Shot", "Perfect Tracker", "Sharpshooter", "Shock & Awe", "Smooth As Glass", "Zero Your Weapon"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 20 ? 4 : 5;
			}),
			"army crawl" : {
				name : "Army Crawl",
				description : "\n   " + "While prone, I don't have disadvantage on ranged attacks made with sniper weapons.",
			},

			"ballistics expertise" : {
				name : "Ballistics Expertise",
				description : "\n   " + "I can spend 10 feet of movement to either switch to a one-handed small arm from a sniper weapon OR switch to a sniper weapon from a one-handed small arm.",
			},

			"covert operation" : {
				name : "Covert Operation",
				description : "\n   " + "I can spend 20 feet of movement to have advantage on Stealth checks until the end of my turn.",
			},

			"dead eye" : {
				name : "Dead Eye",
				description : "\n   " + "If a creature 25 feet or closer scores a critical hit on me, I can automatically switch to my pistol and make a ranged attack against the target as a reaction.",
			},

			"low profile" : {
				name : "Low Profile",
				description : "\n   " + "While prone, I gain the benefit of half-cover. If already behind half-cover while prone, it counts as three-quarters cover. If behind three-quarters cover while prone, it counts as full cover.",
			},

			"failure is not an option" : {
				name : "Failure is not an Option",
				description : "\n   " + "If I roll a natural 1 on an attack roll with a sniper weapon, I can re-roll. I cannot use this feature if I have disadvantage.",
			},

			"snap shot" : {
				name : "Snap Shot",
				description : "\n   " + "I can now use \"Marksman Talent\" against targets 10 feet away or further with a sniper weapon.",
			},

			"lead the target" : {
				name : "Lead The Target",
				description : "\n   " + "I target a creature in line of sight to become my focus as a bonus action. I gain a +1 bonus to attack rolls with sniper weapons against my focus. After I select a focus, I cannot select another until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"penetration shot" : {
				name : "Penetration Shot",
				description : "\n   " + "When making a ranged attack roll with a sniper weapon against a target with cover, I treat total cover as three-quarters, three-quarters cover as half-cover, and I ignore half-cover.",
			},

			"perfect tracker" : {
				name : "Perfect Tracker",
				description : "\n   " + "I can move up to half my speed and maintain my sniper bonus.",
			},

			"sharpshooter" : {
				name : "Sharpshooter",
				description : "\n   " + "As an action, I have advantage on my next attack roll with a sniper weapon. This benefit remains until I make an attack roll or move.",
				action : ["action"],
			},

			"shock & awe" : {
				name : "Shock & Awe",
				description : "\n   " + "If I miss an attack roll with a sniper weapon, the creature I attacked has disadvantage on its next attack roll against me until the beginning of my next turn.",
			},

			"smooth as glass" : {
				name : "Smooth As Glass",
				description : "\n   " + "I add 2 additional marksman points to my total. I can select this trait three times.",
			},

			"zero your weapon" : {
				name : "Zero Your Weapon",
				description : "\n   " + "As a bonus action, I double both the normal and long ranges of any sniper weapon I wield until the beginning of my next turn.",
				action : ["bonus action"],
			},
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 93],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},
	}
}

ClassList["sniper, archetypeless"] = {

	name : "Sniper, Archetypeless",

	regExpSearch : /^(?=.*sniper)(?=.*archetypeless).*$/i,

	source : ["UM5R", 91],

	primaryAbility : "Wisdom",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Sniper") + ": Stealth and two skills from Acrobatics, Athletics, History, Insight, Perception, or Sleight of Hand.", "\n\n" + toUni("Sniper") + ": None."],

	toolProfs : {
		primary : [["Ground and aircraft vehicles"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "atomizer", "god's eye sniper gun", "super-kill sniper"]],
		[true, false, false]
	],

	equipment : "Sniper starting equipment:\n \u2022 A basic sniper rifle;\n \u2022 A one-handed small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $100 in additional gear.",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],

	features : {

		"marksman's talent" : {
			name : "Marksman's Talent",
			source : ["UM5R", 92],
			minlevel : 1,
			description : "\n   " + "I can spend marksman points to employ one or more of the talents on the following list as part of an attack action employing a sniper weapon. Each effect can only be implemented once per attack. I start with marksman points equal to 2 + my Wisdom modifier, gaining an additional points at higher levels. When I take a short or long rest, I recover any spent marksman points. Additionally, if I kill a target with a sniper weapon, I gain 2 marksman points. The number of points I can spend per attack depends on my level.",
			additional : ["2 + Wisdom modifier Marksman Points / 2 points per attack", "3 + Wisdom modifier Marksman Points / 2 points per attack", "3 + Wisdom modifier Marksman Points / 2 points per attack", "4 + Wisdom modifier Marksman Points / 2 points per attack", "4 + Wisdom modifier Marksman Points / 3 points per attack", "5 + Wisdom modifier Marksman Points / 3 points per attack", "5 + Wisdom modifier Marksman Points / 3 points per attack", "6 + Wisdom modifier Marksman Points / 3 points per attack", "6 + Wisdom modifier Marksman Points / 3 points per attack", "7 + Wisdom modifier Marksman Points / 4 points per attack", "7 + Wisdom modifier Marksman Points / 4 points per attack", "8 + Wisdom modifier Marksman Points / 4 points per attack", "8 + Wisdom modifier Marksman Points / 4 points per attack", "9 + Wisdom modifier Marksman Points / 4 points per attack", "9 + Wisdom modifier Marksman Points / 4 points per attack", "10 + Wisdom modifier Marksman Points / 4 points per attack", "10 + Wisdom modifier Marksman Points / 5 points per attack", "11 + Wisdom modifier Marksman Points / 5 points per attack", "11 + Wisdom modifier Marksman Points / 5 points per attack", "12 + Wisdom modifier Marksman Points / 6 points per attack"],
			toNotesPage : [{
				name : "Marksman's Talents",
				source : ["UM5R", 93],
				popupName : "Marksman's Talents",
				note : [
					"Academic Kill: When I hit with an attack, I can spend 1 marksman point to inflict an additional 1d6 damage. This increases to 2d6 at 5th level, 3d6 at 9th level, 4d6 at 13th level, and 5d6 at 17th level.",
					"Assassin Psychology: When I roll a natural 18 or 19 on an attack roll, I can spend 1 marksman point to turn that attack into a critical hit.",
					"Boom, Headshot!: When I kill a creature, at the cost of 2 marksman points, all Medium-sized or smaller enemies in a 5-foot radius around the target have disadvantage on attack rolls until the start of my next turn.",
					"Dum-Dum: When I score a critical hit with an attack, at the cost of 1 marksman point, the target also has disadvantage on saving throws and ability checks until the beginning of your next turn.",
					"Hollow Point: When I score a critical hit, at the cost of 1 marksman point, I roll three times the damage dice instead of two.",
					"Magic Bullet: After dropping a creature to 0 HP with a sniper weapon, at the cost of 1 marksman point, I can make a single ranged attack against one creature within 20 feet of the original target. I use no additional ammunition. I can repeat this process until I fail to drop a creature to 0 HP, I run out of enemies in range, or I hit three creatures (each additional attack costs an additional marksman point).",
					"Pinpoint Accuracy: When I score a critical hit, at the cost of 4 marksman points, the target must make a Constitution saving throw or be stunned until the beginning of my next turn. The DC for the saving throw is 8 + my proficiency bonus + my Wisdom or Dexterity modifier (my choice).",
					"Systemic Infammation: When I score a critical hit on a living creature, at the cost of 3 marksman points, the target is poisoned for one minute or until it passes a Constitution saving throw at the end if each of its turns. The DC for the saving throw is 8 + your proficiency bonus + my Wisdom or Dexterity modifier (my choice).",
					"Twitchy Fingers: After scoring a critical hit, at the cost of 1 marksman point, I make 1 additional attack with the same weapon as part of the same action against the same target.",
					"Weak Spot: When I hit with an attack, at the cost of 2 marksman points, my next attack on the target has advantage; This effect expires at the end of my next turn."
				],
			}],
		},

		"battle condition" : {
			name : "Battle Condition",
			source : ["UM5R", 93],
			minlevel : 1,
			description : "\n   " + "I gain one of the following special traits. I may select another condition at 2nd, 9th, 13th, and 20th level.",
			extraname : "Special Traits",
			extrachoices : ["Army Crawl", "Ballistics Expertise", "Covert Operation", "Dead Eye", "Low Profile", "Failure is not an Option", "Snap Shot", "Lead The Target", "Penetration Shot", "Perfect Tracker", "Sharpshooter", "Shock & Awe", "Smooth As Glass", "Zero Your Weapon"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 3 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 11 ? 5 : n < 13 ? 6 : n < 15 ? 7 : n < 18 ? 8 : n < 20 ? 9 : 10;
			}),
			"army crawl" : {
				name : "Army Crawl",
				description : "\n   " + "While prone, I don't have disadvantage on ranged attacks made with sniper weapons.",
			},

			"ballistics expertise" : {
				name : "Ballistics Expertise",
				description : "\n   " + "I can spend 10 feet of movement to either switch to a one-handed small arm from a sniper weapon OR switch to a sniper weapon from a one-handed small arm.",
			},

			"covert operation" : {
				name : "Covert Operation",
				description : "\n   " + "I can spend 20 feet of movement to have advantage on Stealth checks until the end of my turn.",
			},

			"dead eye" : {
				name : "Dead Eye",
				description : "\n   " + "If a creature 25 feet or closer scores a critical hit on me, I can automatically switch to my pistol and make a ranged attack against the target as a reaction.",
			},

			"low profile" : {
				name : "Low Profile",
				description : "\n   " + "While prone, I gain the benefit of half-cover. If already behind half-cover while prone, it counts as three-quarters cover. If behind three-quarters cover while prone, it counts as full cover.",
			},

			"failure is not an option" : {
				name : "Failure is not an Option",
				description : "\n   " + "If I roll a natural 1 on an attack roll with a sniper weapon, I can re-roll. I cannot use this feature if I have disadvantage.",
			},

			"snap shot" : {
				name : "Snap Shot",
				description : "\n   " + "I can now use \"Marksman Talent\" against targets 10 feet away or further with a sniper weapon.",
			},

			"lead the target" : {
				name : "Lead The Target",
				description : "\n   " + "I target a creature in line of sight to become my focus as a bonus action. I gain a +1 bonus to attack rolls with sniper weapons against my focus. After I select a focus, I cannot select another until I finish a short or long rest.",
				usages : 1,
				recovery : "short rest",
				action : ["bonus action"],
			},

			"penetration shot" : {
				name : "Penetration Shot",
				description : "\n   " + "When making a ranged attack roll with a sniper weapon against a target with cover, I treat total cover as three-quarters, three-quarters cover as half-cover, and I ignore half-cover.",
			},

			"perfect tracker" : {
				name : "Perfect Tracker",
				description : "\n   " + "I can move up to half my speed and maintain my sniper bonus.",
			},

			"sharpshooter" : {
				name : "Sharpshooter",
				description : "\n   " + "As an action, I have advantage on my next attack roll with a sniper weapon. This benefit remains until I make an attack roll or move.",
				action : ["action"],
			},

			"shock & awe" : {
				name : "Shock & Awe",
				description : "\n   " + "If I miss an attack roll with a sniper weapon, the creature I attacked has disadvantage on its next attack roll against me until the beginning of my next turn.",
			},

			"smooth as glass" : {
				name : "Smooth As Glass",
				description : "\n   " + "I add 2 additional marksman points to my total. I can select this trait three times.",
			},

			"zero your weapon" : {
				name : "Zero Your Weapon",
				description : "\n   " + "As a bonus action, I double both the normal and long ranges of any sniper weapon I wield until the beginning of my next turn.",
				action : ["bonus action"],
			},
		},
	}
}

ClassList["techie"] = {

	name : "Techie",

	regExpSearch : /^(?=.*techie).*$/i,

	source : ["UM5R", 94],

	primaryAbility : "Intelligence",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis"],

	skills : ["\n\n" + toUni("Techie") + ": Engineering and six skills from Computer Use, Demolitions, History, Insight, Investigation, Medicine, Nature, Perception, Performance, or Sciences.", "\n\n" + toUni("Techie") + ": None."],

	toolProfs : {
		primary : [["Tinker's tools"], ["Ground and aircraft vehicles"], ["Engineering", "Int"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Techie starting equipment:\n \u2022 A TL0 engineering kit;\n \u2022 A small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $300 in additional non-military gear (no weapons, weapon-accessories, bullets, or armor).",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],

	features : {

		"tech points" : {
			name : "Tech Points",
			source : ["UM5R", 94],
			minlevel : 1,
			description : "\n   " + "I get tech points (TP) that can be used to boost abilities and perform exploits representative of my training. At 1st level, I start with points equal to 3 + my Intelligence modifier, which increases by 1 every additional level. Any spent tech points are recovered after I finish a long rest.",
			additional : ["3 + Intelligence modifier Tech Points", "4 + Intelligence modifier Tech Points", "5 + Intelligence modifier Tech Points", "6 + Intelligence modifier Tech Points", "7 + Intelligence modifier Tech Points", "8 + Intelligence modifier Tech Points", "9 + Intelligence modifier Tech Points", "10 + Intelligence modifier Tech Points", "11 + Intelligence modifier Tech Points", "12 + Intelligence modifier Tech Points", "13 + Intelligence modifier Tech Points", "14 + Intelligence modifier Tech Points", "15 + Intelligence modifier Tech Points", "16 + Intelligence modifier Tech Points", "17 + Intelligence modifier Tech Points", "18 + Intelligence modifier Tech Points", "19 + Intelligence modifier Tech Points", "20 + Intelligence modifier Tech Points", "21 + Intelligence modifier Tech Points", "22 + Intelligence modifier Tech Points"],
		},

		"shiny red button" : {
			name : "Shiny Red Button",
			source : ["UM5R", 95],
			minlevel : 1,
			description : "\n   " + "I can put a button on my firearm. I only need eight hours of work to put the button on a new firearm but only I can press it without breaking the weapon. The button's function is determined by your choices from the options that follow. I can add as many functions into my button as I have available tech points, but each modification can only be added once per configuration unless stated otherwise. If I don't alter the function outside of a battle, my last configuration is used (if I have the available points).",
			toNotesPage : [{
				name : "Shiny Red Button Notes",
				source : ["UM5R", 95],
				popupName : "Shiny Red Button Notes",
				note : "Pressing the button takes no action. When I press the button, I spend the tech points corresponding with each of the functions added. If I don't have enough tech points when I press the button, the entire configuration does not function. Once pressed, its effects last five minutes. I can own multiple weapons with different configurations, as the points are not spent unless the button is pushed, though pushing multiple buttons during a single battle would be rather wasteful. Changing a configuration takes five minutes, though I can attempt to change a configuration as an action with a DC 15 Engineering check (I cannot change a configuration while one is in effect without voiding the invested tech points of the previous configuration). Additionally, I can attempt to regain a lost tech point with a DC 5 Engineering check. Each check takes 1 minute, and successive checks increase the DC by 5. The DC increases regardless if I succeed in recovering the point or not, and the check reverts back to 5 when I take a long rest.",
			}, {
				name : "Shiny Red Button Configurations",
				source : ["UM5R", 95],
				popupName : "Shiny Red Button Configurations",
				note : [
					"Charge Shot (1 Tech Point): Each time I hit a target my size or smaller, I shove it 5 feet. If the target cannot be shoved, it takes 1d6 additional damage. I can add this modification twice to push the target 10 feet and increase the damage to 2d6.",
					"Explosive Round (1 Tech Point): When I score a critical hit, I roll all damage dice thrice instead of twice.",
					"Floating Reticle (2 Tech Points): I gain a +1 bonus to attack rolls.",
					"Hydroshock (2 Tech Points): I deal additional damage with a hit equal to the difference between my attack roll and the target's AC. Add this modification a second time to inflict 1d6 additional damage. This increases to 2d6 at 9th level, 3d6 at 13th level, and 4d6 at 17th level.",
					"Increased Caliber (2 Tech Points): My weapon's damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). This stacks with any other effects that increases damage die size. I can add this modification twice.",
					"Increased Rate of Fire (2 Tech Points): I double the rate of fire of my weapon (10 for auto, 20 for auto-heavy). When using burst fire, I add double my proficiency bonus to the save DC, and I always use the upscaled damage dice. If targeting single creatures, my weapon's damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). This stacks with any other effect that increases damage die size.",
					"Increased Round Velocity (1 Tech Point): When I roll a 1 or 2 on a damage die, I can reroll. I must accept the new roll, even if it is a 1 or a 2.",
					"Muzzle Flash (2 Tech Points): Any creature I hit within 20 feet of me has disadvantage on attack rolls against me until the beginning of my next turn.",
					"Pop-Up Eyepiece (1 Tech Point): If I roll a 2 or 3 on your attack roll, I can re-roll. I must accept the second result.",
					"Rapid Loader (4 Tech Points): I gain one additional attack whenever I take the Attack action on my turn. I can add this modification up to two times.",
					"Smart Tracking (6 Tech Points): I have advantage on attack rolls.",
					"Target Scanning (3 Tech Points): My weapon scores a critical hit on a natural roll of 19 or 20."
				],
			}],
		},

		"tech savant" : {
			name : "Tech Savant",
			source : ["UM5R", 96],
			minlevel : 1,
			description : "\n   " + "I gain one of the following traits that reflect the uniqueness of my talents. Some require the spending of tech points. I gain additional tech savant traits at 2nd level, 5th level, 10th level, 13th level, 17th level, and 20th level.",
			extraname : "Tech Savant Traits",
			extrachoices : ["Economical Plating", "Failsafe", "Friggin' Love Science", "Immediacy", "Like Machines", "Midas Touch", "Priorities", "Scientist, Not a Soldier", "Shrapnel Modification"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 5 ? 2 : n < 10 ? 3 : n < 13 ? 4 : n < 17 ? 5 : n < 20 ? 6 : 7;
			}),
			"economical plating" : {
				name : "Economical Plating",
				description : "\n   " + "I gain a +1 bonus to AC. Additionally, I can temporarily increase my armor's potential, spending one tech point as an action to increase my AC an additional +1 for five minutes.",
				action : ["action"],
				extraAC : [{
					mod : 1,
					magic : false,
					text : "I add 1 to my AC.",
				}],
			},

			"failsafe" : {
				name : "Failsafe",
				description : "\n   " + "If someone other than me attempts to use my weapon with a \"Shiny Red Button\" on it (regardless if they press it), the weapon explodes, inflicting a critical hit of weapon damage on the unlucky handler and stunning them until the beginning of my next turn. The weapon is now broken (it can be fixed normally).",
			},

			"covert operation" : {
				name : "Covert Operation",
				description : "\n   " + "I can spend 20 feet of movement to have advantage on Stealth checks until the end of my turn.",
			},

			"friggin' love science" : {
				name : "Friggin' Love Science",
				description : "\n   " + "I can spend a tech point to have advantage on Sciences or Engineering checks until the end of my next turn. If I select this trait a second time, I can spend one tech point to set my next d20 roll Sciences or Engineering check to a natural 20.",
			},

			"immediacy" : {
				name : "Immediacy",
				description : "\n   " + "I can spend one tech point as a bonus action to gain an additional action on this turn. This action cannot be used to take any action except an Attack action.",
				action : ["bonus action"],
			},

			"like machines" : {
				name : "Like Machines",
				description : "\n   " + "My maximum tech points increase by 2. I can select this trait up to four times.",
			},

			"midas touch" : {
				name : "Midas Touch",
				description : "\n   " + "While I'm wielding a firearm, its damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). I can select this trait twice, and its effects stack with others that increase damage die size.",
			},

			"priorities" : {
				name : "Priorities",
				description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them to regain tech points. For each Hit Die spent, I recover 2 tech points rather than recover HP. I cannot have more tech points than my maximum.",
			},

			"scientist, not a soldier" : {
				name : "Scientist, Not a Soldier",
				description : "\n   " + "When I use the Disengage action, I can also make a single ranged attack as part of the same action. I inflict half damage on a hit.",
			},

			"perfect tracker" : {
				name : "Perfect Tracker",
				description : "\n   " + "I can move up to half my speed and maintain my sniper bonus.",
			},

			"shrapnel modification" : {
				name : "Shrapnel Modification",
				description : "\n   " + "I can now spend tech points in combat for an immediate boost to the weapon with my \"Shiny Red Button\" while it is active. I can spend 1 tech point after I hit, and the target is vulnerable to ally attacks until the beginning of my next turn.",
			},
		},

		"widget bag" : {
			name : "Widget Bag",
			source : ["UM5R", 97],
			minlevel : 1,
			description : "\n   " + "I gain a widget bag. It contains random spare parts, useful materials, and salvage worth $200. During a short or long rest, I can scavenge for components. In most areas, I will be able to recover $10 worth during a short rest and $20 worth during a long rest, but the GM may award more or less (or none at all) at their discretion.",
		},

		"subclassfeature3" : {
			name : "Archetype",
			source : ["UM5R", 97],
			minlevel : 3,
			description : "\n   " + "I choose an archetype from any of the following.",
		},

		"mcguy something" : {
			name : "McGuy Something",
			source : ["UM5R", 97],
			minlevel : 12,
			description : "\n   " + "I can construct useful items or tools to accomplish something generally not allowed given the available resources available. Either the GM can supply a random assortment of items I can use to create a tool, or I can make a case for everyday items one is likely to find to solve an immediate crisis. This may involve searching an area or assuming certain items are available; if my widget bag currently contains at least $20 worth of parts, I can always be assumed to have a variety of small useful items such as screws, nails, paper clips, duct tape, and chewing gum. If the GM is convinced by my argument, I make an Engineering check to see if the improvised gadget or solution works (set by the GM). When I use this trait, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

ClassList["techie, archetypeless"] = {

	name : "Techie, Archetypeless",

	regExpSearch : /^(?=.*techie)(?=.*archetypeless).*$/i,

	source : ["UM5R", 94],

	primaryAbility : "Intelligence",

	prereqs : "Strength 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis"],

	skills : ["\n\n" + toUni("Techie") + ": Engineering and six skills from Computer Use, Demolitions, History, Insight, Investigation, Medicine, Nature, Perception, Performance, or Sciences.", "\n\n" + toUni("Techie") + ": None."],

	toolProfs : {
		primary : [["Tinker's tools"], ["Ground and aircraft vehicles"], ["Engineering", "Int"]],
		secondary : [["Musical instrument", 1]]
	},

	armor : [
		[true, true, false, false],
		[true, true, false, false]
	],

	weapons : [
		[true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],
		[true, false, false]
	],

	equipment : "Techie starting equipment:\n \u2022 A TL0 engineering kit;\n \u2022 A small arm $300 or less;\n \u2022 A set of armor $300 or less;\n \u2022 $300 in additional non-military gear (no weapons, weapon-accessories, bullets, or armor).",

	subclasses : ["Archetype", []],

	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],

	features : {

		"tech points" : {
			name : "Tech Points",
			source : ["UM5R", 94],
			minlevel : 1,
			description : "\n   " + "I get tech points (TP) that can be used to boost abilities and perform exploits representative of my training. At 1st level, I start with points equal to 3 + my Intelligence modifier, which increases by 1 every additional level. Any spent tech points are recovered after I finish a long rest.",
			additional : ["3 + Intelligence modifier Tech Points", "4 + Intelligence modifier Tech Points", "5 + Intelligence modifier Tech Points", "6 + Intelligence modifier Tech Points", "7 + Intelligence modifier Tech Points", "8 + Intelligence modifier Tech Points", "9 + Intelligence modifier Tech Points", "10 + Intelligence modifier Tech Points", "11 + Intelligence modifier Tech Points", "12 + Intelligence modifier Tech Points", "13 + Intelligence modifier Tech Points", "14 + Intelligence modifier Tech Points", "15 + Intelligence modifier Tech Points", "16 + Intelligence modifier Tech Points", "17 + Intelligence modifier Tech Points", "18 + Intelligence modifier Tech Points", "19 + Intelligence modifier Tech Points", "20 + Intelligence modifier Tech Points", "21 + Intelligence modifier Tech Points", "22 + Intelligence modifier Tech Points"],
		},

		"shiny red button" : {
			name : "Shiny Red Button",
			source : ["UM5R", 95],
			minlevel : 1,
			description : "\n   " + "I can put a button on my firearm. I only need eight hours of work to put the button on a new firearm but only I can press it without breaking the weapon. The button's function is determined by your choices from the options that follow. I can add as many functions into my button as I have available tech points, but each modification can only be added once per configuration unless stated otherwise. If I don't alter the function outside of a battle, my last configuration is used (if I have the available points).",
			toNotesPage : [{
				name : "Shiny Red Button Notes",
				source : ["UM5R", 95],
				popupName : "Shiny Red Button Notes",
				note : "Pressing the button takes no action. When I press the button, I spend the tech points corresponding with each of the functions added. If I don't have enough tech points when I press the button, the entire configuration does not function. Once pressed, its effects last five minutes. I can own multiple weapons with different configurations, as the points are not spent unless the button is pushed, though pushing multiple buttons during a single battle would be rather wasteful. Changing a configuration takes five minutes, though I can attempt to change a configuration as an action with a DC 15 Engineering check (I cannot change a configuration while one is in effect without voiding the invested tech points of the previous configuration). Additionally, I can attempt to regain a lost tech point with a DC 5 Engineering check. Each check takes 1 minute, and successive checks increase the DC by 5. The DC increases regardless if I succeed in recovering the point or not, and the check reverts back to 5 when I take a long rest.",
			}, {
				name : "Shiny Red Button Configurations",
				source : ["UM5R", 95],
				popupName : "Shiny Red Button Configurations",
				note : [
					"Charge Shot (1 Tech Point): Each time I hit a target my size or smaller, I shove it 5 feet. If the target cannot be shoved, it takes 1d6 additional damage. I can add this modification twice to push the target 10 feet and increase the damage to 2d6.",
					"Explosive Round (1 Tech Point): When I score a critical hit, I roll all damage dice thrice instead of twice.",
					"Floating Reticle (2 Tech Points): I gain a +1 bonus to attack rolls.",
					"Hydroshock (2 Tech Points): I deal additional damage with a hit equal to the difference between my attack roll and the target's AC. Add this modification a second time to inflict 1d6 additional damage. This increases to 2d6 at 9th level, 3d6 at 13th level, and 4d6 at 17th level.",
					"Increased Caliber (2 Tech Points): My weapon's damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). This stacks with any other effects that increases damage die size. I can add this modification twice.",
					"Increased Rate of Fire (2 Tech Points): I double the rate of fire of my weapon (10 for auto, 20 for auto-heavy). When using burst fire, I add double my proficiency bonus to the save DC, and I always use the upscaled damage dice. If targeting single creatures, my weapon's damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). This stacks with any other effect that increases damage die size.",
					"Increased Round Velocity (1 Tech Point): When I roll a 1 or 2 on a damage die, I can reroll. I must accept the new roll, even if it is a 1 or a 2.",
					"Muzzle Flash (2 Tech Points): Any creature I hit within 20 feet of me has disadvantage on attack rolls against me until the beginning of my next turn.",
					"Pop-Up Eyepiece (1 Tech Point): If I roll a 2 or 3 on your attack roll, I can re-roll. I must accept the second result.",
					"Rapid Loader (4 Tech Points): I gain one additional attack whenever I take the Attack action on my turn. I can add this modification up to two times.",
					"Smart Tracking (6 Tech Points): I have advantage on attack rolls.",
					"Target Scanning (3 Tech Points): My weapon scores a critical hit on a natural roll of 19 or 20."
				],
			}],
		},

		"tech savant" : {
			name : "Tech Savant",
			source : ["UM5R", 96],
			minlevel : 1,
			description : "\n   " + "I gain one of the following traits that reflect the uniqueness of my talents. Some require the spending of tech points. I gain additional tech savant traits at 2nd level, 5th level, 10th level, 13th level, 17th level, and 20th level.",
			extraname : "Tech Savant Traits",
			extrachoices : ["Economical Plating", "Failsafe", "Friggin' Love Science", "Immediacy", "Like Machines", "Midas Touch", "Priorities", "Scientist, Not a Soldier", "Shrapnel Modification"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 10 ? 5 : n < 11 ? 6 : n < 13 ? 7 : n < 15 ? 8 : n < 17 ? 9 : n < 18 ? 10 : n < 20 ? 11 : 12;
			}),
			"economical plating" : {
				name : "Economical Plating",
				description : "\n   " + "I gain a +1 bonus to AC. Additionally, I can temporarily increase my armor's potential, spending one tech point as an action to increase my AC an additional +1 for five minutes.",
				action : ["action"],
				extraAC : [{
					mod : 1,
					magic : false,
					text : "I add 1 to my AC.",
				}],
			},

			"failsafe" : {
				name : "Failsafe",
				description : "\n   " + "If someone other than me attempts to use my weapon with a \"Shiny Red Button\" on it (regardless if they press it), the weapon explodes, inflicting a critical hit of weapon damage on the unlucky handler and stunning them until the beginning of my next turn. The weapon is now broken (it can be fixed normally).",
			},

			"covert operation" : {
				name : "Covert Operation",
				description : "\n   " + "I can spend 20 feet of movement to have advantage on Stealth checks until the end of my turn.",
			},

			"friggin' love science" : {
				name : "Friggin' Love Science",
				description : "\n   " + "I can spend a tech point to have advantage on Sciences or Engineering checks until the end of my next turn. If I select this trait a second time, I can spend one tech point to set my next d20 roll Sciences or Engineering check to a natural 20.",
			},

			"immediacy" : {
				name : "Immediacy",
				description : "\n   " + "I can spend one tech point as a bonus action to gain an additional action on this turn. This action cannot be used to take any action except an Attack action.",
				action : ["bonus action"],
			},

			"like machines" : {
				name : "Like Machines",
				description : "\n   " + "My maximum tech points increase by 2. I can select this trait up to four times.",
			},

			"midas touch" : {
				name : "Midas Touch",
				description : "\n   " + "While I'm wielding a firearm, its damage die increases by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). I can select this trait twice, and its effects stack with others that increase damage die size.",
			},

			"priorities" : {
				name : "Priorities",
				description : "\n   " + "Instead of using my Hit Dice to recover HP during a short rest, I can expend them to regain tech points. For each Hit Die spent, I recover 2 tech points rather than recover HP. I cannot have more tech points than my maximum.",
			},

			"scientist, not a soldier" : {
				name : "Scientist, Not a Soldier",
				description : "\n   " + "When I use the Disengage action, I can also make a single ranged attack as part of the same action. I inflict half damage on a hit.",
			},

			"perfect tracker" : {
				name : "Perfect Tracker",
				description : "\n   " + "I can move up to half my speed and maintain my sniper bonus.",
			},

			"shrapnel modification" : {
				name : "Shrapnel Modification",
				description : "\n   " + "I can now spend tech points in combat for an immediate boost to the weapon with my \"Shiny Red Button\" while it is active. I can spend 1 tech point after I hit, and the target is vulnerable to ally attacks until the beginning of my next turn.",
			},
		},

		"widget bag" : {
			name : "Widget Bag",
			source : ["UM5R", 97],
			minlevel : 1,
			description : "\n   " + "I gain a widget bag. It contains random spare parts, useful materials, and salvage worth $200. During a short or long rest, I can scavenge for components. In most areas, I will be able to recover $10 worth during a short rest and $20 worth during a long rest, but the GM may award more or less (or none at all) at their discretion.",
		},

		"mcguy something" : {
			name : "McGuy Something",
			source : ["UM5R", 97],
			minlevel : 12,
			description : "\n   " + "I can construct useful items or tools to accomplish something generally not allowed given the available resources available. Either the GM can supply a random assortment of items I can use to create a tool, or I can make a case for everyday items one is likely to find to solve an immediate crisis. This may involve searching an area or assuming certain items are available; if my widget bag currently contains at least $20 worth of parts, I can always be assumed to have a variety of small useful items such as screws, nails, paper clips, duct tape, and chewing gum. If the GM is convinced by my argument, I make an Engineering check to see if the improvised gadget or solution works (set by the GM). When I use this trait, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
	}
}

var tempSubclassName = AddSubClass("civilian", "anti-hero", {

	regExpSearch : /^(?=.*anti-hero).*$/i,

	subname : "Anti-Hero",

	source : ["UM5R", 98],

	fullname : "Anti-Hero",

	weaponprofs : [true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],

	features : {

		"subclassfeature3" : {
			name : "Dead Pool",
			source : ["UM5R", 98],
			minlevel : 3,
			description : "\n   " + "I gain a reservoir of death I can tap to inflict additional damage upon opponents. I can add any amount from my dead pool to any hit I make against a target 20 feet or closer. When I finish a long rest, my dead pool reduces to zero. I gain points to my dead pool from the following:\n   If I reduce a creature 20 feet away or closer to 0 HP, I gain 5 points; Additionally, any additional damage I inflicted beyond zero with the killing hit is added to my pool (to a maximum of 5, 10 total).\n   If I roll the maximum value of a damage die to a target 20 feet or closer, I add half that value onto my dead pool. Once gained, I cannot gain it again until the beginning of my next turn.\n   If an enemy scores a critical hit on you, I gain 10 points.",
			additional : ["", "", "10 Points (maximum)", "10 Points (maximum)", "10 Points (maximum)", "10 Points (maximum)", "20 Points (maximum)", "20 Points (maximum)", "20 Points (maximum)", "20 Points (maximum)", "30 Points (maximum)", "30 Points (maximum)", "30 Points (maximum)", "30 Points (maximum)", "40 Points (maximum)", "40 Points (maximum)", "40 Points (maximum)", "50 Points (maximum)", "50 Points (maximum)", "50 Points (maximum)"],
		},
		"subclassfeature7" : {
			name : "Fourth Wall",
			source : ["UM5R", 99],
			minlevel : 7,
			description : "\n   " + "If any ally within 50 feet of me suffers any damage, my dead pool is filled by the same value. Once I use this ability, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature11" : {
			name : "Cheat",
			source : ["UM5R", 99],
			minlevel : 11,
			description : "\n   " + "When I finish a long rest, set a d20 roll to 20 and put it aside. I can replace any attack roll, saving throw, or ability check made by me with that die (at which point, it is used up). This takes no action. I can do so before or after a roll, but not after determining the results of that roll. An unused die is lost when I finish a long rest. Alternately, if I don't have a second d20, I could always just \"accidentally\" shift one die result to any other result.",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature15" : {
			name : "The Less Interesting 15th Level Ability",
			source : ["UM5R", 99],
			minlevel : 15,
			description : "\n   " + "As a bonus action, I can use any amount from my dead pool to recover my HP.",
			action : ["bonus action"],
		},
		"subclassfeature18" : {
			name : "The Benefit of Friends",
			source : ["UM5R", 99],
			minlevel : 18,
			description : "\n   " + "If an ally is reduced to 0 HP or lower, I gain 20 points to my dead pool.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "authority", {

	regExpSearch : /^(?=.*authority).*$/i,

	subname : "Authority",

	source : ["UM5R", 99],

	fullname : "Authority",

	skillstxt : "Choose one skill from Demolitions, Engineering, History, or Sciences",

	features : {

		"subclassfeature3" : {
			name : "PHD",
			source : ["UM5R", 99],
			minlevel : 3,
			description : "\n   " + "I select one Intelligence skill of my choice. I can set my d20 roll to 20 when I really need a roll to succeed. When I use this feature, I cannot use it again until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature7" : {
			name : "Resident Expert",
			source : ["UM5R", 99],
			minlevel : 7,
			description : "\n   " + "Instead of using my Hit Dice to recover HP, I can spend an action and expend one hit die to gain a +10 bonus to any failed Intelligence skill check.",
			action : ["", "", "", "", "", "", "", "action", "action", "action", "action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action", "bonus action"],
		},
		"subclassfeature11" : {
			name : "Second Nature",
			source : ["UM5R", 99],
			minlevel : 11,
			description : "\n   " + "When attempting any Intelligence skill, \"Resident Expert\" only takes a bonus action instead of an action. Additionally, if I roll less than 10 for an Intelligence check, increase the result to 10.",
		},
		"subclassfeature15" : {
			name : "Sherlock",
			source : ["UM5R", 99],
			minlevel : 15,
			description : "\n   " + "I can use the Search action as a bonus action. I also gain half my proficiency bonus (rounded down) to every Intelligence skill I'm not already proficient in.",
		},
		"subclassfeature18" : {
			name : "Straight Dope",
			source : ["UM5R", 99],
			minlevel : 18,
			description : "\n   " + "My selected skill with \"PHD\" improves. Unless I have disadvantage with the check, it always results in a natural 20.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "banner head", {

	regExpSearch : /^(?=.*banner)(?=.*head).*$/i,

	subname : "Banner Head",

	source : ["UM5R", 99],

	fullname : "Banner Head",

	skillstxt : "I gain proficiency in two ranged weapons of my choice.",

	features : {

		"subclassfeature3" : {
			name : "Fleeting Adversary",
			source : ["UM5R", 99],
			minlevel : 3,
			description : "\n   " + "I select one creature within 50 feet and line of sight to me after rolling initiative (this takes no action). The target is my fleeting adversary. I gain a +1 bonus to attack rolls against my fleeting adversary, and my fleeting adversary suffers disadvantage on attack rolls that don't include me as a target. This effect ends if I drop to 0 HP, the creature drops to 0 HP, I move beyond 50 feet, or line of sight is broken between me and my target. Once I select a fleeting adversary, I cannot select another until I roll for initiative again.",
		},
		"subclassfeature7" : {
			name : "The War Pose",
			source : ["UM5R", 100],
			minlevel : 7,
			description : "\n   " + "I can take a -1 penalty to attack rolls for each weapon I wield to wield a two-handed small arm with one hand. The weapon only counts as a one-handed small arms for purposes of how many hands I use to wield it and for abilities and feats.",
		},
		"subclassfeature11" : {
			name : "Adversarial Rage",
			source : ["UM5R", 100],
			minlevel : 11,
			description : "\n   " + "I can increase damage against my \"Fleeting Adversary\". As a bonus action, I gain +2 damage, increasing to +3 at 15th level, +4 at 18th level. This increase ends if the target is no longer my \"Fleeting Adversary\". Once I use this feature, I cannot select another until I finish a long rest.",
			usages : 1,
			recovery : "long rest",
			action : ["bonus action"],
		},
		"subclassfeature15" : {
			name : "Remember Me?",
			source : ["UM5R", 100],
			minlevel : 15,
			description : "\n   " + "If my \"Fleeting Adversary\" attacks an ally, I can make a single ranged attack against it as a reaction.",
		},
		"subclassfeature18" : {
			name : "Unexpected Response",
			source : ["UM5R", 100],
			minlevel : 18,
			description : "\n   " + "Until my \"Fleeting Adversary\" is reduced to 0 HP, each time it hits me, I gain a +1 bonus to attack rolls against it. This bonus is cumulative up to +3 but is lost if I attack any creature other than my \"Fleeting Adversary\" or I score a hit.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "brawler", {

	regExpSearch : /^(?=.*brawler).*$/i,

	subname : "Brawler",

	source : ["UM5R", 100],

	fullname : "Brawler",

	weaponprofs : [true, false, false],

	features : {

		"subclassfeature3" : {
			name : "Ham Hands",
			source : ["UM5R", 100],
			minlevel : 3,
			description : "\n   " + "I can use both hands when grappling a target my size or smaller to have advantage on all rolls related to the grapple.",
		},
		"subclassfeature7" : {
			name : "Head-butt",
			source : ["UM5R", 100],
			minlevel : 7,
			description : "\n   " + "While grappling a creature my size or smaller, I can inflict 1d6 damage per character level on the target as a bonus action. Once I use this feature, I cannot use it again until you take a short rest or long rest.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature11" : {
			name : "Head Slam",
			source : ["UM5R", 100],
			minlevel : 11,
			description : "\n   " + "If I have one grappled creature in each hand, I can use a bonus action and make an unarmed melee attack against each target. A hit deals 2d6 + my Strength modifier damage to each target.",
			action : ["bonus action"],
		},
		"subclassfeature15" : {
			name : "Bear Hug",
			source : ["UM5R", 100],
			minlevel : 15,
			description : "\n   " + "When grappling a target my size or smaller with two hands, I may attempt a bear hug. I make an unarmed strike as my action (or one of my attacks). A hit inflicts 2d6 + my Strength modifier damage.",
			action : ["action", " (as an attack)"],
		},
		"subclassfeature18" : {
			name : "Neck Snap",
			source : ["UM5R", 100],
			minlevel : 18,
			description : "\n   " + "If I make an unarmed strike against a target I'm grappling, you score a critical hit on a natural roll of 19 or 20.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "brother of blood", {

	regExpSearch : /^(?=.*brother)(?=.*of)(?=.*blood).*$/i,

	subname : "Brother of Blood",

	source : ["UM5R", 100],

	skillstxt : "I gain proficiency in a weapon and armor that another brother of blood has.",

	features : {

		"subclassfeature3" : {
			name : "More Like Family",
			source : ["UM5R", 101],
			minlevel : 3,
			description : "\n   " + "If a creature scores a critical hit on an allied brother of blood, I can make a single ranged attack against the attacker as a reaction.",
		},
		"subclassfeature7" : {
			name : "Allied Support",
			source : ["UM5R", 101],
			minlevel : 7,
			description : "\n   " + "I can use a bonus action and target one allied brother of blood in line of sight. The targeted brother of blood gains an action that must be used before the end of my turn. This does not count as a reaction for the ally. Each brother of blood can benefit from Allied Support only once per round. Once I use this feature, I cannot use it again until you finish a short or long rest.",
			usages : ["", "", "", "", "", "", 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4],
			recovery : "short rest",
			action : ["bonus action"],
		},
		"subclassfeature11" : {
			name : "Army of Many",
			source : ["UM5R", 101],
			minlevel : 11,
			description : "\n   " + "I grant a +2 bonus to damage rolls to each brother of blood within 10 feet of me (cumulative up to +6).",
		},
		"subclassfeature15" : {
			name : "Better Reflexes",
			source : ["UM5R", 101],
			minlevel : 15,
			description : "\n   " + "I can use the Help action on another allied brother of blood as a bonus action.",
		},
		"subclassfeature18" : {
			name : "Team Effort",
			source : ["UM5R", 101],
			minlevel : 18,
			description : "\n   " + "After rolling for initiative, me and all allied brothers of blood act on the highest initiative among us. We all can decide which order we act in.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "cleaner", {

	regExpSearch : /^(?=.*cleaner).*$/i,

	subname : "Cleaner",

	source : ["UM5R", 101],

	fullname : "Cleaner",

	weaponprofs : [true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],

	features : {

		"subclassfeature3" : {
			name : "Once in the Head",
			source : ["UM5R", 102],
			minlevel : 3,
			description : "\n   " + "If I score a hit on a target 20 feet away or closer with a melee weapon or a one-handed small arm, I inflict additional damage equal to three times my level. I can use this feature once before taking a short or long rest, or twice if I kill the first target with this attack.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature7" : {
			name : "Twice in the Chest",
			source : ["UM5R", 102],
			minlevel : 7,
			description : "\n   " + "If wielding a melee weapon or a one-handed small arm, as an action, I can make three attacks against a single target 20 feet away or closer. All attacks have advantage. I can use this ability once before taking a short or long rest, or twice if I kill my target with one of these attacks.",
			usages : 1,
			recovery : "short rest",
			action : ["action"],
		},
		"subclassfeature11" : {
			name : "Quick Succession",
			source : ["UM5R", 102],
			minlevel : 11,
			description : "\n   " + "If I use \"Once in the Head\" but fail to kill the target, I make one additional identical attack. This attack automatically hits, and I inflict additional damage equal to three times my level (including the additional damage with \"Once in the Head\"). Once I use this feature, I cannot use it again until I take a long rest.",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature15" : {
			name : "Out of the Blue",
			source : ["UM5R", 102],
			minlevel : 15,
			description : "\n   " + "If I have advantage against a target that is surprised or from whom I'm hidden, my first attack against them is an automatic critical hit.",
		},
		"subclassfeature18" : {
			name : "Desperate Solution",
			source : ["UM5R", 102],
			minlevel : 18,
			description : "\n   " + "As an action, I add up all the enemies I can see. I then gain a number of attacks equal to double that number as part of that same action (maximum 20). I can distribute the attacks anyway I see fit. Once I use this feature, I cannot use it again until I take a long rest.",
			usages : 1,
			recovery : "long rest",
			action : ["action"],
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["fighter"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "country gunman", {

	regExpSearch : /^(?=.*country)(?=.*gunman).*$/i,

	subname : "Country Gunman",

	source : ["UM5R", 102],

	fullname : "Country Gunman",

	weaponprofs : [false, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],

	features : {

		"subclassfeature3" : {
			name : "Improved Reaction Time",
			source : ["UM5R", 102],
			minlevel : 3,
			description : "\n   " + "I add 2d4 to all my initiative rolls.",
		},
		"subclassfeature7" : {
			name : "Precise Shot",
			source : ["UM5R", 102],
			minlevel : 7,
			description : "\n   " + "If I act before any enemy in the encounter, I have advantage with all attack rolls made with one-handed small arms until the first enemy acts.",
		},
		"subclassfeature11" : {
			name : "Quick and the Dead",
			source : ["UM5R", 103],
			minlevel : 11,
			description : "\n   " + "If I have the highest initiative value at the start of an encounter, add my initiative roll (including my bonus from Improved Reaction Time) as bonus damage to my first hit with a one-handed small arm.",
		},
		"subclassfeature15" : {
			name : "Reputation",
			source : ["UM5R", 103],
			minlevel : 15,
			description : "\n   " + "If I have the highest initiative value at the start of an encounter, I gain one additional action on my first turn.",
		},
		"subclassfeature18" : {
			name : "12 O'Clock",
			source : ["UM5R", 103],
			minlevel : 18,
			description : "\n   " + "When I ready an attack action with a one-handed small arm, I have advantage with the attack, and if I hit the target, the attack becomes a critical hit. If I employ this ability, I can only make a single attack.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "diplomat", {

	regExpSearch : /^(?=.*diplomat).*$/i,

	subname : "Diplomat",

	source : ["UM5R", 103],

	fullname : "Diplomat",

	skillstxt : "Select two from Deception, Intimidation, Performance, or Persuasion.",

	abilitySaveAlt : 5,

	features : {

		"subclassfeature3" : {
			name : "Volume and Presence",
			source : ["UM5R", 103],
			minlevel : 3,
			description : "\n   " + "As an action, I can select one target your size within 25 feet that can understand me. The target makes a Wisdom save against my psychological attack. If the target fails, I either have advantage on all contested Wisdom or Charisma ability checks and skill checks until the end of my next turn, or the target is frightened of me until the beginning of my next turn. If I target the same creature on my next turn, the DC increases by 2 (consecutively to 6). This ability does not work on a target that has suffered damage from me or an ally in the past minute.",
			action : ["action"],
		},
		"subclassfeature7" : {
			name : "The Art of Compromise",
			source : ["UM5R", 103],
			minlevel : 7,
			description : "\n   " + "I select one Charisma skill. I double my proficiency bonus with this skill. At 11th and 18th level, I may select an additional Charisma skill.",
		},
		"subclassfeature11" : {
			name : "Confidence Comes with the Position",
			source : ["UM5R", 103],
			minlevel : 11,
			description : "\n   " + "I can never have disadvantage with any Charisma skills checks, ability checks, or saving throws.",
		},
		"subclassfeature15" : {
			name : "\"I think we got off on the wrong foot.\"",
			source : ["UM5R", 103],
			minlevel : 15,
			description : "\n   " + "I can expend a Hit Die as a bonus action (recovering no HP) to set my next Charisma or Wisdom skill check to a natural 20 instead of making the roll.",
			action : ["bonus action"],
		},
		"subclassfeature18" : {
			name : "Everything You Got",
			source : ["UM5R", 103],
			minlevel : 18,
			description : "\n   " + "As an action, I can select one target within 25 feet that can understand me. The target makes a Wisdom saving throw against my psychological attack. If the target fails, it is stunned until the start of my next turn. This ability does not work on a target that has suffered damage from me or an ally in the past minute.",
			action : ["action"],
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "driver", {

	regExpSearch : /^(?=.*driver).*$/i,

	subname : "Driver",

	source : ["UM5R", 103],

	fullname : "Driver",

	toolProfs : ["Ground and aircraft vehicles"],

	features : {

		"subclassfeature3" : {
			name : "Stunt Master",
			source : ["UM5R", 103],
			minlevel : 3,
			description : "\n   " + "I can learn vehicle stunts. I select one stunt from the list above. Many of these stunts require a vehicle attack. My attack bonus equals my Dexterity modifier + my proficiency bonus. If I hit, I inflict 1d8 per size category larger my vehicle is than the target (minimum 1d8 if they are the same size). My vehicle takes 25% of the damage from this attack.",
			extraname : "Vehicle Stunts",
			extrachoices : ["Love Tap", "Signature Move", "Counter Maneuver", "Drop the Hammer", "Defensive Driving", "Damage Avoidance", "Hole Shot", "Thread the Needle"],
			extraTimes : levels.map(function (n) {
				return n < 7 ? 1 : n < 11 ? 2 : n < 15 ? 3 : n < 18 ? 4 : 5;
			}),
			"love tap" : {
				name : "Love Tap",
				description : "\n   " + "As an action, I can make a ram attack against another vehicle or creature with my vehicle. (see Ram). If I hit, I deal 1d8 additional damage.",
				action : ["action"],
			},

			"signature move" : {
				name : "Signature Move",
				description : "\n   " + "As a bonus action, I gain a +3 bonus with Dexterity (Vehicle Operation) checks until the end of my turn.",
				action : ["bonus action"],
			},

			"counter maneuver" : {
				name : "Counter Maneuver",
				description : "\n   " + "If a vehicle or creature hits my moving vehicle with a physical attack (ram or a melee attack), I can make a ram attack against the target as a reaction (see Ram). If I hit, I deal 1d8 additional damage.",
			},

			"drop the hammer" : {
				name : "Drop the Hammer",
				description : "\n   " + "As a bonus action, I gain a +5 bonus to speed until the end of my turn.",
				action : ["bonus action"],
			},

			"defensive driving" : {
				name : "Defensive Driving",
				description : "\n   " + "As a bonus action, I gain a +2 bonus to my vehicle's AC until the beginning of my next turn.",
				action : ["bonus action"],
			},

			"damage avoidance" : {
				name : "Damage Avoidance",
				description : "\n   " + "As a bonus action, I halve all damage I take from making vehicle attacks until the beginning of my next turn.",
				action : ["bonus action"],
			},

			"hole shot" : {
				name : "Hole Shot",
				description : "\n   " + "As an action, I can make a ram against another vehicle or creature with my vehicle. If I hit, I deal 2d8 additional damage. A hit target also suffers disadvantage on all ability checks and attack rolls until the beginning of my next turn. If I hit with this attack, I cannot use it again until I finish a long rest.",
				usages : 1,
				recovery : "long rest",
				action : ["action"],
			},

			"thread the needle" : {
				name : "Thread the Needle",
				description : "\n   " + "I can set a Dexterity (Vehicle Operation) check I made to a natural 20. Once I use this ability, I cannot use it again until I finish a long rest. I can select this stunt up to three times for additional uses.",
				usages : 1,
				recovery : "long rest",
			},
		},
		"subclassfeature7" : {
			name : "Inside and Out",
			source : ["UM5R", 104],
			minlevel : 7,
			description : "\n   " + "I select one specific vehicle (make, model, and year). With my chosen vehicle, I have advantage on control checks.",
		},
		"subclassfeature11" : {
			name : "Flat Out",
			source : ["UM5R", 104],
			minlevel : 11,
			description : "\n   " + "I gain +5 feet to the acceleration of any vehicle I control.",
		},
		"subclassfeature15" : {
			name : "Jagged Edge",
			source : ["UM5R", 104],
			minlevel : 15,
			description : "\n   " + "I gain a +2 bonus with attack rolls when using a vehicle.",
		},
		"subclassfeature18" : {
			name : "Racing Record",
			source : ["UM5R", 104],
			minlevel : 18,
			description : "\n   " + "When I inflict damage with my vehicle, I roll twice for all damage rolls. I use the higher value for the damage I inflict, and the lower value to calculate how much damage I take.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "field machinist", {

	regExpSearch : /^(?=.*field)(?=.*machinist).*$/i,

	subname : "Field Machinist",

	source : ["UM5R", 104],

	fullname : "Field Machinist",

	toolProfs : ["Engineering", "Int"],

	features : {

		"subclassfeature3" : {
			name : "Artisan of Gears",
			source : ["UM5R", 104],
			minlevel : 3,
			description : "\n   " + "I add half again my proficiency bonus to Engineering checks. At 15th level, I instead double my proficiency bonus to Engineering checks.",
		},
		"subclassfeature7" : {
			name : "Kit Mastery",
			source : ["UM5R", 104],
			minlevel : 7,
			description : "\n   " + "I treat all tool kits as one tech level higher. This increases to two levels at 15th level.",
		},
		"subclassfeature11" : {
			name : "Frantic Repair",
			source : ["UM5R", 104],
			minlevel : 11,
			description : "\n   " + "I can attempt to repair broken items as an action. Additionally, my progress in crafting any technology is doubled.",
		},
		"subclassfeature15" : {
			name : "Covered In Grease",
			source : ["UM5R", 104],
			minlevel : 15,
			description : "\n   " + "All technology I build costs 15% less (and thus takes 15% less time, round down).",
		},
		"subclassfeature18" : {
			name : "Pure Engineer",
			source : ["UM5R", 104],
			minlevel : 18,
			description : "\n   " + "I can set an Engineering check I made to a natural 20. Once I use this feature, I cannot use it again until I finish a long rest. Additionally, whenever I roll a natural 1 on an Engineering check, I re-roll until the result is anything except a natural 1.",
			usages : 1,
			recovery : "long rest",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "field medic", {

	regExpSearch : /^(?=.*field)(?=.*medic).*$/i,

	subname : "Field Medic",

	source : ["UM5R", 104],

	fullname : "Field Medic",

	skills : ["Medicine"],

	features : {

		"subclassfeature3" : {
			name : "A True Healer",
			source : ["UM5R", 105],
			minlevel : 3,
			description : "\n   " + "I gain a bonus to Medicine checks equal to half my proficiency bonus. At 11th level, I instead double my proficiency bonus to Medicine checks.",
		},
		"subclassfeature7" : {
			name : "Physician Heal Thyself",
			source : ["UM5R", 105],
			minlevel : 7,
			description : "\n   " + "As an action, I can spend up to four hit dice to recover HP, or one hit die as a bonus action.",
			action : ["action", "bonus action"],
		},
		"subclassfeature11" : {
			name : "Race to the Fallen",
			source : ["UM5R", 105],
			minlevel : 11,
			description : "\n   " + "I can use the Disengage action as a bonus action if I move at least 10 feet directly towards an ally on that same turn.",
		},
		"subclassfeature15" : {
			name : "In The Presence",
			source : ["UM5R", 105],
			minlevel : 15,
			description : "\n   " + "Every ally within reach can take a bonus action to spend a Hit Die and recover HP. I can use my action to double the amount rolled until the beginning of my next turn.",
			action : ["action"],
		},
		"subclassfeature18" : {
			name : "No Longer Civilized",
			source : ["UM5R", 105],
			minlevel : 18,
			description : "\n   " + "If an ally in line of sight is reduced to 0 HP, I have advantage on attack rolls until I hit; I also gain a bonus to damage with my next hit equal to my Wisdom score.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "grandmaster", {

	regExpSearch : /^(?=.*grandmaster).*$/i,

	subname : "Grandmaster",

	source : ["UM5R", 105],

	fullname : "Grandmaster",

	weaponprofs : [true, false, false],

	features : {

		"subclassfeature3" : {
			name : "Martial Art Discipline",
			source : ["UM5R", 105],
			minlevel : 3,
			description : "\n   " + "I can select a specific martial art discipline. A discipline can be activated on my turn as a bonus action. Once activated, I gain the benefits of this discipline until the end of the encounter (or five minutes). Once I use a martial art discipline, I cannot use it again until I finish a long rest. At 7th, 11th, 15th, and 18th level, I can either select a new discipline or gain additional uses of one I already know before being required to finish a long rest. If I select the same discipline three times (they need not be at successive levels), I unlock an additional benefit. I can only have one discipline in effect at a time.",
			extraname : "Martial Art Disciplines",
			extrachoices : ["Capoeira", "Drunken Boxing", "Eagle Claw", "Karate", "Iron Palm", "Iron Shirt", "Long Fist", "Monkey Kung-Fu", "Muay Thai", "Praying Mantis", "Snake Style", "Tai Chai", "Trekwondo", "Tiger Claw"],
			extraTimes : levels.map(function (n) {
				return n < 7 ? 1 : n < 11 ? 2 : n < 15 ? 3 : n < 18 ? 4 : 5;
			}),
			"capoeira" : {
				name : "Capoeira",
				description : "\n   " + "Resembling a dance more than a martial art, those specialized in capoeira are always in motion, attempting to find an opening in an opponent in whichever way possible. After activating, I gain the following bonuses:\n   I can use the Disengage action as a bonus action.\n   I gain a +5 bonus to speed.\n   I have advantage on all Dexterity saving throws.\n   After I select this discipline a third time, my bonus to speed increases to +10.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"drunken boxing" : {
				name : "Drunken Boxing",
				description : "\n   " + "In my enemy's eyes, I just appear to stumble around, luring my enemies in a false hope of a comfortable victory. The more chaotic I look, the deadlier I am. I must be inebriated to activate this discipline, and after doing so, I gain the following bonuses:\n   I gain temporary hit points equal to twice my level.\n   I do not inflict double dice damage when scoring a critical hit; instead, U gain one additional unarmed melee attacks as part of the same action (max two attacks gained this way per turn).\n   Each time a creature misses, my AC increases by 1 (max 3); if a creature misses me at my max AC bonus, this bonus reverts to 0, and I gain an unarmed melee attack as a reaction against the triggering target.\n   After I select this discipline a third time, I gain three additional unarmed attacks with a critical hit instead of two.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"eagle claw" : {
				name : "Eagle Claw",
				description : "\n   " + "I know how to find weak spots in my enemy. I'm often seen as being patient, waiting for a moment for a decisive strike. After activating, I gain the following bonuses:\n   If I hit a creature, I can instead inflict half damage and grapple the target.\n   At the beginning of my turn, as a bonus action, any enemy I'm grappling suffers damage equal to my primary attack modifier.\n   Any time I inflict a critical hit on a creature, the target suffers half my hit damage at the beginning of its turn.\n   After I select this discipline a third time, any enemy I'm grappling at the beginning of my turn suffers damage equal to my Strength modifier + my Dexterity modifier.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"karate" : {
				name : "Karate",
				description : "\n   " + "My strength comes from your empty hand, the origin of the word. This discipline is prevalent given the simplicity of its foundation. After activating, I gain the following bonuses:\n   As an action, until the end of your next turn, I have advantage on unarmed attack rolls and triple all dice with critical hits instead of double.\n   I can spend 30 feet of movement to gain a +1 bonus to AC until the beginning of my next turn.\n   As an action, I make a single kick attack. This is an unarmed attack that inflicts 1d10 + Strength modifier damage. I gain a +4 damage bonus for each additional attack I would generally make with an Attack action.\n   After I select this discipline a third time, my kick attack inflicts 2d6 damage instead of 1d10, and my AC bonus increases to +2.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"iron palm" : {
				name : "Iron Palm",
				description : "\n   " + "I stopped splitting boards and bricks and moved up to bones. My opponents will fear my strikes. After activating, I gain the following bonuses:\n   I gain a +1 bonus to melee damage rolls.\n   If I roll a critical hit with an unarmed attack, I maximize one of my damage dice.\n   If I attempt to damage obstacles like doors or tables, I double the number of damage dice.\n   After I select this discipline a third time, I maximize two of my damage dice with a critical hit, and I triple all damage dice against obstacles.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"iron shirt" : {
				name : "Iron Shirt",
				description : "\n   " + "The only way to survive some encounters is to not worry about how many times I'm hurt. After activating, I gain the following bonuses:\n   I have resistance to all slashing and bludgeoning damage.\n   I can spend up to half my level in Hit Dice as an action to recover HP as if taking a short rest.\n   If I suffer damage equal or greater than 1/4th of my total HP outside of my turn, I have advantage on attack rolls until the end of my next turn.\n   After I select this discipline a third time, I gain resistance to piercing damage as well.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"long fist" : {
				name : "Long Fist",
				description : "\n   " + "An aggressive style, I push forward to your enemy, hoping a strong offense will discourage counter attacks. After activating, I gain the following bonuses:\n   I gain a +1 bonus to melee damage rolls.\n   My unarmed attacks and attacks with light melee weapons gain the Reach property.\n   If I hit a creature with an opportunity attack, I can disengage from all other creatures and move within 5 feet of that target.\n   After I select this discipline a third time, my reach increases to 10 feet for the purposes of opportunity attacks.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"monkey kung-fu" : {
				name : "Monkey Kung-Fu",
				description : "\n   " + "My bizarre acrobatic maneuvers involve grabs, tumbles, and attacks, which more disorientate your opponents than damage them. After activating, you gain the following bonuses:\n   Each time I hit a creature with an unarmed attack, I gain a +1 bonus to AC; this effect is cumulative up to +3 with each successive hit on the same creature but is lost if I miss the target, I do not attack the target by the end of my next turn, or I attack another creature.\n   When I activate this discipline, I set aside four \"Monkey Points\". Unused points are lost when the discipline expires. I can use a monkey point in the following ways:\n     I knock a target your size prone as a reaction to it missing on a melee attack against me.\n     I automatically pass a Dexterity saving throw.\n     I take only half damage from an enemy attack.\n     I double my proficiency bonus and gain advantage on my next Athletics or Acrobatics check.\n   After I select this discipline a third time, I gain three additional Monkey Points.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"muay thai" : {
				name : "Muay Thai",
				description : "\n   " + "A variation of kickboxing, there is no limb I possess that cannot be used for direct physical attacks. I'm a stand-up fighter with a huge repertoire of attacks. After activating, I gain the following bonuses:\n   Instead of a simple unarmed attack, I must select which attacks I wish to make. The damage dice listed cannot be adjusted by any other abilities.\n     Punch (1d4): I make two punch attacks in place of one normal attack I would typically make (maximum of 2 uses per Attack action).\n     Elbow (1d8): If I use an elbow once as part of an Attack action, I roll damage dice twice and take the higher value.\n     Jump Kick (1d10): I must move at least 10 feet towards my target before making this attack.\n     Roundhouse Kick (2d8): I suffer a –3 penalty to my attack roll.\n     Knee (1d6): I can shove the target 5 feet. If the target hits an obstacle, it takes 2 extra damage.\n   After I select this discipline a third time, if I hit a creature three times or more with an Attack action, the target has disadvantage on its next attack against me.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"praying mantis" : {
				name : "Praying Mantis",
				description : "\n   " + "I carry a commanding stance and emphasize my aggression through rapid and coordinated hand movements that both distract the enemy and deliver powerful, crippling blows. After activating, I gain the following bonuses:\n   I gain a +1 bonus to AC (I cannot use a shield with this bonus).\n   If an enemy misses on a melee attack against me, I can make a single melee attack against that target as a reaction. On a hit, I inflict half damage. If I score a critical hit, the target has disadvantage on its next melee attack against me.\n   I have advantage against attempts to be moved against my will.\n   After I select this discipline a third time, my AC bonus increases to +2.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"snake style" : {
				name : "Snake Style",
				description : "\n   " + "My strikes are light, but rapid, connecting numerous times and at numerous places against my opponent. Simultaneously, my fluid movements make me a difficult target. After activating, I gain the following bonuses:\n   At the beginning of my turn as a free action, I select one creature I can see to gain a +1 bonus to AC against until the beginning of my next turn (I cannot use a shield with this bonus).\n   If I roll a 1 on any of my damage die, I gain an additional melee attack against the same target as part of that action. If I roll multiple damage dice with a hit, all dice must roll a 1. Once I use this ability, I cannot use it again until the beginning of my next turn.\n   While I'm prone, creatures don't have advantage on attacks against me while prone, and I don't have disadvantage on attacks against them while prone.\n   After I select this discipline a third time, my AC bonus increases to +2.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"tai chai" : {
				name : "Tai Chai",
				description : "\n   " + "I can direct enemy aggression into a weakness. The angrier the opponent, the more energy I can direct back. After activating, I gain the following bonuses:\n   If a creature's melee attack roll against me misses, the difference between the attack result and my AC becomes a damage bonus on my next melee attack (max 5 damage). This attack must be made on my next turn against the target that missed me, and if I miss, the damage bonus is lost.\n   If a creature’s melee attack roll against me is a natural 1, I can knock the target prone and make a melee attack as a reaction.\n   After I select this discipline a third time, I knock the target prone and make a melee attack as a reaction if my enemy rolls a natural 1 or 2.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"trekwondo" : {
				name : "Trekwondo",
				description : "\n   " + "More defined by its powerful leg movements than hand strikes, my opponents should always keep their eyes on my feet. After activating, I gain the following bonuses:\n   If I'm not grappled or if my legs are unrestrained, my unarmed attacks increase their damage die by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). These are kick attacks, and does not affect my martial artist \"Combo Chain\" tier.\n   If I move at least 20 feet towards a creature and make an unarmed (kick) attack as my Attack action, I have advantage on the attack. Once I use this ability, I cannot use it again until the beginning of my next turn.\n   Once per discipline activation, if I score a critical hit against a target my size or smaller, I inflict maximum damage.\n   After I select this discipline a third time, I can inflict maximum damage with a critical hit twice per activation.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},

			"tiger claw" : {
				name : "Tiger Claw",
				description : "\n   " + "I adore getting close, real close. Getting within my enemy's reach, I hope to prevent a strong counterattack. And I kick too. After activating, I gain the following bonuses:\n   I gain a +5 bonus to speed.\n   I can spend 20 feet of movement and move to occupy the same space as my opponent; I no longer occupy a space around said opponent, and allies can attack through me. Any target occupying my space cannot use the Disengage action.\n   If I hit a target with an unarmed attack, I can use a bonus action to inflict additional slashing damage equal to my attack ability modifier. This damage is not part of the same attack action and thus is not multiplied with a critical hit. Once I use this ability, I cannot use it again until the beginning of my next turn.\n   After I select this discipline a third time, my bonus to speed increases to +10.",
				usages : 1,
				recovery : "long rest",
				action : ["bonus action"],
			},
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "gun dancer", {

	regExpSearch : /^(?=.*gun)(?=.*dancer).*$/i,

	subname : "Gun Dancer",

	source : ["UM5R", 108],

	fullname : "Gun Dancer",

	weaponprofs : [false, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],

	features : {

		"subclassfeature3" : {
			name : "Spastic Shot",
			source : ["UM5R", 108],
			minlevel : 3,
			description : "\n   " + "If I use my attack action to make ranged attacks with one-handed small arms, before the end of my action, I roll a d20. On a roll of 16, 17, or 18, I gain one extra ranged attack as a part of the same action using a one-handed small arm, and on a roll of 19 or 20, I gain two extra ranged attacks.",
		},
		"subclassfeature7" : {
			name : "Faster Than Eyes Can See",
			source : ["UM5R", 108],
			minlevel : 7,
			description : "\n   " + "I can reload a single one-handed small arm taking no action. Once I use this feature, I cannot use it again until I take a short rest or long rest. I also gain a +2 bonus to initiative.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature11" : {
			name : "Cowboy Kembo",
			source : ["UM5R", 108],
			minlevel : 11,
			description : "\n   " + "If I score a critical hit with a ranged attack gained from \"Spastic Shot\", I gain one extra attack (maximum of 4 extra attacks) with that action.",
		},
		"subclassfeature15" : {
			name : "Mayhem Sonata",
			source : ["UM5R", 108],
			minlevel : 15,
			description : "\n   " + "My \"Spastic Shot\" range increases to 14-17 for one extra attack, and 18-20 for two extra attacks.",
		},
		"subclassfeature18" : {
			name : "Gun Waltz",
			source : ["UM5R", 108],
			minlevel : 18,
			description : "\n   " + "If I gain at least two additional attacks with \"Spastic Shot\", I also gain a +1 bonus to AC and  a 5-foot bonus to my speed until the end of my next turn (not cumulative).",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "infantry support specialist", {

	regExpSearch : /^(?=.*infantry)(?=.*support)(?=.*specialist).*$/i,

	subname : "Infantry Support Specialist",

	source : ["UM5R", 108],

	fullname : "Infantry Support Specialist",

	weaponprofs : [true, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],

	features : {

		"subclassfeature3" : {
			name : "Weapons Platform",
			source : ["UM5R", 109],
			minlevel : 3,
			description : "\n   " + "If I don't move on my turn, I can plant my feet to stabilize my position. I cannot use my speed to move until the beginning of my next turn. Until the beginning of my next turn, I gain a +1 bonus to attack rolls with auto or auto-heavy weapons. Saving throw DCs against my auto or auto-heavy weapon attacks also increase by 1.",
		},
		"subclassfeature7" : {
			name : "Focused Barrage",
			source : ["UM5R", 109],
			minlevel : 7,
			description : "\n   " + "If using an auto or auto-heavy weapon, at the end of my turn, I can make a single ranged attack against one target I have already hit that same turn as a bonus action.",
		},
		"subclassfeature11" : {
			name : "Lawnmower Barrage",
			source : ["UM5R", 109],
			minlevel : 11,
			description : "\n   " + "I can move 5 feet without incurring attack penalties with two-handed small arms and heavy weapons (but not super heavy weapons). I can also plant a super heavy weapon as a bonus action.",
		},
		"subclassfeature15" : {
			name : "The Mean One",
			source : ["UM5R", 109],
			minlevel : 15,
			description : "\n   " + "All opponents within 20 feet of me suffer disadvantage on any attack that doesn't include me, and I gain a +3 bonus to damage rolls with ranged weapons against them.",
		},
		"subclassfeature18" : {
			name : "Let's Rock",
			source : ["UM5R", 109],
			minlevel : 18,
			description : "\n   " + "I can use an action to make a single ranged attack against each enemy in range I can see. Once I use this feature, I cannot use it again until I finish a short or long rest. If no targets are hit by this action, I regain the use of this feature.",
			usages : 1,
			recovery : "long rest",
			action : ["action"],
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "machine of war", {

	regExpSearch : /^(?=.*machine)(?=.*of)(?=.*war).*$/i,

	subname : "Machine of War",

	source : ["UM5R", 109],

	fullname : "Machine of War",

	features : {

		"subclassfeature3" : {
			name : "Adrenaline Rush",
			source : ["UM5R", 109],
			minlevel : 3,
			description : "\n   " + "Each time I make an attack against a creature within 30 feet of me, I recover 1 HP per point of damage dealt. For every 10 HP recovered this way, I gain one additional attack with my next Attack action (maximum of 1 additional attack). This value is reduced to zero if I don't make an attack within 1 minute.",
		},
		"subclassfeature7" : {
			name : "Glazed Look",
			source : ["UM5R", 109],
			minlevel : 7,
			description : "\n   " + "If I'm reduced to 0 HP by a non-critical hit, I can spend a Hit Die as a reaction, but only regain half the HP (rounded up). This prevents me from falling prone.",
		},
		"subclassfeature11" : {
			name : "You Want Some Of This",
			source : ["UM5R", 109],
			minlevel : 11,
			description : "\n   " + "As a free action, I can allow enemies to have advantage against me until the beginning of my next turn. If I do, until the beginning of my next turn, I have advantage on attack rolls and regain 2 HP instead of 1 with \"Adrenaline Rush\".",
			action : ["action", " (free action)"],
		},
		"subclassfeature15" : {
			name : "Risky Maneuver",
			source : ["UM5R", 109],
			minlevel : 15,
			description : "\n   " + "If I'm reduced to 15 HP or less, double my proficiency bonus on attack rolls until the end of my next turn. After using this ability, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature18" : {
			name : "Ultimate Badass",
			source : ["UM5R", 109],
			minlevel : 18,
			description : "\n   " + "When my HP is reduced to half my total HP value or less, I gain a +2 bonus to damage rolls. When my HP is reduced to one-quarter my total HP value or less, this bonus increases to +3.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "man-at-arms", {

	regExpSearch : /^(?=.*man-at-arms).*$/i,

	subname : "Man-At-Arms",

	source : ["UM5R", 110],

	fullname : "Man-At-Arms",

	weaponprofs : [false, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol", "accelerator rifle", "assault rifle", "basic sniper rifle", "bolt rifle", "caseless rifle", "cyclotron rifle", "displacement device", "disruptor", "endothermic rifle", "esp rifle", "field manipulator", "gauss repeater", "gravity gun", "grappling hook, two-handed", "grenade light weapon", "grub gun, bio", "ion rifle", "kinetic flash rifle", "light coilgun", "machine shotgun", "mind phazer, bio", "nailgun", "nuclear pulse rifle", "plasma rifle", "railgun", "shotgun", "submachine gun", "semi-automatic rifle", "energy modulator, plamsa repeater", "energy modulator, shock blaster", "energy modulator, electro mortar", "energy modulator, electro-volt", "nano-modulator, assault rifle", "nano-modulator, combat shotgun", "nano-modulator, solid slug", "nano-modulator, sniper cannon", "sniper cannon", "solid laser rifle", "sonic focus rifle", "sonic stunner", "spp rifle", "spp sensor gun", "spp vortex", "thumper laser rifle", "ultimate sniper rifle", "vapor rifle", "x-beam", "xeno-stranger, bio", "arc rifle", "acid thrower, bio", "atomizer", "barrel blaster", "blade launcher", "cannonballer", "coil light gun", "crankgun", "esp maelstorm", "flamethrower", "god's eye sniper gun", "grappling hook, heavy", "ion cannon", "linear collider", "machine light cannon", "medium machine gun", "micromissile launcher", "net gun", "nuclear particle lance", "proton wand", "pulse minigun", "railcannon", "rocket launcher", "rocket launcher mk2", "rotary cannon", "smartgun", "solid laser cannon", "sonic devastator", "thor cannon", "thumper laser cannon", "venom spitter, bio", "autocannon", "caustic cannon, bio", "dense plasma focus cannon", "grappling hook, super heavy", "ground heavy gun", "mass driver", "mortar", "particle beam gun", "plasma artillery", "repeating laser blaster", "super-kill sniper", "volley gun esp"]],

	armor : [true, true, true, false],

	features : {

		"subclassfeature3" : {
			name : "This Is My Rifle",
			source : ["UM5R", 110],
			minlevel : 3,
			description : "\n   " + "I select one specific firearm. I gain a +1 bonus to attack rolls and do not suffer disadvantage on attack rolls when prone with my chosen weapon. This is my chosen weapon for all man-at-arms abilities. When reaching a new level, I may select a different weapon.",
		},
		"subclassfeature7" : {
			name : "My Weapon Is My Best Friend",
			source : ["UM5R", 110],
			minlevel : 7,
			description : "\n   " + "I can change a clip, magazine, or a cell on my chosen weapon without taking an action. Once I use this feature, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature11" : {
			name : "Fire My Weapon True",
			source : ["UM5R", 110],
			minlevel : 11,
			description : "\n   " + "Once per turn, if I have advantage on my ranged attack with my chosen weapon and both rolls hit, I'm considered to have hit twice (using additional ammunition accordingly).",
		},
		"subclassfeature15" : {
			name : "We Are Masters of Our Enemy",
			source : ["UM5R", 110],
			minlevel : 15,
			description : "\n   " + "Once per turn, if I drop a creature to 0 HP using a firearm, I can make a single ranged attack as part of the same action.",
		},
		"subclassfeature18" : {
			name : "Inseperable Appendage",
			source : ["UM5R", 110],
			minlevel : 18,
			description : "\n   " + "I can re-roll one natural 1 on an attack roll with that weapon. Once I use this feature, I cannot use it again until I finish a short or long rest. Additionally, my chosen weapon cannot be targeted or destroyed, I cannot be disarmed of it, and I can stow my chosen weapon and draw a one-handed small arm without taking an action.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "militarist", {

	regExpSearch : /^(?=.*militarist).*$/i,

	subname : "Militarist",

	source : ["UM5R", 110],

	fullname : "Militarist",

	features : {

		"subclassfeature3" : {
			name : "Coordination",
			source : ["UM5R", 110],
			minlevel : 3,
			description : "\n   " + "I receive Tactical Points (TPs) each time something unfortunate happens to me or an ally. As these points compound, I can counter with positive effects. Points are lost when I take a short rest or long rest or when I roll for initiative. Spending points usually takes either a bonus action or a reaction. I receive 1 point when each of the following occurs:\n   An ally you can see or communicate with rolls a natural 1 on an attack roll.\n   An ally suffers a critical hit.\n   An ally is reduced past half HP.\n    An ally is reduced to 0 HP.\n   Three or more allies suffer damage from an area effect.\nI can then spend acquired TPs in the following ways (see notes).",
			toNotesPage : [{
				name : "Coordination Effects",
				source : ["UM5R", 110],
				popupName : "Coordination Effects",
				note : [
					"Elevate Strategy (3+ Tactical Points): As a bonus action, I select one ally per 3 points spent; A targeted ally can take two actions and two bonus actions on their next turn.",
					"Eyes Around (2-6 Tactical Points): As a bonus action, I select one ally per 2 points spent (maximum of 3 allies); The targeted ally makes a single attack.",
					"Intelligent Defense (1 Tactical Point): One ally gains a +3 bonus to AC until the beginning of my next turn. If I move before then, the bonus is lost.",
					"Opportune Weakness (2 Tactical Points): As a reaction, one ally's hit becomes a critical hit.",
					"Outmaeuver (1 Tactical Point): I spend 1 point and 30 feet of movement to move a creature within 30 feet of me that is my size or smaller up to 5 feet (it cannot be moved into hazardous terrain). The target suffers disadvantage on attack rolls until the beginning of my next turn.",
					"Shift Battle Theater (1-3 Tactical Points): As a bonus action, I select one ally per 1 point spent (maximum of 3 allies); Yhe targeted ally can either make a Disengage action for free or can move immediately up to 20 feet.",
					"Reverse Course of Action (10 Tactical Points): As an action, all enemies I can see are stunned until the beginning of my next turn."
				],
			}],
		},
		"subclassfeature7" : {
			name : "Re-Evaluate Strategy",
			source : ["UM5R", 111],
			minlevel : 7,
			description : "\n   " + "I can spend my Hit Dice as a bonus action (recovering no HP) to gain 1d4 TP per spent die.",
			action : ["bonus action"],
		},
		"subclassfeature11" : {
			name : "Tide of War",
			source : ["UM5R", 111],
			minlevel : 11,
			description : "\n   " + "I gain 1d4 TP each time I meet a \"Coordination\" condition instead of 1.",
		},
		"subclassfeature15" : {
			name : "Battle Instinct",
			source : ["UM5R", 111],
			minlevel : 15,
			description : "\n   " + "If enemies gain a surprise action, I gain 5 TP. If a creature hits me, I gain 1 TP.",
		},
		"subclassfeature18" : {
			name : "Battle Leader",
			source : ["UM5R", 111],
			minlevel : 18,
			description : "\n   " + "If I'm reduced to 0 HP, I gain 10 TP and can use as many \"Coordination\" abilities as I want and can afford as a reaction. I fall unconscious as normal as soon as all these effects are resolved.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "pathfinder", {

	regExpSearch : /^(?=.*pathfinder).*$/i,

	subname : "Pathfinder",

	source : ["UM5R", 111],

	fullname : "Pathfinder",

	skills : ["Stealth"],

	features : {

		"subclassfeature3" : {
			name : "Dust",
			source : ["UM5R", 111],
			minlevel : 3,
			description : "\n   " + "I gain the ability to slip into the shadows. I have a dust pool of 20 feet (increasing with higher levels). If no opponents can see me (utilizing cover, creating a distraction, or merely passing between objects to break line of sight, even for a split second), I can use my dust pool to \"teleport\" a distance away to an area out of sight of any opponent. I have to be able to physically traverse the space in between, I cannot bypass obstacles I couldn't otherwise overcome, but I can bypass any obstacle I could overcome with a DC 15 or less. My dust pool is reset when I finish a short rest, long rest, or when I roll for initiative. My dust movement replaces my normal movement, it does not add to my existing movement made during a turn. For every 10 feet I don't move on my turn, I fill my dust pool by 5 feet.",
			additional : ["", "", "20 feet", "20 feet", "20 feet", "20 feet", "25 feet", "25 feet", "25 feet", "25 feet", "30 feet", "30 feet", "30 feet", "30 feet", "35 feet", "35 feet", "35 feet", "40 feet", "40 feet", "40 feet"],
		},
		"subclassfeature7" : {
			name : "Back of your Head",
			source : ["UM5R", 111],
			minlevel : 7,
			description : "\n   " + "If I roll 5 or less on any Stealth check, I can re-roll.",
		},
		"subclassfeature11" : {
			name : "Like a Hawk",
			source : ["UM5R", 111],
			minlevel : 11,
			description : "\n   " + "If I use at least 10 feet from my dust pool on my turn, I gain 10 feet of additional walking speed on that turn.",
		},
		"subclassfeature15" : {
			name : "Under Any Shadow",
			source : ["UM5R", 111],
			minlevel : 15,
			description : "\n   " + "If I have cover at the beginning of my turn, I retain the benefit of cover until the beginning of my next turn, regardless of where I move.",
		},
		"subclassfeature18" : {
			name : "Complete Covertness",
			source : ["UM5R", 111],
			minlevel : 18,
			description : "\n   " + "If I use at least 20 feet from my dust pool on my turn, I gain 20 feet of additional walking speed on that turn (replacing the benefit of \"Like a Hawk\").",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "mecha pilot", {

	regExpSearch : /^(?=.*mecha)(?=.*pilot).*$/i,

	subname : "Mecha Pilot",

	source : ["UM5R", 111],

	fullname : "Mecha Pilot",

	toolProfs : ["All mecha"],

	features : {

		"subclassfeature3" : {
			name : "Naturally Adept",
			source : ["UM5R", 112],
			minlevel : 3,
			description : "\n   " + "When calculating my Control Ability (the average of my pilot ability score and the mecha's physical ability score), my own ability score is counted as 2 higher (which increases at higher levels). For example, if the mecha uses a 22 Strength for a melee attack but I have an 18 Intelligence, my Intelligence is treated as 20, for a control ability of 21 (+5). The selection of pilot ability score is based on the type of cockpit designed (see Cockpits).",
			additional : ["", "", "2 higher", "2 higher", "2 higher", "2 higher", "3 higher", "3 higher", "3 higher", "3 higher", "4 higher", "4 higher", "4 higher", "4 higher", "5 higher", "5 higher", "5 higher", "6 higher", "6 higher", "6 higher"],
		},
		"subclassfeature7" : {
			name : "Changing The Laws",
			source : ["UM5R", 112],
			minlevel : 7,
			description : "\n   " + "After rolling initiative, I reduce my REACON level by 1.",
		},
		"subclassfeature11" : {
			name : "Hearing The Whisper",
			source : ["UM5R", 112],
			minlevel : 11,
			description : "\n   " + "If I suffer a Special Hit Location result, I can force the target to not roll and set the value to whatever I wish. Once I use this ability, I cannot use it again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature15" : {
			name : "Instinctual Reactions",
			source : ["UM5R", 112],
			minlevel : 15,
			description : "\n   " + "As a reaction, I can adjust the roll result for hit location on my mecha by up to 2.",
			action : ["action"],
		},
		"subclassfeature18" : {
			name : "One In The Same",
			source : ["UM5R", 112],
			minlevel : 18,
			description : "\n   " + "When attempting to target a specific hit location, my penalty to attack is reduced by 1.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "pistolero", {

	regExpSearch : /^(?=.*pistolero).*$/i,

	subname : "Pistolero",

	source : ["UM5R", 112],

	fullname : "Pistolero",

	weaponprofs : [false, false, ["air dart pistol", "assembly assault anachronism", "break-action shot pistol", "capacitor shot pistol", "capsicum spray", "caseless pistol", "charge pistol", "coil pistol", "demiurge, revelation", "demiurge, prophecy", "demiurge, apocalypse", "electroshock gun", "esp pistol", "grappling hook", "high-calibre autoloader", "machine pistol", "necrotizer, bio", "nuclear pellet pistol", "one-handed grenade launcher", "plasma pistol", "pico-positron", "pocket pistol", "revolver", "rail pistol", "restrainment field", "smart pistol", "solid laser pistol", "spp pistol", "thumper laser pistol"]],

	features : {

		"subclassfeature3" : {
			name : "Point Shot",
			source : ["UM5R", 112],
			minlevel : 3,
			description : "\n   " + "As an action, I can make a single ranged attack with a non-auto one-handed small arm against a creature 20 feet or closer. I inflict an additional 1d6 damage on a hit, increasing this damage by one step at 7th, 11th, 15th, and 18th level (1d6 > 2d6 > 3d6 > 4d6 > 5d6 > 6d6 > 7d6 > 8d6 > etc.). Any additional effects which increase damage this way, including other pistolero abilities, are compounded.",
			action : ["action"],
		},
		"subclassfeature7" : {
			name : "Weaver Stance",
			source : ["UM5R", 112],
			minlevel : 7,
			description : "\n   " + "I can wield a single one-handed small arm with two hands. If so, I suffer a 20-foot penalty to speed at the beginning of my turn that lasts until the beginning of my next turn; I also increase \"Point Shot\" damage by 1 step for that same time.",
		},
		"subclassfeature11" : {
			name : "Kill Shot",
			source : ["UM5R", 113],
			minlevel : 11,
			description : "\n   " + "If my \"Point Shot\" attack reduces a creature to fewer HP than my level, as a bonus action, I use one additional round of ammunition to kill the target.",
			action : ["bonus action"],
		},
		"subclassfeature15" : {
			name : "Kinetic Shot",
			source : ["UM5R", 113],
			minlevel : 15,
			description : "\n   " + "If I act before an enemy after rolling initiative, I can increase my \"Point Shot\" damage against that enemy by two steps until the enemy acts.",
		},
		"subclassfeature18" : {
			name : "Only Need One",
			source : ["UM5R", 113],
			minlevel : 18,
			description : "\n   " + "If I score a critical hit with a \"Point Shot\" attack, increase my damage by two steps.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "recon intelligence", {

	regExpSearch : /^(?=.*recon)(?=.*intelligence).*$/i,

	subname : "Recon Intelligence",

	source : ["UM5R", 113],

	fullname : "Recon Intelligence",

	skills : ["Stealth"],

	weaponprofs : [false, false, ["basic sniper rifle", "energy modulator, electro-volt", "nano-modulator, sniper cannon", "sniper cannon", "spp sensor gun", "ultimate sniper rifle", "atomizer", "god's eye sniper gun", "super-kill sniper"]],

	armor : [true, false, false, false],

	features : {

		"subclassfeature3" : {
			name : "Flawless Reputation",
			source : ["UM5R", 113],
			minlevel : 3,
			description : "\n   " + "When I make a Stealth check against a target's Perception, I roll 1d10 and put it aside, this is my reputation die. I can use that result to affect the outcome of any attack or Stealth check, including the one I just made. I can only set aside 1 die at a time and can replace one with a better result if it comes up. I lose any acquired reputation die when I finish a long rest.",
		},
		"subclassfeature7" : {
			name : "Yowie Specialization",
			source : ["UM5R", 113],
			minlevel : 7,
			description : "\n   " + "If I use a ghillie/yowie suit in its proper environment, I can use an action to become invisible until I move or make an attack.",
			action : ["action"],
		},
		"subclassfeature11" : {
			name : "Brilliant Shadow",
			source : ["UM5R", 113],
			minlevel : 11,
			description : "\n   " + "I roll all acquired reputation dice twice and set aside the higher value.",
		},
		"subclassfeature15" : {
			name : "Psychological Warfare",
			source : ["UM5R", 113],
			minlevel : 15,
			description : "\n   " + "If I drop a creature 25 feet away or further to 0 HP, I gain one additional reputation die in addition to any already acquired.",
		},
		"subclassfeature18" : {
			name : "Specter",
			source : ["UM5R", 113],
			minlevel : 18,
			description : "\n   " + "I can have two reputation dice at once, (three if one is acquired from \"Psychological Warfare\").",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "ring fighter", {

	regExpSearch : /^(?=.*ring)(?=.*fighter).*$/i,

	subname : "Ring Fighter",

	source : ["UM5R", 113],

	fullname : "Ring Fighter",

	weaponprofs : [true, false, false],

	features : {

		"subclassfeature3" : {
			name : "Grapple Discipline",
			source : ["UM5R", 113],
			minlevel : 3,
			description : "\n   " + "I have advantage on all rolls related to grappling.",
			savetxt : {

				adv_vs : ["grappled"]
			},
		},
		"subclassfeature7" : {
			name : "Guard Control",
			source : ["UM5R", 113],
			minlevel : 7,
			description : "\n   " + "While grappling a creature, I gain a +1 bonus to AC.",
		},
		"subclassfeature11" : {
			name : "Tolerance Threshold",
			source : ["UM5R", 114],
			minlevel : 11,
			description : "\n   " + "If I'm grappling a creature, I have resistance to any bludgeoning, piercing, or slashing damage from the target.",
		},
		"subclassfeature15" : {
			name : "Choke / Lock",
			source : ["UM5R", 114],
			minlevel : 15,
			description : "\n   " + "Each turn I sustain a grapple on a creature, I inflict damage equal to my Strength or Dexterity modifier on the target. This does not count as an action.",
		},
		"subclassfeature18" : {
			name : "Mounted Attack",
			source : ["UM5R", 114],
			minlevel : 18,
			description : "\n   " + "While grappling a creature, it suffers disadvantage on escape attempts.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "sapper", {

	regExpSearch : /^(?=.*sapper).*$/i,

	subname : "Sapper",

	source : ["UM5R", 114],

	fullname : "Sapper",

	toolProfs : ["Demolitions", "Int"],

	features : {

		"subclassfeature3" : {
			name : "The Long Walk",
			source : ["UM5R", 114],
			minlevel : 3,
			description : "\n   " + "I have advantage on Demolitions checks. Additionally, when an opponent makes a saving throw against my explosive attack (via a thrown grenade, planted explosive, or a weapon with the \"exp\" property), my attack receives a damage bonus equal to the amount the target failed the saving throw + my level.",
		},
		"subclassfeature7" : {
			name : "Render Safe Procedures",
			source : ["UM5R", 114],
			minlevel : 7,
			description : "\n   " + "If forced to make a Dexterity saving throw, I can move 5 feet as a reaction but before needing to roll (possibly escaping the area of effect).",
		},
		"subclassfeature11" : {
			name : "Slight Chemical Improvement",
			source : ["UM5R", 114],
			minlevel : 11,
			description : "\n   " + "With an explosive attack (via a thrown grenade, planted explosive, or a weapon with the \"exp\" property) with a blast radius of 10 feet or more, I increase the blast radius by another 5 feet.",
		},
		"subclassfeature15" : {
			name : "Proper Application",
			source : ["UM5R", 114],
			minlevel : 15,
			description : "\n   " + "When determining the saving throw DC for explosives I set, I double my Intelligence modifier. Additionally, if a target fails a saving throw against my explosives attack (via a thrown grenade, planted explosive, or a weapon with the \"exp\" property), I increase the number of damage dice by two.",
		},
		"subclassfeature18" : {
			name : "Scorched Earth",
			source : ["UM5R", 114],
			minlevel : 18,
			description : "\n   " + "After I detonate an explosive, a lingering fire breaks out until the start of my next turn, dealing my Intelligence modifier + my level in fire damage to any targets entering or starting their turn in the affected area. The fire lasts for 1 minute.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "selfless protector", {

	regExpSearch : /^(?=.*selfless)(?=.*protector).*$/i,

	subname : "Selfless Protector",

	source : ["UM5R", 114],

	fullname : "Selfless Protector",

	features : {

		"subclassfeature3" : {
			name : "Take A Bullet",
			source : ["UM5R", 114],
			minlevel : 3,
			description : "\n   " + "I can select one creature within reach to be my focus. As long my focus remains in reach of me, it can use my AC if it is higher than its own. If my focus is hit by an attack or fails a Dexterity saving throw, I can take the entire damage and/or effects instead. When I move, I can pull my focus with me. Once I select my focus, I cannot select another until after I take a short or long rest. If my focus moves out of reach, it no longer benefits from this ability until it or I return.",
		},
		"subclassfeature7" : {
			name : "Licensed Response",
			source : ["UM5R", 114],
			minlevel : 7,
			description : "\n   " + "If my focus is hit with an attack, regardless if it suffers any damage, I can make an attack against the attacker as a reaction. If my focus suffers damage, I have advantage with this attack.",
		},
		"subclassfeature11" : {
			name : "Job Well Done",
			source : ["UM5R", 114],
			minlevel : 11,
			description : "\n   " + "As long as I'm actively protecting my focus, I gain a +1 bonus to AC. Additionally, when I take a short rest, if I previously selected focus had suffered no damage, I regain double my Hit Dice.",
		},
		"subclassfeature15" : {
			name : "Evasive Techniques",
			source : ["UM5R", 115],
			minlevel : 15,
			description : "\n   " + "If my focus is within reach and is caught by an area effect, as a reaction, I throw my focus up to 15 feet away before the effect activates.",
		},
		"subclassfeature18" : {
			name : "Keep It Together",
			source : ["UM5R", 115],
			minlevel : 18,
			description : "\n   " + "Each time I regain HP, I can give my focus any amount of the HP instead.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "skirmisher", {

	regExpSearch : /^(?=.*skirmisher).*$/i,

	subname : "Skirmisher",

	source : ["UM5R", 115],

	fullname : "Skirmisher",

	weaponprofs : [false, false, ["basic sniper rifle", "energy modulator, electro-volt", "nano-modulator, sniper cannon", "sniper cannon", "spp sensor gun", "ultimate sniper rifle", "atomizer", "god's eye sniper gun", "super-kill sniper"]],

	features : {

		"subclassfeature3" : {
			name : "Automatic Reflexes",
			source : ["UM5R", 115],
			minlevel : 3,
			description : "\n   " + "After I hit a creature 25 feet away or farther on my turn with a ranged weapon, I can make a single ranged attack as part of the same action against any other target in range. If I hit a target with this attack, I cannot use Automatic Reflexes again until I take a short or long rest.",
			usages : ["", "", 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5],
			recovery : "short rest",
		},
		"subclassfeature7" : {
			name : "Waste of Skill",
			source : ["UM5R", 115],
			minlevel : 7,
			description : "\n   " + "If I score a critical hit, I may choose to inflict normal damage (it no longer counts as a critical hit) and instead make a single ranged attack against any target in range as part of the same action. I cannot score a critical hit with this additional attack. Once I use this ability, I cannot use it again until the beginning of my next turn.",
		},
		"subclassfeature11" : {
			name : "The Second Shooter",
			source : ["UM5R", 115],
			minlevel : 11,
			description : "\n   " + "After making a ranged attack against a creature 50 feet away or farther, I can move up to half my speed and not be counted as having moved.",
		},
		"subclassfeature15" : {
			name : "Splintering Shrapnel",
			source : ["UM5R", 115],
			minlevel : 15,
			description : "\n   " + "If I drop a creature 25 feet away or farther to 0 HP, each creature within 5 feet of the target takes damage equal to my attack ability modifier.",
		},
		"subclassfeature18" : {
			name : "Perfect Shot Placement",
			source : ["UM5R", 115],
			minlevel : 18,
			description : "\n   " + "If I drop a creature 50 feet away or farther to 0 HP, I can make another single ranged attack with the same weapon as part of the same action. I can only use this feature once per turn.",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

var tempSubclassName = AddSubClass("civilian", "suave", {

	regExpSearch : /^(?=.*suave).*$/i,

	subname : "Suave",

	source : ["UM5R", 115],

	skills : ["Deception", "Insight", "Perception", "Persuasion"],

	features : {

		"subclassfeature3" : {
			name : "It's The Clothes",
			source : ["UM5R", 115],
			minlevel : 3,
			description : "\n   " + "If I'm wearing no armor, I double my proficiency bonus with Deception and Persuasion checks. I also gain a +1 bonus to attack rolls.",
		},
		"subclassfeature7" : {
			name : "Shaken, Not Stirred",
			source : ["UM5R", 115],
			minlevel : 7,
			description : "\n   " + "While wearing no armor, I have advantage on all saving throws.",
		},
		"subclassfeature11" : {
			name : "Spilled Drink",
			source : ["UM5R", 115],
			minlevel : 11,
			description : "\n   " + "If I fail any skill or tool check, I have advantage on attack rolls until the end of my next turn.",
		},
		"subclassfeature15" : {
			name : "Surreptitious Walk",
			source : ["UM5R", 115],
			minlevel : 15,
			description : "\n   " + "I select one creature I can see; I can spend my action to have advantage on my next Wisdom or Charisma skill check against the target. I can use this ability twice before being required finish a long rest to regain both uses. If my skill check fails, this ability is not expended.",
			usages : 2,
			recovery : "long rest",
		},
		"subclassfeature18" : {
			name : "Mesmer Stare",
			source : ["UM5R", 115],
			minlevel : 18,
			description : "\n   " + "I can triple my proficiency bonus to my next Charisma skill check. Once I use this ability, I cannot use it again until I finish a long rest. If my skill check fails, this ability is not expended.",
			usages : 1,
			recovery : "long rest",
		},
	}
});

ClassList["face"].subclasses[1].push(tempSubclassName);
ClassList["grounder"].subclasses[1].push(tempSubclassName);
ClassList["heavy"].subclasses[1].push(tempSubclassName);
ClassList["infiltrator"].subclasses[1].push(tempSubclassName);
ClassList["marshal"].subclasses[1].push(tempSubclassName);
ClassList["martial artist"].subclasses[1].push(tempSubclassName);
ClassList["medic"].subclasses[1].push(tempSubclassName);
ClassList["sniper"].subclasses[1].push(tempSubclassName);
ClassList["techie"].subclasses[1].push(tempSubclassName);

WeaponsList["air dart pistol"] = {

	regExpSearch : /^(?=.*air)(?=.*dart)(?=.*pistol).*$/i,

	name : "Air Dart Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "piercing"],

	range : "20/100 ft",

	description : "Ammunition, light, loading (special), undermount",

	tooltip : "Special: This weapon employs injections through needles instead of dealing damage.\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 4,

	ammo : "needle",
};

WeaponsList["assembly assault anachronism"] = {

	regExpSearch : /^(?=.*assembly)(?=.*assault)(?=.*anachronism).*$/i,

	name : "Assembly Assault Anachronism",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, light, magnetic, reload (30 shots/special)",

	tooltip : "Special: Reloading this weapon takes a free action instead of an action, although I can load 10 more rounds into the weapon by using an action.\n\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\n   Vector Force (6th level): If I roll a natural 20 with a magnetic weapon, I add one additional damage die (after doubling the basic dice).\n   Power: Magnetic weapons have a magazine but require power from a power cell to operate the magnetic acceleration (H for heavy and super-heavy weapons, M for all others). One is included with the weapon.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell; These same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["break-action shot pistol"] = {

	regExpSearch : /^(?=.*break-action)(?=.*shot)(?=.*pistol).*$/i,

	name : "Break-Action Shot Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "25/50 ft",

	description : "Ammunition, breech (2 shots), shotgun, undermount",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["capacitor plasma pistol"] = {

	regExpSearch : /^(?=.*capacitor)(?=.*plasma)(?=.*pistol).*$/i,

	name : "Capacitor Plasma Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "200/800 ft",

	description : "Ammunition, auto (1d8), light, plasma, reload (30-M)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["capsicum spray"] = {

	regExpSearch : /^(?=.*capsicum)(?=.*spray).*$/i,

	name : "Capsicum Spray",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "10/40 ft",

	description : "Ammunition, breech (special)",

	tooltip : "If struck, the target must make a DC 15 Constitution saving throw or be poisoned for 2d4 rounds. If I roll a natural 20, the target fails this save. Larger creatures gain a bonus to the save as follows (+2 Large, +4 Huge; larger than Huge creatures are immune). Capsicum spray is a single-use item and cannot be reloaded.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,
};

WeaponsList["caseless pistol"] = {

	regExpSearch : /^(?=.*caseless)(?=.*pistol).*$/i,

	name : "Caseless Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "50/250 ft",

	description : "Ammunition, light, reload (16 shots)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["charge pistol"] = {

	regExpSearch : /^(?=.*charge)(?=.*pistol).*$/i,

	name : "Charge Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "force"],

	range : "100/400 ft",

	description : "Ammunition, light, reload (special)",

	tooltip : "A charge pistol lacks a removable energy cell. Instead, it plugs into a standard power socket at the beginning of a long rest. By the end, the weapon has been fully charged.\n   Charge (1st Level): If wielding the charge pistol, you can spend a bonus action to charge the weapon, increasing its damage by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6). This can only be done once per turn and only while holding the weapon. This is cumulative with each successive round until the weapon is fired, in which case the damage reverts back to baseline. If I drop the pistol or holster it, the charge is lost.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,
};

WeaponsList["coil pistol"] = {

	regExpSearch : /^(?=.*coil)(?=.*pistol).*$/i,

	name : "Coil Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, light, magnetic, reload (10 shots)",

	tooltip : "Magnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 4,

	ammo : "bullet",
};

WeaponsList["demiurge, revelation"] = {

	regExpSearch : /^(?=.*demiurge)(?=.*revelation).*$/i,

	name : "Demiurge, Revelation",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "40/160 ft",

	description : "Ammunition, light, plasma, reload (60-M)",

	tooltip : "While it looks like a regular pistol, the demiurge can transform to imitate three different firearms. Each unit is biometrically locked to its intended user; if someone with non-matching DNA and fingerprints even holds it, not only does it not activate, but it will deliver 5 points of lightning damage at the beginning of each of the user's turns until released. When properly matched, the demiurge activates, revealing a holographic aiming assistant only visible to its wielder that reveals invisible targets and grants a +1 bonus to attack rolls. As an action, you can shift the demiurge's configuration, whihc physically alters the front half of the sidearm. All three configurations use the same M cell for power.\n   A target hit must make a DC 15 Constitution saving throw or increase its exhaustion level by +1 (to a maximum of level 4) for 1 minute. Unlike normal exhaustion, levels incurred by this weapon reduce by 1 every minute after suffering the last attack from it. Each shot uses 5 charges. If a target makes the save, every additional hit within 1 minute increases the DC by 2.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",

	modifiers : [1, ""],
};

WeaponsList["demiurge, prophecy"] = {

	regExpSearch : /^(?=.*demiurge)(?=.*prophecy).*$/i,

	name : "Demiurge, Prophecy",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "200/800 ft",

	description : "Ammunition, auto (1d8), light, plasma, reload (60-M)",

	tooltip : "While it looks like a regular pistol, the demiurge can transform to imitate three different firearms. Each unit is biometrically locked to its intended user; if someone with non-matching DNA and fingerprints even holds it, not only does it not activate, but it will deliver 5 points of lightning damage at the beginning of each of the user's turns until released. When properly matched, the demiurge activates, revealing a holographic aiming assistant only visible to its wielder that reveals invisible targets and grants a +1 bonus to attack rolls. As an action, you can shift the demiurge's configuration, whihc physically alters the front half of the sidearm. All three configurations use the same M cell for power.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",

	modifiers : [2, ""],
};

WeaponsList["demiurge, apocalypse"] = {

	regExpSearch : /^(?=.*demiurge)(?=.*apocalypse).*$/i,

	name : "Demiurge, Apocalypse",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "fire"],

	range : "100/400 ft",

	description : "Ammunition, direct (2d8), exp (5 ft), light, plasma, reload (60-M)",

	tooltip : "While it looks like a regular pistol, the demiurge can transform to imitate three different firearms. Each unit is biometrically locked to its intended user; if someone with non-matching DNA and fingerprints even holds it, not only does it not activate, but it will deliver 5 points of lightning damage at the beginning of each of the user's turns until released. When properly matched, the demiurge activates, revealing a holographic aiming assistant only visible to its wielder that reveals invisible targets and grants a +1 bonus to attack rolls. As an action, you can shift the demiurge's configuration, whihc physically alters the front half of the sidearm. All three configurations use the same M cell for power.\n   The demiurge creates an oversized barrel where a large plasma bolt discharges. Each shot uses 20 charges. I can spend an action to charge this mode: each action uses up 20 more charges, expands the blast radius by 5 feet and increases damage by one step (2d6 > 2d8 > 1d6 + 6 > 1d8 + 8 > 1d10 + 10).\n\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",

	modifiers : [1, ""],
};

WeaponsList["electroshock gun"] = {

	regExpSearch : /^(?=.*electroshock)(?=.*gun).*$/i,

	name : "Electroshock Gun",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "10 ft",

	description : "Ammunition, light, reload (2-M)",

	tooltip : "Upon impact, the target must make a DC 15 Constitution save or be paralyzed for 2d4 rounds. If I roll a natural 20, the target automatically fails this save. Larger creatures gain a bonus to the save as follows (+2 Large, +4 Huge; larger than Huge creatures are immune).\n   Firing Rate: Tension springs recoil the darts back to the gun as a free action. However, it cannot fire again for one minute as its capacitor needs to charge.\n   Range: Because of the length of coil, I cannot strike creatures further than 10 feet.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["esp pistol"] = {

	regExpSearch : /^(?=.*esp)(?=.*pistol).*$/i,

	name : "ESP Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "50/250 ft",

	description : "Ammunition, ESP (auto 1d8, auto-heavy 2d6), light, reload (40 shots)",

	tooltip : "Electronic Stacked Projectiles (ESP): ESP weapons have both the auto and auto-heavy property. I can only have one in effect at a time and can switch between them as a free action.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["grappling hook"] = {

	regExpSearch : /^(?=.*grappling)(?=.*hook).*$/i,

	name : "Grappling Hook",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "Special"],

	range : "25/100 ft",

	description : "Loading, undermount",

	tooltip : "What a grappling hook can affect depends on its size. One-handed smaller arms affect Medium and smaller targets; two-handed small arms affect Large and smaller targets; heavy weapons can affect Huge and smaller targets; super heavy weapons can affect Gargantuan. A target larger than a weapon's capacity has advantage to resist its effects, while a target one category below a weapon's maximum capacity has disadvantage. Targeting a creature two size categories larger than a weapon's capacity (or more) will result in a cable snapping the moment it is pulled. Agrappling hook may affect me instead of the target I'm grappling, meaning I pull myself to the target rather than it being pulled. For example, a two-handed small arm can target affect a single Huge target, but that target has advantage to resist the weapon's effect. Targeting a single medium target, it has disadvantage to resist the weapon.\n   Attack Type: I can alter the grapple being used (attack decision) to affect how it attack targets.\n     Piercing: If I hit, the target is grappled and impaled. If the target escapes, it is assumed to have cut the cable to torn out the grapple; these will need to be repaired before it can be used again.\n     Bludgeoning: If I hit, and the target matches the size of the weapon, the target is knocked prone, and you do not grapple the target (that attack can still grapple something else, like a wall or a ledge).\n   Grapple: Whether it be a wall, a ledge, or a creature, I can attempt to grapple it with an action. A wall requires either a DC 10 Athletics check or a DC 10 Acrobatics check. Attacking a creature requires a grapple check employing standard grapple rules. You can use your ability or the hook's; it adds my proficiency bonus to grapple checks. Its Strength is based on its type (one-handed, 16; two-handed, 18; heavy, 20; super heavy, 22).\n   Pull: As a bonus action, I can cause the grappling hook to retract at a speed of 50 feet. A mobile grappled target is pulled toward me if it is smaller than my size; I'm pulled toward it if it is larger; if we are of equal sizes, I decide. An unwilling target may resist movement according to the standard grapple rules.\n   Length: The length of cable depends on the type of weapon (one-handed, 100 ft.; two-handed, 300 ft.; heavy, 600 ft.; super heavy, 1,200).\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,
};

WeaponsList["high-calibre autoloader"] = {

	regExpSearch : /^(?=.*high-calibre)(?=.*autoloader).*$/i,

	name : "High-Calibre Autoloader",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "50/200 ft",

	description : "Ammunition, reload (8 shots)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["light machine gun"] = {

	regExpSearch : /^(?=.*light)(?=.*machine)(?=.*gun).*$/i,

	name : "Light Machine Gun",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "piercing"],

	range : "50/250 ft",

	description : "Ammunition, auto, light, reload (40 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 4,

	ammo : "bullet",
};

WeaponsList["low-calibre autoloader"] = {

	regExpSearch : /^(?=.*low-calibre)(?=.*autoloader).*$/i,

	name : "Low-Calibre Autoloader",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "piercing"],

	range : "40/160 ft",

	description : "Ammunition, light, reload (16 shots)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["machine pistol"] = {

	regExpSearch : /^(?=.*machine)(?=.*pistol).*$/i,

	name : "Machine Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "piercing"],

	range : "50/200 ft",

	description : "Ammunition, auto (1d6), reload (20 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["necrotizer, bio"] = {

	regExpSearch : /^(?=.*necrotizer)(?=.*bio).*$/i,

	name : "Necrotizer, Bio",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "necrotic"],

	range : "20/60 ft",

	description : "Ammunition, light, organic (10 shots)",

	tooltip : "Instead of firing bolts or spewing acid, the necrotizer sends out a paper-thin tendril that connects the target to the weapon. The target can spend an action to sever the connection easily, but upon impact, and as a bonus action on my next and every following turn until severed, I recover 1d4 points of HP. If a tendril is still connected, I can use an action to inflict damage as if I hit without making an attack roll. There is no limit on the number of tendrils I can have active at a time.\n\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["nuclear pellet pistol"] = {

	regExpSearch : /^(?=.*nuclear)(?=.*pellet)(?=.*pistol).*$/i,

	name : "Nuclear Pellet Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "radiant"],

	range : "80/320 ft",

	description : "Ammunition, light, nuclear, reload (15-M)",

	tooltip : "Nuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["one-handed grenade launcher"] = {

	regExpSearch : /^(?=.*one-handed)(?=.*grenade)(?=.*launcher).*$/i,

	name : "One-Handed Grenade Launcher",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/200 ft",

	description : "Ammunition, grenade, loading, undermount",

	tooltip : "Grenade: Grenades use their own form of attack depending on the specific grenade.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 8,
};

WeaponsList["plasma pistol"] = {

	regExpSearch : /^(?=.*plasma)(?=.*pistol).*$/i,

	name : "Plasma Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "200/800 ft",

	description : "Ammunition, light, plasma, reload (15-M)",

	tooltip : "Plasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["pico-positron"] = {

	regExpSearch : /^(?=.*pico-positron).*$/i,

	name : "Pico-Positron",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 10, "Special"],

	range : "100/400 ft",

	description : "Ammunition, direct (2d10 + 10), exp (10 ft), light, plasma, reload (special)",

	tooltip : "It cannot be reloaded and recharges its 3-shot capacity at a rate of once every five minutes. The weapon must be primed (as a separate action) before it can be fired.\n\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 0,
};

WeaponsList["pocket pistol"] = {

	regExpSearch : /^(?=.*pocket)(?=.*pistol).*$/i,

	name : "Pocket Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "piercing"],

	range : "40/160 ft",

	description : "Ammunition, light, reload (3 shots)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 1,

	ammo : "bullet",
};

WeaponsList["revolver"] = {

	regExpSearch : /^(?=.*revolver).*$/i,

	name : "Revolver",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 4, "piercing"],

	range : "50/250 ft",

	description : "Ammunition, breech (6 shots), light",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["rail pistol"] = {

	regExpSearch : /^(?=.*rail)(?=.*pistol).*$/i,

	name : "Rail Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, light, magnetic, reload (10 shots)",

	tooltip : "Magnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 4,

	ammo : "bullet",
};

WeaponsList["restrainment field"] = {

	regExpSearch : /^(?=.*restrainment)(?=.*field).*$/i,

	name : "Restrainment Field",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/200 ft",

	description : "Ammunition, light, reload (4-H)",

	tooltip : "If this weapon strikes a target, it is restrained. The victim needs to pass a DC 15 Dexterity save or Acrobatics check to escape. Only Large targets or smaller can be targeted. A target can be hit additional times, each one increasing the save DC by +2 (maximum DC 25). If I roll a natural 20, the target automatically fails its first save.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 5,

	ammo : "bullet",
};

WeaponsList["smart pistol"] = {

	regExpSearch : /^(?=.*smart)(?=.*pistol).*$/i,

	name : "Smart Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "50/250 ft",

	description : "Ammunition, light, reload (10 shots), SPP",

	tooltip : "Lock-On (3rd Level): As an action, I can lock onto a target within normal range; this lock is lost if I lose line of sight, the target moves out of range or moves within 5 feet of me. As a bonus action, I can launch the projectile. This is considered an Attack action but hits automatically (do not roll). I must then reacquire a new lock.\nMulti-Lock (5th Level): After I lock on a target, I can spend additional actions to lock additional attacks. My second action locks 2 additional rounds (3 total); my third also locks 2 additional rounds (5 total). All locks must have the same target. Launching all locked projectiles still requires only one bonus action.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSelf-Propelled Projectiles (SPP): All SPP weapons can fire underwater, though their range is halved. They are not common but have definitive advantages, such as explosive warheads and guidance systems.\n   Seeking (6th Level): My SPP weapon gains the guided property.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["solid laser pistol"] = {

	regExpSearch : /^(?=.*solid)(?=.*laser)(?=.*pistol).*$/i,

	name : "Solid Laser Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "force"],

	range : "200/800 ft",

	description : "Ammunition, laser, light, reload (20-M)",

	tooltip : "Laser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["spp pistol"] = {

	regExpSearch : /^(?=.*spp)(?=.*pistol).*$/i,

	name : "SPP Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "80/320 ft",

	description : "Ammunition, light, reload (10 shots), SPP",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSelf-Propelled Projectiles (SPP): All SPP weapons can fire underwater, though their range is halved. They are not common but have definitive advantages, such as explosive warheads and guidance systems.\n   Seeking (6th Level): My SPP weapon gains the guided property.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["thumper laser pistol"] = {

	regExpSearch : /^(?=.*thumper)(?=.*laser)(?=.*pistol).*$/i,

	name : "Thumper Laser Pistol",

	source : ["UM5R", 119],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "force"],

	range : "80/320 ft",

	description : "Ammunition, auto (1d8), laser, light, reload (30-M)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nOne-handed small arms use the same general rules as ranged weapons, except as follows:\n   I do not have disadvantage on attack rolls if I'm within 5 feet of a hostile creature who can see me and who isn't incapacitated.\n   One-handed small arms cannot be wielded by Large or larger creatures (e.g., exo-armor).\n   I do not suffer disadvantage on ranged attack rolls if I'm prone and proficient with the weapon I'm using.\n   If my Strength is 13 or higher, one-handed small arms without the Light property gain the property.",

	weight : 3,

	ammo : "bullet",
};

WeaponsList["accelerator rifle"] = {

	regExpSearch : /^(?=.*accelerator)(?=.*rifle).*$/i,

	name : "Accelerator Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto (special), reload (100 shots)",

	tooltip : "After making an attack with the accelerator rifle, if I attack again on my next turn, and continue to do so, each subsequent attack increases the damage of an autofire attack at the cost of ammunition. This increase reverts back to baseline if I fail to make an attack on my next turn. By my second attack, the accelerator can count as an auto-heavy weapon. Because of recoil, there is also a minimum level before higher tiers are unlocked. First Attack, auto 1d8 (5 rounds); second attack, auto 1d10 (10 rounds, 4th level); third attack, auto 2d6 (15 rounds, 6th level); fourth attack, auto 2d8 (20 rounds, 8th level).\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 10,

	ammo : "bullet",
};

WeaponsList["assault rifle"] = {

	regExpSearch : /^(?=.*assault)(?=.*rifle).*$/i,

	name : "Assault Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto (1d10), reload (50 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 7,

	ammo : "bullet",
};

WeaponsList["basic sniper rifle"] = {

	regExpSearch : /^(?=.*basic)(?=.*sniper)(?=.*rifle).*$/i,

	name : "Basic Sniper Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, breech (5 shots), sniper (+1)",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 8,

	ammo : "bullet",
};

WeaponsList["bolt rifle"] = {

	regExpSearch : /^(?=.*bolt)(?=.*rifle).*$/i,

	name : "Bolt Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, breech (5 shots)",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 8,

	ammo : "bullet",
};

WeaponsList["caseless rifle"] = {

	regExpSearch : /^(?=.*caseless)(?=.*rifle).*$/i,

	name : "Caseless Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto (1d10), reload (100 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 10,

	ammo : "bullet",
};

WeaponsList["cyclotron rifle"] = {

	regExpSearch : /^(?=.*cyclotron)(?=.*rifle).*$/i,

	name : "Cyclotron Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "radiant"],

	range : "100/400 ft",

	description : "Ammunition, nuclear, reload (20-M)",

	tooltip : "Nuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["displacement device"] = {

	regExpSearch : /^(?=.*displacement)(?=.*device).*$/i,

	name : "Displacement Device",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "50/100 ft",

	description : "Ammunition, plasma, reload (8-M)",

	tooltip : "As an action, instead of attacking, I can fire a shot to any mostly flat surface within normal range. Firing a second shot to another surface automatically creates the gateway. Once placed, these gateways cannot be moved. Any creature or object up to Medium size that enters one of the gateways emerges from the other as if there were no intervening space. Only one gateway can be open at a time; firing a third shot automatically closes the existing one. A gateway can also be closed manually as a free action. If a gateway closes while something is passing through it, the subject will be randomly displaced to one side or the other. Any inertia is sustained when passing through a gateway. If the target fell into a gateway on the floor and emerges from a wall gateway, they land 5 ft. beyond it and take any falling damage upon arrival as the abrupt change in gravity makes it impossible to land safely. A target falling or forced toward a gateway may make a DC 15 Dexterity saving throw to avoid it.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["disruptor"] = {

	regExpSearch : /^(?=.*disruptor).*$/i,

	name : "Disruptor",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "thunder"],

	range : "50/200 ft",

	description : "Ammunition, reload (20-H), sonic",

	tooltip : "Undead creatures are vulnerable to hits from this weapon.\n\nSonic: Sonic weapons inflict thunder and bludgeoning damage.\n   Thunder (6th level): This weapon gains the Armor Piercing property.\n   Rumble (8th level): If I roll a natural 20, the target is deafened for one minute.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 10,

	ammo : "bullet",
};

WeaponsList["endothermic rifle"] = {

	regExpSearch : /^(?=.*endothermic)(?=.*rifle).*$/i,

	name : "Endothermic Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "cold"],

	range : "50/200 ft",

	description : "Ammunition, reload (20-M)",

	tooltip : "If I hit, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if I miss.\n   Shatter (1st Level): If I reduce a Large target or smaller to 0 HP with this weapon, it freezes solid; the next attack on it causes it to shatter into pieces.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Refrigerate (8th Level): If I hit a target, its speed is reduced by 5 feet until the beginning of my next turn. This is cumulative up to 10 feet. If I roll a natural 20, the target is restrained until the end of my next turn.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["esp rifle"] = {

	regExpSearch : /^(?=.*esp)(?=.*rifle).*$/i,

	name : "ESP Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "80/320 ft",

	description : "Ammunition, ESP (auto 1d10, auto-heavy 2d8), reload (80 shots)",

	tooltip : "Electronic Stacked Projectiles (ESP): ESP weapons have both the auto and auto-heavy property. I can only have one in effect at a time and can switch between them as a free action.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 10,

	ammo : "bullet",
};

WeaponsList["field manipulator"] = {

	regExpSearch : /^(?=.*field)(?=.*manipulator).*$/i,

	name : "Field Manipulator",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/100 ft",

	description : "Ammunition, reload (special)",

	tooltip : "If I strike a target within normal range, I'm counted as having a Strength score of 25 for the purposes of lifting, grappling, shoving, or throwing that target. If grappling, I can move the target (at a speed of 30 ft.) as long as the manipulator can carry it. I'm counted as having proficiency with Athletics. The manipulator can break open doors and potentially throw explosives further than a normal person can. Past normal range, all the same abilities apply, but the available Strength score is reduced to 16. The field manipulator lacks a removable energy cell; instead, it plugs into a standard power socket at the beginning of a long rest. By the end, the weapon has been fully charged.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 20,
};

WeaponsList["gauss repeater"] = {

	regExpSearch : /^(?=.*gauss)(?=.*repeater).*$/i,

	name : "Gauss Repeater",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, auto (1d10), magnetic, reload (60 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 16,

	ammo : "bullet",
};

WeaponsList["gravity gun"] = {

	regExpSearch : /^(?=.*gravity)(?=.*gun).*$/i,

	name : "Gravity Gun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "force"],

	range : "100/400 ft",

	description : "Ammunition, laser, reload (20-M)",

	tooltip : "As a bonus action, I can lock onto target; this does not improve my chance hit, but it does allow my attack to circumvent one object that blocks line of sight. If I can trace a line to the target, making only one turn without crossing cover, the target does not benefit from that cover. At 10th level, you can bend the laser twice.\n\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users..",

	weight : 18,

	ammo : "bullet",
};

WeaponsList["grappling hook, two-handed"] = {

	regExpSearch : /^(?=.*grappling)(?=.*hook)(?=.*two-handed).*$/i,

	name : "Grappling Hook, Two-Handed",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "Special"],

	range : "75/300 ft",

	description : "Loading, undermount",

	tooltip : "What a grappling hook can affect depends on its size. One-handed smaller arms affect Medium and smaller targets; two-handed small arms affect Large and smaller targets; heavy weapons can affect Huge and smaller targets; super heavy weapons can affect Gargantuan. A target larger than a weapon's capacity has advantage to resist its effects, while a target one category below a weapon's maximum capacity has disadvantage. Targeting a creature two size categories larger than a weapon's capacity (or more) will result in a cable snapping the moment it is pulled. Agrappling hook may affect me instead of the target I'm grappling, meaning I pull myself to the target rather than it being pulled. For example, a two-handed small arm can target affect a single Huge target, but that target has advantage to resist the weapon's effect. Targeting a single medium target, it has disadvantage to resist the weapon.\n   Attack Type: I can alter the grapple being used (attack decision) to affect how it attack targets.\n     Piercing: If I hit, the target is grappled and impaled. If the target escapes, it is assumed to have cut the cable to torn out the grapple; these will need to be repaired before it can be used again.\n     Bludgeoning: If I hit, and the target matches the size of the weapon, the target is knocked prone, and you do not grapple the target (that attack can still grapple something else, like a wall or a ledge).\n   Grapple: Whether it be a wall, a ledge, or a creature, I can attempt to grapple it with an action. A wall requires either a DC 10 Athletics check or a DC 10 Acrobatics check. Attacking a creature requires a grapple check employing standard grapple rules. You can use your ability or the hook's; it adds my proficiency bonus to grapple checks. Its Strength is based on its type (one-handed, 16; two-handed, 18; heavy, 20; super heavy, 22).\n   Pull: As a bonus action, I can cause the grappling hook to retract at a speed of 50 feet. A mobile grappled target is pulled toward me if it is smaller than my size; I'm pulled toward it if it is larger; if we are of equal sizes, I decide. An unwilling target may resist movement according to the standard grapple rules.\n   Length: The length of cable depends on the type of weapon (one-handed, 100 ft.; two-handed, 300 ft.; heavy, 600 ft.; super heavy, 1,200).\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 20,
};

WeaponsList["grenade light weapon"] = {

	regExpSearch : /^(?=.*grenade)(?=.*light)(?=.*weapon).*$/i,

	name : "Grenade Light Weapon",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/200 ft",

	description : "Ammunition, breech (6 shots), grenade, undermount",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nGrenade: Grenades use their own form of attack depending on the specific grenade.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 10,
};

WeaponsList["grub gun, bio"] = {

	regExpSearch : /^(?=.*grub)(?=.*gun)(?=.*bio).*$/i,

	name : "Grub Gun, Bio",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, oraganic (16 shots)",

	tooltip : "When I roll a natural 20 on an organic target, it must make a DC 15 Constitution saving throw or suffer 2d6 additional acid damage. If a target is killed, the maggots will reduce the target to slime in one minute.\n\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	modifiers : ["", 2],
};

WeaponsList["ion rifle"] = {

	regExpSearch : /^(?=.*ion)(?=.*rifle).*$/i,

	name : "Ion Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "lightning"],

	range : "50/200 ft",

	description : "Ammunition, pincher, reload (20-M)",

	tooltip : "Pincher: Pincher weapons inflict lightning damage.\n   Disruption (6th Level): Once I hit a target, all functions of battery-powered technology on the target stops working until the end of my next turn.\n   High-Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Jolt to the System (8th level): If I roll a natural 20 on the attack roll and the target is not immune or resistant to lightning damage, the target has disadvantage on ability checks and attack rolls until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 16,

	ammo : "bullet",
};

WeaponsList["kinetic flash rifle"] = {

	regExpSearch : /^(?=.*kinetic)(?=.*flash)(?=.*rifle).*$/i,

	name : "Kinetic Flash Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, auto (1d10), magnetic, reload (50 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 20,

	ammo : "bullet",
};

WeaponsList["light coilgun"] = {

	regExpSearch : /^(?=.*light)(?=.*coilgun).*$/i,

	name : "Light Coilgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, magnetic, reload (16 shots)",

	tooltip : "Magnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["machine shotgun"] = {

	regExpSearch : /^(?=.*machine)(?=.*shotgun).*$/i,

	name : "Machine Shotgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "30/120 ft",

	description : "Ammunition, auto (1d12), reload (20 shots), shotgun",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["mind phazer, bio"] = {

	regExpSearch : /^(?=.*mind)(?=.*phazer)(?=.*bio).*$/i,

	name : "Mind Phazer, Bio",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "psychic"],

	range : "100/400 ft",

	description : "Ammunition, AP, organic (20-M)",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 20,

	ammo : "bullet",
};

WeaponsList["nailgun"] = {

	regExpSearch : /^(?=.*nailgun).*$/i,

	name : "Nailgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, auto (1d8), magnetic, reload (30 shots)",

	tooltip : "Pinned (3rd Level): If I roll a natural 20 or reduce a target to 0 HP) and there is a solid surface within 10 feet behind it, the target is pushed to the surface and restrained until the end of my next turn.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "needle",
};

WeaponsList["nuclear pulse rifle"] = {

	regExpSearch : /^(?=.*nuclear)(?=.*pulse)(?=.*rifle).*$/i,

	name : "Nuclear Pulse Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "radiant"],

	range : "100/400 ft",

	description : "Ammunition, auto (1d10), nuclear, reload (80-H)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 20,

	ammo : "bullet",
};

WeaponsList["plasma rifle"] = {

	regExpSearch : /^(?=.*plasma)(?=.*rifle).*$/i,

	name : "Plasma Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "fire"],

	range : "150/600 ft",

	description : "Ammunition, plasma, reload (20-M)",

	tooltip : "Plasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 17,

	ammo : "bullet",
};

WeaponsList["railgun"] = {

	regExpSearch : /^(?=.*railgun).*$/i,

	name : "Railgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, magnetic, reload (16 shots)",

	tooltip : "Magnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["shotgun"] = {

	regExpSearch : /^(?=.*shotgun).*$/i,

	name : "Shotgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "30/120 ft",

	description : "Ammunition, breech (6 shots), shotgun, undermount",

	tooltip : "Breech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 10,

	ammo : "bullet",
};

WeaponsList["submachine gun"] = {

	regExpSearch : /^(?=.*submachine)(?=.*gun).*$/i,

	name : "Submachine Gun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "80/320 ft",

	description : "Ammunition, auto (1d8), reload (80 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 6,

	ammo : "bullet",
};

WeaponsList["semi-automatic rifle"] = {

	regExpSearch : /^(?=.*semi-automatic)(?=.*rifle).*$/i,

	name : "Semi-Automatic Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, reload (30 shots)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 7,

	ammo : "bullet",
};

WeaponsList["energy modulator, plasma repeater"] = {

	regExpSearch : /^(?=.*energy)(?=.*modulator)(?=.*plasma)(?=.*repeater).*$/i,

	name : "Energy Modulator, Plasma Repeater",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "150/600 ft",

	description : "Ammunition, auto (1d8), plasma, reload (80-H, special)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["energy modulator, shock blaster"] = {

	regExpSearch : /^(?=.*energy)(?=.*modulator)(?=.*shock)(?=.*blaster).*$/i,

	name : "Energy Modulator, Shock Blaster",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "fire"],

	range : "30/90 ft",

	description : "Ammunition, plasma, reload (80-H, special), shotgun",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 5 pieces of ammunition.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["energy modulator, electro mortar"] = {

	regExpSearch : /^(?=.*energy)(?=.*modulator)(?=.*electro)(?=.*mortar).*$/i,

	name : "Energy Modulator, Electro Mortar",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "radiant"],

	range : "50/200 ft",

	description : "Ammunition, direct (2d6 + 6), exp (5 ft.), plasma, reload (80-H, special)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 20 pieces of ammunition. I can only make one attack with this weapon per action.\n\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",

	modifiers : ["", 6],
};

WeaponsList["energy modulator, electro-volt"] = {

	regExpSearch : /^(?=.*energy)(?=.*modulator)(?=.*electro-volt).*$/i,

	name : "Energy Modulator, Electro-Volt",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "fire"],

	range : "200/800 ft",

	description : "Ammunition, plasma, reload (80-H, special), sniper (+1)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 5 pieces of ammunition.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["nano-modulator, assault rifle"] = {

	regExpSearch : /^(?=.*nano-modulator)(?=.*assault)(?=.*rifle).*$/i,

	name : "Nano-Modulator, Assault Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto (1d10), magnetic, reload (100 shots)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["nano-modulator, combat shotgun"] = {

	regExpSearch : /^(?=.*nano-modulator)(?=.*combat)(?=.*shotgun).*$/i,

	name : "Nano-Modulator, Combat Shotgun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "30/90 ft",

	description : "Ammunition, magnetic, reload (100 shots), shotgun",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 5 pieces of ammunition.\n\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["nano-modulator, solid slug"] = {

	regExpSearch : /^(?=.*nano-modulator)(?=.*solid)(?=.*slug).*$/i,

	name : "Nano-Modulator, Solid Slug",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "50/200 ft",

	description : "Ammunition, magnetic, reload (100 shots)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 15 pieces of ammunition.\n\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",

	modifiers : ["", 8],
};

WeaponsList["nano-modulator, sniper cannon"] = {

	regExpSearch : /^(?=.*nano-modulator)(?=.*sniper)(?=.*cannon).*$/i,

	name : "Nano-Modulator, Sniper Cannon",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, magnetic, reload (100 shots), sniper (+2)",

	tooltip : "An action is required to switch modes; once set, it remains that way until given a new configuration.\n   Advanced Switching (6th Level): The speed to switch configuration improves to a bonus action. Each shot uses 5 pieces of ammunition.\n\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 25,

	ammo : "bullet",
};

WeaponsList["sniper cannon"] = {

	regExpSearch : /^(?=.*sniper)(?=.*cannon).*$/i,

	name : "Sniper Cannon",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, reload (6 shots), sniper (+1)",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["solid laser rifle"] = {

	regExpSearch : /^(?=.*solid)(?=.*laser)(?=.*rifle).*$/i,

	name : "Solid Laser Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "force"],

	range : "150/600 ft",

	description : "Ammunition, laser, reload (20-M)",

	tooltip : "Laser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["sonic focus rifle"] = {

	regExpSearch : /^(?=.*sonic)(?=.*focus)(?=.*rifle).*$/i,

	name : "Sonic Focus Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "thunder"],

	range : "50/200 ft",

	description : "Ammunition, reload (20-M), sonic",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSonic: Sonic weapons inflict thunder and bludgeoning damage.\n   Thunder (6th level): This weapon gains the Armor Piercing property.\n   Rumble (8th level): If I roll a natural 20, the target is deafened for one minute.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 17,

	ammo : "bullet",
};

WeaponsList["sonic stunner"] = {

	regExpSearch : /^(?=.*sonic)(?=.*stunner).*$/i,

	name : "Sonic Stunner",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/200 ft",

	description : "Ammunition, reload (5-M)",

	tooltip : "A target hit by a sonic stunner must make a DC 20 Constitution saving throw or increase its exhaustion level by +1 (to a maximum of level 5) for 1 minute. Unlike normal exhaustion, levels incurred by this weapon reduce by 1 every minute after suffering the last attack from it. If I roll a natural 20, the target automatically fails the save.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 5,

	ammo : "bullet",
};

WeaponsList["spp rifle"] = {

	regExpSearch : /^(?=.*spp)(?=.*rifle).*$/i,

	name : "SPP Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "150/600 ft",

	description : "Ammunition, reload (20 shots), SPP",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSelf-Propelled Projectiles (SPP): All SPP weapons can fire underwater, though their range is halved. They are not common but have definitive advantages, such as explosive warheads and guidance systems.\n   Seeking (6th Level): My SPP weapon gains the guided property.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 14,

	ammo : "bullet",
};

WeaponsList["spp sensor gun"] = {

	regExpSearch : /^(?=.*spp)(?=.*sensor)(?=.*gun).*$/i,

	name : "SPP Sensor Gun",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, reload (10 shots), sniper (+2), SPP",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\nSelf-Propelled Projectiles (SPP): All SPP weapons can fire underwater, though their range is halved. They are not common but have definitive advantages, such as explosive warheads and guidance systems.\n   Seeking (6th Level): My SPP weapon gains the guided property.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 16,

	ammo : "bullet",
};

WeaponsList["spp vortex"] = {

	regExpSearch : /^(?=.*spp)(?=.*vortex).*$/i,

	name : "SPP Vortex",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto (1d10), guided, reload (70 shots)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nGuided: As many times a day as my attack attribute bonus, I can either have advantage on the attack roll or miss the the initial attack and make a second attack as a free action at the beginning of my next turn using that same round of ammunition (or rocket).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 14,

	ammo : "bullet",
};

WeaponsList["thumper laser rifle"] = {

	regExpSearch : /^(?=.*thumper)(?=.*laser)(?=.*rifle).*$/i,

	name : "Thumper Laser Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "force"],

	range : "150/600 ft",

	description : "Ammunition, auto (1d10), laser, reload (60-H)",

	tooltip : "Auto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 17,

	ammo : "bullet",
};

WeaponsList["ultimate sniper rifle"] = {

	regExpSearch : /^(?=.*ultimate)(?=.*sniper)(?=.*rifle).*$/i,

	name : "Ultimate Sniper Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "250/1000 ft",

	description : "Ammunition, magnetic, reload (10 shots), sniper (+2)",

	tooltip : "Magnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 18,

	ammo : "bullet",
};

WeaponsList["vapor rifle"] = {

	regExpSearch : /^(?=.*vapor)(?=.*rifle).*$/i,

	name : "Vapor Rifle",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "fire"],

	range : "100/400 ft",

	description : "Ammunition, plasma, reload (20-H)",

	tooltip : "When I hit with an attack with this weapon, I re-roll my damage dice and select the higher value.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 12,

	ammo : "bullet",
};

WeaponsList["x-beam"] = {

	regExpSearch : /^(?=.*x-beam).*$/i,

	name : "X-Beam",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "lightning"],

	range : "100/400 ft",

	description : "Ammunition, reload (20-M)",

	tooltip : "If I reduce a creature to 0 HP, it explodes, inflicting the damage I inflicted in killing the creature to each target within 10 feet of the creature. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon). Making the save still inflicts half damage. Any Medium-sized target or smaller that failed the save is also knocked prone.\n   High Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Channel (8th Level): If I hit a target, every subsequent hit made on the same target increases my critical threat range by one. For the first hit, I require natural 20; on my second attack, I only require a 19 or 20; on my third, I only require an 18, 19, or 20. This continues until I score a critical hit or make an attack against another target with this weapon; at that point, it reverts back to requiring a natural 20.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["xeno-strangler, bio"] = {

	regExpSearch : /^(?=.*xeno-strangler)(?=.*bio).*$/i,

	name : "Xeno-Strangler, Bio",

	source : ["UM5R", 120],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "acid"],

	range : "100/400 ft",

	description : "Ammunition, guided, organic (20 shots)",

	tooltip : "Upon impact, the creature affixes itself and delivers 1d6 poison damage at the beginning of the creatures turn until a successful DC 15 Strength check removes it.\n\nGuided: As many times a day as my attack attribute bonus, I can either have advantage on the attack roll or miss the the initial attack and make a second attack as a free action at the beginning of my next turn using that same round of ammunition (or rocket).\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.\n\nTwo-handed small arms use the same general rules as ranged weapons, except as follows:\n   Because of their cumbersome nature, if I move or are moved more than 5 feet, I suffer a –2 penalty to attack rolls with two-handed small arms until the beginning of my next turn.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a two-handed small arms counts as a one-handed small arm. It can no longer be used by Medium-sized users.",

	weight : 15,

	ammo : "bullet",
};

WeaponsList["arc rifle"] = {

	regExpSearch : /^(?=.*arc)(?=.*rifle).*$/i,

	name : "Arc Rifle",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 12, "lightning"],

	range : "200/800 ft",

	description : "Ammunition, heavy, pincher, reload (20-H)",

	tooltip : "Jumping (7th Level): When I hit a target with the arc rifle, I make an additional attack against the nearest creature in range; the damage is reduced by one step plus one additional step for every 10 feet (1d12 > 1d10 > 1d8 > 1d6 > 1d4 > 0). I repeat this until the damage reaches zero (for example, after striking, if two additional targets are 5 feet and 20 feet away, the damage is 1d10 for the second target, 1d4 for the third).\n\nPincher: Pincher weapons inflict lightning damage.\n   Disruption (6th Level): Once I hit a target, all functions of battery-powered technology on the target stops working until the end of my next turn.\n   High-Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Jolt to the System (8th level): If I roll a natural 20 on the attack roll and the target is not immune or resistant to lightning damage, the target has disadvantage on ability checks and attack rolls until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 30,

	ammo : "bullet",
};

WeaponsList["acid thrower, bio"] = {

	regExpSearch : /^(?=.*acid)(?=.*thrower)(?=.*bio).*$/i,

	name : "Acid Thrower, Bio",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "acid"],

	range : "Special",

	description : "Ammunition, heavy, organic (5 shots)",

	tooltip : "When I attack with the acid thrower, I target a 20-foot cone emanating from me. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon). Making the save still inflicts half damage. Any target that failed the save against an acid thrower suffers half the inflicted damage again at the beginning of my next turn.\n\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.",

	weight : 20,

	ammo : "bullet",
};

WeaponsList["atomizer"] = {

	regExpSearch : /^(?=.*atomizer).*$/i,

	name : "Atomizer",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 8, "radiant"],

	range : "300/1200 ft",

	description : "Ammunition, heavy, nuclear, reload (15-M), sniper (+2)",

	tooltip : "Vaporize (6th Level): If I reduce a target to 0 HP, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. This weapon automatically disintegrates a Large or smaller non-magical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this weapon disintegrates a 10- foot-cube portion of it.\nForce of Energy (8th Level): The atomizer doubles the damage of the nuclear property. The atomizer does not poison a target; instead, if I roll a natural 20, I triple the number of damage dice instead of doubling.\n\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.",

	weight : 40,

	ammo : "bullet",
};

WeaponsList["barrel blaster"] = {

	regExpSearch : /^(?=.*barrel)(?=.*blaster).*$/i,

	name : "Barrel Blaster",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "30/120 ft",

	description : "Ammunition, breech (6 shots), heavy, shotgun",

	tooltip : "Before firing this weapon, I decide how many barrels will be triggered. I make an attack roll, inflicting 1d10 for each barrel fired (max 6 barrels or how many barrels are left untriggered). If I fire 3 or more, I'm pushed 5 feet after the attack. If I fire 5 or more, I'm knocked prone after the attack.\n\nBreech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nShotgun: Shotguns impact with tremendous force at close range, but this stopping power diminishes rapidly further out. Shotguns do +3 damage if fired at targets within 10 feet. Beyond normal range, they inflict half damage.\n   Point-Blank (5th level): If I roll a natural 20, the target is knocked prone.",

	weight : 35,

	ammo : "bullet",
};

WeaponsList["blade launcher"] = {

	regExpSearch : /^(?=.*blade)(?=.*launcher).*$/i,

	name : "Blade Launcher",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "slashing"],

	range : "50/400 ft",

	description : "Ammunition, heavy, magnetic, reload (10 shots)",

	tooltip : "Suspension (3rd Level): As a bonus action, I can cause a launched blade to remain in the air as long as it remains within normal range. It can act as a melee weapon from its location, attacking with the same attack bonus as if I were making a melee attack. I can also launch it from its position, making an additional ranged attack from its location, though the range is still determined from you and not the disk. Once the disk has made a number of attacks equal to half my level or has moved beyond normal range, it breaks up and cannot be used. I can only control one disk at a time.\n\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 40,
};

WeaponsList["cannonballer"] = {

	regExpSearch : /^(?=.*cannonballer).*$/i,

	name : "Cannonballer",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "bludgeoning"],

	range : "50/200 ft",

	description : "Ammunition, AP, breech (6 shots), direct (2d6 + 6), exp (5 ft.), heavy",

	tooltip : "Bouncer (3rd Level): If I do not directly hit with this weapon, I can elect to have it land without detonation. When on the ground, it gains a movement of 30, and as a bonus action, I can direct it to move. Detonation only takes an action, but I can no longer inflict direct damage. I can only move a ball once per turn and I can only control one ball at a time. A ball has an AC of 18 and 1 HP, and if struck, it explodes at its location. A ball can be controlled for up to one minute before it runs out of power and turns itself off. It can still be detonated, but it cannot move.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nBreech: This property pertains to a weapon with neither a clip nor a magazine. It is either a weapon with a single-shot charge, or it is a firearm that can only be loaded one round at a time. With an action and/or a bonus action (the character's choice), one shot is reloaded in the weapon. Like magazine/clip-based weapons, there is a maximum number of shots I can load. If a character has additional actions in a turn, these can be used to load as well.\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).",

	weight : 50,

	ammo : "bullet",
};

WeaponsList["coil light gun"] = {

	regExpSearch : /^(?=.*coil)(?=.*light)(?=.*gun).*$/i,

	name : "Coil Light Gun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, AP, auto-heavy (2d8), heavy, magnetic, reload (40 shots)",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 65,

	ammo : "bullet",
};

WeaponsList["crankgun"] = {

	regExpSearch : /^(?=.*crankgun).*$/i,

	name : "Crankgun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto-heavy (special), feed (200 shots), heavy",

	tooltip : "The crankgun requires a Strength score of at least 13 to use. It has no single shot option. It always fires 10 shots per attack roll. It is also immune to any electromagnetic disruption.\n\nAuto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.",

	weight : 75,

	ammo : "bullet",
};

WeaponsList["esp maelstrom"] = {

	regExpSearch : /^(?=.*esp)(?=.*maelstrom).*$/i,

	name : "ESP Maelstrom",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "200/800 ft",

	description : "Ammunition, ESP (auto 1d10, auto-heavy 2d6), heavy, reload (400 shots)",

	tooltip : "Electronic Stacked Projectiles (ESP): ESP weapons have both the auto and auto-heavy property. I can only have one in effect at a time and can switch between them as a free action.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 55,

	ammo : "bullet",
};

WeaponsList["flamethrower"] = {

	regExpSearch : /^(?=.*flamethrower).*$/i,

	name : "Flamethrower",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "fire"],

	range : "Special",

	description : "Ammunition, heavy, reload (10 shots), undermount",

	tooltip : "When I attack with the flamethrower, I target a 20 -foot cone emanating from me. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon). Making the save still inflicts half damage. Any target that failed the save against a flamethrower suffers half the inflicted damage again at the beginning of my next turn.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 20,
};

WeaponsList["god's eye sniper gun"] = {

	regExpSearch : /^(?=.*god's)(?=.*eye)(?=.*sniper)(?=.*gun).*$/i,

	name : "God's Eye Sniper Gun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 8, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, AP, heavy, mastercraft, reload (10 shots), sniper (+2)",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.",

	weight : 40,

	ammo : "bullet",
};

WeaponsList["grappling hook, heavy"] = {

	regExpSearch : /^(?=.*grappling)(?=.*hook)(?=.*heavy).*$/i,

	name : "Grappling Hook, Heavy",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "Special"],

	range : "100/600 ft",

	description : "Heavy, loading, undermount",

	tooltip : "What a grappling hook can affect depends on its size. One-handed smaller arms affect Medium and smaller targets; two-handed small arms affect Large and smaller targets; heavy weapons can affect Huge and smaller targets; super heavy weapons can affect Gargantuan. A target larger than a weapon's capacity has advantage to resist its effects, while a target one category below a weapon's maximum capacity has disadvantage. Targeting a creature two size categories larger than a weapon's capacity (or more) will result in a cable snapping the moment it is pulled. Agrappling hook may affect me instead of the target I'm grappling, meaning I pull myself to the target rather than it being pulled. For example, a two-handed small arm can target affect a single Huge target, but that target has advantage to resist the weapon's effect. Targeting a single medium target, it has disadvantage to resist the weapon.\n   Attack Type: I can alter the grapple being used (attack decision) to affect how it attack targets.\n     Piercing: If I hit, the target is grappled and impaled. If the target escapes, it is assumed to have cut the cable to torn out the grapple; these will need to be repaired before it can be used again.\n     Bludgeoning: If I hit, and the target matches the size of the weapon, the target is knocked prone, and you do not grapple the target (that attack can still grapple something else, like a wall or a ledge).\n   Grapple: Whether it be a wall, a ledge, or a creature, I can attempt to grapple it with an action. A wall requires either a DC 10 Athletics check or a DC 10 Acrobatics check. Attacking a creature requires a grapple check employing standard grapple rules. You can use your ability or the hook's; it adds my proficiency bonus to grapple checks. Its Strength is based on its type (one-handed, 16; two-handed, 18; heavy, 20; super heavy, 22).\n   Pull: As a bonus action, I can cause the grappling hook to retract at a speed of 50 feet. A mobile grappled target is pulled toward me if it is smaller than my size; I'm pulled toward it if it is larger; if we are of equal sizes, I decide. An unwilling target may resist movement according to the standard grapple rules.\n   Length: The length of cable depends on the type of weapon (one-handed, 100 ft.; two-handed, 300 ft.; heavy, 600 ft.; super heavy, 1,200).\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 50,
};

WeaponsList["ion cannon"] = {

	regExpSearch : /^(?=.*ion)(?=.*cannon).*$/i,

	name : "Ion Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "lightning"],

	range : "200/800 ft",

	description : "Ammunition, heavy, pincher, reload (40-H)",

	tooltip : "Pincher: Pincher weapons inflict lightning damage.\n   Disruption (6th Level): Once I hit a target, all functions of battery-powered technology on the target stops working until the end of my next turn.\n   High-Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Jolt to the System (8th level): If I roll a natural 20 on the attack roll and the target is not immune or resistant to lightning damage, the target has disadvantage on ability checks and attack rolls until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 50,

	ammo : "bullet",
};

WeaponsList["linear collider"] = {

	regExpSearch : /^(?=.*linear)(?=.*collider).*$/i,

	name : "Linear Collider",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "radiant"],

	range : "200/800 ft",

	description : "Ammunition, auto-heavy (2d8), heavy, nuclear, reload (60-M)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 40,

	ammo : "bullet",
};

WeaponsList["machine light cannon"] = {

	regExpSearch : /^(?=.*machine)(?=.*light)(?=.*cannon).*$/i,

	name : "Machine Light Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto-heavy (2d8), heavy, reload (180 shots)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 30,

	ammo : "bullet",
};

WeaponsList["medium machine gun"] = {

	regExpSearch : /^(?=.*medium)(?=.*machine)(?=.*gun).*$/i,

	name : "Medium Machine Gun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto-heavy (2d6), heavy, reload (300 shots)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 30,

	ammo : "bullet",
};

WeaponsList["micromissile launcher"] = {

	regExpSearch : /^(?=.*micromissile)(?=.*launcher).*$/i,

	name : "Micromissile Launcher",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, heavy, reload (30 shots), SPP",

	tooltip : "Lock-On (3rd Level): As an action, I can lock onto a target within normal range; this lock is lost if I lose line of sight, the target moves out of range or moves within 5 feet of you. As a bonus action, I can launch the missile. This is considered an attack but hits automatically (do not roll). I must then reacquire a new lock.\nMulti-Lock (5th Level): After I lock on a target, I can spend additional actions to lock additional attacks. My second action locks 3 additional rounds (4 total); my third also locks 3 additional rounds (7 total); my fourth also locks 3 additional rounds (10 total). All locks must have the same target. Launching all locked missiles still requires only one bonus action.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSelf-Propelled Projectiles (SPP): All SPP weapons can fire underwater, though their range is halved. They are not common but have definitive advantages, such as explosive warheads and guidance systems.\n   Seeking (6th Level): My SPP weapon gains the guided property.",

	weight : 30,

	ammo : "bullet",
};

WeaponsList["net gun"] = {

	regExpSearch : /^(?=.*net)(?=.*gun).*$/i,

	name : "Net Gun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "25/100 ft",

	description : "Ammunition, heavy, loading, undermount",

	tooltip : "If this weapon strikes a target, it is restrained. The victim needs to pass a DC 20 Dexterity save or Acrobatics check to escape. Only Large targets or smaller can be targeted. A target can be hit additional times, each one increasing the save DC by +2 (maximum DC 25). If I roll a natural 20, the target automatically fails its first save.\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 10,
};

WeaponsList["nuclear particle lance"] = {

	regExpSearch : /^(?=.*nuclear)(?=.*particle)(?=.*lance).*$/i,

	name : "Nuclear Particle Lance",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 12, "radiant"],

	range : "300/1200 ft",

	description : "Ammunition, heavy, nuclear, reload (30-M)",

	tooltip : "Nuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 35,

	ammo : "bullet",
};

WeaponsList["proton wand"] = {

	regExpSearch : /^(?=.*proton)(?=.*wand).*$/i,

	name : "Proton Wand",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "radiant"],

	range : "25/150 ft",

	description : "Ammunition, heavy, nuclear, reload (special)",

	tooltip : "A proton wand gains its energy from a connected back-mounted miniature Uranium-235 power pack, giving it an effectively infinite lifespan. However, its fire control system is rudimentary, resulting in limited range and accuracy.\n   Ensare (4th Level): On my next turn, after hitting a target with the proton wand, as an action, I can employ the weapon to grapple the same target using the weapon's energy; it is counted as having a Strength of 20 and proficiency with Athletics checks. This attack can target creatures immune to being grappled or restrained. I cannot use the proton wand against another target while it is grappling.\n   Particle Thrower (4th Level): The proton wand can target ethereal creatures (including creatures in the ethereal plane), assuming I can see the target. If I hit an invisible or ethereal target, it loses its ethereal properties until the end of my next turn.\n\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.",

	weight : 40,
};

WeaponsList["pulse minigun"] = {

	regExpSearch : /^(?=.*pulse)(?=.*minigun).*$/i,

	name : "Pulse Minigun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "fire"],

	range : "250/1000 ft",

	description : "Ammunition, auto-heavy (2d8), heavy, plasma, reload (200-H)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 100,

	ammo : "bullet",
};

WeaponsList["railcannon"] = {

	regExpSearch : /^(?=.*railcannon).*$/i,

	name : "Railcannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, auto-heavy (2d8), heavy, magnetic, reload (120 shots)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 75,

	ammo : "bullet",
};

WeaponsList["rocket launcher"] = {

	regExpSearch : /^(?=.*rocket)(?=.*launcher).*$/i,

	name : "Rocket Launcher",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "bludgeoning"],

	range : "200/800 ft",

	description : "Ammunition, AP, direct (2d6 + 6), exp (5 ft.), heavy, loading, undermount",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 20,
};

WeaponsList["rocket launcher mk2"] = {

	regExpSearch : /^(?=.*rocket)(?=.*launcher)(?=.*mk2).*$/i,

	name : "Rocket Launcher MK2",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 6, "bludgeoning"],

	range : "250/1000 ft",

	description : "Ammunition, AP, direct (2d6 + 6), exp (10 ft.), guided, heavy, loading",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nGuided: As many times a day as my attack attribute bonus, I can either have advantage on the attack roll or miss the the initial attack and make a second attack as a free action at the beginning of my next turn using that same round of ammunition (or rocket).",

	weight : 20,
};

WeaponsList["rotary cannon"] = {

	regExpSearch : /^(?=.*rotary)(?=.*cannon).*$/i,

	name : "Rotary Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "100/400 ft",

	description : "Ammunition, auto-heavy (special), feed (400 shots), heavy",

	tooltip : "The rotary cannon has no single shot option. It always fires 10 shots per attack roll.\n\nAuto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.",

	weight : 65,

	ammo : "bullet",
};

WeaponsList["smartgun"] = {

	regExpSearch : /^(?=.*smartgun).*$/i,

	name : "Smartgun",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, auto (1d8 + 8), feed (200 shots), heavy",

	tooltip : "A smartgun can be released and dropped as an action but requires five minutes to re-attach. It also requires five minutes to reload.\n   Mount (1st Level): Because of the mounting hardware, a smart gun has the weight and damage class of a superheavy weapon but actually operates as a heavy weapon in all other respects.\n   Tracking (6th Level): As a bonus action, I can lock onto a target I can see; I have advantage with all attack rolls against the target until the beginning of my next turn.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.",

	weight : 60,

	ammo : "bullet",

	modifiers : ["", 6],
};

WeaponsList["solid laser cannon"] = {

	regExpSearch : /^(?=.*solid)(?=.*laser)(?=.*cannon).*$/i,

	name : "Solid Laser Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 12, "force"],

	range : "250/1000 ft",

	description : "Ammunition, heavy, laser, reload (30-H)",

	tooltip : "Laser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 65,

	ammo : "bullet",
};

WeaponsList["sonic devastator"] = {

	regExpSearch : /^(?=.*sonic)(?=.*devastator).*$/i,

	name : "Sonic Devastator",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 12, "thunder"],

	range : "70/280 ft",

	description : "Ammunition, heavy, reload (40-H), sonic",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSonic: Sonic weapons inflict thunder and bludgeoning damage.\n   Thunder (6th level): This weapon gains the Armor Piercing property.\n   Rumble (8th level): If I roll a natural 20, the target is deafened for one minute.",

	weight : 50,

	ammo : "bullet",
};

WeaponsList["thor cannon"] = {

	regExpSearch : /^(?=.*thor)(?=.*cannon).*$/i,

	name : "Thor Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "radiant"],

	range : "300/1200 ft",

	description : "Ammunition, heavy, nuclear, reload (special)",

	tooltip : "The thor cannon runs off its own miniature thorium-based nuclear fusion reactor (thus the origin of its name); as a result, it never runs out of ammo.\n   Charge (1st Level): If wielding a thor cannon, I can spend a bonus action to charge the weapon, increasing its damage by one step (1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). This can only be done once per turn and only while holding the weapon. This is cumulative with each successive round until the weapon is fired, in which case the damage reverts back to baseline. If I drop the cannon or holster it, the charge is lost.\n   Deflection (3rd Level): I can ignore cover on a target is there is a wall within ten feet of the same target.\n   Vector (6th Level): If a Large or smaller target is struck by a max-level blast, it is pushed 20 feet.\n   Blast Jump (8th Level): If I charge the thor cannon and fire it directly at the ground, I can benefit from an assisted jump. For each step above baseline, I jump 10 feet either vertically or horizontally (for example, if I do a running jump before activating (so at a full charge of 2d10, I can leap 50 feet without making a check).\n\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.",

	weight : 30,
};

WeaponsList["thumper laser cannon"] = {

	regExpSearch : /^(?=.*thumper)(?=.*laser)(?=.*cannon).*$/i,

	name : "Thumper Laser Cannon",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "force"],

	range : "250/1000 ft",

	description : "Ammunition, auto-heavy (2d8), heavy, laser, reload (200-H)",

	tooltip : "Auto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 60,

	ammo : "bullet",
};

WeaponsList["venom spitter, bio"] = {

	regExpSearch : /^(?=.*venom)(?=.*spitter)(?=.*bio).*$/i,

	name : "Venom Spitter, Bio",

	source : ["UM5R", 121],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "poison"],

	range : "25/100 ft",

	description : "Ammunition, auto (1d10), heavy, organic (200 shots)",

	tooltip : "If I roll a natural 20, the target must make a DC 15 Constitution saving throw or be poisoned for one minute.\n\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.",

	weight : 30,

	ammo : "bullet",
};

WeaponsList["autocannon"] = {

	regExpSearch : /^(?=.*autocannon).*$/i,

	name : "Autocannon",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, AP, auto (1d8 + 8), feed (200 shots), heavy",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 200,

	ammo : "bullet",

	modifiers : ["", 6],
};

WeaponsList["caustic cannon, bio"] = {

	regExpSearch : /^(?=.*caustic)(?=.*cannon)(?=.*bio).*$/i,

	name : "Caustic Cannon, Bio",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "acid"],

	range : "250/1000 ft",

	description : "Ammunition, AP, auto (1d10 + 10), heavy, organic (200 shots)",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nOrganic: One feature of all bioweapons is their regenerative ammo. Incapable of being reloaded, ammo is regenerated during combat or a short or long rest (the weapons either siphon energy from its user or ingest surrounding resources). If I run out of ammunition during combat, I must finish a short or long rest before being able to use the weapon again.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 175,

	ammo : "bullet",

	modifiers : ["", 8],
};

WeaponsList["dense plasma focus cannon"] = {

	regExpSearch : /^(?=.*dense)(?=.*plasma)(?=.*focus)(?=.*cannon).*$/i,

	name : "Dense Plasma Focus Cannon",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "fire"],

	range : "400/1600 ft",

	description : "Ammunition, AP, auto-heavy (1d10 + 10), feed (200-H), heavy, plasma",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 350,

	ammo : "bullet",

	modifiers : ["", 10],
};

WeaponsList["grappling hook, super heavy"] = {

	regExpSearch : /^(?=.*grappling)(?=.*hook)(?=.*super)(?=.*heavy).*$/i,

	name : "Grappling Hook, Super Heavy",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "Special"],

	range : "300/1200 ft",

	description : "Heavy, loading, undermount",

	tooltip : "What a grappling hook can affect depends on its size. One-handed smaller arms affect Medium and smaller targets; two-handed small arms affect Large and smaller targets; heavy weapons can affect Huge and smaller targets; super heavy weapons can affect Gargantuan. A target larger than a weapon's capacity has advantage to resist its effects, while a target one category below a weapon's maximum capacity has disadvantage. Targeting a creature two size categories larger than a weapon's capacity (or more) will result in a cable snapping the moment it is pulled. Agrappling hook may affect me instead of the target I'm grappling, meaning I pull myself to the target rather than it being pulled. For example, a two-handed small arm can target affect a single Huge target, but that target has advantage to resist the weapon's effect. Targeting a single medium target, it has disadvantage to resist the weapon.\n   Attack Type: I can alter the grapple being used (attack decision) to affect how it attack targets.\n     Piercing: If I hit, the target is grappled and impaled. If the target escapes, it is assumed to have cut the cable to torn out the grapple; these will need to be repaired before it can be used again.\n     Bludgeoning: If I hit, and the target matches the size of the weapon, the target is knocked prone, and you do not grapple the target (that attack can still grapple something else, like a wall or a ledge).\n   Grapple: Whether it be a wall, a ledge, or a creature, I can attempt to grapple it with an action. A wall requires either a DC 10 Athletics check or a DC 10 Acrobatics check. Attacking a creature requires a grapple check employing standard grapple rules. You can use your ability or the hook's; it adds my proficiency bonus to grapple checks. Its Strength is based on its type (one-handed, 16; two-handed, 18; heavy, 20; super heavy, 22).\n   Pull: As a bonus action, I can cause the grappling hook to retract at a speed of 50 feet. A mobile grappled target is pulled toward me if it is smaller than my size; I'm pulled toward it if it is larger; if we are of equal sizes, I decide. An unwilling target may resist movement according to the standard grapple rules.\n   Length: The length of cable depends on the type of weapon (one-handed, 100 ft.; two-handed, 300 ft.; heavy, 600 ft.; super heavy, 1,200).\n\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 90,

	modifiers : ["", 6],
};

WeaponsList["ground heavy gun"] = {

	regExpSearch : /^(?=.*ground)(?=.*heavy)(?=.*gun).*$/i,

	name : "Ground Heavy Gun",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 10, "bludgeoning"],

	range : "400/1600 ft",

	description : "Ammunition, AP, direct (2d10 + 10), exp (10 ft.), heavy, loading",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 185,
};

WeaponsList["mass driver"] = {

	regExpSearch : /^(?=.*mass)(?=.*driver).*$/i,

	name : "Mass Driver",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "300/1200 ft",

	description : "Ammunition, AP, feed (10 shots), heavy, magnetic",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 500,

	ammo : "bullet",

	modifiers : ["", 10],
};

WeaponsList["mortar"] = {

	regExpSearch : /^(?=.*mortar).*$/i,

	name : "Mortar",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [0, 0, "Special"],

	range : "50/200 ft",

	description : "Ammunition, grenade, heavy, loading",

	tooltip : "Grenade: Grenades use their own form of attack depending on the specific grenade.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 50,
};

WeaponsList["particle beam gun"] = {

	regExpSearch : /^(?=.*particle)(?=.*beam)(?=.*gun).*$/i,

	name : "Particle Beam Gun",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "radiant"],

	range : "300/1200 ft",

	description : "Ammunition, AP, feed (20-H), heavy, nuclear",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\nNuclear: Nuclear weapons inflict radiant damage and also deal additional damage to creatures vulnerable to necrotic as if they were dealt that damage type.\n   Fission (6th Level): This weapon gains the Armor Piercing property.\n   Accelerator (8th Level): If I hit with a nuclear weapon, every subsequent hit on the same target gains a +1 bonus to damage. This is cumulative up to half the character's level and is lost if I don't hit that same target before the end of my next turn.\n   Radiation (8th Level): If I roll a natural 20, the target is poisoned until the beginning of my next turn.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 350,

	ammo : "bullet",

	modifiers : ["", 10],
};

WeaponsList["plasma artillery"] = {

	regExpSearch : /^(?=.*plasma)(?=.*artillery).*$/i,

	name : "Plasma Artillery",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [2, 8, "fire"],

	range : "250/1000 ft",

	description : "Ammunition, AP, direct (2d8 + 8), exp (10 ft.), heavy, loading (1-H), plasma",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nDirect: Only certain weapons with the explosive (exp) property possess this property. Instead of targeting an area, this weapon can make a direct attack on a creature. I make a ranged attack; if successful, the target is automatically ground zero of the explosive attack and does not make a saving throw. It also has the potential to suffer a critical hit. Otherwise, I proceed with the explosive attack as usual, with the target's position as the intended point. Additionally, if I hit the intended target with an explosive attack, I roll all damage dice twice and take the higher values. Creatures in the area of effect still make a Dexterity saving throw. If I miss the intended target by 3 or less on the attack roll, the impact point is within 5-feet of the target (an adjacent square). If more than 3 on the attack roll, the impact point falls 10 feet away (or 2 squares away). If I roll a natural 1, the impact point is 20 feet away (or 4 squares away).\nExplosive (exp): Explosives have an area of effect at the point of impact of 5 feet or more. Additionally, if an explosive's area of effect is impeded by indestructible terrain (like in a dungeon corridor), the explosion carries over to unaffected areas. For every 5 feet impeded by indestructible terrain, the area of effect shifts over to occupy the same area. If both sides of an explosion are occupied by indestructible terrain (like a narrow corridor), the blast carries up and down the corridor. This rule doesn't go into effect if the explosion can damage the obstructing terrain. The number listed next to the \"exp\" entry indicates the size of the radius in feet. Unless otherwise stated, explosive attacks inflict bludgeoning damage.\n   Attacking With Explosives: When using any weapon with an area of effect (but lacking the \"direct\" property), I don't make a ranged attack but rather establish a Dexterity saving throw DC that affected creatures must beat. The DC for the Dexterity saving throw equals 8 + my Dexterity modifier + my proficiency bonus (if proficient in the weapon I'm using).\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 110,

	ammo : "bullet",
};

WeaponsList["repeating laser blaster"] = {

	regExpSearch : /^(?=.*repeating)(?=.*laser)(?=.*blaster).*$/i,

	name : "Repeating Laser Blaster",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 8, "force"],

	range : "250/1000 ft",

	description : "Ammunition, AP, auto-heavy (1d10 + 10), feed (400-H), heavy, laser",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 80,

	ammo : "bullet",

	modifiers : ["", 8],
};

WeaponsList["super-kill sniper"] = {

	regExpSearch : /^(?=.*super-kill)(?=.*sniper).*$/i,

	name : "Repeating Laser Blaster",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 10, "piercing"],

	range : "500/2000 ft",

	description : "Ammunition, AP, heavy, magnetic, reload (5 shots), sniper (+2)",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nMagnetic: The specific process of accelerating metal shells using magnetism is complicated, with coil-based and rail-based technology launching shells using different means. If I kill a creature, the shell continues on a straight path from the weapon, making a single free attack on one creature in direct line of effect within the weapon's range.\n   Gauss (6th level): This weapon gains the Armor Piercing property.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nSniper: Sniper weapons list a bonus. If I'm proficient with the weapon, I can use an action or bonus action to aim, gaining the bonus on my following ranged attack with the weapon against a creature 25 feet away or further. The bonus is lost if I move or are moved. I also lose the bonus after making a ranged attack with the weapon (whether I hit or not). This bonus is cumulative for up to two actions.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 150,

	ammo : "bullet",

	modifiers : ["", 10],
};

WeaponsList["volley gun esp"] = {

	regExpSearch : /^(?=.*volley)(?=.*gun)(?=.*esp).*$/i,

	name : "Volley Gun ESP",

	source : ["UM5R", 122],

	list : "ranged",

	ability : 1,

	type : "Special",

	damage : [1, 6, "piercing"],

	range : "250/1000 ft",

	description : "Ammunition, AP, auto-heavy (1d8 + 8), feed (500 shots), heavy",

	tooltip : "Armor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAuto-Heavy: Auto weapons can fire several rounds with each attack. This is used with area effects and when increasing damage against specific targets. A weapon with an auto property need not employ that property, though some abilities require it. Auto weapons are broken up into two subcategories, auto and auto-heavy. Auto weapons can fire in single-shot mode or in 5-round bursts (called an autofire attack). Auto-Heavy can fire in single-shot mode or in aggressive 10-round bursts (also called an autofire attack). In single-shot mode, the weapon uses its normal damage die. In autofire mode, use the alternate damage value listed on the table. All auto or auto-heavy weapons also have the burst fire property (thus, it is not listed on the table). When making a burst fire attack with a weapon with the auto property, I use ten rounds of ammunition, but do not use the improved damage die. With the auto-heavy property, I use ten rounds of ammunition, and the improved damage die.\n   Burst Fire: Burst-fire allows the use of a burst fire attack. A burst-fire weapon will always have either the auto or auto-heavy property (and as such, the burst fire property is not listed on the table). A burst-fire attack sprays a 10-foot cube area within normal range with ten rounds of ammunition. Each creature in the area must succeed on a Dexterity saving throw or take the weapon's normal damage. The DC of burst fire attacks is either 15 or is equal to 8 + my Dexterity modifier + my proficiency bonus if proficient (whichever is higher).\n     Note: Remember the new critical rules where if an opponent rolls a natural 1 against a character-imposed area effect involving explosives or firearms, the target suffers additional damage equal to weapon's damage dice (the same as rolling a critical hit).\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.\n\nSuper heavy weapons use the same general rules as ranged weapons, except as follows:\n   Super heavy weapons come equipped with a tripod (unless mounted on a vehicle or exo-armor).\n   I must use an action to plant a super heavy weapon in the ground. Once planted, it cannot be moved unless I use an action to uproot it. If I fire a non-planted super heavy weapon, I suffer disadvantage on attack rolls with the weapon. If my Strength is less than 18, immediately after the attack, I'm pushed 5 feet and knocked prone.\nThese weapons may be purchased for a Large user (e.g.: exo-armor). If so, a super heavy weapon counts as a heavy weapon. It can no longer be used by Medium-sized users.",

	weight : 350,

	ammo : "bullet",

	modifiers : ["", 6],
};

WeaponsList["brass knuckles"] = {

	regExpSearch : /^(?=.*brass)(?=.*knuckles).*$/i,

	name : "Brass Knuckles",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Simple",

	damage : [0, 2, "bludgeoning"],

	range : "Melee",

	description : "Augment, finesse, light",

	tooltip : "Brass knuckles add +1 damage to unarmed melee hits.\n\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.",

	weight : 0.5,
};

WeaponsList["collapsible baton"] = {

	regExpSearch : /^(?=.*collapsible)(?=.*baton).*$/i,

	name : "Collapsible Baton",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Simple",

	damage : [1, 4, "bludgeoning"],

	range : "Melee",

	description : "Finesse, light",

	weight : 1,
};

WeaponsList["fightning knife bayonet"] = {

	regExpSearch : /^(?=.*fighting)(?=.*knife)(?=.*bayonet).*$/i,

	name : "Fighting Knife Bayonet",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Simple",

	damage : [1, 6, "piercing"],

	range : "Melee",

	description : "Finesse, light, undermount",

	tooltip : "Undermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 2,
};

WeaponsList["plug bayonet"] = {

	regExpSearch : /^(?=.*plug)(?=.*bayonet).*$/i,

	name : "Plug Bayonet",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Simple",

	damage : [1, 4, "piercing"],

	range : "Melee",

	description : "Finesse, light, undermount",

	tooltip : "Undermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 1,
};

WeaponsList["battle drill"] = {

	regExpSearch : /^(?=.*battle)(?=.*drill).*$/i,

	name : "Battle Drill",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 8, "piercing"],

	range : "Melee",

	description : "Heavy, reload (20-M), two-handed, undermount",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 15,
};

WeaponsList["boom gauntlet"] = {

	regExpSearch : /^(?=.*boom)(?=.*gauntlet).*$/i,

	name : "Boom Gauntlet",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 2, "thunder"],

	range : "Melee",

	description : "Augment, finesse, light, sonic",

	tooltip : "As part of a hit, I can use a cell charge and inflict +2 thunder damage onto my melee hit and replace the entire bludgeoning damage with thunder. Additionally, as part of the same charge, I can push the target 5 feet as long as it is Medium-sized or smaller. I can increase the cell usage by 1 charge to increase the push by 5 feet. After 2 charges, the boom gauntlet will also affect Large targets. There is no maximum number of charges  I can add as part of the hit (outside of the cell's capacity). If I push a target 10 feet or further, the target is knocked prone.\n\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nSonic: Sonic weapons inflict thunder and bludgeoning damage.\n   Thunder (6th level): This weapon gains the Armor Piercing property.\n   Rumble (8th level): If I roll a natural 20, the target is deafened for one minute.",

	weight : 3,
};

WeaponsList["buzz baton"] = {

	regExpSearch : /^(?=.*buzz)(?=.*baton).*$/i,

	name : "Buzz Baton",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 6, "bludgeoning"],

	range : "Melee",

	description : "Finesse, light, pincher, reload (20-M)",

	tooltip : "As part of a hit, I can use a cell charge and either inflict +2 lightning damage or replace the entire bludgeoning damage with lightning damage.\n\nPincher: Pincher weapons inflict lightning damage.\n   Disruption (6th Level): Once I hit a target, all functions of battery-powered technology on the target stops working until the end of my next turn.\n   High-Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Jolt to the System (8th level): If I roll a natural 20 on the attack roll and the target is not immune or resistant to lightning damage, the target has disadvantage on ability checks and attack rolls until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 1,
};

WeaponsList["chainsaw"] = {

	regExpSearch : /^(?=.*chainsaw).*$/i,

	name : "Chainsaw",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 8, "slashing"],

	range : "Melee",

	description : "Heavy, reload (20-M), two-handed, undermount",

	tooltip : "Reload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.\nUndermount: This property is a modification where a smaller weapon is attached under the barrel of an existing weapon. I can switch to an undermounted weapon instantly, and it occupies the same space as the weapon it is attached to. When I purchase a weapon with the undermount property, establish if it is being purchased as a standard weapon or an undermount, and if the latter, which weapon it is being mounted to. I can only attach an undermount to a weapon one size larger (one-handed small arm > two-handed small arm > heavy weapon > super heavy weapon). A one-handed or two-handed melee weapon counts as a one-handed small arm and a two-handed small arm respectfully.",

	weight : 15,
};

WeaponsList["harmonic blade"] = {

	regExpSearch : /^(?=.*harmonic)(?=.*blade).*$/i,

	name : "Harmonic Blade",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 4, "slashing"],

	range : "Melee",

	description : "AP, finesse, light, reload (20-M)",

	tooltip : "If I have proficiency in Medicine, I gain a +2 bonus to damage with this weapon. The damage die increases to 1d6 if I have advantage on the target.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 1.5,
};

WeaponsList["laser leash"] = {

	regExpSearch : /^(?=.*laser)(?=.*leash).*$/i,

	name : "Laser Leash",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 6, "fire"],

	range : "Melee",

	description : "Finesse, plasma, reach, reload (20-M)",

	tooltip : "Each round the leash is active uses a cell charge.\n   Energy Clutch (4th Level): A Large or smaller creature hit by my leash is restrained until freed. I cannot restrain creatures that are formless or incorporeal. A creature can use its action to make a DC 15 Strength check to free itself. I can make only one attack with the leash as part of an Attack action regardless of the number of attacks I can normally make. Once a target is grappled, I can no longer attack with a leash.\n   Stable Field (6th Level): My reach extends to 15 feet.\n   Thumper (8th Level): As a bonus action against a target I'm restraining with the leash, I can either toss it up to 10 feet in the air (5 feet for large targets) or pull it to within 5 feet of me.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 1,
};

WeaponsList["piton-gauntlet"] = {

	regExpSearch : /^(?=.*piton-gauntlet).*$/i,

	name : "Piton-Gauntlet",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 6, "bludgeoning"],

	range : "Melee",

	description : "Augment, finesse, light, reload (20-M)",

	tooltip : "If I hit a creature with a melee attack, I can activate the piton-gauntlet to inflict additional 1d6 piercing damage on the target. Once I use the piton, I cannot use it again until the beginning of my next turn.\n\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 3,
};

WeaponsList["plasma sword"] = {

	regExpSearch : /^(?=.*plasma)(?=.*sword).*$/i,

	name : "Plasma Sword",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 8, "fire"],

	range : "Melee",

	description : "Finesse, plasma, reload (10-M)",

	tooltip : "I must be proficient with this weapon to gain any of its benefits. The sword can be activated and deactivated with a bonus action and, once turned on, uses a charge which can last up to five minutes.\n   Deflection (4th Level): I gain a +1 bonus to AC as long as I don't wield a shield; this increases to +2 at 8th level.\n   Rebound (6th Level): If an opponent misses me with a ranged energy weapon (laser, nuclear, plasma), I can use a reaction to reflect that attack to any target I can see. I have disadvantage with this attack. At 10th level, youI no longer have disadvantage.\n   Enhanced Skill (12th Level): I gain a +1 bonus to attack and damage rolls.\n\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 1,
};

WeaponsList["power-hooks"] = {

	regExpSearch : /^(?=.*power-hooks).*$/i,

	name : "Power-Hooks",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "Special"],

	range : "Melee",

	description : "AP, augment, finesse, light, reload (20-M)",

	tooltip : "Power-hooks increase the damage dice of unarmed attacks by one step (1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). A power-hook takes up a hand.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 6,
};

WeaponsList["punch gun"] = {

	regExpSearch : /^(?=.*punch)(?=.*gun).*$/i,

	name : "Punch Gun",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "Special"],

	range : "Melee",

	description : "Augment, finesse, feed (4 shots), light",

	tooltip : "If I hit a creature with a melee attack, I can activate the punch gun to inflict an additional 1d4 piercing damage on the target.\n\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nFeed: Also called a belt-driven weapon, this involves ammunition being fed into a firearm externally from an external supply. Older variations involved feed strips or disintegrating belts, while later models employ a hybrid mechanism to load bullets without the belt being fed through a machine. An energy weapon with the feed property involves a complicated connection/disconnection procedure to power-up, including the time it takes for the energy cell to recharge a capacitor. Reloading a feed weapon takes one minute unless stated otherwise in the weapon description.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["punch gun, laser"] = {

	regExpSearch : /^(?=.*punch)(?=.*gun)(?=.*laser).*$/i,

	name : "Punch Gun, Laser",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "Special"],

	range : "Melee",

	description : "AP, augment, finesse, laser, light, reload (5-M)",

	tooltip : "If I hit a creature with a melee attack, I can activate the punch gun to inflict an additional 1d6 force damage on the target.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nLaser: Laser weapons inflict force damage. If I hit with a laser, I gain a +1 bonus to my next attack roll against the same target. This is lost if I don't fire at the same target or if you miss. If I attack an obstruction or inanimate object, I inflict additional damage equal to half the initial damage inflicted.\n   Focused Beam (6th Level): This weapon gains the Armor Piercing property.\n   Goggles Do Nothing (8th Level): If I roll a natural 20, the target is blinded until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["punch gun, plasma"] = {

	regExpSearch : /^(?=.*punch)(?=.*gun)(?=.*plasma).*$/i,

	name : "Punch Gun, Plasma",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "Special"],

	range : "Melee",

	description : "AP, augment, plasma, reload (10-M)",

	tooltip : "If I hit a creature with a melee attack, I can activate the punch gun to inflict an additional 1d6 force damage on the target.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nPlasma: Any weapon employing ionized gas is considered a plasma weapon. A plasma weapon fires a toroid of superheated gas inside a magneto-hydrodynamic bubble that is then accelerated from the barrel in the same way a railgun fires its iron-core shell. The bubble remains stable for a significant time, or until it strikes its target, at which point the bubble is dispersed and delivers its energetic payload as a cloud of intense heat. There are plasma pistols, rifles, and cannons. Plasma weapons inflict fire damage.\n   Bottle Cohesion (6th level): This weapon gains the Armor Piercing property.\n   Directed Energy (8th level): On a non-critical hit, I roll one damage dice twice and take the higher result. On a natural 20, I roll all damage dice twice and take the higher result.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 2,

	ammo : "bullet",
};

WeaponsList["rocket hammer"] = {

	regExpSearch : /^(?=.*rocket)(?=.*hammer).*$/i,

	name : "Rocket Hammer",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [2, 6, "bludgeoning"],

	range : "Melee",

	description : "Heavy, reach, two-handed",

	tooltip : "Once per turn, as a free action, I can activate the thruster. My next attack suffers a -1 penalty to attack rolls, but damage increases to 3d6. I also score a critical hit on a natural 19 or 20.",

	weight : 12,
};

WeaponsList["sick stick"] = {

	regExpSearch : /^(?=.*sick)(?=.*stick).*$/i,

	name : "Sick Stick",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 6, "bludgeoning"],

	range : "Melee",

	description : "Finesse, light, reload (10-M)",

	tooltip : "As part of a hit, I can use a cell charge to force a Medium-sized target or smaller to make a DC 15 Constitution saving throw or be poisoned for one minute. If a target saves, it is immune to the effect for one hour. The target can repeat the same at the end of each of its turns.\n\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 2,
};

WeaponsList["spike bayonet"] = {

	regExpSearch : /^(?=.*spike)(?=.*bayonet).*$/i,

	name : "Spike Bayonet",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [1, 8, "piercing"],

	range : "Melee",

	description : "Reach, two-handed",

	weight : 2,
};

WeaponsList["tesla glove"] = {

	regExpSearch : /^(?=.*tesla)(?=.*glove).*$/i,

	name : "Tesla Glove",

	source : ["UM5R", 134],

	list : "melee",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "lightning"],

	range : "Melee",

	description : "AP, augment, finesse, light, pincher, reload (Special-M)",

	tooltip : "If I don't hit any creature during a round, at the start of my next turn, I increase the damage of my next hit with this weapon by 2. This is cumulative up to +8 damage. After I hit any creature, the cumulative damage is inflicted, and the bonus is reduced back to 0. At the start of combat, unless I'm surprised, the glove is assumed to be primed to +8 damage.\n\nArmor Piercing (AP): This weapon ignores a target's resistance to the weapon's damage type (e.g. a piercing weapon ignores resistance to piercing). If the target has fantasy damage resistances, the weapon also counts as magical, silver, and adamantine. If an opponent has immunity to the weapon's damage type and the weapon has the AP property, the opponent has only resistance to that weapon instead of immunity.\nAugment: An augment weapon uses my unarmed strike damage dice. An unarmed strike can only benefit from one augment weapon per hit. By using an augment weapon, I'm still counted as being unarmed.\nPincher: Pincher weapons inflict lightning damage.\n   Disruption (6th Level): Once I hit a target, all functions of battery-powered technology on the target stops working until the end of my next turn.\n   High-Voltage (6th Level): This weapon gains the Armor Piercing property.\n   Jolt to the System (8th level): If I roll a natural 20 on the attack roll and the target is not immune or resistant to lightning damage, the target has disadvantage on ability checks and attack rolls until the beginning of my next turn.\nReload: This property pertains to a magazine or clip-fed weapon. A magazine or clip carries a certain number of shots before requiring a reload. A magazine may also be a battery with a set number of charges. Note that several melee weapons may also require an energy cell, these same rules apply. Refer to official licensed material for the rules on reload.",

	weight : 3,
};

WeaponsList["compound longbow"] = {

	regExpSearch : /^(?=.*compound)(?=.*longbow).*$/i,

	name : "Compound Longbow",

	source : ["UM5R", 134],

	list : "ranged",

	ability : 1,

	type : "Martial",

	damage : [0, 0, "piercing"],

	range : "200/600 ft",

	description : "Ammunition, heavy, two-handed",

	tooltip : "A compound longbow can be adjusted for greater force at the cost of a more demanding draw. Using settings above the first requires proficiency with the weapon and the listed minimum Strength score. Setting 1: 1d6 piercing; Setting 2: Str 15, 1d8 piercing; Setting 3: Str 18, 1d10 piercing; Setting 4: Str 20, 1d12 piercing. It takes a full minute to adjust to a new setting.",

	weight : 4,

	ammo : "arrow",
};

WeaponsList["carbon crossbow"] = {

	regExpSearch : /^(?=.*carbon)(?=.*crossbow).*$/i,

	name : "Carbon Crossbow",

	source : ["UM5R", 134],

	list : "ranged",

	ability : 1,

	type : "Martial",

	damage : [1, 10, "piercing"],

	range : "200/600 ft",

	description : "Ammunition, heavy, loading, two-handed",

	tooltip : "A compound longbow can be adjusted for greater force at the cost of a more demanding draw. Using settings above the first requires proficiency with the weapon and the listed minimum Strength score. Setting 1: 1d6 piercing; Setting 2: Str 15, 1d8 piercing; Setting 3: Str 18, 1d10 piercing; Setting 4: Str 20, 1d12 piercing. It takes a full minute to adjust to a new setting.",

	weight : 6,

	ammo : "bolt",
};

ArmourList["ballistics armor"] = {

	regExpSearch : /^(?=.*ballistics)(?=.*armor).*$/i,

	name : "Ballistics Armor",

	source : ["UM5R", 140],

	type : "light",

	ac : 12,

	weight : 15,
};

ArmourList["synthetic weave"] = {

	regExpSearch : /^(?=.*synthetic)(?=.*weave).*$/i,

	name : "Synthetic Weave",

	source : ["UM5R", 140],

	type : "light",

	ac : 11,

	weight : 7,
};

ArmourList["ballistics armor mk2"] = {

	regExpSearch : /^(?=.*ballistics)(?=.*armor)(?=.*mk2).*$/i,

	name : "Ballistics Armor MK2",

	source : ["UM5R", 140],

	type : "light",

	ac : 12,

	weight : 15,

	dmgres : ["Slash. (Non-Mag)"],
};

ArmourList["biosuit"] = {

	regExpSearch : /^(?=.*biosuit).*$/i,

	name : "Biosuit",

	source : ["UM5R", 140],

	type : "light",

	ac : 15,

	weight : 15,

	toNotesPage : [{
		name : "Biosuit Features",
		source : ["UM5R", 141],
		popupName : "Biosuit Features",
		note : [
			"Balance: For the sake of game balance, the biosuit counts as three very rare items.",
			"Power: The biosuit requires an H-class power cell to operate, and it does not function without it.",
			"Mask: I'm immune to gas attacks and inhaled poisons.",
			"Mode: I can use an action to set the biosuit's mode. By default, it is set to Armor Mode, but when switched, it will remain in its new mode until switched back. After a short or long rest, it automatically switches back to Armor Mode. Activating a mode costs a cell charge, but maintaining a mode does not.",
			"   Armor Mode: I gain 10 temporary HP. Once during my turn, as a free action while in Armor Mode, I can regenerate 1 temporary HP (the total does not reset if I disable and re-engage Armor Mode). I also gain resistance tp fire, acid, and cold damage, as well as bludgeoning, slashing, and piercing from non-magical weapons.",
			"   Strength Mode: I gain a +4 bonus to my Strength score and have advantage with Strength ability checks.",
			"   Speed Mode: I gain a +10 bonus to speed and can use the Dash action as a bonus action.",
			"   Cloak Mode: I become invisible until the end of my next turn. Anything I'm wearing or carrying is invisible as long as it is on me. The effect ends if I attack or cast a spell. Once deactivated, the armor reverts back to armor mode."
		],
	}],
};

ArmourList["synthetic weave mk2"] = {

	regExpSearch : /^(?=.*synthetic)(?=.*weave)(?=.*mk2).*$/i,

	name : "Synthetic Weave MK2",

	source : ["UM5R", 140],

	type : "light",

	ac : 11,

	weight : 7,

	dmgres : ["Slash. (Non-Mag)"],
};

ArmourList["spider-silk suit"] = {

	regExpSearch : /^(?=.*spider-silk)(?=.*suit).*$/i,

	name : "Spider-Silk Suit",

	source : ["UM5R", 140],

	type : "light",

	ac : 12,

	weight : 10,

	dmgres : ["Slash. (Non-Mag)", "Lightning"],

	tooltip : "If my Dexterity score is 20 or higher, the AC of this armor increases to 13.",
};

ArmourList["force body vest"] = {

	regExpSearch : /^(?=.*force)(?=.*body)(?=.*vest).*$/i,

	name : "Force Body Vest",

	source : ["UM5R", 140],

	type : "medium",

	ac : 13,

	dex : 2,

	weight : 20,
};

ArmourList["aramid combat suit"] = {

	regExpSearch : /^(?=.*aramid)(?=.*combat)(?=.*suit).*$/i,

	name : "Aramid Combat Suit",

	source : ["UM5R", 140],

	type : "medium",

	ac : 14,

	dex : 2,

	stealthdis : true,

	weight : 25,
};

ArmourList["aramid survival suit"] = {

	regExpSearch : /^(?=.*aramid)(?=.*survival)(?=.*suit).*$/i,

	name : "Aramid Survival Suit",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	dex : 2,

	stealthdis : true,

	weight : 30,

	tooltip : "I'm immune to gas attacks and inhaled poisons.",
};

ArmourList["aramid combat suit mk2"] = {

	regExpSearch : /^(?=.*aramid)(?=.*combat)(?=.*suit)(?=.*mk2).*$/i,

	name : "Aramid Combat Suit MK2",

	source : ["UM5R", 140],

	type : "medium",

	ac : 14,

	dex : 2,

	weight : 25,

	dmgres : ["Blud. (Non-Mag)", "Fire"],
};

ArmourList["aramid survival suit mk2"] = {

	regExpSearch : /^(?=.*aramid)(?=.*survival)(?=.*suit)(?=.*mk2).*$/i,

	name : "Aramid Survival Suit MK2",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	dex : 2,

	weight : 30,

	dmgres : ["Blud. (Non-Mag)", "Fire", "Cold"],

	tooltip : "I'm immune to gas attacks and inhaled poisons.",
};

ArmourList["blinder-mail"] = {

	regExpSearch : /^(?=.*blinder-mail).*$/i,

	name : "Blinder-Mail",

	source : ["UM5R", 140],

	type : "medium",

	ac : 14,

	dex : 2,

	stealthdis : false,

	weight : 25,

	tooltip : "When I activate the stealth net, I have advantage on Stealth checks and can attempt to hide even without cover or breaking line of sight (although doing so negates my advantage). The stealth net takes one charge per minute of use.",
};

ArmourList["nanotech armor"] = {

	regExpSearch : /^(?=.*nanotech)(?=.*armor).*$/i,

	name : "Nanotech Armor",

	source : ["UM5R", 140],

	type : "medium",

	ac : 16,

	dex : 2,

	stealthdis : false,

	weight : 25,

	dmgres : ["Blud. (Non-Mag)", "Slash. (Non-Mag)", "Fire", "Cold"],

	tooltip : "Any critical hit against me becomes a normal hit.",
};

ArmourList["fast"] = {

	regExpSearch : /^(?=.*fast).*$/i,

	name : "F.A.S.T.",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	weight : 35,

	dmgres : ["Blud. (Non-Mag)", "Pier. (Non-Mag)", "Slash. (Non-Mag)", "Fire", "Cold", "Acid"],

	advantages : [
		["Athletics", true],
		["Acrobatics", true]
	],

	improvements : "F.A.S.T.: +2 Strength and Dexterity;",

	scores : [2, 2, 0, 0, 0, 0],

	speed : {

		allModes : "+10"
	},

	toNotesPage : [{
		name : "F.A.S.T. Features",
		source : ["UM5R", 142],
		popupName : "F.A.S.T. Features",
		note : [
			"Balance: For the sake of game balance, the F.A.S.T. counts as one legendary items and two very rare items.",
			"Power: The F.A.S.T. requires an H-class power cell to operate, and it does not function without it.",
			"Mask: I'm immune to gas attacks and inhaled poisons.",
			"Speed: I can spend a charge to increase the bonus speed I gain to +40 for up to one minute, and I can use the Dash action as a bonus action.",
			"Jump Jets: I'm always considered moving when performing a jump.",
			"Electromagnetic Shielding: As a reaction to the armor's shutdown, the F.A.S.T. comes back online. Once I use this feature, I cannot use it again until I finish a long rest. If still disrupted, I'm restrained until the armor comes back online."
		],
	}],
};

ArmourList["plus suit, mark 1"] = {

	regExpSearch : /^(?=.*plus)(?=.*suit)(?=.*mark)(?=.*1).*$/i,

	name : "Plus Suit, Mark 1",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	weight : 35,

	improvements : "Plus Suit, Mark 1: +2 Strength and Dexterity;",

	scores : [2, 2, 0, 0, 0, 0],

	speed : {

		allModes : "+5"
	},

	toNotesPage : [{
		name : "Plus Suit, Mark 1 Features",
		source : ["UM5R", 143],
		popupName : "Plus Suit, Mark 1 Features",
		note : [
			"Balance: For the sake of game balance, the plus suit counts as two rare items.",
			"Power: The plus suit requires an H-class power cell to operate, and it does not function without it.",
			"Mask: I'm immune to gas attacks and inhaled poisons.",
			"Mounts: My armor is equipped with mounts on each arm, leg, and shoulder. Each mount can hold a two-handed small arm (or smaller) or up to four magazines or cells, which can be accessed easily.",
			"Electromagnetic Shielding: As a reaction to the armor's shutdown, the plus suit comes back online. Once I use this feature, I cannot use it again until I finish a long rest. If still disrupted, I'm restrained until the armor comes back online."
		],
	}],
};

ArmourList["space suit, medium"] = {

	regExpSearch : /^(?=.*space)(?=.*suit)(?=.*medium).*$/i,

	name : "Space Suit, Medium",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	dex : 2,

	stealthdis : true,

	weight : 35,

	dmgres : ["Force", "Radiant"],

	toNotesPage : [{
		name : "Space Suit Features",
		source : ["UM5R", 143],
		popupName : "Space Suit Features",
		note : [
			"Pressurized: A spacesuit has its own air supply providing one hour per tech level of life support. While sealed, I'm immune to gas attacks and inhaled poisons.",
			"Thrusters: My energy cell powers a thruster system with 30 charges. If within free-fall or a low-to-no gravity environment, I can move using my thrusters (one charge per move). I can also use a charge as a free action to gain advantage to my next Dexterity ability check (while in low-to-no gravity).",
			"Electromagnetic Shielding: Spacesuits are immune to electromagnetic damage and interference."
		],
	}],
};

ArmourList["space suit, medium"] = {

	regExpSearch : /^(?=.*space)(?=.*suit)(?=.*medium).*$/i,

	name : "Space Suit, Medium",

	source : ["UM5R", 140],

	type : "medium",

	ac : 15,

	dex : 2,

	stealthdis : true,

	weight : 35,

	strReq : 10,

	invName : "Protect, Me",

	dmgres : ["Force", "Radiant"],

	toNotesPage : [{
		name : "Space Suit Features",
		source : ["UM5R", 143],
		popupName : "Space Suit Features",
		note : [
			"Pressurized: A spacesuit has its own air supply providing one hour per tech level of life support. While sealed, I'm immune to gas attacks and inhaled poisons.",
			"Thrusters: My energy cell powers a thruster system with 30 charges. If within free-fall or a low-to-no gravity environment, I can move using my thrusters (one charge per move). I can also use a charge as a free action to gain advantage to my next Dexterity ability check (while in low-to-no gravity).",
			"Electromagnetic Shielding: Spacesuits are immune to electromagnetic damage and interference."
		],
	}],
};

FeatsList["adrenaline regulator"] = {

	name : "Adrenaline Regulator",

	source : ["UM5R", 158],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "A painful procedure, this mesh is interlaced through my muscles to significantly improve my physical attributes. [+2 Dexterity]",

	descriptionFull : "A painful procedure, this mesh is interlaced through my muscles to significantly improve my physical attributes. My Dexterity increases by 2. I can purchase this bonus two additional times, though each additional weave costs five times as much as the previous one purchased.",

	improvements : "Adrenaline Regulator: +2 Dexterity;",

	scores : [0, 2, 0, 0, 0, 0],
}

FeatsList["artificial mutation"] = {

	name : "Artificial Mutation",

	source : ["UM5R", 158],

	prerequisite : "$5,500",

	allowDuplicates : true,

	description : "I have been implanted with mounting hardware, allowing for additional limbs. I can have either an extra set of arms or an extra set of legs (or both if I purchase this add-on twice).",

	choices : ['Arms', 'Legs'],

	"arms" : {
	
		name : "Artificial Mutation (Arms)",

		description : "An extra set of arms can provide a brace for weapons and gives me advantage with grapple checks.",
	},

	"legs" : {
	
		name : "Artificial Mutation (Legs)",

		description : "An extra set of legs gives me advantage against being knocked prone and my speed increases by 5 feet.",

		speed : {

			allModes : "+5"
		},

		savetxt : {

			adv_vs : ["prone"]
		},
	}
}

FeatsList["biofort"] = {

	name : "Biofort",

	source : ["UM5R", 158],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "I gain a +2 bonus to Constitution. I'm also immune to being poisoned.",

	descriptionFull : "The bio fort enhances or replaces major internal organs like my liver, stomach, and heart. I gain a +2 bonus to Constitution. I'm also immune to being poisoned. I can purchase this bonus two additional times, though each additional biofort costs five times as much as the previous one purchased.",

	improvements : "Biofort: +2 Constitution;",

	scores : [0, 0, 2, 0, 0, 0],

	savetxt : {

		immune : ["poison"]
	},
}

FeatsList["boosted lungs"] = {

	name : "Boosted Lungs",

	source : ["UM5R", 158],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "I can hold my breath for twenty minutes.",
}

FeatsList["boosterware"] = {

	name : "Boosterware",

	source : ["UM5R", 158],

	prerequisite : "$1,500",

	allowDuplicates : false,

	description : "I gain a +2 bonus to initiative and a +2 bonus with Dexterity saving throws.",
}

FeatsList["claws"] = {

	name : "Claws",

	source : ["UM5R", 158],

	prerequisite : "$2,500",

	allowDuplicates : false,

	description : "I can extend or retract my claws as a bonus action. If my unarmed melee damage is less than 1d10, it becomes 1d10. If it is 1d10 or higher, it increases by 1 step (1d10 > 1d12 > 2d6 > 2d8 > 2d10 > 2d12).",

	action : ["bonus action"],
}

FeatsList["concealed holster"] = {

	name : "Concealed Holster",

	source : ["UM5R", 158],

	prerequisite : "$200",

	allowDuplicates : false,

	description : "My leg opens a miniature chamber on which I can conceal a single one-handed small arm weighing 2 lbs. or less. Removing it only takes a bonus action.",
}

FeatsList["cyberlink"] = {

	name : "Cyberlink",

	source : ["UM5R", 158],

	prerequisite : "$200",

	allowDuplicates : false,

	description : "I have advantage with any checks to recall memory or lore.",
}

FeatsList["deployable shield"] = {

	name : "Deployable Shield",

	source : ["UM5R", 159],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "As a bonus action, one free arm turns into a shield, granting a +1 bonus to AC.",

	action : ["bonus action"],
}

FeatsList["detachable limb"] = {

	name : "Detachable Limb",

	source : ["UM5R", 159],

	prerequisite : "$200",

	allowDuplicates : false,

	description : "I must select which already cybernetic limb can be removed, which can only be an arm or a leg. I can detach the limb as a reaction to a grapple or as a bonus action on my turn. The grapple ends, but I lose the limb as a result. It takes an action to reattach.",

	action : ["bonus action", "reaction"],
}

FeatsList["digitigrade"] = {

	name : "Digitigrade",

	source : ["UM5R", 159],

	prerequisite : "$5,000",

	allowDuplicates : false,

	description : "I automatically subtract 50 feet from any fall, and also also double the distance of any jump. My speed increases by 5 feet. I also have advantage on Stealth checks that rely on moving silently.",

	speed : {

		allModes : "+5"
	},
}

FeatsList["empathy chip"] = {

	name : "Empathy Chip",

	source : ["UM5R", 159],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "An empathy chip uses a combination of olfactory and visual inputs to allow me to communicate easier with those around me. I know what to say and how to say it. [+2 Charisma]",

	descriptionFull : "An empathy chip uses a combination of olfactory and visual inputs to allow me to communicate easier with those around me. I know what to say and how to say it. My Charisma is increased by 2. I can purchase this bonus two additional times, though each additional empathy chip costs five times as much as the previous one purchased.",

	improvements : "Empathy Chip: +2 Charisma;",

	scores : [0, 0, 0, 0, 0, 2],
}

FeatsList["eyeshine"] = {

	name : "Eyeshine",

	source : ["UM5R", 159],

	prerequisite : "$4,500",

	allowDuplicates : false,

	description : "I gain darkvision out to a range of 60 feet.",

	vision : [["Darkvision", 60]],
}

FeatsList["feign implant"] = {

	name : "Feign Implant",

	source : ["UM5R", 159],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "As an action, I fall prone and are unconscious. Vital signs vanish. The pulse is masked. The brain is placed on low-power mode. All pain receptors are shut off. The brain runs on minimum power and re-circulates an internal air supply on low consumption to prevent notable breathing. I appear dead.",

	descriptionFull : "As an action, I fall prone and are unconscious. Vital signs vanish. The pulse is masked. The brain is placed on low-power mode. All pain receptors are shut off. The brain runs on minimum power and re-circulates an internal air supply on low consumption to prevent notable breathing. I appear dead. This effect can last for a full hour until it reactivates to save the brain from permanent damage. Only a full physical examination by a professional can reveal the truth. Once reactivated, I cannot use this modification again until I finish a long rest. This implant can also be used to induce a medical coma until I have time to be treated. As a reaction, to being reduced to 0 HP or making a death save, I can activate the system. I do not have to make death saves for the duration of the effect – however, any failed saves still count when I wake up.",

	usages : 1,

	recovery : "long rest",

	action : ["action"],
}

FeatsList["filtration system"] = {

	name : "Filtration System",

	source : ["UM5R", 159],

	prerequisite : "$850",

	allowDuplicates : false,

	description : "I gain resistance to poison damage as well as advantage to any saving throws against the poisoned condition.",

	dmgres : ["Poison"],

	savetxt : {

		adv_vs : ["poison"]
	},
}

FeatsList["flash caps"] = {

	name : "Flash Caps",

	source : ["UM5R", 159],

	prerequisite : "$850",

	allowDuplicates : false,

	description : "I cannot be blinded or disadvantaged from exposure to light.",

	savetxt : {

		immune : ["blinded"]
	},
}

FeatsList["focused skill implant"] = {

	name : "Focused Skill Implant",

	source : ["UM5R", 160],

	prerequisite : "$3,500",

	allowDuplicates : false,

	description : "I select one skill when I gain this feat; I add double my proficiency modifier to checks with that skill.",
}

FeatsList["gills"] = {

	name : "Gills",

	source : ["UM5R", 160],

	prerequisite : "$2,000",

	allowDuplicates : false,

	description : "These are placed either along my neck or along my torso and allow me to breathe underwater.",
}

FeatsList["implanted computer"] = {

	name : "Implanted Computer",

	source : ["UM5R", 160],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "My memory and skills are digitized within a computer implant. [+2 Intelligence]",

	descriptionFull : "My memory and skills are digitized within a computer implant. My Intelligence is increased by 2. I can purchase this bonus two additional times, though each additional implanted computer costs five times as much as the previous one purchased.",

	improvements : "Implanted Computer: +2 Intelligence;",

	scores : [0, 0, 0, 2, 0, 0],
}

FeatsList["knowledge chip"] = {

	name : "Knowledge Chip",

	source : ["UM5R", 160],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "Implanted knowledge still remains the most popular cybernetic implant, more than any physical augmentation on the market.",

	choices : ['Skill', 'Tool', 'Language'],

	"skill" : {
	
		name : "Knowledge Chip (Skill)",

		description : "I gain proficiency in any one skill.",

		skillstxt : "Select any skill.",
	},

	"tool" : {
	
		name : "Knowledge Chip (Tool)",

		description : "I gain proficiency in any one tool.",

		toolProfs : ["Any tool", 1],
	},

	"language" : {
	
		name : "Knowledge Chip (Language)",

		description : "I gain proficiency in any one language.",

		languageProfs : 1,
	}
}

FeatsList["language translator"] = {

	name : "Language Translator",

	source : ["UM5R", 160],

	prerequisite : "$750",

	allowDuplicates : false,

	description : "This brain implant will translate all languages I hear or read into one I already know. It has difficulty with slang and idiomatic expressions or languages without a sizeable lexicon; I cannot benefit from bonuses or advantage on Charisma checks related to non-routine communication.",
}

FeatsList["lightning fists"] = {

	name : "Lightning Fists",

	source : ["UM5R", 160],

	prerequisite : "$1,000",

	allowDuplicates : false,

	description : "My unarmed melee attacks gain the pincher property, and I can turn any amount of my unarmed damage to lightning damage.",
}

FeatsList["linear frame"] = {

	name : "Linear Frame",

	source : ["UM5R", 160],

	prerequisite : "$25,000",

	allowDuplicates : false,

	description : "Nearly my entire body is replaced with a prosthetic, with only 5 to 45 percent of my original organic form remaining. This new body can look like anything, though most do not stray too far from a binocular/bipedal/upright configuration. The number of configurations is virtually limitless.",

	choices : ['Alpha', 'Beta', 'Delta'],

	"alpha" : {
	
		name : "Alpha Frame",

		description : "My Constitution score increases by 4, as does my maximum for that score. All forced movement is halved. My maximum HP increases by 10 as well as an additional 1 HP per character level in addition to normal level rewards.",

		descriptionFull : "My Constitution score increases by 4, as does my maximum for that score. All forced movement is halved. My maximum HP increases by 10 as well as an additional 1 HP per character level in addition to normal level rewards. When I finish a long rest and ingest some food and drink, I remove two levels of exhaustion. My speed is reduced by 5 feet. If an attack knocks me prone without inflicting another effect, which makes falling unavoidable (like being incapacitated), I can choose to ignore being knocked prone.",

		improvements : "Alpha Frame: +4 Constitution;",

		scores : [0, 0, 4, 0, 0, 0],

		scoresMaximum : [0, 0, "+4", 0, 0, 0],

		speed : {

			allModes : "-5"
		},
	},

	"beta" : {
	
		name : "Beta Frame",

		description : "My Strength score increases by 4, as does my maximum for that score. I'm still a Medium-sized creature, but cannot fit in any advanced armor.",

		descriptionFull : "My Strength score increases by 4, as does my maximum for that score. I'm still a Medium-sized creature, but cannot fit in any advanced armor. My maximum HP increases by 25, plus an additional 1 HP per level. I have advantage with Strength ability checks, and I gain a +2 bonus to melee damage rolls, but not melee attacks.",

		improvements : "Beta Frame: +4 Strength;",

		scores : [4, 0, 0, 0, 0, 0],

		scoresMaximum : [4, 0, 0, 0, 0, 0],

		advantages : [
			["Strength", true]
		],
	},

	"delta" : {
	
		name : "Delta Frame",

		description : "My Dexterity score increases by 4, as does my maximum for that score, I have advantage with Dexterity saving throws and ability checks, and my base walking speed increases by 5 feet.",

		improvements : "Delta Frame: +4 Dexterity;",

		scores : [0, 4, 0, 0, 0, 0],

		scoresMaximum : [0, "+4", 0, 0, 0, 0],

		advantages : [
			["Dexterity", true]
		],

		speed : {

			allModes : "+5"
		},
	}
}

FeatsList["muscle weave"] = {

	name : "Muscle Weave",

	source : ["UM5R", 160],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "A painful procedure, this mesh is interlaced through my muscles to significantly improve my physical attributes. [+2 Strength]",

	descriptionFull : "A painful procedure, this mesh is interlaced through my muscles to significantly improve my physical attributes. My Strength score increases by 2. I can purchase this bonus two additional times, though each additional weave costs five times as much as the previous one purchased.",

	improvements : "Muscle Weave: +2 Strength;",

	scores : [2, 0, 0, 0, 0, 0],
}

FeatsList["nanite injection"] = {

	name : "Nanite Injection",

	source : ["UM5R", 161],

	prerequisite : "$5,000",

	allowDuplicates : false,

	description : "When I finish a long rest, I recover lost HP equal to my Constitution score, and when I roll a Hit Die to recover HP, I recover 1 additional HP.",
}

FeatsList["nasal filter"] = {

	name : "Nasal Filter",

	source : ["UM5R", 161],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "I'm immune to inhaled gas effects and any poisons I need to inhale.",
}

FeatsList["pain implant"] = {

	name : "Pain Implant",

	source : ["UM5R", 161],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : false,

	description : "My body still suffers damage, I'm just able to ignore the effects.",

	choices : ['1st Time', '2nd Time', '3rd Time'],

	"1st time" : {
	
		name : "Pain Implant",

		description : "My maximum HP is increased by 10.",
	},

	"2nd time" : {
	
		name : "Pain Implant",

		description : "My maximum HP is increased by 10 and I have advantage on Constitution saving throws to maintain concentration.",
	},

	"3rd time" : {
	
		name : "Pain Implant",

		description : "My maximum HP is increased by 10 and I have advantage on all Constitution saving throws.",

		advantages : [
			["Constitution", true]
		],
	}
}

FeatsList["palm anchors"] = {

	name : "Palm Anchors",

	source : ["UM5R", 161],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "Hand-installed gravity pads and magnetic hooks bestow a climbing speed of 20 feet.",

	speed : {

		climb : { spd : 20, enc : 0 },
	},
}

FeatsList["power arms"] = {

	name : "Power Arms",

	source : ["UM5R", 161],

	prerequisite : "$5,000",

	allowDuplicates : true,

	description : "Unarmed melee damage using my arms increase by one step (1 > 1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10). Replacing two arms increases the unarmed melee damage by two steps instead.",
}

FeatsList["power eyes"] = {

	name : "Power Eyes",

	source : ["UM5R", 161],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "I do not have disadvantage on attack rolls past normal range.",
}

FeatsList["radar implant"] = {

	name : "Radar Implant",

	source : ["UM5R", 161],

	prerequisite : "$750",

	allowDuplicates : false,

	description : "My Passive Perception increases by 5.",
}

FeatsList["radio communicator"] = {

	name : "Radio Communicator",

	source : ["UM5R", 161],

	prerequisite : "$350",

	allowDuplicates : false,

	description : "As a free action, I can communicate with anyone with a similar implant or any kind of communication device.",

	action : ["action", " (free action)"],
}

FeatsList["remote link"] = {

	name : "Remote Link",

	source : ["UM5R", 161],

	prerequisite : "$250",

	allowDuplicates : true,

	description : "I'm considered occupying the same space as the machine I'm controlling. Each link comes with a controller, so I can only control one item at a time with one link, though I can possess multiple links. Using the item still requires the same action as if I was controlling the item manually.",
}

FeatsList["sensor amplification"] = {

	name : "Sensor Amplification",

	source : ["UM5R", 161],

	prerequisite : "$1,000 (or $5,000 if choosing this feat again)",

	allowDuplicates : true,

	description : "A combination of visual and auditory upgrades, sensor amplifications boost spatial awareness and improve overall sensory input. [+2 Wisdom]",

	descriptionFull : "A combination of visual and auditory upgrades, sensor amplifications boost spatial awareness and improve overall sensory input. My Wisdom score increases by 2. I can purchase this bonus two additional times, though each additional sensor amplification costs five times as much as the previous one purchased.",

	improvements : "Sensor Amplification: +2 Wisdom;",

	scores : [0, 0, 0, 0, 2, 0],
}

FeatsList["speed legs"] = {

	name : "Speed Legs",

	source : ["UM5R", 161],

	prerequisite : "$2,500",

	allowDuplicates : false,

	description : "My movement speed increases by 10 feet.",

	speed : {

		allModes : "+10"
	},
}

FeatsList["thick hide"] = {

	name : "Thick Hide",

	source : ["UM5R", 161],

	prerequisite : "$1,500",

	allowDuplicates : false,

	description : "I gain a natural AC of 15 + my Dexterity modifier. If I wear armor, my AC is the higher of the two values.",
}

FeatsList["vox box"] = {

	name : "VOX Box",

	source : ["UM5R", 161],

	prerequisite : "$1,500",

	allowDuplicates : false,

	description : "I can replicate the voice of someone I have heard perfectly. I have advantage on Deception or Performance checks to pass myself off as that person by voice.",
}

FeatsList["weapon mount"] = {

	name : "Weapon Mount",

	source : ["UM5R", 161],

	prerequisite : "$1,000",

	allowDuplicates : true,

	description : "I gain a subcutaneous weapon embedded in my body, usually in a prosthetic forearm or hand. The weapon extends is visible when in use. This can either be a firearm or a blade.",

	choices : ['Blade', 'Firearm'],

	"blade" : {
	
		name : "Weapon Mount (Blade)",

		description : "I can implant any one-handed melee weapon (within reason). The weapon is concealed in the limb, but the limb's purpose is evident if the limb is exposed. Each limb can only contain one weapon.",
	},

	"firearm" : {
	
		name : "Weapon Mount (Firearm)",

		description : "I can implant any one-handed or non-heavy two-handed small arm under my skin. I cannot be disarmed. Reloading a clip takes an action, and I cannot make the reloading sequence any faster. Extending or retracting the weapon takes no action. Each limb can only contain one weapon. The weapon is concealed in the limb, but the limb's purpose is evident if the limb is exposed.",
	}
}

FeatsList["webbed"] = {

	name : "Webbed",

	source : ["UM5R", 161],

	prerequisite : "$500",

	allowDuplicates : false,

	description : "I gain a swimming speed of 30 feet.",

	speed : {

		swim : { spd : 30, enc : 0 },
	},
}