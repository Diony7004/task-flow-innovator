import { motion } from "framer-motion";
import { Server, Cpu, MessageCircle, ShieldCheck } from "lucide-react";

const items = [
  { icon: Server, title: "Infraestructura propia", desc: "Cada cliente opera sobre su propia instancia. Tus datos son tuyos." },
  { icon: Cpu, title: "Tecnología de vanguardia", desc: "Trabajamos con Claude, GPT, Gemini y modelos open-source." },
  { icon: MessageCircle, title: "Proveedor oficial de Meta", desc: "WhatsApp Business API con coexistencia oficial entre la app y la Cloud API." },
  { icon: ShieldCheck, title: "Cumplimiento legal", desc: "Operamos bajo la LFPDPPP y mejores prácticas de IA responsable." },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        ¿Por qué <span className="text-gradient">elegirnos</span>?
      </motion.h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
              <p className="mt-1 text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
