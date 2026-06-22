import  * as starter from "./startercode.mjs"

export const levels = [
{
  start: starter.test22,
  answer: ["hh","hh","hh","hh","hh","hh","hh","hh"],
  img: [
    {
      assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/flag.png', type: 'flag' },
      ],
    },
  ],
  text: "The goal is to reach the flag and collect all the coins. Press 'Play' watch Mohan jump, pay close attention to the highlight in the code below "
},
{
  start: starter.test23,
  answer: ["bd","~","bd","~","bd","~","bd","~"],
  img: [
    {
      assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag' },
        { src: './assets/lava.png', type: 'flag', hidden: false },
      ],
    },
  ],
  text: "Mohan needs to quietly avoid the lava-lion to make it to their goal, count up the bd's and ~'s and compare it to the boxes excluding the one with the instrument"
},
{
    start: starter.test24,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "hh", "~", "hh", "~", "hh", "~", "hh"],    // Snare pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: false },
      ],
      },
      {
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },

      ],
}

    ],
    text: "Mohan usually get's a little parallel help to make a beat"
  },
  {
    start: starter.test25,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "hh", "~", "hh", "~", "hh", "~", "hh"],    // Snare pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: false },
      ],
      },
      {
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },

      ],
      },
      {
   // Bass drum row
        assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },

      ],
      }

    ],
    text: "Make sure you collect all the coins and solve the third layer to hear a familiar beat"
  },
  {
  start: starter.test26,
  answer: ["hh","hh","hh","hh","hh","hh","hh","hh"],
  img: [
    {
      assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/flag.png', type: 'flag' },
      ],
    },
  ],
  text: "Mohan needs to take longer paths, but they make the journey more interesting"
},
{
  start: starter.test27,
  answer: ["hh","hh","hh","hh","hh","hh","hh","hh"],
  img: [
    {
      assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
    {
      assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
  ],
  text: "Mohan needs to take longer paths, but they make the journey more interesting"
},

{
    start: starter.fourlayer_beat,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"] //clap pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava' },
      ],
      },
      {
        // Snare drum row
        assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],

  },

{
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
}

    ],
    text: "The goal is to collect all the coints and help Mohan find and reach the flag tile."
  },
  {
    start: starter.test28,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"] //clap pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: true }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true }, // Add hidden property
        { src: './assets/flag.png', type: 'flag', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
      ],
      },
      {
        // Snare drum row
        assets: [
        { src: './assets/openhat.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
      ],

  },

    ],
    text: "The grooves that Mohan likes to jump on the most are often the ones that repeat patterns, can you figure this out?"
  },
  {
  start: starter.test29,
  answer: ["sd ~ ~ sd ~ ~ sd ~ ~ ~ sd ~ sd ~ ~"],
  img: [
    {
      assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
  ],
  text: "Sometimes the most sparse and unpredictable jumps leads to dancing"
},
{
    start: starter.test30,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"] //clap pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: true }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
      ],
      },
      {
        // Snare drum row
        assets: [
        { src: './assets/openhat.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/flag.png', type: 'flag', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
      ],

  },
  {
      assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
    {
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/lava.png', type: 'lava', hidden: true },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
},


    ],
    text: "Then you put them all on top of each other and watch Mohan dance"
  },
  {
    start: starter.test31,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"] //clap pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
      },
      {
        // Snare drum row
        assets: [
        { src: './assets/openhat.png', type: 'instrument' },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],

  },
  {
      assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
    {
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
},


    ],
    text: "As you may have noticed already, so much about Mohan's jumping is based on counting, look at what's different with the code"
  },
    {
    start: starter.test32,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"] //clap pattern
    ],
    img: [
      {
        // Openhat drum row
        assets: [
        { src: './assets/hihat.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/coin.png', type: 'coin', hidden: false },

      ],
      },
  {
      assets: [
        { src: './assets/snare.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
      ],
    },
    {
   // Bass drum row
        assets: [
        { src: './assets/kick.png', type: 'instrument' },
        { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/coin.png', type: 'coin', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/lava.png', type: 'lava', hidden: false },
        { src: './assets/flag.png', type: 'flag', hidden: false },
      ],
},


    ],
    text: "Fix the code, collect the coins, dance to the rhythm"
  },


    // {
    //     start: starter.bass_eighths,
    //     answer: ["bd", "bd", "bd", "bd", "bd", "bd", "bd", "bd"],
    //     img: [

    //         {
    //             assets: [
    //                 { src: './assets/kick.png', type: 'instrument' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //             ],
    //         },
    //     ],
    //     text: "Here is where you control Mohan, Mohan hops to the beat! Press play and pay attention to the code below"
    // },

    // {
    //     start: starter.bass_eighths,
    //     answer: ["bd", "bd", "bd", "bd", "bd", "bd", "bd", "bd"],
    //     img: [

    //         {
    //             assets: [
    //                 { src: './assets/kick.png', type: 'instrument' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/flag.png', type: 'flag' },
    //             ],
    //         },
    //     ],
    //     text: "The goal is to help Mohan reach the flag tile."
    // },

    // {
    //     start: starter.bass_eighths,
    //     answer: ["bd", "bd", "bd", "bd", "bd", "bd", "bd", "bd"],
    //     img: [

    //         {
    //             assets: [
    //                 { src: './assets/kick.png', type: 'instrument' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/flag.png', type: 'flag' },
    //             ],
    //         },
    //     ],
    //     text: "Mohan hops to the bass drum when the code uses \"bd\"."
    // },

    // {
    //     start: starter.snare_eighths,
    //     answer: ["sn", "sn", "sn", "sn", "sn", "sn", "sn", "sn"],
    //     img: [

    //         {
    //             assets: [
    //                 { src: './assets/snare.png', type: 'instrument' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/coin.png', type: 'coin' },
    //                 { src: './assets/flag.png', type: 'flag' },
    //             ],
    //         },
    //     ],
    //     text: "Mohan can also hop to the snare drum when the code uses \"sd\"."
    // },

    // {
    //     start: starter.bass_eighths_pattern1,
    //     answer: ["bd","bd", "~", "bd", "bd", "~", "bd", "bd"],
    //     img: [

    //         {
    //           assets: [
    //             { src: './assets/kick.png', type: 'instrument' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/flag.png', type: 'flag' },
    //           ],
    //         },
    //       ],
    //     text: "Mohan doesn't want to get eaten by the lion, so he sneaks past using ~ instead of hopping."
    //   },

    //   {
    //     start: starter.bass_eighths_pattern2,
    //     answer: ["bd", "bd", "~", "bd", "bd", "bd", "~", "bd"],
    //     img: [

    //         {
    //           assets: [
    //             { src: './assets/kick.png', type: 'icon' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/flag.png', type: 'flag' },
    //           ],
    //         },
    //       ],
    //     text: "Uh oh, don't let Mohan fall in the lava! Can you change the beat to save him?"
    // },

    // {
    //     start: starter.bass_eighths_pattern3,
    //     answer: ["~", "bd", "~", "bd", "bd", "~", "bd", "bd"],
    //     img: [

    //         {
    //           assets: [
    //             { src: './assets/kick.png', type: 'icon' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/flag.png', type: 'flag' },
    //           ],
    //         },
    //       ],
    //     text: "Change the beat to save Mohan!"
    // },

    // {
    //     start: starter.bass_eighths_empty,
    //     answer: ["bd", "~", "bd", "~", "bd", "bd", "~", "bd"],
    //     img: [

    //         {
    //           assets: [
    //             { src: './assets/kick.png', type: 'icon' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/flag.png', type: 'flag' },
    //           ],
    //         },
    //       ],
    //     text: "Can you fill in the beat to get Mohan to the goal?"
    // },

    // {
    //     start: starter.snare_eighths_empty,
    //     answer: ["sd", "sd", "~", "~", "sd", "~", "~", "sd"],
    //     img: [

    //         {
    //           assets: [
    //             { src: './assets/snare.png', type: 'icon' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/coin.png', type: 'coin' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/lava.png', type: 'lava' },
    //             { src: './assets/flag.png', type: 'flag' },
    //           ],
    //         },
    //       ],
    //     text: "Try again, but this time use the snare."
    // },

  //   {
  //     start: starter.long_level,
  //     answer: ["sd", "sd", "sd", "sd", "sd", "sd", "sd", "sd", "sd"],
  //     img: [

  //         {
  //           assets: [
  //             { src: './assets/snare.png', type: 'icon' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/coin.png', type: 'coin' },
  //             { src: './assets/flag.png', type: 'flag' },
  //           ],
  //         },
  //       ],
  //     text: "Let's learn another representation"
  // },
  {
    start: starter.test33,
    answer: [
      ["bd", "~", "bd", "~", "bd", "~", "bd", "~"],  // Bass drum pattern
      ["~", "~", "sd", "~", "~", "~", "sd", "~"],    // Snare pattern
      ["hh", "hh", "hh", "hh", "hh", "hh", "hh", "hh"], // Hi-hat pattern
      ["cp", "~", "~", "~", "~", "cp", "cp", "cp"],  // Clap pattern
      ["lt", "~", "lt", "~", "lt", "~", "lt", "~"],  // Low tom pattern
      ["ht", "~", "~", "ht", "~", "~", "ht", "~"],   // High tom pattern
      ["rd", "~", "rd", "~", "rd", "~", "rd", "~"],  // Ride pattern
      ["cr", "~", "~", "~", "cr", "~", "~", "~"]     // Crash pattern
    ],
    img: [
      {
        // Crash cymbal row with flag at the end
        assets: [
          { src: './assets/crash.png', type: 'instrument' },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/flag.png', type: 'flag', hidden: false }
        ]
      },
      {
        // Low tom row
        assets: [
          { src: './assets/conga.png', type: 'instrument' },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false }
        ]
      },
      {
        // Openhat drum row
        assets: [
          { src: './assets/openhat.png', type: 'instrument' },
          { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
          {src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
          { src: './assets/lava.png', type: 'lava', hidden: false },
          {src: './assets/lava.png', type: 'lava', hidden: false }, // Add hidden property
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }, // Add hidden property
          { src: './assets/coin.png', type: 'coin', hidden: false },

        ],
      },
      {
        // Hi-hat row
        assets: [
          { src: './assets/hihat.png', type: 'instrument' },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }
        ]
      },
      {
        // Snare row
        assets: [
          { src: './assets/snare.png', type: 'instrument' },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false }
        ]
      },
      {
        // Bass drum row
        assets: [
          { src: './assets/kick.png', type: 'instrument' },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false },
          { src: './assets/lava.png', type: 'lava', hidden: false },
          { src: './assets/coin.png', type: 'coin', hidden: false }
        ]
      },
    ],
    text: ""
  },

]




