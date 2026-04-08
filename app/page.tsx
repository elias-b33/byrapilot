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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemCards />
        <SolutionFlow />
        <ForWho />
        <OfferCard />
        <HowItWorks />
        <Faq />
        <Founder />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
