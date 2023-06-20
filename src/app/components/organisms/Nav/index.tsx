"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ButtonGroup,
  Button as ChakraButton,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import nav, { INavItem, TNavChildItem } from "@/app/data/nav";

import Button from "@components/atoms/Button";
import { IoCloseCircle as CloseIcon } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { CgMenuLeftAlt as MenuIcon } from "react-icons/cg";
import { fadeInFromBottom } from "@/app/motion/generic";
import { headerNav as headerNavAtom } from "@/app/state/navAtom";
import styles from "./Nav.module.scss";
import { useRecoilState } from "recoil";

const Nav = () => {
  const [showHeaderNav, setShowHeaderNav] = useRecoilState(headerNavAtom);
  const [dropdown, setDropdown] = useState<number | undefined>(undefined);

  const handleHeaderNavToggle = () => {
    setShowHeaderNav(!showHeaderNav);
  };

  const toggleDropdown = (parentId: number) => {
    if (dropdown === parentId) {
      setDropdown(undefined);
    } else {
      setDropdown(parentId);
    }
  };

  // Navigation Items
  const navItems = nav.map((item) => (
    <li
      key={item.id}
      className={styles.navItems}
      onMouseEnter={() => toggleDropdown(item.id)}
      onMouseLeave={() => toggleDropdown(item.id)}
    >
      <Link href={item.href}>{item.label}</Link>
      <AnimatePresence mode="wait">
        {dropdown === item.id && <Dropdown data={item.children} />}
      </AnimatePresence>
    </li>
  ));
  return (
    <nav id={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.primaryNavItems}>
          <li className={styles.menu}>
            <button onClick={handleHeaderNavToggle}>
              <AnimatePresence mode="wait">
                {showHeaderNav ? (
                  <motion.span
                    variants={fadeInFromBottom}
                    initial={"hidden"}
                    animate={"show"}
                    exit={"hidden"}
                    layout
                    key="openHeaderNav"
                  >
                    <CloseIcon />
                  </motion.span>
                ) : (
                  <motion.span
                    variants={fadeInFromBottom}
                    initial={"hidden"}
                    animate={"show"}
                    exit={"hidden"}
                    layout
                    key="closeHeaderNav"
                  >
                    <MenuIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
          {navItems}
        </ul>
        <picture className={styles.logo}>
          <Link href="/">
            <Image
              src={"/gfx/PNLRU.png"}
              alt="Partido Nacional de la Raza Unida Party"
              width="170"
              height="100"
            />
          </Link>
        </picture>
        <div className={styles.btns}>
          <ButtonGroup>
            <Link href="/members">
              <Button theme="outline">Members</Button>
            </Link>
            <Link href="/donate">
              <Button>Donate</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ data }: { data: INavItem[] }) => {
  return data.length > 0 ? (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      className={styles.subNavWrapper}
    >
      <ul className={styles.subNavItems}>
        {data.map((child: TNavChildItem) => (
          <li key={child.id}>
            <Link href={child.href}>{child.label}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  ) : null;
};

export default Nav;
