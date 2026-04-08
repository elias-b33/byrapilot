import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#14304A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="text-sm text-gray-300 mt-1">
              Trygg automation för byråer
            </p>
          </div>
          <div className="text-center sm:text-right text-sm text-gray-300 space-y-1">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Alla rättigheter förbehållna.</p>
          <a href="#" className="hover:text-white transition-colors">
            Integritetspolicy
          </a>
        </div>
      </div>
    </footer>
  );
}
