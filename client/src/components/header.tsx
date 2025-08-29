import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import tructonLogo from "@assets/Recurso 1_1755831286955.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      // Si estamos en la página principal, hacer scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Si estamos en otra página, navegar a la principal con hash
      setLocation(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      // Usar setTimeout para asegurar que la página se carge antes del scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center" data-testid="logo">
            <img 
              src={tructonLogo} 
              alt="Logo Tructon" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-2xl font-bold text-tructon-blue">TRUCTON</h1>
              <p className="text-xs text-tructon-steel">Prefabricados en Policoncreto</p>
            </div>
          </a>
          
          <nav className="hidden md:flex space-x-8" data-testid="desktop-nav">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-inicio"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-productos"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('normatividad')}
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-normatividad"
            >
              Normatividad
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-nosotros"
            >
              Nosotros
            </button>
            <a 
              href="/empleos"
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-empleos"
            >
              Empleos
            </a>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium"
              data-testid="nav-contacto"
            >
              Contacto
            </button>
          </nav>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-tructon-steel" />
              ) : (
                <Menu className="h-6 w-6 text-tructon-steel" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200" data-testid="mobile-nav">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-inicio"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-productos"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('normatividad')}
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-normatividad"
              >
                Normatividad
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-nosotros"
              >
                Nosotros
              </button>
              <a 
                href="/empleos"
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-empleos"
              >
                Empleos
              </a>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-tructon-steel hover:text-tructon-blue transition-colors font-medium text-left"
                data-testid="mobile-nav-contacto"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
