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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation scrollPosition={scrollPosition} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 Nisith Mohanty. All rights reserved.</p>
        <p>Made with React, Vite, and passion ✨</p>
      </footer>
    </div>
  );
}

export default App;
