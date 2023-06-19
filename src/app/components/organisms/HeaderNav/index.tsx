"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { headerNav } from "@data/nav";
import { headerNav as headerNavAtom } from "@state/navAtom";
import { motion } from "framer-motion";
import styles from "./HeaderNav.module.scss";
import { useRecoilValue } from "recoil";

export default function HeaderNav() {
  const showHeaderNav = useRecoilValue(headerNavAtom);
  return (
    <AnimatePresence mode="wait">
      {showHeaderNav && (
        <motion.header
          key="headerNav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          layout
          className={styles.container}
        >
          <ul className={styles.wrapper}>
            {headerNav.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={item.href}>
                    {item.label} <Icon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
