"use client";

import React from "react";
import Image from "next/image";
import { Flame, CheckCircle, Calculator, ArrowRight } from "lucide-react";
import Instagram from "./icons/InstagramIcon";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b4ff00]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#10b981]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111413] border border-[#b4ff00]/40 text-[#b4ff00] text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(180,255,0,0.15)]">
            <Flame className="w-4 h-4 fill-[#b4ff00]" />
            1-ON-1 ONLINE COACHING PRO MAX
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
            NE TRAŽI <span className="text-gradient-lime">ISPRIKE.</span> IZGRADI TIJELO ZA CIJELI ŽIVOT.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Dobrodošli u <strong className="text-white font-semibold">FitKoch</strong> — ekskluzivni program mentorstva pod vodstvom trenera <strong className="text-[#b4ff00] font-semibold">Ivana Kocha</strong>. Zaboravi na generične planove i izgladnjivanje. Dobivaš 100% prilagođen trening, preciznu prehranu i svakodnevnu stručnu podršku za zajamčenu transformaciju.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#upitnik"
              className="btn-lime w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-3 group shadow-xl"
            >
              <span>Ispuni FitKoch Upitnik</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kalkulator"
              className="btn-glass w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5 text-[#b4ff00]" />
              <span>Izračunaj Svoj Cilj</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-syne">500+</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Transformiranih Klijenta</div>
            </div>
            <div className="text-center lg:text-left border-l border-white/10 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#b4ff00] font-syne">98%</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Stopa Uspješnosti</div>
            </div>
            <div className="text-center lg:text-left border-l border-white/10 pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-syne">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Stalna Podrška</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-white/15 bg-[#111413] shadow-2xl shadow-black/80 group">
            {/* Main Coach Image */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/hero_coach.jpg"
                alt="Trener Ivan Koch u luksuznoj teretani"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 glass-card-lime rounded-2xl p-4 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b4ff00] to-[#10b981] flex items-center justify-center font-extrabold text-black font-syne text-lg shadow-md">
                  IK
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">Ivan Koch</h4>
                  <p className="text-xs text-gray-300">Glavni Trener & Mentor</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/fitkochivan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#b4ff00] text-black text-xs font-bold hover:bg-white transition-colors shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Prati na IG</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
