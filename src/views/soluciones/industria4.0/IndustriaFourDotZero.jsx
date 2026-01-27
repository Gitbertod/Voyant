import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/industria4.0_bg.mov";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";

const IndustriaFourDotZero = () => {
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
        title="Industria 4.0"
        text={
          <>
            <strong>Datos que se transforman en decisiones.</strong> Elevamos tu
            infraestructura a un nivel inteligente y predictivo, integrando
            sensores, plataformas y analítica para lograr mayor disponibilidad,
            control y continuidad operativa.
          </>
        }
        videoSrc={video_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
      >
        <BoxDataPercentage>
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Datos"}
            text={
              <>
                <p>
                  Dispositivos IoT para recolectar los parámetros clave para la
                  continuidad operativa.
                </p>
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Decisiones"}
            text={
              <>
                <p>
                  Analizamos en tiempo real para identificar riesgos, tendencias
                </p>{" "}
                y desviaciones antes de que{" "}
                <p>impacten la continuidad operativa.</p>
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Acción"}
            text={
              <>
                <p>Recomendaciones que permitan actuar</p> a tiempo para
                asegurar la continuidad operativa.
              </>
            }
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title={
          <>
            <p>Del monitoreo a la decisión operativa.</p>
          </>
        }
        text={
          <>
            <p>
              En VOYANT, Industria 4.0 es una capa de operación y mantenimiento
              inteligente que transforma datos de la infraestructura en
              decisiones oportunas para asegurar disponibilidad, control y
              continuidad operativa.
            </p>
            <br></br>
            <p>
              Identificar las variables que realmente impactan la operación y
              diseñamos una estrategia de sensores e integración que entregue
              información confiable, trazable y útil. Conectamos equipos y
              sistemas existentes, incorporamos dispositivos IoT cuando aplica y
              consolidamos señales desde plataformas OT/IT para construir una
              visión unificada.
            </p>
            <br></br>
            <p>
              Sobre esa base, habilitamos analítica en tiempo real para detectar
              desviaciones, tendencias y riesgos antes de que se conviertan en
              incidentes. Pasamos de “ver datos” a entender qué está cambiando,
              por qué importa y cuál es el impacto sobre la continuidad. Esto
              permite priorizar, planificar y decidir con criterio: menos
              reacción, más anticipación. Todo con acompañamiento experto para
              asegurar una implementación ordenada, escalable y alineada a la
              criticidad de tu infraestructura.
            </p>
            <br></br>
            <p>
              El resultado es una operación más predecible, con menos
              incertidumbre y mejores decisiones, sostenida en el tiempo.
            </p>
          </>
        }
        imgSrc="/iot.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

IndustriaFourDotZero.propTypes = {
  tituloh1: PropTypes.string,
};

export default IndustriaFourDotZero;
