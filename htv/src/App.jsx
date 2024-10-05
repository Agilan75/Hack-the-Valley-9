import React, { useState } from 'react';
import './App.css';
import FeaturesPage from './Features';
import AboutPage from './About';
import ContactPage from './Contact';
import SignUpPage from './Register';
import LoggedInPage from './LoggedInPage';

function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">FocusFlow</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a href="#features" onClick={() => handleNavClick('features')}>Features</a></li>
            <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </nav>
        <button className="login-button" onClick={() => handleNavClick('signup')}>
          {isLoggedIn ? 'Logout' : 'Login / Register'}
        </button>
      </header>

      <main>
        {page === 'home' && (
          <div className="hero-section">
            <h1>Welcome to FocusFlow</h1>
            <p>Your companion for maintaining productivity and achieving your goals.</p>
            <a href="#features" onClick={() => handleNavClick('features')} className="cta-button">Get Started</a>
          </div>
        )}
        {page === 'features' && <FeaturesPage />}
        {page === 'about' && <AboutPage />}
        {page === 'contact' && <ContactPage />}
        {page === 'signup' && <SignUpPage />}
        {isLoggedIn && page === 'loggedin' && <LoggedInPage />}
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} FocusFlow. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
