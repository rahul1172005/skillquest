import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BlobCursorProps {
  zIndex?: number;
}

const BlobCursor: React.FC<BlobCursorProps> = ({ zIndex = 9999 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      gsap.to(follower, { scale: 1.5, opacity: 0.2, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex }}
      />
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-gray-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{ zIndex: zIndex - 1 }}
      />
    </>
  );
};

export default BlobCursor;
