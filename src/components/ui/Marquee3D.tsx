import React from 'react';
import { motion } from 'framer-motion';

interface Marquee3DProps {
  items: string[];
  className?: string;
}

const Marquee3D: React.FC<Marquee3DProps> = ({ items, className = "" }) => {
  return (
    <div className={`relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-transparent ${className}`}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 perspective-500 transform-style-3d">
        
        {/* Row 1 - Left */}
        <div className="flex w-full flex-row items-center justify-center gap-4" style={{ transform: "rotateX(20deg) rotateZ(-5deg) skewX(10deg)" }}>
           <MarqueeRow items={items} direction="left" speed={40} />
        </div>

        {/* Row 2 - Right */}
        <div className="flex w-full flex-row items-center justify-center gap-4" style={{ transform: "rotateX(20deg) rotateZ(-5deg) skewX(10deg)" }}>
           <MarqueeRow items={items} direction="right" speed={30} />
        </div>

        {/* Row 3 - Left */}
        <div className="flex w-full flex-row items-center justify-center gap-4" style={{ transform: "rotateX(20deg) rotateZ(-5deg) skewX(10deg)" }}>
           <MarqueeRow items={items} direction="left" speed={50} />
        </div>

      </div>
      
      {/* Vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
    </div>
  );
};

const MarqueeRow = ({ items, direction, speed }: { items: string[], direction: 'left' | 'right', speed: number }) => {
  return (
    <motion.div
      className="flex flex-row gap-6"
      initial={{ x: direction === 'left' ? "0%" : "-50%" }}
      animate={{ x: direction === 'left' ? "-50%" : "0%" }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
    >
      {[...items, ...items, ...items, ...items].map((item, idx) => (
        <div
          key={idx}
          className="flex h-24 w-64 shrink-0 items-center justify-center rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          <span className="text-xl font-oswald font-bold tracking-widest text-gray-300 uppercase">
            {item}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default Marquee3D;
