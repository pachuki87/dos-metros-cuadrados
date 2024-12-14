import React from 'react';

export const Hero = () => {
  return (
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-6">Reformas y Pinturas Dos m²</h1>
      <p className="text-xl mb-8">Transformamos espacios en Valencia y alrededores</p>
      <div className="flex justify-center space-x-4">
        <a href="#contacto" className="bg-yellow-400 text-black px-8 py-3 rounded-md hover:bg-yellow-500">
          Solicitar Presupuesto
        </a>
        <a href="#servicios" className="border-2 border-white px-8 py-3 rounded-md hover:bg-white hover:text-black">
          Nuestros Servicios
        </a>
      </div>
    </div>
  );
};