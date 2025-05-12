"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSelector from "../Buttons/ThemeSelector";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full bg-[var(--background)] text-[var(--foreground)] dark:border-b dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-semibold tracking-wide hover:opacity-80 transition">
                Himalayan Rides
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span
                  className={`transition ${
                    pathname === href
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500"
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Theme Selector */}
          <div className="hidden md:block">
            <ThemeSelector />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[var(--background)] border-t border-[var(--foreground)]">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span
                className={`block py-2 transition ${
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
          <div className="pt-2">
            <ThemeSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
