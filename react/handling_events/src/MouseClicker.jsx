export default function MouseClicker() {
  function printName(event) {
    console.log(event.target.name);
  }
  function printImage(event) {
    console.log(event.target.src);
  }
  return (
    <>
      <button onClick={printName} name="one">
        Print Your Name
      </button>
      <button onClick={printImage} name="two">
        <img src="peonie.jpg" style={{ width: "60px", height: "60px" }} />
      </button>
    </>
  );
}
