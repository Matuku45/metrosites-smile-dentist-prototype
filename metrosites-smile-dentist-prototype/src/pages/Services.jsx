import React from 'react';
import { Sparkles, Smile } from 'lucide-react';
import ServiceCard from '../componets/ServiceCard';

export default function Services() {
  const services = [
    { title: 'Teeth Cleaning', desc: 'Professional cleaning for healthy gums.', icon: <Sparkles size={28} /> },
    { title: 'Whitening', desc: 'Brighten your smile safely and effectively.', icon: <Smile size={28} /> },
    { title: 'Cosmetic Dentistry', desc: 'Enhance your smile\'s aesthetics.', icon: <Smile size={28} /> },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} icon={s.icon} />
        ))}
      </div>
    </div>
  );
}
