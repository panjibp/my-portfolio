import React, { useEffect, useRef } from 'react';

export default function BackgroundEffect({ themeMode = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 160
    };

    // Offscreen canvas for the static grid
    const gridCanvas = document.createElement('canvas');
    const gridCtx = gridCanvas.getContext('2d');

    const drawGridToOffscreen = () => {
      gridCanvas.width = width;
      gridCanvas.height = height;
      const gridSize = 60;
      gridCtx.lineWidth = 1;
      gridCtx.strokeStyle = isLight
        ? 'rgba(0, 0, 0, 0.035)'
        : 'rgba(255, 255, 255, 0.015)';

      gridCtx.clearRect(0, 0, width, height);
      gridCtx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        gridCtx.moveTo(x, 0);
        gridCtx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        gridCtx.moveTo(0, y);
        gridCtx.lineTo(width, y);
      }
      gridCtx.stroke();
    };

    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      // On mobile, scrolling often changes innerHeight slightly (address bar hides/shows).
      // We only resize if width changed (orientation change) or height changed significantly (> 100px).
      if (newWidth === prevWidth && Math.abs(newHeight - prevHeight) < 100) {
        return;
      }
      
      prevWidth = newWidth;
      prevHeight = newHeight;
      
      width = canvas.width = newWidth;
      height = canvas.height = newHeight;
      drawGridToOffscreen();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle Setup (Optimized for lower-end devices while keeping the visual feature intact)
    const particleCount = Math.min(Math.floor(width / 36), 35);
    const particles = [];

    const isLight = themeMode === 'light';
    const colors = isLight
      ? { main: '2, 132, 199', alt: '37, 99, 235' }
      : { main: '0, 242, 254', alt: '79, 172, 254' };

    drawGridToOffscreen();

    // Pre-render a base glowing particle to an offscreen canvas
    const particleCanvas = document.createElement('canvas');
    const pCtx = particleCanvas.getContext('2d');
    const pSize = 24; // Ensure enough padding for shadow (max radius ~2.4 + blur 8)
    const pCenter = pSize / 2;
    particleCanvas.width = pSize;
    particleCanvas.height = pSize;
    
    pCtx.beginPath();
    pCtx.arc(pCenter, pCenter, 2, 0, Math.PI * 2); // Base radius of 2
    pCtx.fillStyle = `rgba(${colors.main}, 1)`;
    pCtx.shadowBlur = isLight ? 4 : 8;
    pCtx.shadowColor = `rgba(${colors.main}, ${isLight ? 0.3 : 0.5})`;
    pCtx.fill();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.45 + 0.15
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Cyber ambient radial glow following cursor
      // Fill only a bounded area instead of the entire screen to reduce GPU fill rate
      const glowRadius = 400;
      const radialGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        glowRadius
      );
      radialGradient.addColorStop(
        0,
        isLight ? `rgba(${colors.main}, 0.045)` : `rgba(${colors.main}, 0.07)`
      );
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(mouse.x - glowRadius, mouse.y - glowRadius, glowRadius * 2, glowRadius * 2);

      // Draw static grid from offscreen canvas
      ctx.drawImage(gridCanvas, 0, 0);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Particle rendering using pre-rendered offscreen canvas (highly optimized)
        const scale = p.radius / 2;
        const drawSize = pSize * scale;
        ctx.globalAlpha = p.alpha;
        ctx.drawImage(
          particleCanvas,
          p.x - drawSize / 2,
          p.y - drawSize / 2,
          drawSize,
          drawSize
        );
        ctx.globalAlpha = 1.0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 12100) { // 110 * 110
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${colors.main}, ${
              (isLight ? 0.12 : 0.15) * (1 - dist / 110)
            })`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdistSq = mdx * mdx + mdy * mdy;
        const mRadiusSq = mouse.radius * mouse.radius;
        
        if (mdistSq < mRadiusSq) {
          const mdist = Math.sqrt(mdistSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${colors.alt}, ${
            (isLight ? 0.2 : 0.25) * (1 - mdist / mouse.radius)
          })`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
