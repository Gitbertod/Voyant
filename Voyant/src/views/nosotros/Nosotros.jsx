import React from "react";
import Shape from "../../components/shape/Shape";
import styles from "./Nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <div className={styles.containerText} data-aos="fade-right">
            <h5>Nosotros</h5>
            <p className={styles.parrafo}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              sit enim officia harum asperiores, error, reiciendis
              exercitationem
            </p>
            <div className="flex justify-start my-11"></div>
          </div>

          <div
            className={styles.imgContainer}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Shape></Shape>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Nosotros;
