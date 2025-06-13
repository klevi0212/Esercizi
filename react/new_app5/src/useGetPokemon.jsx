import useSWR from "swr";
export default function useGetPokemon(firstname) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(
    firstname ? `https://pokeapi.co/api/v2/pokemon/${firstname}` : null,
    fetcher
  );
  return { data, error, isLoading };
}
