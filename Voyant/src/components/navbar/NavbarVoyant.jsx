import styles from "./NavbarVoyant.module.css";

const NavbarVoyant = () => { 
  return (
    <div className={styles.container}>
      <div className={styles.voyantLogo}>
        <img src="logoVoyant.svg" alt="logo voyant"></img>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li className="">Nosotros</li>
          <li>Soluciones
            <ul>
              <li className={styles.optionNavBar}>Distribucion y respaldo de energía</li>
              <li>Climatizacion</li>
              <li>Seguridad</li>
              <li>Industria</li>
            </ul>
          </li>

          <li>Sectores</li>
          <li>VOYANT 365</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarVoyant;
