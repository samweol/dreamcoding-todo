import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [list, setList] = useState([]);
  return (
    <Container>
      <Header />
      {list.map((item) => {
        return <Item title={item} />;
      })}
      <Add list={list} setList={setList} />
    </Container>
  );
}

export default App;
