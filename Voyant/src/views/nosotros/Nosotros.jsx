import { useEffect } from "react";
import Shape from "../../components/shape/Shape";
import styles from "./Nosotros.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent2 from "../../components/section-component2/SectionComponent2";

const Nosotros = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);

  }, []);
  return (
    <>
    <NavBar></NavBar>
      <SectionComponent
        title="Nosotros"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem"
              childComponent2={<Shape></Shape>}
      />
      <SectionComponent2 title="Misión" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem"
              childComponent2={<Shape></Shape>} />
      
    </>
  );
};

export default Nosotros;
