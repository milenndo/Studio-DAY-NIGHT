import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useBooking } from '../context/BookingContext';
import { services } from '../data/ServicesData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const { theme } = useTheme();
  const { openBooking } = useBooking();
  const [activeindex, setActiveIndex] = useState<number>(0);

  const isDay = theme === 'day';
  
  return (
    <section id="services" className={`py-20 px-4 md:px-10 ${isDay ? 'bg-alabaster' : 'bg-night'} relative overflow-hidden transition-colors duration-700`}>
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
              Нашето Меню
            </span>
            <h2 className={`font-serif text-4xl md:text-6xl ${isDay ? 'text-charcoal' : 'text-alabaster'}`}>
              Услуги & <span className="text-gold italic">Ритуали</span>
            </h2>
          </div>
          <p className={`max-w-md text-sm md:text-base font-light ${isDay ? 'text-gray-600' : 'text-gray-400'}`}>
            Открийте персонализирана грижа, вдъхновена от световните тенденции и изпълнена с внимание към всеки детайл.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          {services.map((service, index) => {
            const isActive = activeindex === index;
            
            return (
              <motion.div
                key={service.category}
                layout
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-out
                  ${isActive ? 'lg:flex-[3] h-[500px] lg:h-auto' : 'lg:flex-1 h-[100px] lg:h-auto'}
                  ${isDay ? 'bg-white' : 'bg-charcoal'}
                  border ${isDay ? 'border-gray-200' : 'border-white/5'}
                `}
              >
                {/* Background Image (Active Only) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 z-0"
                    >
                       <div className={`absolute inset-0 ${isDay ? 'bg-white/80' : 'bg-black/60'} z-10`} />
                       <img 
                         src={service.image} 
                         alt={service.category} 
                         className="w-full h-full object-cover"
                       />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Container */}
                <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8">
                  
                  {/* Header: Number & Title */}
                  <div className={`flex items-center lg:block justify-between ${isActive ? 'lg:mb-auto' : 'h-full lg:h-auto items-center justify-center lg:justify-start'}`}>
                    <span className={`text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-200 opacity-30 font-bold block mb-2`}>
                      0{index + 1}
                    </span>
                    
                    <h3 className={`font-serif text-2xl md:text-3xl whitespace-nowrap 
                      ${isActive ? (isDay ? 'text-charcoal' : 'text-white') : (isDay ? 'text-charcoal/50' : 'text-white/50')}
                      ${!isActive && 'lg:-rotate-90 lg:origin-left lg:translate-y-24 lg:mt-20 lg:absolute lg:bottom-10 lg:left-8 transition-transform'}
                    `}>
                      {service.category}
                    </h3>

                    {/* Mobile Toggle Icon */}
                    <div className="lg:hidden">
                       <ArrowUpRight className={`text-gold transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-8 lg:mt-0"
                      >
                         <div className="space-y-4 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                           {service.items.map((item, idx) => (
                             <div key={idx} className={`flex justify-between items-center py-3 border-b ${isDay ? 'border-charcoal/10' : 'border-white/10'}`}>
                               <div className="flex flex-col">
                                 <span className={`font-sans font-medium ${isDay ? 'text-charcoal' : 'text-alabaster'}`}>
                                   {item.name}
                                 </span>
                                 <span className="text-xs text-gold/80">{item.duration}</span>
                               </div>
                               <span className={`font-serif text-lg ${isDay ? 'text-charcoal' : 'text-white'}`}>
                                 {item.price}
                               </span>
                             </div>
                           ))}
                         </div>

                         <div className="flex flex-wrap gap-3">
                           {service.items.slice(0, 3).map((item, i) => (
                             <button
                               key={i}
                               onClick={(e) => {
                                 e.stopPropagation();
                                 openBooking(item.name);
                               }}
                               className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all hover:bg-gold hover:text-white hover:border-gold
                                 ${isDay ? 'border-charcoal/20 text-charcoal' : 'border-white/20 text-white'}
                               `}
                             >
                               Запази: {item.name.split(' ')[0]}
                             </button>
                           ))}
                           <button
                             onClick={(e) => {
                               e.stopPropagation();
                               openBooking(service.category);
                             }}
                             className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white hover:scale-110 transition-transform"
                           >
                             <ArrowUpRight size={18} />
                           </button>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;