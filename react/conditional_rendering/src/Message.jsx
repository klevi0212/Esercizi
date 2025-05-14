import Age from "./Age";

const Message = ({ age }) => {
  return <p>{age > 18 ? <Age age={age} /> : "You are very young!"}</p>;
};
export default Message;
