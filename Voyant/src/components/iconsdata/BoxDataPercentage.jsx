import { GrShieldSecurity } from "react-icons/gr";
import styles from "./BoxDataPercentage.module.css"

const BoxDataPercentage = () => {
  return (
    <div className={styles.slidebottom}>
          <div className={styles.dataInfo}>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
              <div className={styles.whiteLine}></div>
            </div>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
              <div className={styles.whiteLine}></div>
            </div>
            <div className={styles.dataInfo}>
              <GrShieldSecurity className={styles.icon} />
              <div className={styles.containerData}>
                <p className={styles.porcentaje}>89%</p>
                <p className={styles.miniInfo}>
                  Optimizacion<br></br> de recursos
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default BoxDataPercentage