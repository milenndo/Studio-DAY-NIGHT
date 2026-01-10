import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const PARTNERS = [
  {
    name: "Alexandra's Proline",
    logo: '/assets/images/alexandras-proline.png',
    fallbackUrl: 'https://proline.bg/assets/img/logo.png' // Примерна/Placeholder връзка
  },
  {
    name: 'Alfaparf Milano',
    logo: '/assets/images/alfaparf.png',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Alfaparf_Milano_Logo.svg/2560px-Alfaparf_Milano_Logo.svg.png'
  },
  {
    name: 'Barba Italiana',
    logo: '/assets/images/barba-italiana.png',
    fallbackUrl: 'https://www.barbaitaliana.com/wp-content/uploads/2019/06/barba-italiana-logo.png'
  },
  {
    name: 'Clarissa',
    logo: '/assets/images/clarissa.png',
    fallbackUrl: 'https://clarissacosmetics.com/wp-content/uploads/2020/06/logo-mobile.png'
  },
  {
    name: 'Da Ma Nail Art',
    logo: '/assets/images/dama-nail-art.png',
    fallbackUrl: 'https://via.placeholder.com/300x150/ffffff/000000?text=DA+MA' // Fallback text image if real URL not found
  },
  {
    name: 'Insight',
    logo: '/assets/images/insight.png',
    fallbackUrl: 'https://www.insightprofessional.it/img/logo-insight.png'
  },
  {
    name: 'Mi Amante Professional',
    logo: '/assets/images/mi-amante.png',
    fallbackUrl: 'https://miamante.bg/wp-content/uploads/2020/10/mi-amante-logo-1.png'
  },
  {
    name: 'Secretly Professional',
    logo: '/assets/images/secretly-professional.png',
    fallbackUrl: 'https://secretly-professional.com/wp-content/uploads/2021/03/Secretly-Logo-Black.png'
  },
  {
    name: 'SNB Professional',
    logo: '/assets/images/snb-professional.png',
    fallbackUrl: 'https://starnails.bg/img/leoblog/b/1/33/770_481/SNB-Professional-logo.png'
  }
];

const Brands: React.FC = () => {
  const { theme } = useTheme();

  const isDay = theme === 'day';
  const bgColor = isDay ? 'bg-white' : 'bg-[#18181B]';
  const borderColor = isDay ? 'border-gray-100' : 'border-white/5';

  return (
    <section className={`py-20 px-6 ${bgColor} border-t ${borderColor}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-gold/50 uppercase tracking-[0.3em] text-[10px] font-bold mb-14">
          Марките, с които работим
        </span>

        {/* Използваме flex-wrap и justify-center, за да центрираме идеално 9-те лога */}
        <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-80">
          
          {PARTNERS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-36 h-20 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-105 cursor-pointer">
                <img 
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: isDay ? 'none' : 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    // Fallback logic for missing local files
                    const imgElement = e.currentTarget;
                    if (imgElement.src !== brand.fallbackUrl && brand.fallbackUrl) {
                      imgElement.src = brand.fallbackUrl;
                    } else {
                      imgElement.style.display = 'none';
                      if (imgElement.parentElement) {
                          // Prevent duplicate text if react re-renders
                          if (!imgElement.parentElement.querySelector('span')) {
                            const span = document.createElement('span');
                            span.innerText = brand.name;
                            span.className = `font-serif font-bold text-center text-sm ${isDay ? 'text-charcoal' : 'text-white'}`;
                            imgElement.parentElement.appendChild(span);
                          }
                      }
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Brands;