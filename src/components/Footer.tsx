import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-lg font-bold text-gradient">Multi-Agent-AI</span>
          <p className="mt-2 text-sm text-muted-foreground">Agentes de IA que trabajan por ti</p>
          <p className="mt-1 text-sm text-muted-foreground">contacto@multi-agent-ai.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Inicio</Link></li>
            <li><a href="/#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
            <li><a href="/#contacto" className="hover:text-foreground transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/politica-privacidad" className="hover:text-foreground transition-colors">Política de Privacidad</Link></li>
            <li><Link to="/condiciones-servicio" className="hover:text-foreground transition-colors">Términos y Condiciones</Link></li>
            <li><Link to="/eliminacion-datos" className="hover:text-foreground transition-colors">Eliminación de Datos</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        © 2026 Multi-Agent-AI. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
