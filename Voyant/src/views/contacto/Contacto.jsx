import ContactoForm from "../../components/form-contacto/ContactoForm";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Contacto.module.css"

const Contacto = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className={styles.contactoContainer}>
        <div className="flex">
          <div>
            
            <h2>Contacto</h2>
            <h3>Direccion</h3>
            <h3>Teléfono</h3>
            <h3>Mail</h3>
          </div>
        <ContactoForm></ContactoForm>
        </div>
        
      </div>
    </>
  );
};

export default Contacto;
