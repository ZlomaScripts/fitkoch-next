"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: "KOLIKO BRZO MOGU OČEKIVATI PRVE VIDLJIVE REZULTATE?",
      a: "Prve promjene u energiji i smanjenju nadutosti osjetit ćeš već u prvih 7 do 10 dana. Vidljive promjene na tijelu i vagi dolaze nakon 2 do 3 tjedna, a za potpunu vizualnu transformaciju preporučujemo minimalno 12 tjedana kontinuiranog rada uz FitKoch protokol.",
    },
    {
      q: "MORAM LI KUHATI KOMPLICIRANA JELA I JESTI 6 PUTA DNEVNO?",
      a: "Ne! Plan prehrane prilagođava se tvom rasporedu. Ako želiš jesti 3 puta dnevno ili koristiš brze jednostavne obroke od 10 minuta, sve prilagođavamo tvojim preferencijama tako da se ne osjećaš kao na robiji ili na restriktivnoj dijeti.",
    },
    {
      q: "MOGU LI TRENIRATI KOD KUĆE ILI MORAM IĆI U TERETANU?",
      a: "Oba pristupa su moguća. Ako imaš pristup teretani, iskoristit ćemo opremu za maksimalan napredak. Ako treniraš kod kuće, kreirat ćemo program s osnovnim rekvizitima (bučice ili elastične trake) i vlastitom težinom koji daje vrhunske rezultate.",
    },
    {
      q: "KAKO FUNKCIONIRA KOMUNIKACIJA S TRENEROM IVANOM?",
      a: "Komunikacija se odvija putem naše aplikacije i WhatsAppa. Svaki tjedan šalješ svoj check-in (težinu, mjere, slike i osvrt na prošli tjedan), a Ivan radi detaljnu video analizu i prilagođava plan za sljedeći tjedan.",
    },
    {
      q: "ŠTO SE DOGODI NAKON ŠTO ISPUNIM UPITNIK NA OVOJ STRANICI?",
      a: "Nakon slanja upitnika, tvoji podaci dolaze direktno Ivanu. U roku od 24 sata kontaktirat ćemo te putem WhatsAppa s prvom procjenom i prijedlogom termina za kratki uvodni razgovor na kojem prolazimo sve detalje suradnje.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0B0F19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <HelpCircle className="w-4 h-4" />
            <span>ČESTA PITANJA • SVE NEDOUMICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            SVE ŠTO TREBAŠ ZNATI <span className="text-gradient-orange">PRIJE POČETKA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body">
            Evo odgovora na najčešća pitanja o 1-on-1 coaching suradnji s trenerom Ivanom Kochom.
          </p>
        </div>

        {/* Accordion Block List */}
        <div className="space-y-4">
          {questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`block-card rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-2 border-[#F97316] bg-[#162032] shadow-[0_10px_30px_rgba(249,115,22,0.15)]" : "border border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white font-display uppercase tracking-wide">{item.q}</span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#F97316] text-white" : "bg-[#0B0F19] border border-white/10 text-slate-400"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed font-body border-t border-white/10">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
