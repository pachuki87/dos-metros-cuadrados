import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Contacta con nosotros</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-yellow-400" />
          <a href="tel:606664873">606 66 48 73</a>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-yellow-400" />
          <a href="mailto:Kirino7@live.com">Kirino7@live.com</a>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-yellow-400" />
          <span>Valencia y alrededores</span>
        </div>
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};