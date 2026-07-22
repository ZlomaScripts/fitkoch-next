"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Check, ShieldCheck, Flame, Star, ArrowRight, Award } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      id: "start",
      name: "3 MJESECA START",
      subtitle: "Idealno za skidanje prvih 6-10 kg i promjenu loših navika",
      badge: "BRZI START",
      popular: false,
      features: [
        "100% personalizirani plan prehrane (fleksibilan makro pristup)",
        "Prilagođen plan treninga za teretanu ili kod kuće",
        "Pristup FitKoch mobilnoj aplikaciji na 3 mjeseca",
        "Tjedna video/tekstualna analiza i korekcija plana",
        "Direktan chat s trenerom Ivanom Kochom",
        "Video demonstracije svih vježbi u 4K",
      ],
      ctaText: "ODABERI 3 MJESECA START →",
    },
    {
      id: "masterclass",
      name: "6 MJESECI MASTERCLASS",
      subtitle: "Naš najpopularniji protokol za potpunu tjelesnu transformaciju",
      badge: "🔥 PREPORUKA TRENERA (#1 ODABIR)",
      popular: true,
      features: [
        "SVE iz paketa Start na punih 6 mjeseci suradnje",
        "Potpuna tjelesna rekompozicija (-15 kg ili +8 kg mišića)",
        "Dnevni nadzor napretka i stalna prilagodba kalorija",
        "Vodič za prehranu u restoranima, putovanjima i blagdanima",
        "Prioritetni chat odgovori u roku od par sati",
        "Pristup zatvorenoj FitKoch VIP zajednici klijenta",
        "Garancija rezultata uz pridržavanje protokola",
      ],
      ctaText: "🚀 ODABERI 6 MJESECI MASTERCLASS →",
    },
    {
      id: "elite",
      name: "12 MJESECI VIP ELITE",
      subtitle: "Dugoročno mentorstvo za one koji žele postati i ostati u životnoj formi",
      badge: "👑 VIP MENTORSTVO",
      popular: false,
      features: [
        "SVE iz paketa Masterclass na punih 12 mjeseci",
        "Dugoročna strategija za trajno održavanje kilaže bez jojo efekta",
        "1-on-1 mjesečne video konzultacije uživo s Ivanom",
        "Vrhunska podrška i priprema za posebne događaje (vjenčanja, ljeto)",
        "Ekskluzivni VIP tretman i maksimalna dostupnost trenera",
      ],
      ctaText: "ODABERI 12 MJESECI VIP ELITE →",
    },
  ];

  const handleSelectPackage = (packageId: string) => {
    // Pre-select package in wizard if possible, or trigger scroll
    window.dispatchEvent(
      new CustomEvent("fitkoch:selectPackage", { detail: { packageId } })
    );
    const wizardEl = document.getElementById("wizard");
    if (wizardEl) {
      wizardEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#0B0F19] relative border-t border-[#243350]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest text-[#F97316] uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-[#F97316]" />
            <span>INVESTICIJA U SEBE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black tracking-tight uppercase text-white mb-4">
            ODABERI SVOJ <span className="text-gradient-primary">PAKET SURADNJE</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Koliko ti vrijedi da se probudiš svako jutro pun energije, u tijelu na koje si ponosan? Odaberi paket ispod i automatski te prebacujemo na prijavu.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`flex flex-col justify-between relative ${
                tier.popular
                  ? "pro-card-active p-8 lg:-translate-y-4 shadow-[0_0_45px_rgba(249,115,22,0.35)]"
                  : "pro-card p-8"
              }`}
            >
              {/* Top Badge for Popular tier */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F97316] text-[#0B0F19] font-condensed font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                {!tier.popular && (
                  <span className="text-xs font-condensed tracking-widest text-[#B4FF00] uppercase font-bold block mb-2">
                    {tier.badge}
                  </span>
                )}

                <h3 className="font-condensed font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                  {tier.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 pb-6 border-b border-[#243350]">
                  {tier.subtitle}
                </p>

                {/* Features List */}
                <ul className="space-y-4 my-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#F8FAFC]">
                      <div className="w-5 h-5 rounded-full bg-[#B4FF00]/20 text-[#B4FF00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#243350]/60">
                <button
                  onClick={() => handleSelectPackage(tier.id)}
                  className={`w-full py-4 px-6 rounded-lg font-condensed font-extrabold text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "pro-btn-primary shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                      : "pro-btn-outline hover:border-[#B4FF00] hover:text-[#B4FF00]"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security & Guarantee Footer Box */}
        <div className="mt-16 bg-[#131B2E]/60 border border-[#243350] rounded-xl p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Award className="w-10 h-10 text-[#B4FF00] shrink-0" />
          <div className="text-left">
            <h4 className="font-condensed font-black text-base uppercase text-white">
              100% ZNANSTVENI PRISTUP ILI TI VRAĆAMO VRIJEME
            </h4>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Ako se pridržavaš uputa, treninga i makro izračuna trenera Ivana Kocha a ne postigneš vidljiv napredak u prvih 30 dana, korigirat ćemo tvoj protokol besplatno dok ne uspijete.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
