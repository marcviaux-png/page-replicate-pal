import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import leapuxLogo from '@/assets/leapux-logo.png';
import leapuxLogoDark from '@/assets/leapux-logo-dark.png';

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

  const isActive = (path: string) => location.pathname === path;

  const getLinkClasses = (path: string) => {
    const active = isActive(path);
    if (active) return 'text-leap-orange underline underline-offset-8 decoration-2';
    if (scrolled) return 'text-leap-black hover:text-leap-orange opacity-80';
    return 'text-leap-white hover:text-leap-orange opacity-90';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-leap-white shadow-sm py-4 border-b border-border' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group relative h-8 sm:h-10 w-32 sm:w-40">
            <img 
              src={leapuxLogo} 
              alt="LeapUX" 
              className={`h-full w-full object-contain object-left transition-opacity duration-500 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img 
              src={leapuxLogoDark} 
              alt="LeapUX" 
              className={`h-full w-full object-contain object-left absolute inset-0 transition-opacity duration-500 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
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
            <Link
              to="/services"
              className="bg-leap-orange text-leap-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95"
            >
              Talk to LeapUX
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
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-leap-orange text-leap-white py-5 rounded-full font-bold uppercase text-sm"
            >
              Talk to LeapUX
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LeapNavbar;
