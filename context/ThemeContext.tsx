import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('day');

  useEffect(() => {
    // Initial check based on time
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    setTheme(isNight ? 'night' : 'day');
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'day' ? 'night' : 'day');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} transition-colors duration-700 ease-in-out`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
