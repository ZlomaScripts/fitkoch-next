"use client";

import React from "react";
import { Flame, ArrowUp, CheckCircle2 } from "lucide-react";
import Instagram from "./icons/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080B12] border-t-2 border-[#F97316]/30 text-slate-400 py-16 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F97316]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10 items-center justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2.5 text-3xl font-extrabold tracking-tighter group font-display">
              <div className="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center text-white shadow-md">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <span className="text-white tracking-wider uppercase font-display">
                FIT<span className="text-[#F97316]">KOCH</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#B4FF00] text-black font-mono tracking-normal font-bold">
                PRO MAX
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0 font-body">
              Ekskluzivni 1-on-1 online coaching program pod vodstvom trenera Ivana Kocha (@fitkochivan). Izgradi tijelo, snagu i navike za cijeli život bez kulinarskog mučenja.
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-4 flex justify-center md:justify-start gap-8 text-sm font-bold uppercase tracking-wider font-display">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#F97316] uppercase font-bold tracking-widest">• Navigacija</div>
              <ul className="space-y-2">
                <li><a href="#o-metodi" className="hover:text-white transition-colors">Metodologija</a></li>
                <li><a href="#kalkulator" className="hover:text-white transition-colors">Kalkulator</a></li>
                <li><a href="#transformacije" className="hover:text-white transition-colors">Transformacije</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#B4FF00] uppercase font-bold tracking-widest">• Informacije</div>
              <ul className="space-y-2">
                <li><a href="#aplikacija" className="hover:text-white transition-colors">Aplikacija</a></li>
                <li><a href="#paketi" className="hover:text-white transition-colors">Paketi & Cijene</a></li>
                <li><a href="#upitnik" className="hover:text-[#F97316] text-white transition-colors">FitKoch Upitnik</a></li>
              </ul>
            </div>
          </div>

          {/* Social / Action Col */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
            <a
              href="https://www.instagram.com/fitkochivan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#162032] border border-white/15 text-white hover:border-[#F97316] transition-all font-display font-bold uppercase tracking-wider text-xs shadow-md"
            >
              <Instagram className="w-4 h-4 text-[#F97316]" />
              <span>@fitkochivan Instagram</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors font-display"
            >
              <span>Povratak na vrh</span>
              <ArrowUp className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} FitKoch Coaching by Ivan Koch. Sva prava pridržana.
          </div>
          <div className="flex items-center gap-2 text-[#B4FF00] font-bold font-display uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>UI-UX Pro Max Verified Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
