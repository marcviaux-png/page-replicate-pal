import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import leapuxLogo from '@/assets/leapux-logo.png';
import leapuxLogoDark from '@/assets/leapux-logo-dark.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


const LeapNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/portfolio' },
  ];

  const aiLinks = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'AI Training & Enablement', path: '/ai-training' },
    { name: 'Generative Engine Optimization', path: '/geo' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAiActive = aiLinks.some(link => isActive(link.path));

  const getLinkClasses = (path: string) => {
    const active = isActive(path);
    if (active) return 'text-leap-orange underline underline-offset-8 decoration-2';
    if (scrolled) return 'text-leap-black hover:text-leap-orange opacity-80';
    return 'text-leap-white hover:text-leap-orange opacity-90';
  };

  const getAiTriggerClasses = () => {
    if (isAiActive) return 'text-leap-orange underline underline-offset-8 decoration-2';
    if (scrolled) return 'text-leap-black hover:text-leap-orange opacity-80';
    return 'text-leap-white hover:text-leap-orange opacity-90';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-leap-white shadow-sm py-4 border-b border-border' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src={scrolled ? leapuxLogoDark : leapuxLogo} 
              alt="LeapUX" 
              className="h-8 sm:h-10 w-auto transition-all duration-300"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {/* Services */}
            <Link
              to="/services"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses('/services')}`}
            >
              Services
            </Link>

            {/* Capabilities */}
            <Link
              to="/capabilities"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses('/capabilities')}`}
            >
              Capabilities
            </Link>
            
            {/* AI Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 flex items-center gap-1 outline-none ${getAiTriggerClasses()}`}>
                AI
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-leap-white border border-gray-200 shadow-lg z-[100]">
                {aiLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={`text-xs font-bold uppercase tracking-[0.15em] px-4 py-3 cursor-pointer ${
                        isActive(link.path) ? 'text-leap-orange' : 'text-leap-black hover:text-leap-orange'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Our Work */}
            <Link
              to="/portfolio"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses('/portfolio')}`}
            >
              Our Work
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses('/about')}`}
            >
              About
            </Link>


            <Link
              to="/contact"
              className="bg-leap-orange text-leap-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={scrolled ? 'text-leap-black' : 'text-leap-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-leap-white shadow-2xl animate-slide-in-from-top overflow-y-auto overscroll-contain">
          <div className="px-6 py-4 pb-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em] text-leap-black py-4 border-b border-gray-100 hover:text-leap-orange transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-leap-orange opacity-60">→</span>
              </Link>
            ))}
            <div className="pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">AI</p>
              {aiLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em] text-leap-black py-4 border-b border-gray-100 hover:text-leap-orange transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-leap-orange opacity-60">→</span>
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-leap-orange text-leap-white py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] mt-8 shadow-lg active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LeapNavbar;
