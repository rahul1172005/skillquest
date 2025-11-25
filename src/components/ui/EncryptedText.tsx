import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface EncryptedTextProps {
  text: string;
  interval?: number;
  className?: string;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const EncryptedText: React.FC<EncryptedTextProps> = ({ 
  text, 
  interval = 50,
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isHovered) {
      let iteration = 0;
      
      timer = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(timer);
        }

        iteration += 1 / 3;
      }, interval);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(timer);
  }, [isHovered, text, interval]);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block font-mono cursor-default ${className}`}
    >
      {displayText}
    </motion.span>
  );
};

export default EncryptedText;
