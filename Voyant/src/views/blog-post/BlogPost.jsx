import styles from "./BlogPost.module.css";
import NavBar from "../../components/navbar/NavBar";
import { AvatarComponent } from "../../components/avatar/AvatarComponent";
import { CardComponent } from "../../components/Card/CardComponent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogPost = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  });
  return (
    <>
      <img className={styles.img} src="/teamVoyant.jpeg"></img>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={styles.postContent}
      >
        <h1 className={styles.title}>
          Un hito en la infraestructura digital del Perú. Un equipo que lo hizo
          posible.
        </h1>
        <div className="flex justify-start space-x-2 mt-4 mb-4 ml-4 text-yellow-300 font-bold">
          <AvatarComponent />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-500 dark:text-white">
              Victor Salas
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO VOYANT
            </cite>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-4 mb-4 text-yellow-300 font-bold">
          <span>Voyant</span>
          <span>6 de junio, de 2025</span>
        </div>

        <div className={styles.parrafoContainer}>
          <p className="mt-5 mb-5 leading-loose">
            En VOYANT estamos profundamente orgullosos de este grupo humano que
            ha entregado su conocimiento, disciplina y compromiso para la
            implementación de un nuevo Data Center de clase mundial. Este
            proyecto marca un antes y un después para la infraestructura
            tecnológica del país.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            No se trata solo de sistemas eléctricos, climatización o seguridad.
            Se trata de personas que hacen que todo funcione, incluso bajo
            presión, incluso cuando las condiciones cambian, incluso cuando
            nadie los ve.
          </p>

          {/* <h2 className={styles.subtitle}>Subtítulo de ejemplo</h2> */}
          <p className="mt-5 mb-5 leading-loose">
            Nuestra misión es clara: contribuir al desarrollo del país con
            soluciones de infraestructura crítica confiables, inteligentes y
            resilientes.
          </p>
          <p className="mt-5 mb-5 leading-loose">
            Gracias a todo el equipo por demostrar una vez más que en VOYANT, no
            solo construimos soluciones… construimos confianza.
          </p>
          <div className="flex flex-wrap gap-2 mt-8 px-4">
            {[
              "#VOYANT",
              "#InfraestructuraCrítica",
              "#DataCenters",
              "#AltaDisponibilidad",
              "#TransformaciónDigital",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-300 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-yellow-400 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-20 mb-4 text-yellow-300 font-bold">
        <h3 className={styles.subtitle}>Más artículos relacionados:</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 items-center">
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
        <div className="p-4 transition-transform transform hover:scale-105">
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
