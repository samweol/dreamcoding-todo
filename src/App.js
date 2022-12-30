import { useEffect, useState } from "react";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import { DarkModeProvider } from "./context/DarkModeContext";
import styles from "./App.module.css";

function App() {
  const [list, setList] = useState(() => readListFromLocalStorage());
  const [filterTitle, setFilterTitle] = useState("All");

  //추가, 수정, 삭제에 따른 콜백함수
  const handleAdd = (item) => {
    setList([...list, item]);
  };

  const handleUpdate = (item) => {
    setList(list.map((i) => (i.id === item.id ? item : i)));
  };

  const handleDelete = (item) => {
    setList(list.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  let tempList = list;
  if (filterTitle === "All") {
    tempList = list;
  } else if (filterTitle === "Active") {
    tempList = list.filter((item) => item.status === "active");
  } else {
    tempList = list.filter((item) => item.status === "completed");
  }

  return (
    <div className={styles.container}>
      <DarkModeProvider>
        <Container>
          <Header setFilterTitle={setFilterTitle} filterTitle={filterTitle} />
          {tempList.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            );
          })}
          <Add onAdd={handleAdd} />
        </Container>
      </DarkModeProvider>
    </div>
  );
}

export default App;

// 로컬 스토리지에서 리스트 받아오는 함수
function readListFromLocalStorage() {
  const list = localStorage.getItem("list");
  // 로컬 스토리지에 저장되어있는 값이 없을 때 null 값이 넘어오므로 반드시 빈배열로 return 해줘야 에러가 발생하지 않는다.
  return list ? JSON.parse(list) : [];
}
