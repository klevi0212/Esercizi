import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setUsers((prev) => [...prev, search]);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
