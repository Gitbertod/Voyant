import React from "react";
import styles from "./NuestraGente.module.css";

const NuestraGente = () => {
  return (
    <div className={styles.fondo}>
      <div className={styles.container}>
        <h3 className="mt-5" data-aos="fade-left">
          Nuestra gente
        </h3>
        <p className={styles.textAboveCards} data-aos="fade-right">
          En VOYANT, cada miembro de nuestro equipo es un reflejo vivo de
          nuestros valores. Somos personas apasionadas, dedicadas y
          comprometidas con la excelencia, no solo en nuestro trabajo, sino en
          cada aspecto de nuestras vidas.
          <br /> <br />
        </p>
        <br />
        <div className={styles.containerInfo}>

        <div className={styles.parrafos}>
          <p className={styles.parrafo}>
            A través de su diversidad, creatividad y espíritu de colaboración,
            nuestro equipo impulsa nuestra misión y fortalece nuestro impacto en
            la industria y la comunidad. <br />
            <br />
            Nos acercamos a cada desafío con <span>humildad y empatía</span>, escuchando
            activamente a nuestros clientes y colaboradores porque creemos
            firmemente que el éxito se construye juntos. Esta conexión genuina
            nos permite entender profundamente y responder a sus necesidades de
            manera efectiva. <br /> <br />
            Perseguimos nuestros objetivos con <span>determinación y responsabilidad</span> ,
            con una resolución inquebrantable que nos lleva a superar obstáculos
            y alcanzar logros excepcionales.
            <br />
            <br />
            Actuamos con <span>coraje y creatividad</span>, no tememos a las decisiones
            difíciles ni a las ideas nuevas que nos permitan avanzar y encontrar
            soluciones a los retos que afrontemos.<br/><br/>
            Valoramos y fomentamos el <span>aprendizaje continuo</span>, conscientes de que
            cada día ofrece una oportunidad para mejorar y evolucionar. Este
            compromiso con el desarrollo personal y profesional asegura que
            permanecemos en la vanguardia de nuestra industria, siempre listos
            para adaptarnos a un mundo en constante cambio
          </p>
        </div>
        <div className="w-96 justify-start">
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default NuestraGente;
