function CreateAgent() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#4ADE80]">Create New Agent</h2>
        <form className="max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Agent Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-[#112118] border-[#4ADE80]/20 text-gray-300 
                         focus:border-[#4ADE80] focus:ring-[#4ADE80] shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Description</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#112118] border-[#4ADE80]/20 text-gray-300 
                         focus:border-[#4ADE80] focus:ring-[#4ADE80] shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4ADE80] text-[#0F172A] px-4 py-2 rounded-md hover:bg-[#22C55E] 
                       transition-colors font-semibold"
            >
              Create Agent
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAgent 