import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleExperience = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const experiences = [
    {
      id: 0,
      company: 'Visa',
      title: 'Senior Software Engineer (Frontend Lead)',
      duration: 'Jul 2022 – Present',
      location: 'Bengaluru, India',
      achievements: [
        'Optimized Core Web Vitals and page-load performance on VAS Sales Navigator (LCP from 3.2s to 2.1s, INP from 600ms to 250ms, CLS from 0.5 to 0.2) with code splitting, lazy loading, memoization, virtual scrolling and bundle budgets; cut page load by ~17% and proposal-generation time by ~30%.',
        'Defined frontend architecture, coding standards and reusable patterns for both work streams; built a shared design system and performance playbook documented in Storybook, now used by 5 teams across Visa.',
        'Proposed and led the monolith-to-micro-frontends migration using Webpack Module Federation; wrote the architecture design doc, won leadership approval, and aligned 3 teams to split one codebase into 2 independently deployed apps.',
        'Built the pricing and fee-calculation UI used by client-facing sales teams, cutting calculation errors by ~44% and making quotes 2.5x faster; integrated GraphQL services with Apollo caching that cut API calls by ~15%.',
        'Implemented authentication and role-based access control (RBAC) across the multi-tenant platforms, with consistent validation and error-state handling for API-driven flows.',
        'Diagnosed and resolved production issues using Sentry, Grafana, Prometheus and real-user monitoring; shipped through Jenkins CI/CD with weekly releases, feature-flagged gradual rollouts and A/B experiments, cutting production issues by ~30%.',
        'Delivered accessible, responsive UI meeting WCAG AA in 7+ languages, backed by unit, integration and end-to-end tests: ~85% unit coverage and Cypress/Playwright E2E suites.',
        'Led 5 engineers and 1 QA: breaks down initiatives from technical design through launch, runs code reviews, mentors and onboard engineers, and collaborates with product, design, backend, QA and business stakeholders across geographies.'
      ],
    },
    {
      id: 1,
      company: 'Operative',
      title: 'Senior Frontend Developer (Lead Frontend Engineer)',
      duration: 'Jan 2020 – Jul 2022',
      location: 'Bengaluru, India',
      achievements: [
        'Owned Product Chooser end to end as lead frontend engineer, from technical design to production launch on Azure/GCP; mentored 5 developers.',
        'Built a reusable React/TypeScript component library and design system (Storybook) adopted across teams on the Ratecard platform.',
        'Drove MFE initiatives across multiple applications using a multi-repo approach; built WebSocket-based real-time collaboration for concurrent users.',
        'Improved site performance by ~28% through code splitting, Service Worker caching and state-store optimization; owned GitLab CI and Jenkins CI/CD pipelines.',
        'Resolved 260+ production issues and delivered 3 major enhancements; raised test coverage to 90% with TDD (Jest, React Testing Library); shipped a cross-platform React Native app for iOS and Android.'
      ],
    },
    {
      id: 2,
      company: 'Infrrd',
      title: 'Frontend Developer',
      duration: 'Aug 2019 – Jan 2020',
      location: 'Bengaluru, India',
      achievements: [
        'Translated product and UX requirements into responsive UI using HTML5, CSS3, and JavaScript.',
        'Built and shipped customer-facing interfaces with a strong focus on usability and maintainability.'
      ],
    },
    {
      id: 3,
      company: 'Zycus',
      title: 'Software Engineer',
      duration: 'Oct 2018 – Aug 2019',
      location: 'Mumbai, India',
      achievements: [
        'Built reusable Angular/TypeScript components and dynamic forms for enterprise procurement applications.',
        'Improved UI consistency and maintainability using modular Angular architecture and shared component patterns.'
      ],
    },
    {
      id: 4,
      company: 'Tata Consultancy Services (TCS)',
      title: 'System Engineer',
      duration: 'Nov 2016 – Oct 2018',
      location: 'Bengaluru, India',
      achievements: [
        'Integrated UPI and net banking payments into Dena Bank’s (now Bank of Baroda) merchant application, used by 10,000+ merchants.',
        'Built the settlement reports module and supported enterprise payment workflows for merchant operations.'
      ],
    },
  ];

  return (
    <section id="experience" className={`experience ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${expandedId === exp.id ? 'expanded' : ''}`}
              onClick={() => toggleExperience(exp.id)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-location">📍 {exp.location}</p>

                <div className={`experience-achievements ${expandedId === exp.id || index === 0 ? 'show' : ''}`}>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="expand-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleExperience(exp.id);
                  }}
                >
                  {expandedId === exp.id ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
