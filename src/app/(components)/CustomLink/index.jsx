import React from "react";
import styles from "../../page.module.css";
import Button from "../Button";
const CustomLink = () => {
  return (
    <div className={styles.customTab}>
      <div className={styles.customTabHeader}>
        <h2>Customize your links</h2>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button title="+ Add New Link" />
    </div>
  );
};

export default CustomLink;
