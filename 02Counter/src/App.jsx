import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  function AddValue() {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
    console.log(counter);
  }
  function RemoveValue() {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
    console.log(counter);
  }
  return (
    <>
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="50" rx="100" ry="50" />
      </svg>
      <h1>Abhimanyu</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Counter value: {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
