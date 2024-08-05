import { Link } from "react-router-dom";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import mineria_bg from "../../../assets/mineria_bg.mov";
import styles from "./Mineria.module.css";

const Mineria = () => {
  const tituloH1 = "Mineria";
  const videoBg = mineria_bg;
  
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className={styles.bgimage}
        ></video>
      </div>
      <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link>
      <div className={styles.mainContainer}>
        <img src="logosVoyant_bg.svg" className={styles.logosVoyant} />
        <div className={styles.container}>
          <h1>{tituloH1}</h1>
          <div className={styles.yellowLine}></div>
          <p className={styles.textInfo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi?
          </p>
          <BoxDataPercentage></BoxDataPercentage>
        </div>
      </div>
    </>
  );
};

export default Mineria;
