import "./App.css";
import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import TodoList from "./components/TodoList/TodoList";

const ColorPicker = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div className="App">
      <h1>Состояние компонента</h1>
      <Counter initialValue={100} />

      {/* <Dropdown /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
