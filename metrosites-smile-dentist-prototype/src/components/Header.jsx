import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Appointment", to: "/appointment" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-sky-50 shadow-md border-b border-blue-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
          >
            <Sparkles size={22} />
          </motion.div>
          <div>
            <motion.div
              whileHover={{ color: "#0284c7" }}
              className="text-lg font-semibold text-gray-800"
            >
              Smile Dentist
            </motion.div>
            <div className="text-sm text-gray-500">
              Dental Care & Cosmetic Dentistry
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <motion.div whileHover={{ y: -2 }} key={n.to}>
              <NavLink
                to={n.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-500"
                    : "text-gray-700 hover:text-sky-600 transition-colors duration-200"
                }
              >
                {n.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Contact Info + Menu Button */}
        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:flex flex-col text-right"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium flex items-center gap-1 text-gray-600">
              <Phone size={14} className="text-sky-500" /> Call us
            </span>
            <a href="tel:+1234567890" className="text-sm text-sky-600 hover:underline">
              +1 (234) 567-890
            </a>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-md bg-sky-100 text-sky-700"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="block py-2 text-gray-700 hover:text-sky-600 font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {n.name}
                </NavLink>
              ))}

              <div className="flex flex-col mt-4 gap-2 text-sm">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-700 hover:text-sky-600"
                >
                  <Phone size={16} className="text-sky-500" /> +1 (234) 567-890
                </a>
                <a
                  href="mailto:info@smiledentist.co.za"
                  className="flex items-center gap-2 text-gray-700 hover:text-sky-600"
                >
                  <Mail size={16} className="text-sky-500" /> info@smiledentist.co.za
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
