import React, { useState, useContext } from "react";
import styles from "../styles/Add.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Add({ list, setList }) {
  const [title, setTitle] = useState("");
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addToDoList = () => {
    setList([...list, { title: title, isChecked: false }]);
    const input = document.getElementById("textField");
    input.value = null;
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <input
        type="text"
        className={styles.textField}
        placeholder="Add Todo"
        onChange={handleChange}
        id="textField"
      />
      <button
        className={darkMode ? styles.darkButton : styles.lightButton}
        onClick={addToDoList}
      >
        Add
      </button>
    </div>
  );
}
