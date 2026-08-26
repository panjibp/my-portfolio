import React, { useState } from 'react';
import { Mail, MapPin, Clock, Copy, Check, Send, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);


    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#10b981', '#ff007f']
      });

      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CONTACT</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Let's Build Something Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need consulting, or want to discuss web systems? Transmit a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Contact Info Card */}
          <div className="glass-card contact-info-card">
            <div className="contact-info-header">
              <h3>Let's Connect</h3>
              <p>You can start a direct communication with me through email.</p>
            </div>

            <div className="contact-details-list">
              {/* Email Item */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Direct Email</div>
                  <div className="contact-detail-val">{portfolioData.personal.email}</div>
                </div>
              </div>

              {/* Location Item */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Base Location</div>
                  <div className="contact-detail-val">{portfolioData.personal.location}</div>
                </div>
              </div>

              {/* Status Item */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Availability & Response</div>
                  <div className="contact-detail-val">Office Hours</div>
                </div>
              </div>
            </div>

            {/* Copy Email CTA Button */}
            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {copied ? (
                <>
                  <Check size={16} color="#10b981" />
                  <span style={{ color: '#10b981' }}>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Direct Email Address</span>
                </>
              )}
            </button>

            {/* Social Channels */}
            {/*
            <div>
              <div className="contact-detail-label" style={{ marginBottom: '12px' }}>
                Encrypted Social Links
              </div>
              <div className="social-links-grid">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={portfolioData.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  title="X (Twitter) Profile"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={20} />
                </a>
                <a
                  href={portfolioData.personal.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  title="Discord Community"
                  aria-label="Discord"
                >
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            */}
          </div>

          {/* Right: Interactive Message Form */}
          {/*
          <div className="glass-card contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="sender-name">
                  Full Name / Organization
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="form-input"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="sender-email">
                  Email Address
                </label>
                <input
                  id="sender-email"
                  type="email"
                  required
                  placeholder="e.g. alex@enterprise.com"
                  className="form-input"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="msg-subject">
                  Subject / Topic
                </label>
                <input
                  id="msg-subject"
                  type="text"
                  placeholder="e.g. High-Scale Web Architecture Consultation"
                  className="form-input"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="msg-content">
                  Transmission Message
                </label>
                <textarea
                  id="msg-content"
                  required
                  placeholder="Describe project requirements, timeline, or inquiries..."
                  className="form-textarea"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                {isSubmitting ? (
                  <span>Encrypting & Dispatching...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="toast-message">
                  <Sparkles size={18} />
                  <span>Message transmitted successfully! I will respond promptly.</span>
                </div>
              )}
            </form>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
