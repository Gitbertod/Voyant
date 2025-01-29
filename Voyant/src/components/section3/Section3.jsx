import React from 'react';
import styles from "./Section3.module.css"

const Section3 = ({children}) => {
  return (
    <div className={styles.fondo}>{children}</div>
  )
}

export default Section3