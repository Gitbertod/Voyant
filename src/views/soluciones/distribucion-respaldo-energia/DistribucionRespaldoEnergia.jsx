import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/distribucion_bg.mov";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";
import { Link } from "react-router-dom";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import { FaCheckCircle } from "react-icons/fa";

const DistribucionRespaldoEnergia = () => {
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
        title="Distribución y respaldo de energía"
        text="Aseguramos la continuidad y estabilidad de tu energía, integrando distribución eléctrica y respaldo confiable para que tu operación no se detenga ante cortes, variaciones o contingencias."
        videoSrc={video_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
      >
        <BoxDataPercentage>
          <MiniDataInfo
            title={"Diseño"}
            text={
              <>
                Ingeniería adaptada a la aplicación y a las condiciones reales
                de operación, priorizando seguridad, cumplimiento y
                sostenibilidad.
              </>
            }
           
            icon={<FaCheckCircle />}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Tecnología"}
            text={
              <>
                Arquitectura preparada para operar con eficiencia y resiliencia,
                con monitoreo y gestión inteligente de la energía y los activos.
              </>
            }
            
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Confiabilidad Disponibilidad como resultado"}
            text={
              <>
                Energía estable y protegida, con monitoreo y <br></br>soporte experto
                para evitar paradas no planificadas.
              </>
            }
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Diseñamos arquitecturas de energía confiables para continuidad operativa en entornos críticos."
        buttonText="Contáctanos"
        text={
          <>
            <p>
              Desde la celda de media tensión hasta los PDU, diseñamos y
              dimensionamos sistemas de distribución y respaldo de energía
              alineados a la criticidad real de tus cargas. Integramos equipos
              de protección, transferencias automáticas, centros de control de
              motores, tableros y sistemas de respaldo en AC o DC para asegurar
              un flujo de energía estable y dentro de los parámetros requeridos.
            </p>
            <br></br>
            <p>
              Nuestras soluciones incorporan monitoreo, lo que nos permite
              validar su desempeño, anticiparnos a fallas y reducir riesgos
              operativos. Acompañamos cada instalación con mantenimiento y
              soporte especializado para sostener la disponibilidad y evitar
              paradas no planificadas.
            </p>
            <br></br>
            <p>
              <strong>
                Porque cuando la energía falla, tu operación se detiene, y eso
                no es una opción.
              </strong>
            </p>
          </>
        }
        imgSrc="/distribucion.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

DistribucionRespaldoEnergia.propTypes = {
  tituloh1: PropTypes.string,
};

export default DistribucionRespaldoEnergia;
