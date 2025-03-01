import React from 'react'
import { Link } from 'react-router-dom'

function Create() {
  const createOptions = [
    {
      title: "Featured Videos",
      description: "Pick your agent and create videos based on simple prompts.",
      icon: "🎥",
      link: "/create/videos",
      isComingSoon: false
    },
    {
      title: "Create a Podcast",
      description: "Create a room, add topics, invite agents, and host your own personalised podcast instantly.",
      icon: "🎙️",
      link: "/create/podcast",
      isComingSoon: true
    },
    {
      title: "Integrate",
      description: "Give your agents a voice with simple prompt, and integrate it across different applications and channels.",
      icon: "🔌",
      link: "/create/integrate",
      isComingSoon: true
    }
  ]

  const ArrowButton = ({ isComingSoon, link }) => (
    <div className="mt-6 flex justify-end">
      {isComingSoon ? (
        <div className="relative group cursor-not-allowed">
          <div className="absolute -inset-0.5 bg-[#4ADE80]/20 rounded-lg blur opacity-30" />
          <button
            disabled
            className="relative px-6 py-3 bg-[#1F1F1F] border border-[#4ADE80]/20 rounded-lg font-['Share_Tech_Mono'] text-[#4ADE80]/40 flex items-center space-x-2"
          >
            <span>Coming Soon</span>
            <svg className="w-6 h-6 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : (
        <Link to={link} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          <button className="relative px-6 py-3 bg-[#1F1F1F] border border-[#4ADE80]/40 rounded-lg font-['Share_Tech_Mono'] text-[#4ADE80] flex items-center space-x-2 group-hover:border-[#4ADE80] transition-colors">
            <span>Get Started</span>
            <svg 
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      )}
    </div>
  )

  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {createOptions.map((option, index) => (
            <div key={option.title} className="relative">
              {/* Vertical line */}
              {index !== createOptions.length - 1 && (
                <div className="absolute left-1/2 top-full h-8 w-[2px] bg-gradient-to-b from-[#4ADE80]/30 to-transparent" />
              )}
              
              {/* Box */}
              <div className="relative bg-[#1F1F1F] rounded-xl overflow-hidden group">
                {/* Border and glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/0 via-[#4ADE80]/50 to-[#4ADE80]/0 rounded-xl animate-shimmer" />
                <div className="relative p-[1px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ADE80]/30 to-[#4ADE80]/30 rounded-xl blur-sm" />
                  
                  {/* Content */}
                  <div className="relative bg-[#1F1F1F] rounded-xl p-6 border-2 border-[#4ADE80]/30 hover:border-[#4ADE80]/60 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{option.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl text-[#4ADE80] font-['Share_Tech_Mono']">
                            {option.title}
                          </h3>
                          {option.isComingSoon && (
                            <span className="text-xs text-[#4ADE80]/70 font-['Share_Tech_Mono'] px-2 py-1 border border-[#4ADE80]/30 rounded-md">
                              COMING SOON
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mt-2 font-['Share_Tech_Mono'] text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow Button */}
                    <ArrowButton isComingSoon={option.isComingSoon} link={option.link} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Create 