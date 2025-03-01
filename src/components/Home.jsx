import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Left side content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              <span className="text-[#4ADE80]">Create AI Agents</span>
              <span className="text-gray-300"> That Sound Human</span>
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              The Very First No-Code Multilingual Audio AI Framework
            </p>
            <div className="space-y-6">
              <Link 
                to="/create-agent"
                className="inline-block bg-[#4ADE80] text-[#0F172A] px-6 py-3 rounded-md text-base font-semibold hover:bg-[#22C55E] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-[500px] h-[500px] group">
            {/* Multiple layered glows for depth effect */}
            <div className="absolute inset-0 bg-[#4ADE80]/5 rounded-full blur-[100px] group-hover:bg-[#4ADE80]/10 transition-all duration-700"></div>
            <div className="absolute inset-[10%] bg-[#4ADE80]/10 rounded-full blur-[80px] group-hover:bg-[#4ADE80]/15 transition-all duration-700"></div>
            <div className="absolute inset-[20%] bg-[#4ADE80]/15 rounded-full blur-[60px] group-hover:bg-[#4ADE80]/20 transition-all duration-700"></div>
            
            {/* Inner glow container */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4ADE80]/20 via-transparent to-[#4ADE80]/20 opacity-75"></div>
              <img 
                src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
                alt="AI Character" 
                className="relative z-10 w-full h-full object-contain mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home