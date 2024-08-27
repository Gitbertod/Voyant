import NavBar from "../../components/navbar/NavBar";
import News from "../../components/news/News";
import SectionComponent from "../../components/section-component/SectionComponent";
import Sectores from "../sectores/Sectores";
import Soluciones from "../soluciones/Soluciones";
import styles from "./Landing.module.css";
import { Footer } from "flowbite-react";
import VideoLanding from "../../components/videolanding/VideoLanding";
import Contacto from "../contacto/Contacto";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <VideoLanding />
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
        <SectionComponent
          title="Quienes somos"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sit enim officia harum asperiores, error, reiciendis exercitationem."
          buttonText="Saber más"
          imgSrc="./ingenieroWhite.png"
          linkTo="/nosotros"
        />
        <Soluciones />
        <News></News>
        <Contacto></Contacto>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
