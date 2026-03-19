import { motion } from "framer-motion";
import { Eye, Lock, Brain, Settings } from "lucide-react";

const badges = [
  { icon: Eye, label: "Transparencia" },
  { icon: Lock, label: "Privacidad" },
  { icon: Brain, label: "Explicabilidad" },
  { icon: Settings, label: "Control del usuario" },
];

const ResponsibleAISection = () => (
  <section className="py-24">
    <div className="container max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Comprometidos con la{" "}
        <span className="text-gradient">IA responsable</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-6 text-muted-foreground leading-relaxed"
      >
        Creemos que la inteligencia artificial debe ser transparente, justa y
        segura. No almacenamos datos de usuarios finales. Cada cliente retiene el
        control total de su información. Nuestros agentes son explicables: puedes
        entender, corregir y detener cualquier proceso automatizado.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-5 py-2.5"
          >
            <b.icon className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">{b.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ResponsibleAISection;
