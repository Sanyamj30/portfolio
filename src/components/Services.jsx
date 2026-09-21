import React from 'react';
import { Layout, Code2, Brain, Cpu, Server, BarChart3, TrendingUp, HelpCircle } from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      title: 'Full Stack Engineering',
      description: 'Building scalable web applications using React, Node.js, Express, MongoDB, REST APIs, authentication systems, and payment integrations.',
      icon: <Layout size={22} />
    },
    {
      title: 'AI Agent Development',
      description: 'Creating intelligent AI agents, chatbots, RAG systems, LLM-powered applications, and workflow automation solutions.',
      icon: <Brain size={22} />
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Designing predictive models, classification systems, data analysis pipelines, and real-world ML applications.',
      icon: <Cpu size={22} />
    },
    {
      title: 'Analytics & Business Intelligence',
      description: 'Building Google Analytics dashboards, KPI monitoring systems, user behavior analysis, and data visualization platforms.',
      icon: <BarChart3 size={22} />
    },
    {
      title: 'API & Backend Architecture',
      description: 'Developing secure APIs, database architectures, authentication systems, and cloud-ready backend infrastructures.',
      icon: <Server size={22} />
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="glow-spot glow-blue serv-glow-1"></div>
      <div className="glow-spot glow-purple serv-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title gradient-text-silver">Professional Services</h2>
        </div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card glass-panel hud-corners">
              <div className="service-card-top-header">
                <div className="service-icon-box">{service.icon}</div>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
