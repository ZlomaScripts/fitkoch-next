import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Apple, Play, Quote, User, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252429] text-white relative overflow-hidden flex flex-col font-sans">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#8B5CF6] to-transparent z-0 pointer-events-none opacity-80"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wider uppercase">
          <div className="bg-[#FFD21E] text-black p-1.5 rounded-full">
            <Dumbbell size={20} className="transform -rotate-45" />
          </div>
          FITKOCH
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="text-white hover:text-[#FFD21E] transition-colors">Početna</Link>
          <Link href="#o-meni" className="hover:text-white transition-colors">O Meni</Link>
          <Link href="#usluge" className="hover:text-white transition-colors">1na1 Trening</Link>
          <Link href="/prijava" className="hover:text-[#FFD21E] text-white font-bold transition-colors">Prijava Klijenata</Link>
        </div>
        
        <Link href="/prijava" className="bg-[#FFD21E] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors">
          Prijavi se
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              IVAN<br />
              <div className="flex items-center gap-4 text-[#FFD21E]">
                FITKOCH
                <div className="h-[3rem] lg:h-[5rem] w-16 lg:w-24 bg-gradient-to-r from-[#FFD21E] to-transparent rounded-r-full rounded-l-md ml-2 opacity-80"></div>
              </div>
              BAZINA
            </h1>
            
            <p className="text-xl text-gray-300 mt-2 leading-relaxed max-w-lg">
              Ekspert za <strong className="text-white">1 na 1 treninge</strong>. Vrhunsko znanje o ishrani, suplementaciji i planiranju treninga. Transformiši svoj život uz profesionalno vođenje.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/prijava" className="glass-btn flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:scale-105 transition-transform duration-300 border border-purple-400/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <Activity size={30} className="text-white" />
                <div className="text-left">
                  <div className="text-[11px] text-white/80 uppercase tracking-wide font-medium">Započni transformaciju</div>
                  <div className="text-xl font-bold leading-tight text-white">Prijavi se odmah</div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Right Column - App Mockup */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Using Next.js Image for the generated mockup */}
            <div className="relative w-[380px] h-[750px] transform rotate-[-15deg] translate-y-20 translate-x-10 hover:rotate-[-5deg] hover:translate-y-10 transition-all duration-700 ease-in-out shadow-2xl">
              <div className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-2 z-20 shadow-xl">
                <Activity size={20} className="text-[#FFD21E]" />
                <span className="font-semibold text-sm">PLAN</span>
              </div>
              <Image 
                src="/training-plan.jpg" 
                alt="Fitkoch Personal Training Plan" 
                fill 
                className="object-cover rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 md:mt-32 pb-10 z-20">
          {/* Card 1: Stats */}
          <div className="bg-[#8B5CF6] rounded-3xl p-8 flex flex-col justify-end min-h-[220px] shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-auto shadow-inner">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-black text-white/90">500+</h3>
              <p className="text-white/70 font-medium">Zadovoljnih klijenata</p>
            </div>
          </div>
          
          {/* Card 2: Image Card */}
          <div className="bg-[#FFD21E] rounded-3xl overflow-hidden min-h-[220px] shadow-xl relative hover:-translate-y-2 transition-transform duration-300">
            <Image 
              src="/muscular-man.jpg" 
              alt="Muscular fitness model" 
              fill 
              className="object-cover object-top mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500"
            />
            {/* The image already has a yellow background, but we can set the card bg just in case */}
          </div>
          
          {/* Card 3: Testimonial */}
          <div className="bg-white text-black rounded-3xl p-8 flex flex-col min-h-[220px] shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
            <Quote size={60} className="absolute top-6 right-6 text-purple-100 fill-purple-100" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=12" alt="Marko M." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Marko M.</h4>
                <p className="text-gray-500 text-xs">Klijent (1 na 1)</p>
              </div>
            </div>
            
            <div className="mt-auto relative z-10">
              <h3 className="font-bold text-xl mb-2">Najbolja odluka!</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ivanovo znanje o ishrani je neverovatno. Promenio sam navike i konačno vidim prave rezultate.
              </p>
            </div>
          </div>
          
          {/* Card 4: Icon Card */}
          <div className="bg-black rounded-3xl p-8 flex items-center justify-center min-h-[220px] shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#FFD21E] w-24 h-24 rounded-full flex items-center justify-center">
              <Dumbbell size={48} className="text-black transform -rotate-45" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
