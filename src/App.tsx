import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Insights from './components/Insights';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import BookingModal from './components/BookingModal';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <div className="relative min-h-screen overflow-x-hidden selection:bg-gold selection:text-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Team />
            <Services />
            <Gallery />
            <Brands />
            <Reviews />
            <Insights />
          </main>
          <Footer />
          <StickyCTA />
          <BookingModal />
          <AdminDashboard />
        </div>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;