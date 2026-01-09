import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./SectionComponent.module.css";
import PropTypes from "prop-types";

const SectionComponent = ({
  title,
  text,
  imgSrc,
  containerClass = "",
  containerInfoClass = "",
  containerTextClass = "",
  imgContainerClass = "",
  childComponent,
  childComponent2,
  alternativeStyles = {},
  reverse = false, // Nueva prop para invertir el orden
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const textContent = (
    <div
      className={`${styles.containerText} ${containerTextClass} ${
        alternativeStyles?.containerText || ""
      }`}
      data-aos="fade-right"
    >
      <h5>{title}</h5>
      <p className={styles.parrafo}>{text}</p>
      {childComponent}
    </div>
  );

  const imageContent = (
    <div
      className={`${styles.imgContainer} ${imgContainerClass} ${
        alternativeStyles?.imgContainer || ""
      }`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {childComponent2}
      {imgSrc && <img src={imgSrc} alt={title} />}
    </div>
  );

  return (
    <div
      className={`${styles.container} ${containerClass} ${
        alternativeStyles?.container || ""
      }`}
    >
      <div
        className={`${styles.containerInfo} ${containerInfoClass} ${
          alternativeStyles?.containerInfo || ""
        } ${reverse ? styles.reverse : ""}`}
      >
        {reverse ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
};

SectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imgSrc: PropTypes.string,
  containerClass: PropTypes.string,
  containerInfoClass: PropTypes.string,
  containerTextClass: PropTypes.string,
  imgContainerClass: PropTypes.string,
  childComponent: PropTypes.node,
  childComponent2: PropTypes.node,
  alternativeStyles: PropTypes.shape({
    container: PropTypes.string,
    containerInfo: PropTypes.string,
    containerText: PropTypes.string,
    imgContainer: PropTypes.string,
  }),
  reverse: PropTypes.bool,
};

export default SectionComponent;
