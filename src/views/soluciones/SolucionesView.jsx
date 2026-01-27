import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../components/sectores-soluciones/SectoresSoluciones.module.css";
import { BsFan } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { TbBatteryCharging2 } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import CategoryBox from "../../components/category-box/CategoryBox";
import SectoresSoluciones from "../../components/sectores-soluciones/SectoresSoluciones";

const SolucionesView = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectoresSoluciones
      title="Soluciones"
      backgroundImage="/soluciones_bg.jpg"
      text={
        <>
          <p>
            En VOYANT, transformamos desafíos en oportunidades. Nuestras
            soluciones de infraestructura crítica en energía, climatización y
            seguridad, están diseñadas para operar en las condiciones más
            exigentes.
          </p>
          <p>
            Con un enfoque centrado en la innovación y la
            sostenibilidad, así como el respaldo de fabricantes líderes,
            ofrecemos sistemas que no solo cumplen con los estándares más altos
            de eficiencia y confiabilidad, sino que también se adaptan de manera
            inteligente a las necesidades específicas de cada cliente.
          </p>
          <p>
            Explora cómo nuestras soluciones pueden
            ayudarte a optimizar operaciones, contribuyendo a un crecimiento
            sostenible y continuo para tu negocio.
          </p>
        </>
      }
      child1={
        <div
          className={styles.categoryGrid}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <CategoryBox
            title={
              <span>
                DISTRIBUCÍON
                <br />Y RESPALDO DE ENERGÍA
              </span>
            }
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
      }
    />
  );
};

export default SolucionesView;
