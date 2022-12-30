import React, { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "../styles/Item.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Item({ item, onUpdate, onDelete }) {
  const { id, title, status } = item;
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...item, status });
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={
          status === "completed"
            ? styles.checked
            : darkMode
            ? styles.darkTitle
            : styles.lightTitle
        }
      >
        {title}
      </label>
      <button
        className={darkMode ? styles.darkButton : styles.lightButton}
        onClick={handleDelete}
      >
        <BsTrashFill />
      </button>
    </div>
  );
}
