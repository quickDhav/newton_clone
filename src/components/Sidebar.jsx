export default function Sidebar({ onNavigate, activePage }) {
  const subjects = ["FOAI Turing", "WAP Turing", "Maths-2 Turing", "DSA Turing"];

  return (
    <aside className="w-[260px] bg-white h-[calc(100vh-56px)] border-r border-gray-100 flex flex-col flex-shrink-0">
      <div className="p-4 pt-6 flex-1 overflow-y-auto hidden-scrollbar">
        <div className="mb-8">
          <button 
            onClick={() => onNavigate("Home")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all ${activePage === "Home" ? "bg-[#EBF3FF] text-[#0055FF]" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <div className={`w-5 h-5 flex items-center justify-center ${activePage === "Home" ? "text-[#0055FF]" : "text-gray-400"}`}>
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
            </div>
            Home
          </button>
        </div>
        
        <div>
          <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest mb-4 px-4">Subjects</p>
          <nav className="space-y-0.5">
            {subjects.map(sub => (
              <button 
                key={sub}
                onClick={() => onNavigate(sub)}
                className={`w-full text-left px-4 py-2.5 text-[13px] rounded-xl transition-all ${activePage === sub ? "bg-gray-50 text-gray-900 font-bold" : "text-gray-600 font-medium hover:bg-gray-50"}`}
              >
                {sub}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom links like scorecard etc if needed, but skipped per requested exactness */}
      <style dangerouslySetInnerHTML={{__html: `
        .hidden-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hidden-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </aside>
  );
}