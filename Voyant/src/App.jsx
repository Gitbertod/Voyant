import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./views/landing/Landing";
import Nosotros from "./views/nosotros/Nosotros";
import Soluciones from "./views/soluciones/Soluciones";
import Climatizacion from "./views/climatizacion/Climatizacion"
import Seguridad from "./views/seguridad/Seguridad"
import IndustriaFourDotZero from "./views/industria4.0/IndustriaFourDotZero";
import Contacto from "./views/contacto/Contacto";
import Sectores from "./views/sectores/Sectores";
import Voyant365 from "./views/voyant365/Voyant365";
import { FooterVoyant } from "./components/footer/FooterVoyant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/soluciones" element={<Soluciones/>}></Route>
        <Route path="/soluciones/distribucion-respaldo-de-energia" element={<Soluciones/>}></Route>
        <Route path="/soluciones/climatizacion" element={<Climatizacion/>}></Route>
        <Route path="/soluciones/seguridad" element={<Seguridad/>}></Route>
        <Route path="/soluciones/industria4.0" element={<IndustriaFourDotZero/>}></Route>  
        <Route path="/sectores" element={<Sectores/>}></Route>
        <Route path="/voyant365" element={<Voyant365/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
      </Routes>
      <FooterVoyant/>
    </>
  );
}

export default App;
