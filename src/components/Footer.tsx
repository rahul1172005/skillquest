import React from 'react';
import { Heart, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';
import TooltipCard from './ui/TooltipCard';
import Magnetic from './ui/Magnetic';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white py-20 px-6 md:px-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between relative z-10">
        <div className="mb-12 md:mb-0">
          <TooltipCard content="Back to Top">
             <h2 className="text-4xl font-bold font-oswald tracking-widest mb-6 text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SKILLQUEST</h2>
          </TooltipCard>
          <p className="text-gray-500 max-w-xs leading-relaxed">
            Forging the digital future with precision, security, and aesthetic excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Sitemap</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Agency</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Social</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <TooltipCard content="Connect on LinkedIn">
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a>
                </TooltipCard>
              </li>
              <li>
                <TooltipCard content="Follow on Twitter">
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter</a>
                </TooltipCard>
              </li>
              <li>
                <TooltipCard content="See our Instagram">
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a>
                </TooltipCard>
              </li>
              <li>
                <TooltipCard content="View Portfolio">
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Dribbble size={14} /> Behance</a>
                </TooltipCard>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <TooltipCard content="Send Email">
                   <span className="cursor-pointer hover:text-white transition-colors">hello@skillquest.com</span>
                </TooltipCard>
              </li>
              <li>
                <TooltipCard content="Call Us">
                   <span className="cursor-pointer hover:text-white transition-colors">+1 (555) 123-4567</span>
                </TooltipCard>
              </li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2025 SKILLQUEST AGENCY. ALL RIGHTS RESERVED.</p>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
           <span className="uppercase tracking-widest">Proudly Made By</span>
           <Magnetic>
             <TooltipCard content="Visit Zapsters">
               <a 
                 href="https://zapsters.in" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 font-bold text-white hover:text-gray-300 transition-colors group"
               >
                 ZAPSTERS
                 <Heart size={12} className="text-red-600 fill-red-600 animate-pulse" />
               </a>
             </TooltipCard>
           </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
