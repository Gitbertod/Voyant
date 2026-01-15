import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../../assets/gestionEnergia_bg.mov";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import MiniDataInfo from "../../../components/mini-datainfo/MiniDataInfo";
import { FaCheckCircle } from "react-icons/fa";

const GestionDeLaEnergia = () => {
  return (
    <>
      <CategoryWithBackgroundVideo
        title="Gestión de la energía"
        text={
          <>
            <strong>Gestión de la energía como un activo estratégico</strong>,
            con medición y análisis continuo que permiten optimizar consumos,
            mejorar la eficiencia y avanzar en sostenibilidad, sin comprometer
            la confiabilidad de la operación.
          </>
        }
        logoSrc="/logoVoyantColor.svg"
        logosBgSrc="/logosVoyant_bg.svg"
        videoSrc={video_bg}
      >
        <BoxDataPercentage>
          <MiniDataInfo
            title={"Medición"}
            text={<>Captura continua y confiable <p>de datos energéticos para comprender </p>consumos,  comportamientos y <p>puntos críticos de la operación.</p> </>
            }
          divider={true}
          icon={<FaCheckCircle></FaCheckCircle>}
          />
          <MiniDataInfo
            title={"Análisis"}
            text={<>
              <p>Analizamos en tiempo real</p>
              para identificar oportunidades de ahorro, <p>mejorar la eficiencia energética </p> y avanzar en objetivos de <p>sostenibilidad de forma medible</p>.
            </>}


            divider={true}
            icon={<FaCheckCircle></FaCheckCircle>}
          />
          <MiniDataInfo
            title={"Gestión"}
            text={<>
              Decisiones y acciones basadas en datos <p>que optimizan el uso de la energía</p>  <p>sin comprometer la estabilidad,</p> disponibilidad y continuidad de la operación.
            </>}

            icon={<FaCheckCircle></FaCheckCircle>}
          />
        </BoxDataPercentage>
      </CategoryWithBackgroundVideo>
    </>
  );
};

export default GestionDeLaEnergia;
