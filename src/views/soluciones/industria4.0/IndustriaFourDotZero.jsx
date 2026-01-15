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
                <p>Dispositivos IoT para recolectar</p> los parámetros clave para <p>la
                  continuidad operativa.</p>
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Decisiones"}
            text={
              <>
                <p>Analizamos en tiempo real <p>para identificar riesgos, tendencias</p> </p>  y
                desviaciones antes de que  <p>impacten la continuidad operativa.</p> 
              </>
            }
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"Acción"}
            text={
              <>
                <p>Recomendaciones que permitan actuar</p> a tiempo para asegurar la
                continuidad operativa.
              </>
            }

          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Industria 4.0"
        buttonText="Contáctanos"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi?"
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
