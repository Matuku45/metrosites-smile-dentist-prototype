import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <div className="space-y-3 text-gray-700">
        <p className="flex items-center justify-center gap-2"><Phone /> +27 11 123 4567</p>
        <p className="flex items-center justify-center gap-2"><Mail /> info@smiledentist.co.za</p>
        <p className="flex items-center justify-center gap-2"><MapPin /> 22 Rose Ave, Sandton</p>
      </div>
    </div>
  );
}
