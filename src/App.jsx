import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DragAndDrop from "./components/DragAndDrop";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DragAndDrop />
    </>
  );
}

export default App;
