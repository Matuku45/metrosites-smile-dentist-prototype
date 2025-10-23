import React from "react";
import { Heart, Star, Smile, Activity, Zap } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Heart className="text-[#F5A623]" size={32} />, title: "Compassionate Care", desc: "We treat every patient with empathy and respect." },
    { icon: <Star className="text-[#4A90E2]" size={32} />, title: "Top Quality", desc: "Using advanced technology for precise dental treatments." },
    { icon: <Smile className="text-[#50E3C2]" size={32} />, title: "Friendly Staff", desc: "Our team makes you feel comfortable and welcome." },
    { icon: <Activity className="text-[#D0021B]" size={32} />, title: "Innovative Solutions", desc: "Modern procedures for optimal oral health." },
    { icon: <Zap className="text-[#F5A623]" size={32} />, title: "Fast & Efficient", desc: "Minimizing waiting time while ensuring quality." },
  ];

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-[#4A90E2] mb-4">About Smile Dentist</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        Smile Dentist is dedicated to delivering modern dental care with a personal touch.
        Our experienced team uses the latest technology to ensure you receive gentle, precise, and effective treatment.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="card bg-white shadow-lg p-6 hover:shadow-xl transition duration-300 rounded-lg">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
