import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { X, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/ServicesData';

const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, preselectedService, addBooking } = useBooking();
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  
  // Flatten services for dropdown
  const allServices = services.flatMap(cat => cat.items.map(item => item.name));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (isBookingOpen && preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [isBookingOpen, preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: '', date: '', time: '' });
      closeBooking();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-lg ${theme === 'day' ? 'bg-white' : 'bg-[#1C1C1E]'} rounded-lg shadow-2xl overflow-hidden border border-gold/20`}
          >
            {/* Header */}
            <div className="bg-gold/10 p-6 flex justify-between items-center border-b border-gold/10">
              <h3 className={`font-serif text-2xl ${theme === 'day' ? 'text-charcoal' : 'text-alabaster'}`}>
                Запази <span className="text-gold italic">Час</span>
              </h3>
              <button onClick={closeBooking} className="text-gray-500 hover:text-gold transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-xs uppercase tracking-widest font-bold mb-2 ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Име и Фамилия
                    </label>
                    <input 
                      required
                      type="text"
                      className={`w-full p-3 rounded border ${theme === 'day' ? 'bg-alabaster border-gray-200 text-charcoal' : 'bg-black/20 border-white/10 text-white'} focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors`}
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="напр. Елена Петрова"
                    />
                  </div>

                  <div>
                    <label className={`block text-xs uppercase tracking-widest font-bold mb-2 ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Телефон за връзка
                    </label>
                    <input 
                      required
                      type="tel"
                      className={`w-full p-3 rounded border ${theme === 'day' ? 'bg-alabaster border-gray-200 text-charcoal' : 'bg-black/20 border-white/10 text-white'} focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors`}
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+359..."
                    />
                  </div>

                  <div>
                    <label className={`block text-xs uppercase tracking-widest font-bold mb-2 ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                      Изберете Услуга
                    </label>
                    <select 
                      required
                      className={`w-full p-3 rounded border ${theme === 'day' ? 'bg-alabaster border-gray-200 text-charcoal' : 'bg-black/20 border-white/10 text-white'} focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors appearance-none`}
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">-- Изберете --</option>
                      {allServices.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs uppercase tracking-widest font-bold mb-2 ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                        Дата
                      </label>
                      <input 
                        required
                        type="date"
                        className={`w-full p-3 rounded border ${theme === 'day' ? 'bg-alabaster border-gray-200 text-charcoal' : 'bg-black/20 border-white/10 text-white'} focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors`}
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs uppercase tracking-widest font-bold mb-2 ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                        Час
                      </label>
                      <input 
                        required
                        type="time"
                        className={`w-full p-3 rounded border ${theme === 'day' ? 'bg-alabaster border-gray-200 text-charcoal' : 'bg-black/20 border-white/10 text-white'} focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors`}
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gold text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all duration-300 shadow-glow"
                  >
                    Потвърди Заявката
                  </button>
                  <p className="text-[10px] text-center opacity-60">
                    *След изпращане, нашият администратор ще се свърже с Вас за потвърждение.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ type: "spring" }}
                     className="text-green-500 mb-6"
                  >
                    <CheckCircle size={64} />
                  </motion.div>
                  <h4 className={`font-serif text-3xl mb-2 ${theme === 'day' ? 'text-charcoal' : 'text-white'}`}>
                    Благодарим Ви!
                  </h4>
                  <p className="opacity-70 max-w-xs">
                    Вашата заявка е получена успешно. Очаквайте обаждане от Studio Day & Night.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;