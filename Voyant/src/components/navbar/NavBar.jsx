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
                <TbBatteryCharging2 className={styles.icon} />
                <Link to="#company">
                  Distribución y<br></br>
                  respaldo de energía
                </Link>
              </div>
              <div className={styles.category}>
                <BsFan className={styles.icon} />
                <a href="#team">Climatizacion</a>
              </div>
              <div className={styles.category}>
                <GrShieldSecurity className={styles.icon} />
                <a href="#careers">Seguridad</a>
              </div>
              <div className={styles.category}>
                <GiArtificialIntelligence className={styles.icon} />
                <a href="#careers">Industria 4.0</a>
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
                  <HiCpuChip className={styles.icon} />
                <a href="#bring">
                  Datacenters
                </a>
              </div>
              <div className={styles.category}>
                  <GiMining className={styles.icon} />
                <a href="#deliver">
                  Minería
                </a>
              </div>
              <div className={styles.category}>
                  <SlEnergy className={styles.icon} />
                <a href="#package">
                  Industria Eléctrica
                </a>
              </div>
              <div className={styles.category}>
                  <FaIndustry className={styles.icon} />
                <a href="#package">
                  Industria
                </a>
              </div>
              <div className={styles.category}>
                  <FaTowerCell className={styles.icon} />
                <a href="#express">
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
