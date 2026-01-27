import React from "react";
import styles from "./Valores.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Valores = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Nuestros valores</h3>

          <p className={styles.textAboveCards} data-aos="fade-right">
            En VOYANT, nuestros valores son la guía para cada decisión y acción
            que tomamos.<br></br> Estos valores reflejan nuestro compromiso no
            solo con nuestros clientes y socios, sino también con nuestro equipo
            y la comunidad en general.
          </p>

          <div className={styles.containerInfo}>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/humildad.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Consciencia:</span> Conectar con el propósito, con lo que haces con lo que dices y con el impacto que generas.
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/determinacion.svg"
                alt="determinacion Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Determinacíon:</span>Avanzar con coraje,foco y la certeza absoluta que todo es posible si inviertes la energia necesaria .
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/responsabilidad.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Disciplina:</span> Hacer lo que se debe hacer, no poque sea facil sino porque el objetivo lo requiere..., aun cuando nadie mira.
              </p>
            </div>
          
            <p className={styles.textAboveCards}>
              Estos valores son la esencia de VOYANT y la base sobre la que
              construimos un futuro mejor para todos nuestros stakeholders. Son
              los pilares que aseguran que mientras trabajamos para ser líderes
              en nuestra industria, también contribuimos positivamente a nuestra
              comunidad y al mundo.
            </p>
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Valores;
