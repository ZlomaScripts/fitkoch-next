"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Video, Utensils, MessageSquare, Activity, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function AppShowcase() {
  const features = [
    {
      title: "4K VIDEO DEMONSTRACIJE VJEŽBI",
      desc: "Nema pogađanja forme u teretani. Svaka vježba ima jasan video Ivana Kocha s uputama za pravilno disanje i aktivaciju mišića.",
      icon: Video,
    },
    {
      title: "INTEGRIRANI MAKRO TRACKER & RECEPTI",
      desc: "Jednostavno unosi obroke ili odaberi iz baze brzih receptura prilagođenih tvom dnevnom unosu proteina i kalorija.",
      icon: Utensils,
    },
    {
      title: "DIREKTAN CHAT S TRENEROM 24/7",
      desc: "Imaš dvojbu u restoranu ili trebaš zamjenu vježbe na treningu? Pošalji poruku ili snimku i Ivan ti odgovara direktno.",
      icon: MessageSquare,
    },
    {
      title: "GRAFIČKI PRIKAZ PROGRESA & MJERA",
      desc: "Prati pad tjelesne težine, opseg struka, slike prije i poslije te napredak u opterećenjima na benchu, čučnju i deadliftu.",
      icon: Activity,
    },
  ];

  return (
    <section id="app" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Cyber Lime Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#B4FF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: App Visual & Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Outer Cyber Framing Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B4FF00] to-[#F97316] rounded-3xl blur-xl opacity-25 animate-pulse" />
              
              {/* Phone Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#243350] bg-[#131B2E] shadow-[0_20px_60px_rgba(0,0,0,0.8)] aspect-[9/16]">
                <img
                  src="/assets/app_dashboard.jpg"
                  alt="FitKoch Mobilna Aplikacija Sučelje"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay Badge Bottom */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F19]/95 backdrop-blur-md border border-[#B4FF00] rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B4FF00] flex items-center justify-center text-[#0B0F19]">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-condensed tracking-widest text-[#B4FF00] uppercase block font-bold">
                        DOSTUPNO ZA iOS & ANDROID
                      </span>
                      <h4 className="font-condensed font-black text-base text-white uppercase">
                        VLASTITA FITKOCH PLATFORMA
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification pill */}
              <div className="absolute top-8 -right-4 sm:-right-8 bg-[#131B2E] border border-[#F97316] rounded-xl p-3 shadow-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                <span className="text-xs font-condensed tracking-wider text-white uppercase font-bold">
                  ⚡ PORUKA OD TRENERA: "Oduzeo sam 100 kcal za brži cut!"
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Features & Narrative */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest text-[#B4FF00] uppercase mb-4">
                <Smartphone className="w-4 h-4 text-[#B4FF00]" />
                <span>EKSKLUZIVNI ALAT ZA KLIJENTE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-condensed font-black tracking-tight uppercase text-white mb-4">
                TVOJ OSOBNI TRENER U <span className="text-gradient-cyber">TVOM DŽEPU 24/7</span>
              </h2>
              <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                Kao klijent FitKocha ne dobivaš običan PDF u mailu. Dobivaš potpunu integraciju s našom modernom mobilnom aplikacijom u kojoj je svaki tvoj trening, obrok i napredak nadziran od strane Ivana Kocha.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="pro-card p-5 hover:border-[#B4FF00] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#B4FF00]/15 border border-[#B4FF00] flex items-center justify-center text-[#B4FF00] mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-condensed font-extrabold text-base text-white uppercase mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <a
                href="#wizard"
                className="pro-btn-cyber px-8 py-4 text-base inline-flex items-center gap-3 shadow-[0_0_35px_rgba(180,255,0,0.4)]"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>OSIGURAJ SVOJ PRISTUP APLIKACIJI</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
