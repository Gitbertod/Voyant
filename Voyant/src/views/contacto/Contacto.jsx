import { CardContact } from "../../components/CardContact/CardContact";
import ContactoForm from "../../components/form-contacto/ContactoForm";
import LogoBackButton from "../../components/logo-back-button/LogoBackButton";
import styles from "./Contacto.module.css";

const Contacto = ({childComponent}) => {
  return (
    <>
      <div className={styles.container}>
        {/* <NavBar></NavBar> */}
        {childComponent}
        <div className={styles.contactoContainer}>
          <h2 className={styles.contactoTitulo}>CONTACTO</h2>
          <p className={styles.contactoSubtitulo}>
            Bienvenido al portal de Solicitud de Información VOYANT. Nuestro
            servicio es rápido y su información es segura <br></br> no vendemos
            ni distribuimos su información a nadie.
          </p>
          <div className={styles.cards}>
            <CardContact />
            <div className={styles.formularioContainer}>
              <ContactoForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
