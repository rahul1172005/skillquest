import React, { useEffect, useRef } from 'react';

const LaserFlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let h = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    const resize = () => {
      w = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      h = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', resize);

    class Laser {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 2; // Slower, smoother
        this.vy = (Math.random() - 0.5) * 2;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Draw laser trail
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 20, this.y - this.vy * 20);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    const lasers = Array.from({ length: 50 }, () => new Laser());

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Trails
      ctx.fillRect(0, 0, w, h);

      lasers.forEach(laser => {
        laser.update();
        laser.draw();
      });

      // Draw connecting lines
      lasers.forEach((l1, i) => {
        lasers.slice(i + 1).forEach(l2 => {
          const dx = l1.x - l2.x;
          const dy = l1.y - l2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(l1.x, l1.y);
            ctx.lineTo(l2.x, l2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />;
};

export default LaserFlow;
