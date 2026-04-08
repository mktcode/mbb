"use client";

import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  {
    number: "01",
    audience: "Für Gewerbekunden",
    title: "Industriebau",
    description:
      "Hochbelastbare Tragwerke, Stahlhallen und Kranbahnen. Wir führen als Nachunternehmer und im Direktauftrag durch — termintreu und exakt nach Vorgabe.",
    tags: ["Stahlbau", "Sonderbau", "Kranbahnen"],
  },
  {
    number: "02",
    audience: "Für öffentliche Auftraggeber",
    title: "Öffentlicher Raum",
    description:
      "Städte und Gemeinden schätzen unsere Qualität für öffentliche Lebensbereiche. Brücken, Stadtmobiliar und Sicherheitssysteme — auch für ehrgeizige Aufgaben in vielen Dimensionen.",
    tags: ["Infrastruktur", "Edelstahl", "Kommunalbau"],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="w-full bg-gray-50 px-[5vw] py-28">

      {/* ── Header row ── */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 transition-all duration-700 max-w-7xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
      >
        <div>
          <p className="text-[0.7rem] font-medium text-[#0061a5] uppercase tracking-[0.14em] mb-4">
            Expertise &amp; Fokus
          </p>
          <h2
            className="font-work-sans font-extrabold leading-[1.05] tracking-tight text-[#0d1117]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Gewerbliche und<br />
            öffentliche<br />
            Grossprojekte.
          </h2>
        </div>
        <p className="text-gray-400 font-normal leading-relaxed max-w-xs text-[1.25rem]">
          Maßgeschneiderte Lösungen für komplexe architektonische Anforderungen in Industrie und Kommunalbau.
        </p>
      </div>

      {/* ── Segment rows ── */}
      <div className="flex flex-col divide-y divide-gray-100 max-w-7xl mx-auto">
        {SEGMENTS.map((s, i) => (
          <div
            key={s.number}
            className="group grid grid-cols-[64px_1fr] md:grid-cols-[64px_1fr_1fr] gap-x-10 gap-y-4 py-10 transition-all duration-700 cursor-default"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 120 + 150}ms`,
            }}
          >
            {/* Number */}
            <span
              className="font-work-sans font-extrabold leading-none tracking-tight text-gray-200 group-hover:text-[#003d7c]/20 transition-colors duration-300 pt-1"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              {s.number}
            </span>

            {/* Left — title + audience */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[0.7rem] font-medium text-[#0061a5] uppercase tracking-widest">
                {s.audience}
              </span>
              <h3
                className="font-work-sans font-bold leading-tight tracking-tight text-[#0d1117] group-hover:text-[#003d7c] transition-colors duration-200"
                style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)" }}
              >
                {s.title}
              </h3>

              {/* Tags — visible on mobile, hidden on md (shown right col) */}
              <div className="flex flex-wrap gap-2 mt-3 md:hidden">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#003d7c]/6 px-2.5 py-1 text-[0.65rem] font-medium text-[#0061a5] uppercase tracking-[0.08em] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — description + tags */}
            <div className="col-start-2 md:col-start-auto flex flex-col justify-between gap-6">
              <p className="text-gray-500 text-[0.9rem] font-normal leading-relaxed">
                {s.description}
              </p>
              <div className="hidden md:flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#003d7c]/6 px-2.5 py-1 text-[0.65rem] font-medium text-[#0061a5] uppercase tracking-[0.08em] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-gray-400 hover:text-[#003d7c] no-underline transition-colors duration-150 group/link"
                >
                  Mehr erfahren
                  <svg
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}