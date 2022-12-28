import React, { useContext, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "../styles/Header.module.css";

export default function Header({ list, setList }) {
  const [selected, setSelected] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.mode} onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill color="white" /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filter}>
        <span
          onClick={() => {
            setList(list);
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            All
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span
          onClick={() => {
            const activeList = list.filter((item) => item.isChecked === false);
            setList(activeList);
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Active
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
        <span
          onClick={() => {
            const completedList = list.filter(
              (item) => item.isChecked === true
            );
            setList(completedList);
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Completed
          </div>
          {selected && <div className={styles.selected}></div>}
        </span>
      </div>
    </div>
  );
}
