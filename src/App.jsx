import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import SubjectPage from "./components/pages/SubjectPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [activePage, setActivePage] = useState("Home");


  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
  
        <nav className="h-14 border-b border-gray-100 flex items-center px-8 gap-6 text-sm text-gray-500">
          {["AI Tryouts", "Coderush", "Games", "Playground", "Events"].map(item => (
            <span key={item} className="cursor-pointer hover:text-gray-900 transition-colors">{item}</span>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="flex w-full max-w-6xl gap-12 lg:gap-24 items-center justify-center">
            
      
            <div className="hidden lg:flex flex-1 justify-center">
              <img 
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" 
                alt="Coding" 
                className="w-full max-w-md"
              />
            </div>


            <div className="flex-1 max-w-md bg-gray-50/50 p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {isSignup ? "Create your account" : "Login to your account"}
              </h2>
              
              <div className="flex gap-6 border-b border-gray-200 mb-6 text-sm">
                <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">Email</button>
                <button className="pb-2 text-gray-500 font-medium">Mobile</button>
              </div>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 p-2.5 rounded-lg text-sm font-medium hover:bg-white transition-all mb-6">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4" alt="G" />
                Sign in with Google
              </button>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wider">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="Enter your password" 
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                    />
                    <span className="absolute right-3 top-3 text-gray-400 cursor-pointer text-xs">👁️</span>
                  </div>
                </div>
              </div>

              <div className="text-right mt-2">
                <span className="text-[11px] text-blue-600 font-medium cursor-pointer hover:underline">Forgot Password</span>
              </div>

              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-[#56a3e2] text-white font-bold py-3 rounded-lg mt-8 hover:bg-blue-600 transition-all shadow-lg shadow-blue-100"
              >
                {isSignup ? "Register" : "Login"}
              </button>
              
              <p className="mt-8 text-xs text-center text-gray-500">
                {isSignup ? "Already have an account?" : "Don't have an account?"} 
                <span 
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-blue-600 font-bold cursor-pointer ml-1 hover:underline"
                >
                  {isSignup ? "Login here" : "Apply to Newton School"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar email={userEmail} />
      <div className="flex flex-1 overflow-hidden">
        {activePage === "Home" && <Sidebar onNavigate={setActivePage} activePage={activePage} />}
        <main className="flex-1 h-[calc(100vh-64px)] overflow-y-auto w-full">
          {activePage === "Home" ? (
            <Home />
          ) : (
            <SubjectPage subjectName={activePage} onNavigate={setActivePage} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
