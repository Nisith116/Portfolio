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
      title: 'Frontend Frameworks',
      skills: ['React.js', 'Angular', 'Vite', 'Next.js'],
      icon: '⚛️',
    },
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS'],
      icon: '📝',
    },
    {
      title: 'State Management',
      skills: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'NgRx', 'RxJS'],
      icon: '🔄',
    },
    {
      title: 'UI Libraries',
      skills: ['Tailwind CSS', 'Material UI', 'PrimeNG', 'AG Grid'],
      icon: '🎨',
    },
    {
      title: 'Performance',
      skills: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Bundle Optimization'],
      icon: '⚡',
    },
    {
      title: 'Testing & Tools',
      skills: ['Jest', 'Jasmine', 'Karma', 'Git', 'CI/CD'],
      icon: '🧪',
    },
    {
      title: 'Security',
      skills: ['JWT', 'RBAC', 'HTTP Interceptors', 'Secure Cookies'],
      icon: '🔒',
    },
    {
      title: 'AI Tools',
      skills: ['GitHub Copilot', 'Claude', 'ChatGPT', 'MCP Workflows'],
      icon: '🤖',
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
