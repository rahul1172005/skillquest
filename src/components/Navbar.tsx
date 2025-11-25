import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './ui/Magnetic';
import TooltipCard from './ui/TooltipCard';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'WORK', path: '/portfolio', tooltip: 'View Projects' },
    { name: 'SERVICES', path: '/services', tooltip: 'What We Do' },
    { name: 'ABOUT', path: '/about', tooltip: 'Our Story' },
    { name: 'CONTACT', path: '/contact', tooltip: 'Get in Touch' },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          isScrolled ? 'glass-panel py-4' : 'bg-transparent py-8'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Magnetic>
            <TooltipCard content="Home">
              <NavLink to="/" className="flex items-center gap-3 group z-50 relative">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold font-oswald text-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                  SQ
                </div>
                <span className={`text-xl font-bold tracking-widest font-oswald mix-blend-difference ${isMenuOpen ? 'text-white' : 'text-white'}`}>
                  SKILLQUEST
                </span>
              </NavLink>
            </TooltipCard>
          </Magnetic>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 text-xs font-medium tracking-[0.2em] text-gray-400">
            {navLinks.map((item) => (
              <Magnetic key={item.name}>
                <TooltipCard content={item.tooltip}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `relative group overflow-hidden block hover:text-white transition-colors duration-300 ${isActive ? 'text-white' : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-500 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      </>
                    )}
                  </NavLink>
                </TooltipCard>
              </Magnetic>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white mix-blend-difference"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center text-white md:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <NavLink 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `text-6xl font-oswald font-bold tracking-widest text-transparent text-stroke hover:text-white transition-all duration-500 block ${isActive ? 'text-white text-stroke-cyan' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
