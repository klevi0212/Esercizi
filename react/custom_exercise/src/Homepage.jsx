import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [inputPokemon, setInputPokemon] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputPokemon) {
      navigate(`/${inputPokemon}`);
    }
  }
  function handleChange(e) {
    // console.log(e.target.value);
    setInputPokemon(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Get A Pokemon"
        />
        <button type="submit">Go and catch 'em all</button>
      </form>
    </>
  );
}
