import { Leaf } from "lucide-react";
import tructonLogo from "@assets/Recurso 1_1755831286955.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Productos', id: 'productos' },
    { label: 'Normatividad', id: 'normatividad' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const products = [
    'Tapas de Manhole',
    'Rejillas Industriales',
    'Bancas Urbanas',
    'Mobiliario Urbano'
  ];

  return (
    <footer className="bg-tructon-blue text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2" data-testid="footer-brand">
            <div className="flex items-center mb-4">
              <img 
                src={tructonLogo} 
                alt="Logo Tructon" 
                className="w-10 h-10 mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold" data-testid="footer-brand-name">TRUCTON</h3>
                <p className="text-blue-200 text-sm" data-testid="footer-brand-tagline">Prefabricados en Policoncreto</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md" data-testid="footer-description">
              Especialistas en prefabricados de policoncreto con material reciclado para infraestructura y mobiliario urbano.
            </p>
            <p className="text-green-300 font-medium flex items-center" data-testid="footer-sustainability">
              <Leaf className="mr-2 h-4 w-4" />
              Fabricamos con materiales reciclados para un futuro más sostenible.
            </p>
          </div>
          
          <div data-testid="footer-quick-links">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-blue-200 hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-products">
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href="#productos" 
                    className="text-blue-200 hover:text-white transition-colors"
                    data-testid={`footer-product-${index}`}
                    onClick={() => scrollToSection('productos')}
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-blue-200 text-sm" data-testid="footer-copyright">
            &copy; 2025 Tructon. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-blue-200 hover:text-white text-sm transition-colors"
              data-testid="footer-privacy"
            >
              Política de Privacidad
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-white text-sm transition-colors"
              data-testid="footer-terms"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
