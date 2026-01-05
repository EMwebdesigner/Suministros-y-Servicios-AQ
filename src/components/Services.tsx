import { Zap, Sun, Factory, Wrench, Settings, Cable } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import serviceElectricalImg from "@/assets/service-electrical-new.jpg";
import serviceBackupImg from "@/assets/service-backup-new.jpg";
import serviceIndustrialImg from "@/assets/service-industrial-new.jpg";

interface ServiceSection {
  title: string;
  icon: LucideIcon;
  items: string[];
}

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  image: string;
  sections: ServiceSection[];
}

const services: Service[] = [
  {
    id: "electricos",
    icon: Zap,
    title: "Servicios Eléctricos Integrales",
    shortDescription:
      "Obras, reparaciones y mantenimiento de instalaciones eléctricas, cumpliendo normas de seguridad y calidad.",
    image: serviceElectricalImg,
    sections: [
      {
        title: "Obras e instalaciones eléctricas",
        icon: Wrench,
        items: [
          "Instalaciones eléctricas nuevas",
          "Cableado, tomas e interruptores",
          "Iluminación interior y exterior",
          "Montaje y adecuación de tableros eléctricos",
          "Adecuación según normativa vigente",
        ],
      },
      {
        title: "Reparaciones eléctricas",
        icon: Cable,
        items: [
          "Detección y resolución de fallas",
          "Reparación de tableros, circuitos y luminarias",
          "Corrección de instalaciones defectuosas",
        ],
      },
      {
        title: "Mantenimiento eléctrico",
        icon: Settings,
        items: [
          "Mantenimiento preventivo y correctivo",
          "Revisión general de instalaciones",
          "Optimización de seguridad eléctrica",
          "Diagnóstico y asesoramiento técnico",
        ],
      },
    ],
  },
  {
    id: "respaldo",
    icon: Sun,
    title: "Sistemas de Respaldo Energético",
    shortDescription:
      "Soluciones para garantizar la continuidad del suministro eléctrico ante cortes de energía.",
    image: serviceBackupImg,
    sections: [
      {
        title: "Generadores eléctricos de respaldo",
        icon: Wrench,
        items: [
          "Proyecto e instalación de generadores",
          "Generadores con motor a combustión",
          "Integración con tableros de transferencia",
          "Puesta en marcha y pruebas de funcionamiento",
          "Mantenimiento y soporte técnico",
        ],
      },
      {
        title: "Sistemas solares fotovoltaicos",
        icon: Sun,
        items: [
          "Proyecto e instalación de paneles solares",
          "Sistemas solares como respaldo energético",
          "Integración con instalaciones existentes",
          "Configuración híbrida (red eléctrica, solar y generador)",
          "Asesoramiento energético personalizado",
        ],
      },
    ],
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Electrotecnia Industrial y Puentes Grúa",
    shortDescription:
      "Servicio técnico especializado en electricidad y mecánica aplicada a equipos industriales.",
    image: serviceIndustrialImg,
    sections: [
      {
        title: "Mantenimiento eléctrico y mecánico de puentes grúa",
        icon: Settings,
        items: [
          "Diagnóstico y reparación de fallas",
          "Reparación de sistemas de potencia",
          "Mantenimiento preventivo industrial",
          "Ajuste, puesta a punto y seguridad operativa",
        ],
      },
    ],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Brindamos soluciones integrales en electricidad y electrotecnia,
            realizando obras, mantenimiento y reparaciones en instalaciones
            monofásicas y trifásicas, para entornos residenciales, comerciales e
            industriales.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--electric-orange)/0.5)] hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/50"
            >
              {/* Image Header */}
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-card p-6">
                {/* Short Description */}
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  {service.sections.map((section, index) => (
                    <AccordionItem
                      key={index}
                      value={`${service.id}-${index}`}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="hover:text-primary text-left py-3">
                        <div className="flex items-center gap-3">
                          <section.icon className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="font-semibold text-sm">
                            {section.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-8">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-muted-foreground text-sm flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5 flex-shrink-0">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitás una solución eléctrica confiable y a medida?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de profesionales está listo para asesorarte y
            brindarte la mejor solución para tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Me%20comunico%20para%20solicitar%20asesoramiento%20sobre%20una%20instalación%20eléctrica.%20Quisiera%20conocer%20la%20mejor%20solución%20según%20mi%20necesidad.%20Muchas%20gracias."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold px-8 py-3 text-lg shadow-[0_0_20px_hsl(var(--electric-orange)/0.4)] hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.6)] transition-all"
              >
                Solicitar Asesoramiento
              </Button>
            </a>
            <a
              href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20solicitar%20un%20presupuesto%20para%20un%20trabajo%20eléctrico.%20Me%20gustaría%20recibir%20asesoramiento%20según%20el%20tipo%20de%20instalación%20que%20necesito.%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold px-8 py-3 text-lg"
              >
                Pedir Presupuesto
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
