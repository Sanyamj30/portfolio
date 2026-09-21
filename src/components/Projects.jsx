import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, AlertCircle, Compass, Sparkles, ChevronLeft, ChevronRight, Activity, Cpu, Database } from 'lucide-react';
import './Projects.css';

const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 16}
    height={props.size || 16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'DevPilot AI Evaluation Platform',
      subtitle: 'Repository-Level RAG & LLM Benchmarking',
      slides: [
        { title: 'AST & Dependency Graph', desc: 'Syntax tree parsing & symbol extraction for cross-file context' },
        { title: 'Hybrid Dense + BM25 RAG', desc: '384-d MiniLM vectors + BM25 keyword search with reranking' },
        { title: '7-Category Benchmark Suite', desc: 'Multi-LLM evaluation & guardrail telemetry across Ollama models' }
      ],
      problem: 'Standard LLM coding assistants only analyze isolated snippets or single files, failing to reason over whole-repository architecture, cross-file symbol definitions, and complex module dependencies.',
      approach: 'Engineered a repository-level RAG platform using AST structural parsing, MiniLM embeddings, and hybrid retrieval (Dense + BM25 + symbol boost + dependency expansion). Evaluates local Ollama models (Qwen Coder, Code Llama, StarCoder2) with output guardrails.',
      impact: 'Built an automated 7-category evaluation suite tracking accuracy, hallucination, and latency. Hybrid retrieval boosted coverage from 56% to 79% and improved Qwen Coder accuracy to 88% while slashing hallucination to 8%.',
      metric: 'Hybrid AST RAG | 88% Accuracy (+12%) & 8% Hallucination',
      tech: ['Python', 'Flask', 'React.js', 'Vite', 'Ollama', 'AST Parser', 'Sentence Transformers', 'ChromaDB', 'BM25', 'Local LLMs'],
      archDiagram: (
        <svg viewBox="0 0 400 100" className="arch-svg">
          <rect x="10" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="50" y="55" className="svg-text">AST Ingest</text>
          
          <path d="M 90 50 L 110 50" className="svg-arrow" />
          
          <rect x="110" y="30" width="80" height="40" rx="4" className="svg-box purple" />
          <text x="150" y="55" className="svg-text">Hybrid RAG</text>
          
          <path d="M 190 50 L 210 50" className="svg-arrow" />
          
          <rect x="210" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="250" y="55" className="svg-text">Ollama LLMs</text>
          
          <path d="M 290 50 L 310 50" className="svg-arrow" />
          
          <rect x="310" y="30" width="80" height="40" rx="4" className="svg-box dark" />
          <text x="350" y="55" className="svg-text">Evaluation</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Pharmora Pharmacy Platform',
      subtitle: 'Enterprise Operations & Microservices',
      slides: [
        { title: 'API Gateway Service', desc: 'Secure entrypoint routing JWT traffic to services' },
        { title: 'FEFO Inventory Log', desc: 'First-Expiry-First-Out stock rotation metrics' },
        { title: 'Kafka Event Bus', desc: 'Broker channels facilitating async data sync' }
      ],
      problem: 'Enterprise pharmacy systems require highly reliable and decoupled inventory validation and prescription tracking under heavy load.',
      approach: 'Designed and developed a microservices architecture featuring independent Authentication, Inventory, and Sales APIs, integrating JWT authentication, Role-Based Access Control (RBAC), and prescription auditing.',
      impact: 'Implemented a Kafka event bus for asynchronous communication and added Redis caching with automated unit test coverage.',
      metric: 'Event-Driven Bus | Redis Cache Layer',
      tech: ['FastAPI', 'React.js', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker', 'JWT', 'Microservices'],
      liveLink: 'https://pharmorago.vercel.app',
      gitLink: 'https://github.com/Sanyamj30/Pharmora',
      archDiagram: (
        <svg viewBox="0 0 400 100" className="arch-svg">
          <rect x="10" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="50" y="55" className="svg-text">Gateway</text>
          
          <path d="M 90 50 L 110 50" className="svg-arrow" />
          
          <rect x="110" y="30" width="80" height="40" rx="4" className="svg-box purple" />
          <text x="150" y="55" className="svg-text">JWT Auth</text>
          
          <path d="M 190 50 L 210 50" className="svg-arrow" />
          
          <rect x="210" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="250" y="55" className="svg-text">Kafka Bus</text>
          
          <path d="M 290 50 L 310 50" className="svg-arrow" />
          
          <rect x="310" y="30" width="80" height="40" rx="4" className="svg-box dark" />
          <text x="350" y="55" className="svg-text">PostgreSQL</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'SafeHer Analytics Dashboard',
      subtitle: 'Women\'s Safety Classification & GIS',
      slides: [
        { title: 'Interactive Map Layer', desc: 'Geospatial crime frequency indicators' },
        { title: 'ML Classifier Engine', desc: 'Risk indexing forecasts via Scikit-learn' },
        { title: 'Data Preprocessing', desc: 'Coordinates cleaner and missing values Imputer' }
      ],
      problem: 'Synthesizing district-level safety parameters to highlight safety trends requires responsive charts and clean geographic boundaries.',
      approach: 'Built an interactive data analytics dashboard using Python and Streamlit to analyze regional safety risks.',
      impact: 'Developed machine learning models for safety level classifications and optimized the pre-processing pipelines.',
      metric: 'Interactive Plotly Maps | ML Prediction',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Scikit-learn'],
      liveLink: 'https://safeher.streamlit.app',
      gitLink: 'https://github.com/Sanyamj30/SafeHer',
      archDiagram: (
        <svg viewBox="0 0 400 100" className="arch-svg">
          <rect x="10" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="50" y="55" className="svg-text">Pandas ETL</text>
          
          <path d="M 90 50 L 110 50" className="svg-arrow" />
          
          <rect x="110" y="30" width="80" height="40" rx="4" className="svg-box purple" />
          <text x="150" y="55" className="svg-text">ML Model</text>
          
          <path d="M 190 50 L 210 50" className="svg-arrow" />
          
          <rect x="210" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="250" y="55" className="svg-text">Plotly Maps</text>
          
          <path d="M 290 50 L 310 50" className="svg-arrow" />
          
          <rect x="310" y="30" width="80" height="40" rx="4" className="svg-box dark" />
          <text x="350" y="55" className="svg-text">Streamlit UI</text>
        </svg>
      )
    },
    {
      id: 4,
      title: 'AI Smart Wardrobe System',
      subtitle: 'Computer Vision & Outfit Recommender',
      slides: [
        { title: 'MobileNet Classifier', desc: 'Transfer learning model categorizing apparel' },
        { title: 'Weather API Hook', desc: 'Recommends matching apparel based on weather' },
        { title: 'OpenCV Camera capture', desc: 'Extracts wardrobe items from direct video frames' }
      ],
      problem: 'Automating personal outfit selection requires high-fidelity clothing category detection and weather-responsive recommender algorithms.',
      approach: 'Developed a convolutional neural network (CNN) model using MobileNetV2 transfer learning via TensorFlow to classify apparel items.',
      impact: 'Integrated an OpenCV video capture client and built a Flask API endpoint serving weather-aware matching outfit outputs.',
      metric: 'MobileNetV2 CNN | Real-Time OpenCV',
      tech: ['Python', 'TensorFlow', 'MobileNetV2', 'Flask', 'OpenCV'],
      gitLink: 'https://github.com/Sanyamj30',
      archDiagram: (
        <svg viewBox="0 0 400 100" className="arch-svg">
          <rect x="10" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="50" y="55" className="svg-text">OpenCV stream</text>
          
          <path d="M 90 50 L 110 50" className="svg-arrow" />
          
          <rect x="110" y="30" width="80" height="40" rx="4" className="svg-box purple" />
          <text x="150" y="55" className="svg-text">MobileNetV2</text>
          
          <path d="M 190 50 L 210 50" className="svg-arrow" />
          
          <rect x="210" y="30" width="80" height="40" rx="4" className="svg-box blue" />
          <text x="250" y="55" className="svg-text">Weather Rule</text>
          
          <path d="M 290 50 L 310 50" className="svg-arrow" />
          
          <rect x="310" y="30" width="80" height="40" rx="4" className="svg-box dark" />
          <text x="350" y="55" className="svg-text">Flask API</text>
        </svg>
      )
    }
  ];

  // Active slide indices for each project
  const [slideIndices, setSlideIndices] = useState({});

  const handleNextSlide = (projId, totalSlides) => {
    setSlideIndices(prev => ({
      ...prev,
      [projId]: ((prev[projId] || 0) + 1) % totalSlides
    }));
  };

  const handlePrevSlide = (projId, totalSlides) => {
    setSlideIndices(prev => ({
      ...prev,
      [projId]: ((prev[projId] || 0) - 1 + totalSlides) % totalSlides
    }));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="glow-spot glow-blue proj-glow-1"></div>
      <div className="glow-spot glow-purple proj-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">Case Studies</p>
          <h2 className="section-title gradient-text-silver">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsList.map((project) => {
            const currentSlideIdx = slideIndices[project.id] || 0;
            const slide = project.slides[currentSlideIdx];

            return (
              <div key={project.id} className="project-case-study glass-panel hud-corners">
                {/* Visual Showcase Side (Interactive Slides Carousel) */}
                <div className="project-showcase">
                  <div className="carousel-view-screen">
                    <div className="carousel-slide-content">
                      <div className="mock-window-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="window-title-tab">{slide.title}</span>
                      </div>
                      <div className="mock-window-body">
                        <div className="mock-visual-grid">
                          <Activity size={32} className="mock-visual-icon" />
                          <h4 className="mock-visual-title">{slide.title}</h4>
                          <p className="mock-visual-desc">{slide.desc}</p>
                          <div className="mock-data-waves">
                            <span className="wave bar-1"></span>
                            <span className="wave bar-2"></span>
                            <span className="wave bar-3"></span>
                            <span className="wave bar-4"></span>
                            <span className="wave bar-5"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="carousel-controls">
                    <button 
                      className="carousel-btn prev"
                      onClick={() => handlePrevSlide(project.id, project.slides.length)}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <div className="carousel-dots">
                      {project.slides.map((_, dotIdx) => (
                        <span 
                          key={dotIdx} 
                          className={`carousel-dot ${dotIdx === currentSlideIdx ? 'active' : ''}`}
                          onClick={() => setSlideIndices(prev => ({ ...prev, [project.id]: dotIdx }))}
                        ></span>
                      ))}
                    </div>
                    <button 
                      className="carousel-btn next"
                      onClick={() => handleNextSlide(project.id, project.slides.length)}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* System Architecture Diagram */}
                  <div className="architecture-panel">
                    <span className="arch-label">System Pipelines & Architecture</span>
                    <div className="arch-container">
                      {project.archDiagram}
                    </div>
                  </div>
                </div>

                {/* Structured Text Metadata Side */}
                <div className="project-details">
                  <div className="project-details-header">
                    <span className="project-badge">
                      <Sparkles size={10} className="badge-spark" />
                      <span>Production Case Study</span>
                    </span>
                    <span className="project-sub">{project.subtitle}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <div className="case-content">
                    {/* Problem */}
                    <div className="case-item">
                      <div className="case-item-title">
                        <AlertCircle size={14} className="case-icon error" />
                        <span>Problem</span>
                      </div>
                      <p className="case-item-text">{project.problem}</p>
                    </div>

                    {/* Approach */}
                    <div className="case-item">
                      <div className="case-item-title">
                        <Cpu size={14} className="case-icon tech" />
                        <span>Approach</span>
                      </div>
                      <p className="case-item-text">{project.approach}</p>
                    </div>

                    {/* Impact */}
                    <div className="case-item">
                      <div className="case-item-title">
                        <ShieldCheck size={14} className="case-icon success" />
                        <span>Impact</span>
                      </div>
                      <p className="case-item-text">{project.impact}</p>
                    </div>

                    {/* Metrics Focus */}
                    <div className="case-metrics-card">
                      <div className="metrics-lbl">Performance Benchmark</div>
                      <div className="metrics-val">{project.metric}</div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="project-tech-badges">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.liveLink || project.gitLink) && (
                    <div className={`project-actions ${(!project.liveLink || !project.gitLink) ? 'single-action' : ''}`}>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary project-btn"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      {project.gitLink && (
                        <a
                          href={project.gitLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary project-btn-sec"
                        >
                          <GithubIcon size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
