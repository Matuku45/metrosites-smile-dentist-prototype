import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Header from "./componets/Header"; // Import Header component
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100 text-neutral flex flex-col">
        {/* Header / Navbar */}
        <Header /> {/* Place Header here */}
        
        {/* Main Routes */}
        <main className="flex-grow p-6 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-neutral text-base-100 text-center p-4">
          <p>© {new Date().getFullYear()} Smile Dentist — All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
