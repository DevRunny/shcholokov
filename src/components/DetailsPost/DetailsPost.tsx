import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DetailsPost.module.css";
import { useEffect, useRef } from "react";
import posts from "../../posts.json";
import { Routes } from "../../router/router";
import classNames from "classnames";

export const DetailsPost: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split("/")[3];
  const overlayRef = useRef<HTMLDivElement>(null);

  const defaultDocumentTitle = "Александр Щёлоков";

  const post = posts.videoPosts.find(
    (videoPost) => videoPost.alias === pathname
  );

  useEffect(() => {
    document.title = post?.title || defaultDocumentTitle;
    document.body.style.overflow = "hidden";
  }, [post?.title]);

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      navigate(Routes.MAIN);
      document.title = defaultDocumentTitle;
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => onClickOverlay(e)}
      className={styles.overlay}
    >
      <div className={styles.detailsPost}>
        <span
          className={styles.detailsPostCloseButton}
          onClick={() => {
            navigate(Routes.MAIN);
            document.title = "Александр Щёлоков";
            document.body.style.overflow = "visible";
          }}
        >
          <svg
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.4585"
              y="0.271973"
              width="34"
              height="8%"
              transform="rotate(45 1.4585 0.271973)"
              rx="4%"
              fill="#ffffff"
            />
            <rect
              x="0.5"
              y="24.3137"
              width="34"
              height="8%"
              transform="rotate(-45 0.5 24.3137)"
              rx="4%"
              fill="#ffffff"
            />
          </svg>
        </span>
        <div className={styles.detailsPostVideoContent}>
          <h3>«{post?.title}»</h3>
          <iframe
            src={`${post?.linkYouTube}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className={styles.detailsPostVideoTags}>
            {post?.tags.map((tag) => {
              return (
                <div
                  className={classNames(
                    styles.detailsPostVideoTag,
                    `${tag === "C#" ? tag.replace("#", "sharp") : tag}_tag`
                  )}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.detailsPostDescription}>
          <h4>Описание</h4>
          <div className={styles.detailsPostDescriptionParagraphs}>
            {post?.description.map((paragraph) => {
              return (
                <p
                  key={paragraph.id}
                  dangerouslySetInnerHTML={{ __html: paragraph.paragraph }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
