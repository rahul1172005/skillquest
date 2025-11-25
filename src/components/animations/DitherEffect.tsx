import React, { useEffect, useRef, useState } from 'react';

interface DitherEffectProps {
  src: string;
  className?: string;
  alt?: string;
}

const DitherEffect: React.FC<DitherEffectProps> = ({ src, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    let animationFrameId: number;

    const render = () => {
      if (!container || !canvas || !ctx) return;
      
      // Ensure integer dimensions
      const width = Math.floor(container.clientWidth);
      const height = Math.floor(container.clientHeight);
      
      // FIX: Prevent IndexSizeError if container has no size yet (width/height is 0)
      if (width <= 0 || height <= 0) return;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Draw image scaled to cover (object-fit: cover)
      const scale = Math.max(width / img.width, height / img.height);
      const x = (width / 2) - (img.width / 2) * scale;
      const y = (height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      try {
        // Get pixel data
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Bayer Matrix 4x4 (Ordered Dithering)
        const bayer = [
          [0, 8, 2, 10],
          [12, 4, 14, 6],
          [3, 11, 1, 9],
          [15, 7, 13, 5]
        ];

        // Process pixels
        for (let py = 0; py < height; py++) {
          for (let px = 0; px < width; px++) {
            const i = (py * width + px) * 4;
            
            // Convert to grayscale
            const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            
            // Map threshold (0-255) based on Bayer matrix (0-15)
            const threshold = (bayer[py % 4][px % 4] / 16) * 255;
            
            // Apply threshold
            const value = gray > threshold ? 255 : 0;

            data[i] = value;     // R
            data[i + 1] = value; // G
            data[i + 2] = value; // B
            // Alpha remains unchanged (usually 255)
          }
        }

        ctx.putImageData(imageData, 0, 0);
      } catch (error) {
        // Silently fail if context is invalidated or size mismatch occurs during resize
        console.warn("Dither render skipped:", error);
      }
    };

    img.onload = () => {
      setIsLoaded(true);
      // Use requestAnimationFrame to ensure layout is computed
      animationFrameId = requestAnimationFrame(render);
      window.addEventListener('resize', render);
    };

    return () => {
      window.removeEventListener('resize', render);
      cancelAnimationFrame(animationFrameId);
    };
  }, [src]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-[#111] ${className}`}>
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default DitherEffect;
