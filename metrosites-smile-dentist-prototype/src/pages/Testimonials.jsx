import React from "react";
import TestimonialCard from "../componets/TestimonialCard";

export default function Testimonials() {
  // Sample testimonial data
  const testimonials = [
    { name: "Alice M", text: "Friendly staff and excellent care." },
    { name: "B. Khumalo", text: "Great service, highly recommend!" },
    { name: "David L", text: "Professional and gentle dentist." },
    { name: "Samantha T", text: "My teeth have never looked better!" },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        What Our Patients Say
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} text={t.text} />
        ))}
      </div>
    </div>
  );
}
