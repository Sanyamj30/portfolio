import React, { useState } from 'react';
import { Cpu, Terminal, Database, Sparkles, Plus, Award } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeCard, setActiveCard] = useState(null);
  const [tiltStyles, setTiltStyles] = useState({});

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 10; // Max 10 degrees tilt
    const angleY = (x - xc) / 10;
    
    setTiltStyles(prev => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`
      }
    }));
  };

  const handleMouseLeave = (id) => {
    setActiveCard(null);
    setTiltStyles(prev => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      }
    }));
  };

  const capabilities = [
    {
      id: 1,
      title: 'AI & Intelligent Systems',
      icon: <Cpu size={22} className="cap-icon-blue" />,
      description: 'Designing and deploying machine learning, computer vision, and NLP solutions using modern AI frameworks. Experienced in predictive modeling, object detection, LLM-powered applications, and intelligent automation systems.',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'YOLOv8', 'OpenCV', 'Hugging Face', 'Scikit-learn'],
      extendedSkills: ['Keras', 'SpaCy', 'LangChain', 'RAG Systems', 'Transformers', 'Fine-tuning'],
      proficiency: 92,
      accentColor: 'var(--accent-blue)'
    },
    {
      id: 2,
      title: 'Full Stack Engineering',
      icon: <Terminal size={22} className="cap-icon-purple" />,
      description: 'Building scalable web applications with modern frontend frameworks, secure backend architectures, RESTful APIs, authentication systems, and cloud-ready deployments.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Flask', 'WebSockets'],
      extendedSkills: ['Next.js', 'Redux Toolkit', 'Razorpay', 'JWT Auth', 'HTML5 & CSS3', 'REST APIs'],
      proficiency: 88,
      accentColor: 'var(--accent-purple)'
    },
    {
      id: 3,
      title: 'Data & Cloud Infrastructure',
      icon: <Database size={22} className="cap-icon-silver" />,
      description: 'Developing high-performance databases, analytics pipelines, and data-driven platforms while ensuring scalability, reliability, and seamless system integration.',
      skills: ['PostgreSQL', 'MongoDB', 'Pandas', 'NumPy', 'REST APIs', 'Git', 'Docker'],
      extendedSkills: ['AWS S3', 'Redis', 'SQL Server', 'CI/CD Pipelines', 'GitHub Actions', 'Linux'],
      proficiency: 85,
      accentColor: '#515154'
    }
  ];


  return (
    <section id="skills" className="section skills-section">
      <div className="glow-spot glow-blue skills-glow-1"></div>
      <div className="glow-spot glow-purple skills-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">Technical Strengths</p>
          <h2 className="section-title gradient-text-silver">Core Capabilities</h2>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap) => {
            const isHovered = activeCard === cap.id;
            return (
              <div 
                key={cap.id} 
                className={`capability-card glass-panel ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setActiveCard(cap.id)}
                onMouseMove={(e) => handleMouseMove(e, cap.id)}
                onMouseLeave={() => handleMouseLeave(cap.id)}
                style={{ 
                  ...tiltStyles[cap.id],
                  transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s, border-color 0.25s, box-shadow 0.25s'
                }}
              >
                <div className="capability-header">
                  <div className="capability-icon-box">
                    {cap.icon}
                  </div>
                  <h3 className="capability-title">{cap.title}</h3>
                </div>
                
                <p className="capability-desc">{cap.description}</p>
                
                <div className="capability-divider"></div>
                
                {/* Tech Tags List */}
                <div className="capability-tech-list">
                  {cap.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag-badge">
                      <Sparkles size={9} className="tag-spark" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Interactive Extended Tech Reveal on Hover */}
                <div className={`extended-tech-drawer ${isHovered ? 'drawer-open' : ''}`}>
                  <div className="extended-title">
                    <Plus size={10} className="plus-icon" />
                    <span>Also Experienced In:</span>
                  </div>
                  <div className="extended-skills-list">
                    {cap.extendedSkills.map((exSkill, exIdx) => (
                      <span key={exIdx} className="extended-tag">
                        {exSkill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
