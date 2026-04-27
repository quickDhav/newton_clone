export default function Navbar() {
  return (
    <nav className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-50">
      <div className="flex items-center">
        <button className="flex items-center gap-2 border border-blue-200 rounded-lg px-3 py-1.5 text-[13px] font-bold text-gray-800 hover:bg-gray-50 transition">
          <div className="text-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              <path d="M4 6h2v12H4zm14 0h2v12h-2z" opacity="0.3"/>
            </svg>
          </div>
          NSTP&apos;25-CS+AIML
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-[#18181b] rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-black transition">
          <span className="text-base leading-none block mb-0.5">🎁</span> 
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 text-[13px] font-bold text-gray-800">
          <span className="tracking-wide">Total XP</span>
          <span className="text-[#FFB800] text-base leading-none mx-0.5">🪙</span>
          <span className="tracking-wide">17,982</span>
        </div>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <button className="text-gray-500 hover:text-gray-800 transition flex items-center justify-center w-8 h-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button>
          <button className="text-gray-500 hover:text-gray-800 transition flex items-center justify-center w-8 h-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
          
          <button className="flex items-center gap-1.5 hover:bg-gray-50 rounded-full transition pr-1">
             <div className="w-8 h-8 rounded-full bg-[#4A3022] flex items-center justify-center text-[#FAD5A5] text-[11px] font-bold tracking-wider shadow-sm">
               DB
             </div>
             <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
