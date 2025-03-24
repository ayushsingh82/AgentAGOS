import React, { useState, useEffect, useRef } from 'react'
import { agentScripts, formatForSpeech } from './content'

function Experience() {
  const [messages, setMessages] = useState([
    { text: "Hello everyone! Welcome to the stream!", user: "AnchorMan", time: "4:30 PM" },
    { text: "This is amazing!", user: "User123", time: "4:31 PM" },
    { text: "Can't wait to see more", user: "Viewer456", time: "4:32 PM" },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isLive, setIsLive] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isReading, setIsReading] = useState(false)
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0)
  const soundRef = useRef(null)
  const speechSynthRef = useRef(null)
  
  // Sample users and messages for auto-generation
  const sampleUsers = [
    "Crypto_Whale", "NFT_Lover", "Web3_Dev", "Moon_Boy", "Diamond_Hands",
    "AGOS_Fan", "Degen_Trader", "Based_Investor", "Alpha_Seeker", "Metaverse_Kid"
  ]

  const sampleMessages = [
    "This is incredible! 🚀",
    "Love what I'm seeing here",
    "When token?",
    "The future is here",
    "Amazing project",
    "Can't wait for more updates",
    "This is revolutionary",
    "Great work team!",
    "Bullish on this",
    "Where can I learn more?",
    "The UI is so clean",
    "How does this work?",
    "This is the way",
    "To the moon! 🌙",
    "Great community"
  ]

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthRef.current = window.speechSynthesis;
    }
    return () => {
      if (speechSynthRef.current) {
        speechSynthRef.current.cancel();
      }
    };
  }, []);

  // Initialize and manage audio
  useEffect(() => {
    // Load the script if it hasn't been loaded yet
    if (!window.createAmbientSound) {
      const script = document.createElement('script');
      script.src = '/ambient-synth.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        handleAudioState();
      };
    } else {
      handleAudioState();
    }
    
    // Clean up on unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current = null;
      }
    };
  }, []);
  
  // Handle audio state changes
  useEffect(() => {
    handleAudioState();
  }, [isLive, isMuted]);
  
  const handleAudioState = () => {
    if (!window.createAmbientSound) return;
    
    if (isLive && !isMuted) {
      // Start sound if not already playing
      if (!soundRef.current) {
        console.log("Starting ambient sound");
        soundRef.current = window.createAmbientSound();
      }
    } else {
      // Stop sound if playing
      if (soundRef.current) {
        console.log("Stopping ambient sound");
        soundRef.current.stop();
        soundRef.current = null;
      }
    }
  };

  // Function to read content using speech synthesis
  const readContent = (text) => {
    if (!speechSynthRef.current) return;
    
    // Cancel any ongoing speech
    speechSynthRef.current.cancel();
    
    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings
    utterance.rate = 1.0;  // Speed of speech (0.1 to 10)
    utterance.pitch = 1.0; // Pitch of voice (0 to 2)
    utterance.volume = 0.8; // Volume (0 to 1)
    
    // Try to get a specific voice
    // Get voices immediately or handle voice loading asynchronously
    let voices = speechSynthRef.current.getVoices();
    if (voices.length === 0) {
      // If voices aren't loaded yet, set up an event to load them
      window.speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthRef.current.getVoices();
        const preferredVoice = voices.find(voice => 
          voice.name.includes('Male') && voice.lang.includes('en')
        ) || voices.find(voice => voice.lang.includes('en')) || voices[0];
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      };
    } else {
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Male') && voice.lang.includes('en')
      ) || voices.find(voice => voice.lang.includes('en')) || voices[0];
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }
    
    // Add events to track when speech finishes
    utterance.onend = function() {
      console.log("Speech finished for script", currentScriptIndex + 1);
      
      // Use a timeout to ensure state is updated properly before checking
      setTimeout(() => {
        // Move to next script if available
        if (currentScriptIndex < agentScripts.length - 1 && isReading) {
          const nextIndex = currentScriptIndex + 1;
          setCurrentScriptIndex(nextIndex);
          
          // Add agent message to chat
          const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          setMessages(prevMessages => [...prevMessages, {
            text: agentScripts[nextIndex],
            user: "AnchorMan",
            time: time
          }]);
          
          // Read the next script after a short pause
          setTimeout(() => {
            if (isReading) {
              readContent(agentScripts[nextIndex]);
            }
          }, 300);
        } else {
          setIsReading(false);
        }
      }, 100);
    };
    
    // Add error handling
    utterance.onerror = function(event) {
      console.error("Speech synthesis error:", event);
      // Try to recover by moving to next script
      if (currentScriptIndex < agentScripts.length - 1 && isReading) {
        goToNextScript();
      }
    };
    
    // Speak the text
    speechSynthRef.current.speak(utterance);
    
    // Add the first message to chat
    if (text !== agentScripts[currentScriptIndex]) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages(prevMessages => [...prevMessages, {
        text: text,
        user: "AnchorMan",
        time: time
      }]);
    }
  };
  
  // Toggle reading state
  const toggleReading = () => {
    if (isReading) {
      // Stop reading
      if (speechSynthRef.current) {
        speechSynthRef.current.cancel();
      }
      setIsReading(false);
    } else {
      // Start reading
      setIsReading(true);
      readContent(agentScripts[currentScriptIndex]);
    }
  };
  
  // Navigation for scripts
  const goToPreviousScript = () => {
    if (currentScriptIndex > 0) {
      const newIndex = currentScriptIndex - 1;
      setCurrentScriptIndex(newIndex);
      if (isReading) {
        readContent(agentScripts[newIndex]);
      }
    }
  };
  
  const goToNextScript = () => {
    if (currentScriptIndex < agentScripts.length - 1) {
      const newIndex = currentScriptIndex + 1;
      setCurrentScriptIndex(newIndex);
      if (isReading) {
        readContent(agentScripts[newIndex]);
      }
    }
  };

  // Function to generate random message
  const generateRandomMessage = () => {
    const randomUser = sampleUsers[Math.floor(Math.random() * sampleUsers.length)]
    const randomMessage = sampleMessages[Math.floor(Math.random() * sampleMessages.length)]
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    return {
      text: randomMessage,
      user: randomUser,
      time: time
    }
  }

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
  }
  
  // Toggle live state with direct audio handling for better user interaction
  const toggleLive = () => {
    setIsLive(!isLive);
    
    // Direct audio handling on user interaction
    if (isLive) {
      // Will be turning off
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current = null;
      }
    } else {
      // Will be turning on
      if (!isMuted && window.createAmbientSound) {
        console.log("Starting ambient sound on user interaction");
        soundRef.current = window.createAmbientSound();
      }
    }
  }

  // Auto-generate messages effect
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      const newMsg = generateRandomMessage()
      setMessages(prev => [...prev, newMsg])

      // Keep only last 50 messages to prevent too much memory usage
      if (messages.length > 50) {
        setMessages(prev => prev.slice(-50))
      }
    }, Math.random() * (3000 - 1000) + 1000) // Random interval between 1-3 seconds

    return () => clearInterval(interval)
  }, [isLive, messages.length])

  // Auto scroll to bottom effect
  useEffect(() => {
    const messageContainer = document.getElementById('message-container')
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setMessages(prev => [...prev, {
      text: newMessage,
      user: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    setNewMessage('')
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#4ADE80] text-center">Experience AGOS</h2>
        
        {/* Split Screen - Video and Chat */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Video Box - 2/3 width */}
          <div className="w-full md:w-2/3">
            <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 overflow-hidden relative h-[600px]">
              {/* Video Content */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#4ADE80]/5 to-transparent"></div>
                  
                  {/* Animated Background Particles */}
                  <div className="absolute inset-0 overflow-hidden opacity-30">
                    <div className="animate-float absolute w-16 h-16 bg-[#4ADE80]/10 rounded-full top-[10%] left-[20%]"></div>
                    <div className="animate-float-reverse absolute w-12 h-12 bg-[#4ADE80]/10 rounded-full top-[30%] right-[25%] animation-delay-1000"></div>
                    <div className="animate-float absolute w-20 h-20 bg-[#4ADE80]/10 rounded-full bottom-[15%] left-[30%] animation-delay-2000"></div>
                    <div className="animate-float-reverse absolute w-14 h-14 bg-[#4ADE80]/10 rounded-full bottom-[35%] right-[15%] animation-delay-3000"></div>
                  </div>
                  
                  {/* Character Image with Animation */}
                  <div className="relative w-72 h-72 rounded-full overflow-hidden animate-subtle-float">
                    <img 
                      src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
                      alt="AI Character" 
                      className="w-full h-full object-cover animate-subtle-pulse"
                    />
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="absolute bottom-40 left-0 right-0 flex justify-center space-x-4">
                    {/* Sound Status */}
                    <div className={`transition-opacity duration-500 ${isLive && !isMuted ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="bg-black/50 text-[#4ADE80] px-4 py-2 rounded-full font-['Share_Tech_Mono'] text-sm">
                        SOUND ACTIVE
                      </span>
                    </div>
                    
                    {/* Reading Status */}
                    <div className={`transition-opacity duration-500 ${isReading ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="bg-black/50 text-[#4ADE80] px-4 py-2 rounded-full font-['Share_Tech_Mono'] text-sm">
                        VOICE ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Audio Visualizer at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-4">
                <div className="flex items-end space-x-1 h-8">
                  {[...Array(50)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-1 bg-[#4ADE80] rounded-t-sm ${(isLive && !isMuted) || isReading ? 'animate-equalizer' : ''}`}
                      style={{
                        height: (isLive && !isMuted) || isReading ? `${Math.max(15, Math.random() * 100)}%` : '15%',
                        animationDelay: `${i * 50}ms`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-between items-center px-6 py-3">
                {/* Navigation and Controls */}
                <div className="flex items-center space-x-4">
                  {/* Stream Controls */}
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={toggleLive}
                      className={`px-4 py-2 rounded-lg font-['Share_Tech_Mono'] text-sm transition-colors
                        ${isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-[#4ADE80] hover:bg-[#22C55E]'}`}
                    >
                      {isLive ? 'STOP STREAM' : 'START STREAM'}
                    </button>
                    
                    {/* Sound toggle button */}
                    <button 
                      onClick={toggleMute}
                      className="text-[#4ADE80] hover:text-[#22C55E] transition-colors"
                    >
                      {isMuted ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* Script Controls */}
                  <div className="flex items-center space-x-2 ml-6">
                    <button 
                      onClick={toggleReading}
                      className={`px-4 py-2 rounded-lg font-['Share_Tech_Mono'] text-sm transition-colors
                        ${isReading ? 'bg-red-500 hover:bg-red-600' : 'bg-[#4ADE80] hover:bg-[#22C55E]'}`}
                    >
                      {isReading ? 'STOP READING' : 'READ CONTENT'}
                    </button>
                    
                    {/* Script navigation */}
                    <div className="flex items-center space-x-1">
                      <button 
                        onClick={goToPreviousScript}
                        disabled={currentScriptIndex === 0}
                        className={`p-1 rounded ${currentScriptIndex === 0 ? 'text-gray-500' : 'text-[#4ADE80] hover:text-[#22C55E]'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={goToNextScript}
                        disabled={currentScriptIndex === agentScripts.length - 1}
                        className={`p-1 rounded ${currentScriptIndex === agentScripts.length - 1 ? 'text-gray-500' : 'text-[#4ADE80] hover:text-[#22C55E]'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status Info */}
                <div className="flex items-center space-x-2">
                  {isReading && (
                    <span className="text-[#4ADE80] font-['Share_Tech_Mono'] text-sm mr-2">
                      Script {currentScriptIndex + 1}/{agentScripts.length}
                    </span>
                  )}
                  <span className={`w-2 h-2 ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></span>
                  <p className="text-[#4ADE80] font-['Share_Tech_Mono']">
                    {isLive ? 'Live right now' : 'Stream paused'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Box - 1/3 width */}
          <div className="w-full md:w-1/3">
            <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-[#4ADE80]/30">
                <h3 className="text-[#4ADE80] font-['Share_Tech_Mono']">Live Chat</h3>
              </div>

              {/* Messages Area */}
              <div id="message-container" className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`space-y-1 ${message.user === "You" ? 'ml-auto' : ''}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className={`font-['Share_Tech_Mono'] text-sm ${message.user === "AnchorMan" ? 'text-[#22C55E]' : 'text-[#4ADE80]'}`}>
                        {message.user}
                      </span>
                      <span className="text-gray-500 text-xs">{message.time}</span>
                    </div>
                    <p className={`text-gray-300 text-sm ${message.user === "You" ? 'text-right' : ''}`}>
                      {message.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-[#4ADE80]/30">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-[#112118] border border-[#4ADE80]/30 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-[#4ADE80]/60"
                  />
                  <button 
                    type="submit"
                    className="bg-[#4ADE80] text-black px-4 py-2 rounded-lg font-['Share_Tech_Mono'] hover:bg-[#22C55E] transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes equalizer {
          0%, 100% { height: 15%; }
          50% { height: 70%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        
        .animate-subtle-float {
          animation: subtle-float 3s ease-in-out infinite;
        }
        
        .animate-subtle-pulse {
          animation: subtle-pulse 2s ease-in-out infinite;
        }
        
        .animate-equalizer {
          animation: equalizer 0.5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
}

export default Experience 