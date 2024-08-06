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

const Soluciones = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.sectoresContainer}>
        <div className="flex justify-center flex-col items-center py-11">
          <div className={styles.container}>
            <div data-aos="fade-right">
              <h2>Soluciones</h2>
              <div className={styles.yellowLine}></div>
              <p className={styles.textInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati odit illo sunt impedit odio, veritatis sit suscipit,
                libero neque officiis laudantium voluptatem iusto beatae!
                Placeat velit autem dolor optio. Corrupti.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.containerSectores}>
                <Link to="/data-centers">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <TbBatteryCharging2 className={styles.icon} />
                    </div>
                    <h3>
                      Distribucion y respaldo<br></br>
                      de energia
                    </h3>
                  </div>
                </Link>
                <Link to="/mineria">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <BsFan className={styles.icon} />
                    </div>
                    <h3>Climatizacion</h3>
                  </div>
                </Link>
                <Link to="/industria-electrica">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <GrShieldSecurity className={styles.icon} />
                    </div>
                    <h3>
                      Seguridad
                    </h3>
                  </div>
                </Link>
                <Link to="/industria">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <GiArtificialIntelligence className={styles.icon} />
                    </div>
                    <h3>Industria 4.0</h3>
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
