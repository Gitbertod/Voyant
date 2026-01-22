import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent from "../../components/section-component/SectionComponent";
import Shape from "../../components/shape/Shape";
import styles from "./Nosotros.module.css";
import Valores from "../../components/valores/Valores";
import NuestraGente from "../../components/nuestra-gente/NuestraGente";
import BurguerMenu from "../../components/burguer-menu/BurguerMenu";



const Nosotros = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
  
      <SectionComponent
        title="Nosotros"
        text={
          <>
            <strong>En VOYANT, entendemos que cada segundo cuenta.</strong> Por
            eso, nuestras soluciones de infraestructura crítica están diseñadas
            con un único propósito: que avances sin interrupciones. Con
            tecnología avanzada, inteligente y resiliente, impulsamos la
            confiabilidad y eficiencia de tus operaciones. Independientemente de
            la industria en que te encuentres, estamos aquí para asegurarnos de
            que tu infraestructura crítica sea una base sólida que te permita
            avanzar siempre, y construyas un futuro sin límites.
          </>
        }
        childComponent2={<Shape image="./teamVoyant.jpeg" />}
      />
      <SectionComponent
        title="Misión"
        reverse={true}
        text={
          <>
            Nuestra misión es ayudar a nuestros clientes a alcanzar dos metas
            fundamentales que son esenciales para el éxito de sus operaciones:
            <br></br>
            <br></br>
            <ul className="list-disc">
              <strong>
                <li>Aumentar la confiabilidad</li>
              </strong>
              <strong>
                <li>Reducir costos de operación y mantenimiento</li>
              </strong>
            </ul>
            <br></br>
            Nos enfocamos en asegurar la operación continua y eficiente de tu
            infraestructura crítica, mejorando su estabilidad, rendimiento y
            sostenibilidad.
            <br></br>
            <br></br>
            Implementamos soluciones usando la mejor tecnología disponible, que
            permita reducir los gastos operativos, aumente la eficiencia y
            optimice el uso de los recursos, con un firme compromiso hacia la
            reducción del impacto ambiental.
            <br></br>
            <br></br>
            En VOYANT, vislumbramos un futuro en el que la tecnología avanzada,
            la infraestructura resiliente y la sostenibilidad convergen para
            sostener entornos operativos seguros y rentables. Nos esforzamos por
            liderar el camino hacia un desarrollo industrial que no solo permita
            a las empresas mantenerse y destacarse en sus industrias, sino que
            también promueva un equilibrio responsable con nuestro planeta.
            <br></br>
            <br></br>
            Nuestro objetivo es hacer de este futuro una realidad tangible para
            cada uno de nuestros clientes.
          </>
        }
        childComponent2={<Shape />}
      />
      <div></div>

      <Valores />
      <NuestraGente />
    </>
  );
};

export default Nosotros;
