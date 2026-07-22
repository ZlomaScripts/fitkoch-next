"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Activity, Flame, Dumbbell, Droplet, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export default function Calculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<number>(85);
  const [targetWeight, setTargetWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(180);
  const [activity, setActivity] = useState<number>(1.375); // 1.2 sedentary, 1.375 light, 1.55 mod, 1.725 active
  const [goal, setGoal] = useState<"cut" | "recomp" | "bulk">("cut");

  // Calculate BMR using Mifflin-St Jeor Equation
  const bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * 30 + 5
    : 10 * weight + 6.25 * height - 5 * 30 - 161;

  const tdee = Math.round(bmr * activity);

  // Target Calorie calculation based on goal
  let targetCalories = tdee;
  if (goal === "cut") targetCalories = Math.round(tdee * 0.78); // 22% deficit for safe fat loss
  if (goal === "bulk") targetCalories = Math.round(tdee * 1.15); // 15% surplus for lean muscle
  if (goal === "recomp") targetCalories = Math.round(tdee * 0.95); // slight deficit high protein

  // Macros calculation
  const protein = Math.round(weight * 2.2); // 2.2g per kg
  const fat = Math.round((targetCalories * 0.25) / 9);
  const carbs = Math.max(0, Math.round((targetCalories - protein * 4 - fat * 9) / 4));

  // Timeline estimation
  const weightDiff = Math.abs(weight - targetWeight);
  const estimatedWeeks = Math.max(4, Math.round((weightDiff * 7700) / (tdee * 0.22 * 7)));

  const handleTransferToWizard = () => {
    // Scroll to wizard
    const wizardEl = document.getElementById("wizard");
    if (wizardEl) {
      wizardEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#0B0F19] relative border-t border-[#243350]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131B2E] border border-[#243350] text-xs font-condensed tracking-widest text-[#B4FF00] uppercase mb-4">
            <CalcIcon className="w-4 h-4 text-[#B4FF00]" />
            <span>ZNANSTVENI SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black tracking-tight uppercase text-white mb-4">
            IZRAČUNAJ TRAJANJE I KALORIJE <span className="text-gradient-primary">SVOJE TRANSFORMACIJE</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Pomakni klizače prema svojim trenutnim i željenim mjerama. Naš biomehanički kalkulator trenutačno procjenjuje tvoj optimalni dnevni unos kalorija, makronutrijenata i realističan rok uspjeha.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 pro-card p-6 sm:p-8 space-y-8">
            
            {/* Gender Selection */}
            <div>
              <label className="block text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold mb-3">
                1. ODABERI SPOL
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-3 px-4 rounded-lg font-condensed font-bold text-base tracking-wider uppercase transition-all ${
                    gender === "male"
                      ? "bg-[#F97316] text-[#0B0F19] shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-[#F97316]"
                      : "bg-[#0B0F19] text-[#94A3B8] border border-[#243350] hover:border-slate-500"
                  }`}
                >
                  👨 MUŠKO
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-3 px-4 rounded-lg font-condensed font-bold text-base tracking-wider uppercase transition-all ${
                    gender === "female"
                      ? "bg-[#F97316] text-[#0B0F19] shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-[#F97316]"
                      : "bg-[#0B0F19] text-[#94A3B8] border border-[#243350] hover:border-slate-500"
                  }`}
                >
                  👩 ŽENSKO
                </button>
              </div>
            </div>

            {/* Sliders: Current Weight, Target Weight, Height */}
            <div className="space-y-6">
              
              {/* Current Weight */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold">
                    2. TRENUTNA TEŽINA (KG)
                  </span>
                  <span className="font-condensed font-black text-2xl text-white bg-[#0B0F19] px-3 py-1 rounded border border-[#243350]">
                    {weight} <span className="text-xs text-[#F97316]">kg</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={160}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#F97316]"
                />
              </div>

              {/* Target Weight */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold">
                    3. CILJANA TEŽINA (KG)
                  </span>
                  <span className="font-condensed font-black text-2xl text-[#B4FF00] bg-[#0B0F19] px-3 py-1 rounded border border-[#243350]">
                    {targetWeight} <span className="text-xs text-[#94A3B8]">kg</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={160}
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#B4FF00]"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold">
                    4. VISINA (CM)
                  </span>
                  <span className="font-condensed font-black text-2xl text-white bg-[#0B0F19] px-3 py-1 rounded border border-[#243350]">
                    {height} <span className="text-xs text-[#94A3B8]">cm</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={140}
                  max={215}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#F97316]"
                />
              </div>

            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold mb-3">
                5. DNEVNA RAZINA AKTIVNOSTI
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: "Sjedilački posao", val: 1.2 },
                  { label: "3x Tjedno Trening", val: 1.375 },
                  { label: "5x+ Tjedno Intenzivno", val: 1.55 },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActivity(item.val)}
                    className={`py-2.5 px-3 rounded-lg font-condensed font-bold text-xs tracking-wider uppercase transition-all border ${
                      activity === item.val
                        ? "bg-[#B4FF00] text-[#0B0F19] border-[#B4FF00] shadow-[0_0_15px_rgba(180,255,0,0.4)]"
                        : "bg-[#0B0F19] text-[#94A3B8] border-[#243350] hover:border-slate-500"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Transformation Goal */}
            <div>
              <label className="block text-xs font-condensed tracking-widest text-[#94A3B8] uppercase font-bold mb-3">
                6. PRIMARNI CILJ SURADNJE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "cut", label: "🔥 TOPLJENJE MASTI (CUT)" },
                  { id: "recomp", label: "⚡ BODY RECOMPOSITION" },
                  { id: "bulk", label: "💪 MIŠIĆNA MASA (BULK)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`py-3 px-3 rounded-lg font-condensed font-bold text-xs tracking-wider uppercase transition-all border ${
                      goal === item.id
                        ? "bg-[#F97316] text-[#0B0F19] border-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                        : "bg-[#0B0F19] text-[#94A3B8] border-[#243350] hover:border-slate-500"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Results Workstation */}
          <div className="lg:col-span-6 pro-card-active p-6 sm:p-8 space-y-8 relative overflow-hidden">
            
            {/* Background cyber glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="border-b border-[#243350] pb-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-condensed tracking-widest text-[#B4FF00] uppercase font-bold block">
                  PROCIJENJENI REZULTAT
                </span>
                <h3 className="text-2xl sm:text-3xl font-condensed font-black uppercase text-white">
                  REZULTAT TVOJE TRANSFORMACIJE
                </h3>
              </div>
              <TrendingUp className="w-8 h-8 text-[#F97316]" />
            </div>

            {/* Big Stats Row: Timeline & Calories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Timeline Card */}
              <div className="bg-[#0B0F19]/80 border border-[#243350] rounded-xl p-5 relative">
                <span className="text-xs font-condensed tracking-widest text-[#94A3B8] uppercase block mb-1">
                  PROCIJENJENO TRAJANJE
                </span>
                <div className="font-condensed font-black text-4xl text-white">
                  {estimatedWeeks} <span className="text-xl text-[#F97316] uppercase">tjedana</span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-2">
                  Uz 100% pridržavanje FitKoch protokola za <strong className="text-white">{Math.abs(weight - targetWeight)} kg</strong> promjene.
                </p>
              </div>

              {/* Target Calories Card */}
              <div className="bg-[#0B0F19]/80 border border-[#243350] rounded-xl p-5 relative">
                <span className="text-xs font-condensed tracking-widest text-[#94A3B8] uppercase block mb-1">
                  DNEVNI UNOS KALORIJA
                </span>
                <div className="font-condensed font-black text-4xl text-[#B4FF00]">
                  {targetCalories} <span className="text-xl text-white uppercase">kcal</span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-2">
                  TDEE baza ({tdee} kcal) prilagođena za tvoj cilj ({goal.toUpperCase()}).
                </p>
              </div>

            </div>

            {/* Macronutrient Breakdown */}
            <div className="bg-[#0B0F19]/60 border border-[#243350] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-condensed tracking-widest text-white uppercase font-bold">
                  ⚡ PREPORUČENA MAKRO RASPODJELA (DNEVNO)
                </span>
                <span className="text-xs font-condensed text-[#B4FF00] font-bold">100% FLEKSIBILNO</span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                
                {/* Protein */}
                <div className="bg-[#131B2E] border border-[#243350] rounded-lg p-3 text-center">
                  <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">BJELANČEVINE</span>
                  <span className="font-condensed font-black text-xl text-[#F97316]">{protein} g</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Izgradnja mišića</span>
                </div>

                {/* Carbs */}
                <div className="bg-[#131B2E] border border-[#243350] rounded-lg p-3 text-center">
                  <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">UGLJIKOHIDRATI</span>
                  <span className="font-condensed font-black text-xl text-white">{carbs} g</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Energija za trening</span>
                </div>

                {/* Fats */}
                <div className="bg-[#131B2E] border border-[#243350] rounded-lg p-3 text-center">
                  <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">ZDRAVE MASTI</span>
                  <span className="font-condensed font-black text-xl text-[#B4FF00]">{fat} g</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Hormonska ravnoteža</span>
                </div>

              </div>
            </div>

            {/* Success Probability Comparison */}
            <div className="bg-[#0B0F19]/80 border border-[#243350] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#B4FF00]/10 border border-[#B4FF00] flex items-center justify-center text-[#B4FF00]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-condensed text-[#94A3B8] uppercase block">VJEROJATNOST USPJEHA</span>
                  <span className="font-condensed font-black text-2xl text-white">98.4% <span className="text-xs font-normal text-[#B4FF00]">S FITKOCH SUSTAVOM</span></span>
                </div>
              </div>
              <div className="text-right sm:border-l sm:border-[#243350] sm:pl-4">
                <span className="text-[10px] font-condensed text-[#94A3B8] uppercase block">SAMOSTALNI POKUŠAJI</span>
                <span className="font-condensed font-bold text-base text-rose-400">14.2% (Jojo efekt)</span>
              </div>
            </div>

            {/* Transfer to Wizard CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleTransferToWizard}
                className="pro-btn-primary w-full py-4 px-6 text-base flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(249,115,22,0.5)] group"
              >
                <span>🚀 ŽELIM OVAJ REZULTAT — PRIJAVI SE ODMAH</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-[#94A3B8] mt-3">
                Klikom te prebacujemo u interaktivni upitnik gdje možeš poslati ove mjere izravno treneru Ivanu.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
