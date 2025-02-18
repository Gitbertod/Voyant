import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import mineria_bg from "../../../assets/seguridad_bg.mp4";
import styles from "./Seguridad.module.css";
import SectionComponent from "../../../components/section-component/SectionComponent";
import CallToAction from "../../../components/call-to-action/CallToAction";
import { DrawerComponent } from "../../../components/drawer/DrawerComponent";
import BurguerMenu from "../../../components/burguer-menu/BurguerMenu";


const Seguridad = ({ tituloh1 = "Seguridad" }) => {
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
      <div className="main">
        <div className={styles.overlay}></div>
        <div className={styles.imageBg}></div>
        {!isMobile && (
          <video
            src={mineria_bg}
            autoPlay
            loop
            muted
            className={styles.videoBg}
          ></video>
        )}
      </div>
      <div className={styles.mainContainer}>
        <img src="/logosVoyant_bg.svg" className={styles.logosVoyant} />
        <div className={styles.container}>
          <h1>{tituloh1}</h1>
          <div className={styles.yellowLine}></div>
          <p className={styles.textInfo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi?
          </p>
          <BoxDataPercentage />
        </div>
      </div>
      <SectionComponent
        title="Seguridad"
        buttonText="Contáctanos"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi?"
        imgSrc="/seguridad.png"
        childComponent={<CallToAction linkTo={"/contacto"} buttonText="Contáctanos"/>}
      />
    </>
  );
};

Seguridad.propTypes = {
  tituloh1: PropTypes.string,
};

export default Seguridad;
