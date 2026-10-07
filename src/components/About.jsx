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
              Senior Frontend Engineer and Frontend Lead with 10 years of experience building production-grade web applications in JavaScript, TypeScript, and React, much of it in payments and financial services.
            </p>

            <p className="about-text">
              I own frontend architecture and delivery for multi-tenant Visa platforms used across 5 regions, define coding standards and reusable component systems, improve Core Web Vitals and page-load performance, and run production monitoring with Sentry, Grafana, and real-user monitoring.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">⚡</span>
                <h3>Performance Leadership</h3>
                <p>Improved LCP from 3.2s to 2.1s and INP from 600ms to 250ms on a large sales platform.</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🎨</span>
                <h3>Design System & Architecture</h3>
                <p>Built reusable component systems and shared Storybook design patterns used across 5 teams.</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🔒</span>
                <h3>Payments & Security</h3>
                <p>Integrated UPI and net banking payment flows and implemented secure RBAC-enabled access controls.</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <h3>Team Leadership</h3>
                <p>Lead 5 engineers and 1 QA, mentor engineers, and drive technical roadmaps in agile delivery teams.</p>
              </div>
            </div>

            <div className="about-cta">
              <p>
                Currently: <strong>Senior Software Engineer (Frontend Lead) at Visa</strong>
              </p>
              <p>
                📍 Bengaluru, India (open to remote) | 📧 mohantynisith116@gmail.com
              </p>
              <p>
                🎓 Bachelor of Technology, Electrical Engineering — 2012–2016, College of Engineering and Technology, Bhubaneswar
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
