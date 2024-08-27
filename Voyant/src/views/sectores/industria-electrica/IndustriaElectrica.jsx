import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/industriaElectrica_bg.mov";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import SectionComponent from "../../../components/section-component/SectionComponent";

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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. Aenean nisl enim, fermentum id sem ut, sodales luctus eros. Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
      />
      <SectionComponent
        title="Industria eléctrica"
        buttonText="Contáctanos"
        text="Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades tecnológicas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum?"
        imgSrc="./industriaElectrica.png"
        linkTo="/contacto"
      />
    </>
  );
};

IndustriaElectrica.propTypes = {
  tituloh1: PropTypes.string,
};

export default IndustriaElectrica;
