import styles from "./BoxDataPercentage.module.css";

const BoxDataPercentage = ({ children }) => {
  return (
    <div className={styles.slidebottom}>
      <div className={styles.dataInfoContainer}>{children}</div>
    </div>
  );
};

export default BoxDataPercentage;
