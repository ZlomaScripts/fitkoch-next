"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: "Koliko brzo mogu očekivati prve vidljive rezultate?",
      a: "Prve promjene u energiji i smanjenju nadutosti osjetit ćeš već u prvih 7 do 10 dana. Vidljive promjene na tijelu i vagi dolaze nakon 2 do 3 tjedna, a za potpunu vizualnu transformaciju preporučujemo minimalno 12 tjedana kontinuiranog rada uz FitKoch protokol.",
    },
    {
      q: "Moram li kuhati komplicirana jela i jesti 6 puta dnevno?",
      a: "Ne! Plan prehrane prilagođava se tvom rasporedu. Ako želiš jesti 3 puta dnevno ili koristiš brze jednostavne obroke od 10 minuta, sve prilagođavamo tvojim preferencijama tako da se ne osjećaš kao na robiji ili na restriktivnoj dijeti.",
    },
    {
      q: "Mogu li trenirati kod kuće ili moram ići u teretanu?",
      a: "Oba pristupa su moguća. Ako imaš pristup teretani, iskoristit ćemo opremu za maksimalan napredak. Ako treniraš kod kuće, kreirat ćemo program s osnovnim rekvizitima (npr. bučice ili elastične trake) i vlastitom težinom koji daje vrhunske rezultate.",
    },
    {
      q: "Kako funkcionira komunikacija s trenerom Ivanom?",
      a: "Komunikacija se odvija putem naše aplikacije i WhatsAppa. Svaki tjedan šalješ svoj check-in (težinu, mjere, slike i osvrt na prošli tjedan), a Ivan radi detaljnu video analizu i prilagođava plan za sljedeći tjedan.",
    },
    {
      q: "Što se dogodi nakon što ispunim upitnik na ovoj stranici?",
      a: "Nakon slanja upitnika, tvoji podaci dolaze direktno Ivanu. U roku od 24 sata kontaktirat ćemo te putem WhatsAppa s prvom procjenom i prijedlogom termina za kratki uvodni razgovor na kojem prolazimo sve detalje suradnje.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#080a09]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            ČESTA PITANJA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Sve Što Trebaš Znati Prije Početka
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Imaš nedoumice? Evo odgovora na najčešća pitanja o 1-on-1 coaching suradnji s Ivanom Kochom.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`glass-card rounded-2xl overflow-hidden border transition-all ${
                  isOpen ? "border-[#b4ff00]/40 shadow-[0_0_20px_rgba(180,255,0,0.06)]" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-bold text-white font-syne">{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#b4ff00] text-black" : "bg-white/5 text-gray-400"
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
                      <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
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
