import styles from "./MiniDataInfo.module.css";

function MiniDataInfo({
  title,
  text,
  icon,
  divider = false,
  className = "",
}) {
  return (
    <div className={`${styles.dataInfo} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.containerData}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>

      {divider && <span className={styles.divider} />}
    </div>
  );
}

export default MiniDataInfo;

