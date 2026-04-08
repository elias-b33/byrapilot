import { forWho } from "@/lib/content";

export default function ForWho() {
  return (
    <section id="forvem" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-12">
          {forWho.heading}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {forWho.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#F7FAFB] rounded-xl p-6 sm:p-8 border border-gray-100 text-center"
            >
              <h3 className="text-lg font-semibold text-[#14304A] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
