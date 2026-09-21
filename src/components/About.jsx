import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Database, Globe, Layers } from 'lucide-react';
import './About.css';

function StatCounter({ value, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value, 10);
          if (isNaN(end)) {
            setCount(value);
            return;
          }
          if (start === end) return;
          
          const incrementTime = Math.max(Math.floor(duration / end), 25);
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const techSpecs = [
    {
      category: 'Languages',
      icon: <Terminal size={18} className="spec-icon-purple" />,
      items: 'Python, JavaScript, SQL, HTML, CSS, C++'
    },
    {
      category: 'Frameworks & Dev',
      icon: <Cpu size={18} className="spec-icon-blue" />,
      items: 'React.js, Node.js, Express.js, FastAPI, Flask, Streamlit, TensorFlow, OpenCV, Pandas, NumPy, Plotly, Scikit-learn'
    },
    {
      category: 'Databases & DevOps',
      icon: <Database size={18} className="spec-icon-blue" />,
      items: 'PostgreSQL, MongoDB, SQLite, Redis, Apache Kafka, Docker, Git, GitHub, Vercel'
    },
    {
      category: 'Architecture Concepts',
      icon: <Layers size={18} className="spec-icon-silver" />,
      items: 'Microservices, REST API, JWT Auth, RBAC, System Design, Event-Driven Architecture, ML/DL, Computer Vision, Data Analytics, SaaS'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="glow-spot glow-blue about-glow-1"></div>
      <div className="glow-spot glow-purple about-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">My Background</p>
          <h2 className="section-title gradient-text-silver">The Human Behind The Code</h2>
        </div>

        <div className="about-grid">
          {/* Conversational Narrative */}
          <div className="about-story">
            <h3 className="about-story-title">Hi, I'm Sanyam.</h3>
            
            <p className="about-story-paragraph">
              I am a Computer Science student at BML Munjal University (2023 - 2027) with a CGPA of 6.36. I have a deep fascination for building products that bridge complex full-stack engineering with intelligent machine learning. I build systems to solve real-world problems.
            </p>
            <p className="about-story-paragraph">
              My technical expertise spans microservices architectures, JWT authentication & role-based access control (RBAC), and automated event-driven systems. I design and build secure, end-to-end applications where ML-based classification, deep learning models, and real-time data pipelines are integrated into intuitive user products.
            </p>
            <p className="about-story-paragraph">
              Beyond engineering, I value leadership and collaboration. Serving as the Database Manager for the Student Alumni Relations Cell, Entry Management Lead for the ChronoQuest Hackathon, and Event Management Lead for TEDx BMU taught me how to manage operations, coordinate cross-functional teams, and execute under pressure.
            </p>

            {/* Statistics */}
            <div className="about-stats">
              <div className="stat-card glass-panel hud-corners">
                <StatCounter value="10" suffix="+" />
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card glass-panel hud-corners">
                <StatCounter value="1" />
                <span className="stat-label">Internship</span>
              </div>
              <div className="stat-card glass-panel hud-corners">
                <StatCounter value="20" suffix="+" />
                <span className="stat-label">Tech Tools</span>
              </div>
              <div className="stat-card glass-panel hud-corners">
                <StatCounter value="3" />
                <span className="stat-label">Leadership Roles</span>
              </div>
            </div>
          </div>


          {/* Technical Specifications */}
          <div className="about-specs glass-panel hud-corners">
            <h3 className="specs-title">Technical Toolbelt</h3>
            <p className="specs-subtitle">Industrial-grade toolchains, languages, and concepts from my resume.</p>
            <div className="specs-table">
              {techSpecs.map((spec, idx) => (
                <div className="spec-row" key={idx}>
                  <div className="spec-header">
                    {spec.icon}
                    <span className="spec-label">{spec.category}</span>
                  </div>
                  <div className="spec-value">{spec.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
