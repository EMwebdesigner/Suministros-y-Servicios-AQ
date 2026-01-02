import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl md:max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Servicios Eléctricos Profesionales y Confiables
          </h1>
          <p className="text-base md:text-2xl text-foreground/90 mb-4 md:mb-8">
            Más de 20 años brindando soluciones eléctricas certificadas
          </p>
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
              <a
              href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20solicitar%20un%20presupuesto%20para%20un%20trabajo%20eléctrico.%20Me%20gustaría%20recibir%20asesoramiento%20según%20el%20tipo%20de%20instalación%20que%20necesito.%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="py-2 px-4 md:py-3 md:px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-sm md:text-lg shadow-[var(--glow-orange)] hover:shadow-[var(--glow-red)] transition-all"
              >
                Solicitar Presupuesto
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("servicios")}
              variant="outline"
              className="py-2 px-3 md:py-3 md:px-6 border-2 border-primary text-foreground hover:bg-primary/10 font-semibold text-sm md:text-lg"
            >
              Ver Servicios
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50">
              <Clock className="text-accent w-5 h-5 md:w-8 md:h-8" />
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base">Servicio 24/7</p>
                <p className="text-xs md:text-sm text-muted-foreground">Siempre disponibles</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50">
              <Award className="text-accent w-5 h-5 md:w-8 md:h-8" />
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base">Técnicos Certificados</p>
                <p className="text-xs md:text-sm text-muted-foreground">Personal calificado</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50">
              <Shield className="text-accent w-5 h-5 md:w-8 md:h-8" />
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base">Garantía Escrita</p>
                <p className="text-xs md:text-sm text-muted-foreground">Trabajo garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
