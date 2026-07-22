"use client";

import React, { useState, useEffect } from "react";
import { ClipboardCheck, ArrowRight, ArrowLeft, Check, Copy, Send, Sparkles, CheckCircle2, Flame, Dumbbell, Zap, ShieldAlert } from "lucide-react";
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
      alert("Molimo unesite obavezna polja (Ime, Email i WhatsApp/Mobitel) kako bismo vas mogli kontaktirati za konzultacije.");
      return;
    }
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else if (step === 4) {
      // Submit & trigger confetti
      setStep(5);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.55 },
        colors: ["#F97316", "#B4FF00", "#FFFFFF"],
      });
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const copyToClipboard = () => {
    const summaryText = `📋 FITKOCH PRIJAVA (PRO MAX KLIJENT)
----------------------------------
Ime i prezime: ${formData.name || "Nije uneseno"}
Email adresa: ${formData.email || "Nije uneseno"}
WhatsApp/Mobitel: ${formData.phone || "Nije uneseno"}
Godine i Spol: ${formData.age || "---"} god (${formData.gender})
Trenutna težina: ${formData.weight || "?"} kg -> Ciljana težina: ${formData.targetWeight || "?"} kg (Visina: ${formData.height || "?"} cm)
Trening učestalost: ${formData.frequency}
Glavni cilj: ${formData.mainGoal}
Najveća prepreka: ${formData.obstacle || "Nema napomene"}
Odabrani paket: ${formData.packageChoice}
Razina spremnosti za rad: ${formData.commitment}/10`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    });
  };

  const progressPercent = ((step - 1) / 4) * 100;

  return (
    <section id="upitnik" className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/10">
      {/* High-Energy Background Radial Glows */}
      <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-[#F97316]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#B4FF00]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#162032] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider font-display">
            <ClipboardCheck className="w-4 h-4" />
            <span>INTERAKTIVNI UPITNIK • ZAMJENA ZA GOOGLE FORME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            BESPLATNE KONZULTACIJE & <span className="text-gradient-orange">PRIJAVA ZA 1-ON-1 COACHING</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
            Umjesto sporih vanjskih formi, ispuni naš interaktivni multi-step upitnik ovdje. Odgovori u 4 kratka koraka kako bi trener Ivan Koch procijenio tvoj metabolizam prije prvog razgovora.
          </p>
        </div>

        {/* Wizard Main Block Card */}
        <div className="block-card rounded-3xl border-2 border-white/15 shadow-2xl p-6 sm:p-10 relative bg-[#162032]">
          {/* Progress Bar & Steps Indicator */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3 text-xs sm:text-sm font-bold text-slate-400 font-display uppercase tracking-wider">
              <span className={step >= 1 ? "text-[#F97316]" : ""}>1. Osnovno</span>
              <span className={step >= 2 ? "text-[#F97316]" : ""}>2. Mjere</span>
              <span className={step >= 3 ? "text-[#F97316]" : ""}>3. Ciljevi</span>
              <span className={step >= 4 ? "text-[#F97316]" : ""}>4. Paket</span>
              <span className={step === 5 ? "text-[#B4FF00]" : ""}>5. Potvrda</span>
            </div>
            <div className="w-full h-3 bg-[#0B0F19] rounded-full overflow-hidden border border-white/10 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#B4FF00] rounded-full transition-all duration-500 shadow-md"
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
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">KORAK 1: OSNOVNE INFORMACIJE</h3>
                  <p className="text-sm text-slate-400 font-body">Upoznajmo se — unesi kontakt podatke na koje ti se trener Ivan javlja nakon analize.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Ime i Prezime *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="npr. Ivan Horvat"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] transition-colors font-body text-base shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Email Adresa *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ivan@primjer.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] transition-colors font-body text-base shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">WhatsApp / Mobitel *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+385 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] transition-colors font-body text-base shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="age" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Godine *</label>
                    <input
                      id="age"
                      type="number"
                      placeholder="28"
                      min={16}
                      max={85}
                      value={formData.age}
                      onChange={(e) => updateField("age", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] transition-colors font-body text-base shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="gender" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Spol *</label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] transition-colors font-body text-base shadow-inner"
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
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">KORAK 2: TVOJA FIZIČKA POČETNA TOČKA</h3>
                  <p className="text-sm text-slate-400 font-body">Precizne brojke nam pomažu da izračunamo tvoj trenutni BMR i brzinu metabolizma.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="weight" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Trenutna Težina (kg)</label>
                    <input
                      id="weight"
                      type="number"
                      placeholder="85"
                      value={formData.weight}
                      onChange={(e) => updateField("weight", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] text-base shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="targetWeight" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Ciljana Težina (kg)</label>
                    <input
                      id="targetWeight"
                      type="number"
                      placeholder="75"
                      value={formData.targetWeight}
                      onChange={(e) => updateField("targetWeight", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] text-base shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="height" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Visina (cm)</label>
                    <input
                      id="height"
                      type="number"
                      placeholder="180"
                      value={formData.height}
                      onChange={(e) => updateField("height", e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] text-base shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="frequency" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Koliko Puta Tjedno Trenutačno Treniraš?</label>
                  <select
                    id="frequency"
                    value={formData.frequency}
                    onChange={(e) => updateField("frequency", e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] text-base shadow-inner font-body"
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
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">KORAK 3: TVOJ GLAVNI CILJ I NAJVEĆI IZAZOV</h3>
                  <p className="text-sm text-slate-400 font-body">Odaberi što ti je apsolutni prioritet u sljedećih 90 do 180 dana.</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Glavni Cilj Transformacije:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "g1", val: "Gubitak masnoće i definicija", icon: "🔥" },
                      { id: "g2", val: "Izgradnja mišićne mase i snage", icon: "💪" },
                      { id: "g3", val: "Rekonstrukcija (skidanje sala + mišići)", icon: "⚡" },
                      { id: "g4", val: "Kondicija, zdravlje i maksimalna energija", icon: "❤️" },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => updateField("mainGoal", g.val)}
                        className={`p-4 rounded-2xl text-sm font-extrabold text-left border flex items-center gap-3 transition-all font-display uppercase tracking-wide ${
                          formData.mainGoal === g.val
                            ? "bg-[#F97316]/20 border-[#F97316] text-[#F97316] shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                            : "bg-[#0B0F19] border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-xl">{g.icon}</span>
                        <span>{g.val}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="obstacle" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">
                    Što ti je do sada bila najveća prepreka u prehrani ili treningu?
                  </label>
                  <textarea
                    id="obstacle"
                    rows={3}
                    placeholder="npr. Nedostatak vremena, slatkiši navečer, odustajanje nakon 2 tjedna, nedostatak jasnog plana..."
                    value={formData.obstacle}
                    onChange={(e) => updateField("obstacle", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#0B0F19] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] font-body text-base shadow-inner"
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
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">KORAK 4: PREFERIRANI PAKET & SPREMNOST</h3>
                  <p className="text-sm text-slate-400 font-body">Radimo isključivo s klijentima koji su ozbiljni i spremni dosljedno pratiti sustav.</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">Koji paket suradnje te najviše zanima?</label>
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
                        className={`p-4 rounded-2xl text-sm font-black text-left border transition-all font-display uppercase tracking-wide ${
                          formData.packageChoice === p.val
                            ? "bg-[#F97316]/20 border-[#F97316] text-[#F97316] shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                            : "bg-[#0B0F19] border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="commitment" className="block text-sm font-bold text-slate-300 font-display uppercase tracking-wide">
                    Od 1 do 10, koliko si spreman/na uložiti truda u ovu transformaciju?
                  </label>
                  <select
                    id="commitment"
                    value={formData.commitment}
                    onChange={(e) => updateField("commitment", e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-[#0B0F19] border border-white/15 text-white focus:outline-none focus:border-[#F97316] font-body text-base shadow-inner"
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
                <div className="w-16 h-16 rounded-2xl bg-[#B4FF00]/20 border-2 border-[#B4FF00] text-[#B4FF00] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(180,255,0,0.3)] animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white font-display uppercase tracking-tight">PRIJAVA JE USPJEŠNO SPREMLJENA!</h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mt-2 font-body">
                    Hvala na povjerenju, <strong className="text-white font-bold">{formData.name || "Klijente"}</strong>. Tvoja prijava je pripremljena za trenera <strong className="text-[#F97316]">Ivana Kocha</strong>.
                  </p>
                </div>

                {/* Ticket Summary Box */}
                <div className="bg-[#0B0F19] border border-white/15 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3 text-sm font-mono text-slate-300 shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Klijent:</span>
                    <span className="text-white font-bold">{formData.name || "---"} ({formData.phone || "---"})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Odabrani Paket:</span>
                    <span className="text-[#F97316] font-bold">{formData.packageChoice}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Glavni Cilj:</span>
                    <span className="text-white">{formData.mainGoal}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Status Pripreme:</span>
                    <span className="text-[#B4FF00] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> SPREMNO ZA SLANJE / INSTAGRAM
                    </span>
                  </div>
                </div>

                {/* Direct Actions Block */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={copyToClipboard}
                    className={`px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all w-full sm:w-auto uppercase tracking-wider font-display ${
                      copied
                        ? "bg-[#22C55E] text-white shadow-[0_0_25px_rgba(34,197,129,0.5)]"
                      : "btn-orange shadow-lg"
                    }`}
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    <span>{copied ? "✓ KOPIRANO U MEĐUSPREMNIK!" : "KOPIRAJ SAŽETAK PRIJAVE"}</span>
                  </button>

                  <a
                    href="https://www.instagram.com/fitkochivan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lime px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 w-full sm:w-auto uppercase tracking-wider font-display"
                  >
                    <Instagram className="w-5 h-5 text-black" />
                    <span>JAVI SE IVANU NA INSTAGRAM</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
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
                    className="text-xs text-slate-500 hover:text-slate-300 underline font-body"
                  >
                    ← Ispuni novi upitnik / resetiraj sve podatke
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
                    className="btn-outline-block px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 font-display uppercase tracking-wider"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Nazad</span>
                  </button>
                ) : <div />}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="btn-orange px-8 py-4 rounded-2xl text-sm font-black flex items-center gap-2 shadow-lg font-display uppercase tracking-wider"
              >
                <span>{step === 4 ? "POŠALJI PRIJAVU TRENERU IVANU" : "SLJEDEĆI KORAK"}</span>
                {step === 4 ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
