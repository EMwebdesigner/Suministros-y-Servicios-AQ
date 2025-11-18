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
            Más de dos décadas de excelencia en servicios eléctricos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              Nuestra Historia
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde hace más de 20 años, Servicios y Suministros A-Q, C.A. ha sido
              un referente en el sector eléctrico, brindando soluciones integrales
              para residencias, comercios e industrias.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso con la calidad, seguridad y satisfacción del cliente
              nos ha permitido crecer y consolidarnos como líderes en el mercado,
              contando con un equipo de técnicos altamente capacitados y certificados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Award className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">20+</h4>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Users className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">500+</h4>
              <p className="text-muted-foreground">Clientes Satisfechos</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Target className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">1000+</h4>
              <p className="text-muted-foreground">Proyectos Completados</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)]">
              <Heart className="text-accent mb-4" size={40} />
              <h4 className="font-bold text-2xl mb-2 text-foreground">100%</h4>
              <p className="text-muted-foreground">Garantía</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-primary">Misión</h4>
            <p className="text-muted-foreground">
              Brindar servicios eléctricos de la más alta calidad, garantizando
              la seguridad y satisfacción de nuestros clientes mediante soluciones
              innovadoras y personal altamente calificado.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Visión</h4>
            <p className="text-muted-foreground">
              Ser la empresa líder en servicios eléctricos a nivel nacional,
              reconocida por nuestra excelencia, confiabilidad y compromiso con
              la innovación tecnológica.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
            <h4 className="text-2xl font-bold mb-4 text-accent">Valores</h4>
            <p className="text-muted-foreground">
              Calidad, seguridad, honestidad, responsabilidad y compromiso con
              nuestros clientes. Trabajamos cada día para superar las expectativas
              y construir relaciones duraderas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
