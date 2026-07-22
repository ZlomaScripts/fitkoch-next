"use client";

import React, { useState } from "react";
import { Calculator as CalcIcon, Flame, Dumbbell, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [weight, setWeight] = useState<number>(85);
  const [targetWeight, setTargetWeight] = useState<number>(75);
  const [activity, setActivity] = useState<number>(1.375);
  const [goal, setGoal] = useState<"fatloss" | "muscle">("fatloss");

  // Calculations
  const calculateResults = () => {
    let weeks = 12;
    let calories = 2150;
    let water = 3.4;

    if (goal === "fatloss") {
      const diff = Math.max(1, weight - targetWeight);
      weeks = Math.max(4, Math.round(diff * 1.4));
      calories = Math.round(weight * 22 * activity * 0.82);
      water = parseFloat((weight * 0.04).toFixed(1));
    } else {
      const diff = Math.max(1, targetWeight - weight);
      weeks = Math.max(6, Math.round(diff * 2.3));
      calories = Math.round(weight * 24 * activity * 1.16);
      water = parseFloat((weight * 0.045).toFixed(1));
    }

    return { weeks, calories, water };
  };

  const { weeks, calories, water } = calculateResults();

  return (
    <section id="kalkulator" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#F97316]/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <CalcIcon className="w-4 h-4" />
            <span>INTERAKTIVNI PROGNOSTIČKI KALKULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            KOLIKO BRZO MOŽEŠ DO <span className="text-gradient-orange">CILJANE FORME?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body leading-relaxed">
            Pomakni klizače, odaberi svoju razinu aktivnosti i trenutno izračunaj preporučeni dnevni unos kalorija, vode te procijenjeno vrijeme trajanja tvoje transformacije uz FitKoch sistem.
          </p>
        </div>

        {/* Calculator Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center block-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-display uppercase">Tvoji Ulazni Parametri</h3>
              <p className="text-sm text-slate-400">Prilagodi parametre za preciznu procjenu metabolizma.</p>
            </div>

            {/* Slider 1: Current Weight */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold uppercase font-display tracking-wide">
                <span className="text-slate-300">Trenutna Težina</span>
                <span className="text-2xl font-black text-[#F97316] font-display">{weight} KG</span>
              </div>
              <input
                type="range"
                min={45}
                max={150}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#F97316]"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>45 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Slider 2: Target Weight */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold uppercase font-display tracking-wide">
                <span className="text-slate-300">Ciljana Težina</span>
                <span className="text-2xl font-black text-[#B4FF00] font-display">{targetWeight} KG</span>
              </div>
              <input
                type="range"
                min={45}
                max={150}
                value={targetWeight}
                onChange={(e) => setTargetWeight(Number(e.target.value))}
                className="w-full accent-[#B4FF00]"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>45 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Activity Level Pills */}
            <div className="space-y-3">
              <label className="block text-sm font-bold uppercase tracking-wide text-slate-300 font-display">Razina Dnevne Aktivnosti</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Sjedilački posao (malo kretanja)", val: 1.2 },
                  { label: "Umjereno aktivan (1-3 puta tjedno)", val: 1.375 },
                  { label: "Redovni treninzi (3-5 puta tjedno)", val: 1.55 },
                  { label: "Intenzivan sport / Teški rad", val: 1.725 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setActivity(item.val)}
                    className={`px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-left transition-all border font-display tracking-wide uppercase ${
                      activity === item.val
                        ? "bg-[#F97316]/15 border-[#F97316] text-[#F97316] shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                        : "bg-[#0B0F19] border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Pills */}
            <div className="space-y-3">
              <label className="block text-sm font-bold uppercase tracking-wide text-slate-300 font-display">Glavni Fokus</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGoal("fatloss")}
                  className={`flex items-center justify-center gap-2.5 px-4 py-4 rounded-2xl text-sm font-extrabold transition-all border font-display uppercase tracking-wider ${
                    goal === "fatloss"
                      ? "bg-[#F97316] text-white border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.4)]"
                      : "bg-[#0B0F19] border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Flame className={`w-5 h-5 ${goal === "fatloss" ? "fill-white text-white" : "text-[#F97316]"}`} />
                  <span>🔥 Topljenje masnoće</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal("muscle")}
                  className={`flex items-center justify-center gap-2.5 px-4 py-4 rounded-2xl text-sm font-extrabold transition-all border font-display uppercase tracking-wider ${
                    goal === "muscle"
                      ? "bg-[#B4FF00] text-black border-[#B4FF00] shadow-[0_0_25px_rgba(180,255,0,0.4)]"
                      : "bg-[#0B0F19] border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Dumbbell className={`w-5 h-5 ${goal === "muscle" ? "text-black" : "text-[#B4FF00]"}`} />
                  <span>💪 Mišićna masa</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Column Block */}
          <div className="lg:col-span-5 bg-[#0B0F19] border-2 border-[#F97316]/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#B4FF00]/15 text-[#B4FF00] font-mono text-xs font-bold uppercase mb-2">
                • PROGNOZA NAPRETKA
              </div>
              <h4 className="text-2xl font-black text-white font-display uppercase leading-tight">
                Tvoj FitKoch Akcijski Plan
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Procijenjeni ciljevi na temelju tvog metabolizma i brzine napretka u 1-on-1 radu:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#162032] border border-white/10">
                <div className="text-xs text-slate-400 font-bold uppercase font-display">Procijenjeno Vrijeme</div>
                <div className="text-3xl sm:text-4xl font-black text-[#F97316] font-display mt-1">
                  {weeks} TJEDANA
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#162032] border border-white/10">
                <div className="text-xs text-slate-400 font-bold uppercase font-display">Dnevni Kalorijski Cilj</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-display mt-1">
                  {calories} <span className="text-base font-normal text-slate-400">kcal</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#162032] border border-white/10">
                <div className="text-xs text-slate-400 font-bold uppercase font-display">Preporučena Hidracija</div>
                <div className="text-3xl sm:text-4xl font-black text-[#22C55E] font-display mt-1">
                  {water} L
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#162032] border border-white/10">
                <div className="text-xs text-slate-400 font-bold uppercase font-display">Vjerojatnost Uspjeha</div>
                <div className="text-3xl sm:text-4xl font-black text-[#B4FF00] font-display mt-1">
                  98%
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="#upitnik"
                className="btn-orange w-full py-4 rounded-2xl text-center font-black text-base flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Započni Ovu Transformaciju Odmah</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center font-body">
                <Lock className="w-3.5 h-3.5 text-[#B4FF00] shrink-0" />
                <span>Svi izračuni se u potpunosti prilagođavaju nakon detaljnog razgovora s Ivanom.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
