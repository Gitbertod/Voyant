import { CardComponent } from "../../components/Card/CardComponent";
import { CarouselComponent } from "../../components/Carrusel/CarouselComponent";
import Main from "../../components/main/Main";
import NavBar from "../../components/navbar/NavBar";
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
        <div className={styles.newsContainer}>
          <div className="flex justify-center flex-col items-center py-11">
            <img src="./logoVoyantColor.svg" className="max-w-64 " />
            <h2 className="py-6 text-5xl">Últimas noticias de Voyant</h2>
          </div>
          <CarouselComponent></CarouselComponent>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;