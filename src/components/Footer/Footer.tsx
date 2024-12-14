import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Reformas y Pinturas Dos m². Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};