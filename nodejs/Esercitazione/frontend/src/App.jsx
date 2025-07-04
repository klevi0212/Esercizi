import { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:3000/");
      const data = await response.json();
      setServer(data);
    };
    getData();
  }, []);
  const [server, setServer] = useState(null);

  return (
    <>
      <h1>{server && server.message}</h1>
    </>
  );
}
