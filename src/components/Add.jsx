import React from "react";
import styles from "../styles/Add.module.css";

export default function Add() {
  return (
    <div className={styles.addContainer}>
      <input type="text" className={styles.textField} placeholder="Add Todo" />
      <button className={styles.button}>Add</button>
    </div>
  );
}
