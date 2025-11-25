import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';
import TooltipCard from '../components/ui/TooltipCard';

const projects = [
  {
    title: "FinTech Evolution",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    year: "2024"
  },
  {
    title: "CyberGuard",
    category: "Security Audit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    title: "Luxe Interiors",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
    year: "2023"
  },
  {
    title: "EcoStream",
    category: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    year: "2023"
  },
  {
    title: "Neon Future",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    year: "2022"
  },
  {
    title: "Urban Architects",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    year: "2022"
  }
];

const Portfolio: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <PageTransition>
      <section ref={containerRef} className="pt-48 pb-32 px-6 md:px-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-32 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#050505] to-transparent z-10 w-32"></div>
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#050505] to-transparent z-10 w-32"></div>
             
             <motion.h1 
               style={{ x }}
               className="text-[15vw] font-oswald font-bold uppercase leading-none whitespace-nowrap text-white/5"
             >
               Selected Works Selected Works
             </motion.h1>
             <h1 className="text-[10vw] font-oswald font-bold uppercase leading-none -mt-[8vw] relative z-10 text-white px-4">
               Selected Work
             </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-40' : ''}`}
    >
      <TooltipCard content={`View ${project.title}`}>
        <TiltCard>
          <motion.div 
            style={{ scale }}
            className="w-full aspect-[4/3] overflow-hidden rounded-[40px] bg-gray-900 mb-10 relative border border-white/10"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </TiltCard>
      </TooltipCard>
      
      <div className="flex justify-between items-end border-b border-white/10 pb-8 px-4 group-hover:border-white transition-colors duration-500">
        <div>
          <h3 className="text-5xl font-oswald uppercase mb-2 group-hover:translate-x-4 transition-all duration-500">{project.title}</h3>
          <p className="text-sm text-gray-400 tracking-widest uppercase">{project.category}</p>
        </div>
        <span className="text-lg font-mono text-gray-500">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default Portfolio;
