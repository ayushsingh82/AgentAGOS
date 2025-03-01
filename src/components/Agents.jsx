import { Link } from 'react-router-dom'

function Agents() {
  const agents = [
    { id: 1, name: 'Assistant', description: 'General purpose AI assistant' },
    { id: 2, name: 'Coder', description: 'Programming and technical help' },
    // Add more agents as needed
  ]

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#4ADE80]">Your Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="border border-[#4ADE80]/20 rounded-lg p-6 bg-[#112118] hover:bg-[#1A2F23] transition">
              <h3 className="text-xl font-semibold text-[#4ADE80]">{agent.name}</h3>
              <p className="text-gray-400 mt-2">{agent.description}</p>
              <Link
                to={`/chat/${agent.id}`}
                className="mt-4 inline-block bg-[#4ADE80] text-[#0F172A] px-4 py-2 rounded-md hover:bg-[#22C55E] transition-colors"
              >
                Chat
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agents 