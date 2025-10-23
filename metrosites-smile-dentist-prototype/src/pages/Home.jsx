import React from "react";
import { motion } from "framer-motion";
import { SmilePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-blue-600 mb-4 flex justify-center items-center gap-2"
      >
        <SmilePlus size={48}/> Smile Dentist Clinic
      </motion.h1>
      <p className="text-gray-600 max-w-lg mx-auto mb-6">
        Modern dental care you can trust — your comfort, confidence, and smile are our top priorities.
      </p>
      <Link
        to="/appointment"
        className="btn btn-primary bg-gradient-to-r from-sky-400 to-blue-600 border-none"
      >
        Book Appointment
      </Link>
    </div>
  );
}
