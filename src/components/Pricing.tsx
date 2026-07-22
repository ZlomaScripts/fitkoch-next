"use client";

import React from "react";
import { Check, Crown, Zap, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const selectPackage = (pkgName: string) => {
    // Dispatch custom event for wizard to pick up
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("selectFitKochPackage", { detail: pkgName }));
      const wizardEl = document.getElementById("upitnik");
      if (wizardEl) {
        wizardEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="paketi" className="py-24 relative bg-[#0a0d0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            ODABERI SVOJ PUT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Investiraj U Svoje Zdravlje i Izgled
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Svaki paket uključuje 100% individualni pristup. Odaberi vremenski okvir koji najbolje odgovara tvojim ciljevima i ambicijama.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Package 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-white font-syne">3 Mjeseca — Start</h3>
              <p className="text-sm text-gray-400 mt-2">
                Idealno za brzo skidanje viška kilograma i postavljanje temeljnih zdravih navika.
              </p>
              <div className="my-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-syne">199€</span>
                <span className="text-sm font-semibold text-gray-400">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-300">
                {[
                  "Prilagođen plan treninga",
                  "Prilagođen plan prehrane i makroa",
                  "Pristup FitKoch aplikaciji",
                  "Tjedne video provjere forme",
                  "WhatsApp podrška radnim danima",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#b4ff00] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("3 Mjeseca - Start")}
              className="mt-8 w-full py-4 rounded-2xl btn-glass font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>Odaberi Ovaj Paket</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Package 2 (Featured) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-lime p-8 sm:p-10 rounded-3xl relative flex flex-col justify-between transform lg:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#b4ff00] text-black text-xs font-extrabold flex items-center gap-1.5 shadow-lg uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-black" />
              <span>NAJPOPULARNIJE</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-syne mt-2">6 Mjeseci — Masterclass</h3>
              <p className="text-sm text-gray-300 mt-2">
                Potpuna i trajna transformacija tijela s maksimalnom podrškom i fleksibilnošću.
              </p>
              <div className="my-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#b4ff00] font-syne">169€</span>
                <span className="text-sm font-semibold text-gray-300">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  "Sve iz Start paketa",
                  "Prilagodba plana svaka 2 tjedna",
                  "Vodič za suplementaciju i oporavak",
                  "Prioritetna 24/7 WhatsApp podrška",
                  "Besplatan vodič za prehranu u restoranima",
                ].map((feat, idx) => (
                  <li key={feat} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${idx === 0 ? "text-[#b4ff00] font-bold" : "text-[#b4ff00]"} shrink-0`} />
                    <span className={idx === 0 ? "font-bold text-white" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("6 Mjeseci - Masterclass")}
              className="mt-8 w-full py-4 rounded-2xl btn-lime font-extrabold text-base flex items-center justify-center gap-2 shadow-xl"
            >
              <Crown className="w-5 h-5 fill-black" />
              <span>Odaberi Masterclass</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-white font-syne">12 Mjeseci — VIP Elite</h3>
              <p className="text-sm text-gray-400 mt-2">
                Za one koji žele vrhunske, natjecateljske ili životne rezultate bez kompromisa.
              </p>
              <div className="my-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-syne">149€</span>
                <span className="text-sm font-semibold text-gray-400">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-300">
                {[
                  "Sve iz Masterclass paketa",
                  "1-on-1 mjesečni Zoom konzultacijski pozivi",
                  "Analiza krvne slike i hormonskog statusa",
                  "Pristup zatvorenoj FitKoch zajednici",
                  "Jamstvo rezultata uz 100% pridržavanje",
                ].map((feat, idx) => (
                  <li key={feat} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#10b981] shrink-0" />
                    <span className={idx === 0 ? "font-bold text-white" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("12 Mjeseci - VIP Elite")}
              className="mt-8 w-full py-4 rounded-2xl btn-glass font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>Odaberi VIP Elite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
