import Link from "next/link";
import { Dumbbell, ArrowLeft, Send } from "lucide-react";

export default function Prijava() {
  return (
    <div className="min-h-screen bg-[#252429] text-white relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#8B5CF6]/30 to-transparent z-0 pointer-events-none opacity-80"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6 max-w-4xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wider uppercase hover:text-[#FFD21E] transition-colors">
          <div className="bg-[#FFD21E] text-black p-1.5 rounded-full">
            <Dumbbell size={20} className="transform -rotate-45" />
          </div>
          FITKOCH
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Nazad na početnu
        </Link>
      </nav>

      {/* Main Form Container */}
      <main className="relative z-10 max-w-3xl mx-auto w-full px-6 py-10 pb-20">
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Prijavi se za <span className="text-[#FFD21E]">Trening</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Popuni formu ispod kako bismo imali bolji uvid u tvoje trenutno stanje i ciljeve. Odgovoriće ti se u najkraćem mogućem roku.
            </p>
          </div>

          <form className="space-y-8">
            {/* Osobni podaci */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-white/10 pb-2 text-[#8B5CF6]">Lični Podaci</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Ime i Prezime</label>
                  <input type="text" placeholder="Tvoje ime" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Adresa</label>
                  <input type="email" placeholder="tvoj@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Broj Telefona</label>
                  <input type="tel" placeholder="+381 6X XXX XXX" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Godine</label>
                    <input type="number" placeholder="Npr. 25" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Pol</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all appearance-none" required>
                      <option value="" disabled selected>Izaberi</option>
                      <option value="Muski">Muški</option>
                      <option value="Zenski">Ženski</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Trening info */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold border-b border-white/10 pb-2 text-[#8B5CF6]">Fizičko Stanje i Ciljevi</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Trenutna Kilaža (kg)</label>
                  <input type="number" placeholder="Npr. 80" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Visina (cm)</label>
                  <input type="number" placeholder="Npr. 185" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all" required />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">Koji je tvoj glavni cilj?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input type="radio" name="goal" className="peer sr-only" value="mrsavljenje" />
                    <div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300 peer-checked:bg-[#FFD21E]/10 peer-checked:border-[#FFD21E] peer-checked:text-[#FFD21E] transition-all">
                      Mršavljenje
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="goal" className="peer sr-only" value="misicna_masa" />
                    <div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300 peer-checked:bg-[#FFD21E]/10 peer-checked:border-[#FFD21E] peer-checked:text-[#FFD21E] transition-all">
                      Mišićna Masa
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="goal" className="peer sr-only" value="kondicija" />
                    <div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300 peer-checked:bg-[#FFD21E]/10 peer-checked:border-[#FFD21E] peer-checked:text-[#FFD21E] transition-all">
                      Kondicija / Zdravlje
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Iskustvo u treningu</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all appearance-none" required>
                  <option value="" disabled selected>Izaberi svoje iskustvo</option>
                  <option value="pocetnik">Početnik (Nikada nisam trenirao/la ili vrlo malo)</option>
                  <option value="srednji">Srednji (Treniram, ali nisam konstantan/na)</option>
                  <option value="napredni">Napredni (Redovno treniram, tražim sledeći nivo)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Da li imate neke povrede ili zdravstvene probleme?</label>
                <textarea 
                  rows={3} 
                  placeholder="Ako da, navedi koje. Ako ne, upiši 'Ne'." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFD21E] focus:ring-1 focus:ring-[#FFD21E] transition-all resize-none"
                  required
                ></textarea>
              </div>
            </div>

            <button type="button" className="w-full bg-[#FFD21E] hover:bg-white text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-8">
              Pošalji Prijavu <Send size={20} />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Pritiskom na dugme slažete se da Vas kontaktiramo povodom treninga.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
