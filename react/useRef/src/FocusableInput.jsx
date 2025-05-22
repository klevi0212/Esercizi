import { useEffect } from "react";
import { useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus(); //il ? è un simil operatore ternario
  }, []);
  return (
    <>
      <h2>My form</h2>
      <input type="text" ref={inputRef} placeholder="Focused imput..." />
    </>
  );
}
