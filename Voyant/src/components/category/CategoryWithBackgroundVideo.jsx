import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BoxDataPercentage from "../iconsdata/BoxDataPercentage";
import styles from "./CategoryWithBackgroundVideo.module.css";

const CategoryWithBackgroundVideo = ({
  title,
  text,
  videoSrc,
  logoSrc,
  logosBgSrc,
  childComponent,
  backgroundMobile // Cambiamos el nombre de la prop para mayor claridad
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.scrollTo(0, 0);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className={styles.overlay}></div>
        {/* Aplicamos la imagen de fondo móvil directamente al estilo en línea */}
        <div
          className={styles.imageBg}
          style={{
            backgroundImage: isMobile ? `url(${backgroundMobile})` : "",
          }}
        ></div>
        {!isMobile && (
          <video
            src={videoSrc}
            preload="auto"
            autoPlay
            loop
            muted
            className={styles.videoBg}
          ></video>
        )}
      </div>
      {childComponent}
      <div className={styles.mainContainer}>
        <img
          src={logosBgSrc}
          className={styles.logosVoyant}
          alt="Logos Background"
        />
        <div className={styles.container}>
          <h1>{title}</h1>
          <div className={styles.yellowLine}></div>
          <p className={styles.textInfo}>{text}</p>
          <BoxDataPercentage></BoxDataPercentage>
        </div>
      </div>
    </>
  );
};

CategoryWithBackgroundVideo.propTypes = {
title: PropTypes.string,
text: PropTypes.string.isRequired,
videoSrc: PropTypes.string.isRequired,
logoSrc: PropTypes.string.isRequired,
logosBgSrc: PropTypes.string.isRequired,
sectionTitle: PropTypes.string.isRequired,
sectionText: PropTypes.string.isRequired,
sectionButtonText: PropTypes.string.isRequired,
sectionImgSrc: PropTypes.string.isRequired,
childComponent:PropTypes.node,
backgroundMobile: PropTypes.string, 
};

export default CategoryWithBackgroundVideo;