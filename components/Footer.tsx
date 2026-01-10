import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useBooking } from '../context/BookingContext';
import { Instagram, Facebook, MapPin, Phone, Mail, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { toggleAdmin } = useBooking();
  
  return (
    <footer id="location" className={`${theme === 'day' ? 'bg-alabaster text-charcoal' : 'bg-night text-alabaster'} pt-24 pb-12 px-6 border-t ${theme === 'day' ? 'border-gray-200' : 'border-white/10'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl">Studio <span className="text-gold italic">Day & Night</span></h2>
          <p className="font-sans font-light opacity-70 max-w-xs">
            Сбъднатата детска мечта на Калина Иванова. 
            Място за красота, стил и релакс в сърцето на Студентски град.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-current flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-current flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl">Намерете ни</h3>
          <ul className="space-y-4 font-sans font-light opacity-80">
            <li className="flex items-start gap-3 group">
              <MapPin size={20} className="text-gold shrink-0 mt-1" />
              {/* Google Maps Link for Mobile Navigation */}
              <a 
                href="https://goo.gl/maps/placeholder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group-hover:text-gold transition-colors"
              >
                ул. „Академик Стефан Младенов“ 50<br/>Студентски град, София
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone size={20} className="text-gold shrink-0" />
              {/* Click to Call */}
              <a href="tel:+359881234567" className="group-hover:text-gold transition-colors">
                +359 88 123 4567
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={20} className="text-gold shrink-0" />
              <a href="mailto:hello@studiodayandnight.bg" className="group-hover:text-gold transition-colors">
                hello@studiodayandnight.bg
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl">Работно Време</h3>
          <ul className="space-y-2 font-sans font-light opacity-80">
            <li className="flex justify-between">
              <span>Понеделник - Петък</span>
              <span>10:00 - 20:00</span>
            </li>
            <li className="flex justify-between text-gold">
              <span>Събота</span>
              <span>10:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Неделя</span>
              <span>Почивен ден</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-current border-opacity-10 text-center flex flex-col items-center justify-center gap-4">
        <span className="font-sans text-xs opacity-50 tracking-widest">
          © 2026 STUDIO DAY & NIGHT. ВСИЧКИ ПРАВА ЗАПАЗЕНИ.
        </span>
        <button 
          onClick={toggleAdmin}
          className="text-gray-500/30 hover:text-gold transition-colors p-2"
          aria-label="Admin Access"
        >
          <Lock size={12} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;