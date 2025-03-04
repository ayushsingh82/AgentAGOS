import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Agents from './components/Agents'
import CreateAgent from './components/CreateAgent'
import AgentChat from './components/AgentChat'
import Features from './components/Features'
import Stake from './components/Stake'
import Create from './components/Create'
import CreateVideo from './components/CreateVideo'
import Experience from './components/Experience'



function App() {

   
  return (
    <div className="min-h-screen pb-12 bg-[#0C1C16] relative">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[#4ADE80]/[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4ADE80 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #4ADE80 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px',
          opacity: '0.1',
          maskImage: `
            linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent),
            radial-gradient(circle at center, 
              transparent 20%, 
              rgba(0, 0, 0, 0.3) 35%,
              rgba(0, 0, 0, 0.6) 50%,
              #000 70%
            )
          `,
          maskComposite: 'intersect'
        }}
      />
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/create-agent" element={<CreateAgent />} />
          <Route path="/chat/:agentId" element={<AgentChat />} />
          <Route path="/features" element={<Features />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/create" element={<Create />} />
          <Route path='/create-video' element={<CreateVideo/>}/>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
