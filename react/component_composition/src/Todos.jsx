import { useState } from "react";
import Container from "./Container";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodos() {
    setTodos([...todos, inputValue]); //copia la lista precedente e aggiunge l’elemento nuovo in fondo
    setInputValue(""); //svuota il campo input
  }
  function handleReset() {
    setTodos([]); // resetta la to do list
  }
  function handleDelete(i) {
    setTodos((prev) => {
      const copyTodos = [...prev]; // creiamo un nuovo array che è una copia di quello precedente
      copyTodos.splice(i, 1); //eliminiamo l'indice e li dicimo di eliminare un elemento
      // array.splice(inizio, quantiDaRimuovere);
      // inizio: indice da cui partire.
      // quantiDaRimuovere: quanti elementi togliere.
      return copyTodos;
    });
  }
  return (
    <>
      <Container title={<h2>Click to toggle the To Do List</h2>}>
        <ul>
          {todos.map((todo, i) => (
            <li key={`${todo}-${i}`}>
              {" "}
              {todo}
              <button onClick={handleDelete}>Delete the item</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a to do..."
        />
        <button type="button" onClick={handleAddTodos}>
          Add To Do
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </Container>
    </>
  );
}
