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

const Sectores = ({ childComponent, parrafo }) => {
  const tituloH2 = "Sectores";

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
              <h2>{tituloH2}</h2>
              <div className={styles.yellowLine}></div>
              <p
                className={styles.textInfo}
                dangerouslySetInnerHTML={{ __html: parrafo }}
              ></p>
            </div>
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
                  title={<span>INDUSTRIA<br/>ELECTRICA</span>}
                  icon={<SlEnergy className={styles.icon} />}
                  link="/industria-electrica"
                />
                <CategoryBox
                  title="INDUSTRIA"
                  icon={<FaIndustry className={styles.icon} />}
                  link="/industria"
                />
                <CategoryBox
                  title="TELECOMUNICACIONES"
                  icon={<FaTowerCell className={styles.icon} />}
                  link="/telecomunicaciones"
                />
                <CategoryBox
                  title="OTROS SECTORES"
                  icon={<LiaIndustrySolid className={styles.icon} />}
                  link="/otros-sectores"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectores;
