import React, { useState } from "react";
import styles from "../styles/Add.module.css";

export default function Add({ list, setList }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addToDoList = () => {
    setList([...list, { title: title, isChecked: false }]);
    const input = document.getElementById("textField");
    input.value = null;
  };

  return (
    <div className={styles.addContainer}>
      <input
        type="text"
        className={styles.textField}
        placeholder="Add Todo"
        onChange={handleChange}
        id="textField"
      />
      <button className={styles.button} onClick={addToDoList}>
        Add
      </button>
    </div>
  );
}
