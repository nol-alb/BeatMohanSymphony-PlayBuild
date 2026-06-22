import { getDrawContext, Drawer } from './draw.js';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import {createSuccessSound, createFailureSound} from './audioProcesses.js'
import {initCanvas, drawStaticUI, animateCharacter} from './animation.js';
import {getPatternEvents,getPatternStructure, loadLevel, drawer} from './strudelprocess.js'
import { levels } from './levels.js';

let gameCompletions = [];
let deathsThisLevel = 0; // Track deaths for current level

window.totalLives = 3;
window.livesRemaining = totalLives;
window.deathsThisLevel = 0;

let level_count=0
let editor = loadLevel(levels[level_count].start, level_count);

function createProgressBar() {
  const progressBar = document.getElementById('progressBar');
  progressBar.innerHTML = '';

  const segmentWidth = Math.max(16, 32 - levels.length * 2);

  for (let i = 0; i < levels.length; i++) {
    const segment = document.createElement('div');
    segment.style.cssText = `
      display: inline-block;
      width: ${segmentWidth}px;
      height: 15px;
      background-color: ${i <= level_count ? '#4CAF50' : '#e0e0e0'};
      border: 2px solid #000;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      box-shadow: 
        inset -1px -1px 0 rgba(0,0,0,0.3),
        inset 1px 1px 0 rgba(255,255,255,0.3);
    `;
    segment.id = `progress-segment-${i}`;
    progressBar.appendChild(segment);
  }
}

function updateProgressBar() {
  for (let i = 0; i < levels.length; i++) {
    const segment = document.getElementById(`progress-segment-${i}`);
    segment.style.backgroundColor = i <= level_count ? '#4CAF50' : '#e0e0e0';
  }
}


createProgressBar();
createCoinCounter();
createLifeCounter();

const shouldAnimate = { flag: true };


    // Add this function before your config
    function calculateConfig(level) {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight * 0.6; // Use 60% of viewport height

    const rowCount = level.img.length;
    const tilesPerRow = Math.max(...level.img.map(row => row.assets.length)); // Find longest row

    // Calculate tile size based on available space
    const spacing = 10;
    const horizontalPadding = 100; // Leave some margin on sides
    const availableWidth = canvasWidth - horizontalPadding;

    const tileSize = Math.min(
        Math.floor((availableWidth - (spacing * (tilesPerRow - 1))) / tilesPerRow),
        80 // Max tile size for readability
    );

    // Calculate total width of tiles + spacing
    const totalTilesWidth = (tileSize * tilesPerRow) + (spacing * (tilesPerRow - 1));

    // Center horizontally
    const startX = (canvasWidth - totalTilesWidth) / 2;

// FIX: Handle single row case
    let rowSpacing = 10; // Default spacing
    if (rowCount > 1) {
        const verticalPadding = 40;
        const availableHeight = canvasHeight - verticalPadding;
        rowSpacing = Math.max(
            10,
            Math.floor(10,(availableHeight - (tileSize * rowCount)) / (rowCount - 1))
        );
    }

    return {
        canvasId: 'uiCanvas',
        tileSize: tileSize,
        spacing: spacing,
        rowSpacing: rowSpacing,
        startX: startX,
        startY: 20,
        characterAsset: { src: './assets/character.png' },
    };
    }

    // Replace your static config with this:
    let config = calculateConfig(levels[level_count]);
    let ctx = initCanvas(config, levels[level_count].img.length);

// Wrap initial load in async function
(async () => {
    await drawStaticUI(ctx, config, levels[level_count].img);
    updateCoinCounter(levels[level_count]);
    updateLifeCounter();
    console.log('Initial level loaded');
})();


let patternInfo = null;

document.getElementById('play').addEventListener('click', async () => {
    shouldAnimate.flag = false;
    //editor.stop();
    // drawer.stop();
    await editor.evaluate();
    //const typePattern = levels[level_count].answer;
    const pattern = editor.repl.scheduler.pattern;
        //Calculating the patternLength
    const stepsInCycle = pattern.tactus
    //Expected length
    const typePattern = levels[level_count].answer;
    console.log("How many steps", typePattern.length);

    const structure = getPatternStructure(pattern);

        //toFixed -- fixed point notation
    structure.forEach(pos => {
        if (pos.type === 'sound') {
            console.log(`Position ${pos.index}: ${pos.sound} at phase ${pos.phase.toFixed(3)}`);
        } else {
            console.log(`Position ${pos.index}: Silence at phase ${pos.phase.toFixed(3)}`);
        }
    });
        // Ensure scheduler is available
        if (!editor.repl.scheduler) {
          console.error('Scheduler is undefined after evaluate');
          return;
        }

       patternInfo = getPatternEvents(editor.repl.scheduler.pattern.queryArc(0, 1));
        //console.log('Pattern Structure:', patternInfo);

        // Start Drawer with scheduler
        console.log('Scheduler initialized:', editor.repl.scheduler);
        // drawer.start(editor.repl.scheduler);
    // This is where you got the pattern info


    animateCharacter(ctx, config, levels[level_count].img, shouldAnimate, pattern, editor, structure);
    // drawer.start(editor.repl.scheduler);
    shouldAnimate.flag = true;
      });

// Add keyboard shortcut: Cmd+Enter to play
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault(); // Prevent default browser behavior
        document.getElementById('play').click();
    }
});

function undoLevelChanges(rows) {
    rows.forEach((row, rowIndex) => {
        row.assets.forEach((tile, tileIndex) => {
            if (tile.type === 'collected_coin') {
                rows[rowIndex].assets[tileIndex] = {
                    src: './assets/coin.png',
                    type: 'coin',
                    img: rows[rowIndex].assets[tileIndex].img
                };
            }
        });
    });
}
document.getElementById('stop').addEventListener('click', () => {
    //console.log("details", capturedEvents);
    editor.stop();
    // drawer.stop();

  });

document.getElementById('next').addEventListener('click',  async () => {
  shouldAnimate.flag = false;
  editor.stop();
  // drawer.stop();
  if (level_count === levels.length - 1) {
    checkIfFinalLevel();
  }

  // Move to next level (wrap around to 0 if at end)
  if (level_count >= levels.length - 1) {
    level_count = 0;
  } else {
    level_count = level_count + 1;
  }
   undoLevelChanges(levels[level_count].img);
    updateProgressBar();
  // Load new level
  editor = loadLevel(levels[level_count].start, level_count);


  // Recalculate config for new level (auto-sizing)
  config = calculateConfig(levels[level_count]);

  // Reinitialize canvas and UI with new config
  ctx = initCanvas(config, levels[level_count].img.length);
  await drawStaticUI(ctx, config, levels[level_count].img); // ← ADD await
  updateCoinCounter(levels[level_count]);
  updateCoinCounter(levels[level_count]);
  deathsThisLevel = 0;
  window.deathsThisLevel = 0;
  resetLives();
  console.log(`Loaded level ${level_count + 1}/${levels.length}`);
});
document.getElementById('prev').addEventListener('click', async () => {
  shouldAnimate.flag = false;
  editor.stop();
  // drawer.stop();



  // Move to previous level (wrap around to last if at beginning)
  if (level_count <= 0) {
    level_count = levels.length - 1;
  } else {
    level_count = level_count - 1;
  }
    updateProgressBar();
    deathsThisLevel = 0;
    window.deathsThisLevel = 0;
  // Load new level
  editor = loadLevel(levels[level_count].start, level_count);

  // Recalculate config for new level (auto-sizing)
  config = calculateConfig(levels[level_count]);

  // Reinitialize canvas and UI with new config
  ctx = initCanvas(config, levels[level_count].img.length);

  await drawStaticUI(ctx, config, levels[level_count].img);
  updateCoinCounter(levels[level_count]);
  updateCoinCounter(levels[level_count]);
  resetLives();
  console.log(`Loaded level ${level_count + 1}/${levels.length}`);
});


  document.getElementById('docsButton').addEventListener('click', () => {
    const frame = document.getElementById('docsFrame');
    frame.style.display = frame.style.display === 'none' ? 'block' : 'none';
    if (frame.style.display === 'block') {
        frame.src = 'https://strudel.cc/learn/samples/';
    }
});

function createCoinCounter() {
  const progressBar = document.getElementById('progressBar');

  // Create a wrapper for both counters
  const countersWrapper = document.createElement('div');
  countersWrapper.id = 'counters-wrapper';
  countersWrapper.style.cssText = `
    display: flex;
    gap: 4px;
    margin-bottom: 5px;
  `;

  const coinCounter = document.createElement('div');
  coinCounter.id = 'coinCounter';

  const coinIcon = document.createElement('img');
  coinIcon.src = './assets/coin.png';

  const counterText = document.createElement('span');
  counterText.id = 'coinCounterText';
  counterText.textContent = '0/0';

  coinCounter.appendChild(coinIcon);
  coinCounter.appendChild(counterText);
  countersWrapper.appendChild(coinCounter);

  progressBar.parentElement.insertBefore(countersWrapper, progressBar);
}


function updateCoinCounter(level) {
  const totalCoins = level.img.reduce((sum, row) =>
    sum + row.assets.filter(asset => asset.type === 'coin' || asset.type === 'collected_coin').length, 0
  );

  const collectedCoins = level.img.reduce((sum, row) =>
    sum + row.assets.filter(asset => asset.type === 'collected_coin').length, 0
  );

  const counterText = document.getElementById('coinCounterText');
  if (counterText) {
    counterText.textContent = `${collectedCoins}/${totalCoins}`;

    if (collectedCoins === totalCoins && totalCoins > 0) {
      counterText.style.color = '#4CAF50';
    } else {
      counterText.style.color = '#FFD700';
    }
  }
}
function updateLifeCounter() {
  const counterText = document.getElementById('lifeCounterText');
  if (counterText) {
    counterText.textContent = `x${window.totalLives}`; // ← Use window.totalLives

    if (window.totalLives <= 0) { // ← Use window.totalLives
      counterText.style.color = '#FF0000';
    } else if (window.totalLives <= 2) { // ← Use window.totalLives
      counterText.style.color = '#FF8800';
    } else {
      counterText.style.color = '#97FF00';
    }
  }
}

function calculateLivesBonus() {
  if (deathsThisLevel === 0) {
    window.totalLives += 3; // Perfect: +3 lives
    console.log(`Perfect run! +3 lives. Total lives: ${window.totalLives}`);
  } else if (deathsThisLevel === 1) {
    window.totalLives += 2; // 1 death: +2 lives
    console.log(`Good run! +2 lives. Total lives: ${window.totalLives}`);
  } else if (deathsThisLevel === 2) {
    window.totalLives += 1; // 2 deaths: +1 life
    console.log(`Okay run. +1 life. Total lives: ${window.totalLives}`);
  }
  // 3+ deaths: no bonus (already lost 3+ lives during level)

  updateLifeCounter();

  // Reset death counter for next level
  deathsThisLevel = 0;
  window.deathsThisLevel = 0;
}

function createLifeCounter() {
  const wrapper = document.getElementById('counters-wrapper');

  const lifeCounter = document.createElement('div');
  lifeCounter.id = 'lifeCounter';

  const lifeIcon = document.createElement('img');
  lifeIcon.src = './assets/character.png';

  const counterText = document.createElement('span');
  counterText.id = 'lifeCounterText';
  counterText.textContent = `x${window.totalLives}`; // ← Use window.totalLives

  lifeCounter.appendChild(lifeIcon);
  lifeCounter.appendChild(counterText);

  wrapper.appendChild(lifeCounter);
}

// Initialize window.livesRemaining at the top
//window.livesRemaining = 3;
window.updateLifeCounter = updateLifeCounter;
window.calculateLivesBonus = calculateLivesBonus;
window.updateCoinCounter = updateCoinCounter;



// Load existing completions from localStorage
try {
  const stored = localStorage.getItem('gameCompletions');
  if (stored) {
    gameCompletions = JSON.parse(stored);
  }
} catch (e) {
  console.error('Failed to load game completions:', e);
}

// Function to generate unique ID
function generateUniqueId() {
  return `game_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Function to save completion
function saveGameCompletion(finalLives) {
  const completion = {
    id: generateUniqueId(),
    totalLives: finalLives,
    timestamp: new Date().toISOString(),
    levelsCompleted: levels.length
  };

  gameCompletions.push(completion);

  // Save to localStorage
  try {
    localStorage.setItem('gameCompletions', JSON.stringify(gameCompletions));
    console.log('Game completion saved:', completion);

    // Optional: Download as JSON file
    downloadCompletionJSON(completion);
  } catch (e) {
    console.error('Failed to save game completion:', e);
  }

  return completion;
}

// Optional: Download as JSON file
function downloadCompletionJSON(completion) {
  const dataStr = JSON.stringify(completion, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `game_completion_${completion.id}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function checkIfFinalLevel() {
  // Check if we just completed the last level
  if (level_count === levels.length - 1) {
    console.log('GAME COMPLETED!');
    const completion = saveGameCompletion(window.totalLives);

    // Show all completions in console
    console.log('\n=== ALL GAME COMPLETIONS ===');
    console.table(gameCompletions.map(c => ({
      'ID': c.id,
      'Lives': c.totalLives,
      'Date': new Date(c.timestamp).toLocaleString()
    })));

    // Create formatted text table for alert
    let alertMessage = `Congratulations! You completed the game with ${window.totalLives} lives!\n\n`;
    alertMessage += `Completion ID: ${completion.id}\n\n`;
    alertMessage += `=== ALL COMPLETIONS ===\n`;
    alertMessage += `${'#'.padEnd(4)} ${'Lives'.padEnd(6)} ${'Date & Time'.padEnd(25)}\n`;
    alertMessage += `${'─'.repeat(40)}\n`;

    gameCompletions.forEach((c, index) => {
      const num = `${index + 1}.`.padEnd(4);
      const lives = `${c.totalLives}`.padEnd(6);
      const dateTime = new Date(c.timestamp).toLocaleString().padEnd(25); // ← Changed to toLocaleString()
      alertMessage += `${num} ${lives} ${dateTime}\n`;
    });

    alert(alertMessage);
  }
}


window.checkIfFinalLevel = checkIfFinalLevel;
window.saveGameCompletion = saveGameCompletion;
