import { useState } from "react";
import styles from "./index.module.css";

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
  const passwordClass =
    password.length < 8 ? styles.loginButtonShort : styles.validPassword; //se la password ha meno di 8 caratteri prende lo
  // style della classe loginButtonShort altrimenti quello della classe validPassword

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
          placeholder="Your Username is..."
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Your Password is..."
        />
        <label>Remember me</label>
        <input type="checkbox" checked={remember} onChange={handleCheckbox} />
        <button
          type="submit"
          disabled={!password && !username}
          className={`${styles.button} ${passwordClass}`} //qui abbiamo una classe button che andiamo a concatenare con la costante
          // passwordClass trasfromata in classe
        >
          Login!
        </button>
        <button onClick={resetData} className={styles["button"]}>
          Reset
        </button>
      </form>
    </>
  );
}
