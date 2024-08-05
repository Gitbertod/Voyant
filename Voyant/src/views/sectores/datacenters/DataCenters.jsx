import { Link } from "react-router-dom";
import styles from "./DataCenters.module.css";
import BoxDataPercentage from "../../../components/iconsdata/BoxDataPercentage";
const DataCenters = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <img src="dataCenters_bg.jpeg" className={styles.bgimage}></img>
      </div>
      <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link>
      <div className={styles.mainContainer}>
        <img src="logosVoyant_bg.svg" className={styles.logosVoyant} />
        <div className={styles.container}>
          <h1>DATA CENTERS</h1>
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

export default DataCenters;
