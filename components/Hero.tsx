import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-[#F7FAFB] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="bg-[#1E6B73] text-white font-medium px-8 py-3.5 rounded-lg text-base hover:bg-[#185a61] transition-colors"
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
      </div>
    </section>
  );
}
