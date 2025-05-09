import { dir } from "console";
import styles from "./Transitionbar.module.css"; // Import the CSS module

export default function Transitionbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Every skill you teach counts as <span className={styles.underline}>certified community service hours.</span>
      </div>
      <div style={
        {
           fontSize:"19px", 
           color:"white",
           textAlign:"center",
        }
      }>
        No skill is too niche. We'll match you with students who need exactly what you offer.
      </div>
      <div className={styles.missionContainer}>
        <div className={styles.mission}>
          OUR <br />
          MISSION
        </div>
        <div className={styles.missionText}>
          To unleash untapped student potential by turning learners into leaders through peer-to-peer education.
        </div>
      </div>
    </div>

  );
}
