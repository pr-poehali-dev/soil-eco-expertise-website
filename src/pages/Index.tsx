
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertsSection from "@/components/ExpertsSection";
import DocumentsSection from "@/components/DocumentsSection";
import NewsSection from "@/components/NewsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExpertsSection />
        <DocumentsSection />
        <NewsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
