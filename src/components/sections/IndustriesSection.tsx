import { motion } from "framer-motion";
import { Scale, Heart, Landmark, Users, Truck, Headphones } from "lucide-react";

const industries = [
  { icon: Scale, title: "Legal", desc: "Generación automatizada de escritos jurídicos y análisis de jurisprudencia con IA" },
  { icon: Heart, title: "Salud", desc: "Extracción de datos de historias clínicas y asistencia diagnóstica" },
  { icon: Landmark, title: "Finanzas", desc: "Automatización KYC, detección de fraude y análisis crediticio" },
  { icon: Users, title: "Recursos Humanos", desc: "Redacción de ofertas, programación de entrevistas, análisis de retención" },
  { icon: Truck, title: "Logística", desc: "Optimización de rutas, mantenimiento predictivo, evaluación de riesgos" },
  { icon: Headphones, title: "Atención al Cliente", desc: "Agentes conversacionales multicanal (voz, chat, WhatsApp) 24/7" },
];

const IndustriesSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Industrias que <span className="text-gradient">atendemos</span>
      </motion.h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex gap-4 p-6 rounded-lg border border-border/30 bg-background/50 hover:border-primary/30 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <ind.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{ind.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
