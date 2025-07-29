import { Link } from "react-router-dom";
import styles from "./LogoBackButton.module.css"

const LogoBackButton = () => {
  return (
    <>
      <Link to="/" className={styles.link}>
        <img src="/logoVoyantColor.svg" className={styles.logo} />
      </Link>
    </>
  );
};

export default LogoBackButton;
