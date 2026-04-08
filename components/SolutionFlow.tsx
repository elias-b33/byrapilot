import { solution } from "@/lib/content";

export default function SolutionFlow() {
  return (
    <section id="losning" className="py-20 bg-[#F7FAFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-4">
          {solution.heading}
        </h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
          {solution.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solution.steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E6B73] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-[#14304A] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
