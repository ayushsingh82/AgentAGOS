import React, { useState } from 'react'

function TextToText() {
  const [prompt, setPrompt] = useState('')
  const [generatedText, setGeneratedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const SEARCH_API_KEY = 'YOUR_SEARCH_API_KEY'  // Replace with your API key
  const SEARCH_ENGINE_ID = 'YOUR_SEARCH_ENGINE_ID'  // Replace with your search engine ID

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(prompt)}&key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}`
      )

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const result = await response.json()
      console.log('Search results:', result)
      
      if (result.items && result.items.length > 0) {
        setGeneratedText(result.items.map(item => `- ${item.title}: ${item.snippet}`).join('\n'))
      } else {
        setGeneratedText('No relevant content found. Please try a different search.')
      }
    } catch (error) {
      console.error('Error details:', error)
      setGeneratedText(`Error: ${error.message || 'Failed to fetch content. Please try again.'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#4ADE80] font-['Share_Tech_Mono'] mb-2">
                Enter your query
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your search query..."
                className="w-full h-32 bg-[#112118] border-2 border-[#4ADE80]/30 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#4ADE80]/60 font-['Share_Tech_Mono'] resize-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  px-6 py-3 rounded-lg font-['Share_Tech_Mono'] text-sm
                  ${isLoading 
                    ? 'bg-[#4ADE80]/50 cursor-not-allowed' 
                    : 'bg-[#4ADE80] hover:bg-[#22C55E] transition-colors'
                  }
                `}
              >
                {isLoading ? 'Fetching...' : 'Fetch Data'}
              </button>
            </div>
          </form>
        </div>

        {generatedText && (
          <div className="bg-[#1F1F1F] rounded-xl border-2 border-[#4ADE80]/30 p-6">
            <h3 className="text-[#4ADE80] font-['Share_Tech_Mono'] mb-4">
              Fetched Data
            </h3>
            <div className="bg-[#112118] rounded-lg p-4 border border-[#4ADE80]/20">
              <pre className="text-gray-300 font-['Share_Tech_Mono'] text-sm whitespace-pre-wrap">
                {generatedText}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TextToText
