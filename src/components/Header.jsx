import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";
import styles from "../styles/Header.module.css";

export default function Header({ filterTitle, setFilterTitle }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.mode} onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill color="white" /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filter}>
        <span
          onClick={() => {
            setFilterTitle("All");
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            All
          </div>
          {filterTitle === "All" && <div className={styles.selected}></div>}
        </span>
        <span
          onClick={() => {
            setFilterTitle("Active");
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Active
          </div>
          {filterTitle === "Active" && <div className={styles.selected}></div>}
        </span>
        <span
          onClick={() => {
            setFilterTitle("Completed");
          }}
        >
          <div className={darkMode ? styles.darkTitle : styles.lightTitle}>
            Completed
          </div>
          {filterTitle === "Completed" && (
            <div className={styles.selected}></div>
          )}
        </span>
      </div>
    </div>
  );
}
