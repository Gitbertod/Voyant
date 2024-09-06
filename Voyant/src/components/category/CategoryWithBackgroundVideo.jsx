import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BoxDataPercentage from "../iconsdata/BoxDataPercentage";
import styles from "./CategoryWithBackgroundVideo.module.css";
import LogoBackButton from "../logo-back-button/LogoBackButton";
import { DrawerComponent } from "../drawer/DrawerComponent";
import NavBar from "../navbar/NavBar";

const CategoryWithBackgroundVideo = ({
  title,
  text,
  videoSrc,
  logoSrc,
  logosBgSrc,
  childComponent
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Mueve la vista al tope de la página cuando el componente se monta
    window.scrollTo(0, 0);

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
            src={videoSrc}
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
  childComponent:PropTypes.node
};
export default CategoryWithBackgroundVideo;
