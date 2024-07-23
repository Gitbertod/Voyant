import "./App.css";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
// import NavbarVoyant from "./components/navbar/NavbarVoyant";
import { BsFan } from "react-icons/bs";


function App() {
  return (
    <>
      {/* <NavbarVoyant></NavbarVoyant> */}
      <NavBar></NavBar>
      <Main></Main>
    </>
  );
}

export default App;
