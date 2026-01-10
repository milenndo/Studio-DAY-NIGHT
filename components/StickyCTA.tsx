import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const StickyCTA: React.FC = () => {
  const { openBooking } = useBooking();
  
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, type: 'spring' }}
      className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
    >
      <button 
        id="booking"
        className="w-full bg-gold text-white font-sans font-bold uppercase tracking-widest py-4 rounded-full shadow-2xl flex items-center justify-center gap-2"
        onClick={() => openBooking()}
      >
        <Calendar size={18} />
        Запази Час
      </button>
    </motion.div>
  );
};

export default StickyCTA;