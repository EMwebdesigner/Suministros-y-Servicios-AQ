import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-aq.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="A-Q Servicios" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20solicitar%20un%20presupuesto%20para%20un%20trabajo%20eléctrico.%20Me%20gustaría%20recibir%20asesoramiento%20según%20el%20tipo%20de%20instalación%20que%20necesito.%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                Solicitar Presupuesto
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Estoy%20interesado%20en%20solicitar%20un%20presupuesto%20para%20un%20trabajo%20eléctrico.%20Me%20gustaría%20recibir%20asesoramiento%20según%20el%20tipo%20de%20instalación%20que%20necesito.%20Gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold w-full">
                Solicitar Presupuesto
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
