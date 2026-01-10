import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BRANDS = [
  "Alexandra's Proline", 
  "Alfaparf Milano", 
  "Barba Italiana", 
  "Clarissa", 
  "Dama Nail Art", 
  "Insight", 
  "Mi Amante", 
  "Secretly", 
  "SNB Professional"
];

const Brands: React.FC = () => {
  const { theme } = useTheme();

  const isDay = theme === 'day';
  const bgColor = isDay ? 'bg-white' : 'bg-[#18181B]';
  const borderColor = isDay ? 'border-gray-100' : 'border-white/5';
  const textColor = isDay ? 'text-charcoal' : 'text-white';

  return (
    <section className={`py-16 px-6 ${bgColor} border-t ${borderColor}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-gold/50 uppercase tracking-[0.3em] text-[10px] font-bold mb-10">
          Доверени Световни Брандове
        </span>

        {/* 
          Text-based "Logo" Cloud
          Uses elegant typography instead of broken images for a premium feel.
        */}
        <div className="w-full flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`
                font-serif text-xl md:text-2xl italic tracking-wide cursor-default
                transition-all duration-500
                ${textColor} opacity-40 hover:opacity-100 hover:text-gold hover:scale-105
              `}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;