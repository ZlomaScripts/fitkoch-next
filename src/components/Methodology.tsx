"use client";

import React from "react";
import { Utensils, Dumbbell, MessageSquareCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Methodology() {
  const cards = [
    {
      icon: <Utensils className="w-7 h-7 text-[#b4ff00]" />,
      title: "Prehrana Bez Zabrana",
      desc: "Jedite hranu koju volite, uključujući burgere, čokoladu ili izlaske, dok se držimo strukturiranog makronutritivnog budžeta i pametnog tempiranja obroka. Bez kulinarskog mučenja.",
      badge: "Fleksibilnost 100%",
    },
    {
      icon: <Dumbbell className="w-7 h-7 text-[#10b981]" />,
      title: "Trening Prilagođen Tebi",
      desc: "Bilo da treniraš u vrhunskoj teretani ili kod kuće s bučicama, tvoj program je precizno programiran za progresivno preopterećenje i maksimalan podsticaj bez ozljeda ili dosade.",
      badge: "Znanstveni Pristup",
    },
    {
      icon: <MessageSquareCheck className="w-7 h-7 text-[#b4ff00]" />,
      title: "1-on-1 Dnevni Check-in",
      desc: "Tjedne video analize tvoje forme i svakodnevna dostupnost za pitanja. Ako naiđeš na prepreku u restoranu ili na putu, rješavamo je u roku od nekoliko sati, ne tjedana.",
      badge: "Direktan Kontakt",
    },
  ];

  return (
    <section id="o-metodi" className="py-24 relative bg-[#080a09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            ZAŠTO FITKOCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Znanstveni Pristup Bez Kulinarskog Mučenja i Dosadnog Kardia
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Naš cilj nije da budeš u formi samo 30 dana, već da promijeniš navike i zadržiš rezultate zauvijek uz potpunu fleksibilnost.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#b4ff00]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(180,255,0,0.08)]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#b4ff00]/10 text-[#b4ff00] mb-3">
                  {card.badge}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-syne">{card.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-[#b4ff00]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zajamčeno FitKoch standardom</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
