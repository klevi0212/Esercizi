import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchGithubUser() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchGithubUser(username);
  }, [username]);
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h3>Error: {error}</h3>}
      {data && (
        <div>
          <img
            src={data.avatar_url}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <h2>{data.name || "No name available"}</h2>
          <p>{data.login}</p>
        </div>
      )}
    </>
  );
}
