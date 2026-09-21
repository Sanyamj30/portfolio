import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const certificationsList = [
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google Cloud',
      id: 'GC-GENAI-8392',
      date: 'May 2024',
      badgeColor: '#00f2fe',
      logo: (
        <svg viewBox="0 0 24 24" className="cert-svg-badge" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" stroke="#00f2fe" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#9d4edd" />
          <path d="M2 12h20" stroke="#00f2fe" />
        </svg>
      ),
      credentialUrl: 'https://www.skills.google/public_profiles/d002fd29-a0f9-4b6e-a74b-1c0671af7b32/badges/13644168'
    },
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI',
      id: '7Q1CHKPO9RTU',
      date: 'Dec 2025',
      badgeColor: '#9d4edd',
      logo: (
        <svg viewBox="0 0 24 24" className="cert-svg-badge" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#00f2fe" />
          <polyline points="2 17 12 22 22 17" stroke="#9d4edd" />
          <polyline points="2 12 12 17 22 12" stroke="#00f2fe" />
        </svg>
      ),
      credentialUrl: '/AI%20FOR%20EVERYONE.pdf' // Points to the PDF file in your public directory
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="glow-spot glow-blue cert-glow-1"></div>
      <div className="glow-spot glow-purple cert-glow-2"></div>

      <div className="container">
        <div className="section-title-container">
          <p className="section-subtitle">Verified Skills</p>
          <h2 className="section-title gradient-text-silver">Licenses & Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="cert-card glass-panel hud-corners">
              {/* Virtual Certificate Preview Stamp Header */}
              <div className="cert-preview-frame">
                <div className="cert-stamp-holder">
                  {cert.logo}
                  <div className="stamp-glow" style={{ backgroundColor: cert.badgeColor }}></div>
                </div>
                <div className="cert-badge-ribbon">
                  <Award size={16} className="ribbon-icon" />
                  <span>Verified Credential</span>
                </div>
              </div>

              <div className="cert-info">
                <span className="cert-issuer">{cert.issuer}</span>
                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-meta-row">
                  <div className="cert-meta-item">
                    <Calendar size={12} className="cert-meta-icon" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <div className="cert-meta-item">
                    <ShieldCheck size={12} className="cert-meta-icon" />
                    <span>ID: {cert.id}</span>
                  </div>
                </div>

                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-verify-link btn-secondary"
                >
                  Verify Authenticity <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
