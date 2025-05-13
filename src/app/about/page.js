"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

const metaTags = {
  businessName: "Himalayan Rides",
  driverName: "Raj Sharma",
  websiteUrl: "https://himalayanrides.com",
  description:
    "Reliable taxi services and travel guidance in Dalhousie and Himachal Pradesh. Book a cab with Himalayan Rides for local sightseeing and HP adventures.",
  keywords:
    "taxi service Dalhousie, Himachal Pradesh taxi, travel guide HP, book taxi Dalhousie, HP travel destinations, affordable cab service",
  ogImage: "https://himalayanrides.com/og-image.jpg",
  googleReviews: "https://g.page/himalayanrides/review",
  instagram: "https://instagram.com/himalayanrides",
  youtube: "https://youtube.com/himalayanrides",
  phone: "+91 9876543210",
};

const AboutPage = () => {
  const { theme } = useTheme();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Raj Sharma",
      role: "Founder & Lead Driver",
      bio: "With 15+ years of experience navigating Himalayan roads, Raj knows every turn and viewpoint in Himachal.",
      image: "/profiles/profile2.jpg",
    },
    {
      name: "Priya Singh",
      role: "Tour Guide",
      bio: "Certified travel guide specializing in Himachal's culture, history, and hidden gems.",
      image: "/profiles/profile1.jpg",
    },
    {
      name: "Vikram Patel",
      role: "Customer Support",
      bio: "Ensures your journey is smooth from booking to drop-off with 24/7 assistance.",
      image: "/profiles/profile2.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "The most reliable service in Himachal! Raj knew all the best viewpoints we would have missed otherwise.",
      author: "Ananya Gupta, Delhi",
    },
    {
      quote:
        "Our family felt completely safe throughout our week-long trip. The vehicles are impeccably maintained.",
      author: "The Mehta Family, Mumbai",
    },
    {
      quote:
        "Priya's knowledge of local history transformed our trip from good to unforgettable!",
      author: "David & Sarah, UK",
    },
  ];

  const faqs = [
    {
      question: "How do I book your taxi services?",
      answer:
        "You can book through our website, WhatsApp (+91 9876543210), or call us directly. We recommend booking at least 3 days in advance during peak season.",
    },
    {
      question: "What safety measures do you have?",
      answer:
        "All vehicles undergo daily safety checks. Drivers are trained in mountain driving and first aid. We provide 24/7 support during your trip.",
    },
    {
      question: "Can you customize tour packages?",
      answer:
        "Absolutely! We specialize in creating personalized itineraries based on your interests, duration, and budget.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, credit/debit cards, bank transfers, and cash. A 20% advance is required for bookings.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  const faqVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Head>
        <title>
          About Us - {metaTags.businessName} Taxi Service in Dalhousie & HP
        </title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content={metaTags.businessName} />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`About Us - ${metaTags.businessName} Taxi Service in Dalhousie & HP`}
        />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.websiteUrl} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`About Us - ${metaTags.businessName} Taxi Service in Dalhousie & HP`}
        />
        <meta name="twitter:description" content={metaTags.description} />
        <meta name="twitter:image" content={metaTags.ogImage} />
        <meta name="phone" content={metaTags.phone} />
        <link rel="canonical" href={metaTags.websiteUrl} />
      </Head>

      {/* Hero Section */}
      <motion.section
        className={`relative h-96 flex items-center justify-center ${
          theme === "dark" ? "bg-gray-900" : "bg-blue-50"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Himalayan Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Trusted taxi services in Dalhousie and HP with experienced drivers
            and scenic travel options
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            variants={itemVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Himalayan Rides?
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Founded in 2010 by Raj Sharma, Himalayan Rides began with a single
              taxi and a passion for sharing the beauty of Himachal Pradesh.
              Today, we're a team of 12 dedicated professionals serving over
              5,000 happy customers annually.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛣️",
                title: "250,000+ km",
                text: "Collectively driven on Himalayan roads",
              },
              {
                icon: "⭐",
                title: "4.9/5 Rating",
                text: "Based on 1,200+ customer reviews",
              },
              {
                icon: "🏔️",
                title: "50+ Locations",
                text: "Covered across Himachal Pradesh",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index + 1}
                className={`p-6 rounded-lg text-center ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-blue-50"}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The passionate professionals who make your Himalayan journey
              unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p
                    className={`mb-3 ${
                      theme === "dark" ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {member.role}
                  </p>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Slider */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold mb-4">Traveler Stories</h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Hear from those who've explored Himachal with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-hidden">
            <motion.div className="relative">
              <motion.div className="flex overflow-x-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={testimonialVariants}
                    custom={index}
                    className={`min-w-[calc(100%-1rem)] sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.33%-1rem)] mx-2 p-8 rounded-lg ${
                      theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                    }`}
                  >
                    <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                    <p
                      className={`text-lg italic mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      "{testimonial.quote}"
                    </p>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      — {testimonial.author}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Accordion */}
      <motion.section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-blue-50"}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Everything you need to know about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`mb-4 rounded-lg overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow-md`}
                variants={itemVariants}
                custom={index + 1}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-4 text-left flex justify-between items-center ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-blue-100"
                  }`}
                >
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <span className="text-xl">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  className="overflow-hidden"
                  variants={faqVariants}
                  initial="closed"
                  animate={activeAccordion === index ? "open" : "closed"}
                >
                  <div
                    className={`p-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to Explore Himachal?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us to plan your perfect Himalayan adventure
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href={`tel:${metaTags.phone}`}
              className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition duration-300"
            >
              Call {metaTags.driverName}
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;
