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
        title="Nuestras soluciones para Datacenter"
        buttonText="Contáctanos"
        text={
          <>
            Te acompañamos desde el diseño conceptual hasta la implementación y
            el mantenimiento de la infraestructura de tu datacenter. Nuestro
            equipo, respaldado por fabricantes de primer nivel, diseña e
            implementa soluciones que garantizan la operación confiable y
            eficiente de tu infraestructura en cada una de las áreas clave en
            las que intervenimos.<br></br>
            <br></br>
            <strong>Sistemas de respaldo de energía:</strong> Diseñamos
            soluciones en AC y DC para asegurar la continuidad de la energía en
            las aplicaciones críticas de tu datacenter, optimizando tanto la
            eficiencia como el uso del espacio. Con configuraciones redundantes,
            garantizamos alta disponibilidad y una operación continua. Nuestras
            soluciones se integran a la plataforma de monitoreo del cliente y
            están respaldadas por nuestro servicio con personal certificado
            disponible 24/7. Nuestras soluciones cumplen con los más altos
            estándares internacionales, como IEEE y TIA-942, asegurando la
            fiabilidad y certificación para datacenters Tier III o IV.<br></br>
            <br></br>
            <strong>Distribución de energía:</strong> Desde la celda de media tensión y el
            switchgear hasta el último punto eléctrico del datacenter, diseñamos
            e implementamos tableros con tecnología de vanguardia. Más allá de
            distribuir energía, nuestras soluciones permiten monitorear el
            consumo y el estado de las protecciones en todas las áreas del
            datacenter, integrándose de manera flexible con cualquier BMS o DCIM
            que utilices. Esto te brinda una visibilidad completa sobre el
            estado de tu red eléctrica.
          </>
        }
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
