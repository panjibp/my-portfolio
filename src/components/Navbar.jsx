import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ themeMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let isTicking = false;
    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
          const scrollPosition = window.scrollY + 200;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection((prev) => prev !== section ? section : prev);
                break;
              }
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    /*{ name: 'Projects', href: '#projects' },*/
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-fixed ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Status */}
        <a href="#hero" className="navbar-brand">
          <span className="brand-tagline">
            <span className="pulse-dot" />
            {portfolioData.personal.status}
          </span>
        </a>

        {/* Right Group: Navigation Links & Theme Toggle */}
        <div className="nav-right-group">
          {/* Navigation Links */}
          <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            {/* Mobile Close Button (Inside Sidebar) */}
            <button
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Light/Dark Mode Switcher */}
          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme Mode"
            >
              {themeMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
