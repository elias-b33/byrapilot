import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-14">
          {howItWorks.heading}
        </h2>

        <div className="space-y-10">
          {howItWorks.steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#14304A] text-white flex items-center justify-center text-sm font-bold shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#14304A] mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < howItWorks.steps.length - 1 && (
                <div className="hidden" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
