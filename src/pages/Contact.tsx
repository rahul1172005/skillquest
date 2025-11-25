import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Magnetic from '../components/ui/Magnetic';
import LaserFlow from '../components/animations/LaserFlow';
import TooltipCard from '../components/ui/TooltipCard';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-48 pb-32 px-6 md:px-20 min-h-screen flex flex-col justify-between relative overflow-hidden">
        {/* Laser Flow Background - Lower opacity for readability */}
        <div className="opacity-40">
            <LaserFlow />
        </div>
        
        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h1 className="text-[8vw] font-oswald font-bold uppercase leading-[0.9] mb-16">
                Let's Start <br/> <span className="text-stroke-white">A Project</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-lg mb-16 leading-relaxed font-light">
                We help ambitious brands scale and innovate. Tell us about your vision.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-white mb-4 uppercase">Email</h4>
                  <TooltipCard content="Send us an email">
                    <a href="mailto:hello@skillquest.com" className="text-3xl font-oswald hover:text-gray-300 transition-colors">hello@skillquest.com</a>
                  </TooltipCard>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-white mb-4 uppercase">Phone</h4>
                  <TooltipCard content="Call us now">
                    <a href="tel:+15550000000" className="text-3xl font-oswald hover:text-gray-300 transition-colors">+1 (555) 000-0000</a>
                  </TooltipCard>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-white mb-4 uppercase">Office</h4>
                  <TooltipCard content="View on Maps">
                    <p className="text-3xl font-oswald cursor-pointer hover:text-gray-300 transition-colors">123 Innovation Dr.<br/>Silicon Valley, CA</p>
                  </TooltipCard>
                </div>
              </div>
            </div>

            <form className="space-y-10 mt-12 lg:mt-0 bg-black/80 p-12 rounded-[40px] border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="What's your name?" 
                  className="w-full text-3xl p-8 bg-white/5 border border-white/10 rounded-[40px] focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 font-oswald text-white"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full text-3xl p-8 bg-white/5 border border-white/10 rounded-[40px] focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 font-oswald text-white"
                />
              </div>
              <div className="relative group">
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project" 
                  className="w-full text-3xl p-8 bg-white/5 border border-white/10 rounded-[40px] focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 font-oswald resize-none text-white"
                />
              </div>
              
              <div className="pt-8">
                <Magnetic>
                  <TooltipCard content="Submit Form">
                    <button className="px-16 py-8 bg-white text-black rounded-[40px] text-lg font-bold tracking-widest hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 w-full md:w-auto">
                      SEND MESSAGE
                    </button>
                  </TooltipCard>
                </Magnetic>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
