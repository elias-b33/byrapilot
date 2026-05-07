import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#14304A] text-white py-14 relative overflow-hidden">
      {/* soft warm glow */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#1E6B73]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1E6B73]" />
              <p className="text-xl font-bold tracking-tight">{siteConfig.name}</p>
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Trygg automation och AI-stöd för redovisnings- och lönebyråer. Bygger flöden runt era befintliga system — utan systembyten.
            </p>
            <a
              href="https://eleva.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors group"
            >
              <span className="block h-px w-6 bg-gray-400 group-hover:bg-white transition-colors" />
              En specialiserad gren av Eleva ↗
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#problem" className="hover:text-white transition-colors">Problem</a></li>
              <li><a href="#losning" className="hover:text-white transition-colors">Lösning</a></li>
              <li><a href="#erbjudande" className="hover:text-white transition-colors">Erbjudande</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Så går det till</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-gray-400">Sverige</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Alla rättigheter förbehållna.</p>
          <a href="#" className="hover:text-white transition-colors">
            Integritetspolicy
          </a>
        </div>
      </div>
    </footer>
  );
}
