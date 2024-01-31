import React from "react";
import styles from "./VideoPostComponent.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  title: string;
  shortDescription: string;
  preview: string;
  tags: string[];
  alias: string;
}

export const VideoPostComponent: React.FC<IProps> = (props) => {
  const { id, title, shortDescription, preview, tags, alias } = props;

  return (
    <Link to={`/details-post/${alias}`}>
      <div key={id} className={styles.videoPost}>
        <div className={styles.videoPreview}>
          <img src={preview} alt={"previewPost"} />
          <div className={styles.videoTags}>
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    styles.videoTag,
                    `${tag === "C#" ? tag.replace("#", "sharp") : tag}_tag`
                  )}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <h3 className={styles.videoTitle}>«{title}»</h3>
        <p className={styles.videoShortDescription}>{shortDescription}</p>
      </div>
    </Link>
  );
};
