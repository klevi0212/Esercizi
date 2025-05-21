import { useEffect } from "react";
import { useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h2>My form</h2>
      <input type="text" ref={inputRef} placeholder="Focused imput..." />
    </>
  );
}
