import Cat from '../media/cat.png';
import EvilWizard from '../media/evilwizard.png';
import Wizard from '../media/neutralwizard.png';
import Book from '../media/book-filler.png';
import CatAndBook from '../media/catandbook.png';
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
    // boundingBox: [
    //   [42.337338,-71.090977],
    //   [42.337559, -71.089741],
    //   [42.336825, -71.091075],
    //   [42.337030, -71.089838],
    // ],
    center: [42.337147, -71.090267],
    radius: 57.3024,
    // radius: SAMPLE_RADIUS, 
    // center: SAMPLE_CENTER,
    // boundingBox: SAMPLE_COORDS,
    description: "Go to Centennial Common"
  },
  2: {
    type: "audio",
    button: "Next",
    img: Wizard,
    hiddenDesc: "At this step, the user will hear the wizard talk about the last materials he needs.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  3: {
    type: "audio",
    button: "Next",
    img: Cat,
    hiddenDesc: "At this step, the user will hear the cat prompt the user to find the truth.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  4: {
    type: "go-dialog",
    // boundingBox: [
    //   [42.338614, -71.088452],
    //   [42.338785, -71.087862],
    //   [42.338551, -71.087648],
    //   [42.338599, -71.087487],
    //   [42.338444, -71.087380],
    //   [42.337921, -71.088206],
    //   [42.337921, -71.088206],
    // ],
    center: [42.338400, -71.087921],
    radius: 42.672,
    // radius: SAMPLE_RADIUS, 
    // center: SAMPLE_CENTER,
    // boundingBox: SAMPLE_COORDS,
    description: "Find the spellbook. Go where curious minds find books to read.",
  },
  5: {
    type: "audio",
    button: "Open Book",
    img: CatAndBook,
    hiddenDesc: "At this step, the cat will help the user locate the spellbook.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  6: {
    type: "spellbook",
    hiddenDesc: "At this step, the user can read the spellbook.",
  },
  7: {
    type: "audio",
    img: CatAndBook,
    button: "Next",
    hiddenDesc: "At this step, the cat explains the truth.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
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
          store.dispatch(addSteps(GOOD_STEPS));
          fadeOut(props, e);
        },
      },
      {
        id: 2,
        buttonText: "Betray the Cat",
        buttonFunc: function(e, props) {
          e.preventDefault();
          store.dispatch(addSteps(BAD_STEPS));
          fadeOut(props, e);
        },
      }
    ]
  }
}


export let GOOD_STEPS = {
  9: {
    type: "audio",
    img: CatAndBook,
    button: "Next",
    hiddenDesc: "At this step, the cat explains how to defeat the wizard.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  10: {
    type: "go-dialog",
    // boundingBox: [
    //   [42.337338,-71.090977],
    //   [42.337559, -71.089741],
    //   [42.336825, -71.091075],
    //   [42.337030, -71.089838],
    // ],
    center: [42.337599, -71.090301],
    radius: 28.53,
    // radius: SAMPLE_RADIUS, 
    // center: SAMPLE_CENTER,
    // boundingBox: SAMPLE_COORDS,
    description: "Go to Shillman Hall"
  },
  11: {
    type: "audio",
    img: CatAndBookAndExam,
    button: "Next",
    hiddenDesc: "At this step, the user will find the exam.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  12: {
    type: "go-dialog",
    // boundingBox: [
    //   [42.337338,-71.090977],
    //   [42.337559, -71.089741],
    //   [42.336825, -71.091075],
    //   [42.337030, -71.089838],
    // ],
    center: [42.337147, -71.090267],
    radius: 57.3024,
    // radius: SAMPLE_RADIUS, 
    // center: SAMPLE_CENTER,
    // boundingBox: SAMPLE_COORDS,
    description: "Go to Centennial Common to reconvene with the Wizard."
  },
  13: {
    img: Wizard,
    type: "audio-event",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3",
    events: [
      {
        startTime: 10, 
        buttonText: "Hand Over Cat and Spellbook", 
        endTime: 20,
        traitorTimeline: false,
        buttonFunc: function(e) {
          this.setState({giveItems: true})
        },
      },
      {
        startTime: 20, 
        buttonText: "Betray Wizard and Cat", 
        description: "If you proceed down this path, you may steal the wizard's magic for yourself.",
        endTime: 30,
        traitorTimeline: false,
        buttonFunc: function(e) {
          e.preventDefault();
          store.dispatch(doubleTraitor());
        },
      },
      {
        startTime: 20,
        buttonText: "Add Exam to Potion",
        description: "Ruin the wizard's magic spell by adding the failed exam!",
        endTime: 30,
        traitorTimeline: false,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({examAdded: true});
        },
      },
      {
        startTime: 30, 
        buttonText: "Throw Cat Into Cauldron", 
        description: "Take the Cat's magic for yourself!",
        endTime: 40,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({catThrown: true});
        },
      },
      {
        startTime: 40, 
        buttonText: "Steal the Wizard’s Magic!",
        description: "Drink from the cauldron and complete the spell!", 
        endTime: 50,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({magicStolen: true});
        },
      },
      {
        startTime: 60, 
        buttonText: "Turn the Wizard into a Pigeon", 
        description: "This way, he can't bother you anymore.",
        endTime: 70,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({pigeon: true});
        },
      },
    ]
  }

}

export let BAD_STEPS = {
  9: {
    type: "audio",
    img: CatAndBook,
    button: "Next",
    hiddenDesc: "At this step, the user betrays the cat and catnaps them!",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  10: {
    type: "go-dialog",
    // boundingBox: [
    //   [42.337338,-71.090977],
    //   [42.337559, -71.089741],
    //   [42.336825, -71.091075],
    //   [42.337030, -71.089838],
    // ],
    center: [42.337147, -71.090267],
    radius: 57.3024,
    // radius: SAMPLE_RADIUS, 
    // center: SAMPLE_CENTER,
    // boundingBox: SAMPLE_COORDS,
    description: "Go to Centennial Common to reconvene with the Wizard."
  },
  11: {
    type: "audio-event",
    img: Wizard,
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3",
    events: [
      {
        startTime: 10, 
        buttonText: "Hand Over Cat and Spellbook", 
        endTime: 20,
        traitorTimeline: false,
        buttonFunc: function(e) {
          this.setState({giveItems: true})
        },
      },
      {
        startTime: 20, 
        buttonText: "Betray Wizard and Cat", 
        description: "If you proceed down this path, you may steal the wizard's magic for yourself.",
        endTime: 30,
        traitorTimeline: false,
        buttonFunc: function(e) {
          e.preventDefault();
          store.dispatch(doubleTraitor());
        },
      },
      {
        startTime: 30, 
        buttonText: "Throw Cat Into Cauldron", 
        description: "Take the Cat's magic for yourself!",
        endTime: 40,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({catThrown: true});
        },
      },
      {
        startTime: 40, 
        buttonText: "Steal the Wizard’s Magic!",
        description: "Drink from the cauldron and complete the spell!", 
        endTime: 50,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({magicStolen: true});
        },
      },
      {
        startTime: 60, 
        buttonText: "Turn the Wizard into a Pigeon", 
        description: "This way, he can't bother you anymore.",
        endTime: 70,
        traitorTimeline: true,
        buttonFunc: function(e) {
          e.preventDefault();
          this.setState({pigeon: true});
        },
      },
    ]
  }
}
