import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  const textColor = theme === 'day' ? 'text-charcoal' : 'text-alabaster';
  const bgColor = theme === 'day' ? 'bg-alabaster' : 'bg-night';

  // ПЪТ КЪМ СНИМКАТА НА КАЛИНА:
  // Файлът трябва да е в: public/images/kalina.png
  const kalinaImage = "/images/kalina.png";

  return (
    <section id="about" className={`py-24 px-6 md:px-20 ${bgColor} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-full border border-gold transform -translate-x-4 -translate-y-4 z-0" />
          <img 
            src={kalinaImage} 
            alt="Калина Иванова - Основател на Studio Day & Night" 
            className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            onError={(e) => {
              // Fallback if image is missing
              e.currentTarget.src = "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </motion.div>

        {/* Text Side */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote className="text-gold w-12 h-12 mb-6 opacity-50" />
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl mb-8 ${textColor}`}>
              Сбъднатата Детска <br />
              <span className="text-gold italic">Мечта.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`space-y-6 font-sans text-lg font-light leading-relaxed ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}
          >
            <p>
              В сърцето на Студентски град, <strong>Studio Day & Night</strong> е повече от салон за красота. 
              Това е реализираната визия на Калина Иванова за пространство, където професионализмът среща домашния уют.
            </p>
            <p>
              От перфектния <strong>балеаж</strong> до прецизния маникюр, нашият екип влага сърце във всяка процедура. 
              Ние вярваме, че красотата е изкуство, което заслужава най-добрите продукти и лично отношение.
            </p>
            <div className="pt-8">
              <p className={`font-serif text-2xl ${textColor}`}>- Калина Иванова</p>
              <p className="text-gold text-sm uppercase tracking-widest mt-2">Основател</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;