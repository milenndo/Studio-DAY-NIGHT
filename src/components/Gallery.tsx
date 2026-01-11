import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Instagram } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    alt: "Луксозен Интериор",
    category: "Интериор"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
    alt: "Балеаж Трансформация",
    category: "Коса"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1632345031635-7b8000994fc8?q=80&w=800&auto=format&fit=crop",
    alt: "Арт Маникюр",
    category: "Нокти"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
    alt: "Официална Прическа",
    category: "Коса"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    alt: "Педикюр & Грижа",
    category: "Нокти"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1521590832169-7dad1a9b708d?q=80&w=1200&auto=format&fit=crop",
    alt: "Рецепция",
    category: "Интериор"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    alt: "Руси Нюанси",
    category: "Коса"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop",
    alt: "Мигли & Вежди",
    category: "Лице"
  }
];

const CATEGORIES = ["Всички", "Коса", "Нокти", "Интериор", "Лице"];

const Gallery: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Всички");

  const filteredImages = filter === "Всички" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const isDay = theme === 'day';
  const bgColor = isDay ? 'bg-white' : 'bg-[#18181B]';
  const textColor = isDay ? 'text-charcoal' : 'text-alabaster';

  return (
    <section id="gallery" className={`py-24 px-6 ${bgColor} relative overflow-hidden transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-bold"
          >
            Портфолио
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`font-serif text-4xl md:text-5xl mt-4 ${textColor}`}
          >
            Изкуството в <span className="text-gold italic">Детайли</span>
          </motion.h2>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300
                  ${filter === cat 
                    ? 'bg-gold text-white border-gold' 
                    : `${isDay ? 'border-gray-200 text-gray-500 hover:border-gold hover:text-gold' : 'border-white/10 text-gray-400 hover:border-gold hover:text-gold'}`
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid relative group rounded-sm overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 p-4 border border-white/20 bg-white/10 backdrop-blur-sm m-4">
                    <p className="text-white font-serif text-xl italic">{image.alt}</p>
                    <p className="text-gold text-xs uppercase tracking-widest mt-2">{image.category}</p>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Instagram className="text-white hover:text-gold transition-colors w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
             <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 border-b border-gold text-gold hover:text-charcoal transition-colors pb-1 text-xs uppercase tracking-widest ${isDay ? 'hover:text-charcoal' : 'hover:text-white'}`}>
                Разгледайте още в Instagram <Instagram size={14} />
             </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;