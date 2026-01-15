import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import mineria_bg from "../../../assets/seguridad_bg.mp4";
import styles from "./Seguridad.module.css";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import { DrawerComponent } from "../../../components/drawer/DrawerComponent";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";
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
        text="Diseñamos seguridad para entornos donde el control no puede perderse. Integramos tecnología, analítica y soporte experto para prevenir incidentes, asegurar trazabilidad y proteger la continuidad de operaciones críticas."
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
        title="Seguridad"
        buttonText="Contáctanos"
        text="En Voyant aseguramos la continuidad de tu operación con soluciones de seguridad integradas que protegen personas, activos y accesos, con monitoreo y soporte experto cuando más lo necesitas."
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
