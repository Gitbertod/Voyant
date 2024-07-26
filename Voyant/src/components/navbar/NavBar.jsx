import styles from "./NavBar.module.css";
import { useState } from "react";
import { BsFan } from "react-icons/bs";
import { HiCpuChip } from "react-icons/hi2";
import { GrShieldSecurity } from "react-icons/gr";
import { GiMining } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa6";
import { FaTowerCell } from "react-icons/fa6";
import { TbBatteryCharging2 } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpenSoluciones, setIsOpenSoluciones] = useState(false);
  const [isOpenSectores, setIsOpenSectores] = useState(false);

  const handleSolucionesHover = () => {
    setIsOpenSoluciones(true);
  };
  const handleSectoresHover = () => {
    setIsOpenSectores(true);
  };
  const handleMouseLeave = () => {
    setIsOpenSoluciones(false);
    setIsOpenSectores(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.subnav}>
          <img src="logoVoyantColor.svg" className="sm:h-9" alt="Voyant Logo" />
        </div>
        <div className={styles.optionsNav}>
          <Link to="/nosotros">Nosotros</Link>
          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleSolucionesHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/soluciones"> Soluciones</Link>
            </button>
            <div
              onMouseEnter={handleSolucionesHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenSoluciones ? styles.showMenu : ""
              }`}
            >
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
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/sectores">Sectores</Link>
            </button>
            <div
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenSectores ? styles.showMenu : ""
              }`}
            >
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
              <Link to="/voyant365">VOYANT 365</Link>
            </button>
            <div className={styles.subnavContent}>
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
            </div>
          </div>
          <Link to="contacto">Contacto</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
