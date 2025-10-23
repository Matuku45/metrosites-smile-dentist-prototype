import React from 'react';
import { Sparkles, Smile } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Teeth Cleaning',
      desc: 'Professional cleaning for healthy gums.',
      icon: <Smile size={28} />,
    },
    {
      title: 'Whitening',
      desc: 'Brighten your smile safely and effectively.',
      icon: <Sparkles size={28} />,
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Enhance your smile’s aesthetics.',
      icon: <Smile size={28} />,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
