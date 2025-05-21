// Create a FocusableInput component that renders an input tag. As soon as the component renders, the input tag should be focused automatically.
// Using StrictMode, create a component with an effect that prints a message only when the component is mounted the first time.
// Use a ref to keep track of whether the component is mounted or not.
import { useEffect } from "react";
import "./App.css";
import FocusableInput from "./FocusableInput";
import { useRef } from "react";

export default function App() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      console.log("The component is mounted for the first time ");
      mountedRef.current = true;
    }
  }, []);

  return (
    <>
      <FocusableInput />
    </>
  );
}
// useEffect(() => {
//     if (!mountedRef.current) {
//       console.log("The component is mounted for the first time");
//       mountedRef.current = true;
//     }
//   }, []);
