import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, DollarSign, Users, FileText, Send } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Empleos() {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    {
      id: 1,
      title: "Asesor Técnico Comercial",
      department: "Ventas",
      type: "Tiempo Completo",
      location: "Medellín, Antioquia",
      salary: "$2,500,000 - $3,500,000",
      description: "Buscamos un profesional para asesorar clientes sobre nuestros productos de policoncreto, realizar cotizaciones técnicas y desarrollar nuevos mercados.",
      requirements: [
        "Profesional en Ingeniería Civil, Industrial o Comercial",
        "Experiencia mínima de 2 años en ventas técnicas",
        "Conocimientos en construcción e infraestructura",
        "Excelentes habilidades de comunicación",
        "Disponibilidad para viajar"
      ],
      responsibilities: [
        "Asesorar técnicamente a clientes sobre productos",
        "Elaborar cotizaciones y propuestas comerciales",
        "Realizar seguimiento post-venta",
        "Participar en ferias y eventos del sector",
        "Desarrollar relaciones comerciales a largo plazo"
      ]
    },
    {
      id: 2,
      title: "Operario de Producción",
      department: "Producción",
      type: "Tiempo Completo",
      location: "Medellín, Antioquia",
      salary: "$1,300,000 - $1,600,000",
      description: "Operario para planta de producción de prefabricados en policoncreto. Responsable del manejo de maquinaria y control de calidad en el proceso productivo.",
      requirements: [
        "Bachiller académico completo",
        "Experiencia de 1 año en manufactura o producción",
        "Conocimientos básicos en manejo de maquinaria",
        "Compromiso con normas de seguridad industrial",
        "Disponibilidad de horarios"
      ],
      responsibilities: [
        "Operar maquinaria de producción de prefabricados",
        "Realizar control de calidad en productos",
        "Mantener área de trabajo limpia y organizada",
        "Cumplir con estándares de seguridad industrial",
        "Reportar novedades en el proceso productivo"
      ]
    },
    {
      id: 3,
      title: "Auxiliar Contable",
      department: "Contabilidad",
      type: "Tiempo Completo",
      location: "Medellín, Antioquia",
      salary: "$1,600,000 - $2,000,000",
      description: "Auxiliar contable para apoyo en el área financiera, manejo de cuentas por pagar y cobrar, facturación y conciliaciones bancarias.",
      requirements: [
        "Técnico o tecnólogo en Contabilidad",
        "Experiencia mínima de 1 año en área contable",
        "Manejo de software contable (preferible Siigo)",
        "Conocimientos en Excel intermedio",
        "Responsable y organizado"
      ],
      responsibilities: [
        "Registrar movimientos contables diarios",
        "Manejar cuentas por pagar y cobrar",
        "Elaborar facturación y documentos contables",
        "Realizar conciliaciones bancarias",
        "Apoyar en declaraciones tributarias"
      ]
    },
    {
      id: 4,
      title: "Auxiliar Administrativo",
      department: "Administración",
      type: "Tiempo Completo",
      location: "Medellín, Antioquia",
      salary: "$1,400,000 - $1,700,000",
      description: "Auxiliar administrativo para apoyo general en oficina, atención al cliente, manejo de archivo y coordinación de actividades administrativas.",
      requirements: [
        "Bachiller académico completo",
        "Experiencia de 6 meses en cargos administrativos",
        "Manejo de paquete Office",
        "Excelente atención al cliente",
        "Habilidades de comunicación"
      ],
      responsibilities: [
        "Atender llamadas telefónicas y visitantes",
        "Manejar archivo físico y digital",
        "Apoyar en coordinación de reuniones",
        "Realizar trámites administrativos",
        "Brindar soporte general a todas las áreas"
      ]
    }
  ];

  const handleApply = (job: any) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-tructon-blue to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="jobs-title">
                Únete a Nuestro Equipo
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="jobs-subtitle">
                Construye tu futuro profesional con nosotros. Buscamos talento comprometido con la innovación y la sostenibilidad.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Grid */}
        <section className="py-20 bg-tructon-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-tructon-blue mb-4" data-testid="available-jobs-title">
                Empleos Disponibles
              </h2>
              <p className="text-lg text-tructon-steel" data-testid="available-jobs-subtitle">
                Descubre las oportunidades que tenemos para ti
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" data-testid="jobs-grid">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`job-card-${job.id}`}>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-semibold text-tructon-blue" data-testid={`job-title-${job.id}`}>
                        {job.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-tructon-orange text-white" data-testid={`job-type-${job.id}`}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-tructon-steel space-x-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span data-testid={`job-department-${job.id}`}>{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span data-testid={`job-location-${job.id}`}>{job.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tructon-steel mb-4" data-testid={`job-description-${job.id}`}>
                      {job.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-tructon-blue font-semibold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span data-testid={`job-salary-${job.id}`}>{job.salary}</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => handleApply(job)}
                            className="bg-tructon-blue hover:bg-blue-800 text-white"
                            data-testid={`button-apply-${job.id}`}
                          >
                            Ver Detalles
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-tructon-blue">{job.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-tructon-blue mb-2">Descripción del Cargo</h3>
                              <p className="text-tructon-steel">{job.description}</p>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-tructon-blue mb-2">Requisitos</h3>
                              <ul className="list-disc list-inside space-y-1 text-tructon-steel">
                                {job.requirements.map((req: string, index: number) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-tructon-blue mb-2">Responsabilidades</h3>
                              <ul className="list-disc list-inside space-y-1 text-tructon-steel">
                                {job.responsibilities.map((resp: string, index: number) => (
                                  <li key={index}>{resp}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold text-tructon-blue mb-4">Aplicar a esta Vacante</h3>
                              <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="applicant-name">Nombre Completo</Label>
                                    <Input id="applicant-name" placeholder="Tu nombre completo" />
                                  </div>
                                  <div>
                                    <Label htmlFor="applicant-email">Correo Electrónico</Label>
                                    <Input id="applicant-email" type="email" placeholder="tu@email.com" />
                                  </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="applicant-phone">Teléfono</Label>
                                    <Input id="applicant-phone" placeholder="+57 321 771 0236" />
                                  </div>
                                  <div>
                                    <Label htmlFor="applicant-experience">Años de Experiencia</Label>
                                    <Input id="applicant-experience" placeholder="Ej: 2 años" />
                                  </div>
                                </div>
                                <div>
                                  <Label htmlFor="cover-letter">Carta de Presentación</Label>
                                  <Textarea 
                                    id="cover-letter" 
                                    rows={4} 
                                    placeholder="Cuéntanos por qué eres el candidato ideal para esta posición..."
                                  />
                                </div>
                                <Button className="w-full bg-tructon-orange hover:bg-orange-600 text-white">
                                  <Send className="mr-2 h-4 w-4" />
                                  Enviar Aplicación
                                </Button>
                              </form>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-tructon-blue mb-4">¿Por qué trabajar con nosotros?</h2>
              <p className="text-lg text-tructon-steel max-w-3xl mx-auto">
                En Tructon valoramos el talento y ofrecemos un ambiente de trabajo que promueve el crecimiento profesional y personal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-tructon-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-tructon-blue mb-2">Ambiente Colaborativo</h3>
                <p className="text-tructon-steel">Trabajamos en equipo para alcanzar objetivos comunes y crecer juntos.</p>
              </div>
              <div className="text-center">
                <div className="bg-tructon-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-tructon-blue mb-2">Equilibrio Vida-Trabajo</h3>
                <p className="text-tructon-steel">Promovemos un balance saludable entre la vida laboral y personal.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-tructon-blue mb-2">Desarrollo Profesional</h3>
                <p className="text-tructon-steel">Ofrecemos oportunidades de capacitación y crecimiento profesional continuo.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}