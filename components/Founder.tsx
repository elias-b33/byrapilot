import { founder } from "@/lib/content";

export default function Founder() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="bp-eyebrow mb-3 block">Grundaren</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] mb-6">
          {founder.heading}
        </h2>
        <div className="bg-[#FBF7F2] rounded-2xl p-8 sm:p-10 border border-[#14304A]/10 shadow-[0_4px_24px_rgba(20,48,74,0.04)]">
          <div className="w-20 h-20 rounded-full bg-[#14304A] mx-auto mb-6 flex items-center justify-center text-white text-xl font-semibold tracking-wide">
            EB
          </div>
          <p className="text-gray-600 leading-relaxed">
            {founder.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1E6B73]">
            <span className="block h-px w-6 bg-[#1E6B73]/40" />
            Elias Bredberg
          </div>
        </div>
      </div>
    </section>
  );
}
