"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, TrendingUp, Quote, CheckCircle2, Sliders, Flame, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Transformations() {
  const [filter, setFilter] = useState<"all" | "fatloss" | "muscle">("all");
  const [activeComparison, setActiveComparison] = useState<number>(1);

  const items = [
    {
      id: 1,
      category: "fatloss",
      tag: "-16 KG SALA U 14 TJEDANA",
      name: "Marko P., 31 god. (Poduzetnik)",
      stats: "Masno tkivo: 24% → 11%",
      beforeLabel: "Prije: 104 kg (kroničan umor)",
      afterLabel: "Poslije: 88 kg (izklesana definicija)",
      quote:
        "Najveća razlika u odnosu na sve što sam probao prije je ta što sam s Ivanom jeo normalno, imao energije za posao i obitelj, a salo se doslovno topilo tjedan za tjednom.",
      image: "/assets/transformation.jpg",
      highlightMetric: "-16 KG",
      highlightSub: "Čisti gubitak masti",
    },
    {
      id: 2,
      category: "muscle",
      tag: "+7 KG ČISTIH MIŠIĆA",
      name: "Ana M., 27 god. (Arhitektica)",
      stats: "Snaga čučnja: +40 KG",
      beforeLabel: "Prije: 54 kg (bez tonusa)",
      afterLabel: "Poslije: 61 kg (apsolutna snaga)",
      quote:
        "Bojala sam se da ću se 'udebljati' ako pojačam unos kalorija, ali me Ivan vodio kroz svaki korak. Oblikovala sam tijelo, podigla samopouzdanje i osjećam se jače nego ikad.",
      image: "/assets/transformation.jpg",
      highlightMetric: "+7 KG",
      highlightSub: "Čista mišićna masa",
    },
  ];

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="transformacije" className="py-24 relative bg-[#0B0F19] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (UI-UX Pro Max Before-After Transformation Pattern) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <Award className="w-4 h-4" />
            <span>REZULTATI GOVORE SVE • VERIFICIRANE TRANSFORMACIJE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            PRIJE I POSLIJE: STVARNI KLIJENTI, <span className="text-gradient-orange">STVARNI BROJEVI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body leading-relaxed">
            Ovo nisu glumci niti generične fotografije. Pogledaj konkretne brojke, gubitak postotka masti i porast snage kada se posvetiš pravom sistemu i stručnom vodstvu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {[
            { id: "all", label: "Svi Rezultati (2)", icon: <Sliders className="w-4 h-4" /> },
            { id: "fatloss", label: "Topljenje Masnoće", icon: <Flame className="w-4 h-4" /> },
            { id: "muscle", label: "Izgradnja Mišića", icon: <Dumbbell className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2.5 font-display uppercase tracking-wider ${
                filter === tab.id
                  ? "bg-[#F97316] text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                  : "bg-[#162032] border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid of Before-After Blocks */}
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
                className="block-card rounded-3xl overflow-hidden flex flex-col group"
              >
                {/* Visual Comparison Header */}
                <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      item.category === "muscle" ? "brightness-95 contrast-115" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162032] via-transparent to-transparent opacity-90" />
                  
                  {/* Top Result Tag */}
                  <div className="absolute top-4 right-4 px-4 py-1.5 rounded-xl bg-[#F97316] text-white font-display font-black text-xs shadow-xl uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Before / After Indicators overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2 text-xs font-mono font-bold">
                    <span className="px-3 py-1 rounded bg-black/80 text-slate-300 border border-white/20 backdrop-blur-md">
                      🔴 {item.beforeLabel}
                    </span>
                    <span className="px-3 py-1 rounded bg-[#B4FF00] text-black border border-black/30 font-extrabold shadow-md">
                      🟢 {item.afterLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">{item.name}</h3>
                      <span className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] font-mono w-fit">
                        {item.stats}
                      </span>
                    </div>

                    {/* Big Highlight Metric Block */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0B0F19] border border-white/10 items-center">
                      <div className="col-span-1 text-center border-r border-white/10 pr-2">
                        <div className="text-3xl font-black text-[#F97316] font-display">{item.highlightMetric}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">{item.highlightSub}</div>
                      </div>
                      <div className="col-span-2 pl-2">
                        <p className="text-slate-300 text-xs sm:text-sm italic font-body leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold">1-on-1 Mentorstvo • Trener Ivan Koch</span>
                    <span className="text-[#B4FF00] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Verificiran Rezultat ✓
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 p-8 rounded-3xl block-card-lime text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-2xl font-extrabold text-white font-display uppercase tracking-tight">Želiš Svoj Vlastiti Prije-Poslije Rezultat?</h4>
            <p className="text-sm text-slate-300 mt-1">Svi klijenti kreću s kratkim upitnikom za procjenu trenutnog stanja.</p>
          </div>
          <a
            href="#upitnik"
            className="btn-lime px-8 py-4 rounded-2xl text-sm font-black shrink-0 shadow-xl"
          >
            Ispuni Upitnik Za Transformaciju →
          </a>
        </div>
      </div>
    </section>
  );
}
