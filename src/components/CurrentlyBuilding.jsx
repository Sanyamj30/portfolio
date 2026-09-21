import React from 'react';
import { Sparkles, Terminal, Activity, Compass, Shield } from 'lucide-react';
import './CurrentlyBuilding.css';

export default function CurrentlyBuilding() {
  const currentProjects = [
    {
      title: 'Human Emotion Monitoring App',
      status: 'Active Development',
      progress: 40,
      desc: 'An AI-powered application that leverages computer vision and facial landmark analysis to monitor and analyze human emotional states in real-time.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'React.js', 'Flask']
    },
    {
      title: 'Campus Food Delivery Platform',
      status: 'Beta Testing',
      progress: 45,
      desc: 'A hyper-local food delivery application designed specifically for university campuses, facilitating seamless ordering and optimized peer-to-peer delivery routes.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io']
    }
  ];


  return (
    <section id="building" className="section building-section">
      <div className="glow-spot glow-blue build-glow-1"></div>
      <div className="glow-spot glow-purple build-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">Active Sprints</p>
          <h2 className="section-title gradient-text-silver">Currently Building</h2>
        </div>

        <div className="building-grid">
          {currentProjects.map((proj, idx) => (
            <div key={idx} className="build-card glass-panel hud-corners">
              <div className="build-card-header">
                <span className="build-pulse-badge">
                  <span className="build-pulse-dot"></span>
                  {proj.status}
                </span>
                <span className="build-percentage">{proj.progress}%</span>
              </div>

              <h3 className="build-card-title">{proj.title}</h3>
              <p className="build-card-desc">{proj.desc}</p>

              {/* Progress Bar */}
              <div className="build-progress-track">
                <div 
                  className="build-progress-fill" 
                  style={{ width: `${proj.progress}%` }}
                ></div>
              </div>

              <div className="build-tech-row">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="build-tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
