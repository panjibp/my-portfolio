import React from 'react';
import { Cpu, ShieldCheck, Sparkles, Network, Terminal, CheckCircle, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Network': return <Network size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>BACKGROUND</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">A Brief Look at Me</span>
          </h2>
        </div>

        {/* Profile Grid */}
        <div className="about-grid">
          {/* Left: Hologram Profile Card */}
          <div className="glass-card about-card-profile">
            <div className="hologram-avatar-wrapper">
              <div className="hologram-ring" />
              <div className="hologram-avatar">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQH3Q3EG81cPRA/profile-displayphoto-scale_200_200/B56Z7ovLaXIQAc-/0/1782021145257?e=2147483647&v=beta&t=pO2eomcZCotkfPJWaloHFBzMdHa23qg-a1ZhrLs9-IA"
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>
                {portfolioData.personal.name}
              </h3>
              <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                {portfolioData.personal.title}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '6px' }}>
                <MapPin size={13} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Years of experience in modern HRIS Web App.</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Maintain, customize, and develop application with high reliability.</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: 700 }}>
              Bridging the gap between <span className="gradient-text">speed, scale, and elegance</span>.
            </h3>
            <p className="about-bio-text">
              With over half a decade in modern software engineering, I specialize in building mission-critical web platforms that do not compromise on speed, security, or design fidelity. Every system is conceived from first principles—engineered for seamless horizontal scaling and effortless maintenance.
            </p>
            <p className="about-bio-text">
              Whether architecting real-time distributed telemetry streams, integrating intelligent generative AI agents, or polishing frame-perfect web micro-interactions, I treat code as a high-precision craft.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Engineering */}
        <div className="pillars-grid">
          {portfolioData.pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card pillar-card">
              <div className="pillar-icon-box">
                {getPillarIcon(pillar.icon)}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
