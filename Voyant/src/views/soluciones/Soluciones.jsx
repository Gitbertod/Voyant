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
import { AiOutlineAreaChart } from "react-icons/ai";

const Soluciones = ({childComponent}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.sectoresContainer}>
        {childComponent}
        <div className="flex justify-center flex-col items-center ">
          <div className={styles.container}>
            <div data-aos="fade-right">
              <h2>Soluciones</h2>
              <div className={styles.yellowLine}></div>
              <p className={styles.textInfo}>
              En VOYANT, transformamos desafíos en oportunidades. Nuestras soluciones de infraestructura crítica en energía, climatización y seguridad, están diseñadas para operar en las condiciones más exigentes. 
              Con un enfoque centrado en la innovación y la sostenibilidad, así como el respaldo de fabricantes líderes, ofrecemos sistemas que no solo cumplen con los estándares más altos de eficiencia y confiabilidad, sino que también se adaptan de manera inteligente a las necesidades específicas de cada cliente. 
              <br></br>
              <br></br>Explora cómo nuestras soluciones pueden ayudarte a optimizar operaciones, contribuyendo a un crecimiento sostenible y continuo para tu negocio.

              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.containerSectores}>
                <Link to="/soluciones/distribucion-respaldo-de-energia">
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
                <Link to="/soluciones/climatizacion">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <BsFan className={styles.icon} />
                    </div>
                    <h3>Climatizacion</h3>
                  </div>
                </Link>
                <Link to="/soluciones/seguridad">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <GrShieldSecurity className={styles.icon} />
                    </div>
                    <h3>
                      Seguridad
                    </h3>
                  </div>
                </Link>
                <Link to="/soluciones/industria4.0">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <GiArtificialIntelligence className={styles.icon} />
                    </div>
                    <h3>Industria 4.0</h3>
                  </div>
                </Link>
                <Link to="/soluciones/gestion-de-la-energia">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                    <AiOutlineAreaChart className={styles.icon} />
                      
                    </div>
                    <h3>Gestión de la energía</h3>
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
