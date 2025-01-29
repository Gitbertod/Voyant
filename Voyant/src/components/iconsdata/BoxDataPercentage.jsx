import { FaCheckCircle } from "react-icons/fa";
import styles from "./BoxDataPercentage.module.css";
import MiniDataInfo from "../mini-datainfo/MiniDataInfo";
const BoxDataPercentage = () => {
  return (
    <div className={styles.slidebottom}>
      <div className={styles.dataInfoContainer}>
        <MiniDataInfo
          title={""}
          text={<></>}
          whiteLine={<div className={styles.whiteLine}></div>}
          icon={<FaCheckCircle className={styles.icon} />}
        />
        <MiniDataInfo
          icon={<FaCheckCircle className={styles.icon} />}
          title={"ALTA DISPONIBILIDAD"}
          text={
            <>
              Soluciones diseñadas para<br></br>
              asegurar la continuidad operativa
            </>
          }
          whiteLine={<div className={styles.whiteLine}></div>}
        />
        <MiniDataInfo
          icon={<FaCheckCircle className={styles.icon} />}
          title={"SERVICIO"}
          text={
            <>
              Personal experto disponible 7x24 <br></br>
              para mantener funcionando <br></br>
              lo que no se puede detener
            </>
          }
        />
      </div>
    </div>
  );
};

export default BoxDataPercentage;
