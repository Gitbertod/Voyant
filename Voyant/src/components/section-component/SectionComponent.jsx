import styles from "./SectionComponent.module.css";
const SectionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div>
          <h5>Titulo de sección</h5>
          <p className={styles.parrafo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            sit enim officia harum asperiores, error, reiciendis exercitationem
            esse possimus quidem ipsum tempore excepturi nam unde doloribus fuga
            sunt cupiditate accusamus? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quisquam sit enim officia harum asperiores, error,
            reiciendis exercitationem esse possimus quidem ipsum tempore
            excepturi nam unde doloribus fuga sunt cupiditate accusamus?
          </p>
        </div>
        <div className="">
          <img src="./ingenieroWhite.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
