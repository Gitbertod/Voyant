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
                <span>Humildad:</span> Creemos en mantener siempre una
                perspectiva abierta, que nos permite aprender de nuestros
                clientes, colegas y competidores, para así adaptarnos y servir
                mejor.
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/empatia.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Empatía:</span> Nos ponemos en el lugar de nuestros
                clientes y compañeros, entendiendo sus desafíos y necesidades
                para ofrecer soluciones que realmente hagan la diferencia en sus
                vidas y negocios.
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
                <span>Determinacíon:</span> Nuestra pasión nos impulsa a
                perseguir nuestros objetivos con firmeza y persistencia,
                superando cualquier obstáculo que se presente en el camino.
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
                <span>Responsabilidad:</span> Nos hacemos cargo de nuestros
                actos y sus impactos, asumiendo nuestra contribución en los
                resultados.
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/coraje.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Coraje:</span> Nos atrevemos a tomar decisiones difíciles
                y a innovar en áreas no exploradas, siempre con el objetivo de
                cumplir nuestro propósito como empresa y avanzar.
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/creatividad.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Creatividad:</span> Fomentamos un ambiente donde las ideas
                nuevas son bienvenidas y valoradas, permitiéndonos encontrar
                soluciones únicas y efectivas para los retos más complejos.
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/aprendizaje.svg"
                alt="Voyant Symbol"
                className={styles.img}
              />
              <p className={styles.parrafo}>
                <span>Aprendizaje Continuo:</span> Estamos comprometidos con el
                crecimiento personal y profesional continuo, asegurando que
                nuestro equipo esté siempre a la vanguardia y pueda responder a
                los cambios rápidos de un mundo en constante evolución.
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
