"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";

import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <div id={styles.container}>
        <ul>
          <li>[]</li>
          <li>About</li>
          <li>Platform</li>
          {/* <li>Media</li> */}
          <li>Get Involved</li>
        </ul>
        <div />
        <div>
          <ButtonGroup>
            <Button colorScheme="blue">Donate</Button>
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
