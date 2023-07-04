"use client";

import {
  FaFacebookSquare as FbIcon,
  FaInstagramSquare as InstaIcon,
} from "react-icons/fa";
import React, { useEffect } from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [year, setYear] = React.useState<number>(0);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.copyright}>&copy; {year} Raza Unida Party</p>

        <p className={styles.poweredBy}>¡Powered by La Raza!</p>

        <ul className={styles.social}>
          <li>
            <FbIcon />
          </li>
          <li>
            <InstaIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
