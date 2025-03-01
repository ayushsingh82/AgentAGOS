import React from 'react'

function Features() {
  const topFeatures = [
    {
      title: "Multilingual Support",
      description: "Create agents that speak and understand multiple languages fluently. Real-time translation across conversations.",
      icon: "🌐",
      gradient: "from-[#4ADE80]/35 to-[#4ADE80]/20",
      delay: "0"
    },
    {
      title: "Integrate Anywhere",
      description: "Integrate voice across different applications and social channels.",
      icon: "🔌",
      gradient: "from-[#4ADE80]/30 to-[#4ADE80]/15",
      delay: "100"
    }
  ]

  const bottomFeatures = [
    {
      title: "Emotional Intelligence",
      description: "Agents that adapt tone and responses based on conversation context",
      icon: "🧠",
      gradient: "from-[#4ADE80]/20 to-[#4ADE80]/5",
      delay: "200"
    },
    {
      title: "Memory Systems",
      description: "Natural conversations that build on past interactions",
      icon: "🔄",
      gradient: "from-[#4ADE80]/25 to-[#4ADE80]/10",
      delay: "300"
    },
    {
      title: "Unique Voice Creation",
      description: 'Generate unique voices with simple prompts: "Warm, friendly male voice in his 30s" → Done',
      icon: "🎙️",
      gradient: "from-[#4ADE80]/30 to-[#4ADE80]/15",
      delay: "400"
    }
  ]

  const FeatureBox = ({ feature, isTop }) => (
    <div
      className={`group relative transform ${isTop ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-all duration-300`}
      style={{
        animation: `fadeIn 0.5s ease-out forwards`,
        animationDelay: `${feature.delay}ms`,
        opacity: 0
      }}
    >
      {/* Animated border background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/0 via-[#4ADE80]/50 to-[#4ADE80]/0 rounded-xl animate-shimmer" />
      
      {/* Main container with double border effect */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ADE80]/30 to-[#4ADE80]/30 rounded-xl blur-sm" />
        
        {/* Main content box */}
        <div className={`
          relative overflow-hidden rounded-xl p-6 h-full
          bg-black
          border-2 border-[#4ADE80]/30
          hover:border-[#4ADE80]/60
          transition-all duration-500
          group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]
          hover:scale-105
          font-['Press_Start_2P']
        `}>
          {/* Inner border */}
          <div className="absolute inset-[3px] rounded-lg border border-[#4ADE80]/20" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #4ADE80 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-base font-normal text-[#4ADE80] mb-4 leading-relaxed">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Hover Effect Corner */}
          <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-[3px] h-8 bg-gradient-to-b from-[#4ADE80] to-transparent" />
            <div className="absolute top-0 left-0 w-8 h-[3px] bg-gradient-to-r from-[#4ADE80] to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 right-0 w-[3px] h-8 bg-gradient-to-t from-[#4ADE80] to-transparent" />
            <div className="absolute bottom-0 right-0 w-8 h-[3px] bg-gradient-to-l from-[#4ADE80] to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-block relative left-1/2 -translate-x-1/2 mb-16">
          <div className="relative">
            {/* Background with border */}
            <div className="absolute -inset-1 bg-black rounded-lg"></div>
            <h2 className="relative text-2xl font-normal text-center rounded-lg bg-[#4ADE80] px-8 py-3 border-2 border-black font-['Press_Start_2P']">
              <span className="text-black">Main Pillars</span>
              <span className="text-white"> of ROGUE</span>
            </h2>
          </div>
        </div>
        
        {/* Top Row - 2 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {topFeatures.map((feature) => (
            <FeatureBox key={feature.title} feature={feature} isTop={true} />
          ))}
        </div>

        {/* Bottom Row - 3 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomFeatures.map((feature) => (
            <FeatureBox key={feature.title} feature={feature} isTop={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features 