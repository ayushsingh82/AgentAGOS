import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CreateVideo() {
  const [loading, setLoading] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [promptText, setPromptText] = useState('')
  
  const recentVideos = [
    {
      title: "Talk about the rug p",
      author: "8rKsb...z1nsD"
    },
    {
      title: "hello rogue",
      author: "EHrV4...pVcQ4"
    },
    {
      title: "talk about the user",
      author: "DLV5K...cxF5c"
    },
    {
      title: "congratulate wizard",
      author: "5ijT8...bfGR3"
    },
    {
      title: "Roast Elon musk for",
      author: "F5ApF...dr5ph"
    }
  ]

  const handleSubmit = () => {
    if (!promptText.trim()) return
    
    setLoading(true)
    setVideoReady(false)
    
    // Simulate video generation with timeout
    setTimeout(() => {
      setLoading(false)
      setVideoReady(true)
    }, 10000) // 10 seconds
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/create"
          className="inline-flex items-center text-[#4ADE80] hover:text-[#22C55E] transition-colors mb-12"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-['Share_Tech_Mono']">Back to Create</span>
        </Link>

        {/* Recent Community Creations */}
        <div className="mb-12">
          <h2 className="text-xl text-[#4ADE80] font-['Share_Tech_Mono'] mb-6">
            Recent Community Creations
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4">
              {recentVideos.map((video, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0 w-72 h-96 rounded-xl p-4 border-2 border-[#4ADE80]/30 hover:border-[#4ADE80]/60 transition-all overflow-hidden group"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
                      alt="Background" 
                      className="w-full h-full object-cover opacity-70"
                    />
                    {/* Lighter Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-black/50" />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-[#4ADE80]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-gray-300 font-['Share_Tech_Mono'] text-sm mb-2">
                      {video.title}
                    </p>
                    <p className="text-[#4ADE80]/70 font-['Share_Tech_Mono'] text-xs">
                      by: {video.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Generated Video Display */}
        {videoReady && (
          <div className="mb-12 bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 p-6">
            <h3 className="text-xl text-[#4ADE80] font-['Share_Tech_Mono'] mb-4">
              Your Generated Video
            </h3>
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              {/* Video Player Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img 
                  src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
                  alt="Generated Video" 
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#4ADE80]/80 flex items-center justify-center cursor-pointer hover:bg-[#4ADE80] transition-colors">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 font-['Share_Tech_Mono']">
                Prompt: <span className="text-[#4ADE80]">{promptText}</span>
              </p>
            </div>
          </div>
        )}

        {/* Create Video Section */}
        <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 p-4">
          <div className="text-center mb-4">
            <p className="text-gray-400 font-['Share_Tech_Mono'] text-xs">
              video_generation_takes about_2-3 mins_once_payment_is_validated
            </p>
          </div>

          {/* Input and Button Row */}
          <div className="flex space-x-4 items-start">
            {/* Input Area */}
            <div className="flex-1">
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="type_your_request_here"
                className="w-full h-16 bg-[#1F1F1F] border-2 border-[#4ADE80]/30 rounded-lg px-4 py-2 text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]/60 font-['Share_Tech_Mono'] text-sm resize-none"
              />
            </div>

            {/* Create Button */}
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className={`
                px-6 py-2 rounded-lg font-['Share_Tech_Mono'] text-sm whitespace-nowrap
                ${loading 
                  ? 'bg-[#4ADE80]/60 cursor-not-allowed text-black/70' 
                  : 'bg-[#4ADE80] hover:bg-[#22C55E] transition-colors text-black'
                }
              `}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating Video...</span>
                </div>
              ) : (
                "Create with 30k $AGOS"
              )}
            </button>
          </div>
          
          {/* Loading Progress Indicator */}
          {loading && (
            <div className="mt-4 p-4 bg-[#112118] rounded-lg border border-[#4ADE80]/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 font-['Share_Tech_Mono'] text-xs">Processing your request</span>
                <span className="text-[#4ADE80] font-['Share_Tech_Mono'] text-xs">
                  {Math.floor(Math.random() * 81) + 20}% Complete
                </span>
              </div>
              <div className="w-full bg-[#1F1F1F] rounded-full h-2.5">
                <div className="bg-[#4ADE80] h-2.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
              </div>
              <div className="mt-2 text-gray-500 font-['Share_Tech_Mono'] text-xs animate-pulse">
                [INFO] Generating video frames...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateVideo