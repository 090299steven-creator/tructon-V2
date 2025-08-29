import { CheckCircle } from "lucide-react";
import tructonLogo from "@assets/Recurso 1_1755831286955.png";
import empresaImage from "@assets/Fábrica de Tapas Redondas_1756176384781.png";

export default function AboutSection() {
  const features = [
    'Años de experiencia en el mercado',
    'Productos certificados y garantizados',
    'Compromiso con la sostenibilidad ambiental'
  ];

  return (
    <section id="nosotros" className="py-20 bg-tructon-light" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-testid="about-content">
            <h2 className="text-4xl font-bold text-tructon-blue mb-6 flex items-center" data-testid="about-title">
              <img 
                src={tructonLogo} 
                alt="Logo Tructon" 
                className="w-10 h-10 mr-4"
              />
              Sobre Tructon
            </h2>
            <p className="text-xl text-tructon-steel leading-relaxed mb-8" data-testid="about-description">
              En Tructon diseñamos y fabricamos prefabricados en policoncreto reciclado, integrando innovación, sostenibilidad y resistencia. Nuestro compromiso es aportar a la infraestructura y el mobiliario urbano con productos de larga vida útil y desempeño certificado.
            </p>
            <div className="space-y-4" data-testid="about-features">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center" data-testid={`feature-${index}`}>
                  <CheckCircle className="text-tructon-orange h-6 w-6 mr-3" data-testid={`feature-icon-${index}`} />
                  <span className="text-tructon-steel" data-testid={`feature-text-${index}`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-testid="about-image-container">
            <img 
              src={empresaImage} 
              alt="Instalaciones de fabricación Tructon" 
              className="rounded-xl shadow-lg w-full"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
