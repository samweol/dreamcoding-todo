import React from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "../styles/Item.module.css";

export default function Item() {
  return (
    <div className={styles.item}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className={styles.title}>
        강의 보기
      </label>
      <button className={styles.button}>
        <BsTrashFill />
      </button>
    </div>
  );
}
