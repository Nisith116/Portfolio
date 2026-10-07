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
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://portfolio-nisith-mohanty.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Portfolio"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M10 6.5A3.5 3.5 0 0 1 13.5 3h5A3.5 3.5 0 0 1 22 6.5v5A3.5 3.5 0 0 1 18.5 15h-5A3.5 3.5 0 0 1 10 11.5v-5zm-7 8A3.5 3.5 0 0 1 6.5 11h5A3.5 3.5 0 0 1 15 14.5v5A3.5 3.5 0 0 1 11.5 23h-5A3.5 3.5 0 0 1 3 19.5v-5zm11 0A3.5 3.5 0 0 1 17.5 15h5A3.5 3.5 0 0 1 26 18.5v5A3.5 3.5 0 0 1 22.5 27h-5A3.5 3.5 0 0 1 14 23.5v-5z" transform="translate(-2 -2) scale(0.75)" />
              </svg>
            </a>
            <a
              href="mailto:mohantynisith116@gmail.com"
              className="social-link"
              title="Email"
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
