import React, { useState } from 'react'

function Stake() {
  const [isStaking, setIsStaking] = useState(true) // Toggle between stake/unstake
  const [amount, setAmount] = useState('')

  const benefits = [
    {
      title: "Earn a share from $ROGUE's revenue",
      icon: "💰"
    },
    {
      title: "Early access to new features",
      icon: "🔓"
    },
    {
      title: "Access to exclusive staker-only features",
      icon: "⭐"
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Staking Interface */}
        <div className="bg-black rounded-xl border-2 border-[#4ADE80]/30 p-6 mb-12">
          {/* Toggle Buttons */}
          <div className="flex space-x-1 bg-[#112118] p-1 rounded-lg mb-6 w-fit">
            <button 
              className={`px-4 py-2 rounded-md font-['Press_Start_2P'] text-xs transition-all
                ${isStaking ? 'bg-[#4ADE80] text-black' : 'text-[#4ADE80] hover:bg-[#4ADE80]/10'}`}
              onClick={() => setIsStaking(true)}
            >
              stake_$rogue
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-['Press_Start_2P'] text-xs transition-all
                ${!isStaking ? 'bg-[#4ADE80] text-black' : 'text-[#4ADE80] hover:bg-[#4ADE80]/10'}`}
              onClick={() => setIsStaking(false)}
            >
              unstake_$rogue
            </button>
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2 font-['Press_Start_2P']">
              {isStaking ? 'enter amount of $ROGUE to stake' : 'enter amount of $ROGUE to unstake'}
            </p>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#112118] border-2 border-[#4ADE80]/30 rounded-lg px-4 py-3 text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]/60"
                placeholder="input_$ROGUE_TO_STAKE"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4ADE80]/10 text-[#4ADE80] px-3 py-1 rounded-md hover:bg-[#4ADE80]/20 transition-all text-sm">
                Max
              </button>
            </div>
          </div>

          {/* Balance Info */}
          <div className="space-y-2 mb-6">
            <p className="text-gray-400 text-sm font-['Press_Start_2P']">
              Available Balance: <span className="text-[#4ADE80]">0.00000 ROGUE</span>
            </p>
            <p className="text-gray-400 text-sm font-['Press_Start_2P']">
              Staked Balance: <span className="text-[#4ADE80]">0.00000 ROGUE</span>
            </p>
          </div>

          {/* Connect Wallet Button */}
          <button className="w-full bg-[#4ADE80] text-black py-3 rounded-lg font-['Press_Start_2P'] text-sm hover:bg-[#22C55E] transition-colors">
            Connect Wallet
          </button>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-center font-['Press_Start_2P'] text-xl text-[#4ADE80] mb-8">
            WHY STAKE ROGUE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-black border-2 border-[#4ADE80]/30 rounded-xl p-6 text-center hover:border-[#4ADE80]/60 transition-all hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.2)]"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <p className="text-gray-300 font-['Press_Start_2P'] text-sm leading-relaxed">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stake 