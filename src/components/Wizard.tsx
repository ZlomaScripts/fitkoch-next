"use client";

import React, { useState, useEffect } from "react";
import { ClipboardCheck, ArrowRight, ArrowLeft, Check, Copy, Send, Sparkles, CheckCircle2 } from "lucide-react";
import Instagram from "./icons/InstagramIcon";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Wizard() {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "Muško",
    weight: "",
    targetWeight: "",
    height: "",
    frequency: "3-4 puta tjedno",
    mainGoal: "Gubitak masnoće i definicija",
    obstacle: "",
    packageChoice: "6 Mjeseci - Masterclass",
    commitment: "10",
  });

  // Listen for package selection from Pricing section
  useEffect(() => {
    const handlePackageSelect = (e: any) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, packageChoice: e.detail }));
      }
    };
    window.addEventListener("selectFitKochPackage", handlePackageSelect);
    return () => window.removeEventListener("selectFitKochPackage", handlePackageSelect);
  }, []);

  const updateField = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      alert("Molimo unesite obavezna polja (Ime, Email i WhatsApp) kako bismo vas mogli kontaktirati.");
      return;
    }
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else if (step === 4) {
      // Submit & trigger confetti
      setStep(5);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#b4ff00", "#10b981", "#ffffff"],
      });
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const copyToClipboard = () => {
    const summaryText = `📋 FITKOCH PRIJAVA (KLIJENT)
----------------------------------
Ime: ${formData.name || "Nije uneseno"}
Email: ${formData.email || "Nije uneseno"}
WhatsApp: ${formData.phone || "Nije uneseno"}
Godine: ${formData.age || "Nije uneseno"} (${formData.gender})
Težina: ${formData.weight || "?"} kg -> Cilj: ${formData.targetWeight || "?"} kg (Visina: ${formData.height || "?"} cm)
Trening učestalost: ${formData.frequency}
Glavni cilj: ${formData.mainGoal}
Najveća prepreka: ${formData.obstacle || "Nema napomene"}
Odabrani paket: ${formData.packageChoice}
Razina spremnosti: ${formData.commitment}/10`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    });
  };

  const progressPercent = ((step - 1) / 4) * 100;

  return (
    <section id="upitnik" className="py-24 relative bg-[#080a09] overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#b4ff00]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#b4ff00] text-xs font-bold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            FITKOCH UPITNIK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Besplatne Konzultacije & Prijava Za 1-on-1 Coaching
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Umjesto vanjskih Google formi, ispuni naš interaktivni upitnik ovdje. Odgovori u 4 kratka koraka kako bi trener Ivan procijenio tvoju situaciju prije prvog razgovora.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="glass-card rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-10 relative">
          {/* Progress Bar & Steps indicator */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3 text-xs sm:text-sm font-bold text-gray-400">
              <span className={step >= 1 ? "text-[#b4ff00]" : ""}>1. Osnovno</span>
              <span className={step >= 2 ? "text-[#b4ff00]" : ""}>2. Fizičke mjere</span>
              <span className={step >= 3 ? "text-[#b4ff00]" : ""}>3. Ciljevi</span>
              <span className={step >= 4 ? "text-[#b4ff00]" : ""}>4. Paket</span>
              <span className={step === 5 ? "text-[#10b981]" : ""}>5. Potvrda</span>
            </div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#b4ff00] to-[#10b981] rounded-full transition-all duration-500"
                style={{ width: `${step === 5 ? 100 : progressPercent}%` }}
              />
            </div>
          </div>

          {/* Step Contents */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">Korak 1: Osnovne Informacije</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Upoznajmo se — reci nam kako da te kontaktiramo nakon analize.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Ime i Prezime *</label>
                    <input
                      type="text"
                      placeholder="npr. Ivan Horvat"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#b4ff00] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Email Adresa *</label>
                    <input
                      type="email"
                      placeholder="ivan@primjer.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#b4ff00] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">WhatsApp / Mobitel *</label>
                    <input
                      type="tel"
                      placeholder="+385 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#b4ff00] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Godine *</label>
                    <input
                      type="number"
                      placeholder="28"
                      min={16}
                      max={85}
                      value={formData.age}
                      onChange={(e) => updateField("age", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#b4ff00] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Spol *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#111413] border border-white/15 text-white focus:outline-none focus:border-[#b4ff00] transition-colors"
                    >
                      <option value="Muško">Muško</option>
                      <option value="Žensko">Žensko</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">Korak 2: Tvoja Fizička Početna Točka</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Precizne brojke nam pomažu da shvatimo tvoj trenutni metabolizam.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Trenutna Težina (kg)</label>
                    <input
                      type="number"
                      placeholder="85"
                      value={formData.weight}
                      onChange={(e) => updateField("weight", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#b4ff00]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Ciljana Težina (kg)</label>
                    <input
                      type="number"
                      placeholder="75"
                      value={formData.targetWeight}
                      onChange={(e) => updateField("targetWeight", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#b4ff00]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">Visina (cm)</label>
                    <input
                      type="number"
                      placeholder="180"
                      value={formData.height}
                      onChange={(e) => updateField("height", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#b4ff00]"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-sm font-semibold text-gray-300">Koliko Puta Tjedno Trenutačno Treniraš?</label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => updateField("frequency", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111413] border border-white/15 text-white focus:outline-none focus:border-[#b4ff00]"
                  >
                    <option value="Ne treniram (0 puta)">Ne treniram trenutačno (0 puta)</option>
                    <option value="1-2 puta tjedno">1 - 2 puta tjedno</option>
                    <option value="3-4 puta tjedno">3 - 4 puta tjedno</option>
                    <option value="5+ puta tjedno">5 ili više puta tjedno</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">Korak 3: Tvoj Glavni Cilj i Najveći Izazov</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Odaberi što želiš postići u sljedećih 90 dana.</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-300">Glavni Cilj Transformacije:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "g1", val: "Gubitak masnoće i definicija", icon: "🔥" },
                      { id: "g2", val: "Izgradnja mišićne mase i snage", icon: "💪" },
                      { id: "g3", val: "Rekonstrukcija (skidanje sala + mišići)", icon: "⚡" },
                      { id: "g4", val: "Kondicija, zdravlje i energija", icon: "❤️" },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => updateField("mainGoal", g.val)}
                        className={`p-4 rounded-2xl text-sm font-semibold text-left border flex items-center gap-3 transition-all ${
                          formData.mainGoal === g.val
                            ? "bg-[#b4ff00]/10 border-[#b4ff00] text-[#b4ff00] shadow-[0_0_15px_rgba(180,255,0,0.15)]"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-xl">{g.icon}</span>
                        <span>{g.val}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-sm font-semibold text-gray-300">
                    Što ti je do sada bila najveća prepreka u prehrani ili treningu?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="npr. Nedostatak vremena, slatkiši navečer, odustajanje nakon 2 tjedna..."
                    value={formData.obstacle}
                    onChange={(e) => updateField("obstacle", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#b4ff00]"
                  />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">Korak 4: Spremnost i Preferirani Paket</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Radimo isključivo s klijentima koji su ozbiljni i spremni poslušati savjete.</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-300">Koji paket suradnje te najviše zanima?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "p1", val: "3 Mjeseca - Start", label: "🚀 Start (3 Mjeseca - 199€/mj)" },
                      { id: "p2", val: "6 Mjeseci - Masterclass", label: "🌟 Masterclass (6 Mjeseci - 169€/mj)" },
                      { id: "p3", val: "12 Mjeseci - VIP Elite", label: "👑 VIP Elite (12 Mjeseci - 149€/mj)" },
                      { id: "p4", val: "Trebam savjet / Neka Ivan preporuči", label: "🤝 Neka trener Ivan preporuči" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => updateField("packageChoice", p.val)}
                        className={`p-4 rounded-2xl text-sm font-bold text-left border transition-all ${
                          formData.packageChoice === p.val
                            ? "bg-[#b4ff00]/15 border-[#b4ff00] text-[#b4ff00] shadow-[0_0_15px_rgba(180,255,0,0.18)]"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-sm font-semibold text-gray-300">
                    Od 1 do 10, koliko si spreman/na uložiti truda u ovu transformaciju?
                  </label>
                  <select
                    value={formData.commitment}
                    onChange={(e) => updateField("commitment", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111413] border border-white/15 text-white focus:outline-none focus:border-[#b4ff00]"
                  >
                    <option value="10">10 / 10 — Spreman sam 100% bez ikakvih izgovora!</option>
                    <option value="9">9 / 10 — Vrlo sam motiviran i jedva čekam početak</option>
                    <option value="8">8 / 10 — Želim rezultate, trebam vodstvo i strukturu</option>
                    <option value="7">7 / 10 — Spreman sam probati uz fleksibilan pristup</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981] text-[#10b981] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white font-syne">Prijava Uspješno Snimljena!</h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mt-2">
                    Hvala ti na povjerenju, <strong className="text-white">{formData.name || "Klijente"}</strong>. Tvoj upitnik je spreman za trenera <strong className="text-[#b4ff00]">Ivana Kocha</strong>.
                  </p>
                </div>

                {/* Ticket Summary Box */}
                <div className="bg-black/60 border border-white/15 rounded-2xl p-5 text-left max-w-lg mx-auto space-y-3 text-sm font-mono text-gray-300 shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Klijent:</span>
                    <span className="text-white font-bold">{formData.name || "---"} ({formData.phone || "---"})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Paket:</span>
                    <span className="text-[#b4ff00] font-bold">{formData.packageChoice}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Glavni cilj:</span>
                    <span className="text-white">{formData.mainGoal}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-400">Status UI/UX:</span>
                    <span className="text-[#10b981] font-bold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" /> Spremni podaci za slanje / backend
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={copyToClipboard}
                    className={`px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all w-full sm:w-auto ${
                      copied
                        ? "bg-[#10b981] text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : "btn-lime shadow-lg"
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "✓ Kopirano u međuspremnik!" : "Kopiraj sažetak prijave"}</span>
                  </button>

                  <a
                    href="https://www.instagram.com/fitkochivan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <Instagram className="w-4 h-4 text-[#b4ff00]" />
                    <span>Javi se Ivanu na Instagram</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        age: "",
                        gender: "Muško",
                        weight: "",
                        targetWeight: "",
                        height: "",
                        frequency: "3-4 puta tjedno",
                        mainGoal: "Gubitak masnoće i definicija",
                        obstacle: "",
                        packageChoice: "6 Mjeseci - Masterclass",
                        commitment: "10",
                      });
                    }}
                    className="text-xs text-gray-500 hover:text-gray-300 underline"
                  >
                    ← Ispuni novi upitnik / resetiraj podatke
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-glass px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Nazad</span>
                  </button>
                ) : <div />}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="btn-lime px-8 py-3.5 rounded-xl text-sm font-extrabold flex items-center gap-2 shadow-lg"
              >
                <span>{step === 4 ? "Pošalji Prijavu Treneru Ivanu" : "Sljedeći Korak"}</span>
                {step === 4 ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
