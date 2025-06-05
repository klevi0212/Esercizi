import { useState } from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser() {
  const [username, setUsername] = useState();
  const [inputUsername, setInputUsername] = useState(null);
  const { user, error, isLoading, onRefresh } = useGithubUser(username);

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(inputUsername);
  }
  function handleChange(e) {
    setInputUsername(e.target.value);
  }
  if (error) return <div>Error : {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <button onClick={onRefresh}>Refresh</button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      {user && (
        <>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={80} />
        </>
      )}
      {/* <ul>
        {users.map((user) => (
          <li key={user.login}>
            {user.login}
            <img src={user.avatar_url} alt={user.login} width={80} />
          </li>
       ))}
      </ul> */}
    </>
  );
}
