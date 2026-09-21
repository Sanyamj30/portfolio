import React from 'react';
import { Trophy, Award, Target, Cpu, Database } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievementsList = [
    {
      title: 'Database Manager',
      subtitle: 'Student Alumni Relations Cell',
      description: 'Supervised alumni database records, ensuring database schema alignment, optimization, and security.',
      icon: <Database size={20} className="ach-icon-blue" />
    },
    {
      title: 'Entry Management Lead',
      subtitle: 'ChronoQuest Hackathon',
      description: 'Managed team registrations, entry validation gates, and access controls for hackathon participants.',
      icon: <Target size={20} className="ach-icon-silver" />
    },
    {
      title: 'Event Management Lead',
      subtitle: 'TEDx BMU',
      description: 'Coordinated speaker communications, delegate management, operations, and logistics execution.',
      icon: <Award size={20} className="ach-icon-purple" />
    },
    {
      title: 'Basketball Representative',
      subtitle: 'BML Munjal University',
      description: 'Represented the BMU Basketball Team in inter-university tournaments and regional athletic meets.',
      icon: <Trophy size={20} className="ach-icon-gold" />
    },
    {
      title: 'Full-Stack & AI Builder',
      subtitle: 'Technical Milestones',
      description: 'Built enterprise, AI and full-stack software projects across healthcare, analytics, and e-commerce domains.',
      icon: <Cpu size={20} className="ach-icon-blue" />
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="glow-spot glow-blue ach-glow-1"></div>
      <div className="glow-spot glow-purple ach-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">Excellence Log</p>
          <h2 className="section-title gradient-text-silver">Key Achievements & Roles</h2>
        </div>

        <div className="achievements-grid">
          {achievementsList.map((ach, idx) => (
            <div key={idx} className="achievement-card glass-panel hud-corners">
              <div className="ach-header">
                <div className="ach-icon-box">{ach.icon}</div>
                <div className="ach-meta">
                  <h4 className="ach-card-title">{ach.title}</h4>
                  <span className="ach-card-sub">{ach.subtitle}</span>
                </div>
              </div>
              <p className="ach-card-desc">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
