import React, { useState } from "react";
import styles from "../styles/Add.module.css";

export default function Add({ list, setList }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addToDoList = () => {
    setList([...list, title]);
  };

  console.log(title);
  return (
    <div className={styles.addContainer}>
      <input
        type="text"
        className={styles.textField}
        placeholder="Add Todo"
        onChange={handleChange}
      />
      <button className={styles.button} onClick={addToDoList}>
        Add
      </button>
    </div>
  );
}
