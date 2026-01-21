import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Usamos cookies para mejorar tu experiencia. Al continuar navegando
        aceptas nuestra{" "}
        <a href="/politica-de-privacidad" target="_blank" rel="noreferrer">
          Política de Privacidad
        </a>.
      </p>
      <button onClick={acceptCookies}>Aceptar</button>
    </div>
  );
};

export default CookieBanner;
