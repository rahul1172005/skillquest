import React, { useEffect, useRef } from 'react';

const CyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const gridSize = 40;
    
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = '#050505'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1;

      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      // Draw Grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Subtle White grid lines
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'; 
          ctx.strokeRect(x, y, gridSize, gridSize);

          // Random active cells (Monochrome Pulse)
          const noise = Math.sin(i * 0.1 + time) * Math.cos(j * 0.1 + time);
          if (noise > 0.85) {
            ctx.fillStyle = `rgba(255, 255, 255, ${noise * 0.3})`; // White glow
            ctx.fillRect(x, y, gridSize, gridSize);
          }
        }
      }

      time += 0.015;
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

export default CyberGrid;
