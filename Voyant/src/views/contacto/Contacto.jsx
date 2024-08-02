import ContactoForm from "../../components/form-contacto/ContactoForm";

import { Carousel } from "flowbite-react";


const Contacto = () => {
  return (
    <>
      

      <div>
        <div>
          <h2>Contacto</h2>
          <h3>Direccion</h3>
          <h3>Teléfono</h3>
          <h3>Mail</h3>
        </div>
        <ContactoForm></ContactoForm>
      </div>
    </>
  );
};

export default Contacto;
