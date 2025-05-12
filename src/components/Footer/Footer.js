"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-8 dark:border-t dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <Link href="mailto:contact@himalayanrides.com">
                <span className="text-blue-500 hover:underline">
                  contact@himalayanrides.com
                </span>
              </Link>
            </p>
          </div>
          php-template Copy Edit
          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/himalayanrides">
                <span className="text-xl hover:text-blue-600 transition">
                  <i className="fab fa-facebook-f">FaceBook</i>
                </span>
              </Link>
              <Link href="https://instagram.com/himalayanrides">
                <span className="text-xl hover:text-blue-600 transition">
                  <i className="fab fa-instagram">Instagram</i>
                </span>
              </Link>
              <Link href="https://twitter.com/himalayanrides">
                <span className="text-xl hover:text-blue-600 transition">
                  <i className="fab fa-twitter">X</i>
                </span>
              </Link>
              <Link href="https://youtube.com/himalayanrides">
                <span className="text-xl hover:text-blue-600 transition">
                  <i className="fab fa-youtube">YouTube</i>
                </span>
              </Link>
            </div>{" "}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>
                      <span
                        className={`transition ${
                          isActive(href)
                            ? "text-blue-600 font-semibold"
                            : "hover:text-blue-500"
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Himalayan Rides. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
