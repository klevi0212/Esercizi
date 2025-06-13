import { useState } from "react";
import Pokemon from "./Pokemon";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFirstname(search);
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      <Pokemon name={firstname} />
    </>
  );
}
