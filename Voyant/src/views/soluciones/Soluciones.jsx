"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BsFan } from "react-icons/bs";
import styles from "./Soluciones.module.css";
import { GrShieldSecurity } from "react-icons/gr";
import { TbBatteryCharging2 } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import NavBar from "../../components/navbar/NavBar";

const Soluciones = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="main">
          <div className="overlay"></div>
          <img src="soluciones_bg.jpeg" className={styles.bgimage}></img>
        </div>
        {/* <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link> */}
        <div className={styles.mainContainer} data-aos="fade-right">
          <div className={styles.container}>
            <h1>Soluciones</h1>
            <div className={styles.yellowLine}></div>
            <p className={styles.textInfo}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, sequi sunt assumenda, illum vero voluptatibus ipsa,
              natus quaerat reprehenderit recusandae quidem inventore neque
              dicta dignissimos? Incidunt, eum? Deserunt, consequuntur animi?
              illum vero voluptatibus ipsa, natus quaerat reprehenderit
              recusandae quidem inventore neque dicta dignissimos? Incidunt,
              eum? Deserunt, consequuntur animi?
            </p>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.containerSectores}>
                <Link to="/soluciones/distribucion-respaldo-de-energia">
                  <div className={styles.boxCategory}>
                    <TbBatteryCharging2 className={styles.icon} />
                    <h2>
                      Distribucion y <br></br> respaldo de energía
                    </h2>
                  </div>
                </Link>
                <Link to="/soluciones/climatizacion">
                  <div className={styles.boxCategory}>
                    <BsFan className={styles.icon} />
                    <h2>Climatizacion</h2>
                  </div>
                </Link>
                <Link to="/soluciones/seguridad">
                  <div className={styles.boxCategory}>
                    <GrShieldSecurity className={styles.icon} />
                    <h2>Seguridad</h2>
                  </div>
                </Link>
                <Link to="/soluciones/industria4.0">
                  <div className={styles.boxCategory}>
                    <GiArtificialIntelligence className={styles.icon} />
                    <h2>Industria 4.0</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soluciones;