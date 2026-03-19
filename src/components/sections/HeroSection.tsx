import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      loading="eager"
    />
    <div className="absolute inset-0 bg-glow" />
    <div className="container relative z-10 py-24">
      <div className="max-w-3xl">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Agentes de IA que{" "}
          <span className="text-gradient">trabajan por ti</span>
        </motion.h1>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Diseñamos, construimos y desplegamos agentes de inteligencia artificial
          y automatizaciones que transforman la operación de tu empresa.
          Proveedor de tecnología autorizado por Meta.
        </motion.p>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#servicios">
            <Button variant="hero" size="lg">
              Conoce nuestros servicios
            </Button>
          </a>
          <a href="#contacto">
            <Button variant="hero-outline" size="lg">
              Agenda una llamada
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
