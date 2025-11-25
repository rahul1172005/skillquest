import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TooltipCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const TooltipCard: React.FC<TooltipCardProps> = ({ children, content, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  
  // Rotate the tooltip based on mouse position relative to the center
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  
  // Translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
      }}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 border border-white/10"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px " />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px " />
            <div className="font-bold text-white relative z-30 text-base">
              {content}
            </div>
            {/* Glow effect */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-2 bg-white/20 blur-md" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default TooltipCard;
