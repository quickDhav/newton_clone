import Card from "../Card";
import { performanceData, lectureData, upcomingEvents } from "../../data/mockData";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Banner Section */}
      <div className="bg-blue-600 rounded-xl p-6 text-white mb-8 flex justify-between items-center">
        <div>
          <span className="bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase mr-2">Live</span>
          <h2 className="text-xl font-bold mt-2">Question of the Day</h2>
          <p className="text-blue-100 mt-1">Implement power(x, n)</p>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">Solve Now →</button>
      </div>

      <div className="grid grid-cols-12 gap-8">
  
        <div className="col-span-9">
          <h3 className="text-xl font-bold mb-6">Your Performance</h3>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {performanceData.map((data, index) => (
              <Card 
                key={index} 
                {...data} 
                color={data.percent > 70 ? "text-green-500" : data.percent > 50 ? "text-blue-500" : "text-red-500"} 
              />
            ))}
          </div>

          <div className="flex items-end justify-between mb-4 gap-4">
            <div>
              <h3 className="text-xl font-bold">Your lectures</h3>
              <p className="text-sm text-gray-500 mt-1">Watch the lectures till you get a good grip on all the topics</p>
            </div>
            <button className="text-blue-600 font-semibold text-sm hover:underline">VIEW ALL</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {lectureData.map((lecture, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 aspect-video">
                  <div className="absolute left-4 top-4 bg-slate-950/80 text-white text-[10px] uppercase px-2 py-1 rounded-full">{lecture.subject}</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute right-4 bottom-4 bg-slate-950/80 text-white text-[11px] px-2 py-1 rounded-full">{lecture.duration}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-4">{lecture.title}</h4>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2 text-slate-900 font-semibold">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold">2x</span>
                      <span>{lecture.xp}</span>
                    </span>
                    <span>{lecture.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
        <div className="col-span-3">
          <h3 className="text-xl font-bold mb-6">Calendar</h3>
          <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-6">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-center min-w-[40px]">
                  <p className="text-blue-600 font-bold text-lg">{event.date}</p>
                  <p className="text-gray-400 text-xs uppercase">{event.day}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">{event.label}</p>
                  <p className="text-gray-400 text-xs">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
