import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitkochnext.vercel.app"),
  title: "FitKoch — 1-on-1 Online Fitness Coaching Pro | Trener Ivan Koch",
  description:
    "Ekskluzivni 1-on-1 online fitness i nutricionistički coaching s trenerom Ivanom Kochom (@fitkochivan). Znanstveni pristup, izvanredni rezultati, vrhunska aplikacija za praćenje bez gladovanja.",
  keywords: [
    "fitkoch",
    "ivan koch",
    "online treninzi",
    "osobni trener",
    "fitness coaching pro",
    "transformacija tijela",
    "nutricionist",
    "personal trainer",
  ],
  authors: [{ name: "Ivan Koch", url: "https://www.instagram.com/fitkochivan" }],
  openGraph: {
    title: "FitKoch — 1-on-1 Online Fitness Coaching | Trener Ivan Koch",
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
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#0F1115] text-[#F8FAFC] antialiased selection:bg-[#6B38FB] selection:text-white font-regular">
        {children}
      </body>
    </html>
  );
}
