import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Left side content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="text-[#4ADE80]">Create AI Agents</span>
              <span className="text-gray-300"> That Sound Human</span>
            </h1>
            <p className="text-2xl text-gray-400 mb-8">
              The Very First No-Code Multilingual Audio AI Framework
            </p>
            <div className="space-y-6">
              <Link 
                to="/create-agent"
                className="inline-block bg-[#4ADE80] text-[#0F172A] px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#22C55E] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/10 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://img.freepik.com/premium-photo/anime-character-sitting-desk-with-headphones-generative-ai_901242-445.jpg"
              alt="AI Character" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home