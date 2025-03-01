import { useParams } from 'react-router-dom'

function AgentChat() {
  const { agentId } = useParams()

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-[calc(100vh-8rem)] flex flex-col bg-[#112118] rounded-lg border border-[#4ADE80]/20">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Chat messages will go here */}
            <div className="bg-[#1A2F23] rounded-lg p-4 max-w-[80%]">
              <p className="text-gray-300">Hello! How can I help you today?</p>
            </div>
          </div>
          <div className="border-t border-[#4ADE80]/20 p-4">
            <form className="flex space-x-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-md bg-[#0A1A15] border-[#4ADE80]/20 text-gray-300 
                         focus:border-[#4ADE80] focus:ring-[#4ADE80] shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#4ADE80] text-[#0F172A] px-4 py-2 rounded-md hover:bg-[#22C55E] 
                         transition-colors font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentChat 