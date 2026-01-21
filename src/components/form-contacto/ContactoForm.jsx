import styles from "./ContactoForm.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactoForm = () => {
  const form = useRef();

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

  const validate = () => {
    const { user_name, user_email, message } = values;
    const nameValid = /^[a-zA-Z\s]{2,30}$/.test(user_name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email);
    const messageValid = message.trim().length > 0;

    setErrors({
      user_name: !nameValid,
      user_email: !emailValid,
      message: !messageValid,
    });

    return nameValid && emailValid && messageValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();

    const formValid = validate();

    if (!acceptPrivacy) {
      setPrivacyError(true);
    }

    if (formValid && acceptPrivacy) {
      sendEmail();
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos correctamente y acepte la Política de Privacidad.",
        icon: "error",
      });
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_obc435d", "template_7nxofi3", form.current, {
        publicKey: "uwvK8fEa7bjaGHtJa",
      })
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            title: "Mensaje enviado con éxito",
            icon: "success",
          });
          setValues({ user_name: "", user_email: "", message: "" });
          setErrors({ user_name: false, user_email: false, message: false });
          setAcceptPrivacy(false);
          setPrivacyError(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar el mensaje.",
            icon: "error",
          });
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={handleForm} className={styles.form}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
          Formulario de contacto
        </h5>

        <div className={styles.field}>
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            value={values.user_name}
            onChange={handleInputChange}
            className={errors.user_name ? styles.error : ""}
          />
          {errors.user_name && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un nombre válido (2-30 caracteres).
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={values.user_email}
            onChange={handleInputChange}
            className={errors.user_email ? styles.error : ""}
          />
          {errors.user_email && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un correo electrónico válido.
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label>Mensaje</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleInputChange}
            className={errors.message ? styles.error : ""}
          />
          {errors.message && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un mensaje.
            </span>
          )}
        </div>

        <div className={styles.field}>
          <input type="submit" value="Enviar" className={styles.button} />
        </div>


        {/* Texto legal */}
        <p className={styles.legalText}>
          Al enviar este formulario, autorizas a VOYANT a tratar tus datos para
          responder tu solicitud y hacer seguimiento. Puedes ejercer tus
          derechos escribiendo a{" "}
          <a href="mailto:ventas@voyant.pe">ventas@voyant.pe</a>. Más información
          en nuestra{" "}
          <a href="/politica-de-privacidad" target="_blank" rel="noreferrer">
            Política de Privacidad
          </a>.
        </p>
        {/* Checkbox de política */}
        <div className={styles.privacy}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={(e) => {
                setAcceptPrivacy(e.target.checked);
                setPrivacyError(false);
              }}
            />
            <span>
              He leído y acepto la{" "}
              <a href="/politica-de-privacidad" target="_blank" rel="noreferrer">
                Política de Privacidad
              </a>
            </span>
          </label>

          {privacyError && (
            <span className={styles.errorMsg}>
              Debe aceptar la Política de Privacidad.
            </span>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactoForm;
