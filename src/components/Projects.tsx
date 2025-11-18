import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Instalación Residencial Premium",
    category: "Residencial",
    description: "Sistema eléctrico completo para casa de 300m²",
  },
  {
    id: 2,
    title: "Iluminación LED Comercial",
    category: "Comercial",
    description: "Modernización de oficinas corporativas",
  },
  {
    id: 3,
    title: "Planta Industrial",
    category: "Industrial",
    description: "Instalación trifásica para línea de producción",
  },
  {
    id: 4,
    title: "Mantenimiento Preventivo",
    category: "Industrial",
    description: "Servicio anual para complejo industrial",
  },
  {
    id: 5,
    title: "Remodelación Eléctrica",
    category: "Comercial",
    description: "Actualización completa de centro comercial",
  },
  {
    id: 6,
    title: "Casa Inteligente",
    category: "Residencial",
    description: "Domótica y automatización residencial",
  },
];

const categories = ["Todos", "Residencial", "Comercial", "Industrial"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-muted-foreground">
            Trabajos realizados con excelencia
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.4)] hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/30">
                  {project.id}
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
