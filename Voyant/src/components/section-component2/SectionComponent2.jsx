import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./SectionComponent2.module.css";
import PropTypes from "prop-types";

const SectionComponent2 = ({
  title,
  text,
  imgSrc,
  containerClass,
  containerInfoClass,
  containerTextClass,
  imgContainerClass,
  childComponent,
  childComponent2,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div className={`${styles.containerInfo} ${containerInfoClass}`}>
        <div
          className={`${styles.containerText} ${containerTextClass}`}
          data-aos="fade-right"
        >
          <h5>{title}</h5>
          <p className={styles.parrafo}>{text}</p>
          {childComponent}
        </div>

        <div
          className={`${styles.imgContainer} ${imgContainerClass}`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {childComponent2}
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

SectionComponent2.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  containerInfoClass: PropTypes.string,
  containerTextClass: PropTypes.string,
  imgContainerClass: PropTypes.string,
};

export default SectionComponent2;
