export default function ElevaBridge() {
  return (
    <section className="py-20 bg-[#FBF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl border border-[#14304A]/10 overflow-hidden shadow-[0_4px_24px_rgba(20,48,74,0.05)]">
          {/* warm decorative accent */}
          <div className="absolute -right-24 -top-24 w-[300px] h-[300px] rounded-full bg-[#1E6B73]/8 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-[260px] h-[260px] rounded-full bg-[#944925]/6 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 p-8 sm:p-10 lg:p-14 items-center">
            {/* Left: brand mark */}
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#944925]" />
                <span className="bp-eyebrow text-[#944925]">Moderbolaget</span>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[#14304A] tracking-tight mb-2">
                Eleva
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Verksamhetsutveckling &amp; digitalisering för små och medelstora företag.
              </p>
            </div>

            {/* Right: copy + CTA */}
            <div className="md:col-span-8 md:border-l md:border-[#14304A]/10 md:pl-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#14304A] mb-4 leading-snug">
                Byråpilot är Elevas första specialiserade gren.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Vi har samma metod som Eleva — men paketerad och fokuserad på byråverksamhet:
                redovisnings-, löne- och administrativa byråer. Eleva i sig hjälper bredare med
                processförbättring, digital strategi och automation även för andra typer av företag.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7 text-sm">
                <div className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-[#1E6B73] mt-2 shrink-0" />
                  <span className="text-gray-600">
                    <strong className="text-[#14304A]">Är ni byrå?</strong> Stanna här — Byråpilot är byggd för er.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-[#944925] mt-2 shrink-0" />
                  <span className="text-gray-600">
                    <strong className="text-[#14304A]">Andra branscher?</strong> Eleva har bredare upplägg.
                  </span>
                </div>
              </div>

              <a
                href="https://eleva-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#14304A] border border-[#14304A]/30 rounded-full px-5 py-2.5 hover:bg-[#14304A] hover:text-white transition-colors group"
              >
                Besök Eleva
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
