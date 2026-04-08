import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css'
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Production from "./components/Production";
import Team from "./components/Team";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import Gallery2 from "./components/Gallery2";
import Lenis from "./components/Lenis";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metallbau C. Meyer | Belm",
  description: "Metallbau Meyer - Ihr Partner für Metallbau und Stahlkonstruktionen in Osnabrück",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${workSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Lenis />
        <Hero />
        <StatsBar />
        <About />
        {/* <Gallery /> */}
        <Gallery2 />
        <Production />
        <Team />
        <ContactMap />
        <Footer />
        {children}
      </body>
    </html>
  );
}
