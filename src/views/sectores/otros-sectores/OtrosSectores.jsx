import CategoryWithBackgroundVideo from "../../../components/category/CategoryWithBackgroundVideo";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";
import video_bg from "../../../assets/otrosSectores.mp4";
const OtrosSectores = () => {
  return (
    <>
      <CategoryWithBackgroundVideo
        title="Otros sectores"
        text={
          <>
            <p>
              Aplicamos nuestra experiencia en infraestructura crítica en
              cualquier industria donde la continuidad, la seguridad y la
              eficiencia sean indispensables.
            </p>
          </>
        }
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
      />
      <SectionComponent
        title="Otros sectores"
        text={
          <>
            <p>
              Analizamos la operación, identificamos los puntos de mayor
              criticidad y diseñamos soluciones a medida que integran
              distribución y respaldo de energía, climatización para espacios
              sensibles, seguridad física y monitoreo/analítica para tener
              control en tiempo real. Nuestro enfoque busca reducir paradas no
              planificadas, proteger activos y optimizar costos operativos, con
              acompañamiento técnico para implementar, mantener y escalar la
              infraestructura conforme crece la necesidad del negocio.
            </p>
          </>
        }
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

export default OtrosSectores;
