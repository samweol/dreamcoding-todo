import React from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "../styles/Item.module.css";

export default function Item({ item, list, setList }) {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        id="checkbox"
        checked={item.isChecked}
        onChange={() => {
          const changeItem = { title: item.title, isChecked: !item.isChecked };
          const tempList = list.filter((i) => i.title !== item.title);
          setList([...tempList, changeItem]);
        }}
      />
      <label
        htmlFor="checkbox"
        className={item.isChecked ? styles.checked : styles.title}
      >
        {item.title}
      </label>
      <button className={styles.button} onClick={() => {}}>
        <BsTrashFill />
      </button>
    </div>
  );
}
