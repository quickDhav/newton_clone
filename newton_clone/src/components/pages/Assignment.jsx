import { useState } from "react";
import AssignmentList from "../AssignmentList";
import { assignments as initialAssignments } from "../../data/mockData";

function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState("All");

  function handleSolve(id) {
    setAssignments((prev) =>
      prev.map((a) => a.id === id ? { ...a, status: "Done" } : a)
    );
  }

  const filtered = assignments.filter((a) => {
    if (filter === "All")     return true;
    if (filter === "Pending") return a.status === "Pending";
    if (filter === "Done")    return a.status === "Done";
    return true;
  });

  const pendingCount = assignments.filter((a) => a.status === "Pending").length;

  return (
    <div className="p-6 flex-1 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">My Assignments</h1>
      <p className="text-gray-400 text-sm mb-5">Complete assignments to earn XP</p>

      {pendingCount > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-5 flex items-center gap-2">
          <span>⚠️</span>
          <p className="text-sm text-orange-700">
            You have <strong>{pendingCount} pending assignments</strong>. Solve them to increase your score!
          </p>
        </div>
      )}

      <div className="flex gap-2 mb-5">
        {["All", "Pending", "Done"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${filter === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-medium">No assignments here!</p>
          </div>
        ) : (
          filtered.map((assignment) => (
            <AssignmentList key={assignment.id} assignment={assignment} onSolve={handleSolve} />
          ))
        )}
      </div>
    </div>
  );
}

export default Assignments;