import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3', 'SCSS', 'Next.js', 'Angular', 'CSS Modules', 'Styled Components', 'Tailwind CSS'],
      icon: '⚛️',
    },
    {
      title: 'State and APIs',
      skills: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'RESTful APIs', 'GraphQL', 'Apollo', 'WebSockets'],
      icon: '🔄',
    },
    {
      title: 'Architecture',
      skills: ['Reusable component systems', 'Design systems', 'Storybook', 'Design tokens', 'Micro-frontends', 'Webpack Module Federation', 'single-spa', 'Nx monorepo', 'Webpack', 'Vite'],
      icon: '🏗️',
    },
    {
      title: 'Performance',
      skills: ['Core Web Vitals', 'LCP', 'INP', 'CLS', 'Page-load optimization', 'Bundle budgets', 'Code splitting', 'Lazy loading', 'Memoization', 'Virtual scrolling', 'Service Worker caching'],
      icon: '⚡',
    },
    {
      title: 'Testing',
      skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'TDD', 'axe', 'jest-axe'],
      icon: '🧪',
    },
    {
      title: 'Accessibility & UX',
      skills: ['WCAG AA', 'Responsive design', 'i18n', 'Figma'],
      icon: '🎨',
    },
    {
      title: 'Observability and CI/CD',
      skills: ['Sentry', 'Grafana', 'Prometheus', 'RUM', 'Feature flags', 'A/B experimentation', 'Git', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
      icon: '📈',
    },
    {
      title: 'Security',
      skills: ['OAuth/SSO', 'JWT', 'RBAC', 'OWASP'],
      icon: '🔒',
    },
    {
      title: 'Backend and Mobile',
      skills: ['Node.js', 'MongoDB', 'Kafka', 'SQS', 'Redis', 'Elasticsearch', 'React Native'],
      icon: '🧩',
    },
    {
      title: 'AI',
      skills: ['LLM features', 'Semantic search', 'MCP tools', 'AI coding assistants'],
      icon: '🤖',
    },
    {
      title: 'Ways of Working',
      skills: ['Agile/Scrum', 'JIRA', 'Confluence', 'RFCs', 'Architecture decisions', 'Technical roadmaps', 'Code reviews', 'Mentoring'],
      icon: '🧭',
    },
  ];

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Proficient in a wide range of modern technologies and frameworks
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category skill-${index}`}>
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Core Proficiencies</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-label">React.js</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">Angular</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">TypeScript</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">Performance Optimization</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-label">State Management</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
