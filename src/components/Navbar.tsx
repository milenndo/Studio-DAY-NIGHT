import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { NAV_LINKS } from '../constants';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = isScrolled 
    ? 'bg-charcoal/95 backdrop-blur-md shadow-glow py-2' 
    : 'bg-transparent py-6';
  
  const textColor = 'text-white'; 

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 z-50 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/50 bg-white flex items-center justify-center">
             {/* Real Logo from Studio24 */}
             <img 
               src="https://studio24.bg/images/logos/studio-day-and-night-logo.jpg" 
               alt="Studio Day & Night Logo" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               onError={(e) => {
                 // Fallback if image fails to load
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerText = 'D&N';
               }}
             />
          </div>
          <div className={`flex flex-col ${textColor}`}>
            <span className="font-serif text-xl font-bold tracking-tight leading-none">
              Studio <span className="text-gold italic">Day & Night</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest opacity-70 hidden md:block">
              Студентски Град
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-sans text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full ${textColor}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border border-white/20 ${textColor} hover:text-gold hover:border-gold transition-colors bg-white/5 backdrop-blur-sm`}
            aria-label="Смяна на тема"
          >
            {theme === 'day' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
           <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${textColor} hover:text-gold transition-colors`}
          >
            {theme === 'day' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${textColor} hover:text-gold transition-colors`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-charcoal/98 backdrop-blur-xl border-l border-gold/20`}
          >
             {/* Logo in Mobile Menu */}
             <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold mb-8">
               <img 
                 src="https://studio24.bg/images/logos/studio-day-and-night-logo.jpg" 
                 alt="Studio Day & Night Logo" 
                 className="w-full h-full object-cover"
               />
             </div>

            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-alabaster hover:text-gold transition-colors italic"
              >
                {link.name}
              </a>
            ))}
            
            <div className="absolute bottom-10 text-center text-white/30 text-xs uppercase tracking-widest">
              Studio Day & Night<br/>София
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;