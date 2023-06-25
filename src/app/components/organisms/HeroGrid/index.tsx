import React, { FC } from "react";

import ImageTile from "@components/molecules/ImageTile";
import styles from "./HeroGrid.module.scss";

interface HeroGridProps {}

const HeroGrid: FC<HeroGridProps> = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
      </div>
    </section>
  );
};

export default HeroGrid;
