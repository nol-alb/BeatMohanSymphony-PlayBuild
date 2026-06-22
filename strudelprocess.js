
import { StrudelMirror } from '@strudel/codemirror';
import { test22 } from './startercode.mjs';
import { repl, evalScope } from '@strudel/core';
import { getDrawContext, Drawer } from './draw.js';
import {initCanvas, drawStaticUI} from './animation.js';
import './style.css';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import {createSuccessSound, createFailureSound} from './audioProcesses.js'
import { levels } from './levels.js';

let level_count = 0;
const drawContext = getDrawContext('roll', { contextType: '2d', pixelRatio: 2 });
const drawTime = [-2, 1]; // Time window of drawn haps
export const drawer = new Drawer((haps, time) => {
    // Clear canvas
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    
    // Let our visualizer handle everything
    visualizer.draw(drawContext, haps, time);
}, drawTime);



class LayerVisualization {
    constructor(canvas) {
        this.canvas = canvas;
        this.layers = new Map();
        this.colorPalette = [
            '#4287f5',  // blue
            '#f54242',  // red
            '#42f554',  // green
            '#f5d442',  // yellow
            '#9b42f5',  // purple
            '#f542f2',  // pink
            '#42f5f5'   // cyan
        ];
    }

    // This method identifies and registers new layers as they appear
    updateLayers(haps) {
        haps.forEach(event => {
            if (event.hasOnset()) {
                const instrumentType = event.value.s;
                if (!this.layers.has(instrumentType)) {
                    // Calculate new layer position based on current count
                    const layerIndex = this.layers.size;
                    this.layers.set(instrumentType, {
                        yPosition: this.canvas.height - 50 - (layerIndex * 50), // Space layers 50 pixels apart
                        color: this.colorPalette[layerIndex % this.colorPalette.length],
                        name: this.getLayerName(instrumentType)
                    });
                }
            }
        });
    }

    // Helper method to get friendly names for layers
    getLayerName(instrumentType) {
        const names = {
            'bd': 'Bass Drum',
            'sd': 'Snare Drum',
            'hh': 'Hi-Hat',
            'cp': 'Clap',
            'oh': 'Open Hat'
        };
        return names[instrumentType] || instrumentType.toUpperCase();
    }

    // Main drawing method
    draw(ctx, haps, time) {
        const from = -2;
        const to = 2;
        const timeExtent = to - from;

        // Update layer registry with any new instruments
        this.updateLayers(haps);

        // Draw lane backgrounds and labels
        this.drawLanes(ctx);

        // Draw events for each layer
        haps.forEach(event => {
            if (event.hasOnset()) {
                const layer = this.layers.get(event.value.s);
                const x = ((time - event.whole.begin) / timeExtent) * ctx.canvas.width;
                
                // Draw the event marker
                ctx.beginPath();
                ctx.arc(x, layer.yPosition, 5, 0, 2 * Math.PI);
                ctx.fillStyle = layer.color;
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.stroke();
                ctx.closePath();
            }
        });
    }

    // Helper method to draw lanes and labels
    drawLanes(ctx) {
        this.layers.forEach(layer => {
            // Draw lane background
            ctx.fillStyle = `${layer.color}22`; // Very transparent version of layer color
            ctx.fillRect(0, layer.yPosition - 15, ctx.canvas.width, 30);

            // Draw lane label
            ctx.font = '14px Arial';
            ctx.fillStyle = layer.color;
            ctx.fillText(layer.name, 10, layer.yPosition + 5);
        });
    }
}

// Now let's use this in our drawer
const visualizer = new LayerVisualization(drawContext.canvas);


export function loadLevel(levelCode, currentLevel) {
    const instructions = document.getElementById('instruction_text');
    instructions.innerText = levels[currentLevel].text;
    const editorContainer = document.getElementById('editor');
    editorContainer.innerHTML = ''; // Clear the editor for a fresh instance

  // Initialize StrudelMirror
    return new StrudelMirror({
      defaultOutput: webaudioOutput,
      getTime: () => getAudioContext().currentTime,
      transpiler,
      root: editorContainer,
      initialCode: levelCode,
      drawTime,
      onDraw: (haps, time) => drawer.invalidate(editor.scheduler, time),
      prebake: async () => {
        initAudioOnFirstClick();
        const loadModules = evalScope(
          import('@strudel/core'),
          import('@strudel/draw'),
          import('@strudel/mini'),
          import('@strudel/tonal'),
          import('@strudel/webaudio'),
        );
        await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
      },
    });
  }


// First define these functions and variables that are referenced
let patternInfo = null;

export function getPatternEvents(haps) {
    // Collect unique events by their phase
    let patternMap = new Map();
    
    haps.forEach(event => {
        if (event.hasOnset()) {
            const phase = event.whole.begin % 1;
            // Round phase to handle floating point precision
            const roundedPhase = Math.round(phase * 100) / 100;
            
            if (!patternMap.has(roundedPhase)) {
                patternMap.set(roundedPhase, {
                    sound: event.value.s,
                    phase: roundedPhase
                });
            }
        }
    });

    // Convert to array and sort by phase
    let events = Array.from(patternMap.values())
        .sort((a, b) => a.phase - b.phase);
    
    return events;
}


export function getPatternStructure(pattern) {
    const events = pattern.queryArc(0, 1);
    
    // Get total steps in cycle (tactus)
    const stepsInCycle = pattern.tactus; // this gives us total positions in the pattern 
    
    // Create array for all possible positions
    let allPositions = Array.from({ length: stepsInCycle }, (_, i) => ({
        phase: i / stepsInCycle,
        type: 'silence', // default everything to silence
        index: i
    }));

    // Fill in the actual events
    events.forEach(event => {
        if (event.hasOnset()) {
            const phase = event.whole.begin % 1;
            const index = Math.floor(phase * stepsInCycle);
            
            allPositions[index] = {
                type: 'sound',
                sound: event.value.s,
                phase: phase,
                index: index,
                locations: event.context?.locations,
                begin: event.whole.begin,
                duration: event.duration
            };
        }
    });

    return allPositions;
}
