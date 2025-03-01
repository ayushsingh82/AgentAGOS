import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4ADE80] sm:text-5xl md:text-6xl">
            Welcome to Move-AI
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create, customize, and chat with AI agents. Build your perfect virtual assistant.
          </p>
          <div className="mt-8">
            <Link 
              to="/create-agent"
              className="inline-block bg-[#4ADE80] text-[#0F172A] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#22C55E] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home