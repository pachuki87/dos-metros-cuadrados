import React from 'react';
import { CheckCircle, Star, Clock, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  { Icon: CheckCircle, text: 'Profesionales cualificados' },
  { Icon: Star, text: 'Calidad garantizada' },
  { Icon: Clock, text: 'Puntualidad' },
  { Icon: Shield, text: 'Trabajo asegurado' }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};