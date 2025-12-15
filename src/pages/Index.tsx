import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsAISection from "@/components/WhatIsAISection";
import RAGSection from "@/components/RAGSection";
import HowAIHelpsSection from "@/components/HowAIHelpsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsAISection />
      <RAGSection />
      <HowAIHelpsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
