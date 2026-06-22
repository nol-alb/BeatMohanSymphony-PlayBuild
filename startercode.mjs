export const test22 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.6)

// follow the visuals and the text below
hihat: s("hh hh hh hh hh hh hh hh")
`;
export const test26 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.6)

// add more hh so mohan can make it to the flag
hihat: s("hh hh hh hh hh hh hh hh")
`;
export const test29 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)

// change ~ to sd to collect the coins
snare: s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
`;
export const test27 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.35)

// change ~ to bd to pick up a coin
kick: s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
// change ~ to sd to pick up a coin
snare: s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
`;
export const test28 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)

// change ~ to hh to pick up a coin
hihat: s("hh hh ~ ~ hh hh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
// change ~ to ho to pick up a coin
openhat: s("~ ~ ho ~ ~ ~ ho ~ ~ ~ ~ ~ ~ ~ ~ ~")
`;
export const test30 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)

// change ~ to hh to pick up a coin
hihat: s("hh hh ~ ~ hh hh ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
// change ~ to ho to pick up a coin
openhat: s("~ ~ ho ~ ~ ~ ho ~ ~ ~ ~ ~ ~ ~ ~ ~")
// change ~ to sd to pick up a coin
snare: s("~ ~ sd ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ ~ ~")
// change ~ to bd to pick up a coing
kick: s("bd ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
`;
export const test31 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)

hihat: s("hh!2 ~!2 hh!2 ~!2 hh!2 ~!2 hh!2 ~!2")
openhat: s("~!2 ho ~!3 ho ~!3 ho ~!3 ho ~")
snare: s("sd ~!2 sd ~!2 sd ~!3 sd ~ sd ~!3")
kick: s("bd ~!3 bd ~!3 bd ~!3 bd ~!3 ")
`;

export const test32 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)
// fix everything that's breaking this beat
hihat: s("hh!2 ~!2 hh!2 ~!2 hh!2 ~!2 hh!2 ~!2")
snare: s("sd ~!2 sd ~!2 sd ~!3 sd ~ sd ~!3")
kick: s("bd ~!3 bd ~!3 bd ~!3 bd ~!3 ")
`;
export const test33 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.45)

//hihat: s("hh!2 ~!2 hh!2 ~!2 hh!2 ~!2 hh!2 ~!2")
//snare: s("rm:2 ~!2 rm:2 ~!2 rm:2 ~!3 rm:2 ~ rm:2 ~!3").distort('3').crush(1).bp(500).room(0.01)
//kick: s("bd ~!3 bd ~!3 bd ~!3 bd ~!3 ")
//openhat: s("[~!2 ho ~]!4")
//congas: s("808mc 808lc ~!14")
//crash: s("~!15 cc")
//
//
//
//
//
//synth: s("triangle*4").decay(0.5).n(irand(12)).scale('C minor').room(1).roomsize(10)
//synth2: note("<c2 ab2 bb2 f2>").s("supersaw").lpf(tri.range(100, 5000).slow(6)) `;

export const test23 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.6)

// change a bd below to '~' to quietly avoid the lava-lion
kick: s("bd ~ bd ~ bd bd bd ~")
`;
export const test24 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.48)

// change a bd below to '~' to quietly avoid the lava-lion
kick: s("bd ~ bd ~ bd bd bd ~")
hihat: s("~ hh ~ hh ~ hh ~ hh")
`;
export const test25 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.48)

// 
hihat: s("~ hh ~ hh ~ hh ~ hh")
kick: s("bd ~ bd ~ bd ~ bd ~")
// change ~ to sd to pick up the remaining coins
snare: s("~ ~ ~ ~ ~ ~ ~ ~")
`;

export const fourlayer_beat = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
setcps(0.7)

// Fix all the layers and reveal the beat

hihat: s("~ ~ hh ~ ~ hh ~ ~ ~ ~ hh ~ ~ hh ~ ~")
snare: s("sd ~ ~ sd ~ sd ~ ~ sd ~ ~ sd ~ sd ~ ~")
kick: s("~ bd ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~")

`;

export const bass_eighths_pattern1 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
//Try changing the value inside the setcps argument, hear what happens 
setcps(0.3)

kick: s("bd bd ~ bd bd ~ bd bd")
`;

export const bass_eighths_pattern2 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
//Try changing the value inside the setcps argument, hear what happens 
setcps(0.3)
// Try changing one of the bd's into '~' in the code below
kick: s("bd bd ~ bd bd bd bd bd")
`;

export const bass_eighths_pattern3 = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
//Try changing the value inside the setcps argument, hear what happens 
setcps(0.3)

kick: s("bd ~ ~ bd bd ~ bd ~")
`;

export const bass_eighths_empty = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcps(0.3)
// Start with one bd at a time
kick: s("")
`;

export const snare_eighths = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcps(0.3)

snare: s("sd sd sd sd sd sd sd sd")
`;


export const snare_eighths_empty = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcps(0.3)
// Remember that the snare sound uses sd, try one snare at a time
snare: s("")
`;

export const long_level = `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcps(0.3)
// Try changing the number in here and see what happens, keep increasing it until you reach the goal
snare: s("sd!3")
`;
