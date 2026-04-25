import { subjects } from "../data/mockData";

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="w-52 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto shrink-0">
      <div className="p-4 border-b border-gray-100">
        <p className="font-semibold text-sm text-gray-800">S2 P'25-CS+AIML</p>
        <span className="text-xs text-green-600 font-medium">● Enrolled</span>
      </div>

      <nav className="p-3 border-b border-gray-100">
        <button
          onClick={() => setCurrentPage("home")}
          className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition
            ${currentPage === "home" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
        >
          🏠 Home
        </button>
        <button
          onClick={() => setCurrentPage("assignments")}
          className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition mt-1
            ${currentPage === "assignments" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
        >
          📋 Assignments
        </button>
      </nav>

      <div className="p-3 flex-1">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2 px-2">
          Subjects
        </p>
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setCurrentPage("subject-" + subject)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition mb-0.5
              ${currentPage === "subject-" + subject ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
          >
            {subject}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;