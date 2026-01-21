import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./views/landing/Landing";
import Nosotros from "./views/nosotros/Nosotros";
import SolucionesView from "./views/soluciones/SolucionesView";
import Climatizacion from "./views/soluciones/climatizacion/Climatizacion";
import Seguridad from "./views/soluciones/seguridad/Seguridad";
import IndustriaFourDotZero from "./views/soluciones/industria4.0/IndustriaFourDotZero";
import Contacto from "./views/contacto/Contacto";
import Sectores from "./views/sectores/Sectores";
import Voyant365 from "./views/voyant365/Voyant365";
import { FooterVoyant } from "./components/footer/FooterVoyant";
import DataCenters from "./views/sectores/datacenters/DataCenters";
import Mineria from "./views/sectores/mineria/Mineria";
import IndustriaElectrica from "./views/sectores/industria-electrica/IndustriaElectrica";
import Industria from "./views/sectores/Industria/Industria";
import Telecomunicaciones from "./views/sectores/telecomunicaciones/Telecomunicaciones";
import DistribucionRespaldoEnergia from "./views/soluciones/distribucion-respaldo-energia/DistribucionRespaldoEnergia";
import BlogPost from "./views/blog-post/BlogPost";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { AuthProvider } from "./context/AuthProvider";
import GestionDeLaEnergia from "./views/soluciones/gestion-de-la-energia/GestionDeLaEnergia";
import OtrosSectores from "./views/sectores/otros-sectores/OtrosSectores";
import BurguerMenu from "./components/burguer-menu/BurguerMenu";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./views/admin/Dashboard";
import Profile from "./components/profile/Profile";
import AdminLayout from "./views/admin/AdminLayout";
import PostEditor from "./components/postEditor/PostEditor";
import { UsersTableComponent } from "./components/usersTableComponent/UsersTableComponent";
import { UserFormCreateWrapper } from "./components/userForm/UserFormCreateWrapper";
import { UserFormEditWrapper } from "./components/userForm/UserFormEditWrapper";
import ProtectedRoute from "./components/portected-route/ProtectedRoute";
import UserLayout from "./views/user/UserLayout";
import UserDashboard from "./views/user/UserDashboard";
import PublicProfile from "./components/public-profile/PublicProfile";
import ResetPassword from "./components/resetPassword/ResetPassword";
import CookieBanner from "./components/cookieBanner/CookieBanner";


function App() {
  const location = useLocation();

  // Modificar la condición para incluir rutas de usuario
  const isAuthenticatedRoute = location.pathname.startsWith("/admin") || 
                             location.pathname.startsWith("/user");

  const text = `
  <br>  
  En VOYANT, nos dedicamos a proporcionar soluciones de infraestructura crítica adaptadas a las necesidades únicas de diversos sectores.<br>
    No importa en qué industria te desarrolles, nuestro equipo está preparado para entender tus desafíos específicos y equiparte con la tecnología más avanzada en energía, climatización y seguridad.<br>
    Nuestras soluciones están diseñadas no solo para maximizar la eficiencia y la confiabilidad, sino también para impulsar la innovación en tu campo.<br><br>
    Descubre cómo estamos contribuyendo en la transformación de tu sector y cómo podemos ayudar a preparar tu empresa para un futuro sin límites.
  `;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <AuthProvider>
          {/* Cambiar isAdminRoute por isAuthenticatedRoute */}
          {!isAuthenticatedRoute && <NavBar />}
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route
              path="/soluciones"
              element={<SolucionesView childComponent={<BurguerMenu />} />}
            ></Route>
            <Route
              path="/soluciones/distribucion-respaldo-de-energia"
              element={<DistribucionRespaldoEnergia />}
            ></Route>
            <Route path="/soluciones/climatizacion" element={<Climatizacion />} />
            <Route path="/soluciones/seguridad" element={<Seguridad />} />
            <Route path="/soluciones/industria4.0" element={<IndustriaFourDotZero />} />
            <Route path="/soluciones/gestion-de-la-energia" element={<GestionDeLaEnergia />} />
            <Route
              path="/sectores"
              element={<Sectores childComponent={<BurguerMenu />} parrafo={text} />}
            ></Route>
            <Route path="/data-centers" element={<DataCenters />}></Route>
            <Route path="/mineria" element={<Mineria />}></Route>
            <Route path="/industria-electrica" element={<IndustriaElectrica />}></Route>
            <Route path="/industria" element={<Industria />}></Route>
            <Route path="/voyant365" element={<Voyant365 />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/telecomunicaciones" element={<Telecomunicaciones />}></Route>
            <Route path="/otros-sectores" element={<OtrosSectores />}></Route>
            <Route path="/profile/:id" element={<PublicProfile/>}></Route>
            <Route path="/users/resetPassword/:token" element={<ResetPassword />} />

            {/* Blog público */}
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas privadas admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="blog/create" element={<PostEditor />} />
              <Route path="manage-users" element={<UsersTableComponent />} />
              <Route path="create-user" element={<UserFormCreateWrapper />} />
              <Route path="edit-user/:id" element={<UserFormEditWrapper />} />
            </Route>

          <Route path="/user" element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>

          </Routes>
          
          {!isAuthenticatedRoute && <FooterVoyant />}
          {!isAuthenticatedRoute && <CookieBanner />}

        </AuthProvider>
      </div>
      
      {/* ToastContainer para notificaciones */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
