import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Methodology from "@/components/Methodology";
import Transformations from "@/components/Transformations";
import AppShowcase from "@/components/AppShowcase";
import Pricing from "@/components/Pricing";
import Wizard from "@/components/Wizard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#080a09] text-white">
      <Navbar />
      <Hero />
      <Calculator />
      <Methodology />
      <Transformations />
      <AppShowcase />
      <Pricing />
      <Wizard />
      <FAQ />
      <Footer />
    </main>
  );
}
