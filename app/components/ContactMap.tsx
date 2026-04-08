"use client";

import { useEffect, useRef } from "react";

const ADDRESS = {
  name: "Metallbau Meyer",
  street: "Musterstraße 12",
  city: "49191 Belm",
  phone: "+49 5406 12345",
  email: "info@metallbau-meyer.de",
  lat: 52.2833,
  lng: 8.1167,
};

export default function ContactMap() {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (instanceRef.current) return;
    if (!mapRef.current) return;

    // Dynamically import Leaflet only on client
    import("leaflet").then((module) => {
      import("leaflet/dist/leaflet.css");
      const L = module.default;

      const map = L.map(mapRef.current, {
      center: [ADDRESS.lat, ADDRESS.lng],
      zoom: 14,
      zoomControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const markerIcon = L.divIcon({
      className: "",
      html: `<div style="
        width:14px;height:14px;
        background:#003d7c;
        border:3px solid white;
        border-radius:50%;
        box-shadow:0 2px 8px rgba(0,0,0,0.35);
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

      L.marker([ADDRESS.lat, ADDRESS.lng], { icon: markerIcon }).addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Force Leaflet to recalculate tile layout after paint
      setTimeout(() => map.invalidateSize(), 0);

      instanceRef.current = map;
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .mm-map-wrapper .leaflet-container {
          filter: grayscale(100%) contrast(1.05);
          transition: filter 0.5s ease;
        }
        .mm-map-wrapper:hover .leaflet-container {
          filter: grayscale(0%) contrast(1);
        }
        .leaflet-control-zoom a {
          color: #003d7c !important;
          border-color: rgba(0,0,0,0.08) !important;
        }
        .leaflet-control-attribution {
          font-size: 10px !important;
          background: rgba(255,255,255,0.7) !important;
          backdrop-filter: blur(4px);
        }
      `}</style>

      <section
        className="mm-map-wrapper relative w-full"
        style={{ height: "540px" }}
      >
        {/* Map container — must have explicit pixel height for Leaflet */}
        <div
          ref={mapRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />

        {/* ── Contact card — bottom left ── */}
        <div
          className="absolute bottom-8 left-8 z-[999] w-72"
          style={{ pointerEvents: "all" }}
        >
          <div
            className="bg-white px-8 py-7 flex flex-col gap-5"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 pb-5"
              style={{ borderBottom: "1px solid #f3f4f6" }}
            >
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{ background: "#003d7c" }}
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="10" width="4" height="8" fill="white" opacity="0.8" />
                  <rect x="8" y="5" width="4" height="13" fill="white" opacity="0.9" />
                  <rect x="14" y="2" width="4" height="16" fill="white" />
                </svg>
              </div>
              <div>
                <p className="font-work-sans font-bold text-[#0d1117] text-[0.88rem] leading-tight tracking-tight">
                  {ADDRESS.name}
                </p>
                <p className="text-[0.68rem] text-gray-400 font-normal">
                  Metallbau &amp; Stahlkonstruktion
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1C5.79 1 4 2.79 4 5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
                    stroke="#003d7c" strokeWidth="1.4" strokeLinejoin="round"
                  />
                  <circle cx="8" cy="5" r="1.5" stroke="#003d7c" strokeWidth="1.4" />
                </svg>
              </div>
              <div>
                <p className="text-[0.82rem] text-[#0d1117] font-medium leading-snug">
                  {ADDRESS.street}
                </p>
                <p className="text-[0.82rem] text-gray-400 font-normal">{ADDRESS.city}</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${ADDRESS.phone.replace(/\s/g, "")}`}
              className="flex gap-3 items-center no-underline group/phone"
            >
              <div className="flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 3.5A1.5 1.5 0 013.5 2h.878c.464 0 .86.316.974.766l.544 2.176a1 1 0 01-.29.997L4.5 7c.667 1.333 2.167 2.833 3.5 3.5l1.061-1.106a1 1 0 01.997-.29l2.176.544c.45.114.766.51.766.974V12a1.5 1.5 0 01-1.5 1.5C5.648 13.5 2 9.852 2 5.5v-2z"
                    stroke="#003d7c" strokeWidth="1.4" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[0.82rem] text-[#0d1117] font-medium group-hover/phone:text-[#0061a5] transition-colors duration-150">
                {ADDRESS.phone}
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${ADDRESS.email}`}
              className="flex gap-3 items-center no-underline group/email"
            >
              <div className="flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#003d7c" strokeWidth="1.4" />
                  <path d="M1 4l7 5 7-5" stroke="#003d7c" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[0.82rem] text-[#0d1117] font-medium group-hover/email:text-[#0061a5] transition-colors duration-150 truncate">
                {ADDRESS.email}
              </span>
            </a>

            {/* CTA */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${ADDRESS.lat},${ADDRESS.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 bg-[#003d7c] hover:bg-[#002d5e] text-white text-[0.78rem] font-medium py-2.5 no-underline transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1C5.79 1 4 2.79 4 5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
                  fill="white" opacity="0.9"
                />
                <circle cx="8" cy="5" r="1.5" fill="#003d7c" />
              </svg>
              Route berechnen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}