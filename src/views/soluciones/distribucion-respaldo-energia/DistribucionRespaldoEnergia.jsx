import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/distribucion_bg.mov";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";

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
      />
      <SectionComponent
        title="Distribución y respaldo de energía"
        buttonText="Contáctanos"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi?"
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
