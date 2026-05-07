import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* warm background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF7F2] to-[#F5EFE6]/60" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#1E6B73]/8 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#14304A]/6 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="block h-px w-10 bg-[#14304A]/30" />
          <span className="bp-eyebrow">Automation för byråer · Sverige</span>
          <span className="block h-px w-10 bg-[#14304A]/30" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14304A] leading-tight tracking-tight">
          {hero.heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {hero.subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://cal.eu/elias-bredberg-dvp79n/15-minuters-konsultsamtal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1E6B73] text-white font-medium px-8 py-3.5 rounded-lg text-base hover:bg-[#185a61] transition-colors shadow-sm"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#losning"
            className="border-2 border-[#14304A] text-[#14304A] font-medium px-8 py-3.5 rounded-lg text-base hover:bg-[#14304A] hover:text-white transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">{hero.trustLine}</p>

        {/* trust strip — three columns Eleva-style */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-[#14304A]/10">
          <div className="text-left sm:text-center">
            <div className="bp-eyebrow text-[10px] mb-1">Fokus</div>
            <div className="text-sm font-medium text-[#14304A]">Redovisnings- &amp; lönebyråer</div>
          </div>
          <div className="text-left sm:text-center">
            <div className="bp-eyebrow text-[10px] mb-1">Metod</div>
            <div className="text-sm font-medium text-[#14304A]">Automation runt era system</div>
          </div>
          <div className="text-left sm:text-center">
            <div className="bp-eyebrow text-[10px] mb-1">Resultat</div>
            <div className="text-sm font-medium text-[#14304A]">Mindre admin, mer rådgivning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
