import React from 'react'
import styles from './LoadingSpinner.module.css' 

const LoadingSpinner = () => {
  return (
    <div className={styles.loadWrapp}>
      <div className={styles.load9}>
        <p>Cargando...</p>
        <div className={styles.spinner}>
          <div className={styles.bubble1}></div>
          <div className={styles.bubble2}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner