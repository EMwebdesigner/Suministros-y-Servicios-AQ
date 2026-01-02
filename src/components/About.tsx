import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de dos décadas de excelencia en servicios eléctricos y electrotecnia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              Nuestra Historia
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde hace más de 20 años, Servicios y Suministros A-Q C.A. se ha consolidado como un referente en el sector eléctrico, brindando soluciones integrales para instalaciones residenciales, comerciales e industriales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contamos con amplia experiencia en sistemas eléctricos monofásicos y trifásicos, desarrollando obras, mantenimiento y reparaciones, así como en la implementación de sistemas de respaldo energético, generadores eléctricos y soluciones solares.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro crecimiento se basa en el compromiso con la calidad, la seguridad operativa y la satisfacción del cliente, respaldados por un equipo técnico altamente capacitado y certificado, preparado para abordar proyectos de distinta complejidad.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Award className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">20+</h4>
              <p className="text-muted-foreground">Años de experiencia en el sector eléctrico</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Users className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">500+</h4>
              <p className="text-muted-foreground">Clientes satisfechos en hogares, comercios e industrias</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Target className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">1000+</h4>
              <p className="text-muted-foreground">Proyectos completados en obras, mantenimiento y servicios técnicos</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Heart className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">100%</h4>
              <p className="text-muted-foreground">Compromiso con la calidad y la seguridad</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-primary">Misión</h4>
            <p className="text-muted-foreground">
              Brindar servicios eléctricos y electrotécnicos de la más alta calidad, garantizando la seguridad, eficiencia y confiabilidad de cada instalación, mediante soluciones técnicas a medida y personal altamente calificado.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Visión</h4>
            <p className="text-muted-foreground">
              Ser una empresa referente en servicios eléctricos y electrotecnia, reconocida por su excelencia operativa, confiabilidad y capacidad para desarrollar soluciones innovadoras en entornos residenciales, comerciales e industriales.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-accent">Valores</h4>
            <p className="text-muted-foreground">
              Calidad, seguridad, honestidad, responsabilidad y compromiso. Trabajamos cada día para superar expectativas, garantizar instalaciones seguras y construir relaciones duraderas basadas en la confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
