import { useState } from "react";

export default function LoginComponent({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRembember] = useState(false);
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleCheckbox(e) {
    console.log(e.target.value);
    setRembember(e.target.checked);
  }
  function resetData() {
    setUsername("");
    setPassword("");
    setRembember(false);
  }
  return (
    <>
      <form onSubmit={(e) => onLogin(e, username, password, remember)}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          value={username}
          onChange={handleUsername}
          placeholder="Username..."
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password..."
        />
        <label>Remember me</label>
        <input type="checkbox" checked={remember} onChange={handleCheckbox} />
        <button type="submit" disabled={!password && !username}>
          Login!
        </button>
        <button onClick={resetData}>Reset</button>
      </form>
    </>
  );
}
