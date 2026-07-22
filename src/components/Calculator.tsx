"use client";

import React, { useState } from "react";
import { Calculator as CalcIcon, Flame, Dumbbell, ArrowRight, Lock } from "lucide-react";
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
    <section id="kalkulator" className="py-24 relative overflow-hidden bg-[#0a0d0c]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#b4ff00]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            <CalcIcon className="w-3.5 h-3.5" />
            INTERAKTIVNA PROGNOZA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Koliko Brzo Možeš Do Željene Forme?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Pomakni klizače, odaberi svoju razinu aktivnosti i trenutno izračunaj preporučeni unos kalorija, vode te procijenjeno vrijeme trajanja tvoje transformacije uz FitKoch sistem.
          </p>
        </div>

        {/* Calculator Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Tvoji Podaci</h3>
              <p className="text-sm text-gray-400">Prilagodi parametre za preciznu znanstvenu procjenu.</p>
            </div>

            {/* Slider 1: Current Weight */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-300">Trenutna Težina</span>
                <span className="text-xl font-extrabold text-[#b4ff00] font-syne">{weight} kg</span>
              </div>
              <input
                type="range"
                min={45}
                max={150}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#b4ff00]"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>45 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Slider 2: Target Weight */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-300">Ciljana Težina</span>
                <span className="text-xl font-extrabold text-[#10b981] font-syne">{targetWeight} kg</span>
              </div>
              <input
                type="range"
                min={45}
                max={150}
                value={targetWeight}
                onChange={(e) => setTargetWeight(Number(e.target.value))}
                className="w-full accent-[#10b981]"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>45 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Activity Level Pills */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-300">Razina Dnevne Aktivnosti</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Sjedilački posao", val: 1.2 },
                  { label: "Umjereno aktivan (1-3 puta)", val: 1.375 },
                  { label: "Redovni treninzi (3-5 puta)", val: 1.55 },
                  { label: "Sportaš / Teški rad", val: 1.725 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setActivity(item.val)}
                    className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-left transition-all border ${
                      activity === item.val
                        ? "bg-[#b4ff00]/10 border-[#b4ff00] text-[#b4ff00] shadow-[0_0_15px_rgba(180,255,0,0.15)]"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Pills */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-300">Glavni Fokus</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGoal("fatloss")}
                  className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold transition-all border ${
                    goal === "fatloss"
                      ? "bg-[#b4ff00] text-black border-[#b4ff00] shadow-[0_0_20px_rgba(180,255,0,0.3)]"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Flame className={`w-4 h-4 ${goal === "fatloss" ? "fill-black text-black" : "text-[#b4ff00]"}`} />
                  <span>🔥 Topljenje masnoće</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal("muscle")}
                  className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold transition-all border ${
                    goal === "muscle"
                      ? "bg-[#b4ff00] text-black border-[#b4ff00] shadow-[0_0_20px_rgba(180,255,0,0.3)]"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Dumbbell className={`w-4 h-4 ${goal === "muscle" ? "text-black" : "text-[#10b981]"}`} />
                  <span>💪 Mišićna masa</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#181c1b]/80 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#b4ff00]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h4 className="text-xl font-extrabold text-white font-syne">Tvoj FitKoch Akcijski Plan</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Procijenjeni ciljevi na temelju tvog metabolizma i brzine napretka u 1-on-1 radu:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="text-xs text-gray-400 font-medium">Procijenjeno Vrijeme</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#b4ff00] font-syne mt-1">
                  {weeks} Tjedana
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="text-xs text-gray-400 font-medium">Dnevni Kalorijski Cilj</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-syne mt-1">
                  {calories} kcal
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="text-xs text-gray-400 font-medium">Preporučena Hidracija</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#10b981] font-syne mt-1">
                  {water} L
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="text-xs text-gray-400 font-medium">Vjerojatnost Uspjeha</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#b4ff00] font-syne mt-1">
                  98%
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="#upitnik"
                className="btn-lime w-full py-4 rounded-2xl text-center font-bold text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Započni Ovu Transformaciju Odmah</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center">
                <Lock className="w-3.5 h-3.5 text-[#b4ff00]" />
                <span>Svi izračuni se u potpunosti prilagođavaju nakon detaljnog razgovora s Ivanom.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
