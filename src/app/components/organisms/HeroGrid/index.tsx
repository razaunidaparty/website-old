import React, { FC } from "react";

import ImageTile from "@components/molecules/ImageTile";
import { ImageTileProps } from "@components/molecules/ImageTile/ImageTile.types";
import styles from "./HeroGrid.module.scss";

interface HeroGridProps {
  data: ImageTileProps[];
}

const HeroGrid: FC<HeroGridProps> = ({ data }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {data.map((item) => (
          <ImageTile
            label={item.label}
            key={item.title}
            title={item.title}
            cover={item.cover}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

HeroGrid.displayName = "Hero Grid";

export default HeroGrid;
