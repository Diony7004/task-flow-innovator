import { motion } from "framer-motion";
import { TrendingUp, Globe, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$3.5 USD", label: "ganados por cada $1 invertido en IA" },
  { icon: Globe, value: "72%", label: "de usuarios juzgan credibilidad por el sitio web" },
  { icon: Zap, value: "80%", label: "reducción en tareas operativas repetitivas" },
];

const StatsSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-4xl font-extrabold text-gradient">{s.value}</div>
            <p className="mt-2 text-muted-foreground text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
