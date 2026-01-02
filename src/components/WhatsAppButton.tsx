import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/584246536010?text=Hola%2C%20buen%20día.%20Me%20comunico%20para%20realizar%20una%20consulta%20sobre%20sus%20servicios%20eléctricos.%20Quedo%20atento%2Fa.%20Gracias."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
