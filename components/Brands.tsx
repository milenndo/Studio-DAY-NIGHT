import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Defining expected filenames for the brands in the public folder.
// Ensure your files in the public folder match these names!
const BRANDS = [
  { name: "Alexandra's Proline", file: "alexandras-proline.png" },
  { name: "Alfaparf Milano", file: "alfaparf-milano.png" },
  { name: "Barba Italiana", file: "barba-italiana.png" },
  { name: "Clarissa", file: "clarissa.png" },
  { name: "Dama Nail Art", file: "dama-nail-art.png" },
  { name: "Insight", file: "insight.png" },
  { name: "Mi Amante", file: "mi-amante.png" },
  { name: "Secretly", file: "secretly.png" },
  { name: "SNB Professional", file: "snb-professional.png" }
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

        <div className="w-full flex flex-wrap justify-center gap-x-12 gap-y-12 items-center">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group flex items-center justify-center w-32 md:w-40 h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-105"
            >
              {/* Attempt to load the image */}
              <img 
                src={`/${brand.file}`} 
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback: If image fails (filename doesn't match), hide image and show text
                  e.currentTarget.style.display = 'none';
                  const fallbackText = e.currentTarget.parentElement?.querySelector('.fallback-text');
                  if (fallbackText) {
                    (fallbackText as HTMLElement).style.display = 'block';
                  }
                }}
              />
              
              {/* Fallback Text (Hidden by default, shown if image breaks) */}
              <span 
                className={`fallback-text hidden font-serif text-lg italic ${isDay ? 'text-charcoal' : 'text-white'}`}
              >
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;