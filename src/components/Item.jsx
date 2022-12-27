import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "../styles/Item.module.css";

export default function Item({ title, isChecked }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <label htmlFor="checkbox" className={styles.title}>
        {title}
      </label>
      <button className={styles.button}>
        <BsTrashFill />
      </button>
    </div>
  );
}
