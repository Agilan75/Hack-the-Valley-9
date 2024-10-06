import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavClick = (pageName) => {
    setPage(pageName);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setPage('home');
    } else {
      setPage('signup');
    }
  };

  const renderHome = () => (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to FocusFlow</h1>
        <p>Your companion for maintaining productivity and achieving your goals.</p>
        <button onClick={() => handleNavClick('features')} className="cta-button">Get Started</button>
      </div>
      
      <div className="features-overview">
        <h2>Why Choose FocusFlow?</h2>
        <div className="feature-cards">
          {[
            { title: "Time Management", description: "Efficiently organize your tasks and manage your time." },
            { title: "Goal Tracking", description: "Set and track your goals with ease." },
            { title: "Focus Enhancement", description: "Improve your focus and concentration." },
            { title: "Team Collaboration", description: "Work together with your team seamlessly." }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"FocusFlow has completely transformed my work habits. I'm more productive than ever!"</p>
            <h4>- Sarah J., Marketing Manager</h4>
          </div>
          <div className="testimonial-card">
            <p>"As a student, FocusFlow helps me balance my studies and personal life effectively."</p>
            <h4>- Mike T., University Student</h4>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="features-page">
      <h1>FocusFlow Features</h1>
      <ul>
        <li>Smart task management</li>
        <li>Time tracking and analysis</li>
        <li>Goal setting and progress monitoring</li>
        <li>Team collaboration tools</li>
        <li>Customizable productivity reports</li>
      </ul>
    </div>
  );

  const renderAbout = () => (
    <div className="about-page">
      <h1>About FocusFlow</h1>
      <p>FocusFlow is a cutting-edge productivity tool designed to help individuals and teams maximize their potential. Our mission is to empower users to achieve their goals through smart time management and focus-enhancing techniques.</p>
    </div>
  );

  const renderContact = () => (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );

  const renderSignup = () => (
    <div className="signup-page">
      <h1>Sign Up / Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setPage('home');
      }}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up / Login</button>
      </form>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case 'home': return renderHome();
      case 'features': return renderFeatures();
      case 'about': return renderAbout();
      case 'contact': return renderContact();
      case 'signup': return renderSignup();
      default: return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">FocusFlow</div>
        <nav>
          <ul className="nav-links">
            <li><button onClick={() => handleNavClick('home')}>Home</button></li>
            <li><button onClick={() => handleNavClick('features')}>Features</button></li>
            <li><button onClick={() => handleNavClick('about')}>About</button></li>
            <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
          </ul>
        </nav>
        <button className="login-button" onClick={handleLogin}>
          {isLoggedIn ? 'Logout' : 'Login / Register'}
        </button>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('features')}>Features</button></li>
              <li><button onClick={() => handleNavClick('about')}>About</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <ul className="social-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest features and tips.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} FocusFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;