"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import Instagram from "./icons/InstagramIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Metodologija", href: "#o-metodi" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Transformacije", href: "#transformacije" },
    { name: "Aplikacija", href: "#aplikacija" },
    { name: "Paketi", href: "#paketi" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-2xl shadow-black/80 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter group"
        >
          <span className="w-3 h-3 rounded-full bg-[#b4ff00] animate-pulse shadow-[0_0_12px_#b4ff00]" />
          <span className="font-syne text-white tracking-wider">
            FIT<span className="text-[#b4ff00]">KOCH</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#b4ff00] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/fitkochivan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:border-[#b4ff00]/50"
          >
            <Instagram className="w-4 h-4 text-[#b4ff00]" />
            @fitkochivan
          </a>
          <a
            href="#upitnik"
            className="btn-lime px-5 py-2.5 rounded-full text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(180,255,0,0.25)] hover:shadow-[0_0_30px_rgba(180,255,0,0.45)]"
          >
            <Zap className="w-4 h-4 fill-black" />
            Započni Transformaciju
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#b4ff00]"
          aria-label="Otvori izbornik"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-white/10 overflow-hidden px-6 py-6 space-y-4"
          >
            <ul className="space-y-3 font-medium text-gray-200">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#b4ff00] border-b border-white/5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/fitkochivan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white"
              >
                <Instagram className="w-4 h-4 text-[#b4ff00]" />
                Prati na Instagramu (@fitkochivan)
              </a>
              <a
                href="#upitnik"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-lime w-full py-3 rounded-full text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-black" />
                Započni Transformaciju
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
