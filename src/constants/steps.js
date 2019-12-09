import Cat from '../media/cat.gif';
import EvilWizard from '../media/evilwizard.png';
import CatIntoCauldron from '../media/catIntoCauldron.gif';
import CatIntoCauldronWizard from '../media/catIntoCaudronWizard.gif';
import Cauldron from '../media/cauldronOnly.gif'; 
import Wizard from '../media/neutralwizard.gif';
import CatAndBookFall from '../media/catandbook-fall.gif';
import CatAndBookNoBook from '../media/catandbook-no-book.gif';
import CatAndBook from '../media/catandbook.gif';
import AngryCat from '../media/angrycat.gif';
import AngryCat1 from '../media/angrycat1.gif';
import WizardAndCauldron from '../media/wizardAndCauldron.gif';
import WizardRedEyes from '../media/wizardRedEyes.gif';
import WizardRedEyes2 from '../media/wizardRedEyes2.gif';
import WizardFalling from '../media/wizardFalling.gif';
import WizardIntoPigeon from '../media/wizardIntoPigeon.gif';
import WizardRuinedSpell from '../media/wizardRuinedSpell.gif';
import WizardRuinedSpell2 from '../media/wizardRuinedSpell2.png';
import Blank from '../media/blank.png';

import CatAndBookAndExam from '../media/catandbookandexam.gif';
import fadeOut from '../index'

import store from '../store/index'
import { addSteps, doubleTraitor } from "../actions/index";

export const SAMPLE_COORDS = [
  [42.328207, -71.104922],
  [42.328152, -71.104704],
  [42.327905,-71.10495],
  [42.327894, -71.10474],
];

export const SAMPLE_CENTER = [42.327987, -71.104858]
export const SAMPLE_RADIUS = 25;

export let STEPS = {
  0: {
    type: "none",
  },
  1: {
    type: "go-dialog",
    center: [42.337147, -71.090267],
    radius: 57.3024,
    description: "Go to Centennial Common"
  },
  2: {
    type: "audio",
    transcriptions: [
      "WIZARD: Ah! You’ve returned! Wonderful! And uninjured? You’re a tough ol’ cookie aren’t you? Knew I made a good choice... (pause) Now there’s only two things left. You see I need a cat. Very strange little black cat from my dimension. Yes... Oh! And I of course need my spellbook. Can’t cast spells without that, no-sir-ee. Now I’m not sure where that cat got off to, magic’s tricky like that, maybe try cat treats? Cat’s sure like treats...  (pause) RIGHT! The spell book! That’ll be hiding near lots of other books. Maybe a library perhaps? Eh. I have no idea. This world is strange!! Good luck! Your reward is in reach! (pause) I’d better get to the dining hall kitchens to prepare the cauldron…"
    ],
    button: "Next",
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    hiddenDesc: "At this step, the user will hear the wizard talk about the last materials he needs.",
    audioSrc: "https://docs.google.com/uc?export=download&id=1og_uWAz2cbSHS7zgRXkl8ziewuyETgBG"
  },
  3: {
    type: "audio",
    transcriptions: [
      "CAT: He’s gone? Good. Wellllll. Cat’s out of the bag, as they say, hmm? Yes he needs me… The book may answer your questions…"
    ],
    button: "Next",
    imgs: [
      {
        src: Cat,
        startTime: 0,
        endTime: 999, 
      }
    ],
    hiddenDesc: "At this step, the user will hear the cat prompt the user to find the truth.",
    audioSrc: "https://docs.google.com/uc?export=download&id=16XAIFO73LsFuTHHqc_ojVxxFAML2ggBY"
  },
  4: {
    type: "go-dialog",
    center: [42.338400, -71.087921],
    radius: 42.672,
    description: "Find the spellbook. Go where curious minds find books to read.",
  },
  5: {
    type: "audio",
    button: "Open Book",
    imgs: [
      {
        src: CatAndBookNoBook,
        startTime: 0,
        endTime: 5, 
      },
      {
        src: CatAndBookFall,
        startTime: 5,
        endTime: 6, 
      },
      {
        src: CatAndBook,
        startTime: 6,
        endTime: 999, 
      }
    ],
    hiddenDesc: "At this step, the cat will help the user locate the spellbook.",
    audioSrc: "https://docs.google.com/uc?export=download&id=1L1Gq1t0dVb6nRIULEDplsOliV9T9uCJd"
  },
  6: {
    type: "spellbook",
    hiddenDesc: "At this step, the user can read the spellbook.",
  },
  7: {
    type: "audio",
    transcriptions: [
      "CAT: Apologies for not trusting you before. I had to watch and be sure you are not willingly in league with my former host. (pause) You have two options, my friend. Follow the word of the Grand Warlock, act as the catalyst in your world’s destruction. Or. Save the world, turn against him. And don’t try to turn and run. He’ll just find another. There is a reason he was banished specifically here, to a college campus. This is a place void of magic, void of wonder. A single piece of antimagic, the least magical object in your world, a college exam, can destroy his spell and render him permanently powerless. He is a buffoon. He will not notice the addition. That building with the statue of the man and the cat should be a good source. I can practically feel the anti-magic flowing out of that building. It’s your choice."
    ],
    imgs: [
      {
        src: CatAndBook,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Next",
    hiddenDesc: "At this step, the cat explains the truth.",
    audioSrc: "https://docs.google.com/uc?export=download&id=1UAgwIEfO8V1vSLqPNpO3b002OlIeegG8"
  },
  8: {
    type: "choice",
    hiddenDesc: "At this step, the user chooses a major outcome of the game.",
    choices: [
      {
        id: 1,
        buttonText: "Betray the Wizard",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: GOOD_STEPS, type: "GOOD"}));
          fadeOut(props, e);
        },
      },
      {
        id: 2,
        buttonText: "Betray the Cat",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: BAD_STEPS, type: "BAD"}));
          fadeOut(props, e);
        },
      }
    ]
  }
}


export let GOOD_STEPS = {
  9: {
    type: "go-dialog",
    center: [42.337592, -71.090251],
    radius: 29.53,
    description: "Go to Shillman Hall"
  },
  10: {
    type: "audio",
    transcriptions: [
      "CAT: There. A 22% on a final… That should do and I’m sure it won’t be all that missed. We should be ready to head back to the old coot. He’ll never be the wiser."
    ],
    imgs: [
      {
        src: CatAndBookAndExam,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Next",
    hiddenDesc: "At this step, the user will find the exam.",
    audioSrc: "https://docs.google.com/uc?export=download&id=1WA3qSpNBauK8Avzv_Lgd2NVzeLu0PAGM"
  },
  11: {
    type: "go-dialog",
    center: [42.337147, -71.090267],
    radius: 57.3024,
    description: "Go to Centennial Common to reconvene with the Wizard."
  },
  12: {
    type: "audio",
    transcriptions: [
      "WIZARD: Ah! There’s that blasted cat. And my book! Wonderful! You’ve really been such a wonderful help. Give me the cat."
    ],
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    audioSrc: "https://docs.google.com/uc?export=download&id=1TbBMzPzoErJ1PXawx2yX_n87NVy1ub_F",
    button: "Hand Over Cat and Spellbook"
  },
  13: {
    type: "audio-choice",
    transcriptions: [
      "WIZARD: There we go find the right spell… HmmmhahahahahaHAHAHA! Add the tears, and the blood… the snake, the stone, smash the crystal ball in... You fool! You’ve fallen right into my trap. Once I add the cat my power will return and I can take over the world!"
    ],
    audioSrc: "https://docs.google.com/uc?export=download&id=1O3k0o6puunVZYugwLiDE9d-3SJ6gQWaT",
    imgs: [
      {
        src: WizardAndCauldron,
        startTime: 0,
        endTime: 999, 
      }
    ],
    choices: [
      {
        id: 1,
        buttonText: "ADD EXAM TO POTION",
        description: "This will forever disable the wizard's magic.",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: GOOD_FINALE, type: "GOOD_FINALE"}));
          fadeOut(props, e);
        },
      },
      {
        id: 2,
        buttonText: "STEAL THE WIZARD'S MAGIC",
        description: "Push the wizard aside and take the magic for yourself.",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: TRAITOR_STEPS, type: "DOUBLETRAITOR"}));
          store.dispatch(doubleTraitor());
          fadeOut(props, e);
        },
      }
    ]
  }
}

export let BAD_STEPS = {
  9: {
    type: "choice",
    hiddenDesc: "At this step, the user chooses to catnap the cat. ",
    choices: [
      {
        id: 1,
        buttonText: "CATNAP THE CAT",
        buttonFunc: function(e, props) {
          e.preventDefault();
          fadeOut(props, e);
        },
      }
    ]
  },
  10: {
    type: "audio",
    imgs: [
      {
        src: AngryCat1,
        startTime: 0,
        endTime: 1, 
      },
      {
        src: AngryCat,
        startTime: 1,
        endTime: 999, 
      }
    ],
    button: "Next",
    hiddenDesc: "At this step, the user betrays the cat and catnaps them!",
    audioSrc: "https://docs.google.com/uc?export=download&id=1xW8LA1thEf1qa3w3qhKO-7E8lcQBQ14O"
  },
  11: {
    type: "go-dialog",
    center: [42.337147, -71.090267],
    radius: 57.3024,
    description: "Go to Centennial Common to reconvene with the Wizard."
  },
  12: {
    type: "audio",
    transcriptions: [
      "WIZARD: Ah! There’s that blasted cat. And my book! Wonderful! You’ve really been such a wonderful help. Give me the cat."
    ],
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    audioSrc: "https://docs.google.com/uc?export=download&id=1TbBMzPzoErJ1PXawx2yX_n87NVy1ub_F",
    button: "Hand Over Cat and Spellbook"
  },
  13: {
    type: "audio-choice",
    audioSrc: "https://docs.google.com/uc?export=download&id=1O3k0o6puunVZYugwLiDE9d-3SJ6gQWaT",
    transcriptions: [
      "WIZARD: There we go find the right spell… HmmmhahahahahaHAHAHA! Add the tears, and the blood… the snake, the stone, smash the crystal ball in... You fool! You’ve fallen right into my trap. Once I add the cat my power will return and I can take over the world!"
    ],
    imgs: [
      {
        src: WizardAndCauldron,
        startTime: 0,
        endTime: 999,
      }
    ],
    choices: [
      {
        id: 1,
        buttonText: "ALLOW WIZARD TO CONTINUE",
        description: "Let him regain his magic and get your reward.",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: BAD_FINALE, type: "BAD_FINALE"}));
          fadeOut(props, e);
        },
      },
      {
        id: 2,
        buttonText: "STEAL THE WIZARD'S MAGIC",
        description: "Push the wizard aside and take the magic for yourself.",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps({steps: TRAITOR_STEPS, type: "DOUBLETRAITOR"}));
          store.dispatch(doubleTraitor());
          fadeOut(props, e);
        },
      }
    ]
  } 
}


export const TRAITOR_STEPS = {
  14: {
    type: "audio", 
    transcriptions: [
      "WIZARD: Ah! What are you doing?"
    ],
    audioSrc: "https://docs.google.com/uc?export=download&id=13GlmiW-R6ITOPFmJh70DsmAQH0004e2O",
    imgs: [
      {
        src: WizardAndCauldron,
        startTime: 0,
        endTime: 1, 
      },
      {
        src: WizardFalling,
        startTime: 1,
        endTime: 999, 
      }
    ],
    button: "Throw Cat Into Cauldron",
  },
  15: {
    type: "audio",
    transcriptions: [
      "CAT: Unhand me! Stop this!",
      "WIZARD: Nooooo! You traitor! That’s my cat! My magic! You can’t steal my magic!"
    ],
    backgroundFilter: {
      type: "good",
      startTime: 8,
      endTime: 999,
      fadeIn: true,
    },
    audioSrc: "https://docs.google.com/uc?export=download&id=18o59if5IVzi7-BXnJcE6qxaNvE-sN9Qp",
    imgs: [
      {
        src: Cauldron,
        startTime: 0,
        endTime: 3, 
      },
      {
        src: CatIntoCauldron,
        startTime: 4,
        endTime: 6, 
      },
      {
        src: Cauldron,
        startTime: 6,
        endTime: 999, 
      },
    ],
    button: "Turn Wizard into a Pigeon",
  },
  16: {
    type: "audio",
    audioSrc: "https://docs.google.com/uc?export=download&id=1I_dIkRGQEjfg08TJKjmrmHfllP9SqOcQ",
    backgroundFilter: {
      type: "good",
      startTime: 0,
      endTime: 999,
      fadeIn: false,
    },
    imgs: [
      {
        src: EvilWizard,
        startTime: 0,
        endTime: 1, 
      },
      {
        src: WizardIntoPigeon,
        startTime: 1,
        endTime: 999, 
      }
    ],
    button: "Become the World's Most Powerful Wizard"
  },
  17: {
    type: "text",
    title: "You're Now a Wizard!",
    subtitle: "Unfortunately, despite suddenly being the most powerful wizard of all time, you still have classes to take..."
  }
};

export const GOOD_FINALE = {
  14: {
    type: "audio", 
    audioSrc: "https://docs.google.com/uc?export=download&id=1ohvG9l9xERrY2tKXJaeavV1TpjImQuTg",
    backgroundFilter: {
      type: "none",
      startTime: 0.5,
      endTime: 999,
      fadeIn: false,
    },
    transcriptions: [
      "WIZARD: What? What did you just row inthrow?? A FINAL EXAMINATION??? 22%???? DID THEY STUDY AT ALL??? What’s happening? Wait! No! My magic! What did you do!?",
      "CAT: The least magical thing in existence, yes. We sabotaged the spell you fool. You’ll never hurt another soul with you magic permanently damaged. And I? I’ll be free to wander… bound to you no more.",
      "WIZARD: My magic! Nooo!"
    ],
    imgs: [
      {
        src: WizardAndCauldron,
        startTime: 0,
        endTime: .2, 
      },
      {
        src: WizardRuinedSpell,
        startTime: 0,
        endTime: 2, 
      },
      {
        src: WizardAndCauldron,
        startTime: 2,
        endTime: 17, 
      },
      {
        src: Cat,
        startTime: 17,
        endTime: 33, 
      },
      {
        src: Wizard,
        startTime: 33,
        endTime: 41, 
      },
      {
        src: Blank,
        startTime: 41,
        endTime: 999, 
      }

    ],
    button: "Set the Cat Free",
  },
  15: {
    type: "text",
    title: "You Saved the World!",
    subtitle: "You've completed the game, which means the cat is free to wander as he pleases—and you're free to study for your exams!"
  }
};

export const BAD_FINALE = {
  14: {
    backgroundFilter: "badMagic", 
    type: "audio", 
    backgroundFilter: {
      type: "bad",
      startTime: 9,
      endTime: 999,
      fadeIn: true,
    },
    transcriptions: [
      "CAT: Unhand me! Stop this!",
      "WIZARD: With my power returned I can take over the world! AhaAHAHAHAHA! You’ve brought the end of mankind, little college student. And since I promised you a reward...here’s yours: the end of your miserable academic life!"
    ],
    audioSrc: "https://docs.google.com/uc?export=download&id=1A41bt1lw1w2u_clAN0NQG5NOP0ofhv4z",
    imgs: [
      {
        src: WizardAndCauldron,
        startTime: 0,
        endTime: 3, 
      },
      {
        src: CatIntoCauldronWizard,
        startTime: 3,
        endTime: 5, 
      },
      {
        src: WizardAndCauldron,
        startTime: 5,
        endTime: 18, 
      },
      {
        src: WizardRedEyes,
        startTime: 18,
        endTime: 20, 
      },
      {
        src: WizardRedEyes2,
        startTime: 20,
        endTime: 41, 
      },
      {
        src: Blank,
        startTime: 41,
        endTime: 999, 
      },
    ],
    button: "Enter the Afterlife",
  },
  15: {
    type: "text",
    title: "You died.",
    subtitle: "But at least you won't have to take exams, right?"
  }
};