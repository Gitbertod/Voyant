import styles from "./SectionComponent.module.css";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";
const SectionComponent = ({
  title,
  text,
  buttonText,
  imgSrc,
  containerClass,
  containerInfoClass,
  containerTextClass,
  imgContainerClass,
}) => {
  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div className={`${styles.containerInfo} ${containerInfoClass}`}>
        <div
          className={`${styles.containerText} ${containerTextClass}`}
          data-aos="fade-right"
        >
          <h5>{title}</h5>
          <p className={styles.parrafo}>{text}</p>
          <div className="flex justify-start my-11">
            <Button color="warning">{buttonText}</Button>
          </div>
        </div>

        <div
          className={`${styles.imgContainer} ${imgContainerClass}`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

SectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  containerInfoClass: PropTypes.string,
  containerTextClass: PropTypes.string,
  imgContainerClass: PropTypes.string,
};

SectionComponent.defaultProps = {
  containerClass: "",
  containerInfoClass: "",
  containerTextClass: "",
  imgContainerClass: "",
};

export default SectionComponent;
