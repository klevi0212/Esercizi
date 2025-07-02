import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:3000");
      const d = await response.json();
      setData(d);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Hello, World!</h1>
      <p>{data && data.message}</p>
    </>
  );
}
