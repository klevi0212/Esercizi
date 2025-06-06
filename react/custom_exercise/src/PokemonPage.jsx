import { useNavigate, useParams } from "react-router-dom";
import useGetPokemon from "./useGetPokemon";

export default function PokemonPage() {
  const { pokemon } = useParams();
  const { data, error, isLoading } = useGetPokemon(pokemon);
  const navigate = useNavigate();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Pokémon not found</p>;

  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} />
      <button onClick={() => navigate("/")}>Go to homepage</button>
    </>
  );
}
