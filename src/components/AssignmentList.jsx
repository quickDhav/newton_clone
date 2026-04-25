function AssignmentList({ assignment, onSolve }) {
  const isDone = assignment.status === "Done";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex-1">
        <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded">
          {assignment.subject}
        </span>
        <p className="text-sm font-semibold text-gray-800 mt-1">{assignment.title}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-gray-400">📅 Due: {assignment.dueDate}</span>
          <span className="text-xs text-amber-500 font-medium">⚡ {assignment.xp} XP</span>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDone ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
          {assignment.status}
        </span>
        {!isDone && (
          <button
            onClick={() => onSolve(assignment.id)}
            className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Solve
          </button>
        )}
      </div>
    </div>
  );
}

export default AssignmentList;
