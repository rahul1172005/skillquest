import React from "react";
import { motion } from "framer-motion";

const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 0L1540 0"
          stroke="url(#grad1)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <path
          d="M-100 900L1540 900"
          stroke="url(#grad1)"
          strokeWidth="1"
        />
        
        {/* Diagonal Beams */}
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${-200 + i * 200} -100 L${200 + i * 200} 1000`}
            stroke="url(#grad2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.5, 0],
              pathOffset: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

         {/* Cross Beams */}
         {[...Array(8)].map((_, i) => (
          <motion.path
            key={`cross-${i}`}
            d={`M${1600 - i * 200} -100 L${1200 - i * 200} 1000`}
            stroke="url(#grad2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.3, 0],
              pathOffset: [0, 1, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse delay-1000" />
    </div>
  );
};

export default BackgroundBeams;
