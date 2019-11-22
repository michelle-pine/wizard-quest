export const SAMPLE_COORDS = [
  [42.328172, -71.104920],
  [42.328143, -71.104711],
  [42.327913, -71.104949],
  [42.327892, -71.104737],
];

export const STEPS = {
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
    // boundingBox: SAMPLE_COORDS,
    description: "Go to Centennial Common"
  },
  2: {
    type: "audio",
    button: "Next",
    audioSrc: "https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  },
  3: {
    type: ""
  }
}

