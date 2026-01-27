import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/datacenters.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import styles from "../../../components/mini-datainfo/MiniDataInfo.module.css";
import { FaCheckCircle } from "react-icons/fa";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";

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
            <p>
              Nos especializamos en diseñar, implementar y mantener soluciones
              de infraestructura crítica que garantizan un funcionamiento seguro
              e ininterrumpido para los centros de datos, desde la{" "}
              <strong>distribución y el respaldo de energía</strong> hasta la
              climatización y los sistemas de seguridad
            </p>
            <br></br>
            <p>
              Nuestras soluciones están diseñadas para maximizar la eficiencia
              energética, optimizar la refrigeración y proteger todas las áreas
              del datacenter, mientras reducimos costos operativos y mejoramos
              la confiabilidad. Con tecnología inteligente, adaptable y
              resiliente, aseguramos que los datacenters mantengan un
              rendimiento óptimo, protegiendo sus activos más valiosos y
              asegurando la continuidad del negocio.
            </p>
            <br></br>
          </>
        }
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
        backgroundMobile={"/dataCenters_bg.jpeg"}
      >
        <BoxDataPercentage>
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"EFICIENCIA"}
            text={<>Soluciones que optimizan el uso de energía.</>}
            divider={true}
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"ALTA DISPONIBILIDAD"}
            text={
              <>Soluciones diseñadas para asegurar la continuidad operativa.</>
            }
          />
          <MiniDataInfo
            icon={<FaCheckCircle />}
            title={"SERVICIO"}
            text={
              <>
                Personal experto disponible 7x24 para mantener funcionando lo
                que no se puede detener
              </>
            }
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Nuestras soluciones para Datacenter"
        text={
          <>
            <p>
              En VOYANT, somos el socio estratégico ideal para implementar y
              mantener la infraestructura crítica de tu datacenter, apoyando
              cada paso de tu crecimiento. Desde pequeños datacenters de borde
              hasta grandes infraestructuras de hiperescala, estamos listos para
              acompañarte hacia un futuro sin límites. Nuestro equipo,
              respaldado por fabricantes de primer nivel, diseña e implementa
              soluciones que garantizan la operación confiable y eficiente de tu
              infraestructura en cada una de las áreas que intervenimos.
            </p>
            <br></br>
            <p>
              <strong>Sistemas de respaldo de energía (AC/DC)</strong>
            </p>
            <p>
              Diseñamos respaldo en <strong>AC y DC</strong> para asegurar
              continuidad en cargas críticas del datacenter, optimizando{" "}
              <strong>eficiencia y espacio.</strong> Implementamos
              <strong>redundancia</strong> para alta disponibilidad, integramos
              la solución al <strong>monitoreo del cliente</strong> y brindamos{" "}
              <strong>soporte 24/7 con personal certificado</strong>, cumpliendo
              estándares como IEEE y TIA-942 para datacenters{" "}
              <strong>Tier III/IV.</strong>
            </p>
            <br></br>
            <strong>Distribución de energía</strong>
            <p>
              Diseñamos e implementamos la distribución eléctrica{" "}
              <strong>
                desde las celdas de media tensión y los switchgear principales
                en BT, hasta las PDU en los racks
              </strong>{" "}
              de la sala blanca. Diseñamos con la mejor tecnología para asegurar
              protección y confiabilidad para las cargas, así como integración
              al <strong>BMS o DCIM</strong>, entregando visibilidad completa de
              la red eléctrica.
            </p>
          </>
        }
        imgSrc="DataCenter.jpg"
      />
      <SectionComponent
        text={
          <>
            <p>
              <strong>Sistemas de climatización</strong>
            </p>
            <p>
              Soluciones de climatización enfocadas en{" "}
              <strong>máxima eficiencia energética</strong>, con tecnologías
              como <strong>velocidad variable y free cooling</strong>, control
              inteligente y gestión térmica con{" "}
              <strong>confinamiento de pasillos fríos/calientes.</strong>{" "}
              Aseguramos <strong>alta disponibilidad con redundancia</strong>,
              soporte <strong>24/7</strong>, mantenimiento predictivo y
              cumplimiento de estándares como <strong>ASHRAE y TIA-942</strong>{" "}
              para <strong>Tier III/IV.</strong>
            </p>
            <br></br>

            <p>
              <strong>Seguridad y control de acceso:</strong>
            </p>
            <p>
              Integramos seguridad física con CCTV con analítica, radares
              perimetrales, control de acceso con biometría/reconocimiento
              facial, cerraduras de alta seguridad y{" "}
              <strong>gestión centralizada</strong> de accesos a áreas críticas.
              Incluimos <strong>autenticación multifactor</strong> , respaldo
              ante fallas, <strong>soporte 24/7 </strong>y mantenimiento
              predictivo, cumpliendo estándares como{" "}
              <strong>ISO 27001 y TIA-942</strong> para datacenters
              <strong>Tier III/IV.</strong>
            </p>
          </>
        }
        imgSrc="server2.jpeg"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText={"Contáctanos"} />
        }
      />
    </>
  );
};

DataCenters.propTypes = {
  tituloh1: PropTypes.string,
};

export default DataCenters;
