import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { REVIEWS } from '../constants';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Reviews: React.FC = () => {
  const { theme } = useTheme();

  const textColor = theme === 'day' ? 'text-charcoal' : 'text-alabaster';
  const bgColor = theme === 'day' ? 'bg-alabaster' : 'bg-[#121214]';
  const cardBg = theme === 'day' ? 'bg-white' : 'bg-charcoal';

  return (
    <section id="reviews" className={`py-24 px-6 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-bold"
          >
            Отзиви
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`font-serif text-4xl md:text-5xl mt-4 ${textColor}`}
          >
            Клиентска <span className="text-gold italic">Любов</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 px-4"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div
                  className={`p-8 rounded-sm ${cardBg} border border-gold/10 relative group hover:shadow-glow transition-all duration-500 flex flex-col justify-between h-full min-h-[300px] cursor-grab active:cursor-grabbing`}
                >
                  <Quote className="absolute top-6 right-6 text-gold/20 w-8 h-8 group-hover:text-gold/40 transition-colors" />
                  
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'fill-gold text-gold' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>

                    <p className={`font-serif text-xl italic leading-relaxed mb-6 ${textColor} opacity-90`}>
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-sans text-xs font-bold uppercase tracking-widest ${textColor}`}>
                        {review.name}
                      </span>
                      <span className="text-[10px] text-gold uppercase tracking-wider opacity-80">Потвърден клиент</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;