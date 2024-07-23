import bgvideo2 from "../../assets/videobg.mov";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={bgvideo2} autoPlay muted></video>
      <div className="content">
        <img src="logoVoyantWhite.svg" className="sm:h-9" alt="Voyant Logo" />
        <h1>LAS MEJORES SOLUCIONES PARA TUS REQUERIMIENTOS</h1>
      </div>
    </div>
  );
};

export default Main;
