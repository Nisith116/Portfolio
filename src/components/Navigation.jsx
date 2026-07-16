import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ scrollPosition }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">NM</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <button
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
