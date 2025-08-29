import { Shield, Clock, Leaf, Award, FileCheck, Beaker } from "lucide-react";

export default function StandardsSection() {
  const standards = [
    {
      icon: Shield,
      title: 'Resistencia',
      description: 'Más de 12.5 toneladas de carga según norma UNE-EN 124-1',
      color: 'bg-tructon-blue'
    },
    {
      icon: Clock,
      title: 'Durabilidad',
      description: 'Productos de larga vida útil y bajo mantenimiento',
      color: 'bg-tructon-orange'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Material reciclado para un futuro más verde',
      color: 'bg-green-600'
    },
    {
      icon: Award,
      title: 'Seguridad',
      description: 'Certificaciones nacionales e internacionales',
      color: 'bg-tructon-steel'
    }
  ];

  return (
    <section id="normatividad" className="py-20 bg-white" data-testid="standards-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tructon-blue mb-4" data-testid="standards-title">
            Normatividad y Calidad Certificada
          </h2>
          <p className="text-xl text-tructon-steel max-w-4xl mx-auto leading-relaxed mb-8" data-testid="standards-description">
            En Tructon garantizamos que todos nuestros productos prefabricados en policoncreto son diseñados y fabricados siguiendo las normas técnicas nacionales e internacionales que regulan la seguridad, la resistencia mecánica y la durabilidad en condiciones reales de servicio.
          </p>
        </div>

        {/* Normas Aplicables */}
        <div className="bg-tructon-light rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-tructon-blue mb-6 text-center flex items-center justify-center">
            <FileCheck className="mr-3 h-6 w-6" />
            Normas Aplicables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-tructon-blue mb-1">UNE-EN 124-1:2015</h4>
              <p className="text-sm text-tructon-steel">Norma Europea para tapas y rejillas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-tructon-blue mb-1">ANSI/SCTE 77 2017</h4>
              <p className="text-sm text-tructon-steel">Estándar Nacional Americano</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-tructon-blue mb-1">NTC 979</h4>
              <p className="text-sm text-tructon-steel">ICONTEC, Colombia</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-tructon-blue mb-1">RETIE</h4>
              <p className="text-sm text-tructon-steel">Reglamento Técnico de Instalaciones Eléctricas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-tructon-blue mb-1">NTC 1640</h4>
              <p className="text-sm text-tructon-steel">ICONTEC, Colombia</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm lg:col-span-3">
              <h4 className="font-semibold text-tructon-blue mb-2">Empresas Públicas Nacionales</h4>
              <p className="text-sm text-tructon-steel">EPM, EAAB, EMCALI, ESSA, Celsia, Enel-Codensa, Acuacar, AMB...</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16" data-testid="standards-grid">
          {standards.map((standard, index) => (
            <div key={index} className="text-center" data-testid={`standard-${index}`}>
              <div className={`${standard.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                <standard.icon className="text-white h-8 w-8" data-testid={`standard-icon-${index}`} />
              </div>
              <h3 className="text-xl font-semibold text-tructon-blue mb-2" data-testid={`standard-title-${index}`}>
                {standard.title}
              </h3>
              <p className="text-tructon-steel" data-testid={`standard-description-${index}`}>
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compromiso de Calidad */}
        <div className="bg-white border-2 border-tructon-blue rounded-xl p-8">
          <h3 className="text-2xl font-bold text-tructon-blue mb-6 text-center flex items-center justify-center">
            <Beaker className="mr-3 h-6 w-6" />
            Compromiso de Calidad
          </h3>
          <p className="text-lg text-tructon-steel leading-relaxed text-center max-w-4xl mx-auto">
            Nuestros prefabricados en policoncreto son sometidos a pruebas de laboratorio y ensayos de carga para asegurar que cumplen con los requisitos establecidos en estas normas, garantizando resistencia a tráfico peatonal y vehicular pesado, además de condiciones ambientales como exposición a rayos UV, humedad y agentes químicos.
          </p>
        </div>
      </div>
    </section>
  );
}
