export const SAMPLE_COORDS = [
  [42.328172, -71.104920],
  [42.328143, -71.104711],
  [42.327913, -71.104949],
  [42.327892, -71.104737],
];

export let STEPS = {
  0: {
    type: "none",
  },
  1: {
    type: "go-dialog",
    boundingBox: [
      [42.337338,-71.090977],
      [42.337559, -71.089741],
      [42.336825, -71.091075],
      [42.337030, -71.089838],
    ],
    //boundingBox: SAMPLE_COORDS,
    description: "Go to Centennial Common"
  },
  2: {
    type: "audio",
    button: "Next",
    hiddenDesc: "At this step, the user will hear the wizard talk about the last materials he needs. Once the wizard departs, the cat will leave and ask the user to go to Snell.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  3: {
    type: "go-dialog",
    boundingBox: [
      [42.338614, -71.088452],
      [42.338785, -71.087862],
      [42.338551, -71.087648],
      [42.338599, -71.087487],
      [42.338444, -71.087380],
      [42.337921, -71.088206],
      [42.337921, -71.088206],
    ],
    // boundingBox: SAMPLE_COORDS,
    description: "Find the spellbook. Go where curious minds find books to read.",
  },
  4: {
    type: "audio",
    button: "Open Book",
    hiddenDesc: "At this step, the cat will help the user locate the spellbook.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  5: {
    type: "spellbook",
    hiddenDesc: "At this step, the user can read the spellbook.",
  },
  6: {
    type: "audio",
    button: "Next",
    hiddenDesc: "At this step, the cat explains the truth.",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  }
}


export let GOOD_STEPS = {

}

export let BAD_STEPS = {

}
