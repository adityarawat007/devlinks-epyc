"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../../page.module.css";
import Button from "../Button";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.span}>
        <Image
          src="images/logo-devlinks-small.svg"
          width={32}
          height={32}
          alt="logo-devlinks"
        />
        <span className={styles.spanLogo}>devlinks</span>
      </div>
      <div>
        <Button title="Preview" />
      </div>
    </nav>
  );
};

export default Navbar;
