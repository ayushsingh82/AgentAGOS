import React, { useState, useEffect, useRef } from 'react'

function Terminal() {
  const [output, setOutput] = useState([])
  const terminalRef = useRef(null)
  
  // Sample terminal outputs
  const systemMessages = [
    "Initializing AGOS core systems...",
    "Loading neural network architecture...",
    "Initializing memory subsystems...",
    "Connecting to knowledge graph...",
    "Loading conversational models...",
    "Initializing audio processing modules...",
    "Calibrating voice synthesis engines...",
    "Loading multilingual support...",
    "Initializing emotion recognition...",
    "Connecting to distributed compute nodes...",
    "Loading agent personality matrices...",
    "Initializing context awareness module...",
    "Running system integrity checks...",
    "Validating security protocols...",
    "Establishing secure communication channels...",
    "Memory optimization in progress...",
    "Scanning for available resources...",
    "Initializing adaptive learning modules...",
    "Loading voice fingerprint database...",
    "Final system checks: GREEN",
    "AGOS brain fully operational."
  ]
  
  const commands = [
    "cd /home/agent/core",
    "ls -la",
    "cat neural_config.json",
    "sudo systemctl start agos-voice",
    "vim knowledge_base.txt",
    "python3 update_models.py",
    "./run_diagnostics.sh",
    "top | grep agent",
    "netstat -tuln",
    "curl -X POST https://api.agos.ai/v1/initialize",
    "ssh agent@10.0.13.37",
    "docker ps | grep agos",
    "git pull origin master",
    "npm run build:voice",
    "node server.js",
    "tail -f logs/system.log",
    "ps aux | grep agent",
    "df -h",
    "free -m",
    "ping brain.agos.ai"
  ]
  
  const logs = [
    "[INFO] Processing user query...",
    "[DEBUG] Tokenizing input: 342 tokens",
    "[INFO] Retrieving context from knowledge base",
    "[DEBUG] Context window: 1024 tokens",
    "[INFO] Generating response...",
    "[DEBUG] Temperature: 0.7, Top-p: 0.95",
    "[INFO] Voice synthesis running on GPU0",
    "[WARN] High memory usage detected",
    "[INFO] Runtime: 267ms",
    "[DEBUG] Cache hit ratio: 78.3%",
    "[INFO] User sentiment: positive",
    "[DEBUG] Conversation context updated",
    "[INFO] Response quality score: 0.94",
    "[DEBUG] Logging conversation to history",
    "[INFO] Preparing next-turn predictions",
    "[DEBUG] Loading fallback responses",
    "[INFO] Audio buffer status: 87%",
    "[DEBUG] Network latency: 42ms",
    "[INFO] Personalization features applied",
    "[DEBUG] Token usage: 876/100000"
  ]
  
  // Function to generate random terminal output
  const generateOutput = () => {
    const types = ["command", "output", "log"]
    const type = types[Math.floor(Math.random() * types.length)]
    
    let content = ""
    let className = ""
    
    switch(type) {
      case "command":
        content = "$ " + commands[Math.floor(Math.random() * commands.length)]
        className = "text-[#4ADE80]"
        break
      case "output":
        if (Math.random() > 0.7) {
          // Sometimes show system messages
          content = systemMessages[Math.floor(Math.random() * systemMessages.length)]
          className = "text-blue-400"
        } else {
          // Show hex dumps or config snippets
          if (Math.random() > 0.5) {
            content = generateHexDump()
            className = "text-gray-500"
          } else {
            content = generateConfigSnippet()
            className = "text-yellow-200"
          }
        }
        break
      case "log":
        content = logs[Math.floor(Math.random() * logs.length)]
        className = content.includes("[ERROR]") ? "text-red-500" : 
                   content.includes("[WARN]") ? "text-yellow-500" : 
                   content.includes("[DEBUG]") ? "text-gray-400" : "text-white"
        break
    }
    
    return { content, className }
  }
  
  // Generate hex dump like output
  const generateHexDump = () => {
    const address = Math.floor(Math.random() * 0xfffffff).toString(16).padStart(8, '0')
    let result = `0x${address}0: `
    
    for (let i = 0; i < 16; i++) {
      result += Math.floor(Math.random() * 0xff).toString(16).padStart(2, '0') + " "
      if (i === 7) result += " "
    }
    
    return result
  }
  
  // Generate config snippet
  const generateConfigSnippet = () => {
    const configs = [
      "\"model_size\": \"large\",",
      "\"attention_heads\": 32,",
      "\"context_window\": 4096,",
      "\"voice_id\": \"warm-male-v2\",",
      "\"sampling_rate\": 24000,",
      "\"max_tokens\": 1000,",
      "\"temperature\": 0.7,",
      "\"top_p\": 0.95,",
      "\"languages\": [\"en\", \"es\", \"fr\", \"de\"],",
      "\"enable_streaming\": true,",
      "\"use_gpu\": true,",
      "\"cache_size\": \"4GB\",",
      "\"threading\": \"auto\",",
      "\"api_version\": \"v1.2.3\","
    ]
    
    return configs[Math.floor(Math.random() * configs.length)]
  }
  
  // Add new output line
  useEffect(() => {
    // Initial system message
    setOutput([
      { content: "AGOS NEURAL CORE v1.2.3", className: "text-[#4ADE80] font-bold" },
      { content: "© 2023 AgentAGOS - All Rights Reserved", className: "text-gray-500" },
      { content: "Initializing terminal interface...", className: "text-blue-400" },
      { content: "Type 'help' for available commands", className: "text-gray-300" },
      { content: "", className: "" }
    ])
    
    // Add new content at random intervals
    const interval = setInterval(() => {
      setOutput(prev => {
        // Keep only the last 100 lines to prevent too much DOM content
        const newOutput = [...prev, generateOutput()]
        return newOutput.slice(-100)
      })
    }, Math.random() * (800 - 200) + 200)
    
    return () => clearInterval(interval)
  }, [])
  
  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])
  
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Terminal Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-['Share_Tech_Mono'] text-[#4ADE80] mb-2">
            Brain of the Agent
          </h1>
          <p className="text-gray-400 font-['Share_Tech_Mono'] text-sm">
            Direct neural interface to AGOS core systems
          </p>
        </div>
        
        {/* Terminal Container */}
        <div className="border-2 border-[#4ADE80]/30 rounded-xl overflow-hidden">
          {/* Terminal Header Bar with controls */}
          <div className="bg-[#0A1A15] py-2 px-4 border-b border-[#4ADE80]/30 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-gray-400 text-sm font-['Share_Tech_Mono']">
              agent@brain:~
            </div>
          </div>
          
          {/* Terminal Output */}
          <div 
            ref={terminalRef}
            className="bg-[#0F1A18] h-[60vh] p-4 font-mono text-sm overflow-y-auto whitespace-pre-wrap"
          >
            {output.map((line, i) => (
              <div key={i} className={line.className}>
                {line.content}
              </div>
            ))}
            
            {/* Blinking cursor */}
            <span className="inline-block w-2 h-4 bg-[#4ADE80] ml-1 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal 