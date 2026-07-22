"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, Flame, TrendingUp, Zap, ArrowRight, Star } from "lucide-react";

export default function Transformations() {
  const [filter, setFilter] = useState<"all" | "cut" | "bulk">("all");

  const transformations = [
    {
      id: 1,
      name: "Marko B. (29)",
      category: "cut",
      badge: "🔥 TOPLJENJE MASTI (-16 KG)",
      duration: "14 tjedana",
      stats: { weight: "98 kg → 82 kg", bodyFat: "24% → 11%", waist: "-14 cm" },
      story:
        "Radio sam 10 sati dnevno u uredu na menadžerskoj poziciji. Probao sam keto i trčanje, uvijek bi vratio kile. S Ivanom sam jeo 2,400 kcal, trenirao 3x tjedno poslije posla i skinuo 16 kg bez da sam jednom bio gladan.",
      image: "/assets/transformation.jpg",
      highlight: "-16 KG & PLOČICE NA TRBUHU",
    },
    {
      id: 2,
      name: "Luka M. (24)",
      category: "bulk",
      badge: "💪 ČISTA MIŠIĆNA MASA (+8 KG)",
      duration: "16 tjedana",
      stats: { weight: "68 kg → 76 kg", bench: "+30 kg", arms: "+4.5 cm" },
      story:
        "Cijeli život sam bio 'onaj mršavi dečko'. Probao sam jesti sve živo ali nisam dobivao grama. Ivan mi je posložio precizne ugljikohidrate i hipertrofijski trening u aplikaciji. Dobio sam 8 kg mišića u 4 mjeseca!",
      image: "/assets/transformation.jpg",
      highlight: "+8 KG MIŠIĆA & REKORDI U SNACI",
    },
    {
      id: 3,
      name: "Ivan K. (33)",
      category: "cut",
      badge: "⚡ BODY RECOMPOSITION",
      duration: "12 tjedana",
      stats: { weight: "91 kg → 81 kg", bodyFat: "21% → 10%", strength: "+15%" },
      story:
        "Mislio sam da u 30-ima više ne mogu imati trbušnjake zbog posla i obitelji. Ivan mi je pokazao kako fleksibilnom prehranom zadržati vikend ručak s obitelji, a paralelno sam skinuo 10 kg masti i ojačao na svim vježbama.",
      image: "/assets/transformation.jpg",
      highlight: "-10 KG & ŽIVOTNA FORMA U 33. GODINI",
    },
  ];

  const filteredList = transformations.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="transformations" className="py-24 bg-[#0B0F19] relative border-t border-[#243350]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest text-[#B4FF00] uppercase mb-4">
            <Award className="w-4 h-4 text-[#B4FF00]" />
            <span>REZULTATI GOVORE SVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black tracking-tight uppercase text-white mb-4">
            PRAVE TRANSFORMACIJE <span className="text-gradient-cyber">STVARNIH LJUDI</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Nema fotošopa niti lažnih obećanja. Pogledaj što naši klijenti postižu u 12 do 16 tjedana kada se primijeni precizan znanstveni protokol i svakodnevna podrška trenera Kocha.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: "all", label: "⚡ SVE TRANSFORMACIJE" },
            { id: "cut", label: "🔥 TOPLJENJE MASTI (-10 KG+)" },
            { id: "bulk", label: "💪 IZGRADNJA MIŠIĆA (+5 KG+)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-condensed font-extrabold text-sm uppercase tracking-wider transition-all border ${
                filter === tab.id
                  ? "bg-[#F97316] text-[#0B0F19] border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.45)] scale-105"
                  : "bg-[#131B2E] text-[#94A3B8] border-[#243350] hover:text-white hover:border-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Transformations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredList.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="pro-card overflow-hidden flex flex-col group"
              >
                {/* Image & Badge Container */}
                <div className="relative aspect-[16/10] bg-[#131B2E] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Transformacija ${item.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#0B0F19]/90 backdrop-blur-md border border-[#F97316] text-[#F97316] font-condensed font-black text-xs uppercase tracking-wider shadow-lg">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#B4FF00] text-[#0B0F19] font-condensed font-bold text-xs uppercase">
                      {item.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-condensed font-black text-xl text-white uppercase leading-none">
                      {item.name}
                    </h3>
                    <span className="text-xs font-condensed tracking-wider text-[#B4FF00] font-bold block mt-1">
                      ⭐ {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Card Content & Stats */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-[#0B0F19] border border-[#243350] text-center">
                    <div>
                      <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">TEŽINA</span>
                      <span className="font-condensed font-bold text-xs sm:text-sm text-white">{item.stats.weight}</span>
                    </div>
                    {item.stats.bodyFat ? (
                      <div>
                        <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">MAST %</span>
                        <span className="font-condensed font-bold text-xs sm:text-sm text-[#B4FF00]">{item.stats.bodyFat}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">BENCH</span>
                        <span className="font-condensed font-bold text-xs sm:text-sm text-[#B4FF00]">{item.stats.bench}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">PROMJENA</span>
                      <span className="font-condensed font-bold text-xs sm:text-sm text-[#F97316]">
                        {item.stats.waist || item.stats.arms || item.stats.strength}
                      </span>
                    </div>
                  </div>

                  {/* Story */}
                  <p className="text-sm text-[#94A3B8] italic leading-relaxed">
                    "{item.story}"
                  </p>

                  {/* Client Review Stars & CTA */}
                  <div className="pt-4 border-t border-[#243350] flex items-center justify-between">
                    <div className="flex text-[#F97316]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <a
                      href="#wizard"
                      className="text-xs font-condensed font-extrabold tracking-wider uppercase text-white hover:text-[#F97316] transition-colors flex items-center gap-1"
                    >
                      <span>ŽELIM OVAJ REZULTAT</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 pro-card-active p-8 text-center sm:flex sm:items-center sm:justify-between">
          <div className="text-left mb-6 sm:mb-0">
            <h3 className="text-2xl font-condensed font-black uppercase text-white">
              Spreman si napisati vlastitu transformaciju?
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1">
              Prvi korak je ispunjavanje našeg kratkog upitnika kako bismo procijenili tvoje trenutno stanje.
            </p>
          </div>
          <a
            href="#wizard"
            className="pro-btn-primary px-8 py-4 text-sm inline-flex items-center gap-2"
          >
            <span>ISPUNI UPITNIK ODMAH</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
