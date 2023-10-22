"use client";

import { NavBase, headerNav } from "@data/nav";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { headerNav as headerNavAtom } from "@state/navAtom";
import { motion } from "framer-motion";
import styles from "./HeaderNav.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

export default function HeaderNav() {
  const showHeaderNav = useRecoilValue(headerNavAtom);
  const [navUnderline, setNavUnderline] = React.useState<number | undefined>(0);

  const [isMobile] = useMediaQuery("(min-width: 720px)");

  const handleUnderlineHover = (itemId: number) => {
    setNavUnderline(itemId);
  };

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
          onMouseLeave={() => setNavUnderline(undefined)}
        >
          <ul className={styles.wrapper}>
            {headerNav.map((item: NavBase) => {
              // Icon
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className={styles.item}
                  onMouseEnter={() => handleUnderlineHover(item.id)}
                >
                  <Link href={item.href}>
                    {item.label} <Icon />
                  </Link>
                  {item.id === navUnderline && isMobile ? (
                    <motion.span
                      key="underline"
                      id={styles.underline}
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
