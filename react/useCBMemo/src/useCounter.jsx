import { useCallback, useState } from "react";

export default function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }
  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }
  function handleReset() {
    setCounter(initialValue);
  }
  const increment = useCallback(handleIncrement, []);
  const decrement = useCallback(handleDecrement, []);
  const reset = useCallback(handleReset, [initialValue]);

  return { counter, increment, decrement, reset };
}
