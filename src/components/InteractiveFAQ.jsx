import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import './InteractiveFAQ.css';

export default function InteractiveFAQ({ persona }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const recruiterFaq = [
    {
      q: "Are you open to relocation or remote work?",
      a: "Yes! I am open to both remote roles and relocation. I am highly comfortable working asynchronously across time zones and coordinating via Slack, GitHub, and Zoom."
    },
    {
      q: "What is your graduation timeline and availability?",
      a: "I am part of the graduating class of 2027 (B.Tech in Computer Science). I am actively seeking software engineering internships, co-ops, and student program opportunities."
    },
    {
      q: "What are your primary technical specialties?",
      a: "My expertise is split between Full-Stack Web Development (React, Node.js, Express, MongoDB/SQL) and AI Engineering (Python, YOLOv8, OpenCV, scikit-learn, and LLM process orchestration)."
    },
    {
      q: "How do you handle team collaboration and tight deadlines?",
      a: "Through disciplined execution and ownership. Leading logistics for TEDxBMU and outreach for E-Cell IIT Bombay taught me how to manage schedules, coordinate dependencies, and deliver under pressure."
    }
  ];

  const clientFaq = [
    {
      q: "How do you estimate project pricing and timelines?",
      a: "I work on a milestone-based fixed-price structure. After we define your requirements, I provide a detailed scope document and timeline. Use the interactive calculator below to get a quick estimate!"
    },
    {
      q: "Can we sign a Non-Disclosure Agreement (NDA) first?",
      a: "Absolutely. I respect client confidentiality. We can sign a mutual NDA before you share any proprietary designs, concepts, or business logic details."
    },
    {
      q: "Will I own the source code and assets when done?",
      a: "Yes, 100%. Once final milestones are completed, full ownership, copyright, and source code access are officially transferred to you."
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Every project includes 30 days of complimentary support to fix bugs and monitor performance. I also offer monthly support retainers for ongoing feature additions."
    }
  ];

  const faqList = persona === 'client' ? clientFaq : recruiterFaq;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="glow-spot glow-blue faq-glow-1"></div>
      <div className="glow-spot glow-purple faq-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">FAQ</p>
          <h2 className="section-title gradient-text-silver">
            {persona === 'client' ? 'Client Cheat Sheet' : 'Recruiter Quick Answers'}
          </h2>
        </div>

        <div className="faq-wrapper">
          <div className="faq-prompt glass-panel">
            <div className="faq-prompt-icon">
              <Sparkles size={20} className="sparkle-active" />
            </div>
            <h3 className="faq-prompt-title">
              {persona === 'client' ? 'Looking to start a project?' : 'Evaluating for a role?'}
            </h3>
            <p className="faq-prompt-text">
              {persona === 'client' 
                ? 'Here are answers to common questions about workflows, NDAs, ownership, and timelines. Toggle the switcher in the navigation bar if you are a recruiter!'
                : 'Here are quick answers about graduation timelines, work authorization, technical stacks, and relocation. Switch to client mode to view contract details!'}
            </p>
            <div className="faq-prompt-footer">
              <MessageSquare size={14} />
              <span>Have a different question? Ask in the contact section below!</span>
            </div>
          </div>

          <div className="faq-list">
            {faqList.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">
                      <HelpCircle size={16} className="faq-q-icon" />
                      {item.q}
                    </span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer-content">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
