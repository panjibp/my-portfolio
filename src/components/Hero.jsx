import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Centered Hero Content */}
        <div className="hero-centered-content">
          {/* Main Headline */}
          <h1 className="hero-title">
            Hi! <br></br>I am Panji, a <span className="gradient-text">Software Engineer</span>
          </h1>

          {/* Short Bio */}
          {/*<p className="hero-description">
            {portfolioData.personal.bio}
          </p>*/}

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#experience" className="btn btn-secondary">
              <span>Explore Work</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Stats Counter Bar */}
        <div className="stats-bar-wrapper">
          <div className="stats-grid">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-item">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
