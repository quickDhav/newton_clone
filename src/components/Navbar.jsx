function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-14 flex items-center px-4 gap-4 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">NS</span>
        <span className="font-semibold text-gray-800 text-sm">NSTP'25-CS+AIML</span>
      </div>

      <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-500 ml-2">
        Download the latest version of Athena.
        <button className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Download
        </button>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
          <span className="text-yellow-500 text-sm">⚡</span>
          <span className="text-sm font-semibold text-gray-700">17,930</span>
          <span className="text-xs text-gray-400 ml-1">Total XP</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
          DB
        </div>
      </div>
    </header>
  );
}

export default Navbar;