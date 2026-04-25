import React, { useState } from 'react';
import './index.css';
import illustration from './assets/illustration.png';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Assignments from './components/pages/Assignment';

// ── Login Page ────────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('email');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">Newton School</div>
          <div className="nav-links">
            <a href="#">Explore</a>
            <a href="#">Today's Question</a>
            <a href="#">AI Tryouts</a>
            <a href="#">Coderush</a>
            <a href="#">Games</a>
            <a href="#">Playground</a>
            <a href="#">Events</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>

      <main className="main-container">
        <section className="left-panel">
          <img src={illustration} alt="Student coding at desk" className="illustration" />
        </section>

        <section className="right-panel">
          <div className="login-container">
            <div className="tabs">
              <div
                className={`tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => setActiveTab('email')}
              >
                Email
              </div>
              <div
                className={`tab ${activeTab === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveTab('mobile')}
              >
                Mobile
              </div>
            </div>

            <button className="google-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="google-icon"
              />
              Sign in with Google
            </button>

            <div className="divider">or</div>

            <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <a href="#" className="forgot-password">Forgot Password?</a>

              <button type="submit" className="submit-btn">Login</button>
            </form>

            <a href="#" className="apply-link">
              New to Newton School? <span>Apply Now</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex flex-1 overflow-y-auto">
          {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
          {currentPage === 'assignments' && <Assignments />}
        </main>
      </div>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
};

export default App;
