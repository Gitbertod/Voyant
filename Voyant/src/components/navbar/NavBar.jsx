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
import { BiSolidCarBattery } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { LiaIndustrySolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { DrawerComponent } from "../drawer/DrawerComponent";

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
        <Link to="/">
          <img
            src="/logoVoyantColor.svg"
            className={styles.logoVoyant}
            alt="Voyant Logo"
          />
        </Link>
        <div className={styles.subnav}></div>
        <div className={styles.optionsNav}>
          <Link to="/nosotros" className={styles.link}>
            Nosotros
          </Link>
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
                isOpenSoluciones ? styles.slidebottom : ""
              }`}
            >
              <Link to="/soluciones/distribucion-respaldo-de-energia">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <TbBatteryCharging2 className={styles.icon} />
                    Distribución y
                    respaldo de energía
                  </div>
                </div>
              </Link>

              <Link to="/soluciones/climatizacion">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <BsFan className={styles.icon} />
                    Climatizacion
                  </div>
                </div>
              </Link>
              <Link to="/soluciones/seguridad">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <GrShieldSecurity className={styles.icon} />
                    Seguridad
                  </div>
                </div>
              </Link>

              <Link to="/soluciones/industria4.0">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <GiArtificialIntelligence className={styles.icon} />
                    Industria 4.0
                  </div>
                </div>
              </Link>
              <Link to="/soluciones/gestion-de-la-energia">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <AiOutlineAreaChart className={styles.icon} />
                    Gestión de la energía
                  </div>
                </div>
              </Link>
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
                isOpenSectores ? styles.slidebottom : ""
              }`}
            >
              <Link to="/data-centers">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <HiCpuChip className={styles.icon} />
                    Datacenters
                  </div>
                </div>
              </Link>
              <Link to="/mineria">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <GiMining className={styles.icon} />
                    Minería
                  </div>
                </div>
              </Link>
              <Link to="/industria-electrica">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <SlEnergy className={styles.icon} />
                    Industria Eléctrica
                  </div>
                </div>
              </Link>
              <Link to="/industria">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaIndustry className={styles.icon} />
                    Industria
                  </div>
                </div>
              </Link>
              <Link to="/telecomunicaciones">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaTowerCell className={styles.icon} />
                    Telecomunicaciones
                  </div>
                </div>
              </Link>
              <Link to="/otros-sectores">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <LiaIndustrySolid className={styles.icon} />
                    Otros sectores
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>
              <Link to="/voyant365">VOYANT 365</Link>
            </button>
          </div>
          <Link to="/contacto">Contacto</Link>
        </div>
        <DrawerComponent></DrawerComponent>
      </div>
    </>
  );
};

export default NavBar;
