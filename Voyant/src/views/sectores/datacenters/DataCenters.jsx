import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/datacenters.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import NavBar from "../../../components/navbar/NavBar";
import { DrawerComponent } from "../../../components/drawer/DrawerComponent";
import { Link } from "react-router-dom";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";
import dataCenterBg from "../../../../public/dataCenters_bg.jpeg"
const DataCenters = () => {
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
        title="Datacenters"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. Aenean nisl enim, fermentum id sem ut, sodales luctus eros. Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
        backgroundMobile={'/dataCenters_bg.jpeg'}
      />
      <SectionComponent
        title="Nuestros Datacenters"
        buttonText="Contáctanos"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sit enim officia harum asperiores, error, reiciendis exercitationem."
        imgSrc="server.jpeg"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

DataCenters.propTypes = {
  tituloh1: PropTypes.string,
};

export default DataCenters;
