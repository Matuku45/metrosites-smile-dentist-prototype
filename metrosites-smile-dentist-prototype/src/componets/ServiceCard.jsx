import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="card bg-base-100 shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 text-primary p-3 rounded-full">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-1">{title}</h4>
          <p className="text-sm text-gray-600 leading-snug">{desc}</p>
        </div>
      </div>
    </motion.article>
  );
}
