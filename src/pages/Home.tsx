import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Shield, Code } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import InteractiveText from "../components/InteractiveText";
import Magnetic from "../components/ui/Magnetic";
import Marquee from "../components/ui/Marquee";
import CyberGrid from "../components/animations/CyberGrid";
import DataFlow from "../components/animations/DataFlow";
import TiltCard from "../components/ui/TiltCard";
import EncryptedText from "../components/ui/EncryptedText";
import ShinyText from "../components/ui/ShinyText";
import Marquee3D from "../components/ui/Marquee3D";
import BackgroundBeams from "../components/animations/BackgroundBeams";
import TooltipCard from "../components/ui/TooltipCard";
import { Link } from "react-router-dom";

/* ------- MOBILE DETECTOR (to kill parallax on small screens) ------- */
// keep your imports: React, useEffect, useState, etc.
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(max-width: 768px)");

    // set initial value
    setIsMobile(mq.matches);

    // listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};


const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  // Parallax & Scale Effects (desktop/tablet only)
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textX = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <motion.section
        style={
          isMobile
            ? undefined
            : {
                scale: heroScale,
                opacity: heroOpacity,
              }
        }
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20"
      >
        <BackgroundBeams className="z-0 opacity-40" />

        <div className="relative z-10 w-full max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="flex items-center gap-4 mb-6 md:mb-12"
          >
            <span className="h-[1px] w-12 bg-white" />
            <EncryptedText
              text="GLOBAL DIGITAL AGENCY"
              className="text-[10px] md:text-sm tracking-[0.4em] font-bold text-white uppercase"
            />
          </motion.div>

          <div className="flex flex-col relative mix-blend-difference">
            <h1 className="text-[13vw] sm:text-[11vw] leading-[0.9] font-bold tracking-tighter text-white uppercase font-oswald">
              <div className="overflow-hidden">
                <InteractiveText text="DIGITAL" delay={2.2} />
              </div>

              <div className="flex items-center gap-3 md:gap-8 overflow-hidden my-2">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 2.6, duration: 1.0 }}
                  className="hidden md:block h-[0.7em] aspect-[3/1] border border-white/20 rounded-[50px] overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/5" />
                  <CyberGrid />
                </motion.div>
                <InteractiveText text="REALITY" delay={2.3} />
              </div>

              <div className="overflow-hidden flex items-center gap-4">
                <ShinyText text="ARCHITECTS" className="text-stroke-white" />
              </div>
            </h1>
          </div>

          {/* Hero Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-20 gap-10 md:gap-12 border-t border-white/10 pt-10 md:pt-12">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-light">
                We engineer digital ecosystems that bridge the gap between
                human intuition and technical precision.
              </p>
              <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-widest">
                <TooltipCard content="Web Development">
                  <EncryptedText text="[ WEB ]" />
                </TooltipCard>
                <TooltipCard content="Cyber Security">
                  <EncryptedText text="[ SECURITY ]" />
                </TooltipCard>
                <TooltipCard content="Brand Identity">
                  <EncryptedText text="[ BRAND ]" />
                </TooltipCard>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <Magnetic>
                <TooltipCard content="Let's Build Together">
                  <Link
                    to="/contact"
                    className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-white text-black overflow-hidden rounded-[40px] inline-flex items-center gap-3 transition-all duration-500 hover:bg-gray-200 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest">
                      START PROJECT
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                </TooltipCard>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* MARQUEE */}
      <div className="py-16 md:py-24 relative z-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <Marquee3D
          items={[
            "Innovation",
            "Security",
            "Design",
            "Strategy",
            "Future",
            "Scale",
            "Performance",
            "Cloud",
          ]}
        />
      </div>

      {/* SERVICES */}
      <section className="py-24 md:py-48 px-6 md:px-12 relative z-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-20">
            <TiltCard className="p-8 md:p-12 border border-white/10 rounded-[32px] md:rounded-[40px] bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-500 group cursor-pointer min-h-[280px] md:min-h-[380px]">
              <Globe
                size={40}
                strokeWidth={1}
                className="mb-8 md:mb-12 group-hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-oswald uppercase mb-4 md:mb-6">
                  Global Reach
                </h3>
                <p className="text-gray-400 group-hover:text-gray-800 transition-colors text-sm md:text-lg leading-relaxed">
                  Connecting brands with audiences worldwide.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="p-8 md:p-12 border border-white/10 rounded-[32px] md:rounded-[40px] bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-500 group cursor-pointer min-h-[280px] md:min-h-[380px] md:mt-24">
              <Shield
                size={40}
                strokeWidth={1}
                className="mb-8 md:mb-12 group-hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-oswald uppercase mb-4 md:mb-6">
                  Secure Core
                </h3>
                <p className="text-gray-400 group-hover:text-gray-800 transition-colors text-sm md:text-lg leading-relaxed">
                  Security woven into every line of code.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="p-8 md:p-12 border border-white/10 rounded-[32px] md:rounded-[40px] bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-500 group cursor-pointer min-h-[280px] md:min-h-[380px] md:mt-48">
              <Code
                size={40}
                strokeWidth={1}
                className="mb-8 md:mb-12 group-hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-oswald uppercase mb-4 md:mb-6">
                  Clean Code
                </h3>
                <p className="text-gray-400 group-hover:text-gray-800 transition-colors text-sm md:text-lg leading-relaxed">
                  High-performance modern architecture.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 relative z-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 relative">
            {/* ghost text (desktop only) */}
            <motion.h2
              style={isMobile ? undefined : { x: textX }}
              className="hidden md:block text-[12vw] md:text-[14vw] font-oswald font-bold uppercase text-transparent text-stroke-white opacity-[0.03] absolute -left-20 md:left-0 pointer-events-none -top-20 md:-top-32"
            >
              Featured
            </motion.h2>

            <div className="relative z-10 w-full md:w-auto">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-oswald font-bold uppercase mb-6 md:mb-8 leading-tight md:leading-none">
                Selected <br />
                <span className="text-gray-500">Works</span>
              </h2>
            </div>

            <Magnetic>
              <TooltipCard content="See All Work">
                <Link
                  to="/portfolio"
                  className="px-6 md:px-10 py-3 md:py-5 border border-white/20 rounded-[40px] hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-[10px] sm:text-xs md:text-sm font-bold relative z-10 mt-4 md:mt-0 self-start md:self-auto"
                >
                  VIEW ALL PROJECTS
                </Link>
              </TooltipCard>
            </Magnetic>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Project 1 */}
            <motion.div
              style={isMobile ? undefined : { y: y1 }}
              className="group relative"
            >
              <TooltipCard content="View Case Study">
                <TiltCard>
                  <div className="w-full aspect-[4/3] relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/5">
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700">
                      <DataFlow />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs md:text-sm tracking-widest uppercase transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-2xl">
                        View
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </TooltipCard>

              <div className="mt-6 md:mt-10 flex justify-between items-start px-1 sm:px-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-oswald uppercase mb-2 md:mb-3 text-white group-hover:translate-x-2 transition-transform">
                    Fintech Evolution
                  </h3>
                  <p className="text-[11px] sm:text-xs tracking-widest text-gray-400 font-medium">
                    APP DEVELOPMENT
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  className="text-gray-500 group-hover:text-white group-hover:-translate-y-2 group-hover:translate-x-2 transition-all"
                />
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              style={isMobile ? undefined : { y: y2 }}
              className="group relative md:mt-40"
            >
              <TooltipCard content="View Case Study">
                <TiltCard>
                  <div className="w-full aspect-[4/3] relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/5">
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700">
                      <CyberGrid />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs md:text-sm tracking-widest uppercase transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-2xl">
                        View
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </TooltipCard>

              <div className="mt-6 md:mt-10 flex justify-between items-start px-1 sm:px-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-oswald uppercase mb-2 md:mb-3 text-white group-hover:translate-x-2 transition-transform">
                    CyberGuard
                  </h3>
                  <p className="text-[11px] sm:text-xs tracking-widest text-gray-400 font-medium">
                    SECURITY AUDIT
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  className="text-gray-500 group-hover:text-white group-hover:-translate-y-2 group-hover:translate-x-2 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white text-black relative overflow-hidden mt-24 md:mt-32 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <h2 className="text-[14vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] font-oswald font-bold uppercase mb-10 md:mb-16 tracking-tighter">
            Ready to
            <br />
            <ShinyText
              text="Scale?"
              className="text-black bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600"
            />
          </h2>

          <Magnetic>
            <TooltipCard content="Contact Us Now">
              <Link
                to="/contact"
                className="inline-block px-12 sm:px-20 md:px-24 py-6 sm:py-8 md:py-12 bg-black text-white rounded-[32px] md:rounded-[40px] text-base sm:text-xl md:text-2xl font-bold tracking-widest hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
              >
                GET IN TOUCH
              </Link>
            </TooltipCard>
          </Magnetic>
        </div>

        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <CyberGrid />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
