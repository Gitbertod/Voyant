import bgvideo2 from "../../assets/videobg.mov";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className="main">
      
        <div className="overlay"></div>
        <video src={bgvideo2} autoPlay loop muted></video>
      
    </div>
  );
};

export default Main;
