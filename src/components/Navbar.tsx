"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Zap, ShieldCheck } from "lucide-react";
import Instagram from "./icons/InstagramIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "METODOLOGIJA", href: "#methodology" },
    { name: "REZULTATI", href: "#transformations" },
    { name: "KALKULATOR", href: "#calculator" },
    { name: "APLIKACIJA", href: "#app" },
    { name: "PAKETI", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Notification Bar */}
      <div className="bg-[#131B2E] border-b border-[#243350] px-4 py-2 text-center text-xs font-condensed tracking-wider uppercase flex items-center justify-center gap-2 text-white">
        <span className="inline-block w-2 h-2 rounded-full bg-[#B4FF00] animate-pulse"></span>
        <span className="font-bold text-[#B4FF00]">UPIS U TIJEKU:</span>
        <span className="text-slate-300">Preostala još samo 3 ekskluzivna 1-on-1 mjesta za ovu sezonu s trenerom Ivanom Kochom</span>
        <a 
          href="#wizard" 
          className="ml-2 text-[#F97316] underline hover:text-[#FB923C] font-bold hidden sm:inline"
        >
          Prijavi se odmah →
        </a>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#243350] shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0B0F19] font-condensed font-black text-2xl shadow-[0_0_20px_rgba(249,115,22,0.5)] group-hover:scale-105 transition-transform">
              FK
            </div>
            <div className="flex flex-col">
              <span className="font-condensed font-black text-2xl tracking-tighter text-white leading-none">
                FIT<span className="text-[#F97316]">KOCH</span>
              </span>
              <span className="text-[10px] font-condensed tracking-[0.2em] text-[#94A3B8] uppercase">
                1-on-1 Pro Max Coaching
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-condensed font-bold text-sm text-[#94A3B8] hover:text-[#F97316] tracking-widest transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/fitkochivan?igsh=MTRjZ2t6ZHprdjBiaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131B2E] border border-[#243350] text-[#94A3B8] hover:text-white hover:border-[#F97316] transition-all text-xs font-condensed tracking-wider uppercase"
            >
              <Instagram className="w-3.5 h-3.5 text-[#F97316]" />
              <span>@fitkochivan</span>
            </a>

            <a
              href="#wizard"
              className="pro-btn-primary px-5 py-2 text-sm flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>ZAPOČNI SURADNJU</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#wizard"
              className="pro-btn-primary px-3 py-1.5 text-xs flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>PRIJAVA</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#131B2E] border border-[#243350] text-[#F8FAFC] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#F97316]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0B0F19]/95 border-b border-[#243350] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-condensed font-bold text-lg text-[#F8FAFC] hover:text-[#F97316] tracking-wider py-2 border-b border-[#243350]/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/fitkochivan?igsh=MTRjZ2t6ZHprdjBiaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#131B2E] border border-[#243350] text-[#F8FAFC] font-condensed uppercase tracking-wider text-sm"
                >
                  <Instagram className="w-4 h-4 text-[#F97316]" />
                  <span>Prati @fitkochivan na Instagramu</span>
                </a>
                <a
                  href="#wizard"
                  onClick={() => setIsOpen(false)}
                  className="pro-btn-primary w-full py-3 text-center text-base block flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>ZAPOČNI TRANSFORMACIJU</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
