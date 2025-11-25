import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
}

const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<"TOP" | "LEFT" | "BOTTOM" | "RIGHT">("TOP");

  const rotateDirection = (currentDirection: "TOP" | "LEFT" | "BOTTOM" | "RIGHT"): "TOP" | "LEFT" | "BOTTOM" | "RIGHT" => {
    const directions: ("TOP" | "LEFT" | "BOTTOM" | "RIGHT")[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<"TOP" | "LEFT" | "BOTTOM" | "RIGHT", string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight = "radial-gradient(75% 181.15942028985528% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex rounded-full content-center bg-black/20 hover:bg-black/10 transition-all duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit ${containerClassName}`}
      {...props}
    >
      <div className={`w-full text-white z-10 bg-black px-4 py-2 rounded-[inherit] ${className}`}>
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </Tag>
  );
};

export default HoverBorderGradient;
