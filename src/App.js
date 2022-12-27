import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [list, setList] = useState([]); //todo list
  return (
    <div>
      <Container>
        <Header />
        {list.map((item) => {
          return (
            <Item
              isChecked={item.isChecked}
              title={item.title}
              setList={setList}
            />
          );
        })}
        <Add list={list} setList={setList} />
      </Container>
    </div>
  );
}

export default App;

// list : {title, isChecked}
