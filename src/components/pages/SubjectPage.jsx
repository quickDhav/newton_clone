import { useState } from "react";
import { subjectData } from "../../data/mockData";

const subjectsList = ["FOAI Turing", "WAP Turing", "Maths-2 Turing", "DSA Turing"];

export default function SubjectPage({ subjectName, onNavigate }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Lectures");
  
  const data = subjectData[subjectName] || subjectData["FOAI Turing"] || {};

  const tabs = ["Overview", "Lectures", "Assignments", "Quiz", "Contest"];

  const handleSubjectChange = (newSubject) => {
    onNavigate(newSubject);
    setIsDropdownOpen(false);
  };

  const currentLectures = [
    { title: "Mock End-Sem", date: "Apr 27, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
    { title: "Lec 23", date: "Apr 22, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
    { title: "Agentic Workflow Optimization, Agentic Error Handling...", date: "Apr 20, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
    { title: "Ethical AI, Testing Checklist, Launch Readiness...", date: "Apr 15, 2026 • 1:30:00", xp: "30/30", attended: true, status: "play" },
    { title: "Buffer Lec", date: "Apr 13, 2026 • 1:30:00", xp: "30/30", attended: true, status: "complete" },
    { title: "Context Injection, Context Window Management...", date: "Apr 8, 2026 • 1:30:00", xp: "30/30", attended: false, status: "" },
  ];

  return (
    <div className="flex h-full w-full bg-gray-50 font-sans">
      {/* Subject Sidebar */}
      <div className="w-[280px] bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 animate-in slide-in-from-left duration-300">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-gray-100">
            <h5 className="font-bold text-gray-800 text-sm">S2 P&apos;25-CS+AIML</h5>
            <span className="inline-block mt-1 text-emerald-600 font-bold text-[10px] uppercase bg-emerald-50 px-2 py-0.5 rounded">Enrolled</span>
          </div>

          {/* Back btn */}
          <div className="px-3 py-2 mt-2">
            <button 
              onClick={() => onNavigate("Home")}
              className="flex items-center text-gray-700 font-medium text-sm gap-2 hover:bg-gray-50 w-full p-2 rounded-lg transition"
            >
              <svg className="w-4 h-4" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              Back To Home
            </button>
          </div>

          <div className="px-5 my-2">
            <div className="h-px bg-gray-100 w-full"></div>
          </div>

          {/* Dropdown */}
          <div className="px-4 relative mt-4">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1877F2] rounded-lg flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <span className="font-bold text-[13px] text-gray-800 truncate">{subjectName}</span>
              </div>
              <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1">
                {subjectsList.map(sub => (
                  <button 
                    key={sub} 
                    onClick={() => handleSubjectChange(sub)}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition ${sub === subjectName ? 'font-bold text-blue-700 bg-blue-50/50' : 'text-gray-700'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav Tabs */}
          <div className="px-3 mt-6 space-y-0.5">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-[13px] transition-colors ${activeTab === tab ? "bg-gray-100 text-gray-900 font-bold" : "text-gray-600 hover:bg-gray-50 font-medium"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="p-4 space-y-2 mb-2">
          <button className="w-full flex items-center justify-center gap-2 text-[13px] text-emerald-700 bg-emerald-50/70 font-bold py-2.5 rounded-xl hover:bg-emerald-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Share a Concern
          </button>
          <button className="w-full flex items-center justify-center gap-2 text-[13px] text-gray-700 font-bold py-2.5 rounded-xl hover:bg-gray-100 transition">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Help & Support
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
        {/* Top Banner */}
        <div className="bg-[#1877F2] text-white px-6 py-2.5 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-3 text-[13px] font-medium">
            <svg className="w-4 h-4 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Your Lecture of React Router has started
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-[#FFB800]/20 px-2 py-0.5 rounded text-[11px] font-bold">
              <span className="text-[#FFB800]">2x</span>
              <span>🪙</span>
              <span>0/30</span>
            </div>
            <button className="bg-white text-[#1877F2] px-4 py-1.5 rounded-lg text-[13px] font-bold shadow-sm hover:bg-blue-50 transition">Join Now</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto w-full p-8 hidden-scrollbar">
          {activeTab === "Lectures" && (
            <div className="w-full max-w-5xl mx-auto animate-in fade-in duration-500">
              
              {/* Header Stats */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#2B3441] rounded-2xl flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">Lectures</h2>
                    <p className="text-gray-500 text-sm mt-0.5 font-medium">28 lectures</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-5 border border-gray-100">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                     <svg className="w-14 h-14 transform -rotate-90 absolute inset-0">
                        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-200" />
                        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="150" strokeDashoffset="27" className="text-emerald-500" />
                     </svg>
                     <span className="text-sm font-bold text-gray-900 z-10 relative">82%</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Attendance</div>
                    <div className="text-sm font-bold text-gray-900">23/28 <span className="font-medium text-gray-500">Attended</span></div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-5 mb-8">
                <div className="relative w-full max-w-md">
                  <svg className="w-4 h-4 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input type="text" placeholder="Search lecture..." className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white" />
                </div>
                
                <div className="flex flex-wrap items-center gap-2.5">
                  {["Session Attended v", "Session Watched v", "Module v", "Topic v"].map(filt => (
                    <button key={filt} className="px-4 py-2 border border-gray-200 rounded-full text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition bg-white shadow-sm flex items-center gap-1.5">
                      {filt.replace(' v', '')} 
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  ))}
                  <button className="px-4 py-2 border border-gray-200 rounded-full text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition bg-white shadow-sm">
                    Bookmarked
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="mt-6 border-t border-gray-100 pt-2">
                <div className="grid grid-cols-12 gap-4 pb-4 pt-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2">
                  <div className="col-span-8">Lecture</div>
                  <div className="col-span-2 text-center">Attendance</div>
                  <div className="col-span-2 text-right pr-8">XP Earned</div>
                </div>

                <div className="divide-y divide-gray-100 flex flex-col gap-1 mt-1">
                  {currentLectures.map((lec, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 items-center py-4 px-2 hover:bg-gray-50 transition rounded-xl group">
                      <div className="col-span-8 flex items-start gap-4">
                        <button className="mt-0.5 flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                          <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                        </button>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm leading-tight">{lec.title}</h4>
                          <p className="text-[13px] text-gray-500 mt-1 font-medium">{subjectName} • {lec.date}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-2 flex justify-center items-center gap-2">
                        {lec.attended && (
                          <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                        )}
                        {lec.status === "play" && (
                          <button className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition">
                            <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                          </button>
                        )}
                      </div>

                      <div className="col-span-2 flex items-center justify-end gap-6 pr-4">
                        <div className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800">
                          <span className="text-[#FFB800] bg-[#FFB800]/10 px-1.5 rounded">2x</span>
                          <span className="text-[#FFB800]">🪙</span>
                          <span>{lec.xp}</span>
                        </div>
                        <button className="text-gray-300 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab !== "Lectures" && (
            <div className="flex items-center justify-center h-full text-gray-400 font-medium">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <p>Content for {activeTab} will go here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hidden-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hidden-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
