import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [list, setList] = useState(initialList); //todo list

  return (
    <div>
      <Container>
        <Header />
        {list.map((item) => {
          return <Item item={item} list={list} setList={setList} />;
        })}
        <Add list={list} setList={setList} />
      </Container>
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
