import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block origin-bottom"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: delay + index * 0.03,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          whileHover={{ 
            scale: 1.2, 
            color: '#888',
            transition: { duration: 0.2 } 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default InteractiveText;
