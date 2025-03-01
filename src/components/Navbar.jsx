import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-[#0A1A15] border-b-2 border-[#4ADE80]/30 fixed w-full z-30 top-0 shadow-[0_1px_10px_-2px_rgba(74,222,128,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-[#4ADE80]">Move-AI</span>
            </Link>
            <div className="hidden md:flex items-center">
              <NavItem to="/features" text="Features" />
              <Divider />
              <NavItem to="/experience" text="Experience Rogue" />
              <Divider />
              <NavItem to="/create" text="Create w/ Rogue" />
              <Divider />
              <NavItem to="/stake" text="STAKE $ROGUE" />
              <Divider />
              <NavItem to="/terminal" text="Terminal" isLast />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-[#112118] rounded-lg px-4 py-2 border border-[#4ADE80]/20">
              <span className="text-gray-400 text-sm">$ROGUE:</span>
              <span className="text-[#4ADE80] ml-2">0.000155</span>
            </div>
            <Link 
              to="/create-agent" 
              className="bg-[#4ADE80] text-[#0F172A] px-4 py-2 rounded-md hover:bg-[#22C55E] transition-colors"
            >
              Create Agent
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ to, text, isLast }) {
  return (
    <Link 
      to={to} 
      className={`
        relative px-4 py-2 text-gray-300 hover:text-[#4ADE80] transition-colors
        ${!isLast && 'bg-[#112118]'}
        group
      `}
    >
      {text}
      <div className="absolute inset-0 border border-[#4ADE80]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

function Divider() {
  return (
    <div className="relative h-8 w-4 overflow-hidden flex items-center">
      <div 
        className="absolute w-6 h-px bg-[#4ADE80]/20 rotate-45"
        style={{ transform: 'rotate(25deg) scaleX(1.5)' }}
      />
    </div>
  )
}

export default Navbar 