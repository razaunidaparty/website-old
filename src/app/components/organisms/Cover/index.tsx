import Image, { ImageProps } from "next/image";
import React, { FC } from "react";

import styles from "./Cover.module.scss";

interface CoverProps extends ImageProps {
  title: string;
  src: string;
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
  const titleStyles = {
    // Changes Title Color Based on Theme
    "--title-color": theme === "dark" ? "#fff" : "#000",
  } as React.CSSProperties;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title} style={titleStyles}>
          {title}
        </h1>
        {/* <Image src={src} alt={alt} width={500} height={500} {...props} /> */}
      </div>
    </div>
  );
};

export default Cover;
