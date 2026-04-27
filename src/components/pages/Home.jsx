import React from 'react';

export default function Home() {
  const latestReleased = [
    { 
      subject: "DSA Turing", 
      type: "Post Class", 
      title: "Post Order Traversal - Post Class", 
      deadline: "Deadline is Apr 28th 2026, 2:05 pm", 
      xp: "0/60", 
      progress: "0 / 3 Solved", 
      btn: "Solve" 
    },
    { 
      subject: "DSA Turing", 
      type: "In Class", 
      title: "Post Order Traversal - In Class", 
      deadline: "Deadline is Apr 28th 2026, 10:32 am", 
      xp: "20/60", 
      progress: "1 / 3 Solved", 
      btn: "Solve" 
    }
  ];

  const upcomingDeadlines = [
    { 
      subject: "DSA Enigma", 
      type: "Post Class", 
      title: "Linked List Problems - Post Class", 
      deadline: "Deadline is Apr 27th 2026, 4:00 pm", 
      xp: "0/60", 
      badge: "due in 1 hours", 
      badgeClass: "bg-red-600 text-white" 
    },
    { 
      subject: "DSA Enigma", 
      type: "In Class", 
      title: "Binary Tree, Introduction to Binary Tree, Preorder Traversal - In Class", 
      deadline: "Deadline is Apr 27th 2026, 5:00 pm", 
      xp: "0/60", 
      badge: "due in 2 hours", 
      badgeClass: "bg-red-600 text-white" 
    },
    { 
      subject: "DSA Turing", 
      type: "In Class", 
      title: "Post Order Traversal - In Class", 
      deadline: "Deadline is Apr 28th 2026, 10:32 am", 
      xp: "20/60", 
      badge: "due tomorrow", 
      badgeClass: "bg-gray-100 text-gray-500 border border-gray-200" 
    }
  ];

  return (
    <div className="flex h-full w-full font-sans bg-white xl:bg-gray-50/30 flex-col xl:flex-row relative">
      {/* Main Left Content */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto hidden-scrollbar">
         
         {/* Latest Released */}
         <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
                       <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">Latest Released</h2>
                        <p className="text-[13px] text-gray-500 font-medium tracking-wide mt-0.5">All your tasks released recently</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-[34px] h-[34px] rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-50 transition shadow-sm">
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button className="w-[34px] h-[34px] rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-50 transition shadow-sm">
                        <svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 hidden-scrollbar -mx-2 px-2">
                {latestReleased.map((item, idx) => (
                   <div key={idx} className="min-w-[320px] w-[320px] bg-white border border-gray-100 rounded-[20px] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                      <div>
                         <p className="text-xs font-bold text-gray-500 mb-4">{item.subject}</p>
                         <div className="flex items-center gap-2 mb-3">
                             <div className="w-[22px] h-[22px] bg-orange-50 text-orange-500 rounded flex items-center justify-center">
                                 <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                             </div>
                             <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">{item.type}</span>
                         </div>
                         <h3 className="font-bold text-[15px] text-gray-900 leading-snug mb-5 truncate">{item.title}</h3>
                         <p className="text-[11px] text-gray-400 font-semibold mb-3">{item.deadline}</p>
                         
                         <div className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800 mb-6">
                            <span className="text-[#FFB800] bg-[#FFB800]/10 px-1.5 py-0.5 rounded text-[11px]">2x</span>
                            <span className="text-[#FFB800]">🪙</span>
                            <span>{item.xp}</span>
                         </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                          <span className="text-xs font-bold text-gray-500">{item.progress}</span>
                          <button className="bg-[#111] text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-black transition-colors">
                              {item.btn}
                          </button>
                      </div>
                   </div>
                ))}
            </div>
         </div>

         {/* Upcoming Deadlines */}
         <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
                       <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">Upcoming Deadlines</h2>
                        <p className="text-[13px] text-gray-500 font-medium tracking-wide mt-0.5">Tasks that are due</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-[34px] h-[34px] rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-50 transition shadow-sm">
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button className="w-[34px] h-[34px] rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-50 transition shadow-sm">
                        <svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 hidden-scrollbar -mx-2 px-2">
               {upcomingDeadlines.map((item, idx) => (
                   <div key={idx} className="min-w-[320px] w-[320px] bg-white border border-rose-100 rounded-[20px] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                      <div>
                         <div className="flex items-center justify-between mb-4">
                             <p className="text-xs font-bold text-gray-800">{item.subject}</p>
                         </div>
                         <div className="flex items-center justify-between mb-3">
                             <div className="flex items-center gap-2">
                                 <div className="w-[22px] h-[22px] bg-emerald-50 text-emerald-500 rounded flex items-center justify-center border border-emerald-100">
                                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                                 </div>
                                 <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">{item.type}</span>
                             </div>
                             <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${item.badgeClass}`}>{item.badge}</span>
                         </div>
                         <h3 className="font-bold text-[15px] text-gray-900 leading-snug mb-5 max-h-16 overflow-hidden">{item.title}</h3>
                         <p className="text-[11px] text-gray-400 font-semibold mb-3">{item.deadline}</p>
                         
                         <div className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800 mb-2">
                            <span className="text-[#FFB800] bg-[#FFB800]/10 px-1.5 py-0.5 rounded text-[11px]">2x</span>
                            <span className="text-[#FFB800]">🪙</span>
                            <span>{item.xp}</span>
                         </div>
                      </div>
                   </div>
                ))}
            </div>
         </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full xl:w-[360px] bg-white border-l border-gray-100 flex flex-col flex-shrink-0 min-h-screen">
          <div className="p-8">
              {/* Question of the Day Block */}
              <div className="bg-[#EBF3FF] border border-[#D0E2FF] rounded-2xl overflow-hidden shadow-sm relative mb-10 group cursor-pointer hover:shadow-md transition">
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition"></div>
                  
                  <div className="bg-transparent px-4 py-3 flex items-center justify-between z-10 relative">
                     <span className="text-[10px] font-bold uppercase bg-[#FF3B30] text-white px-2 py-[2px] rounded-[4px] tracking-widest shadow-sm">Live</span>
                     <span className="text-[10px] font-bold tracking-widest flex items-center gap-1.5 bg-[#0055FF] text-white px-2.5 py-1 rounded-full shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div> ENDS IN 14:53:14
                     </span>
                  </div>
                  
                  <div className="px-5 pb-6 pt-2 relative z-10">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Question of the Day</p>
                     <h3 className="text-lg font-bold text-gray-900 mb-6">Tilted Arrow Pattern</h3>
                     <div className="flex items-center gap-3 mb-5">
                         <div className="flex -space-x-1.5">
                            <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-[8px] font-bold overflow-hidden shadow-sm">
                               <img src="https://i.pravatar.cc/100?img=33" alt="" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-rose-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-rose-800 shadow-sm">AS</div>
                            <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-amber-800 shadow-sm">AR</div>
                         </div>
                         <p className="text-[11px] text-gray-600 font-semibold tracking-wide">113 people have attempted</p>
                     </div>
                     <button className="w-full bg-[#111] text-white py-3 rounded-xl text-xs font-bold hover:bg-black transition flex items-center justify-center gap-2 shadow-sm">
                        Solve Now <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                     </button>
                  </div>
              </div>

              {/* Calendar Block */}
              <div>
                 <div className="flex items-center justify-between mb-2">
                     <h3 className="text-[17px] font-bold text-gray-900">Calendar</h3>
                     <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1 text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition shadow-xs">
                         View <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                     </button>
                 </div>
                 <p className="text-[11px] text-gray-400 font-bold tracking-wide mb-6">Your schedule for the next days</p>

                 <div className="bg-gradient-to-r from-orange-400 to-rose-400 rounded-xl px-4 py-3 text-white text-[13px] font-bold shadow-sm mb-6 flex items-center justify-between">
                     You have 3 events today
                 </div>

                 <div className="space-y-6 relative">
                     <div className="absolute top-8 left-4 bottom-10 w-px bg-gray-100 hidden sm:block"></div>
                     
                     <div className="flex gap-4 relative z-10 items-start">
                         <div className="flex flex-col items-center min-w-[32px] pt-1 bg-white">
                             <div className="text-[#0055FF] font-black text-lg leading-none">27</div>
                             <div className="text-gray-400 text-[10px] font-bold tracking-wide uppercase mt-1">Mon</div>
                         </div>
                         <div className="flex-1 space-y-5">
                             <div className="relative">
                                 <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">FOAI Turing</p>
                                 <p className="text-[13px] font-bold text-gray-800 mb-0.5">Lecture</p>
                                 <p className="text-[11px] font-bold text-gray-400">9:00 AM - 10:30 AM</p>
                             </div>
                             <div>
                                 <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">WAP Enigma</p>
                                 <p className="text-[13px] font-bold text-gray-800 mb-0.5">Lecture</p>
                                 <p className="text-[11px] font-bold text-gray-400">11:00 AM - 12:30 PM</p>
                             </div>
                             <div>
                                 <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Maths-2 Enigma</p>
                                 <p className="text-[13px] font-bold text-gray-800 mb-0.5">Lecture</p>
                                 <p className="text-[11px] font-bold text-gray-400">12:30 PM - 1:50 PM</p>
                             </div>
                         </div>
                     </div>

                     <div className="flex gap-4 relative z-10 items-start pt-2">
                         <div className="flex flex-col items-center min-w-[32px] pt-1 bg-white">
                             <div className="text-gray-800 font-black text-lg leading-none">28</div>
                             <div className="text-gray-400 text-[10px] font-bold tracking-wide uppercase mt-1">Tue</div>
                         </div>
                         <div className="flex-1">
                             <div>
                                 <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">DSA Turing</p>
                                 <p className="text-[13px] font-bold text-gray-800 mb-0.5">Lecture</p>
                                 <p className="text-[11px] font-bold text-gray-400">8:00 AM - 9:30 AM</p>
                             </div>
                         </div>
                     </div>
                 </div>
              </div>
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