import React, { FC } from "react";

import Button from "@components/atoms/Button";
import Video from "@components/atoms/Video";
import { VideoProps } from "@components/atoms/Video/Video.types";
import styles from "./MediaCta.module.scss";

interface MediaCtaProps {
  video: VideoProps;
  title: string;
  description: string;
}

const MediaCta: FC<MediaCtaProps> = ({ video, title, description }) => {
  return (
    <article className={styles.container}>
      <div className={styles.wrap}>
        <Video id={video.id} className={styles.video} />
        <div className={styles.content}>
          <h2>{title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <Button
            style={{
              maxWidth: "fit-content",
              marginBlockStart: "1em",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default MediaCta;
