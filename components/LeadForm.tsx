"use client";

import { useState } from "react";
import { finalCta } from "@/lib/content";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkopevld", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-4">
          {finalCta.heading}
        </h2>
        <p className="text-gray-600 text-center mb-10">
          {finalCta.description}
        </p>

        {status === "success" ? (
          <div className="bg-[#1E6B73]/10 rounded-xl p-8 text-center">
            <p className="text-[#14304A] font-semibold text-lg mb-2">
              Tack för ditt intresse!
            </p>
            <p className="text-gray-600 text-sm">
              Vi hör av oss inom kort.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Företag *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="system" className="block text-sm font-medium text-gray-700 mb-1.5">
                Vilket system använder ni idag?
              </label>
              <input
                type="text"
                id="system"
                name="system"
                placeholder="T.ex. Fortnox, Visma, Björn Lundén..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="pain" className="block text-sm font-medium text-gray-700 mb-1.5">
                Vad tar mest onödig admin-tid hos er just nu?
              </label>
              <textarea
                id="pain"
                name="pain"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6B73] focus:border-transparent resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                Något gick fel. Försök igen eller maila oss direkt.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-[#1E6B73] text-white font-medium py-3.5 rounded-lg hover:bg-[#185a61] transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Skickar..." : finalCta.cta}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
