import styles from "./Sectores.module.css";
import { Link } from "react-router-dom";
import { HiCpuChip } from "react-icons/hi2";
import { GiMining } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa6";
import { FaTowerCell } from "react-icons/fa6";
const Sectores = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <img src="sectores_bg.jpeg" className={styles.bgimage}></img>
      </div>
      <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link>
      <div className={styles.container}>
        <div>
          <HiCpuChip className={styles.icon} />
          <h2>DATA CENTERS</h2>
        </div>
        <div>
          <GiMining className={styles.icon} />
          <h2>MINERIA</h2>
        </div>
        <div>
          <SlEnergy className={styles.icon} />
          <h2>INDUSTRIA ELECTRICA</h2>
        </div>
        <div>
          <FaIndustry className={styles.icon} />
          <h2>INDUSTRIA</h2>
        </div>
        <div>
          <FaTowerCell className={styles.icon} />
          <h2>TELECOMUNICACIONES</h2>
        </div>
      </div>
    </>
  );
};

export default Sectores;
