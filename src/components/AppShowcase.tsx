"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, CheckCircle2, ArrowRight, Video, BarChart2, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AppShowcase() {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-[#F97316]" />,
      title: "INTERAKTIVNI VIDEO PRIKAZ SVAKE VJEŽBE",
      desc: "Nema nagađanja u teretani. Svaka vježba u tvom planu ima jasan video prikaz pravilne tehnike, tempo izvođenja i Ivanove precizne upute.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#B4FF00]" />,
      title: "PAMETNO PRAĆENJE MAKRONUTRIJENATA & OBROKA",
      desc: "Skeniraj barkodove ili koristi našu bazu namirnica, uz fleksibilne zamjene koje se uklapaju u tvoje dnevne ciljeve bez stresa.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#22C55E]" />,
      title: "DIREKTAN CHAT S TRENEROM IVANOM",
      desc: "Pošalji video svoje izvedbe čučnja ili pitaj za savjet oko večere u restoranu — stručan odgovor dobivaš u najkraćem roku.",
    },
  ];

  return (
    <section id="aplikacija" className="py-24 relative bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display mb-4">
              <Smartphone className="w-4 h-4" />
              <span>SVE NA JEDNOM MJESTU • PAMETNA TEHNOLOGIJA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-display uppercase tracking-tight">
              TVOJA CIJELA TRANSFORMACIJA <span className="text-gradient-orange">NA DLANU</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-body">
              Kada postaneš FitKoch klijent, dobivaš pristup našoj prilagođenoj aplikaciji za praćenje napretka, treninga i prehrane bez zamaranja s desetkovanim Excel tablicama.
            </p>
          </div>

          {/* Features Block List */}
          <div className="space-y-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#162032] border border-white/10 hover:border-[#F97316]/50 transition-all shadow-md"
              >
                <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-white/10 shrink-0 shadow-inner">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white font-display uppercase tracking-wide">{feat.title}</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed font-body">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#upitnik"
              className="btn-orange px-8 py-4 rounded-2xl font-black text-base inline-flex items-center gap-2 shadow-xl uppercase tracking-wider font-display"
            >
              <Smartphone className="w-5 h-5" />
              <span>Želim Pristup Aplikaciji & Treneru</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual App Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative max-w-sm sm:max-w-md w-full rounded-3xl overflow-hidden border-2 border-[#F97316]/50 bg-[#162032] shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
            {/* Live Sync Top Tag */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-bold font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
              <span>LIVE SYNC S TRENEROM IVANOM</span>
            </div>

            {/* App Mockup Image */}
            <div className="relative aspect-[4/5] sm:aspect-[1/1] w-full">
              <Image
                src="/assets/app_dashboard.jpg"
                alt="FitKoch aplikacija na pametnom telefonu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-75" />
            </div>

            {/* Floating Card Badge */}
            <div className="absolute bottom-6 left-6 right-6 block-card-active p-4 rounded-2xl flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#22C55E]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white font-display uppercase block leading-tight">100% Siguran Protokol</span>
                  <span className="text-xs text-slate-400">Podaci o prehrani i treningu zaštićeni</span>
                </div>
              </div>
              <span className="text-xs font-black text-[#0B0F19] bg-[#B4FF00] px-3 py-1.5 rounded-lg font-display uppercase tracking-wider">
                24/7 AKTIVNO
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
