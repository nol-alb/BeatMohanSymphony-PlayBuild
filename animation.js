import {getPatternEvents,getPatternStructure, loadLevel, drawer} from './strudelprocess.js'
import {createSuccessSound, createFailureSound} from './audioProcesses.js'
import { detectEffects, renderWithEffects } from './effectRenderer.js'



export function initCanvas(config, rowCount) {
    const canvas = document.getElementById(config.canvasId);
    canvas.width = window.innerWidth; // Full width of the screen
    canvas.height = (config.tileSize + config.rowSpacing) * rowCount + 50; // Dynamically set height based on rows

    // Add green border styling
    canvas.style.border = '2px solid #20232B';
    canvas.style.borderRadius = '5px';

    // Create pixelated brick background
    const ctx = canvas.getContext('2d');

    // Set up brick pattern
    const brickWidth = 16;  // Small for more pixelated look
    const brickHeight = 8;
    const colors = ['#2B313F', '#2B354A']; // Different brick colors for variation

    // Draw the brick pattern
    for (let y = 0; y < canvas.height; y += brickHeight) {
        const offset = (Math.floor(y / brickHeight) % 2) * (brickWidth / 2); // Offset every other row
        for (let x = 0; x < canvas.width; x += brickWidth) {
            // Alternate brick colors for texture
            const colorIndex = (Math.floor(x / brickWidth) + Math.floor(y / brickHeight)) % 2;
            ctx.fillStyle = colors[colorIndex];

            // Draw the brick - keep it pixelated by avoiding anti-aliasing
            ctx.fillRect(
                Math.floor(x + offset),
                Math.floor(y),
                Math.floor(brickWidth),
                Math.floor(brickHeight)
            );

            // Add "mortar" lines to make the bricks more distinct
            ctx.strokeStyle = '#20232B';
            ctx.lineWidth = 1;
            ctx.strokeRect(
                Math.floor(x + offset),
                Math.floor(y),
                Math.floor(brickWidth),
                Math.floor(brickHeight)
            );
        }
    }

    return ctx; // Return the 2D drawing context
}

// Load an image and return a promise
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

// Draw Static UI for a Single Row
function drawRow(ctx, config, rowAssets, rowIndex) {
    const { tileSize, spacing, startX, rowSpacing } = config;
    let x = startX; // Starting X-coordinate
    const y = rowIndex * (tileSize + rowSpacing) + 20; // Calculate Y-coordinate for the row

    rowAssets.forEach((asset) => {
        // Draw a rounded rectangle for the tile
        ctx.fillStyle = asset.type === 'tile' ? '#000' : '#fff'; // Background color for tiles
        ctx.strokeStyle = '#000'; // Border color
        ctx.lineWidth = 2;

        // Draw the rounded rectangle
        ctx.beginPath();
        ctx.roundRect(x, y, tileSize, tileSize, 10);
        ctx.fill();
        ctx.stroke();

        if (asset.hidden) {
            // Draw question mark instead of image
            ctx.fillStyle = '#FFD700';
            ctx.font = `${tileSize - 20}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('?', x + tileSize/2, y + tileSize/2);
        } else {
            // Draw the image inside the tile
            ctx.drawImage(asset.img, x + 5, y + 5, tileSize - 10, tileSize - 10);
        }


        // Move to the next position
        x += tileSize + spacing;
    });
}

// If we have multiple rows!


export async function drawStaticUI(ctx, config, rows) {
    console.log('drawStaticUI called with rows:', rows.length);

    try {
        // Load all the images first
        const loadedAssets = await Promise.all(
            rows.flatMap((row, rowIdx) => {
                console.log(`Row ${rowIdx} has ${row.assets.length} assets`);
                return row.assets.map(async (asset) => {
                    console.log('Loading image:', asset.src);
                    const img = await loadImage(asset.src);
                    return { ...asset, img };
                });
            })
        );

        console.log('All images loaded, total:', loadedAssets.length);

        // Assign the loaded images to the corresponding assets
        let offset = 0;
        rows.forEach((row, rowIndex) => {
            row.assets.forEach((asset, assetIndex) => {
                asset.img = loadedAssets[offset + assetIndex].img;
            });
            offset += row.assets.length;
        });

        console.log('Assets assigned, drawing rows...');

        // Draw each row
        rows.forEach((row, index) => {
            drawRow(ctx, config, row.assets, index);
        });

        console.log('Static UI drawing complete');

    } catch (error) {
        console.error('Error in drawStaticUI:', error);
    }
}

// Extend CanvasRenderingContext2D to support rounded rectangles
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};



export function clearCharacterAnimation(ctx, config, rows) {
    // Clear all boxes by redrawing them
    rows.forEach((row, rowIndex) => {
        row.assets.forEach((tile, tileIndex) => {
            const tileX = config.startX + tileIndex * (config.tileSize + config.spacing);
            const tileY = rowIndex * (config.tileSize + config.rowSpacing) + 20;

            const img = new Image();
            img.src = tile.src;
            img.onload = () => {
                // Redraw tile
                ctx.fillStyle = tile.type === 'tile' ? '#000' : '#fff';
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(tileX, tileY, config.tileSize, config.tileSize, 10);
                ctx.fill();
                ctx.stroke();

                // Redraw the icon
                ctx.drawImage(
                    img,
                    tileX + 5,
                    tileY + 5,
                    config.tileSize - 10,
                    config.tileSize - 10
                );
            };
        });
    });
}

export function animateCharacter(ctx, config, rows, shouldAnimate, pattern, editor, patternStructure) {
    const { tileSize, rowSpacing, startX, spacing } = config;
    let previousBoxIndices = {}; // Track previous positions per instrument
    let landingTimes = {};
    let flagHitCount = 0; //check loops
    let flagHitThisCycle = false;
    let lastCycleTime = 0;
    let currentCycleNumber = -1;
    let animationFrameId = null;
    let trailStore = {}; // for delay trails

    const currentTime = editor.repl.scheduler.now();
    const currentCycle = Math.floor(currentTime);

    // Preload character image
    const defaultCharacter = new Image();
    defaultCharacter.src = config.characterAsset.src;

    function allCoinsCollected() {
        return !rows.some(row =>
            row.assets.some(asset => asset.type === 'coin')
        );
    }

    // Create a mapping between instrument codes and their common names
    const instrumentMap = {
        // kicks
        'bd':          'kick',
        'bassdm':      'kick',
        '808bd':       'kick',
        'clubkick':    'kick',
        'hardkick':    'kick',
        'kicklinn':    'kick',
        'popkick':     'kick',
        'reverbkick':  'kick',
        'gabba':       'kickgabba',
        'gabbaloud':   'kickgabba',
        'gabbalouder': 'kickgabba',

        // snares
        'sn':          'snare',
        'sd':          'snare',
        '808sd':       'snare808',
        'rm':          'snare',
        'rs':          'snare',

        // claps
        'cp':          'clap',
        'realclaps':   'clap',

        // closed hihats
        'hc':          'hihat',
        'hh':          'hihat',
        '808hc':       'hihat808',
        'linnhats':    'hihat',

        // open hihats
        'ho':          'openhat',
        '808oh':       'openhat808',

        // ride (cr = RIDED samples, not crash)
        'cr':          'ride',

        // crash
        'cc':          'crash',
        '808cy':       'cymbal808',

        // cowbell
        'cb':          'cowbell',

        // toms
        'ht':          'hightom',
        '808ht':       'hightom808',
        'mt':          'midtom',
        '808mt':       'midtom808',
        'lt':          'lowtom',
        '808lt':       'lowtom808',

        // congas
        '808mc':       'conga',
        '808lc':       'conga',
        'co':          'conga',

        // hand percussion
        'hand':        'handpan',
        'chin':        'percussion',
        'tink':        'percussion',
        'tok':         'woodblock',
        'perc':        'percussion',

        // world / tabla
        'tabla':       'tabla',
        'tabla2':      'tabla',
        'east':        'percussion',

        // full kits
        'gretsch':     'kit_acoustic',
        'hh27':        'kit_acoustic',
        'db':          'kit_acoustic',
        'ab':          'kit_acoustic',
        'feel':        'kit_acoustic',
        'electro1':    'kit_electronic',
        'hardcore':    'kit_electronic',
        'tech':        'kit_electronic',
        'jungle':      'kit_electronic',
        'house':       'kit_electronic',
        'jazz':        'kit_electronic',
        'glitch':      'kit_glitch',
        'glitch2':     'kit_glitch',
        'voodoo':      'kit_electronic',
        'dr':          'kit_vintage',
        'dr2':         'kit_vintage',
        'dr55':        'kit_vintage',
        'drumtraks':   'kit_vintage',
        'sequential':  'kit_vintage',
        'odx':         'kit_vintage',

        // breaks
        'amencutup':   'break',
        'breaks125':   'break',
        'breaks152':   'break',
        'breaks157':   'break',
        'breaks165':   'break',
    };

    // Pre-calculate row mappings (only once)
    const rowMappings = {};

    // Use a buffer for drawing operations to minimize repaints
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = ctx.canvas.width;
    offscreenCanvas.height = ctx.canvas.height;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    // Optimization: Pre-draw all tiles to the offscreen canvas
    function preDrawTiles() {

        // ADD THIS: Draw brick background to offscreen canvas first
        const brickWidth = 16;
        const brickHeight = 8;
        const colors = ['#2B313F', '#2B354A'];

        for (let y = 0; y < offscreenCanvas.height; y += brickHeight) {
            const offset = (Math.floor(y / brickHeight) % 2) * (brickWidth / 2);
            for (let x = 0; x < offscreenCanvas.width; x += brickWidth) {
                const colorIndex = (Math.floor(x / brickWidth) + Math.floor(y / brickHeight)) % 2;
                offscreenCtx.fillStyle = colors[colorIndex];
                offscreenCtx.fillRect(Math.floor(x + offset), Math.floor(y), Math.floor(brickWidth), Math.floor(brickHeight));
                offscreenCtx.strokeStyle = '#20232B';
                offscreenCtx.lineWidth = 1;
                offscreenCtx.strokeRect(Math.floor(x + offset), Math.floor(y), Math.floor(brickWidth), Math.floor(brickHeight));
            }
        }

        // Draw background first
        ctx.drawImage(offscreenCanvas, 0, 0);


        // Draw all tiles to the offscreen canvas
        rows.forEach((row, rowIndex) => {
            row.assets.forEach((asset, assetIndex) => {
                if (!asset || !asset.img) return;

                const tileX = startX + assetIndex * (tileSize + spacing);
                const tileY = rowIndex * (tileSize + rowSpacing) + 20;

                offscreenCtx.fillStyle = asset.type === 'tile' ? '#000' : '#fff';
                offscreenCtx.strokeStyle = '#000';
                offscreenCtx.lineWidth = 2;
                offscreenCtx.beginPath();
                offscreenCtx.roundRect(tileX, tileY, tileSize, tileSize, 10);
                offscreenCtx.fill();
                offscreenCtx.stroke();

                if (asset.hidden) {
                    // Draw question mark or mystery tile
                    offscreenCtx.fillStyle = '#FFD700';
                    offscreenCtx.font = `${tileSize - 20}px Arial`;
                    offscreenCtx.textAlign = 'center';
                    offscreenCtx.textBaseline = 'middle';
                    offscreenCtx.fillText('?', tileX + tileSize/2, tileY + tileSize/2);
                } else if (asset.type === 'collected_coin') {
                    offscreenCtx.globalAlpha = 0.3;
                    offscreenCtx.drawImage(asset.img, tileX + 5, tileY + 5, tileSize - 10, tileSize - 10);
                    offscreenCtx.globalAlpha = 1.0;
                } else {
                    offscreenCtx.drawImage(asset.img, tileX + 5, tileY + 5, tileSize - 10, tileSize - 10);
                }

            });
        });
    }

    // Calculate row mappings once
    function calculateRowMappings() {
        for (const instrument in instrumentMap) {
            const commonName = instrumentMap[instrument];
            for (let i = 0; i < rows.length; i++) {
                const firstAsset = rows[i].assets[0];
                if (!firstAsset || firstAsset.type !== 'instrument') continue;

                const path = String(firstAsset.src).toLowerCase();
                if (path.includes(instrument) || path.includes(commonName)) {
                    rowMappings[instrument] = i;
                    break;
                }
            }
            // Fallback to first row if no match
            if (rowMappings[instrument] === undefined && rows.length > 0) {
                rowMappings[instrument] = 0;
            }
        }
    }

    defaultCharacter.onload = () => {
        calculateRowMappings();
        preDrawTiles();

        let lastFrameTime = 0;
        let pendingEvents = [];

        // More efficient animation loop with timing control
        function step(timestamp) {
            if (!shouldAnimate.flag) {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
                return;
            }

            // Control frame rate to avoid excessive drawing
            if (timestamp - lastFrameTime < 33) { // 30fps is sufficient
                animationFrameId = requestAnimationFrame(step);
                return;
            }
            lastFrameTime = timestamp;

            // Get current time from scheduler
            const currentTime = editor.repl.scheduler.now();
            const cycleNum = Math.floor(currentTime);

            //console.log('Current time:', currentTime, 'Cycle:', cycleNum);
            // Get events and queue them for processing
            if (cycleNum> currentCycleNumber) {
                currentCycleNumber = cycleNum;
                if(flagHitThisCycle)
                {
                    flagHitCount++;
                }
            }
            const currentHaps = editor.repl.scheduler.pattern.queryArc(currentTime - 0.01, currentTime + 0.03);

            currentHaps.forEach(event => {
                if (event.hasOnset()) {
                    const phase = event.whole.begin % 1;
                    const position = Math.floor(phase * pattern.tactus);
                    console.log(`Position ${position}: ${event.value.s} at phase ${phase.toFixed(3)}`);

                    pendingEvents.push({
                        instrument: event.value.s,
                        time: event.whole.begin,
                        phase: phase,
                        value: event.value
                    });
                }
            });

            // Draw the background layer first
            ctx.drawImage(offscreenCanvas, 0, 0);

            // Process all pending events in a batch
            const processedEvents = new Set();
            const latestEventPerInstrument = {};

            pendingEvents.forEach(event => {
                const instrument = event.instrument;
                if (!latestEventPerInstrument[instrument] || event.time > latestEventPerInstrument[instrument].time) {
                    latestEventPerInstrument[instrument] = event;
                }
            });

            Object.values(latestEventPerInstrument).forEach(event => {
                const instrument = event.instrument;
                const eventKey = `${instrument}-${event.phase}`;

                // Skip duplicates for the same phase
                if (processedEvents.has(eventKey)) return;
                processedEvents.add(eventKey);

                const rowIndex = rowMappings[instrument];
                if (rowIndex === undefined) return;

                const totalSteps = pattern.tactus;
                const currentIndex = Math.floor(event.phase * totalSteps);

                // Skip out of bound indices
                if (currentIndex + 1 >= rows[rowIndex].assets.length) return;

                // Draw new character position
                const tilePos = rows[rowIndex].assets[currentIndex + 1];

                if (tilePos.hidden) {
                    tilePos.hidden = false;

                    // Redraw this tile on offscreen canvas
                    const tileX = startX + (currentIndex + 1) * (tileSize + spacing);
                    const tileY = rowIndex * (tileSize + rowSpacing) + 20;

                    offscreenCtx.fillStyle = '#fff';
                    offscreenCtx.strokeStyle = '#000';
                    offscreenCtx.lineWidth = 2;
                    offscreenCtx.beginPath();
                    offscreenCtx.roundRect(tileX, tileY, tileSize, tileSize, 10);
                    offscreenCtx.fill();
                    offscreenCtx.stroke();

                    // Draw the revealed image
                    offscreenCtx.drawImage(
                        tilePos.img,
                        tileX + 5,
                        tileY + 5,
                        tileSize - 10,
                        tileSize - 10
                    );
                }
                // Track landing time for smooth animation
                const now = performance.now();
                if (!landingTimes[instrument] || previousBoxIndices[instrument] !== currentIndex) {
                    landingTimes[instrument] = now;
                }
                const timeSinceLanding = (now - landingTimes[instrument]) / 1000; // in seconds

// Smooth depth effect: grows bigger and back over the jump duration
                const beatDuration = 1 / pattern.tactus; // Duration of one beat in seconds
                let scaleMultiplier = 1.0;

                if (timeSinceLanding < beatDuration * 1.0) {
                    // Progress through the animation (0 to 1)
                    const progress = timeSinceLanding / (beatDuration * 1.0);
                    // Sine wave creates smooth 0 → 1 → 0 curve
                    const scaleProgress = Math.sin(progress * Math.PI);
                    // Scale up to 50% bigger at midpoint
                    scaleMultiplier = 1.0 + scaleProgress * 0.5;
                }

// Apply scale to character size
                const charSize = tileSize * scaleMultiplier;

// Calculate centered position (center of tile)
                const tileCenterX = startX + (currentIndex + 1) * (tileSize + spacing) + tileSize/2;
                const tileCenterY = rowIndex * (tileSize + rowSpacing) + 20 + tileSize/2;

// Draw character centered on tile, scaled
                const activeEffects = detectEffects(event.value || {});

                renderWithEffects(
                    ctx,
                    defaultCharacter,
                    {
                        x: tileCenterX,
                        y: tileCenterY,
                        size: charSize,
                        timestamp: performance.now(),
                        instrument,
                        value: event.value || {},
                    },
                    activeEffects,
                    trailStore
                );

                if (currentCycle > lastCycleTime) {
                    if (flagHitThisCycle) {
                        flagHitCount++;
                    }
                    flagHitThisCycle = false;
                    lastCycleTime = currentCycle;
                }
                // loops for flag
                if (tilePos.type=='flag') {
                    flagHitThisCycle=true;
                    if (allCoinsCollected() && flagHitCount >= 2) {
                        editor.stop();
                        drawer.stop();
                        shouldAnimate.flag = false;
                        createSuccessSound().play();
                        if (window.calculateLivesBonus) {
                            window.calculateLivesBonus();
                        }        }
                }

                else if (tilePos.type === 'lava') {
                    shouldAnimate.flag = false;
                    createFailureSound().play();
                    editor.stop();

                    window.deathsThisLevel++;
                    window.totalLives--;
                    if (window.updateLifeCounter) {
                        window.updateLifeCounter();
                    }

                    // Fall animation with tilt
                    const deathCharSize = tileSize;
                    let fallY = tileCenterY;
                    let rotation = 0;

                    function fall() {
                        // Redraw background + tiles to cover old character
                        ctx.drawImage(offscreenCanvas, 0, 0);

                        fallY += 5; // Fall speed
                        rotation += 0.12; // Tilt amount

                        // Draw tilted character
                        ctx.save();
                        ctx.translate(tileCenterX, fallY);  // ✅ Fixed
                        ctx.rotate(rotation);
                        ctx.drawImage(defaultCharacter, -deathCharSize/2, -deathCharSize/2, deathCharSize, deathCharSize);
                        ctx.restore();

                        if (fallY < ctx.canvas.height + deathCharSize) {  // ✅ Fixed
                            requestAnimationFrame(fall);
                        } else {
                            drawer.stop();
                        }
                    }
                    fall();

                    return;
                }
                else if (tilePos.type === 'coin') {
                    // Just mark as collected, keep the image
                    rows[rowIndex].assets[currentIndex + 1].type = 'collected_coin';

                    if (window.updateCoinCounter) {
                        window.updateCoinCounter({ img: rows });
                    }
                    // Update the offscreen canvas for this tile
                    const tileX = startX + (currentIndex + 1) * (tileSize + spacing);
                    const tileY = rowIndex * (tileSize + rowSpacing) + 20;

                    offscreenCtx.fillStyle = '#fff';
                    offscreenCtx.strokeStyle = '#000';
                    offscreenCtx.lineWidth = 2;
                    offscreenCtx.beginPath();
                    offscreenCtx.roundRect(tileX, tileY, tileSize, tileSize, 10);
                    offscreenCtx.fill();
                    offscreenCtx.stroke();

                    // Draw coin with transparency
                    offscreenCtx.globalAlpha = 0.3;  // ← ADD THIS
                    if (rows[rowIndex].assets[currentIndex + 1].img) {
                        offscreenCtx.drawImage(
                            rows[rowIndex].assets[currentIndex + 1].img,
                            tileX + 5,
                            tileY + 5,
                            tileSize - 10,
                            tileSize - 10
                        );
                    }
                    offscreenCtx.globalAlpha = 1.0;  // ← ADD THIS (reset)
                }

                // Update previous position
                previousBoxIndices[instrument] = currentIndex;
            });

            // Clear all pending events after processing
            pendingEvents = pendingEvents.filter(event =>
                event.time >= currentTime - 0.1
            );

            animationFrameId = requestAnimationFrame(step);
        }

        // Start animation
        animationFrameId = requestAnimationFrame(step);

        // Return cleanup function
        return () => {
            shouldAnimate.flag = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };
    };
}
function playLavaDeathAnimation(ctx, config, characterImg, startX, startY, callback) {
    const { tileSize } = config;
    let yPos = startY;
    const fallSpeed = 5; // Pixels per frame

    function animateFall() {
        // Clear the character's previous position
        ctx.clearRect(startX - 5, yPos - 5, tileSize + 10, tileSize + 10);

        // Move down
        yPos += fallSpeed;

        // Draw character at new position
        ctx.drawImage(characterImg, startX, yPos, tileSize, tileSize);

        // Continue until off screen
        if (yPos < ctx.canvas.height + tileSize) {
            requestAnimationFrame(animateFall);
        } else {
            callback();
        }
    }

    animateFall();
}
