// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
// The todos state variable should be an array of strings. The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.
// Clear the input every time a Todo is added to the todos array.
// Add a "reset" button that clears the todos array when clicked.
// Add a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the todos array.

import { useState } from "react";

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
      <h2>To Do List</h2>
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
    </>
  );
}
