import styles from "./ContactoForm.module.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import api from "../../api"; // 👈 Importar tu instancia de Axios

const ContactoForm = () => {
  const form = useRef();

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    pais: "Peru", // 👈 Nuevo campo con valor por defecto
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    pais: false,
    mensaje: false,
  });

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 Estado para loading

  const validate = () => {
    const { nombre, email, pais, mensaje } = values;
    const nameValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(nombre.trim());
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const paisValid = ["Peru", "Chile", "Ecuador"].includes(pais);
    const messageValid = mensaje.trim().length >= 10 && mensaje.trim().length <= 1000;

    setErrors({
      nombre: !nameValid,
      email: !emailValid,
      pais: !paisValid,
      mensaje: !messageValid,
    });

    return nameValid && emailValid && paisValid && messageValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();

    const formValid = validate();

    if (!acceptPrivacy) {
      setPrivacyError(true);
    }

    if (formValid && acceptPrivacy) {
      await sendEmail();
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos correctamente y acepte la Política de Privacidad.",
        icon: "error",
        confirmButtonColor: "#111827",
      });
    }
  };

  const sendEmail = async () => {
    setLoading(true); // Activar loading

    try {
      // 🔥 Llamada al backend usando tu instancia de Axios
      const response = await api.post("/contact", {
        nombre: values.nombre.trim(),
        email: values.email.trim(),
        pais: values.pais,
        mensaje: values.mensaje.trim(),
      });

      // ✅ Éxito (Axios maneja automáticamente status 2xx)
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: response.data.message || "Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonColor: "#111827",
      });

      // Limpiar formulario
      form.current.reset();
      setValues({ 
        nombre: "", 
        email: "", 
        pais: "Peru", 
        mensaje: "" 
      });
      setErrors({ 
        nombre: false, 
        email: false, 
        pais: false, 
        mensaje: false 
      });
      setAcceptPrivacy(false);
      setPrivacyError(false);

    } catch (error) {
      // ❌ Error del servidor o de red
      console.error("Error al enviar formulario:", error);
      
      // Axios guarda la respuesta del servidor en error.response
      const errorMessage = error.response?.data?.message || 
                          "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.";
      
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#111827",
      });
    } finally {
      setLoading(false); // Desactivar loading
    }
  };

  return (
    <>
      <form ref={form} onSubmit={handleForm} className={styles.form}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
          Formulario de contacto
        </h5>

        {/* Campo: Nombre */}
        <div className={styles.field}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleInputChange}
            className={errors.nombre ? styles.error : ""}
            disabled={loading}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.nombre && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un nombre válido (2-50 caracteres).
            </span>
          )}
        </div>

        {/* Campo: Email */}
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className={errors.email ? styles.error : ""}
            disabled={loading}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un correo electrónico válido.
            </span>
          )}
        </div>

        {/* Campo: País (NUEVO) */}
        <div className={styles.field}>
          <label>País</label>
          <select
            name="pais"
            value={values.pais}
            onChange={handleInputChange}
            className={errors.pais ? styles.error : ""}
            disabled={loading}
          >
            <option value="Peru">Perú 🇵🇪</option>
            <option value="Chile">Chile 🇨🇱</option>
            <option value="Ecuador">Ecuador 🇪🇨</option>
          </select>
          {errors.pais && (
            <span className={styles.errorMsg}>
              Por favor, seleccione un país válido.
            </span>
          )}
        </div>

        {/* Campo: Mensaje */}
        <div className={styles.field}>
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            value={values.mensaje}
            onChange={handleInputChange}
            className={errors.mensaje ? styles.error : ""}
            disabled={loading}
            placeholder="Escribe tu mensaje aquí (mínimo 10 caracteres)"
            rows="5"
          />
          {errors.mensaje && (
            <span className={styles.errorMsg}>
              Por favor, ingrese un mensaje válido (10-1000 caracteres).
            </span>
          )}
          <span className={styles.charCount}>
            {values.mensaje.length}/1000 caracteres
          </span>
        </div>

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
              disabled={loading}
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

        {/* Botón de envío */}
        <div className={styles.field}>
          <input
            type="submit"
            value={loading ? "Enviando..." : "Enviar"}
            className={`${styles.button} ${loading ? styles.buttonDisabled : ""}`}
            disabled={loading}
          />
        </div>
      </form>
    </>
  );
};

export default ContactoForm;