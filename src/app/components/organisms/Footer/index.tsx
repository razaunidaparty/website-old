"use client";

import {
  FaFacebookSquare as FbIcon,
  FaInstagramSquare as InstaIcon,
} from "react-icons/fa";

import React from "react";
import styles from "./Footer.module.scss";

async function Footer() {
  // const [year, setYear] = React.useState<number | undefined>(undefined);

  // useEffect(() => {
  //   const date = new Date();
  //   setYear(date.getFullYear());

  //   return () => {};
  // }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.copyright}>&copy; 2023 Raza Unida Party</p>

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
}

export default Footer;
