import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo-aq.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="A-Q Servicios" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground">
              Servicios eléctricos profesionales con más de 20 años de experiencia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Proyectos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Caracas, Venezuela</li>
              <li>+58 412-XXX-XXXX</li>
              <li>info@serviciosaq.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground font-semibold">
                RIF: J4047219881
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Servicios y Suministros A-Q, C.A. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
