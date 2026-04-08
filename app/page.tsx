import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import SolutionFlow from "@/components/SolutionFlow";
import ForWho from "@/components/ForWho";
import OfferCard from "@/components/OfferCard";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import Founder from "@/components/Founder";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ByråPilot",
    description:
      "ByråPilot hjälper redovisnings- och lönebyråer att minska intern administration med trygg automation, AI-sammanfattningar och automatiska påminnelser.",
    url: "https://byrapilot.se",
    email: "eliasbredberg5@gmail.com",
    telephone: "+46739558771",
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    serviceType: [
      "Byråautomation",
      "AI-stöd för redovisningsbyråer",
      "Automatiska påminnelser",
      "Kundkommunikation automation",
      "Intake-flöden",
      "Onboarding-automation",
    ],
    knowsAbout: [
      "Redovisning",
      "Löneadministration",
      "Automation",
      "AI",
      "Digitalisering",
      "Processoptimering",
    ],
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ByråPilot",
    url: "https://byrapilot.se",
    description:
      "Automation och AI-stöd för redovisnings- och lönebyråer i Sverige.",
    inLanguage: "sv",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Måste vi byta system för att använda ByråPilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Målet är att förbättra flöden runt det ni redan använder, som Fortnox, Visma eller Björn Lundén. Inga systembyten behövs.",
        },
      },
      {
        "@type": "Question",
        name: "Är ByråPilots automation säker att använda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, lösningen byggs med människa i loopen och utan att automatisera professionella bedömningar. All automation är transparent och kontrollerad.",
        },
      },
      {
        "@type": "Question",
        name: "Passar ByråPilot bara större byråer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Fokus är små och medelstora byråer som känner att admin tar för mycket tid. Pilotflödet är anpassat för byråer av alla storlekar.",
        },
      },
      {
        "@type": "Question",
        name: "Är ByråPilot ännu ett komplext AI-projekt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Tanken är ett smalt, praktiskt pilotflöde med tydligt värde. Ingen hype, inga buzzwords — bara konkreta förbättringar i ert vardagliga arbetsflöde.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka system fungerar ByråPilot med?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ByråPilot fungerar med de flesta vanliga system som Fortnox, Visma, Björn Lundén och liknande. Vi bygger flöden runt er befintliga miljö.",
        },
      },
      {
        "@type": "Question",
        name: "Vad kostar ByråPilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vi erbjuder ett pilotpaket med fast pris. Boka ett kostnadsfritt 15-minuters samtal för att få veta mer om pris och upplägg.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Byråflöde Start",
    provider: {
      "@type": "ProfessionalService",
      name: "ByråPilot",
    },
    description:
      "Ett komplett pilotpaket för byråer som vill minska admin. Inkluderar kartläggning av arbetsflöde, formulär och intake-flöde, automatiska påminnelser, AI-sammanfattning av inkomna mejl, intern överlämning, statusöversikt och genomgång.",
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    serviceType: "Byråautomation",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

function SeoContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14304A] text-center mb-10">
          Varför behöver byråer automation?
        </h2>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            Redovisnings- och lönebyråer i Sverige lägger uppskattningsvis 30–40% av sin arbetstid på
            repetitiv administration — att jaga in underlag, skicka påminnelser, besvara samma kundfrågor
            och hantera överlämningar internt. Det är tid som skulle kunna läggas på rådgivning,
            kundrelationer och det arbete som faktiskt kräver er expertis.
          </p>
          <p>
            ByråPilot erbjuder trygg automation och AI-stöd specifikt utformat för byråer som arbetar med
            redovisning och lön. Till skillnad från tunga systembyten fokuserar vi på att förbättra flöden
            runt era befintliga verktyg — oavsett om ni använder Fortnox, Visma, Björn Lundén eller andra
            system.
          </p>
          <h3 className="text-xl font-semibold text-[#14304A] mt-8">
            Automation som sparar tid varje dag
          </h3>
          <p>
            Med automatiska påminnelser för saknade underlag, AI-sammanfattningar av inkomna mejl och
            tydliga intake-formulär minskar ni tiden som läggs på manuell uppföljning. Era kunder får en
            smidigare upplevelse och ert team kan fokusera på det som faktiskt kräver professionell
            bedömning.
          </p>
          <h3 className="text-xl font-semibold text-[#14304A] mt-8">
            Bättre intern överlämning och överblick
          </h3>
          <p>
            Viktig information fastnar ofta i mejltrådar eller i enskilda medarbetares huvuden. Med ByråPilots
            automationsflöden får hela teamet tillgång till tydliga sammanfattningar, statusuppdateringar och
            nästa steg — utan att behöva leta genom gamla konversationer.
          </p>
          <h3 className="text-xl font-semibold text-[#14304A] mt-8">
            Snabbare onboarding av nya kunder
          </h3>
          <p>
            Att ta in en ny kund innebär ofta veckor av mejlande fram och tillbaka för att samla in rätt
            information. Med ett strukturerat intake-flöde får ni all information samlad på rätt ställe
            från start, med automatiska påminnelser om något saknas.
          </p>
          <h3 className="text-xl font-semibold text-[#14304A] mt-8">
            Fungerar med ert nuvarande system
          </h3>
          <p>
            ByråPilot kräver inga systembyten. Oavsett om ni kör Fortnox, Visma, Björn Lundén,
            PE Accounting eller andra verktyg bygger vi automationsflöden som fungerar runt er befintliga
            miljö. Målet är praktiska förbättringar — inte ännu ett tungt IT-projekt.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemCards />
        <SolutionFlow />
        <ForWho />
        <OfferCard />
        <HowItWorks />
        <Faq />
        <SeoContent />
        <Founder />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
