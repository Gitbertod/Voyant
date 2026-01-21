import { useState } from "react";
import styles from "./PoliticaPrivacidad.module.css";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.section}>
      <button
        className={styles.accordionHeader}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>

      {open && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

const PoliticaPrivacidad = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Política de Privacidad</h1>

      <p className={styles.updated}>
        <strong>Última actualización:</strong> 21 de enero de 2026
      </p>

      <p className={styles.text}>
        En VOYANT valoramos y respetamos la privacidad de nuestros usuarios y
        clientes. Esta Política de Privacidad describe cómo recopilamos,
        utilizamos, almacenamos y protegemos los datos personales conforme a la
        Ley N.º 29733 – Ley de Protección de Datos Personales y su Reglamento
        (Decreto Supremo N.º 003-2013-JUS).
      </p>

      <Section title="1. Responsable del tratamiento de datos">
        <p className={styles.text}>
          El responsable del tratamiento de los datos personales es VOYANT,
          empresa con domicilio en Lima, Perú. Para cualquier consulta relacionada
          con esta Política de Privacidad, puede contactarnos al correo:
          <a href="mailto:contacto@voyant.pe" className={styles.link}>
            {" "}
            contacto@voyant.pe
          </a>.
        </p>
      </Section>

      <Section title="2. Datos personales que recopilamos">
        <p className={styles.text}>
          Recopilamos los siguientes datos personales cuando usted utiliza
          nuestros servicios o se comunica con nosotros:
        </p>
        <ul className={styles.list}>
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información de la empresa (si aplica)</li>
          <li>Datos de navegación (cookies, dirección IP, tipo de dispositivo)</li>
        </ul>
      </Section>

      <Section title="3. Finalidad del tratamiento">
        <p className={styles.text}>
          Los datos personales recopilados son utilizados para las siguientes
          finalidades:
        </p>
        <ul className={styles.list}>
          <li>Brindar información sobre nuestros servicios</li>
          <li>Gestionar solicitudes y consultas</li>
          <li>Enviar comunicaciones comerciales (previo consentimiento)</li>
          <li>Mejorar la experiencia de usuario en nuestra web</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
      </Section>

      <Section title="4. Base legal para el tratamiento">
        <p className={styles.text}>
          El tratamiento de sus datos personales se realiza sobre la base de:
        </p>
        <ul className={styles.list}>
          <li>Su consentimiento expreso</li>
          <li>La ejecución de una relación contractual</li>
          <li>El cumplimiento de obligaciones legales</li>
        </ul>
      </Section>

      <Section title="5. Conservación de los datos">
        <p className={styles.text}>
          Los datos personales serán conservados únicamente durante el tiempo
          necesario para cumplir con las finalidades para las cuales fueron
          recopilados o mientras exista una obligación legal que lo requiera.
        </p>
      </Section>

      <Section title="6. Transferencia y seguridad de los datos">
        <p className={styles.text}>
          VOYANT no comparte datos personales con terceros, salvo obligación
          legal o cuando sea necesario para la prestación del servicio. Hemos
          implementado medidas técnicas y organizativas razonables para proteger
          sus datos personales contra pérdida, acceso no autorizado o uso
          indebido.
        </p>
      </Section>

      <Section title="7. Derechos del titular de los datos">
        <p className={styles.text}>
          Usted puede ejercer en cualquier momento sus derechos de:
        </p>
        <ul className={styles.list}>
          <li>Acceso</li>
          <li>Rectificación</li>
          <li>Cancelación</li>
          <li>Oposición (ARCO)</li>
        </ul>
        <p className={styles.text}>
          Para ejercer estos derechos, puede escribirnos al correo:
          <a href="mailto:contacto@voyant.pe" className={styles.link}>
            {" "}
            contacto@voyant.pe
          </a>.
        </p>
      </Section>

      <Section title="8. Uso de cookies">
        <p className={styles.text}>
          Nuestro sitio web utiliza cookies para mejorar la experiencia del
          usuario. Usted puede aceptar o rechazar el uso de cookies a través del
          banner de consentimiento mostrado al ingresar al sitio.
        </p>
      </Section>

      <Section title="9. Modificaciones a esta política">
        <p className={styles.text}>
          VOYANT se reserva el derecho de modificar esta Política de Privacidad
          en cualquier momento. Cualquier cambio será publicado en esta misma
          sección con la fecha de actualización correspondiente.
        </p>
      </Section>
    </div>
  );
};

export default PoliticaPrivacidad;
