import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [list, setList] = useState(initialList); //todo list
  const [filterTitle, setFilterTitle] = useState("All");

  let tempList = list;
  if (filterTitle === "All") {
    tempList = list;
  } else if (filterTitle === "Active") {
    tempList = list.filter((item) => item.isChecked !== true);
  } else {
    tempList = list.filter((item) => item.isChecked === true);
  }

  return (
    <div>
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

// list : {title, isChecked}

const initialList = [
  {
    title: "공부하기",
    isChecked: false,
  },
  {
    title: "강의듣기",
    isChecked: false,
  },
  {
    title: "복습하기",
    isChecked: true,
  },
];
