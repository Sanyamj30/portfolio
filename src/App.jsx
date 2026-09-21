import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import GlobalCanvas from './components/GlobalCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 3D Global Particle Background & Mouse Cursor */}
      <GlobalCanvas />
      <CustomCursor />

      {/* Luxury Loading Sequence */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Main Website Wrapper */}
      <div className={`app-wrapper ${loading ? 'app-hidden' : 'app-visible'}`}>
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Skills />
          <CurrentlyBuilding />
          <Projects />
          <Certifications />
          <Achievements />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

