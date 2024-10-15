import React from "react";
import styles from "./SectoresSoluciones.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoryBox from "../category-box/CategoryBox";
import { TbBatteryCharging2 } from "react-icons/tb";

const SectoresSoluciones = ({ title, text, child1}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-aos="fade-right">
        <h2>{title}</h2>
        <div className={styles.yellowLine}></div>
        <p className={styles.textInfo}>{text}</p>
        <div className={styles.categoryContainer}>
          {child1}
        </div>
      </div>
    </div>
  );
};

export default SectoresSoluciones;
