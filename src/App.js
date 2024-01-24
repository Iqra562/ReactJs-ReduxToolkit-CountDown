import { useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter/Counter";

function App() {
  const count = useSelector((state)=>state.counter.count);

  return (
    <div className="App">
<Counter/>         
    </div>
  );
}

export default App;
