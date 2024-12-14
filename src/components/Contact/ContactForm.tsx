import React from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
      />
      <input
        type="tel"
        placeholder="Teléfono"
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
      />
      <textarea
        placeholder="Mensaje"
        rows={4}
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
      ></textarea>
      <button className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500">
        Enviar mensaje
      </button>
    </form>
  );
};