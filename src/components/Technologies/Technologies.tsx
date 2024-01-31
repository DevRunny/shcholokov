import styles from "./Technologies.module.css";
import unity from "../../images/unity-icon.png";
import arduino from "../../images/arduino-icon.png";
import adobe from "../../images/adobe-logo.png";
import blender from "../../images/blender-icon.png";
import touchDesigner from "../../images/touch-designer-icon.png";
import { useShowConentInView } from "../../hook/showConentInView";


const Technologies: React.FC = () => {
  const { showContent, ref } = useShowConentInView();

  return (
    <div ref={ref} style={showContent} className={styles.technologies}>
        <div className={"container"}>
          <div className={styles.technologiesWrapper}>
            <div className={styles.technologiesList}>
              <span>
                <img src={unity} alt={"unity"} />
                <img src={arduino} alt={"arduino"} />
                <img src={adobe} alt={"adobe"} />
                <img src={blender} alt={"blender"} />
                <img src={touchDesigner} alt={"touchDesigner"} />
              </span>
              <span>
                <img src={unity} alt={"unity"} />
                <img src={arduino} alt={"arduino"} />
                <img src={adobe} alt={"adobe"} />
                <img src={blender} alt={"blender"} />
                <img src={touchDesigner} alt={"touchDesigner"} />
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Technologies;
