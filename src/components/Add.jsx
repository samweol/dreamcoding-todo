import React, { useState, useContext } from "react";
import styles from "../styles/Add.module.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { v4 as uuidv4 } from "uuid";

export default function Add({ onAdd }) {
  const [title, setTitle] = useState("");
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    if (title.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), title, status: "active" });
    setTitle("");
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textField}
          placeholder="Add Todo"
          onChange={handleChange}
          id="textField"
          value={title}
        />
        <button className={darkMode ? styles.darkButton : styles.lightButton}>
          Add
        </button>
      </form>
    </div>
  );
}
