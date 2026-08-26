import React, { useState } from 'react';
import {
  Code,
  FileCode,
  Palette,
  Layers,
  Zap,
  Gauge,
  Server,
  Cpu,
  Terminal,
  Database,
  Radio,
  Network,
  Box,
  Cloud,
  GitBranch,
  Settings,
  Activity,
  Bot,
  GitCommit,
  Workflow
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(portfolioData.skillCategories[0].id);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={18} />;
      case 'FileCode': return <FileCode size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Gauge': return <Gauge size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Radio': return <Radio size={18} />;
      case 'Network': return <Network size={18} />;
      case 'Box': return <Box size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'Settings': return <Settings size={18} />;
      case 'Activity': return <Activity size={18} />;
      case 'Bot': return <Bot size={18} />;
      case 'GitCommit': return <GitCommit size={18} />;
      case 'Workflow': return <Workflow size={18} />;
      default: return <Code size={18} />;
    }
  };

  const currentCategory = portfolioData.skillCategories.find(
    (cat) => cat.id === activeTab
  );

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Technical Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the modern technologies, languages, and frameworks I leverage to engineer robust digital systems.
          </p>
        </div>

        {/* Skill Category Tabs */}
        <div className="skills-tabs">
          {portfolioData.skillCategories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab-btn ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {currentCategory?.skills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-header">
                <div className="skill-name-wrap">
                  <span className="skill-icon">{getSkillIcon(skill.icon)}</span>
                  <span>{skill.name}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
