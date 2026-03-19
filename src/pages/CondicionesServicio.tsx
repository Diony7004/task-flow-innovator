import Layout from "@/components/Layout";

const CondicionesServicio = () => (
  <Layout>
    <div className="container max-w-3xl py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones de Servicio</h1>
      <p className="mt-2 text-muted-foreground text-sm">Última actualización: marzo de 2026</p>

      <div className="mt-10 space-y-8 text-foreground/90 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground">
        <h2>1. Identificación del prestador</h2>
        <p>Dionisio Sánchez, persona física con actividad empresarial bajo el Régimen Simplificado de Confianza, operando bajo la marca comercial <strong>Multi-Agent-AI</strong>, con domicilio en México.</p>
        <p>Correo de contacto: <strong>contacto@multi-agent-ai.com</strong></p>

        <h2>2. Objeto</h2>
        <p>Los presentes Términos y Condiciones regulan el acceso y uso del sitio web multi-agent-ai.com, así como la contratación de los servicios ofrecidos por Multi-Agent-AI, que incluyen:</p>
        <ul>
          <li>Desarrollo e implementación de agentes de inteligencia artificial.</li>
          <li>Automatización de flujos de trabajo empresariales.</li>
          <li>Configuración y administración de WhatsApp Business API como proveedor de tecnología (Tech Provider) autorizado por Meta.</li>
          <li>Creación de contenido multimedia con inteligencia artificial.</li>
          <li>Consultoría tecnológica en inteligencia artificial y automatización.</li>
        </ul>

        <h2>3. Aceptación</h2>
        <p>El acceso y uso de este sitio web, así como la contratación de cualquier servicio, implica la aceptación plena y sin reservas de estos Términos y Condiciones.</p>

        <h2>4. Servicios de Tech Provider</h2>
        <p>Multi-Agent-AI actúa como <strong>proveedor de tecnología independiente</strong> (Tech Provider) ante Meta Platforms, Inc. En este contexto:</p>
        <ul>
          <li>Multi-Agent-AI configura y administra la infraestructura técnica necesaria para conectar los números de WhatsApp Business de los clientes a la Cloud API de Meta.</li>
          <li><strong>Cada cliente retiene la titularidad total</strong> de su cuenta de WhatsApp Business (WABA), sus números telefónicos y los datos que se gestionan a través de ellos.</li>
          <li>Multi-Agent-AI <strong>no almacena ni centraliza</strong> datos personales de los usuarios finales de los clientes.</li>
          <li>Cada cliente opera sobre su propia instancia de automatización, garantizando la segregación de datos.</li>
        </ul>

        <h2>5. Obligaciones del usuario</h2>
        <p>El usuario se compromete a:</p>
        <ul>
          <li>Proporcionar información veraz y actualizada.</li>
          <li>Utilizar los servicios de conformidad con la legislación aplicable y estos Términos.</li>
          <li>No utilizar los servicios para enviar mensajes no solicitados (spam), contenido ilícito o que viole los derechos de terceros.</li>
          <li>Cumplir con las políticas de uso de WhatsApp Business y Meta Platforms.</li>
          <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
        </ul>

        <h2>6. Propiedad intelectual</h2>
        <p>Todo el contenido del sitio web (textos, diseños, logotipos, código fuente) es propiedad de Multi-Agent-AI o se utiliza con autorización. Queda prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.</p>
        <p>Los flujos de automatización y agentes de IA desarrollados específicamente para un cliente serán propiedad del cliente una vez liquidado el servicio correspondiente, salvo acuerdo en contrario.</p>

        <h2>7. Limitación de responsabilidad</h2>
        <p>Multi-Agent-AI no será responsable por:</p>
        <ul>
          <li>Interrupciones o fallos en los servicios de terceros (Meta, WhatsApp, proveedores de nube).</li>
          <li>Pérdidas derivadas del uso indebido de los servicios por parte del cliente.</li>
          <li>Daños indirectos, incidentales o consecuentes.</li>
          <li>Cambios en las políticas o APIs de Meta Platforms que afecten la funcionalidad de los servicios.</li>
        </ul>

        <h2>8. Confidencialidad</h2>
        <p>Ambas partes se comprometen a mantener la confidencialidad de toda información técnica, comercial o personal intercambiada durante la prestación de los servicios.</p>

        <h2>9. Facturación y pagos</h2>
        <ul>
          <li>Los servicios se cotizan de forma individual según el alcance del proyecto.</li>
          <li>Los pagos se realizarán en los términos acordados en la cotización o contrato específico.</li>
          <li>Multi-Agent-AI emite comprobantes fiscales (CFDI) conforme a la legislación fiscal mexicana.</li>
        </ul>

        <h2>10. Cancelación y terminación</h2>
        <ul>
          <li>El cliente podrá cancelar los servicios en cualquier momento con un aviso previo de 15 días naturales por escrito a contacto@multi-agent-ai.com.</li>
          <li>Multi-Agent-AI se reserva el derecho de suspender o terminar los servicios en caso de incumplimiento de estos Términos.</li>
          <li>En caso de terminación, se entregará al cliente toda la información y accesos correspondientes a su infraestructura.</li>
        </ul>

        <h2>11. Modificaciones</h2>
        <p>Multi-Agent-AI se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este sitio web.</p>

        <h2>12. Legislación aplicable y jurisdicción</h2>
        <p>Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes en el domicilio fiscal de Multi-Agent-AI, renunciando a cualquier otro fuero que pudiera corresponderles.</p>

        <h2>13. Contacto</h2>
        <p>Para cualquier duda sobre estos Términos y Condiciones:</p>
        <p><strong>Correo:</strong> contacto@multi-agent-ai.com</p>
        <p><strong>Sitio web:</strong> https://multi-agent-ai.com</p>
      </div>
    </div>
  </Layout>
);

export default CondicionesServicio;
