import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function GradientText({
  children,
  variant = 'brand', // 'brand' | 'gold' | 'green' | 'orange'
  className = '',
  as: Component = 'span',
}) {
  const gradients = {
    brand: 'bg-brand-gradient text-transparent bg-clip-text',
    gold: 'bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold text-transparent bg-clip-text',
    green: 'bg-green-gradient text-transparent bg-clip-text',
    orange: 'bg-orange-gradient text-transparent bg-clip-text',
  };

  return (
    <Component className={twMerge(clsx(gradients[variant], className))}>
      {children}
    </Component>
  );
}
