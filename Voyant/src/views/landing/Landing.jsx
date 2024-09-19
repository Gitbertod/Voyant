import NavBar from "../../components/navbar/NavBar";
import News from "../../components/news/News";
import SectionComponent from "../../components/section-component/SectionComponent";
import Sectores from "../sectores/Sectores";
import Soluciones from "../soluciones/Soluciones";
import styles from "./Landing.module.css";
import { Footer } from "flowbite-react";
import VideoLanding from "../../components/videolanding/VideoLanding";
import Contacto from "../contacto/Contacto";
import CallToAction from "../../components/call-to-action/CallToAction";
import { useEffect } from "react";
import AOS from "aos";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const text = `
  <br>  
  En VOYANT, nos dedicamos a proporcionar soluciones de infraestructura crítica adaptadas a las necesidades únicas de diversos sectores.<br>
    No importa en qué industria te desarrolles, nuestro equipo está preparado para entender tus desafíos específicos y equiparte con la tecnología más avanzada en energía, climatización y seguridad.<br>
    Nuestras soluciones están diseñadas no solo para maximizar la eficiencia y la confiabilidad, sino también para impulsar la innovación en tu campo.<br><br>
    Descubre cómo estamos contribuyendo en la transformación de tu sector y cómo podemos ayudar a preparar tu empresa para un futuro sin límites.
  `;
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
          Infraestructura confiable para que siempre avances
        </p>
        <Sectores parrafo={text} />
        <SectionComponent
          title="Quienes somos"
          text="En VOYANT, transformamos la tecnología en soluciones que ponemos al servicio de las personas. Nos dedicamos a diseñar, implementar y mantener infraestructuras críticas en energía, climatización y seguridad, asegurando operaciones continuas y fiables para nuestros clientes. Nuestro equipo, apasionado y comprometido, impulsa la innovación, siempre fomentando prácticas sostenibles para juntos construir infraestructura confiable para que siempre avances…
"
          buttonText="Saber más"
          imgSrc="./ingenieroWhite.png"
          linkTo="/nosotros"
          childComponent={
            <CallToAction
              linkTo={"/nosotros"}
              buttonText="Saber mas"
            ></CallToAction>
          }
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
