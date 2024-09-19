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
import CategoryBox from "../../components/category-box/CategoryBox";

const Soluciones = ({ childComponent }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.sectoresContainer}>
        {childComponent}
        <div className="flex justify-center flex-col items-center h-full">
          <div className={styles.container}>
            <div data-aos="fade-right">
              <h2>Soluciones</h2>
              <div className={styles.yellowLine}></div>
              <p className={styles.textInfo}><br></br>
                En VOYANT, transformamos desafíos en oportunidades. Nuestras
                soluciones de infraestructura crítica en energía, climatización
                y seguridad, están diseñadas para operar en las condiciones más
                exigentes. Con un enfoque centrado en la innovación y la
                sostenibilidad, así como el respaldo de fabricantes líderes,
                ofrecemos sistemas que no solo cumplen con los estándares más
                altos de eficiencia y confiabilidad, sino que también se adaptan
                de manera inteligente a las necesidades específicas de cada
                cliente.
                <br></br>
                <br></br>Explora cómo nuestras soluciones pueden ayudarte a
                optimizar operaciones, contribuyendo a un crecimiento sostenible
                y continuo para tu negocio.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.containerSectores}>
                <CategoryBox
                  title={<span>DISTRIBUCÍON<br />Y RESPALDO DE ENERGÍA</span>}
                  icon={<TbBatteryCharging2 className={styles.icon} />}
                  link="/soluciones/distribucion-respaldo-de-energia"
                />
                <CategoryBox
                  title="CLIMATIZACIÓN"
                  icon={<BsFan className={styles.icon} />}
                  link="/soluciones/climatizacion"
                />
                <CategoryBox
                  title="SEGURIDAD"
                  icon={<GrShieldSecurity className={styles.icon} />}
                  link="/soluciones/seguridad"
                />
                <CategoryBox
                  title="INDUSTRIA 4.0"
                  icon={<GiArtificialIntelligence className={styles.icon} />}
                  link="/soluciones/industria4.0"
                />
                <CategoryBox
                  title="GESTÍON DE LA ENERGÍA"
                  icon={<AiOutlineAreaChart className={styles.icon} />}
                  link="/soluciones/gestion-de-la-energia"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soluciones;
