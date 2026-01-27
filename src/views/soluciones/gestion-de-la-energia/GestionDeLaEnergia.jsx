import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/gestionEnergia_bg.mov";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";
import CallToAction from "../../../components/call-to-action/CallToAction";
import SectionComponent from "../../../components/section-component/SectionComponent";

const GestionDeLaEnergia = () => {
  return (
    <>
      <CategoryWithBackgroundVideo
        title="Gestión de la energía"
        text={
          <>
            En VOYANT abordamos la energía como un activo estratégico porque
            impacta directamente en costo, continuidad y sostenibilidad. Por eso
            diseñamos e implementamos soluciones de medición, análisis y gestión
            energética que entregan visibilidad real del consumo, permiten
            identificar oportunidades de ahorro y sostienen decisiones
            operativas sin comprometer la confiabilidad de la infraestructura.
          </>
        }
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
        videoSrc={video_bg}
      >
        <BoxDataPercentage>
          <MiniDataInfo
            title={"Medición"}
            text={
              <>
                Captura continua y confiable de datos energéticos para
                comprender consumos, comportamientos y puntos críticos de la
                operación.
              </>
            }
            divider={true}
            icon={<FaCheckCircle></FaCheckCircle>}
          />
          <MiniDataInfo
            title={"Análisis"}
            text={
              <>
                Analizamos en tiempo real para identificar oportunidades de
                ahorro, mejorar la eficiencia energética y avanzar en objetivos
                de sostenibilidad de forma medible.
              </>
            }
            icon={<FaCheckCircle></FaCheckCircle>}
          />
          <MiniDataInfo
            title={"Gestión"}
            text={
              <>
                Decisiones y acciones basadas en datos que optimizan el uso de
                la energía sin comprometer la estabilidad, disponibilidad y
                continuidad de la operación.
              </>
            }
            icon={<FaCheckCircle></FaCheckCircle>}
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
      <SectionComponent
        title={
          <>
            <p>Gestionar la energía es gestionar la operación.</p>
          </>
        }
        text={
          <>
            <p>
              En VOYANT abordamos la energía como un activo estratégico porque
              impacta directamente en costo, continuidad y sostenibilidad. Por
              eso diseñamos e implementamos soluciones de{" "}
              <strong>medición, análisis y gestión energética</strong> que
              entregan visibilidad real del consumo, permiten identificar
              oportunidades de ahorro y sostienen decisiones operativas sin
              comprometer la confiabilidad de la infraestructura.
            </p>
            <br></br>
            <p>
              Analizamos la aplicación y el diseño eléctrico existente para así
              definir la arquitectura de instrumentación y comunicaciones.
              Integramos <strong>medición eléctrica (submetering)</strong>,
              analizadores de redes, medidores multifunción, sensores asociados
              y gateways para capturar datos confiables y comparables en el
              tiempo.
            </p>
            <br></br>
            <p>
              Sobre esa base habilitamos{" "}
              <strong>analítica en tiempo real</strong> y reportes para detectar
              desviaciones, consumos anómalos, demandas máximas, pérdidas y
              patrones de uso. Esto permite pasar de “ver kWh” a entender{" "}
              <strong>qué está impulsando el consumo,</strong> dónde están los
              principales focos de mejora y qué acciones tienen mayor impacto:
              optimización de operación, ajustes de control, balanceo de cargas,
              gestión de demanda, eficiencia por proceso y verificación de
              resultados.
            </p>
            <br></br>
            <p>
              Finalmente, convertimos el análisis en <strong>gestión:</strong>{" "}
              acciones y recomendaciones operativas, mantenimiento basado en
              condición donde aplica, y un ciclo de mejora continua que sostiene
              el ahorro en el tiempo. El resultado es una operación más
              eficiente y sustentable, con métricas claras y una energía
              gestionada con disciplina:
              <strong>
                mejor desempeño energético sin sacrificar estabilidad,
                disponibilidad ni continuidad.
              </strong>
            </p>
          </>
        }
        imgSrc="/iot.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

export default GestionDeLaEnergia;
