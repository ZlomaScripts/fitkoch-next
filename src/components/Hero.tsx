"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight, Activity, Award, CheckCircle2 } from "lucide-react";
import Instagram from "./icons/InstagramIcon";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#0B0F19] bg-grid-pattern">
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F97316]/15 to-[#B4FF00]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Athletic Luxury Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Coach verification pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest uppercase"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B4FF00]"></span>
              </span>
              <span className="text-[#94A3B8]">OSOBNI TRENER & MENTOR:</span>
              <a
                href="https://www.instagram.com/fitkochivan?igsh=MTRjZ2t6ZHprdjBiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-1"
              >
                <span>IVAN KOCH</span>
                <Instagram className="w-3.5 h-3.5 text-[#F97316]" />
              </a>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-condensed font-black tracking-tight leading-[0.98] uppercase text-white"
            >
              Zaboravi na <span className="text-[#94A3B8] line-through decoration-[#F97316] decoration-4">generične planove</span>.<br />
              Tvoje tijelo zaslužuje <span className="text-gradient-primary">znanstveno vođeni</span> 1-on-1 coaching.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-regular max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Izgradnja vrhunske estetike i čiste mišićne mase bez kulinarskog mučenja, beskrajnog kardia i zabrane omiljene hrane. Prilagođeno tvom rasporedu s <strong className="text-white font-semibold">svakodnevnim nadzorom trenera Ivana Kocha</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#wizard"
                className="pro-btn-primary w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(249,115,22,0.45)] group"
              >
                <Zap className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span>ISPUNI UPITNIK ZA SURADNJU</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#calculator"
                className="pro-btn-outline w-full sm:w-auto px-6 py-4 text-base flex items-center justify-center gap-2"
              >
                <Activity className="w-5 h-5 text-[#B4FF00]" />
                <span>IZRAČUNAJ SVOJ POTENCIJAL</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-[#243350] max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-condensed font-extrabold text-2xl text-[#B4FF00]">98.4%</span>
                <span className="text-xs font-condensed tracking-wider text-[#94A3B8] uppercase">PROLAZNOST CILJA</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-condensed font-extrabold text-2xl text-white">0</span>
                <span className="text-xs font-condensed tracking-wider text-[#94A3B8] uppercase">GLADOVANJA & DIJETA</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-condensed font-extrabold text-2xl text-[#F97316]">24/7</span>
                <span className="text-xs font-condensed tracking-wider text-[#94A3B8] uppercase">DIREKTNI CHAT S TRENEROM</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Framing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316] via-[#B4FF00] to-[#F97316] rounded-2xl blur-lg opacity-30 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#243350] bg-[#131B2E] shadow-2xl aspect-[4/5]">
                <img
                  src="/assets/hero_coach.jpg"
                  alt="Trener Ivan Koch u luksuznom fitnes studiju"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                {/* Floating Badge 1: Coach Info */}
                <div className="absolute top-4 left-4 right-4 bg-[#131B2E]/90 backdrop-blur-md border border-[#243350] rounded-xl p-3 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] font-bold text-xs">
                      IK
                    </div>
                    <div>
                      <h4 className="text-sm font-condensed font-bold text-white uppercase leading-none">IVAN KOCH</h4>
                      <p className="text-[10px] font-condensed tracking-widest text-[#B4FF00] uppercase">1-ON-1 ONLINE TRENER</p>
                    </div>
                  </div>
                  <a
                    href="https://www.instagram.com/fitkochivan?igsh=MTRjZ2t6ZHprdjBiaQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#F97316] text-white hover:bg-[#FB923C] transition-colors"
                    title="Posjeti Instagram profil"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                {/* Floating Badge 2: Client Results Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#131B2E]/95 backdrop-blur-md border border-[#243350] rounded-xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-condensed tracking-widest text-[#B4FF00] uppercase flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B4FF00]" />
                      REZULTATI KLIJENATA
                    </span>
                    <span className="text-xs font-condensed text-[#94A3B8] uppercase">PROSJEK 12 TJEDANA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#243350]/60">
                    <div>
                      <span className="text-xs text-[#94A3B8] block">TOPLJENJE MASTI</span>
                      <span className="font-condensed font-black text-lg text-white">-8.4 kg <span className="text-xs text-[#B4FF00] font-normal">čistih masti</span></span>
                    </div>
                    <div>
                      <span className="text-xs text-[#94A3B8] block">MIŠIĆNI RAST</span>
                      <span className="font-condensed font-black text-lg text-white">+3.2 kg <span className="text-xs text-[#F97316] font-normal">čistog mišića</span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
