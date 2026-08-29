import React, { useState, useEffect } from 'react';
import './index.css';
import './styles/components.css';

import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  // Toggle between dark and light modes
  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme attribute and persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('portfolio_theme', themeMode);
  }, [themeMode]);

  // Initialize Lenis for Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Decreased from 1.2 for faster response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true, // Enable smooth scrolling for touch devices (mobile view)
      wheelMultiplier: 1.2, // Increased from 1.0 for lighter scrolling effort
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-root">
      {/* High-tech scanline texture */}
      <div className="scanline" style={{ transform: 'translateZ(0)' }} />

      {/* Interactive Cyber Background Grid & Particles */}
      <BackgroundEffect themeMode={themeMode} />

      {/* Main Glassmorphic Navigation with Light/Dark Mode Toggle */}
      <Navbar themeMode={themeMode} onToggleTheme={handleToggleTheme} />

      {/* Page Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        {/*<Projects />*/}
        <Experience />
        <Contact />
      </main>

      {/* Futuristic Telemetry Footer */}
      <Footer />
    </div>
  );
}
