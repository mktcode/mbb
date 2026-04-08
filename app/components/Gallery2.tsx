"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    title: "Präzisionsfertigung",
    description: "Modernste CNC-Fräsmaschinen ermöglichen höchste Fertigungsgenauigkeit für komplexe Stahlkomponenten — auf den Zehntelmmillimeter genau.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85",
    title: "Schweißtechnik",
    description: "Funken fliegen, Stahl verbindet sich: Unsere zertifizierten Schweißer arbeiten nach DIN EN ISO 3834 und setzen höchste Qualitätsmaßstäbe.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=85",
    title: "Industrieanlagen",
    description: "Tragwerke und Stahlkonstruktionen für industrielle Großanlagen — termingerecht realisiert, dauerhaft verlässlich.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=85",
    title: "CNC-Bearbeitung",
    description: "Vollautomatisierte Fertigungsstraßen für Serienteile und Einzelanfertigungen — maximale Effizienz bei kompromissloser Qualität.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85",
    title: "Technische Planung",
    description: "Jedes Projekt beginnt mit einem präzisen Plan. Unsere Konstrukteure entwickeln CAD-Modelle und Fertigungszeichnungen für jede Anforderung.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    title: "Gewerbebau",
    description: "Von der Stahlhalle bis zum Verwaltungsgebäude — wir realisieren Gewerbeprojekte in allen Größenordnungen, direkt und als Nachunternehmer.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    title: "Präzisionsfertigung",
    description: "Modernste CNC-Fräsmaschinen ermöglichen höchste Fertigungsgenauigkeit für komplexe Stahlkomponenten — auf den Zehntelmmillimeter genau.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85",
    title: "Schweißtechnik",
    description: "Funken fliegen, Stahl verbindet sich: Unsere zertifizierten Schweißer arbeiten nach DIN EN ISO 3834 und setzen höchste Qualitätsmaßstäbe.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=85",
    title: "Industrieanlagen",
    description: "Tragwerke und Stahlkonstruktionen für industrielle Großanlagen — termingerecht realisiert, dauerhaft verlässlich.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=85",
    title: "CNC-Bearbeitung",
    description: "Vollautomatisierte Fertigungsstraßen für Serienteile und Einzelanfertigungen — maximale Effizienz bei kompromissloser Qualität.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85",
    title: "Technische Planung",
    description: "Jedes Projekt beginnt mit einem präzisen Plan. Unsere Konstrukteure entwickeln CAD-Modelle und Fertigungszeichnungen für jede Anforderung.",
    col: "col-span-1", row: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    title: "Gewerbebau",
    description: "Von der Stahlhalle bis zum Verwaltungsgebäude — wir realisieren Gewerbeprojekte in allen Größenordnungen, direkt und als Nachunternehmer.",
    col: "col-span-1", row: "row-span-1",
  },
];

export default function Gallery2() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const prev = () => setActive((index) => {
    if (index === null) {
      return IMAGES.length - 1;
    }

    return (index - 1 + IMAGES.length) % IMAGES.length;
  });

  const next = () => setActive((index) => {
    if (index === null) {
      return 0;
    }

    return (index + 1) % IMAGES.length;
  });

  return (
    <>
      <style>{`
        .img-cell { overflow: hidden; cursor: pointer; }
        .img-cell img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: grayscale(100%);
          transform: scale(1);
          transition: filter 0.4s ease, transform 0.5s ease;
        }
        .img-cell:hover img {
          filter: grayscale(0%);
          transform: scale(1.04);
        }
        .modal-bg {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(0,0,0,0.0);
          animation: modalFadeIn 0.25s ease forwards;
        }
        @keyframes modalFadeIn {
          to { background: rgba(0,0,0,0.88); }
        }
        .modal-img {
          animation: modalSlideIn 0.3s ease forwards;
          opacity: 0;
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        .modal-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          border: none; border-radius: 50%;
          color: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-nav:hover { background: rgba(255,255,255,0.18); }
      `}</style>

      <div
        className="w-full grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 400px)",
          gap: 0,
        }}
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="img-cell"
            style={{ height: 400 }}
            onClick={() => setActive(i)}
          >
            <Image
              src={img.src} alt={img.title}
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>

      {active !== null && (
        <div
          className="modal-bg"
          onClick={() => setActive(null)}
        >
          <div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-img relative w-full max-w-5xl" style={{ maxHeight: "90vh" }}>
              <Image
                src={IMAGES[active].src}
                alt={IMAGES[active].title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "90vh" }}
                width={800} height={600}
              />

              <div
                className="absolute inset-x-0 bottom-0 px-10 py-8"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                }}
              >
                <p className="text-[0.7rem] font-medium text-[#5ab0f5] uppercase tracking-[0.14em] mb-2">
                  {String(active + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
                </p>
                <h3
                  className="font-work-sans font-extrabold text-white leading-tight tracking-tight mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  {IMAGES[active].title}
                </h3>
                <p className="text-white/70 text-[0.9rem] leading-relaxed max-w-lg">
                  {IMAGES[active].description}
                </p>
              </div>
            </div>

            <button className="modal-nav" style={{ left: 20 }} onClick={prev}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="modal-nav" style={{ right: 20 }} onClick={next}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border-none cursor-pointer transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}