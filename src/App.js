import "./App.css";
import Add from "./components/Add";
import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <Container>
      <Header />
      <Item />
      <Add />
    </Container>
  );
}

export default App;
