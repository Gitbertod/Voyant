import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import video_bg from "../../../assets/mineria.mp4";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import CallToAction from "../../../components/call-to-action/CallToAction";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";
import { BsFan } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { TbBatteryCharging2 } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import styles from "../../../components/mini-datainfo/MiniDataInfo.module.css";
import CardBlur from "../../../components/card-blur/CardBlur";
import Section3 from "../../../components/section3/Section3";

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
        text={
          <>
            <strong>
              En VOYANT, sabemos que la industria minera opera en algunos de los
              entornos más desafiantes del planeta.
            </strong>

            <p>
              Ya sea en altitudes elevadas o en condiciones de temperatura
              extremas, nuestras soluciones están diseñadas para operar con la
              máxima confiabilidad. Entendemos que en la industria minera, la
              continuidad operativa y la seguridad son aspectos críticos. Por
              eso, nos enfocamos en desarrollar soluciones que aseguran el
              funcionamiento ininterrumpido de tus operaciones, incluso en las
              condiciones más exigentes. Con tecnología avanzada y resiliente en
              energía, climatización y sistemas de seguridad, garantizamos la
              continuidad operativa de tus procesos y la seguridad de tus
              activos más valiosos.
            </p>
          </>
        }
        videoSrc={video_bg}
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
      >
        {
          <div className={styles.slidebottom}>
            <div className={styles.dataInfoContainer}>
              <MiniDataInfo
                title={"CONFIABILIDAD"}
                text={
                  <>
                    <p>Soluciones diseñadas para</p>
                    <p>garantizar la continuidad operativa.</p>
                  </>
                }
                whiteLine={<div className={styles.whiteLine}></div>}
                icon={<FaCheckCircle className={styles.icon} />}
              />
              <MiniDataInfo
                icon={<FaCheckCircle className={styles.icon} />}
                title={"OPTIMIZACION"}
                text={
                  <>
                    <p>Soluciones diseñadas para minimizar</p>
                    <p>los costos de operación y mantenimiento.</p>
                  </>
                }
                whiteLine={<div className={styles.whiteLine}></div>}
              />
              <MiniDataInfo
                icon={<FaCheckCircle className={styles.icon} />}
                title={"ADAPTABILIDAD"}
                text={
                  <>
                    <p>Soluciones diseñadas deacuerdo</p>
                    <p>a las condiciones específicas </p>
                    <p>del entorno minero</p>
                  </>
                }
              />
            </div>
          </div>
        }
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title="Nuestras soluciones"
        buttonText="Contáctanos"
        text="Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades en el campo de la minería"
        imgSrc="minaBlue.jpg"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />

      <Section3>
        {
          <div>
            <div className="pt-8 pl-8">
              <strong className="text-2xl mt-5 text-yellow-400" data-aos="fade-left">
                Somos tu aliado para resolver cualquier desafío de
                infraestructura, desde el diseño conceptual hasta la
                implementación y el mantenimiento de tus sistemas.
              </strong>{" "}
              <br></br>
              <p className="text-lg text-white m-7">
                Nuestro equipo, respaldado por fabricantes de primer nivel,
                diseña e implementa soluciones que garantizan la operación
                confiable y eficiente de la infraestructura en todas las áreas
                de la mina.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
              <CardBlur
                icon={<TbBatteryCharging2 className={styles.icon} style={{color: "white"}} />}
                bold={"Sistemas de respaldo de energía: "}
                text={
                  <>
                    Diseñamos soluciones en AC y DC para asegurar la continuidad
                    de la energía en las aplicaciones críticas de tu operación,
                    optimizando tanto la eficiencia energética como el uso del
                    espacio. Con configuraciones redundantes (N+1, N+2),
                    garantizamos alta disponibilidad, operación continua y
                    seguridad para el equipo y el personal. Nuestras soluciones
                    son compatibles con diversas plataformas de monitoreo,
                    facilitando su integración para un control en tiempo real.
                    Además, son modulares y escalables, adaptándose al
                    crecimiento de tus necesidades operativas. Todo esto,
                    respaldado por nuestro servicio con personal certificado
                    disponible 24/7.
                  </>
                }
              />
              <CardBlur
                icon={<SlEnergy className={styles.icon} style={{color: "white"}} />}
                bold={"Distribución de energía: "}
                text={
                  <>
                    Diseñamos e implementamos tableros con tecnología de
                    vanguardia que abarcan desde celdas de media tensión hasta
                    la distribución de energía en plantas o salas eléctricas,
                    incluyendo CCM. Nuestras soluciones no solo distribuyen la
                    energía, sino que también permiten monitorear en tiempo real
                    el consumo y el estado de las protecciones en todas las
                    áreas críticas. Esto te proporciona una visibilidad completa
                    del estado de tu red eléctrica y la capacidad de gestionar
                    la eficiencia energética de manera proactiva.
                  </>
                }
              />
              <CardBlur
                icon={<BsFan className={styles.icon} style={{color: "white"}} />}
                bold={"Sistemas de climatización: "}
                text={
                  <>
                    Nuestras soluciones de climatización están diseñadas para
                    maximizar la eficiencia energética en las salas eléctricas y
                    otros entornos críticos, empleando tecnologías avanzadas
                    como enfriadoras de velocidad variable y sistemas de free
                    cooling. Estos sistemas están integrados con controles
                    inteligentes que optimizan el flujo de aire y mantienen
                    temperaturas estables, incluso en condiciones de alta
                    demanda. Ofrecemos soporte técnico especializado 24/7 y un
                    programa de mantenimiento predictivo que asegura un
                    funcionamiento continuo y sin interrupciones. Todas nuestras
                    soluciones cumplen con los estándares internacionales más
                    exigentes, como ASHRAE y NFPA, para garantizar la seguridad
                    y la confiabilidad de tus instalaciones.
                  </>
                }
              />
              <CardBlur
                icon={<GrShieldSecurity className={styles.icon} style={{color: "white"}}/>}
                bold={"Soluciones de Seguridad y Control de Acceso: "}
                text={
                  <>
                    Nuestras soluciones integradas de seguridad y control de
                    acceso están diseñadas para proteger cada aspecto de tu
                    operación minera. Implementamos sistemas avanzados de
                    control de acceso y cerramientos de alta seguridad,
                    asegurando un ingreso restringido y monitoreado a áreas
                    críticas, con gestión de permisos en tiempo real que
                    optimiza la seguridad de tu equipo e instalaciones. Nuestros
                    sistemas de videovigilancia de alta resolución, combinados
                    con análisis inteligente, permiten un monitoreo constante y
                    preciso, ofreciendo una visión detallada de cada zona.
                    Además, los sistemas de detección perimetral y radares
                    proporcionan alertas tempranas ante cualquier actividad
                    inusual en el perímetro, reforzando la seguridad en las
                    áreas sensibles. Contamos con un equipo técnico
                    especializado y soporte 24/7, respaldado por fabricantes
                    líderes, para garantizar una protección completa y continua,
                    adaptada a los desafíos únicos de la industria minera y
                    diseñada para maximizar la confiabilidad operativa.
                  </>
                }
              />
            </div>
          </div>
        }
      </Section3>
    </>
  );
};

Mineria.propTypes = {
  tituloh1: PropTypes.string,
};

export default Mineria;
