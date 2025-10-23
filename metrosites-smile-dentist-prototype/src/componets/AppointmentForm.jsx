import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  date: yup.date().required("Choose a date"),
  service: yup.string().required("Select a service"),
});

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Appointment:", data);
    alert("✅ Appointment requested — check console (prototype)");
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
        Book Your Appointment
      </h2>

      <div>
        <input
          {...register("name")}
          placeholder="Full name"
          className="input input-bordered w-full"
        />
        <p className="text-xs text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Phone or WhatsApp"
          className="input input-bordered w-full"
        />
        <p className="text-xs text-red-500">{errors.phone?.message}</p>
      </div>

      <div>
        <input
          type="date"
          {...register("date")}
          className="input input-bordered w-full"
        />
        <p className="text-xs text-red-500">{errors.date?.message}</p>
      </div>

      <div>
        <select {...register("service")} className="select select-bordered w-full">
          <option value="">Choose service</option>
          <option value="cleaning">Teeth Cleaning</option>
          <option value="whitening">Whitening</option>
          <option value="ortho">Orthodontics (Braces)</option>
          <option value="filling">Cavity Filling</option>
          <option value="checkup">General Check-up</option>
        </select>
        <p className="text-xs text-red-500">{errors.service?.message}</p>
      </div>

      <button
        type="submit"
        className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>
    </motion.form>
  );
}
