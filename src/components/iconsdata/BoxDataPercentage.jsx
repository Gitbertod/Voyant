import styles from "./BoxDataPercentage.module.css";

const BoxDataPercentage = ({ children }) => {
  // Contar hijos válidos de forma más simple
  const childCount = Array.isArray(children)
    ? children.filter(Boolean).length
    : children ? 1 : 0;

  return (
    <div className={styles.slidebottom}>
      <div className={`${styles.dataInfoContainer} ${styles[`count-${childCount}`]}`}>
        {children}
      </div>
    </div>
  );
};

export default BoxDataPercentage;
