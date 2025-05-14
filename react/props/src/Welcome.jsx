import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </>
  );
}
export default Welcome;
