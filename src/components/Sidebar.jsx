const subjects = ["FOAI Enigma", "WAP Turing", "Maths-2 Turing"];

export default function Sidebar({ onNavigate, activePage }) {
  return (
    <aside className="w-64 bg-white h-[calc(100vh-64px)] border-r border-gray-100 p-6 overflow-y-auto">
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-4">Home</p>
        <button 
          onClick={() => onNavigate("Home")}
          className={`w-full flex items-center gap-3 p-2 rounded-lg font-medium transition-all ${activePage === "Home" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Home
        </button>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase mb-4">Subjects</p>
        <nav className="space-y-1">
          {subjects.map(sub => (
            <button 
              key={sub}
              onClick={() => onNavigate(sub)}
              className={`w-full text-left p-2 rounded-lg transition-all ${activePage === sub ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {sub}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}