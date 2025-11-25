import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SpotlightCard from '../components/ui/SpotlightCard';
import HoverBorderGradient from '../components/ui/HoverBorderGradient';
import ShinyText from '../components/ui/ShinyText';
import TextReveal from '../components/ui/TextReveal';
import InteractiveText from '../components/InteractiveText';
import EncryptedText from '../components/ui/EncryptedText';
import TooltipCard from '../components/ui/TooltipCard';
import { Code, PenTool, Shield, Layout, Globe, Database, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    desc: "Scalable, high-performance applications built on modern stacks. We focus on React, Node.js, and cloud-native architectures.",
    icon: Code,
    col: "md:col-span-8",
    tooltip: "React, Next.js, Node"
  },
  {
    title: "UI/UX Design",
    desc: "Award-winning interfaces that prioritize user experience and conversion.",
    icon: PenTool,
    col: "md:col-span-4",
    tooltip: "Figma, Motion, 3D"
  },
  {
    title: "Cybersecurity",
    desc: "Penetration testing, security audits, and secure infrastructure implementation.",
    icon: Shield,
    col: "md:col-span-4",
    tooltip: "Audits, Pen-Testing"
  },
  {
    title: "Branding",
    desc: "Visual identity systems that tell your unique story through typography and color.",
    icon: Layout,
    col: "md:col-span-4",
    tooltip: "Identity, Strategy"
  },
  {
    title: "Cloud Solutions",
    desc: "AWS/Azure architecture, DevOps pipelines, and server management.",
    icon: Database,
    col: "md:col-span-4",
    tooltip: "AWS, Azure, Docker"
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SEM, and content strategies to drive organic growth and visibility.",
    icon: Globe,
    col: "md:col-span-12",
    tooltip: "SEO, Growth, Ads"
  }
];

const Services: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-48 pb-32 px-6 md:px-12 min-h-screen">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32 border-b border-white/10 pb-16"
          >
            {/* High-End Header Replacement - Matching Home/About */}
            <div className="flex flex-col relative mix-blend-difference mb-12">
              <h1 className="text-[11vw] leading-[0.9] font-bold tracking-tighter text-white uppercase font-oswald">
                <div className="overflow-hidden">
                  <InteractiveText text="OUR" delay={0.2} />
                </div>
                <div className="flex items-center gap-4 md:gap-8 overflow-hidden my-2">
                   <div className="hidden md:block h-[0.7em] aspect-[2/1] border border-white/20 rounded-[40px] overflow-hidden relative bg-white/5"></div>
                   <InteractiveText text="SERVICES" delay={0.4} />
                </div>
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="max-w-3xl">
                <TextReveal 
                  text="Comprehensive digital solutions tailored for modern businesses. We combine creativity with technical excellence to deliver measurable results."
                  className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light"
                />
              </div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                <EncryptedText text="SCROLL TO EXPLORE" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                className={`${service.col} h-full`}
              >
                <TooltipCard content={service.tooltip} className="w-full h-full">
                  <HoverBorderGradient containerClassName="w-full h-full !rounded-[40px] !p-[1px]" className="w-full h-full !rounded-[40px] !bg-[#0a0a0a] !p-0">
                    <SpotlightCard className="p-12 rounded-[40px] min-h-[400px] flex flex-col justify-between h-full cursor-pointer group bg-transparent hover:bg-white hover:text-black transition-all duration-500">
                      <div className="flex justify-between items-start relative z-10">
                        <div className={`p-5 border border-white/10 rounded-2xl group-hover:border-black/10 transition-all duration-500 bg-white/5 group-hover:bg-black/5`}>
                          <service.icon size={40} strokeWidth={1} />
                        </div>
                        <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" size={32} />
                      </div>
                      <div className="relative z-10 mt-16">
                        <h3 className="text-4xl md:text-5xl font-oswald uppercase mb-6 text-white group-hover:text-black transition-colors duration-500">{service.title}</h3>
                        <p className="text-gray-400 text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-500">{service.desc}</p>
                      </div>
                    </SpotlightCard>
                  </HoverBorderGradient>
                </TooltipCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
