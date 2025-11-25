import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import TooltipCard from '../components/ui/TooltipCard';
import CountUp from '../components/ui/CountUp';
import DitherEffect from '../components/animations/DitherEffect';
import TextReveal from '../components/ui/TextReveal';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <PageTransition>
      <section className="pt-48 pb-32 px-6 md:px-20">
        <div className="max-w-[1800px] mx-auto">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-[12vw] leading-[0.9] font-bold font-oswald uppercase mb-32 text-white"
          >
            We Are <br/> SkillQuest
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-4 sticky top-32">
               <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white">About Us</p>
               <div className="h-[1px] w-full bg-white/20 mb-12"></div>
               <TextReveal 
                 text="Founded in 2025, SkillQuest emerged from a desire to redefine the digital agency model. We don't just build websites; we engineer digital ecosystems that drive growth, security, and user engagement."
                 className="text-2xl leading-relaxed text-gray-300 font-light"
               />
            </div>
            <div className="md:col-span-8 relative h-[80vh] overflow-hidden rounded-[40px] border border-white/10 bg-gray-900">
               {/* Enhanced Dither Effect */}
               <DitherEffect 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                 className="w-full h-full"
               />
               {/* Overlay for better text contrast if needed */}
               <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-20 bg-white/[0.02] border-y border-white/5 backdrop-blur-lg">
         <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
               <h2 className="text-7xl font-oswald uppercase mb-12">Our Philosophy</h2>
               <TextReveal 
                 text="We believe in the power of subtraction. By removing the unnecessary, we focus on what truly matters: performance, aesthetics, and security. Our approach is data-driven, design-led, and security-first."
                 className="text-gray-300 text-2xl leading-relaxed font-light"
               />
            </div>
            <div className="grid grid-cols-2 gap-16">
               <TooltipCard content="International Design Awards">
                 <div className="border-l border-white/30 pl-10 cursor-pointer group">
                    <h3 className="text-6xl font-oswald mb-4 flex group-hover:text-white transition-colors">
                      <CountUp to={10} />
                    </h3>
                    <p className="text-sm tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">Experties</p>
                 </div>
               </TooltipCard>
               
               <TooltipCard content="Successful Launches">
                 <div className="border-l border-white/30 pl-10 cursor-pointer group">
                    <h3 className="text-6xl font-oswald mb-4 flex group-hover:text-white transition-colors">
                      <CountUp to={100} />%
                    </h3>
                    <p className="text-sm tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">Client Satisfaction</p>
                 </div>
               </TooltipCard>

               <TooltipCard content="Global Presence">
                 <div className="border-l border-white/30 pl-10 cursor-pointer group">
                    <h3 className="text-6xl font-oswald mb-4 flex group-hover:text-white transition-colors">
                      <CountUp to={10} />+
                    </h3>
                    <p className="text-sm tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">Clients</p>
                 </div>
               </TooltipCard>

               <TooltipCard content="Always Online">
                 <div className="border-l border-white/30 pl-10 cursor-pointer group">
                    <h3 className="text-6xl font-oswald mb-4 group-hover:text-white transition-colors">24/7</h3>
                    <p className="text-sm tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">Support</p>
                 </div>
               </TooltipCard>
            </div>
         </div>
      </section>
    </PageTransition>
  );
};

export default About;
