import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.mode}>
        <BsFillMoonFill />
      </div>
      <div className={styles.filter}>
        <span>All</span>
        <span>Activity</span>
        <span>Completed</span>
      </div>
    </div>
  );
}
