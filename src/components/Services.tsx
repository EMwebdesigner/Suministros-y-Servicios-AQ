import { useState } from "react";
import { Wrench, WrenchIcon, Settings } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import residentialBg from "@/assets/residential-bg.jpg";
import commercialBg from "@/assets/commercial-bg.jpg";
import industrialBg from "@/assets/industrial-bg.jpg";

const serviceCategories = [
  {
    id: "residencial",
    title: "Residencia / Casa",
    background: residentialBg,
    services: [
      {
        icon: Wrench,
        title: "Obra",
        items: [
          "Instalación de cableado, tomas e interruptores",
          "Instalación de luminarias",
          "Tableros eléctricos básicos",
        ],
      },
      {
        icon: WrenchIcon,
        title: "Reparación",
        items: [
          "Reparación de cortocircuitos",
          "Cambio de breakers",
          "Reparación de tomas e interruptores",
        ],
      },
      {
        icon: Settings,
        title: "Mantenimiento",
        items: [
          "Mantenimiento preventivo",
          "Revisión de tableros",
          "Revisión de consumos",
        ],
      },
    ],
  },
  {
    id: "comercial",
    title: "Local Comercial",
    background: commercialBg,
    services: [
      {
        icon: Wrench,
        title: "Obra",
        items: [
          "Instalación de tableros comerciales",
          "Iluminación LED para negocios",
          "Cableados para locales",
        ],
      },
      {
        icon: WrenchIcon,
        title: "Reparación",
        items: [
          "Reparación de tableros comerciales",
          "Resolución de fallas eléctricas",
          "Reparación de luminarias",
        ],
      },
      {
        icon: Settings,
        title: "Mantenimiento",
        items: [
          "Mantenimiento periódico",
          "Revisión de consumos",
          "Optimización energética",
        ],
      },
    ],
  },
  {
    id: "industrial",
    title: "Industrial",
    background: industrialBg,
    services: [
      {
        icon: Wrench,
        title: "Obra",
        items: [
          "Instalación de tableros industriales",
          "Cableado de maquinaria",
          "Instalaciones trifásicas",
        ],
      },
      {
        icon: WrenchIcon,
        title: "Reparación",
        items: [
          "Reparación de tableros",
          "Fallas en líneas de producción",
          "Reparación de sistemas de potencia",
        ],
      },
      {
        icon: Settings,
        title: "Mantenimiento",
        items: [
          "Mantenimiento predictivo y correctivo",
          "Termografías",
          "Control de cargas",
        ],
      },
    ],
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones eléctricas para cada necesidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                hoveredCard === category.id
                  ? "shadow-[0_0_40px_hsl(var(--electric-orange)/0.6)] scale-[1.02] -translate-y-2"
                  : "shadow-lg"
              }`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64">
                <img
                  src={category.background}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="bg-card p-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.services.map((service, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:text-primary">
                        <div className="flex items-center gap-3">
                          <service.icon className="text-accent" size={24} />
                          <span className="font-semibold">{service.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 ml-9">
                          {service.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-accent mt-1.5">•</span>
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
      </div>
    </section>
  );
};

export default Services;
