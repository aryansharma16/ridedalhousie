"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const metaTags = {
  businessName: "Himalayan Rides",
  websiteUrl: "https://www.himalayanrides.com",
  description:
    "Welcome to Himalayan Rides - providing the best taxi services and travel assistance in Dalhousie and Himachal Pradesh. Explore our travel packages and taxi services for a smooth journey in the scenic landscapes of HP.",
  keywords:
    "Dalhousie taxi service, Himachal Pradesh cab, travel Dalhousie HP, best taxi Dalhousie, HP sightseeing tour, Himalayan rides, taxi booking Dalhousie",
  ogImage: "/assets/og-image.jpg", // Assuming this image is in your public/assets folder
  googleReviews: "https://www.google.com/search?q=himalayan+rides+reviews",
  instagram: "https://instagram.com/himalayanrides",
  youtube: "https://youtube.com/himalayanrides",
  phone: "+91-9876543210",
};

const featuredDestinations = [
  {
    title: "Dalhousie",
    description:
      "Discover the colonial charm of Dalhousie, nestled amidst pine-clad valleys. Perfect for a serene getaway with stunning views of the Dhauladhar range.",
    highlights: ["Khajjiar - Mini Switzerland", "Dainkund Peak", "St. John's Church"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Manali",
    description:
      "A paradise for adventure lovers, Manali offers breathtaking views, thrilling activities, and a vibrant local culture.",
    highlights: ["Rohtang Pass", "Solang Valley", "Hidimba Temple"],
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Shimla",
    description:
      "The queen of hills, Shimla is known for its colonial architecture, bustling markets, and panoramic views of the Himalayas.",
    highlights: ["The Ridge", "Mall Road", "Jakhoo Temple"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
];

const ourFleet = [
  {
    name: "Sedan",
    description: "Ideal for small families or solo travelers. Comfortable and fuel-efficient.",
    capacity: "4 Passengers",
    price: "₹30/km",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "SUV",
    description: "Perfect for group travel or rugged terrains. Spacious and powerful.",
    capacity: "6 Passengers",
    price: "₹40/km",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Innova",
    description: "Great for family trips with extra space and luxury features.",
    capacity: "7 Passengers",
    price: "₹45/km",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tempo Traveller",
    description: "Best for large groups. Enjoy a hassle-free journey with ample space.",
    capacity: "12 Passengers",
    price: "₹60/km",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80",
  },
];

const customerTestimonials = [
  {
    name: "Rohit Sharma",
    review:
      "Himalayan Rides made our trip to Manali unforgettable! The driver was knowledgeable, and the car was in great condition.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    review:
      "We booked a sedan for our Shimla tour, and the experience was seamless. Highly recommend their services!",
    rating: 4.5,
  },
  {
    name: "Amit Verma",
    review:
      "The Tempo Traveller was perfect for our group of 10. The journey to Dalhousie was comfortable and enjoyable.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>{metaTags.businessName} - Taxi Service in Dalhousie & Himachal Pradesh</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content={metaTags.businessName} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Dalhousie, Himachal Pradesh" />
        <meta property="og:title" content={`${metaTags.businessName} - Taxi Service in Dalhousie & HP`} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.websiteUrl} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${metaTags.businessName} - Taxi Service in Dalhousie & HP`} />
        <meta name="twitter:description" content={metaTags.description} />
        <meta name="twitter:image" content={metaTags.ogImage} />
        <meta name="twitter:creator" content="@himalayanrides" />
        <meta name="phone" content={metaTags.phone} />
        <link rel="canonical" href={metaTags.websiteUrl} />
        <link rel="author" href="https://www.linkedin.com/company/himalayanrides" />
        <link rel="review" href={metaTags.googleReviews} />
      </Head>

      <div className="bg-[var(--background)] text-[var(--foreground)]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Welcome to Himalayan Rides!
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">
              Your trusted taxi service provider in Dalhousie and Himachal Pradesh.
              Explore the scenic landscapes of HP with our reliable travel packages and taxi services.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition transform hover:scale-105">
                Book Now
              </span>
            </Link>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore Top Destinations in Himachal Pradesh
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-48 object-cover"
                    width={600} // Specify the width of the image
                    height={48 * (600 / 800)} // Maintain aspect ratio, adjust if needed
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{destination.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {destination.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                      {destination.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <Link href={`/destinations/${destination.title.toLowerCase()}`}>
                      <span className="inline-block text-blue-500 hover:underline">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Fleet - Travel in Comfort
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourFleet.map((car, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden text-center transform hover:scale-105 transition duration-300"
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover"
                    width={600} // Specify the width of the image
                    height={40 * (600 / 800)} // Maintain aspect ratio, adjust if needed
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{car.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {car.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Capacity:</strong> {car.capacity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      <strong>Price:</strong> {car.price}
                    </p>
                    <Link href="/booking">
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Book This Car
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {customerTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;{testimonial.review}&quot;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-yellow-400">
                    {"★".repeat(Math.floor(testimonial.rating))}
                    {testimonial.rating % 1 !== 0 && "☆"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Himachal Pradesh?
            </h2>
            <p className="text-lg mb-8">
              Book your taxi with Himalayan Rides today and embark on a journey of a lifetime!
            </p>
            <Link href="/contact">
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition transform hover:scale-105">
                Get in Touch
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;