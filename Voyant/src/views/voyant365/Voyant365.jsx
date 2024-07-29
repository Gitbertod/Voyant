import BoxDataPercentage from "../../components/iconsdata/BoxDataPercentage";
import styles from "./Voyant365.module.css";

import { Link } from "react-router-dom";

const Voyant365 = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <img src="voyant365_bg.jpeg" className={styles.bgimage}></img>
      </div>
      <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link>
      <img src="logosVoyant_bg.svg" className={styles.logosVoyant} />
      <div className={styles.container}>
        <h1>VOYANT 365</h1>
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

export default Voyant365;
