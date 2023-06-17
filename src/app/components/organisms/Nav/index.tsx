"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";

import Image from "next/image";
import { CgMenuLeftAlt as MenuIcon } from "react-icons/cg";
import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav id={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.primaryNavItems}>
          <li className={styles.menu}>
            <MenuIcon />
          </li>
          <li>About</li>
          <li>Platform</li>
          {/* <li>Media</li> */}
          <li>Get Involved</li>
        </ul>
        <picture className={styles.logo}>
          <Image
            src={"/gfx/PNLRU.png"}
            alt="Partido Nacional de la Raza Unida Party"
            width="170"
            height="100"
          />
        </picture>
        <div className={styles.btns}>
          <ButtonGroup>
            <Button colorScheme="blue" variant={"outline"}>
              Members
            </Button>
            <Button colorScheme="blue">Donate</Button>
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
