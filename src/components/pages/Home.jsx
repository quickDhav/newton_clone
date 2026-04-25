import Card from "../Card";
import { performanceData, upcomingEvents } from "../../data/mockData";

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

          <h3 className="text-xl font-bold mb-6">Latest Lectures</h3>
          <div className="grid grid-cols-3 gap-4">
            {["FOAI Enigma", "WAP Turing", "Maths-2 Turing"].map((sub, i) => (
              <div key={i} className="bg-slate-800 aspect-video rounded-xl relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                 <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">{sub}</p>
                    <p className="text-white/60 text-xs">Latest Lecture</p>
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
