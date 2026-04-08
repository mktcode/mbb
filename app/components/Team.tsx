"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const TEAM = [
  {
    name: "Thomas Meyer",
    role: "Geschäftsführer & Gründer",
    bio: "Über 30 Jahre Erfahrung im Metallbau. Thomas hat das Unternehmen von einem 3-Mann-Betrieb zu einem der führenden Metallbauer der Region aufgebaut.",
    initials: "TM",
    accent: "#003d7c",
  },
  {
    name: "Sandra Meyer",
    role: "Kaufmännische Leitung",
    bio: "Verantwortlich für Projektkoordination, Angebotswesen und Kundenkommunikation. Ihr Fokus: dass jedes Projekt pünktlich und im Budget bleibt.",
    initials: "SM",
    accent: "#0061a5",
  },
  {
    name: "Kai Hoffmann",
    role: "Leitender Konstrukteur",
    bio: "Meister seines Fachs: Kai entwickelt CAD-Modelle und Fertigungszeichnungen für die komplexesten Sonderkonstruktionen — präzise auf den Zehntelmillimeter.",
    initials: "KH",
    accent: "#003d7c",
  },
  {
    name: "Marco Schulz",
    role: "Montageleiter",
    bio: "15 Jahre Erfahrung auf Baustellen aller Größen. Marco koordiniert unsere Montagekolonnen und sorgt für reibungslose Abläufe direkt vor Ort.",
    initials: "MS",
    accent: "#0061a5",
  },
];

const VALUES = [
  { number: "01", title: "Handwerk", text: "Jede Schweißnaht, jede Verbindung — von Hand kontrolliert und nach höchsten Standards ausgeführt." },
  { number: "02", title: "Verlässlichkeit", text: "Termine sind Versprechen. Wir liefern pünktlich — auch wenn es kompliziert wird." },
  { number: "03", title: "Erfahrung", text: "25 Jahre am Markt. Wir haben fast jede Herausforderung schon einmal gelöst." },
];

export default function Team() {
  const [ref, inView] = useInView(0.08);

  const fade = (delay) => ({
    transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-[5vw] py-28">

        {/* ── Header ── */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
          style={fade("0ms")}
        >
          <div>
            <p className="text-[0.7rem] font-medium text-[#0061a5] uppercase tracking-[0.14em] mb-4">
              Menschen & Kompetenz
            </p>
            <h2
              className="font-work-sans font-extrabold leading-[1.04] tracking-tight text-[#0d1117]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Persönlich bedeutet<br />
              <span className="text-[#0061a5]">wir kennen Ihren Namen.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-normal leading-relaxed max-w-xs text-[0.92rem]">
            Kein Callcenter, keine wechselnden Ansprechpartner. Bei Metallbau Meyer arbeiten Sie immer mit denselben Menschen.
          </p>
        </div>

        {/* ── Team grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="bg-white group border-r border-gray-100 last:border-0"
              style={fade(`${i * 80 + 80}ms`)}
            >
              {/* Avatar */}
              <div className="px-8 pt-10 pb-7">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `${member.accent}10` }}
                >
                  <span
                    className="font-work-sans font-bold text-[0.82rem] tracking-wide"
                    style={{ color: member.accent }}
                  >
                    {member.initials}
                  </span>
                </div>

                <p
                  className="text-[0.65rem] font-medium uppercase tracking-[0.1em] mb-1.5"
                  style={{ color: member.accent }}
                >
                  {member.role}
                </p>
                <h3 className="font-work-sans font-bold text-[#0d1117] text-[1.05rem] tracking-tight mb-4">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-[0.82rem] leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Values row ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 mt-12"
          style={fade("500ms")}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.number}
              className="bg-white px-8 py-10 flex gap-6 items-start"
              style={{
                transition: `opacity 0.65s ease ${500 + i * 80}ms, transform 0.65s ease ${500 + i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <span
                className="font-work-sans font-extrabold text-[2rem] leading-none tracking-tight flex-shrink-0 mt-0.5"
                style={{ color: "#e5e7eb" }}
              >
                {v.number}
              </span>
              <div>
                <h4 className="font-work-sans font-bold text-[#0d1117] text-[0.95rem] tracking-tight mb-2">
                  {v.title}
                </h4>
                <p className="text-gray-400 text-[0.82rem] leading-relaxed font-normal">
                  {v.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}