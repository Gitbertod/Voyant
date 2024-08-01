import { Link } from "react-router-dom";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
import seguridad_bg from "../../../assets/seguridad_bg.mov";
import styles from "./Seguridad.module.css";
const Seguridad = () => {
  const tituloH1 = "Seguridad";
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video
          src={seguridad_bg}
          autoPlay
          loop
          muted
          className={styles.bgimage}
        ></video>
      </div>
      <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link>
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
    </>
  );
};

export default Seguridad;
