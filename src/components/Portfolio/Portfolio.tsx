import React from "react";
import styles from "./Portfolio.module.css";
import classNames from "classnames";
import { VideoPostComponent } from "./VideoPostComponent/VideoPostComponent";
import posts from "../../posts.json";
import { useShowConentInView } from "../../hook/showConentInView";

const Portfolio: React.FC = () => {
  const { showContent, ref } = useShowConentInView();

  return (
    <section style={showContent} ref={ref} id="portfolio">
      <div className={classNames(styles.portfolio, "container")}>
        <h2>Портфолио</h2>
        <div className={styles.videoPosts}>
          {posts.videoPosts.map((videoPost) => {
            return <VideoPostComponent key={videoPost.id} {...videoPost} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
