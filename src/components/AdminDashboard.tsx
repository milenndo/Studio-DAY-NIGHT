import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { X, Check, Clock, Calendar, User, Phone, Trash2 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { isAdminOpen, toggleAdmin, bookings, updateBookingStatus } = useBooking();

  return (
    <AnimatePresence>
      {isAdminOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-900 flex flex-col">
          {/* Admin Header */}
          <div className="bg-gray-800 p-6 flex justify-between items-center shadow-md border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-gold flex items-center justify-center font-bold text-white">
                D&N
              </div>
              <div>
                <h2 className="text-white font-sans font-bold text-lg">Studio Management System</h2>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Internal Dashboard</p>
              </div>
            </div>
            <button onClick={toggleAdmin} className="text-gray-400 hover:text-white bg-gray-700 p-2 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-grow p-6 overflow-auto bg-[#0F0F11]">
            <div className="max-w-6xl mx-auto">
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded border border-gray-700">
                  <span className="text-gray-400 text-xs uppercase">Чакащи</span>
                  <p className="text-3xl text-gold font-bold">{bookings.filter(b => b.status === 'pending').length}</p>
                </div>
                <div className="bg-gray-800 p-6 rounded border border-gray-700">
                  <span className="text-gray-400 text-xs uppercase">Потвърдени (Днес)</span>
                  <p className="text-3xl text-green-500 font-bold">{bookings.filter(b => b.status === 'confirmed').length}</p>
                </div>
                <div className="bg-gray-800 p-6 rounded border border-gray-700">
                   <span className="text-gray-400 text-xs uppercase">Общо Заявки</span>
                   <p className="text-3xl text-white font-bold">{bookings.length}</p>
                </div>
              </div>

              <h3 className="text-white font-serif text-2xl mb-6">Входящи Резервации (Studio24 Sync)</h3>

              <div className="bg-gray-800 rounded border border-gray-700 overflow-hidden">
                 {/* Table Header */}
                 <div className="grid grid-cols-12 bg-gray-900/50 p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                   <div className="col-span-1">Статус</div>
                   <div className="col-span-3">Клиент</div>
                   <div className="col-span-3">Услуга</div>
                   <div className="col-span-3">Дата & Час</div>
                   <div className="col-span-2 text-right">Действие</div>
                 </div>

                 {/* Rows */}
                 {bookings.length === 0 ? (
                   <div className="p-12 text-center text-gray-500">Няма нови заявки.</div>
                 ) : (
                   <div className="divide-y divide-gray-700">
                     {bookings.map((booking) => (
                       <motion.div 
                         key={booking.id}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="grid grid-cols-12 p-4 items-center hover:bg-gray-700/30 transition-colors"
                       >
                          <div className="col-span-1">
                            {booking.status === 'pending' && <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />}
                            {booking.status === 'confirmed' && <span className="inline-block w-3 h-3 rounded-full bg-green-500" />}
                            {booking.status === 'cancelled' && <span className="inline-block w-3 h-3 rounded-full bg-red-500" />}
                          </div>
                          
                          <div className="col-span-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">
                                <User size={14} />
                              </div>
                              <div>
                                <p className="text-white font-bold text-sm">{booking.name}</p>
                                <div className="flex items-center gap-1 text-gray-400 text-xs">
                                  <Phone size={10} /> {booking.phone}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-3 text-gray-300 text-sm">
                            {booking.service}
                          </div>

                          <div className="col-span-3">
                            <div className="flex flex-col text-sm">
                               <span className="flex items-center gap-2 text-white"><Calendar size={12} className="text-gold"/> {booking.date}</span>
                               <span className="flex items-center gap-2 text-gray-400"><Clock size={12} /> {booking.time}</span>
                            </div>
                          </div>

                          <div className="col-span-2 flex justify-end gap-2">
                             {booking.status === 'pending' && (
                               <>
                                 <button 
                                   onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                   className="p-2 bg-green-500/20 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors"
                                   title="Потвърди"
                                 >
                                   <Check size={16} />
                                 </button>
                                 <button 
                                   onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                   className="p-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors"
                                   title="Откажи"
                                 >
                                   <X size={16} />
                                 </button>
                               </>
                             )}
                             {booking.status !== 'pending' && (
                               <button 
                                 onClick={() => updateBookingStatus(booking.id, 'pending')}
                                 className="text-xs underline text-gray-500 hover:text-white"
                               >
                                 Reset
                               </button>
                             )}
                          </div>
                       </motion.div>
                     ))}
                   </div>
                 )}
              </div>

            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdminDashboard;