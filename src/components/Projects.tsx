import { useState } from "react";
import { Button } from "@/components/ui/button";

import projectAgroBackup from "@/assets/project-agro-backup.jpg";
import projectAgroElectrification from "@/assets/project-agro-electrification.jpg";
import projectCrane from "@/assets/project-crane.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectMaintenance from "@/assets/project-maintenance.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const projects = [
  {
    id: 1,
    title: "Energía de Respaldo y Generación Híbrida Agropecuaria",
    category: "Industrial / Agropecuario",
    description: "Soluciones de energía de respaldo con generadores y sistemas fotovoltaicos para instalaciones.",
    image: projectAgroBackup,
  },
  {
    id: 2,
    title: "Automatización y Control Eléctrico para Bombas de Riego",
    category: "Industrial / Agropecuario",
    description: "Diseño, instalación y puesta en marcha de tableros eléctricos de fuerza y control, incorporando variadores de frecuencia (VFD) y sistemas de arranque tradicional para motores de bombas para riego.",
    image: projectAgroElectrification,
  },
  {
    id: 3,
    title: "Electrotecnia y Mantenimiento de Puente Grúa",
    category: "Industrial",
    description: "Servicio electrotécnico integral en puente grúa industrial, incluyendo mantenimiento eléctrico y mecánico, diagnóstico de fallas y puesta a punto del sistema.",
    image: projectCrane,
  },
  {
    id: 4,
    title: "Sistema de Transferencia Automática (ATS)",
    category: "Industrial",
    description: "Diseño, instalación y puesta en marcha de un sistema de transferencia automática y manual (ATS) para grupo electrógeno, integrado a tablero eléctrico de fuerza y control, con configuración de maniobra y pruebas operativas de conmutación entre fuentes.",
    image: projectIndustrial,
  },
  {
    id: 5,
    title: "Mantenimiento de Sistema Eléctrico de Respaldo (Preventivo y Correctivo)",
    category: "Industrial",
    description: "Mantenimiento preventivo y correctivo de la parte eléctrica de un sistema de respaldo, incluyendo revisión de tableros, conexiones y pruebas operativas.",
    image: projectMaintenance,
  },
  {
    id: 6,
    title: "Iluminación LED y Tableros Comerciales",
    category: "Comercial",
    description: "Modernización del sistema eléctrico e iluminación LED en oficinas comerciales, optimizando consumo energético y seguridad operativa.",
    image: projectCommercial,
  },
];

const categories = ["Todos", "Industrial", "Industrial / Agropecuario", "Comercial"];

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
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
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
