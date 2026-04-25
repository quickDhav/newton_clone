import { subjectData } from "../../data/mockData";

export default function SubjectPage({ subjectName }) {
  // Pull the specific data for the clicked subject, or use a default if not found
  const data = subjectData[subjectName] || subjectData["FOAI Enigma"];

  return (
    <div className="flex h-full animate-in fade-in duration-500">
      {/* Sub-Sidebar */}
      <div className="w-60 bg-white border-r border-gray-100 p-4 hidden md:block">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-700 font-bold mb-6 flex justify-between items-center cursor-pointer">
          <span>{subjectName}</span>
          <span className="text-[10px]">▼</span>
        </div>
        <div className="space-y-1">
          {["Overview", "Lectures", "Assignments", "Quiz"].map(item => (
            <button key={item} className={`w-full text-left px-4 py-2 rounded-lg text-sm ${item === "Overview" ? "bg-gray-100 text-gray-900 font-bold" : "text-gray-500 hover:bg-gray-50"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Horizontal Scroll Cards */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {data.cards.map((card, i) => (
            <div key={i} className="min-w-[300px] bg-white rounded-xl border border-rose-100 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase">{card.type}</span>
                <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{card.due}</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-6 leading-tight">{card.title}</h4>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-bold text-sm">⚡ {card.xp}</span>
                <button className="bg-slate-900 text-white px-5 py-1.5 rounded-lg text-xs font-bold">Solve</button>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Grid */}
        <h3 className="text-lg font-bold mb-4">Your performance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.performance.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="font-bold text-gray-800">{item.val} <span className="text-gray-300 font-normal text-xs">{item.count}</span></p>
                </div>
              </div>
              <span className="text-gray-200 group-hover:text-blue-500">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}