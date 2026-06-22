// effectRenderer.js
// Each effect: { detect(value) → number|null, render(ctx, char, params) }
// params: { x, y, size, effectValue, timestamp, instrument, value, trailStore }

const effectMap = {

    // Reverb: character grows + fading echo rings
    room: {
        detect: (v) => v.room ?? null,
        render: (ctx, char, { x, y, size, effectValue }) => {
            const echoScale = 1 + effectValue * 0.9;
            // Outer echo
            ctx.globalAlpha = 0.08 * effectValue;
            ctx.drawImage(char, x - (size * echoScale) / 2, y - (size * echoScale) / 2, size * echoScale, size * echoScale);
            // Mid echo
            const midScale = 1 + effectValue * 0.45;
            ctx.globalAlpha = 0.15 * effectValue;
            ctx.drawImage(char, x - (size * midScale) / 2, y - (size * midScale) / 2, size * midScale, size * midScale);
            ctx.globalAlpha = 1.0;
            // Main character — bigger based on room value
            const mainScale = 1 + effectValue * 0.3;
            const mainSize = size * mainScale;
            ctx.drawImage(char, x - mainSize / 2, y - mainSize / 2, mainSize, mainSize);
        }
    },

    // Distortion: glitch-slice the character horizontally
    distort: {
        detect: (v) => v.distort ?? null,
        render: (ctx, char, { x, y, size, effectValue, timestamp }) => {
            const slices = 10;
            const sliceH = size / slices;
            // Use a slowly-changing seed so it glitches in bursts, not every frame
            const seed = Math.floor(timestamp / 80);
            ctx.save();
            ctx.beginPath();
            ctx.rect(x - size / 2, y - size / 2, size, size);
            ctx.clip();
            for (let i = 0; i < slices; i++) {
                // Seeded pseudo-random offset
                const r = Math.sin(seed * 9301 + i * 49297 + 233371) * 0.5 + 0.5;
                const offset = (r - 0.5) * effectValue * 24;
                const srcY = (i / slices) * char.naturalHeight;
                const srcH = char.naturalHeight / slices;
                ctx.drawImage(
                    char,
                    0, srcY, char.naturalWidth, srcH,
                    x - size / 2 + offset, y - size / 2 + i * sliceH, size, sliceH
                );
            }
            ctx.restore();
        }
    },

    // Delay: ghost trail of previous positions
    delay: {
        detect: (v) => v.delay ?? null,
        render: (ctx, char, { x, y, size, effectValue, instrument, trailStore }) => {
            const trail = trailStore[instrument] || [];
            trail.forEach((pos, i) => {
                const alpha = ((i + 1) / trail.length) * 1.0 * effectValue;
                ctx.globalAlpha = alpha;
                ctx.drawImage(char, pos.x - size / 2, pos.y - size / 2, size, size);
            });
            ctx.globalAlpha = 1.0;
            ctx.drawImage(char, x - size / 2, y - size / 2, size, size);

            // Update trail (keep last 6 positions)
            trailStore[instrument] = [...trail, { x, y }].slice(-6);
        }
    },

    // Tremolo: oscillate Y position based on value + rate
    tremolo: {
        detect: (v) => v.tremolo ?? null,
        render: (ctx, char, { x, y, size, effectValue, timestamp, value }) => {
            const rate = value.tremolorate ?? 4;
            const depth = effectValue * 18;
            const yOffset = Math.sin((timestamp / 1000) * rate * Math.PI * 2) * depth;
            ctx.drawImage(char, x - size / 2, y - size / 2 + yOffset, size, size);
        }
    },

    // Crush: pixelate the character
    crush: {
        detect: (v) => v.crush ?? null,
        render: (ctx, char, { x, y, size, effectValue }) => {
            // Lower crush value = more pixelation (crush goes low = more crushed)
            const pixelSize = Math.max(2, Math.floor((1 - Math.min(effectValue / 16, 1)) * 12) + 2);
            const offscreen = document.createElement('canvas');
            offscreen.width = size;
            offscreen.height = size;
            const oCtx = offscreen.getContext('2d');
            oCtx.imageSmoothingEnabled = false;
            // Draw tiny then scale up
            oCtx.drawImage(char, 0, 0, size / pixelSize, size / pixelSize);
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(offscreen, 0, 0, size / pixelSize, size / pixelSize, x - size / 2, y - size / 2, size, size);
            ctx.imageSmoothingEnabled = true;
        }
    },

    // Cutoff filter: tint the character warmer/cooler
    cutoff: {
        detect: (v) => v.cutoff ?? null,
        render: (ctx, char, { x, y, size, effectValue }) => {
            ctx.drawImage(char, x - size / 2, y - size / 2, size, size);
            // Overlay color tint — low cutoff = blue (dark), high = orange (bright)
            const normalized = Math.min(effectValue / 8000, 1);
            const r = Math.floor(normalized * 255);
            const b = Math.floor((1 - normalized) * 180);
            ctx.globalAlpha = 0.25;
            ctx.fillStyle = `rgb(${r}, 80, ${b})`;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.globalAlpha = 1.0;
        }
    },

    // Gain: scale character size based on gain value (no gain = 1.0 scale)
    gain: {
        detect: (v) => v.gain ?? null,
        render: (ctx, char, { x, y, size, effectValue }) => {
            // effectValue is the gain value
            // gain of 1.0 = normal size, 0.5 = half size, 2.0 = double size
            const scaledSize = size * effectValue;
            ctx.drawImage(char, x - scaledSize / 2, y - scaledSize / 2, scaledSize, scaledSize);
        }
    },
};

// Detect which effects are active on an event value object
export function detectEffects(eventValue) {
    const active = {};
    for (const [name, effect] of Object.entries(effectMap)) {
        const val = effect.detect(eventValue);
        if (val !== null && val !== undefined) {
            active[name] = val;
        }
    }
    return active;
}

// Main render entry point — falls back to plain draw if no effects
export function renderWithEffects(ctx, char, params, activeEffects, trailStore) {
    if (Object.keys(activeEffects).length === 0) {
        const { x, y, size } = params;
        ctx.drawImage(char, x - size / 2, y - size / 2, size, size);
        return;
    }

    for (const [name, effectValue] of Object.entries(activeEffects)) {
        if (effectMap[name]) {
            ctx.save();
            effectMap[name].render(ctx, char, { ...params, effectValue, trailStore });
            ctx.restore();
        }
    }
}

// Call this to add a new effect without touching any other file
export function registerEffect(name, detectFn, renderFn) {
    effectMap[name] = { detect: detectFn, render: renderFn };
}
