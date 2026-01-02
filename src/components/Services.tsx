import { Zap, Sun, Factory } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "electricos",
    icon: Zap,
    title: "Servicios Eléctricos Integrales",
    shortDescription:
      "Obras, reparaciones y mantenimiento de instalaciones eléctricas, cumpliendo normas de seguridad y calidad.",
    sections: [
      {
        title: "Obras e instalaciones eléctricas",
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
        items: [
          "Detección y resolución de fallas",
          "Reparación de tableros, circuitos y luminarias",
          "Corrección de instalaciones defectuosas",
        ],
      },
      {
        title: "Mantenimiento eléctrico",
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
    sections: [
      {
        title: "Generadores eléctricos de respaldo",
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
    sections: [
      {
        title: "Mantenimiento eléctrico y mecánico de puentes grúa",
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
              className="group bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--electric-orange)/0.4)] hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/50"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Short Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
                      <span className="font-semibold text-sm">
                        {section.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-2">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-0.5 flex-shrink-0">
                              ⚡
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
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold px-8 py-3 text-lg shadow-[0_0_20px_hsl(var(--electric-orange)/0.4)] hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.6)] transition-all"
            >
              Solicitar Asesoramiento
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold px-8 py-3 text-lg"
            >
              Pedir Presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
