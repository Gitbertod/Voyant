import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import mineria_bg from "../../../assets/seguridad_bg.mp4";
import styles from "./Seguridad.module.css";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";

const Seguridad = ({ tituloh1 = "Seguridad" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CategoryWithBackgroundVideo
        title="Seguridad"
        text={
          <>
            <p>
              Diseñamos seguridad para entornos donde el control no puede
              perderse. Integramos tecnología, analítica y soporte experto para
              prevenir incidentes, asegurar trazabilidad y proteger la
              continuidad de operaciones críticas.
            </p>
          </>
        }
        videoSrc={mineria_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
      >
        <BoxDataPercentage>
          <MiniDataInfo
            title={"Trazabilidad y control"}
            text={
              <>
                Visibilidad continua de eventos <br></br>y accesos a las áreas
                protegidas
              </>
            }
            divider={true}
            icon={<FaCheckCircle className={styles.icon} />}
          />
          <MiniDataInfo
            icon={<FaCheckCircle className={styles.icon} />}
            title={"ALTA DISPONIBILIDAD"}
            text={
              <>
                Soluciones diseñadas para<br></br>
                asegurar la continuidad operativa
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle className={styles.icon} />}
            title={"SERVICIO"}
            text={
              <>
                Personal experto disponible 7x24 <br></br>
                para mantener funcionando <br></br>
                lo que no se puede detener
              </>
            }
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>

      <SectionComponent
        title="Seguridad diseñada para sostener la continuidad operativa "
        buttonText="Contáctanos"
        text={
          <>
            <p>
              En VOYANT entendemos la seguridad como una capa de control
              operacional: protege personas y activos, pero sobre todo evita que
              un incidente interrumpa procesos que no pueden detenerse. Por eso
              diseñamos e integramos soluciones que entregan{" "}
              <strong>visibilidad, trazabilidad y respuesta</strong>, con
              operación consistente 24/7 en entornos de alta exigencia.
            </p>
            <br></br>
            <p>
              Combinamos{" "}
              <strong>
                detección, control de accesos y gestión unificada de eventos
              </strong>{" "}
              para reducir puntos ciegos y acelerar la toma de decisiones.
              Integramos tecnologías líderes según el caso de uso:
            </p>
            <br></br>
            <ul>
              <li>
                <strong>• Video seguridad y analítica</strong> para detección
                temprana, verificación y trazabilidad (p.ej., analítica avanzada
                para intrusión, merodeo, objetos, zonas restringidas).
              </li>
              <li>
                <strong>• Control de acceso de alta seguridad</strong> para
                credenciales, puertas críticas y flujo de personas (incluyendo
                cerraduras electromecánicas robustas para entornos
                industriales).
              </li>
              <li>
                <strong>• Detección perimetral inteligente</strong> con
                tecnologías como radar para grandes extensiones, baja
                visibilidad y falsas alarmas reducidas, ideal para minería e
                infraestructura eléctrica.
              </li>
              <li>
                <strong>• Integración y supervisión</strong> en plataformas de gestión y
                automatización, habilitando correlación de eventos, operación
                estandarizada y respuesta más rápida.
              </li>
            </ul>
          </>
        }
        imgSrc="/seguridad.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

Seguridad.propTypes = {
  tituloh1: PropTypes.string,
};

export default Seguridad;
