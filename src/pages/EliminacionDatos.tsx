import Layout from "@/components/Layout";

const EliminacionDatos = () => (
  <Layout>
    <div className="container max-w-3xl py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Política de Eliminación de Datos</h1>
      <p className="mt-2 text-muted-foreground text-sm">Última actualización: marzo de 2026</p>

      <div className="mt-10 space-y-8 text-foreground/90 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_strong]:text-foreground">
        <h2>1. Introducción</h2>
        <p>En Multi-Agent-AI, con domicilio en México, respetamos su derecho a solicitar la eliminación de sus datos personales de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y las políticas de Meta Platforms, Inc.</p>

        <h2>2. Alcance</h2>
        <p>Esta política aplica a todos los datos personales recopilados a través de:</p>
        <ul>
          <li>El sitio web multi-agent-ai.com.</li>
          <li>Formularios de contacto y registro.</li>
          <li>Servicios de WhatsApp Business API configurados por Multi-Agent-AI como proveedor de tecnología (Tech Provider).</li>
          <li>Cualquier otro canal de comunicación operado por Multi-Agent-AI.</li>
        </ul>

        <h2>3. Datos que podemos eliminar</h2>
        <p>A solicitud del usuario, podemos eliminar:</p>
        <ul>
          <li>Datos de identificación (nombre, correo electrónico, teléfono).</li>
          <li>Datos empresariales asociados a su cuenta.</li>
          <li>Registros de comunicaciones (mensajes, solicitudes).</li>
          <li>Datos técnicos de navegación asociados a su perfil.</li>
        </ul>

        <h2>4. Datos que NO almacenamos</h2>
        <p>Multi-Agent-AI actúa como proveedor técnico. <strong>No almacenamos ni centralizamos:</strong></p>
        <ul>
          <li>Mensajes de WhatsApp de los usuarios finales de nuestros clientes.</li>
          <li>Datos personales de los contactos de nuestros clientes.</li>
          <li>Contenido multimedia intercambiado a través de WhatsApp Business.</li>
        </ul>
        <p>Cada cliente mantiene la titularidad y el control total de su propia infraestructura y datos. Si usted es usuario final de uno de nuestros clientes y desea la eliminación de sus datos, deberá contactar directamente a dicho cliente.</p>

        <h2>5. Cómo solicitar la eliminación de sus datos</h2>
        <p>Para solicitar la eliminación de sus datos personales, envíe un correo electrónico a:</p>
        <p><strong>Correo:</strong> contacto@multi-agent-ai.com</p>
        <p>Su solicitud deberá incluir:</p>
        <ol>
          <li><strong>Nombre completo</strong> y correo electrónico con el que se registró.</li>
          <li><strong>Descripción clara</strong> de los datos que desea eliminar.</li>
          <li><strong>Copia de identificación oficial</strong> para verificar su identidad.</li>
        </ol>

        <h2>6. Proceso de eliminación</h2>
        <p>Una vez recibida su solicitud:</p>
        <ol>
          <li><strong>Verificación de identidad:</strong> Validaremos que la solicitud proviene del titular de los datos (plazo: 5 días hábiles).</li>
          <li><strong>Evaluación:</strong> Determinaremos si la eliminación es procedente o si existe alguna obligación legal que requiera la conservación temporal de los datos (plazo: 10 días hábiles).</li>
          <li><strong>Ejecución:</strong> Si la solicitud es procedente, los datos serán eliminados de forma permanente de nuestros sistemas (plazo: 5 días hábiles adicionales).</li>
          <li><strong>Confirmación:</strong> Le enviaremos una confirmación por correo electrónico una vez completada la eliminación.</li>
        </ol>
        <p><strong>Plazo total máximo:</strong> 20 días hábiles desde la recepción de la solicitud completa.</p>

        <h2>7. Excepciones</h2>
        <p>Podremos retener datos cuando:</p>
        <ul>
          <li>Exista una obligación legal o fiscal que requiera su conservación (por ejemplo, comprobantes fiscales que deben conservarse por 5 años conforme al Código Fiscal de la Federación).</li>
          <li>Los datos sean necesarios para el ejercicio o defensa de reclamaciones legales.</li>
          <li>La solicitud no pueda ser verificada adecuadamente.</li>
        </ul>

        <h2>8. Eliminación automática</h2>
        <p>Los datos personales que ya no sean necesarios para las finalidades para las que fueron recopilados serán eliminados de forma periódica conforme a nuestros procesos internos de depuración.</p>

        <h2>9. Callback de eliminación de datos (para integraciones con Meta)</h2>
        <p>Si usted autorizó el acceso a sus datos a través de Facebook Login o WhatsApp Embedded Signup y desea revocar dicho acceso, puede hacerlo desde:</p>
        <p><strong>Configuración de Facebook</strong> &gt; Aplicaciones y sitios web &gt; Eliminar acceso de Multi-Agent-AI.</p>
        <p>Al revocar el acceso, nuestro sistema recibirá automáticamente la notificación de Meta y procederá a eliminar los datos asociados a su autorización.</p>

        <h2>10. Contacto</h2>
        <p>Para cualquier duda sobre esta Política de Eliminación de Datos:</p>
        <p><strong>Correo:</strong> contacto@multi-agent-ai.com</p>
        <p><strong>Sitio web:</strong> https://multi-agent-ai.com</p>
      </div>
    </div>
  </Layout>
);

export default EliminacionDatos;
