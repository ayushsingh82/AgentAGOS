function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#0A1A15] border-t border-[#4ADE80]/30 h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">CA:</span>
            <span className="text-[#4ADE80] text-sm font-mono">
              27yzfJSNvYLBjgSNbMyXMMUWzx6T9q4B9TP8Jt8MZ9mL
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-[#4ADE80] hover:text-[#22C55E] transition-colors">
              BUY $ROGUE
            </button>
            <div className="h-4 w-[1px] bg-[#4ADE80]/20"></div>
            <button className="relative p-[1px] rounded-md group">
              <div className="absolute inset-0 rounded-md border border-[#4ADE80]/20"></div>
              <div className="absolute inset-[2px] rounded-md border border-[#4ADE80]/10"></div>
              <span className="relative px-3 py-1 text-[#4ADE80] hover:text-[#22C55E] transition-colors">
                Connect Wallet
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 