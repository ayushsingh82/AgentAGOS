import React from 'react'
import { Link } from 'react-router-dom'

function CreateVideo() {
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

        {/* Create Video Section - Modified layout */}
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
                placeholder="type_your_request_here"
                className="w-full h-16 bg-[#1F1F1F] border-2 border-[#4ADE80]/30 rounded-lg px-4 py-2 text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]/60 font-['Share_Tech_Mono'] text-sm resize-none"
              />
            </div>

            {/* Create Button */}
            <button className="bg-[#4ADE80] text-black px-6 py-2 rounded-lg font-['Share_Tech_Mono'] text-sm hover:bg-[#22C55E] transition-colors whitespace-nowrap">
              Create with 30k $AGOS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateVideo