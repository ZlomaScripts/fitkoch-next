import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitKoch — 1-na-1 Online Fitness Coaching | Trener Ivan Koch",
  description:
    "Ekskluzivni 1-on-1 online fitness i nutricionistički coaching s trenerom Ivanom Kochom (@fitkochivan). Započni potpunu transformaciju tijela i uma. Besplatne konzultacije i interaktivni upitnik.",
  keywords: [
    "fitkoch",
    "ivan koch",
    "online treninzi",
    "osobni trener",
    "fitness coaching",
    "transformacija tijela",
    "nutricionist",
    "personal trainer balkan",
  ],
  authors: [{ name: "Ivan Koch", url: "https://www.instagram.com/fitkochivan" }],
  openGraph: {
    title: "FitKoch — 1-na-1 Online Fitness Coaching | Trener Ivan Koch",
    description:
      "Zaboravi na generične planove i izgladnjivanje. 100% prilagođen trening, precizna prehrana i svakodnevna podrška trenera Ivana Kocha.",
    url: "https://www.instagram.com/fitkochivan",
    siteName: "FitKoch Coaching",
    images: [
      {
        url: "/assets/hero_coach.jpg",
        width: 1200,
        height: 630,
        alt: "Trener Ivan Koch u luksuznoj teretani",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${syne.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#080a09] text-[#f3f4f6] antialiased selection:bg-[#b4ff00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
