import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./SectionComponent.module.css";
import PropTypes from "prop-types";

const SectionComponent = ({
    title,
    text,
    imgSrc,
    containerClass,
    containerInfoClass,
    containerTextClass,
    imgContainerClass,
    childComponent,
    childComponent2,
    alternativeStyles
}) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={`${styles.container} ${containerClass} ${alternativeStyles?.container}`}>
            <div className={`${styles.containerInfo} ${containerInfoClass} ${alternativeStyles?.containerInfo}`}>
                <div
                    className={`${styles.containerText} ${containerTextClass} ${alternativeStyles?.containerText}`}
                    data-aos="fade-right"
                >
                    <h5>{title}</h5>
                    <p className={styles.parrafo}>{text}</p>
                    {childComponent}
                </div>

                <div
                    className={`${styles.imgContainer} ${imgContainerClass} ${alternativeStyles?.imgContainer}`}
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

SectionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    containerClass: PropTypes.string,
    containerInfoClass: PropTypes.string,
    containerTextClass: PropTypes.string,
    imgContainerClass: PropTypes.string,
    alternativeStyles: PropTypes.shape({
        container: PropTypes.string,
        containerInfo: PropTypes.string,
        containerText: PropTypes.string,
        imgContainer: PropTypes.string
    })
};

export default SectionComponent;