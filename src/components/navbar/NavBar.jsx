import styles from "./NavBar.module.css";
import { useState, useRef, useEffect } from "react";
import { BsFan } from "react-icons/bs";
import { HiCpuChip } from "react-icons/hi2";
import { GrShieldSecurity } from "react-icons/gr";
import { GiMining, GiArtificialIntelligence } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry, FaTowerCell } from "react-icons/fa6";
import { TbBatteryCharging2 } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";
import { LiaIndustrySolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { DrawerComponent } from "../drawer/DrawerComponent";

const NavBar = () => {
  const [isOpenSoluciones, setIsOpenSoluciones] = useState(false);
  const [isOpenSectores, setIsOpenSectores] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const solucionesTimeoutRef = useRef(null);
  const sectoresTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  // Detectar scroll para blur y ocultar/mostrar navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Aplicar blur cuando se hace scroll más de 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Ocultar navbar al hacer scroll hacia abajo, mostrar al subir
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll hacia abajo y pasó los 100px
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scroll hacia arriba
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSolucionesEnter = () => {
    if (solucionesTimeoutRef.current) {
      clearTimeout(solucionesTimeoutRef.current);
    }
    setIsOpenSoluciones(true);
    setIsOpenSectores(false);
  };
  
  const handleSolucionesLeave = () => {
    solucionesTimeoutRef.current = setTimeout(() => {
      setIsOpenSoluciones(false);
    }, 200); // Delay de 200ms antes de cerrar
  };
  
  const handleSectoresEnter = () => {
    if (sectoresTimeoutRef.current) {
      clearTimeout(sectoresTimeoutRef.current);
    }
    setIsOpenSectores(true);
    setIsOpenSoluciones(false);
  };
  
  const handleSectoresLeave = () => {
    sectoresTimeoutRef.current = setTimeout(() => {
      setIsOpenSectores(false);
    }, 200); // Delay de 200ms antes de cerrar
  };

  // Datos de soluciones
  const soluciones = [
    {
      path: "/soluciones/distribucion-respaldo-de-energia",
      icon: TbBatteryCharging2,
      title: "Distribución y respaldo de energía"
    },
    {
      path: "/soluciones/climatizacion",
      icon: BsFan,
      title: "Climatización"
    },
    {
      path: "/soluciones/seguridad",
      icon: GrShieldSecurity,
      title: "Seguridad"
    },
    {
      path: "/soluciones/industria4.0",
      icon: GiArtificialIntelligence,
      title: "Industria 4.0"
    },
    {
      path: "/soluciones/gestion-de-la-energia",
      icon: AiOutlineAreaChart,
      title: "Gestión de la energía"
    }
  ];

  // Datos de sectores
  const sectores = [
    {
      path: "/data-centers",
      icon: HiCpuChip,
      title: "Datacenters"
    },
    {
      path: "/mineria",
      icon: GiMining,
      title: "Minería"
    },
    {
      path: "/industria-electrica",
      icon: SlEnergy,
      title: "Industria Eléctrica"
    },
    // {
    //   path: "/industria",
    //   icon: FaIndustry,
    //   title: "Industria"
    // },
    // {
    //   path: "/telecomunicaciones",
    //   icon: FaTowerCell,
    //   title: "Telecomunicaciones"
    // },
    {
      path: "/otros-sectores",
      icon: LiaIndustrySolid,
      title: "Otros sectores"
    }
  ];

  // Componente reutilizable para items del menú
  const MenuItem = ({ item }) => {
    const Icon = item.icon;
    return (
      <Link to={item.path}>
        <div className={styles.slidebottom}>
          <div className={styles.category}>
            <Icon className={styles.icon} />
            {item.title}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}>
      <Link to="/">
        <img
          src="/logoVoyantColor.svg"
          className={styles.logoVoyant}
          alt="Voyant Logo"
        />
      </Link>
      
      <div className={styles.optionsNav}>
        <Link to="/nosotros" className={styles.link}>
          Nosotros
        </Link>
        
        {/* Menú Soluciones */}
        <div className={styles.subnav}>
          <button
            className={styles.subnavbtn}
            onMouseEnter={handleSolucionesEnter}
            onMouseLeave={handleSolucionesLeave}
          >
            <Link to="/soluciones">Soluciones</Link>
          </button>
          <div
            onMouseEnter={handleSolucionesEnter}
            onMouseLeave={handleSolucionesLeave}
            className={`${styles.subnavContent} ${
              isOpenSoluciones ? styles.showMenu : ""
            }`}
          >
            {soluciones.map((solucion, index) => (
              <MenuItem key={index} item={solucion} />
            ))}
          </div>
        </div>
        
        {/* Menú Sectores */}
        <div className={styles.subnav}>
          <button
            className={styles.subnavbtn}
            onMouseEnter={handleSectoresEnter}
            onMouseLeave={handleSectoresLeave}
          >
            <Link to="/sectores">Sectores</Link>
          </button>
          <div
            onMouseEnter={handleSectoresEnter}
            onMouseLeave={handleSectoresLeave}
            className={`${styles.subnavContent} ${
              isOpenSectores ? styles.showMenu : ""
            }`}
          >
            {sectores.map((sector, index) => (
              <MenuItem key={index} item={sector} />
            ))}
          </div>
        </div>
        
        {/* VOYANT 365 */}
        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>
            <Link to="/voyant365">VOYANT 365</Link>
          </button>
        </div>
        
        <Link to="/contacto" className={styles.link}>
          Contacto
        </Link>
      </div>
      
      <DrawerComponent />
    </div>
  );
};

export default NavBar;