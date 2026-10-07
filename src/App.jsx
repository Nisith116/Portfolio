import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeRail, setActiveRail] = useState('home');

  const railItems = [
    { id: 'home', label: 'Home', icon: '⌂' },
    { id: 'about', label: 'About', icon: '◧' },
    { id: 'skills', label: 'Skills', icon: '▣' },
    { id: 'projects', label: 'Projects', icon: '◫' },
    { id: 'contact', label: 'Contact', icon: '✉' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveRail(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <div className="floating-rail" aria-label="Quick navigation">
        {railItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`rail-btn ${activeRail === item.id ? 'active' : ''}`}
            aria-label={item.label}
            data-label={item.label}
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </div>

      <div className="floating-socials">
        <button className="social-action" aria-label="Go to top">→</button>
        <a href="https://www.linkedin.com/in/nisith-mohanty-6210bb123" className="social-action" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="mailto:mohantynisith116@gmail.com" className="social-action" aria-label="Email">✉</a>
        <a href="https://github.com" className="social-action" target="_blank" rel="noreferrer" aria-label="GitHub">◌</a>
        <a href="https://portfolio-nisith-mohanty.vercel.app" className="social-action" target="_blank" rel="noreferrer" aria-label="Portfolio">◍</a>
      </div>

      <Navigation scrollPosition={scrollPosition} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 Nisith Mohanty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
