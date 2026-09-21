import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import './Hero.css';

// 3D Floating Neural Network Component
function FloatingNeuralNet({ mouse }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle self-rotation
      groupRef.current.rotation.y = time * 0.06;
      groupRef.current.rotation.x = time * 0.03;

      // Mouse Parallax effect
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 1.5, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 1.5, 0.05);
    }
  });

  const nodePositions = [
    [0, 1.5, 0],
    [-1.5, 0.5, 1],
    [1.5, 0.8, -1],
    [-0.8, -1.2, 0.5],
    [0.8, -1.0, -0.5],
    [-2.2, -0.2, -1],
    [2.2, -0.4, 1],
    [-1.0, 1.8, -0.8],
    [1.0, 1.6, 0.8],
    [-0.2, -2.0, -0.2],
    [-2.8, 1.2, 0.2],
    [2.8, -1.5, -0.5]
  ];

  const connections = [
    [0, 1], [0, 2], [0, 7], [0, 8],
    [1, 3], [1, 5], [1, 10],
    [2, 4], [2, 6], [2, 11],
    [3, 4], [3, 9], [3, 5],
    [4, 9], [4, 6],
    [5, 10], [6, 11],
    [7, 8], [7, 10], [8, 11]
  ];

  const points = useMemo(() => {
    const pts = [];
    connections.forEach(([i, j]) => {
      pts.push(new THREE.Vector3(...nodePositions[i]));
      pts.push(new THREE.Vector3(...nodePositions[j]));
    });
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <group ref={groupRef}>
      {/* Node connection lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#16181a" opacity={0.65} transparent={true} linewidth={1.5} />
      </lineSegments>

      {/* Individual Nodes */}
      {nodePositions.map((pos, idx) => (
        <mesh position={pos} key={idx}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshPhysicalMaterial
            color={idx % 2 === 0 ? '#ff5a00' : '#00a6b4'}
            emissive={idx % 2 === 0 ? '#ff5a00' : '#00a6b4'}
            emissiveIntensity={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Synaptic Drifting Particles Component
function NeuralParticles({ count = 120 }) {
  const pointsRef = useRef();
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 10;
      pos[i+1] = (Math.random() - 0.5) * 10;
      pos[i+2] = (Math.random() - 0.5) * 10;
      
      spd[i] = (Math.random() - 0.5) * 0.005;
      spd[i+1] = (Math.random() - 0.5) * 0.005;
      spd[i+2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, spd];
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      const posArr = geo.attributes.position.array;
      for (let i = 0; i < posArr.length; i += 3) {
        posArr[i] += speeds[i];
        posArr[i+1] += speeds[i+1];
        posArr[i+2] += speeds[i+2];

        // Wrap around boundary coordinates
        if (Math.abs(posArr[i]) > 5) posArr[i] = -posArr[i];
        if (Math.abs(posArr[i+1]) > 5) posArr[i+1] = -posArr[i+1];
        if (Math.abs(posArr[i+2]) > 5) posArr[i+2] = -posArr[i+2];
      }
      geo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ff5a00" size={0.06} sizeAttenuation={true} transparent={true} opacity={0.6} />
    </points>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="glow-spot glow-blue hero-glow-1"></div>
      <div className="glow-spot glow-purple hero-glow-2"></div>

      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text-silver">Building Intelligent</span>
            <br />
            <span className="gradient-text-blue">Digital Experiences.</span>
          </h1>

          <p className="hero-description">
            I design and develop scalable web applications, AI-powered systems, and innovative digital products that solve real-world problems.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me <Send size={14} />
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noreferrer"
              download="Sanyam_Jain_Resume.pdf" 
              className="hero-resume-link btn-secondary"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        </div>

        {/* Right 3D Visual Side */}
        <div className="hero-canvas-container interactive-three">
          <div className="hero-orb-aura"></div>
          <Canvas camera={{ position: [0, 0, 7.5], fov: 60 }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.65} />
            <pointLight position={[10, 10, 10]} intensity={1.3} color="#ff5a00" />
            <pointLight position={[-10, -10, -10]} intensity={0.9} color="#00a6b4" />
            <directionalLight position={[0, 4, 3]} intensity={0.8} color="#ffffff" />
            <FloatingNeuralNet mouse={mouse} />
            <NeuralParticles count={140} />
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.4} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
