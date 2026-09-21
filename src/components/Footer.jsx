import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-panel">
      <div className="container">
        <div className="footer-grid">
          {/* Logo Brand info */}
          <div className="footer-brand">
            <h3 className="footer-logo">SANYAM JAIN</h3>
            <p className="footer-tagline">Full Stack Developer & AI Engineer</p>
            <p className="footer-bio">
              Building innovative digital experiences through code, AI, and creativity.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>Experience</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Skills</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
            </div>
          </div>

          {/* Copyright/Back to top */}
          <div className="footer-right">
            <button className="btn-secondary back-to-top-btn" onClick={handleBackToTop}>
              <ArrowUp size={16} /> Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Sanyam Jain. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed & Engineered with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
