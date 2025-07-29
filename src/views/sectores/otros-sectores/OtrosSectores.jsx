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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis quis quam cursus tincidunt nec sed lectus. Pellentesque eu blandit erat. Aenean nisl enim, fermentum id sem ut, sodales luctus eros. Maecenas sed erat ex. Vestibulum facilisis hendrerit arcu, nec varius nunc elementum vitae. Phasellus sollicitudin magna a odio mattis, in facilisis massa vestibulum. Nulla nec justo elementum ipsum porttitor aliquet. In hac habitasse platea dictumst."
        videoSrc={video_bg}
        logoSrc="logoVoyantColor.svg"
        logosBgSrc="logosVoyant_bg.svg"
      />
      <SectionComponent
        title="Otros sectores"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?"
        imgSrc="telecomunicaciones.png"
        childComponent={
          <CallToAction linkTo={"/contacto"} buttonText="Contáctanos" />
        }
      />
    </>
  );
};

export default OtrosSectores;
