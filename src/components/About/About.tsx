import React from "react";
import styles from "./About.module.css";
import unity3d from "../../images/unity3d.png";
import coding from "../../images/coding.png";
import { useShowConentInView } from "../../hook/showConentInView";

const About: React.FC = () => {
  const { showContent, ref, inView } = useShowConentInView();

  return (
    <section
      style={showContent}
      ref={ref}
      id={"about"}
      className={styles.about}
    >
      <div style={showContent} className={"container"}>
        {inView ? <h2>Приветствую!</h2> : <></>}
        <div className={styles.aboutContent}>
          <div className={inView ? styles.aboutMain : ""}>
            <span>
              Меня зовут Александр Щелоков! Однажды я начал заниматься изучением
              интерактивных технологий и не смог остановиться!
            </span>
            <span>
              Интерактивные инсталляции - динамично развивающаяся отрасль.
              Проекты подобного рода активно используются во многих областях.
              Для меня изучение интерактивных технологий - отличный способ
              раскрыть свой потенциал в разработке приложений и создании
              инсталляций.
            </span>
            <span>
              В работе над проектами применяю различные виды датчиков и
              контроллеров: Kinect, LeapMotion, Wii Remote, веб-камера,
              микрофон, тач-дисплеи, проекционный мэппинг, датчики Arduino и др.
            </span>
          </div>
          <div className={inView ? styles.aboutTech : ""}>
            <div className={styles.aboutUnity}>
              <img src={unity3d} alt={"unity3d"} />
              <span>
                Основным инструментом в разработке является Unity3D. Движок
                способен объединять в себе массу различных технологий: AR, VR,
                OpenCV, AI для создания 2D/3D игр и интерактивных инсталляций.
              </span>
            </div>
            <div className={styles.aboutCode}>
              <img src={coding} alt={"coding"} />
              <span>C#, C++, JavaScript, Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
