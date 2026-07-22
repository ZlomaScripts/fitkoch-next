import React from "react";
import { Mail, MapPin, ClipboardCheck } from "lucide-react";
import Instagram from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#050706] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter">
              <span className="w-3 h-3 rounded-full bg-[#b4ff00] shadow-[0_0_12px_#b4ff00]" />
              <span className="font-syne text-white tracking-wider">
                FIT<span className="text-[#b4ff00]">KOCH</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Ekskluzivni 1-on-1 online fitness coaching za ambiciozne pojedince. Pridruži se stotinama transformiranih klijenta pod vodstvom trenera Ivana Kocha.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/fitkochivan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#b4ff00] hover:border-[#b4ff00]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold font-syne uppercase tracking-wider text-xs">Brzi Linkovi</h4>
            <ul className="space-y-2.5">
              <li><a href="#o-metodi" className="hover:text-[#b4ff00] transition-colors">Metodologija</a></li>
              <li><a href="#kalkulator" className="hover:text-[#b4ff00] transition-colors">Kalkulator Rezultata</a></li>
              <li><a href="#transformacije" className="hover:text-[#b4ff00] transition-colors">Transformacije</a></li>
              <li><a href="#aplikacija" className="hover:text-[#b4ff00] transition-colors">Naša Aplikacija</a></li>
              <li><a href="#paketi" className="hover:text-[#b4ff00] transition-colors">Paketi & Cijene</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold font-syne uppercase tracking-wider text-xs">Kontakt & Prijava</h4>
            <ul className="space-y-3">
              <li>
                <a href="#upitnik" className="flex items-center gap-2 text-[#b4ff00] hover:underline font-bold">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Ispuni FitKoch Upitnik</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fitkochivan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4 text-[#b4ff00]" />
                  <span>@fitkochivan</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10b981]" />
                <span>info@fitkoch.hr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Online Coaching diljem regije i EU</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 FitKoch — Ivan Koch. Sva prava pridržana.</p>
          <p className="font-semibold text-gray-400">
            Next.js 16 + React 19 + Tailwind CSS + UI/UX Pro Max
          </p>
        </div>
      </div>
    </footer>
  );
}
