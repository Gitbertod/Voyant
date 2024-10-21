import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/datacenters.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
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
        text={
          <>
            <strong>
              En VOYANT, sabemos que la continuidad operativa y la eficiencia
              son esenciales para un datacenter.
            </strong>{" "}
            Nos especializamos en soluciones de infraestructura crítica que
            garantizan un funcionamiento seguro e ininterrumpido para los
            centros de datos, desde la distribución y el respaldo de energía
            hasta la climatización y los sistemas de seguridad de última
            generación.
            <br></br>
            <br></br>
            Nuestras soluciones están diseñadas para maximizar la eficiencia
            energética, optimizar la refrigeración y proteger todas las áreas
            del datacenter, mientras reducimos costos operativos y mejoramos la
            confiabilidad. Con tecnología inteligente, adaptable y resiliente,
            aseguramos que los datacenters mantengan un rendimiento óptimo,
            protegiendo sus activos más valiosos y asegurando la continuidad del
            negocio.
            <br></br>
            <br></br>
            En VOYANT, somos el socio estratégico ideal para implementar y
            mantener la infraestructura crítica de tu datacenter, apoyando cada
            paso de tu crecimiento. Desde pequeños datacenters de borde hasta
            grandes infraestructuras de hiperescala, estamos listos para
            acompañarte hacia un futuro sin límites.
          </>
        }
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
        backgroundMobile={"/dataCenters_bg.jpeg"}
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
