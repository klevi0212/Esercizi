import { useState } from "react";

export default function Counter({ initialValue, changeValue }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + changeValue);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - changeValue);
  }
  function handleCounterReset() {
    setCounter(initialValue);
  }
  return (
    <>
      <h2>Counter:{counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </>
  );
}
