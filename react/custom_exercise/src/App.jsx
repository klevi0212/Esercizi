// Creare un'applicazione con le seguenti feature,
// Pagina homepage con al suo interno un form di ricerca e un tasto submit, al click del bottone vi deve mandare una pagina interna,
// della vostra applicazione (es: localhost:8000/pikachu) con useNavigate
// const navigate = useNavigate();
// navigate('/targetpath')
// navigate('/path', { replace: true });
// All'interno della pagina specifica del pokemon bisogna ricavarsi il nome del pokemon attraverso i params e fare,
// una fetch con un hook custom chiamato useGetPokemon che utilizzerà a sua volta l'hook useSWR.

import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import PokemonPage from "./PokemonPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:pokemon" element={<PokemonPage />} />
      </Routes>
    </>
  );
}
