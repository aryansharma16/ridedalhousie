"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion"; // Import motion

const metaTags = {
  businessName: "Himalayan Rides",
  description:
    "Premium taxi services, guided tours, and hotel arrangements in Dalhousie & Himachal Pradesh. Experience the Himalayas with comfort and style.",
  keywords:
    "Dalhousie taxi, Himachal tours, hotel booking, travel guide, Himalayan rides",
  websiteUrl: "https://himalayanrides.com",
  ogImage: "https://himalayanrides.com/og-image.jpg",
  phone: "+91 9876543210",
  googleReviews: "https://g.page/himalayanrides/review",
};

const Home = () => {
  const { theme } = useTheme();

  const services = [
    {
      title: "Taxi Services",
      description: "Reliable and comfortable rides across Himachal Pradesh",
      icon: "🚖",
    },
    {
      title: "Guided Tours",
      description: "Expert local guides for unforgettable experiences",
      icon: "🗺️",
    },
    {
      title: "Hotel Arrangements",
      description: "Best stays tailored to your preferences",
      icon: "🏨",
    },
    {
      title: "Custom Packages",
      description: "Personalized itineraries for your perfect trip",
      icon: "🎯",
    },
  ];

  const destinations = [
    { name: "Dalhousie", image: "/citiesImages/dalhousie_khajiyar.jpg" },
    { name: "Dharamshala", image: "/citiesImages/dharmashala1.jpg" },
    { name: "Manali", image: "/citiesImages/manali2.jpg" },
    { name: "Shimla", image: "/citiesImages/shimla2.jpg" },
  ];
  const fleet = [
    {
      name: "Swift Dzire",
      type: "Sedan",
      capacity: "4 passengers",
      features: ["AC", "Comfortable seats", "Ample luggage space"],
      image: "/cars/dizire.jpg",
      price: "₹12/km",
    },
    {
      name: "Toyota Innova Crysta",
      type: "MPV",
      capacity: "7 passengers",
      features: ["Premium AC", "Spacious interior", "Extra luggage space"],
      image: "/cars/innova.jpg",
      price: "₹18/km",
    },
    {
      name: "Toyota Etios",
      type: "Sedan",
      capacity: "4 passengers",
      features: ["AC", "Fuel efficient", "Smooth ride"],
      image: "/cars/etios.jpg",
      price: "₹14/km",
    },
    {
      name: "Brezza",
      type: "Sedan",
      capacity: "4 passengers",
      features: ["AC", "Spacious interior", "Great mileage"],
      image: "/cars/brezza2017.jpg",
      price: "₹13/km",
    },
  ];
  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Delhi, India",
      rating: 5,
      comment:
        "The best travel experience in Himachal! The guides were knowledgeable and the taxi service was always on time. Highly recommended!",
      avatar: "/profiles/profile1.jpg", // Optional if you have images
    },
    {
      name: "Sneha Verma",
      location: "Mumbai, India",
      rating: 5,
      comment:
        "Smooth booking, friendly driver, and amazing hotel arrangements. Will definitely book again!",
      avatar: "/profiles/profile2.jpg",
    },
    {
      name: "John Peterson",
      location: "London, UK",
      rating: 4,
      comment:
        "Fantastic views and a safe, reliable ride through the mountains. A memorable journey.",
      avatar: "/profiles/profile1.jpg",
    },
  ];

  return (
    <>
  <Head>
        <title>
          {metaTags.businessName} - Taxi Service in Dalhousie & Himachal Pradesh
        </title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content={metaTags.businessName} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Dalhousie, Himachal Pradesh" />

        <meta property="og:description" content={metaTags.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.websiteUrl} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:description" content={metaTags.description} />
        <meta name="twitter:image" content={metaTags.ogImage} />
        <meta name="twitter:creator" content="@himalayanrides" />
        <meta name="phone" content={metaTags.phone} />
        <link rel="canonical" href={metaTags.websiteUrl} />
        <link rel="author" href="[suspicious link removed]" />
        <link rel="review" href={metaTags.googleReviews} />
      </Head>

      {/* Hero Section */}
      <motion.section
        className={`relative h-screen flex items-center justify-center bg-cover bg-center ${
          theme === "dark" ? "bg-gray-900" : "bg-blue-50"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            Explore the Himalayas with Ease
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Premium taxi services, guided tours, and hotel arrangements in
            Dalhousie &amp; Himachal Pradesh
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We offer comprehensive travel solutions to make your Himalayan
              journey unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-blue-50"
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Our Fleet Section */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-blue-50"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Premium Fleet</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Well-maintained vehicles for comfortable and safe journeys in the
              Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        theme === "dark"
                          ? "bg-blue-900 text-blue-100"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {vehicle.type}
                    </span>
                  </div>
                  <p
                    className={`mb-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <strong>Capacity:</strong> {vehicle.capacity}
                  </p>
                  <ul className="mb-4 space-y-1">
                    {vehicle.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span className="mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`mt-4 p-3 rounded-lg text-center font-bold ${
                      theme === "dark"
                        ? "bg-gray-700 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    Starting at {vehicle.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Popular Destinations */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-blue-50"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore the breathtaking beauty of Himachal Pradesh with our
              curated destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">
                    {destination.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Hear from travelers who&apos;ve experienced our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <p
                  className={`mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  &quot;{review.comment}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    {review.avatar ? (
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-blue-900" : "bg-blue-600"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready for Your Himalayan Adventure?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contact us now to plan your perfect trip with our expert team
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href={`tel:${metaTags.phone}`}
              className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition duration-300"
            >
              Call Now
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
