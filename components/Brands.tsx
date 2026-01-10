import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BRANDS = [
  { name: "Alexandra's Proline", logo: 'alexandras-proline.png' },
  { name: "Alfaparf Milano", logo: 'alfaparf-milano.png' },
  { name: "Barba Italiana", logo: 'barba-italiana.png' },
  { name: "Insight", logo: 'insight.png' },
  { name: "Mi Amante", logo: 'mi-amante.png' },
  { name: "SNB Professional", logo: 'snb-professional.png' },
  // { name: "Clarissa", logo: 'clarissa.png' },
  // { name: "Dama Nail Art", logo: 'dama-nail-art.png' },
  // { name: "Secretly", logo: 'secretly.png' },
];

const Brands: React.FC = () => {
  const { theme } = useTheme();

  const isDay = theme === 'day';
  const bgColor = isDay ? 'bg-white' : 'bg-[#18181B]';
  const borderColor = isDay ? 'border-gray-100' : 'border-white/5';

  return (
    <section className={`py-16 px-6 ${bgColor} border-t ${borderColor}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-gold/50 uppercase tracking-[0.3em] text-[10px] font-bold mb-10">
          Доверени Световни Брандове
        </span>

        <div className="w-full flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-105"
            >
              <img 
                src={`/${brand.logo}`} 
                alt={brand.name} 
                className="h-12 md:h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
