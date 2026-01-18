import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import leapuxLogo from '@/assets/leapux-logo.png';

const LeapFooter = () => {
  return (
    <footer className="bg-leap-black text-leap-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo & Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 pb-16 border-b border-white/10">
          <div className="lg:max-w-md">
            <Link to="/" className="flex items-center mb-4 group">
              <img 
                src={leapuxLogo} 
                alt="LeapUX" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              UX and service design for complex, real-world environments. Helping organizations design, build, and deliver digital services that work.
            </p>
          </div>
          
          {/* Contact Info - Horizontal */}
          <div className="flex flex-wrap gap-8 lg:gap-12 text-sm text-slate-400">
            <a href="tel:1-888-553-2789" className="flex items-center gap-2 hover:text-leap-orange transition-colors">
              <Phone className="w-4 h-4 text-leap-orange" />
              <span>1-888-553-2789</span>
            </a>
            <a href="mailto:contact@leapux.com" className="flex items-center gap-2 hover:text-leap-orange transition-colors">
              <Mail className="w-4 h-4 text-leap-orange" />
              <span>contact@leapux.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-leap-orange shrink-0" />
              <span>1554 Carling Ave. Unit 42, Ottawa, ON K1Z 7M4</span>
            </div>
          </div>
        </div>
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><Link to="/" className="hover:text-leap-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-leap-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-leap-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Services</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Strategy & Transformation</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">User Research</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">UX & Service Design</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Accessibility</Link></li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Support Badge */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Support</h4>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-leap-orange">
              National • EN / FR
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} LeapUX. Operational since 2012.</p>
          <div className="flex gap-10">
            <span className="hover:text-leap-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-leap-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LeapFooter;
