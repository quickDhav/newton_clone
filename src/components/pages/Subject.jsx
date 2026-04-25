import { useState } from "react";
import Card from "../components/Card";

function SubjectPage({ subjectName }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Lectures", "Assignments", "Quiz", "Contest"];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">{subjectName}</h1>
        <span className="text-xs text-green-600 font-medium">● Enrolled</span>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition
              ${activeTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === "Overview" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Performance</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-orange-700">
                📋 <strong>57 pending questions</strong> – solve to boost your score!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              <Card label="Lectures"    percent={74} done={20}  total={27}  />
              <Card label="Assignments" percent={67} done={118} total={175} />
              <Card label="Contests"    percent={0}  done={0}   total={0}   />
              <Card label="Quizzes"     percent={0}  done={0}   total={0}   />
            </div>
          </div>
        )}

        {activeTab !== "Overview" && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <span className="text-5xl mb-4">📂</span>
            <p className="text-lg font-medium">No {activeTab} yet</p>
            <p className="text-sm mt-1">Content will appear here once available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubjectPage;