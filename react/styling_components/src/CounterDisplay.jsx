import { useEffect, useState } from "react";
import styles from "./index.module.css";

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
      <div>
        <h2 style={{ fontSize: "25px", color: "red" }}>
          The value of the counter is : {counter}
        </h2>
        <button className={styles["button"]} onClick={handleCounterIncrement}>
          Increment
        </button>
      </div>
    </>
  );
}
