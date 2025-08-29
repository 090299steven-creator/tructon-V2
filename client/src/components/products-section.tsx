import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Building2, Settings } from "lucide-react";
import tructonLogo from "@assets/Recurso 1_1755831286955.png";
import manholeImage from "@assets/Tapa MH abatible_1755831316726.png";
import grateImage from "@assets/rejilla-con-marco-70-60-7-1_1755831320116.png";
import cameraImage from "@assets/tapa rectangular_1755831380209.png";
import bancaImage from "@assets/BANCA_1755832271545.jpg";
import mesaImage from "@assets/polycon-banca-1_1755832402703.png";
import separadorImage from "@assets/polycon-bolardo-divisor-carrirl-trapezoidal-120-15-9.5_1755832517305.png";
import carcamoImage from "@assets/Carcamo Prefabricado Tructon_1756173423374.png";
import medidorImage from "@assets/20250821_2305_Textura Concreto Oscuro_remix_01k37z3cqwfpz8fxphy7s3ekt8_1755835571090.png";

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const constructionProducts = [
    {
      id: 'manhole-covers',
      title: 'Tapas de Manhole',
      description: 'Tapas de manhole y cámaras de inspección resistentes a cargas vehiculares pesadas. Dimensiones a medida de cada requerimiento.',
      image: manholeImage,
    },
    {
      id: 'drainage-grates',
      title: 'Rejillas para Cárcamos y Sumideros',
      description: 'Rejillas para tráfico vehicular pesado y peatonal, con alta resistencia y durabilidad.',
      image: grateImage,
    },
    {
      id: 'camera-covers',
      title: 'Tapas para Cámaras',
      description: 'Elementos especializados para cámaras de energía, gas y telecomunicaciones.',
      image: cameraImage,
    }
  ];

  const urbanFurniture = [
    {
      id: 'concrete-benches',
      title: 'Bancas en Policoncreto',
      description: 'Bancas urbanas resistentes y estéticamente atractivas para espacios públicos.',
      image: bancaImage,
    },
    {
      id: 'urban-tables',
      title: 'Mesas Urbanas',
      description: 'Mesas urbanas y de parques diseñadas para resistir condiciones climáticas adversas.',
      image: mesaImage,
    },
    {
      id: 'road-separators',
      title: 'Separadores Viales y Bolardos',
      description: 'Separadores viales, bolardos y elementos decorativos.',
      image: separadorImage,
    }
  ];

  const otherProducts = [
    {
      id: 'drainage-accessories',
      title: 'Cárcamos para alcantarillado o eléctricos',
      description: 'Producto utilizado para dirigir el agua hacia los drenajes, o para proteger y direccionar cables eléctricos.',
      image: carcamoImage,
    },
    {
      id: 'decorative-elements',
      title: 'Tapas y cajas para medidor',
      description: 'Elementos utilizados por los acueductos para la protección de los medidores, con sistema de seguridad, anti vandalismo.',
      image: medidorImage,
    }
  ];

  return (
    <section id="productos" className="py-20 bg-tructon-light" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tructon-blue mb-4 flex items-center justify-center" data-testid="products-title">
            <img 
              src={tructonLogo} 
              alt="Logo Tructon" 
              className="w-10 h-10 mr-4"
            />
            Nuestros Productos
          </h2>
          <p className="text-xl text-tructon-steel" data-testid="products-subtitle">
            Soluciones integrales en policoncreto para cada necesidad
          </p>
        </div>

        {/* Construction & Industrial Category */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tructon-blue mb-8 flex items-center" data-testid="construction-category-title">
            <img 
              src="/attached_assets/hard-hat_4631533_1756176260721.png" 
              alt="Icono de construcción" 
              className="w-8 h-8 mr-3"
              style={{ filter: 'hue-rotate(15deg) saturate(1.5) brightness(1.2)' }}
            />
            Construcción e Industrial
          </h3>
          <div className="grid md:grid-cols-3 gap-8" data-testid="construction-products-grid">
            {constructionProducts.map((product) => (
              <Card key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`product-card-${product.id}`}>
                <CardContent className="p-6">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    data-testid={`product-image-${product.id}`}
                  />
                  <h4 className="text-xl font-semibold text-tructon-blue mb-2" data-testid={`product-title-${product.id}`}>
                    {product.title}
                  </h4>
                  <p className="text-tructon-steel mb-4" data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-tructon-blue hover:bg-blue-800 text-white transition-colors"
                    data-testid={`button-quote-${product.id}`}
                  >
                    Solicita cotización
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Urban Furniture Category */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tructon-blue mb-8 flex items-center" data-testid="urban-category-title">
            <Building2 className="mr-3 text-tructon-orange h-8 w-8" />
            Amoblamiento Urbano
          </h3>
          <div className="grid md:grid-cols-3 gap-8" data-testid="urban-products-grid">
            {urbanFurniture.map((product) => (
              <Card key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`product-card-${product.id}`}>
                <CardContent className="p-6">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    data-testid={`product-image-${product.id}`}
                  />
                  <h4 className="text-xl font-semibold text-tructon-blue mb-2" data-testid={`product-title-${product.id}`}>
                    {product.title}
                  </h4>
                  <p className="text-tructon-steel mb-4" data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-tructon-blue hover:bg-blue-800 text-white transition-colors"
                    data-testid={`button-quote-${product.id}`}
                  >
                    Solicita cotización
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Products Category */}
        <div>
          <h3 className="text-3xl font-bold text-tructon-blue mb-8 flex items-center" data-testid="other-category-title">
            <Settings className="mr-3 text-tructon-orange h-8 w-8" />
            Otros Productos
          </h3>
          <div className="grid md:grid-cols-2 gap-8" data-testid="other-products-grid">
            {otherProducts.map((product) => (
              <Card key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`product-card-${product.id}`}>
                <CardContent className="p-6">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    data-testid={`product-image-${product.id}`}
                  />
                  <h4 className="text-xl font-semibold text-tructon-blue mb-2" data-testid={`product-title-${product.id}`}>
                    {product.title}
                  </h4>
                  <p className="text-tructon-steel mb-4" data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-tructon-blue hover:bg-blue-800 text-white transition-colors"
                    data-testid={`button-quote-${product.id}`}
                  >
                    Solicita cotización
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
