import styles from "./Voyant365.module.css";
import { GrShieldSecurity } from "react-icons/gr";
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
        <div className={styles.slidebottom}>
          <div className={styles.dataInfo}>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
              <div className={styles.whiteLine}></div>
            </div>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
              <div className={styles.whiteLine}></div>
            </div>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voyant365;
