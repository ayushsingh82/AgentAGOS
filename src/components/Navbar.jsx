import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-[#0A1A15] border-b-2 border-[#4ADE80]/30 fixed w-full z-30 top-0 shadow-[0_1px_10px_-2px_rgba(74,222,128,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#4ADE80] ml-8">AgentAGOS</span>
            </Link>
            <div className="hidden md:flex items-center ml-16">
              <div className="relative flex items-center rounded-md bg-[#112118]/50 p-[1px] group">
                {/* Outer glowing border */}
                <div className="absolute inset-0 rounded-md border border-[#4ADE80]/20"></div>
                {/* Inner double border effect */}
                <div className="absolute inset-[3px] rounded-md border border-[#4ADE80]/10"></div>
                
                <div className="flex items-center relative">
                  <NavItem to="/features" text="Features" />
                  <Divider />
                  <NavItem to="/experience" text="Experience AGOS" />
                  <Divider />
                  <NavItem to="/create" text="Create w/ AGOS" />
                  <Divider />
                  <NavItem to="/stake" text="STAKE $AGOS" />
                  <Divider />
                  <NavItem to="/terminal" text="Terminal" isLast />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative p-[1px] rounded-lg group">
              <div className="absolute inset-0 rounded-lg border border-[#4ADE80]/20"></div>
              <div className="absolute inset-[3px] rounded-lg border border-[#4ADE80]/10"></div>
              <div className="relative bg-[#112118] rounded-lg px-4 py-2.5 border border-[#4ADE80]/20">
                <span className="text-gray-400 text-sm">$AGOS:</span>
                <span className="text-[#4ADE80] ml-2">0.000155</span>
              </div>
            </div>
            <Link 
              to="/create-agent" 
              className="bg-[#4ADE80] text-[#0F172A] px-4 py-2.5 rounded-md hover:bg-[#22C55E] transition-colors"
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
        relative px-4 py-2.5 text-gray-300 hover:text-[#4ADE80] transition-colors
        ${!isLast && 'border-r border-[#4ADE80]/20'}
        hover:bg-[#1A2F23] group
      `}
    >
      {text}
    </Link>
  )
}

function Divider() {
  return (
    <div className="relative h-10 w-[2px] flex items-center justify-center">
      <div 
        className="h-6 w-[2px] bg-[#4ADE80]/30"
      />
    </div>
  )
}

export default Navbar 