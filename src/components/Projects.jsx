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
      title: 'Value Calculator',
      description: 'Built a pricing and fee-calculation UI for client-facing sales teams that reduced calculation errors by ~44% and made quote generation 2.5x faster.',
      metrics: [
        'GraphQL + Apollo',
        'RBAC flows',
        'Faster quoting'
      ],
      icon: '💰',
      color: 'gradient-1'
    },
    {
      title: 'VAS Sales Navigator',
      description: 'Optimized multi-tenant sales enablement platforms used across 5 Visa regions, improving page load and core web vitals with code splitting, lazy loading, memoization, and virtual scrolling.',
      metrics: [
        'LCP 3.2s → 2.1s',
        'INP 600ms → 250ms',
        'CLS 0.5 → 0.2'
      ],
      icon: '📈',
      color: 'gradient-2'
    },
    {
      title: 'Micro-frontend Architecture',
      description: 'Led the monolith-to-micro-frontend migration using Webpack Module Federation and aligned teams around a shared architecture roadmap for independent deployments.',
      metrics: [
        'Webpack Module Federation',
        'Independent deploys',
        'Architecture design docs'
      ],
      icon: '🏗️',
      color: 'gradient-3'
    },
    {
      title: 'Ratecard Platform',
      description: 'Owned Product Chooser end to end, built a reusable React/TypeScript design system, and improved site performance by ~28% through optimization strategies.',
      metrics: [
        'Storybook design system',
        '28% performance gain',
        'React Native app'
      ],
      icon: '📊',
      color: 'gradient-4'
    },
    {
      title: 'Payment Integrations',
      description: 'Integrated UPI and net banking payment flows into Dena Bank’s merchant app, supporting 10,000+ merchants and settlement reporting workflows.',
      metrics: [
        '10,000+ merchants',
        'UPI + Net banking',
        'Settlement reports'
      ],
      icon: '💳',
      color: 'gradient-5'
    },
    {
      title: 'Quality & Reliability',
      description: 'Raised test coverage, hardened production monitoring, and shipped feature-flagged releases with measurable reductions in production issues and faster feedback loops.',
      metrics: [
        '~85% unit coverage',
        'Sentry + Grafana',
        '~30% fewer issues'
      ],
      icon: '🔍',
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
              <span className="metric-big">10+</span>
              <span className="metric-small">Years of Experience</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">5</span>
              <span className="metric-small">Engineers Led</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">260+</span>
              <span className="metric-small">Production Issues Resolved</span>
            </div>
            <div className="metric-block">
              <span className="metric-big">90%</span>
              <span className="metric-small">Test Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
