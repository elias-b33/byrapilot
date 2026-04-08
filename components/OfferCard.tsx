import { offer } from "@/lib/content";

export default function OfferCard() {
  return (
    <section id="erbjudande" className="py-20 bg-[#F7FAFB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-4">
          {offer.heading}
        </h2>
        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#1E6B73]/10 text-[#1E6B73] text-sm font-semibold px-4 py-1.5 rounded-full">
              {offer.packageName}
            </span>
            <p className="mt-4 text-gray-600">{offer.ingress}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {offer.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#1E6B73] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href="https://cal.eu/elias-bredberg-dvp79n/15-minuters-konsultsamtal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1E6B73] text-white font-medium px-8 py-3.5 rounded-lg hover:bg-[#185a61] transition-colors"
            >
              {offer.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
