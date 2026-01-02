import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto con usted pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Dirección</h3>
                  <p className="text-muted-foreground">
                    Sector 15, San Jacinto, Zulia, Venezuela
                    <br />
                    RIF: J4047219881
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Teléfono</h3>
                  <p className="text-muted-foreground">+58 412-XXX-XXXX</p>
                  <p className="text-muted-foreground">+58 414-XXX-XXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@serviciosaq.com</p>
                  <p className="text-muted-foreground">ventas@serviciosaq.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-[0_0_30px_hsl(var(--electric-orange)/0.3)] transition-all">
              <div className="flex items-start gap-4">
                <Clock className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Horario</h3>
                  <p className="text-muted-foreground">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-accent font-semibold mt-2">
                    Emergencias 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden border border-border h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-71.6290226!3d10.7135790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQyJzQ4LjkiTiA3McKwMzcnNDQuNSJX!5e0!3m2!1ses!2sve!4v1704200000000!5m2!1ses!2sve"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación - Sector 15, San Jacinto, Zulia"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
