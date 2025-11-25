import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items?: string[]; // ← now optional
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  children?: ReactNode; // ← allow JSX children usage
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "left",
  speed = 20,
  className = "",
  children,
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {items && items.length > 0 ? (
          // 🔹 OLD BEHAVIOUR: text-based marquee using items[]
          [...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-4xl md:text-6xl font-oswald font-bold text-transparent text-stroke uppercase tracking-widest hover:text-black transition-colors duration-500">
                {item}
              </span>
              <div className="w-3 h-3 bg-black rounded-full opacity-20" />
            </div>
          ))
        ) : (
          // 🔹 NEW BEHAVIOUR: support JSX children (what Home.tsx uses)
          <>
            <div className="flex items-center gap-16">
              {children}
            </div>
            <div className="flex items-center gap-16">
              {children}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Marquee;
