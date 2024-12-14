import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};