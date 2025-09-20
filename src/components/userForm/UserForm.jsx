import { useEffect, useState } from "react";
import { UserAvatarSection } from "./UserAvatarSection";
import { UserPersonalInfo } from "./UserPersonalInfo";
import { UserContactInfo } from "./UserContactInfo";
import { UserLocationInfo } from "./UserLocationInfo";
import { useParams } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import api from "../../api";
import { UserJobInfo } from "./UserJobInfo";
import { UserSecurityInfo } from "./UserSecurityInfo";
import { FormActions } from "./FormActions";

export function UserForm({
  mode = "create",
  initialData = {},
  onSubmit,
  onCancel,
}) {
  const { id } = useParams(); // Obtiene el id de la URL
  const [form, setForm] = useState({
    name: {
      first: "",
      last: "",
    },
    dni: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    birthDate: "",
    jobDate: "",
    department: "",
    position: "",
    role: "user",
    picture: "",
    password: "",
    passwordConfirm: "",
    ...initialData,
  });

  const [preview, setPreview] = useState(
    initialData?.picture || "/default-avatar-icon.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const options = countryList().getData();

  // Convierte ISO a YYYY-MM-DD
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  // Si estamos en modo edición y hay id, obtenemos los datos del usuario
  useEffect(() => {
    if (mode === "edit" && id) {
      setLoading(true);
      api
        .get(`/users/${id}`)
        .then((res) => {
          const user = res.data.data;
          setForm({
            name: {
              first: user.name?.first || "",
              last: user.name?.last || "",
            },
            email: user.email || "",
            phone: user.phone || "",
            country: user.country || "",
            city: user.city || "",
            birthDate: formatDate(user.birthDate),
            jobDate: formatDate(user.jobDate),
            department: user.department || "",
            position: user.position || "",
            role: user.role || "user",
            picture: user.picture || "",
            password: "",
            passwordConfirm: "",
          });
          setPreview(user.picture || "/default-avatar-icon.jpg");
        })
        .catch(() => setError("No se pudo cargar el usuario"))
        .finally(() => setLoading(false));
    }
  }, [mode, id]);

  // handleChange (genérico, sirve para inputs simples)
  const handleChange = (e) => {
  const { name, value } = e.target;

  // soporta valores anidados con "name.first"
  if (name.includes(".")) {
    const [parent, child] = name.split(".");
    setForm((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value,
      },
    }));
  } else {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  // Manejo de país
  const handleCountryChange = (option) => {
    setForm((prev) => ({
      ...prev,
      country: option ? option.value : "",
    }));
  };

  // Manejo de foto
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Subida a Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "voyant_users");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/voyant/image/upload",
      { method: "POST", body: data }
    );
    const json = await res.json();
    return json.secure_url;
  };

  // Guardar datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let photoUrl = form.picture;
      if (form.picture instanceof File) {
        photoUrl = await uploadToCloudinary(form.picture);
      }
      const payload = {
        name: {
          first: form.name.first,
          last: form.name.last,
        },
        email: form.email,
        phone: form.phone,
        country: form.country,
        city: form.city,
        birthDate: form.birthDate,
        jobDate: form.jobDate,
        department: form.department,
        position: form.position,
        role: form.role,
        picture: photoUrl
      };

      if (onSubmit) {
        await onSubmit(payload);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Error al crear usuario"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
        {mode === "create" ? "Agregar nuevo usuario" : "Editar usuario"}
      </h2>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
      )}

      {/* Avatar */}
      <UserAvatarSection
        preview={preview}
        handlePhotoChange={handlePhotoChange}
      />

      {/* Grid de inputs */}
      <UserPersonalInfo form={form} handleChange={handleChange} />
      <UserContactInfo form={form} handleChange={handleChange} />
      <UserLocationInfo
        form={form}
        handleChange={handleChange}
        handleCountryChange={handleCountryChange}
        options={options}
      />
      <UserJobInfo form={form} handleChange={handleChange} />
      <UserSecurityInfo form={form} handleChange={handleChange} mode={mode} />
      <FormActions></FormActions>
    </form>
  );
}
