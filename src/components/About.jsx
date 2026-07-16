import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I'm a passionate Senior Frontend Engineer with 9+ years of hands-on experience
              building scalable, secure, and high-performance enterprise web applications.
              My expertise spans React.js, Angular, TypeScript, and modern web technologies.
            </p>

            <p className="about-text">
              I specialize in translating complex business requirements into elegant,
              user-centric solutions. I'm obsessed with performance optimization, clean
              code, and creating exceptional user experiences.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">⚡</span>
                <h3>Performance Focused</h3>
                <p>Improved page load time by 15% through optimization techniques</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🎨</span>
                <h3>UI/UX Expert</h3>
                <p>Improved UI responsiveness by 20% on data-heavy screens</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🔒</span>
                <h3>Secure by Design</h3>
                <p>Implemented enterprise-grade security with JWT, RBAC, and interceptors</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <h3>AI-Powered Development</h3>
                <p>Leveraging GitHub Copilot, Claude, and AI tools for productivity</p>
              </div>
            </div>

            <div className="about-cta">
              <p>
                Currently: <strong>Senior Software Engineer at Visa</strong>
              </p>
              <p>
                📍 Bengaluru, India | 📧 mohantynisith116@gmail.com
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="achievement-card">
              <div className="achievement-item">
                <span className="achievement-number">15%</span>
                <span className="achievement-text">Page Load Improvement</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">20%</span>
                <span className="achievement-text">UI Responsiveness Boost</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">25%</span>
                <span className="achievement-text">Code Reduction</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">92%</span>
                <span className="achievement-text">Test Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
