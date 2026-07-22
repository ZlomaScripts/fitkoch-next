"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils, Activity, ShieldAlert, Smartphone, CheckCircle2, XCircle, Zap } from "lucide-react";

export default function Methodology() {
  const pillars = [
    {
      number: "01",
      title: "FLEKSIBILNA PREHRANA BEZ ZABRANA",
      subtitle: "Jedi hrano koju zapravo voliš u pravim makro mjerama",
      description:
        "Većina 'trenera' ti da generičan PDF s kuhanom piletinom, rižom i brokULOM. Rezultat? Odustaneš za 12 dana. FitKoch sustav te uči kako uklopiti obiteljske ručkove, restorane pa čak i slatkiše u dnevni makronutritivni budžet, dok masne naslage kontinuirano padaju.",
      icon: Utensils,
      color: "primary",
    },
    {
      number: "02",
      title: "BIOMEHANIČKI OPTIMIZIRAN TRENING",
      subtitle: "Plan prilagođen tvojoj anatomiji i rasporedu",
      description:
        "Nije važno treniraš li 3 ili 5 puta tjedno, u vrhunskoj teretani ili kod kuće. Ivan za tebe kreira periodiziran trening s jasnom progresijom opterećenja koji štiti tvoje zglobove, maksimizira hipertrofiju i uklapa se u tvoj radni dan bez gubljenja 3 sata dnevno.",
      icon: Activity,
      color: "cyber",
    },
    {
      number: "03",
      title: "DNEVNI & TJEDNI CHECK-IN SUSTAV",
      subtitle: "Nisi prepušten sam sebi — trener je uz tebe svaki tjedan",
      description:
        "Za razliku od aplikacija gdje kupiš program i nitko te nikada ne pita gdje si, FitKoch uključuje tjedne video i tekstualne analize tvog napretka. Ivan pregledava tvoje snimke vježbi, analizira težinu i po potrebi odmah korigira unos kalorija za sljedeći tjedan.",
      icon: CheckCircle2,
      color: "primary",
    },
    {
      number: "04",
      title: "VLASTITA FITKOCH MOBILNA APLIKACIJA",
      subtitle: "Svi treninzi, prehrana i chat na jednom mjestu",
      description:
        "Zaboravi na razbacane Excel tablice i poruke na 5 strana. Dobivaš ekskluzivan pristup FitKoch aplikaciji s video demonstracijama svake vježbe u 4K rezoluciji, praćenjem makronutrijenata i 24/7 direktnim chatom s Ivanom za sva tvoja pitanja.",
      icon: Smartphone,
      color: "cyber",
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest text-[#F97316] uppercase mb-4">
            <Zap className="w-4 h-4 text-[#F97316]" />
            <span>METODOLOGIJA SURADNJE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black tracking-tight uppercase text-white mb-4">
            ZAŠTO JE FITKOCH <span className="text-gradient-primary">DRUGAČIJI OD SVEGA</span> ŠTO SI PROBAO?
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            90% ljudi koji pokušaju skinuti kile samostalno vrate svu težinu u roku od 6 mjeseci. Evo kako smo mi to zauvijek riješili kroz 4 temeljna stupa znanstvenog coachinga.
          </p>
        </div>

        {/* Comparison Banner: Generic Slop vs FitKoch Pro Max */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Generic Slop */}
          <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-rose-400 font-condensed font-black text-xl uppercase">
              <XCircle className="w-6 h-6 shrink-0" />
              <span>GENERIČNI ONLINE TRENERI & DIJETE</span>
            </div>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Isti "Copy-Paste" PDF plan prehrane koji šalju stotinama drugih klijenata.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Zabrana ugljikohidrata, kruha i slatkiša, što vodi u prejedanje vikendom.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Nikakva komunikacija nakon što uplate prođu — odgovaraju jednom u 10 dana.</span>
              </li>
            </ul>
          </div>

          {/* FitKoch Pro Max */}
          <div className="pro-card-active p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-3 text-[#B4FF00] font-condensed font-black text-xl uppercase">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-[#B4FF00]" />
              <span>FITKOCH 1-ON-1 PRO MAX COACHING</span>
            </div>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex items-start gap-2">
                <span className="text-[#B4FF00] font-bold">✓</span>
                <span>100% personalizirani makro izračun i trening prilagođen tvom tijelu i poslu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B4FF00] font-bold">✓</span>
                <span>Jedeš normalnu, ukusnu hranu s prijateljima dok ostvaruješ najbrži napredak u životu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B4FF00] font-bold">✓</span>
                <span>Trener Ivan te nadzire, odgovara na poruke i prati svaki tjedan dok ne uspijete.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isPrimary = pillar.color === "primary";
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`pro-card p-8 sm:p-10 relative group ${
                  isPrimary ? "hover:border-[#F97316]" : "hover:border-[#B4FF00]"
                }`}
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-6 font-condensed font-black text-6xl text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                  {pillar.number}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isPrimary
                        ? "bg-[#F97316]/15 border border-[#F97316] text-[#F97316]"
                        : "bg-[#B4FF00]/15 border border-[#B4FF00] text-[#B4FF00]"
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-condensed tracking-widest uppercase font-bold block ${
                        isPrimary ? "text-[#F97316]" : "text-[#B4FF00]"
                      }`}
                    >
                      STUP #{pillar.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-condensed font-black uppercase text-white leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <h4 className="text-base font-medium text-white mb-3">
                  {pillar.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
