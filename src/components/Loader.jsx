import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    // Simulate progress increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }
      });

      tl.to(subtitleRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: 'power3.inOut'
      })
      .to(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.7,
        ease: 'power3.inOut'
      }, '-=0.3')
      .to(progressBarRef.current, {
        opacity: 0,
        scaleX: 0,
        duration: 0.4,
        ease: 'power3.inOut'
      }, '-=0.5')
      .to(containerRef.current, {
        y: '-100%',
        duration: 0.9,
        ease: 'power4.inOut'
      }, '-=0.3');
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-container" ref={containerRef}>
      <div className="loader-content">
        <div className="loader-brand" ref={titleRef}>
          <span className="loader-letter">S</span>
          <span className="loader-letter">A</span>
          <span className="loader-letter">N</span>
          <span className="loader-letter">Y</span>
          <span className="loader-letter">A</span>
          <span className="loader-letter">M</span>
          <span className="loader-space"> </span>
          <span className="loader-letter font-silver">J</span>
          <span className="loader-letter font-silver">A</span>
          <span className="loader-letter font-silver">I</span>
          <span className="loader-letter font-silver">N</span>
        </div>
        
        <div className="loader-subtitles" ref={subtitleRef}>
          <p className="loader-sub-item">Full Stack Developer</p>
          <div className="loader-dot"></div>
          <p className="loader-sub-item">AI Engineer</p>
        </div>

        <div className="loader-progress-wrapper" ref={progressBarRef}>
          <div className="loader-progress-bar" style={{ width: `${progress}%` }}></div>
          <span className="loader-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
