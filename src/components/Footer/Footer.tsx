import styles from "./Footer.module.css";
import qrCode from "../../images/qr-code.png";
import classNames from "classnames";
import { useShowConentInView } from "../../hook/showConentInView";

const Footer: React.FC = () => {
  const { showContent, ref } = useShowConentInView();

  return (
    <footer style={showContent} ref={ref} id="footer" className={styles.footer}>
      <div className={classNames(styles.footerContent, "container")}>
        <a href={"https://t.me/scholok"} target={"_blank"}>
          <img
            className={styles.qrCode}
            src={qrCode}
            alt="https://t.me/scholok"
          />
        </a>
        <span>АЛЕКСАНДР ЩЁЛОКОВ — РАЗРАБОТЧИК ИНТЕРАКТИВНЫХ РЕШЕНИЙ </span>
        <p>
          app created by{" "}
          <a href={"https://t.me/runaway4uk"} target={"_blank"}>
            Runaway4uk
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
