import Main from "../../components/main/Main";
import NavBar from "../../components/navbar/NavBar";
import News from "../../components/news/News";
import SectionComponent from "../../components/section-component/SectionComponent";
import Sectores from "../sectores/Sectores";
import Soluciones from "../soluciones/Soluciones";
import styles from "./Landing.module.css";
import { Footer } from "flowbite-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <header>
        <NavBar />
      </header>
      <main className="flex-grow justify-center items-center">
        <div className={styles.centerContainer}>
          <div className={styles.container}></div>
        </div>

        <div className={styles.img}>
          <div>
            <img
              src="/simboloVoyantWhite.svg"
              alt="Voyant Symbol"
              className={styles.img}
            />
          </div>
          <h1 className={styles.h1}>VOYANT</h1>
        </div>
        <p className={styles.subtitle}>
          Las mejores soluciones para tus requerimientos
        </p>
        <Sectores></Sectores>
        {/* <SectionComponent></SectionComponent> */}
        <Soluciones></Soluciones>
        <News></News>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
