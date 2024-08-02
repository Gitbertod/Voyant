import styles from "./News.module.css";
import { CarouselComponent } from "../carrusel/CarouselComponent";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <div className="flex justify-center flex-col items-center py-11">
        <img src="./logoVoyantColor.svg" className="max-w-64 " />
        <h2 className="py-6 text-5xl">Últimas noticias de Voyant</h2>
      </div>
      <CarouselComponent></CarouselComponent>
    </div>
  );
};

export default News;
