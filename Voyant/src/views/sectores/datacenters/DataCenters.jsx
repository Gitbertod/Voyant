import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/datacenters.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import SectionComponent2 from "../../../components/section-component2/SectionComponent2";
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
            <strong>Distribución de energía:</strong> Desde la celda de media
            tensión y el switchgear hasta el último punto eléctrico del
            datacenter, diseñamos e implementamos tableros con tecnología de
            vanguardia. Más allá de distribuir energía, nuestras soluciones
            permiten monitorear el consumo y el estado de las protecciones en
            todas las áreas del datacenter, integrándose de manera flexible con
            cualquier BMS o DCIM que utilices. Esto te brinda una visibilidad
            completa sobre el estado de tu red eléctrica. <br></br>
            <br></br>
          </>
        }
        imgSrc="DataCenter.jpg"
      />
      <SectionComponent2
        text={
          <>
            <strong>Sistemas de climatización:</strong> Nuestras soluciones de
            climatización están diseñadas para maximizar la eficiencia
            energética de tu datacenter, empleando tecnologías avanzadas como
            enfriadoras de velocidad variable y sistemas de free cooling,
            integrados con control inteligente para optimizar el flujo de aire.
            Nos adaptamos a entornos con confinamiento de pasillos calientes y
            fríos, y garantizamos alta disponibilidad con configuraciones
            redundantes.<br></br> Entendemos que el enfriamiento es un reto
            clave en la evolución de los datacenters de hiperescala, por eso
            trabajamos de la mano con fabricantes líderes para mantenernos a la
            vanguardia tecnológica. Contamos con soporte técnico 24/7 y
            ofrecemos mantenimiento predictivo para asegurar un funcionamiento
            sin interrupciones. Nuestras soluciones cumplen con los estándares
            internacionales más exigentes, como ASHRAE y TIA-942, garantizando
            la confiabilidad y certificación para datacenters Tier III y IV.
            <br></br>
            <br></br>
            <strong>Seguridad y control de acceso:</strong> Diseñamos soluciones
            para garantizar un entorno seguro en tu datacenter, utilizando
            tecnologías avanzadas como cámaras de alta resolución,
            reconocimiento facial y sistemas biométricos de acceso, además de
            cerraduras de alta seguridad mecánicas y electromecánicas. Nuestros
            sistemas, integrados con control inteligente, permiten monitorear y
            gestionar el acceso a todas las áreas críticas de forma
            centralizada, adaptándose a las necesidades específicas de cada
            instalación. Ofrecemos configuraciones de autenticación multifactor
            y respaldo en caso de fallas, asegurando la continuidad operativa.
            Con soporte técnico 24/7 y mantenimiento predictivo, garantizamos
            que los sistemas de seguridad funcionen sin interrupciones. Nuestras
            soluciones cumplen con los más altos estándares internacionales de
            seguridad, como ISO 27001 y TIA-942, asegurando la protección y el
            cumplimiento para datacenters Tier III y IV.
          </>
        }
        imgSrc="server2.jpeg"
        childComponent={<CallToAction linkTo={"/contacto"} buttonText={"Contáctanos"}/>}
      />
    </>
  );
};

DataCenters.propTypes = {
  tituloh1: PropTypes.string,
};

export default DataCenters;
