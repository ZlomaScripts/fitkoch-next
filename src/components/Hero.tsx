"use client";

import React from "react";
import Image from "next/image";
import { Flame, Calculator, ArrowRight, CheckCircle2, Trophy, ShieldAlert } from "lucide-react";
import Instagram from "./icons/InstagramIcon";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0B0F19]">
      {/* High-Energy Geometric Background Grids & Glows */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-[#F97316]/15 via-[#B4FF00]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#22C55E]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* High-Energy Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#162032] border border-[#F97316]/50 text-[#F97316] text-xs sm:text-sm font-bold uppercase tracking-wider font-display shadow-[0_0_25px_rgba(249,115,22,0.2)]">
            <Flame className="w-4 h-4 fill-[#F97316]" />
            <span>1-ON-1 ONLINE COACHING PRO MAX • TRENER IVAN KOCH</span>
          </div>

          {/* Impact Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-white font-display uppercase">
            NE TRAŽI <span className="text-gradient-orange underline decoration-[#B4FF00] decoration-4 underline-offset-8">ISPRIKE.</span> IZGRADI TIJELO ZA CIJELI ŽIVOT.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
            Dobrodošli u <strong className="text-white font-bold">FitKoch</strong> — ekskluzivni sustav mentorstva pod vodstvom trenera <strong className="text-[#F97316] font-bold">Ivana Kocha</strong>. Zaboravi na generične planove i izgladnjivanje. Dobivaš <span className="text-[#B4FF00] font-semibold">100% prilagođen trening</span>, preciznu prehranu i svakodnevnu podršku za zajamčen napredak bez kulinarskog mučenja.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#upitnik"
              className="btn-orange w-full sm:w-auto px-8 py-4 rounded-2xl text-base flex items-center justify-center gap-3 group"
            >
              <span>Ispuni FitKoch Upitnik</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kalkulator"
              className="btn-outline-block w-full sm:w-auto px-8 py-4 rounded-2xl text-base flex items-center justify-center gap-2.5"
            >
              <Calculator className="w-5 h-5 text-[#B4FF00]" />
              <span>Izračunaj Svoj Cilj</span>
            </a>
          </div>

          {/* Key Trust Pillars */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-[#162032]/80 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display uppercase">500+ Klijenta</div>
                <div className="text-xs text-slate-400">Verificirane transformacije</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#162032]/80 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B4FF00]/15 border border-[#B4FF00]/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#B4FF00]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display uppercase">98% Uspješnost</div>
                <div className="text-xs text-slate-400">Jamstvo na rezultat</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#162032]/80 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display uppercase">24/7 Podrška</div>
                <div className="text-xs text-slate-400">Dnevni video i chat</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Coach Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#F97316]/40 bg-[#162032] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            {/* Top Brand Tag */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-bold font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B4FF00] animate-ping" />
              <span>Glavni Trener & Mentor</span>
            </div>

            {/* Coach Image */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/hero_coach.jpg"
                alt="Trener Ivan Koch u luksuznoj teretani"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-85" />
            </div>

            {/* Floating Card Footer */}
            <div className="absolute bottom-6 left-6 right-6 block-card-active rounded-2xl p-5 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center font-display font-black text-white text-xl shadow-md shrink-0">
                  IK
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-display tracking-wide leading-tight uppercase">Ivan Koch</h4>
                  <p className="text-xs text-[#B4FF00] font-semibold">@fitkochivan • 1-on-1 Stručnjak</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/fitkochivan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-white text-white hover:text-black font-display text-xs font-bold uppercase transition-all shadow-md shrink-0"
              >
                <Instagram className="w-4 h-4" />
                <span>IG Profil</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
