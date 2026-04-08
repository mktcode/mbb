"use client";

import { useEffect, useState } from "react";

export default function MetallbauMeyerHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUp = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  const fadeRight = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
    }`;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">

      {/* ── Fullscreen background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage:
            "url('/header2.png')",
          backgroundPosition: "center 40%",
        }}
      />

      {/* ── Gradient overlay: strong left, fading right ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75  to-transparent" />
      {/* ── Bottom fade for stats legibility ── */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/60 to-transparent" />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-[5vw] h-[68px] bg-white/60 backdrop-blur-sm rounded-b-lg">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] bg-[#003d7c] rounded-[6px] flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="10" width="4" height="8" fill="white" opacity="0.8" />
              <rect x="8" y="5" width="4" height="13" fill="white" opacity="0.9" />
              <rect x="14" y="2" width="4" height="16" fill="white" />
            </svg>
          </div>
          <span className="font-semibold text-[0.92rem] text-[#0d1117] tracking-tight">
            Metallbau Meyer
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          {["Leistungen", "Projekte", "Über uns"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.875rem] font-medium text-gray-600 no-underline hover:text-[#003d7c] transition-colors duration-150"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 bg-[#003d7c] hover:bg-[#002d5e] text-white text-[0.82rem] font-medium px-5 py-2.5 rounded-lg no-underline transition-colors duration-200"
        >
          Kontakt aufnehmen
        </a>
      </nav>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-[5vw] max-w-3xl">

        {/* Eyebrow */}
        <div className={`${fadeUp("delay-500")} mb-7`}>
          <span className="inline-flex items-center gap-1.5 bg-[#003d7c]/10 text-[#003d7c] text-[0.72rem] font-medium tracking-[0.04em] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003d7c]" />
            Metallbau &amp; Stahlkonstruktion · Osnabrück
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-work-sans font-extrabold leading-[1.04] tracking-[-0.025em] text-[#0d1117] mb-6`}
          style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}
        >
          <span className={`${fadeRight("delay-200")} block`}>Persönlich.</span>
          <span className={`${fadeRight("delay-300")} block`}>Kompetent.</span>
          <span className={`${fadeRight("delay-400")} block text-[#0061a5] italic`}>Sicher.</span>
        </h1>

        {/* Sub */}
        <p
          className={`${fadeUp(
            "delay-600"
          )} text-gray-500 font-normal leading-relaxed mb-10 max-w-[400px]`}
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
        >
          Wir realisieren anspruchsvolle Metallbauprojekte — von der Planung bis zur Montage. Qualität, die trägt.
        </p>

        {/* CTAs */}
        <div className={`${fadeUp("delay-[700ms]")} flex flex-wrap items-center gap-3 mb-12`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#003d7c] hover:bg-[#002d5e] active:-translate-y-0 hover:-translate-y-px text-white text-[0.88rem] font-medium px-7 py-3.5 rounded-lg no-underline transition-all duration-200"
          >
            Projekt besprechen
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/60 hover:bg-white/80 text-gray-700 text-[0.88rem] font-medium px-7 py-3.5 rounded-lg no-underline backdrop-blur-sm transition-all duration-200"
          >
            Referenzen ansehen
          </a>
        </div>

        {/* Checklist */}
        <div className={`${fadeUp("delay-[820ms]")} flex flex-col gap-2.5`}>
          {[
            "Zertifiziert nach DIN EN 1090",
            "Über 25 Jahre Erfahrung im Metallbau",
            "Persönliche Beratung & feste Ansprechpartner",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-[0.84rem] text-gray-600 font-normal">
              <div className="w-[18px] h-[18px] rounded-full bg-[#003d7c]/10 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#0061a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
