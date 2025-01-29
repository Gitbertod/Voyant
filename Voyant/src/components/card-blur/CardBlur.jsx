import React from "react";
import styles from "./CardBlur.module.css";

const CardBlur = ({ bold, text, icon }) => {
  return (
    <div className={styles.card} data-aos="fade-up" data-aos-duration="2000">
     {icon} 
      <p className={styles.parrafo}>
        <span>{bold}</span>
        {text}
      </p>
    </div>
  );
};

export default CardBlur;
