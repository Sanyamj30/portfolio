import React, { useEffect, useRef } from 'react';
import { Calendar, Briefcase, Database, Users } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Web Development Intern',
      company: 'AddWeb Solutions Private Limited',
      logoText: 'AW',
      period: 'June 2025 - August 2025',
      icon: <Briefcase size={18} />,
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
      points: [
        'Developed responsive web applications using HTML, CSS, JavaScript and React.js.',
        'Integrated REST APIs, debugged applications and collaborated on client projects.'
      ]
    },
    {
      id: 2,
      role: 'Database Manager',
      company: 'Student Alumni Relations Cell',
      logoText: 'SA',
      period: 'September 2024 - May 2025',
      icon: <Database size={18} />,
      tech: ['SQL', 'PostgreSQL', 'Database Management', 'Query Optimization'],
      points: [
        'Responsible for managing and maintaining internal database systems.',
        'Ensured data integrity, query optimization, and structured alumni record management.'
      ]
    },
    {
      id: 3,
      role: 'Event & Entry Management Lead',
      company: 'TEDx BMU & ChronoQuest Hackathon',
      logoText: 'TX',
      period: 'February 2025 - April 2026',
      icon: <Users size={18} />,
      tech: ['Team Leadership', 'Operations', 'Event Management', 'Public Relations'],
      points: [
        'Event Management Lead for TEDx BMU organizing speaker sessions, operational workflows, and scheduling.',
        'Entry Management Lead for ChronoQuest Hackathon managing team entries, registry databases, and check-in pipelines.'
      ]
    }
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section experience-section">
      <div className="glow-spot glow-blue exp-glow-1"></div>
      <div className="glow-spot glow-purple exp-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">My Milestones</p>
          <h2 className="section-title gradient-text-silver">Professional Experience</h2>
        </div>

        <div className="timeline-wrapper">
          {/* Vertical Center Axis Line */}
          <div className="timeline-axis"></div>

          {experiences.map((exp, idx) => (
            <div 
              key={exp.id} 
              className={`timeline-node ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              {/* Timeline Center Point */}
              <div className="timeline-indicator-box">
                <div className="timeline-indicator-circle">
                  {exp.icon}
                </div>
              </div>

              {/* Styled Card */}
              <div className="timeline-card glass-panel hud-corners">
                <div className="timeline-card-header">
                  <div className="timeline-card-top">
                    {/* Stylized Company Logo Badge */}
                    <div className="company-logo-badge">
                      {exp.logoText}
                    </div>
                    <div className="timeline-card-meta">
                      <div className="timeline-date">
                        <Calendar size={13} className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="timeline-card-role">{exp.role}</h3>
                  <h4 className="timeline-card-company">{exp.company}</h4>
                </div>

                <ul className="timeline-card-bullets">
                  {exp.points.map((point, index) => (
                    <li key={index} className="timeline-bullet-item">
                      <span className="bullet-glow-dot"></span>
                      <span className="bullet-text">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags on Card */}
                <div className="timeline-card-tech">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="timeline-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
