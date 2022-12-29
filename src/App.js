import { useEffect, useState } from "react";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import { DarkModeProvider } from "./context/DarkModeContext";
import styles from "./App.module.css";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("initialList"))
  );
  const [filterTitle, setFilterTitle] = useState("All");

  useEffect(() => {
    localStorage.setItem("initialList", JSON.stringify(list));
  }, [list]);

  let tempList = list;
  if (filterTitle === "All") {
    tempList = list;
  } else if (filterTitle === "Active") {
    tempList = list.filter((item) => item.isChecked !== true);
  } else {
    tempList = list.filter((item) => item.isChecked === true);
  }

  return (
    <div className={styles.container}>
      <DarkModeProvider>
        <Container>
          <Header setFilterTitle={setFilterTitle} filterTitle={filterTitle} />
          {tempList.map((item) => {
            return <Item item={item} list={list} setList={setList} />;
          })}
          <Add list={list} setList={setList} />
        </Container>
      </DarkModeProvider>
    </div>
  );
}

export default App;
