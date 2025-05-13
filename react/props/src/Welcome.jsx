import Age from "./Age";

function Welcome({ name }) {
  return (
    <>
      <p>
        Welcome <strong>{name}</strong>!
      </p>
      <Age age={30} />
    </>
  );
}
export default Welcome;
