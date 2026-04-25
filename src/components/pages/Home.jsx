import { useEffect } from "react";
import Card from "../Card";
import { performanceData, upcomingEvents } from "../../data/mockData";

function Home({ setCurrentPage }) {
  useEffect(() => {
    console.log("Home page loaded!");
  }, []);

  return (
    <div className="flex gap-6 p-6 flex-1 overflow-y-auto">
      <div className="flex-1 min-w-0">

        <div className="bg-blue-600 text-white rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">LIVE</span>
              <span className="text-blue-200 text-xs">ENDS IN 05:49:16</span>
            </div>
            <p className="text-xs text-blue-200">QUESTION OF THE DAY</p>
            <p className="font-bold text-lg mt-0.5">Implement power(x, n)</p>
            <p className="text-blue-200 text-xs mt-1">118 people have attempted</p>
          </div>
          <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg text-sm hover:bg-blue-50 transition">
            Solve Now →
          </button>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Your Performance</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 flex items-center justify-between">
          <p className="text-sm text-orange-700">
            📋 <strong>177 pending assignment questions</strong> – solve them to boost your score!
          </p>
          <button
            onClick={() => setCurrentPage("assignments")}
            className="text-orange-600 text-xs font-bold hover:underline ml-4 whitespace-nowrap"
          >
            MY ASSIGNMENTS →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {performanceData.map((item) => (
            <Card key={item.label} label={item.label} percent={item.percent} done={item.done} total={item.total} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Your Lectures</h2>
            <p className="text-sm text-gray-400">Watch lectures to get a good grip on topics</p>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:underline">VIEW ALL</button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["FOAI Enigma", "WAP Turing", "Maths-2 Turing"].map((sub) => (
            <div key={sub} className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
              <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-900 flex items-end p-2">
                <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded">▶️ 01:30:00</span>
              </div>
              <div className="p-2">
                <span className="text-xs text-blue-400 font-medium">{sub}</span>
                <p className="text-white text-xs mt-0.5">Latest Lecture</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-60 shrink-0 hidden lg:block">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-1">Calendar</h3>
          <p className="text-xs text-gray-400 mb-3">Upcoming schedule</p>
          <div className="bg-orange-100 text-orange-700 text-xs font-medium rounded-lg p-2 mb-3 text-center">
            You have 1 event today
          </div>
          <div className="flex flex-col gap-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-l-blue-400 pl-3">
                <div className="flex items-start gap-2">
                  <div className="text-center shrink-0">
                    <p className="text-blue-600 font-bold text-sm">{event.date}</p>
                    <p className="text-gray-400 text-xs">{event.day}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs font-medium">{event.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;