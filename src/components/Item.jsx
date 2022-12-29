import React, { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "../styles/Item.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Item({ item, list, setList }) {
  const { darkMode } = useContext(DarkModeContext);
  const deleteItem = () => {
    const tempList = list.filter((i) => i.title !== item.title);
    setList(tempList);
  };
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
        className={
          item.isChecked
            ? styles.checked
            : darkMode
            ? styles.darkTitle
            : styles.lightTitle
        }
      >
        {item.title}
      </label>
      <button
        className={darkMode ? styles.darkButton : styles.lightButton}
        onClick={deleteItem}
      >
        <BsTrashFill />
      </button>
    </div>
  );
}
