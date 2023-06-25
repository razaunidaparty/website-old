import { TbArrowUpRight as ArrowIcon } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ImageTile.module.scss";

const ImageTile = (props: ImageTileProps) => {
  const tileStyles = {
    "--tile-cover":
      "url(https://images.prismic.io/razaunidaparty/690b2284-07f5-4073-8db1-6677b741bcab_documerica-REEMam8FQAQ-unsplash_1500x1010.jpg?auto=compress,format)",
  } as React.CSSProperties;
  return (
    <Link
      href="https://google.com"
      data-type="tile"
      className={styles.container}
      style={tileStyles}
    >
      <div className={styles.header}>
        <span className={styles.label}>Lorem Ipsum Dolor</span>
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
};

export default ImageTile;
