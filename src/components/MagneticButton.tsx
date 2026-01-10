import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'solid' | 'outline';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'solid' 
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "px-8 py-3 rounded-full font-sans uppercase tracking-widest text-xs font-bold transition-all duration-300";
  
  // Updated variants to use the new gold color and glow effects
  const variants = {
    solid: "bg-gold text-white hover:bg-white hover:text-gold border border-gold shadow-lg hover:shadow-glow",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white backdrop-blur-sm hover:shadow-glow"
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;