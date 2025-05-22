import Colors from "./Colors";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Colors List</h1>
      <Colors
        colors={[
          { id: 1, name: "red" },
          { id: 2, name: "blue" },
          { id: 3, name: "green" },
          { id: 4, name: "pink" },
          { id: 5, name: "purple" },
        ]}
      />
    </>
  );
}
