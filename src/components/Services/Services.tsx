import React from 'react';
import { Paintbrush, Home, Wrench } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    Icon: Paintbrush,
    title: 'Pintura',
    description: 'Servicios profesionales de pintura interior y exterior con acabados de primera calidad.'
  },
  {
    Icon: Home,
    title: 'Reformas Integrales',
    description: 'Renovación completa de viviendas, locales comerciales y espacios industriales.'
  },
  {
    Icon: Wrench,
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento y reparaciones para mantener su propiedad en perfecto estado.'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};