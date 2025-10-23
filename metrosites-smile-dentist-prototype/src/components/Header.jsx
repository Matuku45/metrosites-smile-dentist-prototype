import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import React from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Appointment", path: "/appointment" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#4A90E2]">🦷</span>
          <span className="font-bold text-gray-800">Smile Dentist</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-[#4A90E2] font-semibold" : "text-gray-700 hover:text-[#4A90E2]"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/appointment"
          className="hidden md:inline-block bg-[#4A90E2] text-white px-4 py-2 rounded hover:bg-[#357ABD]"
        >
          Book an Appointment
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-[#4A90E2] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/appointment"
              className="bg-[#4A90E2] text-white px-4 py-2 rounded mt-2 block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book an Appointment
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
