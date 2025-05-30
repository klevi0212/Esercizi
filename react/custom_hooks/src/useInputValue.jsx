import { useState } from "react";

export default function useInputValue() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return {
    username,
    password,
    handleUsername,
    handlePassword,
  };
}
