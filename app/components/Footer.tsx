"use client";

export default function MetallbauMeyerFooter() {
  return (
    <footer className="w-full bg-[#003d7c] text-white px-[5vw] py-16">
      <div className="max-w-7xl mx-auto">
        {/* ── Main content row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* ── Left side: Branding & Tagline ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-md bg-white/15">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="10" width="4" height="8" fill="white" opacity="0.8" />
                  <rect x="8" y="5" width="4" height="13" fill="white" opacity="0.9" />
                  <rect x="14" y="2" width="4" height="16" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-[1.05rem] tracking-tight">
                Metallbau Meyer
              </span>
            </div>

            <p className="text-white/80 leading-relaxed text-[0.95rem] mb-4">
              Modern Innovator für anspruchsvollen Stahlbau in Belm.
            </p>

            <p className="text-white/60 text-[0.88rem] leading-relaxed max-w-sm">
              Präzision, Klarheit und zukunftsorientierte Konstruktionen seit über 20 Jahren.
            </p>
          </div>

          {/* ── Right side: Quick links & Contact ── */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/70 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-[0.9rem]">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#production" className="text-white/80 hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Projekte</a></li>
                <li><a href="#team" className="text-white/80 hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/70 mb-4">
                Kontakt
              </h3>
              <ul className="space-y-2.5 text-[0.9rem]">
                <li><a href="mailto:info@metallbau-meyer.de" className="text-white/80 hover:text-white transition-colors">E-Mail</a></li>
                <li><a href="tel:+49123456789" className="text-white/80 hover:text-white transition-colors">Telefon</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Anschrift</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/10 mb-8" />

        {/* ── Bottom row: Copyright & Social ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-white/50 text-[0.75rem] uppercase tracking-[0.08em]">
            © 2024 Metallbau Meyer. Engineered for Excellence.
          </p>

          {/* ── Social & Action icons ── */}
          <div className="flex items-center gap-4">
            <button 
              aria-label="Teilen"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20L11 13l-8-3 20-8Z" />
              </svg>
            </button>

            <button 
              aria-label="Kontakt"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
