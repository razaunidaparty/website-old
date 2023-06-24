import Image, { ImageProps, StaticImageData } from "next/image";
import React, { FC } from "react";

import styles from "./Cover.module.scss";

interface CoverProps extends ImageProps {
  title: string;
  src: string | StaticImageData;
  alt: string;
  theme?: "dark" | "light";
}

const Cover: FC<CoverProps> = ({
  title,
  src,
  alt,
  theme = "light",
  ...props
}) => {
  const containerStyles = {
    "--cover-bg": `url(${src})`,
  } as React.CSSProperties;

  return (
    <div
      className={styles.container}
      {...props}
      data-theme={theme === "dark" ? "dark" : "light"}
      style={containerStyles}
    >
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Cover;
