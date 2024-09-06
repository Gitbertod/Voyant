import React from "react";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/gestionEnergia_bg.mov";
import { Link } from "react-router-dom";
import { DrawerComponent } from "../../../components/drawer/DrawerComponent";
const GestionDeLaEnergia = () => {
  return (
    <>
      <div className="flex h-16 justify-evenly items-center   ">
        <Link to="/">
          <img src="/logoVoyantColor.svg" className="h-11 align-middle " alt="Voyant Logo" />
        </Link>
        <div className="w-56"></div>
        <DrawerComponent></DrawerComponent>
      </div>
      <CategoryWithBackgroundVideo
        title="Gestión de la energía"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. 
        Aenean nisl enim, fermentum id sem ut, sodales luctus eros. 
        Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. 
        Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. 
        Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
        videoSrc={video_bg}
      />
    </>
  );
};

export default GestionDeLaEnergia;
