import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import video_bg from "../../../assets/climatizacion_bg.mp4";
import CallToAction from "../../../components/call-to-action/CallToAction";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";

const Climatizacion = () => {
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
        title="Climatización"
        text="Controlamos las condiciones de operación en las salas críticas donde la continuidad de operación es indispensable, con soluciones de climatización eficientes y confiables, adaptadas a tu necesidad."
        videoSrc={video_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
      >
        <BoxDataPercentage>
          <MiniDataInfo
            title={"Diseño"}
            text={
              <>
                Ingeniería térmica adaptada a la aplicación y a las condiciones
                reales de operación, priorizando{" "}
                <strong>estabilidad, seguridad y eficiencia</strong> en entornos
                críticos.
              </>
            }
            divider={true}
            icon={<FaCheckCircle />}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Tecnología"}
            text={
              <>
                Arquitectura preparada para operar con precisión y resiliencia,
                incorporando control, sensores y gestión inteligente del
                ambiente (temperatura, humedad, flujo de aire y calidad).
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Confiabilidad Disponibilidad como resultado:"}
            text={
              <>
                Condiciones térmicas estables y verificables, con monitoreo y
                soporte experto para anticipar fallas y evitar desviaciones que
                comprometan la operación.
              </>
            }
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Control térmico para operaciones que no pueden detenerse."
        buttonText="Contáctanos"
        text={
          <>
            <p>
              Diseñamos y dimensionamos soluciones de climatización para salas y
              procesos críticos donde la estabilidad ambiental impacta
              directamente la continuidad operativa. Partimos del diagnóstico
              térmico y el diseño según criticidad (N, N+1 o 2N) hasta la
              implementación, puesta en marcha y comisionamiento. Construimos
              arquitecturas que sostienen{" "}
              <strong>temperatura, humedad y calidad de aire</strong>
              dentro de rangos operativos exigentes.
            </p>
            <br></br>
            <p>
              Integramos tecnologías según la aplicación, criticidad y
              condiciones de operación: enfriamiento de precisión (CRAC/CRAH),
              chillers y manejadoras, VRF/expansión directa, free cooling,
              control de humedad, filtración, y gestión de flujo de aire
              (contención, balanceo, presurización). Todo con foco en{" "}
              <strong>eficiencia energética y desempeño verificable.</strong>
            </p>
            <br />
            <p>
              Nuestras soluciones incorporan <strong>sensores y control</strong>{" "}
              para monitorear variables clave, validar rendimiento y detectar
              desviaciones a tiempo. Esto habilita una operación más proactiva y
              una mantención basada en condición: menos incertidumbre, menos
              riesgo y más disponibilidad.
            </p>
          </>
        }
        imgSrc="/climatizacion.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

Climatizacion.propTypes = {
  tituloh1: PropTypes.string,
};

export default Climatizacion;
