import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'AI & Cloud', 'Web Apps'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>FEATURED ARTIFACTS</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of mission-critical web applications, distributed platforms, and high-performance microservices.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div>
                {/* Top Bar: Badge & Links */}
                <div className="project-top">
                  <span className={`project-badge ${project.featured ? 'featured' : ''}`}>
                    {project.badge}
                  </span>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="View Source Code"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Launch Live Preview"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="project-title">{project.title}</h3>

                {/* Description */}
                <p className="project-desc">{project.description}</p>
              </div>

              <div>
                {/* Metrics Highlight */}
                <div className="project-metrics">{project.metrics}</div>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer: Detail Inspector */}
                <div className="project-footer">
                  <button
                    className="details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect System</span>
                    <ArrowRight size={15} />
                  </button>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    v2.4.0
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Inspector Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
