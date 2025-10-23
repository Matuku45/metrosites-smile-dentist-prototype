import React from "react";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointment() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Book Appointment
      </h1>
      <AppointmentForm />
    </div>
  );
}
