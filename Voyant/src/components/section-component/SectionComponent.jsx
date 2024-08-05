import styles from "./SectionComponent.module.css";
import { Button } from "flowbite-react";
const SectionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.containerText} data-aos="fade-right">
          <h5>Quiénes somos</h5>
          <p className={styles.parrafo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            sit enim officia harum asperiores, error, reiciendis exercitationem
            esse possimus quidem ipsum tempore excepturi nam unde doloribus fuga
            sunt cupiditate accusamus?
          </p>
          <div className="flex justify-start my-11">
            <Button color="warning">Saber más</Button>
          </div>
        </div>

        <div className="" data-aos="fade-up" data-aos-duration="2000">
          <img src="./ingenieroWhite.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
