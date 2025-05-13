"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const BookCabForm = ({ isOpen, onClose, requiredFields = [] }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    startDate: "",
    endDate: "",
    destination: "",
    pickup: "",
    dropoff: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      // Handle form submission logic here (e.g., API call)
      console.log("Form Data:", formData);
      onClose();
      // Optionally reset the form
      // setFormData({ ...initialFormData });
    }
  };

  const inputClass = `w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    theme === "dark" ? "bg-gray-700 text-gray-300 border-gray-600" : "bg-white text-gray-700 border-gray-300"
  }`;
  const labelClass = `${theme === "dark" ? "text-gray-300" : "text-gray-700"} block mb-1 font-semibold`;
  const errorClass = "text-red-500 text-sm mt-1";
  const buttonClass = `py-3 px-6 rounded-md font-semibold transition duration-300 focus:outline-none ${
    theme === "dark"
      ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
      : "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300"
  }`;
  const modalOverlayClass = "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-auto";
  const modalContentClass = `mt-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full relative`; // Adjusted mt-10
  const closeButtonClass = "absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 cursor-pointer";
  const formContentClass = "max-h-[calc(100vh - 100px)] overflow-y-auto scrollbar-hide mb-8"; // Added scrollbar-hide

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={modalOverlayClass}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={modalContentClass}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className={closeButtonClass}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M15.78 14.36a1 1 0 01-1.42 1.42L12 13.41l-2.36 2.37a1 1 0 01-1.42-1.42L10.59 12 8.22 9.64a1 1 0 011.42-1.42L12 10.59l2.36-2.37a1 1 0 011.42 1.42L13.41 12l2.37 2.36z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className={`${theme === "dark" ? "text-gray-300" : "text-gray-800"} text-2xl font-bold mb-6 text-center`}>
              Book Your Cab
            </h2>
            <div className={formContentClass}> {/* Scrollable content area with hidden scrollbar */}
              <div className="mb-4">
                <label htmlFor="name" className={labelClass}>
                  Name
                  {requiredFields.includes("name") && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={labelClass}>
                  Email
                  {requiredFields.includes("email") && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="number" className={labelClass}>
                  Phone Number
                  {requiredFields.includes("number") && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.number && <p className={errorClass}>{errors.number}</p>}
              </div>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className={labelClass}>
                    Start Date
                    {requiredFields.includes("startDate") && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.startDate && <p className={errorClass}>{errors.startDate}</p>}
                </div>
                <div>
                  <label htmlFor="endDate" className={labelClass}>
                    End Date
                    {requiredFields.includes("endDate") && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.endDate && <p className={errorClass}>{errors.endDate}</p>}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="destination" className={labelClass}>
                  Destination
                  {requiredFields.includes("destination") && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.destination && <p className={errorClass}>{errors.destination}</p>}
              </div>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickup" className={labelClass}>
                    Pickup Location
                    {requiredFields.includes("pickup") && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.pickup && <p className={errorClass}>{errors.pickup}</p>}
                </div>
                <div>
                  <label htmlFor="dropoff" className={labelClass}>
                    Drop-off Location
                    {requiredFields.includes("dropoff") && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id="dropoff"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.dropoff && <p className={errorClass}>{errors.dropoff}</p>}
                </div>
              </div>
              <div className="mb-8"> {/* Increased margin before buttons */}
                <label htmlFor="specialRequest" className={labelClass}>
                  Special Request
                </label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === "dark" ? "bg-gray-700 text-gray-300 border-gray-600" : "bg-white text-gray-700 border-gray-300"
                  } resize-none`}
                  rows="3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className={`mr-4 py-3 px-6 rounded-md font-semibold transition duration-300 focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-300"
              }`}>
                Cancel
              </button>
              <button type="submit" className={buttonClass}>
                Book Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookCabForm;