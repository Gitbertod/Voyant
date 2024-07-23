import styles from "./NavBar.module.css";
import { BsFan } from "react-icons/bs";


const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.subnav}>
          <img src="logoVoyantColor.svg" className="sm:h-9" alt="Voyant Logo" />
          
        </div>
        
        <a href="#home">Nosotros</a>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            Soluciones <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <a href="#company">Distribución y respaldo de energía</a>
            
            <a href="#team">
            <BsFan className={styles.icon} />
              Climatizacion
            </a>
            <a href="#careers">Seguridad</a>
          </div>
        </div>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            Sectores <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <a href="#bring">Datacenters</a>
            <a href="#deliver">Minería</a>
            <a href="#package">Industria Eléctrica</a>
            <a href="#package">Industria Pesada</a>
            <a href="#express">Telecomunicaciones
            </a>
          </div>
        </div>
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            VOYANT 365 <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.subnavContent}>
            <div></div>
           
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Contacto</a>
      </div>
    </>
  );
};

export default NavBar;
