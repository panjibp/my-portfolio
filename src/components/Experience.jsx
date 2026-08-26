import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CAREER</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of roles, engineering initiatives, and high-impact digital deployments.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Glowing Timeline Node */}
              <div className="timeline-node" />

              {/* Timeline Card */}
              <div className="glass-card timeline-card">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  <span>{exp.company}</span> · <span>{exp.location}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>

                {/* Key Achievements */}
                <div className="timeline-achievements">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="timeline-achievement-item">
                      <CheckCircle2 size={15} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="timeline-tech-wrap">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
