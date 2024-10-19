import { GrShieldSecurity } from "react-icons/gr";
import styles from "./BoxDataPercentage.module.css";
import MiniDataInfo from "../mini-datainfo/MiniDataInfo";
const BoxDataPercentage = () => {
  return (
    <div className={styles.slidebottom}>
      <div className={styles.dataInfoContainer}>
        <MiniDataInfo
          title={"EFICIENCIA"}
          text={
            <>
              Soluciones que optimizan<br></br>
              el uso de energia
            </>
          }
          whiteLine={<div className={styles.whiteLine}></div>}
        />
        <MiniDataInfo
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
