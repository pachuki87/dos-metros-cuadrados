import React from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';

export const Header = () => {
  return (
    <header className="relative h-[600px]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
          alt="Renovation background" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <Navigation />
        <Hero />
      </div>
    </header>
  );
};