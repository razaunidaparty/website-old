"use client";

import { FC, useEffect, useState } from "react";

import ReactPlayer from "react-player";
import { Skeleton } from "@chakra-ui/react";
import { VideoProps } from "./Video.types";
import classNames from "classnames";
import styles from "./Video.module.scss";

const Video: FC<VideoProps> = ({
  platform,
  id,
  className,
  settings,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {isLoaded ? (
        <ReactPlayer
          {...settings}
          controls
          playing
          style={{
            borderRadius: "8px",
            overflow: "hidden",
          }}
          // width="100%"
          // light="img/main-page/image.webp"
          url={`https://vimeo.com/${id}`}
          config={{
            vimeo: {
              title: "Title",
            },
          }}
        />
      ) : (
        <Skeleton width={640} height={360} />
      )}
    </div>
  );
};

export default Video;
