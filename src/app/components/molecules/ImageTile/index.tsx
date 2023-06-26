"use client";

import { TbArrowUpRight as ArrowIcon } from "react-icons/tb";
import { ImageTileProps } from "./ImageTile.types";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import styles from "./ImageTile.module.scss";

const ImageTile = ({ title, cover, link, label }: ImageTileProps) => {
  const tileStyles = {
    "--tile-cover": `url(${cover})`,
  } as React.CSSProperties;

  return (
    <PrismicNextLink
      href={link.url}
      data-type="tile"
      className={styles.container}
      style={tileStyles}
    >
      <div className={styles.header}>
        <div className={styles.label}>
          {label && <span className={styles.chip}>{label}</span>}
        </div>
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </div>
      <div className={styles.footer}>
        <span className={styles.copy}>{title}</span>
      </div>
    </PrismicNextLink>
  );
};

ImageTile.displayName = "Image Tile";

export default ImageTile;
