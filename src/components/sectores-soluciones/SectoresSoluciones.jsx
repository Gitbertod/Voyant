import styles from "./SectoresSoluciones.module.css";

const SectoresSoluciones = ({ title, text, child1, backgroundImage }) => {
  const containerStyle = backgroundImage ? {
    backgroundImage: `url("${backgroundImage}")`,
  } : {};

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.content} data-aos="fade-right">
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.yellowLine} aria-hidden="true"></div>
        <div className={styles.textInfo}>{text}</div>
        {child1 && (
          <div className={styles.categoryContainer}>
            {child1}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectoresSoluciones;
