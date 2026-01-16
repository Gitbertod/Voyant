import styles from "./BoxDataPercentage.module.css";

const BoxDataPercentage = ({ children }) => {
  // Contar el número de hijos para aplicar clase específica
  const childrenArray = Array.isArray(children) ? children : [children];
  const childCount = childrenArray.filter(Boolean).length;

  return (
    <div className={styles.slidebottom}>
      <div 
        className={`${styles.dataInfoContainer} ${styles[`count-${childCount}`]}`}
        data-count={childCount}
      >
        {children}
      </div>
    </div>
  );
};

export default BoxDataPercentage;