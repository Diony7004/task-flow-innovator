import { motion } from "framer-motion";
import { Phone, ShieldCheck, Mail, UserX, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "El empleado llama",
    desc: "Tu equipo tiene acceso a una línea telefónica atendida por un agente de voz con IA, disponible 24/7.",
  },
  {
    icon: UserX,
    title: "Anonimato garantizado",
    desc: "El empleado decide si permanece anónimo o si deja sus datos de contacto. Nosotros respetamos su decisión.",
  },
  {
    icon: Mail,
    title: "Transcripción al comité",
    desc: "La transcripción completa de la llamada se envía por correo electrónico al comité de vigilancia de tu empresa.",
  },
];

const ComplianceLineSection = () => (
  <section id="compliance" className="py-24 bg-card/30">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Producto listo para usar</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Línea de{" "}
          <span className="text-gradient">Compliance</span> con IA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground leading-relaxed"
        >
          Cumple con la NOM-035-STPS-2018. Un agente de voz con inteligencia
          artificial que recibe quejas y observaciones de tus empleados de forma
          confidencial, las transcribe y las envía directamente a tu comité de
          vigilancia.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative rounded-xl border border-border/50 bg-background p-8 text-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              {i + 1}
            </div>
            <div className="mt-2 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 max-w-2xl mx-auto rounded-xl border border-primary/20 bg-primary/5 p-8"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Modelo de suscripción</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Setup inicial + renta mensual fija. Sin costos sorpresa. Tu línea
              queda activa 24/7 para que tus empleados la usen cuando lo necesiten.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="#contacto">
            <Button variant="hero" size="lg">
              Solicitar cotización
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComplianceLineSection;
