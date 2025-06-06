import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function useGetPokemon(pokemon) {
  const { data, error, isLoading } = useSWR(
    pokemon ? `https://pokeapi.co/api/v2/pokemon/${pokemon}` : null,
    fetcher
  );
  return { data, error, isLoading };
}
