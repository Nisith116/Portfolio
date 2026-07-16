import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: 'Performance Optimization',
      description: 'Reduced page load time by 15% through lazy loading, code splitting, and bundle optimization',
      metrics: [
        '15% faster load times',
        '25% reduction in bundle size',
        '20% fewer API calls'
      ],
      icon: '⚡',
      color: 'gradient-1'
    },
    {
      title: 'UI/UX Responsiveness',
      description: 'Improved UI responsiveness by 20% on data-heavy screens using virtual scrolling and memoization',
      metrics: [
        '20% faster interactions',
        'Smooth 60fps animations',
        'Optimized rendering'
      ],
      icon: '🎨',
      color: 'gradient-2'
    },
    {
      title: 'Enterprise Security',
      description: 'Implemented comprehensive security flows with JWT, RBAC, and secure session management',
      metrics: [
        'JWT authentication',
        'Role-based access control',
        'HTTP interceptors'
      ],
      icon: '🔒',
      color: 'gradient-3'
    },
    {
      title: 'VAS Sales Navigator',
      description: 'Built enterprise sales platform helping Visa teams identify value-added services and ROI insights',
      metrics: [
        'React + Redux Toolkit',
        'Real-time data analysis',
        'Client-specific insights'
      ],
      icon: '💼',
      color: 'gradient-4'
    },
    {
      title: 'Ratecard Platform',
      description: 'Designed and integrated reusable UI library with comprehensive component system',
      metrics: [
        '25% code reduction',
        'Reusable components',
        '92% test coverage'
      ],
      icon: '📊',
      color: 'gradient-5'
    },
    {
      title: 'Procurement Solutions',
      description: 'Developed dynamic form components and template-based UI workflows for procurement software',
      metrics: [
        'Angular + TypeScript',
        'Dynamic workflows',
        'Enterprise integration'
      ],
      icon: '🔧',
      color: 'gradient-6'
    }
  ];

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Key Projects & Achievements</h2>
        <p className="section-subtitle">
          Highlights of impactful work delivered across various domains
        </p>

        <div className="projects-grid">
          {achievements.map((project, index) => (
            <div key={index} className={`project-card ${project.color}`}>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-badge">
                    {metric}
                  </div>
                ))}
              </div>
              <div className="project-hover">
                <span>Learn More →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="key-metrics">
          <h3>By The Numbers</h3>
          <div className="metrics-row">
            <div className="metric-block">
              <span className="metric-big">9+</span>
              <span className="metric-small">Years of Experience</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">50+</span>
              <span className="metric-small">Projects Delivered</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">275+</span>
              <span className="metric-small">Tickets Resolved</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">92%</span>
              <span className="metric-small">Test Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
