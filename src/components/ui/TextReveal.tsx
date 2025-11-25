import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block relative">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: "0%" } : {}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.02,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
