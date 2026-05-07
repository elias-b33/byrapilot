"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Lösning", href: "#losning" },
    { label: "Erbjudande", href: "#erbjudande" },
    { label: "Så går det till", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur border-b border-[#14304A]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 group">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1E6B73]" />
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-[#14304A] tracking-tight">
              {siteConfig.name}
            </span>
            <a
              href="https://eleva.se"
              target="_blank"
              rel="noopener noreferrer"
              className="bp-subbrand hover:text-[#1E6B73] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              by Eleva
            </a>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="bp-nav-link text-xs uppercase tracking-widest font-medium text-gray-600 hover:text-[#14304A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.eu/elias-bredberg-dvp79n/15-minuters-konsultsamtal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1E6B73] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#185a61] transition-colors"
          >
            Boka samtal
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <svg className="w-6 h-6 text-[#14304A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-gray-600 hover:text-[#14304A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.eu/elias-bredberg-dvp79n/15-minuters-konsultsamtal"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1E6B73] text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center hover:bg-[#185a61]"
            onClick={() => setMenuOpen(false)}
          >
            Boka samtal
          </a>
        </div>
      )}
    </header>
  );
}
