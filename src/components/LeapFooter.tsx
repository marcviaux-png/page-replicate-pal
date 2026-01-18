import { Link } from 'react-router-dom';
import leapuxLogo from '@/assets/leapux-logo.png';

const LeapFooter = () => {
  return (
    <footer className="bg-leap-black text-leap-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-8 group">
              <img 
                src={leapuxLogo} 
                alt="LeapUX" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-lg font-light">
              Design digital services that people can use — and organizations can deliver with confidence.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-leap-orange">
              National Support • EN / FR
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">Quick Links</h4>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-leap-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-leap-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-leap-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">Services</h4>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Strategy & Transformation</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">User Research</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">UX & Service Design</Link></li>
              <li><Link to="/services" className="hover:text-leap-orange transition-colors">Accessibility</Link></li>
            </ul>
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
