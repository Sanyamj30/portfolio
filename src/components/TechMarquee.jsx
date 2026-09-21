import React from 'react';
import './TechMarquee.css';

export default function TechMarquee() {
  const techs = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'PyTorch',
    'TensorFlow',
    'YOLOv8',
    'OpenCV',
    'Hugging Face',
    'FastAPI',
    'Flask',
    'WebSockets',
    'PostgreSQL',
    'Pandas',
    'NumPy',
    'Docker',
    'Git',
    'REST APIs'
  ];

  // Duplicate items to ensure a seamless wrap
  const doubledTechs = [...techs, ...techs];

  return (
    <div className="tech-marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee-content">
          {doubledTechs.map((tech, idx) => (
            <div className="marquee-item" key={idx}>
              <span className="marquee-dot"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
