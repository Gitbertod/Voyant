import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/telecomunicaciones.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";
import NavBar from "../../../components/navbar/NavBar";
const Telecomunicaciones = () => {
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
        title="Telecomunicaciones"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. Aenean nisl enim, fermentum id sem ut, sodales luctus eros. Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
        childComponent={<NavBar></NavBar>}
      />
      <SectionComponent
        title="Telecomunicaciones"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?"
        imgSrc="telecomunicaciones.png"
        childComponent={<CallToAction linkTo={"/contacto"} buttonText="Contáctanos"/>}
      />
    </>
  );
};

Telecomunicaciones.propTypes = {
  tituloh1: PropTypes.string,
};

export default Telecomunicaciones;
