import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  text: string;
}

export const FeatureCard = ({ Icon, text }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-8 h-8 text-yellow-400" />
      <p className="mt-4 font-semibold">{text}</p>
    </div>
  );
};