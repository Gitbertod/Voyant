import { useEffect, useState } from "react";
import { UserAvatarSection } from "./UserAvatarSection";
import { UserPersonalInfo } from "./UserPersonalInfo";
import { UserContactInfo } from "./UserContactInfo";
import { UserLocationInfo } from "./UserLocationInfo";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [form, setForm] = useState({
    name: {
      first: "",
      last: "",
    },
    dni: "",
    email: "",
    phone: "",
    country: "",
    countryId: null,
    state: "",
    stateId: null,
    city: "",
    birthDate: "",
    jobDate: "",
    department: "", // 👈 CORREGIDO
    departmentName: "", // 👈 AGREGADO
    position: "", // 👈 CORREGIDO
    positionName: "", // 👈 AGREGADO
    role: "user",
    status: "active", // 👈 CORREGIDO (string ahora)
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

  // Estados para los IDs de país, estado y ciudad
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);

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
            dni: user.dni || "",
            email: user.email || "",
            phone: user.phone || "",
            country: user.country || "",
            countryId: user.countryId || null,
            state: user.state || "",
            stateId: user.stateId || null,
            city: user.city || "",
            birthDate: formatDate(user.birthDate),
            jobDate: formatDate(user.jobDate),
            department: user.department?._id || user.department || "", // 👈 CORREGIDO
            departmentName: user.departmentName || "", // 👈 AGREGADO
            position: user.position || "", // 👈 CORREGIDO
            positionName: user.positionName || "", // 👈 AGREGADO
            role: user.role || "user",
            status: user.status || "active", // 👈 CORREGIDO
            picture: user.picture || "",
            password: "",
            passwordConfirm: "",
          });
          setPreview(user.picture || "/default-avatar-icon.jpg");
          
          // Establecer los IDs si existen
          if (user.countryId) setCountryId(user.countryId);
          if (user.stateId) setStateId(user.stateId);
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
  const handleCountryChange = (selectedCountry) => {
    if (selectedCountry) {
      setCountryId(selectedCountry.id);
      setForm((prev) => ({
        ...prev,
        country: selectedCountry.name,
        countryId: selectedCountry.id,
        state: "",
        stateId: null,
        city: "",
      }));
      setStateId(null);
    } else {
      setCountryId(null);
      setStateId(null);
      setForm((prev) => ({
        ...prev,
        country: "",
        countryId: null,
        state: "",
        stateId: null,
        city: "",
      }));
    }
  };

  // Manejo de estado
  const handleStateChange = (selectedState) => {
    if (selectedState) {
      setStateId(selectedState.id);
      setForm((prev) => ({
        ...prev,
        state: selectedState.name,
        stateId: selectedState.id,
        city: "",
      }));
    } else {
      setStateId(null);
      setForm((prev) => ({
        ...prev,
        state: "",
        stateId: null,
        city: "",
      }));
    }
  };

  // Manejo de ciudad
  const handleCityChange = (selectedCity) => {
    if (selectedCity) {
      setForm((prev) => ({
        ...prev,
        city: selectedCity.name,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        city: "",
      }));
    }
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
    data.append("upload_preset", "voyantPreset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvihibg5k/image/upload",
      { method: "POST", body: data }
    );
    const json = await res.json();
    return json.secure_url;
  };

  // 👇 GUARDAR DATOS (CORREGIDO)
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
        dni: form.dni,
        email: form.email,
        status: form.status, // 👈 CORREGIDO (ahora es string)
        phone: form.phone,
        country: form.country,
        countryId: form.countryId,
        state: form.state,
        stateId: form.stateId,
        city: form.city,
        birthDate: form.birthDate,
        jobDate: form.jobDate,
        department: form.department, // 👈 CORREGIDO
        departmentName: form.departmentName, // 👈 AGREGADO
        position: form.position, // 👈 CORREGIDO
        positionName: form.positionName, // 👈 AGREGADO
        role: form.role,
        picture: photoUrl,
      };

      // Solo añadir password si el usuario los llenó
      if (form.password && form.passwordConfirm) {
        payload.password = form.password;
        payload.passwordConfirm = form.passwordConfirm;
      }

      if (onSubmit) {
        await onSubmit(payload);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Error al guardar usuario"
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
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-lg">
          {error}
        </div>
      )}

      {/* Avatar */}
      <UserAvatarSection
        preview={preview}
        handlePhotoChange={handlePhotoChange}
        userId={mode === "edit" ? id : null}
      />

      {/* Grid de inputs */}
      <UserPersonalInfo form={form} handleChange={handleChange} />
      <UserContactInfo form={form} handleChange={handleChange} />
      <UserLocationInfo
        form={form}
        handleCountryChange={handleCountryChange}
        handleStateChange={handleStateChange}
        handleCityChange={handleCityChange}
        countryId={countryId}
        stateId={stateId}
      />
      <UserJobInfo form={form} handleChange={handleChange} />
      <UserSecurityInfo form={form} handleChange={handleChange} mode={mode} />
      
      {/* Botones de acción */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <FormActions loading={loading} mode={mode} />
      </div>
    </form>
  );
}