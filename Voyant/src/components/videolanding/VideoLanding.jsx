import bgvideo2 from "../../assets/landing.mp4";
import styles from "./VideoLanding.module.css";
const VideoLanding = () => {
  return (
    <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video src={bgvideo2} autoPlay loop muted className={styles.video}></video>
    </div>
  );
};

export default VideoLanding;
