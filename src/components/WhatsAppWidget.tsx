import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "524461110003";
const DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de Multi-Agent-AI";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-2 w-72 rounded-xl border border-border/50 bg-card p-5 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Multi-Agent-AI</p>
              <p className="text-xs text-muted-foreground">Normalmente responde en minutos</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            ¿Tienes dudas sobre nuestros servicios de IA o WhatsApp Business API? Escríbenos.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe57]"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar conversación
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label={open ? "Cerrar chat" : "Abrir chat de WhatsApp"}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
