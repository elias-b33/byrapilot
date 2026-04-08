import { founder } from "@/lib/content";

export default function Founder() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] mb-6">
          {founder.heading}
        </h2>
        <div className="bg-[#F7FAFB] rounded-2xl p-8 sm:p-10 border border-gray-100">
          <div className="w-20 h-20 rounded-full bg-[#14304A] mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {founder.description}
          </p>
        </div>
      </div>
    </section>
  );
}
