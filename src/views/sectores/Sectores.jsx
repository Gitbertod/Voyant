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
import CategoryBox from "../../components/category-box/CategoryBox";
import SectoresSoluciones from "../../components/sectores-soluciones/SectoresSoluciones";

const Sectores = ({ childComponent, parrafo }) => {
  const tituloH2 = "Sectores";

  useEffect(() => {
    AOS.init();
  }, []);
  
  const bgImageStyle = {
    backgroundImage: 'url("/sectores_bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  return (
    <div style={bgImageStyle}>
      <SectoresSoluciones
        title={"Sectores"}
        text={
          <>
            <p>
              En VOYANT, nos dedicamos a proporcionar soluciones de
              infraestructura crítica adaptadas a las necesidades únicas de
              diversos sectores.
            </p>
            <p>
              {" "}
              No importa en qué industria te desarrolles, nuestro equipo está
              preparado para entender tus desafíos específicos y equiparte con
              la tecnología más avanzada en energía, climatización y seguridad.
            </p>
            <p>
              {" "}
              Nuestras soluciones están diseñadas no solo para maximizar la
              eficiencia y la confiabilidad, sino también para impulsar la
              innovación en tu campo.
            </p>
            <p>
              {" "}
              Descubre cómo estamos contribuyendo en la transformación de tu
              sector y cómo podemos ayudar a preparar tu empresa para un futuro
              sin límites.
            </p>
          </>
        }
        child1={
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className={styles.containerSectores}>
              <CategoryBox
                title="DATACENTERS"
                icon={<HiCpuChip className={styles.icon} />}
                link="/data-centers"
              />
              <CategoryBox
                title="MINERIA"
                icon={<GiMining className={styles.icon} />}
                link="/mineria"
              />
              <CategoryBox
                title={
                  <span>
                    INDUSTRIA
                    <br />
                    ELECTRICA
                  </span>
                }
                icon={<SlEnergy className={styles.icon} />}
                link="/industria-electrica"
              />
              {/* <CategoryBox
                title="INDUSTRIA"
                icon={<FaIndustry className={styles.icon} />}
                link="/industria"
              />
              <CategoryBox
                title="TELECOMUNICACIONES"
                icon={<FaTowerCell className={styles.icon} />}
                link="/telecomunicaciones"
              /> */}
              <CategoryBox
                title="OTROS SECTORES"
                icon={<LiaIndustrySolid className={styles.icon} />}
                link="/otros-sectores"
              />
            </div>
          </div>
        }
      ></SectoresSoluciones>
    </div>
  );
};

export default Sectores;
