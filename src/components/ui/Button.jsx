import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'gold' | 'ghost' | 'green'
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon = null,
  disabled = false,
  ...props
}) {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden group select-none';
  
  const variants = {
    // Ultra-Vivid Brand Gradient (Logo Green -> Gold -> Orange)
    primary: 'bg-gradient-to-r from-[#F36F21] via-[#FF8800] to-[#D85906] text-white border border-white/25 shadow-[0_10px_30px_rgba(243,111,33,0.45)] hover:shadow-[0_15px_40px_rgba(243,111,33,0.65)] hover:scale-[1.04] active:scale-[0.98] focus:ring-[#F36F21]',
    
    // Logo Green Button
    green: 'bg-gradient-to-r from-[#38A128] via-[#48C035] to-[#1F7A14] text-white border border-white/25 shadow-[0_10px_30px_rgba(56,161,40,0.45)] hover:shadow-[0_15px_40px_rgba(56,161,40,0.6)] hover:scale-[1.04] active:scale-[0.98] focus:ring-[#38A128]',
    
    // Logo Gold Button with High-Contrast Dark Text
    gold: 'bg-gradient-to-r from-[#FFD700] via-[#EBA826] to-[#F36F21] text-[#1A1615] border border-white/40 shadow-[0_10px_30px_rgba(235,168,38,0.5)] hover:shadow-[0_15px_40px_rgba(235,168,38,0.7)] hover:scale-[1.04] active:scale-[0.98] focus:ring-[#EBA826]',
    
    // High-Visibility Outline Button
    outline: 'border-2 border-[#F36F21] bg-white/95 text-[#F36F21] hover:bg-[#F36F21] hover:text-white shadow-md hover:shadow-[0_10px_30px_rgba(243,111,33,0.4)] hover:scale-[1.04] active:scale-[0.98] focus:ring-[#F36F21]',
    
    // Ghost Button
    ghost: 'bg-transparent text-[#1A1615] hover:bg-[#38A128]/10 hover:text-[#38A128] focus:ring-[#38A128]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs uppercase tracking-wider',
    md: 'px-7 py-3.5 text-sm tracking-wide',
    lg: 'px-9 py-4 text-base tracking-wider font-extrabold',
  };

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {/* Light Sweep Shimmer Effect on Hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      {/* Top Inner Highlight */}
      <span className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 pointer-events-none" />

      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />}
      </span>
    </motion.button>
  );
}
