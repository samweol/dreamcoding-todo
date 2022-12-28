import React, { useContext, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [selected, setSelected] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.header}>
      <div className={styles.mode} onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filter}>
        <span>
          <div className={styles.title}>All</div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span>
          <div className={styles.title}>Active</div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span>
          <div className={styles.title}>Completed</div>
          {selected && <div className={styles.selected}></div>}
        </span>
      </div>
    </div>
  );
}
