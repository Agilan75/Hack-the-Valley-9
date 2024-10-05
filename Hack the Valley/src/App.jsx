// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">FocusFlow</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to FocusFlow</h1>
          <p>Your companion for maintaining productivity and achieving your goals.</p>
          <a href="#features" className="cta-button">Get Started</a>
        </div>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} FocusFlow. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
