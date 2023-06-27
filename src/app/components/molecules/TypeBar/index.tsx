import React from "react";
import styles from "./TypeBar.module.scss";

const TypeBar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.type}>Chicano</span>
        <span className={styles.type}>La Raza Unida Party</span>
        <span className={styles.type}>Aztlán</span>
      </div>
    </section>
  );
};

export default TypeBar;
