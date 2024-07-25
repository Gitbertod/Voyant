import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing";
import Nosotros from "./views/Nosotros";
import Soluciones from "./views/Soluciones";
import Climatizacion from "./views/Climatizacion"
import Seguridad from "./views/Seguridad"
import IndustriaFourDotZero from "./views/IndustriaFourDotZero";
import Contacto from "./views/Contacto";
import Sectores from "./views/Sectores";
import Voyant365 from "./views/Voyant365";

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
    </>
  );
}

export default App;
