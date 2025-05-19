import { useEffect, useState } from "react";

export default function Counter({ initialValue = 0, changeValue = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + changeValue);
  }
  useEffect(() => {
    console.log(`The value of the counter is: ${counter}`);
  }, [counter]);

  return (
    <>
      <h2>The value of the counter is : {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </>
  );
}
