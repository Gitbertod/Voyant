import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/mineria_bg.mov";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";
const Mineria = () => {
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
        title="Minería"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. Aenean nisl enim, fermentum id sem ut, sodales luctus eros. Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        videoSrc={video_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
        
      />
      <SectionComponent
        title="Nuestras soluciones"
        buttonText="Contáctanos"
        text="Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades en el campo de la minería"
        imgSrc="mineria.png"
        childComponent={<CallToAction linkTo={"/contacto"} buttonText="Contáctanos"/>}
      />
    </>
  );
};

Mineria.propTypes = {
  tituloh1: PropTypes.string,
};

export default Mineria;
