import React, { useState } from 'react';
import './index.css';
import illustration from './assets/illustration.png';

const App = () => {
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

            <form>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input 
                  type={showPassword ? "text" : "password"} 
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

              <button type="button" className="submit-btn">Login</button>
            </form>

            <a href="#" className="apply-link">
              New to Newton School? <span>Apply Now</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
