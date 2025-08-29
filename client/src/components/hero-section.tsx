import { Button } from "@/components/ui/button";
import { Calculator, Package } from "lucide-react";
import plasticBackground from "@assets/Tipos-de-plásticos-1-1024x597 en arena_1755831298949.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative bg-gradient-to-r from-tructon-blue to-blue-800 text-white py-20"
      data-testid="hero-section"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url(${plasticBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Soluciones en prefabricados de policoncreto para infraestructura y mobiliario urbano
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-subtitle">
            Resistencia certificada para tráfico vehicular pesado y peatonal, cumpliendo con normativas nacionales e internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-testid="hero-cta-buttons">
            <Button 
              onClick={scrollToContact}
              className="bg-tructon-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              size="lg"
              data-testid="button-sample-request"
            >
              <Package className="mr-2 h-5 w-5" />
              Solicita una muestra gratis
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-tructon-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              size="lg"
              data-testid="button-quote-request"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Cotiza tu proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
