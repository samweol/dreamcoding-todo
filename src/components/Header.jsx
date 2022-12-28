import React, { useContext, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [selected, setSelected] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.mode} onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill color="white" /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filter}>
        <span>
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            All
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span>
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Active
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span>
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Completed
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
      </div>
    </div>
  );
}
