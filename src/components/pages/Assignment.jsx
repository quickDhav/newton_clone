import { useState } from "react";
import { assignments as initialAssignments } from "../../data/mockData";

export default function Assignment() {
  const [assignments, setAssignments] = useState(initialAssignments);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Assignments</h2>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        {assignments.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">{task.subject}</span>
              <h4 className="font-semibold text-gray-800 mt-1">{task.title}</h4>
              <p className="text-sm text-gray-400">Due: {task.dueDate} • {task.xp} XP</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-medium ${task.status === "Done" ? "text-green-500" : "text-orange-500"}`}>
                {task.status}
              </span>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">
                Solve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}