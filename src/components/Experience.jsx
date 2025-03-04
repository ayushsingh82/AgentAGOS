import React, { useState, useEffect } from 'react'

function Experience() {
  const [messages, setMessages] = useState([
    { text: "Hello everyone! Welcome to the stream!", user: "AnchorMan", time: "4:30 PM" },
    { text: "This is amazing!", user: "User123", time: "4:31 PM" },
    { text: "Can't wait to see more", user: "Viewer456", time: "4:32 PM" },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isLive, setIsLive] = useState(true)

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
  }, [isLive])

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
        <div className="flex space-x-6">
          {/* Live Stream Box - 2/3 width */}
          <div className="w-2/3">
            <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 overflow-hidden">
              {/* Stream Title Bar */}
              <div className="p-4 border-b border-[#4ADE80]/30 flex justify-between items-center">
                <h2 className="text-[#4ADE80] font-['Share_Tech_Mono'] text-xl">Live with AnchorMan</h2>
                <div className="flex items-center space-x-2">
                  {isLive && (
                    <span className="flex items-center space-x-2 bg-red-500/20 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-500 text-sm font-['Share_Tech_Mono']">LIVE</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Video Area */}
              <div className="aspect-video bg-black/50 relative">
                {/* Placeholder for video stream */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
                    alt="Stream Thumbnail"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </div>

              {/* Stream Info and Controls */}
              <div className="p-4 flex items-center justify-between">
                {/* Navigation and Stop Controls */}
                <div className="flex items-center space-x-4">
                  <button 
                    className="text-[#4ADE80] hover:text-[#22C55E] transition-colors"
                    onClick={() => console.log('Previous')}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button 
                    onClick={() => setIsLive(!isLive)}
                    className={`px-6 py-2 rounded-lg font-['Share_Tech_Mono'] text-sm transition-colors
                      ${isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-[#4ADE80] hover:bg-[#22C55E]'}`}
                  >
                    {isLive ? 'STOP' : 'START'}
                  </button>

                  <button 
                    className="text-[#4ADE80] hover:text-[#22C55E] transition-colors"
                    onClick={() => console.log('Next')}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Live Status */}
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <p className="text-[#4ADE80] font-['Share_Tech_Mono']">
                    Live right now
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Box - 1/3 width */}
          <div className="w-1/3">
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
                      <span className="text-[#4ADE80] font-['Share_Tech_Mono'] text-sm">{message.user}</span>
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
    </div>
  )
}

export default Experience 