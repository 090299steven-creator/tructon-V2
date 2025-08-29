import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import StandardsSection from "@/components/standards-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  useEffect(() => {
    // Manejar hash URLs al cargar la página
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <StandardsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
