import Layout from "@/components/Layout";

const PoliticaPrivacidad = () => (
  <Layout>
    <div className="container max-w-3xl py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
      <p className="mt-2 text-muted-foreground text-sm">Última actualización: marzo de 2026</p>

      <div className="mt-10 space-y-8 text-foreground/90 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground">
        <h2>1. Responsable del tratamiento</h2>
        <p>Dionisio Sánchez, persona física con actividad empresarial bajo el Régimen Simplificado de Confianza, con domicilio en México (en adelante, "Multi-Agent-AI"), es responsable del tratamiento de los datos personales que usted proporcione a través del sitio web multi-agent-ai.com y los servicios asociados.</p>
        <p>Correo de contacto: <strong>contacto@multi-agent-ai.com</strong></p>

        <h2>2. Datos personales que recopilamos</h2>
        <p>Podemos recopilar los siguientes datos personales:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> nombre, correo electrónico, número de teléfono.</li>
          <li><strong>Datos empresariales:</strong> nombre de la empresa, cargo, giro comercial.</li>
          <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas y tiempo de permanencia.</li>
          <li><strong>Datos de comunicación:</strong> mensajes enviados a través de formularios de contacto, WhatsApp Business o correo electrónico.</li>
        </ul>

        <h2>3. Finalidades del tratamiento</h2>
        <p>Sus datos personales serán utilizados para:</p>
        <p><strong>Finalidades primarias:</strong></p>
        <ul>
          <li>Proveer los servicios de automatización e inteligencia artificial contratados.</li>
          <li>Gestionar la relación comercial y dar seguimiento a solicitudes.</li>
          <li>Configurar y administrar cuentas de WhatsApp Business API en calidad de proveedor de tecnología (Tech Provider).</li>
          <li>Enviar comunicaciones relacionadas con los servicios contratados.</li>
        </ul>
        <p><strong>Finalidades secundarias:</strong></p>
        <ul>
          <li>Enviar información sobre nuevos servicios, actualizaciones o promociones.</li>
          <li>Realizar análisis estadísticos internos para mejorar nuestros servicios.</li>
        </ul>
        <p>Si usted no desea que sus datos sean tratados para finalidades secundarias, puede enviar su solicitud a contacto@multi-agent-ai.com.</p>

        <h2>4. Fundamento legal</h2>
        <p>El tratamiento de sus datos personales se realiza con base en:</p>
        <ul>
          <li>La Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.</li>
          <li>El consentimiento que usted otorga al proporcionar sus datos a través de nuestros formularios o servicios.</li>
        </ul>

        <h2>5. Transferencia de datos</h2>
        <p>Multi-Agent-AI podrá transferir sus datos personales a:</p>
        <ul>
          <li>Proveedores de infraestructura en la nube (servidores y bases de datos) para la prestación del servicio.</li>
          <li>Meta Platforms, Inc. (Facebook/WhatsApp) en el contexto de la configuración de WhatsApp Business API, actuando exclusivamente como proveedor técnico.</li>
        </ul>
        <p>En todos los casos, Multi-Agent-AI actúa como proveedor técnico. <strong>No almacenamos ni centralizamos datos personales de los usuarios finales de nuestros clientes.</strong> Cada cliente mantiene la titularidad y control de su infraestructura, sus números de WhatsApp Business y la información que gestiona a través de ellos.</p>

        <h2>6. Derechos ARCO</h2>
        <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer cualquiera de estos derechos, envíe su solicitud a:</p>
        <p><strong>Correo:</strong> contacto@multi-agent-ai.com</p>
        <p>Su solicitud deberá contener:</p>
        <ul>
          <li>Nombre completo y correo electrónico asociado.</li>
          <li>Descripción clara del derecho que desea ejercer.</li>
          <li>Documento que acredite su identidad (copia de identificación oficial).</li>
        </ul>
        <p>Responderemos en un plazo máximo de 20 días hábiles.</p>

        <h2>7. Uso de cookies y tecnologías de rastreo</h2>
        <p>Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación y recopilar datos estadísticos. Usted puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.</p>

        <h2>8. Medidas de seguridad</h2>
        <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o acceso no autorizado.</p>

        <h2>9. Modificaciones a esta política</h2>
        <p>Multi-Agent-AI se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página con la fecha de actualización correspondiente.</p>

        <h2>10. Contacto</h2>
        <p>Para cualquier duda o comentario sobre esta Política de Privacidad, puede contactarnos en:</p>
        <p><strong>Correo:</strong> contacto@multi-agent-ai.com</p>
        <p><strong>Sitio web:</strong> https://multi-agent-ai.com</p>
      </div>
    </div>
  </Layout>
);

export default PoliticaPrivacidad;
