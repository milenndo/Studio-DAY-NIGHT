import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface BookingRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: number;
}

interface BookingContextType {
  isBookingOpen: boolean;
  openBooking: (preselectedService?: string) => void;
  closeBooking: () => void;
  preselectedService: string;
  // Admin Data
  bookings: BookingRequest[];
  addBooking: (booking: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>) => void;
  updateBookingStatus: (id: string, status: 'pending' | 'confirmed' | 'cancelled') => void;
  isAdminOpen: boolean;
  toggleAdmin: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  // Load bookings from local storage to simulate backend
  useEffect(() => {
    const stored = localStorage.getItem('dn_bookings');
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const openBooking = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService('');
  };

  const toggleAdmin = () => setIsAdminOpen(prev => !prev);

  const addBooking = (data: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>) => {
    const newBooking: BookingRequest = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: Date.now()
    };
    
    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('dn_bookings', JSON.stringify(updatedBookings));
  };

  const updateBookingStatus = (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    const updatedBookings = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updatedBookings);
    localStorage.setItem('dn_bookings', JSON.stringify(updatedBookings));
  };

  return (
    <BookingContext.Provider value={{
      isBookingOpen,
      openBooking,
      closeBooking,
      preselectedService,
      bookings,
      addBooking,
      updateBookingStatus,
      isAdminOpen,
      toggleAdmin
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};