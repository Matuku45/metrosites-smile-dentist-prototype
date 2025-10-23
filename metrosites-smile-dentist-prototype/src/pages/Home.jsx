import { motion } from "framer-motion";
import { ShoppingCart, Star, Tag } from "lucide-react";
import React from "react";
export default function Home() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/hero-dentist.jpg')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Welcome to Smile Dentist
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl mb-6 drop-shadow-md"
        >
          Providing top-notch dental care with a personal touch.
        </motion.p>
        <motion.a
          href="/appointment"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="bg-[#4A90E2] px-6 py-3 rounded text-white font-semibold hover:bg-[#357ABD]"
        >
          Schedule Your Visit
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <Star size={36} className="mx-auto text-[#50E3C2] mb-4" />
            <h3 className="text-xl font-semibold mb-2">General Dentistry</h3>
            <p className="text-gray-600">Routine check-ups, cleaning, and oral care.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <Tag size={36} className="mx-auto text-[#F5A623] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cosmetic Dentistry</h3>
            <p className="text-gray-600">Whitening, veneers, and smile makeovers.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <ShoppingCart size={36} className="mx-auto text-[#D0021B] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Orthodontics</h3>
            <p className="text-gray-600">Braces and aligners for a perfect smile.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Patients Say</h2>
        <div className="max-w-4xl mx-auto">
          {/* You can integrate a carousel here */}
          <p className="text-gray-600 italic mb-4">"The best dental experience I've ever had!" – Jane D.</p>
          <p className="text-gray-600 italic mb-4">"Friendly staff and excellent care." – Mark S.</p>
          <a
            href="/testimonials"
            className="text-[#4A90E2] font-semibold hover:underline"
          >
            Read More Testimonials
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#50E3C2] py-12 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>Phone: +27 12 345 6789 | Email: info@smiledentist.co.za</p>
        <p>Address: 123 Smile Street, Cape Town, South Africa</p>
      </section>
    </div>
  );
}
