import styles from "./MiniDataInfo.module.css"
function MiniDataInfo({title,text,whiteLine,icon}) {
  return (
    <>
      <div className={styles.dataInfo}>
        {icon}
        <div className={styles.containerData}>
          <p className={styles.porcentaje}>{title}</p>
          <p className={styles.miniInfo}>
           {text}
          </p>
        </div>
        {whiteLine}
      </div>
    </>
  );
}

export default MiniDataInfo;
