// This creates a simple audio oscillator to generate ambient sound
window.createAmbientSound = function() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillator nodes for the ambient sound
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    
    // Set up gain nodes for volume control
    const gainNode = audioCtx.createGain();
    const lfoGain = audioCtx.createGain();
    
    // Configure oscillators
    osc1.type = 'sine';
    osc1.frequency.value = 220; // A3
    
    osc2.type = 'sine';
    osc2.frequency.value = 277.18; // C#4
    
    lfo.type = 'sine';
    lfo.frequency.value = 0.2; // Slow modulation
    
    // Configure gain
    gainNode.gain.value = 0.15; // Main volume (not too loud)
    lfoGain.gain.value = 5; // LFO intensity
    
    // Connect LFO to oscillator frequency
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    lfoGain.connect(osc2.frequency);
    
    // Connect oscillators to gain node
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    
    // Connect gain to output
    gainNode.connect(audioCtx.destination);
    
    // Start oscillators
    osc1.start();
    osc2.start();
    lfo.start();
    
    return {
      audioCtx,
      gainNode,
      stop: function() {
        osc1.stop();
        osc2.stop();
        lfo.stop();
      }
    };
  } catch (error) {
    console.error("Audio creation error:", error);
    return null;
  }
}; 