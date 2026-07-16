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

  const experiences = [
    {
      id: 0,
      company: 'Visa',
      title: 'Senior Software Engineer',
      duration: 'Jul 2022 – Present',
      location: 'Bengaluru, India',
      achievements: [
        'Developed production-grade frontend modules using React.js, Angular, TypeScript with Redux Toolkit and TanStack Query',
        'Improved page load time by 15% through lazy loading, code splitting, and bundle optimization',
        'Improved UI responsiveness by 20% on data-heavy screens using pagination and virtual scrolling',
        'Reduced API calls by 20% through optimized RxJS streams and request caching',
        'Built scalable UI components for product recommendations and sales platforms',
        'Implemented secure frontend flows with JWT, RBAC, and enterprise session management'
      ],
    },
    {
      id: 1,
      company: 'Operative',
      title: 'Senior Frontend Developer',
      duration: 'Jan 2020 – Jul 2022',
      location: 'Bengaluru, India',
      achievements: [
        'Implemented performance tuning achieving 25% website performance improvement',
        'Designed and integrated reusable UI library into Ratecard project',
        'Resolved 275+ tickets across enhancements, bug fixes, and production support',
        'Increased test coverage to 92% using Karma and Jasmine',
        'Mentored 4 developers on frontend fundamentals and best practices'
      ],
    },
    {
      id: 2,
      company: 'Infrrd',
      title: 'Frontend Developer',
      duration: 'Aug 2019 – Jan 2020',
      location: 'Bengaluru, India',
      achievements: [
        'Translated product requirements into responsive user interfaces',
        'Collaborated with product managers and UX designers',
        'Conducted code reviews for security and browser compatibility'
      ],
    },
    {
      id: 3,
      company: 'Zycus',
      title: 'Software Engineer',
      duration: 'Oct 2018 – Aug 2019',
      location: 'Mumbai, India',
      achievements: [
        'Enhanced legacy applications with reusable Angular components',
        'Developed dynamic form components for procurement software',
        'Built template-based UI workflows using Angular and TypeScript'
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
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-location">📍 {exp.location}</p>

                <div className={`experience-achievements ${expandedId === exp.id ? 'show' : ''}`}>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <button className="expand-btn">
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
