import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/industriaElectrica_bg.mov";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import styles from "../../../components/mini-datainfo/MiniDataInfo.module.css";
import { FaCheckCircle } from "react-icons/fa";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";

const IndustriaElectrica = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Mueve la vista al tope de la página cuando el componente se monta
    window.scrollTo(0, 0);

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
        title="Industria eléctrica"
        text={
          <>
            <strong>
              En VOYANT, comprendemos los desafíos únicos de la industria
              eléctrica en todas sus fases: generación, transmisión y
              distribución.{" "}
            </strong>
            Sabemos que la estabilidad de la red y la continuidad del servicio
            son pilares indispensables para el éxito del negocio. Por ello,
            diseñamos soluciones que operan con el más alto nivel de
            confiabilidad, incluso en los entornos más demandantes, asegurando
            que cada componente crítico funcione de manera óptima en todo
            momento.,
            <br />
            <br />
            <p>
              Entendemos que, en la industria eléctrica, la continuidad
              operativa y la seguridad de los activos son esenciales para una
              red eficiente, fiable y controlable. Nuestras soluciones están
              respaldadas por tecnología avanzada y resiliente en sistemas de
              distribución y respaldo de energía, climatización y seguridad.
              Esto garantiza que tus procesos críticos sigan operando sin
              interrupciones, maximizando la confiabilidad de la infraestructura
              y protegiendo tus activos en cada punto de la operación.
            </p>
          </>
        }
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
      >
        {
          <BoxDataPercentage>
            <MiniDataInfo
              icon={<FaCheckCircle />}
              title={"CONFIABILIDAD"}
              text={
                <>
                  Soluciones diseñadas para garantizar la continuidad operativa.
                </>
              }
              
            />
            <MiniDataInfo
              icon={<FaCheckCircle />}
              title={"SEGURIDAD"}
              text={
                <>
                  Soluciones diseñadas para garantizar la seguridad del personal
                  y los activos.
                </>
              }
            />
            <MiniDataInfo
              icon={<FaCheckCircle />}
              title={"ADAPTABILIDAD"}
              text={
                <>
                  Soluciones diseñadas específicamente para cada fase de la
                  industria eléctrica
                </>
              }
            />
          </BoxDataPercentage>
        }
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Industria eléctrica"
        buttonText="Contáctanos"
        text={
          <>
            Te acompañamos en todo el proceso, desde el diseño conceptual hasta
            la implementación y el mantenimiento de tus sistemas. Nuestro
            equipo, respaldado por fabricantes de primer nivel, diseña,
            implementa y mantiene soluciones que garantizan la operación
            confiable y eficiente de la infraestructura en todas las fases:
            generación, transmisión y distribución de energía eléctrica.
          </>
        }
        imgSrc="./industriaElectrica.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

IndustriaElectrica.propTypes = {
  tituloh1: PropTypes.string,
};

export default IndustriaElectrica;
