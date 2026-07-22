"use client";

import React from "react";
import { Utensils, Dumbbell, MessageSquareCheck, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Methodology() {
  const cards = [
    {
      icon: <Utensils className="w-8 h-8 text-[#F97316]" />,
      title: "PREHRANA BEZ ZABRANA",
      desc: "Jedite hranu koju volite, uključujući burgere, čokoladu ili izlaske, dok se držimo strukturiranog makronutritivnog budžeta i pametnog tempiranja obroka. Bez kulinarskog mučenja i gladovanja.",
      badge: "FLEKSIBILNOST 100%",
      accent: "border-[#F97316]/50",
      badgeColor: "bg-[#F97316]/15 text-[#F97316] border-[#F97316]/30",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-[#B4FF00]" />,
      title: "TRENING PRILAGOĐEN TEBI",
      desc: "Bilo da treniraš u vrhunskoj teretani ili kod kuće s bučicama, tvoj program je precizno programiran za progresivno preopterećenje i maksimalan mišićni podsticaj bez ozljeda ili dosade.",
      badge: "ZNANSTVENI PRISTUP",
      accent: "border-[#B4FF00]/50",
      badgeColor: "bg-[#B4FF00]/15 text-[#B4FF00] border-[#B4FF00]/30",
    },
    {
      icon: <MessageSquareCheck className="w-8 h-8 text-[#22C55E]" />,
      title: "1-ON-1 DNEVNI CHECK-IN",
      desc: "Tjedne video analize tvoje forme i svakodnevna dostupnost za pitanja. Ako naiđeš na prepreku u restoranu ili na putu, rješavamo je u roku od nekoliko sati direktnim kontaktom s Ivanom.",
      badge: "DIREKTAN KONTAKT",
      accent: "border-[#22C55E]/50",
      badgeColor: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30",
    },
  ];

  return (
    <section id="o-metodi" className="py-24 relative bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <Zap className="w-4 h-4 fill-[#F97316]" />
            <span>METODOLOGIJA • ZAŠTO FITKOCH SUSTAV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            ZNANSTVENI PRISTUP BEZ <span className="text-gradient-orange">KULINARSKOG MUČENJA</span> I DOSADNOG KARDIA
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body leading-relaxed">
            Naš cilj nije da budeš u formi samo 30 dana, već da promijeniš navike, izgradiš mišiće i zadržiš vrhunsku formu zauvijek uz potpunu fleksibilnost.
          </p>
        </div>

        {/* Cards Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`block-card p-8 sm:p-10 rounded-3xl border-2 ${card.accent} flex flex-col justify-between group relative overflow-hidden`}
            >
              <div>
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Badge */}
                <div className={`inline-block px-3.5 py-1 rounded-lg text-xs font-extrabold font-display tracking-wider uppercase border mb-4 ${card.badgeColor}`}>
                  {card.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Verification Label */}
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-2.5 text-xs font-bold font-display uppercase tracking-wider text-[#B4FF00]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zajamčeno FitKoch Pro Max Standardom</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
