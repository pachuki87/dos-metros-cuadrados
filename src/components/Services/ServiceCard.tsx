import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};