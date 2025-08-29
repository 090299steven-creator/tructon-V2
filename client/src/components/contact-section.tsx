import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, FileText, BookOpen, Package, Calculator } from "lucide-react";
import tructonLogo from "@assets/Recurso 1_1755831286955.png";

export default function ContactSection() {
  const [submissionType, setSubmissionType] = useState<'sample' | 'quote'>('sample');
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      message: '',
      submissionType: 'sample'
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "¡Formulario enviado!",
        description: "Te contactaremos pronto para ayudarte con tu proyecto.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error al enviar",
        description: error instanceof Error ? error.message : "Ocurrió un error inesperado",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate({ ...data, submissionType });
  };

  const handleSampleRequest = () => {
    setSubmissionType('sample');
    form.setValue('submissionType', 'sample');
    form.handleSubmit(onSubmit)();
  };

  const handleQuoteRequest = () => {
    setSubmissionType('quote');
    form.setValue('submissionType', 'quote');
    form.handleSubmit(onSubmit)();
  };

  return (
    <section id="contacto" className="py-20 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tructon-blue mb-4 flex items-center justify-center" data-testid="contact-title">
            <img 
              src={tructonLogo} 
              alt="Logo Tructon" 
              className="w-10 h-10 mr-4"
            />
            Contáctanos
          </h2>
          <p className="text-xl text-tructon-steel" data-testid="contact-subtitle">
            Estamos aquí para ayudarte con tu proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card data-testid="contact-form-card">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-tructon-blue font-semibold">Nombre*</Label>
                    <Input
                      id="name"
                      {...form.register('name')}
                      placeholder="Tu nombre completo"
                      className="mt-2 focus:ring-tructon-blue"
                      data-testid="input-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-name">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-tructon-blue font-semibold">Empresa</Label>
                    <Input
                      id="company"
                      {...form.register('company')}
                      placeholder="Nombre de tu empresa"
                      className="mt-2 focus:ring-tructon-blue"
                      data-testid="input-company"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-tructon-blue font-semibold">Correo*</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register('email')}
                      placeholder="tu@email.com"
                      className="mt-2 focus:ring-tructon-blue"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-tructon-blue font-semibold">Teléfono*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register('phone')}
                      placeholder="+57 321 771 0236"
                      className="mt-2 focus:ring-tructon-blue"
                      data-testid="input-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-phone">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="productCategory" className="text-tructon-blue font-semibold">Tipo de producto de interés</Label>
                  <Select 
                    onValueChange={(value) => form.setValue('productCategory', value)}
                    data-testid="select-product-category"
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construccion-industrial">Construcción e Industrial</SelectItem>
                      <SelectItem value="amoblamiento-urbano">Amoblamiento Urbano</SelectItem>
                      <SelectItem value="otros-productos">Otros Productos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-tructon-blue font-semibold">Mensaje</Label>
                  <Textarea
                    id="message"
                    {...form.register('message')}
                    rows={4}
                    placeholder="Describe tu proyecto o necesidades..."
                    className="mt-2 focus:ring-tructon-blue"
                    data-testid="input-message"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="button"
                    onClick={handleSampleRequest}
                    disabled={submitMutation.isPending}
                    className="bg-tructon-orange hover:bg-orange-600 text-white font-semibold transition-colors"
                    data-testid="button-sample-submit"
                  >
                    <Package className="mr-2 h-5 w-5" />
                    {submitMutation.isPending ? 'Enviando...' : 'Solicita una muestra gratis'}
                  </Button>
                  <Button 
                    type="button"
                    onClick={handleQuoteRequest}
                    disabled={submitMutation.isPending}
                    className="bg-tructon-blue hover:bg-blue-800 text-white font-semibold transition-colors"
                    data-testid="button-quote-submit"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    {submitMutation.isPending ? 'Enviando...' : 'Cotiza tu proyecto'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8" data-testid="contact-info">
            <div>
              <h3 className="text-2xl font-semibold text-tructon-blue mb-4" data-testid="contact-info-title">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-address">
                  <MapPin className="text-tructon-orange h-6 w-6 mr-4" />
                  <span className="text-tructon-steel">Medellín, Antioquia, Colombia</span>
                </div>
                <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="text-tructon-orange h-6 w-6 mr-4" />
                  <span className="text-tructon-steel">+57 321 771 0236</span>
                </div>
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="text-tructon-orange h-6 w-6 mr-4" />
                  <span className="text-tructon-steel">info@tructon.com</span>
                </div>
              </div>
            </div>
            
            <div data-testid="resources-section">
              <h3 className="text-2xl font-semibold text-tructon-blue mb-4">Recursos</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center text-tructon-steel hover:text-tructon-blue transition-colors"
                  data-testid="link-catalog-download"
                >
                  <FileText className="text-tructon-orange mr-3 h-5 w-5" />
                  Descargar Catálogo Técnico 2025
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-tructon-steel hover:text-tructon-blue transition-colors"
                  data-testid="link-standards-guide"
                >
                  <BookOpen className="text-tructon-orange mr-3 h-5 w-5" />
                  Guía de Normatividad
                </a>
              </div>
            </div>
            
            <div data-testid="social-media-section">
              <h3 className="text-2xl font-semibold text-tructon-blue mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-tructon-blue hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  data-testid="link-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-tructon-blue hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  data-testid="link-linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://wa.me/5730000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  data-testid="link-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
