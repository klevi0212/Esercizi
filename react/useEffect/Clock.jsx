import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Setting up clock interval");
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h2> Current time: {date.toLocaleTimeString()}</h2>;
}
