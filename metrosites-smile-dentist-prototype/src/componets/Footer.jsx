import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#50E3C2] text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="text-3xl font-bold">🦷</span>
            <span className="font-bold text-white">Smile Dentist</span>
          </div>
          <p>Your Smile, Our Priority</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link to="/appointment" className="hover:underline">Appointment</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-2">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
          <p>Phone: +27 12 345 6789</p>
          <p>Email: info@smiledentist.co.za</p>
        </div>
      </div>
      <p className="text-center text-white/80 mt-8">&copy; 2025 Smile Dentist. All Rights Reserved.</p>
    </footer>
  );
}
