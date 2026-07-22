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
    <section id="paketi" className="py-24 relative bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <Zap className="w-4 h-4 fill-[#F97316]" />
            <span>ODABERI SVOJ PUT • PAKETI SURADNJE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            INVESTIRAJ U SVOJE <span className="text-gradient-orange">ZDRAVLJE I FORMULI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body leading-relaxed">
            Svaki paket uključuje 100% individualni 1-na-1 pristup s trenerom Ivanom. Odaberi vremenski okvir koji najbolje odgovara tvojim ambicijama — klikom na paket automatski ga odabireš u upitniku!
          </p>
        </div>

        {/* Pricing Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Package 1: Start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-[#F97316]/50 transition-all"
          >
            <div>
              <div className="text-xs font-mono font-bold text-[#FB923C] uppercase tracking-wider mb-2">🚀 BRZI START</div>
              <h3 className="text-3xl font-extrabold text-white font-display uppercase tracking-wide">3 MJESECA — START</h3>
              <p className="text-sm text-slate-400 mt-2 font-body">
                Idealno za brzo skidanje viška kilograma, sagorjevanje sala i postavljanje temeljnih zdravih navika.
              </p>
              <div className="my-8 flex items-baseline gap-2 pb-6 border-b border-white/10">
                <span className="text-5xl font-black text-white font-display">199€</span>
                <span className="text-sm font-bold text-slate-400 uppercase font-display">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300 font-body">
                {[
                  "100% prilagođen plan treninga",
                  "Prilagođen plan prehrane i makroa",
                  "Pristup FitKoch aplikaciji",
                  "Tjedne video provjere forme s Ivanom",
                  "WhatsApp podrška radnim danima",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("3 Mjeseca - Start")}
              className="mt-8 w-full py-4 rounded-2xl btn-outline-block font-extrabold text-sm flex items-center justify-center gap-2 uppercase tracking-wider font-display"
            >
              <span>Odaberi Ovaj Paket</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Package 2: Masterclass (Featured / Active Block) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block-card-active p-8 sm:p-10 rounded-3xl relative flex flex-col justify-between transform lg:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-xl bg-[#F97316] text-white text-xs font-black flex items-center gap-1.5 shadow-xl uppercase tracking-wider font-display border border-white/20">
              <Star className="w-4 h-4 fill-white" />
              <span>NAJPOPULARNIJI IZBOR • 85% KLIJENTA</span>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#B4FF00] uppercase tracking-wider mt-2 mb-2">🌟 POTPUNA REKONSTRUKCIJA</div>
              <h3 className="text-3xl font-extrabold text-white font-display uppercase tracking-wide">6 MJESECI — MASTERCLASS</h3>
              <p className="text-sm text-slate-300 mt-2 font-body">
                Potpuna i trajna transformacija tijela s maksimalnom podrškom, stalnim prilagodbama i fleksibilnošću.
              </p>
              <div className="my-8 flex items-baseline gap-2 pb-6 border-b border-white/10">
                <span className="text-5xl font-black text-[#F97316] font-display">169€</span>
                <span className="text-sm font-bold text-slate-300 uppercase font-display">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200 font-body">
                {[
                  "Sve iz Start paketa",
                  "Prilagodba plana svaka 2 tjedna",
                  "Vodič za suplementaciju i oporavak",
                  "Prioritetna 24/7 WhatsApp podrška",
                  "Besplatan vodič za prehranu u restoranima",
                ].map((feat, idx) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F97316]/20 text-[#F97316] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className={idx === 0 ? "font-bold text-white" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("6 Mjeseci - Masterclass")}
              className="mt-8 w-full py-4.5 rounded-2xl btn-orange font-black text-base flex items-center justify-center gap-2.5 shadow-xl uppercase tracking-wider font-display"
            >
              <Crown className="w-5 h-5 fill-white" />
              <span>Odaberi Masterclass</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Package 3: VIP Elite */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-[#F97316]/50 transition-all"
          >
            <div>
              <div className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-wider mb-2">👑 EKSKLUZIVNO MENTORSTVO</div>
              <h3 className="text-3xl font-extrabold text-white font-display uppercase tracking-wide">12 MJESECI — VIP ELITE</h3>
              <p className="text-sm text-slate-400 mt-2 font-body">
                Za one koji žele vrhunske, natjecateljske ili životne rezultate bez kompromisa i s punom pozornošću trenera.
              </p>
              <div className="my-8 flex items-baseline gap-2 pb-6 border-b border-white/10">
                <span className="text-5xl font-black text-white font-display">149€</span>
                <span className="text-sm font-bold text-slate-400 uppercase font-display">/ mjesečno</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300 font-body">
                {[
                  "Sve iz Masterclass paketa",
                  "1-on-1 mjesečni Zoom konzultacijski pozivi",
                  "Analiza krvne slike i hormonskog statusa",
                  "Pristup zatvorenoj FitKoch VIP zajednici",
                  "Jamstvo rezultata uz 100% pridržavanje",
                ].map((feat, idx) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className={idx === 0 ? "font-bold text-white" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selectPackage("12 Mjeseci - VIP Elite")}
              className="mt-8 w-full py-4 rounded-2xl btn-outline-block font-extrabold text-sm flex items-center justify-center gap-2 uppercase tracking-wider font-display"
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
