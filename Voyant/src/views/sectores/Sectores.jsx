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
import { LiaIndustrySolid } from "react-icons/lia";

const Sectores = ({childComponent}) => {
  const tituloH2 = "Sectores";
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.sectoresContainer}>
        {childComponent}
        <div className="flex justify-center flex-col items-center">
          <div className={styles.container}>
            <div data-aos="fade-right">
              <h2>{tituloH2}</h2>
              <div className={styles.yellowLine}></div>
              <p className={styles.textInfo}>
              En VOYANT, nos dedicamos a proporcionar soluciones de infraestructura crítica adaptadas a las necesidades únicas de diversos sectores. No importa en qué industria te desarrolles, nuestro equipo está preparado para entender tus desafíos específicos y equiparte con la tecnología más avanzada en energía, climatización y seguridad. Nuestras soluciones están diseñadas no solo para maximizar la eficiencia y la confiabilidad, sino también para impulsar la innovación en tu campo. Descubre cómo estamos contribuyendo en la transformación de tu sector y cómo podemos ayudar a preparar tu empresa para un futuro sin límites.

              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.containerSectores}>
                <Link to="/data-centers">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <HiCpuChip className={styles.icon} />
                    </div>
                    <h3>DATA CENTERS</h3>
                  </div>
                </Link>
                <Link to="/mineria">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <GiMining className={styles.icon} />
                    </div>
                    <h3>MINERIA</h3>
                  </div>
                </Link>
                <Link to="/industria-electrica">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <SlEnergy className={styles.icon} />
                    </div>
                    <h3>
                      INDUSTRIA<br></br> ELECTRICA
                    </h3>
                  </div>
                </Link>
                <Link to="/industria">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <FaIndustry className={styles.icon} />
                    </div>
                    <h3>INDUSTRIA</h3>
                  </div>
                </Link>
                <Link to="/telecomunicaciones">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                      <FaTowerCell className={styles.icon} />
                    </div>
                    <h3>TELECOMUNICACIONES</h3>
                  </div>
                </Link>
                <Link to="/otros-sectores">
                  <div className={styles.boxCategory}>
                    <div className="mx-2">
                    <LiaIndustrySolid className={styles.icon} /> 
                    </div>
                    <h3>OTROS SECTORES</h3>
                  </div>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <img src="logoVoyantColor.svg" className={styles.logo} />
      </Link> */}
    </>
  );
};

export default Sectores;
