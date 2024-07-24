import styles from "./NavBar.module.css";
import { BsFan } from "react-icons/bs";
import { HiCpuChip } from "react-icons/hi2";
import { GrShieldSecurity } from "react-icons/gr";
import { GiMining } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa6";
import { FaTowerCell } from "react-icons/fa6";
import { TbBatteryCharging2 } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
      
        <div className={styles.subnav}>
          <img src="logoVoyantColor.svg" className="sm:h-9" alt="Voyant Logo" />
        </div>

        <a href="#home">Nosotros</a>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            Soluciones <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <div className={styles.category}>
              <a href="#company">
                <TbBatteryCharging2 className={styles.icon} />
                Distribución y<br></br>
                respaldo de energía
              </a>
            </div>
            <div className={styles.category}>
              <a href="#team">
                <BsFan className={styles.icon} />
                Climatizacion
              </a>
            </div>
            <div className={styles.category}>
              <a href="#careers">
                <GrShieldSecurity className={styles.icon} />
                Seguridad
              </a>
            </div>
            <div className={styles.category}>
              <a href="#careers">
                <GiArtificialIntelligence className={styles.icon} />
                Industria 4.0
              </a>
            </div>
          </div>
        </div>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            Sectores <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <div className={styles.category}>
              <a href="#bring">
                <HiCpuChip className={styles.icon} />
                Datacenters
              </a>
            </div>
            <div className={styles.category}>
              <a href="#deliver">
                <GiMining className={styles.icon} />
                Minería
              </a>
            </div>
            <div className={styles.category}>
              <a href="#package">
                <SlEnergy className={styles.icon} />
                Industria Eléctrica
              </a>
            </div>
            <div className={styles.category}>
              <a href="#package">
                <FaIndustry className={styles.icon} />
                Industria
              </a>
            </div>
            <div className={styles.category}>
              <a href="#express">
                <FaTowerCell className={styles.icon} />
                Telecomunicaciones
              </a>
            </div>
          </div>
        </div>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            VOYANT 365 <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <div></div>

            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Contacto</a>
        <button className={styles.custombtn}>Read More</button>
      </div>
    </>
  );
};

export default NavBar;
