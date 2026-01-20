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
    { name: 'About', path: '/about' },
  ];

  const aiLinks = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'AI Training & Enablement', path: '/ai-training' },
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-leap-white shadow-2xl animate-slide-in-from-top">
          <div className="px-8 py-12 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="block text-4xl font-bold text-leap-black"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">AI</p>
              {aiLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-2xl font-bold text-leap-black pl-4 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-leap-orange text-leap-white py-5 rounded-full font-bold uppercase text-sm"
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
