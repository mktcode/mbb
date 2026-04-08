"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

const CAPABILITIES = [
  {
    title: "CNC-Zentrum",
    description:
      "Hochpräzise Laser- und Frästechnik für komplexe Bauteile aus Stahl und Aluminium.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26l5-5m0 0l4-8 4 4-8 4zm0 0l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M22 6V4M22 16v-2M26 10h2M16 10h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Schweißplatz",
    description:
      "WIG, MIG/MAG und Roboterschweißen nach höchsten Industrienormen.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24c0 0 3-4 8-4s8 4 8 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16 20V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16 10l-3-4M16 10l3-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="24" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
        <circle cx="20" cy="7" r="1" fill="currentColor" opacity="0.4"/>
        <circle cx="27" cy="7" r="1" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Endmontage",
    description:
      "Vormontage komplexer Baugruppen für eine reibungslose Installation vor Ort.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 22l3-3m9-9l-3 3m0 0l-6 6m6-6l-4-4-2 2 4 4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10l2-2a2 2 0 00-3-3l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 22l-2 2a2 2 0 003 3l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Production() {
  const [ref, inView] = useInView(0.1);

  const fade = (delay) => ({
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#003d7c" }}
    >
      {/* ── Subtle square grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Edge vignette to fade the grid at borders */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,40,100,0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-[5vw] py-28">

        {/* ── Top row: headline + cert badge ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-20">

          <div style={fade("0ms")}>
            <h2
              className="font-work-sans font-extrabold text-white leading-[0.95] tracking-tight uppercase"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
            >
              Modernste<br />Fertigung
            </h2>
            <p className="mt-6 text-white/60 font-normal leading-relaxed max-w-sm text-[0.95rem]">
              In unserer 2.500&nbsp;m² großen Werkstatt in Belm vereinen wir traditionelles Handwerk mit High-End-Technologie.
            </p>
          </div>

          {/* Cert badge */}
          <div
            className="flex-shrink-0"
            style={fade("150ms")}
          >
            <div
              className="px-8 py-6 text-right"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <p
                className="font-work-sans font-extrabold text-white leading-none"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                ISO 9001
              </p>
              <p className="mt-1.5 text-[0.65rem] font-medium text-white/40 uppercase tracking-[0.14em]">
                Zertifizierte Qualität
              </p>
            </div>
          </div>
        </div>

        {/* ── Capabilities card ── */}
        <div
          style={{
            ...fade("250ms"),
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="px-10 py-10 flex flex-col gap-6"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  transition: `opacity 0.6s ease ${250 + i * 100}ms, transform 0.6s ease ${250 + i * 100}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                }}
              >
                <div className="text-white/50">{cap.icon}</div>
                <div>
                  <h3 className="font-work-sans font-bold text-white text-[1.1rem] mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-white/50 text-[0.85rem] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}