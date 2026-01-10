import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useBooking } from '../context/BookingContext';
import { TEAM_MEMBERS } from '../constants';
import { Star, Sparkles, Calendar } from 'lucide-react';

const Team: React.FC = () => {
  const { theme } = useTheme();
  const { openBooking } = useBooking();

  const textColor = theme === 'day' ? 'text-charcoal' : 'text-alabaster';
  const bgColor = theme === 'day' ? 'bg-alabaster' : 'bg-[#18181B]';
  const cardBg = theme === 'day' ? 'bg-white' : 'bg-charcoal/40';
  const borderColor = theme === 'day' ? 'border-gold/30' : 'border-gold/20';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", damping: 20 }
    },
  };

  return (
    <section id="team" className={`py-24 px-6 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-bold"
          >
            Екипът
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`font-serif text-4xl md:text-5xl mt-4 ${textColor}`}
          >
            Нашите <span className="text-gold italic">Артисти</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className={`mt-4 max-w-2xl mx-auto font-sans font-light ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}
          >
             Хората, които превръщат визията в реалност.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className={`group relative flex flex-col ${cardBg} border ${borderColor} rounded-sm overflow-hidden hover:shadow-glow transition-all duration-500`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-charcoal/90 backdrop-blur-md px-2 py-1 rounded text-xs text-gold border border-gold/30">
                   <Star size={10} fill="currentColor" />
                   <span className="font-bold">{member.rating.toFixed(1)}</span>
                   {member.reviewCount && (
                     <span className="text-white/50 ml-1 font-light">({member.reviewCount})</span>
                   )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className={`font-serif text-2xl ${theme === 'day' ? 'text-charcoal' : 'text-white'}`}>
                    {member.name}
                  </h3>
                  <span className="text-gold text-xs uppercase tracking-widest font-bold mt-1 block">
                    {member.role}
                  </span>
                </div>

                <div className="mb-6 flex-grow">
                   <div className="flex items-start gap-2 mb-3">
                     <Sparkles size={14} className="text-gold shrink-0 mt-1" />
                     <p className={`text-sm font-sans font-medium ${theme === 'day' ? 'text-gray-800' : 'text-gray-200'}`}>
                       {member.specialty}
                     </p>
                   </div>
                   {member.bio && (
                     <p className={`text-sm font-sans font-light italic opacity-80 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                       "{member.bio}"
                     </p>
                   )}
                </div>

                <button 
                   onClick={() => openBooking()}
                   className={`w-full py-3 border border-gold/50 text-gold text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all flex items-center justify-center gap-2 group/btn`}
                >
                  <Calendar size={14} />
                  Запази час
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;