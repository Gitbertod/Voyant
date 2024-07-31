
import { Link } from 'react-router-dom';
import styles from "./Climatizacion.module.css";
import climatizacion_bg from "../../../assets/climatizacion_bg.mov";
import BoxDataPercentage from '../../../components/iconsdata/BoxDataPercentage';

const Climatizacion = () => {
  const tituloH1 = "Climatización";
    return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video
          src={climatizacion_bg}
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
  )
}

export default Climatizacion