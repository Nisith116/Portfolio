import React from 'react';
import './Hero.css';
import CountUp from './CountUp';

const Hero = () => {
  // Using a placeholder avatar - replace with your actual profile photo
  // To use your profile photo:
  // 1. Save your profile photo as 'profile.jpg' in src/assets/
  // 2. Uncomment the import below and comment out the profileImg line
  
  // import profileImg from '../assets/profile.jpg';
  const profileImg = 'https://ui-avatars.com/api/?name=Nisith+Mohanty&size=280&background=6366f1&color=fff&bold=true&font-size=0.4';

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="profile-container">
          <img
            src={profileImg}
            alt="Nisith Mohanty"
            className="profile-image"
          />
          <div className="glow-ring"></div>
        </div>

        <div className="hero-text">
          <div className="greeting">Welcome to my portfolio</div>
          <h1 className="hero-title">
            <span className="gradient-text">Nisith Mohanty</span>
          </h1>
          <p className="hero-subtitle">
            Senior Frontend Engineer / Frontend Lead | React · TypeScript · Performance
          </p>

          <p className="hero-description">
            Senior Frontend Engineer and Frontend Lead with 10 years of experience building production-grade web applications in JavaScript, TypeScript, and React for complex, customer-facing digital products.
          </p>

          <div className="hero-impact">
            <div className="impact-item">
              <CountUp end={17} start={0} suffix="%" duration={900} />
              <span className="impact-label">Faster page load</span>
              <span className="impact-note">LCP and INP improvements</span>
            </div>

            <div className="impact-item">
              <CountUp end={3} start={0} duration={900} />
              <span className="impact-label">Major platform deliveries</span>
              <span className="impact-note">Across Visa and enterprise products</span>
            </div>

            <div className="impact-item">
              <CountUp end={44} start={0} suffix="%" duration={900} />
              <span className="impact-label">Fewer pricing errors</span>
              <span className="impact-note">Better user trust and faster quoting</span>
            </div>

            <div className="impact-item">
              <CountUp end={2.5} start={0} suffix="x" duration={900} />
              <span className="impact-label">Faster quote generation</span>
              <span className="impact-note">Sales enablement velocity</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <CountUp end={10} start={0} suffix="+" duration={800} />
              <span className="stat-label">Years Experience</span>
              <span className="stat-note">Frontend engineering leadership</span>
            </div>

            <div className="stat">
              <CountUp end={5} start={0} duration={1000} />
              <span className="stat-label">Engineers Led</span>
              <span className="stat-note">Code reviews, mentoring, delivery</span>
            </div>

            <div className="stat">
              <CountUp end={5} start={0} duration={1000} />
              <span className="stat-label">Regions</span>
              <span className="stat-note">Visa platforms across geographies</span>
            </div>

            <div className="stat">
              <CountUp end={10000} start={0} suffix="+" duration={1100} />
              <span className="stat-label">Proposals</span>
              <span className="stat-note">Sales enablement workflows</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/nisith-mohanty-6210bb123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-tooltip="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/Nisith116"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-tooltip="GitHub"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.487 11.487 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.431.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:mohantynisith116@gmail.com"
              className="social-link"
              data-tooltip="Gmail"
              aria-label="Gmail"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
