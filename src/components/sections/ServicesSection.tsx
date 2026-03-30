import { motion } from "framer-motion";
import { Bot, Workflow, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentes de IA Autónomos",
    description:
      "Desarrollamos agentes inteligentes que ejecutan tareas complejas de forma autónoma: atención al cliente, análisis de documentos, generación de contenido y toma de decisiones asistida por IA.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Diseñamos flujos de trabajo automatizados que conectan tus herramientas existentes. Desde CRM hasta WhatsApp, eliminamos tareas repetitivas y reducimos costos operativos.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    description:
      "Como proveedor de tecnología autorizado por Meta, conectamos tu negocio a la API oficial de WhatsApp. Coexistencia con la app móvil, onboarding automatizado y mensajería a escala.",
    link: "/onboarding/",
    linkText: "Conectar ahora →",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        ¿Qué <span className="text-gradient">hacemos</span>?
      </motion.h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border border-border/50 bg-card p-8 hover:shadow-glow transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            {"link" in s && s.link && (
              <a href={s.link} className="mt-4 inline-block text-primary hover:text-primary/80 font-semibold text-sm transition-colors">{s.linkText}</a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
