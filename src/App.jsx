import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Agents from './components/Agents'
import CreateAgent from './components/CreateAgent'
import AgentChat from './components/AgentChat'

function App() {
  return (
    <div className="min-h-screen bg-[#0A1A15]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/create-agent" element={<CreateAgent />} />
        <Route path="/chat/:agentId" element={<AgentChat />} />
      </Routes>
    </div>
  )
}

export default App
