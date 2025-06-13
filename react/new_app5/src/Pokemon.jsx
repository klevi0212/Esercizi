import useGetPokemon from "./useGetPokemon";

const Pokemon = (props) => {
  const { data, error, isLoading } = useGetPokemon(props.name);
  if (!data) {
    return <div>Nessun dato valido</div>;
  }
  if (error) {
    return <div>Error:`${error}`</div>;
  }
  if (isLoading) {
    return <div>Sta caricando:`${isLoading}`</div>;
  }
  return (
    <>
      <h2>{props.name}</h2>
      <img src={data.sprites.front_default} />
    </>
  );
};
export default Pokemon;
