"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, CheckCircle, ArrowRight, Video, BarChart2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AppShowcase() {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-[#b4ff00]" />,
      title: "Interaktivni Video Prikaz Svake Vježbe",
      desc: "Nema nagađanja u teretani. Svaka vježba u tvom planu ima jasan video prikaz pravilne tehnike i Ivanove savjete.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#10b981]" />,
      title: "Pametno Praćenje Makronutrijenata & Obroka",
      desc: "Skeniraj barkodove ili koristi našu bazu namirnica, uz fleksibilne zamjene koje se uklapaju u tvoje dnevne ciljeve.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#b4ff00]" />,
      title: "Direktan Chat s Trenerom Ivanom",
      desc: "Pošalji video svoje izvedbe čučnja ili pitaj za savjet oko večere u restoranu — odgovor dobivaš odmah.",
    },
  ];

  return (
    <section id="aplikacija" className="py-24 relative bg-[#080a09]">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              SVE NA JEDNOM MJESTU
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Tvoja Cijela Transformacija Na Dlanu
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
              Kada postaneš FitKoch klijent, dobivaš pristup našoj prilagođenoj aplikaciji za praćenje napretka, treninga i prehrane bez zamaranja s desetkovanim Excel tablicama.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{feat.title}</h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#upitnik"
              className="btn-lime px-8 py-4 rounded-full font-bold text-base inline-flex items-center gap-2 shadow-xl"
            >
              <Smartphone className="w-5 h-5" />
              <span>Želim Pristup Aplikaciji & Treneru</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative max-w-sm sm:max-w-md w-full rounded-3xl overflow-hidden border border-white/15 bg-[#111413] shadow-2xl shadow-black group">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] w-full">
              <Image
                src="/assets/app_dashboard.jpg"
                alt="FitKoch aplikacija na pametnom telefonu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl flex items-center justify-between border border-[#b4ff00]/30 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-sm font-bold text-white">Live Sync s Trenerom Ivanom</span>
              </div>
              <span className="text-xs font-bold text-[#b4ff00] bg-[#b4ff00]/10 px-3 py-1 rounded-full">
                24/7 Aktivno
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
