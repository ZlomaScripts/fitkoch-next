"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, Flame } from "lucide-react";
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
          ? "bg-[#0B0F19]/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold tracking-tighter group font-display"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]">
            <Flame className="w-5 h-5 fill-white" />
          </div>
          <span className="text-white tracking-wider uppercase">
            FIT<span className="text-[#F97316]">KOCH</span>
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#B4FF00] font-mono tracking-normal font-bold">
            PRO MAX
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-300 font-display">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#F97316] transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/fitkochivan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:border-[#F97316]/50 font-display tracking-wider"
          >
            <Instagram className="w-4 h-4 text-[#F97316]" />
            @fitkochivan
          </a>
          <a
            href="#upitnik"
            className="btn-orange px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-lg"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Započni Transformaciju</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#F97316] transition-colors"
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
            className="lg:hidden bg-[#162032] border-b border-white/10 overflow-hidden px-6 py-6 space-y-4 shadow-2xl"
          >
            <ul className="space-y-3 font-display font-bold uppercase tracking-wider text-slate-200">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F97316] border-b border-white/5 text-base"
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
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold uppercase bg-white/5 border border-white/10 text-white font-display tracking-wider"
              >
                <Instagram className="w-4 h-4 text-[#F97316]" />
                Prati na Instagramu (@fitkochivan)
              </a>
              <a
                href="#upitnik"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-orange w-full py-3.5 rounded-xl text-center text-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Započni Transformaciju Odmah</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
