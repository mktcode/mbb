"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { end: 25, suffix: "+", label: "Jahre Erfahrung" },
  { end: 800, suffix: "+", label: "Realisierte Projekte" },
  { end: 100, suffix: "%", label: "Qualitätsgarantie" },
];

const BADGES = ["IHK Mitglied", "Meisterbetrieb"];

function useCountUp(end: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return value;
}

function StatItem({ end, suffix, label, started, delay }: { end: number; suffix: string; label: string; started: boolean; delay: string }) {
  const value = useCountUp(end, 1600, started);

  return (
    <div
      className="flex flex-col transition-all duration-700"
      style={{
        transitionDelay: delay,
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <span className="font-work-sans font-extrabold tracking-tight text-[#0d1117] leading-none"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
        {value}{suffix}
      </span>
      <span className="mt-2 text-[0.7rem] font-medium text-gray-400 uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-screen-xl mx-auto px-[5vw] py-24">
      <div className="flex flex-wrap items-end justify-between gap-12">

        {/* Stats */}
        <div className="flex flex-wrap gap-x-20 gap-y-10">
          {STATS.map((s, i) => (
            <StatItem
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              started={started}
              delay={`${i * 100}ms`}
            />
          ))}
        </div>

        {/* Badges */}
        <div
          className="flex md:flex-col gap-3 transition-all duration-700"
          style={{
            transitionDelay: "350ms",
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="text-sm text-center font-medium text-gray-400 uppercase tracking-[0.08em] px-3.5 py-2 rounded-md bg-gray-50"
            >
              {b}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}