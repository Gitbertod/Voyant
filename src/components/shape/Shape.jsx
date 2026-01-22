import React from "react";
import styles from "./Shape.module.css";

const Shape = ({image}) => {
  return (
    <>
        <img src={image} className={styles.shape}></img>
    </>
  );
};

export default Shape;
