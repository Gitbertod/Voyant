import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./views/landing/Landing";
import Nosotros from "./views/nosotros/Nosotros";
import Soluciones from "./views/soluciones/Soluciones";
import Climatizacion from "./views/soluciones/climatizacion/Climatizacion"
import Seguridad from "./views/soluciones/seguridad/Seguridad"
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
import LogoBackButton from "./components/logo-back-button/LogoBackButton";
import BlogPost from "./views/blog-post/BlogPost";
import BlogPostForm from "./components/blog-post-form/BlogPostForm";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/portected-route/ProtectedRoute";
import GestionDeLaEnergia from "./views/soluciones/gestion-de-la-energia/GestionDeLaEnergia";
import OtrosSectores from "./views/sectores/otros-sectores/OtrosSectores";
import BurguerMenu from "./components/burguer-menu/BurguerMenu";


function App() {
  const text = `
  <br>  
  En VOYANT, nos dedicamos a proporcionar soluciones de infraestructura crítica adaptadas a las necesidades únicas de diversos sectores.<br>
    No importa en qué industria te desarrolles, nuestro equipo está preparado para entender tus desafíos específicos y equiparte con la tecnología más avanzada en energía, climatización y seguridad.<br>
    Nuestras soluciones están diseñadas no solo para maximizar la eficiencia y la confiabilidad, sino también para impulsar la innovación en tu campo.<br><br>
    Descubre cómo estamos contribuyendo en la transformación de tu sector y cómo podemos ayudar a preparar tu empresa para un futuro sin límites.
  `;

  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/soluciones" element={<Soluciones childComponent={<BurguerMenu/>}/>}></Route>
        <Route path="/soluciones/distribucion-respaldo-de-energia" element={<DistribucionRespaldoEnergia></DistribucionRespaldoEnergia>}></Route>
        <Route path="/soluciones/climatizacion" element={<Climatizacion/>}></Route>
        <Route path="/soluciones/seguridad" element={<Seguridad/>}></Route>
        <Route path="/soluciones/industria4.0" element={<IndustriaFourDotZero/>}></Route>  
        <Route path="/soluciones/gestion-de-la-energia" element={<GestionDeLaEnergia/>}></Route>  
        <Route path="/sectores" element={<Sectores childComponent={<BurguerMenu />} parrafo={text}/>}></Route>
        <Route path="/data-centers" element={<DataCenters/>}></Route>
        <Route path="/mineria" element={<Mineria/>}></Route>
        <Route path="/industria-electrica" element={<IndustriaElectrica/>}></Route>
        <Route path="/industria" element={<Industria/>}></Route>
        <Route path="/voyant365" element={<Voyant365/>}></Route>
        <Route path="/contacto" element={<Contacto childComponent={<LogoBackButton/>}/>}></Route>
        <Route path="/telecomunicaciones" element={<Telecomunicaciones/>}></Route>
        <Route path="/otros-sectores" element={<OtrosSectores/>}></Route>
        <Route path="/blog" element={<BlogPost/>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
        
          <Route path="/blog/create" element={
            <ProtectedRoute>
              <BlogPostForm/>
            </ProtectedRoute>
            }></Route>
       
        
        <Route path ="/register" element={<Register></Register>}></Route>
      </Routes>
      <FooterVoyant/>

      </AuthProvider>

    </div>

    </div>
    </>
  );
}

export default App;
