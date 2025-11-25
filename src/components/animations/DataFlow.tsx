import React, { useEffect, useRef } from 'react';

const DataFlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    interface Particle {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;
      width: number;
    }

    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        length: 10 + Math.random() * 40,
        opacity: Math.random() * 0.3,
        width: Math.random() > 0.9 ? 2 : 1
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
        
        // Monochrome Gradient
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(1, `rgba(255,255,255,${p.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.width;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.stroke();

        p.y += p.speed;

        if (p.y > canvas.height) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default DataFlow;
