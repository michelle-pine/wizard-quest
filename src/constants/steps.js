import Cat from '../media/cat.png';
import EvilWizard from '../media/evilwizard.png';
import Wizard from '../media/neutralwizard.png';
import Book from '../media/book-filler.png';
import CatAndBook from '../media/catandbook.png';
import AngryCat from '../media/angrycat.png';
import CatAndBookAndExam from '../media/catandbookandexam.png';
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
        src: CatAndBook,
        startTime: 0,
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
    center: [42.337599, -71.090301],
    radius: 28.53,
    description: "Go to Shillman Hall"
  },
  10: {
    type: "audio",
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
    imgs: [
      {
        src: EvilWizard,
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
        src: AngryCat,
        startTime: 0,
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
    imgs: [
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
    audioSrc: "https://docs.google.com/uc?export=download&id=13GlmiW-R6ITOPFmJh70DsmAQH0004e2O",
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Throw Cat Into Cauldron",
  },
  15: {
    type: "audio", 
    audioSrc: "https://docs.google.com/uc?export=download&id=18o59if5IVzi7-BXnJcE6qxaNvE-sN9Qp",
    imgs: [
      {
        src: Cat,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Turn Wizard into a Pigeon",
  },
  16: {
    type: "audio",
    audioSrc: "https://docs.google.com/uc?export=download&id=1I_dIkRGQEjfg08TJKjmrmHfllP9SqOcQ",
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Become the World's Most Powerful Wizard"
  }
};

export const GOOD_FINALE = {
  14: {
    type: "audio", 
    audioSrc: "https://docs.google.com/uc?export=download&id=1ohvG9l9xERrY2tKXJaeavV1TpjImQuTg",
    imgs: [
      {
        src: Wizard,
        startTime: 0,
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
        endTime: 999, 
      }

    ],
    button: "Set the Cat Free",
  },
};

export const BAD_FINALE = {
  14: {
    type: "audio", 
    audioSrc: "https://docs.google.com/uc?export=download&id=1A41bt1lw1w2u_clAN0NQG5NOP0ofhv4z",
    imgs: [
      {
        src: Wizard,
        startTime: 0,
        endTime: 999, 
      }
    ],
    button: "Enter the Afterlife",
  },
};