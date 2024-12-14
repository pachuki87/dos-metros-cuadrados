import React from 'react';
import { Phone } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Dos m² Logo" className="h-16" />
        </div>
        <div className="flex items-center space-x-6 text-white">
          <a href="#servicios" className="hover:text-yellow-400">Servicios</a>
          <a href="#proyectos" className="hover:text-yellow-400">Proyectos</a>
          <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
          <a href="tel:606664873" className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            <Phone size={20} />
            <span>606 66 48 73</span>
          </a>
        </div>
      </div>
    </nav>
  );
};