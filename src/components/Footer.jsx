import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let isTicking = false;
    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          setShowTopBtn(window.scrollY > 250);

          const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
          setAtBottom(isBottom);

          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/*
        <div className="footer-content">
            < div >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Terminal size={18} color="var(--accent-primary)" />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                {portfolioData.personal.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              High-Performance Engineering & Digital Architecture
            </p>
          </div>
        </div>
        */}

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
        </div>
      </div>

      {/* Sticky Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showTopBtn ? 'visible' : ''} ${atBottom ? 'at-bottom' : ''}`}
        aria-label="Back to Top"
      >
        <span>Back to Top</span>
        <ArrowUp size={16} />
      </button>
    </footer >
  );
}
