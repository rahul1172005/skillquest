import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import BlobCursor from './BlobCursor';
import LiveBackground from './animations/LiveBackground';
import Preloader from './ui/Preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Optimized Lenis settings for "Snappier" feel
    const lenis = new Lenis({
      duration: 1.0, // Slightly faster duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Faster scroll speed
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black overflow-hidden flex flex-col">
      <Preloader />
      
      {/* Live Background System */}
      <div className="fixed inset-0 z-0">
        <LiveBackground />
        {/* Noise Overlay - Adjusted opacity in CSS */}
        <div className="absolute inset-0 bg-noise"></div>
        {/* Vignette - Subtler */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)] opacity-60"></div>
      </div>
      
      <BlobCursor />
      <Navbar />
      <main className="relative z-10 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
