import React from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({ name, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="card p-5 bg-base-100 shadow-md rounded-2xl border border-gray-100 hover:shadow-lg cursor-pointer"
    >
      <p className="text-gray-700 italic leading-relaxed">“{text}”</p>
      <div className="mt-4 text-sm font-semibold text-gray-900">— {name}</div>
    </motion.div>
  );
}
