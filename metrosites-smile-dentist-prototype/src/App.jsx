import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100 text-neutral flex flex-col">
        {/* Header / Navbar */}
        <header className="navbar bg-primary text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold tracking-wide">Smile Dentist</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:text-secondary">Home</Link>
              <Link to="/about" className="hover:text-secondary">About</Link>
              <Link to="/services" className="hover:text-secondary">Services</Link>
              <Link to="/testimonials" className="hover:text-secondary">Testimonials</Link>
              <Link to="/appointment" className="hover:text-secondary">Book</Link>
              <Link to="/contact" className="hover:text-secondary">Contact</Link>
            </nav>
          </div>
        </header>

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
