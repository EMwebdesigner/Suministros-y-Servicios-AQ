import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    company: "Empresa Manufacturera",
    text: "Excelente servicio. Resolvieron una falla crítica en tiempo récord. Muy profesionales y confiables.",
    rating: 5,
  },
  {
    id: 2,
    name: "María González",
    company: "Propietaria",
    text: "Instalaron todo el sistema eléctrico de mi casa. Trabajo impecable, cumplieron con los tiempos y el presupuesto.",
    rating: 5,
  },
  {
    id: 3,
    name: "José Martínez",
    company: "Gerente de Local",
    text: "El mantenimiento preventivo que realizan nos ha ahorrado muchos dolores de cabeza. Totalmente recomendados.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Testimonios
          </h2>
          <p className="text-xl text-muted-foreground">
            Lo que dicen nuestros clientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-accent fill-accent"
                  size={24}
                />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-center text-foreground mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="font-bold text-lg text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronLeft />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
