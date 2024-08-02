import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Sectores.module.css";
import { Link } from "react-router-dom";
import { HiCpuChip } from "react-icons/hi2";
import { GiMining } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa6";
import { FaTowerCell } from "react-icons/fa6";

const Sectores = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <img src="sectores_bg.jpeg" className={styles.bgimage}></img>
      </div>
      {/* <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link> */}
      <div className={styles.mainContainer} data-aos="fade-right">
        <div className={styles.container}>
          <h1>Sectores</h1>
          <div className={styles.yellowLine}></div>
          <p className={styles.textInfo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            sequi sunt assumenda, illum vero voluptatibus ipsa, natus quaerat
            reprehenderit recusandae quidem inventore neque dicta dignissimos?
            Incidunt, eum? Deserunt, consequuntur animi? illum vero voluptatibus
            ipsa, natus quaerat reprehenderit recusandae quidem inventore neque
            dicta dignissimos? Incidunt, eum? Deserunt, consequuntur animi?
          </p>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className={styles.containerSectores}>
              <Link to="/data-centers">
                <div className={styles.boxCategory}>
                  <HiCpuChip className={styles.icon} />
                  <h2>DATA CENTERS</h2>
                </div>
              </Link>
              <Link to="/industria-electrica">
                <div className={styles.boxCategory}>
                  <GiMining className={styles.icon} />
                  <h2>MINERIA</h2>
                </div>
              </Link>
              <Link to="">
                <div className={styles.boxCategory}>
                  <SlEnergy className={styles.icon} />
                  <h2>
                    INDUSTRIA<br></br> ELECTRICA
                  </h2>
                </div>
              </Link>
              <Link to="/industria">
                <div className={styles.boxCategory}>
                  <FaIndustry className={styles.icon} />
                  <h2>INDUSTRIA</h2>
                </div>
              </Link>
              <Link to="/telecomunicaciones">
                <div className={styles.boxCategory}>
                  <FaTowerCell className={styles.icon} />
                  <h2>TELECOMUNICACIONES</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectores;
