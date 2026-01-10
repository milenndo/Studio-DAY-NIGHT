import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useTheme } from '../context/ThemeContext';
import { useBooking } from '../context/BookingContext';
import { ArrowDown, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openBooking } = useBooking();
  const { theme } = useTheme();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current && videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-night"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-[120%] object-cover opacity-80"
        >
          <source src="https://videos.pexels.com/video-files/3998396/3998396-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'day' ? 'from-alabaster/20 via-transparent to-alabaster/90' : 'from-night/30 via-transparent to-night/90'} z-10`} />
      </div>

      {/* Glassmorphism Content Card */}
      <div className="relative z-20 px-6 max-w-4xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`
            p-12 md:p-16 rounded-2xl
            backdrop-blur-md border border-white/10 shadow-2xl
            ${theme === 'day' ? 'bg-white/10' : 'bg-black/20'}
          `}
        >
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <span className="inline-block py-1 px-3 border border-gold/50 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">
              Основано 2018 • София
            </span>
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4 drop-shadow-lg">
            Твоята Красота, <br/>
            <span className="italic text-gold bg-clip-text text-transparent bg-gold-foil">Подчертана.</span>
          </h1>

          <p className="text-white/80 font-sans font-light text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Където прецизността среща изкуството. Подарете си момент на безвремие в сърцето на града.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <MagneticButton onClick={() => openBooking()} variant="solid" className="w-full md:w-auto min-w-[200px]">
              Запази Час
            </MagneticButton>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors">
                <Play size={10} fill="currentColor" />
              </span>
              <span>Вижте Салона</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/30"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;