"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, TrendingUp, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Transformations() {
  const [filter, setFilter] = useState<"all" | "fatloss" | "muscle">("all");

  const items = [
    {
      id: 1,
      category: "fatloss",
      tag: "-16 KG u 14 Tjedana",
      name: "Marko P., 31 god. (Poduzetnik)",
      stats: "Masno tkivo: 24% → 11%",
      quote:
        "Najveća razlika u odnosu na sve što sam probao prije je ta što sam s Ivanom jeo normalno, imao energije za posao i obitelj, a salo se doslovno topilo tjedan za tjednom.",
      image: "/assets/transformation.jpg",
    },
    {
      id: 2,
      category: "muscle",
      tag: "+7 KG ČISTIH MIŠIĆA",
      name: "Ana M., 27 god. (Arhitektica)",
      stats: "Snaga čučnja: +40 KG",
      quote:
        "Bojala sam se da ću se 'udebljati' ako pojačam unos kalorija, ali me Ivan vodio kroz svaki korak. Oblikovala sam tijelo, podigla samopouzdanje i osjećam se jače nego ikad.",
      image: "/assets/transformation.jpg",
    },
  ];

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="transformacije" className="py-24 relative bg-[#0a0d0c] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            REZULTATI GOVORE SVE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Stvarne Transformacije Naših Klijenta
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Ovo nisu glumci niti generične fotografije. Pogledaj što se dogodi kada se posvetiš pravom sistemu i stručnom vodstvu.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: "all", label: "Svi Rezultati" },
            { id: "fatloss", label: "Topljenje Masnoće" },
            { id: "muscle", label: "Izgradnja Mišića" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                filter === tab.id
                  ? "bg-[#b4ff00] text-black border-[#b4ff00] shadow-[0_0_15px_rgba(180,255,0,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#b4ff00]/30 transition-all flex flex-col group shadow-2xl"
              >
                {/* Image header with tag */}
                <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      item.category === "muscle" ? "brightness-95 contrast-110" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111413] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#b4ff00] text-black font-extrabold text-xs shadow-lg flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white font-syne">{item.name}</h3>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-[#10b981] w-fit">
                        {item.stats}
                      </span>
                    </div>
                    <div className="relative pl-6 border-l-2 border-[#b4ff00]/60 mt-4">
                      <Quote className="w-5 h-5 text-[#b4ff00]/40 absolute -left-[11px] top-0 bg-[#111413]" />
                      <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                    <span>1-on-1 Mentorstvo s Ivanom Kochom</span>
                    <span className="text-[#b4ff00] font-bold">Verificiran Rezultat ✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
