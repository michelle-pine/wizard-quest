import Cat from '../media/cat.png';
import EvilWizard from '../media/evilwizard.png';
import Wizard from '../media/neutralwizard.png';
import Book from '../media/book-filler.png';
import CatAndBook from '../media/catandbook.png';

export const SAMPLE_COORDS = [
  [42.328207, -71.104922],
  [42.328152, -71.104704],
  [42.327905,-71.10495],
  [42.327894, -71.10474],
];

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
    boundingBox: SAMPLE_COORDS,
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
    boundingBox: SAMPLE_COORDS,
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
  }
}


export let GOOD_STEPS = {

}

export let BAD_STEPS = {

}
