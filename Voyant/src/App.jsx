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

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/soluciones" element={<Soluciones/>}></Route>
        <Route path="/soluciones/distribucion-respaldo-de-energia" element={<DistribucionRespaldoEnergia></DistribucionRespaldoEnergia>}></Route>
        <Route path="/soluciones/climatizacion" element={<Climatizacion/>}></Route>
        <Route path="/soluciones/seguridad" element={<Seguridad/>}></Route>
        <Route path="/soluciones/industria4.0" element={<IndustriaFourDotZero/>}></Route>  
        <Route path="/sectores" element={<Sectores/>}></Route>
        <Route path="/data-centers" element={<DataCenters/>}></Route>
        <Route path="/mineria" element={<Mineria/>}></Route>
        <Route path="/industria-electrica" element={<IndustriaElectrica/>}></Route>
        <Route path="/industria" element={<Industria/>}></Route>
        <Route path="/voyant365" element={<Voyant365/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/telecomunicaciones" element={<Telecomunicaciones/>}></Route>
      </Routes>
      <FooterVoyant/>

    </div>

    </div>
    </>
  );
}

export default App;
