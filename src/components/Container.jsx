import React, { useContext } from "react";
import styles from "../styles/Container.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Container({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.darkContainer : styles.lightContainer}>
      {children}
    </div>
  );
}
