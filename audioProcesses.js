// Create a single shared AudioContext
let sharedAudioContext = null;

function getAudioContext() {
    if (!sharedAudioContext) {
        sharedAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return sharedAudioContext;
}

export function createSuccessSound() {
    return {
        play: () => {
            const audioContext = getAudioContext();
            const now = audioContext.currentTime;
            
            function createNote(frequency, startTime, duration) {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(frequency, startTime);
                
                // Quick attack, short decay envelope
                gainNode.gain.setValueAtTime(0, startTime);
                gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
                gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.1);
                gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                return oscillator;
            }
            
            // Create the victory melody (G4, C5, E5, G5)
            const note1 = createNote(392, now, 0.15);           // G4
            const note2 = createNote(523.25, now + 0.15, 0.15); // C5
            const note3 = createNote(659.25, now + 0.3, 0.15);  // E5
            const note4 = createNote(783.99, now + 0.45, 0.4);  // G5
            
            // Start all notes at their scheduled times
            note1.start(now);
            note1.stop(now + 0.15);
            
            note2.start(now + 0.15);
            note2.stop(now + 0.3);
            
            note3.start(now + 0.3);
            note3.stop(now + 0.45);
            
            note4.start(now + 0.45);
            note4.stop(now + 0.85);
        }
    };
}

export function createFailureSound() {
    return {
        play: () => {
            const audioContext = getAudioContext();
            const now = audioContext.currentTime;
            
            // Create oscillator
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // Set up distorted sound
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(400, now);
            oscillator.frequency.linearRampToValueAtTime(50, now + 1.5);
            
            // Set up volume envelope
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
            
            // Connect nodes
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Start and stop
            oscillator.start(now);
            oscillator.stop(now + 1.5);
        }
    };
}