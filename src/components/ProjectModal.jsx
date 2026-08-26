import React from 'react';
import { X, ExternalLink, Sparkles, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span className="project-badge featured">{project.badge}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {project.category}
            </span>
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
        </div>

        {/* Highlight Metric Pill */}
        <div className="project-metrics" style={{ marginBottom: '24px' }}>
          {project.metrics}
        </div>

        {/* Detailed Overview */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--accent-primary)" />
            <span>Architecture & Impact</span>
          </h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.detailedOverview}
          </p>
        </div>

        {/* Core Tech Stack */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="var(--accent-primary)" />
            <span>Technologies Leveraged</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={16} />
            <span>Launch Live Demo</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <GithubIcon size={16} />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </div>
  );
}
